import { gsap } from "gsap";

var Mobile = (window.innerWidth < 768)

const hero = document.querySelector(".home-content");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector("#menu-btn");
const headline = document.querySelector(".headline");

const tl = new gsap.timeline();

tl.fromTo(hero, { height: '0%' }, { duration: 1, height: '70%', ease: 'power2' })
    .fromTo(hero, { width: '100%' }, { duration: 1.2, width: '80%', ease: 'power2' })
    .fromTo(slider, { x: '-100%' }, { duration: 1.2, x: '0%', ease: 'power2' }, '-=1.2')
    .from(logo, { opacity: 0, duration: 0.5}, '-=0.5')
    .from(hamburger, { opacity: 0, duration: 0.5}, '-=0.7')
    .from(headline, { opacity: 0, duration: 0.5}, '-=0.5');

export {hero, slider, logo, hamburger, headline, tl};