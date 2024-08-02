import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TimezoneConverter from "./pages/TimezoneConverter"; 

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <TimezoneConverter />
    </ChakraProvider>
  );
}

export default App;
