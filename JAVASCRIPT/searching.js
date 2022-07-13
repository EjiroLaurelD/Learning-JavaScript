//get properties by id
/*const h1 = document.getElementById("myTable")
console.log(h1)
h1.innerText = "lets see"
h1.style.color = "blue"
h1.style.fontSize = "50px"
h1.style.border ="15px red solid"
//change properties from html
h1.id ="new id"
h1.innerText = "new text"
h1.innerHTML ="<h6>i switched it</h6>"*/

//get properties from element
/*console.log(h1.id)
console.log(h1.innerText)
console.log(h1.style.color)
console.log(h1.innerText.length)
console.log(h1.style.fontSize)*/

//get properties by class
/*const h1Class = document.getElementsByClassName("tableList")
console.log(h1Class)*/

//h1Table.innerText = "tablerow"
//h1Table.style.color = "blue"
/*for (let ol of h1Class){
    ol.style.backgroundColor = "red"
}
const h1Class2 = document.getElementById("tablet")
console.log(h1Class2)
h1Class2.innerText = "wow"*/

//get properties by tag
/*const h1Tags = document.getElementsByTagName("h1")
//const h1Id = document.getElementById("myTable")
console.log(h1Tags)
h1Tags.color = "red"
console.log(h1Tags.color)*/

//get properties by queryselector. it will return just the first element
//that satisfies the criteria
/*const body = document.querySelector("body")
console.log(body)

const table = document.querySelector(".tableList")
console.log(table)
table.style.color = "red"
table.style.background ="yellow"
table.style.fontSize ="30px"

const id = document.querySelector("#myTable")
console.log(id)*/

//get properties by query selector all. this will return all element with the property
//const body = document.querySelectorAll("body")
//console.log(body)

//for loop to get everything listed in an element using query selector all
//const ols = document.querySelectorAll("ol");
/*const store =[]
for (let ol of ols){
store.push(ol.innerText)
}
console.log(store)*/

//ols[1].innerHTML = "<li>changed it</li>"
//console.log(ols[1]);

const ols =document.querySelector("ol > li.this")
console.log(ols)
