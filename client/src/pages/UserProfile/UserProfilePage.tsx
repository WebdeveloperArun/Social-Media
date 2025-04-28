import { useState } from "react";
import {
 ArrowLeft,
 MapPin,
 LinkIcon,
 Calendar,
 Edit,
 UserPlus,
 MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import UserTabs from "@/components/profile/tabs";

export default function ProfilePage() {
 const [activeTab, setActiveTab] = useState("posts");
 const { username } = useParams<{ username: string }>();
 const userdata = useSelector((state: any) => state.user?.userData);

//   if (userdata === undefined) {
//    return <div>Error: 404 not found</div>;
//   }

 // Mock user data
 const user = {
  name: "arun",
  username: "arunkumar",
  bio: "hallo",
  email: "1Bc8o@example.com",
  location: "New York, USA",
  website: "www.example.com",
  joinedDate: "January 2020",
  followers: [],
  following: [],
  posts: 89,
  coverImage: "/placeholder.svg",
  profileImage: "/placeholder.svg",
 };

 return (
  <div className="flex-1 h-[calc(100vh-64px)] overflow-y-auto">
   <div className="relative">
    <div className="absolute top-4 left-4 z-10">
     <Link to="/home">
      <Button
       variant="outline"
       size="icon"
       className="bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full"
      >
       <ArrowLeft className="h-5 w-5" />
      </Button>
     </Link>
    </div>

    <div className="h-48 md:h-64 w-full relative">
     <img
      src={user.coverImage || "/placeholder.svg"}
      alt="Cover"
      className="object-cover w-full h-full"
     />
    </div>

    <div className="px-4">
     <div className="relative -mt-16 md:-mt-20 flex flex-col md:flex-row md:items-end md:justify-between">
      <div className="flex flex-col md:flex-row md:items-end gap-4">
       <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden relative">
        <img
         src={user.profileImage || "/placeholder.svg"}
         alt={user.name}
         className="object-cover w-full h-full"
        />
       </div>
       <div className="mt-2 md:mb-2">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-500">@{user.username}</p>
       </div>
      </div>

      <div className="flex gap-2 mt-4 md:mt-0 md:mb-2">
       <Button variant="outline" className="rounded-full">
        <Edit className="h-4 w-4 mr-2" />
        Edit Profile
       </Button>
       <Button className="bg-black text-white hover:bg-gray-800 rounded-full">
        <UserPlus className="h-4 w-4 mr-2" />
        Follow
       </Button>
       <Button variant="outline" className="rounded-full p-0 w-10 h-10">
        <MessageSquare className="h-4 w-4" />
       </Button>
      </div>
     </div>

     <div className="mt-4">
      <p className="mb-2">{user.bio}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
       <div className="flex items-center">
        <MapPin className="h-4 w-4 mr-1" />
        {user.location}
       </div>
       <div className="flex items-center">
        <LinkIcon className="h-4 w-4 mr-1" />
        <a
         href={`https://${user.website}`}
         className="text-black hover:underline"
        >
         {user.website}
        </a>
       </div>
       <div className="flex items-center">
        <Calendar className="h-4 w-4 mr-1" />
        Joined {user.joinedDate}
       </div>
      </div>

      <div className="flex gap-4 mt-4 text-sm">
       <div>
        <span className="font-bold">{user.following.length}</span>{" "}
        <span className="text-gray-500">Following</span>
       </div>
       <div>
        <span className="font-bold">{user.followers.length}</span>{" "}
        <span className="text-gray-500">Followers</span>
       </div>
       <div>
        <span className="font-bold">{user.posts}</span>{" "}
        <span className="text-gray-500">Posts</span>
       </div>
      </div>
     </div>
    </div>

    <UserTabs activeTab={activeTab} setActiveTab={setActiveTab} user={user} />
   </div>
  </div>
 );
}
