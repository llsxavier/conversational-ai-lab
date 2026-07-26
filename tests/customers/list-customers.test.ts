import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../../src/app.js";

describe("GET /customers", () => {
  it("returns an empty customer list", async () => {
    const response = await request(app).get("/customers");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: [],
      total: 0
    });
  });
});
