import "./Mentorship.css";
import Image from "next/image";
import mentorshipImage from "../../../public/assets/images/mentorship.png";
import Button from "../button/Button";

const Hero = () => {
  return (
    <div className="mentorship-section">
      <div className="content-width mentorship-left">
        <h2 className="heading-2">Free Mentorship Access</h2>
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
      <div className="content-width mentorship-right">
        <Image
          src={mentorshipImage}
          width={257.833}
          height={169.731}
          alt="Picture of the author"
        />
        <div className="blue-ellipse">
          <svg
            width="124"
            height="124"
            viewBox="0 0 124 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="47.0373"
              cy="42.2507"
              rx="46.9627"
              ry="41.7493"
              fill="#00234E"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
