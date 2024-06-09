import Router from "elysia";

import { Routes } from "@/utils/interfaces";
import EventsController from "@/controllers/events.controller";
import { GetEventDTO, GetEventsDTO } from "@/dtos/events.dto";

export default class EventsRoute implements Routes {
  public path = "/events";
  public router = new Router();
  public eventsController = new EventsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}`,
      this.eventsController.getEvents,
      GetEventsDTO
    );
    this.router.get(
      `${this.path}/:id`,
      this.eventsController.getEvent,
      GetEventDTO
    );
  }
}
