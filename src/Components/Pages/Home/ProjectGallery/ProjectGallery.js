import React from "react";
import styles from "./ProjectGallery.module.scss";
import Image from "../../../Layout/Image/Image";
import { NavLink } from "react-router-dom";

const ProjectGallery = () => {
  return (
    <div className={styles.Projects} id="projects">
      <h2>What I've been working on</h2>
      <div className={styles.ProjectGallery}>
        <div>
          <NavLink to="/projects/Sonder">
            <Image
              link={["/images/ProjectScreenShots/Sonder/Sonder-Desktop.png"]}
            />
          </NavLink>
          <h3>Sonder</h3>
          <p>A note taking app built with React</p>
        </div>
        <div>
          <NavLink to="/projects/FeedMe">
            <Image
              link={[
                "/images/ProjectScreenShots/FeedMe/FeedMe_HomeScreen_dr.png",
              ]}
            />
          </NavLink>
          <h3>FeedMe</h3>
          <p>A restaurant locator to give you ideas for food near you.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
