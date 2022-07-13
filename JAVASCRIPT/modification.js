//create new html element <span>
const newElement = document.createElement("span")
newElement.innerText = "this is a new element"
newElement.style.color = "red"
document.body.append(newElement) //append is used to add an element at the end
document.body.prepend(newElement) //prepend is used to add at the beginning

//create a new html element <h1> to the dom
/*const h1Element = document.createElement("h1")
document.body.prepend(h1Element)
h1Element.innerText="new h1 element"
h1Element.style.color="pink"
h1Element.style.background="teal"
console.log(document.body)

//add element to a specific position using get element use table id
/*const table = document.getElementById("myTable")
table.append(h1Element) 
table.prepend(h1Element)*/

//add element using query selector
/*const table = document.querySelector("#myTable")
console.log(table)
table.append(h1Element)
table.prepend(h1Element)
table.style.color="red"
table.style.background="pink"
table.style.fontSize="50px"*/

//document.body.insertBefore(h1Element, document.querySelector("#myTable"))

//used in inserting element in a specific position
/*const table = document.querySelectorAll("ol")[1];
console.log(table)
table.insertAdjacentHTML("afterbegin", "<h1>my new table</h1>" )
*/

//used in removing element
/*const removeElement = document.querySelector("h1")
removeElement.remove()*/

//used in cloning element
/*const cloneElement = document.querySelector("h1")
const clonedElement = cloneElement.cloneNode("true")
//document.body.append(clonedElement)
document.body.prepend(clonedElement)*/