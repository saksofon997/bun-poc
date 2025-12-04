import Router from "elysia";

import { Routes } from "@/utils/interfaces";
import AttendanceController from "@/controllers/attendance.controller";
import {
  GetEventAttendanceDTO,
  PostAttendanceDTO,
} from "@/dtos/attendance.dto";

export default class AttendanceRoute implements Routes {
  public path = "/attendance";
  public router = new Router();
  public attendanceController = new AttendanceController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      this.attendanceController.postAttendance.bind(this.attendanceController) as any,
      PostAttendanceDTO
    );
    this.router.get(
      `${this.path}/:id`,
      this.attendanceController.getEventAttendance.bind(this.attendanceController) as any,
      GetEventAttendanceDTO
    );
  }
}
