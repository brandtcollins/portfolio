import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../../../Layout/Container/Container";
import Body from "../../../Layout/Body/Body";
import data from "../../../../data/ProjectData";
import Header from "../Header/Header";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import SingleImage from "../../../Layout/Image/Image";
import Row from "../../../Layout/Row/Row";
import styles from "./Sonder.module.scss";
import { useLocation } from "react-router-dom";
import Background from "../../../Layout/Backgrounds/BackgroundImage";

const Sonder = (props) => {
  const project = data[0];
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
      <Body>
        <Container>
          <Header
            headline={project.headline}
            subhead={project.subhead}
            desc={project.desc}
          />
          <ProjectDetails
            stack={project.stack}
            code={project.code}
            demo={project.demo}
          />
          <SingleImage link={project.images.slice(0, 1)} />
          <Row>
            <div className={`${styles.Top} ${styles.Bottom}`}>
              <h2>Project Purpose and Goal</h2>
              <p>{project.goal}</p>
            </div>
          </Row>
          <SingleImage link={project.images.slice(1, 2)} />
          <Row>
            <div className={styles.Top}>
              <h2>Lessons Learned</h2>
              {project.lessons}
            </div>
          </Row>
          <Row>
            <div className={styles.Bottom}>
              <h2>Moving Forward</h2>
              {project.future}
            </div>
          </Row>
          <div className={styles.GroupedImages}>
            <SingleImage link={project.images.slice(2)} />
          </div>
        </Container>
      </Body>
      <Background />
    </motion.div>
  );
};

export default Sonder;
