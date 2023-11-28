"use client";
import Image from "next/image";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";

import Hero from "../../../components/shared/hero/Hero";
import Mentorship from "../../../components/shared/mentorship/Mentorship";
import StartDoing from "./../../../components/home/start-doing/StartDoing";
import DevPath from "../../../components/shared/dev-path/DevPath";
import GetCertified from "../../../components/shared/get-certified/GetCertified";
import Testimonials from "../../../components/shared/testimonials/Testimonials";
import Partners from "./../../../components/shared/partners/Partners";
import GetingReady from "./../../../components/shared/getting-ready/GetingReady";
import StartBuilding from "./../../../components/shared/start-bulding/StartBuilding";
import FAQS from "./../../../components/shared/FAQ/FAQS";

const Home = () => {
  const { user } = useUser();
  const userId = user && user.id;

  const [pathChosen, setPathChosen] = useState("");
  const paths = ["frontend", "backend", "fullstack"];

  if (userId) {
    fetch(`/api/user-details/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (paths.includes(data.path)) {
          setPathChosen(data.path);
        }
        console.log(pathChosen);
      });
  }

  let h2 = "Xperience. Build. Collaborate.";
  if (pathChosen === "fullstack") {
    h2 = "Xperience Fullstack Web Dev Internship";
  } else if (pathChosen === "frontend") {
    h2 = "Xperience Front Web Dev Internship";
  } else if (pathChosen === "backend") {
    h2 = "Xperience Backend Web Dev Internship";
  }

  return (
    <div className="">
      <Hero
        h2={h2}
        h3={
          "Xperience an internship that bridges the gap between you and your next job as a developer!"
        }
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
