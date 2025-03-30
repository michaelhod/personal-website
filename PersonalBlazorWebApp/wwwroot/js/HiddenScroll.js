// Toggle .hidden based on scroll position
function handleScroll() {
    const elements = document.getElementsByClassName("visible-element");
    const elementsToHide = document.getElementsByClassName("invisible-element");

    for (const element of elementsToHide) {
        if (window.scrollY === 0) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    }

    for (const element of elements) {
        if (window.scrollY === 0) {
            element.classList.add("hidden");
        } else {
            element.classList.remove("hidden");
        }
    }
}

window.addEventListener("scroll", handleScroll);