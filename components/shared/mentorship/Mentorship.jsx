import "./Mentorship.css";
import Image from "next/image";
import mentorshipImage from "../../../public/assets/images/mentorship.png";
import Button from "../button/Button";
import AnimateContent from "../AnimateContent";

const Mentorship = () => {
  return (
    <div className="mentorship-section relative flex-col md:flex-row py-15">
      <div className="content-width mentorship-left mb-10 md:w-1/2 md:pr-10">
        <AnimateContent>
          <h2 className="heading-2 text-blue-950 pt-16 pb-3">
            Software Development has changed
          </h2>
        </AnimateContent>
        <AnimateContent>
          <p>
            Let us guide you on how to craft software for businesses solutions.
          </p>
        </AnimateContent>
        <AnimateContent>
          <p>
            Get familiar with tips and tricks used by senior developers to create good 
            software and  ship them to the real world!
          </p>
        </AnimateContent>
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
      <div className="content-width mentorship-right pb-16 md:w-1/2">
        <AnimateContent>
          <Image
            className="w-full h-auto mt-10"
            src={mentorshipImage}
            alt="picture_of_the_author"
          />
        </AnimateContent>
      </div>
    </div>
  );
};

export default Mentorship;
