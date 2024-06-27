class result {
    announce() {
        let a = 30 
        console.log("u have 2 backlog"+" "+a);
    }
}
class reveals extends result {
    announce() {
        let a = 35
        console.log("u have 2 backlog"+" "+a);
        super.announce()
    }
}
let obj = new reveals()
obj.announce()