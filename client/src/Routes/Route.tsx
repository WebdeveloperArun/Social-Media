import HomePage from "@/pages/Home/HomePage";
import LoginPage from "@/pages/Login/LoginPage";
import SignupPage from "@/pages/Signup/SignupPage";

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
 {
  path: "/signup",
  Component: SignupPage ,
 },
]);
