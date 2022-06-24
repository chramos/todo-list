import React from "react";

/**
 * @typedef BoxProps
 * @property {React.ReactNode} children
 * @property {JSX.IntrinsicElements} as

 * @param {BoxProps & React.CSSProperties}
 */
const Box = ({ children, as = "div", ...style }) => {
  return React.createElement(as, { style }, children);
};

export default Box;
