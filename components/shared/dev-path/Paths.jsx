import "./DevPath.css";
import "../../../app/globals.css";
import Button from "../button/Button";
const Paths = ({ color, backgroundColor, heading, description }) => {
  const style = {
    color,
    backgroundColor,
  };
  return (
    <div
      className="w-[250px] p-5 rounded-lg flex flex-col items-center md:w-[300px] lg:w-[400px] "
      style={style}
    >
      <h3 className="text-3xl mb-5">{heading}</h3>
      <p>{description}</p>
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
  );
};

export default Paths;
