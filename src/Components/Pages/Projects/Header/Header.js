import React from "react";
import styles from "./Header.module.scss";

const Header = (props) => {
  const { headline, subhead, desc } = props;
  return (
    <div className={styles.header}>
      <h1>{headline}</h1>
      <h3>{subhead}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Header;
