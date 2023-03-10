const header = document.querySelector('.left header');
const menuBurger = document.querySelector('.left header').lastElementChild
const body = document.querySelector('body')
const p = document.querySelector('.text p')
const blocRight = document.querySelector('.right')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const a = btn.firstElementChild
// const a = btn.nextElementSibling

const footer = document.querySelector('footer a')
const souris = document.getElementById('souris')

menuBurger.addEventListener('click', ()=> {
    // menuBurger.classList.toggle("active")

    console.log(menuBurger)
    
    if (header.classList != 'line-header') {
        header.classList.add('line-header')
        menuBurger.classList.add('burger-deplacement')
        
        const div = document.createElement('div')
        div.classList.add('light')
        const lastElement = header.lastElementChild
        header.insertBefore(div, lastElement)

        // ajout de la boule
        const bounce = document.createElement('div')
        bounce.classList.add('bounce')
        div.appendChild(bounce)

        bounce.addEventListener('click', () =>{

            if(bounce.style.transform != 'translateX(50px)') {
                bounce.style.transform = 'translateX(50px)';
                header.style.backgroundColor = 'black';
                souris.style.backgroundColor = 'red';

                header.style.border = "1px solid white"
                bounce.style.backgroundColor = 'linear-gradient(66.43deg, #000000 79.29%, rgba(234, 226, 226, 0) 170.09%)';
                bounce.style.filter = 'drop-shadow(4px 4px 24px rgba(0, 0, 0, 0.25))'
                div.style.backgroundColor = 'white';
                div.style.boxShadow = 'box-shadow: inset 0px -1px 2px rgba(0, 0, 0, 0.25)';
                bounce.style.backgroundColor = 'black'
    
                newIconeSaitama = document.createElement('img')
                newIconeSaitama.classList.add('animation-new-saitama')
                newIconeSaitama.src = 'css/images/icons8-saitama-colored.svg'
                // recuperer l'ancien icone
                saitamaIcone = header.children[0]
                header.replaceChild(newIconeSaitama, saitamaIcone)
                
                menuBurger.classList.add('burger-color')
                body.style.background = "black"
                p.style.color = "white"
                blocRight.style.background = "black"
                first_input = input.firstElementChild
                first_input.style.background = "white"
                
                last_input = input.lastElementChild
                last_input.style.background = "white"

                input.classList.add("newInput")
                btn.style.background = "white"
                btn.style.color = "black"
                a.style.color= "black"

                nextInput = document.querySelector('.input-animate')
                nextInput.style.background = "white"

                oldInput = document.querySelector('.oldInpt')
                oldInput.style.background = "white"
                
                
                // input.style.placeHolder = "red"
            } else {
                header.replaceChild(saitamaIcone,newIconeSaitama)
                bounce.style.transform = 'translateX(0px)';
                souris.style.backgroundColor = '';
                header.style.backgroundColor = '';
                div.style.backgroundColor = 'black';
                header.style.border = ""
                bounce.style.background = "linear-gradient(70.51deg, #FFFFFF 93.79%, rgba(234, 226, 226, 0) 173.24%)"
                body.style.background = ""
                p.style.color = ""
                blocRight.style.background = ""
                first_input.style.background = ""
                last_input.style.background = ""
                nextInput.style.background = ""
                oldInput.style.background = ""
                input.classList.remove("newInput")
                btn.style.background = ""
                btn.style.color = ""
                a.style.color = ""
            }

        })

    } 

}) 

footer.addEventListener('click', ()=> {
    const text = document.querySelector('.right div p')
    text.innerHTML = "Creez un compte"
    text.classList.add('text-animate')
    footerParent = footer.parentElement
    footerParent.removeChild(footer)
    conditionUser = footer.nextElementSibling

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.placeholder = 'Confirm Password'
    newInput.classList.add('input-animate')
    console.log(newInput)
    input.appendChild(newInput)
    

})

document.addEventListener('mousemove',(e)=>{

    souris.style.left = e.pageX + 'px'
    souris.style.top = e.pageY + 'px'
})
