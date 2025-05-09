export type Access = "admin" | "manager" | "user";

export interface TeamMember {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: Access;
}
