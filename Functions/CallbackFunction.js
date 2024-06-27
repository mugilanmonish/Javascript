/*
A callback function is a function that is passed as an argument to another function and is executed 
after some operation has been completed. Callbacks are often used to handle asynchronous operations.
*/
function something(callback1,callback2) {
    console.log(`something function`);
    setTimeout(() => {
        console.log(`Inside timeout`);
        // console.log(callback);
        let a =10 
        let b = 20
       let c = callback1(a,b);
       console.log(c);
    console.log(callback2(c,b));   

    }, 2000);
}
const add=(a,b)=>{
  return(a+b);
}
const sub = (a,b)=>{
    return(a-b)
}
function afterd() {
    console.log(`I am callback`);
   
    something(add,sub)
}
afterd()