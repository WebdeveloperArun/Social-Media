    import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function Component() {
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

     <div className="mt-6 grid grid-cols-2 gap-3">
      <div>
       <Button variant="outline" className="w-full">
        <svg
         className="w-5 h-5 mr-2"
         fill="currentColor"
         viewBox="0 0 20 20"
         aria-hidden="true"
        >
         <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
        <span>Twitter</span>
       </Button>
      </div>

      <div>
       <Button variant="outline" className="w-full">
        <svg
         className="w-5 h-5 mr-2"
         fill="currentColor"
         viewBox="0 0 20 20"
         aria-hidden="true"
        >
         <path
          fillRule="evenodd"
          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
          clipRule="evenodd"
         />
        </svg>
        <span>GitHub</span>
       </Button>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
