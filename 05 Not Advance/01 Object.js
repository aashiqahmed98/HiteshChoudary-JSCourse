// NOTE: use uppercase for prototype object
var User = function (firstName,coursecount) {
    this.firstName=firstName,
    this.coursecount=coursecount,
    this.getCourseCount=function(){
        console.log(`${firstName} has applied to ${coursecount} courses`)
    }
    
}
User.prototype.getFirstName = function(){
    console.log(`Your firstname is ${this.firstName}`);
} // `new` keyword takes care injecting the prototype object into the created ones.it also
// returns the object properties without return statement

const user1=new User('Aashiq',4)
// console.log(user1);
user1.getCourseCount()

if(user1.hasOwnProperty('firstName')){
user1.getFirstName()
}

const user2=new User('Aadhil',5)

// console.log(user2);
user2.getCourseCount()
user2.getFirstName()

