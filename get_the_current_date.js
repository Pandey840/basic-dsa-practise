// Write a JavaScript program to get the current date.

// Method-1

const currentDate = new Date().toLocaleDateString();

console.log(currentDate);

// Method-2

const todaysDate = new Date();

dd = todaysDate.getDate();

mm = todaysDate.getMonth() + 1;

yyyy = todaysDate.getFullYear();

// dd = new Date().getDate();

// mm = new Date().getMonth() + 1;

// yyyy = new Date().getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = mm + "-" + dd + "-" + yyyy;
console.log(today);

today = mm + "/" + dd + "/" + yyyy;
console.log(today);

today = dd + "-" + mm + "-" + yyyy;
console.log(today);

today = dd + "/" + mm + "/" + yyyy;
console.log(today);
