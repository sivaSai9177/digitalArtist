var leftContainer = document.querySelector('.left');
var rightContainer = document.querySelector('.right');
var placeholder = document.querySelectorAll('.dist');
var delayContainer = document.querySelectorAll('.anime2');
var place = document.querySelectorAll('.place');
var menu = document.querySelector('.menu');
var overlay = document.querySelector('.overlay');






var menuWrapper = document.querySelector('.menu-wrapper');
var hamburgerMenu = document.querySelector('.hamburger-menu');
var animationPage = document.querySelector('.animation-page');

menu.addEventListener('click', function () {
    overlay.classList.toggle('animation');
    console.log(overlay);
    hamburgerMenu.classList.toggle('animate');
    animationPage.classList.toggle('reverse');
    leftContainer.classList.toggle('anime');
    rightContainer.classList.toggle('anime');

    placeholder.forEach(holder => {
        holder.classList.toggle('anime2');
    });
    if (animationPage.classList.contains('reverse')) {
        placeholder.forEach(holder => {
            holder.style.transition = 'opacity 0.3 s 0.2 s ease';
        })
    }
});

