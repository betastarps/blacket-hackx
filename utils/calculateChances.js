alert('Script coded by zastix.\nFor more scripts, visit BlacketWare on Github.');
window.open('https://github.com/BlacketWare/blacket-hacks');

try {
    let element = prompt('What element are you trying to get?')
    let amt = prompt('How many crates are you opening?')
    let amount = prompt('How many are you aiming for?')
    let chance = elementList[element]['chance']
    alert('Press OK to calculate')

    let calculation = chance * amt
    alert('You have a ' + calculation + '% chance to get atleast one ' + element + '. (Press OK to continue)')
    alert('You have a ' + (calculation / amount) + '% chance to get ' + amount + ' ' + element + '.')
} catch (e) {
    alert('An error has occurred')
}
