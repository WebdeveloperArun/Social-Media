import { useEffect, useState } from "react";
import Header from "./header";
import { Outlet, useLocation } from "react-router";
import MobileSearch from "./mobile-search";
import LeftSidebar from "./left-sidebar";
import MobileNavigation from "./mobile-navigation";
import RightSidebar from "./right-sidebar";

const Layout = () => {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

 const location = useLocation();
 const pathname = location.pathname;

 const isProfilePage = pathname !== "/" && pathname !== "/profile/";

 useEffect(() => {
  setMobileMenuOpen(false);
  setRightSidebarOpen(false);
 }, [pathname]);

 return (
  <div className="min-h-screen bg-white text-black flex flex-col">
   <Header
    mobileMenuOpen={mobileMenuOpen}
    setMobileMenuOpen={setMobileMenuOpen}
    rightSidebarOpen={rightSidebarOpen}
    setRightSidebarOpen={setRightSidebarOpen}
   />

   {!isProfilePage && <MobileSearch />}

   <main className="flex flex-1 overflow-hidden">
    {mobileMenuOpen && (
     <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      onClick={() => setMobileMenuOpen(false)}
     />
    )}

    <LeftSidebar mobileMenuOpen={mobileMenuOpen} />

    <div className="flex-1 flex justify-center overflow-hidden">
     <Outlet />
    </div>

    {rightSidebarOpen && (
     <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      onClick={() => setRightSidebarOpen(false)}
     />
    )}

    {!isProfilePage && <RightSidebar rightSidebarOpen={rightSidebarOpen} />}
   </main>

   <MobileNavigation
    setMobileMenuOpen={setMobileMenuOpen}
    setRightSidebarOpen={setRightSidebarOpen}
   />
  </div>
 );
};

export default Layout;
