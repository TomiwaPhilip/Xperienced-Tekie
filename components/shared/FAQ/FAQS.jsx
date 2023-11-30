"use client";

import { useState } from "react";

import "./FAQS.css";
import AnimateContent from "../AnimateContent";

const FAQS = () => {
  const questions = [
    {
      question: "How long is the internship duration?",
      answer: "The Internship is scheduled for 3 months",
    },
    {
      question: "How much is the certificate payment?",
      answer: "$3 or its equivalent in your local currency",
    },
    {
      question: "How do I pay for the certificate?",
      answer: "Pay online via the flutterwave wave link on your dashboard",
    },
    {
      question: "Where are you located?",
      answer: "We are located in Abuja Nigeria",
    },
    {
      question: "What kind of projects do I work on?",
      answer: "Real world projects tailored for industries need",
    },
    {
      question: "How do I get help if I am stuck on any project?",
      answer: "Contact your assigned mentor",
    },
    {
      question: "Can I connect with anyone during the internship?",
      answer:
        "Yes. You can connect with your team working on the project with you",
    },
    {
      question: "Why is the certificate fee so cheap?",
      answer: "For everyone to be able to afford",
    },
    {
      question:
        "Why do I need to pay for the certificate if the internship is free?",
      answer:
        "The certificate serves also as a testimonial that you interned with us",
    },
  ];

  return (
    <div className="faqs">
      <div className="content-width faqs-left">
        <AnimateContent>
          <h2 className="">Frequently asked questions (FAQs)</h2>
        </AnimateContent>
        {questions.map((q) => (
          <AnimateContent>
            <FAQ question={q} key={q} />
          </AnimateContent>
        ))}
      </div>
    </div>
  );
};

export default FAQS;

const FAQ = ({ question }) => {
  const [answerToggle, setAnswerToggle] = useState(false);

  const handleToggle = () => {
    setAnswerToggle(!answerToggle);
    console.log("clicked");
  };
  return (
    <div className="faq">
      <div>
        <p className="question">{question.question}</p>
        {answerToggle && (
          <p className="font-semi-bold text-gray-500 bg-white rounded-md p-2">
            {question.answer}
          </p>
        )}
      </div>
      <div>
        {!answerToggle ? (
          <svg
            onClick={() => handleToggle()}
            className="cursor-pointer"
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
        ) : (
          <svg
            onClick={() => handleToggle()}
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            viewBox="0 0 512 512"
          >
            <path
              fill="#be1338"
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            />
          </svg>
        )}
      </div>
    </div>
  );
};
