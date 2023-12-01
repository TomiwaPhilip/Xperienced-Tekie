import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

const NullPayment = () => {
  const [location, setLocation] = useState(null);
  const { user } = useUser();
  const userId = user && user.id;
  const paths = ["frontend", "backend", "fullstack"];
  const email = user && user.primaryEmailAddress;

  if (userId) {
    fetch(`/api/user-details/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (paths.includes(data.path)) {
          setLocation(data.location);
        }
        console.log(location);
      });
  }

  let countryLink = "";
  if (location === "Nigeria") {
    countryLink = "https://flutterwave.com/pay/eq39mcs3qwor";
  } else {
    countryLink = "https://flutterwave.com/pay/zauiapy1p0xb";
  }

  return (
    <section className="w-[300px] md:w-[400px] py-5 gab-5 bg-pink-100 rounded-lg border-4 border-blue-950 flex flex-col gap-5 items-center">
      <h2 className="font-[600] text-blue-950 text-2xl">Get Certified</h2>
      <h2 className="text-blue-500">14 days: 4:hours 55:min 10secs</h2>
      <p className="text-center">
        Left to make payment of 3$ for your certificate.
      </p>
      <p className="text-red-950 text-center p-3 text-[20px] font-semibold">
        Please use the email address you used at registration when making
        payments.
      </p>
      <button className="flex text-white bg-blue-950 px-5 items-center rounded-lg">
        <Link href={countryLink} className="flex items-center">
          <span>Go</span>
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6787 10.4882C11.0278 9.83728 9.97253 9.83728 9.32165 10.4882C8.67078 11.139 8.67078 12.1943 9.32165 12.8452L16.4765 20L9.32165 27.1548C8.67078 27.8057 8.67078 28.861 9.32165 29.5118C9.97253 30.1627 11.0278 30.1627 11.6787 29.5118L20.012 21.1785C20.6629 20.5276 20.6629 19.4724 20.012 18.8215L11.6787 10.4882Z"
              fill="white"
            />
            <path
              d="M23.3453 10.4882C22.6945 9.83728 21.6392 9.83728 20.9883 10.4882C20.3374 11.139 20.3374 12.1943 20.9883 12.8452L28.1431 20L20.9883 27.1548C20.3374 27.8057 20.3374 28.861 20.9883 29.5118C21.6392 30.1627 22.6945 30.1627 23.3453 29.5118L31.6787 21.1785C32.3295 20.5276 32.3295 19.4724 31.6787 18.8215L23.3453 10.4882Z"
              fill="white"
            />
            <path
              d="M11.6787 10.4882C11.0278 9.83728 9.97253 9.83728 9.32165 10.4882C8.67078 11.139 8.67078 12.1943 9.32165 12.8452L16.4765 20L9.32165 27.1548C8.67078 27.8057 8.67078 28.861 9.32165 29.5118C9.97253 30.1627 11.0278 30.1627 11.6787 29.5118L20.012 21.1785C20.6629 20.5276 20.6629 19.4724 20.012 18.8215L11.6787 10.4882Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.3453 10.4882C22.6945 9.83728 21.6392 9.83728 20.9883 10.4882C20.3374 11.139 20.3374 12.1943 20.9883 12.8452L28.1431 20L20.9883 27.1548C20.3374 27.8057 20.3374 28.861 20.9883 29.5118C21.6392 30.1627 22.6945 30.1627 23.3453 29.5118L31.6787 21.1785C32.3295 20.5276 32.3295 19.4724 31.6787 18.8215L23.3453 10.4882Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </button>
    </section>
  );
};

export default NullPayment;
