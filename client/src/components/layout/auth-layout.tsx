import { useAppSelector } from "@/hooks/reduxHooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected({
 children,
 authentication = true,
}: {
 children: React.ReactNode;
 authentication?: boolean;
}) {
  
 const navigate = useNavigate();
 const [loader, setLoader] = useState(true);
 const authStatus = useAppSelector((state) => state.userReducer.isLoggedIn);

 useEffect(() => {
  if (authentication && authStatus !== authentication) {
   navigate("/login");
  } else if (!authentication && authStatus !== authentication) {
   navigate("/");
  }

  setLoader(false);
 }, [authStatus, navigate, authentication]);

 return loader ? <h1>Loading...</h1> : <>{children}</>;
}
