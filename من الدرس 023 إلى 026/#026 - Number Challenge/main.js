let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Math.round(Math.min(a,b,c,d)))

console.log(Math.pow(a,parseInt(d)))

console.log(Math.floor(d))
console.log(Math.round(d))
console.log(Math.trunc(d))
console.log(parseInt(d))

console.log((Math.floor(b) / Math.ceil(d)).toFixed(2))
console.log(Math.round(b / Math.ceil(d)))
