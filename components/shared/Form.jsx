import React from "react";

const Form = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <form action="" method="post" className="space-y-4">
        <label
          htmlFor="path"
          className="block text-gray-700 text-[20px] font-bold"
        >
          Which internship path are you taking?
        </label>
        <select
          name="path"
          id="path"
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="selectend">Select</option>
          <option value="frontend">Frontend Web Development with React</option>
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
  );
};

export default Form;
