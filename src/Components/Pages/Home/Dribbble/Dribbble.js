import React, { useState, useEffect } from "react";
import styles from "./Dribbble.module.scss";
import Image from "../../../Layout/Image/Image";
import jribbble from "jribbble";
import Loading from "../../../UI/Loading/Loading";

const DRIBBBLE_KEY = process.env.REACT_APP_DRIBBBLE_KEY;

const Dribbble = () => {
  const [dribbbleShots, updateDribbbleShots] = useState(null);

  useEffect(() => {
    const dribbbleFeed = async () => {
      jribbble.shots({ token: DRIBBBLE_KEY }, (shotsArray) => {
        const filteredShots = shotsArray.map((item) => {
          return {
            ...item,
            description: item.description.replace(/(<([^>]+)>)/gi, ""),
          };
        });
        updateDribbbleShots(filteredShots.slice(0, 3));
      });
    };
    dribbbleFeed();
  }, []);

  let dribbbleComponent = null;

  if (dribbbleShots) {
    dribbbleComponent = (
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
            <a
              href={dribbbleShots[0].html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image link={dribbbleShots[0].images.hidpi} />
            </a>
          </div>

          <div className={styles.ImageColumn}>
            <a
              href={dribbbleShots[1].html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image link={dribbbleShots[1].images.hidpi} />
            </a>
            <a
              href={dribbbleShots[2].html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image link={dribbbleShots[2].images.hidpi} />
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    dribbbleComponent = <Loading />;
  }

  return <>{dribbbleComponent}</>;
};

export default Dribbble;
