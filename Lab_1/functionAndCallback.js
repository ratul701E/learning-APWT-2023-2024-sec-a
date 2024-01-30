// function
function even(number){
    return number%2 == 0
}

let doubler = (number) => number*2

console.log([1, 2, 3, 4].map((value) => {
    return even(value) ? doubler(value):value
}))

//callback
const sum = (v1, v2) => {
    return v1 + v2
}
const sub = (v1, v2) => {
    return v1 - v2
}
const calculator = (n1, n2, func) => {
    console.log(func(n1, n2))
}


calculator(10, 11, sum)
calculator(20, 10, sub)