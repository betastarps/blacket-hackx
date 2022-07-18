alert('Script coded by zastix.\nFor more scripts, visit BlacketWare on Github.');
window.open('https://github.com/BlacketWare/blacket-hacks');

$.get('/api/user/', function(data) {
    window.user = data.name;
})
function changeUsername() {
    var newUsername = prompt("Enter your new username.");
    var pass = btoa(prompt("Enter your current password"));

    $.post('/api/changeusername/', `username=${newUsername}&password=${pass}`, function(data) {
        navigator.clipboard.writeText(newUsername);
        alert("copied username to clipboard")
    });
}
changeUsername()
