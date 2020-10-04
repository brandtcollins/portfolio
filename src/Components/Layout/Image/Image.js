import React, { useEffect } from "react";
import styles from "./Image.module.scss";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const { v4: uuidv4 } = require("uuid");

const Image = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const { link } = props;
  return (
    <>
      {link.map((link) => (
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          key={link}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 300 },
          }}
        >
          <img
            src={link}
            key={uuidv4()}
            className={styles.singleImage}
            alt=""
          ></img>
        </motion.div>
      ))}
    </>
  );
};

export default Image;
