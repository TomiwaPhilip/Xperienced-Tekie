"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

import "./MainView.css";
import SideBar from "./../sidebar/SideBar";
import Form from "../../shared/Form";
import "../../../app/globals.css";
import FrontendCard from "../FrontendCard";
import BackendCard from "../BackendCard";
import FullstackCard from "../FullstackCard";

import Payments from "./../../Payments";
import CertDownload from "./../../CertDownload";
import PaymentSuccess from "./../../PaymentSuccess";
import CertDownloadForm from "./../../CertDownloadForm";

const MainView = () => {
  const [pathChosen, setPathChosen] = useState("");
  const [userExist, setUserExists] = useState(false);
  const { user } = useUser();
  const userId = user && user.id;

  const myuser = "JesusIsLord";

  const paths = ["frontend", "backend", "fullstack"];

  if (userId) {
    // useEffect(() => {
    fetch(`/api/user-details/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (paths.includes(data.path)) {
          setPathChosen(data.path);
          setUserExists(true);
        }
        console.log(pathChosen);
      });
    // }, []);
  }

  return (
    <main className="main-container">
      <div className="main-sidebar">
        <SideBar />
      </div>
      <div className="main-view">
        <section className="main-content">
          {/* <section> */}
          {pathChosen === "fullstack" && <FullstackCard />}
          {pathChosen === "frontend" && <FrontendCard />}
          {pathChosen === "backend" && <BackendCard />}
          {pathChosen === "" && <Form />}
          <Payments />
          <CertDownload />
          <PaymentSuccess />
          <CertDownloadForm />
        </section>
      </div>
    </main>
  );
};

export default MainView;
