async function sell(element) {
    var amt = userElements[element] - 1
    if (0 >= amt) return;
    var postData = `element=${element}&quantity=${amt}`;
    $.post(`/api/sell/`, postData, function() {
        if (isNaN(amt)) return;
        else console.log(`Sold ${amt} ${element}(s)`);
    })
}

Object.keys(elementList).forEach(element => {
    sell(element)
})
