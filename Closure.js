function outer() {
    let a = 10
    let b = 40
    function inner() {
        console.log(a,b)
        
        console.log(a+b);
        var a1= 10;
        var b = 30
        function innermost() {
            console.log(a);
        }
        innermost()
    }
    inner()
}
outer()

/* here closure memory is there so variable declared inside outer function it will work in inner function also and 
inner most function also "it will stored in closure memory" Lexical scope  in the sense 
for innermost function --> inner and outer is the lexical scope
for inner function --> outer is the lexical scope
whenever we declare variable (let,const,var) globally it will work in outer, inner and innermost function
*/
