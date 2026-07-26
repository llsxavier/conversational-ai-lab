import type { Customer } from "./customer.types.js";

const customers: Customer[] = [];

export function listCustomers(): Customer[] {
  return [...customers];
}
