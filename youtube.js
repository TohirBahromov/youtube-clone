let menuIcon = document.querySelector('.switch-icon'),
  moreMenu = document.querySelector('.more-menu'),
  lessMenu = document.querySelector('.less-menu');

menuIcon.addEventListener('click', ()=>{
  moreMenu.classList.toggle("d-none");
  lessMenu.classList.toggle('d-block');
});

let menuSection = document.querySelector('.menu-section'),
  mainContents = document.querySelector('.main-contents-videos'),
  videoHeading = document.querySelector('.video-heading'),
  resHeader = document.querySelector('.res-header');

  window.addEventListener('scroll', ()=> {
    if(window.scrollY >= 150){
      resHeader.style.transition = '1s';
      resHeader.style.top = '-390px';
    }
    else if(window.scrollY <= 150){
      resHeader.style.transition = '.2s';
      resHeader.style.top = '0px';
    }
  })

