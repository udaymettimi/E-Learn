/* eslint-disable */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// chakra imports
import { Box, Flex, HStack, Text, useColorModeValue, Tooltip } from "@chakra-ui/react";

export function SidebarLinks(props) {
  //   Chakra color mode
  let location = useLocation();
  let activeColor = useColorModeValue("gray.700", "white");
  let inactiveColor = useColorModeValue(
    "secondaryGray.600",
    "secondaryGray.600"
  );
  let activeIcon = useColorModeValue("brand.500", "white");
  let textColor = useColorModeValue("secondaryGray.500", "white");
  let brandColor = useColorModeValue("brand.500", "brand.400");

  const { routes, isCollapsed = false } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.category) {
        // Skip categories in collapsed mode
        if (isCollapsed) return null;

        return (
          <React.Fragment key={index}>
            <Text
              fontSize={"md"}
              color={activeColor}
              fontWeight='bold'
              mx='auto'
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              pt='18px'
              pb='12px'>
              {route.name}
            </Text>
            {createLinks(route.items)}
          </React.Fragment>
        );
      } else if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        const linkContent = (
          <NavLink key={index} to={route.layout + route.path}>
            {route.icon ? (
              <Box>
                {isCollapsed ? (
                  // Icon-only layout
                  <Flex
                    w='100%'
                    alignItems='center'
                    justifyContent='center'
                    py='12px'
                    borderRadius='12px'
                    bg={activeRoute(route.path.toLowerCase()) ? brandColor : "transparent"}
                    transition="all 0.2s ease"
                    _hover={{ bg: useColorModeValue("gray.50", "navy.700") }}
                  >
                    <Box
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? "white"
                          : textColor
                      }
                      fontSize="20px"
                    >
                      {route.icon}
                    </Box>
                  </Flex>
                ) : (
                  // Full layout
                  <HStack
                    spacing={
                      activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                    }
                    py='5px'
                    ps='10px'>
                    <Flex w='100%' alignItems='center' justifyContent='center'>
                      <Box
                        color={
                          activeRoute(route.path.toLowerCase())
                            ? activeIcon
                            : textColor
                        }
                        me='18px'>
                        {route.icon}
                      </Box>
                      <Text
                        me='auto'
                        color={
                          activeRoute(route.path.toLowerCase())
                            ? activeColor
                            : textColor
                        }
                        fontWeight={
                          activeRoute(route.path.toLowerCase())
                            ? "bold"
                            : "normal"
                        }>
                        {route.name}
                      </Text>
                    </Flex>
                    <Box
                      h='36px'
                      w='4px'
                      bg={
                        activeRoute(route.path.toLowerCase())
                          ? brandColor
                          : "transparent"
                      }
                      borderRadius='5px'
                    />
                  </HStack>
                )}
              </Box>
            ) : (
              // Routes without icons (only show in full mode)
              !isCollapsed && (
                <Box>
                  <HStack
                    spacing={
                      activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                    }
                    py='5px'
                    ps='10px'>
                    <Text
                      me='auto'
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeColor
                          : inactiveColor
                      }
                      fontWeight={
                        activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                      }>
                      {route.name}
                    </Text>
                    <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
                  </HStack>
                </Box>
              )
            )}
          </NavLink>
        );

        // Wrap with tooltip in collapsed mode
        if (isCollapsed && route.icon) {
          return (
            <Tooltip
              key={index}
              label={route.name}
              placement="right"
              hasArrow
              bg={useColorModeValue("white", "navy.700")}
              color={useColorModeValue("gray.700", "white")}
              boxShadow="lg"
            >
              {linkContent}
            </Tooltip>
          );
        }

        return linkContent;
      }
      return null;
    });
  };
  //  BRAND
  return <>{createLinks(routes)}</>;
}

export default SidebarLinks;