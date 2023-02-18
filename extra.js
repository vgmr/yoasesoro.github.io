
function manipolateUi() {
    const root = document.getElementsByClassName('book')
    if (root[0] !== undefined) {
        root[0].classList.toggle('with-summary', false)
    }
    const header = document.getElementsByClassName('book-header')[0]
    if (header !== undefined) {
        header.style.display = 'none'
    }
}


document.addEventListener("DOMContentLoaded", function () {
    manipolateUi()
});

// Workaround if listner does not work.

setTimeout(() => {
    manipolateUi()
}, 300);

setTimeout(() => {
    manipolateUi()
}, 1000);
