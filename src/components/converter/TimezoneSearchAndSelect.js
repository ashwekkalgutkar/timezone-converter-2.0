import React from "react";
import { Box } from "@chakra-ui/react";
import Select from "react-select";
import { timezones } from "../../assets/timezone";

const TimezoneSearchAndSelect = ({ onSelect }) => {
  return (
    <Box mb={4}>
      <Select
        options={timezones}
        onChange={onSelect}
        placeholder="Search and select timezone..."
        isClearable
      />
    </Box>
  );
};

export default TimezoneSearchAndSelect;
