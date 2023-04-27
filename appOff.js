(function () { //IIFE (Immediately Invoked Function Expression)
    document.querySelector('html').style.filter = 'invert(0) hue-rotate(0deg)'

    let elements = document.querySelectorAll('img, video, picture');

    elements.forEach((element) => {
        element.style.filter = 'invert(0) hue-rotate(0deg)'
    });
})();