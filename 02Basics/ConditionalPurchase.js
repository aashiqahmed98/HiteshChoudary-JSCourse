// User is allowed to make a purchase :
// logged in 
// email Verified
// cardInfo valid
// If any one is missing - stop purchase

var isLoggedIn=true;
var isEmailVerified=true;
var CardInfo=true;

// if(isLoggedIn){
//     console.log(`LoggedIn success`)
//     if(isEmailVerified){
//         console.log(`Email is verified`)
//         if(CardInfo){
//             console.log(`You can make a purchase`)
//         }
//     }
// }

if(isLoggedIn && isEmailVerified && CardInfo){
    console.log(`Allow user to make a purchase`)
}else{
    console.log(`You are not allowed to that`)
}