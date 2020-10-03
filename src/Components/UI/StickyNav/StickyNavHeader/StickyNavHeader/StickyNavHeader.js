import React, { useContext, useEffect, useState, useRef } from "react";
import styles from "./StickyNavHeader.module.scss";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollContext } from "../../../../../Context/ScrollContext";
import produce from "immer";

const StickyNavHeader = () => {
  const { scrollPosition, updateScrollPosition } = useContext(ScrollContext);
  const [headerPosition, setHeaderPosition] = useState(32);
  const StickyNavHeaderRef = useRef();

  useEffect(() => {
    setHeaderPosition(StickyNavHeaderRef.current.getBoundingClientRect().top);
    window.onscroll = function (ev) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // console.log(`bottom`);
      }
    };
  }, [scrollPosition, headerPosition]);

  const handleClick = (event) => {
    document
      .getElementById("projects")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <AnimatePresence>
      <motion.div
        className={styles.StickyNav}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -100 }}
      >
        <div ref={StickyNavHeaderRef} className={styles.Content}>
          <h5
            className={
              headerPosition > scrollPosition.body.top ? styles.Dark : null
            }
          >
            <NavLink to="/">
              bc<span>.</span>
            </NavLink>
          </h5>
          <nav>
            <button
              className={
                headerPosition > scrollPosition.body.top ? styles.Dark : null
              }
              onClick={handleClick}
            >
              projects
            </button>
            <button
              className={
                headerPosition > scrollPosition.body.top ? styles.Dark : null
              }
            >
              resumé
            </button>
          </nav>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StickyNavHeader;
