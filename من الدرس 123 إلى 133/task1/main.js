let setOfNumbers = new Set();

setOfNumbers.add(10);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);

console.log(Array.from(setOfNumbers.keys())[setOfNumbers.size - 1]);