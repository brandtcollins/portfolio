import React, { useContext } from "react";
import StickyNavHeader from "./StickyNavHeader/StickyNavHeader";
import { ScrollContext } from "../../../Context/ScrollContext";
import StickyNavFooter from "./StickyNavFooter/StickyNavFooter";

const StickyNav = () => {
  const { scrollPosition } = useContext(ScrollContext);

  return scrollPosition.bottom ? <StickyNavFooter /> : <StickyNavHeader />;
};

export default StickyNav;
