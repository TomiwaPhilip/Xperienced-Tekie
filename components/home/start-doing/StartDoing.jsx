"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useSignUp } from "@clerk/nextjs";

import "./StartDoing.css";
// import LoadingSkeleton from "../../shared/LoadingSkeleton";
// import SigningUp from "../../auth/SigningUp";

const StartDoing = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  // useEffect(() => {
  //   // Simulate a delay using setTimeout
  //   setTimeout(() => {
  //     setLoading(false); // Hide loading skeleton after the delay
  //   }, 4000); // Adjust the delay time (in milliseconds) as needed
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoaded) {
      return;
    }

    // if (firstName && lastName && email && password) {
    try {
      await signUp.create({
        email_address: email,
        first_name: firstName,
        password: password,
        last_name: lastName,
      });

      //Send email
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      //Change UI
      setPendingVerification(true);
      // setFirstName("");
      // setLastName("");
      // setEmail("");
      // setPassword("");
    } catch (error) {
      console.log(error);
    }
    // }
  };

  const onPressVerify = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        // investigate issue to see if there is an error or user needs to complete more step
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  };

  return (
    <div className="relative flex flex-col gap-10 py-24 bg-blue-950 items-center md:flex-row md:justify-around ">
      {/* <div className="content-width start-left">
        <h2 className="">Start doing hard things...</h2>
        <p>Build real world projects.</p>
        <p>
          Our internship experience provides you an opportunity to focus on
          things that matters. Unlock your potential and do what you have never
          done before!
        </p>
        <p>Sign Up Now!</p>
      </div> */}

      <div className="absolute top-5 left-3 md:hidden">
        <svg
          width="70"
          height="70"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="24" cy="24.5" rx="24" ry="24.5" fill="#F2F2F2" />
        </svg>
      </div>
      <div className="hidden absolute top-10 left-32 md:block">
        <svg
          width="150"
          height="150"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="24" cy="24.5" rx="24" ry="24.5" fill="#F2F2F2" />
        </svg>
      </div>
      <div className=" text-white text-center md:text-left md:w-1/2 md:px-1 px-5 space-y-5">
        <h2 className="text-4xl font-extrabold">Start doing hard things...</h2>
        <p className="text-2xl">Build real world projects.</p>
        <p className="text-2xl">
          Our internship experience provides you an opportunity to focus on
          things that matters. Unlock your potential and do what you have never
          done before!
        </p>
        <p className="text-2xl">Sign Up Now!</p>
      </div>

      <div className="content-width start-right">
        <div className="form-container">
          <Image
            src={"/assets/images/X.png"}
            alt="logo"
            width={50}
            height={50}
          />
          <button className=" hover:bg-blue-900 hover:text-white social-signin-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="30px"
              height="30px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Sign in with Google
          </button>
          <button className=" hover:bg-blue-900 hover:text-white social-signin-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="30px"
              height="30px"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              />
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              />
            </svg>
            Sign in with Facebook
          </button>
          {!pendingVerification && (
            <div>
              <form onSubmit={handleSubmit}>
                <div className="name-input">
                  <div className="form-input">
                    <label>First name</label>
                    <input
                      className="px-5"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-input">
                    <label>Last name</label>
                    <input
                      className="px-5"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-input">
                  <label>Email</label>
                  <input
                    className="px-5"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-input">
                  <label>Password</label>
                  <input
                    className="px-5"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="create-account-btn">Create account</button>
              </form>
              <p>
                Already have an account? <Link href="/sign-in">Sign In</Link>{" "}
              </p>
            </div>
          )}
          {pendingVerification && (
            <div>
              <p className="font-medium">
                Verification code has been sent to your email
              </p>
              <form className="space-y4 md:space-y6">
                <input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter Verification code"
                  className="bg-gray-50 border p-1 my-2 border-gray-300 text-gray-900 sm:text:sm rounded-lg block w-full p-225"
                />
                <button
                  type="submit"
                  onClick={onPressVerify}
                  className="w-full text-white bg-blue-900 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Verify Email
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartDoing;
