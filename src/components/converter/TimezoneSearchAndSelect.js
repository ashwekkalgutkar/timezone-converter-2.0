import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Select from "react-select";
import { timezones } from "../../assets/timezone";

const TimezoneSearchAndSelect = ({ onSelect }) => {
  const bgColor = useColorModeValue("#fff", "#2D3748"); 
  const textColor = useColorModeValue("#000", "#fff");
  const borderColor = useColorModeValue("#CBD5E0", "#4A5568"); 
  const placeholderColor = useColorModeValue("#A0AEC0", "#E2E8F0"); 
  const hoverBgColor = useColorModeValue("#EDF2F7", "#4A5568"); 
  const hoverTextColor = useColorModeValue("#000", "#fff"); 

  return (
    <Box mb={4}>
      <Select
        options={timezones}
        onChange={onSelect}
        placeholder="Search and select timezone..."
        isClearable
        styles={{
          container: (provided) => ({
            ...provided,
            width: "100%",
          }),
          control: (provided) => ({
            ...provided,
            backgroundColor: bgColor,
            borderColor: borderColor,
            boxShadow: "none",
            "&:hover": {
              borderColor: borderColor,
            },
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: bgColor,
            borderColor: borderColor,
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
              ? bgColor
              : state.isFocused
              ? hoverBgColor
              : bgColor,
            color: state.isSelected
              ? textColor
              : state.isFocused
              ? hoverTextColor
              : textColor,
          }),
          singleValue: (provided) => ({
            ...provided,
            color: textColor,
          }),
          placeholder: (provided) => ({
            ...provided,
            color: placeholderColor,
          }),
        }}
      />
    </Box>
  );
};

export default TimezoneSearchAndSelect;
