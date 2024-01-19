import Image from "next/image";
// import Button from "../../../components/shared/button/Button";
import Hero from "../../../../components/shared/hero/Hero";
import Mentorship from "../../../../components/shared/mentorship/Mentorship";
import StartDoing from ".././../../../components/home/start-doing/StartDoing";
import DevPath from "../../../../components/shared/dev-path/DevPath";
import GetCertified from "../../../../components/shared/get-certified/GetCertified";
import Testimonials from "../../../../components/shared/testimonials/Testimonials";
import Partners from ".././../../../components/shared/partners/Partners";
import GetingReady from ".././../../../components/shared/getting-ready/GetingReady";
import StartBuilding from ".././../../../components/shared/start-bulding/StartBuilding";
import FAQS from ".././../../../components/shared/FAQ/FAQS";

const Home = () => {
  return (
    <div className="">
        <Hero
        h2 = {"Become a top 1% Frontend Web Developer"}
        h3 = {"Get mentored by senior developers who have worked with different tech companies"} 
      />
      <StartDoing />
      <Mentorship />
      <DevPath />
      <GetCertified />
      <StartBuilding />
      <Testimonials />
      <Partners />
      <GetingReady />
      <FAQS />
    </div>
  );
};

export default Home;
