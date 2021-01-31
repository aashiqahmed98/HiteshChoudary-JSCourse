// Show user  a signout button if he is  authenticated
// otherwise show him option to Login/Signup

var isAuthenticated = true;

// if(isAuthenticated){
//     console.log(`Show signout button`)
// } else{
//      console.log(`Show login button`)
// }

isAuthenticated ? console.log(`Show signout button`) : console.log(`Show login button`)