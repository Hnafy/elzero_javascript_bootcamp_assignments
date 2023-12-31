let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (counter<friends.length){
    if (friends[+false][+false] === friends[counter][+false]){
        counter++
        continue
    }
    if (typeof friends[counter] === "number"){
        counter++
        continue
    }
    
    console.log(++index + " => " + friends[counter])
    counter++
}