import Card from "../shared/Card";

const FrontendCard = () => {
  return (
    <div className="">
      <Card
        imageUrl={"/assets/images/fe.jpg"}
        imgAlt={"Frontend_Stack"}
        title={"Frontend Web Development with React"}
        description={"lorem..."}
      />
    </div>
  );
};

export default FrontendCard;
