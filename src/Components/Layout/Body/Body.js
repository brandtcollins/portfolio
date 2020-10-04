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
    const bottom = BodyRef.current.getBoundingClientRect().bottom;

    let bottomOfPage = false;

    if (bottom + 100 < window.innerHeight) {
      bottomOfPage = true;
    }

    updateScrollPosition(
      produce(scrollPosition, (draft) => {
        draft.body.top = top;
        draft.bottom = bottomOfPage;
      })
    );
  }

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
