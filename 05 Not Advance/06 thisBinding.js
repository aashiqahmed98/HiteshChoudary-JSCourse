const  Aashiq={
    firstName:'Aashiq',
    lastName:'Ahemd',
    role:'Admin',
    courseCount:'3',
    getInfo:function(){
        console.log(`FirstName is : ${this.firstName}
LastName is : ${this.lastName}
Role : ${this.role}
and he is studying ${this.courseCount} courses`);
    }
}

const dj= {
    firstName:'Rock',
    lastName:'DJ',
    role:'Sub-Admin',
    courseCount:4

}

Aashiq.getInfo.bind(dj)() // borrowing the function with same specs
Aashiq.getInfo.call(dj) // directly call,but bind the function reference