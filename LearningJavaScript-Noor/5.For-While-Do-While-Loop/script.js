//1. for (initialization; condition; increment/decrement) {
//      Code to be executed
// }

for (var i=0; i <= 10; i++) {
    console.log("for loop", i)
}
 
//2. while (condition) {
//     Code to be executed
// }

var j = 7;
while (j <= 7) {
  console.log("while loop",j);
  j++;
}

// Examples
for (var i=0; i <= 5; i++) {
    console.log("for loop", i)
}
 

var j = 0;
while (j <= 5) {
  console.log("while loop",j);
  j++;
}


// Summary of Different Loops:
// 1.for loop: Best for iterating over a known number of iterations (e.g., when you know the number of times you want to loop).
// 2.while loop: Good for situations where the number of iterations is not known in advance but depends on a condition.
// 3.do...while loop: Similar to the while loop but guarantees the code block runs at least once.
// 4.for...in loop: Used to iterate over the properties of an object.
// 5.for...of loop: Best for iterating over iterable objects like arrays or strings.
