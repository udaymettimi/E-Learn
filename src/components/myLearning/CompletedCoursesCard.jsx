import React from "react";
import { Text } from "@chakra-ui/react";
import Card from "../card/Card";

const CompletedCoursesCard = () => (
  <Card>
    <Text fontWeight="bold" fontSize="lg" mb={3}>Completed Courses</Text>
    <Text color="gray.400">No completed courses yet.</Text>
  </Card>
);

export default CompletedCoursesCard; 