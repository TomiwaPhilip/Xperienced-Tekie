"use client";

import { useState, useEffect } from "react";

import LoadingSkeleton from "../shared/LoadingSkeleton";
import Form from "../shared/Form";

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay using setTimeout
    setTimeout(() => {
      setLoading(false); // Hide loading skeleton after the delay
    }, 4000); // Adjust the delay time (in milliseconds) as needed
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="">
          <Form />
        </div>
      )}
    </div>
  );
};

export default Projects;
