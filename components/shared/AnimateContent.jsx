"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedContent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`${
        inView ? 'animate-fade-in' : 'opacity-0'
      } transition-opacity duration-500`}
    >
      {children}
    </div>
  );
};

export default AnimatedContent;
