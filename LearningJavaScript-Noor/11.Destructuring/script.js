// 1.Array destructuring:
// We should have an existing array at the right side, that we want to split into variables. The left side contains an array-like “pattern” for corresponding elements. It is shorter way of copying array items in to variables.

// Example 1. Original array
const fruits = ["apple", "banana", "cherry"];

// Destructuring the array
const [first, second, third] = fruits;

console.log(first);  // Output: "apple"
console.log(second); // Output: "banana"
console.log(third);  // Output: "cherry"

//2.Skipping elements:
const numbers = [1, 2, 3, 4];
const [one, , three] = numbers;

console.log(one);  // Output: 1
console.log(three);  // Output: 3

//3.Default values:
const colors = ["red"];
const [primary, secondary = "blue"] = colors;

console.log(primary);   // Output: "red"
console.log(secondary); // Output: "blue" (default value)

//4.Swapping variables:
let a = 5, b = 10;
[a, b] = [b, a];

console.log(a); // Output: 10
console.log(b); // Output: 5

//5.Using rest parameter:
const cities = ["New York", "Los Angeles", "Chicago", "Houston"];
const [firstCity, ...restCities] = cities;

console.log(firstCity);  // Output: "New York"
console.log(restCities); // Output: ["Los Angeles", "Chicago", "Houston"]

//2.Object destructuring:We should have an existing object at the right side, that we want to split into variables. The left side contains an object-like “pattern” for corresponding properties. Here, order does not matter but key name should be same as in the object.

// Example 1. Original object
const person = {
    firstName: "Alice",
    age: 25,
    city: "New York"
  };
  
  // Destructuring the object
  const { fname, age, city } = person;
  
  console.log(firstName); // Output: "Alice"
  console.log(age);  // Output: 25
  console.log(city); // Output: "New York"
  