import { motion } from "framer-motion";
import React from "react";

const Sonder = (params) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>Sonder loaded</div>
    </motion.div>
  );
};

export default Sonder;
