const h1Element = document.querySelector("h1");
console.log(h1Element);

h1Element.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target.innerText)
    console.log( "coordinate is:" + e.clientX + ":" + e.clientY)
})

// h1Element.addEventListener("copy", (e) => {
//     console.log(e.target.innerText);
//     console.log("coordinate is:" + e.clientX + ":" + e.clientY);
    
// })