// contentScript.js

(function () {
    const DARK_MODE_CLASS = 'darkseid-dark-mode';
  
    const enableDarkMode = () => {
      document.documentElement.classList.add(DARK_MODE_CLASS);
    };
  
    const disableDarkMode = () => {
      document.documentElement.classList.remove(DARK_MODE_CLASS);
    };
  
    const toggleDarkMode = () => {
      if (document.documentElement.classList.contains(DARK_MODE_CLASS)) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    };
  
    toggleDarkMode();
  })();
  