import { db } from "@/database/db";

export async function postAttendance(requestData: {
  profileId: string;
  eventId: string;
}) {
  return await db.attendance.create({
    data: {
      profileId: requestData.profileId,
      eventId: requestData.eventId,
    },
  });
}

export async function getEventAttendanceByEventId(eventId: string) {
  return await db.attendance.findFirstOrThrow({
    where: {
      eventId,
    },
  });
}
