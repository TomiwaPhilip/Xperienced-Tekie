import "./GetCertified.css";
import Image from "next/image";
import getCertifiedImage from "../../../public/assets/images/get-certified.png";
import Button from "../button/Button";

const GetCertified = () => {
  return (
    <div className="get-certified-section">
      <div className="content-width get-certified-left">
        <h2 className="heading-2">Get Certified</h2>
        <p>
          Certification is key and compulsory. Make your resume standout to
          potential employers.
        </p>
        <p>
          Showcase your skills to potential employers, get hired and continue
          doing big things!
        </p>
        <p>
          Pay for certificate only when you are satisfied with the internship.
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
      <div className="content-width get-certified-right">
        <Image
          src={getCertifiedImage}
          width={708}
          height={842}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default GetCertified;
