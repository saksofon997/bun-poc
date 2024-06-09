import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function postAttendance(requestData) {
  return await prisma.attendance.create({
    data: requestData,
  });
}

export async function getEventAttendanceByEventId(eventId: string) {
  return await prisma.attendance.findFirstOrThrow({
    where: {
      eventId,
    },
  });
}
