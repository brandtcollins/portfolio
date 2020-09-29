import React from "react";
import BackgroundChevron from "../Backgrounds/BackgroundChevron";
import styles from "./Body.module.scss";

const Body = (props) => {
  return (
    <div className={styles.Body}>
      {props.children}
      <BackgroundChevron />
    </div>
  );
};

export default Body;
