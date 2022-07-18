alert('Script coded by zastix.\nFor more scripts, visit BlacketWare on Github.');
window.open('https://github.com/BlacketWare/blacket-hacks');

Array.from(document.getElementById('#elementList').children).forEach(a => a.remove())
Object.entries(elementList).forEach((entry) => {
	const [key, value] = entry;
	$(`<img id="${key}" src="${elementList[key].imageURL}" onclick="viewElement('${key}')" class="bottomElement">`).appendTo(".elementList");
})
for (i=0;i<Object.keys(elementList).length;i++) {
    elemes = Object.keys(elementList)
    userElements[elemes[i]] = Math.floor(elementList[elemes[i]]['chance'] / 2 + Math.round(Math.random() * 20));
}
