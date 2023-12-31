function getDetails(zName, zAge, zCountry) {
    function namePattern() {
        return `Hello ${zName.slice(0, zName.indexOf(" "))} ${zName.substr(zName.indexOf(" "), 2).toUpperCase()}.`;
        // Write Your Code Here
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
    }
    namePattern();
    function ageWithMessage() {
        return `Your Age Is ${parseInt(zAge)}`;
        // Write Your Code Here
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    ageWithMessage()
    function countryTwoLetters() {
        return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
        // Write Your Code Here
        // Egypt => You Live In EG
        // Syria => You Live In SY
    }
    countryTwoLetters()
    function fullDetails() {
        return `${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`;
        // Write Your Code Here
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY