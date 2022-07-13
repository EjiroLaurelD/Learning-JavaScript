const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     alert("you clicked me")
// })

// button.addEventListener("mouseenter", () =>{
//     alert("mouse entered here")
// })

// button.addEventListener("mouseleave", () =>{
//     alert("mouse left here")
// })

// button.addEventListener("mousemove", (e) => {
//     console.log("you moved your mouse to:" + e.clientX +":" + e.clientY)
// })

// button.addEventListener("contextmenu", () =>{
//     console.log("you right clicked")
// })

// document.body.addEventListener("keydown", (e) =>{
//     console.log(e.key)
// })

// document.body.addEventListener("keydown", (e) =>{
//     if (e.ctrlKey && e.key === "s"){
//         alert("you pressed two keys");
//     }
// })


/// this is used to block people from copying text, it's  copy blocker
document.body.addEventListener("copy", (e) =>{
    e.preventDefault();
    alert("you cant copy any text here")
})