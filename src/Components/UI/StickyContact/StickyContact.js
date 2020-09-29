import React from "react";
import styles from "./StickyContact.module.scss";
import { FiGithub, FiLinkedin, FiSend, FiFileText } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const StickyContact = () => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.Contact}
        key="modal"
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          whileHover={{ scale: 1.4 }}
          transition={{ ease: "easeOut", duration: 0.25 }}
        >
          <FiGithub />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.4 }}
          transition={{ ease: "easeOut", duration: 0.25 }}
        >
          <FiLinkedin />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.4 }}
          transition={{ ease: "easeOut", duration: 0.25 }}
        >
          <FiSend />
        </motion.div>{" "}
        <motion.div
          whileHover={{ scale: 1.4 }}
          transition={{ ease: "easeOut", duration: 0.25 }}
        >
          <FiFileText />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StickyContact;
