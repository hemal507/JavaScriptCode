function isPowerOfTwo2(n) {
    return n & (n-1) < 1 ;
}
console.log(isPowerOfTwo2(64));