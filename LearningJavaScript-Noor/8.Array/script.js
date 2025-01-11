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
fruits.unshift("Apple");//To add a new element at the beginning of an array, use the unshift() method.
console.log(fruits);

 fruits.pop();//To remove the last element from an array, use the pop() method.
 console.log(fruits);
 fruits.shift();//To remove the first element from an array use the shift() method.
console.log(fruits);

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

console.log("accessing element inside the second and zero index of an FunctionArray", objectFunctionArray [2][0])


