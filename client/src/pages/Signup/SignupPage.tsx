import { SignupForm } from "@/components/signup/signup-form";

const SignupPage = () => {
 return (
  <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
   <div className="w-[40vw] max-w-sm">
    <SignupForm />
   </div>
  </div>
 );
};

export default SignupPage;
