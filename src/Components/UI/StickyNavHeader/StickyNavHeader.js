import React from "react";
import styles from "./StickyNavHeader.module.scss";
import { NavLink } from "react-router-dom";

const StickyNavHeader = () => {
  return (
    <div className={styles.StickyNav}>
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
    </div>
  );
};

export default StickyNavHeader;
