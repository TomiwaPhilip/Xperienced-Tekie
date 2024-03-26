"use client";

import Button from "../../shared/button/Button";
import "./StartDoing.css";
import AnimateContent from "../../shared/AnimateContent";

const StartDoing = () => {
  return (
    <div className="relative flex py-24 bg-blue-950 items-center md:flex-row md:justify-around ">
      <div className="text-white text-center space-y-5 px-6">
        <AnimateContent>
          <h2 className="md:text-[50px] text-[40px] font-extrabold">
            Go from zero to pro
          </h2>
        </AnimateContent>
        <br />
        <AnimateContent>
          <p className="text-[30px] font-bold">Build real products that people are going to use.</p>
        </AnimateContent>
        <AnimateContent>
          <p className="text-2xl md:px-6">
            Collaborate and ship products with other developers.
          </p>
        </AnimateContent>
        <AnimateContent>
          <p className="text-2xl md:px-6">
            Get realtime feedback for your code and get  help when stuck!
          </p>
        </AnimateContent>
        <br /> <br />
        <AnimateContent>
          <Button
            name={"Join the Next Cohort"}
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
            link={"https://dash.xperiencedtekie.pro"}
          />
        </AnimateContent>
      </div>
    </div>
  );
};

export default StartDoing;
