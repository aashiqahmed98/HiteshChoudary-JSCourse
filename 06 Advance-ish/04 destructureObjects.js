const user=['aashiq',21,'webDeveloper']

// without destructuring
// var designation=user[2]
// var name=user[0]

// with destructuring
const [
    name,
    age,
    designation

] = user

console.log(name,age,designation);

const myUser={
    name:'Hitesh',
    courseCount:2,
    role:'admin'
}
console.log(myUser.courseCount);

const {coursecount}=myUser
console.log(coursecount);