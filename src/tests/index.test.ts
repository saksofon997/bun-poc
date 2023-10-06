import { expect, test, describe } from "bun:test";
import { getApp } from "./fixtures/fixtures";

describe("Health check", () => {
  test("/health", async () => {
    const app = getApp();

    const res = await app
      .getRequestHandler(new Request("http://localhost/health"))
      .then((res) => res.text());

    expect(JSON.parse(res).data).toEqual("0.0.1 test");
  });
});
