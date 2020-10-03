import React from "react";
import styles from "./StickyNavFooter.module.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const StickyNavFooter = (params) => {
  const handleClick = (event) => {
    document
      .getElementById("projects")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <motion.div
      className={styles.StickyNavFooter}
      key="modal"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.Content}>
        <h5>
          <NavLink to="/">
            bc<span>.</span>
          </NavLink>
        </h5>
        <nav>
          <button onClick={handleClick}>hello@brandtcollins.com</button>
          <button>github</button>
          <button>linkedin</button>
          <button>resumé</button>
        </nav>
      </div>
    </motion.div>
  );
};

export default StickyNavFooter;
