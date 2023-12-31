let theNumber = 100020003000;

console.log(...Array.from( new Set( theNumber.toString() ) ).filter( (el) => el !== Array.from( theNumber.toString() ).pop() ) )
// Needed Output
// 123