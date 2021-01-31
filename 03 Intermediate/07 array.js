// var name;
// var name2;

var  Countries = ['India','USA','JAPAN','CANADA']
var State = new Array('TamilNadu','kerala','Assam','Karnataka')

console.log(State);

// console.log(State.length);

State[0]='Bombay'
// console.log(State);

// var user=[]
State.pop()
console.log(State);
State.unshift('Cool State')
console.log(State);

let shiftValue=State.shift()
console.log(shiftValue);
console.log(State);

State.indexOf('cooly') // not in the array.returns -1 ,used for comparison

console.log(Array.from('Aashiq'));