// // normal for loop
// let array = [1,2,3,4,5];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }   
// //forin
let arr = [11,12,13,14]
for (const ele in arr) {
    if (ele%2==0) {
        console.log(`Element ${ele} ${arr[ele]}`);   
    }
}
//forof
for (const store of arr) {
    console.log(store)
}

let obj1 = {
    firstname : "mugilan",
    lastname : "monish",
    mobile : 7708084971,
    emailId : "mugilanmonish@gmail.com"
}
//console.log(obj1)

for (let key in obj1) {
        const element = obj1[key];
      //  console.log(element);
}

