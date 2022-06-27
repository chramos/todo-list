import React from "react";
import icons from "../icons";

/**
 * @typedef IconProps
 * @property {keyof typeof icons} name
 * @property {number} width
 * @property {number} height
 * @property {string} color
 * @param {IconProps}
 */
const Icon = ({ name, width = 16, height = 16, color }) => {
  const Icon = icons[name];

  /**
   * An outline icon was designed to be rendered at 24x24.
   * See https://heroicons.com for reference
   */
  const isOutline = String(Icon.props.viewBox).includes("24 24");

  return React.cloneElement(Icon, {
    width,
    height,
    fill: isOutline ? "none" : color,
    stroke: isOutline ? color : "none",
  });
};

export default Icon;
