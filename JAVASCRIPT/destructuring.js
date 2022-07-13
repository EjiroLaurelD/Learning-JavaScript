/*let names = ["laurel", "ejiro", "buky", "funke" ]

let [firstName, lastName, middleName, otherName, ] = names

console.log(firstName, lastName, middleName, otherName)

//get only middle name
let [ , , midName] = names
console.log(midName)

// use the rest operator "..." to get other elemnts instead of listing
let [ , ...otherNames] = names
console.log(otherNames)

//destructure object

let settings = { theme: 'dark', font: 20, screen: 'full', display: true}
//let {theme, font, screen, display} = settings
//console.log(settings)
//console.log(display)

let {theme} = settings
console.log(theme)
//assign theme to a new variable name
let{theme: myTheme} = settings
console.log(myTheme)

let{theme: myTeme} = settings
console.log(myTeme)

let {...otherSettings} = settings
console.log(otherSettings)




function getUserDetails(user)

const user = {name: "mary" , age: 30}
console.log(`my name is ${name}`)
console.log(`i am (${age}) years old`)

getUserDetails()

const arr1 =[1,2]
const arr2= [1,2]
console.log()
*/

/*let uName = "janet"
let greeting = "Hi there"

function greatJanet(){
    console.log(greeting + ", " + uName + "!")
}
greatJanet()*/

// let firstName = "Be"
// let lastName = "Amazing"
// let fullName = firstName +" "+ lastName
// console.log(fullName)

//console.log("my points: " + 5 +9)
//console.log(2+2)

//var x =`5`, y= 10
//alert(x+y)

//var x = 5
//var y = 8
//alert(typeof typeof(undefined) )

/*function a(x){
    return x * 2
}    
var a
alert (a)*/

function abc(){
    return typeof arguments
}
alert(abc())
