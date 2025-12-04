import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const AttendancePlain = t.Object(
  {
    id: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
    profileId: t.String(),
    eventId: t.String(),
  },
  { additionalProperties: false },
);

export const AttendanceRelations = t.Object(
  {
    profile: t.Object(
      {
        id: t.String(),
        name: __nullable__(t.String()),
        bio: __nullable__(t.String()),
        image: __nullable__(t.String()),
        userId: t.String(),
      },
      { additionalProperties: false },
    ),
    event: t.Object(
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
    ),
  },
  { additionalProperties: false },
);

export const AttendanceWhere = t.Partial(
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
          profileId: t.String(),
          eventId: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "Attendance" },
  ),
);

export const AttendanceWhereUnique = t.Recursive(
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
              profileId: t.String(),
              eventId: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Attendance" },
);

export const AttendanceSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      profile: t.Boolean(),
      event: t.Boolean(),
      profileId: t.Boolean(),
      eventId: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const AttendanceInclude = t.Partial(
  t.Object(
    { profile: t.Boolean(), event: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const AttendanceOrderBy = t.Partial(
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
      profileId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      eventId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Attendance = t.Composite([AttendancePlain, AttendanceRelations], {
  additionalProperties: false,
});
