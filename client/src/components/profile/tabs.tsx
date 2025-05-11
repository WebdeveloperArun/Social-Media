import { User } from "@/types";
import CreatePost from "../ui/create-post";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import UserListItem from "./userListItem";
import UserPosts from "./userPosts";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useQuery } from "@tanstack/react-query";
import { getFollowers, getFollowings } from "@/state/api/userApi";

const UserTabs = ({
 activeTab,
 setActiveTab,
 user,
}: {
 activeTab: string;
 setActiveTab: (tab: string) => void;
 user: {
  _id: string;
  username: string; 
  bio: string;
  followers: string[];
  following: string[];
 };
}) => { 
 const userData = useAppSelector(
  (state) => state.userReducer.userData
 ) as User | null;

 const { data: followersData } = useQuery({
  queryKey: ["followers", user._id],
  queryFn: () => getFollowers(user._id),
  enabled: activeTab === "followers",
 });

 const { data: followingData } = useQuery({
  queryKey: ["followings", user._id],
  queryFn: () => getFollowings(user._id),
  enabled: activeTab === "following",
 });

 console.log("tabs user:",user);
 

 return (
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

    {activeTab === "posts" && (
     <TabsContent value="posts" className="mt-4 px-4">
      <CreatePost />
      <UserPosts userId={user._id} username={user.username} />
     </TabsContent>
    )}

    {activeTab === "followers" && (
     <TabsContent value="followers" className="mt-4 px-4">
      <div className="space-y-4">
       { followersData &&followersData.length > 0 ? followersData.map((follower: User, index: number) => (
        <UserListItem
         key={index}
         type="followers"
         userId={userData?._id}
         data={follower}
        />
       )) : <p>No followers found</p>}
      </div>
     </TabsContent>
    )}

    {activeTab === "following" && (
     <TabsContent value="following" className="mt-4 px-4">
      <div className="space-y-4">
       { followingData && followingData.length > 0? followingData.map((following: User, index: number) => (
        <UserListItem
         key={index}
         type="followings"
         userId={userData?._id}
         data={following}
        />
       )) : <p>No following found</p>}
      </div>
     </TabsContent>
    )}
   </Tabs>
  </div>
 );
};

export default UserTabs;
