// import Link from "next/link";

const SuccessPayment = () => {
  return (
    <section className="w-[300px] h-[300px] py-10 gab-5 bg-pink-100 rounded-lg border-4 border-blue-950 flex flex-col gap-5 items-center justify-center">
      <div className="bg-blue-950 rounded-full p-3">
        <svg
          width="73"
          height="66"
          viewBox="0 0 73 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M62.7957 14.9901C63.9785 16.0457 63.9785 17.757 62.7957 18.8125L29.4784 48.5439C28.2955 49.5994 26.3778 49.5994 25.1949 48.5439L10.0507 35.0296C8.86786 33.9741 8.86786 32.2628 10.0507 31.2072C11.2335 30.1517 13.1513 30.1517 14.3341 31.2072L27.3367 42.8103L58.5123 14.9901C59.6951 13.9346 61.6128 13.9346 62.7957 14.9901Z"
            fill="white"
          />
        </svg>
      </div>
      <h3 className="font-[600] text-blue-950 text-2xl">Payment Successful</h3>
      <p className="text-blue-500">You can now download your certifcate</p>
    </section>
  );
};

export default SuccessPayment;
