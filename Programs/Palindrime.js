let s = "Malayalam"
s = s.toLowerCase()
function isPalindrome(s) {
    let first = 0;
    let last = s.length -1
    while (first < last) {
        if (s[first] != s[last]) {
            return false
        }
        first++
        last--
    }
    return true
}
if (isPalindrome(s)) {
    console.log(`${s} is palindrome`)
} else {
    console.log(`${s} is not a palindrome`);
}