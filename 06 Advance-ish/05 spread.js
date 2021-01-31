// // ...args

// const myarr=[1,2,4,534,6,34,2,12,3,2,34,12,3,23,4]
// console.log(myarr);

// console.log(Math.max(...myarr));

// // console.log(...myarr);

// var myObj={}
// Object.assign(myObj,{a:1,b:2},{z:9,y:7,x:2})
// console.log(myObj);

function sumOne(a,b){
    // console.log(a);
    return a+b
}

var myA=[1,2]

// console.log(sumOne(4,5));
// console.log(sumOne(myA));
// console.log(sumOne(...myA));

function sumTwo(a,b,...args){
    console.log(a,b);
    // args -> array
    console.log(args);
    let sum=0;
    for (const arg of args) {
        sum+=arg
    }
    return sum;

}
console.log(sumTwo(12,3,2,4,3,2));
