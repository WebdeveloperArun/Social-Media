import { LogOut } from "lucide-react";
import {
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar";

export function LogoutButton() {
 const handleLogout = () => {
  // Add your logout logic here
  console.log("Logging out...");
 };

 return (
  <SidebarMenu>
   <SidebarMenuItem>
    <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
     <LogOut />
     <span>Logout</span>
    </SidebarMenuButton>
   </SidebarMenuItem>
  </SidebarMenu>
 );
}
