function addition(a, b) {
    console.log(`Sum is ${a + b}`);
    return a + b
}
function subtraction(a, b) {
    console.log(`Differance is ${a - b}`);
}
function main(n1, n2, callback1, callback2) {
    setTimeout(() => {
        return callback2(n1,n2)
    }, 3000);
    return callback1(n1, n2)
}
let m = main(10, 6, addition, subtraction)
console.log(m);


// setTimeout
// console.log("Start");
// setTimeout(() => {
//     console.log("Timeout callback");
// }, 1000);

// console.log("End");