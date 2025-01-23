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

    const elementslist = document.getElementById("elements")
        console.log("elementslist",elementslist);

        console.log(elementslist.childNodes);
        console.log(elementslist.firstElementChild);
        console.log(elementslist.lastElementChild);

    // Dynamic Content Loading
    const dynamicContainer = document.getElementById("dynamic-box")

        const LoadData = document.getElementById("load-data")
        const RemoveData = document.getElementById("remove-data")

        // Adding Data
        LoadData.addEventListener('click', () => {
            dynamicContainer.textContent ="Dynamic Content Loading"
        })

        // Removing Data
        RemoveData.addEventListener('click', () => {
            dynamicContainer.textContent = null;
        })

    // Validation of form without form tag
    const login = document.getElementById("login")
    const usererror = document.getElementById("user-error")

        login.addEventListener('click', (e) => {
            const UserID = document.getElementById("UserID").value
            
            if(!UserID) {
                usererror.textContent = "ADD the User Name"
            } else {
                usererror.textContent = null;
            }
    })

    // Validation of Form with form tag
    const MyForm = document.getElementById("Form")
    const Formerror = document.getElementById("Error")

        MyForm.addEventListener('click', (e) => {
            e.preventDefault(); //it stops the page reload
            const username = document.getElementById("Username").value
            console.log("Username",username);

            if(!username) {
                Formerror.textContent = "The Columb is Empty, ADD the details Above"
            } else {
                Formerror.textContent = null;
            }
        })
});

// ES6 - echma script6:-
    // template literal

    const course = "HTML, CSS, and JS."
        console.log(`The Topics i am studing is: ${course}`);

    //Destructuring
    // Example using Array Method
    const Apps = ["WhatsApp", "Snapchat", "YouTube"];
        const [a, b, c] = Apps;

        console.log("An App used for comunication:",a);
        console.log("An App used for making snap:",b);
        console.log("An App used for Entertainment and vlogging:",c)

    // Example using Object Method
    const Info = { Name: "Ahad Raza Mir", Age: 32, Place: "Pakistan", Profession: "Celebrity"}
        const {Name, Age, Place, Profession} = Info

        console.log("Name:",Name);
        console.log("Age:",Age);
        console.log("Place:",Place);
        console.log("Profession:",Profession);
