alert('Script coded by zastix & improved for school by VillainsRule.\nFor more scripts, visit BlacketWare on Github.');
window.open('https://github.com/BlacketWare/blacket-hacks');
let ee = confirm('This script was made for devices without access to the console. Would you like the script made for home devices where Inspect is not blocked?\nOk = Yes, Cancel = No');
if (ee) { window.open('https://github.com/BlacketWare/blacket-hacks/blob/main/global/spamOpenCrates.js'); }

var i = 0;
var boxes = []

var name = prompt("Which crate would you like to open?\n\nOptions:\n" + Object.keys(cratesList).join('\n'));
if (!Object.keys(cratesList).includes(name)) {
  alert('That crate doesn\'t exist...');
  name = prompt("Which crate would you like to open?\n\nOptions:\n" + Object.keys(cratesList).join('\n'));
}
var amt = Number(prompt("How many crates would you like to open?\ntype \"*\" to unlock all you can with your current atoms."));
if (isNaN(amt)) amt = Number.MAX_VALUE
var eee = confirm('Show what you get? This will make the opening longer. You can always just see what you get later.')

function buyBox() {
  $.post('/api/open/', `crate=${name}`, function(data) {
    try {
      if (data.includes("rate")) i--
      else {
        var rarity = elementList[data]['rarity'].toUpperCase()
        if (eee) {
          switch (rarity) {
            case "LEGENDARY":
            case "FABLED:":
            case "DIVINE":
            case "PERFECT":
              alert(`${data} || ` + rarity + '\nYou got a rare item! Trade it for a lot!');
              break;
            default:
              alert(`${data} || ` + rarity);
              break;
          }
        }
      }
    } catch (e) {
      i = amt
    }
  });
}
var check = setInterval(() => {
  if (i < amt) {
    buyBox();
    i++;
  } else {
    clearInterval(check);
    alert('Done opening crates!')
  }
}, 500);
