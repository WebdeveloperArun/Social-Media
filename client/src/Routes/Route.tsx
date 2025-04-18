import HomePage from "@/pages/Home/HomePage";
import LoginPage from "@/pages/Login/LoginPage";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
 {
  path: "/home",
  Component: HomePage,
 },
 {
  path: "/login",
  Component: LoginPage,
 },
]);
