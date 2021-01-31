// functions are considered as scope in JS {}

console.log(name);

// var name='Aashiq' // undefined
let name='Aashiq'

if(true){
    var lastname="Ahmed"
} // a scope - 'var' is a bad practise

console.log(lastname);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}