import { getEventById, getEvents } from "@/services/events.service";
import { EventType } from "@prisma/client";
import { Context } from "elysia";

export default class FriendsController {
  public async addFriend(context: Context) {
    const eventType = context.query.type as EventType;

    const events = await getEvents(eventType);

    return events;
  }

  public async getFriend(context: Context) {
    const event = await getEventById(context.params.id as string);

    return event;
  }

  public async getFriends(context: Context) {
    const event = await getEventById(context.params.id as string);

    return event;
  }
}
