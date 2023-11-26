import { format, parseISO } from "date-fns";

export default function convertUnixTime(inputDate) {
  const dateObject = parseISO(inputDate);
  const formattedDate = format(dateObject, "EEEE, MMM d");
  return formattedDate;
}
