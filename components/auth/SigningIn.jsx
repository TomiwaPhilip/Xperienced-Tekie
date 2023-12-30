import { SignIn } from "@clerk/nextjs";

const SigningIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-4">
        <SignIn />
      </div>
    </div>
  );
};

export default SigningIn;
