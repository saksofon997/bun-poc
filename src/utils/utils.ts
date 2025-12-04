import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/client";

export const toResponse = (object: unknown): Object => {
  if (Array.isArray(object)) {
    return { data: object };
  } else if (object === null || object === undefined || object === "" || Object.keys(object).length === 0) {
    return { data: null };
  } else if (
    typeof object === "string" ||
    typeof object === "boolean" ||
    typeof object === "number"
  ) {
    return { data: object };
  } else {
    return { data: { ...(object as any) } };
  }
};

export const toErrorResponse = (object: any): Object => {
  if (object instanceof PrismaClientValidationError) {
    return { error: JSON.parse(object.message).message, code: 400 };
  } else if (object instanceof PrismaClientKnownRequestError) {
    return { error: object.message, code: 500 };
  } else {
    return { error: object, code: 500 };
  }
};
