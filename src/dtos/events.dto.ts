import { EventType } from "@prisma/client";
import { t } from "elysia";
import { Event } from "@schemas/Event";

export const GetEventsDTO = {
  query: t.Object({
    type: t.Optional(t.Enum(EventType)),
  }),
  detail: {
    summary: "Get events with optional query filters.",
    tags: ["events"],
  },
  response: {
    204: t.Object({ data: t.Array(Event) }),
  },
};

export const GetEventDTO = {
  params: t.Object({
    id: t.String({ format: "uuid" }),
  }),
  detail: {
    summary: "Get event by ID.",
    tags: ["events"],
  },
  response: {
    204: t.Object({ data: t.Array(Event) }),
  },
};
