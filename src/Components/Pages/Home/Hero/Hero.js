import React from "react";
import styles from "./Hero.module.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className={styles.Hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.25 }}
    >
      <h1 className="text--xxl">Brandt Collins</h1>
      <h3>
        Designer <span>+</span> Front End Developer
      </h3>
      <p>
        An Orlando based graphic designer and front end developer with 12 years
        design experience on and off the web. Equipped with an understanding of
        modern technologies and design practices I enjoy turning problems into
        simple, intuitive designs.
      </p>
    </motion.div>
  );
};

export default Hero;
