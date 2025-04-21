import type React from "react";
import { Home, Menu, MessageCircle, Users } from "lucide-react";

interface MobileNavigationProps {
 setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
 setRightSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavigation({
 setMobileMenuOpen,
 setRightSidebarOpen,
}: MobileNavigationProps) {
 return (
  <nav className="fixed bottom-0 left-0 right-0 bg-black text-white flex justify-around items-center p-2 border-t border-gray-700 z-30 md:hidden">
   <NavItem icon={<Home className="h-5 w-5" />} label="Home" />

   <button
    className="flex flex-col items-center"
    onClick={() => setMobileMenuOpen((prev) => !prev)}
   >
    <Menu className="h-5 w-5" />
    <span className="text-xs mt-1">Menu</span>
   </button>

   <NavItem icon={<MessageCircle className="h-5 w-5" />} label="Chats" />

   <button
    className="flex flex-col items-center"
    onClick={() => setRightSidebarOpen((prev) => !prev)}
   >
    <Users className="h-5 w-5" />
    <span className="text-xs mt-1">Friends</span>
   </button>

   <div className="flex flex-col items-center">
    <img
     src="/placeholder.svg?height=24&width=24"
     alt="Profile"
     width={24}
     height={24}
     className="rounded-full"
    />
    <span className="text-xs mt-1">Profile</span>
   </div>
  </nav>
 );
}

interface NavItemProps {
 icon: React.ReactNode;
 label: string;
}

function NavItem({ icon, label }: NavItemProps) {
 return (
  <button className="flex flex-col items-center">
   {icon}
   <span className="text-xs mt-1">{label}</span>
  </button>
 );
}
