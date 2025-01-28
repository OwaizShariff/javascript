var person = {
    name: "Peter",
    age: 28,
    gender: "Male",
    displayName: function() {
        console.log("Hello, My name is peter");
    }
};
// In above example, the object name is person that has three properties name, age, gender and one method displayName()

// Accessing Object’s Properties
// To access the value of a property, we can use the dot (.), or square bracket ([ ]) notation.

console.log(person.name); // Prints: Peter
console.log(person["gender"]); // Prints: Male
