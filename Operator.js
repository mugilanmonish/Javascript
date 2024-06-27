// == operator check value only
let a = 10
let b = 10
console.log(a==b); // true, it internally convert, the conversion name "type corosion"
console.log(a===b); // true

// === operator check value along with datatype
let c = 100
let d = "100"
console.log(c==d); // true
console.log(c===d); // false

let e = "mugilan", f = 10
let g = e/f
console.log(g);  //We get NaN(Not a number) because i try to do operation with string and number

console.log(`Adding string and number ${f+e}`);