
document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementsByClassName('book')
    if (root[0] !== undefined) {
        root[0].classList.toggle('with-summary', false)
    }
    const header = document.getElementsByClassName('book-header')[0]
    if (header !== undefined) {
        header.style.display = 'none'
    }

});
