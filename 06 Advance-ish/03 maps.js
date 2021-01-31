var myMap= new Map();

myMap.set(0,'Uno')
myMap.set(1,'doe')
myMap.set(2,'Tres')
myMap.set(3,'Cuatro')

console.log(myMap);

for(let key of myMap.keys()){
        console.log(`Key is ${key}`);
}

for(let value of myMap.values()){
    console.log(`Value is ${value}`);
}

for(let [key,value] of myMap){
    console.log(`Key is : ${key} , Value is ${value}`);
}
myMap.forEach( (v,k) => console.log(`Value : ${v} ,key : ${k}`) ) // first `value`,then `key`

myMap.delete(2)