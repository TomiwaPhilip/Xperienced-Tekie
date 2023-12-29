import "./DevPath.css";
import Paths from "./Paths";
import Button from "../button/Button";
import AnimateContent from "../AnimateContent";

const DevPath = () => {
  return (
    <div className="dev-path bg-blue-950 flex flex-col items-center gap-5 pt-20 pb-20">
      <AnimateContent>
        <h2>Every developer stack is accepted</h2>
      </AnimateContent>
      <br />
      <div className="flex flex-col gap-5 sm:gap-24 md:flex-row md:justify-between">
        <AnimateContent>
          <Paths
            color="white"
            backgroundColor="#4BA3C5"
            heading="Frontend Web Development Internship with ReactJs"
            description="Our frontend Web development internship with ReactJS provides you with real world experience with skills that would make you job ready!"
          />
        </AnimateContent>
        <AnimateContent>
          <Paths
            color="#000"
            backgroundColor="#fff"
            heading="Backend Web Development Internship with NodeJS"
            description="Our backend Web development internship with NodeJS provides you with real world experience with skills that would make you job ready!"
          />
        </AnimateContent>
      </div>
      <AnimateContent>
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
      </AnimateContent>
    </div>
  );
};

export default DevPath;
