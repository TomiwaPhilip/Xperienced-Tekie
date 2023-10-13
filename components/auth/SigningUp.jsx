import { SignUp } from "@clerk/nextjs";
 
const SigningUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-4">
        <SignUp />
      </div>
    </div>
  );
}

export default SigningUp;