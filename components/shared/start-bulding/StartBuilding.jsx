import Button from "../button/Button";
import AnimateContent from "../AnimateContent";

const StartBuilding = () => {
  return (
    <div className="bg-blue-950 text-white text-center w-full md:py-16 py-10">
      <div className="md:px-20 px-10">
        <AnimateContent>
          <h2 className="text-center px-5">
            Follow our Zero to Hero framework
          </h2>
        </AnimateContent>
        <br />
        <div className="leading-loose">
          <AnimateContent>
            <ul className="md:text-left">
              <li>Sign up on our website </li>
              <li>
                Take a 30 minutes Assessment Get selected for the internship
              </li>
              <li>
                Start collaborating on a startup Get mentorship and build real
                world products
              </li>
              <li> Complete internship and get a paid certificate </li>
              <li>
                Stay back in the community and continue to enjoy a lifetime
                support
              </li>
            </ul>
          </AnimateContent>
        </div>

        <br />
        <AnimateContent>
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
        </AnimateContent>
      </div>
    </div>
  );
};

export default StartBuilding;
