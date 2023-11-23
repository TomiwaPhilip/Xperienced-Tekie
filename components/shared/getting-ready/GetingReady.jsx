import "./GetingReady.css";
import Button from "../button/Button";

const GetingReady = () => {
  return (
    <div className="GetingReady-section">
      <div className="content-width GetingReady-left">
        <h2 className="">Ready to start this amazing journey with Us?</h2>
        <p>
          Click the sign up button now to join the next cohort and start
          building the next big product that the world needs! Or read the FAQs
          below to learn more about the internship!
        </p>
        <p>Read the FAQs below to learn more about the internship</p>
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M12.9117 8L17.5 12L12.9117 16"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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

export default GetingReady;
