import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function SignupForm() {
 const [showPassword, setShowPassword] = useState(false);
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
 });

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
 };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Handle form submission here
  console.log("Form submitted:", formData);
 };

 return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
   <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl">
    <div className="text-center">
     <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
      Create your account
     </h2>
     <p className="mt-2 text-sm text-muted-foreground">
      Join us today and start your journey
     </p>
    </div>
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
     <div className="space-y-4">
      <div>
       <Label htmlFor="name" className="sr-only">
        Full Name
       </Label>
       <Input
        id="name"
        name="name"
        type="text"
        required
        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleInputChange}
       />
      </div>
      <div>
       <Label htmlFor="email" className="sr-only">
        Email address
       </Label>
       <Input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
        placeholder="Email address"
        value={formData.email}
        onChange={handleInputChange}
       />
      </div>
      <div className="relative">
       <Label htmlFor="password" className="sr-only">
        Password
       </Label>
       <Input
        id="password"
        name="password"
        type={showPassword ? "text" : "password"}
        autoComplete="new-password"
        required
        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
       />
       <button
        type="button"
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        onClick={() => setShowPassword(!showPassword)}
       >
        {showPassword ? (
         <EyeOff className="h-4 w-4 text-gray-500" />
        ) : (
         <Eye className="h-4 w-4 text-gray-500" />
        )}
       </button>
      </div>
     </div>

     <div>
      <Button
       type="submit"
       className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
       <span className="absolute left-0 inset-y-0 flex items-center pl-3">
        <ArrowRight
         className="h-5 w-5 text-primary-foreground group-hover:text-primary-foreground/80"
         aria-hidden="true"
        />
       </span>
       Sign up
      </Button>
     </div>
    </form>

    <div className="mt-6">
     <div className="relative">
      <div className="absolute inset-0 flex items-center">
       <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex justify-center text-sm">
       <span className="px-2 bg-white text-muted-foreground">
        Or continue with
       </span>
      </div>
     </div>

     <div className="mt-6">
      <Button variant="outline" className="w-full">
       <svg
        className="w-5 h-5 mr-2"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
         fill="#4285F4"
        />
        <path
         d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
         fill="#34A853"
        />
        <path
         d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
         fill="#FBBC05"
        />
        <path
         d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
         fill="#EA4335"
        />
       </svg>
       <span>Continue with Google</span>
      </Button>
     </div>
    </div>
    <div className="mt-6 text-center">
     <p className="text-sm text-muted-foreground">
      Already have an account?{" "}
      <Link
       to="/login"
       className="font-medium text-primary hover:text-primary/80"
      >
       Log in
      </Link>
     </p>
    </div>
   </div>
  </div>
 );
}
