import React from "react";

const Icon = ({ iconPath, width, height, color }) => {
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
      <path stroke-linecap="round" stroke-linejoin="round" d={iconPath} />
    </svg>
  );
};

export default Icon;
