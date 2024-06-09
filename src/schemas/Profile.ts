import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const ProfilePlain = t.Object(
  {
    id: t.String({ additionalProperties: false }),
    name: __nullable__(t.String({ additionalProperties: false })),
    bio: __nullable__(t.String({ additionalProperties: false })),
    image: __nullable__(t.String({ additionalProperties: false })),
    userId: t.String({ additionalProperties: false }),
  },
  { additionalProperties: false },
);

export const ProfileRelations = t.Object(
  {
    user: t.Object(
      {
        id: t.String({ additionalProperties: false }),
        email: t.String({ additionalProperties: false }),
      },
      { additionalProperties: false },
    ),
    Attendance: t.Array(
      t.Object(
        {
          id: t.String({ additionalProperties: false }),
          createdAt: t.Date({ additionalProperties: false }),
          updatedAt: t.Date({ additionalProperties: false }),
          profileId: t.String({ additionalProperties: false }),
          eventId: t.String({ additionalProperties: false }),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const Profile = t.Composite([ProfilePlain, ProfileRelations], {
  additionalProperties: false,
});
