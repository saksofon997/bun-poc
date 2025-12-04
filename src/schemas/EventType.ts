import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const EventType = t.Union(
  [
    t.Literal("CONCERT"),
    t.Literal("MOVIE"),
    t.Literal("STANDUP"),
    t.Literal("EXHIBITION"),
    t.Literal("FESTIVAL"),
    t.Literal("CONFERENCE"),
    t.Literal("WORKSHOP"),
    t.Literal("OTHER"),
  ],
  { additionalProperties: false },
);
