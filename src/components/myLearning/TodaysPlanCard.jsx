import React from "react";
import { Text, VStack, HStack, Badge } from "@chakra-ui/react";
import Card from "../card/Card";

const tasks = [
  { time: "11:30", task: "Watch: Neural Networks", status: "upcoming" },
  { time: "13:00", task: "Smart Recall", status: "pending" },
  { time: "15:30", task: "Data Structures Quiz", status: "pending" },
];

const TodaysPlanCard = () => (
  <Card>
    <Text fontWeight="bold" fontSize="lg" mb={3}>Today's Plan</Text>
    <VStack align="stretch" spacing={2}>
      {tasks.map((t, idx) => (
        <HStack key={idx} justify="space-between">
          <Text fontWeight="medium">{t.time}</Text>
          <Text>{t.task}</Text>
          <Badge colorScheme={t.status === "upcoming" ? "blue" : "gray"}>{t.status}</Badge>
        </HStack>
      ))}
    </VStack>
  </Card>
);

export default TodaysPlanCard; 