import Button from "../../../../components/shared/button/Button";
import testimonials from "../../../../constants/testimonials"
import GetingReady from "../../../../components/shared/getting-ready/GetingReady";
import TestimonialsCard from "../../../../components/shared/testimonials/TestimonialsCard";
import FAQS from "../../../../components/shared/FAQ/FAQS";

const Home = () => {
  return (
    <div className="">
      <div className="p-10 text-center">
        <p className="font-bold text-[28px] text-[#00234E] text-center sm:text-[40px]">LOOK AT WHAT OUR MENTEES ARE SAYING ABOUT US!</p>
        <Button
              params={"btn-signup"}
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
      </div>
        <div className="mt-10 p-10">
          <p className="text-[#00234E] text-[32px] font-bold"> Written Letters to us by Our Mentees </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-1">
            {testimonials.map((testimonial, index) => (
                <TestimonialsCard key={index} {...testimonial} />
              ))}
          </div>
        </div>
        <div className="mt-10 p-10">
          <p className="text-[#00234E] text-[32px] font-bold"> Videos by Our Mentees </p>

          <div className="mt-5">

          </div>
        </div>
      <GetingReady />
      <FAQS />
    </div>
  );
};

export default Home;
