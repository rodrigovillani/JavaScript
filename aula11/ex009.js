const country = window.document.querySelector('input#country')
const res = window.document.querySelector('div#res')
function Check () {
if (country == 'Brasil') {
    res.innerHTML = '<p>You are Brazilian</p>'
} 
else {
    res.innerHTML = '<p>You are Foreign</p>'
}
}

