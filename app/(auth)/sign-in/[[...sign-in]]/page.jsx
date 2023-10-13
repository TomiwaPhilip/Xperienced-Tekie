"use client";

import { useState, useEffect } from 'react';

import SigningIn from "../../../../components/auth/SigningIn";
import LoadingSkeleton from "../../../../components/shared/LoadingSkeleton"

const Page = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay using setTimeout
    setTimeout(() => {
      setLoading(false); // Hide loading skeleton after the delay
    }, 4000); // Adjust the delay time (in milliseconds) as needed
  }, []);

  return (
    <div className="">
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <SigningIn />
      )}
    </div>

  );
}

export default Page;