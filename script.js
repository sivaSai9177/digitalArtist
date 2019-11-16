var leftContainer = document.querySelector('.left');
var rightContainer = document.querySelector('.right');
var placeholder = document.querySelectorAll('.dist');
var delayContainer = document.querySelectorAll('.anime2');
var place = document.querySelectorAll('.place');
var menu = document.querySelector('.menu');
var ripple = document.querySelector('.ripple');






var menuWrapper = document.querySelector('.menu-wrapper');
var hamburgerMenu = document.querySelector('.hamburger-menu');
var animationPage = document.querySelector('.animation-page');

menu.addEventListener('click', function () {
    ripple.classList.add('overlay');
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
    setTimeout(() => {
        ripple.classList.remove('overlay');
    },500)
});


document.body.addEventListener('wheel', (event) => {
    var wheel = document.querySelector('.wheel-master');
    if (event.deltaY > 1) {
        console.log(event.deltaY);
        wheel.style.top = 0 +'%';
    } else {
        console.log(event.deltaY);
        wheel.style.top = 100 + '%';
    }
});


