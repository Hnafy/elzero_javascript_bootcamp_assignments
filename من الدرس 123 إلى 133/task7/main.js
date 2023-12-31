let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne,...numsTwo]);
console.log(Array.from(numsOne + numsTwo).filter((el)=>el!==",").map((el)=>+el));
console.log(numsOne.concat(numsTwo));

// Needed Output
// [1, 2, 3, 4, 5, 6]