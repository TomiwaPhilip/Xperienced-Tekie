import "./Mentorship.css";
import Image from "next/image";
import mentorshipImage from "../../../public/assets/images/mentorship.png";
import Button from "../button/Button";

const Mentorship = () => {
  return (
    <div className="mentorship-section relative flex-col md:flex-row py-15">
      <div className="content-width mentorship-left mb-10 md:w-1/2 md:pr-10">
        <h2 className="heading-2 text-blue-950 pt-16 pb-3">
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
      <div className="content-width mentorship-right pb-16 md:w-1/2">
        <Image
          className="w-full h-auto mt-10"
          src={mentorshipImage}
          alt="picture_of_the_author"
        />
      </div>
    </div>
  );
};

export default Mentorship;
