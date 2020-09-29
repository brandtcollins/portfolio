import React from "react";
import Container from "../../Layout/Container/Container";
import Background from "../../Layout/Backgrounds/BackgroundImage";
import Body from "../../Layout/Body/Body";
import Skills from "./Skills/Skills";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import Hero from "./Hero/Hero";
import Dribbble from "./Dribbble/Dribbble";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
