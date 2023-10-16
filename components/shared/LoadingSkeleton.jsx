import Image from "next/image";

const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center">
        <Image
          src="assets/icons/pulse.svg"
          width={100}
          height={100}
          alt="loader"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default LoadingSkeleton;
