const CurvedLine = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="block w-full -mt-1"
    >
      <defs>
        <radialGradient id="gradient" cx="50%" cy="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: "#FFFFFF" }} />
          <stop offset="100%" style={{ stopColor: "#ecf6f7" }} />
        </radialGradient>
      </defs>
      <path
        fill="url(#gradient)"
        fillOpacity="1"
        d="M0,64L1440,192L1440,0L0,0Z"
      ></path>
    </svg>
  );
};

export default CurvedLine;
