// Method-1

let year = 2022;

if (year % 400 === 0) {
  year = "Leap Year";
} else if (year % 100 === 0) {
  year = "Not a Leap Year";
} else if (year % 4 === 0) {
  year = "Leap Year";
} else {
  year = "Not a Leap Year";
}

console.log(year);

// Method-2

// function aLeapYear(year) {
//   if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
//     console.log(`${year} is a leap year`);
//   } else {
//     console.log(`${year} is not a leap year`);
//   }
// }
