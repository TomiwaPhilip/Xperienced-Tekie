import "./DevPath.css";
import Paths from "./Paths";

const DevPath = () => {
  return (
    <div className="dev-path">
      <h2>There is space for every developer...</h2>
      <div className="paths">
        <Paths
          color="white"
          backgroundColor="#4BA3C5"
          heading="Frontend Web Development Internship"
          description="Our frontend Web development internship with React Js provides you with real world experience with skills that would make you job ready!"
        />
        <Paths
          color="#000"
          backgroundColor="#fff"
          heading="Backend Web Development Internship"
          description="Our frontend Web development internship with React Js provides you with real world experience with skills that would make you job ready!"
        />
      </div>
    </div>
  );
};

export default DevPath;
