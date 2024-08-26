function carregar() {
    var msg = window.document.querySelector('div#msg')
    var imagem = window.document.querySelector('img#ima')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        imagem.src = 'images/manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        imagem.src = 'images/tarde.jpg'
    } else {
        //BOA NOITE 
        imagem.src = 'images/noite.jpg '
    }

}
