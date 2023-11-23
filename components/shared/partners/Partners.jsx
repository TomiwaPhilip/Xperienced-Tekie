import "./Partners.css";
import Button from "../button/Button";
import Image from "next/image";
import Afriverse from "../../../public/assets/images/afriverse-logo.png";
import SMEDAN from "../../../public/assets/images/smedan.jpeg";

const Partners = () => {
  return (
    <div className="partners">
      <div className="content-width partners-left">
        <h2 className="">Our Supporters and Partners</h2>
        <div className="partners-logo">
          <div className="afriverse-logo">
            <Image
              src={Afriverse}
              width={190}
              height={57}
              alt="afriverse logo"
            />
          </div>
          <Image src={SMEDAN} width={241} height={90} alt="SMEDAN logo" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
