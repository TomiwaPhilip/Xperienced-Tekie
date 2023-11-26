import "./Mentorship.css";
import Image from "next/image";
import mentorshipImage from "../../../public/assets/images/mentorship.png";
import Button from "../button/Button";

const Mentorship = () => {
  return (
    <div className="relative flex w-full flex-col py-24 px-10 md:flex-row md:px-32 items-center justify-between">
      <div className="w-[50]">
        <div className="absolute -top-36 -left-40 sm:-top-24">
          <svg
            width="300"
            height="300"
            viewBox="0 0 124 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="47.0373"
              cy="42.2507"
              rx="46.9627"
              ry="41.7493"
              fill="#777"
            />
          </svg>
        </div>

        <div className="absolute top-0 right-0  ">
          <svg
            width="120"
            height="120"
            viewBox="0 0 124 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="47.0373"
              cy="42.2507"
              rx="46.9627"
              ry="41.7493"
              fill="#0bc1c8"
            />
          </svg>
        </div>

        <div className="absolute -top-[32px] sm:-top-[30px] left-[45%]">
          <svg
            width="70"
            height="73"
            viewBox="0 0 70 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M59.6216 70.0768L3.10333 29.1343L67.7338 2.79961L59.6216 70.0768Z"
              stroke="#4BA3C5"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div className="md:w-[400px] lg:w=[500px] ">
          <h2 className="text-blue-950 mb-5 text-center md:text-left">
            {" "}
            Free Mentorship Access
          </h2>
          <p className="mb-5">
            Take charge of your future, Supercharge your career by building real
            world projects and collaborating with other developers.
          </p>
          <p className="mb-5">
            Be in a live code review and analysis led by team leaders and senior
            software developers.
          </p>
          <p>
            Get hands-on experience and community feedbacks while working on
            projects.
          </p>
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
      <div className="mt-16 md:mt-0">
        <Image
          className="w-[300px] md:w-[500px]"
          src={mentorshipImage}
          // width={}
          // height={}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Mentorship;
