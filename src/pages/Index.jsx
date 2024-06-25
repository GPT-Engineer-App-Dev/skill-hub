import { Container, VStack, Heading, Text, Box, SimpleGrid, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="stretch">
        {/* Hero Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>Welcome to CodeMaster</Heading>
          <Text fontSize="xl">Your journey to becoming a coding master starts here.</Text>
        </Box>

        {/* Courses Section */}
        <Box>
          <Heading as="h2" size="xl" mb={6} textAlign="center">Courses</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">JavaScript Basics</Heading>
              <Text mt={4}>Learn the fundamentals of JavaScript, the most popular programming language in web development.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">React for Beginners</Heading>
              <Text mt={4}>Get started with React, a powerful library for building user interfaces.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Advanced Node.js</Heading>
              <Text mt={4}>Dive deep into Node.js and learn how to build scalable server-side applications.</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Instructors Section */}
        <Box>
          <Heading as="h2" size="xl" mb={6} textAlign="center">Instructors</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">John Doe</Heading>
              <Text mt={4}>Expert in JavaScript and front-end development with over 10 years of experience.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Jane Smith</Heading>
              <Text mt={4}>Full-stack developer specializing in React and Node.js.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Alice Johnson</Heading>
              <Text mt={4}>Software engineer with a passion for teaching and mentoring.</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Contact Form Section */}
        <Box>
          <Heading as="h2" size="xl" mb={6} textAlign="center">Contact Us</Heading>
          <Box maxW="md" mx="auto">
            <FormControl id="name" mb={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message" mb={4}>
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
            <Button colorScheme="blue" size="lg" width="full">Submit</Button>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;