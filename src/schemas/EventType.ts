import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const EventType = t.Union(
  [
    t.Literal("CONCERT"),
    t.Literal("MOVIE"),
    t.Literal("STANDUP"),
    t.Literal("OTHER"),
  ],
  { additionalProperties: false },
);
