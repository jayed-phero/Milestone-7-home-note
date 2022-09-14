// primitive types are pass by value
let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 27;
    const result = a * b;
    return result;
}

console.log(num1)
const output = multiply(num1 , num2)
console.log(output)


// object and array are pass by referance

let student1 = {name: 'shifat', parte: 'dim'}
let student2 = {name: 'bolod', parte: 'sola'}

function makeDim (coudle1, coudle2){
    coudle1.name = 'sim';
    coudle2.parte = 'gim';
}

console.log(student1, student2)
makeDim(student1, student2);
console.log(student1, student2)