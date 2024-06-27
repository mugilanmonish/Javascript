// using constructor function
function Emp(first,last, phone) {
    this.firstname = first,
    this.lastname = last,
    this.phoneNumber = phone
}
const emp1 = new Emp("mugi","monish",[123,456,789]);
const emp2 = new Emp("mugilan","monish",[678,789]);
console.log(emp1);
console.log(emp2);