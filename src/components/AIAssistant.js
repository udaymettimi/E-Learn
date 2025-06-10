import React, { useState } from "react";
import {
  Box,
  IconButton,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const handleSend = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { text: message, sender: "user" }]);
      // Here you would typically make an API call to your AI service
      setTimeout(() => {
        setChatHistory((prev) => [
          ...prev,
          {
            text: "I'm your AI assistant. How can I help you today?",
            sender: "assistant",
          },
        ]);
      }, 1000);
      setMessage("");
    }
  };

  return (
    <Box position="fixed" bottom="20px" right="20px" zIndex={1000}>
      {!isOpen ? (
        <IconButton
          onClick={() => setIsOpen(true)}
          icon={<FaRobot />}
          colorScheme="blue"
          size="lg"
          isRound
          aria-label="Open AI Assistant"
        />
      ) : (
        <Box
          w="350px"
          h="500px"
          bg={bgColor}
          borderRadius="lg"
          boxShadow="xl"
          border="1px"
          borderColor={borderColor}
          display="flex"
          flexDirection="column"
        >
          <HStack
            p={4}
            bg="blue.500"
            color="white"
            borderTopRadius="lg"
            justifyContent="space-between"
          >
            <Text fontWeight="bold">AI Assistant</Text>
            <IconButton
              icon={<FaTimes />}
              variant="ghost"
              color="white"
              size="sm"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI Assistant"
            />
          </HStack>

          <VStack
            flex={1}
            p={4}
            spacing={4}
            overflowY="auto"
            alignItems="stretch"
          >
            {chatHistory.map((chat, index) => (
              <Box
                key={index}
                alignSelf={chat.sender === "user" ? "flex-end" : "flex-start"}
                maxW="80%"
              >
                <Box
                  bg={chat.sender === "user" ? "blue.500" : "gray.100"}
                  color={chat.sender === "user" ? "white" : "black"}
                  p={3}
                  borderRadius="lg"
                >
                  <Text fontSize="sm">{chat.text}</Text>
                </Box>
              </Box>
            ))}
          </VStack>

          <HStack p={4} borderTop="1px" borderColor={borderColor}>
            <Input
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />
            <Button
              colorScheme="blue"
              onClick={handleSend}
              leftIcon={<FaPaperPlane />}
            >
              Send
            </Button>
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default AIAssistant; 