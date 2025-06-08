import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
  HStack,
  IconButton,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, DownloadIcon } from "@chakra-ui/icons";
import Card from "components/card/Card";

function ResumeGenerator() {
  const toast = useToast();
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "navy.700");

  // Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    website: "",
    summary: "",
  });

  // Education
  const [education, setEducation] = useState([
    { id: 1, institution: "", degree: "", field: "", startDate: "", endDate: "", gpa: "" }
  ]);

  // Work Experience
  const [experience, setExperience] = useState([
    { id: 1, company: "", position: "", startDate: "", endDate: "", description: "" }
  ]);

  // Skills
  const [skills, setSkills] = useState([
    { id: 1, name: "" }
  ]);

  // Handle personal info changes
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  // Handle education changes
  const handleEducationChange = (id, field, value) => {
    setEducation(education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  // Add new education entry
  const addEducation = () => {
    const newId = education.length > 0 ? Math.max(...education.map(e => e.id)) + 1 : 1;
    setEducation([...education, { 
      id: newId, 
      institution: "", 
      degree: "", 
      field: "", 
      startDate: "", 
      endDate: "", 
      gpa: "" 
    }]);
  };

  // Remove education entry
  const removeEducation = (id) => {
    if (education.length > 1) {
      setEducation(education.filter(edu => edu.id !== id));
    } else {
      toast({
        title: "Cannot remove",
        description: "You need at least one education entry",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Handle experience changes
  const handleExperienceChange = (id, field, value) => {
    setExperience(experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  // Add new experience entry
  const addExperience = () => {
    const newId = experience.length > 0 ? Math.max(...experience.map(e => e.id)) + 1 : 1;
    setExperience([...experience, { 
      id: newId, 
      company: "", 
      position: "", 
      startDate: "", 
      endDate: "", 
      description: "" 
    }]);
  };

  // Remove experience entry
  const removeExperience = (id) => {
    if (experience.length > 1) {
      setExperience(experience.filter(exp => exp.id !== id));
    } else {
      toast({
        title: "Cannot remove",
        description: "You need at least one experience entry",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Handle skills changes
  const handleSkillChange = (id, value) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, name: value } : skill
    ));
  };

  // Add new skill
  const addSkill = () => {
    const newId = skills.length > 0 ? Math.max(...skills.map(s => s.id)) + 1 : 1;
    setSkills([...skills, { id: newId, name: "" }]);
  };

  // Remove skill
  const removeSkill = (id) => {
    if (skills.length > 1) {
      setSkills(skills.filter(skill => skill.id !== id));
    } else {
      toast({
        title: "Cannot remove",
        description: "You need at least one skill",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Generate Resume
  const generateResume = () => {
    // In a real application, this would generate a PDF or document
    // For now, we'll just show a success message
    toast({
      title: "Resume Generated",
      description: "Your resume has been generated successfully!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid templateColumns={{ base: "1fr", lg: "1fr" }} gap="20px">
        <Card mb="20px">
          <Flex direction="column">
            <Text
              color={textColor}
              fontSize="2xl"
              fontWeight="700"
              mb="10px"
            >
              Resume Generator
            </Text>
            <Text color="gray.500" fontSize="md" mb="30px">
              Fill in the details below to generate your professional resume
            </Text>

            {/* Personal Information */}
            <Box mb="20px">
              <Text color={textColor} fontSize="xl" fontWeight="700" mb="10px">
                Personal Information
              </Text>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="20px">
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input 
                    name="fullName"
                    value={personalInfo.fullName}
                    onChange={handlePersonalInfoChange}
                    placeholder="John Doe"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input 
                    name="email"
                    value={personalInfo.email}
                    onChange={handlePersonalInfoChange}
                    placeholder="john.doe@example.com"
                    type="email"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input 
                    name="phone"
                    value={personalInfo.phone}
                    onChange={handlePersonalInfoChange}
                    placeholder="(123) 456-7890"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input 
                    name="address"
                    value={personalInfo.address}
                    onChange={handlePersonalInfoChange}
                    placeholder="City, State"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>LinkedIn</FormLabel>
                  <Input 
                    name="linkedin"
                    value={personalInfo.linkedin}
                    onChange={handlePersonalInfoChange}
                    placeholder="linkedin.com/in/johndoe"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Website/Portfolio</FormLabel>
                  <Input 
                    name="website"
                    value={personalInfo.website}
                    onChange={handlePersonalInfoChange}
                    placeholder="johndoe.com"
                  />
                </FormControl>
              </Grid>
              <FormControl mt="20px">
                <FormLabel>Professional Summary</FormLabel>
                <Textarea 
                  name="summary"
                  value={personalInfo.summary}
                  onChange={handlePersonalInfoChange}
                  placeholder="Brief summary of your professional background and goals"
                  rows={4}
                />
              </FormControl>
            </Box>

            <Divider my="30px" />

            {/* Education */}
            <Box mb="20px">
              <Flex justify="space-between" align="center" mb="10px">
                <Text color={textColor} fontSize="xl" fontWeight="700">
                  Education
                </Text>
                <Button leftIcon={<AddIcon />} colorScheme="blue" size="sm" onClick={addEducation}>
                  Add Education
                </Button>
              </Flex>
              
              {education.map((edu) => (
                <Box 
                  key={edu.id} 
                  p="15px" 
                  mb="15px" 
                  borderWidth="1px" 
                  borderRadius="md"
                  bg={bgColor}
                >
                  <Flex justify="space-between" mb="10px">
                    <Text fontWeight="600">Education #{edu.id}</Text>
                    <IconButton
                      icon={<DeleteIcon />}
                      colorScheme="red"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeEducation(edu.id)}
                      aria-label="Remove education"
                    />
                  </Flex>
                  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="15px">
                    <FormControl>
                      <FormLabel>Institution</FormLabel>
                      <Input 
                        value={edu.institution}
                        onChange={(e) => handleEducationChange(edu.id, "institution", e.target.value)}
                        placeholder="University Name"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Degree</FormLabel>
                      <Input 
                        value={edu.degree}
                        onChange={(e) => handleEducationChange(edu.id, "degree", e.target.value)}
                        placeholder="Bachelor of Science"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Field of Study</FormLabel>
                      <Input 
                        value={edu.field}
                        onChange={(e) => handleEducationChange(edu.id, "field", e.target.value)}
                        placeholder="Computer Science"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>GPA</FormLabel>
                      <Input 
                        value={edu.gpa}
                        onChange={(e) => handleEducationChange(edu.id, "gpa", e.target.value)}
                        placeholder="3.8/4.0"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Start Date</FormLabel>
                      <Input 
                        type="month"
                        value={edu.startDate}
                        onChange={(e) => handleEducationChange(edu.id, "startDate", e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>End Date</FormLabel>
                      <Input 
                        type="month"
                        value={edu.endDate}
                        onChange={(e) => handleEducationChange(edu.id, "endDate", e.target.value)}
                      />
                    </FormControl>
                  </Grid>
                </Box>
              ))}
            </Box>

            <Divider my="30px" />

            {/* Work Experience */}
            <Box mb="20px">
              <Flex justify="space-between" align="center" mb="10px">
                <Text color={textColor} fontSize="xl" fontWeight="700">
                  Work Experience
                </Text>
                <Button leftIcon={<AddIcon />} colorScheme="blue" size="sm" onClick={addExperience}>
                  Add Experience
                </Button>
              </Flex>
              
              {experience.map((exp) => (
                <Box 
                  key={exp.id} 
                  p="15px" 
                  mb="15px" 
                  borderWidth="1px" 
                  borderRadius="md"
                  bg={bgColor}
                >
                  <Flex justify="space-between" mb="10px">
                    <Text fontWeight="600">Experience #{exp.id}</Text>
                    <IconButton
                      icon={<DeleteIcon />}
                      colorScheme="red"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeExperience(exp.id)}
                      aria-label="Remove experience"
                    />
                  </Flex>
                  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="15px">
                    <FormControl>
                      <FormLabel>Company</FormLabel>
                      <Input 
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(exp.id, "company", e.target.value)}
                        placeholder="Company Name"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Position</FormLabel>
                      <Input 
                        value={exp.position}
                        onChange={(e) => handleExperienceChange(exp.id, "position", e.target.value)}
                        placeholder="Software Engineer"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Start Date</FormLabel>
                      <Input 
                        type="month"
                        value={exp.startDate}
                        onChange={(e) => handleExperienceChange(exp.id, "startDate", e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>End Date</FormLabel>
                      <Input 
                        type="month"
                        value={exp.endDate}
                        onChange={(e) => handleExperienceChange(exp.id, "endDate", e.target.value)}
                      />
                    </FormControl>
                  </Grid>
                  <FormControl mt="15px">
                    <FormLabel>Description</FormLabel>
                    <Textarea 
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(exp.id, "description", e.target.value)}
                      placeholder="Describe your responsibilities and achievements"
                      rows={3}
                    />
                  </FormControl>
                </Box>
              ))}
            </Box>

            <Divider my="30px" />

            {/* Skills */}
            <Box mb="30px">
              <Flex justify="space-between" align="center" mb="10px">
                <Text color={textColor} fontSize="xl" fontWeight="700">
                  Skills
                </Text>
                <Button leftIcon={<AddIcon />} colorScheme="blue" size="sm" onClick={addSkill}>
                  Add Skill
                </Button>
              </Flex>
              
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="15px">
                {skills.map((skill) => (
                  <Box key={skill.id} p="10px" borderWidth="1px" borderRadius="md" bg={bgColor}>
                    <Flex justify="space-between" align="center">
                      <FormControl>
                        <Input 
                          value={skill.name}
                          onChange={(e) => handleSkillChange(skill.id, e.target.value)}
                          placeholder="Skill Name"
                        />
                      </FormControl>
                      <IconButton
                        icon={<DeleteIcon />}
                        colorScheme="red"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeSkill(skill.id)}
                        aria-label="Remove skill"
                      />
                    </Flex>
                  </Box>
                ))}
              </Grid>
            </Box>

            <Divider my="30px" />

            {/* Generate Resume Button */}
            <Flex justify="flex-end">
              <Button rightIcon={<DownloadIcon />} colorScheme="teal" onClick={generateResume}>
                Generate Resume
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Grid>
    </Box>
  );
}

export default ResumeGenerator;