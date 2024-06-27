// push
let arr = [1,2,3]
console.log(`Original array ${arr}`)
arr.push(4,5)  // Adds one or more elements to the end of an array and returns the new length of the array.
console.log(`One Element pushed ${arr}`);

// pop
let lastElement = arr.pop();  // it removes and return last element
console.log(`After Pop ${arr}`); 
console.log(`Poped element ${lastElement}`);

// shift 
let firstELement = arr.shift(); // it removes and return first element
console.log(`After Shift ${arr}`); 
console.log(`Shifted Element ${firstELement}`);

// unshift
arr.unshift(1,9) // adds one or more element in the begining of an array
console.log(`After unshift ${arr}`);

// reverse 
arr.reverse(); // reverse the array
console.log(`After reversing an array ${arr}`);

// sort
arr.sort()  // sort in the ascending order
console.log(`After sorting${arr}`);

//fill
arr.fill(7,1,3) // 7--> static value to fill, 1--> start index, 3-->end index it consider (endIndex-1)
console.log(`After filling 7 is ${arr}`);

// concat
let array  = [1,2,3]
let array2 = [4,5,6]
let newArray = array.concat(array2) // concat two or more arrays and return new array
console.log(`New array ${newArray}`);

// foreach
arr.forEach(function(element) {     // Iterates over each element.
    console.log(element);
});

/**
 * slice      Returns a portion of the array. 
 * @param start index number 
 * @param end index number but it exclusive i.e) 2-1=1
 */
let slicedArray = arr.slice(1,2)
console.log(`Original ${arr}`);
console.log(`New Sliced Array is ${slicedArray}`);

// splice add and remove element in an array
/**
 * @param from index
 * @param end index
 * @param first index new value
 * @param second index new value
 */
arr.splice(1,2,'x','y')   
console.log(`Spliced array ${arr}`);

// filter
let arr1 = [1, 2, 3, 4, 5];
let filtered = arr1.filter(function(element) {
    return element > 2;
});
console.log(`New filtered array ${filtered}`);

//find 
let found = arr1.find(function(element) {
    return element > 2;
});
console.log(found);

// join, join all elements in an array to a string
let joined = arr.join('-');
console.log(`Joined array ${joined}`);

// lastIndexOf, it will give the last index of the element in an array
let lastIndex = arr.lastIndexOf(4);
console.log(arr);
console.log(`Last  index of 7 ${lastIndex}`);

// reduce right
let sum = array.reduceRight(function(acc, element) {
    return acc + element;
}, 0);
console.log(array);
console.log(`Reduce right ${sum}`); 

// include, it will return boolean if the element is present in the array
/**
 * @param searchElement
 * @param fromIndex
 */
let value = array.includes(3, 0);
if (value==true) {
    console.log(`Value is available`);
} else {
    console.log(`Value is not available`);
}

// map
let arr2 = [1,2,3,4,5]
let squareNumbers = arr2.map((element) => {
    return element * element;
})
console.log(`Squared Numbers ${squareNumbers}`);