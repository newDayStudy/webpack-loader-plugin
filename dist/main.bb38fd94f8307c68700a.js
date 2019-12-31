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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "mng9");
/******/ })
/************************************************************************/
/******/ ({

/***/ "EVdn":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/jquery/dist/jquery.js from dll-reference main_17bf96d1da83fdc0c2ca ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference main_17bf96d1da83fdc0c2ca */ \"R5Lg\"))(27);\n\n//# sourceURL=webpack:///delegated_./node_modules/jquery/dist/jquery.js_from_dll-reference_main_17bf96d1da83fdc0c2ca?");

/***/ }),

/***/ "R5Lg":
/*!********************************************!*\
  !*** external "main_17bf96d1da83fdc0c2ca" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = main_17bf96d1da83fdc0c2ca;\n\n//# sourceURL=webpack:///external_%22main_17bf96d1da83fdc0c2ca%22?");

/***/ }),

/***/ "mng9":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(jquery, axios) {console.log(1);\n\nconsole.log(Object({\"a\":1}));\n\nconsole.log(jquery);\nconsole.log(axios);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"EVdn\"), __webpack_require__(/*! axios */ \"vDqi\")))\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "vDqi":
/*!********************************************************************************************!*\
  !*** delegated ./node_modules/axios/index.js from dll-reference main_17bf96d1da83fdc0c2ca ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference main_17bf96d1da83fdc0c2ca */ \"R5Lg\"))(26);\n\n//# sourceURL=webpack:///delegated_./node_modules/axios/index.js_from_dll-reference_main_17bf96d1da83fdc0c2ca?");

/***/ })

/******/ });