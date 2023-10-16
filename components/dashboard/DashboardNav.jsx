"use client";

import { useUser, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import "../../app/globals.css";

const DashboardNav = () => {
  const { isSignedIn, user } = useUser();
  if (!isSignedIn) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-10 gradient_dark p-4 flex justify-between items-center sm:rounded-br-lg max-sm:rounded-b-lg">
      <div className="text-white text-lg font-semibold">
        <h3>Welcome, {user.firstName}</h3>
      </div>
      <div className="flex items-center">
        <div className="overflow-hidden">
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>

  );
}

export default DashboardNav;