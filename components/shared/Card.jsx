import Image from "next/image";

import Button from "./Button";
import AnimatedContent from "./AnimateContent";


const Card = ({ imageUrl, imgAlt, title, description }) => {
  return (
    <AnimatedContent>
    <div className="max-w-sm overflow-hidden relative rounded-lg">
      <div className="rounded-full w-24 h-24 -top-8 -left-8 absolute animate-pulse bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 border-4 border-white" />
      <Image
        src={imageUrl}
        alt={imgAlt}
        width={300}
        height={200}
        className="w-full h-64 object-cover"
      />
      <div className="px-6 py-4 relative z-10 bg-white">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-700 text-base text-justify ">{description}</p>

        <div className="rounded-full w-24 h-24 -bottom-8 -right-8 absolute animate-pulse bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 border-4 border-white" />
        <Button
          params={"my_btn"}
          name={"Learn More"}
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
    </AnimatedContent>
  );
};

export default Card;
