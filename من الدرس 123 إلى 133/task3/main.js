let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myNewMap = new Map();
myNewMap.set("username","Osama");
myNewMap.set("role","Admin");
myNewMap.set("country","Egypt");

console.log(myNewMap);
console.log(myNewMap.size);
console.log(myNewMap.has("role"));

// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true