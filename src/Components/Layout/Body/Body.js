import React, { useRef, useContext, useEffect } from "react";
import BackgroundChevron from "../Backgrounds/BackgroundChevron";
import styles from "./Body.module.scss";
import { ScrollContext } from "../../../Context/ScrollContext";
import produce from "immer";

const Body = (props) => {
  const { scrollPosition, updateScrollPosition } = useContext(ScrollContext);

  const BodyRef = useRef();

  function logit() {
    const top = BodyRef.current.getBoundingClientRect().top;

    updateScrollPosition(
      produce(scrollPosition, (draft) => {
        draft.body.top = top;
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
      <BackgroundChevron />
    </div>
  );
};

export default Body;
