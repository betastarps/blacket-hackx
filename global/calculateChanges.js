/* coded 99% by tremblero */
let element = prompt('What blook are you trying to get?').toLowerCase()
let amt = prompt('How many crates are you opening?')
let amount = prompt('How many are you aiming for?')
let chance = elementList[element]['chance']
alert('Press OK to calculate')
 
let calculation = chance * amt
alert('You have a ' + calculation + '% chance to get atleast one ' + blook + '. (Press OK to continue)')
console.log('You have a ' + calculation + '% chance to get atleast one ' + blook + '.')
alert('You have a ' + (calculation/amount) + '% chance to get ' + amount + ' ' + blook + '.')
console.log('You have a ' + (calculation/amount) + '% chance to get ' + amount + ' ' + blook + '.')
