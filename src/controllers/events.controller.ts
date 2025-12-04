import { getEventById, getEvents, getEventsByFriendId } from "@/services/events.service";
import { EventType } from "@prisma/client";
import { Context } from "elysia";

export default class EventsController {
  public async getEvents(context: Context) {
    const eventType = context.query.type as EventType;

    const events = await getEvents(eventType);

    return events;
  }

  public async getEvent(context: Context) {
    const event = await getEventById(context.params.id as string);

    return event;
  }

  public async getEventsByFriend(context: Context) {
    const events = await getEventsByFriendId(context.params.id as string);

    return events;
  }
}
