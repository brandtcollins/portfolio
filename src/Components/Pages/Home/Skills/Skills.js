import React from "react";
import styles from "./Skills.module.scss";
import { BiRadioCircle } from "react-icons/bi";

const Skills = () => {
  return (
    <div className={styles.Skills}>
      <h2>My skills</h2>
      <p>
        This will be a new sectionThis will be a new sectionThis will be a new
        sectionThis will be a new sectionThis will be a new sectionThis will be
        a new sectionThis will be a new sectionThis will be a new sectionThis
        will be a new sectionThis will be a new section
      </p>
      <ul>
        <li>
          <BiRadioCircle />
          Javascript ES6
        </li>
        <li>
          <BiRadioCircle />
          React
        </li>
        <li>
          <BiRadioCircle />
          HTML/CSS
        </li>
        <li>
          <BiRadioCircle />
          SASS
        </li>
        <li>
          <BiRadioCircle />
          GIT
        </li>
        <li>
          <BiRadioCircle />
          VSCode
        </li>
        <li>
          <BiRadioCircle />
          Figma
        </li>
        <li>
          <BiRadioCircle />
          Adobe CC
        </li>
      </ul>
    </div>
  );
};

export default Skills;
