import { Search } from "lucide-react";

export default function MobileSearch() {
 return (
  <div className="md:hidden p-2 bg-gray-100">
   <div className="relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
    <input
     type="text"
     placeholder="Search for friend, post or video"
     className="w-full bg-white text-black rounded-full py-2 pl-10 pr-4 focus:outline-none border border-gray-200"
    />
   </div>
  </div>
 );
}
