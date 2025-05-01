import { LoginData, User } from "@/types";

export const useSignup = async (data: User) => {
 const response = await fetch("http://localhost:8000/api/auth/register", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
  credentials: "include",
  body: JSON.stringify(data),
 });
 if (!response.ok) {
  throw new Error(response.statusText);
 }
 return response.json();
};

export const useLogin = async (data: LoginData) => {
 const response = await fetch("http://localhost:8000/api/auth/login", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
  credentials: "include",
  body: JSON.stringify(data),
 });
 if (!response.ok) {
  throw new Error(response.statusText);
 }
 return response.json();
};
