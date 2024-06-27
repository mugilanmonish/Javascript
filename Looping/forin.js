// forin --> it is used for arrays and objects
let arr = [1, 2, 3, 4, 5]
for (const key in arr) {
    console.log(key);     
}
console.log(typeof arr); // it considered as 'object'

let arr1 = [{ 1: "java" }, { 2: "javascript" }, { 3: "pyton" }]
for (const i in arr1) {
    if(i==2)
    console.log(arr1[i]);   // output { '3': 'pyton' }
}

// forof --> it is array
let arr3 = [1,2,1,2,1]
for (const itr of arr3) {
    console.log(itr);  // it will print all elements in an array
}
let arr4 = [{ 4: "apple" }, { 5: "orange" }, { 6: "mango" }]
for (const itrr of arr4) {
    if (itrr==1) {
        console.log(itrr);    //it will not print anything
    }
}
