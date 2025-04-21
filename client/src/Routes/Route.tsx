import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/Home/HomePage";
import LoginPage from "@/pages/Login/LoginPage";
import SignupPage from "@/pages/Signup/SignupPage";
import UserProfilePage from "@/pages/UserProfile/UserProfilePage";

import App from "@/App";

export const router = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  children: [
   {
    path: "/home",  
    Component: HomePage,
    children: [
     {
      path: "/home/profile/:username",
      Component: UserProfilePage,
     },
    ],
   },

   // Standalone routes (no shared layout from HomePage)
   {
    path: "/login",
    Component: LoginPage,
   },
   {
    path: "/signup",
    Component: SignupPage,
   },
  ],
 },
]);
