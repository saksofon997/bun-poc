export default class IndexController {
  public getIndex = async (context: any) => {
    return `${Bun.env.npm_package_version} ${Bun.env.NODE_ENV}`;
  };
}
