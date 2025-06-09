import React from "react";
import { Box, VStack, SimpleGrid } from "@chakra-ui/react";
import LearningGoalCard from "../../../components/myLearning/LearningGoalCard";
import SmartRevisionCard from "../../../components/myLearning/SmartRevisionCard";
import LearningPathCard from "../../../components/myLearning/LearningPathCard";
import TodaysPlanCard from "../../../components/myLearning/TodaysPlanCard";
import ProgressAnalyticsCard from "../../../components/myLearning/ProgressAnalyticsCard";
import InProgressCoursesCard from "../../../components/myLearning/InProgressCoursesCard";
import CompletedCoursesCard from "../../../components/myLearning/CompletedCoursesCard";

const MyLearning = () => {
  return (
    <Box minH="100vh" bg="gray.50" p={4}>
      <VStack spacing={6} align="stretch">
        <LearningGoalCard />
        <SmartRevisionCard />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <LearningPathCard />
          <TodaysPlanCard />
          <ProgressAnalyticsCard />
        </SimpleGrid>
        <InProgressCoursesCard />
        <CompletedCoursesCard />
      </VStack>
    </Box>
  );
};

export default MyLearning;
