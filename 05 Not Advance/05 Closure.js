function doAddition(x){
    return function(y){
        return x + y
    }
}

const addition=doAddition(4)

console.log(addition(3))

console.log(doAddition(4)(5)); // currying