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


//	Spread and Rest Operators:
    
    //Spread is for expanding or (Addition) of elements from an array or object.
    // Array:- 
    const colours = ['Mauve Mist', 'Dusty Rose', 'Celestial Blue'];
        const newcolour = [...colours, 'Pale Taupe']
        console.log("Colours:",newcolour);
    
    const flowers = ['Rose', 'Orchid','Daisy'];
        const newflower = [...flowers, 'Cherry Blossom']
        console.log("Flowers:",newflower);

    // Rest is for collecting elements into an array or object.
    //object:-
    const userinfo = { name: 'Bilal Abbas', age: 31};
        const newinfo = {...userinfo, location: "Pakistan"}
        console.log("User-Information",newinfo);

    const person = { name: 'Shahveer Jafry', age: 35};
    const addionalinfo = {...person, age: 30, address: "Canada"}
    console.log("newUser1",addionalinfo);
    
    // logging of First and Rest:
    const logFirstAndRest = (first, ...rest) => {
        console.log('First:', first);
        console.log('Rest:', rest);
    };

    logFirstAndRest("Let your heart guide you through the quiet moments",
        "Peace begins with a smile",
        "You are enough exactly as you are",
        "Trust the timing of your life"
    );

// Promise:- asyncronus operations
    const promise = new Promise((pending, resolve, reject) => {
        resolve('Data fetched')                                     
        reject('coulnt fetch the data')
    })

    const fetchData = () => {
       return new Promise((resolve, reject) => { 
            const success = true; 
        
            if (success == true) { 
                resolve('Data Fetched')
            }
            else {
                reject('Couldnt fetch the data')
            }
       })
    };

    fetchData().then(console.log).catch(console.log);

    //set timeout -  it executes after some seconds as written:

    const afterTime = () => {
    setTimeout(() => {
        console.log("SetTimeout option executes the result after 5 sec "); 
    },5000)
    setTimeout(() => {
        console.log("SetTimeout option executes the result after 10 sec");
    },10000)
    setTimeout(() => {
        console.log("SetTimeout option executes the result after 15 sec "); 
    },15000)
    setTimeout(() => {
        console.log("SetTimeout option executes the result after 30 sec "); 
    },30000)
    setTimeout(() => {
        console.log("SetTimeout option executes the result after 60 sec "); 
    },60000)

    }

    afterTime()  // (Function Call)

    // After time

    const delayPromise = () => {
        const promise = new Promise ((resolved, rejected) => {
            setTimeout(() => {
                resolved("After time option executes the result after 10 sec")
            },10000)
        })
        return promise;
       }
       delayPromise().then((message) => console.log(message)); 
       
    //    promise handles the asyncronus operations

    fetch ('https://fakestoreapi.in/api/products/category?type=mobile')
       .then(respond => respond.json())
       .then(data => console.log(data))
       .catch(error => console.log(error))

    // async and await - handling the promises

    const asyncApiFetch = async () => {
        try{
            const Apifetch = await fetch('https://fakestoreapi.in/api/products')
            const data = await Apifetch.json()
            console.log(data);   
        }
        catch(error) {
            console.log(error);   
        }
    }
    asyncApiFetch()

    // Closures :- Even after the outer function has been exicuted the inner function can access the outer function variable.

    function outerfunction() {
        var firstvariable = 528794463285;

        function innerFunction() {
            return console.log('Execution of variable using inner function inside outer function:',firstvariable);
        }
        innerFunction()
    } 
    outerfunction()

    // modules:-set of code, reuse this code - names import, default import

    // Name Import:-
        import {secondvariable} from './script2.js'

    // Default Import:-
        import variabletwo from './script2.js'

    console.log('The code had been imported from differnt file:',secondvariable,variabletwo);

    // Function to find the largest number in an Array.

    const FindLargestArray = [1,2,3,4,5,6,7,8,9];
        
        const FindLargestNo = (array) => {
            const LargeNumber = Math.max(...array)
            return console.log('LargestNumber:',LargeNumber)
        }
    FindLargestNo(FindLargestArray)

    // Reversing the string using JavaScript.

    const String = 'Supercalifragilisticexpialidocious';

        const reverseString = (string) => {
            const reversedString = string.split('').reverse().join('')
            console.log("Reversed String:",reversedString);
        }
    reverseString(String)

    
    // Function to check if a string is a palindrome.

    const palindrome = (string) => {
        const reversedString = string.split('').reverse().join('')
        if (string === reversedString) {
            return console.log("The Following String is Palindrome: level, rotator, civic");
        }
        else {
            console.log("The Following String is Not-Palindrome:");
        }
    }
    palindrome("level")

    // Function to remove duplicates from an Array.

    const arrayDuplicate = [22, 22, 44, 55, 55, 88, 99, 99, 100];

     const removeDuplicate = (arr) => {
         const removedDupicate = [...new Set(arr)]
         return console.log(removedDupicate)
     }
    removeDuplicate(arrayDuplicate)

    // Function to Flatten an Array.

    const nestedArray = [100, [250, 330], [440, [550, 670]]];

        const FlatArray = () => {
            const flatArray = nestedArray.flat(Infinity)
            return console.log("Flat Array:",flatArray);
        } 
    FlatArray(nestedArray)

    // Function for Mapping an Array.

    const array = [100, 2500, 4000000];
        const mappingArray = array.map((item, index) => item * 5);
        console.log("Mapping of an Array",mappingArray);
