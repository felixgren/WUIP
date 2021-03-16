"use strict";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function reportWindowSize() {
  console.log(window.innerHeight);
  console.log(window.innerWidth);
}

window.addEventListener('resize', reportWindowSize);

const height = window.innerHeight;
const width = window.innerWidth;

const fadeInLeft = (width/width)-width;
const fadeOutToLeft = width;
const fadeInRight = (width/width)+width;
const fadeInBottom = (height/height)+height;
const image = document.querySelector(".image");
const textBehindCloud = gsap.utils.toArray(".cloudText");

gsap.registerPlugin(TextPlugin, ScrollToPlugin, ScrollTrigger);

/* GET ALL CLASSES THAT ARE NEEDED */
const blackOverlay = document.querySelector(".blackImageCover");
const leftCloud = document.querySelector("#Cloud_left_1_");
const rightCloud = document.querySelector("#Cloud_right_1_");

const sun = document.querySelector("#Sun_1_");
const sky = document.querySelector("#Sky");
const body = document.querySelector("body");
const tent = document.querySelector("#Tent_2_");
const sign = document.querySelector("#Sign-name");
const page = document.querySelector(".textHier");

const queryString = window.location.search;
//http://localhost:1337/?name=Daniel&email=daniel.borgstrom@gmail.com&phone=0703473880
const urlParams = new URLSearchParams(queryString);

const guestName = urlParams.get("name") === null ? 'Guest' : urlParams.get("name");
const email = urlParams.get("email");
const phone = urlParams.get("phone");

document.querySelector(".name").value = guestName;
document.querySelector(".email").value = email;
document.querySelector(".phone").value = phone;

let hiText = [
  "Hi",
  "Hola",
  "Hello",
  "Hej",
  "Hei",
  "Ni Hao",
  "Moi",
  "Aloha",
  "Privet",
  "Ciao",
  "Halo"
];


setInterval(function () {
  let rand = Math.floor(Math.random() * hiText.length);
  document.querySelector(
    ".sign-text"
  ).textContent = `${hiText[rand]} ${guestName}`;
}, 2000);

const tree1_1 = document.querySelector("#tree1_1_");
const tree2_1 = document.querySelector("#tree2_1_");
const tree3_1 = document.querySelector("#tree3_1_");
const tree4_1 = document.querySelector("#tree4_1_");
const tree5_1 = document.querySelector("#tree5_1_");
const TreeGreen1_1 = document.querySelector("#Tree-green1_1_");
const TreeGreen2_1 = document.querySelector("#Tree-green2_1_");
const contactForm = document.querySelector(".contactForm");
const contactFormEntries = gsap.utils.toArray(".contactForm input,textarea");
const bookCompleted = document.querySelector(".bookCompleted");
const submitForm = document.querySelector(".BookMe");


submitForm.addEventListener('click', () => {
    gsap.to(contactFormEntries, {
      duration: 0.2,
      x: -`${width}`,
      opacity: 0,
      stagger: 0.2,
      onComplete: () => {
        contactForm.innerHTML = `
        <div class="w4rAnimated_checkmark bookCompleted">
        <svg version="1.1" class="svgBookMe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
        <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
        </svg>
        <p style="margin: 25px 25px; font-family: NixieOne-Regular;">Tack för din bokning! Du kommer inom kort få mer information via mail.</p>
        </div>
        `
      }
    })
});

const longText = document.querySelector("#longText");

gsap
  .timeline()
  .from(tree1_1, {
    duration: 0.2,
    y: 160,
    rotation: -90,
    transformOrigin: "center bottom",
  })
  .from(tree4_1, {
    duration: 0.2,
    y: 0,
    rotation: 90,
    transformOrigin: "center bottom",
  })
  .from(tree3_1, {
    duration: 0.2,
    y: 160,
    rotation: -90,
    transformOrigin: "center bottom",
  })
  .from(tree5_1, {
    duration: 0.2,
    y: 0,
    rotation: 90,
    transformOrigin: "center bottom",
  })
  .from(tree2_1, {
    duration: 0.2,
    y: 160,
    rotation: -90,
    transformOrigin: "center bottom",
  })
  
  .from(leftCloud, { x: fadeInLeft, duration: 0.8 })
  .from(rightCloud, { x: fadeInRight, duration: 0.8 }, "<")
  .to(leftCloud, {
    immediateRender: false,
    overwrite: "auto",
    scrollTrigger: {
      trigger: "body",
      start: "top -350px",
      end: "top -2000px",
      scrub: true,
    },
    x: width+350
  })
  .to(rightCloud, {
    immediateRender: false,
    overwrite: "auto",
    scrollTrigger: {
      trigger: "body",
      start: "top -350px",
      end: "top -2000px",
      scrub: true,
    },
    x: -width-350
  })
  .from(
    sign,
    {
      duration: 0.8,
      rotation: 180,
      transformOrigin: "center bottom",
      ease: "bounce.out",
    },
    "+=0.5"
  );

gsap.to(sun, {
  scrollTrigger: {
    trigger: "body",
    start: "+=2000",
    end: "+=3400",
    scrub: 1,
  },
  x: width+100
});

gsap.to(sun, {
  scrollTrigger: {
    trigger: "body",
    start: "+=2200",
    end: "+=3400",
    scrub: 1,
  },
  y: height-100,
});



gsap.to(blackOverlay, {
  scrollTrigger: {
    trigger: "body",
    start: "top -2000px",
    end: "top -3000px",
    scrub: 1,
  },
  onComplete: () => {
    gsap.fromTo(
      contactForm,
      { x: -500 },
      {
        opacity: 1,
        x: 0,
        onComplete: () => {
          textBehindCloud.forEach((element) => {
            gsap.to(element, {
              
            });
          });
        },
      }
    );
  },
  onReverseComplete: () => {
    gsap.to(contactForm, {
      opacity: 0,
      duration: 0,
    });
  },
  opacity: 0.4,
});

const welcomeText = document.querySelector("#longText");
gsap.to(welcomeText, {
  scrollTrigger: {
    trigger: "body",
    start: "top -1000px",
    end: "top -1600px",
    scrub: 1,
  },
  ease: "none",
  y: -(height*0.50),
});




textBehindCloud.forEach((element) => {

  gsap.to(element, {
    scrollTrigger: {
      trigger: "body",
      start: "top -350px",
      end: "top -1800px",
      scrub: 1,
    },
   
    ease: "bounce",
    opacity: 1,

  });
});