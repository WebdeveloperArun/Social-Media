import { Outlet } from "react-router";

const App = () => {
 return (
  <>
   <div className="min-h-screen bg-white text-black">
    <Outlet />
   </div>
  </>
 );
};

export default App;
