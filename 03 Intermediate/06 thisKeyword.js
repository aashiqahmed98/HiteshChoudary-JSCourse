//TODO: part 1 for 'this' keyword

console.log(this);

var game='basketball'
function sayName() {
    var name='Ashiq'
    console.log(this);
}
sayName()