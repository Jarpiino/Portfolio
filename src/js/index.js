import '../styles/main.scss';
import { gsap } from "gsap";

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

const hero = document.querySelector(".home-content");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector("#menu-btn");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(hero, {height:'0%'},{duration: 1, height:'70%', ease: Power2.easeInOut})
.fromTo(hero, {width: '100%'}, {duration: 1.2, width: '80%', ease: Power2.easeInOut})
.fromTo(slider, {x: '-100%'}, {duration: 1.2, x: '0%', ease: Power2.easeInOut}, '-=1.2')
.fromTo(logo, {opacity: 0, x:30}, {duration: 0.5, opacity: 1, x:0}, '-=0.5')
.fromTo(hamburger, {opacity: 0, x:30}, {duration: 0.5, opacity: 1, x:0}, '-=0.7')
.fromTo(headline, {opacity: 0}, {duration: 0.5, opacity: 1}, '-=0.5');