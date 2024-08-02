import React, { forwardRef } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Select,
  Slider,
  SliderMark,
  SliderThumb,
  SliderTrack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { formatTime } from "../utils/timeUtils";

const TimezoneCard = forwardRef(({
  timezone,
  handleTimeChange,
  handleSelectChange,
  handleRemove,
  sliderLabels,
  draggableProps,
  dragHandleProps,
}, ref) => {
  const { colorMode } = useColorMode();

  const sliderTrackGradient = useColorModeValue(
    "linear(to-r, blue.500 0%, blue.500 20%, lightyellow 30%, lightyellow 70%, blue.500 80%, blue.500 100%)",
    "linear(to-r, blue.500 0%, blue.500 20%, #f9e6a8 30%, #f9e6a8 70%, blue.500 80%, blue.500 100%)"
  );

  const handleSliderChange = (value) => {
    handleTimeChange(value, timezone);
  };

  const timezoneTime = formatTime(
    (timezone.time.hours() * 60 + timezone.time.minutes()),
    timezone.offset
  );
  
  const timezoneDateTime = timezone.time.format("YYYY-MM-DD HH:mm:ss");

  return (
    <Flex
      ref={ref}
      {...draggableProps}
      {...dragHandleProps}
      alignItems="center"
      justifyContent="space-between"
      mt={2}
      p={3}
      bg={useColorModeValue("gray.100", "gray.700")}
      borderRadius="md"
      flexDirection="column"
      position="relative"
      boxShadow="sm"
      width="auto"
    >
      <Box w="100%">
        <Flex gap={2}>
          <Box w="100%">
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="md" fontWeight="bold">
                {timezone.name}
              </Text>
              <IconButton
                aria-label="Remove timezone"
                icon={<MdClose />}
                onClick={() => handleRemove(timezone.name)}
                colorScheme="red"
                size="sm"
              />
            </Flex>
            <Flex alignItems="center" mt={2}>
              <Text fontWeight="bold" fontSize="lg">
                {timezoneDateTime}
              </Text>
              <Box ml={4}>
                <Select
                  value={timezone.time.hours() * 60 + timezone.time.minutes()}
                  onChange={(e) => handleSelectChange(e, timezone)}
                  fontWeight="bold"
                  w="auto"
                  borderRadius="md"
                  textAlign="center"
                  fontSize="sm"
                >
                  {Array.from({ length: 24 * 60 / 15 }, (_, i) => (
                    <option key={i * 15} value={i * 15}>
                      {formatTime(i * 15, timezone.offset)}
                    </option>
                  ))}
                </Select>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Slider
          max={(24 * 60) / 15 - 1}
          aria-label="slider-ex-1"
          min={0}
          step={1}
          onChange={handleSliderChange}
          value={(timezone.time.hours() * 60 + timezone.time.minutes()) / 15}
          mt={2}
          h={3}
          fontSize="sm"
        >
          <SliderTrack bgGradient={sliderTrackGradient}>
            {Array.from({ length: (24 * 60) / 15 }, (_, i) => i).map((mark) => (
              <SliderMark key={mark} value={mark} bg="transparent" color="#9aafc6" fontSize="sm">
                |
              </SliderMark>
            ))}
          </SliderTrack>
          <SliderThumb boxSize={6} borderRadius="sm">
            {/* The draggable icon is removed */}
          </SliderThumb>
        </Slider>
        <Flex justifyContent="space-between" mt={2}>
          {sliderLabels.map((label, i) => (
            <Text key={i} fontSize="xs">
              {label}
            </Text>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
});

export default TimezoneCard;
