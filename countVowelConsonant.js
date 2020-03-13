function countVowelConsonant(s) {
    var return_val = 0 ;
    s.split('').forEach(element => {
        return_val +=  'aeiou'.indexOf(element) >= 0 ? 1 : 2 ;
        // console.log(return_val)
    });
    return return_val
}

console.log(countVowelConsonant('abcde'))