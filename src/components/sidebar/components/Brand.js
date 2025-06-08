import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { PygenicarcLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand({ isCollapsed = false }) {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  if (isCollapsed) {
    // Return a smaller icon version for collapsed state
    return (
      <Flex align='center' direction='column' mb='20px'>
        <PygenicarcLogo h='32px' w='32px' my='16px' color={logoColor} />
      </Flex>
    );
  }

  // Return full logo for expanded state
  return (
    <Flex align='center' direction='column'>
      <PygenicarcLogo h='40px' w='280px' my='32px' color={logoColor} />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;