// Toggle .hidden based on scroll position
function handleScroll() {
    const elements = document.getElementsByClassName("visible-element");
    if (elements.length === 0) return;

    for (const element of elements) {
        if (window.scrollY === 0) {
            element.classList.add("hidden");
        } else {
            element.classList.remove("hidden");
        }
    }
}

window.addEventListener("scroll", handleScroll);