import PropTypes from "prop-types";
import React from "react";

const Button = ({ children, onClick, intent }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: {
          default: "blue",
          success: "green",
          danger: "red",
          info: "bluesky",
          warning: "orange",
        }[intent],
        color: "#fff",
        border: "none",
        padding: "4px 16px",
        borderRadius: 4,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  intent: "default",
};

Button.propTypes = {
  intent: PropTypes.oneOf(["default", "success", "danger", "info", "warning"]),
  onClick: PropTypes.func,
  children: PropTypes.node,
};
