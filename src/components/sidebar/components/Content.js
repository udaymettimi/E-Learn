// chakra imports
import { Box, Flex, Stack } from "@chakra-ui/react";
//   Custom components
import Brand from "components/sidebar/components/Brand";
import Links from "components/sidebar/components/Links";
import SidebarCard from "components/sidebar/components/SidebarCard";
import React from "react";

// FUNCTIONS

function SidebarContent(props) {
  const { routes, isCollapsed = false } = props;
  // SIDEBAR
  return (
    <Flex 
      direction='column' 
      height='100%' 
      pt='25px' 
      px={isCollapsed ? "8px" : "12px"}
      borderRadius='30px' 
      maxW={isCollapsed ? '80px' : '300px'} 
      minW={isCollapsed ? '60px' : '280px'}
      transition="all 0.3s ease"
    >
      <Brand isCollapsed={isCollapsed} />
      <Stack direction='column' mb='auto' mt='8px'>
        <Box ps={isCollapsed ? '4px' : '12px'} pe={isCollapsed ? '4px' : { md: "8px", "2xl": "1px" }}>
          <Links routes={routes} isCollapsed={isCollapsed} />
        </Box>
      </Stack>

      {!isCollapsed && (
        <Box
          mt='60px'
          mb='40px'
          borderRadius='30px'>
          <SidebarCard />
        </Box>
      )}
    </Flex>
  );
}

export default SidebarContent;