const switchTheme = document.querySelector('input[name=theme]');
const themeMode = document.querySelector('.theme__mode');

switchTheme.addEventListener('change', function(){
  if(this.checked){
    document.documentElement.setAttribute('data-theme', 'dark');
    themeMode.innerHTML = "Light Mode";

  }else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeMode.innerHTML = "Dark Mode";
  }
});