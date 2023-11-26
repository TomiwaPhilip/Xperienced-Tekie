import "./DevCard.css";

const DevCard = ({ heading, desc }) => {
  return (
    <article className="mt-24 w-[300px] bg-blue-950 text-white p-10 rounded-lg sm:w-[500px] lg:w-[700px]">
      <h3 className="mb-4 font-bold text-2xl">{heading}</h3>
      <p className="mb-4 text-lg">{desc}</p>
      <ol className="list-decimal text-left">
        <li className="mb-4">
          Complete the assessment now in order to get started quickly. Check
          your email for the link.
        </li>
        <li className="mb-4">
          Also, join our discord server, where you will get to meet your mentor
          for the first time!
        </li>
        <li className="mb-4">
          You will also need to pay for your certification two weeks into th
          internship
        </li>
      </ol>
    </article>
  );
};

export default DevCard;
