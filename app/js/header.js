let eHeader = document.querySelector('.js-header');
document.querySelector('.js-open-menu').addEventListener('click', function(){
  this.classList.toggle('is-open');
  eHeader.classList.toggle('is-open');
}, false);