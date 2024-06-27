// round(x)  Eg.1) 5.6->6, Eg.2) 5.4->5
let num = 5.6
let rounded = Math.round(num);
console.log(`Rounded value of 5.6 is ${rounded}`); // output is 6

// pow(base, exponential)
let base = 4
let exponent = 2
let power = Math.pow(base,exponent)
console.log(power); // output : 16

// sqrt(x)
let num1 = 25
let squareRoot = Math.sqrt(num1)
console.log(squareRoot); // output : 5

// abs(x)
let num2 = -3
let absValue = Math.abs(num2)
console.log(absValue); // output : 3

// ceil(x)
let num3 = 3.3
let increase = Math.ceil(num3)
console.log(increase); //output : 4

// floor(x)
let num4 = 3.8
let decrease = Math.floor(num4)
console.log(decrease); //output : 3

// max() and min()
let num5 = Math.max(1,2,3,4,5)
let num6 = Math.min(1,2,3,4,5)
console.log(`Maximum value is ${num5}`); // output : 5
console.log(`Minimum value is ${num6}`); // output : 1

// random
let ran = Math.random()
let ran1 = Math.floor(Math.random()*500)
console.log(`Random value ${ran}`);
console.log(`Random value between 1 to 500 ${ran1}`);