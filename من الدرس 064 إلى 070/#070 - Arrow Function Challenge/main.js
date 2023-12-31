/*
let names = function (...nam) {
    return `String [${nam}] => Done !`
}
*/

let names = (...nam) => `String [${nam}] => Done !`

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"))

let myNumbers = [20, 50, 10, 60]

// let calc = (one, two, ...nums) => `${one + two + nums[0]}`;

let calc = function (one, two, ...nums) {
    return `${one + two + nums[0]}`
};

console.log(calc(10, myNumbers[0], myNumbers[1])) // 80