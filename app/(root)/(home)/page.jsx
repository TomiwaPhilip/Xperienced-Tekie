import Button from "../../../components/shared/Button";
import Card from "../../../components/shared/Card";
import cardData from "../../../constants/card";
import AnimateContent from "../../../components/shared/AnimateContent";

const Home = () => {
  return (
    <section>
      <div className="mt-[100px] max-sm:mt-[50px]">
        <AnimateContent>
          <div className="text-center mx-auto">
            <h1 className="px-6 text-[70px] max-sm:text-[50px] font-[1000] gradient_text">
              <span className="">Build. </span>
              <br className="md:hidden" />
              <span className="">Collaborate. </span>
              <br className="md:hidden" />
              <span>Xperience.</span>
            </h1>
            <p className="px-6 text-[30px] max-sm:text-[20px] leading-9 flex mx-6 font-[700]">
              Build what we build in Real World, receive mentorship and guidance
              by collaborating on projects that mirror real world for six weeks!
            </p>
            <br />
            <p className="px-6 text-[30px] max-sm:text-[20px] leading-9 flex mx-6 font-[400]">
              Don't go to the real world unprepared! Our goal is to get every
              Tekie to become Xperienced, Bold, and Sharp by building projects
              that is bigger than their capacity.
            </p>
            <br /> <br />
            <Button
              params={"my_btn"}
              name={"Join Us Build"}
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
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                    <path
                      d="M12.9117 8L17.5 12L12.9117 16"
                      stroke="#007bff"
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
        </AnimateContent>

        {/* The Programs/services section */}
        <AnimateContent>
          <div className="mt-[80px] mx-[4vw]">
            <h1 className="font-[700] text-[50px] text-center p-7">
              Here are our programs...
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  imageUrl={card.imageUrl}
                  imgAlt={card.imgAlt}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </AnimateContent>

        {/* The about section */}
        <AnimateContent>
          <div className="mt-[80px] mx-[4vw]">
            <h1 className="font-[700] text-[50px] text-center p-7">
              Who We Are...
            </h1>
            <p>
              We are team of passionate individuals. Our mission is to get every
              coding Tekie Xperienced and prepared for the real world. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Saepe optio ducimus
              odio eos architecto illum, incidunt eveniet, recusandae quia
              voluptatibus dicta assumenda dolorem, deserunt eligendi ea earum!
              Iste, alias id?
            </p>
            <div className="text-center">
              <Button
                params={"my_btn"}
                name={"Learn More About Us"}
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
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />{" "}
                      <path
                        d="M12.9117 8L17.5 12L12.9117 16"
                        stroke="#007bff"
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
          </div>
        </AnimateContent>

        {/* The footer section */}
        <AnimateContent>
          <div className="mt-[80px] bg-slate-950 p-10">
            <p className="text-center text-white">
              Website Developed by Xperienced Tekie
            </p>
          </div>
        </AnimateContent>
      </div>
    </section>
  );

};

export default Home;
