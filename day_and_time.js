// Write a JavaScript program to display the current day and time in the following format.

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getday = new Date().getDay();

console.log("Today is : " + days[getday] + ".");

const time = new Date().toLocaleTimeString();

console.log("Current time is : " + time);
