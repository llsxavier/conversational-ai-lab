import type {
  Customer,
  CreateCustomerInput
} from "./customer.types.js";

const customers: Customer[] = [];

export function listCustomers(): Customer[] {
  return [...customers];
}

export function createCustomer(customer: CreateCustomerInput): Customer {
  const newCustomer: Customer = {
    ...customer,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };

  customers.push(newCustomer);

  return newCustomer;
}

export function findCustomerById(id: string): Customer | undefined {
  return customers.find(c => c.id === id);
}