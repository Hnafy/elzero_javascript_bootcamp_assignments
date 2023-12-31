let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = letter.length

for (let i=+false;i<friends.length;i++){
    if (friends[i][+false] === letter.toUpperCase()){
        continue;
    }
    console.log(counter + " => " + friends[i]);
    counter++
}