import React from "react";
import styles from "./StickyContact.module.scss";
import { FiGithub, FiLinkedin, FiSend, FiFileText } from "react-icons/fi";

const StickyContact = () => {
  return (
    <div className={styles.Contact}>
      <FiGithub />
      <FiLinkedin />
      <FiSend />
      <FiFileText />
    </div>
  );
};

export default StickyContact;
