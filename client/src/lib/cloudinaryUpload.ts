import { log } from "node:console";

export const uploadImageToCloudinary = async (file: File): Promise<string> => {
 console.log("file", file);

 const formData = new FormData();
 formData.append("file", file);
 formData.append("upload_preset", "social-media");

 const res = await fetch(
  "https://api.cloudinary.com/v1_1/dqivjzwzr/image/upload",
  {
   method: "POST",
   body: formData,
  }
 );

 const data = await res.json();
 if (!res.ok) {
  console.error("Upload failed:", data);
  throw new Error(data.error?.message || "Image upload failed");
 }
 return data.secure_url; // The image URL
};
