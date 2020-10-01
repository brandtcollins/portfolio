import React, { useEffect } from "react";
import Container from "../../Layout/Container/Container";
import Background from "../../Layout/Backgrounds/BackgroundImage";
import Body from "../../Layout/Body/Body";
import Skills from "./Skills/Skills";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import Hero from "./Hero/Hero";
import Dribbble from "./Dribbble/Dribbble";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Hero />
      </Container>
      <Body>
        <Container>
          <Skills />
          <ProjectGallery />
          <Dribbble />
        </Container>
        <Background />
      </Body>
    </motion.div>
  );
};

export default Home;
