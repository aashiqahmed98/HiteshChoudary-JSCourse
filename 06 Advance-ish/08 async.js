const uno=()=>{
     
    console.log(`Im one`);
}
const dos=()=>{
    setTimeout(() => {
       console.log('wohoo'); 
    }, 3000);
    console.log(`Im two`);
}
const tres=()=>{
    console.log(`Im tres`);
}

uno();
tres()
dos();