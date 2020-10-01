import React, { useRef, useContext, useEffect } from "react";
import BackgroundChevron from "../Backgrounds/BackgroundChevron";
import BackgroundWhite from "../Backgrounds/BackgroundWhite";
import styles from "./Body.module.scss";
import { ScrollContext } from "../../../Context/ScrollContext";
import produce from "immer";
import { useLocation } from "react-router-dom";

const Body = (props) => {
  const { scrollPosition, updateScrollPosition } = useContext(ScrollContext);

  const BodyRef = useRef();
  const location = useLocation();

  function logit() {
    const top = BodyRef.current.getBoundingClientRect().top;

    updateScrollPosition(
      produce(scrollPosition, (draft) => {
        draft.body.top = top;
      })
    );
  }

  // useEffect(() => {
  //   if (location.pathname) {
  //     background = <BackgroundChevron />;
  //     console.log(background);
  //   } else {
  //     background = <BackgroundWhite />;
  //     console.log(`two`);
  //   }
  // });

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <div ref={BodyRef} className={styles.Body} id="element">
      {props.children}
      {location.pathname === "/" ? <BackgroundChevron /> : <BackgroundWhite />}
    </div>
  );
};

export default Body;
