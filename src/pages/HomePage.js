import React from "react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import ConverterSection from "../components/converter/ConverterSection";
import Navbar from "../components/common/Navbar";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.lg" mt={16}>
        <Flex direction="column" align="center">
          <Heading mb={4}>Timezone Converter</Heading>
          <ConverterSection />
        </Flex>
      </Container>
    </Box>
  );
};

export default HomePage;
