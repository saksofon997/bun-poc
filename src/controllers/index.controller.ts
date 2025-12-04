import { Context } from "elysia";

export default class IndexController {
  public async getIndex(_context: Context) {
    return `${Bun.env.npm_package_version} ${Bun.env.NODE_ENV}`;
  }
}
