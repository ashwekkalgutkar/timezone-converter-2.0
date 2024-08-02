import React from "react";
import { Box } from "@chakra-ui/react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../date-picker.css";

const DatePicker = ({ selectedDate, handleDateAndTimeChange }) => {
  return (
    <Box p={4} textAlign={"center"}>
      <ReactDatePicker
        selected={selectedDate}
        onChange={handleDateAndTimeChange}
        showTimeSelect
        dateFormat="Pp"
        className="custom-datepicker"
      />
    </Box>
  );
};

export default DatePicker;
