import React from "react";

const TestimonialCard = ({ name, testimony }) => (
  <div className="max-w-sm mx-auto bg-red-200 rounded-xl overflow-hidden shadow-lg p-6 mb-6">
    <p className="text-[50px] mb-2">{name}</p>
    <p className="text-gray-600">{testimony}</p>
  </div>
);

export default TestimonialCard;
