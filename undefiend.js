/*
8 way to get undefined

1. variable that in not initialized will give undefined
2. function with no return
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exits on an ovject will give you undefined
6. accessing array elements outside of the index range.
7. deleting an element inside an array
8. set a value directly to undefined
*/

//  1
let first ;

// 2
function second(a, b){
    const total = a+ b;
}

// 3
function third(a, b, c){
    const toal = a+ b+ c;
    console.log(a, b, c)
}
third(1,3);

// 4 
function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a+ b;
}
const total = noNegative(2, -5)
console.log(total);


// 5
const fifth = { id: 3, name: 'ponchom', age: 45};
console.log(fifth.age, fifth.salary);

// 6
const sixth = [1, 39, 57, 71, 93];
console.log(sixth[1], sixth[5], sixth[101])

// 7
const seventh = [1, 39, 57, 71, 93];
// you should not do it , insted use splice
delete seventh[1]

//  8
const eighth = undefined;
const ningth = null;

const data = { results: [], update: null}

console.log(typeof undefined);
console.log(typeof null) // = object