"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import jsPDF from "jspdf";

const CertDownloadForm = () => {
  const [path, setPath] = useState(null);

  const paths = ["frontend", "backend"];

  const { user } = useUser();

  const userId = user && user.id;
  const user_firstName = user && user.firstName;
  const user_lastName = user && user.lastName;

  if (userId) {
    fetch(`/api/user-details/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (paths.includes(data.path)) {
          setPath(data.path);
        }
        console.log(path);
      });
  }

  const handlePDF = () => {
    // Create a new jsPDF document
    var doc = new jsPDF({
      orientation: "landscape",
      format: "a4",
      unit: "mm",
    });

    // Load the image
    var img = new Image();
    img.src = "/assets/images/Xperienced Tekie (3).png";

    // Add the image to the document
    doc.addImage(img, 0, 0, 297, 210);

    // Get the dimensions of the bigger rectangle
    var bigRect = {
      x: 10,
      y: 118,
      width: 170,
      height: 100,
    };

    // Get the dimensions of the smaller rectangle
    var smallRect = {
      x: 76,
      y: 132,
      width: 170,
      height: 45,
    };

    // Add text to the bigger rectangle
    doc.setFontSize(25);
    doc.setTextColor(0, 0, 0); // Black
    doc.text(
      bigRect.x + 5,
      bigRect.y + 5,
      `${user_firstName} ${user_lastName}`,
    );

    // Add text to the smaller rectangle
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); // Black
    doc.text(smallRect.x + 5, smallRect.y + 5, `${path}`);

    // Save the PDF document
    doc.save("certificate.pdf");
  };

  return (
    <div className="flex flex-col py-10 items-center w-[300px] md:w-[400px] border-4 border-blue-950  bg-pink-100 rounded-xl">
      <h3 className="font-[600] p-3 text-2xl text-blue-950 text-center">
        Congratulations!!!
      </h3>
      <p className="text-center font-bold">
        Weldone on achieving this feat!! Please click the below button to
        download your certificate.
      </p>
      <br /> <br />
      <button
        type="submit"
        className="flex text-white bg-blue-950 px-5 items-center rounded-lg"
        onClick={handlePDF}
      >
        <span>Download</span>
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6787 10.4882C11.0278 9.83728 9.97253 9.83728 9.32165 10.4882C8.67078 11.139 8.67078 12.1943 9.32165 12.8452L16.4765 20L9.32165 27.1548C8.67078 27.8057 8.67078 28.861 9.32165 29.5118C9.97253 30.1627 11.0278 30.1627 11.6787 29.5118L20.012 21.1785C20.6629 20.5276 20.6629 19.4724 20.012 18.8215L11.6787 10.4882Z"
            fill="white"
          />
          <path
            d="M23.3453 10.4882C22.6945 9.83728 21.6392 9.83728 20.9883 10.4882C20.3374 11.139 20.3374 12.1943 20.9883 12.8452L28.1431 20L20.9883 27.1548C20.3374 27.8057 20.3374 28.861 20.9883 29.5118C21.6392 30.1627 22.6945 30.1627 23.3453 29.5118L31.6787 21.1785C32.3295 20.5276 32.3295 19.4724 31.6787 18.8215L23.3453 10.4882Z"
            fill="white"
          />
          <path
            d="M11.6787 10.4882C11.0278 9.83728 9.97253 9.83728 9.32165 10.4882C8.67078 11.139 8.67078 12.1943 9.32165 12.8452L16.4765 20L9.32165 27.1548C8.67078 27.8057 8.67078 28.861 9.32165 29.5118C9.97253 30.1627 11.0278 30.1627 11.6787 29.5118L20.012 21.1785C20.6629 20.5276 20.6629 19.4724 20.012 18.8215L11.6787 10.4882Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.3453 10.4882C22.6945 9.83728 21.6392 9.83728 20.9883 10.4882C20.3374 11.139 20.3374 12.1943 20.9883 12.8452L28.1431 20L20.9883 27.1548C20.3374 27.8057 20.3374 28.861 20.9883 29.5118C21.6392 30.1627 22.6945 30.1627 23.3453 29.5118L31.6787 21.1785C32.3295 20.5276 32.3295 19.4724 31.6787 18.8215L23.3453 10.4882Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default CertDownloadForm;
