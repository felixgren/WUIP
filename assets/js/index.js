"use strict";

const { forEach } = require("core-js/fn/array");
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

/* GET ALL CLASSES THAT ARE NEEDED */
const blackOverlay = document.querySelector(".blackImageCover");
const leftCloud = document.querySelector("#Cloud_left_1_");
const rightCloud = document.querySelector("#Cloud_right_1_");

const sun = document.querySelector("#Sun_1_ circle");
const sky = document.querySelector("#Sky");
const body = document.querySelector("body");


gsap.to(leftCloud, {
    scrollTrigger: {
        trigger: "body",
        start: "top -350px",
        end: "top -1000px",
        scrub: 1,
    },
    x: 500, 
    ease: "none",
});

gsap.to(rightCloud, {
    scrollTrigger: {
        trigger: "body",
        start: "top -350px",
        end: "top -1000px",
        scrub: 1,
    },
    x: -500, 
    ease: "none",
});

gsap.to(sun, {
    scrollTrigger: {
        trigger: "body",
        start: "top -1400px",
        end: "top -2800px",
        scrub: 1,
    },
    x: 500,
    y: 400, 
    ease: "none",
});

gsap.to(blackOverlay, {
    scrollTrigger: {
        trigger: "body",
        start: "top -2400px",
        end: "top -3000px",
        scrub: 1,
    },
    ease: "none",
    opacity: 0.7
});



function createElement(args){
    let svg = document.querySelector(args.targetDiv);
    let element = document.createElementNS("http://www.w3.org/2000/svg", args.type);
    let text = document.createTextNode(args.text);
    element.setAttribute("x", args.x);
    element.setAttribute("y", args.y);
    element.setAttribute("fill", args.fillColor);
    element.setAttribute("font-family", args.fontFamily);
    element.setAttribute("font-size", args.fontSize);
    element.setAttribute("opacity", args.opacity);
    element.setAttribute("class", args.class);
    element.setAttribute("text-anchor", "middle");
    element.setAttribute("dominant-baseline", "middle");
    element.appendChild(text);
    svg.prepend(element);
    }

    const elementsToCreate = [
        {
            'targetDiv' : '#Clouds',
            'type' : 'text',
            'text' : 'GLAMPA',
            'x' : '50%',
            'y' : '310',
            'fillColor' : 'black',
            'fontFamily' : 'NixieOne',
            'fontSize' : '30',
            'opacity' : '0',
            'class' : 'cloudText'
        },
        {
            'targetDiv' : '#Clouds',
            'type' : 'text',
            'text' : 'MED HAPPIE CAMP',
            'x' : '50%',
            'y' : '340',
            'fillColor' : 'black',
            'fontFamily' : 'NixieOne',
            'fontSize' : '20',
            'opacity' : '0',
            'class' : 'cloudText'
        },
        {
            'targetDiv' : '#Clouds',
            'type' : 'text',
            'text' : '2-4 Juli',
            'x' : '50%',
            'y' : '370',
            'fillColor' : 'black',
            'fontFamily' : 'NixieOne',
            'fontSize' : '30',
            'opacity' : '0',
            'class' : 'cloudText'
        }
    ]

    for(let element in elementsToCreate){
        createElement(elementsToCreate[element]);
    }

    const textBehindCloud = document.querySelectorAll("#Clouds text");

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
            
     
            
        