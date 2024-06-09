import Router from "elysia";

import { Routes } from "@/utils/interfaces";
import IndexController from "@/controllers/index.controller";

export default class IndexRoute implements Routes {
  public path = "/health";
  public router = new Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.getIndex);
  }
}
