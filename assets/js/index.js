"use strict";

const { forEach } = require("core-js/fn/array");

/* GET ALL CLASSES THAT ARE NEEDED */
const blackOverlay = document.querySelector(".blackImageCover");
const leftCloud = document.querySelector("#Cloud_left_1_");
const rightCloud = document.querySelector("#Cloud_right_1_");
const sun = document.querySelector("#Sun_1_ circle");
const sky = document.querySelector("#Sky");


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
  
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
            
        let lastKnownScrollPosition = 0;
        let ticking = false;
        let moveLeft = 0;
        let moveRight = 0;
        let sunY = 0;
        let sunMovement = 0;
        let blackOpacity = 0;
        const cloudTexts = document.querySelectorAll(".cloudText");
        sky.setAttribute('position', window.scrollY);
        // const cloudMvmtRelation = leftCloud.getAttribute('movement');

        function logScrollDirection() {
            let previous = window.scrollY;
            window.addEventListener('scroll', function(){
                window.scrollY > previous ? console.log('down') : console.log('up');
                previous = window.scrollY;
            });
        }
            
        function moveObject(scrollDirection){	

            // Solution to solve scroll detection problem with requestanimationframe.
            let currentPosition = sky.getAttribute('position');
            sky.setAttribute('position', window.scrollY);
            let skyPosition = sky.getAttribute('position');       

            let leftTransformAttr = 'translate(' + window.scrollY / 4 + ',0)';
            leftCloud.setAttribute('transform', leftTransformAttr); 		

            leftCloud.setAttribute('movement', window.scrollY / 4);
        
            let rightTransformAttr = 'translate(' + (0 - window.scrollY / 4) + ',0)';
            rightCloud.setAttribute('transform', rightTransformAttr);
        
            
            // 245 = Start the night.
            let sunMovementY = window.scrollY / 30;
            sunMovement = 'translate(' + sunMovementY + ', ' + window.scrollY / 50 + ')';
            sun.setAttribute('transform', sunMovement);

            for (let i = 0; i < cloudTexts.length; i++) {
                cloudTexts[i].style.opacity = window.scrollY/3000;
            }


            function checkScrollDirection(skyPosition, currentPosition, sunMovementY){
                if(skyPosition > currentPosition){ 
                    if(sunMovementY >= 245 && sunMovementY <= 348){

                    }
                }

            }
            /* Adjust opacity/night */
            // Sun goes down 235 / 7385
            // Night total at 348 / 10437
            // Difference 143 / 3052

            // 0.71 / 3052 = 0.000232;

            let stopSunAt = 7385;
            let fadingPerScrollY = 0.000232;
            if(skyPosition > currentPosition){ // console.log('Ner');
                if(sunMovementY >= 245 && sunMovementY <= 348){
                    if(blackOverlay.style.opacity <= 0.7){
                        blackOverlay.style.opacity = fadingPerScrollY*(window.scrollY-stopSunAt);
                    }else{
                        blackOverlay.style.opacity = 0.71;
                    }                  
                }
            }else{ // console.log('Upp');

                if(sunMovementY >= 245 && sunMovementY <= 348 && blackOverlay.style.opacity >= 0){
                    blackOverlay.style.opacity = fadingPerScrollY*(window.scrollY-stopSunAt);
                }                
            }
        }

        
    
        document.addEventListener('scroll', function(e) {
            lastKnownScrollPosition = window.scrollY;
           
    
        if (!ticking) {
            window.requestAnimationFrame(function() {
                moveObject(lastKnownScrollPosition);
           ticking = false;
       
            });
        }
       ticking = true;
      //}
    });