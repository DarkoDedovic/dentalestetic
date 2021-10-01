let fbBtn = document.querySelector("#btnGoToFBpage");
let fbLink = "https://www.facebook.com/dr.jovana.dedovic/";
fbBtn.addEventListener('click', () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        fbLink = "fb://page/328390021081244";
    }
    window.open(fbLink, '_blank');
}, false)