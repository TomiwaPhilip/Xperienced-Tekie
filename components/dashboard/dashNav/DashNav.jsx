"use client";

import { useUser, SignedIn, UserButton } from "@clerk/nextjs";

import "./DashNav.css";
import "../../../app/globals.css";

const DashNav = () => {
  const { isSignedIn, user } = useUser();
  if (!isSignedIn) {
    return null;
  }

  return (
    <nav className="dash-navbar fixed">
      <div className="text-white font-semibold">
        <h3>Welcome, {user.firstName}</h3>
      </div>
      <div className="flex items-center">
        <div className="overflow-hidden">
          {/* <SignedIn> */}
          {/* Mount the UserButton component */}
          <UserButton />
          {/* </SignedIn> */}
        </div>
      </div>
    </nav>
  );
};

export default DashNav;
