let myString = "EElllzzzzzzzeroo";

myString = myString.split("").filter(function(el, index){
    return myString.indexOf(el) === index
}).reduce(function (ac,cu) {
    return `${ac}${cu}`
})

console.log(myString)