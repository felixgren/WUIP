/******/ (function () {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./assets/js/index.js":
      /*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
      /***/ function () {
        window.onbeforeunload = function () {
          window.scrollTo(0, 0);
        };

        var height = window.innerHeight;
        var width = window.innerWidth;
        var image = document.querySelector(".image");
        console.log(image);
        gsap.registerPlugin(TextPlugin, ScrollToPlugin, ScrollTrigger);
        /* GET ALL CLASSES THAT ARE NEEDED */

        var blackOverlay = document.querySelector(".blackImageCover");
        var leftCloud = document.querySelector("#Cloud_left_1_");
        var rightCloud = document.querySelector("#Cloud_right_1_");
        var sun = document.querySelector("#Sun_1_ circle");
        var sky = document.querySelector("#Sky");
        var body = document.querySelector("body");
        var tent = document.querySelector("#Tent_2_");
        var sign = document.querySelector("#Sign-name");
        var page = document.querySelector(".textHier");
        var queryString = window.location.search; //http://localhost:1234/?name=Daniel&email=daniel.borgstrom@%C2%A0gmail.com&phone=0703473880

        var urlParams = new URLSearchParams(queryString);
        var guestName = urlParams.get("name");
        var email = urlParams.get("email");
        var phone = urlParams.get("phone");
        document.querySelector(".name").value = guestName;
        document.querySelector(".email").value = email;
        document.querySelector(".phone").value = phone;
        var hiText = [
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
        ];

        function createElement(args) {
          var svg = document.querySelector("#Clouds");
          var element = document.createElementNS(
            "http://www.w3.org/2000/svg",
            args.type
          );
          var txt = document.createElement("div");
          element.innerHTML = "".concat(args.text);
          element.setAttribute("x", args.x);
          element.setAttribute("y", args.y);
          element.setAttribute("fill", args.fillColor);
          element.setAttribute("font-family", args.fontFamily);
          element.setAttribute("font-size", args.fontSize);
          element.setAttribute("opacity", args.opacity);
          element.setAttribute("class", args["class"]);
          element.setAttribute("text-anchor", "middle");
          element.setAttribute("dominant-baseline", "middle");
          element.setAttribute("width", "20");
          element.appendChild(txt);
          svg.prepend(element);
        }

        var elementsToCreate = [
          {
            targetDiv: "#Clouds",
            type: "text",
            text: "GLAMPA",
            x: "50%",
            y: "240",
            fillColor: "black",
            fontFamily: "Abel",
            fontSize: "80",
            opacity: "0",
            class: "cloudText",
          },
          {
            targetDiv: "#Clouds",
            type: "text",
            text: "med Happie Camp",
            x: "50%",
            y: "280",
            fillColor: "black",
            fontFamily: "Nixie One",
            fontSize: "20",
            opacity: "0",
            class: "cloudText",
          },
          {
            targetDiv: "#Clouds",
            type: "text",
            text: "2-4 juli",
            x: "50%",
            y: "320",
            fillColor: "black",
            fontFamily: "Nixie One",
            fontSize: "40",
            opacity: "0",
            class: "cloudText",
          },
        ];

        for (var element in elementsToCreate) {
          createElement(elementsToCreate[element]);
        }

        var textBehindCloud = gsap.utils.toArray(".cloudText");
        setInterval(function () {
          var rand = Math.floor(Math.random() * hiText.length);
          document.querySelector(".hello-name").textContent = ""
            .concat(hiText[rand], " ")
            .concat(guestName);
        }, 2000); // LEFT 1,2,3,1
        // RIGHT 4,5,1

        var tree1_1 = document.querySelector("#tree1_1_");
        var tree2_1 = document.querySelector("#tree2_1_");
        var tree3_1 = document.querySelector("#tree3_1_");
        var tree4_1 = document.querySelector("#tree4_1_");
        var tree5_1 = document.querySelector("#tree5_1_");
        var TreeGreen1_1 = document.querySelector("#Tree-green1_1_");
        var TreeGreen2_1 = document.querySelector("#Tree-green2_1_");
        var contactForm = document.querySelector(".contactForm"); // gsap.to('#Ground > path', { duration:1.5, scaleX: 10, autoAlpha:1, ease: "back", stagger:1});

        gsap.to(sun, {
          duration: 1.5,
          scale: (1, 1),
          ease: "back",
        });
        var longText = document.querySelector("#longText");
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
          }) // .from(TreeGreen1_1, {duration:0.2, y:160, rotation:-90, transformOrigin:"bottom left"})
          // .from(TreeGreen2_1, {duration:0.2, y:160, rotation:90, transformOrigin:"bottom"})
          .from(leftCloud, {
            x: -500,
            duration: 0.8,
          })
          .from(
            rightCloud,
            {
              x: 500,
              duration: 0.8,
            },
            "<"
          )
          .to(leftCloud, {
            immediateRender: false,
            overwrite: "auto",
            scrollTrigger: {
              trigger: "body",
              start: "top -350px",
              end: "top -1000px",
              scrub: true,
            },
            x: 500,
          })
          .to(rightCloud, {
            immediateRender: false,
            overwrite: "auto",
            scrollTrigger: {
              trigger: "body",
              start: "top -350px",
              end: "top -1000px",
              scrub: true,
            },
            x: -500,
          })
          .from(
            sign,
            {
              duration: 0.8,
              rotation: 90,
              transformOrigin: "center bottom",
              ease: "bounce.out",
            },
            "+=0.5"
          );
        gsap.to(sun, {
          scrollTrigger: {
            trigger: "body",
            start: "+=1200",
            end: "+=3400",
            scrub: 1,
          },
          x: 500,
        });
        gsap.to(sun, {
          scrollTrigger: {
            trigger: "body",
            start: "+=1500",
            end: "+=3400",
            scrub: 1,
          },
          y: 450,
        });
        gsap.to(blackOverlay, {
          scrollTrigger: {
            trigger: "body",
            start: "top -2000px",
            end: "top -3000px",
            scrub: 1,
          },
          onComplete: function onComplete() {
            gsap.fromTo(
              contactForm,
              {
                x: -500,
              },
              {
                opacity: 1,
                x: 0,
                onComplete: function onComplete() {
                  textBehindCloud.forEach(function (element) {
                    gsap.to(element, {
                      fill: "white",
                    }); // page.append(element);
                  });
                },
              }
            );
          },
          onReverseComplete: function onReverseComplete() {
            gsap.to(contactForm, {
              opacity: 0,
              duration: 0,
            });
          },
          opacity: 0.4,
        });
        var welcomeText = document.querySelector("#longText");
        gsap.to(welcomeText, {
          scrollTrigger: {
            trigger: "body",
            start: "top -350px",
            end: "top -800px",
            scrub: 1,
          },
          ease: "none",
          y: 12,
        });
        textBehindCloud.forEach(function (element) {
          gsap.to(element, {
            scrollTrigger: {
              trigger: "body",
              start: "top -350px",
              end: "top -800px",
              scrub: 1,
            },
            ease: "none",
            opacity: 1,
          });
        }); // console.log(height, width);
        // const svgViewBox = document.querySelector("svg");
        // console.log(svgViewBox);
        // svgViewBox.setAttribute('viewBox', `0 0 ${width} ${height}`);

        /***/
      },

    /***/ "./assets/css/style.css":
      /*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /******/
  }; // The module cache
  /************************************************************************/
  /******/ /******/ var __webpack_module_cache__ = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ if (__webpack_module_cache__[moduleId]) {
      /******/ return __webpack_module_cache__[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    ); // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/ /******/ __webpack_require__.m = __webpack_modules__; // the startup function // It's empty as some runtime module handles the default behavior
  /******/
  /******/ /******/ /******/ __webpack_require__.x = function () {}; /* webpack/runtime/hasOwnProperty shorthand */
  /************************************************************************/
  /******/ /******/ !(function () {
    /******/ __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })(); /* webpack/runtime/make namespace object */
  /******/
  /******/ /******/ !(function () {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })(); /* webpack/runtime/jsonp chunk loading */
  /******/
  /******/ /******/ !(function () {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // Promise = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ "/app": 0,
      /******/
    };
    /******/
    /******/ var deferredModules = [
      /******/ ["./assets/js/index.js"],
      /******/ ["./assets/css/style.css"],
      /******/
    ]; /******/ /******/ /******/ /******/ /******/ // no chunk on demand loading // no prefetching // no preloaded // no HMR // no HMR manifest
    /******/ /******/ /******/ /******/ /******/ /******/ var checkDeferredModules = function () {}; // install a JSONP callback for chunk loading
    /******/
    /******/ /******/ var webpackJsonpCallback = function (
      parentChunkLoadingFunction,
      data
    ) {
      /******/ var chunkIds = data[0];
      /******/ var moreModules = data[1];
      /******/ var runtime = data[2];
      /******/ var executeModules = data[3]; // add "moreModules" to the modules object, // then flag all "chunkIds" as loaded and fire callback
      /******/ /******/ /******/ var moduleId,
        chunkId,
        i = 0,
        resolves = [];
      /******/ for (; i < chunkIds.length; i++) {
        /******/ chunkId = chunkIds[i];
        /******/ if (
          __webpack_require__.o(installedChunks, chunkId) &&
          installedChunks[chunkId]
        ) {
          /******/ resolves.push(installedChunks[chunkId][0]);
          /******/
        }
        /******/ installedChunks[chunkId] = 0;
        /******/
      }
      /******/ for (moduleId in moreModules) {
        /******/ if (__webpack_require__.o(moreModules, moduleId)) {
          /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
          /******/
        }
        /******/
      }
      /******/ if (runtime) runtime(__webpack_require__);
      /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/ while (resolves.length) {
        /******/ resolves.shift()();
        /******/
      } // add entry modules from loaded chunk to deferred list
      /******/
      /******/ /******/ if (executeModules)
        deferredModules.push.apply(deferredModules, executeModules); // run deferred modules when all chunks ready
      /******/
      /******/ /******/ return checkDeferredModules();
      /******/
    };
    /******/
    /******/ var chunkLoadingGlobal = (self["webpackChunk"] =
      self["webpackChunk"] || []);
    /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
    );
    /******/
    /******/ function checkDeferredModulesImpl() {
      /******/ var result;
      /******/ for (var i = 0; i < deferredModules.length; i++) {
        /******/ var deferredModule = deferredModules[i];
        /******/ var fulfilled = true;
        /******/ for (var j = 1; j < deferredModule.length; j++) {
          /******/ var depId = deferredModule[j];
          /******/ if (installedChunks[depId] !== 0) fulfilled = false;
          /******/
        }
        /******/ if (fulfilled) {
          /******/ deferredModules.splice(i--, 1);
          /******/ result = __webpack_require__(
            (__webpack_require__.s = deferredModule[0])
          );
          /******/
        }
        /******/
      }
      /******/ if (deferredModules.length === 0) {
        /******/ __webpack_require__.x();
        /******/ __webpack_require__.x = function () {};
        /******/
      }
      /******/ return result;
      /******/
    }
    /******/ var startup = __webpack_require__.x;
    /******/ __webpack_require__.x = function () {
      /******/ // reset startup function so it can be called again when more startup code is added
      /******/ __webpack_require__.x = startup || function () {};
      /******/ return (checkDeferredModules = checkDeferredModulesImpl)();
      /******/
    };
    /******/
  })(); // run startup
  /******/
  /************************************************************************/
  /******/
  /******/ /******/ var __webpack_exports__ = __webpack_require__.x();
  /******/
  /******/
})();
