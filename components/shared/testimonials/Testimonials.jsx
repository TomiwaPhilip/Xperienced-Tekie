import "./Testimonials.css";
import Image from "next/image";
// import getCertifiedImage from "../../../public/assets/images/mentorship.png";
import Button from "../button/Button";
import AnimateContent from "../AnimateContent";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ridwan AbdulGaniyu",
      testimony:
        "What frustrated me then was that there was no mentorship for me... and Xperienced Tekie brought the solutions to me with experienced nebtorship which solves my problem. Life feels better and full of opportunies now that my problem is getting solved.",
      bgColor: "#4BA3C5"
    },
    {
      name: "Friday Landry",
      testimony:
        "Actually they did put me on the way, and that facilitate my journey to mastering JavaScript. I see a great developer rising in me!",
        bgColor: "#F2E9EB"
      },
    {
      name: "Lawson Ebere",
      testimony:
        "If feels good knowing that my quest of being a developer is getting solved. Thanks to Xperienced Tekie!",
        bgColor: "#EB9ECC"
      },
  ];

  return (
    <div className="relative testimonials-section">
      <div className="testimonials-left">
        <AnimateContent>
          <h2 className="heading-2 text-center">Don't take Our word for it</h2>
        </AnimateContent>
        <br /> <br />
        <div className="flex flex-wrap justify-center gap-5 mx-[40px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialsCard key={index} {...testimonial} />
          ))}
        </div>
      </div>

      <br />
      <AnimateContent>
        <div className="text-center">
          <Button
            params={"btn-signup"}
            name={"Read More Reviews"}
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
            link={"/testimonials"}
          />
        </div>
      </AnimateContent>
    </div>
  );
};

export default Testimonials;
