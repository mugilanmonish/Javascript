let a = 10;
let b = 20;
if (a<b) {
    console.log(a)
}
let c =30;
if (a>b) {
    console.log(`this is if block ${a}`);
} else if(c<b) {
    console.log(`this is else if block ${b}`);
}
else {
    console.log(`this is else block`);
}
let key = "mugilan"
switch (key) {
    case "mugi":
        console.log(key)
        break;
    case "mugilan":
        console.log(`Data is matching`)
        break
    default:
        console.log(`Data is not matching`)
}
const name1 = "mugilan"
const name2 = "monis"
if(name1=="mugilan") {
    console.log(`${name1} is matching`);
    if (name2=="monish") {
        console.log(`${name2} is also matching`);
    } else {
        console.log(`Name is not matching`);
    }
} else {
    console.log(`First name is itself not matching`);
}
let x = 10;
function f() {
    if (true) {
        let y = 9
        console.log(y);
    }
    console.log(y);  // this line gives error because we cant access y outside block
}
f()
console.log(x)