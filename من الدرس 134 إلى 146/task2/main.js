let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRex = /os\d*o/gi;
console.log(specialNames.match(specialNamesRex));
// Output
// ['Os10O', 'OsO', 'Os100O']
