import React, { useContext, useEffect, useRef, useState, useMemo } from "react";
import styles from "./StickyContact.module.scss";
import { FiGithub, FiLinkedin, FiSend, FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";
import { ScrollContext } from "../../../Context/ScrollContext";

const StickyContact = () => {
  const { scrollPosition } = useContext(ScrollContext);
  const [iconPositions, setIconPositions] = useState({
    Github: null,
    Linkedin: null,
    Send: null,
    File: null,
  });

  const GithubRef = useRef();
  const LinkedinRef = useRef();
  const SendRef = useRef();
  const FileRef = useRef();
  const StickyContactRef = useRef();

  useEffect(() => {
    if (StickyContactRef) {
      setIconPositions({
        ...iconPositions,
        Github: GithubRef.current.getBoundingClientRect().top,
        Linkedin: LinkedinRef.current.getBoundingClientRect().top,
        Send: SendRef.current.getBoundingClientRect().top,
        File: FileRef.current.getBoundingClientRect().top,
      });
    }
  }, [scrollPosition]);

  return (
    <motion.div
      className={styles.Contact}
      key="modal"
      ref={StickyContactRef}
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        whileHover={{ scale: 1.4 }}
        transition={{ ease: "easeOut", duration: 0.25 }}
      >
        <div
          ref={GithubRef}
          className={
            iconPositions.Github > scrollPosition.body.top ? styles.Dark : null
          }
        >
          <FiGithub />
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.4 }}
        transition={{ ease: "easeOut", duration: 0.25 }}
      >
        <div
          ref={LinkedinRef}
          className={
            iconPositions.Linkedin > scrollPosition.body.top
              ? styles.Dark
              : null
          }
        >
          <FiLinkedin />
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.4 }}
        transition={{ ease: "easeOut", duration: 0.25 }}
      >
        <div
          ref={SendRef}
          className={
            iconPositions.Send > scrollPosition.body.top ? styles.Dark : null
          }
        >
          <FiSend />
        </div>
      </motion.div>{" "}
      <motion.div
        whileHover={{ scale: 1.4 }}
        transition={{ ease: "easeOut", duration: 0.25 }}
      >
        <div
          ref={FileRef}
          className={
            iconPositions.File > scrollPosition.body.top ? styles.Dark : null
          }
        >
          <FiFileText />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StickyContact;
