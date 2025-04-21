import { useState } from "react";
import {
 ArrowLeft,
 MapPin,
 LinkIcon,
 Calendar,
 Edit,
 UserPlus,
 MessageSquare,
 ImageMinus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreatePost from "@/components/create-post";
import Post from "@/components/post";
import { Link, useParams } from "react-router-dom";

export default function ProfilePage() {
 const [activeTab, setActiveTab] = useState("posts");
 const { username } = useParams<{ username: string }>();

 if (!username) {
  return <div>Error: Username not found in URL.</div>;
 }

 // Mock user data
 const user = {
  name: username.charAt(0).toUpperCase() + username.slice(1),
  username: username,
  bio: "Digital creator | Photography enthusiast | Travel lover",
  location: "New York, USA",
  website: "www.example.com",
  joinedDate: "January 2020",
  followers: 1234,
  following: 567,
  posts: 89,
  coverImage:
   "https://plus.unsplash.com/premium_vector-1744634173347-16972b0cc0ec?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  profileImage:
   "https://plus.unsplash.com/premium_vector-1714618927767-b7606cc6c88c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 };

 return (
  <div className="flex-1 h-[calc(100vh-64px)] overflow-y-auto">
   <div className="relative">
    {/* Back button */}
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

    {/* Cover image */}
    <div className="h-48 md:h-64 w-full relative">
     <img
      src={user.coverImage || "/placeholder.svg"}
      alt="Cover"
      className="object-cover w-full h-full"
     />
    </div>

    {/* Profile image and basic info */}
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

     {/* Bio and details */}
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

      {/* Followers/Following counts */}
      <div className="flex gap-4 mt-4 text-sm">
       <div>
        <span className="font-bold">{user.following}</span>{" "}
        <span className="text-gray-500">Following</span>
       </div>
       <div>
        <span className="font-bold">{user.followers}</span>{" "}
        <span className="text-gray-500">Followers</span>
       </div>
       <div>
        <span className="font-bold">{user.posts}</span>{" "}
        <span className="text-gray-500">Posts</span>
       </div>
      </div>
     </div>
    </div>

    {/* Tabs */}
    <div className="mt-6 border-b border-gray-200">
     <Tabs defaultValue="posts" className="w-full" onValueChange={setActiveTab}>
      <div className="px-4">
       <TabsList className="grid grid-cols-3 bg-transparent">
        <TabsTrigger
         value="posts"
         className={`data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none ${
          activeTab === "posts" ? "font-semibold" : ""
         }`}
        >
         Posts
        </TabsTrigger>
        <TabsTrigger
         value="followers"
         className={`data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none ${
          activeTab === "followers" ? "font-semibold" : ""
         }`}
        >
         Followers
        </TabsTrigger>
        <TabsTrigger
         value="following"
         className={`data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none ${
          activeTab === "following" ? "font-semibold" : ""
         }`}
        >
         Following
        </TabsTrigger>
       </TabsList>
      </div>

      <TabsContent value="posts" className="mt-4 px-4">
       <CreatePost />

       <Post
        username={user.username}
        timeAgo="2 days ago"
        content="Just visited the most amazing place! The views were breathtaking."
        imageUrl="/placeholder.svg?height=400&width=600"
       />

       <Post
        username={user.username}
        timeAgo="1 week ago"
        content="Working on some exciting new projects. Can't wait to share them with you all!"
        imageUrl="/placeholder.svg?height=400&width=600"
       />

       <Post
        username={user.username}
        timeAgo="2 weeks ago"
        content="Throwback to this amazing sunset. Nature is truly incredible."
        imageUrl="/placeholder.svg?height=400&width=600"
       />
      </TabsContent>

      <TabsContent value="followers" className="mt-4 px-4">
       <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
         <UserListItem
          key={i}
          name={`Follower ${i + 1}`}
          username={`follower${i + 1}`}
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
         />
        ))}
       </div>
      </TabsContent>

      <TabsContent value="following" className="mt-4 px-4">
       <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
         <UserListItem
          key={i}
          name={`Following ${i + 1}`}
          username={`following${i + 1}`}
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
         />
        ))}
       </div>
      </TabsContent>
     </Tabs>
    </div>
   </div>
  </div>
 );
}

interface UserListItemProps {
 name: string;
 username: string;
 bio: string;
}

function UserListItem({ name, username, bio }: UserListItemProps) {
 return (
  <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
   <img
    src="/placeholder.svg?height=48&width=48"
    alt={name}
    width={48}
    height={48}
    className="rounded-full"
   />
   <div className="flex-1">
    <div className="flex justify-between items-start">
     <div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm">@{username}</p>
     </div>
     <Button className="bg-black text-white hover:bg-gray-800 rounded-full">
      Follow
     </Button>
    </div>
    <p className="text-sm mt-1">{bio}</p>
   </div>
  </div>
 );
}
