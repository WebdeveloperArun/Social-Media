import { LeftSidebar } from "@/components/left-sidebar";
import Navbar from "@/components/navbar";
import { SidebarInset, SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";

const HomePage = () => {
 return (
  <div>
   <Navbar />
   <SidebarProvider>
    <LeftSidebar className="h-[calc(100vh-4rem)] top-[4rem]" />
    <SidebarTrigger className="-ml-1"/>
    <div className="h-[100vh] w-full flex items-center justify-center bg-amber-600">
     hallo
    </div>
   </SidebarProvider>
  </div>
 );
};

export default HomePage;
