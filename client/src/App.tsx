import { Route, Routes } from "react-router";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import ProfilePage from "./pages/UserProfile/UserProfilePage";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./state/api/userApi";
import { useAppDispatch } from "./hooks/reduxHooks";
import { login } from "./state/reduxSlice/userSlice";
import Layout from "./components/layout/layout";
import Protected from "./components/layout/auth-layout";

const App = () => {
 const dispatch = useAppDispatch();

 const { data, isLoading } = useQuery({
  queryKey: ["user"],
  queryFn: () => getCurrentUser(),
 });

 // Only dispatch login action if data exists
 if (data) {
  dispatch(login({ userData: data }));
 } else {
    console.log("no data");
 }

 console.log("currentUserData:", data);

 if (isLoading) {
  return <div>Loading...</div>;
 }

 return (
  <Routes>
   <Route
    path="/"
    element={
     <Protected authentication>
      <Layout />
     </Protected>
    }
   >
    <Route index element={<HomePage />} />
    <Route path="profile/:userId" element={<ProfilePage />} />
   </Route>
   <Route
    path="/login"
    element={
     <Protected authentication={false}>
      <LoginPage />
     </Protected>
    }
   />
   <Route
    path="/signup"
    element={
     <Protected authentication={false}>
      <SignupPage />
     </Protected>
    }
   />
  </Routes>
 );
};

export default App;
