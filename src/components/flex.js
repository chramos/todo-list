import React from "react";
import Box, { BoxProps } from "./box";

/**
 *
 * @param {BoxProps  & React.CSSProperties}
 */
const Flex = ({ children, ...style }) => {
  return (
    <Box display="flex" {...style}>
      {children}
    </Box>
  );
};

export default Flex;
