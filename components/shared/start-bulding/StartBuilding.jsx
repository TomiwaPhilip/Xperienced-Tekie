import Button from "../button/Button";
import AnimateContent from "../AnimateContent";

const StartBuilding = () => {
  return (
    <div className="bg-blue-950 text-white text-center w-full md:py-16 py-10">
      <div className="md:px-20 px-10">
        <AnimateContent>
          <h2 className="text-center px-5">
            Get started in 3 easy steps
          </h2>
        </AnimateContent>
        <br />
        <div className="leading-loose">
          <AnimateContent>
            <ol className="md:text-left list-decimal">
              <li>Sign up on our website and login to your dashboard</li>
              <li>
                Complete your 30 minutes assessment
              </li>
              <li>
                Pay your certification and commitment fee (the program is free)!
              </li>
              <li> Start your mentorship journey by April 15, 2024 </li>
            </ol>
          </AnimateContent>
        </div>

        <br />
        <AnimateContent>
          <Button
            params={"btn-signup"}
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

export default StartBuilding;
