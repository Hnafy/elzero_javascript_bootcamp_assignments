let nums = [2, 12, 11, 5, 10, 1, 99];

nums = nums.reduce(function (ac, cu) {
    return cu % 2 === 0 ? ac * cu : ac + cu
}, 1)
console.log(nums)