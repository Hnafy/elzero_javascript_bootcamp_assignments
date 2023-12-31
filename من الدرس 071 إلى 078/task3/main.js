let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce(function (acc, current) {
    return acc + current;
}).split("").filter(function (ele) {
    return ele !== ",";
}).reduce(function (acc, current) {
    return acc + current;
});

console.log(newArray);
// Elzero