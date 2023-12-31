let date = new Date();

let lastMonth = date - date.getDate()*1000*60*60*24
console.log(new Date(lastMonth));

let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let lastDayOfMonth = new Date(date.getFullYear(),date.getMonth()+1, 0);
console.log(`Previous Month Is ${month[date.getMonth()-1]} And Last Day Is ${lastDayOfMonth.getDate()}`);