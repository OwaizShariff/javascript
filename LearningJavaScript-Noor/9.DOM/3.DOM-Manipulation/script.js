// Creating a new div element 
var newDiv = document.createElement("div");

// Creating a text node
 var newContent = document.createTextNode("Hi, how are you doing?")

// Adding the text node to the newly created div
newDiv.appendChild(newContent);

// Adding the newly created element and its content into the DOM
document.body.appendChild(newDiv);

// Adding the newly created element and its content into the DOM 
var currentDiv = document.getElementById("main"); 
document.body.insertBefore(newDiv, currentDiv);

//Removing Existing Elements from DOM:
// We can use the removeChild() method to remove a child node from the DOM.
var parentElem = document.getElementById("main");
var childElem = document.getElementById("hint");
parentElem.removeChild(childElem);






