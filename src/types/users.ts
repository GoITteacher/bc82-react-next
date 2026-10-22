export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  role: "admin" | "moderator" | "user";
  isActive: boolean;
  avatar: string;
  createdAt: string;
}
