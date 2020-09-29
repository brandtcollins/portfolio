import React from "react";
import Container from "../../Layout/Container/Container";
import styles from "./Home.module.scss";
import Background from "../../Layout/Backgrounds/BackgroundImage";
import { motion } from "framer-motion";
import Body from "../../Layout/Body/Body";
import Skills from "./Skills/Skills";
import ProjectGallery from "./ProjectGallery/ProjectGallery";

const Home = () => {
  return (
    <>
      <Container>
        <motion.div
          className={styles.Hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.25 }}
        >
          <h1 className="text--xxl">Brandt Collins</h1>
          <h3>Designer + Front End Developer</h3>
          <p>
            An Orlando based graphic designer and front end developer with 12
            years design experience on and off the web. Equipped with an
            understanding of modern technologies and design practices I enjoy
            turning problems into simple, intuitive designs.
          </p>
        </motion.div>
      </Container>

      <Body>
        <Container>
          <Skills />
          <ProjectGallery />
        </Container>
        <Background />
      </Body>
    </>
  );
};

export default Home;
