"use client";

import { useState } from "react";

import "./FAQS.css";
// import Button from "../button/Button";

const FAQS = () => {
  const questions = [
    "How long is the internship duration?",
    "How much is the certificate payment?",
    "How do I pay for the certificate?",
    "Where are you located?",
    "What kind of projects do I work on?",
    "How do I get help if I am stuck on any project?",
    "Can I connect with anyone during the internship?",
    "Why is the certificate fee so cheap?",
    "Why do I need to pay for the certificate if the internship is free?",
  ];

  return (
    <div className="faqs">
      <div className="content-width faqs-left">
        <h2 className="">Frequently asked questions (FAQs)</h2>
        {questions.map((q) => (
          <FAQ question={q} key={q.index} />
        ))}
      </div>
    </div>
  );
};

export default FAQS;

const FAQ = ({ question }) => {
  const [answerToggle, setAnswerToggle] = useState(false);

  const handleToggle = () => {
    setAnswerToggle(true);
  };
  return (
    <div className="faq">
      <p className="question">{!answerToggle && question}</p>
      <div onClick={() => handleToggle}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon-chevron-down">
            <path
              id="Shape"
              d="M11.1785 13.8217C10.5276 13.1708 9.47234 13.1708 8.82147 13.8217C8.17059 14.4725 8.17059 15.5278 8.82147 16.1787L18.8215 26.1787C19.4723 26.8295 20.5276 26.8295 21.1785 26.1787L31.1785 16.1787C31.8294 15.5278 31.8294 14.4725 31.1785 13.8217C30.5276 13.1708 29.4723 13.1708 28.8215 13.8217L20 22.6431L11.1785 13.8217Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
