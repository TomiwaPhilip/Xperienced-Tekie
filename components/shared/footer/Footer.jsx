import "./Footer.css";
import Image from "next/image";

import Xlogo from "../../../public/assets/images/x-icon.png";
import LinkedIn from "../../../public/assets/images/linkedin-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-upper">
        <div>
          <h2>MENU</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div>
          <h2>Internship Paths</h2>
          <p>
            Frontend Development Internship <br />
            Backend Development Internship
          </p>
        </div>
        <div>
          <h2>Contact or follow us</h2>
          <p>
            info@xperiencedtekie.pro <br />
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
      <p className="copyright">All rights reserved. Copyright 2023.</p>
    </footer>
  );
};

export default Footer;
