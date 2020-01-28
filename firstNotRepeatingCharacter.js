function firstNotRepeatingCharacter(s) {
    var i ;
    for(i=0; i < s.length; i++) {
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            return s[i] ;
        } ;
    } ;
    return '_' ;
}

//console.log(firstNotRepeatingCharacter('abcba'));

