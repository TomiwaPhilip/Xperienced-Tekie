import "./GetCertified.css";
import Image from "next/image";
import getCertifiedImage from "../../../public/assets/images/get-certified.png";
import Button from "../button/Button";

const GetCertified = () => {
  return (
    <div className="relative get-certified-section flex flex-col justify-between md:flex-row md:items-end">
      <div className="md:w-[500px] content-width get-certified-left">
        <h2 className="text-5xl text-blue-950 mb-5">Get Certified</h2>
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
      <div className="content-width get-certified-right">
        <Image
          className="w-[800px] lg:w-[1100px] h-[550px] lg:h-[750px]"
          src={getCertifiedImage}
          // width={708}
          // height={842}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default GetCertified;
