document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.menu-toggle span');

    menuToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('open');
        menuToggle.classList.toggle('open');

        if (mobileNav.classList.contains('open')) {
            menuIcon.textContent = '✖'; 
        } else {
            menuIcon.textContent = '☰'; 
        }
    });
});
