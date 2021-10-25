const switchTheme = document.querySelector('input[name=theme]');

switchTheme.addEventListener('change', function(){
  if(this.checked){
    document.documentElement.setAttribute('data-theme', 'dark');
  }else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});