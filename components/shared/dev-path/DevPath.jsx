import "./DevPath.css";
import Paths from "./Paths";
import Button from "../button/Button";

const DevPath = () => {
  return (
    <div className="dev-path bg-blue-950 flex flex-col items-center py-12 gap-5">
      <h2>There is space for every developer...</h2>
      <div className="flex flex-col gap-5 sm:gap-24 md:flex-row md:justify-between">
        <Paths
          color="white"
          backgroundColor="#4BA3C5"
          heading="Frontend Web Development Internship"
          description="Our frontend Web development internship with React Js provides you with real world experience with skills that would make you job ready!"
        />
        <Paths
          color="#000"
          backgroundColor="#fff"
          heading="Backend Web Development Internship"
          description="Our frontend Web development internship with React Js provides you with real world experience with skills that would make you job ready!"
        />
      </div>
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
  );
};

export default DevPath;
