import request from "supertest";
import app from "./index";

describe("GET /", () => {
  it("should return the welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello World 👋");
  });
});
