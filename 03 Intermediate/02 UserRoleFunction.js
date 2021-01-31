/*

TODO:
Define a function that can answer the role of a user .
A user can be on following rules:

admin - get all access
subadmin -get access to create/delete courses
testprep - get access to create/delete test
users - get access to consume content
other - trial user 

Input - getUserContent(name,role)
*/

var getUserRole= function (name,role){
    switch (role) {
        case 'admin':
            return `${name} is admin with all access`
        case 'subadmin':
            return `${name} is subadmin with  access to create/delete courses`
        case 'testprep':
            return `${name} is Testprep with all access create/delete test`
        case 'user':
            return `${name} is user with all access to content`
                            
        default:
            return `${name} is trial user`
    }   
}

console.log(getUserRole('Aashiq')); // trial user
