import React from "react";
import styles from "./Image.module.scss";

const Image = (props) => {
  const { link } = props;
  return <img src={link} className={styles.singleImage} alt="" />;
};

export default Image;
