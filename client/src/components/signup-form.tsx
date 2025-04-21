import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useSignup } from "@/state/api";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { User } from "@/types";

export function SignupForm({
 className,
 ...props
}: React.ComponentProps<"div">) {

 const { register, handleSubmit } = useForm<User>();
 const { mutate } = useMutation({
  mutationFn: (values: User) => useSignup(values),
  onSuccess: () => {
    console.log("success");
  },
  onError: (error) => {
      console.log("error", error);
  }
 });

 const onSubmit = (data: User) => {
    console.log(data);
    
  mutate(data);
 };

 return (
  <div className={cn("flex flex-col gap-6", className)} {...props}>
   <Card>
    <CardHeader>
     <CardTitle>Create an account</CardTitle>
     <CardDescription>
      Enter your information below to create your account
     </CardDescription>
    </CardHeader>
    <CardContent>
     <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
       <div className="grid gap-3">
        <Label htmlFor="name">Username</Label>
        <Input
         {...register("username")}
         id="name"
         type="text"
         placeholder="John Doe"
         required
        />
       </div>
       <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input
         {...register("email")}
         id="email"
         type="email"
         placeholder="m@example.com"
         required
        />
       </div>
       <div className="grid gap-3">
        <Label htmlFor="password">Password</Label>
        <Input
         {...register("password")}
         id="password"
         type="password"
         required
        />
       </div>
       <div className="flex flex-col gap-3">
        <Button type="submit" className="w-full">
         Create Account
        </Button>
        <Button variant="outline" className="w-full">
         Sign up with Google
        </Button>
       </div>
      </div>
      <div className="mt-4 text-center text-sm">
       Already have an account?{" "}
       <a href="/login" className="underline underline-offset-4">
        Log in
       </a>
      </div>
     </form>
    </CardContent>
   </Card>
  </div>
 );
}
