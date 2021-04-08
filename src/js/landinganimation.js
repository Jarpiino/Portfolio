import { gsap } from "gsap";

const hero = document.querySelector(".home-content");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector("#menu-btn");
const headline = document.querySelector(".headline");

const tl = new gsap.timeline();

tl.fromTo(hero, { height: '0%' }, { duration: 1, height: '70%', ease: 'power2' })
    .fromTo(hero, { width: '100%' }, { duration: 1.2, width: '80%', ease: 'power2' })
    .fromTo(slider, { x: '-100%' }, { duration: 1.2, x: '0%', ease: 'power2' }, '-=1.2')
    .fromTo(logo, { opacity: 0, x: 30 }, { duration: 0.5, opacity: 1, x: 0 }, '-=0.5')
    .fromTo(hamburger, { opacity: 0, x: 30 }, { duration: 0.5, opacity: 1, x: 0 }, '-=0.7')
    .fromTo(headline, { opacity: 0 }, { duration: 0.5, opacity: 1 }, '-=0.5');

export {hero, slider, logo, hamburger, headline, tl};