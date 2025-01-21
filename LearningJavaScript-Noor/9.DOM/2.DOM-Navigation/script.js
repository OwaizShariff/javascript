//2.DOM NAVIGATION:
//Everything in an HTML document is a node. All nodes in the node tree can be accessed by JavaScript. New nodes can be created, and all nodes can be modified or deleted.
// The entire document is a document node
// Every HTML element is an element node
// The text inside HTML elements are text nodes

//1.Accessing the Child Nodes:
var main = document.getElementById("main");
console.log(main.childNodes); // Prints: NodeList(5) [text, h1#title, text, p#hint, text]

//If you observe above example, in NodeList we have five items instead of two. Because, whitespace such as spaces, tabs, newlines, etc. are valid characters and they form #text nodes and become a part of the DOM tree.
//The childNodes returns all child nodes, including non-element nodes like text and comment nodes. To get a collection of only elements, use children property instead.

var main = document.getElementById("main");
console.log(main.children); // Prints: HTMLCollection(2) [h1#title, p#hint, title: h1#title, hint: p#hint]

//You can use the firstChild and lastChild properties of the DOM node to access the first and last direct child node of a node, respectively. If the node doesn’t have any child element, it returns null.

var main = document.getElementById("main");
console.log(main.firstChild); // Prints: #text

var hint = document.getElementById("hint");
console.log(hint.firstChild); // Prints: SPAN

//To avoid the issue with firstChild and lastChild returning #text or #comment nodes, you could alternatively use the firstElementChild and lastElementChild properties to return only the first and last element node, respectively.

var main = document.getElementById("main");
alert(main.firstElementChild); // Outputs: <h1 id="title">My Heading</h1>

//2.Accessing the Parent Nodes
//You can use the parentNode property to access the parent of the specified node in the DOM tree.
// The parentNode will always return null for document node, since it doesn’t have a parent

var hint = document.getElementById("hint");
console.log(hint.parentNode); // Prints: div
console.log(hint.parentNode.parentNode.parentNode.parentNode); // Prints: #document

//However, if you want to get only element nodes you can use the parentElement.
var hint = document.getElementById('hint');
console.log(hint.parentElement); // Prints: div


// 3.Accessing the Sibling Nodes
// You can use the previousSibling and nextSibling properties to access the previous and next node in the DOM tree, respectively.
var hint = document.getElementById("hint");
console.log(hint.nextSibling); // Prints: #text

// Alternatively, you can use the previousElementSibling and nextElementSibling to get the previous and next sibling element skipping any whitespace text nodes. All these properties returns null if there is no such sibling.

var hint = document.getElementById("hint");
console.log(hint.previousElementSibling.nodeName);
 //Prints: H1