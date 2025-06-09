import React from "react";
import { Box, Text, Progress, Button, Flex, Badge } from "@chakra-ui/react";
import Card from "../card/Card";

const LearningGoalCard = () => {
  return (
    <Card>
      <Flex justify="space-between" align="center" mb={2}>
        <Box>
          <Text fontSize="lg" fontWeight="bold">Your Learning Goal</Text>
          <Text color="blue.600" fontWeight="semibold">Data Science</Text>
          <Progress value={25} size="sm" colorScheme="blue" mt={2} mb={1} />
          <Text fontSize="sm" color="gray.500">25% of Data Science Path completed</Text>
          <Badge colorScheme="orange" mt={2}>Struggled with Loops last time — want to review?</Badge>
        </Box>
        <Button colorScheme="blue" size="md">Continue Learning</Button>
      </Flex>
    </Card>
  );
};

export default LearningGoalCard; 