"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";

import "./MainView.css";
import SideBar from "./../sidebar/SideBar";
import Footer from "./../sidebar/DashboardFooter";
import Form from "../../shared/Form";
import "../../../app/globals.css";
import FrontendCard from "../FrontendCard";
import BackendCard from "../BackendCard";
import FullstackCard from "../FullstackCard";

import Payments from "./../../Payments";
import CertDownload from "./../../CertDownload";

const MainView = () => {
  const [pathChosen, setPathChosen] = useState("");
  const [project, setProject] = useState(true);
  const [payments, setPayments] = useState(false);
  const [certificate, setCertificate] = useState(false);

  const { user } = useUser();

  const userId = user && user.id;

  const paths = ["frontend", "backend", "fullstack"];

  const handleNav = (id) => {
    if (id === "project") {
      setProject(true);
      setPayments(false);
      setCertificate(false);
    }
    if (id === "payment") {
      setProject(false);
      setPayments(true);
      setCertificate(false);
    }
    if (id === "certificate") {
      setProject(false);
      setPayments(false);
      setCertificate(true);
    }
  };

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

  return (
    <main className="main-container">
      <div className="hidden  sm:block aside">
        <SideBar onClick={handleNav} />
      </div>
      <div className="main-content md:h-[700px]">
        <section className="">
          {project && pathChosen === "fullstack" && <FullstackCard />}
          {project && pathChosen === "frontend" && <FrontendCard />}
          {project && pathChosen === "backend" && <BackendCard />}
          {project && pathChosen === "" && <Form />}
          {payments && <Payments />}
          {certificate && <CertDownload />}
        </section>
      </div>
      <div className="sm:hidden footer">
        <Footer onClick={handleNav} />
      </div>
    </main>
  );
};

export default MainView;
