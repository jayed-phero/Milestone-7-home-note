/*
Truthy
1. true
2. any number (+ve, -ive) will be truthy other than 0
3. any string other than empty string
4. '0', 'false'
5. empty object {}
6. []

Falsy
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
*/

const x = 5;
const b = 'b';
const c = ''; 
const d = '0'; 
const e = 'false';
let f; 
let g = null;
let h = {}; // {age: 35, name: 'dim'}
let i = []; // [1, 3, 5]

if(x){
    console.log('value of x is truthy')
}
else{
    console.log('value of x is fasy')
}

// optional
// check falsy

const y = null;
if(!y){
   console.log('value is falsy')
}

// check true 
const z = {class: 5};
if(!!x){
    console.log('value is truthy')
}