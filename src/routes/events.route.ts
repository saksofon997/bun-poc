import Router from "elysia";

import { Routes } from "@/utils/interfaces";
import EventsController from "@/controllers/events.controller";
import {
  GetEventDTO,
  GetEventsByFriendDTO,
  GetEventsDTO,
} from "@/dtos/events.dto";

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
      this.eventsController.getEvents.bind(this.eventsController) as any,
      GetEventsDTO
    );
    this.router.get(
      `${this.path}/:id`,
      this.eventsController.getEvent.bind(this.eventsController) as any,
      GetEventDTO
    );
    this.router.get(
      `${this.path}/friend/:id`,
      this.eventsController.getEventsByFriend.bind(this.eventsController) as any,
      GetEventsByFriendDTO
    );
  }
}
