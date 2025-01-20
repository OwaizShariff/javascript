// DOM - Document object model
// A Document object represents the HTML document that is displayed in browser’s window.
// When we write an html and view it in a browser, browser turns in to a document object model.
// The way a document content is accessed and modified is called the Document Object Model, or DOM.
// In the DOM each element becomes an object or a node.
// By using DOM we can dynamically change, add, or delete HTML elements.
// The HTML DOM can be accessed with JavaScript and with other programming languages.


//1.DOM SELECTORS

//Selecting HTML Elements
// We have to select HTML elements to apply styles or affects by using javascript. We can select elements in different ways.

// 1.Selecting HTML elements by id
// 2.Selecting HTML elements by tag name
// 3.Selecting HTML elements by class name
// 4.Selecting HTML elements by css:
    // 1.querySelector
    //2.querySelectorAll

// The issue you're encountering is likely because the JavaScript code is running before the HTML is fully loaded. When you try to access the element with document.getElementById("Hey"), the element hasn't been rendered in the DOM yet, and that's why you're getting null.

// To resolve this, you can make sure the JavaScript runs after the DOM is fully loaded. You can either:
// 1. Move your <script> tag to the end of the <body> section, so it runs after the HTML is loaded.
// 2.Use the DOMContentLoaded event to run your code when the DOM is ready.

document.addEventListener('DOMContentLoaded', function () {
    let id = document.getElementById("Hey!");
    console.log(id);//gives you the entire tag
    console.log(id.innerHTML);//gives u the text

//By using the id of HTML element, we can select that particular HTML element.
//In above example, we are selecting n element by id, if the element is found, the method will return the element as an object. if not found text will return null.

const className = document.getElementsByClassName("helloHumans")
console.log(className[0]);
console.log(className[0].innerHTML);
//By using class name, we can select HTML elements which has same class name. It returns list of all elements which has same class name.

const tag = document.getElementsByTagName("p")
console.log(tag[0]);
console.log(tag[0].innerHTML);
//By using the id of HTML element, we can select that particular HTML element.
//In above example, we are accessing the element using index of ‘0’ because getElementsByTagName gives array-like object.

const tagButton = document.getElementsByTagName("button")
console.log(tagButton[0]);
console.log(tagButton[0].innerHTML);

//Selecting HTML elements by css
//  We can select all HTML elements that match a specified CSS selector i.e id, class names, attributes by using querySelector or querySelectorAll.
// The difference between querySelector and querySelectorAll is querySelector selects single element where as querySelectorAll selects all elements with specified CSS selector.
// Here, you have to use dot notation for class, hash notation for id like selecting element in CSS. 
// 1.querySelector
const select = document.querySelector(".querySelector")
console.log(select);
console.log(select.innerHTML);

//  2.querySelectorAll
const selectAll = document.querySelectorAll(".querySelector")
console.log(selectAll);
console.log(selectAll.innerHTML);








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






});