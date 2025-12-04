import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { cors } from "@elysiajs/cors";
import { Routes } from "@/utils/interfaces";
import { toErrorResponse, toResponse } from "@/utils/utils";

export default class App {
  public app: Elysia;
  public env: string;
  public port: string;
  public version: string;

  constructor(routes: Routes[]) {
    this.app = new Elysia();

    this.env = Bun.env.NODE_ENV ?? "development";
    this.port = Bun.env.PORT ?? "3005";
    this.version = Bun.env.npm_package_version ?? "0.0.0";

    this.usePlugins();

    this.registerHooks();

    this.setRoutes(routes);
  }

  private usePlugins() {
    this.app.use(cors());

    this.app.use(
      swagger({
        documentation: {
          info: {
            title: "bUnified Documentation",
            version: this.version,
          },
        },
        path: "/api-docs",
      })
    );
  }

  private registerHooks() {
    this.app.onStart(() => {
      console.log(
        `bUnified is running at ${this.app.server?.hostname}:${this.app.server?.port}. Environment: ${this.env}`
      );
    });

    this.app.mapResponse(({ response, set }) => {
      const isJson = typeof response === "object";

      const textResponse =
        typeof response === "object"
          ? JSON.stringify(toResponse(response))
          : (response?.toString() ?? "");

      set.headers["Content-Encoding"] = "gzip";

      return new Response(Bun.gzipSync(textResponse), {
        headers: {
          "Content-Type": `${
            isJson ? "application/json" : "text/plain"
          }; charset=utf-8`,
        },
      });
    });

    this.app.onError((context) => {
      return toErrorResponse(context.error);
    });

    this.app.onBeforeHandle(() => {
      // Authentication
      console.log("Authentication...");
    });
  }

  private setRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use(route.router);
    });
  }

  public listen() {
    return this.app.listen(this.port);
  }

  public getRequestHandler(req: Request) {
    return this.app.handle(req);
  }
}
