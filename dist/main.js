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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12px;
    
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
    background-color: deepskyblue;
    width: 92vw;
    height: 92vh;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 6fr 6fr 1fr;
    gap: 1rem;
    padding: 1rem;
    grid-template-areas: 
        "location location"
        "current forecast"
        "current hourly"
        "footer footer"; 

}

.container {
    background-color:rgb(240, 252, 255);
    
    border-radius: 1rem;
    padding: 1rem;
    box-sizing: border-box;
}

.icon {
    width: 5rem;
}

.location {
    grid-area: location;    
}

.hourly {
    display: flex;
    grid-area: hourly;
}
.forecast {
    display: flex;
    grid-area: forecast;
}

.current {
    grid-area: current;
}

.footer {
    grid-area: footer;
}


.hour,
.day {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
}

.item {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,4DAA4D;IAC5D,eAAe;;AAEnB;AACA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC,SAAS;IACT,aAAa;IACb;;;;uBAImB;;AAEvB;;AAEA;IACI,mCAAmC;;IAEnC,mBAAmB;IACnB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;;IAEI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,QAAQ;AACZ","sourcesContent":[":root {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 12px;\n    \n}\nhtml {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0px;\n}\n\nbody {\n    margin: 0px;\n}\n\n.main {\n    background-color: deepskyblue;\n    width: 92vw;\n    height: 92vh;\n    border-radius: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr 6fr 6fr 1fr;\n    gap: 1rem;\n    padding: 1rem;\n    grid-template-areas: \n        \"location location\"\n        \"current forecast\"\n        \"current hourly\"\n        \"footer footer\"; \n\n}\n\n.container {\n    background-color:rgb(240, 252, 255);\n    \n    border-radius: 1rem;\n    padding: 1rem;\n    box-sizing: border-box;\n}\n\n.icon {\n    width: 5rem;\n}\n\n.location {\n    grid-area: location;    \n}\n\n.hourly {\n    display: flex;\n    grid-area: hourly;\n}\n.forecast {\n    display: flex;\n    grid-area: forecast;\n}\n\n.current {\n    grid-area: current;\n}\n\n.footer {\n    grid-area: footer;\n}\n\n\n.hour,\n.day {\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n}\n\n.item {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 5px;\n}"],"sourceRoot":""}]);
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

let icons = {};

function webPage(data) {
    icons = importIcons(); // Imports all Icons from ./assets
    
    // Create all divs
    const body = document.querySelector('body');
    const main = document.querySelector('.main');
    
    const locationContainer = createDiv(main, 'container', 'location');
        createDiv(locationContainer, 'locationData', 'location', data.location.location);

    const hourlyContainer = createDiv(main, 'container', 'hourly');
        const hour = [];
        for (let i = 0; i < 6; i++){
            hour[i] = createDiv(hourlyContainer, 'hour');
                createDiv(hour[i], 'hourData', 'time', data.hourly[i].datetime);
                createIcon(hour[i], 'hourData', 'icon', data.hourly[i].icon);
                createDiv(hour[i], 'hourData', 'temp', data.hourly[i].temp + '°C', 'temp');
                createDiv(hour[i], 'hourData', 'cloud', data.hourly[i].cloudcover + '%', 'cloudcover');
                createDiv(hour[i], 'hourData', 'precip', data.hourly[i].precipprob + '%', 'precip');
                createDiv(hour[i], 'hourData', 'windSpeed', data.hourly[i].windspeed + ' km/u', 'windy');
                createDiv(hour[i], 'hourData', 'windDir', data.hourly[i].winddir + '°');
            }
    const currentContainer = createDiv(main, 'container', 'current');
            createIcon(currentContainer, 'currentData', 'icon', data.current.icon);
            createDiv(currentContainer, 'currentData', 'temp', data.current.temp + '°C','temp');
            createDiv(currentContainer, 'currentData', 'cloud', data.current.cloudcover + '%', 'cloudcover');
            createDiv(currentContainer, 'currentData', 'humidity', data.current.humidity + '%');
            createDiv(currentContainer, 'currentData', 'precip', data.current.precip, 'precip');
            createDiv(currentContainer, 'currentData', 'UV', data.current.uvindex);
            createDiv(currentContainer, 'currentData', 'visibility', data.current.visibility);
            createDiv(currentContainer, 'currentData', 'windSpeed', data.current.windspeed  + ' km/u', 'windy');
            createDiv(currentContainer, 'currentData', 'windDir', data.current.winddir  +  '°');
            createDiv(currentContainer, 'currentData', 'windGust', data.current.windgust  + ' km/u');

    const forecastContainer = createDiv(main, 'container', 'forecast');
            const days = [];
            for (let i = 0; i < 6; i++){
                days[i] = createDiv(forecastContainer, 'days');
                createDiv(days[i], 'forecastData', 'day', data.forecast[i].datetime);
                createIcon(days[i], 'forecastData', 'icon', data.forecast[i].icon);
                createDiv(days[i], 'forecastData', 'tempMax', data.forecast[i].tempmax + '°C','temp');
                createDiv(days[i], 'forecastData', 'tempMin', data.forecast[i].tempmin + '°C', 'temp');
                createDiv(days[i], 'forecastData', 'cloud', data.forecast[i].cloudcover + '%', 'cloudcover');
                createDiv(days[i], 'forecastData', 'precip', data.forecast[i].precipprob + '%', 'precip');
                createDiv(days[i], 'forecastData', 'windSpeed', data.forecast[i].windspeed  + ' km/u', 'windy');
                createDiv(days[i], 'forecastData', 'windDir', data.forecast[i].winddir +  '°');   
            }
    const footer = createDiv(main, 'container', 'footer');
}

function createDiv(parent, class1, class2, text, icon) {
    const newDiv = document.createElement('div');
    if (class1 != undefined) newDiv.classList.add(class1);
    if (class2 != undefined) newDiv.classList.add(class2);
    if (text != undefined) newDiv.textContent = text;
    if (icon != undefined) 
    switch(icon){
        case 'temp': {
            createIcon(newDiv, 'smallIcon', 'dummy', 'temp');
            break;
        }
        case 'precip': {
            createIcon(newDiv, 'smallIcon', 'dummy', 'precip');
            break;
        }
        case 'windy': {
            createIcon(newDiv, 'smallIcon', 'dummy', 'windy')
            break;
        }
        case 'cloudcover': {
            createIcon(newDiv, 'smallIcon', 'dummy', 'cloudcover')
            break;

        }
    }
    parent.appendChild(newDiv);
    return newDiv;
}

function createIcon(parent, class1, class2, iconName){
    const img = new Image;
    img.src = icons[`${iconName}.svg`];
    if (class1 != undefined) img.classList.add(class1);
    if (class2 != undefined) img.classList.add(class2);
    parent.appendChild(img)
    return img;
}




/***/ }),

/***/ "./src/GUI2.js":
/*!*********************!*\
  !*** ./src/GUI2.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWebSite: () => (/* binding */ createWebSite)
/* harmony export */ });
function importIcons() {
    let r = __webpack_require__("./src/assets sync \\.svg$");
    const images = {};
    r.keys().map((item, index) => { 
        images[item.replace('./', '')] = r(item); 
        });
    return images;
}

let icons = {};

// Object with definition of website

const webSite = {
        location:{
            class: 'container',
            location: ['location.location'],
        },
        current:{
            class: 'container',
            icon: 'current.icon',
            temp: {
                class: 'item',
                key: 'Temp',
                data:['current.temp', '°C'],
            },
            cloudcover: {
                class: 'item',
                key: 'Clouds',
                data:['current.cloudcover', '%'],
            },
            precip: {
                class: 'item',
                key: 'Rain',
                data:['current.precip'],
            },
            wind: {
                class: 'item',
                key: 'Wind',
                data:['current.windspeed', '@',  'current.winddir', '°'],

            }
        },
        forecast: {
            class: 'container',
            day0: {
                class: 'hour',
                icon: 'forecast[0].icon',
                date: {
                    class: 'item',
                    key: 'Date',
                    data: ['forecast[0].datetime'],
                },
                Tmax: {
                    class: 'item',
                    key: 'Tmax',
                    data: ['forecast[0].tempmax', '°C'],
                },
                Tmin: {
                    class: 'item',
                    key: 'Tmin',
                    data: ['forecast[0].tempmin', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['forecast[0].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['forecast[0].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['forecast[0].windspeed', '@',  'forecast[0].winddir', '°'],
                }
            },
            day1: {
                class: 'hour',
                icon: 'forecast[1].icon',
                date: {
                    class: 'item',
                    key: 'Date',
                    data: ['forecast[1].datetime'],
                },
                Tmax: {
                    class: 'item',
                    key: 'Tmax',
                    data: ['forecast[1].tempmax', '°C'],
                },
                Tmin: {
                    class: 'item',
                    key: 'Tmin',
                    data: ['forecast[1].tempmin', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['forecast[1].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['forecast[1].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['forecast[1].windspeed', '@',  'forecast[1].winddir', '°'],
                }
            },
            day2: {
                class: 'hour',
                icon: 'forecast[2].icon',
                date: {
                    class: 'item',
                    key: 'Date',
                    data: ['forecast[2].datetime'],
                },
                Tmax: {
                    class: 'item',
                    key: 'Tmax',
                    data: ['forecast[2].tempmax', '°C'],
                },
                Tmin: {
                    class: 'item',
                    key: 'Tmin',
                    data: ['forecast[2].tempmin', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['forecast[2].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['forecast[2].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['forecast[2].windspeed', '@',  'forecast[2].winddir', '°'],
                }
            },
            day3: {
                class: 'hour',
                icon: 'forecast[3].icon',
                date: {
                    class: 'item',
                    key: 'Date',
                    data: ['forecast[3].datetime'],
                },
                Tmax: {
                    class: 'item',
                    key: 'Tmax',
                    data: ['forecast[3].tempmax', '°C'],
                },
                Tmin: {
                    class: 'item',
                    key: 'Tmin',
                    data: ['forecast[3].tempmin', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['forecast[3].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['forecast[3].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['forecast[3].windspeed', '@',  'forecast[3].winddir', '°'],
                }
            },
            day4: {
                class: 'hour',
                icon: 'forecast[4].icon',
                date: {
                    class: 'item',
                    key: 'Date',
                    data: ['forecast[4].datetime'],
                },
                Tmax: {
                    class: 'item',
                    key: 'Tmax',
                    data: ['forecast[4].tempmax', '°C'],
                },
                Tmin: {
                    class: 'item',
                    key: 'Tmin',
                    data: ['forecast[4].tempmin', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['forecast[4].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['forecast[4].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['forecast[4].windspeed', '@',  'forecast[4].winddir', '°'],
                }
            },
            day5: {
                class: 'hour',
                icon: 'forecast[5].icon',
                date: {
                    class: 'item',
                    key: 'Date',
                    data: ['forecast[5].datetime'],
                },
                Tmax: {
                    class: 'item',
                    key: 'Tmax',
                    data: ['forecast[5].tempmax', '°C'],
                },
                Tmin: {
                    class: 'item',
                    key: 'Tmin',
                    data: ['forecast[5].tempmin', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['forecast[5].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['forecast[5].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['forecast[5].windspeed', '@',  'forecast[5].winddir', '°'],
                }
            },
        },
        hourly: {
            class: 'container',
            hour0: {
                class: 'hour',
                icon: 'hourly[0].icon',
                date: {
                    class: 'item',
                    key: 'Time',
                    data: ['hourly[0].datetime'],
                },
                Temp: {
                    class: 'item',
                    key: 'Temp',
                    data: ['hourly[0].temp', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['hourly[0].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['hourly[0].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['hourly[0].windspeed', '@',  'hourly[0].winddir', '°'],
                }, 
            },
            hour1: {
                class: 'hour',
                icon: 'hourly[1].icon',
                date: {
                    class: 'item',
                    key: 'Time',
                    data: ['hourly[1].datetime'],
                },
                Temp: {
                    class: 'item',
                    key: 'Temp',
                    data: ['hourly[1].temp', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['hourly[1].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['hourly[1].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['hourly[1].windspeed', '@',  'hourly[1].winddir', '°'],
                }, 
            },
            hour2: {
                class: 'hour',
                icon: 'hourly[2].icon',
                date: {
                    class: 'item',
                    key: 'Time',
                    data: ['hourly[2].datetime'],
                },
                Temp: {
                    class: 'item',
                    key: 'Temp',
                    data: ['hourly[2].temp', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['hourly[2].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['hourly[2].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['hourly[2].windspeed', '@',  'hourly[2].winddir', '°'],
                }, 
            },
            hour3: {
                class: 'hour',
                icon: 'hourly[3].icon',
                date: {
                    class: 'item',
                    key: 'Time',
                    data: ['hourly[3].datetime'],
                },
                Temp: {
                    class: 'item',
                    key: 'Temp',
                    data: ['hourly[3].temp', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['hourly[3].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['hourly[3].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['hourly[3].windspeed', '@',  'hourly[4].winddir', '°'],
                }, 
            },
            hour4: {
                class: 'hour',
                icon: 'hourly[4].icon',
                date: {
                    class: 'item',
                    key: 'Time',
                    data: ['hourly[4].datetime'],
                },
                Temp: {
                    class: 'item',
                    key: 'Temp',
                    data: ['hourly[4].temp', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['hourly[4].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['hourly[4].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['hourly[4].windspeed', '@',  'hourly[4].winddir', '°'],
                }, 
            },
            hour5: {
                class: 'hour',
                icon: 'hourly[5].icon',
                date: {
                    class: 'item',
                    key: 'Time',
                    data: ['hourly[5].datetime'],
                },
                Temp: {
                    class: 'item',
                    key: 'Temp',
                    data: ['hourly[5].temp', '°C'],
                },
                cloudcover: {
                    class: 'item',
                    key: 'Clouds',
                    data: ['hourly[5].cloudcover', '%'],
                },
                precipprob: {
                    class: 'item',
                    key: 'Rain',
                    data: ['hourly[5].precipprob', '%'],
                },
                wind: {
                    class: 'item',
                    key: 'Wind',
                    data:['hourly[5].windspeed', '@',  'hourly[5].winddir', '°'],
                }, 
            },
            
        },
        footer: {

        }, 
};
 
/*
createDiv(hour[i], 'hourData', 'time', data.hourly[i].datetime);
                createIcon(hour[i], 'hourData', 'icon', data.hourly[i].icon);
                createDiv(hour[i], 'hourData', 'temp', data.hourly[i].temp + '°C', 'temp');
                createDiv(hour[i], 'hourData', 'cloud', data.hourly[i].cloudcover + '%', 'cloudcover');
                createDiv(hour[i], 'hourData', 'precip', data.hourly[i].precipprob + '%', 'precip');
                createDiv(hour[i], 'hourData', 'windSpeed', data.hourly[i].windspeed + ' km/u', 'windy');
                createDiv(hour[i], 'hourData', 'windDir', data.hourly[i].winddir + '°');
*/

//const parent = [];                          // Array of parent names
let weatherData = {};


function createWebSite(data) {
    icons = importIcons();            // Object with all references to all icons
    const main = document.querySelector('.main');    
    weatherData = data;
    iterateObject(webSite, main);   
}


function iterateObject(obj, parentElement) {               // iterates trough webSite-object and makes an array of objects with dependency information               
    Object.keys(obj).forEach(key => {      
        //let ID = '' 
        //parent.push(key); 
        //parent.forEach(element => ID += element); 

        if (obj[key].constructor === Object) {        
                const newDiv = document.createElement('div');
                //newDiv.setAttribute('id', ID);
                newDiv.classList.add(key);
                parentElement.appendChild(newDiv);      
            iterateObject(obj[key], newDiv);  
        }
        
        if (key === 'class') parentElement.classList.add(obj[key]);

        if (key === 'icon') createIcon(obj[key], parentElement);

        if (key === 'key') createKey(obj[key], parentElement);
                
        if (key === 'data') createValue(obj[key], parentElement);


        //parent.pop();        
    });
}

function createValue(arr, parentElement){
    const newElement = document.createElement('p');
    parentElement.appendChild(newElement);
    let text = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('.')) eval(`text += weatherData.${arr[i]}`); 
        if (arr[i].includes('.') == false) text += arr[i];          
        }
    newElement.textContent = text;
    }

function createIcon(icon, parentElement){
    const newElement = document.createElement('img');
    let iconName = '';
    eval(`iconName = weatherData.${icon}`);
    newElement.src = icons[`${iconName}.svg`];
    parentElement.appendChild(newElement);
}

function createKey(key, parentElement){
    const newElement = document.createElement('p');
    newElement.textContent = key;
    parentElement.appendChild(newElement);
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
	"./cloudcover.svg": "./src/assets/cloudcover.svg",
	"./cloudy.svg": "./src/assets/cloudy.svg",
	"./fog.svg": "./src/assets/fog.svg",
	"./hail.svg": "./src/assets/hail.svg",
	"./partly-cloudy-day.svg": "./src/assets/partly-cloudy-day.svg",
	"./partly-cloudy-night.svg": "./src/assets/partly-cloudy-night.svg",
	"./precip.svg": "./src/assets/precip.svg",
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
	"./temp.svg": "./src/assets/temp.svg",
	"./thunder-rain.svg": "./src/assets/thunder-rain.svg",
	"./thunder-showers-day.svg": "./src/assets/thunder-showers-day.svg",
	"./thunder-showers-night.svg": "./src/assets/thunder-showers-night.svg",
	"./thunder.svg": "./src/assets/thunder.svg",
	"./wind.svg": "./src/assets/wind.svg",
	"./windy.svg": "./src/assets/windy.svg"
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

/***/ "./src/assets/cloudcover.svg":
/*!***********************************!*\
  !*** ./src/assets/cloudcover.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "025af3bbdf2bd0dae564.svg";

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

/***/ "./src/assets/precip.svg":
/*!*******************************!*\
  !*** ./src/assets/precip.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e3bb87b6da3b48a9e7b2.svg";

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

/***/ "./src/assets/temp.svg":
/*!*****************************!*\
  !*** ./src/assets/temp.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f2ad35c94bc43ef1192a.svg";

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

/***/ }),

/***/ "./src/assets/windy.svg":
/*!******************************!*\
  !*** ./src/assets/windy.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "586b7e9e19e057f9d2c3.svg";

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
/* harmony import */ var _GUI2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GUI2 */ "./src/GUI2.js");







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
result.then((result) => (0,_json__WEBPACK_IMPORTED_MODULE_2__.reduceAPIAnswer)(result)).then((data) => (0,_GUI2__WEBPACK_IMPORTED_MODULE_4__.createWebSite)(data));



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNXO0FBQ1M7QUFDVDtBQUNPOzs7QUFHdkM7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGFBQWEsOENBQVE7QUFDckIsd0JBQXdCLHNEQUFlLHlCQUF5QixvREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlZXJhcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWVyYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VlcmFwcC8uL3NyYy9HVUkuanMiLCJ3ZWJwYWNrOi8vd2VlcmFwcC8uL3NyYy9HVUkyLmpzIiwid2VicGFjazovL3dlZXJhcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlZXJhcHAvLi9zcmMvYXNzZXRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC5zdmckIiwid2VicGFjazovL3dlZXJhcHAvLi9zcmMvanNvbi5qcyIsIndlYnBhY2s6Ly93ZWVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlZXJhcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VlcmFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWVyYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWVyYXBwLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgXG59XG5odG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLm1haW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xuICAgIHdpZHRoOiA5MnZ3O1xuICAgIGhlaWdodDogOTJ2aDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmciA2ZnIgMWZyO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcImxvY2F0aW9uIGxvY2F0aW9uXCJcbiAgICAgICAgXCJjdXJyZW50IGZvcmVjYXN0XCJcbiAgICAgICAgXCJjdXJyZW50IGhvdXJseVwiXG4gICAgICAgIFwiZm9vdGVyIGZvb3RlclwiOyBcblxufVxuXG4uY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDAsIDI1MiwgMjU1KTtcbiAgICBcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmljb24ge1xuICAgIHdpZHRoOiA1cmVtO1xufVxuXG4ubG9jYXRpb24ge1xuICAgIGdyaWQtYXJlYTogbG9jYXRpb247ICAgIFxufVxuXG4uaG91cmx5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdyaWQtYXJlYTogaG91cmx5O1xufVxuLmZvcmVjYXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdyaWQtYXJlYTogZm9yZWNhc3Q7XG59XG5cbi5jdXJyZW50IHtcbiAgICBncmlkLWFyZWE6IGN1cnJlbnQ7XG59XG5cbi5mb290ZXIge1xuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xufVxuXG5cbi5ob3VyLFxuLmRheSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuXG4uaXRlbSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgZ2FwOiA1cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNERBQTREO0lBQzVELGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLFNBQVM7SUFDVCxhQUFhO0lBQ2I7Ozs7dUJBSW1COztBQUV2Qjs7QUFFQTtJQUNJLG1DQUFtQzs7SUFFbkMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTs7SUFFSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixRQUFRO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgXFxufVxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xcbiAgICB3aWR0aDogOTJ2dztcXG4gICAgaGVpZ2h0OiA5MnZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmciA2ZnIgMWZyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcImxvY2F0aW9uIGxvY2F0aW9uXFxcIlxcbiAgICAgICAgXFxcImN1cnJlbnQgZm9yZWNhc3RcXFwiXFxuICAgICAgICBcXFwiY3VycmVudCBob3VybHlcXFwiXFxuICAgICAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7IFxcblxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQwLCAyNTIsIDI1NSk7XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIHdpZHRoOiA1cmVtO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgICBncmlkLWFyZWE6IGxvY2F0aW9uOyAgICBcXG59XFxuXFxuLmhvdXJseSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtYXJlYTogaG91cmx5O1xcbn1cXG4uZm9yZWNhc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWFyZWE6IGZvcmVjYXN0O1xcbn1cXG5cXG4uY3VycmVudCB7XFxuICAgIGdyaWQtYXJlYTogY3VycmVudDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbn1cXG5cXG5cXG4uaG91cixcXG4uZGF5IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLml0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdhcDogNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGltcG9ydEljb25zKCkge1xuICAgIGxldCByID0gcmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cycsIGZhbHNlLCAvXFwuc3ZnJC8pO1xuICAgIGNvbnN0IGltYWdlcyA9IHt9O1xuICAgIHIua2V5cygpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHsgXG4gICAgICAgIGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IFxuICAgICAgICB9KTtcbiAgICByZXR1cm4gaW1hZ2VzO1xufVxuXG5sZXQgaWNvbnMgPSB7fTtcblxuZnVuY3Rpb24gd2ViUGFnZShkYXRhKSB7XG4gICAgaWNvbnMgPSBpbXBvcnRJY29ucygpOyAvLyBJbXBvcnRzIGFsbCBJY29ucyBmcm9tIC4vYXNzZXRzXG4gICAgXG4gICAgLy8gQ3JlYXRlIGFsbCBkaXZzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBcbiAgICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGNyZWF0ZURpdihtYWluLCAnY29udGFpbmVyJywgJ2xvY2F0aW9uJyk7XG4gICAgICAgIGNyZWF0ZURpdihsb2NhdGlvbkNvbnRhaW5lciwgJ2xvY2F0aW9uRGF0YScsICdsb2NhdGlvbicsIGRhdGEubG9jYXRpb24ubG9jYXRpb24pO1xuXG4gICAgY29uc3QgaG91cmx5Q29udGFpbmVyID0gY3JlYXRlRGl2KG1haW4sICdjb250YWluZXInLCAnaG91cmx5Jyk7XG4gICAgICAgIGNvbnN0IGhvdXIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspe1xuICAgICAgICAgICAgaG91cltpXSA9IGNyZWF0ZURpdihob3VybHlDb250YWluZXIsICdob3VyJyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGhvdXJbaV0sICdob3VyRGF0YScsICd0aW1lJywgZGF0YS5ob3VybHlbaV0uZGF0ZXRpbWUpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUljb24oaG91cltpXSwgJ2hvdXJEYXRhJywgJ2ljb24nLCBkYXRhLmhvdXJseVtpXS5pY29uKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVEaXYoaG91cltpXSwgJ2hvdXJEYXRhJywgJ3RlbXAnLCBkYXRhLmhvdXJseVtpXS50ZW1wICsgJ8KwQycsICd0ZW1wJyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGhvdXJbaV0sICdob3VyRGF0YScsICdjbG91ZCcsIGRhdGEuaG91cmx5W2ldLmNsb3VkY292ZXIgKyAnJScsICdjbG91ZGNvdmVyJyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGhvdXJbaV0sICdob3VyRGF0YScsICdwcmVjaXAnLCBkYXRhLmhvdXJseVtpXS5wcmVjaXBwcm9iICsgJyUnLCAncHJlY2lwJyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGhvdXJbaV0sICdob3VyRGF0YScsICd3aW5kU3BlZWQnLCBkYXRhLmhvdXJseVtpXS53aW5kc3BlZWQgKyAnIGttL3UnLCAnd2luZHknKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVEaXYoaG91cltpXSwgJ2hvdXJEYXRhJywgJ3dpbmREaXInLCBkYXRhLmhvdXJseVtpXS53aW5kZGlyICsgJ8KwJyk7XG4gICAgICAgICAgICB9XG4gICAgY29uc3QgY3VycmVudENvbnRhaW5lciA9IGNyZWF0ZURpdihtYWluLCAnY29udGFpbmVyJywgJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgIGNyZWF0ZUljb24oY3VycmVudENvbnRhaW5lciwgJ2N1cnJlbnREYXRhJywgJ2ljb24nLCBkYXRhLmN1cnJlbnQuaWNvbik7XG4gICAgICAgICAgICBjcmVhdGVEaXYoY3VycmVudENvbnRhaW5lciwgJ2N1cnJlbnREYXRhJywgJ3RlbXAnLCBkYXRhLmN1cnJlbnQudGVtcCArICfCsEMnLCd0ZW1wJyk7XG4gICAgICAgICAgICBjcmVhdGVEaXYoY3VycmVudENvbnRhaW5lciwgJ2N1cnJlbnREYXRhJywgJ2Nsb3VkJywgZGF0YS5jdXJyZW50LmNsb3VkY292ZXIgKyAnJScsICdjbG91ZGNvdmVyJyk7XG4gICAgICAgICAgICBjcmVhdGVEaXYoY3VycmVudENvbnRhaW5lciwgJ2N1cnJlbnREYXRhJywgJ2h1bWlkaXR5JywgZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgJyUnKTtcbiAgICAgICAgICAgIGNyZWF0ZURpdihjdXJyZW50Q29udGFpbmVyLCAnY3VycmVudERhdGEnLCAncHJlY2lwJywgZGF0YS5jdXJyZW50LnByZWNpcCwgJ3ByZWNpcCcpO1xuICAgICAgICAgICAgY3JlYXRlRGl2KGN1cnJlbnRDb250YWluZXIsICdjdXJyZW50RGF0YScsICdVVicsIGRhdGEuY3VycmVudC51dmluZGV4KTtcbiAgICAgICAgICAgIGNyZWF0ZURpdihjdXJyZW50Q29udGFpbmVyLCAnY3VycmVudERhdGEnLCAndmlzaWJpbGl0eScsIGRhdGEuY3VycmVudC52aXNpYmlsaXR5KTtcbiAgICAgICAgICAgIGNyZWF0ZURpdihjdXJyZW50Q29udGFpbmVyLCAnY3VycmVudERhdGEnLCAnd2luZFNwZWVkJywgZGF0YS5jdXJyZW50LndpbmRzcGVlZCAgKyAnIGttL3UnLCAnd2luZHknKTtcbiAgICAgICAgICAgIGNyZWF0ZURpdihjdXJyZW50Q29udGFpbmVyLCAnY3VycmVudERhdGEnLCAnd2luZERpcicsIGRhdGEuY3VycmVudC53aW5kZGlyICArICAnwrAnKTtcbiAgICAgICAgICAgIGNyZWF0ZURpdihjdXJyZW50Q29udGFpbmVyLCAnY3VycmVudERhdGEnLCAnd2luZEd1c3QnLCBkYXRhLmN1cnJlbnQud2luZGd1c3QgICsgJyBrbS91Jyk7XG5cbiAgICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGNyZWF0ZURpdihtYWluLCAnY29udGFpbmVyJywgJ2ZvcmVjYXN0Jyk7XG4gICAgICAgICAgICBjb25zdCBkYXlzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKyl7XG4gICAgICAgICAgICAgICAgZGF5c1tpXSA9IGNyZWF0ZURpdihmb3JlY2FzdENvbnRhaW5lciwgJ2RheXMnKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVEaXYoZGF5c1tpXSwgJ2ZvcmVjYXN0RGF0YScsICdkYXknLCBkYXRhLmZvcmVjYXN0W2ldLmRhdGV0aW1lKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVJY29uKGRheXNbaV0sICdmb3JlY2FzdERhdGEnLCAnaWNvbicsIGRhdGEuZm9yZWNhc3RbaV0uaWNvbik7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGRheXNbaV0sICdmb3JlY2FzdERhdGEnLCAndGVtcE1heCcsIGRhdGEuZm9yZWNhc3RbaV0udGVtcG1heCArICfCsEMnLCd0ZW1wJyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGRheXNbaV0sICdmb3JlY2FzdERhdGEnLCAndGVtcE1pbicsIGRhdGEuZm9yZWNhc3RbaV0udGVtcG1pbiArICfCsEMnLCAndGVtcCcpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihkYXlzW2ldLCAnZm9yZWNhc3REYXRhJywgJ2Nsb3VkJywgZGF0YS5mb3JlY2FzdFtpXS5jbG91ZGNvdmVyICsgJyUnLCAnY2xvdWRjb3ZlcicpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihkYXlzW2ldLCAnZm9yZWNhc3REYXRhJywgJ3ByZWNpcCcsIGRhdGEuZm9yZWNhc3RbaV0ucHJlY2lwcHJvYiArICclJywgJ3ByZWNpcCcpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihkYXlzW2ldLCAnZm9yZWNhc3REYXRhJywgJ3dpbmRTcGVlZCcsIGRhdGEuZm9yZWNhc3RbaV0ud2luZHNwZWVkICArICcga20vdScsICd3aW5keScpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihkYXlzW2ldLCAnZm9yZWNhc3REYXRhJywgJ3dpbmREaXInLCBkYXRhLmZvcmVjYXN0W2ldLndpbmRkaXIgKyAgJ8KwJyk7ICAgXG4gICAgICAgICAgICB9XG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRGl2KG1haW4sICdjb250YWluZXInLCAnZm9vdGVyJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdihwYXJlbnQsIGNsYXNzMSwgY2xhc3MyLCB0ZXh0LCBpY29uKSB7XG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKGNsYXNzMSAhPSB1bmRlZmluZWQpIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGNsYXNzMSk7XG4gICAgaWYgKGNsYXNzMiAhPSB1bmRlZmluZWQpIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGNsYXNzMik7XG4gICAgaWYgKHRleHQgIT0gdW5kZWZpbmVkKSBuZXdEaXYudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGlmIChpY29uICE9IHVuZGVmaW5lZCkgXG4gICAgc3dpdGNoKGljb24pe1xuICAgICAgICBjYXNlICd0ZW1wJzoge1xuICAgICAgICAgICAgY3JlYXRlSWNvbihuZXdEaXYsICdzbWFsbEljb24nLCAnZHVtbXknLCAndGVtcCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAncHJlY2lwJzoge1xuICAgICAgICAgICAgY3JlYXRlSWNvbihuZXdEaXYsICdzbWFsbEljb24nLCAnZHVtbXknLCAncHJlY2lwJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICd3aW5keSc6IHtcbiAgICAgICAgICAgIGNyZWF0ZUljb24obmV3RGl2LCAnc21hbGxJY29uJywgJ2R1bW15JywgJ3dpbmR5JylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2Nsb3VkY292ZXInOiB7XG4gICAgICAgICAgICBjcmVhdGVJY29uKG5ld0RpdiwgJ3NtYWxsSWNvbicsICdkdW1teScsICdjbG91ZGNvdmVyJylcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgcmV0dXJuIG5ld0Rpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSWNvbihwYXJlbnQsIGNsYXNzMSwgY2xhc3MyLCBpY29uTmFtZSl7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlO1xuICAgIGltZy5zcmMgPSBpY29uc1tgJHtpY29uTmFtZX0uc3ZnYF07XG4gICAgaWYgKGNsYXNzMSAhPSB1bmRlZmluZWQpIGltZy5jbGFzc0xpc3QuYWRkKGNsYXNzMSk7XG4gICAgaWYgKGNsYXNzMiAhPSB1bmRlZmluZWQpIGltZy5jbGFzc0xpc3QuYWRkKGNsYXNzMik7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGltZylcbiAgICByZXR1cm4gaW1nO1xufVxuXG5cbmV4cG9ydCB7IHdlYlBhZ2UgfSIsImZ1bmN0aW9uIGltcG9ydEljb25zKCkge1xuICAgIGxldCByID0gcmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cycsIGZhbHNlLCAvXFwuc3ZnJC8pO1xuICAgIGNvbnN0IGltYWdlcyA9IHt9O1xuICAgIHIua2V5cygpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHsgXG4gICAgICAgIGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IFxuICAgICAgICB9KTtcbiAgICByZXR1cm4gaW1hZ2VzO1xufVxuXG5sZXQgaWNvbnMgPSB7fTtcblxuLy8gT2JqZWN0IHdpdGggZGVmaW5pdGlvbiBvZiB3ZWJzaXRlXG5cbmNvbnN0IHdlYlNpdGUgPSB7XG4gICAgICAgIGxvY2F0aW9uOntcbiAgICAgICAgICAgIGNsYXNzOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGxvY2F0aW9uOiBbJ2xvY2F0aW9uLmxvY2F0aW9uJ10sXG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnQ6e1xuICAgICAgICAgICAgY2xhc3M6ICdjb250YWluZXInLFxuICAgICAgICAgICAgaWNvbjogJ2N1cnJlbnQuaWNvbicsXG4gICAgICAgICAgICB0ZW1wOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdUZW1wJyxcbiAgICAgICAgICAgICAgICBkYXRhOlsnY3VycmVudC50ZW1wJywgJ8KwQyddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3VkY292ZXI6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgIGtleTogJ0Nsb3VkcycsXG4gICAgICAgICAgICAgICAgZGF0YTpbJ2N1cnJlbnQuY2xvdWRjb3ZlcicsICclJ10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlY2lwOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdSYWluJyxcbiAgICAgICAgICAgICAgICBkYXRhOlsnY3VycmVudC5wcmVjaXAnXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aW5kOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdXaW5kJyxcbiAgICAgICAgICAgICAgICBkYXRhOlsnY3VycmVudC53aW5kc3BlZWQnLCAnQCcsICAnY3VycmVudC53aW5kZGlyJywgJ8KwJ10sXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZm9yZWNhc3Q6IHtcbiAgICAgICAgICAgIGNsYXNzOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGRheTA6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ2hvdXInLFxuICAgICAgICAgICAgICAgIGljb246ICdmb3JlY2FzdFswXS5pY29uJyxcbiAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0RhdGUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzBdLmRhdGV0aW1lJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RtYXgnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzBdLnRlbXBtYXgnLCAnwrBDJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUbWluOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RtaW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzBdLnRlbXBtaW4nLCAnwrBDJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG91ZGNvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0Nsb3VkcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsnZm9yZWNhc3RbMF0uY2xvdWRjb3ZlcicsICclJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmVjaXBwcm9iOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1JhaW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzBdLnByZWNpcHByb2InLCAnJSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2luZDoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdXaW5kJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTpbJ2ZvcmVjYXN0WzBdLndpbmRzcGVlZCcsICdAJywgICdmb3JlY2FzdFswXS53aW5kZGlyJywgJ8KwJ10sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRheTE6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ2hvdXInLFxuICAgICAgICAgICAgICAgIGljb246ICdmb3JlY2FzdFsxXS5pY29uJyxcbiAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0RhdGUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzFdLmRhdGV0aW1lJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RtYXgnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzFdLnRlbXBtYXgnLCAnwrBDJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUbWluOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RtaW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzFdLnRlbXBtaW4nLCAnwrBDJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG91ZGNvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0Nsb3VkcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsnZm9yZWNhc3RbMV0uY2xvdWRjb3ZlcicsICclJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmVjaXBwcm9iOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1JhaW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzFdLnByZWNpcHByb2InLCAnJSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2luZDoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdXaW5kJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTpbJ2ZvcmVjYXN0WzFdLndpbmRzcGVlZCcsICdAJywgICdmb3JlY2FzdFsxXS53aW5kZGlyJywgJ8KwJ10sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRheTI6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ2hvdXInLFxuICAgICAgICAgICAgICAgIGljb246ICdmb3JlY2FzdFsyXS5pY29uJyxcbiAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0RhdGUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzJdLmRhdGV0aW1lJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RtYXgnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzJdLnRlbXBtYXgnLCAnwrBDJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUbWluOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RtaW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzJdLnRlbXBtaW4nLCAnwrBDJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG91ZGNvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0Nsb3VkcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsnZm9yZWNhc3RbMl0uY2xvdWRjb3ZlcicsICclJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmVjaXBwcm9iOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1JhaW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzJdLnByZWNpcHByb2InLCAnJSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2luZDoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdXaW5kJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTpbJ2ZvcmVjYXN0WzJdLndpbmRzcGVlZCcsICdAJywgICdmb3JlY2FzdFsyXS53aW5kZGlyJywgJ8KwJ10sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRheTM6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ2hvdXInLFxuICAgICAgICAgICAgICAgIGljb246ICdmb3JlY2FzdFszXS5pY29uJyxcbiAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0RhdGUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzNdLmRhdGV0aW1lJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RtYXgnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzNdLnRlbXBtYXgnLCAnwrBDJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUbWluOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RtaW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzNdLnRlbXBtaW4nLCAnwrBDJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG91ZGNvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0Nsb3VkcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsnZm9yZWNhc3RbM10uY2xvdWRjb3ZlcicsICclJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmVjaXBwcm9iOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1JhaW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzNdLnByZWNpcHByb2InLCAnJSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2luZDoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdXaW5kJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTpbJ2ZvcmVjYXN0WzNdLndpbmRzcGVlZCcsICdAJywgICdmb3JlY2FzdFszXS53aW5kZGlyJywgJ8KwJ10sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRheTQ6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ2hvdXInLFxuICAgICAgICAgICAgICAgIGljb246ICdmb3JlY2FzdFs0XS5pY29uJyxcbiAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0RhdGUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzRdLmRhdGV0aW1lJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RtYXgnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzRdLnRlbXBtYXgnLCAnwrBDJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUbWluOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RtaW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzRdLnRlbXBtaW4nLCAnwrBDJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG91ZGNvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0Nsb3VkcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsnZm9yZWNhc3RbNF0uY2xvdWRjb3ZlcicsICclJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmVjaXBwcm9iOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1JhaW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzRdLnByZWNpcHByb2InLCAnJSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2luZDoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdXaW5kJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTpbJ2ZvcmVjYXN0WzRdLndpbmRzcGVlZCcsICdAJywgICdmb3JlY2FzdFs0XS53aW5kZGlyJywgJ8KwJ10sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRheTU6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ2hvdXInLFxuICAgICAgICAgICAgICAgIGljb246ICdmb3JlY2FzdFs1XS5pY29uJyxcbiAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0RhdGUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzVdLmRhdGV0aW1lJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RtYXgnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzVdLnRlbXBtYXgnLCAnwrBDJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUbWluOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RtaW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzVdLnRlbXBtaW4nLCAnwrBDJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG91ZGNvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0Nsb3VkcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsnZm9yZWNhc3RbNV0uY2xvdWRjb3ZlcicsICclJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmVjaXBwcm9iOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1JhaW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2ZvcmVjYXN0WzVdLnByZWNpcHByb2InLCAnJSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2luZDoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdXaW5kJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTpbJ2ZvcmVjYXN0WzVdLndpbmRzcGVlZCcsICdAJywgICdmb3JlY2FzdFs1XS53aW5kZGlyJywgJ8KwJ10sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaG91cmx5OiB7XG4gICAgICAgICAgICBjbGFzczogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBob3VyMDoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAnaG91cicsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2hvdXJseVswXS5pY29uJyxcbiAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RpbWUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2hvdXJseVswXS5kYXRldGltZSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgVGVtcDoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdUZW1wJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWydob3VybHlbMF0udGVtcCcsICfCsEMnXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsb3VkY292ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnQ2xvdWRzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWydob3VybHlbMF0uY2xvdWRjb3ZlcicsICclJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmVjaXBwcm9iOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1JhaW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2hvdXJseVswXS5wcmVjaXBwcm9iJywgJyUnXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdpbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnV2luZCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6Wydob3VybHlbMF0ud2luZHNwZWVkJywgJ0AnLCAgJ2hvdXJseVswXS53aW5kZGlyJywgJ8KwJ10sXG4gICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG91cjE6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ2hvdXInLFxuICAgICAgICAgICAgICAgIGljb246ICdob3VybHlbMV0uaWNvbicsXG4gICAgICAgICAgICAgICAgZGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdUaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWydob3VybHlbMV0uZGF0ZXRpbWUnXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFRlbXA6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnVGVtcCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsnaG91cmx5WzFdLnRlbXAnLCAnwrBDJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG91ZGNvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0Nsb3VkcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsnaG91cmx5WzFdLmNsb3VkY292ZXInLCAnJSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJlY2lwcHJvYjoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdSYWluJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWydob3VybHlbMV0ucHJlY2lwcHJvYicsICclJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3aW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1dpbmQnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOlsnaG91cmx5WzFdLndpbmRzcGVlZCcsICdAJywgICdob3VybHlbMV0ud2luZGRpcicsICfCsCddLFxuICAgICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhvdXIyOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdob3VyJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnaG91cmx5WzJdLmljb24nLFxuICAgICAgICAgICAgICAgIGRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnVGltZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsnaG91cmx5WzJdLmRhdGV0aW1lJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUZW1wOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RlbXAnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2hvdXJseVsyXS50ZW1wJywgJ8KwQyddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvdWRjb3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdDbG91ZHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2hvdXJseVsyXS5jbG91ZGNvdmVyJywgJyUnXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByZWNpcHByb2I6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnUmFpbicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsnaG91cmx5WzJdLnByZWNpcHByb2InLCAnJSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2luZDoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdXaW5kJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTpbJ2hvdXJseVsyXS53aW5kc3BlZWQnLCAnQCcsICAnaG91cmx5WzJdLndpbmRkaXInLCAnwrAnXSxcbiAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBob3VyMzoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAnaG91cicsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2hvdXJseVszXS5pY29uJyxcbiAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RpbWUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2hvdXJseVszXS5kYXRldGltZSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgVGVtcDoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdUZW1wJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWydob3VybHlbM10udGVtcCcsICfCsEMnXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsb3VkY292ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnQ2xvdWRzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWydob3VybHlbM10uY2xvdWRjb3ZlcicsICclJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmVjaXBwcm9iOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1JhaW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2hvdXJseVszXS5wcmVjaXBwcm9iJywgJyUnXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdpbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnV2luZCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6Wydob3VybHlbM10ud2luZHNwZWVkJywgJ0AnLCAgJ2hvdXJseVs0XS53aW5kZGlyJywgJ8KwJ10sXG4gICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG91cjQ6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ2hvdXInLFxuICAgICAgICAgICAgICAgIGljb246ICdob3VybHlbNF0uaWNvbicsXG4gICAgICAgICAgICAgICAgZGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdUaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWydob3VybHlbNF0uZGF0ZXRpbWUnXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFRlbXA6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnVGVtcCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsnaG91cmx5WzRdLnRlbXAnLCAnwrBDJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG91ZGNvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0Nsb3VkcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsnaG91cmx5WzRdLmNsb3VkY292ZXInLCAnJSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJlY2lwcHJvYjoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdSYWluJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWydob3VybHlbNF0ucHJlY2lwcHJvYicsICclJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3aW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1dpbmQnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOlsnaG91cmx5WzRdLndpbmRzcGVlZCcsICdAJywgICdob3VybHlbNF0ud2luZGRpcicsICfCsCddLFxuICAgICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhvdXI1OiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdob3VyJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnaG91cmx5WzVdLmljb24nLFxuICAgICAgICAgICAgICAgIGRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnVGltZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsnaG91cmx5WzVdLmRhdGV0aW1lJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBUZW1wOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ1RlbXAnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2hvdXJseVs1XS50ZW1wJywgJ8KwQyddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvdWRjb3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdDbG91ZHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ2hvdXJseVs1XS5jbG91ZGNvdmVyJywgJyUnXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByZWNpcHByb2I6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnUmFpbicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsnaG91cmx5WzVdLnByZWNpcHByb2InLCAnJSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2luZDoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdXaW5kJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTpbJ2hvdXJseVs1XS53aW5kc3BlZWQnLCAnQCcsICAnaG91cmx5WzVdLndpbmRkaXInLCAnwrAnXSxcbiAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB7XG5cbiAgICAgICAgfSwgXG59O1xuIFxuLypcbmNyZWF0ZURpdihob3VyW2ldLCAnaG91ckRhdGEnLCAndGltZScsIGRhdGEuaG91cmx5W2ldLmRhdGV0aW1lKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVJY29uKGhvdXJbaV0sICdob3VyRGF0YScsICdpY29uJywgZGF0YS5ob3VybHlbaV0uaWNvbik7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGhvdXJbaV0sICdob3VyRGF0YScsICd0ZW1wJywgZGF0YS5ob3VybHlbaV0udGVtcCArICfCsEMnLCAndGVtcCcpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihob3VyW2ldLCAnaG91ckRhdGEnLCAnY2xvdWQnLCBkYXRhLmhvdXJseVtpXS5jbG91ZGNvdmVyICsgJyUnLCAnY2xvdWRjb3ZlcicpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihob3VyW2ldLCAnaG91ckRhdGEnLCAncHJlY2lwJywgZGF0YS5ob3VybHlbaV0ucHJlY2lwcHJvYiArICclJywgJ3ByZWNpcCcpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihob3VyW2ldLCAnaG91ckRhdGEnLCAnd2luZFNwZWVkJywgZGF0YS5ob3VybHlbaV0ud2luZHNwZWVkICsgJyBrbS91JywgJ3dpbmR5Jyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGhvdXJbaV0sICdob3VyRGF0YScsICd3aW5kRGlyJywgZGF0YS5ob3VybHlbaV0ud2luZGRpciArICfCsCcpO1xuKi9cblxuLy9jb25zdCBwYXJlbnQgPSBbXTsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFycmF5IG9mIHBhcmVudCBuYW1lc1xubGV0IHdlYXRoZXJEYXRhID0ge307XG5cblxuZnVuY3Rpb24gY3JlYXRlV2ViU2l0ZShkYXRhKSB7XG4gICAgaWNvbnMgPSBpbXBvcnRJY29ucygpOyAgICAgICAgICAgIC8vIE9iamVjdCB3aXRoIGFsbCByZWZlcmVuY2VzIHRvIGFsbCBpY29uc1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpOyAgICBcbiAgICB3ZWF0aGVyRGF0YSA9IGRhdGE7XG4gICAgaXRlcmF0ZU9iamVjdCh3ZWJTaXRlLCBtYWluKTsgICBcbn1cblxuXG5mdW5jdGlvbiBpdGVyYXRlT2JqZWN0KG9iaiwgcGFyZW50RWxlbWVudCkgeyAgICAgICAgICAgICAgIC8vIGl0ZXJhdGVzIHRyb3VnaCB3ZWJTaXRlLW9iamVjdCBhbmQgbWFrZXMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGRlcGVuZGVuY3kgaW5mb3JtYXRpb24gICAgICAgICAgICAgICBcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHsgICAgICBcbiAgICAgICAgLy9sZXQgSUQgPSAnJyBcbiAgICAgICAgLy9wYXJlbnQucHVzaChrZXkpOyBcbiAgICAgICAgLy9wYXJlbnQuZm9yRWFjaChlbGVtZW50ID0+IElEICs9IGVsZW1lbnQpOyBcblxuICAgICAgICBpZiAob2JqW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkgeyAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgLy9uZXdEaXYuc2V0QXR0cmlidXRlKCdpZCcsIElEKTtcbiAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3RGl2KTsgICAgICBcbiAgICAgICAgICAgIGl0ZXJhdGVPYmplY3Qob2JqW2tleV0sIG5ld0Rpdik7ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzJykgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9ialtrZXldKTtcblxuICAgICAgICBpZiAoa2V5ID09PSAnaWNvbicpIGNyZWF0ZUljb24ob2JqW2tleV0sIHBhcmVudEVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdrZXknKSBjcmVhdGVLZXkob2JqW2tleV0sIHBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICBpZiAoa2V5ID09PSAnZGF0YScpIGNyZWF0ZVZhbHVlKG9ialtrZXldLCBwYXJlbnRFbGVtZW50KTtcblxuXG4gICAgICAgIC8vcGFyZW50LnBvcCgpOyAgICAgICAgXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhbHVlKGFyciwgcGFyZW50RWxlbWVudCl7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXS5pbmNsdWRlcygnLicpKSBldmFsKGB0ZXh0ICs9IHdlYXRoZXJEYXRhLiR7YXJyW2ldfWApOyBcbiAgICAgICAgaWYgKGFycltpXS5pbmNsdWRlcygnLicpID09IGZhbHNlKSB0ZXh0ICs9IGFycltpXTsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG5cbmZ1bmN0aW9uIGNyZWF0ZUljb24oaWNvbiwgcGFyZW50RWxlbWVudCl7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxldCBpY29uTmFtZSA9ICcnO1xuICAgIGV2YWwoYGljb25OYW1lID0gd2VhdGhlckRhdGEuJHtpY29ufWApO1xuICAgIG5ld0VsZW1lbnQuc3JjID0gaWNvbnNbYCR7aWNvbk5hbWV9LnN2Z2BdO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleShrZXksIHBhcmVudEVsZW1lbnQpe1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGtleTtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVXZWJTaXRlIH07XG5cblxuIiwiYXN5bmMgZnVuY3Rpb24gcXVlcnlBUEkgKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgVVJMID0gYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7bG9jYXRpb259Lz91bml0R3JvdXA9bWV0cmljJmljb25TZXQ9aWNvbnMyJmtleT1KRFhUOVdTOEFBQ1VTTjJZVlk1REJVQ1JMYFxuICAgIGxldCBhbnN3ZXIgPSBhd2FpdCBmZXRjaChVUkwpO1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBhbnN3ZXIuanNvbigpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB7IHF1ZXJ5QVBJIH07IiwidmFyIG1hcCA9IHtcblx0XCIuL2NsZWFyLWRheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvY2xlYXItZGF5LnN2Z1wiLFxuXHRcIi4vY2xlYXItbmlnaHQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2NsZWFyLW5pZ2h0LnN2Z1wiLFxuXHRcIi4vY2xvdWRjb3Zlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvY2xvdWRjb3Zlci5zdmdcIixcblx0XCIuL2Nsb3VkeS5zdmdcIjogXCIuL3NyYy9hc3NldHMvY2xvdWR5LnN2Z1wiLFxuXHRcIi4vZm9nLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9mb2cuc3ZnXCIsXG5cdFwiLi9oYWlsLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9oYWlsLnN2Z1wiLFxuXHRcIi4vcGFydGx5LWNsb3VkeS1kYXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3BhcnRseS1jbG91ZHktZGF5LnN2Z1wiLFxuXHRcIi4vcGFydGx5LWNsb3VkeS1uaWdodC5zdmdcIjogXCIuL3NyYy9hc3NldHMvcGFydGx5LWNsb3VkeS1uaWdodC5zdmdcIixcblx0XCIuL3ByZWNpcC5zdmdcIjogXCIuL3NyYy9hc3NldHMvcHJlY2lwLnN2Z1wiLFxuXHRcIi4vcmFpbi1zbm93LXNob3dlcnMtZGF5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9yYWluLXNub3ctc2hvd2Vycy1kYXkuc3ZnXCIsXG5cdFwiLi9yYWluLXNub3ctc2hvd2Vycy1uaWdodC5zdmdcIjogXCIuL3NyYy9hc3NldHMvcmFpbi1zbm93LXNob3dlcnMtbmlnaHQuc3ZnXCIsXG5cdFwiLi9yYWluLXNub3cuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3JhaW4tc25vdy5zdmdcIixcblx0XCIuL3JhaW4uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3JhaW4uc3ZnXCIsXG5cdFwiLi9zaG93ZXJzLWRheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvc2hvd2Vycy1kYXkuc3ZnXCIsXG5cdFwiLi9zaG93ZXJzLW5pZ2h0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zaG93ZXJzLW5pZ2h0LnN2Z1wiLFxuXHRcIi4vc2xlZXQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3NsZWV0LnN2Z1wiLFxuXHRcIi4vc25vdy1zaG93ZXJzLWRheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvc25vdy1zaG93ZXJzLWRheS5zdmdcIixcblx0XCIuL3Nub3ctc2hvd2Vycy1uaWdodC5zdmdcIjogXCIuL3NyYy9hc3NldHMvc25vdy1zaG93ZXJzLW5pZ2h0LnN2Z1wiLFxuXHRcIi4vc25vdy5zdmdcIjogXCIuL3NyYy9hc3NldHMvc25vdy5zdmdcIixcblx0XCIuL3RlbXAuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3RlbXAuc3ZnXCIsXG5cdFwiLi90aHVuZGVyLXJhaW4uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3RodW5kZXItcmFpbi5zdmdcIixcblx0XCIuL3RodW5kZXItc2hvd2Vycy1kYXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3RodW5kZXItc2hvd2Vycy1kYXkuc3ZnXCIsXG5cdFwiLi90aHVuZGVyLXNob3dlcnMtbmlnaHQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3RodW5kZXItc2hvd2Vycy1uaWdodC5zdmdcIixcblx0XCIuL3RodW5kZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3RodW5kZXIuc3ZnXCIsXG5cdFwiLi93aW5kLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy93aW5kLnN2Z1wiLFxuXHRcIi4vd2luZHkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3dpbmR5LnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyBcXFxcLnN2ZyRcIjsiLCJmdW5jdGlvbiByZWR1Y2VBUElBbnN3ZXIgKG9iaikge1xuICAgIC8vIGZ1bmN0aW9uIHRha2VzIG9iamVjdCBmcm9tIEFQSS1jYWxsIGFuZCByZXR1cm5zIG9iamVjdCB3aXRoIG5lY2VzYXJyeSBkYXRhXG4gICAgY29uc3QgcmVzdWx0ID0ge307IC8vIE9iamVjdCB0byBiZSByZXR1cm5lZCBcblxuICAgIC8vIEFkZHMgbG9jYXRpb25cbiAgICBjb25zdCB7cmVzb2x2ZWRBZGRyZXNzfSA9IG9iajtcbiAgICByZXN1bHQubG9jYXRpb24gPSByZXNvbHZlZEFkZHJlc3M7XG4gICAgXG4gICAgLy8gQWRkcyBDdXJyZW50IGNvbmRpdGlvbnNcbiAgICBjb25zdCB7Y3VycmVudENvbmRpdGlvbnMgOiB7Y2xvdWRjb3ZlciwgZGF0ZXRpbWUsIHRlbXAsIHByZWNpcCwgaHVtaWRpdHksIGNvbmRpdGlvbnMsIHdpbmRkaXIsIHdpbmRndXN0LCB3aW5kc3BlZWQsIHN1bnJpc2UsIHN1bnNldCwgdXZpbmRleCwgdmlzaWJpbGl0eSwgaWNvbiB9fSA9IG9iajtcbiAgICByZXN1bHQuY3VycmVudCA9IHtjbG91ZGNvdmVyLCBkYXRldGltZSwgdGVtcCwgcHJlY2lwLCBodW1pZGl0eSwgY29uZGl0aW9ucywgd2luZGRpciwgd2luZGd1c3QsIHdpbmRzcGVlZCwgc3VucmlzZSwgc3Vuc2V0LCB1dmluZGV4LCB2aXNpYmlsaXR5LCBpY29ufTtcbiAgICBjb25zdCBjdXJyZW50SG91ciA9IHBhcnNlSW50KGRhdGV0aW1lLnNsaWNlKDAsIDIpKTsgIC8vIERldGVybWluZXMgaG91ciBmb3IgYWRkaW5nIGhvdXJseSBmb3JlY2FzdFxuICAgXG4gICAgLy8gQWRkcyA1IGRheSBmb3JlY2FzdCBcbiAgICBjb25zdCBmb3JlY2FzdCA9IFtdO1xuICAgIGNvbnN0IHtkYXlzfSA9IG9iajsgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgY29uc3Qge2RhdGV0aW1lLCB0ZW1wbWluLCB0ZW1wbWF4LCBwcmVjaXBwcm9iLCBjbG91ZGNvdmVyLCB3aW5kZGlyLCB3aW5kc3BlZWQsIGljb259ID0gZGF5c1tpKzFdO1xuICAgICAgICBmb3JlY2FzdFtpXSA9IHtkYXRldGltZSwgdGVtcG1pbiwgdGVtcG1heCwgcHJlY2lwcHJvYiwgY2xvdWRjb3Zlciwgd2luZGRpciwgd2luZHNwZWVkLCBpY29ufTtcbiAgICB9XG4gICAgcmVzdWx0LmZvcmVjYXN0ID0gZm9yZWNhc3Q7XG5cbiAgICAvLyBBZGRzIDYgaG91ciBmb3JlY2FzdFxuICAgIGNvbnN0IGhvdXJseSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKXtcbiAgICAgICAgbGV0IGhvdXIgPSBjdXJyZW50SG91ciArIDEgKyBpO1xuICAgICAgICBpZiAoaG91ciA8IDI0KSB7XG4gICAgICAgICAgICBjb25zdCB7ZGF0ZXRpbWUsIHRlbXAsIHByZWNpcHByb2IsIHdpbmRzcGVlZCwgd2luZGRpciwgY2xvdWRjb3ZlciwgaWNvbn0gPSBkYXlzWzBdLmhvdXJzW2hvdXJdO1xuICAgICAgICAgICAgaG91cmx5W2ldID0ge2RhdGV0aW1lLCB0ZW1wLCBwcmVjaXBwcm9iLCB3aW5kc3BlZWQsIHdpbmRkaXIsIGNsb3VkY292ZXIsIGljb259O1xuICAgICAgICB9XG4gICAgICAgIGlmIChob3VyID49IDI0KSB7XG4gICAgICAgICAgICBob3VyIC09IDI0O1xuICAgICAgICAgICAgY29uc3Qge2RhdGV0aW1lLCB0ZW1wLCBwcmVjaXBwcm9iLCB3aW5kc3BlZWQsIHdpbmRkaXIsIGNsb3VkY292ZXIsIGljb259ID0gZGF5c1sxXS5ob3Vyc1tob3VyXTtcbiAgICAgICAgICAgIGhvdXJseVtpXSA9IHtkYXRldGltZSwgdGVtcCwgcHJlY2lwcHJvYiwgd2luZHNwZWVkLCB3aW5kZGlyLCBjbG91ZGNvdmVyLCBpY29ufTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQuaG91cmx5ID0gaG91cmx5O1xuICAgIFxucmV0dXJuIHJlc3VsdDsgXG59XG5cblxuZXhwb3J0IHtyZWR1Y2VBUElBbnN3ZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBxdWVyeUFQSSB9IGZyb20gJy4vYXBpJ1xuaW1wb3J0IHsgcmVkdWNlQVBJQW5zd2VyIH0gZnJvbSAnLi9qc29uJztcbmltcG9ydCB7IHdlYlBhZ2UgfSBmcm9tICcuL0dVSSc7XG5pbXBvcnQgeyBjcmVhdGVXZWJTaXRlIH0gZnJvbSAnLi9HVUkyJztcblxuXG4vL2ltcG9ydCAnLi9pbmRleC5odG1sJztcbi8qXG5JbnRyb2R1Y3Rpb25cblxuVXNlIGV2ZXJ5dGhpbmcgd2XigJl2ZSBiZWVuIGRpc2N1c3NpbmcgdG8gY3JlYXRlIGEgd2VhdGhlciBmb3JlY2FzdCBzaXRlIHVzaW5nIHRoZSBWaXN1YWwgQ3Jvc3NpbmcgQVBJIGZyb20gcHJldmlvdXMgbGVzc29ucy4gWW91IHNob3VsZCBiZSBhYmxlIHRvIHNlYXJjaCBmb3IgYSBzcGVjaWZpYyBsb2NhdGlvbiBhbmQgdG9nZ2xlIGRpc3BsYXlpbmcgdGhlIGRhdGEgaW4gRmFocmVuaGVpdCBvciBDZWxzaXVzLlxuXG5Zb3Ugc2hvdWxkIGNoYW5nZSB0aGUgbG9vayBvZiB0aGUgcGFnZSBiYXNlZCBvbiB0aGUgZGF0YSwgbWF5YmUgYnkgY2hhbmdpbmcgdGhlIGNvbG9yIG9mIHRoZSBiYWNrZ3JvdW5kIG9yIGJ5IGFkZGluZyBpbWFnZXMgdGhhdCBkZXNjcmliZSB0aGUgd2VhdGhlci4gKFlvdSBjb3VsZCBldmVuIHVzZSB0aGUgR2lwaHkgQVBJIHRvIGZpbmQgYXBwcm9wcmlhdGUgd2VhdGhlci1yZWxhdGVkIGdpZnMgYW5kIGRpc3BsYXkgdGhlbSkuIEZlZWwgZnJlZSB0byB1c2UgcHJvbWlzZXMgb3IgYXN5bmMvYXdhaXQgaW4geW91ciBjb2RlLCB0aG91Z2ggeW91IHNob3VsZCB0cnkgdG8gYmVjb21lIGNvbWZvcnRhYmxlIHdpdGggYm90aC5cblxuICAgIFNldCB1cCBhIGJsYW5rIEhUTUwgZG9jdW1lbnQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgbGlua3MgdG8geW91ciBKYXZhU2NyaXB0IGFuZCBDU1MgZmlsZXMuXG4gICAgV3JpdGUgdGhlIGZ1bmN0aW9ucyB0aGF0IGhpdCB0aGUgQVBJLiBZb3XigJlyZSBnb2luZyB0byB3YW50IGZ1bmN0aW9ucyB0aGF0IGNhbiB0YWtlIGEgbG9jYXRpb24gYW5kIHJldHVybiB0aGUgd2VhdGhlciBkYXRhIGZvciB0aGF0IGxvY2F0aW9uLiBGb3Igbm93LCBqdXN0IGNvbnNvbGUubG9nKCkgdGhlIGluZm9ybWF0aW9uLlxuICAgIFdyaXRlIHRoZSBmdW5jdGlvbnMgdGhhdCBwcm9jZXNzIHRoZSBKU09OIGRhdGEgeW914oCZcmUgZ2V0dGluZyBmcm9tIHRoZSBBUEkgYW5kIHJldHVybiBhbiBvYmplY3Qgd2l0aCBvbmx5IHRoZSBkYXRhIHlvdSByZXF1aXJlIGZvciB5b3VyIGFwcC5cbiAgICBTZXQgdXAgYSBmb3JtIHRoYXQgd2lsbCBsZXQgdXNlcnMgaW5wdXQgdGhlaXIgbG9jYXRpb24gYW5kIHdpbGwgZmV0Y2ggdGhlIHdlYXRoZXIgaW5mbyAoc3RpbGwganVzdCBjb25zb2xlLmxvZygpIGl0KS5cbiAgICBEaXNwbGF5IHRoZSBpbmZvcm1hdGlvbiBvbiB5b3VyIHdlYnBhZ2UhXG4gICAgQWRkIGFueSBzdHlsaW5nIHlvdSBsaWtlIVxuICAgIE9wdGlvbmFsOiBhZGQgYSDigJhsb2FkaW5n4oCZIGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGZyb20gdGhlIHRpbWUgdGhlIGZvcm0gaXMgc3VibWl0dGVkIHVudGlsIHRoZSBpbmZvcm1hdGlvbiBjb21lcyBiYWNrIGZyb20gdGhlIEFQSS4gVXNlIERldlRvb2xzIHRvIHRlc3QgZm9yIGxvdy1lbmQgZGV2aWNlcy5cbiAgICBQdXNoIHRoYXQgYmFieSB0byBnaXRodWIgYW5kIHNoYXJlIHlvdXIgc29sdXRpb24gYmVsb3chXG4qL1xuXG5cblxubGV0IHJlc3VsdCA9IHF1ZXJ5QVBJKCd6b2V0ZXJtZWVyJyk7XG5yZXN1bHQudGhlbigocmVzdWx0KSA9PiByZWR1Y2VBUElBbnN3ZXIocmVzdWx0KSkudGhlbigoZGF0YSkgPT4gY3JlYXRlV2ViU2l0ZShkYXRhKSk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9