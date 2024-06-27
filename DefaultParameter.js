// function details(name,loc="bglr",age) {
//     console.log(`${name} is ${age} yrs old and posted in ${loc}`);
//     console.log(arguments);
// }
// details("raju",undefined,30)

function emp(name = "mugilan") {
    console.log(name)
    console.log(arguments);
}
emp()
emp("mugilanmonish")