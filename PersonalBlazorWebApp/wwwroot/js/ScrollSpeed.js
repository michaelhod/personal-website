﻿function parallax() {
    var s = document.getElementById("floater");
    var yPos = Math.round(0 - window.scrollY/1.1);
    if (window.innerWidth > 550) {
        s.style.top = 0 - yPos + "px";
    }
}

window.addEventListener("scroll", function () {
    parallax();
}, { passive: true });