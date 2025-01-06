//   console.log('Hello, World!');

    //   console.log("Learning javascript from basics to advance")

    //   console.log("inline js internal js external js")


    //Basics of js

    // variable - Used to store data. Declared with var, let, or const.
    // Datatypes - var, let, or const.
    
//  datatype variable = data;
var a = 10;
var fistName = "Owaiz"; //string

console.log("data of a", a);

console.log("fistName", fistName);

console.log("all logs", a, fistName);

let b = 15;
let lastName = "Shariff";

console.log("b", b)
console.log("lastName", lastName);

console.log("fistName", fistName, "lastName", lastName);

const c = 20; // const is a constant datatype ==> cannot manipulate it.
const email = "owaiz@gmail.com";

console.log("Full Name", fistName, lastName, "Email", email, a, b ,c);

console.log("c", c);
console.log("email", email);


// var - datatype used for declaring any variable. - data of a perticular variable can be manipulated.
// let - datatype used for declaring any variable. - data of a perticular variable can be manipulated.
// const - datatype used for declaring any variable. - data of a perticular variable cannot be manipulated.

a = 150;
console.log("manipulated data of a", a)

b = 200;
console.log("manipulated data of b", b)

// c = 250;
// console.log("manipulated data of c", c) ==> typeError

// Boolean value ==> true or false;

var isCoder = true;
console.log("isCoder is getting logged", isCoder);

let person = null;
let address;        

console.log(person, address);


// Arithmetic: +, -, *, /, %

var num1 = 10;
var num2 = 20;
var num3 = 30;

var firstName = "Owaiz";
var last_Name = "Shariff";

console.log("Full name", firstName + " " + last_Name);


console.log("addition of two number", num1 + num2);

console.log("addition of three number", num1 + num2 + num3);

console.log("substraction of two number", num2 - num1);

console.log("substraction of two number", num3 - num2);

console.log("multiplication of two number", num3 * num2);

console.log("math of three number", num1 * num2 * num3 + num1 - num3);

console.log("division of two number", num1 * num1 / num2);

console.log("division of two number", num1 * num1 + num2);

console.log("modules of two numbers", num2 % num1);

// console.log("percentage of the number", num1 + num2 % 10)


// Comparison: ==, ===, !=, !==, >, <

// num1 == num2; //comparision 10 == 20 true or false

// num1 === num2; //strick comparision var 10 === var 20 true or false

// num1 != num2; //true or false 10 != 20

// num1 !== num2; //true or false var 10 !== var 20

// num1 > num2; //true or false

// num1 < num2; // true or false

// Logical: &&, ||, !

// (num1 == num2 && num2 == num3)
    // false && false = false;

// (num2 > num1 && num3 > num2)
    // true && true = true;

// (num2 > num3 && num3 > num2)
    // false && true = false;

// (num1 == num2 || num2 == num3)  //shift + \
    // false || false = false;

// (num2 > num1 || num3 > num2)
    // true || true = true;

// (num2 > num3 || num3 > num2)
    // false || true = true;


// Comments

// single line comment

/* 
Multi 
Line 
comments
*/


// if else

let score = 95;

if (score >= 95) {               //   65 > 95 = false; 65 = 95
    console.log("A grade")
}
else if (score <= 95 && score >= 65) {    // 65 <= 95 true;  65 >= 65 true  = true
    console.log("B grade")
}
else if (score <= 65 && score >= 35) {   // 65 <= 65 true && 65 >= 35 true = true
    console.log("C grade")
}
else {
    console.log("you are failed")
}


//	Ternary Operator:

let age = 25;

age == 25 ? console.log("adult") : console.log("elder");

age == 25 ? console.log("mid-age") : age > 25 ? console.log("elder") : console.log("adult");


// for, while, do...while


for (var i=0; i <= 5; i++) {
    console.log("for loop", i)
}
 

var j = 0;

while (j <= 5) {
  console.log("while loop",j);
  j++;
}


let k = 0;

do {
  console.log("var k",k);
  k++; 6
} 

while (k <= 5);


// Normal Functions

//declaration
function print() {
    console.log("first funtion")
}

//function call
print()


function greet(name) {  //name is an parameter
    console.log("The language we are studying is:", name)
}

greet("javascript") //javascript is an argument


// Arrow funtion
// es6 echma script6

// datatype functName 
const SubjectLearning = (name) => {
    console.log("The language we are studying is:", name)
}

// function call
SubjectLearning("Html and css")









