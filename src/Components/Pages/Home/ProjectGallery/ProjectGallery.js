import React from "react";
import styles from "./ProjectGallery.module.scss";
import Image from "../../../Layout/Image/Image";
import { NavLink } from "react-router-dom";

const ProjectGallery = () => {
  return (
    <div className={styles.Projects}>
      <h2>What I've been working on</h2>
      <div className={styles.ProjectGallery}>
        <div>
          <NavLink to="/projects/Sonder">
            <Image link="/images/ProjectScreenShots/Sonder/Sonder-Desktop.png" />
          </NavLink>
        </div>
        <div>
          <Image link="/images/ProjectScreenShots/FeedMe/FeedMe_HomeScreen_dr.png" />
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
