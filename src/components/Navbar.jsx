import React from 'react';
import { Box, Flex, Heading, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { IoIosMoon, IoIosSunny } from 'react-icons/io';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={2} shadow="md">
      <Flex align="center" justify="space-between">
        <Heading size="lg" color={useColorModeValue('gray.800', 'gray.200')}>
          TimeWarp
        </Heading>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <IoIosMoon /> : <IoIosSunny />}
          onClick={toggleColorMode}
          variant="ghost"
          colorScheme={colorMode === 'light' ? 'gray' : 'yellow'}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
