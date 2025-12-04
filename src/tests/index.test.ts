import { expect, test, describe } from "bun:test";
import { getApp } from "./fixtures/fixtures";

describe("Health check", () => {
  test("/health", async () => {
    const app = getApp();

    const res = await app.getRequestHandler(
      new Request("http://localhost:3005/health")
    );

    const gzippedBody = new Uint8Array(await res.arrayBuffer());
    const text = new TextDecoder().decode(Bun.gunzipSync(gzippedBody));
    const contentType = res.headers.get("Content-Type");
    const isJson = contentType?.includes("application/json") ?? false;
    const data = isJson ? JSON.parse(text) : { data: text };

    expect(data.data).toEqual(
      `${Bun.env.npm_package_version} ${Bun.env.NODE_ENV}`
    );
  });
});
