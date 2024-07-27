/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
html {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
}

body {
    margin: 0px;
}

.main {
    background-color: rgb(75, 87, 255);
    width: 92vw;
    height: 92vh;
    border-radius: 2em;
}

.container {
    background-color: rgb(154, 255, 255);
}

.hourly,
.forecast {
    display: flex;
}

    .hour,
    .days {
        padding: .5em;
        display: flex;
        flex-direction: column;
        align-items: center;
    }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,4DAA4D;AAChE;AACA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kCAAkC;IAClC,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;;IAEI,aAAa;AACjB;;IAEI;;QAEI,aAAa;QACb,aAAa;QACb,sBAAsB;QACtB,mBAAmB;IACvB","sourcesContent":["* {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\nhtml {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0px;\n}\n\nbody {\n    margin: 0px;\n}\n\n.main {\n    background-color: rgb(75, 87, 255);\n    width: 92vw;\n    height: 92vh;\n    border-radius: 2em;\n}\n\n.container {\n    background-color: rgb(154, 255, 255);\n}\n\n.hourly,\n.forecast {\n    display: flex;\n}\n\n    .hour,\n    .days {\n        padding: .5em;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/GUI.js":
/*!********************!*\
  !*** ./src/GUI.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   webPage: () => (/* binding */ webPage)
/* harmony export */ });
function importIcons() {
    let r = __webpack_require__("./src/assets sync \\.svg$");
    const images = {};
    r.keys().map((item, index) => { 
        images[item.replace('./', '')] = r(item); 
        });
    return images;
}

//replace(/-/g, '').

let icons = {};

function webPage(data) {
    icons = importIcons(); // Imports all Icons from ./assets
    console.log(data);
    
    // Create all divs
    const body = document.querySelector('body');
    const main = createDiv(body, 'main');
    const locationContainer = createDiv(main, 'container', 'location');
        createDiv(locationContainer, 'locationData', 'location', data.location);
    const hourlyContainer = createDiv(main, 'container', 'hourly');
        const hour = [];
        for (let i = 0; i < 6; i++){
            hour[i] = createDiv(hourlyContainer, 'hour');
                createDiv(hour[i], 'hourData', 'hourTime', data.hourly[i].datetime);
                createIcon(hour[i], 'hourData', 'hourIcon', data.hourly[i].icon);
                createDiv(hour[i], 'hourData', 'hourTemp', data.hourly[i].temp+'C');
                createDiv(hour[i], 'hourData', 'hourCloud', data.hourly[i].cloudcover);
                createDiv(hour[i], 'hourData', 'hourPrecip', data.hourly[i].precipprob);
                createDiv(hour[i], 'hourData', 'hourWindSpeed', data.hourly[i].windspeed);
                createDiv(hour[i], 'hourData', 'hourWindDir', data.hourly[i].winddir);
            }
    const currentContainer = createDiv(main, 'container', 'current');
            createIcon(currentContainer, 'currentData', 'currentIcon', data.current.icon);
            createDiv(currentContainer, 'currentData', 'currentTemp', data.current.temp);
            createDiv(currentContainer, 'currentData', 'currentCloud', data.current.cloudcover);
            createDiv(currentContainer, 'currentData', 'currentHumidity', data.current.humidity);
            createDiv(currentContainer, 'currentData', 'currentPrecip', data.current.precip);
            createDiv(currentContainer, 'currentData', 'currentUV', data.current.uvindex);
            createDiv(currentContainer, 'currentData', 'currentVisibility', data.current.visibility);
            createDiv(currentContainer, 'currentData', 'currentWindDir', data.current.winddir);
            createDiv(currentContainer, 'currentData', 'currentWindSpeed', data.current.windspeed);
            createDiv(currentContainer, 'currentData', 'currentWindGust', data.current.windgust);

    const forecastContainer = createDiv(main, 'container', 'forecast');
            const days = [];
            for (let i = 0; i < 6; i++){
                days[i] = createDiv(forecastContainer, 'days');
                createDiv(days[i], 'forecastData', 'forecastDay', data.forecast[i].datetime);
                createIcon(days[i], 'forecastData', 'forecastIcon', data.forecast[i].icon);
                createDiv(days[i], 'forecastData', 'forecastTempMax', data.forecast[i].tempmax);
                createDiv(days[i], 'forecastData', 'forecasTempMin', data.forecast[i].tempmin);
                createDiv(days[i], 'forecastData', 'forecastCloud', data.forecast[i].cloudcover);
                createDiv(days[i], 'forecastData', 'forecastPrecip', data.forecast[i].precipprob);
                createDiv(days[i], 'forecastData', 'forecastWindDir', data.forecast[i].winddir);
                createDiv(days[i], 'forecastData', 'forecastWindSpeed', data.forecast[i].windspeed);
            }
}

function createDiv(parent, class1, class2, text) {
    const newDiv = document.createElement('div');
    if (class1 != undefined) newDiv.classList.add(class1);
    if (class2 != undefined) newDiv.classList.add(class2);
    if (text != undefined) newDiv.textContent = text;
    parent.appendChild(newDiv);
    return newDiv;
}

function createIcon(parent, class1, class2, iconName){
    const img = new Image;
    img.src = icons[`${iconName}.svg`];
    console.log(iconName);
    if (class1 != undefined) img.classList.add(class1);
    if (class2 != undefined) img.classList.add(class2);
    parent.appendChild(img)
    return img;
}



/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAPI: () => (/* binding */ queryAPI)
/* harmony export */ });
async function queryAPI (location) {
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?unitGroup=metric&iconSet=icons2&key=JDXT9WS8AACUSN2YVY5DBUCRL`
    let answer = await fetch(URL);
    let result = await answer.json();
    return result;
}



/***/ }),

/***/ "./src/assets sync \\.svg$":
/*!**********************************************!*\
  !*** ./src/assets/ sync nonrecursive \.svg$ ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./clear-day.svg": "./src/assets/clear-day.svg",
	"./clear-night.svg": "./src/assets/clear-night.svg",
	"./cloudy.svg": "./src/assets/cloudy.svg",
	"./fog.svg": "./src/assets/fog.svg",
	"./hail.svg": "./src/assets/hail.svg",
	"./partly-cloudy-day.svg": "./src/assets/partly-cloudy-day.svg",
	"./partly-cloudy-night.svg": "./src/assets/partly-cloudy-night.svg",
	"./rain-snow-showers-day.svg": "./src/assets/rain-snow-showers-day.svg",
	"./rain-snow-showers-night.svg": "./src/assets/rain-snow-showers-night.svg",
	"./rain-snow.svg": "./src/assets/rain-snow.svg",
	"./rain.svg": "./src/assets/rain.svg",
	"./showers-day.svg": "./src/assets/showers-day.svg",
	"./showers-night.svg": "./src/assets/showers-night.svg",
	"./sleet.svg": "./src/assets/sleet.svg",
	"./snow-showers-day.svg": "./src/assets/snow-showers-day.svg",
	"./snow-showers-night.svg": "./src/assets/snow-showers-night.svg",
	"./snow.svg": "./src/assets/snow.svg",
	"./thunder-rain.svg": "./src/assets/thunder-rain.svg",
	"./thunder-showers-day.svg": "./src/assets/thunder-showers-day.svg",
	"./thunder-showers-night.svg": "./src/assets/thunder-showers-night.svg",
	"./thunder.svg": "./src/assets/thunder.svg",
	"./wind.svg": "./src/assets/wind.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync \\.svg$";

/***/ }),

/***/ "./src/json.js":
/*!*********************!*\
  !*** ./src/json.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reduceAPIAnswer: () => (/* binding */ reduceAPIAnswer)
/* harmony export */ });
function reduceAPIAnswer (obj) {
    // function takes object from API-call and returns object with necesarry data
    const result = {}; // Object to be returned 
    console.log(obj);

    // Adds location
    const {resolvedAddress} = obj;
    result.location = resolvedAddress;
    
    // Adds Current conditions
    const {currentConditions : {cloudcover, datetime, temp, precip, humidity, conditions, winddir, windgust, windspeed, sunrise, sunset, uvindex, visibility, icon }} = obj;
    result.current = {cloudcover, datetime, temp, precip, humidity, conditions, winddir, windgust, windspeed, sunrise, sunset, uvindex, visibility, icon};
    const currentHour = parseInt(datetime.slice(0, 2));  // Determines hour for adding hourly forecast
   
    // Adds 5 day forecast 
    const forecast = [];
    const {days} = obj; 
    for (let i = 0; i < 6; i++) {
        const {datetime, tempmin, tempmax, precipprob, cloudcover, winddir, windspeed, icon} = days[i+1];
        forecast[i] = {datetime, tempmin, tempmax, precipprob, cloudcover, winddir, windspeed, icon};
    }
    result.forecast = forecast;

    // Adds 6 hour forecast
    const hourly = [];
    for (let i = 0; i < 6; i++){
        let hour = currentHour + 1 + i;
        if (hour < 24) {
            const {datetime, temp, precipprob, windspeed, winddir, cloudcover, icon} = days[0].hours[hour];
            hourly[i] = {datetime, temp, precipprob, windspeed, winddir, cloudcover, icon};
        }
        if (hour >= 24) {
            hour -= 24;
            const {datetime, temp, precipprob, windspeed, winddir, cloudcover, icon} = days[1].hours[hour];
            hourly[i] = {datetime, temp, precipprob, windspeed, winddir, cloudcover, icon};
        }
    }
    result.hourly = hourly;
    
return result; 
}




/***/ }),

/***/ "./src/assets/clear-day.svg":
/*!**********************************!*\
  !*** ./src/assets/clear-day.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "27147402a8ebd22fc60d.svg";

/***/ }),

/***/ "./src/assets/clear-night.svg":
/*!************************************!*\
  !*** ./src/assets/clear-night.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6a85c352a68642b08c91.svg";

/***/ }),

/***/ "./src/assets/cloudy.svg":
/*!*******************************!*\
  !*** ./src/assets/cloudy.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "40ecd68b19d097e3c3aa.svg";

/***/ }),

/***/ "./src/assets/fog.svg":
/*!****************************!*\
  !*** ./src/assets/fog.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5465c93e38463cdf13b3.svg";

/***/ }),

/***/ "./src/assets/hail.svg":
/*!*****************************!*\
  !*** ./src/assets/hail.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "09db0f16f92356b2a10e.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-day.svg":
/*!******************************************!*\
  !*** ./src/assets/partly-cloudy-day.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1432c88bf0d654d74295.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-night.svg":
/*!********************************************!*\
  !*** ./src/assets/partly-cloudy-night.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e326cff4884a22049406.svg";

/***/ }),

/***/ "./src/assets/rain-snow-showers-day.svg":
/*!**********************************************!*\
  !*** ./src/assets/rain-snow-showers-day.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2a7fe33ae1132761f604.svg";

/***/ }),

/***/ "./src/assets/rain-snow-showers-night.svg":
/*!************************************************!*\
  !*** ./src/assets/rain-snow-showers-night.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "852ef0ec6f1301767fe1.svg";

/***/ }),

/***/ "./src/assets/rain-snow.svg":
/*!**********************************!*\
  !*** ./src/assets/rain-snow.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ad0d623a7ec95f690a08.svg";

/***/ }),

/***/ "./src/assets/rain.svg":
/*!*****************************!*\
  !*** ./src/assets/rain.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "58651930bf3184652f4b.svg";

/***/ }),

/***/ "./src/assets/showers-day.svg":
/*!************************************!*\
  !*** ./src/assets/showers-day.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "edf73d5b36edcfd19133.svg";

/***/ }),

/***/ "./src/assets/showers-night.svg":
/*!**************************************!*\
  !*** ./src/assets/showers-night.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c2aa3f69dc4ff0aed24a.svg";

/***/ }),

/***/ "./src/assets/sleet.svg":
/*!******************************!*\
  !*** ./src/assets/sleet.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3931bbb5a464da113cb8.svg";

/***/ }),

/***/ "./src/assets/snow-showers-day.svg":
/*!*****************************************!*\
  !*** ./src/assets/snow-showers-day.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e3588add746097811a4d.svg";

/***/ }),

/***/ "./src/assets/snow-showers-night.svg":
/*!*******************************************!*\
  !*** ./src/assets/snow-showers-night.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c752f459c12b19a7b1be.svg";

/***/ }),

/***/ "./src/assets/snow.svg":
/*!*****************************!*\
  !*** ./src/assets/snow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "be1109549bfdb0a57c5a.svg";

/***/ }),

/***/ "./src/assets/thunder-rain.svg":
/*!*************************************!*\
  !*** ./src/assets/thunder-rain.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "beafe419a8866490a8bf.svg";

/***/ }),

/***/ "./src/assets/thunder-showers-day.svg":
/*!********************************************!*\
  !*** ./src/assets/thunder-showers-day.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1d2a47df306f7f3a6c0c.svg";

/***/ }),

/***/ "./src/assets/thunder-showers-night.svg":
/*!**********************************************!*\
  !*** ./src/assets/thunder-showers-night.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a874140bd032202f1482.svg";

/***/ }),

/***/ "./src/assets/thunder.svg":
/*!********************************!*\
  !*** ./src/assets/thunder.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3511a92cf7ca31e67329.svg";

/***/ }),

/***/ "./src/assets/wind.svg":
/*!*****************************!*\
  !*** ./src/assets/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "788ee5a1cf406608aecc.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json */ "./src/json.js");
/* harmony import */ var _GUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GUI */ "./src/GUI.js");






//import './index.html';
/*
Introduction

Use everything we’ve been discussing to create a weather forecast site using the Visual Crossing API from previous lessons. You should be able to search for a specific location and toggle displaying the data in Fahrenheit or Celsius.

You should change the look of the page based on the data, maybe by changing the color of the background or by adding images that describe the weather. (You could even use the Giphy API to find appropriate weather-related gifs and display them). Feel free to use promises or async/await in your code, though you should try to become comfortable with both.

    Set up a blank HTML document with the appropriate links to your JavaScript and CSS files.
    Write the functions that hit the API. You’re going to want functions that can take a location and return the weather data for that location. For now, just console.log() the information.
    Write the functions that process the JSON data you’re getting from the API and return an object with only the data you require for your app.
    Set up a form that will let users input their location and will fetch the weather info (still just console.log() it).
    Display the information on your webpage!
    Add any styling you like!
    Optional: add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API. Use DevTools to test for low-end devices.
    Push that baby to github and share your solution below!
*/



let result = (0,_api__WEBPACK_IMPORTED_MODULE_1__.queryAPI)('zoetermeer');
result.then((result) => (0,_json__WEBPACK_IMPORTED_MODULE_2__.reduceAPIAnswer)(result)).then((data) => (0,_GUI__WEBPACK_IMPORTED_MODULE_3__.webPage)(data));



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDVztBQUNTO0FBQ1Q7OztBQUdoQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsYUFBYSw4Q0FBUTtBQUNyQix3QkFBd0Isc0RBQWUseUJBQXlCLDZDQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWVyYXBwLy4vc3JjL0dVSS5qcyIsIndlYnBhY2s6Ly93ZWVyYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWVyYXBwLy4vc3JjL2Fzc2V0cy8gc3luYyBub25yZWN1cnNpdmUgXFwuc3ZnJCIsIndlYnBhY2s6Ly93ZWVyYXBwLy4vc3JjL2pzb24uanMiLCJ3ZWJwYWNrOi8vd2VlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlZXJhcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VlcmFwcC8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cbmh0bWwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ubWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA4NywgMjU1KTtcbiAgICB3aWR0aDogOTJ2dztcbiAgICBoZWlnaHQ6IDkydmg7XG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAyNTUsIDI1NSk7XG59XG5cbi5ob3VybHksXG4uZm9yZWNhc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiAgICAuaG91cixcbiAgICAuZGF5cyB7XG4gICAgICAgIHBhZGRpbmc6IC41ZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDREQUE0RDtBQUNoRTtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztJQUVJOztRQUVJLGFBQWE7UUFDYixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDg3LCAyNTUpO1xcbiAgICB3aWR0aDogOTJ2dztcXG4gICAgaGVpZ2h0OiA5MnZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAyNTUsIDI1NSk7XFxufVxcblxcbi5ob3VybHksXFxuLmZvcmVjYXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuICAgIC5ob3VyLFxcbiAgICAuZGF5cyB7XFxuICAgICAgICBwYWRkaW5nOiAuNWVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBpbXBvcnRJY29ucygpIHtcbiAgICBsZXQgciA9IHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMnLCBmYWxzZSwgL1xcLnN2ZyQvKTtcbiAgICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgICByLmtleXMoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7IFxuICAgICAgICBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pOyBcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGltYWdlcztcbn1cblxuLy9yZXBsYWNlKC8tL2csICcnKS5cblxubGV0IGljb25zID0ge307XG5cbmZ1bmN0aW9uIHdlYlBhZ2UoZGF0YSkge1xuICAgIGljb25zID0gaW1wb3J0SWNvbnMoKTsgLy8gSW1wb3J0cyBhbGwgSWNvbnMgZnJvbSAuL2Fzc2V0c1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBhbGwgZGl2c1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZURpdihib2R5LCAnbWFpbicpO1xuICAgIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gY3JlYXRlRGl2KG1haW4sICdjb250YWluZXInLCAnbG9jYXRpb24nKTtcbiAgICAgICAgY3JlYXRlRGl2KGxvY2F0aW9uQ29udGFpbmVyLCAnbG9jYXRpb25EYXRhJywgJ2xvY2F0aW9uJywgZGF0YS5sb2NhdGlvbik7XG4gICAgY29uc3QgaG91cmx5Q29udGFpbmVyID0gY3JlYXRlRGl2KG1haW4sICdjb250YWluZXInLCAnaG91cmx5Jyk7XG4gICAgICAgIGNvbnN0IGhvdXIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspe1xuICAgICAgICAgICAgaG91cltpXSA9IGNyZWF0ZURpdihob3VybHlDb250YWluZXIsICdob3VyJyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGhvdXJbaV0sICdob3VyRGF0YScsICdob3VyVGltZScsIGRhdGEuaG91cmx5W2ldLmRhdGV0aW1lKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVJY29uKGhvdXJbaV0sICdob3VyRGF0YScsICdob3VySWNvbicsIGRhdGEuaG91cmx5W2ldLmljb24pO1xuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihob3VyW2ldLCAnaG91ckRhdGEnLCAnaG91clRlbXAnLCBkYXRhLmhvdXJseVtpXS50ZW1wKydDJyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGhvdXJbaV0sICdob3VyRGF0YScsICdob3VyQ2xvdWQnLCBkYXRhLmhvdXJseVtpXS5jbG91ZGNvdmVyKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVEaXYoaG91cltpXSwgJ2hvdXJEYXRhJywgJ2hvdXJQcmVjaXAnLCBkYXRhLmhvdXJseVtpXS5wcmVjaXBwcm9iKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVEaXYoaG91cltpXSwgJ2hvdXJEYXRhJywgJ2hvdXJXaW5kU3BlZWQnLCBkYXRhLmhvdXJseVtpXS53aW5kc3BlZWQpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihob3VyW2ldLCAnaG91ckRhdGEnLCAnaG91cldpbmREaXInLCBkYXRhLmhvdXJseVtpXS53aW5kZGlyKTtcbiAgICAgICAgICAgIH1cbiAgICBjb25zdCBjdXJyZW50Q29udGFpbmVyID0gY3JlYXRlRGl2KG1haW4sICdjb250YWluZXInLCAnY3VycmVudCcpO1xuICAgICAgICAgICAgY3JlYXRlSWNvbihjdXJyZW50Q29udGFpbmVyLCAnY3VycmVudERhdGEnLCAnY3VycmVudEljb24nLCBkYXRhLmN1cnJlbnQuaWNvbik7XG4gICAgICAgICAgICBjcmVhdGVEaXYoY3VycmVudENvbnRhaW5lciwgJ2N1cnJlbnREYXRhJywgJ2N1cnJlbnRUZW1wJywgZGF0YS5jdXJyZW50LnRlbXApO1xuICAgICAgICAgICAgY3JlYXRlRGl2KGN1cnJlbnRDb250YWluZXIsICdjdXJyZW50RGF0YScsICdjdXJyZW50Q2xvdWQnLCBkYXRhLmN1cnJlbnQuY2xvdWRjb3Zlcik7XG4gICAgICAgICAgICBjcmVhdGVEaXYoY3VycmVudENvbnRhaW5lciwgJ2N1cnJlbnREYXRhJywgJ2N1cnJlbnRIdW1pZGl0eScsIGRhdGEuY3VycmVudC5odW1pZGl0eSk7XG4gICAgICAgICAgICBjcmVhdGVEaXYoY3VycmVudENvbnRhaW5lciwgJ2N1cnJlbnREYXRhJywgJ2N1cnJlbnRQcmVjaXAnLCBkYXRhLmN1cnJlbnQucHJlY2lwKTtcbiAgICAgICAgICAgIGNyZWF0ZURpdihjdXJyZW50Q29udGFpbmVyLCAnY3VycmVudERhdGEnLCAnY3VycmVudFVWJywgZGF0YS5jdXJyZW50LnV2aW5kZXgpO1xuICAgICAgICAgICAgY3JlYXRlRGl2KGN1cnJlbnRDb250YWluZXIsICdjdXJyZW50RGF0YScsICdjdXJyZW50VmlzaWJpbGl0eScsIGRhdGEuY3VycmVudC52aXNpYmlsaXR5KTtcbiAgICAgICAgICAgIGNyZWF0ZURpdihjdXJyZW50Q29udGFpbmVyLCAnY3VycmVudERhdGEnLCAnY3VycmVudFdpbmREaXInLCBkYXRhLmN1cnJlbnQud2luZGRpcik7XG4gICAgICAgICAgICBjcmVhdGVEaXYoY3VycmVudENvbnRhaW5lciwgJ2N1cnJlbnREYXRhJywgJ2N1cnJlbnRXaW5kU3BlZWQnLCBkYXRhLmN1cnJlbnQud2luZHNwZWVkKTtcbiAgICAgICAgICAgIGNyZWF0ZURpdihjdXJyZW50Q29udGFpbmVyLCAnY3VycmVudERhdGEnLCAnY3VycmVudFdpbmRHdXN0JywgZGF0YS5jdXJyZW50LndpbmRndXN0KTtcblxuICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gY3JlYXRlRGl2KG1haW4sICdjb250YWluZXInLCAnZm9yZWNhc3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKXtcbiAgICAgICAgICAgICAgICBkYXlzW2ldID0gY3JlYXRlRGl2KGZvcmVjYXN0Q29udGFpbmVyLCAnZGF5cycpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihkYXlzW2ldLCAnZm9yZWNhc3REYXRhJywgJ2ZvcmVjYXN0RGF5JywgZGF0YS5mb3JlY2FzdFtpXS5kYXRldGltZSk7XG4gICAgICAgICAgICAgICAgY3JlYXRlSWNvbihkYXlzW2ldLCAnZm9yZWNhc3REYXRhJywgJ2ZvcmVjYXN0SWNvbicsIGRhdGEuZm9yZWNhc3RbaV0uaWNvbik7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGRheXNbaV0sICdmb3JlY2FzdERhdGEnLCAnZm9yZWNhc3RUZW1wTWF4JywgZGF0YS5mb3JlY2FzdFtpXS50ZW1wbWF4KTtcbiAgICAgICAgICAgICAgICBjcmVhdGVEaXYoZGF5c1tpXSwgJ2ZvcmVjYXN0RGF0YScsICdmb3JlY2FzVGVtcE1pbicsIGRhdGEuZm9yZWNhc3RbaV0udGVtcG1pbik7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGRheXNbaV0sICdmb3JlY2FzdERhdGEnLCAnZm9yZWNhc3RDbG91ZCcsIGRhdGEuZm9yZWNhc3RbaV0uY2xvdWRjb3Zlcik7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGRheXNbaV0sICdmb3JlY2FzdERhdGEnLCAnZm9yZWNhc3RQcmVjaXAnLCBkYXRhLmZvcmVjYXN0W2ldLnByZWNpcHByb2IpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihkYXlzW2ldLCAnZm9yZWNhc3REYXRhJywgJ2ZvcmVjYXN0V2luZERpcicsIGRhdGEuZm9yZWNhc3RbaV0ud2luZGRpcik7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGRheXNbaV0sICdmb3JlY2FzdERhdGEnLCAnZm9yZWNhc3RXaW5kU3BlZWQnLCBkYXRhLmZvcmVjYXN0W2ldLndpbmRzcGVlZCk7XG4gICAgICAgICAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdihwYXJlbnQsIGNsYXNzMSwgY2xhc3MyLCB0ZXh0KSB7XG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKGNsYXNzMSAhPSB1bmRlZmluZWQpIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGNsYXNzMSk7XG4gICAgaWYgKGNsYXNzMiAhPSB1bmRlZmluZWQpIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGNsYXNzMik7XG4gICAgaWYgKHRleHQgIT0gdW5kZWZpbmVkKSBuZXdEaXYudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIHJldHVybiBuZXdEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUljb24ocGFyZW50LCBjbGFzczEsIGNsYXNzMiwgaWNvbk5hbWUpe1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZTtcbiAgICBpbWcuc3JjID0gaWNvbnNbYCR7aWNvbk5hbWV9LnN2Z2BdO1xuICAgIGNvbnNvbGUubG9nKGljb25OYW1lKTtcbiAgICBpZiAoY2xhc3MxICE9IHVuZGVmaW5lZCkgaW1nLmNsYXNzTGlzdC5hZGQoY2xhc3MxKTtcbiAgICBpZiAoY2xhc3MyICE9IHVuZGVmaW5lZCkgaW1nLmNsYXNzTGlzdC5hZGQoY2xhc3MyKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIHJldHVybiBpbWc7XG59XG5cbmV4cG9ydCB7IHdlYlBhZ2UgfSIsImFzeW5jIGZ1bmN0aW9uIHF1ZXJ5QVBJIChsb2NhdGlvbikge1xuICAgIGNvbnN0IFVSTCA9IGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufS8/dW5pdEdyb3VwPW1ldHJpYyZpY29uU2V0PWljb25zMiZrZXk9SkRYVDlXUzhBQUNVU04yWVZZNURCVUNSTGBcbiAgICBsZXQgYW5zd2VyID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYW5zd2VyLmpzb24oKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgeyBxdWVyeUFQSSB9OyIsInZhciBtYXAgPSB7XG5cdFwiLi9jbGVhci1kYXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2NsZWFyLWRheS5zdmdcIixcblx0XCIuL2NsZWFyLW5pZ2h0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9jbGVhci1uaWdodC5zdmdcIixcblx0XCIuL2Nsb3VkeS5zdmdcIjogXCIuL3NyYy9hc3NldHMvY2xvdWR5LnN2Z1wiLFxuXHRcIi4vZm9nLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9mb2cuc3ZnXCIsXG5cdFwiLi9oYWlsLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9oYWlsLnN2Z1wiLFxuXHRcIi4vcGFydGx5LWNsb3VkeS1kYXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3BhcnRseS1jbG91ZHktZGF5LnN2Z1wiLFxuXHRcIi4vcGFydGx5LWNsb3VkeS1uaWdodC5zdmdcIjogXCIuL3NyYy9hc3NldHMvcGFydGx5LWNsb3VkeS1uaWdodC5zdmdcIixcblx0XCIuL3JhaW4tc25vdy1zaG93ZXJzLWRheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvcmFpbi1zbm93LXNob3dlcnMtZGF5LnN2Z1wiLFxuXHRcIi4vcmFpbi1zbm93LXNob3dlcnMtbmlnaHQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3JhaW4tc25vdy1zaG93ZXJzLW5pZ2h0LnN2Z1wiLFxuXHRcIi4vcmFpbi1zbm93LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9yYWluLXNub3cuc3ZnXCIsXG5cdFwiLi9yYWluLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9yYWluLnN2Z1wiLFxuXHRcIi4vc2hvd2Vycy1kYXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3Nob3dlcnMtZGF5LnN2Z1wiLFxuXHRcIi4vc2hvd2Vycy1uaWdodC5zdmdcIjogXCIuL3NyYy9hc3NldHMvc2hvd2Vycy1uaWdodC5zdmdcIixcblx0XCIuL3NsZWV0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zbGVldC5zdmdcIixcblx0XCIuL3Nub3ctc2hvd2Vycy1kYXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3Nub3ctc2hvd2Vycy1kYXkuc3ZnXCIsXG5cdFwiLi9zbm93LXNob3dlcnMtbmlnaHQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3Nub3ctc2hvd2Vycy1uaWdodC5zdmdcIixcblx0XCIuL3Nub3cuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3Nub3cuc3ZnXCIsXG5cdFwiLi90aHVuZGVyLXJhaW4uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3RodW5kZXItcmFpbi5zdmdcIixcblx0XCIuL3RodW5kZXItc2hvd2Vycy1kYXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3RodW5kZXItc2hvd2Vycy1kYXkuc3ZnXCIsXG5cdFwiLi90aHVuZGVyLXNob3dlcnMtbmlnaHQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3RodW5kZXItc2hvd2Vycy1uaWdodC5zdmdcIixcblx0XCIuL3RodW5kZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3RodW5kZXIuc3ZnXCIsXG5cdFwiLi93aW5kLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy93aW5kLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyBcXFxcLnN2ZyRcIjsiLCJmdW5jdGlvbiByZWR1Y2VBUElBbnN3ZXIgKG9iaikge1xuICAgIC8vIGZ1bmN0aW9uIHRha2VzIG9iamVjdCBmcm9tIEFQSS1jYWxsIGFuZCByZXR1cm5zIG9iamVjdCB3aXRoIG5lY2VzYXJyeSBkYXRhXG4gICAgY29uc3QgcmVzdWx0ID0ge307IC8vIE9iamVjdCB0byBiZSByZXR1cm5lZCBcbiAgICBjb25zb2xlLmxvZyhvYmopO1xuXG4gICAgLy8gQWRkcyBsb2NhdGlvblxuICAgIGNvbnN0IHtyZXNvbHZlZEFkZHJlc3N9ID0gb2JqO1xuICAgIHJlc3VsdC5sb2NhdGlvbiA9IHJlc29sdmVkQWRkcmVzcztcbiAgICBcbiAgICAvLyBBZGRzIEN1cnJlbnQgY29uZGl0aW9uc1xuICAgIGNvbnN0IHtjdXJyZW50Q29uZGl0aW9ucyA6IHtjbG91ZGNvdmVyLCBkYXRldGltZSwgdGVtcCwgcHJlY2lwLCBodW1pZGl0eSwgY29uZGl0aW9ucywgd2luZGRpciwgd2luZGd1c3QsIHdpbmRzcGVlZCwgc3VucmlzZSwgc3Vuc2V0LCB1dmluZGV4LCB2aXNpYmlsaXR5LCBpY29uIH19ID0gb2JqO1xuICAgIHJlc3VsdC5jdXJyZW50ID0ge2Nsb3VkY292ZXIsIGRhdGV0aW1lLCB0ZW1wLCBwcmVjaXAsIGh1bWlkaXR5LCBjb25kaXRpb25zLCB3aW5kZGlyLCB3aW5kZ3VzdCwgd2luZHNwZWVkLCBzdW5yaXNlLCBzdW5zZXQsIHV2aW5kZXgsIHZpc2liaWxpdHksIGljb259O1xuICAgIGNvbnN0IGN1cnJlbnRIb3VyID0gcGFyc2VJbnQoZGF0ZXRpbWUuc2xpY2UoMCwgMikpOyAgLy8gRGV0ZXJtaW5lcyBob3VyIGZvciBhZGRpbmcgaG91cmx5IGZvcmVjYXN0XG4gICBcbiAgICAvLyBBZGRzIDUgZGF5IGZvcmVjYXN0IFxuICAgIGNvbnN0IGZvcmVjYXN0ID0gW107XG4gICAgY29uc3Qge2RheXN9ID0gb2JqOyBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBjb25zdCB7ZGF0ZXRpbWUsIHRlbXBtaW4sIHRlbXBtYXgsIHByZWNpcHByb2IsIGNsb3VkY292ZXIsIHdpbmRkaXIsIHdpbmRzcGVlZCwgaWNvbn0gPSBkYXlzW2krMV07XG4gICAgICAgIGZvcmVjYXN0W2ldID0ge2RhdGV0aW1lLCB0ZW1wbWluLCB0ZW1wbWF4LCBwcmVjaXBwcm9iLCBjbG91ZGNvdmVyLCB3aW5kZGlyLCB3aW5kc3BlZWQsIGljb259O1xuICAgIH1cbiAgICByZXN1bHQuZm9yZWNhc3QgPSBmb3JlY2FzdDtcblxuICAgIC8vIEFkZHMgNiBob3VyIGZvcmVjYXN0XG4gICAgY29uc3QgaG91cmx5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspe1xuICAgICAgICBsZXQgaG91ciA9IGN1cnJlbnRIb3VyICsgMSArIGk7XG4gICAgICAgIGlmIChob3VyIDwgMjQpIHtcbiAgICAgICAgICAgIGNvbnN0IHtkYXRldGltZSwgdGVtcCwgcHJlY2lwcHJvYiwgd2luZHNwZWVkLCB3aW5kZGlyLCBjbG91ZGNvdmVyLCBpY29ufSA9IGRheXNbMF0uaG91cnNbaG91cl07XG4gICAgICAgICAgICBob3VybHlbaV0gPSB7ZGF0ZXRpbWUsIHRlbXAsIHByZWNpcHByb2IsIHdpbmRzcGVlZCwgd2luZGRpciwgY2xvdWRjb3ZlciwgaWNvbn07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXIgPj0gMjQpIHtcbiAgICAgICAgICAgIGhvdXIgLT0gMjQ7XG4gICAgICAgICAgICBjb25zdCB7ZGF0ZXRpbWUsIHRlbXAsIHByZWNpcHByb2IsIHdpbmRzcGVlZCwgd2luZGRpciwgY2xvdWRjb3ZlciwgaWNvbn0gPSBkYXlzWzFdLmhvdXJzW2hvdXJdO1xuICAgICAgICAgICAgaG91cmx5W2ldID0ge2RhdGV0aW1lLCB0ZW1wLCBwcmVjaXBwcm9iLCB3aW5kc3BlZWQsIHdpbmRkaXIsIGNsb3VkY292ZXIsIGljb259O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5ob3VybHkgPSBob3VybHk7XG4gICAgXG5yZXR1cm4gcmVzdWx0OyBcbn1cblxuXG5leHBvcnQge3JlZHVjZUFQSUFuc3dlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHF1ZXJ5QVBJIH0gZnJvbSAnLi9hcGknXG5pbXBvcnQgeyByZWR1Y2VBUElBbnN3ZXIgfSBmcm9tICcuL2pzb24nO1xuaW1wb3J0IHsgd2ViUGFnZSB9IGZyb20gJy4vR1VJJztcblxuXG4vL2ltcG9ydCAnLi9pbmRleC5odG1sJztcbi8qXG5JbnRyb2R1Y3Rpb25cblxuVXNlIGV2ZXJ5dGhpbmcgd2XigJl2ZSBiZWVuIGRpc2N1c3NpbmcgdG8gY3JlYXRlIGEgd2VhdGhlciBmb3JlY2FzdCBzaXRlIHVzaW5nIHRoZSBWaXN1YWwgQ3Jvc3NpbmcgQVBJIGZyb20gcHJldmlvdXMgbGVzc29ucy4gWW91IHNob3VsZCBiZSBhYmxlIHRvIHNlYXJjaCBmb3IgYSBzcGVjaWZpYyBsb2NhdGlvbiBhbmQgdG9nZ2xlIGRpc3BsYXlpbmcgdGhlIGRhdGEgaW4gRmFocmVuaGVpdCBvciBDZWxzaXVzLlxuXG5Zb3Ugc2hvdWxkIGNoYW5nZSB0aGUgbG9vayBvZiB0aGUgcGFnZSBiYXNlZCBvbiB0aGUgZGF0YSwgbWF5YmUgYnkgY2hhbmdpbmcgdGhlIGNvbG9yIG9mIHRoZSBiYWNrZ3JvdW5kIG9yIGJ5IGFkZGluZyBpbWFnZXMgdGhhdCBkZXNjcmliZSB0aGUgd2VhdGhlci4gKFlvdSBjb3VsZCBldmVuIHVzZSB0aGUgR2lwaHkgQVBJIHRvIGZpbmQgYXBwcm9wcmlhdGUgd2VhdGhlci1yZWxhdGVkIGdpZnMgYW5kIGRpc3BsYXkgdGhlbSkuIEZlZWwgZnJlZSB0byB1c2UgcHJvbWlzZXMgb3IgYXN5bmMvYXdhaXQgaW4geW91ciBjb2RlLCB0aG91Z2ggeW91IHNob3VsZCB0cnkgdG8gYmVjb21lIGNvbWZvcnRhYmxlIHdpdGggYm90aC5cblxuICAgIFNldCB1cCBhIGJsYW5rIEhUTUwgZG9jdW1lbnQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgbGlua3MgdG8geW91ciBKYXZhU2NyaXB0IGFuZCBDU1MgZmlsZXMuXG4gICAgV3JpdGUgdGhlIGZ1bmN0aW9ucyB0aGF0IGhpdCB0aGUgQVBJLiBZb3XigJlyZSBnb2luZyB0byB3YW50IGZ1bmN0aW9ucyB0aGF0IGNhbiB0YWtlIGEgbG9jYXRpb24gYW5kIHJldHVybiB0aGUgd2VhdGhlciBkYXRhIGZvciB0aGF0IGxvY2F0aW9uLiBGb3Igbm93LCBqdXN0IGNvbnNvbGUubG9nKCkgdGhlIGluZm9ybWF0aW9uLlxuICAgIFdyaXRlIHRoZSBmdW5jdGlvbnMgdGhhdCBwcm9jZXNzIHRoZSBKU09OIGRhdGEgeW914oCZcmUgZ2V0dGluZyBmcm9tIHRoZSBBUEkgYW5kIHJldHVybiBhbiBvYmplY3Qgd2l0aCBvbmx5IHRoZSBkYXRhIHlvdSByZXF1aXJlIGZvciB5b3VyIGFwcC5cbiAgICBTZXQgdXAgYSBmb3JtIHRoYXQgd2lsbCBsZXQgdXNlcnMgaW5wdXQgdGhlaXIgbG9jYXRpb24gYW5kIHdpbGwgZmV0Y2ggdGhlIHdlYXRoZXIgaW5mbyAoc3RpbGwganVzdCBjb25zb2xlLmxvZygpIGl0KS5cbiAgICBEaXNwbGF5IHRoZSBpbmZvcm1hdGlvbiBvbiB5b3VyIHdlYnBhZ2UhXG4gICAgQWRkIGFueSBzdHlsaW5nIHlvdSBsaWtlIVxuICAgIE9wdGlvbmFsOiBhZGQgYSDigJhsb2FkaW5n4oCZIGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGZyb20gdGhlIHRpbWUgdGhlIGZvcm0gaXMgc3VibWl0dGVkIHVudGlsIHRoZSBpbmZvcm1hdGlvbiBjb21lcyBiYWNrIGZyb20gdGhlIEFQSS4gVXNlIERldlRvb2xzIHRvIHRlc3QgZm9yIGxvdy1lbmQgZGV2aWNlcy5cbiAgICBQdXNoIHRoYXQgYmFieSB0byBnaXRodWIgYW5kIHNoYXJlIHlvdXIgc29sdXRpb24gYmVsb3chXG4qL1xuXG5cblxubGV0IHJlc3VsdCA9IHF1ZXJ5QVBJKCd6b2V0ZXJtZWVyJyk7XG5yZXN1bHQudGhlbigocmVzdWx0KSA9PiByZWR1Y2VBUElBbnN3ZXIocmVzdWx0KSkudGhlbigoZGF0YSkgPT4gd2ViUGFnZShkYXRhKSk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9