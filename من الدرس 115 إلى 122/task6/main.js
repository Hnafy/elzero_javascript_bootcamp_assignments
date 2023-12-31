let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
const [f1,f2,f3]=myFriends;
function data(objMyFrinds){
    const {title:t,age:ag,available:av,skills:[h,c]}=objMyFrinds;
    console.log(`
    ${t}
    ${ag}
    ${av?"Available":"Not Available"}
    ${c}
    `);
}

// If chosen === 1
if (chosen === 1) data(f1)
// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2
if (chosen === 2) data(f2)
// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3
if (chosen === 3) data(f3)
// "Sayed"
// 33
// "Available"
// "Laravel"