let users = ['marry', 'jogn', 'kola', 1, {buky : 'dark'}]
console.log(users)
console.log(users.length) //to check length of array

users[2] = 'great' //change element in an array
//alert(users[2])

users.push('dog','girl') //add users to end of array
console.log(users)

users.pop() //remove users from end of array
console.log(users)

users.shift() //remove users from beginning of array
console.log(users)

users.unshift('danger') //add users to begining of array
console.log(users)

console.log(users.indexOf('great')) //to get position in array

console.log(users.slice(1,4)) //portion of the array it display from 2

let copyOfUsers = users.slice() //used to copy array to a new variable name
console.log(copyOfUsers)

copyOfUsers.reverse() //reverse the array
console.log(copyOfUsers)

copyOfUsers.sort() //sort the array alphabetically
console.log(copyOfUsers)

for (let copyOfUser of copyOfUsers){ //to copy users individually
console.log(`the name of the user is: ${copyOfUser}`)
}

for (let index in copyOfUsers){// used to list out index and numbers
    console.log(`the index is ${index} and the value is ${copyOfUsers[index]}`)
}

copyOfUsers.forEach((item) => { //listing using for each
    console.log(`the user is ${item} `)
})

let userNames = ["john", "tony", "tunde"]
let userNamesInUpperCase = userNames.map((userName) => {
  const  transformUser = userName.toUpperCase()
  return transformUser

})
console.log(userNamesInUpperCase)

let movies = ['harryporter', 'dance', 'nun']
let moviesInUpperCase = movies.map((movie) => {
    const transformMovie = movie.toUpperCase()
    return transformMovie

})
console.log(moviesInUpperCase)

let vNames = ['john', 'glory', 'queen', 'jane']
let fillerNames = vNames.filter((vName) => {
    const transformNames = vName.startsWith('quee')
    return transformNames

})
console.log(fillerNames)

let numbers = [11,20,50,10,25,17]
let filNumbers = numbers.filter((number) => {
    const filNumbers = number
    if (number > 10 && number < 25)
    return filNumbers
}) 
console.log(filNumbers)

let array = [[1,2,3,5], [4,6,6,7], ['jane', 'betty', 'jon']]
console.log(array[2][2])