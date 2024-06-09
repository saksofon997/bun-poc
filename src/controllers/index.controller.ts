import { Context } from "elysia";

export default class IndexController {
  public getIndex = async (context: Context) => {
    return `${Bun.env.npm_package_version} ${Bun.env.NODE_ENV}`;
  };
}
