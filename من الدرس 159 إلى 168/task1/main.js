let birth = new Date("27dec 2007");
let date = new Date();
let time = date - birth;

console.log(`${Math.round(time/1000)} Seconds`);
console.log(`${Math.round(time/1000/60)} Minutes`);
console.log(`${Math.round(time/1000/60/60)} Hours`);
console.log(`${Math.round(time/1000/60/60/24)} Days`);
console.log(`${Math.round(time/1000/60/60/24/30)} Months`);
console.log(`${Math.round(time/1000/60/60/24/30/12)} Seconds`);