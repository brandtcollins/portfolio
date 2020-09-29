import React from "react";
import styles from "./Dribbble.module.scss";
import Image from "../../../Layout/Image/Image";

const Dribbble = () => {
  return (
    <div className={styles.Dribbble}>
      <div className={styles.Info}>
        <h2>See my recent work on dribbble</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          urna at mattis auctor nec mauris posuere.
        </p>
      </div>
      <div className={styles.DribbbleImages}>
        <div className={styles.Featured}>
          <Image link="/images/ProjectScreenShots/Sonder/Sonder-Desktop.png" />
        </div>

        <div className={styles.ImageColumn}>
          <Image link="/images/ProjectScreenShots/Sonder/Sonder-Desktop.png" />
          <Image link="/images/ProjectScreenShots/Sonder/Sonder-Desktop.png" />
        </div>
      </div>
    </div>
  );
};

export default Dribbble;
