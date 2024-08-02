import React, { useEffect, useState } from "react";
import { Box, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { FaExchangeAlt, FaCalendarPlus, FaCalendar } from "react-icons/fa";
import moment from "moment";
import TimezoneSearchAndSelect from "./TimezoneSearchAndSelect";
import { INIT_FORMATTED_TIME_ZONES } from "../../assets/timezone";
import DatePicker from "./DatePicker";
import TimezoneSlider from "./TimezoneSlider";
import TimezoneList from "./TimezoneList";

const ConverterSection = () => {
  const [timezones, setTimezones] = useState(INIT_FORMATTED_TIME_ZONES);
  const [selectedDate, setSelectedDate] = useState(moment.utc().toDate());
  const [time, setTime] = useState(moment.utc().toDate());

  const newLocalStorageTimezones = (newTimeZones) => {
    localStorage.setItem("FORMATTED_TIME_ZONES", JSON.stringify(newTimeZones));
  };

  const handleTimezoneSelect = (timezone) => {
    if (timezone && !timezones.find((tz) => tz.value === timezone.value)) {
      const newTimeZones = [...timezones, timezone];
      newLocalStorageTimezones(newTimeZones);
      setTimezones(newTimeZones);
    } else if (timezone === null) {
      console.log("Timezone selection cleared");
    }
  };

  const handleDateAndTimeChange = (date) => {
    setSelectedDate(date);
    setTime(date);
  };

  const handleReverseOrder = () => {
    const newTimeZones = [...timezones].reverse();
    newLocalStorageTimezones(newTimeZones);
    setTimezones(newTimeZones);
  };

  const handleSliderChange = (value) => {
    setTime(moment.utc().startOf("day").add(value, "hours").toDate());
  };

  const handleRemoveTimezone = (value) => {
    const newTimeZones = timezones.filter((tz) => tz.value !== value);
    newLocalStorageTimezones(newTimeZones);
    setTimezones(newTimeZones);
  };

  const handleReorderTimezones = (reorderedTimezones) => {
    setTimezones(reorderedTimezones);
  };

  const handleScheduleMeet = () => {
    const startTime = moment(time).utc().format("YYYYMMDDTHHmmss") + "Z";
    const endTime =
      moment(time).add(2, "hours").utc().format("YYYYMMDDTHHmmss") + "Z";

    const meetUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${startTime}/${endTime}`;

    window.open(meetUrl, "_blank");
  };

  useEffect(() => {
    try {
      const localStorageTimeZones = localStorage.getItem(
        "FORMATTED_TIME_ZONES"
      );
      const jsonFormattedTimeZones = localStorageTimeZones
        ? JSON.parse(localStorageTimeZones)
        : false;
      if (jsonFormattedTimeZones) {
        setTimezones(jsonFormattedTimeZones);
      } else {
        newLocalStorageTimezones(INIT_FORMATTED_TIME_ZONES);
        setTimezones(INIT_FORMATTED_TIME_ZONES);
      }
    } catch (error) {
      newLocalStorageTimezones(INIT_FORMATTED_TIME_ZONES);
      setTimezones(INIT_FORMATTED_TIME_ZONES);
    }
  }, []);

  return (
    <Box width="100%" p={4}>
      <TimezoneSearchAndSelect onSelect={handleTimezoneSelect} />
      <Flex
        justifyContent={["center", "space-between"]}
        alignItems={"center"}
        mb={2}
        mt={2}
        flexDir={["column", "row"]}
        gap={4}
        width="100%"
      >
        <Tooltip label="Reverse Timezones">
          <IconButton
            icon={<FaExchangeAlt />}
            size="lg"
            onClick={handleReverseOrder}
            colorScheme={"linkedin"}
            border={"2px solid #2f59ff"}
            p={"22px"}
            fontWeight={400}
            aria-label="Reverse Timezones"
          />
        </Tooltip>
        <DatePicker
          selectedDate={selectedDate}
          handleDateAndTimeChange={handleDateAndTimeChange}
        />
        <Flex direction="column" align="center" gap={2}>
          <Tooltip label="Schedule Meet">
            <IconButton
              icon={<FaCalendarPlus />}
              size="lg"
              onClick={handleScheduleMeet}
              colorScheme={"linkedin"}
              border={"2px solid #2f59ff"}
              p={"22px"}
              fontWeight={400}
              aria-label="Schedule Meet"
            />
          </Tooltip>
          <Tooltip label="View Schedule">
            <IconButton
              icon={<FaCalendar />}
              size="lg"
              onClick={() =>
                window.open(`https://calendar.google.com`, "_blank")
              }
              colorScheme={"linkedin"}
              border={"2px solid #2f59ff"}
              p={"22px"}
              fontWeight={400}
              aria-label="View Schedule"
            />
          </Tooltip>
        </Flex>
      </Flex>
      <TimezoneSlider
        value={moment.utc(time).hours()}
        onChange={handleSliderChange}
      />
      <TimezoneList
        timezones={timezones}
        time={time}
        onRemove={handleRemoveTimezone}
        onReorder={handleReorderTimezones}
      />
    </Box>
  );
};

export default ConverterSection;
