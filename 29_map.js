let arr = [1,6,9,4]

let a = arr.map((value, index, array)=>{
    console.log(value, index, array)

    return value+1
})

console.log(a)
console.log("______________________________________")

let arr1 = [1,6,9,4]
let b = arr1.map((x)=>{
    return x*x
})

console.log(b)