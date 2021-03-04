"use strict";

/* GET ALL CLASSES THAT ARE NEEDED */
const blackOverlay = document.querySelector(".blackImageCover");
const leftCloud = document.querySelector("#Cloud_left_1_");
const rightCloud = document.querySelector("#Cloud_right_1_");
const sun = document.querySelector("#Sun_1_ circle");
const sky = document.querySelector("#Sky");


function createElement(args){
    let mysvg = document.querySelector(args.targetDiv);
    let myTextElement = document.createElementNS("http://www.w3.org/2000/svg", args.type);
    let myText = document.createTextNode(args.text);
    myTextElement.setAttribute("x", args.x);
    myTextElement.setAttribute("y", args.y);
    myTextElement.setAttribute("fill", args.fillColor);
    myTextElement.setAttribute("font-family", args.fontFamily);
    myTextElement.setAttribute("font-size", args.fontSize);
    myTextElement.setAttribute("opacity", args.opacity);
    myTextElement.setAttribute("class", args.class);
    myTextElement.setAttribute("text-anchor", "middle");
    myTextElement.setAttribute("dominant-baseline", "middle");
    myTextElement.appendChild(myText);
    mysvg.prepend(myTextElement);
    }
    
    let args = 
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
    }
    
    createElement(args);
    
    let newnew = {
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
        
    }
    
    createElement(newnew);
    
    let date = {
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
    
    createElement(date);
            
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