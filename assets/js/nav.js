const closeM = document.getElementById('menuToggle-close')
const toggle = document.getElementById('menuToggle')
const nav = document.querySelector('.nav__cuerpo')

toggle.addEventListener('click', ()=>{
    nav.classList.add('open')
    searchContenedor.classList.remove('active')
    searchBtn.classList.remove('active')
    closeBtn.classList.remove('active')
})
closeM.addEventListener('click', ()=>{
    nav.classList.remove('open')
    searchContenedor.classList.remove('active')
    searchBtn.classList.remove('active')
    closeBtn.classList.remove('active')
})
