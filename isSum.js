function isSum(n) {
    var r=0 ;
    var a=1 ;
    while (n > r) {
        r += a++ ;
    }
    return n == r
}

console.log(isSum(43))