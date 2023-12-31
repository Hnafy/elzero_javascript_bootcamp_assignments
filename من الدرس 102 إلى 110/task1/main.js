let input=prompt("Print Number From - To","5-20");

// data=input.split("-").sort(function(a,b) {
//     if(a>b){
//         return -1 // return b
//     }else if (a<b) {
//         return 1 // return a
//     } else {
//         return 0
//     }
// })

// OR
data=input.split("-").sort((a,b) => a - b)

for(;+data[1] >= +data[0];){
    var output=document.createElement("div")
    document.body.append(output)
    output.innerHTML = data[1]
    data[1]-=1
}
