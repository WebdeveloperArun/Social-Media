import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { followUser, getUserById, unFollowUser } from "@/state/api/userApi";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { updateUserRedux } from "@/state/reduxSlice/userSlice";
import { User } from "@/types";
import { useNavigate } from "react-router";

interface UserListItemProps {
 data: User;
 userId: string | undefined;
 type: string;
}

function UserListItem({ data, userId, type }: UserListItemProps) {
 const dispatch = useAppDispatch();
 const navigate = useNavigate();
 

 console.log("user List Item:", data);
 

 const followORunfollowUser = () => {
  if (type == "followings") {
   return () => unFollowUser(data._id!, userId);
  } else {
   return () => followUser(data._id!, userId);
  }
 };

 const { mutate } = useMutation({
  mutationFn: followORunfollowUser(),
  onSuccess: (data) => {
   dispatch(updateUserRedux(data));
  },
  onError: (error) => {
   console.log("error", error);
  },
 });

 return (
  <div
   className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg"
   onClick={() => navigate(`/profile/${data._id}`)}
  >
   <img
    src={
     data?.profilePicture ||
     "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1746074005~exp=1746077605~hmac=53c3b881cb9e53c0cc16908e561ac2f1c8e27fba6d6f2de73b53890b53621b86&w=740"
    }
    alt={data?.username}
    width={48}
    height={48}
    className="rounded-full"
   />
   <div className="flex-1">
    <div className="flex justify-between items-start">
     <div>
      <h3 className="font-semibold">{data?.username}</h3>
      <p className="text-gray-500 text-sm">@{data?.username}</p>
     </div>
     <Button
      onClick={() => mutate()}
      className="bg-black text-white hover:bg-gray-800 rounded-full"
     >
      {type == "followings" ? "unFollow" : "Follow"}
     </Button>
    </div>
    <p className="text-sm mt-1">{data?.bio}</p>
   </div>
  </div>
 );
}

export default UserListItem;
