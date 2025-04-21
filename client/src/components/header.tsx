import {
 Search,
 Bell,
 MessageSquare,
 Home,
 Calendar,
 Users,
 Menu,
 X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
 mobileMenuOpen: boolean;
 setMobileMenuOpen: (open: boolean) => void;
 rightSidebarOpen: boolean;
 setRightSidebarOpen: (open: boolean) => void;
}

export default function Header({
 mobileMenuOpen,
 setMobileMenuOpen,
 rightSidebarOpen,
 setRightSidebarOpen,
}: HeaderProps) {
 return (
  <header className="sticky top-0 z-50 bg-black text-white p-3 flex items-center justify-between border-b border-gray-200 h-16">
   <div className="flex items-center gap-2">
    <Button
     variant="ghost"
     size="icon"
     className="md:hidden text-white"
     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
     {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </Button>
    <h1 className="text-xl font-bold">Lamasocial</h1>
   </div>

   <div className="hidden md:flex items-center flex-1 max-w-xl mx-4">
    <div className="relative w-full">
     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
     <input
      type="text"
      placeholder="Search for friend, post or video"
      className="w-full bg-white text-black rounded-full py-2 pl-10 pr-4 focus:outline-none"
     />
    </div>
   </div>

   <div className="flex items-center gap-2 sm:gap-4">
    <div className="md:hidden relative">
     <Search className="h-5 w-5" />
    </div>
    <Button variant="ghost" size="icon" className="hidden sm:flex text-white">
     <Home className="h-5 w-5" />
    </Button>
    <Button variant="ghost" size="icon" className="hidden sm:flex text-white">
     <Calendar className="h-5 w-5" />
    </Button>
    <div className="relative">
     <Bell className="h-5 w-5" />
     <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center border border-white">
      3
     </span>
    </div>
    <div className="relative">
     <MessageSquare className="h-5 w-5" />
     <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center border border-white">
      5
     </span>
    </div>
    <Button
     variant="ghost"
     size="icon"
     className="lg:hidden text-white"
     onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
    >
     <Users className="h-5 w-5" />
    </Button>
    <img
     src="/placeholder.svg?height=32&width=32"
     alt="Profile"
     width={32}
     height={32}
     className="rounded-full border-2 border-white"
    />
   </div>
  </header>
 );
}
