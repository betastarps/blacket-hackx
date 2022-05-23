var i = 0;
var boxes = []
colors = {
    divine: '#ee82ee',
    mythical: '#a335ee',
    perfect: '#fffacd',
    fabled: '#0c7500',
    legendary: '#ff910f',
    epic: '#be0000',
    rare: '#0a14fa',
    uncommon: '#4bc22e',
    common: '#ffffff'
}
Object.keys(cratesList).forEach(e => {
    boxes.push(e)
})
var name = prompt("Which crate would you like to open?\n\nOptions:\n" + boxes.join('\n'));
if (!boxes.includes(name)) {
    alert('That crate doesn\'t exist...')
    name = prompt("Which crate would you like to open?\n\nOptions:\n" + boxes.join('\n'));
}
var amt = Number(prompt("How many crates would you like to open?"));

function buyBox() {
    $.post('/api/open/', `crate=${name}`, function(data) {
        try {
            if (data === "You're being rate limited.") i--
            else {
                rarity = elementList[data]['rarity'].toLowerCase()
                console.log('%c%s', `color: ${colors[rarity]}; font-size: 25px; text-shadow: 0px 0px 15px ${colors[rarity]};`, `${data}`);
            }
        } catch (e) {
            console.log('%c%s', `color: black; font-size: 25px; text-shadow: 0px 0px 15px black;`, `You dont have enought atoms!`);
            alert('You dont have enought atoms!')
            i = amt
            clearInterval(check);
        }
    });
}
var check = setInterval(() => {
    if (i < amt) {
        buyBox();
        i++;
    } else {
        clearInterval(check);
        alert("Done buying boxes! Check the console or the Elements page.");
    }
}, 751);
