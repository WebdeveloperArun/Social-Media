import { useQuery } from "@tanstack/react-query";
import Post from "../ui/post";
import { getUserPosts } from "@/state/api/postApi";
import { Post as PostType } from "@/types";

const UserPosts = ({ userId, username }: { userId: string, username: string }) => {
 const { data, isLoading } = useQuery({
  queryKey: ["post"],
  queryFn: () => getUserPosts(userId),
  retry: false,
  refetchOnWindowFocus: false,
 });
 console.log("userPosts", data);

  if (isLoading) {
   return <div>Loading...</div>;
  }

  if (!data) {
   return <div>No posts found</div>;
  }

 
 return (
  <div>
   {data.map((post: PostType) => (
    <Post
     username={username}
     timeAgo={post.createdAt!}
     content={post.title!}
     imageUrl={post.image!}
    />
   ))}
  </div>
 );
};

export default UserPosts;
