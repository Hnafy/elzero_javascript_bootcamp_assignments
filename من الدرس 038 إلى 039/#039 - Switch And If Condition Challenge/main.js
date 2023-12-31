let job = "Manager";
let salary = 0;

switch(job){
    case 0:
        salary = 8000;
        break;
    case 1:
    case 2:
        salary = 6000;
        break;
    case 3:
    case 4:
        salary = 7000;
        break;
    default:
        salary = 4000;
}

let holidays = 0;
let money = 0;

if (holidays === 0){
    money === 5000;
    console.log(`My Money Is ${money}`);
}else if(holidays === 1 || holidays === 2){
    money = 3000;
    console.log(`My Money Is ${money}`);
}else if(holidays === 3){
    money = 2000;
    console.log(`My Money Is ${money}`);
}else if(holidays === 4){
    money = 1000;
    console.log(`My Money Is ${money}`);
}else if(holidays === 5){
    money = 0;
    console.log(`My Money Is ${money}`);
}else{
    money = 0;
    console.log(`My Money Is ${money}`);
}