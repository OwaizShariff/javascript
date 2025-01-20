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
        
    const paravar = document.getElementById("div-dynamic")
        
    const newpara = document.createElement("p")
    
    newpara.textContent = "This is a dynamic tag"

    console.log("dynamic-div-example:", paravar,newpara);

    paravar.appendChild(newpara)
});