function sum (a, b, c){
    console.log(arguments)
    console.log(arguments[4])
    // for(let i = 0;)
    arguments.push(33);
    const args = [...arguments];
    console.log(args)
    const result = a + b+ c;
    return result;
}
const total = sum(45, 89, 13, 77, 55); //extra value = arguments
console.log(total)
console.log(sum.length)
