import React from "react";
import { Text, HStack, VStack } from "@chakra-ui/react";
import Card from "../card/Card";

const ProgressAnalyticsCard = () => (
  <Card>
    <Text fontWeight="bold" fontSize="lg" mb={3}>How You're Progressing</Text>
    <HStack spacing={6} justify="space-between">
      <VStack>
        <Text fontSize="sm" color="gray.500">Quiz Score Avg</Text>
        <Text fontWeight="bold" fontSize="2xl" color="blue.500">72%</Text>
      </VStack>
      <VStack>
        <Text fontSize="sm" color="gray.500">Learning Pace</Text>
        <Text fontWeight="bold" fontSize="2xl" color="green.500">3</Text>
        <Text fontSize="xs" color="gray.400">lessons/week</Text>
      </VStack>
      <VStack>
        <Text fontSize="sm" color="gray.500">Time Invested</Text>
        <Text fontWeight="bold" fontSize="2xl" color="purple.500">4h 20m</Text>
      </VStack>
    </HStack>
  </Card>
);

export default ProgressAnalyticsCard; 