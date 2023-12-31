console.group("Group 1"); // Create a Group 1
console.log("Message One");
console.log("Message Two");

console.group("Child Group");
console.log("Message One");
console.log("Message Two");

console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");

console.groupEnd(); // Exit From Grand Child Group
console.groupEnd(); // Exit From Child Group
console.groupEnd(); // Exit From Group 1

console.group("Group 2"); // Create a Group 2
console.log("Message One");
console.log("Message Two");
