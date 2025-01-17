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

function returnExample(subName) {
    return subName;
}

console.log(returnExample("Reactjs, Nodejs"));


function abc(sub1) {
    return "javascript class"
}

console.log(abc("nextjs"));


const nodeNew = (coding, newcode, git) => {
    return {
        coding, newcode, git
    };
}

console.log(nodeNew("vscode", "portname", "hub"));


//object - used to store data in the of key and value pair

var firstName = "owaiz";

const obj1 = { firstName, age: 26, address: "mysore", indian: true };

console.log("obj1", obj1.firstName, obj1.age, obj1.address, obj1.indian); //dot operator

const obj2 = { obj: { firstName, age: 26, address: "mysore", indian: true } }

console.log("obj2",obj2.obj.address)

const obj3 = { subject: function abc() {
    return "object function example"
    }, 
    obj: { firstName, age: 26, address: "mysore", indian: true }
}

console.log("funct", obj3.obj)

//array - list of items

const numbers = [ 1,2,3,4,5 ]
console.log("numbers",numbers)


const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[1]);

const objectarray = [
    { firstName, age: 26, address: "mysore", indian: true },
    
    function abc() {
    return "object function example"
    }, 

    ['apple', 'banana', 'cherry']
]
console.log("objectarray",objectarray[1](), objectarray[0]);

console.log("accessing element inside the second array",objectarray[2][0])


                    //  0        1         2   
    const fruit = ['apple', 'banana', 'cherry'];
    
    //fruit.push('orange') //add the element in the last of perticular array
    //fruit.pop() //remove the last element of perticular array

    //fruit.unshift('orange') //add the element in the first of perticular array
    // fruit.shift() //remove the first element of perticular array

    // fruit.forEach((item) => console.log("arrayitems",item))

    // fruit.map((item) => console.log("mapitems",item))

    console.log("fruits",fruit);


    //DOM - Document object model - Selectors

    // document.getElementById("hello")
    // document.getElementsByClassName("hello-world")
    // document.getElementsByTagName(p)
    // document.querySelectorAll("hello-world")
    // document.querySelector("hello-world")


    // const paragraph = document.getElementById('hello')  

    // console.log("paragraph",paragraph)
    

    document.addEventListener('DOMContentLoaded', () => {     
        const paragraph = document.getElementById('hello');
        
        console.log("paragraph", paragraph.textContent);
        
        const domPara = document.getElementsByClassName("learning-dom")

        console.log("domPara",domPara[0].innerHTML)


        const tags = document.getElementsByTagName("button")
        console.log("tags",tags[0].outerHTML);

        const querytag = document.querySelectorAll("p")
        console.log("querytag",querytag);


        //manipulating tag content

        const helloDiv = document.getElementById("hello-div")

        helloDiv.textContent = "Hello DOM"


        //creating new tags dynamically and appending it to the main(div)tag
        
        const paraContainer = document.getElementById("para-container")
        
        const newpara = document.createElement("p")
        
        newpara.textContent = "This is a dynamic tag"

        console.log("paraContainer",paraContainer,newpara);

        paraContainer.appendChild(newpara)
          
    });
    
    





































//     var counter = 0;
//     let interval;

//     const startTimer = () => {
//         interval = setInterval(() => {
//             counter++
//             console.log(counter)
//         },1000)
//     }
//     const stopTimer = () => {
//         clearInterval(interval)
//     }

// startTimer()
//     setTimeout(stopTimer, 5000)


// const addtwo = (a,b) => {
//     return a + b;
// }

// console.log(addtwo(1,2))


// const maxnum = () => {
//     const arr = [1,2,3,4,5,10]
//     return Math.max(...arr);
// }

// console.log(maxnum());


// function pali(str) {
//     return str === str.split('').reverse().join('')
// }

// console.log(pali("ra"));

// const arrayofnumbers = [1,2,3,4,5,6,7,8,9]

// function evenNumbers() {
//     return arrayofnumbers.filter(num => num % 2 == 0)
// }

// console.log(evenNumbers());


// function fact(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     else {
//         return num * fact(num - 1)
//     }
// }

// console.log(fact(10));

// const array1 = [2,3,4,5,[3,2],2,3,[2,1]]

// function faltArray(arrflat) {
//     let result = [];

//     for (let item of arrflat) {
//         if (Array.isArray(item)) {
//             result = result.concat(flattenArray(item))
//         }
//         else {
//             result.push(item)
//         }
//     }
//     return result
// }
// console.log(faltArray(array1));

// const array1 = [2, 3, 4, 5, [3, 2], 2, 3, [2, 1]];

// function flattenArray(arr) {
//   let result = [];

//   for(let item of arr) {
//     if (Array.isArray(item)) {
//         result = result.concat(flattenArray(item))
//     }
//     else {
//         result.push(item)
//     }
//   }

//   return result;
// }

// console.log(flattenArray(array1));


// console.log(array1.flat())









 