(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BUnits"] = factory();
	else
		root["BUnits"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./src/js/array/index.js":
/*!*******************************!*\
  !*** ./src/js/array/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * get interval
 * @param {*} _start
 * @param {*} _end
 * @returns [1900, 1901, ... , 2050]
 */
function getInterval(_start, _end) {
  if (_start > _end) {
    throw new Error('Parameter error');
    return;
  }

  var _arr = [];

  for (var i = _start; i <= _end; i++) {
    _arr.push(i);
  }

  return _arr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getInterval: getInterval
});

/***/ }),

/***/ "./src/js/date/index.js":
/*!******************************!*\
  !*** ./src/js/date/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./year */ "./src/js/date/year.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Year: _objectSpread({}, _year__WEBPACK_IMPORTED_MODULE_1__.default)
});

/***/ }),

/***/ "./src/js/date/year.js":
/*!*****************************!*\
  !*** ./src/js/date/year.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _array_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/index */ "./src/js/array/index.js");


function getIntervalYear() {
  var _startYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1900;

  var _endYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2050;

  return _array_index__WEBPACK_IMPORTED_MODULE_0__.default.getInterval(_startYear, _endYear);
}

function isLeapYear(_year) {
  var _remainder1 = _year % 400;

  var _remainder2 = _year % 4;

  return _remainder1 === 0 || _remainder2 === 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getIntervalYear: getIntervalYear,
  isLeapYear: isLeapYear
});

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./src/js/array/index.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date */ "./src/js/date/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  _Array: _objectSpread({}, _array__WEBPACK_IMPORTED_MODULE_1__.default),
  _Date: _objectSpread({}, _date__WEBPACK_IMPORTED_MODULE_2__.default)
});
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7O0FDVmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNBLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCQyxJQUE3QixFQUFtQztBQUNqQyxNQUFJRCxNQUFNLEdBQUdDLElBQWIsRUFBbUI7QUFDakIsVUFBTSxJQUFJQyxLQUFKLENBQVUsaUJBQVYsQ0FBTjtBQUNBO0FBQ0Q7O0FBQ0QsTUFBTUMsSUFBSSxHQUFHLEVBQWI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUdKLE1BQWIsRUFBcUJJLENBQUMsSUFBSUgsSUFBMUIsRUFBZ0NHLENBQUMsRUFBakMsRUFBcUM7QUFDbkNELElBQUFBLElBQUksQ0FBQ0UsSUFBTCxDQUFVRCxDQUFWO0FBQ0Q7O0FBQ0QsU0FBT0QsSUFBUDtBQUNEOztBQUNELGlFQUFlO0FBQ2JKLEVBQUFBLFdBQVcsRUFBRUE7QUFEQSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQSxpRUFBZTtBQUNiTyxFQUFBQSxJQUFJLG9CQUFPQSwwQ0FBUDtBQURTLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7O0FBRUEsU0FBU0UsZUFBVCxHQUE2RDtBQUFBLE1BQXBDQyxVQUFvQyx1RUFBdkIsSUFBdUI7O0FBQUEsTUFBakJDLFFBQWlCLHVFQUFOLElBQU07O0FBQzNELFNBQU9ILDZEQUFBLENBQW1CRSxVQUFuQixFQUErQkMsUUFBL0IsQ0FBUDtBQUNEOztBQUVELFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3pCLE1BQU1DLFdBQVcsR0FBR0QsS0FBSyxHQUFHLEdBQTVCOztBQUNBLE1BQU1FLFdBQVcsR0FBR0YsS0FBSyxHQUFHLENBQTVCOztBQUNBLFNBQU9DLFdBQVcsS0FBSyxDQUFoQixJQUFxQkMsV0FBVyxLQUFLLENBQTVDO0FBQ0Q7O0FBRUQsaUVBQWU7QUFDYk4sRUFBQUEsZUFBZSxFQUFFQSxlQURKO0FBRWJHLEVBQUFBLFVBQVUsRUFBRUE7QUFGQyxDQUFmLEU7Ozs7OztVQ1pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0EsaUVBQWU7QUFDYkosRUFBQUEsTUFBTSxvQkFBT0EsMkNBQVAsQ0FETztBQUViUSxFQUFBQSxLQUFLLG9CQUFPQSwwQ0FBUDtBQUZRLENBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL0JVbml0cy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQlVuaXRzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0JVbml0cy8uL3NyYy9qcy9hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9CVW5pdHMvLi9zcmMvanMvZGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9CVW5pdHMvLi9zcmMvanMvZGF0ZS95ZWFyLmpzIiwid2VicGFjazovL0JVbml0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CVW5pdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0JVbml0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0JVbml0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0JVbml0cy8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJCVW5pdHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQlVuaXRzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiLyoqXHJcbiAqIGdldCBpbnRlcnZhbFxyXG4gKiBAcGFyYW0geyp9IF9zdGFydFxyXG4gKiBAcGFyYW0geyp9IF9lbmRcclxuICogQHJldHVybnMgWzE5MDAsIDE5MDEsIC4uLiAsIDIwNTBdXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJbnRlcnZhbChfc3RhcnQsIF9lbmQpIHtcclxuICBpZiAoX3N0YXJ0ID4gX2VuZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgZXJyb3InKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGNvbnN0IF9hcnIgPSBbXVxyXG4gIGZvciAobGV0IGkgPSBfc3RhcnQ7IGkgPD0gX2VuZDsgaSsrKSB7XHJcbiAgICBfYXJyLnB1c2goaSlcclxuICB9XHJcbiAgcmV0dXJuIF9hcnJcclxufVxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0SW50ZXJ2YWw6IGdldEludGVydmFsXHJcbn1cclxuIiwiaW1wb3J0IFllYXIgZnJvbSAnLi95ZWFyJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgWWVhcjogeyAuLi5ZZWFyIH1cclxufVxyXG4iLCJpbXBvcnQgX0FycmF5IGZyb20gJy4uL2FycmF5L2luZGV4J1xyXG5cclxuZnVuY3Rpb24gZ2V0SW50ZXJ2YWxZZWFyKF9zdGFydFllYXIgPSAxOTAwLCBfZW5kWWVhciA9IDIwNTApIHtcclxuICByZXR1cm4gX0FycmF5LmdldEludGVydmFsKF9zdGFydFllYXIsIF9lbmRZZWFyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0xlYXBZZWFyKF95ZWFyKSB7XHJcbiAgY29uc3QgX3JlbWFpbmRlcjEgPSBfeWVhciAlIDQwMFxyXG4gIGNvbnN0IF9yZW1haW5kZXIyID0gX3llYXIgJSA0XHJcbiAgcmV0dXJuIF9yZW1haW5kZXIxID09PSAwIHx8IF9yZW1haW5kZXIyID09PSAwXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXRJbnRlcnZhbFllYXI6IGdldEludGVydmFsWWVhcixcclxuICBpc0xlYXBZZWFyOiBpc0xlYXBZZWFyXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgX0FycmF5IGZyb20gJy4vYXJyYXknXHJcbmltcG9ydCBfRGF0ZSBmcm9tICcuL2RhdGUnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBfQXJyYXk6IHsgLi4uX0FycmF5IH0sXHJcbiAgX0RhdGU6IHsgLi4uX0RhdGUgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJnZXRJbnRlcnZhbCIsIl9zdGFydCIsIl9lbmQiLCJFcnJvciIsIl9hcnIiLCJpIiwicHVzaCIsIlllYXIiLCJfQXJyYXkiLCJnZXRJbnRlcnZhbFllYXIiLCJfc3RhcnRZZWFyIiwiX2VuZFllYXIiLCJpc0xlYXBZZWFyIiwiX3llYXIiLCJfcmVtYWluZGVyMSIsIl9yZW1haW5kZXIyIiwiX0RhdGUiXSwic291cmNlUm9vdCI6IiJ9