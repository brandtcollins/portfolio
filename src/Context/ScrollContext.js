import React, { createContext, useState } from "react";

const initialState = {
  body: {
    top: null,
    bottom: null,
  },
  bottom: false,
};

export const ScrollContext = createContext(initialState);

const ScrollContextProvider = (props) => {
  const [scrollPosition, updateScrollPosition] = useState(initialState);

  return (
    <ScrollContext.Provider
      value={{
        scrollPosition: scrollPosition,
        updateScrollPosition: updateScrollPosition,
      }}
    >
      {props.children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
