"use strict";
function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(10, 25));
let addition = (a, b) => a + b;
console.log(addition(21, 9));
function addnew(a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : 0);
}
console.log(addnew(5, 6));
function multiplication(a, b, c = 1) {
    return a * b * c;
}
console.log(multiplication(5, 7));
