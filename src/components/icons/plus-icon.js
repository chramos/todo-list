import React from "react";

/**
 * @typedef PlusIconProps
 * @property {number} width
 * @property {number} height
 * @property {string} color
 * @param {PlusIconProps}
 */

const PlusIcon = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
};

export default PlusIcon;
