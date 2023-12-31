let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

mix = mix.map((el) => typeof el === "string" ? el : "").reduce((ac, cu) => `${ac}${cu}`) // Elzero

console.log(mix)