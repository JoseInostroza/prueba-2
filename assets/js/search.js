const searchBtn = document.getElementById('btnSearch');
const closeBtn = document.getElementById('btnClose')
const searchContenedor = document.querySelector('.nav__cuerpo-searchBar')
const searchBar = document.getElementById('searchBar')

searchBtn.addEventListener('click', ()=>{
    searchContenedor.classList.add('active')
    searchBtn.classList.add('active')
    closeBtn.classList.add('active')
    nav.classList.remove('open')
    toggle.classList.add('hide')
    closeM.classList.add('hide')
})

closeBtn.addEventListener('click', ()=>{
    searchContenedor.classList.remove('active')
    searchBtn.classList.remove('active')
    closeBtn.classList.remove('active')
    nav.classList.remove('open')
    toggle.classList.remove('hide')
    close.classList.remove('hide')
})

searchBar.addEventListener('keyup',()=>{
    let buscado = searchBar.value.toUpperCase().trim();
    document.querySelectorAll('.targeta').forEach((encontrado)=>{
        if(!(encontrado.id.includes(buscado))){
            encontrado.classList.add('hide')
        }else{
            encontrado.classList.remove('hide')
        }
    })
    let obtenido = document.getElementById(buscado)
    
})