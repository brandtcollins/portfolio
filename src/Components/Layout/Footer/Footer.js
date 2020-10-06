import React from "react";
import styles from "./Footer.module.scss";
import { CgChevronDoubleUp } from "react-icons/cg";

const Footer = () => {
  const handleClick = (event) => {
    document
      .querySelector("body")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <div className={styles.Footer}>
      <div className={styles.Top}>
        <button onClick={handleClick}>
          <CgChevronDoubleUp />
        </button>
      </div>
    </div>
  );
};

export default Footer;
