// import Card from "../shared/Card";
import DevCard from "./devCard/DevCard";

const FrontendCard = () => {
  return (
    <div className="">
      {/* <Card
        imageUrl={"/assets/images/fe.jpg"}
        imgAlt={"Frontend_Stack"}
        title={"Frontend Web Development with React"}
        description={"lorem..."}
      /> */}
      <DevCard
        heading="Frontend Development Internship"
        desc="You have opted in to join the Frontend Web Development internship. The
        details about this internship has been sent to your email. To get enrolled:"
      />
    </div>
  );
};

export default FrontendCard;
