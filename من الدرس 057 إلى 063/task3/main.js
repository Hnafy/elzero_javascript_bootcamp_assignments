function ageInTime(theAge) {
    if (theAge >= 110){
        console.log("110 Age Out Of Range")
        return 0;
    }
    console.log(`${theAge * 12} Month`);
    console.log(`${theAge * 12 * 4} Week`);
    console.log(`${theAge * 12 * 4 * 7} Day`);
    console.log(`${theAge * 12 * 4 * 7 * 24} Hour`);
    console.log(`${theAge * 12 * 4 * 7 * 24 * 60} Minute`);
    console.log(`${theAge * 12 * 4 * 7 * 24 * 60 * 60} Second`);
}

// Needed Output
ageInTime(110);
ageInTime(16); 