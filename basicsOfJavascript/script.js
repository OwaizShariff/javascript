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
          


        //removing child
        const secondContainer = document.getElementById("remove-container")

        const childRemove = document.getElementById("removing-child")

        secondContainer.removeChild(childRemove)


        //Get/Set Attributes

        const ComputerImg = document.getElementById("computer-img")

        const getCompAtt1 = ComputerImg.getAttribute("src")

        console.log("getCompAtt",getCompAtt1);
        
        
        ComputerImg.setAttribute('alt', 'comp-img')

        const getCompAlt2 = ComputerImg.getAttribute("alt")

        console.log("getCompAlt",getCompAlt2);
        
        //events handling
        const clickButton = document.getElementById("myButton")

        clickButton.addEventListener('click', () => {
            alert('Button clicked!');
        })


        const getMyList = document.getElementById("myList")
        console.log("getMyList",getMyList);

        console.log(getMyList.childNodes); 
        console.log(getMyList.firstElementChild); 
        
        // adding dynamic content

        const dynamicContainer = document.getElementById("dynamic-container")

        const loadData = document.getElementById("load-data")
        const removeData = document.getElementById("remove-data")

        loadData.addEventListener("click", () => {
            dynamicContainer.textContent = "data adding dynamically"
        })

        removeData.addEventListener("click", () => {
            dynamicContainer.textContent = null;
        })

        // form validation with form tag

        const myForm = document.getElementById("myForm")
        const formError = document.getElementById("error")

        myForm.addEventListener("submit", (e) => {
            e.preventDefault(); //stop the page refresh
            
            const username = document.getElementById("username").value
            console.log("username",username);

            if (!username) {
                formError.textContent = "please add the proper details"
            } else {
                formError.textContent = null
            }
        })


        // form validation without form tag
        const login = document.getElementById("login")
        const usesError = document.getElementById("user-error")
        
        login.addEventListener("click", () => {
            const userId = document.getElementById("userid").value;
            if (!userId) {
                usesError.textContent = "Please add the user name";
            } else {
                usesError.textContent = null;
            }
            })
            
        });


        // ES6 - template literal

        const myCourseName = "Javascript";

        console.log("myCourseName",  `My course name is: ${myCourseName}`);
 
    
        //Destructuring

        const newFruit = ["apple", "banana", "mango"];

        const [alpha, beta] = newFruit;

        console.log("this is alpha",alpha);
        console.log("this is beta",beta);
        // console.log("this is gama",gama);

        const objDesc = { newName: "john doe", newAge: 35, newPlace: "australia" }

        const {newName, newAge, newPlace} = objDesc

        console.log("newName is:",newName);
        console.log("newAge is:",newAge);
        console.log("newPlace is:",newPlace);
        
        //	Spread and Rest Operators:

        const vegetables = ['carrot', 'potato', 'spinach'];

        const newVeg = [...vegetables, 'tomato']

        console.log("newVeg",newVeg);
        

        const fruitsOne = ['apple', 'banana'];

        const newFrt = [...fruitsOne, 'chiku']

        console.log("newFrt",newFrt);


        //object 

        const user = { name: 'Alice', age: 25 };

        const newUser = {...user, location: "america"}

        console.log("newUser",newUser);


        const user1 = { name: 'Bob', age: 30 };

        const newUser1 = {...user1, age: 25, address: "NY"}

        console.log("newUser1",newUser1);

        
        const logFirstAndRest = (first, ...rest) => {
            console.log('First:', first);
            console.log('Rest:', rest);
        };

        logFirstAndRest(10, 20, 30, 40);
        
        // Promises: asyncronus operations - 3 states - pending, resolved, rejected

        // .then .catch

        // api = frontend(wants data from) <->(api)<-> backend(database)

        const promise = new Promise((pending, resolve, reject) => {
            resolve('Data feteched')
            reject('Coulnt fetch the data')
        })


    	const fetchData = () => {
        	  return new Promise((resolve, reject) => {
                const success = true;

                if (success == true) {
                    resolve('Data feteched')
                }
                else {
                    reject('Coulnt fetch the data')
                }
            })
        };

        fetchData().then(console.log).catch(console.log);


        //set timeout - exicutes after some seconds - callback - async

       const afterTime = () => {
        setTimeout(() => {
            console.log("Executed after 1 second");
        },1000)
        setTimeout(() => {
            console.log("Executed after 2 second");
        },2000)
        setTimeout(() => {
            console.log("Executed after 3 second");
        },3000)
        setTimeout(() => {
            console.log("Executed after 4 second");
        },4000)
        setTimeout(() => {
            console.log("Executed after 5 second");
        },5000) //5000ms - 5 second
       }

    //    afterTime();


       const delayPromise = () => {
        const promise = new Promise((resolved, rejected) => {
            setTimeout(() => {
                resolved("Executed after 2 seconds")
            },2000)
        })
        return promise;
       }


       delayPromise().then((message) => console.log(message));


    // promise - handle the asynchronus operations - it returns a object as a result of the async oper

    // https://fakestoreapi.com/products/1 - api

    // fetch('https://fakestoreapi.com/products/1') // api call
    //    .then(resp => resp.json())
    //    .then(data => console.log(data))
    //    .catch(err =>  console.log(err))


    // async and await - handling the promises
    
    const fetchApiAysnc = async () => {
        try {
            const fetchApi = await fetch('https://fakestoreapi.com/products/1')
            const data = await fetchApi.json()
            console.log(data);
        }
        catch(err) {
            console.log(err);
        }
    }

    fetchApiAysnc()


    // Closures - Even after the outer function has beeen exicuted the inner most function can access the outer function variable.

    function outerFunc() {
        var outerVar = 10;

        function innerFunction() {
            return console.log("Outer variable value closure",outerVar); // closure variable
        }
        innerFunction()
    }

    outerFunc()

    // Modules - set of code, reuse this code - names import, default import
    //named import
    import {scriptTwoVar} from "./scriptTwo.js"

    //default import
    import varTwo from "./scriptTwo.js"

    console.log("scriptTwoVar from different file",scriptTwoVar,varTwo);

    // import { add } from './scriptTwo.js';
    // console.log(add(2, 3));


    // Use try, catch, and finally.

	// try {
	//   const result = riskyFunction();
	// } 
    
    // catch (error) {
	//   console.error(error);
	// } 
    
    // finally {
	//   console.log('Cleanup');
    // }


    //  Write a function to find the largest number in an array.

    // Math

    const findArray = [2,3,4,5,7,8];

    const findLargest = (arr) => {
        const largestNumber = Math.max(...arr)
        return console.log("largest number",largestNumber)
    }

    findLargest(findArray)


    // Reverse a string using JavaScript.

    const normalString = "javascript";

    const reverseString = (str) => {
        const reversedString = str.split('').reverse().join('')
        console.log("reversedString",reversedString);
    }

    reverseString(normalString)

    // Write a function to check if a string is a palindrome.


    const palindrome = (str) => {
        const reversedString = str.split('').reverse().join('')
        if (str === reversedString) {
            return console.log("Given string is palindrome");
        }
        else {
            console.log("Given string is not palindrome");
        }
        
    }

    palindrome("madam")

    // Create a function to remove duplicates from an array.

    const arrayWithDup = [1, 2, 2, 3, 4, 4, 5];

    const remDup = (arr) => {
        const removeDupicate = [...new Set(arr)]
        return console.log(removeDupicate)
    }

    remDup(arrayWithDup)
    

    const nestedArray = [1, [2, 3], [4, [5, 6]]];

    const flatAnArray = () => {
        const flatArray = nestedArray.flat(Infinity)
        return console.log("flatArray",flatArray);
    } 

    flatAnArray(nestedArray)

    const arr = [1, 2, 3];

    const mappingArray = arr.map((item, index) => item * 2);

    console.log("mappingArray",mappingArray);
    






            




        
        
    
    
 




































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









 