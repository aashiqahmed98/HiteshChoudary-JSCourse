// NOTE: For all regular function call 'this' keyword points to the window(global) object

// console.log(this);

var user={
    name:'Aashiq',
    courseCount:4,
    getCourseCount: function() {
        console.log('line 7 ',this);
        function sayHello() {
            console.log('Line 11',this);
        }
        sayHello()
    }
}

user.getCourseCount()