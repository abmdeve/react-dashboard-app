export type Access = "admin" | "manager" | "user";

export interface TeamMember {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: Access;
}

export interface Contact_Interface {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}

export interface Invoice_Interface {
  id: number;
  name: string;
  email: string;
  cost: string;
  phone: string;
  date: string;
}
