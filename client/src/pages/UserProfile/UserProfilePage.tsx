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
import UserTabs from "@/components/profile/tabs";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "@/state/api/userApi";
import EditProfileModal from "@/components/profile/editProfileModel";
import { profile } from "console";

export default function ProfilePage() {
 const [activeTab, setActiveTab] = useState("posts");
 const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
 const { userId } = useParams();
 const userdata = useAppSelector((state: any) => state.userReducer?.userData);

 const { data } = useQuery({
  queryKey: ["user"],
  queryFn: () => getUserById(userId),
 });

 console.log("userProfileData:", data);
 

 const user = {
  _id: data?._id,
  name: data?.username,
  username: data?.username,
  bio: data?.bio,
  email: data?.email,
  location: "India",
  website: "www.example.com",
  joinedDate: "2022-01-01",
  followers: data?.followers,
  following: data?.followings,
  posts: 89,
  coverPicture:
   data?.coverPicture ||
   "https://img.freepik.com/free-photo/blue-teal-sand-paper_53876-92791.jpg?t=st=1746076980~exp=1746080580~hmac=07b0ab34d1b7484862b08aa9100d6101f72e1777157a9a6c0f2958727fd291a7&w=740",
  profilePicture:
   data?.profilePicture ||
   "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1746074005~exp=1746077605~hmac=53c3b881cb9e53c0cc16908e561ac2f1c8e27fba6d6f2de73b53890b53621b86&w=740",
 };

 return (
  <>
   <div className="flex-1 h-[calc(100vh-64px)] overflow-y-auto">
    <div className="relative">
     <div className="absolute top-4 left-4 z-10">
      <Link to="/">
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
       src={user.coverPicture || "/placeholder.svg"}
       alt="Cover"
       className="object-cover w-full h-full"
      />
     </div>

     <div className="px-4">
      <div className="relative -mt-16 md:-mt-20 flex flex-col md:flex-row md:items-center md:justify-between">
       <div className="flex flex-col md:flex-row md:items-end gap-4">
        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden relative">
         <img
          src={user.profilePicture || "/placeholder.svg"}
          alt={user.name}
          className="object-cover w-full h-full"
         />
        </div>
        <div className="md:mb-12">
         <h1 className="text-2xl font-bold">{user.name}</h1>
         <p className="text-white">@{user.username}</p>
        </div>
       </div>

       <div className="flex gap-2 mt-4 md:mt-0 md:mb-2">
        {userdata?._id === data?._id ? (
         <Button
          variant="outline"
          className="rounded-full"
          onClick={() => setIsEditProfileModalOpen(true)}
         >
          <Edit className="h-8 w-4 mr-2" />
          Edit Profile
         </Button>
        ) : (
         <Button className="bg-black text-white hover:bg-gray-800 rounded-full">
          <UserPlus className="h-8 w-4 mr-2" />
          Follow
         </Button>
        )}

        <Button variant="outline" className="rounded-full p-0 w-10 h-10">
         <MessageSquare className="h-4 w-4" />
        </Button>
       </div>
      </div>

      <div className="mt-4">
       <p className="mb-2">{user.bio}</p>
       {!user.bio && <p className="mb-2">your bio is empty</p>}
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
   <EditProfileModal
    userId={data?._id}
    isOpen={isEditProfileModalOpen}
    onClose={() => setIsEditProfileModalOpen(false)}
    user={user}
   />
  </>
 );
}
