//arrow function ()=>{} 
let func =(a,b)=>console.log(a+b); /// for only one line no need of curly braces
func(10,20)

let fun = (c,d) => {
    console.log(c+d)
}
fun(100,300)
console.log(fun);

// chatgpt
// (parameter)=>expression
const square = (a)=>a*a
console.log(`Square ${square(5)}`);

// (parameters)=>expression
const multiply = (a,b)=>a * b
console.log(`Multiply ${multiply(3,5)}`)

// single parameter
// param => expression 
const Q = (q) => q+5
console.log(`Q = ${Q(1)}`);

// No parameters
// ()=> extression
const g = () => 'No parameter';
console.log(g());

//Function body
/* (parameter) => {
    function body
    return expression;
}
*/
const division = (a,b) => {
    const result = a/b;
    return result
}
console.log(`Multiline Function ${division(10,5)}`);

// Lexical 'this' Example
