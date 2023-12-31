let a = "Elzero Web School";

console.log(a.charAt(2) + a.slice(3, 6)); // Zero

console.log(a.charAt(13).toUpperCase().repeat(8)) // HHHHHHHH

console.log(a.substr(0,6).split()) // [Elzero]

console.log(`${a.substr(0,6)} ${a.substr(11)}`) // Elzero School

console.log(a.substring(0,1).toLowerCase() + a.substring(1 , a.length - 1).toUpperCase() + a.substring(a.length - 1).toLowerCase()) // elZERO WEB SCHOOl