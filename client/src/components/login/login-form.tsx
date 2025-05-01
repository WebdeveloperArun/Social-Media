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
import { useAppDispatch } from "@/hooks/reduxHooks";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLogin } from "@/state/api/authApi";
import { login } from "@/state/reduxSlice/userSlice";
import { LoginData } from "@/types";

export function LoginForm({
 className,
 ...props
}: React.ComponentProps<"div">) {
 const { register, handleSubmit } = useForm<LoginData>();
 const dispatch = useAppDispatch();
 const navigate = useNavigate();
 const queryClient = useQueryClient();

 const { mutate } = useMutation({
  mutationFn: (values: LoginData) => useLogin(values),
  onSuccess: (data) => {
   queryClient.invalidateQueries({ queryKey: ["user"] });
   dispatch(login(data));
   navigate("/");
  },
  onError: (error) => {
   console.log("error", error);
  },
 });

 const onSubmit = (data: LoginData) => {
  mutate(data);
 };

 return (
  <div className={cn("flex flex-col gap-6", className)} {...props}>
   <Card>
    <CardHeader>
     <CardTitle>Login to your account</CardTitle>
     <CardDescription>
      Enter your email below to login to your account
     </CardDescription>
    </CardHeader>
    <CardContent>
     <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
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
        <div className="flex items-center">
         <Label htmlFor="password">Password</Label>
         <a
          href="#"
          className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
         >
          Forgot your password?
         </a>
        </div>
        <Input
         {...register("password")}
         id="password"
         type="password"
         required
        />
       </div>
       <div className="flex flex-col gap-3">
        <Button type="submit" className="w-full">
         Login
        </Button>
        <Button variant="outline" className="w-full">
         Login with Google
        </Button>
       </div>
      </div>
      <div className="mt-4 text-center text-sm">
       Don&apos;t have an account?{" "}
       <a href="/signup" className="underline underline-offset-4">
        Sign up
       </a>
      </div>
     </form>
    </CardContent>
   </Card>
  </div>
 );
}
