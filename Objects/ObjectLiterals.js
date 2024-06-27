let obj = {
    finame:"mugilan", 
    sename:"monish",
    email:"mugi@gmail.com",
    phone:7708084971,
    fun:function(a,b) {
        console.log(`A + B is ${a*b}`); // function inside object we call it as method
    },
    place : {
        home : "Thalaivasal"
    },
    dress : [1,"shirt",null,undefined,true,false],
    data : ["plumbing", "electrical","fitter","craneoperator", function dname() {
        console.log(`This method inside array data`);
    }]
}
console.log(obj);
console.log(obj.phone);
obj.fun(10,2)
console.log(obj['email']);
console.log(obj.place.home);
console.log(obj.dress);
console.log(obj.dress[2])
console.log(obj.data);
console.log(obj.data[4]);