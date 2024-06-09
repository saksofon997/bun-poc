import { getEventById, getEvents } from "@/services/events.service";
import { EventType } from "@prisma/client";
import { Context } from "elysia";

export default class EventsController {
  public getEvents = async (context: Context) => {
    const eventType = context.query.type as EventType;

    const events = await getEvents(eventType);

    return events;
  };

  public getEvent = async (context: Context) => {
    const event = await getEventById(context.params["id"]);

    return event;
  };
}
