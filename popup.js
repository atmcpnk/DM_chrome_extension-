const button = document.querySelector('button')
const circle = document.querySelector('.circle')

let buttonOn = false;

button.addEventListener('click', () => {
    if(!buttonON){
        buttonOn = true;
        circle.style.animation = "moveIndicatorRight 1s forwards"
        button.style.animation = "backgroundChange 1s forwards"
    }else{
        buttonOn = false;
        circle.style.animation = "moveIndicatorLeft 1s forwards"
        button.style.animation = "backgroundChange 1s forwards"
    }
})