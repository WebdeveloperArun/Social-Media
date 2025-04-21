import { Gift } from "lucide-react";

interface RightSidebarProps {
 rightSidebarOpen: boolean;
}

export default function RightSidebar({ rightSidebarOpen }: RightSidebarProps) {
 return (
  <aside
   className={`${
    rightSidebarOpen ? "translate-x-0" : "translate-x-full"
   } lg:translate-x-0 fixed lg:relative top-0 lg:top-auto right-0 w-64 sm:w-80 h-full bg-white z-40 lg:z-30 transition-transform duration-300 ease-in-out lg:h-[calc(100vh-64px)] lg:overflow-y-auto`}
  >
   <div className="h-full overflow-y-auto border-l border-gray-200 no-scrollbar">
    <div className="p-4">
     {/* Birthday Notification */}
     <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
      <div className="flex items-start gap-2">
       <Gift className="h-5 w-5 text-black" />
       <p className="text-sm">
        <span className="font-semibold">Pola Foster</span> and{" "}
        <span className="font-semibold">3 other friends</span> have a birthday
        today.
       </p>
      </div>
     </div>

     {/* Ad */}
     <div className="bg-white p-0 rounded-lg shadow-sm border border-gray-200 mb-4 overflow-hidden">
      <img
       src="/placeholder.svg?height=300&width=300"
       alt="Advertisement"
       width={300}
       height={300}
       className="w-full object-cover"
      />
      <div className="p-4 bg-black text-white">
       <h3 className="text-xl font-bold">cold, smooth & easy</h3>
       <p className="text-sm mt-2">explore brand now</p>
      </div>
     </div>

     {/* Online Friends */}
     <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-semibold mb-3">Online Friends</h3>
      <div className="space-y-3">
       <OnlineFriend name="Safak Kocaoglu" />
       <OnlineFriend name="Janell Shrum" />
       <OnlineFriend name="Alex Durden" />
       <OnlineFriend name="Dora Hawks" />
       <OnlineFriend name="Thomas Holden" />
      </div>
     </div>
    </div>
   </div>
  </aside>
 );
}

interface OnlineFriendProps {
 name: string;
}

function OnlineFriend({ name }: OnlineFriendProps) {
 return (
  <div className="flex items-center gap-2">
   <div className="relative">
    <img
     src="/placeholder.svg?height=32&width=32"
     alt="Friend"
     width={32}
     height={32}
     className="rounded-full"
    />
    <span className="absolute bottom-0 right-0 bg-green-500 h-2 w-2 rounded-full border border-white"></span>
   </div>
   <span>{name}</span>
  </div>
 );
}
