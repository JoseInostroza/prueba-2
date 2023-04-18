const searchBtn = document.getElementById('btnSearch');
const closeBtn = document.getElementById('btnClose')
const searchContenedor = document.querySelector('.nav__cuerpo-searchBar')

searchBtn.addEventListener('click', ()=>{
    searchContenedor.classList.add('active')
})

closeBtn.addEventListener('click', ()=>{
    searchContenedor.classList.remove('active')
})