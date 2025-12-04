import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const EventPlain = t.Object(
  {
    id: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
    type: t.Union(
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
    ),
    title: t.String(),
    description: __nullable__(t.String()),
    image: __nullable__(t.String()),
    date: t.Date(),
    location: t.String(),
  },
  { additionalProperties: false },
);

export const EventRelations = t.Object(
  {
    Attendance: t.Array(
      t.Object(
        {
          id: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          profileId: t.String(),
          eventId: t.String(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const EventWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          type: t.Union(
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
          ),
          title: t.String(),
          description: t.String(),
          image: t.String(),
          date: t.Date(),
          location: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "Event" },
  ),
);

export const EventWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.String() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.String() })], {
          additionalProperties: false,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              id: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
              type: t.Union(
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
              ),
              title: t.String(),
              description: t.String(),
              image: t.String(),
              date: t.Date(),
              location: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Event" },
);

export const EventSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      type: t.Boolean(),
      title: t.Boolean(),
      description: t.Boolean(),
      image: t.Boolean(),
      date: t.Boolean(),
      location: t.Boolean(),
      Attendance: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const EventInclude = t.Partial(
  t.Object(
    { type: t.Boolean(), Attendance: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const EventOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      title: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      location: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Event = t.Composite([EventPlain, EventRelations], {
  additionalProperties: false,
});
