import React from "react";
import styles from "./StickyNavHeader.module.scss";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const StickyNavHeader = () => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.StickyNav}
        key="modal"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.StickyNavHeader}>
          <h5>
            <NavLink to="/">
              bc<span>.</span>
            </NavLink>
          </h5>
          <nav>
            <NavLink to="/">projects</NavLink>
            <NavLink to="/">resumé</NavLink>
          </nav>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StickyNavHeader;
