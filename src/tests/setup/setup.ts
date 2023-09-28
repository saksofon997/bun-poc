import { beforeAll } from "bun:test";

beforeAll(() => {
  Bun.env.NODE_ENV = "test";
  Bun.env.npm_package_version = "0.0.0";
  Bun.env.PORT = "3005";
  Bun.env.DB_URL = "postgres://postgres:adminadmin@0.0.0.0:5440/db";
});
