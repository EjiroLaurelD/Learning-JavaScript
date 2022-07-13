// let firstName ="laurel"
// let lastName ="dafe"
// let country = "nigeria"
// let city = "abuja"
// let isMarried = false
// let yearOf = 2022

// typeof firstName
// typeof lastName
// typeof country
// typeof city
// typeof isMarried
// typeof yearOf

let i ='10'
let x = 10
console.log(i === x)

let a = parseInt('9.8')
console.log(a === x)

let b = 2
let c = 4
console.log(`${b < c} ${b != c} ${b !== c}`)
console.log(`${b > c} ${b == c} ${b >= c}`)

let p = 'python'
let j ="jargon"
let compare = p.length > j.length
console.log(compare)

let d = "dragon"
let include = (p && d).includes("on")
console.log(include)


const now = new Date()
const year= now.getFullYear()
const month = now.getMonth()
const date = now.getDate()
const day =  now.getDay()
const hours = now.getHours()
const minutes = now.getMinutes()
const seconds = Date.now() //seconds since janaury 1 1970
console.log(seconds)
console.log(`${date}/${year}/${month} ${hours}:${minutes}`)


// let base = prompt("enter base")
// let height = prompt("enter height")
// let area = 0.5 * base * height
// console.log(area)

// let sideA = +prompt('enter side A');
// let sideB = +prompt ('enter side B');
// let sideC = +prompt ("enter side C");
// let perimeter = +(sideA + sideB + sideC);
// console.log(perimeter);

// let length = +prompt("enter length")
// let height = +prompt ('enter height')
// let area = length * height
// let perimeter = 2*(length+height)
// console.log(`the area is ${area} and the perimeter is ${perimeter}`)


// const PI = 3.14
// let radius = +prompt("enter radius") 
// let area = (PI*radius*radius)
// let circumference = (2 *PI*radius)
// console.log(`the area is ${area} and the circumference is ${circumference}`)

// let hour = prompt('enter hour')
// let rate = prompt("enter rate")
// let weekPay = hour * rate
// console.log(weekPay)

let myName= "laurel"
function getName(){
if (myName.length > 7){
    return("my name is long")
}
    else {
        return("my name is short")
}
}
console.log(getName(myName))

let firstName = "laurel"
let lastName = "dafe"
function familyName(){
    if (firstName.length !== lastName.length){
        return (`your first name ${firstName} is longer than your family name ${lastName}`)
    }
        else {
            return (null)
        }
    }
    console.log(familyName())

    let myAge = 25
    let yAge= 250
    let diff = (yAge - myAge)
    console.log(`you are ${diff} older than me`)

    