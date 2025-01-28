// Spread And Rest Operator:
// Spread and Rest Operator have same syntax which is denoted by ....

//1.Spread Operator:
// Spread operator is used to spread elements of an array into individual element. Using spread operator, we can copy elements of an array in to a new array or properties of an object in to a new object. The spread syntax works only with iterables.

const str = 'hello';
//Spreading a string into individual elements
console.log(...str); //Prints: h, e, l, l, o
//Copying those individual elements in to an array
console.log([...str]); //Prints: ['h', 'e', 'l', 'l', 'o']

//Spread opearator in arrays
const firstArr = [1, 2, 3, 4, 5]
console.log(...firstArr); //Prints: 1, 2, 3, 4, 5
const secondArr = [6, 7, 8, 9, 10];
console.log([...firstArr, ...secondArr]); //Prints: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Spread operator in objects
const obj1 = {
    name: "Ramzan ",
    city: "Moscow",
    country: "Russia"
};
//copying properties
console.log({ ...obj1 }) //Prints: {name: "Ramzan ",city: "Moscow",country: "Russia"}
// Adding properties
console.log({ ...obj1, lastName: "Kadyrov" }) //Prints: {name: "Ramzan",city: "Moscow",country: "Russia", lastName: "Kadyrov"}
//Overwriting a value
console.log({ ...obj1, country: "England" }) //Prints: {name: "Putin",city: "Moscow",country: "England"}

//2.Rest operator:
// Rest operator is used to collect all elements of an array into a single array. It is used to pass a variable number of arguments to a function. It is used to convert a list of arguments into an array.
//Array destructuring and rest operator
const fruits = ['orange', 'apple', 'banana', 'lemon']
const [first, ...rest] = fruits;
console.log(first, rest); //Prints: orange, ['apple', 'banana', 'lemon']

//Object destructuring and rest operator
const object1 = {
    name: "Putin",
    city: "Moscow",
    country: "Russia",
};
const { name, ...Rest } = object1;
console.log(name, Rest); //Prints: Putin, {city: "Moscow",country: "Russia"};

//functions and rest operator
const getAverage = (name, ...scores) => {
    console.log(name); //Prints: Putin
    console.log(scores); //Prints: ['100', '67', '89', '92']
    const average =
        scores.reduce((total, item) => {
            return (total += item)
        }, 0) / scores.length;
    console.log(average); //Prints: 87
}

getAverage('putin', 100, 67, 89, 92)
