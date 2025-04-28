import { User } from "@/types";
import CreatePost from "../ui/create-post";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import UserListItem from "./userListItem";
import UserPosts from "./userPosts";



const UserTabs = ({ activeTab, setActiveTab, user }: { activeTab: string; setActiveTab: (tab: string) => void; user: { username: string; bio: string; followers: User[]; following: User[] } }) => {
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

     <TabsContent value="posts" className="mt-4 px-4">
      <CreatePost />

      <UserPosts user={user}/>
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
  );
}

export default UserTabs;
