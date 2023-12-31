let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

numsAndStrings = numsAndStrings.filter(function (el) {
    return typeof el !== "string"
}).map(function (el) {
    return -el
})
console.log(numsAndStrings)
// [-1, -10, 10, 20, -5, -3]