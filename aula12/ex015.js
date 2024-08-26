function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fAno.value.lenght == 0 || Number(fAno.value) > ano) {
        window.alert('Verifique o ano')
    } else {
        let idade = ano - Number(fAno.value)
        let fSex = document.getElementsByName('radsex')
        let gen = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            gen = 'Homem'
            if ( idade >=0 && idade < 10) {
                img.setAttribute('src', 'baby.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'teen.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adult.jpg')
            } else {
                img.setAttribute('src', 'old.jpg')
            }
        } else {
            gen = 'Mulher'
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}