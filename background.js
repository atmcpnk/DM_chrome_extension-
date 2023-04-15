// background.js

// Listening for the browser action click event
chrome.action.onClicked.addListener((tab) => {
    console.log('Browser action clicked:', tab);
  
    // Inject the content script when the browser action is clicked
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['contentScript.js'],
    });
  });
  