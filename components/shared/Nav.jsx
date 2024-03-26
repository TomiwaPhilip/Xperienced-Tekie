"use client";

import Link from "next/link";
import X from "../../public/assets/images/X.png";
import Image from "next/image";
import { useState } from "react";

export default function PrimaryNavbar() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className="flex flex-col">
      <div className="flex justify-between md:px-10 px-2 pr-4 items-center">
        <div>
          <Link href="/" className="">
            <Image src={X} width="70" height="70" alt="xperienced_tekie_logo" />
          </Link>
        </div>
        <div className="relative hidden md:block font-semibold">
          <ul className="flex gap-4 items-center">
            <Link href="/">
              <li className="cursor-pointer">Home</li>
            </Link>
              <Link href="https://dash.xperiencedtekie.pro">
                <li className="rounded-lg bg-blue-950 text-white p-2 hover:bg-blue-700 cursor-pointer">
                  Sign In
                </li>
              </Link>
          </ul>
        </div>
        <div className="md:hidden" onClick={() => setMobileNav(!mobileNav)}>
          <svg
            className="cursor-pointer"
            width="40"
            height="34"
            viewBox="0 0 40 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33337 8.50001C3.33337 7.71761 4.07957 7.08334 5.00004 7.08334H35C35.9205 7.08334 36.6667 7.71761 36.6667 8.50001C36.6667 9.28241 35.9205 9.91668 35 9.91668H5.00004C4.07957 9.91668 3.33337 9.28241 3.33337 8.50001Z"
              fill="#00234E"
            />
            <path
              d="M3.33337 17C3.33337 16.2176 4.07957 15.5833 5.00004 15.5833H35C35.9205 15.5833 36.6667 16.2176 36.6667 17C36.6667 17.7824 35.9205 18.4167 35 18.4167H5.00004C4.07957 18.4167 3.33337 17.7824 3.33337 17Z"
              fill="#00234E"
            />
            <path
              d="M5.00004 24.0833C4.07957 24.0833 3.33337 24.7176 3.33337 25.5C3.33337 26.2824 4.07957 26.9167 5.00004 26.9167H35C35.9205 26.9167 36.6667 26.2824 36.6667 25.5C36.6667 24.7176 35.9205 24.0833 35 24.0833H5.00004Z"
              fill="#00234E"
            />
          </svg>
        </div>
      </div>
      <div
        className="float-right"
        style={{ alignSelf: "end", marginBottom: "20px" }}
      >
        {mobileNav && (
          <MobileNav
            onClick={() => setMobileNav(!mobileNav)}
          />
        )}
      </div>
    </nav>
  );
}

function MobileNav({ onClick }) {
  return (
    <div className="relative w-[250px] py-5 bg-blue-950 flex flex-col gap-5 font-semibold">
      <ul className="flex flex-col gap-4 items-center ">
        <Link href="/">
          <li
            onClick={onClick}
            className=" cursor-pointer py-2 px-5 text-white hover:bg-blue-700"
          >
            Home
          </li>
        </Link>
          <Link href="https://dash.xperiencedtekie.pro">
            <li
              onClick={onClick}
              className="rounded-lg bg-blue-950 text-white p-2 hover:bg-blue-700 cursor-pointer"
            >
              Sign In
            </li>
          </Link>
      </ul>
    </div>
  );
}
