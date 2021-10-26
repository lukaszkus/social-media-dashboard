const switchTheme = document.querySelector('input[name=theme]');
const themeMode = document.querySelector('.theme__mode');

let modeTransition = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition')
  }, 1000)
}

switchTheme.addEventListener('change', function(){
  if (this.checked) {
    modeTransition();
    document.documentElement.setAttribute('data-theme', 'dark');
    themeMode.innerHTML = "Light Mode";

  } else {
    modeTransition();
    document.documentElement.setAttribute('data-theme', 'light');
    themeMode.innerHTML = "Dark Mode";
  }
});