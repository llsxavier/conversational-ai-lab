import express from "express";
import { listCustomers } from "./customers/customer.repository";

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

app.use((_request, response) => {
  response.status(404).json({ error: "Route not found" });
});
