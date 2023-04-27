(function () {
    document.querySelector('html').style.filter = 'invert(1) hue-rotate(180deg)'

    let elements = document.querySelectorAll('img, video, picture');

    elements.forEach((element) => {
        element.style.filter = 'invert(1) hue-rotate(180deg)'
    });
})();