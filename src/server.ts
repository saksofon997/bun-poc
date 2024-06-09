import App from "@/app";
import EventsRoute from "@/routes/events.route";
import IndexRoute from "@/routes/index.route";
import AttendanceRoute from "@/routes/attendance.route";

const app = new App([
  new IndexRoute(),
  new EventsRoute(),
  new AttendanceRoute(),
]);

app.listen();
