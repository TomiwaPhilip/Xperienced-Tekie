import Spinner from "./Spinner";

const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    </div>
  );
};

export default LoadingSkeleton;
