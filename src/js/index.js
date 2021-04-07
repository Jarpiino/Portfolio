import '../styles/main.scss'

const menuBtn = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#navmenu');
const navLink = document.querySelectorAll('.nav-link');
const navItem4 = document.querySelector('#nav-item4');
const navItem3 = document.querySelector('#nav-item3');
const navItem2 = document.querySelector('#nav-item2');
const navItem1 = document.querySelector('#nav-item1');
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navMenu.classList.toggle("open");
    navItem4.classList.toggle("open");
    navItem3.classList.toggle("open");
    navItem2.classList.toggle("open");
    navItem1.classList.toggle("open");
});
navLink.forEach(navLink => navLink.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navMenu.classList.toggle("open");
    navItem4.classList.toggle("open");
    navItem3.classList.toggle("open");
    navItem2.classList.toggle("open");
    navItem1.classList.toggle("open");
}));