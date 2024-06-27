let patient = {
    pname : "chinni",
    age : 10
}
let patient2 = {
    pname : "chinna",
    age : 11
}
function hpt1(place,sex) {
    console.log(`Patient name ${this.pname} and Age ${this.age} and loc is ${place} and sex is ${sex}`);
}
// hpt1() if i invoke this function, i will get error

// call 1st argument is function, 2nd argument is value we can give n no of values.
hpt1.call(patient,"salem","female") 

// apply 1st argument is function, 2nd argument is array of values we can give n no of values inside an array
hpt1.apply(patient2,["chennai","male"])

/* bind 1st argument is function, 2nd argument is value we can give n no of values. We need to store it variable
    and invoke the variable
*/
let fn = hpt1.bind(patient,"salem","female")
fn()