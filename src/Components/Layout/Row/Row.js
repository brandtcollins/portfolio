import React from "react";
import styles from "./Row.module.scss";

const classNames = require("classnames");

const Row = (props) => {
  const { children, style } = props;
  return <div className={classNames(styles.row, style)}>{children}</div>;
};

export default Row;
