import type React from "react";
import { ImageIcon, MapPin, Tag, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CreatePost() {
 return (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
   <div className="flex items-center gap-3 mb-3">
    <img
     src="/placeholder.svg?height=40&width=40"
     alt="Profile"
     width={40}
     height={40}
     className="rounded-full"
    />
    <input
     type="text"
     placeholder="What's in your mind Safak?"
     className="bg-gray-100 rounded-full py-2 px-4 w-full focus:outline-none"
    />
   </div>
   <hr className="my-3 border-gray-200" />
   <div className="flex flex-wrap justify-between gap-2">
    <PostAction
     icon={<ImageIcon className="h-5 w-5" />}
     label="Photo or Video"
    />
    <PostAction icon={<Tag className="h-5 w-5" />} label="Tag" />
    <PostAction icon={<MapPin className="h-5 w-5" />} label="Location" />
    <PostAction icon={<Smile className="h-5 w-5" />} label="Feelings" />
    <Button className="bg-black text-white hover:bg-gray-800 text-xs sm:text-sm">
     Share
    </Button>
   </div>
  </div>
 );
}

interface PostActionProps {
 icon: React.ReactNode;
 label: string;
}

function PostAction({ icon, label }: PostActionProps) {
 return (
  <button className="flex items-center gap-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded-md">
   {icon}
   <span className="text-xs sm:text-sm">{label}</span>
  </button>
 );
}
