import moment from "moment-timezone";

export const formatTime = (minutes, offset) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const time = moment()
    .utc()
    .startOf("day")
    .add(hours, "hours")
    .add(mins, "minutes")
    .utcOffset(offset * 60);
  return time.format("HH:mm");
};

export const formatDate = (time) => {
  return time.format("dddd, MMMM D, YYYY");
};
