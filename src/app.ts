import express from "express";
import { listCustomers, createCustomer } from "./customers/customer.repository";

export const app = express();

app.use(express.json());

app.get("/health", (_request, response) => {
  response.status(200).json({ status: "ok" });
});

app.get("/customers", (_request, response) => {

  const customers = listCustomers();

  const result = {
    data: customers,
    total: customers.length
  }

  response.status(200).json(result);
});

app.post("/customers", (request, response) => {

  if (!request.body.name || !request.body.email) {

    return response.status(400).json({ error: "Name or email is required" });
  }
  const customer = createCustomer(request.body);
  return response.status(201).json({ data: customer });
});

app.use((_request, response) => {
  response.status(404).json({ error: "Route not found" });
});
