class parent {
    static r = 20
    static a = 5
    static sum() {
        let b = 10
        console.log(this.a);
        console.log(this.r+this.a+b);
    }
}
parent.sum()
class child extends parent {
    static sub() {
        console.log(this.r+ this.a);
     //   console.log(b);
    }
}
child.sub()
console.log(`Calling parent fn in child class ${child.sum()}`);

/**
Inside class we can give static instead of var,let,const. without static it considered as non-static we have to crete
object and invoke the variables and functions
 */