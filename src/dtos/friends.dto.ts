import { t } from "elysia";
import { Event } from "@schemas/Event";

export const AddFriendDTO = {
  body: t.Object({
    id: t.String({ format: "uuid" }),
  }),
  detail: {
    summary: "Add friend.",
    tags: ["friends"],
  },
  response: {
    204: t.Object({ data: t.Boolean() }),
  },
};

export const GetFriendDTO = {
  params: t.Object({
    id: t.String({ format: "uuid" }),
  }),
  detail: {
    summary: "Get friend by id.",
    tags: ["friends"],
  },
  response: {
    204: t.Object({ data: t.Array(Event) }),
  },
};

export const GetFriendsDTO = {
  params: t.Object({
    page: t.Number({ minimum: 1 }),
  }),
  detail: {
    summary: "Get friends paginated.",
    tags: ["friends"],
  },
  response: {
    204: t.Object({ data: t.Array(Event) }),
  },
};
