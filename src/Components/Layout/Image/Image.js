import React from "react";
import styles from "./Image.module.scss";
import { motion } from "framer-motion";

const { v4: uuidv4 } = require("uuid");

const Image = (props) => {
  const { link } = props;
  return (
    <>
      {link.map((link) => (
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ ease: "easeOut", duration: 0.25 }}
          key={uuidv4()}
        >
          <img src={link} className={styles.singleImage} alt=""></img>
        </motion.div>
      ))}
    </>
  );
};

export default Image;
