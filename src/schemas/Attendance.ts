import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const AttendancePlain = t.Object(
  {
    id: t.String({ additionalProperties: false }),
    createdAt: t.Date({ additionalProperties: false }),
    updatedAt: t.Date({ additionalProperties: false }),
    profileId: t.String({ additionalProperties: false }),
    eventId: t.String({ additionalProperties: false }),
  },
  { additionalProperties: false },
);

export const AttendanceRelations = t.Object(
  {
    profile: t.Object(
      {
        id: t.String({ additionalProperties: false }),
        name: __nullable__(t.String({ additionalProperties: false })),
        bio: __nullable__(t.String({ additionalProperties: false })),
        image: __nullable__(t.String({ additionalProperties: false })),
        userId: t.String({ additionalProperties: false }),
      },
      { additionalProperties: false },
    ),
    event: t.Object(
      {
        id: t.String({ additionalProperties: false }),
        createdAt: t.Date({ additionalProperties: false }),
        updatedAt: t.Date({ additionalProperties: false }),
        type: t.Union(
          [
            t.Literal("CONCERT"),
            t.Literal("MOVIE"),
            t.Literal("STANDUP"),
            t.Literal("OTHER"),
          ],
          { additionalProperties: false },
        ),
        title: t.String({ additionalProperties: false }),
        description: __nullable__(t.String({ additionalProperties: false })),
        image: __nullable__(t.String({ additionalProperties: false })),
        date: t.Date({ additionalProperties: false }),
        location: t.String({ additionalProperties: false }),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const Attendance = t.Composite([AttendancePlain, AttendanceRelations], {
  additionalProperties: false,
});
