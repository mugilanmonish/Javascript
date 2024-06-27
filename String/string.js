// charAt
let str = "Hello, World!";
let char = str.charAt(0)
console.log(`0th character ${char}`); // Output: "H"

// charCodeAt
// let str = "Hello, World!";
let code = str.charCodeAt(0);
console.log(code); // Output: 72

// concat
let str1 = "Hello, ";
let str2 = "World!";
let newStr = str1.concat(str2);
console.log(newStr); // Output: "Hello, World!"

// includes
//let str = "Hello, World!";
let result = str.includes("World"); // true
if (result==true) {
    console.log(`String Contains`);
} else {
    console.log(`String not contains`);
}

// endsWith
// let str = "Hello, World!";
// let result = str.endsWith("World!");
if (result==true) { // output true
    console.log(`String ends`);
} else {
    console.log(`String not ends`);
}

// indexOf 
// let str = "Hello, World!";
let index = str.indexOf("o");
console.log(`Index of 'o' is ${index}`); // Output: 4 it will give the first occurance of the character

// lastIndexOf
// let str = "Hello, World!";
 let lastIndex = str.lastIndexOf("o");
console.log(`Index of 'o' is ${lastIndex}`); // Output: 8

// match
// let str = "Hello, World!";
let matches = str.match(/o/g);
console.log(matches); // Output: ["o", "o"]

// replace
// let str = "Hello, World!";
let replaced = str.replace("World", "JavaScript");
console.log(`Replaced new String ${replaced}`); // Output: "Hello, JavaScript!"

// search
// let str = "Hello, World!";
 let index1 = str.search("World");
console.log(`Starting index of the String ${index1}`); // Output: 7

// slice
//let str = "Hello, World!";
let sliced = str.slice(7, 12); 
console.log(`New Sliced String is ${sliced}`); // Output: "World"

// startsWith
//let str = "Hello, World!";
let starts = str.startsWith("Hello");
if (starts==true) {
    console.log(`String starts with Hello`); // Output: true    
} else {
    console.log(`String Not starts without Hello`); // Output: true    
}

// substring
//let str = "Hello, World!";
let substr = str.substring(7, 12);
console.log(`Substring of the index is ${substr}`); // Output: "World"

// toLowerCase
// let str = "Hello, World!";
let upper = str.toUpperCase();
console.log(upper); // Output: "HELLO, WORLD!"

// toUpperCase
//let str = "Hello, World!";
let lower = str.toLowerCase();
console.log(lower); // Output: "hello, world!"

// trim  , it trim both ends
let str3 = "  Hello, World!  ";
let trimmed = str.trim();
console.log(trimmed); // Output: "Hello, World!"

// trimEnd() / trimRight()
let str4 = "  Hello, World!  ";
let trimRight = str.trimEnd();
console.log(trimRight); // Output: "  Hello, World!"

// trimStart() / trimLeft()
let str5 = "  Hello, World!  ";
let trimLeft = str.trimStart();
console.log(trimLeft); // Output: "Hello, World!  "

// valueOf
//let str = new String("Hello, World!");
let value = str.valueOf();
console.log(value); // Output: "Hello, World!"

// length
// let str = "Hello, World!"
console.log(`Length of the string ${str.length}`);  // output 13