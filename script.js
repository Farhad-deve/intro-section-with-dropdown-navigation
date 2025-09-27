const menuOpener = document.getElementById('menu-opener');

const sideBar = document.getElementById('side-bar');

const sideWindow = document.getElementById('side-bar-window');

const closeX = document.querySelector('.icon-x');

const featuresMob = document.querySelector('.features-mob')

const featuresMenuMob = document.querySelector('.features-menu-mob');

const companyMob = document.querySelector('.company-mob');

const companyMenuMob = document.querySelector('.company-menu-mob');

const icon1 = document.querySelector('.icon-1-mob');

const icon2 = document.querySelector('.icon-2-mob');

menuOpener.addEventListener('click', () => {
    sideBar.style.transform = 'translate(0)';
    sideBar.style.opacity = '1';
    sideWindow.style.opacity = '1';
    sideWindow.style.pointerEvents = 'auto';
});

closeX.addEventListener('click', () => {
    sideBar.style.transform = 'translateX(100%)';
    sideBar.style.opacity = '0';
    sideWindow.style.opacity = '0';
    sideWindow.style.pointerEvents = 'none';
});

featuresMob.onclick = () => {
    featuresMenuMob.classList.toggle('open-1');
    icon1.classList.toggle('rotate-180-deg');
}

companyMob.onclick = () => {
    companyMenuMob.classList.toggle('open-2');
    icon2.classList.toggle('rotate-180-deg');
};
