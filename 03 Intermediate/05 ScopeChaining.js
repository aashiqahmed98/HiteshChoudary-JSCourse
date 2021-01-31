
var name= 'Hitesh'

console.log(`line 3 `,name);


function sayName() {
    var name='cool'
    console.log(`Line number 7`,name);

    sayName2()
    
    function sayName2() {
        console.log(`Line number 10 `,name);
        
    }
   
}
sayName()