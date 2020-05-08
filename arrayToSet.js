// var array1 = ["welcome", "to", "java" ,"scippting"]
// var array2 = ["welcome", "To" , "JAVA" , "scripting"]


// var set1 = new Set(array1.concat(array2))
// console.log(set1)

function arraysToSet(array1, array2) {
    return new Set(array1.concat(array2))
}

console.log(arraysToSet(["welcome", "to", "java" ,"scippting"], ["welcome", "To" , "JAVA" , "scripting"] ))