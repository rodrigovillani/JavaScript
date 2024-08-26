const txtvel = window.document.querySelector('input#txtvel')
const res = window.document.querySelector('div#res')
function calculate() {
const vel = Number(txtvel.value)
res.innerHTML = `<p>The car speed is <strong>${vel}</strong> Km/h.</p>`
if (vel > 60) {
    res.innerHTML += '<p>Your car speed is higher than the permited speed!</p>' 
}
else {
    res.innerHTML += '<p>Alright here! Drive safe!</p>'
}

}