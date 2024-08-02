import React from "react";
import { Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import moment from "moment";
import { Draggable } from "react-beautiful-dnd";

const TimezoneCard = ({ index, timezone, time, onRemove }) => {
  const { value, label, offset } = timezone;
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("black", "white");

  return (
    <Draggable draggableId={value} index={index}>
      {(provided) => (
        <Flex
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          alignItems="center"
          justifyContent="space-between"
          bg={bgColor}
          p={4}
          mb={2}
          borderRadius="md"
          color={textColor}
        >
          <Text>
            {label} - {moment(time).utcOffset(offset).format("HH:mm:ss")}
          </Text>
          <IconButton
            icon={<CloseIcon />}
            size="sm"
            onClick={() => onRemove(value)}
            aria-label="Remove timezone"
          />
        </Flex>
      )}
    </Draggable>
  );
};

export default TimezoneCard;
