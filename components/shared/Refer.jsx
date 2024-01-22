"use client";

import React, { useState } from "react";

const Refer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    const textToCopy = `
    Do you need real-world web development mentorship and experience?
    Join Xperienced Tekie internship, where you would gain access:
    💡Get mentored by senior web developers
    💡Build projects that give you real-world experience
    💡Career guidance
    💡Be part of a community
    💡Job opportunities
    Go to https://www.xperiencedtekie.pro to sign up now!
        `;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(!copied);
    } catch (error) {
      console.error("Copy to clipboard failed", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Help others get mentored and grow!</h2>
      <p className="mt-4">
        Refer junior developers to sign up for the internship at Xperienced
        Tekie and get rewarded. Win different prizes ranging from cash (up to
        $100), data subscription, exclusive lifetime mentorship with a senior
        developer, and courses worth up to $80!
      </p>

      <h2 className="text-2xl font-bold mt-4">How to Refer:</h2>
      <ol className="list-decimal mt-2">
        <li>
          Sign up to Xperienced Tekie by clicking
          <a href="https://www.xperiencedtekie.pro" className="text-red-500">
            {" "}
            here{" "}
          </a>{" "}
          if you haven't already.
        </li>
        <li>
          Sign in to your dashboard and complete your assessment
          <a
            href="https://www.xperiencedtekie.pro/dashboard"
            className="text-red-500"
          >
            {" "}
            here{" "}
          </a>{" "}
          if you haven't already.
        </li>
        <li>
          Copy the below sentence to refer junior developers to sign up for the
          internship:
          <p className="bg-blue-900 py-2 px-4 mx-2 max-w-sm rounded-3xl text-white text-[12px] mt-2 copy-text">
            Do you need real-world web development mentorship and experience?
            <br />
            Join Xperienced Tekie internship, where you would gain access:
            <br />
            💡Get mentored by senior web developers
            <br />
            💡Build projects that give you real-world experience
            <br />
            💡Career guidance
            <br />
            💡Be part of a community
            <br />
            💡Job opportunities
            <br />
            Go to https://www.xperiencedtekie.pro to sign up now!
          </p>
          <button
            onClick={handleCopyClick}
            className="mt-2 bg-blue-900 text-white px-4 py-2 rounded"
          >
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
        </li>
        <li className="mt-2">
          Downlaod the e-flier by clicking{" "}
          <a href="/assets/images/e-flier.png" className="text-red-500">
            here
          </a>{" "}
        </li>
        <li>
          Share the copy and the e-flier to your developer friends on WhatsApp,
          LinkedIn, X and Facebook. You can even mention us on X (@XTekie43088).
        </li>
        <li>
          To win: tell them to complete their assessment and put your email
          address in the referree field in the assessment form.
        </li>
        <li>Sit back. We will send you an email once you win a prize!</li>
      </ol>

      <p className="mt-4">
        {" "}
        <strong>Note:</strong> There is a prize to win for every person you
        refer, so start referring as many as you can.
      </p>
    </div>
  );
};

export default Refer;
