let name = prompt("Which box would you like to open?\n\nList:\nall\nadd");
let amt;
let i = 1;
amt = Number(prompt("How many boxes would you like to open."));

function buyBox() {
    var postData = 'crate=' + name;
    $.post('/api/open/', postData, function(data) {
        blookRarity = window.elementList[data].rarity
        console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px black;', `${window.elementList[data]});
        if (data === "You're being rate limited.") {
            i--;
        }
    });
}
var check = setInterval(() => {
    if (i <= amt) {
        buyBox();
        i++;
    } else {
        clearInterval(check);
        alert("Dony buying boxes");
    }
}, 1001);
