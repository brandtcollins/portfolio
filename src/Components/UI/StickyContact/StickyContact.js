import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./StickyContact.module.scss";
import { FiGithub, FiLinkedin, FiSend, FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";
import { ScrollContext } from "../../../Context/ScrollContext";

const StickyContact = () => {
  const { scrollPosition } = useContext(ScrollContext);
  const [iconPositions, setIconPositions] = useState({
    Loaded: false,
    Github: 0,
    Linkedin: 0,
    Send: 0,
    File: 0,
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
      if (!iconPositions.Loaded) {
        setIconPositions({
          ...iconPositions,
          Loaded: true,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition]);

  return (
    <motion.div
      className={scrollPosition.bottom ? styles.Hide : styles.Contact}
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
          <a
            href="https://github.com/brandtcollins"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
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
          <a
            href="https://www.linkedin.com/in/brandt-collins-44353989/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
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
          <a
            href="mailto:hello@brandtcollins.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiSend />
          </a>
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
          <a
            href="/BrandtCollins_Designer_FrontEndDeveloper_Resume.pdf"
            target="_blank"
          >
            <FiFileText />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StickyContact;
