export function breakString(inputString: string) {
  // Split the input string into an array of substrings based on '#'
  const brokenStrings = inputString.split("#");

  // Filter out any empty strings and trim whitespace
  const filteredStrings = brokenStrings.filter((str) => str.trim() !== "");

  return filteredStrings;
}

// Format the date as "Day Month Date Hour:Minute"
export function formattedDate(date: Date) {
  return date.toLocaleString("ja-JP", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour clock format
  });
}

// Format the date as "Month"
export function formattedDateMonth(date: Date) {
  return date.toLocaleString("ja-JP", {
    month: "long",
  });
}

// Format the date as "Date"
export function formattedDateDate(date: Date) {
  return date.toLocaleString("ja-JP", {
    day: "numeric",
  });
}
