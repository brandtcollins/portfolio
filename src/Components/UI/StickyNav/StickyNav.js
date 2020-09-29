import React from "react";
import { Link } from "react-router-dom";
import styles from "./StickyNav.module.scss";
import { FiGithub, FiLinkedin, FiSend, FiFileText } from "react-icons/fi";

const StickyNav = () => {
  return (
    <div className={styles.StickyNav}>
      <div className={styles.StickyNavHeader}>
        <h5>
          bc<span>.</span>
        </h5>
        <nav>
          <Link>projects</Link>
          <Link>resumé</Link>
        </nav>
      </div>
      <div className={styles.Contact}>
        <FiGithub />
        <FiLinkedin />
        <FiSend />
        <FiFileText />
      </div>
    </div>
  );
};

export default StickyNav;
