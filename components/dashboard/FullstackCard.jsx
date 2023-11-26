// import Card from "../shared/Card";
import DevCard from "./devCard/DevCard";

const FullstackCard = () => {
  return (
    <div className="">
      {/* <Card
        imageUrl={"/assets/images/fe.jpg"}
        imgAlt={"Fullstack_Stack"}
        title={"Fullstack Web Development with React"}
        description={"lorem..."}
      /> */}

      <DevCard
        heading="FullStack Development Internship"
        desc="You have opted in to join the Fullstack Web Development internship. The
        details about this internship has been sent to your email. To get enrolled:"
      />
    </div>
  );
};

export default FullstackCard;
