import "./DevCard.css";

const DevCard = ({ heading, desc }) => {
  return (
    <article className="dev-card">
      <h3>{heading}</h3>
      <p>{desc}</p>
      <ol>
        <li>
          Complete the assessment now in order to get started quickly. Check
          your email for the link.
        </li>
        <li>
          Also, join our discord server, where you will get to meet your mentor
          for the first time!
        </li>
        <li>
          You will also need to pay for your certification two weeks into th
          internship
        </li>
      </ol>
    </article>
  );
};

export default DevCard;
