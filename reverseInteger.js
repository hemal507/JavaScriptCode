function reverseInteger(x) {
    var r = parseInt(String(x).split('').reverse().join('')) ;
    return (x < 0 ? -r :  r) ;
}

console.log(reverseInteger(12345)) ;
console.log(reverseInteger(-12345)) ;
