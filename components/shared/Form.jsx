import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const Form = () => {
  const [path, setPath] = useState("");
  const router = useRouter();
  const { user } = useUser();
  const userId = user && user.id;

  const handleSubmit = async (e) => {
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
        router.reload();
      } else {
        alert("Error: Please try again later or contact support!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <h3 className="font-[600] p-3 text-[30px] gradient_text">
        Let's get you set and going...!
      </h3>
      <div className="bg-white p-4 rounded shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label
            htmlFor="path"
            className="block text-gray-700 text-[20px] font-bold"
          >
            Which internship path are you taking?
          </label>
          <select
            name="path"
            id="path"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="selectend">Select</option>
            <option value="frontend">
              Frontend Web Development with React
            </option>
            <option value="backend">Backend Web Development with NodeJS</option>
            <option value="fullstack">
              Full Stack Web Development with Next.JS
            </option>
          </select>
          <button type="submit" className="p-4 mt-[4px] text-center my_btn">
            Finish Setup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
