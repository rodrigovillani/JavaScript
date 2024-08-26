function contar() {
    let ini = document.getElementById('txtin')
    let fim = document.getElementById('txtfim')
    let pass = document.getElementById('txtpass')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 ||  fim.value.length == 0 || pass.value.length == 0) {
        window.alert('Por favor, preencha todos os dados.')
    } else {
        res.innerHTML = 'Contando: <br>'
        ini = Number(ini.value)
        fim = Number(fim.value)
        pass = Number(pass.value)
        if (pass <= 0) {
            window.alert('"0" não é um passo válido. Considerando passo 1.')
            pass = 1
        }
        if (ini < fim) {
            for(let c = ini; c <= fim; c += pass) {
                res.innerHTML += `${c}, `
            }
        } else {
            for(let c = ini; c >= fim; c -= pass) {
                res.innerHTML += `${c}, `
            }
        }
        res.innerHTML += 'FIM'
    }
}