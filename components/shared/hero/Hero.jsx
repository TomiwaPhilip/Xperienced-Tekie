import Image from "next/image";
import heroImage from "../../../public/assets/images/main-hero.png";
import Button from "../button/Button";

const Hero = ({h2, h3}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:px-10 sm:flex-col">
      <div className="space-y-5 text-center md:text-left px-5 mb-5 md:w-1/2 sm:w-full">
        <h2 className="text-5xl font-extrabold text-blue-950">
          {h2}
        </h2>
        <h3 className="text-xl">
          {h3}
        </h3>
        <p className="text-xl">
          Work as an intern on a fast-paced start-up that provides you real
          world Xperience, mentorship, collaboration, and certification.
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
      <div className="flex items-center justify-center md:-z-10 md:flex-grow-0 flex-grow">
        <Image
          className="w-full max-w-md"
          src={heroImage}
          width={800}
          height={800}
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default Hero;
