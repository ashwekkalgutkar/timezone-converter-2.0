import React from "react";
import { Button } from "@chakra-ui/react";
import moment from "moment";

const ScheduleMeetButton = ({ time }) => {
  const scheduleMeet = () => {
    const startTime = moment(time).utc().format("YYYYMMDDTHHmmss") + "Z";
    const endTime = moment(time).add(2, "hours").utc().format("YYYYMMDDTHHmmss") + "Z";

    const meetUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${startTime}/${endTime}`;

    window.open(meetUrl, "_blank");
  };

  return (
    <Button
      onClick={scheduleMeet}
      colorScheme={"linkedin"}
      border={"2px solid #2f59ff"}
      p={"22px"}
      fontWeight={400}
    >
      Schedule Meet
    </Button>
  );
};

export default ScheduleMeetButton;
