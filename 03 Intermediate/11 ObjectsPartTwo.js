var user ={
    firstName:'Aashiq',
    lastName:'Ahmed',
    role:'Admin',
    loginCount:12,
    facebookSignedIn:true,
    courseList:[],
    buyCourse:function (courseName){
        this.courseList.push(courseName)
    },
    getCourseCount: function () {
        return `${this.firstName} enrolled in total of ${this.courseList.length} courses`
    }
}

var courseList=true 
console.log(user.getCourseCount());
user.buyCourse('Reactjs course')
user.buyCourse('Angular Course')
console.log(user.getCourseCount());
