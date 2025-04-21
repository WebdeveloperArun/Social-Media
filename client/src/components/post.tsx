import { MessageCircle, Share2, MoreVertical } from "lucide-react";

interface PostProps {
 username: string;
 timeAgo: string;
 content: string;
 imageUrl: string;
}

export default function Post({
 username,
 timeAgo,
 content,
 imageUrl,
}: PostProps) {
 return (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
   <div className="flex justify-between items-center mb-3">
    <div className="flex items-center gap-2">
     <img
      src="/placeholder.svg?height=40&width=40"
      alt="Profile"
      width={40}
      height={40}
      className="rounded-full"
     />
     <div>
      <h3 className="font-semibold">{username}</h3>
      <p className="text-xs text-gray-500">{timeAgo}</p>
     </div>
    </div>
    <button>
     <MoreVertical className="h-5 w-5 text-gray-500" />
    </button>
   </div>
   <p className="mb-3">{content}</p>
   <div className="rounded-lg overflow-hidden mb-3">
    <img
     src={imageUrl || "/placeholder.svg"}
     alt="Post image"
     width={600}
     height={400}
     className="w-full object-cover"
    />
   </div>
   <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
     <button className="flex items-center gap-1 text-gray-600">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       className="h-5 w-5"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
       />
      </svg>
      <span>Like</span>
     </button>
     <button className="flex items-center gap-1 text-gray-600">
      <MessageCircle className="h-5 w-5" />
      <span>Comment</span>
     </button>
    </div>
    <button className="flex items-center gap-1 text-gray-600">
     <Share2 className="h-5 w-5" />
     <span>Share</span>
    </button>
   </div>
  </div>
 );
}
