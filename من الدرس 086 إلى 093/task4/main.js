let one = document.body.firstElementChild
let two = one.nextElementSibling

// My supports variables
let numZero = document.getElementsByTagName("i");
let numOne = document.getElementsByTagName("script");
let numTwo = document.getElementsByTagName("div");
let mytitle = one.getAttributeNames()[numOne.length];


one.setAttribute(one.getAttributeNames()[numOne.length],two.getAttribute(mytitle))
two.setAttribute(two.getAttributeNames()[numOne.length],two.className)

one.innerHTML = two.textContent
let capital = two.getAttribute(mytitle).charAt(numZero.length).toUpperCase() + two.getAttribute(mytitle).slice(numOne.length,two.getAttribute(mytitle).length)
two.innerHTML = `${capital} ${numTwo.length}`;
