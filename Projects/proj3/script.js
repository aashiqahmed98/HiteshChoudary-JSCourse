const courses=[
    {
        name:'Complete Reactjs course',
        price:'2.1'
    },
    {
        name:'Complete Angular course',
        price:'2.4'
    },
    {
        name:'Complete MERN course',
        price:'2.7'
    },
    {
        name:'Complete c++ course',
        price:'2.3'
    },
    {
        name:'Django course',
        price:'7'
    }
]

function generateLIST(){
    const ul=document.querySelector('.list-group')
    ul.innerHTML=""
    courses.forEach(course =>{
        
        const li=document.createElement("li") // <></>
        li.classList.add('list-group-item')

        const name= document.createTextNode(course.name)
        li.appendChild(name)

        // creating 'span'
        const span=document.createElement('span')
        span.classList.add('float-right')

        const price=document.createTextNode("$ "+course.price)
        span.appendChild(price)

        // insert 'span' into 'li'
        li.appendChild(span)
        ul.appendChild(li)
        
    })
}

// generateLIST()

// running this function on page load

window.addEventListener('load',generateLIST)

const sortButton=document.querySelector('.sort-btn')
sortButton.addEventListener('click',()=>{
    courses.sort( (a,b) => a.price - b.price)
    // console.log('Courses',courses)
    generateLIST()
})