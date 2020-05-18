var fib_cache ={};

function fib_with_memorization(n) {
    if (n in fib_cache) {
        return fib_cache[n]
    }
        
    if (n <= 1) {
        return 1;
    }
    var value = fib_with_memorization(n-1) + fib_with_memorization(n-2);
    fib_cache [n] = value;
    return value;
}

function fibonacci(n) {
    if (n <= 1) {
        return 1
    }
    return fibonacci(n-1) + fibonacci(n-2)

}
n=5
for (i=0 ; i < n ; i++){
    console.log(fib_with_memorization(i))
}