// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
"use strict";
/* GET ALL CLASSES THAT ARE NEEDED */

var blackOverlay = document.querySelector(".blackImageCover");
var leftCloud = document.querySelector("#Cloud_left_1_");
var rightCloud = document.querySelector("#Cloud_right_1_");
var sun = document.querySelector("#Sun_1_ circle");
var sky = document.querySelector("#Sky");

function createElement(args) {
  var mysvg = document.querySelector(args.targetDiv);
  var myTextElement = document.createElementNS("http://www.w3.org/2000/svg", args.type);
  var myText = document.createTextNode(args.text);
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

var args = {
  'targetDiv': '#Clouds',
  'type': 'text',
  'text': 'GLAMPA',
  'x': '50%',
  'y': '310',
  'fillColor': 'black',
  'fontFamily': 'NixieOne',
  'fontSize': '30',
  'opacity': '0',
  'class': 'cloudText'
};
createElement(args);
var newnew = {
  'targetDiv': '#Clouds',
  'type': 'text',
  'text': 'MED HAPPIE CAMP',
  'x': '50%',
  'y': '340',
  'fillColor': 'black',
  'fontFamily': 'NixieOne',
  'fontSize': '20',
  'opacity': '0',
  'class': 'cloudText'
};
createElement(newnew);
var date = {
  'targetDiv': '#Clouds',
  'type': 'text',
  'text': '2-4 Juli',
  'x': '50%',
  'y': '370',
  'fillColor': 'black',
  'fontFamily': 'NixieOne',
  'fontSize': '30',
  'opacity': '0',
  'class': 'cloudText'
};
createElement(date);
var lastKnownScrollPosition = 0;
var ticking = false;
var moveLeft = 0;
var moveRight = 0;
var sunY = 0;
var sunMovement = 0;
var blackOpacity = 0;
var cloudTexts = document.querySelectorAll(".cloudText");
sky.setAttribute('position', window.scrollY); // const cloudMvmtRelation = leftCloud.getAttribute('movement');

function logScrollDirection() {
  var previous = window.scrollY;
  window.addEventListener('scroll', function () {
    window.scrollY > previous ? console.log('down') : console.log('up');
    previous = window.scrollY;
  });
}

function moveObject(scrollDirection) {
  // Solution to solve scroll detection problem with requestanimationframe.
  var currentPosition = sky.getAttribute('position');
  sky.setAttribute('position', window.scrollY);
  var skyPosition = sky.getAttribute('position');
  var leftTransformAttr = 'translate(' + window.scrollY / 4 + ',0)';
  leftCloud.setAttribute('transform', leftTransformAttr);
  leftCloud.setAttribute('movement', window.scrollY / 4);
  var rightTransformAttr = 'translate(' + (0 - window.scrollY / 4) + ',0)';
  rightCloud.setAttribute('transform', rightTransformAttr); // 245 = Start the night.

  var sunMovementY = window.scrollY / 30;
  sunMovement = 'translate(' + sunMovementY + ', ' + window.scrollY / 50 + ')';
  sun.setAttribute('transform', sunMovement);

  for (var i = 0; i < cloudTexts.length; i++) {
    cloudTexts[i].style.opacity = window.scrollY / 3000;
  }

  function checkScrollDirection(skyPosition, currentPosition, sunMovementY) {
    if (skyPosition > currentPosition) {
      if (sunMovementY >= 245 && sunMovementY <= 348) {}
    }
  }
  /* Adjust opacity/night */
  // Sun goes down 235 / 7385
  // Night total at 348 / 10437
  // Difference 143 / 3052
  // 0.71 / 3052 = 0.000232;


  var stopSunAt = 7385;
  var fadingPerScrollY = 0.000232;

  if (skyPosition > currentPosition) {
    // console.log('Ner');
    if (sunMovementY >= 245 && sunMovementY <= 348) {
      if (blackOverlay.style.opacity <= 0.7) {
        blackOverlay.style.opacity = fadingPerScrollY * (window.scrollY - stopSunAt);
      } else {
        blackOverlay.style.opacity = 0.71;
      }
    }
  } else {
    // console.log('Upp');
    if (sunMovementY >= 245 && sunMovementY <= 348 && blackOverlay.style.opacity >= 0) {
      blackOverlay.style.opacity = fadingPerScrollY * (window.scrollY - stopSunAt);
    }
  }
}

document.addEventListener('scroll', function (e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      moveObject(lastKnownScrollPosition);
      ticking = false;
    });
  }

  ticking = true; //}
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58829" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/WUIP.e31bb0bc.js.map