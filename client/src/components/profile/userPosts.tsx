

import Post from '../ui/post';

const UserPosts = ({user}: {user: {username: string}}) => {
  return (
   <div>
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
   </div>
  );
}

export default UserPosts;
