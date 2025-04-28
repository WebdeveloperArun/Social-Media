import { Route, Routes } from "react-router";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import ProfilePage from "./pages/UserProfile/UserProfilePage";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser, getUserById } from "./state/api";
import { useAppDispatch } from "./hooks/reduxHooks";
import { login } from "./state/reduxSlice/userSlice";
import Layout from "./components/layout/layout";

const App = () => {
 const dispatch = useAppDispatch();

 const { data } = useQuery({
  queryKey: ["user"],
  queryFn: () => getCurrentUser(),
 });

 dispatch(login({userdata: data}));
 console.log("currentUserData:", data);

 return (
  <Routes>
   <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="profile/:username" element={<ProfilePage />} />
   </Route>
   <Route path="/login" element={<LoginPage />} />
   <Route path="/signup" element={<SignupPage />} />
  </Routes>
 );
};

export default App;
