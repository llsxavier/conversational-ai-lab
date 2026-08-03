import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../../src/app.js";

describe("GET /customers/:id", () => {
    it("returns a customer by ID", async () => {
        const createResponse = await request(app)
            .post("/customers")
            .send({
                name: "Leonardo Xavier",
                email: "leo@example.com"
            });

        const customerId = createResponse.body.data.id;

        const response = await request(app).get(`/customers/${customerId}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            data: createResponse.body.data
        });
    });

    it("returns a 404 error if customer is not found", async () => {
        const response = await request(app).get("/customers/999");

        expect(response.status).toBe(404);
        expect(response.body).toEqual({
            error: "Customer not found"
        });
    });
});
