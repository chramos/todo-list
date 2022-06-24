import React from "react";

/**
 * @typedef FormProps
 * @property {React.ReactNode} children
 * @property {() => void} onSubmit

 * @param {FormProps}
 */
const Form = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {children}
    </form>
  );
};

export default Form;
