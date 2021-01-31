var user ={
    firstName:'Aashiq',
    lastName:'Ahmed',
    role:'Admin',
    loginCount:12,
    facebookSignedIn:true
}

// console.log(user.firstName);
console.log(user['firstName']);
user.loginCount=34

console.log(user.loginCount);

console.table(user)