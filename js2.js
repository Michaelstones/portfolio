const menu = document.querySelector('#menu')
const headerClass =document.querySelector('header')
const scrol = document.querySelector('.top')

menu.addEventListener('click', (e) => {
    e.stopPropagation()
    menu.classList.toggle('fa-times')
    headerClass.classList.toggle('toggle')
})

document.addEventListener('scroll', (e) => {
    e.stopPropagation()
    const scrollP = window.scrollY
    if(scrollP > 50){
        // console.log(scrollP);
        scrol.style.visibility = 'visible'
    }else{scrol.style.visibility = 'hidden'}

    menu.classList.remove('fa-times')
    headerClass.classList.remove('toggle') 
    
})

