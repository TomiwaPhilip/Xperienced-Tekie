import "./Partners.css";
import Button from "../button/Button";
import Image from "next/image";
import Afriverse from "../../../public/assets/images/afriverse-logo.png";
import SMEDAN from "../../../public/assets/images/smedan.jpeg";
import AnimateContent from "../AnimateContent";

const Partners = () => {
  return (
    <div className="partners">
      <div className="content-width partners-left">
        <AnimateContent>
          <h2 className="">Our Supporters and Partners</h2>
        </AnimateContent>
        <div className="partners-logo">
          <div className="afriverse-logo">
            <AnimateContent>
            <Image
              src={Afriverse}
              width={190}
              height={57}
              alt="afriverse logo"
            />
            </AnimateContent>
          </div>
          <AnimateContent>
          <Image src={SMEDAN} width={241} height={90} alt="SMEDAN logo" />
          </AnimateContent>
        </div>
      </div>
    </div>
  );
};

export default Partners;
