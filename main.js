"use strict"

const body = document.querySelector('body');
const loadingScreen = document.querySelector('.loadingscreen')
let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    body.classList.remove('noscroll');
  loadingScreen.style.display = 'none';
  }
}, 100);


  

document.addEventListener('DOMContentLoaded', () => {
const welcomeText = document.querySelector('.welcome-page h1');
const stringWelcomeText = welcomeText.textContent;
const splitWelcomeText = stringWelcomeText.split('');

welcomeText.textContent = "";

for(let i=0; i < splitWelcomeText.length; i++){
  welcomeText.innerHTML += '<span>' + splitWelcomeText[i] + '</span>';
}

let charWelcomeText = 0;
let timerWelcomeText = setInterval(welcomeTextFunc,50)

function welcomeTextFunc(){
  const spanWelcomeText = welcomeText.querySelectorAll('span')[charWelcomeText];
  spanWelcomeText.classList.add('welcomePageLetter');

  ++charWelcomeText;

  if(charWelcomeText === splitWelcomeText.length){
    endTimer();
    return;
  };
};

function endTimer(){
  clearInterval(timerWelcomeText);
  timerWelcomeText = null;
};


const tl = gsap.timeline({defaults: {ease:"power2.inout"}});
tl.from('nav', {y:'-100%',opacity:'0.2', duration: 1,stagger:1 });



  const btnDown = document.querySelector('.scrolldown-button');
  const aboutLeft = document.querySelector('.about-left');
  btnDown.addEventListener('click', () => {
    aboutLeft.scrollIntoView({
      behavior:"smooth",
      block:"center"
    })
  });

  const homeBtn = document.getElementById('homeBtn');
  const aboutBtn = document.getElementById('aboutBtn');
  const skillsBtn = document.getElementById('skillsBtn');
  const worksBtn = document.getElementById('worksBtn');
  const contactBtn = document.getElementById('contactBtn');
  const home = document.querySelector('.welcome-page h1');
  const skills = document.querySelector('.skills-inner');
  const works = document.querySelector('.works-inner');
  const contact = document.querySelector('.contactform');

  homeBtn.addEventListener('click', () => {
    home.scrollIntoView({
      behavior:"smooth",
      block:"center"
    })
  });

  aboutBtn.addEventListener('click',() => {
    aboutLeft.scrollIntoView({
      behavior:"smooth",
      block:"center"
    })
  });

  skillsBtn.addEventListener('click',() => {
    skills.scrollIntoView({
      behavior:"smooth",
      block:"center"
    })
  });

  worksBtn.addEventListener('click',() => {
    works.scrollIntoView({
      behavior:"smooth",
      block:"center"
    })
  });

  contactBtn.addEventListener('click',() => {
    contact.scrollIntoView({
      behavior:"smooth",
      block:"center"
    })
  });


});