const uno = () => {
  return `Im one`;
};
// const  dos=async ()=>{
//     setTimeout(() => {
//       return `Im two`
//     }, 3000);
// }

const dos = () => {
  return new Promise((resolve, reject) => {

      console.log(`Inside promise`);

    setTimeout(() => {
      reject(`Im two`);
    }, 3000);
  });
};

const tres = () => {
  return `Im three`;
};

const callMe = async () => {
  let valOne = uno();
  console.log(valOne);

  let valTwo =await dos();
  console.log(valTwo);

  let valThree = tres();
  console.log(valThree);
};

callMe();
