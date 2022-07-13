let map = new Map()
map.set(1, 'an integer')
map.set(true, 'a boolean')

let mary = {name: 'mary', age: 20}
map.set(mary, 'an object')

console.log(map)
console.log(map.keys())
console.log(map.entries())
console.log(map.size)
//console.log(map.delete(mary))
//console.log(map)

for(let entry of map)
console.log(`the key is ${ JSON.stringify(entry[0])} and the value is ${entry[1]}`)

let arrayMap = Array.from(map)
console.log(arrayMap)

let objectMap = Object.fromEntries(map)
console.log(objectMap)
