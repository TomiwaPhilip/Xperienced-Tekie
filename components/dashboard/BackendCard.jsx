// import Card from "../shared/Card";
import DevCard from "./devCard/DevCard";

const BackendCard = () => {
  return (
    <div className="">
      {/* <Card
        imageUrl={"/assets/images/fe.jpg"}
        imgAlt={"Backend_Stack"}
        title={"Backend Web Development with React"}
        description={"lorem..."}
      /> */}
      <DevCard
        heading="Backend Development Internship"
        desc="You have opted in to join the Backend Web Development internship. The
        details about this internship has been sent to your email. To get enrolled:"
      />
    </div>
  );
};

export default BackendCard;
