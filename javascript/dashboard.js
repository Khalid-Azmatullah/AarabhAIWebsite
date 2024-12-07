window.onload = function() {
  const Params = new URLSearchParams(window.location.search);
  const Name = Params.get('user');

  const NameFadeIn = document.getElementById('nameArea');
  const EarlyViewMessage = document.getElementById('earlyView');
  EarlyViewMessage.style.opacity=0;
  NameFadeIn.style.opacity =0;
  document.getElementById('nameArea').textContent = Name;
  NameFadeIn.classList.remove('welcomeBox')
  EarlyViewMessage.classList.remove('shine')
  setTimeout(() => {
    NameFadeIn.style.opacity=1
    NameFadeIn.classList.add('welcomeBox'); 
  }, 2000);
  const FirstFadeOut = document.getElementById('firstView')
  setTimeout(() => {
    EarlyViewMessage.style.opacity=1
    EarlyViewMessage.classList.add('shine')
    FirstFadeOut.classList.add('fadeOutUp')
  }, 4500);
  EarlyViewMessage.classList.remove('shine')
  EarlyViewMessage.classList.add('startShine')
};