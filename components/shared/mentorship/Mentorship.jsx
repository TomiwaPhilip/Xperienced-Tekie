import "./Mentorship.css";
import Image from "next/image";
import mentorshipImage from "../../../public/assets/images/mentorship.png";
import Button from "../button/Button";

const Mentorship = () => {
  return (
    <div className="mentorship-section relative flex-col md:flex-row py-20">
      <div className="content-width  mentorship-left mb-10">
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
        <div className="absolute -top-36 -right-40 sm:-top-20 ">
          <svg
            width="250"
            height="250"
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

        <div className="absolute -top-[80px] sm:-top-[30px] left-[45%]">
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

        <h2 className="heading-2 text-blue-950 pt-16">
          {" "}
          Free Mentorship Access
        </h2>
        <p>
          Take charge of your future, Supercharge your career by building real
          world projects and collaborating with other developers.
        </p>
        <p>
          Be in a live code review and analysis led by team leaders and senior
          software developers.
        </p>
        <p>
          Get hands-on experience and community feedbacks while working on
          projects.
        </p>
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
      <div className="content-width mentorship-right pb-16">
        <Image
          className="w-10/12 mt-10"
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
