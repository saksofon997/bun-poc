import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const UserPlain = t.Object(
  {
    id: t.String({ additionalProperties: false }),
    email: t.String({ additionalProperties: false }),
  },
  { additionalProperties: false },
);

export const UserRelations = t.Object(
  {
    profile: __nullable__(
      t.Object(
        {
          id: t.String({ additionalProperties: false }),
          name: __nullable__(t.String({ additionalProperties: false })),
          bio: __nullable__(t.String({ additionalProperties: false })),
          image: __nullable__(t.String({ additionalProperties: false })),
          userId: t.String({ additionalProperties: false }),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const User = t.Composite([UserPlain, UserRelations], {
  additionalProperties: false,
});
