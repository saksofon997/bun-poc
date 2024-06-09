import { EventType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getEvents(type: EventType) {
  return await prisma.event.findMany({
    where: {
      type,
    },
  });
}

export async function getEventById(id: string) {
  return await prisma.event.findUniqueOrThrow({
    where: {
      id,
    },
  });
}
