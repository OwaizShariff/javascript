// <!-- 1.onclick Event Type:This is the most frequently used event type which occurs when a user clicks the button, some type of event will happen. -->
function buttonClick() {
    console.log("Hey!Humans:)")
}

const clickButton = document.getElementById("myButton")

        clickButton.addEventListener('click', () => {
            alert('Button clicked!');
        })

function inputButton() {
    console.log("using input tag inside form tag");
}

// <!-- 2.onmouseover and onmouseout:These two event types will help you create nice effects with images or even with text as well. The onmouseover event triggers when you bring your mouse over any element and the onmouseout triggers when you move your mouse out from that element. -->
function over() {
    console.log("Mouse Over"); // Prints: Mouse Over
}


// <!-- 3.onsubmit Event Type:onsubmit is an event that occurs when you try to submit a form. -->
function myFunction() {
    alert("The form was submitted"); // Outputs: The form was submitted
    //alert() works because it halts the browser's execution until the user dismisses the alert, giving you time to see the message.
}
function myFunction(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page  
    console.log("The form was submitted"); // console.log() logs the message to the console, but since the page reloads almost immediately, you don't see the message unless you prevent the reload.
}

