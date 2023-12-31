import "./DevCard.css";

const DevCard = ({ heading, desc }) => {
  return (
    <article className="mt-24 w-[320px] bg-blue-950 text-white p-3 pl-5 rounded-lg sm:w-[500px] lg:w-[700px]">
      <h3 className="mb-4 font-bold md:text-2xl">{heading}</h3>
      <p className="mb-4 md:text-lg">{desc}</p>
      <ol className="list-decimal text-left">
        <li className="mb-4">
          Complete the assessment now in order to get started quickly.{" "}
          <a href="/assessment">Click here to get started now!</a>.
        </li>
        <li className="mb-4">
          Also, join our discord server, where you will get to meet your mentor
          for the first time!
        </li>
        <li className="mb-4">
          You will also need to pay $3 for your certification two weeks into the
          internship
        </li>
      </ol>
    </article>
  );
};

export default DevCard;
