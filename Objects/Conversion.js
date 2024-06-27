// js to json object
let a = {
    name : "mugi"
}
let jsonObj = JSON.stringify(a);
console.log(`Json Object ${jsonObj}`);

// Json to js 
let jsObject = JSON.parse(jsonObj);
console.log(jsObject);