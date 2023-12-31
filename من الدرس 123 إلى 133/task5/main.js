let theName = "Elzero";

console.log([...theName]);
console.log(theName.split(""));
console.log(Array.from(theName));
console.log(new Array(...theName));
console.log([...new Set(theName)]);

// Needed Output
//['E', 'l', 'z', 'e', 'r', 'o']