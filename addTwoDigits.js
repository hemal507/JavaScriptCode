function addTwoDigits(n) {
    return n%10 +  ( ( n - n%10) / 10) 
}

console.log(addTwoDigits(98))
console.log(addTwoDigits(10))
console.log(addTwoDigits(26))
console.log(addTwoDigits(09))