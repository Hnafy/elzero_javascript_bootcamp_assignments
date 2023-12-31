let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
chars = chars.sort();

function copystart(){
    for (let i=0;i<chars.length;i++){
        if(typeof chars[i]==="string"){
            var start = i;
            break;
        }
    }
    return chars.copyWithin(0,start,start + start);
}
console.log(copystart())

// Needed Output
//['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']