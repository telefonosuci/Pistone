/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _my_component_MyComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-component/MyComponent.js */ \"./src/my-component/MyComponent.js\");\n\n//import Creator  from './pistone/Creator.js';\n\n\n\n\n\n\nlet component = new _my_component_MyComponent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('engine');\n\n\n\n\n\n/*console.log(\"Logging creator: \" + Creator);\n\nlet ce = new CustomHead();\nce.pushMe();\nce.push();\n\nlet appPrefix = 'p';\nlet componentName = 'engine';\nlet htmlElName = appPrefix + '-' + componentName;\n\nvar Engine = document.registerElement(htmlElName);\n\n//document.body.appendChild(new Engine());\n\nlet pQueryEl = function(htmlElName){\n    return document.querySelectorAll(htmlElName)\n};\n\nvar elements = pQueryEl(htmlElName);\nvar scope = {};\n\nconsole.log('Elements: ', elements);\n\nelements.forEach(function(element) {\n    element.innerHTML = '<p>Ciao, ho sostituito l\\'HTML con un template</p>';\n});\n*/\n\n\n/*\n\n(function() {\n\n    //var Creator = require('./Creator.js');\n\n    import Creator from 'Creator';\n    console.log(Creator);\n\n    let appPrefix = 'p';\n    let componentName = 'engine';\n    let htmlElName = appPrefix + '-' + componentName;\n\n    var Engine = document.registerElement(htmlElName);\n\n    //document.body.appendChild(new Engine());\n\n    let pQueryEl = function(htmlElName){\n        return document.querySelectorAll(htmlElName)\n    };\n\n    var elements = pQueryEl(htmlElName);\n    var scope = {};\n\n    console.log('Elements: ', elements);\n\n    elements.forEach(function(element) {\n        element.innerHTML = '<p>Ciao, ho sostituito l\\'HTML con un template</p>';\n    });\n\n/*\n\n    var elements = document.querySelectorAll('[data-tw-bind]'),\n        scope = {};\n    elements.forEach(function(element) {\n        //execute scope setter\n        if(element.type === 'text'|| element.type === 'textarea'){\n            var propToBind = element.getAttribute('data-tw-bind');\n            addScopeProp(propToBind);\n            element.onkeyup = function(){\n                scope[propToBind] = element.value;\n            }\n        };\n\n        //bind prop to elements\n        function addScopeProp(prop){\n            //add property if needed\n            if(!scope.hasOwnProperty(prop)){\n                //value to populate with newvalue\n                var value;\n                Object.defineProperty(scope, prop, {\n                    set: function (newValue) {\n                        value = newValue;\n                        elements.forEach(function(element){\n                            //change value to binded elements\n                            if(element.getAttribute('data-tw-bind') === prop){\n                                if(element.type && (element.type === 'text' ||\n                                    element.type === 'textarea')){\n                                    element.value = newValue;\n                                }\n                                else if(!element.type){\n                                    element.innerHTML = newValue;\n                                }\n                            }\n                        });\n                    },\n                    get: function(){\n                        return value;\n                    },\n                    enumerable: true\n                });\n            }\n        }\n    });\n\n    log = function() {\n        Object.keys(scope).forEach(function(key){\n            console.log(key + ': ' + scope[key]);\n        });\n    }\n\n    changeNameByCode = function() {\n        scope.name = 'name Changed by Code';\n    }\n\n    changeSurnameByCode = function() {\n        scope.surname = 'surname Changed by Code';\n    }\n*\n})();\n*/\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/my-component/MyComponent.html":
/*!*******************************************!*\
  !*** ./src/my-component/MyComponent.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div>\\n    <p>this is my custom engine!</p>\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/my-component/MyComponent.html?");

/***/ }),

/***/ "./src/my-component/MyComponent.js":
/*!*****************************************!*\
  !*** ./src/my-component/MyComponent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyComponent; });\n/* harmony import */ var _pistone_Engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pistone/Engine.js */ \"./src/pistone/Engine.js\");\n/* harmony import */ var _MyComponent_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyComponent.html */ \"./src/my-component/MyComponent.html\");\n/* harmony import */ var _MyComponent_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MyComponent_html__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nclass MyComponent extends _pistone_Engine_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor (name) {\n        super(name);\n    };\n\n    push(){\n\n        console.log('Pushing...');\n    };\n\n\n}\n\n//# sourceURL=webpack:///./src/my-component/MyComponent.js?");

/***/ }),

/***/ "./src/pistone/Engine.js":
/*!*******************************!*\
  !*** ./src/pistone/Engine.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Engine; });\n/* harmony import */ var _Piston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piston */ \"./src/pistone/Piston.js\");\n\n\n\nclass Engine {\n\n    constructor(name){\n        /** \n            [Deprecation] document.registerElement is deprecated and will be removed in M80, around February 2020. Please use window.customElements.define instead. See https://www.chromestatus.com/features/4642138092470272 and https://developers.google.com/web/updates/2019/07/web-components-time-to-upgrade for more details.\n        */\n        \n        document.registerElement('ps-' + name);\n        //console.log(template);\n\n        let els = document.querySelectorAll('ps-' + name)\n\n        els.forEach(function(element) {\n            element.innerHTML = '<p>Ciao, ho sostituito l\\'HTML con un template</p>';\n        });\n\n    }\n\n    piston(){\n\n        return new _Piston__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    }\n\n}\n\n//# sourceURL=webpack:///./src/pistone/Engine.js?");

/***/ }),

/***/ "./src/pistone/Piston.js":
/*!*******************************!*\
  !*** ./src/pistone/Piston.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pistone; });\n\n\nclass Pistone {\n\n\n}\n\n//# sourceURL=webpack:///./src/pistone/Piston.js?");

/***/ })

/******/ });