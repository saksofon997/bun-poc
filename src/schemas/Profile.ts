import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ProfilePlain = t.Object(
  {
    id: t.String(),
    name: __nullable__(t.String()),
    bio: __nullable__(t.String()),
    image: __nullable__(t.String()),
    userId: t.String(),
  },
  { additionalProperties: false },
);

export const ProfileRelations = t.Object(
  {
    user: t.Object(
      { id: t.String(), email: t.String() },
      { additionalProperties: false },
    ),
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

export const ProfileWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          bio: t.String(),
          image: t.String(),
          userId: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "Profile" },
  ),
);

export const ProfileWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), userId: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.String() }), t.Object({ userId: t.String() })],
          { additionalProperties: false },
        ),
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
              name: t.String(),
              bio: t.String(),
              image: t.String(),
              userId: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Profile" },
);

export const ProfileSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      bio: t.Boolean(),
      image: t.Boolean(),
      user: t.Boolean(),
      userId: t.Boolean(),
      Attendance: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ProfileInclude = t.Partial(
  t.Object(
    { user: t.Boolean(), Attendance: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const ProfileOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      bio: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      userId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Profile = t.Composite([ProfilePlain, ProfileRelations], {
  additionalProperties: false,
});
