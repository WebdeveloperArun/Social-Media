import {
 SidebarGroup,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";

export function SimpleNav({
 items,
}: {
 items: {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
 }[];
}) {
 return (
  <SidebarGroup>
   <SidebarMenu>
    {items.map((item) => (
     <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild isActive={item.isActive} tooltip={item.title}>
       <a href={item.url}>
        <item.icon />
        <span>{item.title}</span>
       </a>
      </SidebarMenuButton>
     </SidebarMenuItem>
    ))}
   </SidebarMenu>
  </SidebarGroup>
 );
}
