import { Post } from "@/types";

export const createPost = async (data: Post) => {
 const response = await fetch(`http://localhost:8000/api/posts/create`, {
  method: "POST",
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
export const updatePost = async (id: string,data: Post) => {
 const response = await fetch(`http://localhost:8000/api/posts/update/${id}`, {
  method: "POST",
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
export const deletePost = async (id: string, userId: string) => {
 const response = await fetch(`http://localhost:8000/api/posts/delete/${id}`, {
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
export const getPostById = async (id: string) => {
 const response = await fetch(`http://localhost:8000/api/posts/get/${id}`, {
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
export const getALLPosts = async () => {
 const response = await fetch(`http://localhost:8000/api/posts/getAll`, {
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
export const likePost = async (userId: string, id: string) => {
 const response = await fetch(`http://localhost:8000/api/posts/like/${id}`, {
  method: "PATCH",
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
export const getFriendPosts = async (id: string) => {
 const response = await fetch(`http://localhost:8000/api/posts/getFriendPosts/${id}`, {
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
export const getUserPosts = async (id: string) => {
 const response = await fetch(`http://localhost:8000/api/posts/getUserPosts/${id}`, {
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
