import "./DevPath.css";
import Paths from "./Paths";
import Button from "../button/Button";
import AnimateContent from "../AnimateContent";

const DevPath = () => {
  return (
    <div className="dev-path bg-blue-950 flex flex-col items-center gap-5 pt-20 pb-20">
      <AnimateContent>
        <h2>Your developer stack is available</h2>
      </AnimateContent>
      <br />
      <div className="flex flex-col gap-5 sm:gap-24 md:flex-row md:justify-between">
        <AnimateContent>
          <Paths
            color="white"
            backgroundColor="#4BA3C5"
            heading="For the Frontend Developer"
            description="Harness the power of ReactJS and NextJs to build fullstack serverless applications that would be used in the real world. All you need is a basic knowledge of ReactJS and NextJS."
          />
        </AnimateContent>
        <AnimateContent>
          <Paths
            color="#000"
            backgroundColor="#fff"
            heading="For the Fullstack Developer"
            description="Master NextJs to build and deploy serverless web applications and become a designer of scaling products. All you need is a basic knowledge of NextJS."
          />
        </AnimateContent>
      </div>
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
  );
};

export default DevPath;
