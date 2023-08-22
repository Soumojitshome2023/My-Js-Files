let num = [91,82,95,98]

console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])

let c = num.join("_")
console.log(c)

num.pop()    // last element remove from arry
console.log(num)

r = num.pop()       // Now pop element is 95
console.log(r)

num.push(99)    // Add element in last
console.log(num)

let num1 = [91,82,95,98]
num1.shift()        // first element remove from arry
console.log(num1)

num1.unshift(100)    // Add element in first
console.log(num1)


let num2 = [91,82,95,98]
console.log(num2.length)
delete num2[0]
console.log(num2.length)    // length does not effect
console.log(num2)

let num3 = [91,82,95,98]
let num4 = [81,57,88,86]

let newarr = num3.concat(num4)
console.log(newarr)


let num5 = [5,4,7,2,3,9]
num5.sort()
console.log(num5)

let num6 = [5,44,7,42,53,9]         // sort by first alphabet
num6.sort()
console.log(num6)


let num7 = [5,4,7,2,3,9]
num7.reverse()
console.log(num7)