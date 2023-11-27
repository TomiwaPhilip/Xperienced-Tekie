import "./StartBuilding.css";
import Button from "../button/Button";

const StartBuilding = () => {
  return (
    <div className="relative start-building bg-blue-950 w-full md:py-16">
      <div className="content-width building-left px-20 md:w-[500px] md:px-1">
        <h2 className="text-center px-5">Build a fast-paced start-up</h2>
        <p>
          Right from day one of the internship, you will start working with
          other developers to build a product for a startup.
        </p>
        <p>
          Work only on things that matter and channel your energy to building
          product people use.
        </p>
        <p>
          Learn and see how we build real world projects that is accessible to
          everyone in the world!
        </p>
        <Button
          params={"btn-signup"}
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

export default StartBuilding;
