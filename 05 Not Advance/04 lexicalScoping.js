function init(){
    var firstName='Aashiq'
    let courseCount=2
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName
}

var value = init()
value()