let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

myString = myString.split("").filter(function (el) {
    return isNaN(parseInt(el)) === true && el !== "_"
}).filter(function (ele) {
    return ele !== ",";
})
myString.shift()
myString.pop()

console.log(myString.join(""))