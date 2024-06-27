// date
let now = new Date();
console.log(`now ${now}`); // Output: Current date and time --> Format: 2024-06-23T15:46:02.096Z

// getFullYear
//let now = new Date();
let year = now.getFullYear();
console.log(`year ${year}`); // Output: 2024 (or current year)

//getMonth
//let now = new Date();
let month = now.getMonth();
console.log(`month ${month}`); // Output: 5 (if current month is June)

// getDate
//let now = new Date();
let day = now.getDate();
console.log(`day ${day}`); // Output: 22 (if current date is 22nd)

// getDay
// let now = new Date();
let dayOfWeek = now.getDay();
console.log(`dayOfWeek ${dayOfWeek}`); // Output: 6 (if today is Saturday) 0-6 --> Sunday-Saturday

// getHours
// let now = new Date();
let hours = now.getHours();
console.log(`Hours ${hours}`); // Output: 14 (if current time is 2 PM)

// getMinutes
// let now = new Date();
let minutes = now.getMinutes();
console.log(`minutes ${minutes}`); // Output: 45 (if current minute is 45)

// getSeconds
// let now = new Date();
let seconds = now.getSeconds();
console.log(`seconds ${seconds}`); // Output: 30 (if current second is 30)

// getTime
//let now = new Date();
let time = now.getTime();
console.log(`Time Is ${time}`); // Output: milliseconds since January 1, 1970

//toString
// let now = new Date();
let str = now.toString();
console.log(`string is ${str}`); // Output: "Sat Jun 22 2024 14:45:30 GMT+0000 (UTC)"

// customFormat
console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);

//toDateString
// let now = new Date();
let dateStr = now.toDateString();
console.log(`Date String ${dateStr}`); // Output: "Sat Jun 22 2024"

//toISOString
// let now = new Date();
let isoStr = now.toISOString();
console.log(`ISO String ${isoStr}`); // Output: "2024-06-22T14:45:30.000Z"

//toUTCString
// let now = new Date();
let utcStr = now.toUTCString();
console.log(`UTC String ${utcStr}`); // Output: "Sat, 22 Jun 2024 14:45:30 GMT"

//toLocaleString
// let now = new Date();
let localeStr = now.toLocaleString();
console.log(`Local String ${localeStr}`); // Output: "23/6/2024, 2:45:30 PM"

//toLocaleDateString
// let now = new Date();
let localeDateStr = now.toLocaleDateString();
console.log(`Local Date String ${localeDateStr}`); // Output: "23/6/2024"

// valueOf
//let now = new Date();
let value = now.valueOf();
console.log(`Value Of ${value}`); // Output: milliseconds since January 1, 1970