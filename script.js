/* =========================================================
FILE: script.js
========================================================= */

// HAMBURGER MENU

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if(hamburger){

  hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

  });

}

// TYPING EFFECT

const typingText = document.querySelector(".typing-text");

const words = [

  "Science and Tech Lover",
  "Introvert",
  "Learner",
  "A Website owner",
  "Passionate Boy"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

  if(!typingText) return;

  const currentWord = words[wordIndex];

  if(!deleting){

    typingText.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if(charIndex === currentWord.length){

      deleting = true;

      setTimeout(typeEffect, 1500);

      return;

    }

  }

  else{

    typingText.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if(charIndex === 0){

      deleting = false;

      wordIndex++;

      if(wordIndex === words.length){

        wordIndex = 0;

      }

    }

  }

  setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// CURSOR EFFECT

const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", e => {

  if(cursor){

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

  }

  if(blur){

    blur.style.left = e.clientX + "px";
    blur.style.top = e.clientY + "px";

  }

});

// SCROLL REVEAL

const revealElements = document.querySelectorAll(
  ".glass-card, .project-card, .about-box, .contact-box"
);

function revealOnScroll(){

  revealElements.forEach(el => {

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      el.style.opacity = "1";
      el.style.transform = "translateY(0)";

    }

  });

}

revealElements.forEach(el => {

  el.style.opacity = "0";
  el.style.transform = "translateY(60px)";
  el.style.transition = "all 1s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// PARALLAX EFFECT

window.addEventListener("scroll", () => {

  const scrolled = window.pageYOffset;

  const bg = document.querySelector(".animated-bg");

  if(bg){

    bg.style.transform =
      `translateY(${scrolled * 0.2}px)`;

  }

});
