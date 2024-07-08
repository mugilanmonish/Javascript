const s = 'loosu'
let count = 1
let output = ''
for (let i = 0; i < s.length-1; i++) {
    let character = s.charAt(i)
    if (s.charAt(i)===s.charAt(i+1)) {
        count++
    } else {
        output +=character+count
        count = 1
    }
}
output +=s.charAt(s.length-1)+count
console.log(output);