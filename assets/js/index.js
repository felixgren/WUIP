"use strict";


const { forEach } = require("core-js/fn/array");

import { gsap } from "gsap.mjs";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(TextPlugin, ScrollToPlugin, ScrollTrigger);

/* GET ALL CLASSES THAT ARE NEEDED */
const blackOverlay = document.querySelector(".blackImageCover");
const leftCloud = document.querySelector("#Cloud_left_1_");
const rightCloud = document.querySelector("#Cloud_right_1_");

const sun = document.querySelector("#Sun_1_ circle");
const sky = document.querySelector("#Sky");
const body = document.querySelector("body");
const tent = document.querySelector("#Tent_2_");
const sign = document.querySelector("#Sign-name");
const page = document.querySelector(".textHier");

const queryString = window.location.search;
//http://localhost:1234/?name=Daniel&email=daniel.borgstrom@%C2%A0gmail.com&phone=0703473880
const urlParams = new URLSearchParams(queryString);

const name = urlParams.get('name');
const email = urlParams.get('email');
const phone = urlParams.get('phone');

document.querySelector(".name").value = name;
document.querySelector(".email").value = email;
document.querySelector(".phone").value = phone;

let hiText = ['Hi', 'Hola', 'Hello', 'Hej', 'Hyālō', 'Ni Hao', 'Moi', 'Aloha', 'Privet', 'Ciao'];


function createElement(args){
    let svg = document.querySelector(args.targetDiv);
    let element = document.createElementNS("http://www.w3.org/2000/svg", args.type);
    let txt = document.createElement('div');
    element.innerHTML = `${args.text}`;
    element.setAttribute("x", args.x);
    element.setAttribute("y", args.y);
    element.setAttribute("fill", args.fillColor);
    element.setAttribute("font-family", args.fontFamily);
    element.setAttribute("font-size", args.fontSize);
    element.setAttribute("opacity", args.opacity);
    element.setAttribute("class", args.class);
    element.setAttribute("text-anchor", "middle");
    element.setAttribute("dominant-baseline", "middle");
    element.setAttribute("width", "20");

    element.appendChild(txt);
    svg.prepend(element);
}

const elementsToCreate = [
    {
        'targetDiv' : '#Clouds',
        'type' : 'text',
        'text' : 'GLAMPA',
        'x' : '50%',
        'y' : '240',
        'fillColor' : 'black',
        'fontFamily' : 'Abel',
        'fontSize' : '80',
        'opacity' : '0',
        'class' : 'cloudText'
    },
    {
        'targetDiv' : '#Clouds',
        'type' : 'text',
        'text' : 'med Happie Camp',
        'x' : '50%',
        'y' : '280',
        'fillColor' : 'black',
        'fontFamily' : 'Nixie One',
        'fontSize' : '20',
        'opacity' : '0',
        'class' : 'cloudText'
    },
    {
        'targetDiv' : '#Clouds',
        'type' : 'text',
        'text' : '2-4 juli',
        'x' : '50%',
        'y' : '320',
        'fillColor' : 'black',
        'fontFamily' : 'Nixie One',
        'fontSize' : '40',
        'opacity' : '0',
        'class' : 'cloudText'
    },
]



for(let element in elementsToCreate){
    createElement(elementsToCreate[element]);
}

const textBehindCloud = gsap.utils.toArray(".cloudText"); 

setInterval(function() {
  let rand = Math.floor(Math.random() * hiText.length);
  document.querySelector(".hello-name").textContent = `${hiText[rand]} ${name}` ;
}, 2000);

// LEFT 1,2,3,1
// RIGHT 4,5,1
const tree1_1 = document.querySelector("#tree1_1_");
const tree2_1 = document.querySelector("#tree2_1_");
const tree3_1 = document.querySelector("#tree3_1_");
const tree4_1 = document.querySelector("#tree4_1_");
const tree5_1 = document.querySelector("#tree5_1_");
const TreeGreen1_1 = document.querySelector("#Tree-green1_1_");
const TreeGreen2_1 = document.querySelector("#Tree-green2_1_");
const contactForm = document.querySelector(".contactForm");

const longText = document.querySelector("#longText");

gsap.timeline()
.from(tree1_1, {duration:0.2, y:160, rotation:-90, transformOrigin:"center bottom"})
.from(tree4_1, {duration:0.2, y:0, rotation:90, transformOrigin:"center bottom"})
.from(tree3_1, {duration:0.2, y:160, rotation:-90, transformOrigin:"center bottom"})
.from(tree5_1, {duration:0.2, y:0, rotation:90, transformOrigin:"center bottom"})
.from(tree2_1, {duration:0.2, y:160, rotation:-90, transformOrigin:"center bottom"})
// .from(TreeGreen1_1, {duration:0.2, y:160, rotation:-90, transformOrigin:"bottom left"})
// .from(TreeGreen2_1, {duration:0.2, y:160, rotation:90, transformOrigin:"bottom"})
.from(leftCloud, {x: -500, duration: 0.8})
.from(rightCloud, {x: 500, duration: 0.8}, "<")
.to(leftCloud, {  
    immediateRender: false,
    overwrite: 'auto',
    scrollTrigger: {
    trigger: 'body',
    start: "top -350px",
    end: "top -1000px",
    scrub: true,
    },
    x: 500
})
.to(rightCloud, {  
    immediateRender: false,
    overwrite: 'auto',
    scrollTrigger: {
    trigger: 'body',
    start: "top -350px",
    end: "top -1000px",
    scrub: true,
    },
    x: -500
})
.from(sign, 
    {
        duration:0.8, 
        rotation:90, 
        transformOrigin:"center bottom",
        ease: "bounce.out",
    }, "+=0.5"
)
  

gsap.to(sun, {
    scrollTrigger: {
        trigger: "body",
        start: "top -1400px",
        end: "top -2800px",
        scrub: 1,
    },
    x: 500,
    y: 600, 
    ease: "none",
});

gsap.to(blackOverlay, {
    scrollTrigger: {
        trigger: "body",
        start: "top -2000px",
        end: "top -3000px",
        scrub: 1,
    },
    onComplete: () => { 
        gsap.fromTo(contactForm, 
            {x: -500}, {
                opacity: 1, 
                x: 0,
                onComplete : () => {
                    textBehindCloud.forEach(element => {
                        gsap.to(element, {
                            fill: 'white',
                          
                        })
                        // page.append(element);
                        
                        
                        console.log(element);
                    })
                }
            }
        )
    },
    onReverseComplete:() => { 
        gsap.to(contactForm, {
            opacity: 0,
            duration: 0,
        });
    }, 
    opacity: 0.4
});

    const welcomeText = document.querySelector("#longText");
    gsap.to(welcomeText, {
        scrollTrigger: {
            trigger: "body",
            start: "top -350px",
            end: "top -800px",
            scrub: 1,
        },
        ease: "none",
        y:12
    });





    textBehindCloud.forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: "body",
                start: "top -350px",
                end: "top -800px",
                scrub: 1,
            },
            ease: "none",
            opacity: 1
        });
    });


    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
            
        
            
        