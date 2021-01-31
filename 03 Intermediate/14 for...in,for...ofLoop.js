const names = ['youtube','facebook','instagram','netflix','amazon']

// TIP: use 'const' for ...for..of loop,so that value will not change in the course

for(const n of names){

    console.log(n);

}
const symbols={
    yt:'Youtube',
    fb:'facebook',
    ig:'instagram',
    lco:'LearnCOdeOnline'
}

for (const key in symbols) {
    console.log(symbols[key]);
}

