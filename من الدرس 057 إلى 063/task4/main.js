function checkStatus(a, b, c) {
    x = [a, b, c]
    y = []
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === "string") {
            y[0] = x[i];
        }
        if (typeof x[i] === "number") {
            y[1] = x[i];
        }
        if (typeof x[i] === "boolean") {
            y[2] = x[i];
        }
    }
    if (y[2] === true) {
        console.log(`Hello ${y[0]}, Your Age Is ${y[1]}, You Are Available For Hire`);
    }
    if (y[2] === false) {
        console.log(`Hello ${y[0]}, Your Age Is ${y[1]}, You Are Not Available For Hire`);
    }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
