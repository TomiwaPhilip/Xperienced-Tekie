import React from "react";

const TestimonialCard = ({ name, testimony, bgColor }) => (
  <div className="max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg p-10 mb-6 shadow-md" style={{backgroundColor: bgColor}}>
    <p className="text-lg mb-2 font-bold">{name}</p>
    <p className="text-gray-600 text-md">{testimony}</p>
  </div>
);

export default TestimonialCard;
