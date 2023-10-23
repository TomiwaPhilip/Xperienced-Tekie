import React from 'react';

const Spinner = () => {
  return (
    <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#ffb6bb" strokeWidth="10">
        <animate attributeName="r" from="10" to="45" dur="0.8s" begin="0s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="50" r="10" fill="#95d5ee">
        <animate attributeName="r" from="45" to="10" dur="0.8s" begin="0s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default Spinner;
