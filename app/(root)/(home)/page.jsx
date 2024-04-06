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
  return (
    <div className="">
      <Hero
        h2={"Join 3 months intensive Software Development Mentorship Program"}
        h3={
          "Learn how to build and deploy serverless fullstack web applications with NextJS. Get mentored by senior developers. Master your tech skills and get the job you want!"
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
