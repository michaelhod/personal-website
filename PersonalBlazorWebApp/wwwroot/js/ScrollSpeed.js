function parallax() {
    var s = document.getElementById("floater");
    var yPos = Math.round(window.scrollY/1.1);
    if (window.innerWidth > 550) {
        s.style.top = yPos + "px";
    }
}

window.addEventListener("scroll", function () {
    parallax();
}, { passive: true });