function higherVersion2(ver1, ver2) {
    s1 = ver1.split(".") ;
    s2 = ver2.split(".") ;
    console.log(s1);
    console.log(s2);
    for (i=0; i < s1.length; i++) {
        if (Number(s1[i]) < Number(s2[i]) ) {
            return -1
        }
        else if (Number(s1[i]) > Number(s2[i]) ) {
            return 1
        }
        
    }
    return 0
}

console.log(higherVersion2("1.2.2", "1.2.0"))