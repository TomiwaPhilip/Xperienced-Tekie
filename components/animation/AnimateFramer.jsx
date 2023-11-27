import React from "react";
import { motion } from 'framer-motion';

const AnimateFramer = ({ children}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={{ border: '1px solid black', margin: '10px', padding: '20px' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedFramer;
