import App from "../../app";
import EventsRoute from "../../routes/events.route";
import IndexRoute from "../../routes/index.route";

export const getApp = () => {
  return new App([new IndexRoute(), new EventsRoute()]);
};
