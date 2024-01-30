let isReady = true

let status = isReady? "Ready":"Not Ready"
console.log(status)

let a1 = [1, 2, 3, 4]
let a2 = [5, 6, 7, 8]

let jointArray = [...a1, ...a2]
console.log(jointArray)

const adder = (...values) => {
    let sum = 0
    for(val of values){
        sum+= val
    }
    console.log("Sum is: ", sum)
}

adder(1,3,5,1)