import CreatePost from "@/components/ui/create-post";
import Post from "../ui/post";

export default function Feed() {
 return (
  <div className="flex-1 max-w-2xl w-full h-[calc(100vh-64px)] overflow-y-auto no-scrollbar opacity-50 md:opacity-100">
   <div className="p-4">
    <CreatePost />
    <Post
     username="Safak Kocaoglu"
     timeAgo="5 mins ago"
     content="Love For All, Hatred For None."
     imageUrl="/placeholder.svg?height=400&width=600"
    />
    <Post
     username="Alex Durden"
     timeAgo="15 mins ago"
     content="Every moment is a fresh beginning."
     imageUrl="/placeholder.svg?height=400&width=600"
    />
    <Post
     username="Janell Shrum"
     timeAgo="1 hour ago"
     content="Never regret anything that made you smile."
     imageUrl="/placeholder.svg?height=400&width=600"
    />
   </div>
  </div>
 );
}
