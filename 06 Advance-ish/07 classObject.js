// import User from './06class'
// import UserClass from './06class'

const User=require('./06class')

const Aashiq=new User('aashiq ahmed','aashiqahmed@gmail.com')
console.log(Aashiq.getinfo());

Aashiq.enrollCourse('React Bootcamp')
Aashiq.enrollCourse('Angular Bootcamp')
console.log(Aashiq.getCourseList());

let courses=Aashiq.getCourseList()

courses.forEach(course => console.log(course))