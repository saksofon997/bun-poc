import { t } from "elysia";
import { Event } from "@schemas/Event";

export const PostAttendanceDTO = {
  body: t.Object({
    eventId: t.String({ format: "uuid" }),
    profileId: t.String({ format: "uuid" }),
  }),
  detail: {
    summary: "Post event attendance.",
    tags: ["attendance"],
  },
  response: {
    204: t.Object({ data: t.Boolean() }),
  },
};

export const GetEventAttendanceDTO = {
  params: t.Object({
    id: t.String({ format: "uuid" }),
  }),
  detail: {
    summary: "Get event attendance by event ID.",
    tags: ["attendance"],
  },
  response: {
    204: t.Object({ data: t.Array(Event) }),
  },
};
