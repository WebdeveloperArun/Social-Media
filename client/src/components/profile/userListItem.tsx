import { Button } from "../ui/button";

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


export default UserListItem;