let challenge = "30 Days of JavaScript"
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,2))
console.log(challenge.substring(3,21))
console.log(challenge.includes("Script"))
console.log(challenge.split(''))
console.log(challenge.split())
console.log(challenge.split(' '))

let media = "facebook, google, microsoft, apple, ibm, oracle, amazon "
console.log(media.split(' '))
console.log(media.split(''))
console.log(media.split())

console.log(challenge.replace('JavaScript', 'Python'))

let string = "30 Days of Javascript"
console.log(string.charAt([15]))
console.log(string.charCodeAt("J"))
console.log(string.indexOf('a'))
console.log(string.lastIndexOf('a'))

let sentence = 'you cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

let trimSentence = ' my name is laurel '
console.log(trimSentence)
console.log(trimSentence.trim(' '))

console.log(string.startsWith("3"))
console.log(string.endsWith('t'))
console.log(string.match('a'))


let java = ('30 Days of')
let script = ('JavaScript')
console.log(java + " " + script)
console.log(string.repeat(2))

console.log("There is no exercise better for the heart than reaching down and lifting people up. \' by John Holmes teaches us to help one another.\'")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//checking if 10 and '10' are equal, if no make them equal
let i = 10
let x = '10'
console.log(i === x)
let xInt = parseInt(x)
console.log(xInt)
console.log(xInt === i)


let numb = '9.81'
let float = 10
console.log(numb === float)
let numFloat = parseFloat(numb)
console.log(numFloat)
console.log(Math.round(numFloat))


let a = "python"
let b = "jargon"
console.log((a && b).includes('on'))

let statement = "i hope this course is not full of jargon"
console.log(statement.includes('jargon'))

let randNumb = Math.random()
let rand0100 = (randNumb * 100)
console.log(rand0100)

let randomNumber= Math.random(11)
console.log(randomNumber)

//function to get random numbers within range
// function getRandomNumberBetween(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min);
// }
// console.log(getRandomNumberBetween(50,100))

const buttonElement = document.querySelector("button")
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
// console.log(getRandomNumberBetween(50,100));
buttonElement.onclick = getRandomNumberBetween

// button.addEventListener("click", function getRandomNumberBetween(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min);
// })


console.log('\t1\t1\t1\t1\t1\n\t2\t1\t2\t4\t8\n\t3\t1\t3\t9\t27\n\t4\t1\t4\t16\t64\n\t5\t1\t5\t25\t125')
let because = sentence.indexOf('because')
let bec = sentence.lastIndexOf("because")
let slice = because + bec
console.log(slice)

let javaString =["JAVASCRIPT"]
console.log(javaString[Math.floor(Math.random()* javaString.length)])

// let sentenc = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log(sentenc.count('love'))


//checking if data types are equal line 110 t0 116
let j ='10'
let k = 10
console.log(j === k)

let c = parseInt('9.8')
console.log(c === k)