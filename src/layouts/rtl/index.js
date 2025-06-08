import React from "react";
import { Box } from "@chakra-ui/react";

const RTLLayout = ({ children }) => {
  return (
    <Box dir="rtl" minH="100vh" bg="gray.50">
      {children}
    </Box>
  );
};

export default RTLLayout;
