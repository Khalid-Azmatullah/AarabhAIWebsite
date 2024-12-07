window.onload = function() {
  const Params = new URLSearchParams(window.location.search);
  const Name = Params.get('user');

  document.getElementById('nameArea').textContent = Name;
  const NameFadeIn = document.getElementById('nameArea');
  NameFadeIn.classList.remove('welcomeBox')
  setTimeout(() => {
    NameFadeIn.classList.add('welcomeBox');
  }, 2000);
};