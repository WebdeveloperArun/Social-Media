import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom"; // Keep useLocation if needed for profile page logic

// Import components using @ alias
import Header from "@/components/header";
import LeftSidebar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";
import Feed from "@/components/feed";
import MobileNavigation from "@/components/mobile-navigation";
import MobileSearch from "@/components/mobile-search";
import { log } from "console";

const HomePage = () => {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

 const location = useLocation();
 const pathname = location.pathname;


 const isProfilePage = pathname !== "/home" && pathname !== "/home/" && pathname !== "/home/profile";

 console.log(isProfilePage);
 

 useEffect(() => {
  setMobileMenuOpen(false);
  setRightSidebarOpen(false);
 }, [pathname]);

 return (
  // This component now renders the full page structure for the home/feed view
  <div className="min-h-screen bg-white text-black flex flex-col">
   <Header
    mobileMenuOpen={mobileMenuOpen}
    setMobileMenuOpen={setMobileMenuOpen}
    rightSidebarOpen={rightSidebarOpen}
    setRightSidebarOpen={setRightSidebarOpen}
   />

   {/* Conditionally render MobileSearch based on logic if needed */}
   {/* Or always render if it appears on all main views handled by HomePage */}
   {!isProfilePage && <MobileSearch />}

   <main className="flex flex-1 overflow-hidden">
    {/* Mobile Menu Overlay */}
    {mobileMenuOpen && (
     <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      onClick={() => setMobileMenuOpen(false)}
     />
    )}

    <LeftSidebar mobileMenuOpen={mobileMenuOpen} />

    {/* Center Content Area */}
    <div className="flex-1 flex justify-center overflow-hidden">
     {isProfilePage ? (
      // Render profile-specific content if HomePage handles profiles
      <Outlet/>
     ) : (
      // Render Feed for the main home view
      <Feed
       mobileMenuOpen={mobileMenuOpen}
       rightSidebarOpen={rightSidebarOpen}
      />
     )}
    </div>

    {/* Right Sidebar Overlay */}
    {rightSidebarOpen && (
     <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      onClick={() => setRightSidebarOpen(false)}
     />
    )}

    {/* Conditionally render RightSidebar based on logic if needed */}
    {!isProfilePage && <RightSidebar rightSidebarOpen={rightSidebarOpen} />}
   </main>

   <MobileNavigation
    setMobileMenuOpen={setMobileMenuOpen}
    setRightSidebarOpen={setRightSidebarOpen}
   />
  </div>
 );
};

export default HomePage;
