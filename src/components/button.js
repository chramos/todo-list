import React from "react";
import { colors } from "../theme";

/**
 * @typedef ButtonProps
 * @property {React.ReactNode} children
 * @property {() => void} onClick
 * @property {"default" | "success" | "danger" | "warning" | "info"} intent
 * @property {"solid" | "outline" | "ghost"} variant
 * @property {"rounded" | "pill"} shape
 * @property {"xs" | "sm" | "md" | "lg" | "xl"} size
 * @param {ButtonProps}
 */

const Button = ({
  children,
  onClick,
  intent = "default",
  variant = "solid",
  shape = "rounded",
  size = "md",
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        cursor: "pointer",
        outline: "none",
        display: "flex",
        flexDirection: "column",
        fontWeight: 500,
        textTransform: "uppercase",
        borderRadius: borderRadius[shape],
        ...style[variant][intent],
        ...sizeStyle[size],
      }}
    >
      {children}
    </button>
  );
};

export default Button;

const sizeStyle = {
  xs: {
    height: 24,
    padding: "0 .5rem",
  },
  sm: {
    height: 32,
    padding: "0 1.25rem",
  },
  md: {
    height: 42,
    padding: "0 2rem",
  },
  lg: {
    height: 52,
    padding: "0 2.25rem",
  },
  xl: {
    height: 62,
    padding: "0 2.5rem",
  },
};

const sharedStyles = {
  justifyContent: "center",
  alignItems: "center",
};

const sharedSolidStyles = {
  ...sharedStyles,
  color: "#fff",
  border: "none",
};

const sharedOutlineStyles = {
  ...sharedStyles,
  border: "1px solid",
  backgroundColor: "transparent",
};

const sharedGhostStyles = {
  ...sharedStyles,
  border: "none",
  backgroundColor: "transparent",
};

const style = {
  solid: {
    default: {
      ...sharedSolidStyles,
      backgroundColor: colors.primary,
    },
    success: {
      ...sharedSolidStyles,
      backgroundColor: colors.success,
    },
    danger: {
      ...sharedSolidStyles,
      backgroundColor: colors.danger,
    },
    warning: {
      ...sharedSolidStyles,
      backgroundColor: colors.warning,
    },
    info: {
      ...sharedSolidStyles,
      backgroundColor: colors.info,
    },
  },
  outline: {
    default: {
      ...sharedOutlineStyles,
      borderColor: colors.primary,
      color: colors.primary,
    },
    success: {
      ...sharedOutlineStyles,
      borderColor: colors.success,
      color: colors.success,
    },
    danger: {
      ...sharedOutlineStyles,
      borderColor: colors.danger,
      color: colors.danger,
    },
    warning: {
      ...sharedOutlineStyles,
      borderColor: colors.warning,
      color: colors.warning,
    },
    info: {
      ...sharedOutlineStyles,
      borderColor: colors.info,
      color: colors.primary,
    },
  },
  ghost: {
    default: {
      ...sharedGhostStyles,
    },
    success: {},
    danger: {},
    warning: {},
    info: {},
  },
};

const borderRadius = {
  pill: "100%",
  rounded: 8,
};
