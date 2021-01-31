// Create an Application with following roles:
// admin - gets full access
// subadmin -get access to create/delete courses
// testprep - get access to create/delete test
// users - get access to consume content

var user='user'

switch (user) {
    case 'admin':
         console.log(`you get full access`)
        break;
    case 'subadmin':
            console.log(`you get access to create/delete courses`)
           break;
    case 'testprep':
            console.log(`you get access to create/delete test`)
           break;
    case 'user':
            console.log(`you get access to consume content`)
           break;
    default:
        console.log('Trial user');
        break;
}