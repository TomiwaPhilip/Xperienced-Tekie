import Link from "next/link";
import Image from "next/image";

import Xlogo from "../../../public/assets/images/x-icon.png";
import LinkedIn from "../../../public/assets/images/linkedin-icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-5 flex flex-col gap-5 items-center ">
      <div className="flex flex-col gap-5 sm:flex-row md:gap-28">
        <div>
          <h3 className="font-bold text-2xl text-blue-950">MENU</h3>
          <ul className="text-lg">
            <Link href="/"><li>Home</li></Link>
            <Link href="/"><li>Terms and Conditions</li></Link>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl text-blue-950">Internship Paths</h3>
          <p className="text-lg">
            <Link href="/frontend-path">Frontend Development Internship </Link> <br />
           <Link href="/backend-path"> Backend Development Internship </Link>
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl text-blue-950">
            Contact or follow us
          </h3>
          <p className="text-lg">
            admin@xperiencedtekie.pro <br />
            +2348120915599
          </p>
          <div className="social-icons-logo">
            <Image
              src={Xlogo}
              width={40}
              height={40}
              alt="X (formerly twitter) logo"
            />
            <Image
              src={LinkedIn}
              width={40}
              height={40}
              alt="X (formerly twitter) logo"
            />
          </div>
        </div>
      </div>
      <p className="text-blue-950">All rights reserved. Copyright 2023.</p>
    </footer>
  );
};

export default Footer;
