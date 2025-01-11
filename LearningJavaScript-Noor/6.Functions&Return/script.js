//1.Normal Functions

//declaring the function 1st
function noor() {
    console.log("Normal Function declaration")
}

//calling the function 2nd
noor()

// Parameter and Declaration
function saba(name) {  //name is an parameter
    console.log("The language we are studying is:", name)
}

saba("javascript") //javascript is an argument

//2.Arrow Function
// datatype functName 
const LanguageLearning = (name) => {
    console.log("The language we are studying is:", name)
}
// function call
LanguageLearning("HTML, CSS, JavaScript")


//3.Usage of return using normal fucntion and arrow function
//a.normal function
function exampleReturn(frameWork) {
    return frameWork;
}
console.log(exampleReturn("React.js, Nodejs"));


function programming(language) {
    return "HTML, CSS, Javascript"
}
console.log(programming("nextjs"));

// Key Differences:
// 1.Return Value:
// In the exampleReturn function, the value passed as an argument is returned directly.

// In the abc function, the return value is hardcoded to always be "javascript class", no matter what is passed as an argument.
// 2.Output in Console:
// exampleReturn("React.js, Nodejs") prints the exact string that was passed: "React.js, Nodejs".

// abc("nextjs") prints a fixed string "javascript class", which is not dependent on the argument.

// Summary:
// exampleReturn is dynamic and returns whatever is passed to it.
// abc is static and always returns "javascript class" regardless of the input.

//b.arrow function
const oneParameter = (fullName) => {
    return {
         fullName
    };
}
console.log(("Noor saba"));

// 
const multipleParameter= (  firstName, lastName, fullName) => {
    return {
        firstName, lastName, fullName
    };
}
console.log(multipleParameter("Noor", "Saba", "Noor Saba"));


// Arrow function 
 const arrowFunction = (noor) => {
     console.log("My name is:", noor)
 }
 arrowFunction("noor");