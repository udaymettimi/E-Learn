import React, { useState } from "react";
import {
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Avatar,
  Badge,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

// Custom components
import Card from "components/card/Card";

// Sample data for the leaderboard
const initialData = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://bit.ly/dan-abramov",
    score: 950,
    rank: 1,
    progress: "+20%",
    status: "Improved",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://bit.ly/sage-adebayo",
    score: 890,
    rank: 2,
    progress: "+15%",
    status: "Improved",
  },
  {
    id: 3,
    name: "Robert Johnson",
    avatar: "https://bit.ly/prosper-baba",
    score: 850,
    rank: 3,
    progress: "-5%",
    status: "Declined",
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "https://bit.ly/code-beast",
    score: 820,
    rank: 4,
    progress: "+10%",
    status: "Improved",
  },
  {
    id: 5,
    name: "Michael Wilson",
    avatar: "https://bit.ly/ryan-florence",
    score: 780,
    rank: 5,
    progress: "0%",
    status: "Stable",
  },
];

function Leaderboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("rank");
  const textColor = useColorModeValue("gray.700", "white");
  const colorStatus = useColorModeValue("white", "white");

  // Filter and sort data
  const filteredData = initialData
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "rank") return a.rank - b.rank;
      if (sortBy === "score") return b.score - a.score;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  // Status badge color
  const getBadgeColor = (status) => {
    switch (status) {
      case "Improved":
        return "green.500";
      case "Declined":
        return "red.500";
      case "Stable":
        return "blue.500";
      default:
        return "gray.500";
    }
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card mb="20px">
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "start", md: "center" }}
          justify="space-between"
          mb="20px"
          p="20px"
        >
          <Text
            color={textColor}
            fontSize="2xl"
            fontWeight="700"
            lineHeight="100%"
            mb={{ base: "10px", md: "0px" }}
          >
            Student Leaderboard
          </Text>
          <Flex align="center">
            <InputGroup maxW="300px" me="10px">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.400" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                borderRadius="16px"
              />
            </InputGroup>
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              maxW="150px"
              borderRadius="16px"
            >
              <option value="rank">Rank</option>
              <option value="score">Score</option>
              <option value="name">Name</option>
            </Select>
          </Flex>
        </Flex>

        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Rank</Th>
                <Th>Student</Th>
                <Th>Score</Th>
                <Th>Progress</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredData.map((item) => (
                <Tr key={item.id}>
                  <Td>
                    <Text
                      fontSize="md"
                      fontWeight="700"
                      color={textColor}
                    >
                      #{item.rank}
                    </Text>
                  </Td>
                  <Td>
                    <Flex align="center">
                      <Avatar
                        src={item.avatar}
                        size="sm"
                        mr="10px"
                        name={item.name}
                      />
                      <Text
                        fontSize="md"
                        fontWeight="500"
                        color={textColor}
                      >
                        {item.name}
                      </Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Text
                      fontSize="md"
                      fontWeight="500"
                      color={textColor}
                    >
                      {item.score} pts
                    </Text>
                  </Td>
                  <Td>
                    <Text
                      fontSize="md"
                      fontWeight="500"
                      color={
                        item.progress.startsWith("+")
                          ? "green.500"
                          : item.progress.startsWith("-")
                          ? "red.500"
                          : "blue.500"
                      }
                    >
                      {item.progress}
                    </Text>
                  </Td>
                  <Td>
                    <Badge
                      bg={getBadgeColor(item.status)}
                      color={colorStatus}
                      fontSize="sm"
                      p="3px 10px"
                      borderRadius="8px"
                    >
                      {item.status}
                    </Badge>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Card>
    </Box>
  );
}

export default Leaderboard;