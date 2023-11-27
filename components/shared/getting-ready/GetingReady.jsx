import Button from "../button/Button";
import AnimateContent from "../AnimateContent";

const GetingReady = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-10/12 md:w-[600px] mt-5 text-white">
        <div className="bg-black text-center p-5 rounded-lg shadow-lg">
          <AnimateContent>
            <h2 className="mb-5">
              Ready to start this amazing journey with Us?
            </h2>
          </AnimateContent>
          <AnimateContent>
            <p>
              Click the sign-up button now to join the next cohort and start
              building the next big product the world needs! Or read the FAQs
              below to learn more about the internship!
            </p>
          </AnimateContent>
          <AnimateContent>
            <p>Read the FAQs below to learn more about the internship</p>
          </AnimateContent>
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
    </div>
  );
};

export default GetingReady;
