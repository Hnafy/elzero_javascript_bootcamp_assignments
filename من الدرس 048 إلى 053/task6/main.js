let start = 0;
let swappedName = "elZerO";
let result = [];

for (let i=start;i<swappedName.length;i++){
    if (swappedName[i] === swappedName[i].toLowerCase()){
        result.push(swappedName[i].toUpperCase());
    }else if (swappedName[i] === swappedName[i].toUpperCase()){
        result.push(swappedName[i].toLowerCase());
    }
}
console.log(result.join(""));