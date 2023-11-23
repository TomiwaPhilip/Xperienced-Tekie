import "./Hero.css";
import Image from "next/image";
import heroImage from "../../../public/assets/images/hero-image.png";
import Button from "../button/Button";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="content-width hero-left">
        <h2 className="heading-2">Xperience. Build. Collaborate.</h2>
        <p>
          Xperience an internship that bridges the gap between you and your next
          job as a developer!
        </p>
        <p>
          Work as an intern on a fast-paced start-up that provides you real
          world Xperience, mentorship, collaboration, and certification.
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
      <div className="content-width hero-right">
        <Image
          src={heroImage}
          // width={257.833}
          // height={169.731}
          alt="hero image"
        />
        <div className="blue-accent-ellipse">
          <svg
            width="94"
            height="84"
            viewBox="0 0 94 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="47.0373"
              cy="42.2507"
              rx="46.9627"
              ry="41.7493"
              fill="#4BA3C5"
            />
          </svg>
        </div>
        <div className="primary-color-ellipse">
          <svg
            width="118"
            height="105"
            viewBox="0 0 118 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="58.517"
              cy="52.4832"
              rx="58.517"
              ry="52.3042"
              fill="#00234E"
            />
          </svg>
        </div>
        <div className="white-color-ellipse">
          <svg
            width="118"
            height="106"
            viewBox="0 0 118 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="58.5742"
              cy="52.8163"
              rx="58.517"
              ry="52.3042"
              fill="#F2E9EB"
            />
          </svg>
        </div>
        <div className="pink-zigzag">
          <svg
            width="208"
            height="170"
            viewBox="0 0 208 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.323 78.9633C34.7864 71.1112 43.4672 65.7107 54.1362 61.5326C62.5021 58.2564 71.0752 55.1741 79.9933 53.5298C90.6314 51.5683 118.203 48.5922 129.237 56.9648C146.111 69.7684 113.558 96.3442 106.727 102.972C95.2011 114.154 81.5102 123.527 70.1923 134.8C68.7377 136.249 66.8681 137.774 66.6464 139.733C66.1543 144.083 76.6802 141.498 80.9495 139.551C106.692 127.807 126.127 106.002 143.022 85.3947C157.556 67.6678 171.745 47.745 180.792 27"
              stroke="#EB9ECC"
              stroke-width="54"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
