/*function displayWelcome() {
    alert("welcome to my Page")
};

const h1Element = document.querySelector("h1")
function addNumbs(){
    alert("your lucky number is " + 20 + 30)

}

h1Element.oncopy = addNumbs

h1Element.ondblclick = function (){
    h1Element.innerText = ("hello laurel") //hello username an idea!
}*/
//you can only attach one event handler to a dom element
//use an even listener for this

const h1Element = document.querySelector("h1")
h1Element.addEventListener("mouseover", function (){
    h1Element.innerText ="hello laurel"
})

function welcome(){
    alert("welcome to my page")
}
h1Element.addEventListener("click", welcome)
// this function above added two events to the element
//using addeventlistners

const butnElement = document.querySelector("button")
butnElement.addEventListener("click", function(){
    alert("thank you")
})

const subElement =document.querySelectorAll("button")[1]
function thankYou(){
    alert("thank you for stopping by")
}
subElement.addEventListener("click", thankYou)