//1. Getting Element’s Attribute Value
// The getAttribute() method is used to get the current value of a attribute on the element.

// If the specified attribute does not exist on the element, it will return null.
    
    // Selecting the element by ID attribute
    var link = document.getElementById("myLink");
    
    // Getting the attributes values
    var href = link.getAttribute("href");
    console.log(href); // Prints: https://www.google.com/


//2. Setting Attributes on Elements
// The setAttribute() method is used to set an attribute on the specified element.

// If the attribute already exists on the element, the value is updated; otherwise a new attribute is added with the specified name and value.

// Selecting the element
var btn = document.getElementById("myBtn");

// Setting new attributes
btn.setAttribute("class", "click-btn");
console.log(btn);

//3.Remove Attribute from elements
// The removeAttribute() method is used to remove an attribute from the specified element.

// Selecting the element
var link = document.getElementById("myLink");

// Removing the href attribute
link.removeAttribute("href");
console.log(link);


