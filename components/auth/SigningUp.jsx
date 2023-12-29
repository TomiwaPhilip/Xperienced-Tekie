import { SignUp } from "@clerk/nextjs";

const SigningUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-4">
        <SignUp
          redirectUrl={"https://xperiencedtekie.pro/dashboard"}
          afterSignUpUrl={"https://xperiencedtekie.pro/dashboard"}
        />
      </div>
    </div>
  );
};

export default SigningUp;
