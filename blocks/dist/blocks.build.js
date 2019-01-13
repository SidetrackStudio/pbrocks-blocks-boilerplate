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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n.js */ "./blocks/src/i18n.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_i18n_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _boilerplate_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boilerplate/block */ "./blocks/src/boilerplate/block.js");
/* harmony import */ var _using_notices_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./using-notices/block */ "./blocks/src/using-notices/block.js");
/**
 * Import internationalization
 */




/***/ }),

/***/ "./blocks/src/boilerplate/block.js":
/*!*****************************************!*\
  !*** ./blocks/src/boilerplate/block.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/boilerplate/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Internal block libraries
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


/**
 * Register block
 */

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('pbrocks-boilerplate/boilerplate', {
  title: __('Block Boilerplate', 'pbrocks-boilerplate'),
  description: __('An example block.', 'pbrocks-boilerplate'),
  category: 'pbrocks-boilerplate',
  icon: {
    background: '#29c8aa',
    foreground: '#ffffff',
    src: 'admin-site'
  },
  keywords: [__('Boilerplate', 'pbrocks-boilerplate'), __('Hello World', 'pbrocks-boilerplate'), __('Example', 'pbrocks-boilerplate')],
  attributes: {},
  edit: function edit(props) {
    var className = props.className;
    return wp.element.createElement("div", {
      className: "{ className } "
    }, wp.element.createElement("h2", null, __('Hello Backend!!', 'pbrocks-boilerplate')), wp.element.createElement("h2", {
      className: "message-love"
    }, __('Love,', 'pbrocks-boilerplate')), wp.element.createElement("h3", null, __('the Edit method', 'pbrocks-boilerplate')), wp.element.createElement("h4", null, __('(in block.js).', 'pbrocks-boilerplate')));
  },
  save: function save(props) {
    var className = props.className;
    return wp.element.createElement("div", {
      className: "message-frontend"
    }, wp.element.createElement("h2", null, __('Hello Frontend!!', 'pbrocks-boilerplate')), wp.element.createElement("h2", {
      className: "message-love"
    }, __('Love,', 'pbrocks-boilerplate')), wp.element.createElement("h3", null, __('the Save method', 'pbrocks-boilerplate')), wp.element.createElement("h4", null, __('(in block.js).', 'pbrocks-boilerplate')));
  }
}));

/***/ }),

/***/ "./blocks/src/boilerplate/style.scss":
/*!*******************************************!*\
  !*** ./blocks/src/boilerplate/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/i18n.js":
/*!****************************!*\
  !*** ./blocks/src/i18n.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

wp.i18n.setLocaleData({
  '': {}
}, 'pbrocks-boilerplate');

/***/ }),

/***/ "./blocks/src/using-notices/block.js":
/*!*******************************************!*\
  !*** ./blocks/src/using-notices/block.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/using-notices/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Internal block libraries
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    ClipboardButton = _wp$components.ClipboardButton,
    Tooltip = _wp$components.Tooltip,
    withNotices = _wp$components.withNotices,
    Button = _wp$components.Button;
var Fragment = wp.element.Fragment;
var withState = wp.compose.withState;


var ButtonWithNotice = withNotices(function (_ref) {
  var noticeOperations = _ref.noticeOperations,
      noticeUI = _ref.noticeUI;

  var addError = function addError() {
    return noticeOperations.createErrorNotice('Notices only appear in the editor, according to the Handbook. See references below..');
  };

  return wp.element.createElement("div", null, noticeUI, wp.element.createElement("h3", null, __('Clicking the button will trigger a dismissible notice.')), wp.element.createElement(Button, {
    isDefault: true,
    onClick: addError
  }, "Add error"), wp.element.createElement("p", null, "For more info consult: \xA0", wp.element.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/gutenberg/handbook/designers-developers/developers/components/notice/"
  }, "Notice Component"), ", \xA0", wp.element.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/gutenberg/handbook/designers-developers/developers/components/with-notices/"
  }, "withNotices Component"), ", and \xA0", wp.element.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/gutenberg/handbook/designers-developers/developers/data/data-core-notices/"
  }, "Core Notices Data"), "."));
});
/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('pbrocks-boilerplate/using-notices', {
  title: __('Using Notices', 'pbrocks-boilerplate'),
  description: __('Demonstrating how to use.', 'pbrocks-boilerplate'),
  category: 'pbrocks-boilerplate',
  icon: {
    background: '#29c8aa',
    foreground: '#ffffff',
    src: 'admin-site'
  },
  keywords: [__('Boilerplate', 'pbrocks-boilerplate'), __('Hello World', 'pbrocks-boilerplate'), __('Example', 'pbrocks-boilerplate')],
  attributes: {},
  edit: function edit(props) {
    var className = props.className;
    return wp.element.createElement("div", {
      className: "message-backend"
    }, wp.element.createElement(ButtonWithNotice, null));
  },
  save: function save(props) {
    var className = props.className;
    return wp.element.createElement("div", {
      className: "message-frontend"
    }, wp.element.createElement("h3", null, __('According to the Handbook, Notices only appear in the editor.')), wp.element.createElement("p", null, "For more info consult: \xA0", wp.element.createElement("a", {
      target: "_blank",
      href: "https://wordpress.org/gutenberg/handbook/designers-developers/developers/components/notice/"
    }, "Notice Component"), ", \xA0", wp.element.createElement("a", {
      target: "_blank",
      href: "https://wordpress.org/gutenberg/handbook/designers-developers/developers/components/with-notices/"
    }, "withNotices Component"), ", and \xA0", wp.element.createElement("a", {
      target: "_blank",
      href: "https://wordpress.org/gutenberg/handbook/designers-developers/developers/data/data-core-notices/"
    }, "Core Notices Data"), "."));
  }
}));

/***/ }),

/***/ "./blocks/src/using-notices/style.scss":
/*!*********************************************!*\
  !*** ./blocks/src/using-notices/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ib2lsZXJwbGF0ZS9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2JvaWxlcnBsYXRlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9pMThuLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdXNpbmctbm90aWNlcy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3VzaW5nLW5vdGljZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaWNvbiIsImJhY2tncm91bmQiLCJmb3JlZ3JvdW5kIiwic3JjIiwia2V5d29yZHMiLCJhdHRyaWJ1dGVzIiwiZWRpdCIsInByb3BzIiwiY2xhc3NOYW1lIiwic2F2ZSIsInNldExvY2FsZURhdGEiLCJjb21wb25lbnRzIiwiQ2xpcGJvYXJkQnV0dG9uIiwiVG9vbHRpcCIsIndpdGhOb3RpY2VzIiwiQnV0dG9uIiwiRnJhZ21lbnQiLCJlbGVtZW50Iiwid2l0aFN0YXRlIiwiY29tcG9zZSIsIkJ1dHRvbldpdGhOb3RpY2UiLCJub3RpY2VPcGVyYXRpb25zIiwibm90aWNlVUkiLCJhZGRFcnJvciIsImNyZWF0ZUVycm9yTm90aWNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7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QUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUssS0FBNkI7QUFDbEM7QUFDQTtBQUNBLEVBQUUsVUFBVSxJQUE0RTtBQUN4RjtBQUNBLEVBQUUsaUNBQXFCLEVBQUUsbUNBQUU7QUFDM0I7QUFDQSxHQUFHO0FBQUEsb0dBQUM7QUFDSixFQUFFLE1BQU0sRUFFTjtBQUNGLENBQUMiLCJmaWxlIjoiYmxvY2tzLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qc1wiKTtcbiIsIi8qKlxuICogSW1wb3J0IGludGVybmF0aW9uYWxpemF0aW9uXG4gKi9cbmltcG9ydCAnLi9pMThuLmpzJztcblxuXG5pbXBvcnQgJy4vYm9pbGVycGxhdGUvYmxvY2snO1xuaW1wb3J0ICcuL3VzaW5nLW5vdGljZXMvYmxvY2snO1xuXG4iLCIvKipcbiAqIEludGVybmFsIGJsb2NrIGxpYnJhcmllc1xuICovXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vKipcbiAqIFJlZ2lzdGVyIGJsb2NrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKCAncGJyb2Nrcy1ib2lsZXJwbGF0ZS9ib2lsZXJwbGF0ZScsIHtcblx0dGl0bGU6IF9fKCAnQmxvY2sgQm9pbGVycGxhdGUnLCAncGJyb2Nrcy1ib2lsZXJwbGF0ZScgKSxcblxuXHRkZXNjcmlwdGlvbjogX18oICdBbiBleGFtcGxlIGJsb2NrLicsICdwYnJvY2tzLWJvaWxlcnBsYXRlJyApLFxuXG5cdGNhdGVnb3J5OiAncGJyb2Nrcy1ib2lsZXJwbGF0ZScsXG5cblx0aWNvbjoge1xuXHRcdGJhY2tncm91bmQ6ICcjMjljOGFhJyxcblx0XHRmb3JlZ3JvdW5kOiAnI2ZmZmZmZicsXG5cdFx0c3JjOidhZG1pbi1zaXRlJyxcblx0fSxcblxuXHRrZXl3b3JkczogW1xuXHRcdF9fKCAnQm9pbGVycGxhdGUnLCAncGJyb2Nrcy1ib2lsZXJwbGF0ZScgKSxcblx0XHRfXyggJ0hlbGxvIFdvcmxkJywgJ3Bicm9ja3MtYm9pbGVycGxhdGUnICksXG5cdFx0X18oICdFeGFtcGxlJywgJ3Bicm9ja3MtYm9pbGVycGxhdGUnICksXG5cdF0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0fSxcblxuXHRlZGl0OiBwcm9wcyA9PiB7XG5cdFx0Y29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInsgY2xhc3NOYW1lIH0gXCIgPlxuXHRcdFx0PGgyPnsgX18oICdIZWxsbyBCYWNrZW5kISEnLCAncGJyb2Nrcy1ib2lsZXJwbGF0ZScgKSB9PC9oMj5cblx0XHRcdDxoMiBjbGFzc05hbWU9XCJtZXNzYWdlLWxvdmVcIj57IF9fKCAnTG92ZSwnLCAncGJyb2Nrcy1ib2lsZXJwbGF0ZScgKSB9PC9oMj5cblx0XHRcdDxoMz57IF9fKCAndGhlIEVkaXQgbWV0aG9kJywgJ3Bicm9ja3MtYm9pbGVycGxhdGUnICkgfTwvaDM+XG5cdFx0XHQ8aDQ+eyBfXyggJyhpbiBibG9jay5qcykuJywgJ3Bicm9ja3MtYm9pbGVycGxhdGUnICkgfTwvaDQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXG5cdHNhdmU6IHByb3BzID0+IHtcblx0XHRjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1mcm9udGVuZFwiID5cblx0XHRcdDxoMj57IF9fKCAnSGVsbG8gRnJvbnRlbmQhIScsICdwYnJvY2tzLWJvaWxlcnBsYXRlJyApIH08L2gyPlxuXHRcdFx0PGgyIGNsYXNzTmFtZT1cIm1lc3NhZ2UtbG92ZVwiPnsgX18oICdMb3ZlLCcsICdwYnJvY2tzLWJvaWxlcnBsYXRlJyApIH08L2gyPlxuXHRcdFx0PGgzPnsgX18oICd0aGUgU2F2ZSBtZXRob2QnLCAncGJyb2Nrcy1ib2lsZXJwbGF0ZScgKSB9PC9oMz5cblx0XHRcdDxoND57IF9fKCAnKGluIGJsb2NrLmpzKS4nLCAncGJyb2Nrcy1ib2lsZXJwbGF0ZScgKSB9PC9oND5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG59KTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwid3AuaTE4bi5zZXRMb2NhbGVEYXRhKCB7ICcnOiB7fSB9LCAncGJyb2Nrcy1ib2lsZXJwbGF0ZScgKTtcbiIsIi8qKlxuICogSW50ZXJuYWwgYmxvY2sgbGlicmFyaWVzXG4gKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0Q2xpcGJvYXJkQnV0dG9uLFxuXHRUb29sdGlwLFxuXHR3aXRoTm90aWNlcyxcblx0QnV0dG9uLFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyB3aXRoU3RhdGUgfSA9IHdwLmNvbXBvc2U7XG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBCdXR0b25XaXRoTm90aWNlID0gd2l0aE5vdGljZXMoXG4gICAgKCB7IG5vdGljZU9wZXJhdGlvbnMsIG5vdGljZVVJIH0gKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZEVycm9yID0gKCkgPT4gbm90aWNlT3BlcmF0aW9ucy5jcmVhdGVFcnJvck5vdGljZSggJ05vdGljZXMgb25seSBhcHBlYXIgaW4gdGhlIGVkaXRvciwgYWNjb3JkaW5nIHRvIHRoZSBIYW5kYm9vay4gU2VlIHJlZmVyZW5jZXMgYmVsb3cuLicgKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgeyBub3RpY2VVSSB9XG5cdFx0XHRcdDxoMz57IF9fKCAnQ2xpY2tpbmcgdGhlIGJ1dHRvbiB3aWxsIHRyaWdnZXIgYSBkaXNtaXNzaWJsZSBub3RpY2UuJyApIH08L2gzPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gaXNEZWZhdWx0IG9uQ2xpY2s9eyBhZGRFcnJvciB9PkFkZCBlcnJvcjwvQnV0dG9uPlxuIFx0XHRcdFx0PHA+Rm9yIG1vcmUgaW5mbyBjb25zdWx0OiBcblx0XHRcdFx0XHQmbmJzcDs8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9kZXNpZ25lcnMtZGV2ZWxvcGVycy9kZXZlbG9wZXJzL2NvbXBvbmVudHMvbm90aWNlL1wiPk5vdGljZSBDb21wb25lbnQ8L2E+LCBcblx0XHRcdFx0XHQmbmJzcDs8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9kZXNpZ25lcnMtZGV2ZWxvcGVycy9kZXZlbG9wZXJzL2NvbXBvbmVudHMvd2l0aC1ub3RpY2VzL1wiPndpdGhOb3RpY2VzIENvbXBvbmVudDwvYT4sIGFuZCBcblx0XHRcdFx0XHQmbmJzcDs8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9kZXNpZ25lcnMtZGV2ZWxvcGVycy9kZXZlbG9wZXJzL2RhdGEvZGF0YS1jb3JlLW5vdGljZXMvXCI+Q29yZSBOb3RpY2VzIERhdGE8L2E+LlxuIFx0XHRcdFx0PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckJsb2NrVHlwZSggJ3Bicm9ja3MtYm9pbGVycGxhdGUvdXNpbmctbm90aWNlcycsIHtcblxuXHR0aXRsZTogX18oICdVc2luZyBOb3RpY2VzJywgJ3Bicm9ja3MtYm9pbGVycGxhdGUnICksXG5cblx0ZGVzY3JpcHRpb246IF9fKCAnRGVtb25zdHJhdGluZyBob3cgdG8gdXNlLicsICdwYnJvY2tzLWJvaWxlcnBsYXRlJyApLFxuXG5cdGNhdGVnb3J5OiAncGJyb2Nrcy1ib2lsZXJwbGF0ZScsXG5cblx0aWNvbjoge1xuXHRcdGJhY2tncm91bmQ6ICcjMjljOGFhJyxcblx0XHRmb3JlZ3JvdW5kOiAnI2ZmZmZmZicsXG5cdFx0c3JjOidhZG1pbi1zaXRlJyxcblx0fSxcblxuXHRrZXl3b3JkczogW1xuXHRcdF9fKCAnQm9pbGVycGxhdGUnLCAncGJyb2Nrcy1ib2lsZXJwbGF0ZScgKSxcblx0XHRfXyggJ0hlbGxvIFdvcmxkJywgJ3Bicm9ja3MtYm9pbGVycGxhdGUnICksXG5cdFx0X18oICdFeGFtcGxlJywgJ3Bicm9ja3MtYm9pbGVycGxhdGUnICksXG5cdF0sXG5cdGF0dHJpYnV0ZXM6IHt9LFxuXG5cdGVkaXQ6IHByb3BzID0+IHtcblx0XHRjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1iYWNrZW5kXCIgPlxuXHRcdFx0XHQ8QnV0dG9uV2l0aE5vdGljZSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0c2F2ZTogcHJvcHMgPT4ge1xuXHRcdGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWZyb250ZW5kXCIgPlxuXHRcdFx0XHQ8aDM+eyBfXyggJ0FjY29yZGluZyB0byB0aGUgSGFuZGJvb2ssIE5vdGljZXMgb25seSBhcHBlYXIgaW4gdGhlIGVkaXRvci4nICkgfTwvaDM+XG4gXHRcdFx0XHQ8cD5Gb3IgbW9yZSBpbmZvIGNvbnN1bHQ6IFxuIFx0XHRcdFx0Jm5ic3A7PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svZGVzaWduZXJzLWRldmVsb3BlcnMvZGV2ZWxvcGVycy9jb21wb25lbnRzL25vdGljZS9cIj5Ob3RpY2UgQ29tcG9uZW50PC9hPiwgXG4gXHRcdFx0XHQmbmJzcDs8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9kZXNpZ25lcnMtZGV2ZWxvcGVycy9kZXZlbG9wZXJzL2NvbXBvbmVudHMvd2l0aC1ub3RpY2VzL1wiPndpdGhOb3RpY2VzIENvbXBvbmVudDwvYT4sIGFuZCBcbiBcdFx0XHRcdCZuYnNwOzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Rlc2lnbmVycy1kZXZlbG9wZXJzL2RldmVsb3BlcnMvZGF0YS9kYXRhLWNvcmUtbm90aWNlcy9cIj5Db3JlIE5vdGljZXMgRGF0YTwvYT4uXG4gXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxufSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=