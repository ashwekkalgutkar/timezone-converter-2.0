import React from "react";
import { Box } from "@chakra-ui/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TimezoneCard from "./TimezoneCard";

const TimezoneList = ({ timezones, time, onRemove, onReorder }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(timezones);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onReorder(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="timezones">
        {(provided) => (
          <Box ref={provided.innerRef} {...provided.droppableProps}>
            {timezones.map((timezone, index) => (
              <TimezoneCard
                key={timezone.value}
                index={index}
                timezone={timezone}
                time={time}
                onRemove={onRemove}
              />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TimezoneList;
