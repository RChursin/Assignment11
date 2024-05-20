//STEP 1
let date = new Date();
let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
console.log("Number of days in the current month: " + daysInMonth);

//STEP 2
// let date = new Date();
// let monthName = date.toLocaleString('default', { month: 'long' });
// console.log("Current month name: " + monthName);

//STEP 3
// let date = new Date();
// let isWeekend = (date.getDay() === 0) || (date.getDay() === 6);
// console.log("Is it a weekend? " + isWeekend);

//STEP 4
// let today = new Date();
// let yesterday = new Date(today);
// yesterday.setDate(today.getDate() - 1);
// let yesterdayName = yesterday.toLocaleString('default', { weekday: 'long' });
// console.log("Yesterday's day of the week: " + yesterdayName);

//STEP 5
// let today = new Date();
// let currentDayFirstLetter = today.toLocaleString('default', { weekday: 'long' }).charAt(0);
// console.log("Current day's first letter: " + currentDayFirstLetter);