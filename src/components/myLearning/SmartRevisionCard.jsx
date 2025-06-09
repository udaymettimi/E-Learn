import React from "react";
import { Box, Text, Flex, Button, VStack } from "@chakra-ui/react";
import Card from "../card/Card";

const revisions = [
  { title: "CSS Grid Layout", status: "Due today", color: "red.400" },
  { title: "API Integration", status: "Last revised 5 days ago", color: "orange.400" },
];

const SmartRevisionCard = () => (
  <Card>
    <Flex justify="space-between" align="center" mb={4}>
      <Text fontWeight="bold" fontSize="lg">Smart Revision</Text>
      <Text fontSize="sm" color="gray.500">Today 1/3</Text>
    </Flex>
    <VStack spacing={3} align="stretch">
      {revisions.map((rev, idx) => (
        <Flex key={idx} p={3} bg="gray.50" borderRadius="md" align="center" justify="space-between">
          <Box>
            <Text fontWeight="semibold">{rev.title}</Text>
            <Text fontSize="xs" color={rev.color}>{rev.status}</Text>
          </Box>
          <Button size="sm" colorScheme="blue" variant="outline">Quick Review</Button>
        </Flex>
      ))}
    </VStack>
    <Button mt={4} w="full" colorScheme="gray" variant="ghost">View All Revisions</Button>
  </Card>
);

export default SmartRevisionCard; 