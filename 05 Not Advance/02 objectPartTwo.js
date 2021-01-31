var User={
    name:"",
    getUserName:function () {
        console.log(`User name is : ${this.name}`);
    }
}

var aashiq=Object.create(User)
// console.log(aashiq);
aashiq.name='Aashiq'
aashiq.getUserName()


var sam=Object.create(User,{
    name:{
        value:'Sammy'
         },
    course
})