alert('Script coded by zastix.\nFor more scripts, visit BlacketWare on Github.');
window.open('https://github.com/BlacketWare/blacket-hacks');

$.get('/api/user/elements', function(data) {
    window.userElements = JSON.parse(data)
    Object.keys(elementList).forEach(element => sell(element))
})

async function sell(element) {
    var amt =  window.userElements[element] - 1
    if (0 >= amt) return
    $.post(`/api/sell/`, `element=${element}&quantity=${amt}`, function() {
        isNaN(amt) ? "" : console.log(`Sold ${amt} ${element}(s)`)
    })
}
