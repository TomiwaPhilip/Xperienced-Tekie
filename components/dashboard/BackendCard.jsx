import Card from "../shared/Card";

const BackendCard = () => {
  return (
    <div className="">
      <Card
        imageUrl={"/assets/images/fe.jpg"}
        imgAlt={"Backend_Stack"}
        title={"Backend Web Development with React"}
        description={"lorem..."}
      />
    </div>
  );
};

export default BackendCard;
