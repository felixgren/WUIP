"use strict";

/* GET ALL CLASSES THAT ARE NEEDED */
const blackOverlay = document.querySelector(".blackImageCover");
const leftCloud = document.querySelector("#Cloud_left_1_");
const rightCloud = document.querySelector("#Cloud_right_1_");
const sun = document.querySelector("#Sun_1_ circle");


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
        let cloudTexts = document.querySelectorAll(".cloudText");
        
    
        function moveObject(scrollDirection){	
            
           
            let leftTransformAttr = 'translate(' + window.scrollY / 4 + ',0)';
            leftCloud.setAttribute('transform', leftTransformAttr); 		
            let rightTransformAttr = 'translate(' + (0 - window.scrollY / 4) + ',0)';
            rightCloud.setAttribute('transform', rightTransformAttr);

            
            sunY = window.scrollY <= 2500 ? 0 : sunY+20;

            

            let sunMovement = 'translate(' + window.scrollY / 40 + ', ' + (window.scrollY <= 2500 ? 0 : sunY) + ')';
            
            sun.setAttribute('transform', sunMovement); 
            
            console.log(window.scrollY);
            
            /* Adjust opacity/night */
            if(scrollDirection > window.scrollY){ // Scrolling down
                
                
                // for (let i = 0; i < cloudTexts.length; i++) {
                //    console.log(cloudTexts[i]);
                //     cloudTexts[i].style.opacity = window.scrollY/6;
                // }

                if(blackOverlay.style.opacity <= 0.7){
                    console.log('ner');
                    //blackOverlay.style.opacity = window.scrollY/10000;
                }
            }else{ // Scrolling up
                
                // if(window.scrollY)
                for (let i = 0; i < cloudTexts.length; i++) {
                    cloudTexts[i].style.opacity = window.scrollY/3000;
                }
                if(window.scrollY >= 2500){
                    if(blackOverlay.style.opacity >= 0){
                        blackOverlay.style.opacity = window.scrollY/20000;
                    }
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
    
        ticking = true;
      }
    });