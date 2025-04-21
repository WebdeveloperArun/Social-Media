import { User } from "@/types";

export const useSignup = async (data: User) => {
 const response = await fetch("http://localhost:8000/api/auth/register", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
 });
 if (!response.ok) {
  throw new Error(response.statusText);
 }
 return response.json();
};
