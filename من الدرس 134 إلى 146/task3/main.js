let phone = "+(995)-123 (4567)";
let phoneRex = /\+\(\d{3}\)-\d{3} \(\d{4}\)/g;
console.log(phone.match(phoneRex));