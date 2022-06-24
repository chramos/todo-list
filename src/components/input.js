import React from "react";

/**
 * @typedef InputProps
 * @property {string} value
 * @property {(text: string) => void} onChange
 * @property {string} placeholder
 * @param {InputProps & React.CSSProperties}
 */

const Input = ({ value, onChange, placeholder, ...style }) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      style={{
        padding: "0 1rem",
        borderRadius: 8,
        border: "none",
        outline: "none",
        fontSize: 20,
        display: "flex",
        flexGrow: 1,
        height: 42,
        ...style,
      }}
    />
  );
};

export default Input;
