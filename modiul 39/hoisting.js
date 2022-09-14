print()
print3();

for ( var i = 0; i < 5; i++ ){
    console.log(i);
}
console.log('outside', i)

function print(){
   console.log('inside print', 5)
}

const print3 = function(){
    console.log('inside print3', 5)
}