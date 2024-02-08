function addNumber(a: number, b: number) {
    return a + b;
}
console.log(addNumber(10, 25));

let addition = (a: number, b: number): number => a + b;
console.log(addition(21, 9));


function addnew(a: number, b: number, c?: number): number {
    return a + b + (c ?? 0);
}

console.log(addnew(5, 6));


function multiplication(a: number, b: number, c: number = 1) {
    return a * b * c;
}

console.log(multiplication(5, 7));