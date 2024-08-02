import React from "react";
import { Box } from "@chakra-ui/react";
import Slider from "rc-slider";

const TimezoneSlider = ({ value, onChange }) => {
  return (
    <Box mb={4}>
      <Slider min={0} max={24} step={1} value={value} onChange={onChange} />
    </Box>
  );
};

export default TimezoneSlider;
