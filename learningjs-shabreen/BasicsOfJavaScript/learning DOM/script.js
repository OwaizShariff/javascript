// selectors
document.addEventListener('DOMContentLoaded', () => {     
    const idpara = document.getElementById('output');
        console.log("paragraph.1:", idpara.textContent);

    const classpara = document.getElementsByClassName("class-selector")
        console.log("paragraph.2:", classpara[0].innerHTML)

    const tags = document.getElementsByTagName("button")
        console.log("tags",tags[0].outerHTML);

    const querytag = document.querySelectorAll("p")
        console.log("querytag",querytag);


    //creating new tags dynamically and appending it to the main(div)tag
        
    const paravar = document.getElementById("para-code")
        const newpara = document.createElement("p")
    newpara.textContent = "This one is a dynamic tag"
        console.log("dynamic-code-ex:", paravar,newpara);
    paravar.appendChild(newpara)

    //manipulating tag content

    const paragraphvar = document.getElementById("dynamic-code")
        paragraphvar.textContent = "para-code"

    // removing child   
    // "After the dot in the third line it is mandatory to write remove child to execute the right result"

    const firstcont = document.getElementById("eleminated-container")
        const deletechild = document.getElementById("eleminated-child")
        firstcont.removeChild(deletechild)

    //Get/Set Attributes
        //(Get) 
    const NatureImg = document.getElementById("nature-img")
        const getimageattribute = NatureImg.getAttribute("src")
        console.log("getimageattribute:",getimageattribute);
    
        // (Set)
    NatureImg.setAttribute('alt', 'Astehticnature-image')
        const setimageattribute = NatureImg.getAttribute("alt")
        console.log("setimageattribute",setimageattribute);
    
    //events handling
    const clickButton = document.getElementById("Main-button")

        clickButton.addEventListener('click', () => {
        alert('This is the example of event handling used with the button feature code for execution!');
        })
});