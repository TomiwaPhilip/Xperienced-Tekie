import { useState, useEffect, useMemo } from "react";
import { useUser } from "@clerk/nextjs";
import Select from "react-select";
import countryList from "react-select-country-list";

import LoadingSkeleton from "./LoadingSkeleton";
// import CountrySelector from "./../CountrySelector";

const Form = () => {
  const options = useMemo(() => countryList().getData(), []);
  const [loading, setLoading] = useState(true);
  const [path, setPath] = useState("");
  const [location, setLocation] = useState("");
  const { user } = useUser();
  const userId = user && user.id;

  function handleChange(value) {
    setLocation(value);
    console.log(value.label);
  }

  useEffect(() => {
    // Simulate a delay using setTimeout
    setTimeout(() => {
      setLoading(false); // Hide loading skeleton after the delay
    }, 4000); // Adjust the delay time (in milliseconds) as needed
  }, []);

  const handleSubmit = async (e) => {
    console.log(userId);
    console.log(path);
    console.log(location.label);
    e.preventDefault();
    try {
      const response = await fetch("/api/formsubmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, path, location: location.label }),
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
        <div className="flex flex-col py-5 md:py-19 items-center w-[320px] md:w-[380px] border-4 border-blue-950  bg-pink-100 rounded-xl">
          <h3 className="font-[600] p-3 text-2xl text-blue-950 text-center">
            Let's get you set and going...!
          </h3>
          <div className="">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 flex flex-col items-center"
            >
              <label className="block text-gray-700 text-[20px] font-bold">
                Select Internship Path
              </label>
              <select
                name="path"
                id="path"
                value={path}
                onChange={(e) => setPath(e.target.value)}
                className="p-2 border border-gray-300 w-[300px] bg-white rounded"
              >
                <option value="selectend">Select</option>
                <option value="frontend">
                  Frontend Web Development with React
                </option>
                <option value="backend">
                  Backend Web Development with NodeJS
                </option>
              </select>
              <label className="block text-gray-700 text-[20px] font-bold">
                Country
              </label>
              <Select
                className="p-2 border w-full border-gray-300 bg-white rounded"
                options={options}
                value={location}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="flex text-white bg-blue-950 px-5 items-center rounded-lg"
              >
                <span>Go</span>
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6787 10.4882C11.0278 9.83728 9.97253 9.83728 9.32165 10.4882C8.67078 11.139 8.67078 12.1943 9.32165 12.8452L16.4765 20L9.32165 27.1548C8.67078 27.8057 8.67078 28.861 9.32165 29.5118C9.97253 30.1627 11.0278 30.1627 11.6787 29.5118L20.012 21.1785C20.6629 20.5276 20.6629 19.4724 20.012 18.8215L11.6787 10.4882Z"
                    fill="white"
                  />
                  <path
                    d="M23.3453 10.4882C22.6945 9.83728 21.6392 9.83728 20.9883 10.4882C20.3374 11.139 20.3374 12.1943 20.9883 12.8452L28.1431 20L20.9883 27.1548C20.3374 27.8057 20.3374 28.861 20.9883 29.5118C21.6392 30.1627 22.6945 30.1627 23.3453 29.5118L31.6787 21.1785C32.3295 20.5276 32.3295 19.4724 31.6787 18.8215L23.3453 10.4882Z"
                    fill="white"
                  />
                  <path
                    d="M11.6787 10.4882C11.0278 9.83728 9.97253 9.83728 9.32165 10.4882C8.67078 11.139 8.67078 12.1943 9.32165 12.8452L16.4765 20L9.32165 27.1548C8.67078 27.8057 8.67078 28.861 9.32165 29.5118C9.97253 30.1627 11.0278 30.1627 11.6787 29.5118L20.012 21.1785C20.6629 20.5276 20.6629 19.4724 20.012 18.8215L11.6787 10.4882Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.3453 10.4882C22.6945 9.83728 21.6392 9.83728 20.9883 10.4882C20.3374 11.139 20.3374 12.1943 20.9883 12.8452L28.1431 20L20.9883 27.1548C20.3374 27.8057 20.3374 28.861 20.9883 29.5118C21.6392 30.1627 22.6945 30.1627 23.3453 29.5118L31.6787 21.1785C32.3295 20.5276 32.3295 19.4724 31.6787 18.8215L23.3453 10.4882Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
