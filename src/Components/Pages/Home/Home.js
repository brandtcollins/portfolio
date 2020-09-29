import { NavLink } from "react-router-dom";
import React from "react";
import Container from "../../Layout/Container/Container";
import styles from "./Home.module.scss";
import Background from "../../Layout/Background/Background";
import { motion } from "framer-motion";

const Home = (params) => {
  return (
    <Container>
      <motion.div
        className={styles.Hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.25 }}
      >
        <h1 className="text--xxl">Brandt Collins</h1>
        <h2>Designer + Front End Developer</h2>
        <p>
          An Orlando based graphic designer and front end developer with 12
          years design experience on and off the web. Equipped with an
          understanding of modern technologies and design practices I enjoy
          turning problems into simple, intuitive designs.
        </p>
      </motion.div>
      <NavLink to="/projects/Sonder">Sonder</NavLink>
      <div>fsd</div>
      <Background />
    </Container>
  );
};

export default Home;
