import { Context } from "elysia";
import {
  getEventAttendanceByEventId,
  postAttendance,
} from "@/services/attendance.service";
import { Prisma } from "@prisma/client";

export default class AttendanceController {
  public postAttendance = async (context: Context) => {
    const requestData = context.body as Prisma.AttendanceCreateInput;

    await postAttendance(requestData);

    return true;
  };

  public getEventAttendance = async (context: Context) => {
    return await getEventAttendanceByEventId(context.params["id"]);
  };
}
