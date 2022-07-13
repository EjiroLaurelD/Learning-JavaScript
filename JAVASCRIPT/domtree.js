//navigating the dom
//alert(document.title)
console.log (document.body)
console.log(document.head)
setTimeout(() => {
    document.body.style.backgroundColor = "pink"
    
}, 3000);

console.log(document.body.childNodes)
console.log(document.body.children)
console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild)
console.log(document.body.hasChildNodes())
//console.log(document.body.hasAttribute())
//console.log(document.body.nextSibling)

for (let i = 0; i < document.body.childNodes.length; i++)
{
console.log(document.body.childNodes[i])
}

console.log(document.body.previousElementSibling)
console.log(document.head.nextElementSibling)
console.log(document.body.parentNode)