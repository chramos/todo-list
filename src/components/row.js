import React from "react";
import { BoxProps } from "./box";
import Flex from "./flex";

/**
 *
 * @param {BoxProps  & React.CSSProperties}
 */
const Row = ({ children, ...rest }) => {
  return (
    <Flex flexDirection="row" {...rest}>
      {children}
    </Flex>
  );
};

export default Row;
