let zero = 0;
let counter = 3;

let my = ["Ahmed" , "Mazero", "Elham" , "Osama","Gamal" , "Ameer"];
let my2 = my.slice();
my2.pop();
my2.reverse().shift();
console.log(my2);

let my3=my.slice(++zero , counter).reverse();

console.log(my3);

let my6 = my3.shift().slice(--zero,--counter);
let my6_1 = my3.pop().slice(counter);

console.log(my6+my6_1);

let my7 = my6+my6_1;
let my8 = my7.slice(++counter + ++zero);
console.log(my8[--zero]+my8[++zero].toUpperCase());