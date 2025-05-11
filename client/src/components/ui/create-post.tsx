import { useState } from "react";
import { ImageIcon, MapPin, Tag, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadImageToCloudinary } from "@/lib/cloudinaryUpload";
import { createPost } from "@/state/api/postApi";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { User } from "@/types";
import { addPost } from "@/state/reduxSlice/postSlice";

export default function CreatePost() {
 const [content, setContent] = useState("");
 const [image, setImage] = useState<File | null>(null);
 const [preview, setPreview] = useState<string | null>(null);
 const dispatch = useAppDispatch();
 const queryClient = useQueryClient();
 const userData = useAppSelector(
  (state) => state.userReducer.userData
 ) as User | null;

 const { mutate } = useMutation({
  mutationFn: async () => {
   let imageUrl = "";

   if (image) {
    const uploadResult = await uploadImageToCloudinary(image);
    imageUrl = uploadResult;
   }

   return createPost({
    title: content,
    image: imageUrl,
    userId: userData?._id,
   });
  },
  onSuccess: (data) => {
   console.log("createPostData:", data);
   dispatch(addPost(data));
   setContent("");
   setImage(null);
   setPreview(null);
   queryClient.invalidateQueries({ queryKey: ["post"] });
  },
  onError: (err) => {
   console.error("Post creation failed", err);
  },
 });

 const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
   setImage(file);
   setPreview(URL.createObjectURL(file));
  }
 };

 return (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
   <div className="flex items-center gap-3 mb-3">
    <img
     src="/placeholder.svg?height=40&width=40"
     alt="Profile"
     width={40}
     height={40}
     className="rounded-full"
    />
    <input
     type="text"
     placeholder="What's in your mind?"
     className="bg-gray-100 rounded-full py-2 px-4 w-full focus:outline-none"
     value={content}
     onChange={(e) => setContent(e.target.value)}
    />
   </div>

   {preview && (
    <img src={preview} alt="Preview" className="max-h-48 rounded-md mb-2" />
   )}

   <input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    hidden
    id="post-image"
   />
   <hr className="my-3 border-gray-200" />

   <div className="flex flex-wrap justify-between gap-2">
    <label htmlFor="post-image" className="cursor-pointer">
     <PostAction
      icon={<ImageIcon className="h-5 w-5" />}
      label="Photo or Video"
     />
    </label>
    <PostAction icon={<Tag className="h-5 w-5" />} label="Tag" />
    <PostAction icon={<MapPin className="h-5 w-5" />} label="Location" />
    <PostAction icon={<Smile className="h-5 w-5" />} label="Feelings" />
    <Button
     className="bg-black text-white hover:bg-gray-800 text-xs sm:text-sm"
     //  disabled={isLoading || (!content.trim() && !image)}
     onClick={() => mutate()}
    >
     {/* {isLoading ? "Sharing..." : "Share"} */}
     Share
    </Button>
   </div>
  </div>
 );
}

function PostAction({ icon, label }: { icon: React.ReactNode; label: string }) {
 return (
  <div className="flex items-center gap-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded-md">
   {icon}
   <span className="text-xs sm:text-sm">{label}</span>
  </div>
 );
}
