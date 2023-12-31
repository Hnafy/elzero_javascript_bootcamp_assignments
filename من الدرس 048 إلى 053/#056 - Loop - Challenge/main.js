let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samera"]
let myEmployes = ["Amgad","Samah","Ameer","Omar","Ali","Osama","Saif","Samer"]
let employes = []

employes = myEmployes.sort()

let countAdmin = 1;
let countEmploy = 0;
document.write(`<h1><div> We Have ${myAdmins.length} Admins</div></h1>`);

for (let i=0;i<myAdmins.length;i++){
    if (myAdmins[i] === "Stop"){
        break;
    }
    
    document.write(`<hr/>`);
    document.write(`<h3>The Admin For Team ${countAdmin} Is ${myAdmins[i]}</h3> `);
    document.write(`<h3>Team Members:</h3>`)
    
    for (let j=0;j<employes.length;j++){
        if (employes[j][0] === myAdmins[i][0]){
            document.write(`<p> - ${++countEmploy} ${employes[j]} </p> `);
        }
    }
    
    countEmploy = 0;
    countAdmin++
}