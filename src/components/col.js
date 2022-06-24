import React from "react";
import { BoxProps } from "./box";
import Flex from "./flex";

/**
 *
 * @param {BoxProps  & React.CSSProperties}
 */
const Col = ({ children, ...style }) => {
  return (
    <Flex flexDirection="column" {...style}>
      {children}
    </Flex>
  );
};

export default Col;
