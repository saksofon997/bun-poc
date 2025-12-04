import { Context } from "elysia";
import {
  getEventAttendanceByEventId,
  postAttendance,
} from "@/services/attendance.service";
import {
  PostAttendanceInput,
} from "@/dtos/attendance.dto";

export default class AttendanceController {
  public async postAttendance(context: Context) {
    const requestData: PostAttendanceInput = context.body as PostAttendanceInput;

    await postAttendance(requestData);

    return true;
  }

  public async getEventAttendance(
    context: Context
  ) {
    const eventAttendance = await getEventAttendanceByEventId(context.params.id as string);

    return eventAttendance;
  }
}
