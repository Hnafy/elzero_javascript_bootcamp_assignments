let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle) === true){
    console.log("Found")
}

if (haystack.indexOf(needle) !== -1){
    console.log("Found")
}

if (haystack[haystack.indexOf(needle)] === needle){
    console.log("Found")
}
