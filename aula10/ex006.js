let area = window.document.querySelector('div#area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)
function clicar() {
    area.innerHTML = 'Ainnn que susto.' 
    area.style.background = 'red'
}
function entrar() {
    area.innerHTML = 'Que isso?!'
    area.style.background = 'yellow'
}
function sair() {
    area.innerHTML = 'Interaja...'
    area.style.background = 'rgb(28, 207, 28)';
}
