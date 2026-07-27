import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../../src/app";

describe("POST /customers", () => {
  it("should create a customer", async () => {
    const response = await request(app)
      .post("/customers")
      .send({
        name: "Leonardo Xavier",
        email: "leo@example.com"
      });

    expect(response.status).toBe(201);
    expect(response.body.data.name).toBe("Leonardo Xavier");
    expect(response.body.data.email).toBe("leo@example.com");
    expect(response.body.data.id).toEqual(expect.any(String));
    expect(response.body.data.createdAt).toEqual(expect.any(String));
  });
});