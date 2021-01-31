// var num =2 

//  function sayMe() {
//      console.log(`Say Me`);
    
//  }

// NOTE: Initialy,
// Functions are scanned and stored
// Variables are declared and undefined

tipper('5')
function tipper(tip) {
    var bill = parseInt(tip) +5
    console.log(bill);
    
}

// bigTipper('200')

var bigTipper=function (bigTip) { // function expression
    var bill = parseInt(bigTip) +15
    console.log(bill);
    
}

console.log(name);
var name='Aashiq'

function sayName(){
    var name='Johnny depp'
    console.log(name)
}
console.log(name);