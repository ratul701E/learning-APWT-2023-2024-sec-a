
let sundorArray = [1, "eda string", block, false]
console.log(sundorArray)

sundorArray.unshift("Ami surute thakbo")
console.log(sundorArray)

sundorArray.shift()
console.log(sundorArray)

sundorArray.forEach((value) => {
    console.log("--------------")
    console.log(value)
})

let modifiedArray = [1, 2, 3, 4].map((v, i) => {
    return v*i
})

console.log(modifiedArray)

modifiedArray = [2, 4, 8, 6, 9].filter((value) => {
    return value*2 > 10
})
console.log(modifiedArray)