import { EventType } from "@prisma/client";
import { db } from "@/database/db";

export async function getEvents(type: EventType) {
  return await db.event.findMany({
    where: {
      type,
      date: {
        gt: new Date(),
      },
    },
  });
}

export async function getEventById(id: string) {
  return await db.event.findUniqueOrThrow({
    where: {
      id,
    },
  });
}

export async function getEventsByFriendId(id: string) {
  return await db.event.findMany({
    where: {
      Attendance: {
        every: {
          profileId: id,
        },
      },
    },
  });
}
