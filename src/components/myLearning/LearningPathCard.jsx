import React from "react";
import { Text, VStack, HStack, Badge } from "@chakra-ui/react";
import Card from "../card/Card";

const modules = [
  { name: "Functions", status: "required", color: "green" },
  { name: "Libraries", status: "recommended", color: "blue" },
  { name: "NumPy & Pandas", status: "required", color: "green" },
  { name: "Data Visualization", status: "optional", color: "yellow" },
  { name: "Machine Learning Basics", status: "required", color: "green" },
];

const LearningPathCard = () => (
  <Card>
    <Text fontWeight="bold" fontSize="lg" mb={3}>Your Learning Path</Text>
    <VStack align="stretch" spacing={2}>
      {modules.map((mod, idx) => (
        <HStack key={idx} justify="space-between">
          <Text>{mod.name}</Text>
          <Badge colorScheme={mod.color}>{mod.status}</Badge>
        </HStack>
      ))}
    </VStack>
  </Card>
);

export default LearningPathCard; 