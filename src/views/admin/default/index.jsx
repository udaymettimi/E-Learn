/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
  Button,
  Text,
  Heading,
  Progress,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
  MdStar,
} from "react-icons/md";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports({
  isExistingUser = false,
  userName = "User",
  preferences = false,
  skillLevels = [],
  setShowQuiz = () => {},
  handleBrowseCourses = () => {},
}) {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("gray.800", "white");
  const mutedColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Welcome Section */}
      <Box
        bgGradient="linear(to-r, blue.50, indigo.50)"
        p={{ base: 4, md: 12 }}
        mb="20px"
      >
        <Box maxW="6xl" mx="auto">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={6}
          >
            <Box>
              <Heading
                as="h1"
                size={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color={textColor}
                mb={4}
              >
                {isExistingUser
                  ? `Welcome back, ${userName}!`
                  : `Welcome to PyGenicArc, ${userName}!`}
              </Heading>
              <Text
                fontSize="lg"
                color={mutedColor}
                maxW="lg"
                mb={4}
              >
                {isExistingUser
                  ? "Your personalized learning journey continues with AI-powered recommendations."
                  : preferences
                  ? "Start your adaptive learning journey with content tailored just for you."
                  : "Begin your personalized learning experience with our AI-powered system."}
              </Text>
              <Flex gap={4}>
                <Button
                  colorScheme="brand"
                  onClick={() => setShowQuiz(true)}
                >
                  {skillLevels.length > 0 ? "Take Adaptive Quiz" : "Start Assessment"}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleBrowseCourses}
                >
                  Browse Courses
                </Button>
              </Flex>
            </Box>
            <Box
              bg="white"
              p={4}
              shadow="md"
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="lg"
            >
              <Flex align="center" gap={3} mb={3}>
                <Box
                  w="12"
                  h="12"
                  bg="brand.100"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={MdStar} w={6} h={6} color="brand.500" />
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={textColor}>
                    Adaptive Progress
                  </Text>
                  <Text fontSize="sm" color={mutedColor}>
                    AI-powered learning path
                  </Text>
                </Box>
              </Flex>
              <Box>
                <Flex justify="space-between" fontSize="sm" mb={1}>
                  <Text>Weekly learning goal</Text>
                  <Text fontWeight="medium">
                    {isExistingUser ? "3/5 hours" : "0/5 hours"}
                  </Text>
                </Flex>
                <Progress
                  value={isExistingUser ? 60 : 0}
                  size="sm"
                  colorScheme="brand"
                  borderRadius="full"
                />
                <Flex justify="space-between" fontSize="sm" mt={4} mb={1}>
                  <Text>Skill development</Text>
                  <Text fontWeight="medium">{skillLevels.length} subjects</Text>
                </Flex>
                <Progress
                  value={Math.min(100, skillLevels.length * 20)}
                  size="sm"
                  colorScheme="brand"
                  borderRadius="full"
                />
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Original Dashboard Content */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />}
            />
          }
          name="Earnings"
          value="$350.4"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />}
            />
          }
          name="Spend this month"
          value="$642.39"
        />
        <MiniStatistics growth="+23%" name="Sales" value="$574.34" />
        <MiniStatistics
          endContent={
            <Flex me="-16px" mt="10px">
              <FormLabel htmlFor="balance">
                <Avatar src={Usa} />
              </FormLabel>
              <Select
                id="balance"
                variant="mini"
                mt="5px"
                me="0px"
                defaultValue="usd"
              >
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gba">GBA</option>
              </Select>
            </Flex>
          }
          name="Your balance"
          value="$1,000"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
              icon={<Icon w="28px" h="28px" as={MdAddTask} color="white" />}
            />
          }
          name="New Tasks"
          value="154"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdFileCopy} color={brandColor} />}
            />
          }
          name="Total Projects"
          value="2935"
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <Tasks />
          <MiniCalendar h="100%" minW="100%" selectRange={false} />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}