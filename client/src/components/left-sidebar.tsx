import React from "react";
import {
 Rss,
 MessageCircle,
 Play,
 Users,
 Bookmark,
 HelpCircle,
 Briefcase,
 Calendar,
 GraduationCap,
 MoreHorizontal,
} from "lucide-react";

// Note: isActive prop is removed as usePathname is Next.js specific.
// You might need to implement routing logic using a library like react-router-dom
// and pass the active state down if needed.

interface LeftSidebarProps {
 mobileMenuOpen: boolean;
}

export default function LeftSidebar({ mobileMenuOpen }: LeftSidebarProps) {
 return (
  <aside
   className={`${
    mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
   } md:translate-x-0 fixed md:relative top-0 md:top-auto left-0 w-64 h-full bg-white z-40 md:z-30 transition-transform duration-300 ease-in-out md:h-[calc(100vh-64px)] md:overflow-y-auto`}
  >
   <div className="h-full overflow-y-auto border-r border-gray-200 no-scrollbar">
    <div className="p-4">
     <nav className="space-y-2">
      {/* Example of converting SidebarItem with <a> tag */}
      <SidebarItem icon={<Rss className="h-5 w-5" />} label="Feed" href="/" />
      <SidebarItem
       icon={<MessageCircle className="h-5 w-5" />}
       label="Chats"
       href="/messages"
      />
      <SidebarItem
       icon={<Play className="h-5 w-5" />}
       label="Videos"
       href="#"
      />
      <SidebarItem
       icon={<Users className="h-5 w-5" />}
       label="Groups"
       href="#"
      />
      <SidebarItem
       icon={<Bookmark className="h-5 w-5" />}
       label="Bookmarks"
       href="#"
      />
      <SidebarItem
       icon={<HelpCircle className="h-5 w-5" />}
       label="Questions"
       href="#"
      />
      <SidebarItem
       icon={<Briefcase className="h-5 w-5" />}
       label="Jobs"
       href="#"
      />
      <SidebarItem
       icon={<Calendar className="h-5 w-5" />}
       label="Events"
       href="#"
      />
      <SidebarItem
       icon={<GraduationCap className="h-5 w-5" />}
       label="Courses"
       href="#"
      />
      <SidebarItem
       icon={<MoreHorizontal className="h-5 w-5" />}
       label="Show More"
       href="#"
      />
     </nav>

     <hr className="my-4 border-gray-200" />

     <div className="space-y-3">
      {/* Example of converting FriendItem with <a> and <img> tags */}
      <FriendItem name="Safak Kocaoglu" username="safak" />
      <FriendItem name="Janell Shrum" username="janell" />
      <FriendItem name="Alex Durden" username="alex" />
      <FriendItem name="Dora Hawks" username="dora" />
     </div>
    </div>
   </div>
  </aside>
 );
}

interface SidebarItemProps {
 icon: React.ReactNode;
 label: string;
 href: string;
}

// Converted SidebarItem using <a> tag
function SidebarItem({ icon, label, href }: SidebarItemProps) {
 // Note: Removed isActive logic based on pathname
 return (
  <a
   href={href}
   className={`flex items-center gap-3 w-full p-2 rounded-md hover:bg-gray-100`} // Removed active styles
  >
   {icon}
   <span>{label}</span>
  </a>
 );
}

interface FriendItemProps {
 name: string;
 username: string;
}

// Converted FriendItem using <a> and <img> tags
function FriendItem({ name, username }: FriendItemProps) {
 // Note: Removed isActive logic based on pathname
 return (
  <a
   href={`/${username}`} // Simple href, might need adjustment based on routing setup
   className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100`} // Removed active styles
  >
   {/* Replaced Next/Image with standard img tag */}
   <img
    src="/placeholder.svg?height=32&width=32" // Standard src attribute
    alt="Friend"
    width={32}
    height={32}
    className="rounded-full"
   />
   <span>{name}</span>
  </a>
 );
}
