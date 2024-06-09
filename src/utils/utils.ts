import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

export const isEmpty = (value: string | number | object | boolean): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== "number" && value === "") {
    return true;
  } else if (typeof value === "undefined" || value === undefined) {
    return true;
  } else if (
    value !== null &&
    typeof value === "object" &&
    !Object.keys(value).length
  ) {
    return true;
  } else if (
    typeof value === "boolean" &&
    (value === undefined || value === null)
  ) {
    return true;
  } else {
    return false;
  }
};

export const toResponse = (object: unknown): Object => {
  if (Array.isArray(object)) {
    return { data: object };
  } else if (isEmpty(object as any)) {
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
