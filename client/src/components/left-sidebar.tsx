import type * as React from "react";
import { BookOpen, Home, Settings, SquareTerminal, Users } from "lucide-react";

import {
 Sidebar,
 SidebarContent,
 SidebarFooter,
 SidebarHeader,
 SidebarRail,
} from "@/components/ui/sidebar";
import { SimpleNav } from "@/components/ui/simple-nav";
import { LogoutButton } from "@/components/ui/logout-button";

// Simplified navigation items
const navItems = [
 {
  title: "Dashboard",
  url: "#",
  icon: Home,
  isActive: true,
 },
 {
  title: "Playground",
  url: "#",
  icon: SquareTerminal,
 },
 {
  title: "Documentation",
  url: "#",
  icon: BookOpen,
 },
 {
  title: "Team",
  url: "#",
  icon: Users,
 },
 {
  title: "Settings",
  url: "#",
  icon: Settings,
 },
];

export function LeftSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
 return (
  <Sidebar collapsible="icon" {...props}>
   <SidebarHeader>
   </SidebarHeader>
   <SidebarContent>
    <SimpleNav items={navItems} />
   </SidebarContent>
   <SidebarFooter>
    <LogoutButton />
   </SidebarFooter>
   <SidebarRail />
  </Sidebar>
 );
}
