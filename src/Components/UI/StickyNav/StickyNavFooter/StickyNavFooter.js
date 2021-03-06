import React from "react";
import styles from "./StickyNavFooter.module.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const StickyNavFooter = (params) => {
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
          <a
            href="mailto:hello@brandtcollins.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@brandtcollins.com
          </a>
          <a
            href="https://github.com/brandtcollins"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/brandt-collins-44353989/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a
            href="/BrandtCollins_Designer_FrontEndDeveloper_Resume.pdf"
            target="_blank"
          >
            resumé
          </a>
        </nav>
      </div>
    </motion.div>
  );
};

export default StickyNavFooter;
