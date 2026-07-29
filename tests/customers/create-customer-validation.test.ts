import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../../src/app";
import { listCustomers } from "../../src/customers/customer.repository";

describe("POST /customers", () => {
    it("should return 400 when name is missing", async () => {

        const before = listCustomers().length;

        const response = await request(app)
            .post("/customers")
            .send({
                email: "leo@example.com"
            });

        const after = listCustomers().length;

        expect(response.status).toBe(400);
        expect(after).toBe(before);
    });
    it("should return 400 when email is missing", async () => {

        const before = listCustomers().length;

        const response = await request(app)
            .post("/customers")
            .send({
                name: "Leonardo"
            });

        const after = listCustomers().length;

        expect(response.status).toBe(400);
        expect(after).toBe(before);
    });
    it("should return 400 when name is empty", async () => {

        const before = listCustomers().length;

        const response = await request(app)
            .post("/customers")
            .send({
                name: "",
                email: "leo@example.com"
            });

        const after = listCustomers().length;

        expect(response.status).toBe(400);
        expect(after).toBe(before);
    });

    it("should return 400 when email is empty", async () => {

        const before = listCustomers().length;

        const response = await request(app)
            .post("/customers")
            .send({
                name: "Leonardo",
                email: ""
            });

        const after = listCustomers().length;

        expect(response.status).toBe(400);
        expect(after).toBe(before);
    });
});