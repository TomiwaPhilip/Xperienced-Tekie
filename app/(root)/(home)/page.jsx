import Image from "next/image";
// import Button from "../../../components/shared/button/Button";
import Hero from "../../../components/shared/hero/Hero";
import Mentorship from "../../../components/shared/mentorship/Mentorship";
import "./home.css";
import StartDoing from "./../../../components/home/start-doing/StartDoing";
import DevPath from "../../../components/shared/dev-path/DevPath";
import GetCertified from "../../../components/shared/get-certified/GetCertified";
import Testimonials from "../../../components/shared/testimonials/Testimonials";
import Partners from "./../../../components/shared/partners/Partners";
import GetingReady from "./../../../components/shared/getting-ready/GetingReady";
import StartBuilding from "./../../../components/shared/start-bulding/StartBuilding";
import FAQS from "./../../../components/shared/FAQ/FAQS";

const Home = () => {
  return (
    <div className="home-page flex flex-col items-center">
      <Hero />
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
