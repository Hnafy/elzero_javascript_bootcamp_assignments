let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr2=arr2.slice(arr2.indexOf("F"), arr2.indexOf("Y")+true); //arr2=["F", "Y"]
console.log(allArrs.concat(arr2.shift().toLowerCase(), arr1.pop().toLowerCase(),arr2.pop().toLowerCase()).join("")); // fxy
