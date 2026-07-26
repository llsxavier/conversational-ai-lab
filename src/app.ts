import express from "express";

export const app = express();

app.use(express.json());

app.get("/health", (_request, response) => {
  response.status(200).json({ status: "ok" });
});

app.get("/customers", (_request, response) => {
  response.status(501).json({
    error: "Not implemented",
    task: "API-001"
  });
});

app.use((_request, response) => {
  response.status(404).json({ error: "Route not found" });
});
