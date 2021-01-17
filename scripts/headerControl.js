let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos >= 200 ){
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("#navbar").style.top = "0";
        } else {
            document.querySelector("#navbar").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
    } else {
        document.querySelector("#navbar").style.top = "-50px";
    }
}