import { expect, test, describe } from "bun:test";
import { getApp } from "./fixtures/fixtures";

describe("Health check", () => {
  test("/health", async () => {
    const app = getApp();

    const res = await app
      .getRequestHandler(new Request("http://localhost/health"))
      .then((res) => res.text());

    console.log(res);
  });
});
