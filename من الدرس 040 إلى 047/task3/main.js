let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrTwo.pop(), arrOne.reverse(), arrTwo.slice(0, 2).reverse())); // ["Z", "X", "D", "C", "B", "A"]

