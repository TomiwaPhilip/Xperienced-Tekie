import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

import LoadingSkeleton from "./LoadingSkeleton";

const Form = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay using setTimeout
    setTimeout(() => {
      setLoading(false); // Hide loading skeleton after the delay
    }, 4000); // Adjust the delay time (in milliseconds) as needed
  }, []);

  const [path, setPath] = useState("");
  const { user } = useUser();
  const userId = user && user.id;

  const handleSubmit = async (e) => {
    console.log(userId);
    console.log(path);
    e.preventDefault();
    try {
      const response = await fetch("/api/formsubmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, path }),
      });
      if (response.status === 201) {
        window.location.reload();
      } else {
        alert("Error: Please try again later or contact support!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="flex flex-col item-center path-form">
          <h3 className="font-[600] p-3 text-[25px] gradient_text">
            Let's get you set and going...!
          </h3>
          <div className="bg-white p-4 rounded shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <label
                htmlFor="path"
                className="block text-gray-700 text-[20px] font-bold"
              >
                Select Internship Path
              </label>
              <select
                name="path"
                id="path"
                value={path}
                onChange={(e) => setPath(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="selectend">Select</option>
                <option value="frontend">
                  Frontend Web Development with React
                </option>
                <option value="backend">
                  Backend Web Development with NodeJS
                </option>
                <option value="fullstack">
                  Full Stack Web Development with Next.JS
                </option>
              </select>
              <button
                type="submit"
                className="p-2 border border-pale-500 rounded"
              >
                Finish Setup
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
