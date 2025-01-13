function parallax() {
    var s = document.getElementById("floater");
    var yPos = Math.round(0 - window.scrollY/1.2);
    if (window.innerWidth > 350) {
        s.style.top = 0 - yPos + "px";
    }
}

window.addEventListener("scroll", function () {
    parallax();
});