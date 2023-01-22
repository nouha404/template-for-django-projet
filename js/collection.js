const bounce = document.querySelector('.light .bounce');
const light = document.querySelector('.light')
const header = document.querySelector('header');
const inputText = document.querySelector('.searching input')
const h1Text = document.querySelector('.cover h1')
const bannerCollection = document.querySelector('.collections')
const itemTag = document.querySelector('.item-tag h3')
const body = document.querySelector('body')
const collectionBg = document.querySelector('.items-bg')
const profil = document.querySelector('.profil')
const addCollection = document.querySelector('.add-collect')
const coverInput = document.querySelector('.right .image input')
const addCollectionInput = document.querySelector('.add-collect form input')
const volumeInput = document.querySelector('.nombre-volume input')
const noteInput = document.querySelector('.left textarea')
const genreInput = document.querySelector('.genre input')
const titreInput = document.querySelector('.titre input')
const descriptInput = document.querySelector('.descript #description')
const button = document.querySelector('.button')
const select = document.querySelector('#etat-lecture')

bounce.addEventListener('click', ()=>{  

    if(bounce.style.transform != 'translateX(35px)') {
        bounce.style.transform = 'translateX(35px)'
        header.style.background = 'black'

        bounce.style.background = ' linear-gradient(66.43deg, #000000 79.29%, rgba(234, 226, 226, 0) 170.09%)'
        bounce.style.filter = 'drop-shadow(4px 4px 24px rgba(0, 0, 0, 0.25));'
        bounce.style.boxShadow = 'inset 0px -1px 2px rgba(0, 0, 0, 0.25)'
        light.style.background = '#D9D9D9'
        bounce.style.border = '1px solid white'
        inputText.style.background = 'white'
        inputText.style.color = 'black'
        body.style.background = 'black'
        itemTag.style.color = 'white'
        profil.style.border = '1px solid #FFFFFF'
        addCollection.style.backgroundColor = 'black'
        addCollection.style.border = '1px solid white'
        addCollection.style.borderRadius = '20px'
        // coverInput.style.boxShadow = '0px 4px 4px gray'
        coverInput.style.backgroundColor = '#3F3E3E';
        addCollectionInput.style.backgroundColor = '#3F3E3E';
        addCollectionInput.style.color = '#FFFFFF';
        addCollectionInput.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)'
        
        volumeInput.style.backgroundColor = '#3F3E3E';
        volumeInput.style.color = '#FFFFFF';
        genreInput.style.backgroundColor = '#3F3E3E';
        genreInput.style.color = '#FFFFFF';
        titreInput.style.backgroundColor = '#3F3E3E';
        titreInput.style.color = 'white';
        descriptInput.style.backgroundColor = '#3F3E3E';
        descriptInput.style.color = 'white';
        noteInput.style.backgroundColor = '#3F3E3E';
        noteInput.style.color = 'white';
        noteInput.style.fontSize = '1.3rem'
        button.style.backgroundColor = '#3F3E3E'
        button.style.color = 'white'
        descriptInput.style.fontSize = '1.3rem'
        select.style.backgroundColor = 'black'
        select.style.color = 'white'
        
    } else {
        bounce.style.transform = ''
        header.style.background = ''
        bounce.style.background = ''
        bounce.style.filter = ''
        light.style.background = '#D9D9D9'
        bounce.style.border = ''
        itemTag.style.color = ''
        body.style.background = ''
        inputText.style.background = ''
        inputText.style.color = ''
        profil.style.border = ''
        addCollection.style.background = ''
        coverInput.style.border = ''
        coverInput.style.boxShadow = ''
        addCollectionInput.style.backgroundColor = ''
        addCollectionInput.style.color = ''
        volumeInput.style.backgroundColor = '';
        volumeInput.style.color = '';
        titreInput.style.color = '';
        noteInput.style.backgroundColor = '';
        genreInput.style.backgroundColor = '';
        genreInput.style.color = '';
        coverInput.style.backgroundColor = '';
        titreInput.style.backgroundColor = '';
        descriptInput.style.backgroundColor = '';
        button.style.backgroundColor = ''
        button.style.color = ''
        noteInput.style.color = '';
        descriptInput.style.color = '';
        noteInput.style.fontSize = ''
        descriptInput.style.fontSize = ''
        select.style.backgroundColor = ''
        select.style.color = ''
    }

})