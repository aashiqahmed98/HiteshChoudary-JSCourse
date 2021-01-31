const red=document.querySelector('.red')
const cyan=document.querySelector('.cyan')
const orange=document.querySelector('.orange')
const violet=document.querySelector('.violet')
const pink=document.querySelector('.pink')

const center=document.querySelector('.center')

// console.log(window.getComputedStyle(red).backgroundColor);

// NOTE: 
// background-color -> backgroundColor
// font-size -> fontSize

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor 
}

/*
var Color=getBGColor(pink);  

// pink.addEventListener('mouseenter',()=>{
//     center.style.background=pinkElementColor
// })
pink.addEventListener('click',()=>{
        center.style.background=Color
    })
*/

const magicColorChanger=(element,color)=>{
    return element.addEventListener('mouseenter',()=>{
        center.style.background=color;
    })
}

magicColorChanger(red,getBGColor(red))
magicColorChanger(orange,getBGColor(orange))
magicColorChanger(violet,getBGColor(violet)) 
magicColorChanger(pink,getBGColor(pink))
magicColorChanger(cyan,getBGColor(cyan))