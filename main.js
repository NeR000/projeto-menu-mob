function openMenu() {
    const menuMob = document.querySelector('.menu-mob');
    const menuList = document.querySelector('.menu-list');

    menuMob.addEventListener('click', () => {
        menuList.classList.toggle('menu-open');
        menuMob.classList.toggle('btn-menu-animation');
    });
}

openMenu();