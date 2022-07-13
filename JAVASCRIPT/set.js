//declare your variables
let setOfUsers = new Set()
let laurel = { name: 'Laurel', age: 20,}
let ejiro = {name: 'Ejiro', age: 30}

// .add used to add elements
setOfUsers.add(laurel)
setOfUsers.add(ejiro)
setOfUsers.add(10)
setOfUsers.add(true)


console.log(setOfUsers)
console.log(setOfUsers.size)
console.log(setOfUsers.has(10))
console.log(setOfUsers.delete(true))
console.log(setOfUsers.delete(10))
console.log(setOfUsers)

//for loop, used to iterate over a set of users
for ( let user of setOfUsers)
console.log(`the user value is ${JSON.stringify (user)})`)

//turn set to an array
let usersArray = Array.from(setOfUsers)
console.log(usersArray)


//turn set to an object but only with object elements
let usersObject = Object.fromEntries(setOfUsers) //this wont work because
console.log(usersObject)
//objects cant take in booleans and integers hence the need for maps and sets
