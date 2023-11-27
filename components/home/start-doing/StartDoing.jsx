"use client";

import { SignUp } from "@clerk/nextjs";

import Button from "../../shared/button/Button";
import "./StartDoing.css";

const StartDoing = () => {
  return (
    <div className="relative flex py-24 bg-blue-950 items-center md:flex-row md:justify-around ">
      <div className="text-white text-center space-y-5 px-6">
        <h2 className="md:text-[50px] text-[40px] font-extrabold">Start doing hard things...</h2>
        <br />
        <p className="text-[30px] font-bold">Build real world projects.</p>
        <p className="text-2xl md:px-6">
          Our internship experience provides you an opportunity to focus on
          things that matters. Unlock your potential and do what you have never
          done before!
        </p>
        <p className="text-2xl md:px-6">From the day of your enrolment, you will work on building a product collaboratively, 
          master the art of coding and build products that poeple use.</p>
        <br /> <br />
        <Button
          name={"Sign Up Now"}
          svg={
            <svg
              className="inline"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6.5 12H17"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
                <path
                  d="M12.9117 8L17.5 12L12.9117 16"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </g>
            </svg>
          }
          link={"/sign-up"}
        />
      </div>
    </div>
  );
};

export default StartDoing;
