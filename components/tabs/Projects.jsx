"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

import LoadingSkeleton from "../shared/LoadingSkeleton";
import FrontendCard from "../dashboard/FrontendCard";
import BackendCard from "../dashboard/BackendCard";
import FullstackCard from "../dashboard/FullstackCard";
import Form from "../shared/Form";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [userPath, setUserPath] = useState(null);

  const { user } = useUser();

  useEffect(() => {
    // Simulate a delay using setTimeout
    setTimeout(() => {
      setLoading(false); // Hide loading skeleton after the delay
    }, 4000); // Adjust the delay time (in milliseconds) as needed
  }, []);

  useEffect(() => {
    const userId = user && user.id;
    console.log(userId);

    // Fetch user data using the fetch API
    fetch(`/api/getformdetails?userId=${userId}`, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error fetching user data");
      })
      .then((data) => {
        setUserPath(data.user.path); // Set the user's path
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [user]);

  return (
    <div>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="">
          {userPath === "frontend" && <FrontendCard />}
          {userPath === "backend" && <BackendCard />}
          {userPath === "fullstack" && <FullstackCard />}
          {userPath !== "frontend" &&
            userPath !== "backend" &&
            userPath !== "fullstack" && <Form />}
        </div>
      )}
    </div>
  );
};

export default Projects;
