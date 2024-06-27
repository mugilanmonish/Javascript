// function addition(a, b) {
//     console.log(`Sum is ${a + b}`);
// }
// function subtraction(a, b) {
//     console.log(`Differance is ${a - b}`);
// }
// function main(n1, n2, callback1, callback2) {
//     callback1(n1, n2)
//     setTimeout(() => {
//         callback2(n1, n2)
//     }, 10000);
// }
//main(10, 6, addition, subtraction)
//

// setTimeout
console.log("Start");
setTimeout(() => {
    console.log("Timeout callback");
}, 1000);

console.log("End");