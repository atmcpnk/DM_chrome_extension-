if (document.querySelector('.background')) {
    const button = document.querySelector('.button')
    const circle = document.querySelector('.circle')

    let buttonOn = false;

    button.addEventListener('click', () => {
        if (!buttonOn) {
            buttonOn = true;
            circle.style.animation = "moveIndicatorRight 1s forwards"
            button.style.animation = "backgroundChange 1s forwards"
            chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["appOn.js"]
                });
            });            
        } else {
            buttonOn = false;
            circle.style.animation = "moveIndicatorLeft 1s forwards"
            button.style.animation = "backgroundChange 1s forwards"
            chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["appOff.js"]
                });
            });
        }
    })
}