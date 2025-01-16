//array - which store list of items / multiple data.JavaScript arrays can store any valid value, including strings, numbers, objects, functions, and even other arrays.
// const-data type it can be  var,let,const
// numbers is array name
const numbers = [ 1,2,3,4,5,6,7,8,9,10 ]
console.log("numbers",numbers)

// String
                //  0         1         2         3        4         5        6
const fruits = ['Guava', 'Pineapple', 'Mango', 'Apple', 'Berry', 'Banana', 'Kiwi'];
console.log(fruits);
console.log(fruits[0])
console.log(fruits[5]);
console.log("fruits:", fruits[3]);
console.log(fruits.length);

fruits.push("Custard Apple");//To add a new element at the end of an array, use the push() method.
console.log(fruits);

fruits.pop();//To remove the last element from an array, use the pop() method.
console.log(fruits);

fruits.unshift("Apple");//To add a new element at the beginning of an array, use the unshift() method.
console.log(fruits);

 fruits.shift();//To remove the first element from an array use the shift() method.
console.log(fruits);

fruits.forEach((item)=>console.log('arrayitems', item))
// forEach:
// Purpose: Iterates over an array and executes a provided function once for each array element.
// Returns: undefined (does not create a new array).
// Use Case: Ideal for performing side effects, such as logging, updating external variables, or calling functions.
//Here, forEach iterates through each item in the fruits array and logs them one by one. It doesn't create or return a new array.

fruits.map((item) => console.log("mapitems",item))
// map:
// Purpose: Creates a new array by applying a provided function to each element of the original array.
// Returns: A new array with transformed values.
// Use Case: Ideal when you want to transform or map each element of an array to a new value.
// This logs the items just like forEach, but the return value of the map function is an array of undefined because console.log doesn't return anything. If you aren't storing or using the result of map, you should use forEach instead, as map is meant for transformations.

// When to use:
// Use forEach when you don't need a new array.
// Use map when you need to create a new array from the existing one.

// Object,Function,Array inside a array
// var firstName="owaiz";
// const objectarray = [
//     { firstName, age: 26, address: "mysore", indian: true },
    
//     function abc() {
//     return "object function example"
//     }, 

//     ['apple', 'banana', 'cherry']
// ]
// console.log("objectarray",objectarray[1], objectarray[0]);

// console.log("accessing element inside the second array",objectarray[2][0])

var firstName = "noor";
const objectFunctionArray = [
    { firstName, age: 29, address: "Ramanagaram", nationality: "indian" },
    
    function noor() {
    return "object function example"
    }, 

    ['Guava', 'Pineapple', 'Mango', 'Apple', 'Berry', 'Banana', 'Kiwi']
]
console.log("objectFunctionArray", objectFunctionArray [1]);
console.log("objectFunctionArray", objectFunctionArray [1](), objectFunctionArray [0]);

console.log("accessing element inside the second and zero index of an ObjectFunctionArray", objectFunctionArray [2][0])


