import { User } from "@/types";

export const getUserById = async (userId: string | undefined) => {
 const response = await fetch(`http://localhost:8000/api/users/${userId}`, {
  method: "GET",
  headers: {
   "Content-Type": "application/json",
  },
  credentials: "include",
 });
 if (!response.ok) {
  throw new Error(response.statusText);
 }
 return response.json();
};

export const getCurrentUser = async () => {
 const response = await fetch("http://localhost:8000/api/users/current", {
  method: "GET",
  headers: {
   "Content-Type": "application/json",
  },
  credentials: "include",
 });
 if (!response.ok) {
  throw new Error(response.statusText);
 }
 return response.json();
};

export const deleteUser = async (id: string, userId: string) => {
 const response = await fetch(`http://localhost:8000/api/users/delete/${id}`, {
  method: "DELETE",
  headers: {
   "Content-Type": "application/json",
  },
  body: JSON.stringify({ userId }),
  credentials: "include",
 });
 if (!response.ok) {
  throw new Error(response.statusText);
 }
 return response.json();
};

export const followUser = async (id: string, userId: string) => {
 const response = await fetch(`http://localhost:8000/api/users/follow/${id}`, {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
  body: JSON.stringify({ userId }),
  credentials: "include",
 });
 if (!response.ok) {
  throw new Error(response.statusText);
 }
 return response.json();
};

export const unFollowUser = async (id: string, userId: string) => {
 const response = await fetch(
  `http://localhost:8000/api/users/unfollow/${id}`,
  {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify({ userId }),
   credentials: "include",
  }
 );
 if (!response.ok) {
  throw new Error(response.statusText);
 }
 return response.json();
};

export const getFollowers = async (id: string) => {
 const response = await fetch(
  `http://localhost:8000/api/users/followers/${id}`,
  {
   method: "GET",
   headers: {
    "Content-Type": "application/json",
   },
   credentials: "include",
  }
 );
 if (!response.ok) {
  throw new Error(response.statusText);
 }
 return response.json();
};

export const getFollowings = async (id: string) => {
 const response = await fetch(
  `http://localhost:8000/api/users/followings/${id}`,
  {
   method: "GET",
   headers: {
    "Content-Type": "application/json",
   },
   credentials: "include",
  }
 );
 if (!response.ok) {
  throw new Error(response.statusText);
 }
 return response.json();
};

export const updateUser = async (id: string, data: User) => {
 const response = await fetch(`http://localhost:8000/api/users/update/${id}`, {
  method: "PUT",
  headers: {
   "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
  credentials: "include",
 });
 if (!response.ok) {
  throw new Error(response.statusText);
 }
 return response.json();
};
