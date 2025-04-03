// 1) Load the contentBlockContainer and all the ContentBlocks
function observeElements() {
    console.log(2);
    let blocks = document.querySelectorAll('.flex-container');
    createObserver(blocks);
}

//2) Create the observer
function createObserver(blocks) {
    console.log(3);
    let observer;

    let options = {
        root: document.querySelector('.horizontal-scroll'),
        rootMargin: "0px",
        threshold: 0.1,
    };

    observer = new IntersectionObserver(handleIntersect, options);
    for (const block of blocks) {
        observer.observe(block);
    }
}

// 3) Set up the IntersectionObserver callback which changes the height of .three-dimensional
function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let currentBlock = entry.target;
            let blockHeight = currentBlock.offsetHeight;
            //console.log(currentBlock.innerHTML);
            console.log(blockHeight);
            let contentContainer = document.querySelector('.horizontal-scroll');
            contentContainer.style.height = blockHeight + 'px';
        }
    });
}