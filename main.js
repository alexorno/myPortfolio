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
  // welcome text load
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
// micro intractions

function xCentCoorMouse(){
return ((event.clientX) - (window.innerWidth / 2))
};

function yCentCoorMouse(){
  return ((event.clientY) - (window.innerHeight / 2))
};

function welcomeTextMoveMain(){
  function welcomeTextMove(){
    welcomeText.style.transform = 
  'translateX(' + (-50 - (xCentCoorMouse() / 100)) + '%' + ')' +
  'translateY(' + (-50 - (yCentCoorMouse() / 75)) + '%' + ')'; 
  }

setInterval(() => {
document.removeEventListener('mousemove',welcomeTextMove)
},14)
setInterval(() => {
  document.addEventListener('mousemove',welcomeTextMove)
  },60)
};
requestAnimationFrame(welcomeTextMoveMain)

const aboutMeSection = document.querySelector('.aboutme')
const aboutMeH1 = document.querySelector('.aboutme h1')
const aboutMeP = document.querySelector('.aboutme p')
function animateAboutMe(){
aboutMeSection.addEventListener('mouseover', () => {
  aboutMeH1.style.transform = 
  'translateX(' + (xCentCoorMouse() / -250) + '%' + ')' +
  'translateY(' + (yCentCoorMouse() / -200) + '%' + ')';

  aboutMeP.style.transform = 
  'translateX(' + (xCentCoorMouse() / -175) + '%' + ')' +
  'translateY(' + (yCentCoorMouse() / -200) + '%' + ')';
})
requestAnimationFrame(animateAboutMe)
};
requestAnimationFrame(animateAboutMe);

// intro animation
const tl = gsap.timeline({defaults: {ease:"power2.inout"}});

tl.from('nav', {y:'-100%',opacity:'0.2', duration: 1,stagger:1 });
tl.from('.welcome-page h1', {x:'-100px',opacity:'0.2', duration: 0.3,stagger:1 }, '-=0.75');

tl.fromTo('.scrolldown-button', {y:"0", opacity:'0.8'}, {y:'25',opacity:'1', duration:1, repeat:-1, yoyo:true}, '-=0.75')
// scrollTrigger
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ toggleActions: "play complete reverse reset", start: "0% bottom", end: "0% center" });


gsap.timeline({ scrollTrigger: { 
  trigger: ".about-left h1", 
  toggleActions: " play pause resume reset",
  } })
.to('.about-right', {
  keyframes: {
    '0%': {x:'-500',y:'-1000', opacity:'0', 'z-index':'-10', },
    '0.1%': {'z-index':'0', },
    '25%': {x:'-900',y:'-600', opacity:'0.5'},
    '50%': {x:'200',y:'-100', },
    '100%': {x:'0',y:'0',opacity:'1', },
    
  },
  duration: 2,
});

gsap.timeline({scrollTrigger:{trigger:'.about-left h1', scrub:1}})
.from('.about-left h1', {
  x:'-300px',
  rotateY:'180deg',
  opacity:'0'
});
gsap.timeline({scrollTrigger:{trigger:'.about-left p', scrub:1, end:'-100% center'}})
.from('.about-left p', {
  x:'-270px',
  rotateY:'160deg',
  opacity:'0'
});
gsap.timeline({scrollTrigger:{trigger:'.skills-inner .title', scrub:1, end:'top center'}})
.from('.skills-inner .title', {
  y:'-100px',
  rotateX:'160deg',
  filter:'blur(7px)',
  opacity:'0'
});
const eachSkillAnimation = gsap.utils.toArray('.skills-list ul li');
eachSkillAnimation.forEach(skill => {
  gsap.from(skill, { 
    y:'-100px',
    rotateX:'90deg',
    filter:'blur(2px)',
    opacity:'0.3',
    scrollTrigger: {
      trigger: skill,
      start:'top bottom',
      end: "-100px center",
      scrub:-1,
    }
  })
});
gsap.timeline({scrollTrigger:{trigger:'.works-inner', scrub:1, end:'40% center'}})
.from('.works .title h1,.works-slider', {
  y:'-50%',
  rotateX:'90deg',
  filter:'blur(7px)',
  opacity:'0.5'
});
gsap.timeline({scrollTrigger:{trigger:'.contact-inner .title', scrub:1, end:'40% center'}})
.from('.contact-inner .title', {
  rotateX:'90deg',
  filter:'blur(7px)',
  opacity:'0.5'
});

gsap.timeline({scrollTrigger:{trigger:'.contact-inner .form input:nth-child(1)', scrub:1, end:'250% bottom'}})
.from('.contact-inner .form input:nth-child(1)', {
  transform:'translate(-100%)',
  filter:'blur(7px)',
  opacity:'0'
});
gsap.timeline({scrollTrigger:{trigger:'.contact-inner .form input:nth-child(2)', scrub:1, end:'250% bottom'}})
.from('.contact-inner .form input:nth-child(2)', {
  transform:'translate(100%)',
  filter:'blur(7px)',
  opacity:'0'
});

gsap.timeline({scrollTrigger:{trigger:'.contact-inner .form textarea', scrub:1, end:'100% bottom'}})
.from('.contact-inner .form textarea', {
  y:'100%',
  filter:'blur(7px)',
  opacity:'0'
});

gsap.timeline({scrollTrigger:{trigger:'.about-left', scrub:1, end:'-10% center'}})
.to('.alienicon', {
  transform:'translateX(2440px)'
});

gsap.timeline({scrollTrigger:{trigger:'.works-inner', end:'40% center',once:'true'}})
.to('.meteor', {
  x:'3000px',
  y:'3000px',
  duration:1.5,
});
gsap.timeline({scrollTrigger:{trigger:'.skills-list ul li:nth-child(5)', end:'100% center', once:'true'}})
.to('.flyingufo', {
  x:'3000px',
  duration:2,
  ease:'power3.inout'
});
gsap.timeline({scrollTrigger:{trigger:'.contact-inner .form input:nth-child(1)', end:'100% center', once:''}})
.to('.planetadditional', {
  x:'1040px',
  y:'2940px',
  rotate:'360deg',
  duration:5,
});





const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// navigation
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
  const burgerMenu = document.querySelector('.burger-menu')
  const checkboxMenu = document.getElementById('menu_checkbox')
  checkboxMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    body.classList.toggle('noscroll')
  });

});