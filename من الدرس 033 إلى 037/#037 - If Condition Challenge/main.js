let a = 10;

a < 10
    ? console.log(10)
    : a >= 10 && a <= 40
    ? console.log("10 To 40")
    : a > 40
    ? console.log("> 40")
    : console.log("Unknown");

let st = "Elzero Web School";

if (String(st.length*2) === "34"){
    console.log("Good")
}

if (st.substring(st.indexOf("W"),st.indexOf("W")+1) === "W"){
    console.log("Good")
}

if (typeof +st !== "string"){
    console.log("Good")
}
if (typeof +st === "number"){
    console.log("Good")
}

if (st.substr(0,6).repeat(2) === "ElzeroElzero"){
    console.log("Good")
}