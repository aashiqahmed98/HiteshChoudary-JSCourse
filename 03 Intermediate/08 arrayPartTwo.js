// function isEven(element) {
    var isEven=(element)=>{
    // if(element % 2 === 0){
    //     return true
    // }
    // return false;

    return element % 2 ===0 
    
}
// console.log(isEven(2));
// let result = [1,2,3,4].every(isEven)

// console.log(result);

// Array function callback
let result=[1,2,3,4].every( e => e%2===0)
console.log(result);
