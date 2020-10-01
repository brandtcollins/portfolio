import React from "react";
import styles from "./Col.module.scss";

const Col = (props) => {
  return <div className={styles.col}>{props.children}</div>;
};

export default Col;
