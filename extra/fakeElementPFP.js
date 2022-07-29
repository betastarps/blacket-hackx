if (userData.perm > 4) {
  alert('Yay, you have the permissions level to run this!');
  async function elementToFile(e) {
    var out = await $.getJSON(
      "https://betastar.org/api/elements"
    );

    var imageurl = "https://betastar.org/" + out[e].imageURL;

    var blob = await fetch(imageurl).then(res => res.blob());
    return new File(
      [blob],
      "custom.png", {
        type: "image/png"
      }
    )
  }

  function customAvatar(image) {
    var imageToUpload = new FormData();
    imageToUpload.append('file', image);
    $.ajax({
      url: 'https://betastar.org/api/customavatar/',
      data: imageToUpload,
      processData: false,
      contentType: false,
      type: 'POST',
      success: function(data) {
        if (data === 'SUCCESS') {
          alert("element changed succesfully. please reactivate the tool.");
          location.reload()
        }
      }
    })
  }
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'e' && e.ctrlKey) {
      e.preventDefault();
      var element = prompt("element or 'cancel'");

      if (!Object.keys(elementList).includes(element) && element !== "cancel") {
        alert("that is not a real element. please try again.")
      }
      if (element === "cancel") {
        return
      }

      elementToFile(element).then(f => {
        console.log("retrieved file")
        customAvatar(f)
      })
    }
  });
} else {
  alert('Oops! This is for those with a role you don\'t have. Buy Fabled in the Store to unlock this feature!\n\nRequired Perm Level: 5+\nCurrent Perm Level: ' + userData.perm);
}
