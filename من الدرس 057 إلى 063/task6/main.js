function multiply(...mult){
    let result = 1;
    for (let i=0;i<mult.length;i++){
        if (typeof mult[i] === "string"){
            continue;
        }
        result *= Math.trunc(mult[i])
    }
    console.log(result)
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000