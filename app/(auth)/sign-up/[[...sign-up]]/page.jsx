"use client";

import { useState, useEffect } from 'react';

import SigningUp from "../../../../components/auth/SigningUp";
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
        <SigningUp />
      )}
    </div>

  );
}

export default Page;

