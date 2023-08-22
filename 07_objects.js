const item = {

    "name": "soumojit",
    "age": 18,

}

console.log (item["name"])              // output: soumojit
console.log (item.name)                 // output: soumojit
console.log (Object.keys(item))         // output: [ 'name', 'age' ]
console.log (Object.values(item))        // output: [ 'soumojit', 18 ]
console.log (Object(item))              // output: { name: 'soumojit', age: 18 }

console.log (Object.values(item)[0])    // output: soumojit
console.log (Object.values(item)[1])    // output: 18