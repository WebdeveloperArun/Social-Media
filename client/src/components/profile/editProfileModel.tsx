import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogFooter,
 DialogHeader,
 DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "@/state/api/userApi";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { updateUserRedux } from "@/state/reduxSlice/userSlice";
import type { User } from "@/types";
import { uploadImageToCloudinary } from "@/lib/cloudinaryUpload";

interface EditProfileModalProps {
 userId: string;
 isOpen: boolean;
 onClose: () => void;
 user: User;
}

export default function EditProfileModal({
 userId,
 isOpen,
 onClose,
 user,
}: EditProfileModalProps) {
 const dispatch = useAppDispatch();
 const queryClient = useQueryClient();

 console.log("user", user);

 const {
  register,
  handleSubmit,
  setValue,
  reset,
  formState: { errors },
 } = useForm<
  Pick<User, "_id" | "username" | "bio" | "profilePicture" | "coverPicture">
 >({
  defaultValues: {
   _id: userId,
   username: user.username,
   bio: user.bio || "",
   profilePicture: user.profilePicture || "",
   coverPicture: user.coverPicture || "",
  },
 });

 const [profilePreview, setProfilePreview] = useState<string | null>(null);
 const [coverPreview, setCoverPreview] = useState<string | null>(null);

 const { mutate } = useMutation({
  mutationFn: (values: User) => updateUser(userId, values),
  onSuccess: (data) => {
   queryClient.invalidateQueries({ queryKey: ["user"] });
   dispatch(updateUserRedux(data));
  },
  onError: (err) => {
   console.error("Update failed", err);
  },
 });

 const handleImageChange = async (
  e: React.ChangeEvent<HTMLInputElement>,
  field: "profilePicture" | "coverPicture",
  setPreview: React.Dispatch<React.SetStateAction<string | null>>
 ) => {
  const file = e.target.files?.[0];
  if (!file) return;

  try {
   const imageUrl = await uploadImageToCloudinary(file);
   setValue(field, imageUrl);
   setPreview(imageUrl);
  } catch (error) {
   console.error("Image upload failed:", error);
  }
 };

 const onSubmit = (
  data: Pick<
   User,
   "_id" | "username" | "bio" | "profilePicture" | "coverPicture"
  >
 ) => {
  const finalData = {
   ...data,
   profilePicture: data.profilePicture || user.profilePicture,
   coverPicture: data.coverPicture || user.coverPicture,
  };
  mutate(finalData);
  onClose();
 };

 useEffect(() => {
  if (isOpen) {
   reset({
    _id: userId,
    username: user.username,
    bio: user.bio || "",
    profilePicture: user.profilePicture || "",
    coverPicture: user.coverPicture || "",
   });
   setProfilePreview(null); // reset to use user.profilePicture again
   setCoverPreview(null); // reset to use user.coverPicture again
  }
 }, [isOpen, user, reset]);

 console.log("coverPicture", user.coverPicture);

 return (
  <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
   <DialogContent className="sm:max-w-[525px] max-h-[90vh] overflow-y-auto">
    <DialogHeader>
     <DialogTitle>Edit Profile</DialogTitle>
     <DialogDescription>
      Make changes to your profile. Click save when you're done.
     </DialogDescription>
    </DialogHeader>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
     {/* Cover Picture */}
     <div className="space-y-2">
      <Label htmlFor="coverPicture">Cover Image</Label>
      <div className="relative h-32 w-full bg-gray-100 rounded-md overflow-hidden">
       <img
        src={
         coverPreview !== null
          ? coverPreview
          : user.coverPicture || "/placeholder.svg"
        }
        alt="Cover"
        className="object-cover w-full h-full"
       />
       <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <Label
         htmlFor="coverUpload"
         className="bg-black bg-opacity-60 text-white p-2 rounded-full cursor-pointer"
        >
         <Camera className="h-5 w-5" />
        </Label>
        <Input
         id="coverUpload"
         type="file"
         accept="image/*"
         className="hidden"
         onChange={(e) => handleImageChange(e, "coverPicture", setCoverPreview)}
        />
       </div>
      </div>
     </div>

     {/* Profile Picture */}
     <div className="space-y-2">
      <Label htmlFor="profilePicture">Profile Picture</Label>
      <div className="flex items-center gap-4">
       <div className="relative h-24 w-24 rounded-full bg-gray-100 overflow-hidden">
        <img
         src={
          profilePreview !== null
           ? profilePreview
           : user.profilePicture || "/placeholder.svg"
         }
         alt="Profile"
         className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
         <Label
          htmlFor="profileUpload"
          className="bg-black bg-opacity-60 text-white p-2 rounded-full cursor-pointer"
         >
          <Camera className="h-5 w-5" />
         </Label>
         <Input
          id="profileUpload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) =>
           handleImageChange(e, "profilePicture", setProfilePreview)
          }
         />
        </div>
       </div>
       <div className="text-sm text-gray-500">
        <p>Upload a new profile picture</p>
        <p>Recommended: Square, at least 400x400</p>
       </div>
      </div>
     </div>

     {/* Username */}
     <div className="space-y-2">
      <Label htmlFor="username">Username</Label>
      <Input
       id="username"
       {...register("username", { required: "Username is required" })}
       placeholder="Your username"
      />
      {errors.username && (
       <p className="text-red-500 text-sm">{errors.username.message}</p>
      )}
     </div>

     {/* Bio */}
     <div className="space-y-2">
      <Label htmlFor="bio">Bio</Label>
      <Textarea
       id="bio"
       {...register("bio")}
       placeholder="Tell us about yourself"
       className="resize-none"
       rows={3}
      />
      <p className="text-xs text-gray-500">Max 160 characters</p>
     </div>

     <DialogFooter>
      <Button type="button" variant="outline" onClick={onClose}>
       Cancel
      </Button>
      <Button type="submit" className="bg-black text-white hover:bg-gray-800">
       Save Changes
      </Button>
     </DialogFooter>
    </form>
   </DialogContent>
  </Dialog>
 );
}
