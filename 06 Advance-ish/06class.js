class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    #courseList=[]; // private variable,can accessed using only `getters` and manipulated using `setters`

    getinfo(){
        return {name:this.name ,email:this.email}
    }

    enrollCourse(name){ // setter
        this.#courseList.push(name)
    }

    getcourseList(){ //getter
        return this.#courseList
    }
   static login(){ // private method
        return `you are logged in`
    }
}
// export default User
module.exports=User

class SubAdmin extends User{
    constructor(name,email){
        super(name,email)

    }
    getAdminInfo(){
        return `Im a subadmin`
    }
    login(){
        return `login for SubAdmin`
    }
}

const rock=new User('rock','rocky@rock.com')

// console.log(rock.getinfo());
rock.enrollCourse('Be strong course')
rock.enrollCourse('KGF chapter 2')

// console.log(rock.getcourseList());
// console.log(rock.courseList); // this result the same result,but not good for private variables.

// getters and setters are used in classes

const tom=new SubAdmin('tom','tom@jerry.com')
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getinfo());

tom.enrollCourse('tom catches jerry')
tom.enrollCourse('jerry teases tom')
console.log(tom.getcourseList());