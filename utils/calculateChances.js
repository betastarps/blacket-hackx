alert('Script coded by zastix.\nFor more scripts, visit BlacketWare on Github.\n\nFor all the whiners out there, the math is RIGHT. It doesn\'t care of the total box rates added up.');
window.open('https://github.com/BlacketWare/blacket-hacks');

var wordCount = confirm('Is the element one word?\nOk = yes, Cancel = no');
function thing() {
    let amt = prompt('How many crates are you opening?');
    let amount = prompt('How many are you aiming for?');
    let chance = elementList[element]['chance'];
    alert('Press OK to calculate');
    let calculation = chance * amt;
}
if (wordCount) {
    try {
        let element = prompt('What element are you trying to get?').toLowerCase();
        thing();
        
        alert('You have a ' + calculation + '% chance to get at least one ' + element + '. (Press OK to continue)')
        alert('You have a ' + (calculation / amount) + '% chance to get ' + amount + ' ' + element + '.')
    } catch (e) {
        alert('An error has occurred, you may not have entered the element name properly.')
    }
} else {
    let twoword = prompt('Enter the element name:').toLowerCase();
    const splitter = twoword.split(" ");
    let twowordfin1st = splitter[0];
    let twowordfin2nd = splitter[1];
    const splitfin = twowordfin2nd.charAt(0).toUpperCase() + twowordfin2nd.slice(1);
    
    try {
        let element = twowordfin1st + splitfin;
        thing();
        
        alert('You have a ' + calculation + '% chance to get at least one ' + twoword + '. (Press OK to continue)')
        alert('You have a ' + (calculation / amount) + '% chance to get ' + amount + ' ' + twoword + '.')
    } catch (e) {
        alert('An error has occurred, you may not have entered the element name properly.')
    }
}
