import App from "./app";
import EventsRoute from "./routes/events.route";
import IndexRoute from "./routes/index.route";

const app = new App([new IndexRoute(), new EventsRoute()]);

app.listen();
