function tabuada() {
    let num = document.getElementById('txttab')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número.')
    } else {
        num = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let res = c * num
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${res}`
            c++
            tab.appendChild(item)
        }
    }
}