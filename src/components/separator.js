import React from "react";
import PropTypes from "prop-types";

const Separator = ({ size, direction }) => {
  return (
    <div
      style={{
        ...(direction === "vertical"
          ? {
              height: size,
            }
          : {
              width: size,
            }),
        display: "inline-block",
      }}
    />
  );
};

export default Separator;

Separator.defaultProps = {
  size: 24,
  direction: "vertical",
};

Separator.propTypes = {
  size: PropTypes.number,
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
};
