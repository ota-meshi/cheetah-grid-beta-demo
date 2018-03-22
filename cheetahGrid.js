/*! Cheetah Grid v0.2.0 | license MIT */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cheetahGrid"] = factory();
	else
		root["cheetahGrid"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/css-loader/index.js?minimize!./columns/action/internal/InlineInputElement.css":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader?minimize!./columns/action/internal/InlineInputElement.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cheetah-grid__inline-input::-ms-clear{visibility:hidden}.cheetah-grid__inline-input{position:absolute;box-sizing:border-box}", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js?minimize!./columns/action/internal/InlineMenuElement.css":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader?minimize!./columns/action/internal/InlineMenuElement.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cheetah-grid__inline-menu{position:absolute;color:rgba(0,0,0,.87);box-sizing:content-box;margin:-1px auto auto -1px;padding:8px 0;background-color:#fafafa;list-style-type:none;border-radius:2px;max-height:calc(100vh - 40px);overflow-y:auto}.cheetah-grid__inline-menu--hidden{transform:scale(.9);box-shadow:none;opacity:0;pointer-events:none;transition:all 50ms ease-out}.cheetah-grid__inline-menu--hidden *{pointer-events:none}.cheetah-grid__inline-menu--shown{transform:translateY(-7px);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);opacity:1;transition:all .15s ease-out}.cheetah-grid__inline-menu__menu-item{height:100%;box-sizing:border-box;display:flex;align-items:center;justify-content:flex-start;outline:none;cursor:pointer;position:relative;overflow:hidden;padding:0 16px}.cheetah-grid__inline-menu__menu-item--empty{color:rgba(0,0,0,.38)}.cheetah-grid__inline-menu__menu-item:before{content:\"\";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background-color:#000;opacity:0;pointer-events:none;transition:opacity 15ms linear}.cheetah-grid__inline-menu__menu-item:hover:before,.cheetah-grid__inline-menu__menu-item[data-select]:before{opacity:.04}.cheetah-grid__inline-menu__menu-item:focus:before{opacity:.12}", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js?minimize!./columns/action/internal/SmallDialogInputElement.css":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader?minimize!./columns/action/internal/SmallDialogInputElement.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cheetah-grid__small-dialog-input__input::-ms-clear{visibility:hidden}@keyframes cheetah-grid__small-dialog-input--hidden-animation{0%{opacity:1}99%{opacity:1}to{opacity:0}}.cheetah-grid__small-dialog-input{position:absolute;box-sizing:content-box;margin:-1px auto auto -1px;border-radius:3px;background-color:#fafafa;transition:padding .15s ease-out,box-shadow .15s ease-out}.cheetah-grid__small-dialog-input--hidden{box-shadow:none;padding:0;pointer-events:none;animation:cheetah-grid__small-dialog-input--hidden-animation .15s ease-out;opacity:0}.cheetah-grid__small-dialog-input--shown{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);padding:8px 24px}.cheetah-grid__small-dialog-input__input{width:100%;height:100%;box-sizing:border-box;padding:3px 2px 0 4px;border:none;border-bottom:1px solid rgba(0,0,0,.87);outline:none;background-color:transparent;transition:all .3s ease-out}.cheetah-grid__small-dialog-input__input:focus{border-bottom:1px solid #2196f3;box-shadow:0 1px 0 0 #2196f3}.cheetah-grid__small-dialog-input:after{content:\"\";font-family:Roboto;font-size:12px;font-size:.75rem;min-height:1em;line-height:1;display:block;width:100%;padding-top:8px}.cheetah-grid__small-dialog-input.helper-text--right-justified:after{text-align:right}.cheetah-grid__small-dialog-input[data-helper-text]:after{content:attr(data-helper-text);color:rgba(0,0,0,.87)}.cheetah-grid__small-dialog-input[data-error-message] input{border-bottom:1px solid #ff1744;box-shadow:0 1px 0 0 #ff1744}.cheetah-grid__small-dialog-input[data-error-message]:after{content:attr(data-error-message);color:#ff1744;text-align:left}", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js?minimize!./columns/message/internal/ErrorMessageElement.css":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader?minimize!./columns/message/internal/ErrorMessageElement.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cheetah-grid__error-message-element{border-top:1px solid #ff1744;color:#ff1744}", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js?minimize!./columns/message/internal/MessageElement.css":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader?minimize!./columns/message/internal/MessageElement.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cheetah-grid__message-element{position:absolute;margin-top:-2px;box-sizing:border-box;border-radius:0 0 3px 3px;background-color:hsla(0,0%,98%,.85);padding:8px 2px;pointer-events:none;user-select:none}.cheetah-grid__message-element--hidden{opacity:0;display:none}.cheetah-grid__message-element__message{font-family:Roboto;font-size:12px;font-size:.75rem;min-height:1em;line-height:1;display:block;width:100%}.cheetah-grid__message-element{border-top:1px solid rgba(0,0,0,.87);color:rgba(0,0,0,.87)}.cheetah-grid__message-element.helper-text--right-justified{text-align:right}", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js?minimize!./columns/message/internal/WarningMessageElement.css":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader?minimize!./columns/message/internal/WarningMessageElement.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cheetah-grid__warning-message-element{border-top:1px solid #dd2c00;color:#dd2c00}", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js?minimize!./internal/style.css":
/*!*******************************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader?minimize!./internal/style.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cheetah-grid .grid-scrollable{height:100%;width:100%;position:absolute;overflow:scroll}.cheetah-grid .grid-scroll-end-point{opacity:0;position:relative}.cheetah-grid{position:relative;width:100%;height:100%}.cheetah-grid>canvas{position:absolute;width:0;height:0}.cheetah-grid .grid-focus-control{position:relative!important;width:1px;height:1px;opacity:0;padding:0;margin:0;box-sizing:border-box;pointer-events:none;max-width:0;max-height:0;float:none!important}.cheetah-grid input.grid-focus-control::-ms-clear{visibility:hidden}.cheetah-grid input.grid-focus-control.composition{opacity:1;max-width:none;max-height:none}", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/lib/css-base.js":
/*!*****************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader/lib/css-base.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../node_modules/style-loader/lib/addStyles.js":
/*!********************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/style-loader/lib/addStyles.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../node_modules/style-loader/lib/urls.js":
/*!***************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/style-loader/lib/urls.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/content/svg/production/ic_add_48px.svg":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/webpack-loader/svg-to-icon-js-loader.js!C:/Users/ohta2346/git/github/cheetah-grid/node_modules/material-design-icons/content/svg/production/ic_add_48px.svg ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = {
	/*
	original svg
	<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z"/></svg>
	@ material-design-icons\content\svg\production\ic_add_48px.svg
	*/
	d: 'M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z',
	width: 48,
	height: 48,
	
};

/***/ }),

/***/ "../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/image/svg/production/ic_edit_48px.svg":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/webpack-loader/svg-to-icon-js-loader.js!C:/Users/ohta2346/git/github/cheetah-grid/node_modules/material-design-icons/image/svg/production/ic_edit_48px.svg ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = {
	/*
	original svg
	<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"/></svg>
	@ material-design-icons\image\svg\production\ic_edit_48px.svg
	*/
	d: 'M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z',
	width: 48,
	height: 48,
	
};

/***/ }),

/***/ "../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/navigation/svg/production/ic_arrow_downward_48px.svg":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/webpack-loader/svg-to-icon-js-loader.js!C:/Users/ohta2346/git/github/cheetah-grid/node_modules/material-design-icons/navigation/svg/production/ic_arrow_downward_48px.svg ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = {
	/*
	original svg
	<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#010101" d="M40 24l-2.82-2.82L26 32.34V8h-4v24.34L10.84 21.16 8 24l16 16 16-16z"/></svg>
	@ material-design-icons\navigation\svg\production\ic_arrow_downward_48px.svg
	*/
	d: 'M40 24l-2.82-2.82L26 32.34V8h-4v24.34L10.84 21.16 8 24l16 16 16-16z',
	width: 48,
	height: 48,
	
};

/***/ }),

/***/ "../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/navigation/svg/production/ic_arrow_upward_48px.svg":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/webpack-loader/svg-to-icon-js-loader.js!C:/Users/ohta2346/git/github/cheetah-grid/node_modules/material-design-icons/navigation/svg/production/ic_arrow_upward_48px.svg ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = {
	/*
	original svg
	<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z"/></svg>
	@ material-design-icons\navigation\svg\production\ic_arrow_upward_48px.svg
	*/
	d: 'M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z',
	width: 48,
	height: 48,
	
};

/***/ }),

/***/ "../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/toggle/svg/production/ic_star_24px.svg":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/webpack-loader/svg-to-icon-js-loader.js!C:/Users/ohta2346/git/github/cheetah-grid/node_modules/material-design-icons/toggle/svg/production/ic_star_24px.svg ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = {
	/*
	original svg
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
	@ material-design-icons\toggle\svg\production\ic_star_24px.svg
	*/
	d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
	width: 24,
	height: 24,
	
};

/***/ }),

/***/ "../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/toggle/svg/production/ic_star_border_24px.svg":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/webpack-loader/svg-to-icon-js-loader.js!C:/Users/ohta2346/git/github/cheetah-grid/node_modules/material-design-icons/toggle/svg/production/ic_star_border_24px.svg ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = {
	/*
	original svg
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
	@ material-design-icons\toggle\svg\production\ic_star_border_24px.svg
	*/
	d: 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z',
	width: 24,
	height: 24,
	
};

/***/ }),

/***/ "../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/toggle/svg/production/ic_star_half_24px.svg":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/ohta2346/git/github/cheetah-grid/webpack-loader/svg-to-icon-js-loader.js!C:/Users/ohta2346/git/github/cheetah-grid/node_modules/material-design-icons/toggle/svg/production/ic_star_half_24px.svg ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = {
	/*
	original svg
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
	@ material-design-icons\toggle\svg\production\ic_star_half_24px.svg
	*/
	d: 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z',
	width: 24,
	height: 24,
	
};

/***/ }),

/***/ "./GridCanvasHelper.js":
/*!*****************************!*\
  !*** ./GridCanvasHelper.js ***!
  \*****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Array_dot_isArray) {/*eslint no-bitwise:0*/


{
	const { calcStartPosition } = __webpack_require__(/*! ./internal/canvases */ "./internal/canvases.js");
	const inlines = __webpack_require__(/*! ./element/inlines */ "./element/inlines.js");
	const canvashelper = __webpack_require__(/*! ./tools/canvashelper */ "./tools/canvashelper.js");
	const themes = __webpack_require__(/*! ./themes */ "./themes.js");
	const { colorToRGB } = __webpack_require__(/*! ./internal/color */ "./internal/color.js");
	const Rect = __webpack_require__(/*! ./internal/Rect */ "./internal/Rect.js");
	const { getChainSafe, getOrApply, style: { toBoxArray } } = __webpack_require__(/*! ./internal/utils */ "./internal/utils.js");
	const fonts = __webpack_require__(/*! ./internal/fonts */ "./internal/fonts.js");
	const calc = __webpack_require__(/*! ./internal/calc */ "./internal/calc.js");

	function invalidateCell(context, grid) {
		const { col, row } = context;
		grid.invalidateCell(col, row);
	}
	function getColor(color, col, row, grid, context) {
		return getOrApply(color, {
			col,
			row,
			grid,
			context
		});
	}
	function getThemeColor(grid, ...names) {
		return getChainSafe(grid.theme, ...names) || getChainSafe(themes.default, ...names);
	}
	function testFontLoad(font, value, context, grid) {
		if (font) {
			if (!fonts.check(font, value)) {
				fonts.load(font, value, () => invalidateCell(context, grid));
				return false;
			}
		}
		return true;
	}

	function drawInlines(ctx, inlines, rect, offset, offsetTop, offsetBottom, col, row, grid) {
		function drawInline(inline, offsetLeft, offsetRight) {
			if (inline.canDraw()) {
				ctx.save();
				try {
					ctx.fillStyle = getColor(inline.color() || ctx.fillStyle, col, row, grid, ctx);
					ctx.font = inline.font() || ctx.font;
					inline.draw({
						ctx,
						canvashelper,
						rect,
						offset,
						offsetLeft,
						offsetRight,
						offsetTop,
						offsetBottom
					});
				} finally {
					ctx.restore();
				}
			} else {
				inline.onReady(() => grid.invalidateCell(col, row));
				//noop
			}
		}
		if (inlines.length === 1) {
			//1件の場合は幅計算が不要なため分岐
			const inline = inlines[0];
			drawInline(inline, 0, 0);
		} else {
			const inlineWidths = inlines.map(inline => (inline.width({ ctx }) || 0) - 0);
			let offsetRight = inlineWidths.reduce((a, b) => a + b);

			let offsetLeft = 0;
			inlines.forEach((inline, index) => {
				const inlineWidth = inlineWidths[index];
				offsetRight -= inlineWidth;
				drawInline(inline, offsetLeft, offsetRight);
				offsetLeft += inlineWidth;
			});
		}
	}

	function _inlineRect(grid, ctx, inline, rect, col, row, {
		offset,
		color,
		textAlign,
		textBaseline,
		font,
		icons
	} = {}) {

		//文字style
		ctx.fillStyle = getColor(color, col, row, grid, ctx);
		ctx.textAlign = textAlign;
		ctx.textBaseline = textBaseline;
		ctx.font = font || ctx.font;

		const actInlines = inlines.buildInlines(icons, inline);
		drawInlines(ctx, actInlines, rect, offset, 0, 0, col, row, grid);
	}

	function _multiInlineRect(grid, ctx, multiInlines, rect, col, row, {
		offset,
		color,
		textAlign,
		textBaseline,
		font,
		lineHeight,
		icons
	} = {}) {
		//文字style
		ctx.fillStyle = getColor(color, col, row, grid, ctx);
		ctx.textAlign = textAlign;
		ctx.textBaseline = textBaseline;
		ctx.font = font || ctx.font;

		multiInlines = [...multiInlines];

		let paddingTop = 0;
		let paddingBottom = lineHeight * (multiInlines.length - 1);

		if (ctx.textBaseline === 'top' || ctx.textBaseline === 'hanging') {
			const em = ctx.measureText('あ').width;
			const pad = (lineHeight - em) / 2;
			paddingTop += pad;
			paddingBottom -= pad;
		} else if (ctx.textBaseline === 'bottom' || ctx.textBaseline === 'alphabetic' || ctx.textBaseline === 'ideographic') {
			const em = ctx.measureText('あ').width;
			const pad = (lineHeight - em) / 2;
			paddingTop -= pad;
			paddingBottom += pad;
		}
		const line = multiInlines.shift() || '';
		const actInlines = inlines.buildInlines(icons, line);
		drawInlines(ctx, actInlines, rect, offset, paddingTop, paddingBottom, col, row, grid);
		paddingTop += lineHeight;
		paddingBottom -= lineHeight;
		while (multiInlines.length) {
			const line = multiInlines.shift();
			const actInlines = inlines.buildInlines(undefined, line);
			drawInlines(ctx, actInlines, rect, offset, paddingTop, paddingBottom, col, row, grid);
			paddingTop += lineHeight;
			paddingBottom -= lineHeight;
		}
	}

	function drawCheckbox(ctx, rect, check, helper, {
		animElapsedTime = 1,
		uncheckBgColor = helper.theme.checkbox.uncheckBgColor,
		checkBgColor = helper.theme.checkbox.checkBgColor,
		borderColor = helper.theme.checkbox.borderColor,
		textAlign = 'center',
		textBaseline = 'middle'
	} = {}) {
		const boxWidth = canvashelper.measureCheckbox(ctx).width;
		ctx.textAlign = textAlign;
		ctx.textBaseline = textBaseline;
		const pos = calcStartPosition(ctx, rect, boxWidth + 1 /*罫線分+1*/, boxWidth + 1 /*罫線分+1*/);
		if (0 < animElapsedTime && animElapsedTime < 1) {
			const uncheckBgRGB = colorToRGB(uncheckBgColor);
			const checkBgRGB = colorToRGB(checkBgColor);
			const checkRGB = colorName => {
				const start = uncheckBgRGB[colorName];
				const end = checkBgRGB[colorName];
				if (animElapsedTime >= 1) {
					return end;
				}
				const diff = start - end;
				return Math.ceil(start - diff * animElapsedTime);
			};
			const uncheckRGB = colorName => {
				const end = uncheckBgRGB[colorName];
				const start = checkBgRGB[colorName];
				if (animElapsedTime >= 1) {
					return end;
				}
				const diff = end - start;
				return Math.ceil(start + diff * animElapsedTime);
			};
			uncheckBgColor = check ? uncheckBgColor : `rgb(${uncheckRGB('r')} , ${uncheckRGB('g')}, ${uncheckRGB('b')})`;
			checkBgColor = `rgb(${checkRGB('r')} , ${checkRGB('g')}, ${checkRGB('b')})`;
		}

		canvashelper.drawCheckbox(ctx, pos.x, pos.y, check ? animElapsedTime : false, {
			uncheckBgColor,
			checkBgColor,
			borderColor
		});
	}

	class Theme {
		constructor(grid) {
			this._grid = grid;
		}
		getThemeColor(...name) {
			return getThemeColor(this._grid, ...name);
		}
		get font() {
			return getThemeColor(this._grid, 'font');
		}
		get underlayBackgroundColor() {
			return getThemeColor(this._grid, 'underlayBackgroundColor');
		}
		// color
		get color() {
			return getThemeColor(this._grid, 'color');
		}
		get frozenRowsColor() {
			return getThemeColor(this._grid, 'frozenRowsColor');
		}
		// background
		get defaultBgColor() {
			return getThemeColor(this._grid, 'defaultBgColor');
		}
		get frozenRowsBgColor() {
			return getThemeColor(this._grid, 'frozenRowsBgColor');
		}
		get selectionBgColor() {
			return getThemeColor(this._grid, 'selectionBgColor');
		}
		// border
		get borderColor() {
			return getThemeColor(this._grid, 'borderColor');
		}
		get frozenRowsBorderColor() {
			return getThemeColor(this._grid, 'frozenRowsBorderColor');
		}
		get hiliteBorderColor() {
			return getThemeColor(this._grid, 'hiliteBorderColor');
		}
		get checkbox() {
			const grid = this._grid;
			return this._checkbox || (this._checkbox = {
				get uncheckBgColor() {
					return getThemeColor(grid, 'checkbox', 'uncheckBgColor');
				},
				get checkBgColor() {
					return getThemeColor(grid, 'checkbox', 'checkBgColor');
				},
				get borderColor() {
					return getThemeColor(grid, 'checkbox', 'borderColor');
				}
			});
		}
		get button() {
			const grid = this._grid;
			return this._button || (this._button = {
				get color() {
					return getThemeColor(grid, 'button', 'color');
				},
				get bgColor() {
					return getThemeColor(grid, 'button', 'bgColor');
				}
			});
		}

	}

	function strokeRect(ctx, color, left, top, width, height) {
		if (!__webpack_provided_Array_dot_isArray(color)) {
			if (color) {
				ctx.strokeStyle = color;
				ctx.strokeRect(left, top, width, height);
			}
		} else {
			const borderColors = toBoxArray(color);
			canvashelper.strokeColorsRect(ctx, borderColors, left, top, width, height);
		}
	}

	class GridCanvasHelper {
		constructor(grid) {
			this._grid = grid;
			this._theme = new Theme(grid);
		}
		createCalculator(context) {
			return {
				calcWidth(width) {
					return calc.toPx(width, {
						get full() {
							const rect = context.getRect();
							return rect.width;
						},
						get em() {
							const ctx = context.getContext();
							return ctx.measureText('あ').width;
						}
					});
				},
				calcHeight(height) {
					return calc.toPx(height, {
						get full() {
							const rect = context.getRect();
							return rect.height;
						},
						get em() {
							const ctx = context.getContext();
							return ctx.measureText('あ').width;
						}
					});
				}
			};
		}
		getColor(color, col, row, ctx) {
			return getColor(color, col, row, this._grid, ctx);
		}
		toBoxArray(obj) {
			return toBoxArray(obj);
		}
		toBoxPixelArray(value, context) {
			if (typeof value === 'string' || __webpack_provided_Array_dot_isArray(value)) {
				const calculator = this.createCalculator(context);
				const box = toBoxArray(value);
				return [calculator.calcHeight(box[0]), calculator.calcWidth(box[1]), calculator.calcHeight(box[2]), calculator.calcWidth(box[3])];
			}
			return toBoxArray(value);
		}
		get theme() {
			return this._theme;
		}
		drawWithClip(context, draw) {
			const drawRect = context.getDrawRect();
			if (!drawRect) {
				return;
			}
			const ctx = context.getContext();

			ctx.save();
			try {
				ctx.beginPath();
				ctx.rect(drawRect.left, drawRect.top, drawRect.width, drawRect.height);
				//clip
				ctx.clip();

				draw(ctx);
			} finally {
				ctx.restore();
			}
		}
		drawBorderWithClip(context, draw) {
			const drawRect = context.getDrawRect();
			if (!drawRect) {
				return;
			}
			const rect = context.getRect();
			const ctx = context.getContext();
			ctx.save();
			try {
				//罫線用clip
				ctx.beginPath();
				let clipLeft = drawRect.left;
				let clipWidth = drawRect.width;
				if (drawRect.left === rect.left) {
					clipLeft += -1;
					clipWidth += 1;
				}
				let clipTop = drawRect.top;
				let clipHeight = drawRect.height;
				if (drawRect.top === rect.top) {
					clipTop += -1;
					clipHeight += 1;
				}
				ctx.rect(clipLeft, clipTop, clipWidth, clipHeight);
				ctx.clip();

				draw(ctx);
			} finally {
				ctx.restore();
			}
		}
		text(text, context, {
			padding,
			offset = 2,
			color,
			textAlign = 'left',
			textBaseline = 'middle',
			font,
			icons
		} = {}) {
			let rect = context.getRect();

			const { col, row } = context;

			if (!color) {
				({ color } = this.theme);
				// header color
				const isFrozenCell = this._grid.isFrozenCell(col, row);
				if (isFrozenCell && isFrozenCell.row) {
					color = this.theme.frozenRowsColor;
				}
			}

			this.drawWithClip(context, ctx => {
				if (padding) {
					ctx.font = font || ctx.font;
					padding = this.toBoxPixelArray(padding, context);
					const left = rect.left + padding[3];
					const top = rect.top + padding[0];
					const width = rect.width - padding[1] - padding[3];
					const height = rect.height - padding[0] - padding[2];
					rect = new Rect(left, top, width, height);
				}
				_inlineRect(this._grid, ctx, text, rect, col, row, {
					offset,
					color,
					textAlign,
					textBaseline,
					font,
					icons
				});
			});
		}
		multilineText(multilines, context, {
			padding,
			offset = 2,
			color,
			textAlign = 'left',
			textBaseline = 'middle',
			font,
			lineHeight = '1em',
			icons
		} = {}) {
			let rect = context.getRect();

			const { col, row } = context;

			if (!color) {
				({ color } = this.theme);
				// header color
				const isFrozenCell = this._grid.isFrozenCell(col, row);
				if (isFrozenCell && isFrozenCell.row) {
					color = this.theme.frozenRowsColor;
				}
			}

			this.drawWithClip(context, ctx => {
				ctx.font = font || ctx.font;
				if (padding) {
					padding = this.toBoxPixelArray(padding, context);
					const left = rect.left + padding[3];
					const top = rect.top + padding[0];
					const width = rect.width - padding[1] - padding[3];
					const height = rect.height - padding[0] - padding[2];
					rect = new Rect(left, top, width, height);
				}
				const calculator = this.createCalculator(context);
				lineHeight = calculator.calcHeight(lineHeight);
				_multiInlineRect(this._grid, ctx, multilines, rect, col, row, {
					offset,
					color,
					textAlign,
					textBaseline,
					font,
					lineHeight,
					icons
				});
			});
		}
		fillText(text, x, y, context, {
			color,
			textAlign = 'left',
			textBaseline = 'top',
			font
		} = {}) {

			const { col, row } = context;

			if (!color) {
				({ color } = this.theme);
				// header color
				const isFrozenCell = this._grid.isFrozenCell(col, row);
				if (isFrozenCell && isFrozenCell.row) {
					color = this.theme.frozenRowsColor;
				}
			}
			const ctx = context.getContext();
			ctx.save();
			try {
				ctx.fillStyle = getColor(color, col, row, this._grid, ctx);
				ctx.textAlign = textAlign;
				ctx.textBaseline = textBaseline;
				ctx.font = font || ctx.font;
				ctx.fillText(text, x, y);
			} finally {
				ctx.restore();
			}
		}
		fillCell(context, {
			fillColor = this.theme.defaultBgColor
		} = {}) {
			const rect = context.getRect();

			this.drawWithClip(context, ctx => {
				const { col, row } = context;
				ctx.fillStyle = getColor(fillColor, col, row, this._grid, ctx);

				ctx.beginPath();
				ctx.rect(rect.left, rect.top, rect.width, rect.height);
				ctx.fill();
			});
		}
		fillCellWithState(context, option = {}) {
			option.fillColor = this.getFillColorState(context, option);
			this.fillCell(context, option);
		}
		fillRect(rect, context, {
			fillColor = this.theme.defaultBgColor
		} = {}) {

			const ctx = context.getContext();
			ctx.save();
			try {
				const { col, row } = context;
				ctx.fillStyle = getColor(fillColor, col, row, this._grid, ctx);

				ctx.beginPath();
				ctx.rect(rect.left, rect.top, rect.width, rect.height);
				ctx.fill();
			} finally {
				ctx.restore();
			}
		}
		fillRectWithState(rect, context, option = {}) {
			option.fillColor = this.getFillColorState(context, option);

			this.fillRect(rect, context, option);
		}
		getFillColorState(context, option = {}) {
			const state = context.getSelectState();
			const { col, row } = context;
			if (!state.selected && state.selection) {
				return this.theme.selectionBgColor;
			} else {
				const isFrozenCell = this._grid.isFrozenCell(col, row);
				if (isFrozenCell && isFrozenCell.row) {
					return this.theme.frozenRowsBgColor;
				}
			}
			return option.fillColor || this.theme.defaultBgColor;
		}
		border(context, {
			borderColor = this.theme.borderColor,
			lineWidth = 1
		} = {}) {
			const rect = context.getRect();

			this.drawBorderWithClip(context, ctx => {
				const { col, row } = context;
				const borderColors = getColor(borderColor, col, row, this._grid, ctx);

				if (lineWidth === 1) {
					ctx.lineWidth = 1;
					strokeRect(ctx, borderColors, rect.left - 0.5, rect.top - 0.5, rect.width, rect.height);
				} else if (lineWidth === 2) {
					ctx.lineWidth = 2;
					strokeRect(ctx, borderColors, rect.left, rect.top, rect.width - 1, rect.height - 1);
				} else {
					ctx.lineWidth = lineWidth;
					const startOffset = lineWidth / 2 - 1;
					strokeRect(ctx, borderColors, rect.left + startOffset, rect.top + startOffset, rect.width - lineWidth + 1, rect.height - lineWidth + 1);
				}
			});
		}
		borderWithState(context, option = {}) {
			const rect = context.getRect();
			const state = context.getSelectState();
			const { col, row } = context;

			//罫線
			if (state.selected) {
				option.borderColor = this.theme.hiliteBorderColor;
				option.lineWidth = 2;
				this.border(context, option);
			} else {
				// header color
				const isFrozenCell = this._grid.isFrozenCell(col, row);
				if (isFrozenCell && isFrozenCell.row) {
					option.borderColor = this.theme.frozenRowsBorderColor;
				}

				option.lineWidth = 1;
				this.border(context, option);

				//追加処理
				const sel = this._grid.selection.select;
				if (sel.col + 1 === col && sel.row === row) {
					//右が選択されている
					this.drawBorderWithClip(context, ctx => {
						const borderColors = toBoxArray(getColor(this.theme.hiliteBorderColor, sel.col, sel.row, this._grid, ctx));
						ctx.lineWidth = 1;
						ctx.strokeStyle = borderColors[1];
						ctx.beginPath();
						ctx.moveTo(rect.left - 0.5, rect.top);
						ctx.lineTo(rect.left - 0.5, rect.bottom);
						ctx.stroke();
					});
				} else if (sel.col === col && sel.row + 1 === row) {
					//上が選択されている
					this.drawBorderWithClip(context, ctx => {
						const borderColors = toBoxArray(getColor(this.theme.hiliteBorderColor, sel.col, sel.row, this._grid, ctx));
						ctx.lineWidth = 1;
						ctx.strokeStyle = borderColors[0];
						ctx.beginPath();
						ctx.moveTo(rect.left, rect.top - 0.5);
						ctx.lineTo(rect.right, rect.top - 0.5);
						ctx.stroke();
					});
				}
			}
		}
		checkbox(check, context, option = {}) {
			this.drawWithClip(context, ctx => {
				drawCheckbox(ctx, context.getRect(), check, this, option);
			});
		}
		button(caption, context, {
			bgColor = this.theme.button.bgColor,
			padding,
			offset = 2,
			color = this.theme.button.color,
			textAlign = 'center',
			textBaseline = 'middle',
			shadow,
			font,
			icons
		} = {}) {
			const rect = context.getRect();

			this.drawWithClip(context, ctx => {
				const { col, row } = context;
				padding = this.toBoxPixelArray(padding || rect.height / 8, context);
				const left = rect.left + padding[3];
				const top = rect.top + padding[0];
				const width = rect.width - padding[1] - padding[3];
				const height = rect.height - padding[0] - padding[2];

				canvashelper.drawButton(ctx, left, top, width, height, {
					bgColor,
					radius: rect.height / 8,
					offset,
					shadow
				});
				_inlineRect(this._grid, ctx, caption, new Rect(left, top, width, height), col, row, {
					offset,
					color,
					textAlign,
					textBaseline,
					font,
					icons
				});
			});
		}
		testFontLoad(font, value, context) {
			return testFontLoad(font, value, context, this._grid);
		}
	}

	module.exports = GridCanvasHelper;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @/internal/com.js */ "./internal/com.js")["Array_isArray"]))

/***/ }),

/***/ "./ListGrid.js":
/*!*********************!*\
  !*** ./ListGrid.js ***!
  \*********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Array_dot_isArray) {

{
	const { isDef, isPromise, then, obj: { isObject } } = __webpack_require__(/*! ./internal/utils */ "./internal/utils.js");
	const GridCanvasHelper = __webpack_require__(/*! ./GridCanvasHelper */ "./GridCanvasHelper.js");
	const columns = __webpack_require__(/*! ./columns */ "./columns.js");
	const { BaseStyle } = columns.style;
	const headerType = __webpack_require__(/*! ./header/type */ "./header/type.js");
	const { BaseStyle: HeaderBaseStyle } = __webpack_require__(/*! ./header/style */ "./header/style.js");
	const DrawGrid = __webpack_require__(/*! ./core/DrawGrid */ "./core/DrawGrid.js");
	const { DataSource, CachedDataSource } = __webpack_require__(/*! ./data */ "./data.js");
	const themes = __webpack_require__(/*! ./themes */ "./themes.js");
	const icons = __webpack_require__(/*! ./internal/icons */ "./internal/icons.js");
	const MessageHandler = __webpack_require__(/*! ./columns/message/MessageHandler */ "./columns/message/MessageHandler.js");
	const EVENT_TYPE = __webpack_require__(/*! ./list-grid/EVENT_TYPE */ "./list-grid/EVENT_TYPE.js");

	//protected symbol
	const { PROTECTED_SYMBOL: _ } = __webpack_require__(/*! ./internal/symbolManager */ "./internal/symbolManager.js");

	let headerId = 0;
	//private methods
	function _getHeaderCellRange(grid, col, row) {
		return grid[_].headerMap.getHeaderCellRange(col, row);
	}
	function _updateRect(grid, col, row, context) {
		const rect = context.getRect();
		const {
			startCol,
			endCol,
			startRow,
			endRow
		} = _getHeaderCellRange(grid, col, row);
		for (let c = col - 1; c >= startCol; c--) {
			rect.left -= grid.getColWidth(c);
		}
		for (let c = col + 1; c <= endCol; c++) {
			rect.right += grid.getColWidth(c);
		}
		for (let r = row - 1; r >= startRow; r--) {
			rect.top -= grid.getRowHeight(r);
		}
		for (let r = row + 1; r <= endRow; r++) {
			rect.bottom += grid.getRowHeight(r);
		}
		context.setRect(rect);
	}
	function _getCellValue(grid, col, row) {
		if (row < grid[_].headerMap.rowCount) {
			return grid[_].headerMap.getCell(col, row).caption;
		} else {
			let { field } = grid[_].headerMap.columns[col];
			if (isObject(field) && field.get && field.set) {
				field = field.get;
			}
			return _getField(grid, field, row);
		}
	}
	function _setCellValue(grid, col, row, value) {
		if (row < grid[_].headerMap.rowCount) {
			// nop
			return false;
		} else {
			let { field } = grid[_].headerMap.columns[col];
			if (isObject(field) && field.get && field.set) {
				field = field.set;
			}
			const index = _getRowRecordIndex(grid, row);
			const res = grid[_].dataSource.setField(index, field, value);
			return isPromise(res) ? res : true;
		}
	}
	function _getCellMessage(grid, col, row) {
		if (row < grid[_].headerMap.rowCount) {
			return null;
		} else {
			const { message } = grid[_].headerMap.columns[col];
			if (!message) {
				return null;
			}
			return _getField(grid, message, row);
		}
	}
	function _getCellIcon0(grid, icon, row) {
		if (!isDef(icon)) {
			return null;
		}
		if (__webpack_provided_Array_dot_isArray(icon)) {
			return icon.map(i => _getCellIcon0(grid, i, row));
		}
		if (!isObject(icon)) {
			return _getField(grid, icon, row);
		}
		const retIcon = {};
		icons.iconPropKeys.forEach(k => {
			if (icon[k]) {
				const f = _getField(grid, icon[k], row);
				if (isDef(f)) {
					retIcon[k] = f;
				} else {
					if (!_hasField(grid, icon[k], row)) {
						retIcon[k] = icon[k];
					}
				}
			}
		});
		return retIcon;
	}
	function _getCellIcon(grid, col, row) {
		const { icon } = grid[_].headerMap.columns[col];
		return _getCellIcon0(grid, icon, row);
	}
	function _getField(grid, field, row) {
		if (!isDef(field)) {
			return null;
		}
		if (row < grid[_].headerMap.rowCount) {
			return null;
		} else {
			const index = _getRowRecordIndex(grid, row);
			return grid[_].dataSource.getField(index, field);
		}
	}
	function _hasField(grid, field, row) {
		if (!isDef(field)) {
			return false;
		}
		if (row < grid[_].headerMap.rowCount) {
			return false;
		} else {
			const index = _getRowRecordIndex(grid, row);
			return grid[_].dataSource.hasField(index, field);
		}
	}
	function _onDrawValue(grid, cellValue, context, { col, row }, style, draw) {
		const helper = grid[_].gridCanvasHelper;

		const drawCellBg = ({ bgColor } = {}) => {
			const fillOpt = {
				fillColor: bgColor
			};
			//cell全体を描画
			helper.fillCellWithState(context, fillOpt);
		};
		const drawCellBorder = () => {

			if (context.col === grid.frozenColCount - 1) {
				//固定列罫線
				const rect = context.getRect();
				helper.drawWithClip(context, ctx => {
					const borderColor = context.row >= grid.frozenRowCount ? helper.theme.borderColor : helper.theme.frozenRowsBorderColor;

					const borderColors = helper.toBoxArray(helper.getColor(borderColor, context.col, context.row, ctx));
					if (borderColors[1]) {
						ctx.lineWidth = 1;
						ctx.strokeStyle = borderColors[1];
						ctx.beginPath();
						ctx.moveTo(rect.right - 2.5, rect.top);
						ctx.lineTo(rect.right - 2.5, rect.bottom);
						ctx.stroke();
					}
				});
			}

			if (context.row < grid[_].headerMap.rowCount) {
				_headerBorderWithState(grid, helper, context);
			} else {
				helper.borderWithState(context);
			}
		};

		const drawCellBase = ({ bgColor } = {}) => {
			drawCellBg({ bgColor });
			drawCellBorder();
		};
		const info = {
			getRecord: () => grid.getRowRecord(row),
			getIcon: () => _getCellIcon(grid, col, row),
			getMessage: () => _getCellMessage(grid, col, row),
			messageHandler: grid[_].messageHandler,
			style,
			drawCellBase,
			drawCellBg,
			drawCellBorder
		};

		return draw(cellValue, info, context, grid);
	}
	function _headerBorderWithState(grid, helper, context) {
		const { col, row } = context;
		const sel = grid.selection.select;
		if (sel.row >= grid[_].headerMap.rowCount) {
			//通常の処理でまかなえる
			helper.borderWithState(context);
			return;
		}

		const { id } = grid[_].headerMap.getCell(col, row);

		const rect = context.getRect();
		const option = {};

		const { id: selId } = grid[_].headerMap.getCell(sel.col, sel.row);
		//罫線
		if (selId === id) {
			option.borderColor = helper.theme.hiliteBorderColor;
			option.lineWidth = 2;
			helper.border(context, option);
		} else {
			option.lineWidth = 1;
			// header color
			const isFrozenCell = grid.isFrozenCell(col, row);
			if (isFrozenCell && isFrozenCell.row) {
				option.borderColor = helper.theme.frozenRowsBorderColor;
			}
			helper.border(context, option);

			//追加処理
			if (col > 0 && grid[_].headerMap.getCell(col - 1, row).id === selId) {
				//右が選択されている
				helper.drawBorderWithClip(context, ctx => {
					const borderColors = helper.toBoxArray(helper.getColor(helper.theme.hiliteBorderColor, sel.col, sel.row, ctx));
					if (borderColors[1]) {
						ctx.lineWidth = 1;
						ctx.strokeStyle = borderColors[1];
						ctx.beginPath();
						ctx.moveTo(rect.left - 0.5, rect.top);
						ctx.lineTo(rect.left - 0.5, rect.bottom);
						ctx.stroke();
					}
				});
			} else if (row > 0 && grid[_].headerMap.getCell(col, row - 1).id === selId) {
				//上が選択されている
				helper.drawBorderWithClip(context, ctx => {
					const borderColors = helper.toBoxArray(helper.getColor(helper.theme.hiliteBorderColor, sel.col, sel.row, ctx));
					if (borderColors[0]) {
						ctx.lineWidth = 1;
						ctx.strokeStyle = borderColors[0];
						ctx.beginPath();
						ctx.moveTo(rect.left, rect.top - 0.5);
						ctx.lineTo(rect.right, rect.top - 0.5);
						ctx.stroke();
					}
				});
			}
		}
	}
	function _refreshHeader(grid) {
		if (grid[_].headerEvents) {
			grid[_].headerEvents.forEach(id => grid.unlisten(id));
		}
		grid[_].headerMap = new HeaderMap(grid[_].header);
		grid[_].headerEvents = [];
		grid[_].headerMap.headerObjects.forEach(cell => {
			const ids = cell.headerType.bindGridEvent(grid);
			grid[_].headerEvents.push(...ids);
			if (cell.style) {
				if (cell.style instanceof HeaderBaseStyle) {
					const id = cell.style.listen(HeaderBaseStyle.EVENT_TYPE.CHANGE_STYLE, () => {
						grid.invalidate();
					});
					grid[_].headerEvents.push(id);
				}
			}
		});
		grid[_].headerMap.columns.forEach((col, index) => {
			if (col.action) {
				const ids = col.action.bindGridEvent(grid, index, {
					isTarget(col, row) {
						return index === col && grid.frozenRowCount <= row;
					}
				});
				grid[_].headerEvents.push(...ids);
			}
			if (col.columnType) {
				const ids = col.columnType.bindGridEvent(grid, index, {
					isTarget(col, row) {
						return index === col && grid.frozenRowCount <= row;
					}
				});
				grid[_].headerEvents.push(...ids);
			}
			if (col.style) {
				if (col.style instanceof BaseStyle) {
					const id = col.style.listen(columns.style.EVENT_TYPE.CHANGE_STYLE, () => {
						grid.invalidate();
					});
					grid[_].headerEvents.push(id);
				}
			}
		});
		grid.colCount = grid[_].headerMap.columns.length;
		_refreshRowCount(grid);
		grid.frozenRowCount = grid[_].headerMap.rowCount;
		for (let col = 0; col < grid[_].headerMap.columns.length; col++) {
			const column = grid[_].headerMap.columns[col];
			const { width, minWidth, maxWidth } = column;
			if (width && (width > 0 || typeof width === 'string')) {
				grid.setColWidth(col, width);
			}
			if (minWidth && (minWidth > 0 || typeof minWidth === 'string')) {
				grid.setMinColWidth(col, minWidth);
			}
			if (maxWidth && (maxWidth > 0 || typeof maxWidth === 'string')) {
				grid.setMaxColWidth(col, maxWidth);
			}
		}
		const isArrayHeaderRowHeight = __webpack_provided_Array_dot_isArray(grid[_].headerRowHeight);
		for (let row = 0; row < grid[_].headerMap.rowCount; row++) {
			const height = isArrayHeaderRowHeight ? grid[_].headerRowHeight[row] : grid[_].headerRowHeight;
			if (height && height > 0) {
				grid.setRowHeight(row, height);
			}
		}
	}

	function _refreshRowCount(grid) {
		grid.rowCount = grid[_].dataSource.length + grid[_].headerMap.rowCount;
	}
	function _tryWithUpdateDataSource(grid, fn) {
		if (grid[_].dataSourceEventIds) {
			grid[_].dataSourceEventIds.forEach(id => grid[_].handler.off(id));
		}

		fn(grid);

		grid[_].dataSourceEventIds = [grid[_].handler.on(grid[_].dataSource, DataSource.EVENT_TYPE.UPDATED_LENGTH, () => {
			_refreshRowCount(grid);
			grid.invalidate();
		}), grid[_].handler.on(grid[_].dataSource, DataSource.EVENT_TYPE.UPDATED_ORDER, () => {
			grid.invalidate();
		})];
	}
	function _setRecords(grid, records = []) {
		_tryWithUpdateDataSource(grid, () => {
			grid[_].records = records;
			grid[_].dataSource = CachedDataSource.ofArray(grid[_].records);
		});
	}
	function _setDataSource(grid, dataSource) {
		_tryWithUpdateDataSource(grid, () => {
			if (dataSource) {
				if (dataSource instanceof DataSource) {
					grid[_].dataSource = dataSource;
				} else {
					grid[_].dataSource = new CachedDataSource(dataSource);
				}
			} else {
				grid[_].dataSource = DataSource.EMPTY;
			}
			grid[_].records = null;
		});
	}

	function _getRowRecordIndex(grid, row) {
		if (row < grid[_].headerMap.rowCount) {
			return undefined;
		} else {
			return row - grid[_].headerMap.rowCount;
		}
	}
	//end private methods
	//
	//
	//

	class HeaderMap {
		constructor(header) {
			this._columns = [];
			this._headerCells = [];
			this._headerObjects = [];

			this._addHeaders(0, header, []);
			this._setupHeaderType();
		}
		get columns() {
			return this._columns;
		}
		get rowCount() {
			return this._headerCells.length;
		}
		get headerObjects() {
			return this._headerObjects;
		}
		getCell(col, row) {
			return this._headerCells[row][col];
		}
		getHeaderCellRangeById(id) {
			for (let r = 0; r < this.rowCount; r++) {
				for (let c = 0; c < this.columns.length; c++) {
					if (id === this.getCell(c, r).id) {
						return this.getHeaderCellRange(c, r);
					}
				}
			}
			return undefined;
		}
		getHeaderCellRange(col, row) {
			const result = {
				startCol: col,
				startRow: row,
				endCol: col,
				endRow: row,
				isCellInRange(col, row) {
					return this.startCol <= col && col <= this.endCol && this.startRow <= row && row <= this.endRow;
				}
			};
			const { id } = this.getCell(col, row);
			for (let c = col - 1; c >= 0; c--) {
				if (id !== this.getCell(c, row).id) {
					break;
				}
				result.startCol = c;
			}
			for (let c = col + 1; c < this.columns.length; c++) {
				if (id !== this.getCell(c, row).id) {
					break;
				}
				result.endCol = c;
			}
			for (let r = row - 1; r >= 0; r--) {
				if (id !== this.getCell(col, r).id) {
					break;
				}
				result.startRow = r;
			}
			for (let r = row + 1; r < this.rowCount; r++) {
				if (id !== this.getCell(col, r).id) {
					break;
				}
				result.endRow = r;
			}
			return result;
		}
		_addHeaders(row, header, roots) {
			const rowCells = this._headerCells[row] || this._newRow(row);
			header.forEach(hd => {
				const col = this._columns.length;
				const cell = {
					id: headerId++,
					caption: hd.caption,
					style: hd.headerStyle,
					sort: hd.sort
				};
				this._headerObjects.push(cell);
				rowCells[col] = cell;
				for (let r = row - 1; r >= 0; r--) {
					this._headerCells[r][col] = roots[r];
				}
				if (hd.columns) {
					this._addHeaders(row + 1, hd.columns, [...roots, cell]);
				} else {
					this._columns.push({
						width: hd.width,
						minWidth: hd.minWidth,
						maxWidth: hd.maxWidth,
						field: hd.field,
						icon: hd.icon,
						message: hd.message,
						columnType: columns.type.of(hd.columnType),
						action: columns.action.of(hd.action),
						style: hd.style,
						define: hd
					});
					for (let r = row + 1; r < this._headerCells.length; r++) {
						this._headerCells[r][col] = cell;
					}
				}
			});
		}
		_setupHeaderType() {
			this._headerObjects.forEach(cell => {
				cell.range = this.getHeaderCellRangeById(cell.id);
				cell.headerType = headerType.create(cell);
			});
		}
		_newRow(row) {
			const newRow = this._headerCells[row] = [];
			if (!this._columns.length) {
				return newRow;
			}
			const prev = this._headerCells[row - 1];
			for (let col = 0; col < prev.length; col++) {
				newRow[col] = prev[col];
			}
			return newRow;
		}
	}

	function adjustListGridOption(options) {
		if (options) {
			delete options.frozenRowCount;
			delete options.colCount;
			delete options.rowCount;
		}
		return options;
	}

	/**
  * ListGrid
  * @classdesc cheetahGrid.ListGrid
  * @extends cheetahGrid.core.DrawGrid
  * @memberof cheetahGrid
  */
	class ListGrid extends DrawGrid {
		static get EVENT_TYPE() {
			return EVENT_TYPE;
		}
		/**
   * constructor
   *
   * <pre>
   * Constructor options
   * -----
   * header: see header property
   * records {array}: records data
   * dataSource {DataSource}: records data source
   * frozenColCount {number}: default 0
   * defaultRowHeight {number}: default grid row height. default 40
   * defaultColWidth {number}: default grid col width. default 80
   * borderColor: border color
   * parentElement {Element}: canvas parentElement
   * theme {object}: theme
   * -----
   * </pre>
   *
   * @constructor
   * @param  {Object} options Constructor options
   */
		constructor(options = {}) {
			super(adjustListGridOption(options));
			this[_].header = options.header || [];
			this[_].headerRowHeight = options.headerRowHeight || [];
			if (options.dataSource) {
				_setDataSource(this, options.dataSource);
			} else {
				_setRecords(this, options.records);
			}
			_refreshHeader(this);
			this[_].sortState = {
				col: -1,
				order: undefined
			};
			this[_].gridCanvasHelper = new GridCanvasHelper(this);
			this[_].theme = themes.of(options.theme);
			this[_].messageHandler = new MessageHandler(this, (col, row) => _getCellMessage(this, col, row));
			this.invalidate();
			this[_].handler.on(window, 'resize', () => {
				this.updateSize();
				this.updateScroll();
				this.invalidate();
			});
		}
		dispose() {
			this[_].messageHandler.dispose();
			super.dispose();
		}
		/**
   * header define
   * @type {Array}
   */
		get header() {
			return this[_].header;
		}
		/**
   * header define
   * <pre>
   * column options
   * -----
   * caption: header caption
   * field: field name
   * width: column width
   * minWidth: column min width
   * maxWidth: column max width
   * icon: icon name
   * message: message key name
   * columnType: ColumnType
   * action: ColumnAction
   * style: ColumnStyle
   * sort: define sort setting
   * -----
   *
   * multiline header
   * -----
   * caption: header caption
   * columns: columns define
   * -----
   * </pre>
   *
   * @type {Array}
   */
		set header(header) {
			this[_].header = header;
			_refreshHeader(this);
		}
		get records() {
			return this[_].records;
		}
		set records(records) {
			_setRecords(this, records);
			_refreshRowCount(this);
			this.invalidate();
		}
		get dataSource() {
			return this[_].dataSource;
		}
		set dataSource(dataSource) {
			_setDataSource(this, dataSource);
			_refreshRowCount(this);
			this.invalidate();
		}
		get theme() {
			return this[_].theme;
		}
		set theme(theme) {
			this[_].theme = themes.of(theme);
			this.invalidate();
		}
		get font() {
			return super.font || this[_].gridCanvasHelper.theme.font;
		}
		set font(font) {
			super.font = font;
		}
		get underlayBackgroundColor() {
			return super.underlayBackgroundColor || this[_].gridCanvasHelper.theme.underlayBackgroundColor;
		}
		set underlayBackgroundColor(underlayBackgroundColor) {
			super.underlayBackgroundColor = underlayBackgroundColor;
		}
		get sortState() {
			return this[_].sortState;
		}
		set sortState(sortState) {
			this[_].sortState = sortState;
		}
		getField(col) {
			return this[_].headerMap.columns[col].field;
		}
		getRowRecord(row) {
			if (row < this[_].headerMap.rowCount) {
				return undefined;
			} else {
				return this[_].dataSource.get(_getRowRecordIndex(this, row));
			}
		}
		getGridCanvasHelper() {
			return this[_].gridCanvasHelper;
		}
		getCopyCellValue(col, row) {
			if (row < this[_].headerMap.rowCount) {
				const { startCol, startRow } = _getHeaderCellRange(this, col, row);
				if (startCol !== col || startRow !== row) {
					return '';
				}
			}
			return _getCellValue(this, col, row);
		}
		onDrawCell(col, row, context) {
			const column = this[_].headerMap.columns[col];

			let draw;
			let style;
			if (row < this[_].headerMap.rowCount) {
				const hd = this[_].headerMap.getCell(col, row);
				draw = hd.headerType.onDrawCell;
				({ style } = hd);
				_updateRect(this, col, row, context);
			} else {
				draw = column.columnType.onDrawCell;
				({ style } = column);
			}
			const cellValue = _getCellValue(this, col, row);
			return _onDrawValue(this, cellValue, context, { col, row }, style, draw);
		}
		doGetCellValue(col, row, valueCallback) {
			if (row < this[_].headerMap.rowCount) {
				// nop
				return false;
			} else {
				const value = _getCellValue(this, col, row);
				if (isPromise(value)) {
					//遅延中は無視
					return false;
				}
				valueCallback(value);
			}
			return true;
		}
		doChangeValue(col, row, changeValueCallback) {
			if (row < this[_].headerMap.rowCount) {
				// nop
				return false;
			} else {
				const before = _getCellValue(this, col, row);
				if (isPromise(before)) {
					//遅延中は無視
					return false;
				}
				const after = changeValueCallback(before);
				if (after === undefined) {
					return false;
				}
				return then(_setCellValue(this, col, row, after), ret => {
					if (ret) {
						const { field } = this[_].headerMap.columns[col];
						const self = this;
						this.fireListeners(EVENT_TYPE.CHANGED_VALUE, {
							col,
							row,
							get record() {
								return self.getRowRecord(row);
							},
							field,
							value: after
						});
					}
					return ret;
				});
			}
		}
		bindEventsInternal() {
			this.listen(EVENT_TYPE.SELECTED_CELL, e => {
				if (e.row < this[_].headerMap.rowCount) {
					const { startCol, endCol, startRow, endRow } = _getHeaderCellRange(this, e.col, e.row);
					if (startCol !== endCol || startRow !== endRow) {
						this.invalidateGridRect(startCol, startRow, endCol, endRow);
					}
				}
			});
		}
		getMoveLeftColByKeyDownInternal({ col, row }) {
			if (row < this[_].headerMap.rowCount) {
				const { startCol } = _getHeaderCellRange(this, col, row);
				col = startCol;
			}
			return super.getMoveLeftColByKeyDownInternal({ col, row });
		}
		getMoveRightColByKeyDownInternal({ col, row }) {
			if (row < this[_].headerMap.rowCount) {
				const { endCol } = _getHeaderCellRange(this, col, row);
				col = endCol;
			}
			return super.getMoveRightColByKeyDownInternal({ col, row });
		}
		getMoveUpRowByKeyDownInternal({ col, row }) {
			if (row < this[_].headerMap.rowCount) {
				const { startRow } = _getHeaderCellRange(this, col, row);
				row = startRow;
			}
			return super.getMoveUpRowByKeyDownInternal({ col, row });
		}
		getMoveDownRowByKeyDownInternal({ col, row }) {
			if (row < this[_].headerMap.rowCount) {
				const { endRow } = _getHeaderCellRange(this, col, row);
				row = endRow;
			}
			return super.getMoveDownRowByKeyDownInternal({ col, row });
		}
		getOffsetInvalidateCells() {
			return 1;
		}
		getColumnIndexByField(field) {
			for (const columnIndex in this[_].headerMap.columns) {
				if (this[_].headerMap.columns[columnIndex].field === field) {
					return columnIndex - 0;
				}
			}
			return null;
		}
		focusGridCell(field, index) {
			const {
				start: { col: startCol, row: startRow },
				end: { col: endCol, row: endRow }
			} = this.selection.range;

			const newCol = this.getColumnIndexByField(field);
			const newRow = index + this[_].headerMap.rowCount;
			this.focusCell(newCol, newRow);
			this.selection.select = {
				col: newCol,
				row: newRow
			};
			this.invalidateGridRect(startCol, startRow, endCol, endRow);
			this.invalidateCell(newCol, newRow);
		}
		makeVisibleGridCell(field, index) {
			this.makeVisibleCell(this.getColumnIndexByField(field), index + this[_].headerMap.rowCount);
		}
	}
	module.exports = ListGrid;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @/internal/com.js */ "./internal/com.js")["Array_isArray"]))

/***/ }),

/***/ "./columns.js":
/*!********************!*\
  !*** ./columns.js ***!
  \********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const action = __webpack_require__(/*! ./columns/action */ "./columns/action.js");
	const type = __webpack_require__(/*! ./columns/type */ "./columns/type.js");
	const style = __webpack_require__(/*! ./columns/style */ "./columns/style.js");

	/**
  * columns
  * @type {Object}
  * @namespace cheetahGrid.columns
  * @memberof cheetahGrid
  */
	module.exports = {
		action,
		type,
		style
	};
}

/***/ }),

/***/ "./columns/action.js":
/*!***************************!*\
  !*** ./columns/action.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const BaseAction = __webpack_require__(/*! ./action/BaseAction */ "./columns/action/BaseAction.js");
	const Action = __webpack_require__(/*! ./action/Action */ "./columns/action/Action.js");
	const Editor = __webpack_require__(/*! ./action/Editor */ "./columns/action/Editor.js");
	const CheckEditor = __webpack_require__(/*! ./action/CheckEditor */ "./columns/action/CheckEditor.js");
	const ButtonAction = __webpack_require__(/*! ./action/ButtonAction */ "./columns/action/ButtonAction.js");
	const SmallDialogInputEditor = __webpack_require__(/*! ./action/SmallDialogInputEditor */ "./columns/action/SmallDialogInputEditor.js");
	const InlineInputEditor = __webpack_require__(/*! ./action/InlineInputEditor */ "./columns/action/InlineInputEditor.js");
	const InlineMenuEditor = __webpack_require__(/*! ./action/InlineMenuEditor */ "./columns/action/InlineMenuEditor.js");

	class ImmutableCheckEditor extends CheckEditor {
		get disabled() {
			return this._disabled;
		}
		get readOnly() {
			return this._readOnly;
		}
	}
	class ImmutableInputEditor extends SmallDialogInputEditor {
		get disabled() {
			return this._disabled;
		}
		get readOnly() {
			return this._readOnly;
		}
	}

	/**
  * column actions
  * @type {Object}
  * @namespace cheetahGrid.columns.action
  * @memberof cheetahGrid.columns
  */
	const action = {
		ACTIONS: {
			CHECK: new ImmutableCheckEditor(),
			INPUT: new ImmutableInputEditor()
		},
		get BaseAction() {
			return BaseAction;
		},
		get Editor() {
			return Editor;
		},
		get Action() {
			return Action;
		},
		get CheckEditor() {
			return CheckEditor;
		},
		get ButtonAction() {
			return ButtonAction;
		},
		get SmallDialogInputEditor() {
			return SmallDialogInputEditor;
		},
		get InlineInputEditor() {
			console.warn('InlineInputEditor is an experiment stage');
			return InlineInputEditor;
		},
		get InlineMenuEditor() {
			return InlineMenuEditor;
		},
		of(columnAction) {
			if (!columnAction) {
				return action.ACTIONS.DEFAULT;
			} else if (typeof columnAction === 'string') {
				return action.ACTIONS[columnAction.toUpperCase()] || action.of(null);
			} else {
				return columnAction;
			}
		}
	};
	module.exports = action;
}

/***/ }),

/***/ "./columns/action/Action.js":
/*!**********************************!*\
  !*** ./columns/action/Action.js ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{

	const { bindCellClickAction, bindCellKeyAction } = __webpack_require__(/*! ./actionBind */ "./columns/action/actionBind.js");

	const BaseAction = __webpack_require__(/*! ./BaseAction */ "./columns/action/BaseAction.js");

	class Action extends BaseAction {
		constructor(option = {}) {
			super(option);
			this._action = option.action;
		}
		get action() {
			return this._action;
		}
		set action(action) {
			this._action = action;
		}
		clone() {
			return new Action(this);
		}
		getState(grid) {
			return {};
		}
		bindGridEvent(grid, col, util) {
			const state = this.getState(grid);
			const action = cell => {
				if (this.disabled) {
					return;
				}
				const record = grid.getRowRecord(cell.row);
				this._action(record);
			};

			return [...bindCellClickAction(grid, col, util, {
				action,
				mouseOver: e => {
					if (this.disabled) {
						return false;
					}
					state.mouseActiveCell = {
						col: e.col,
						row: e.row
					};
					grid.invalidateCell(e.col, e.row);
					return true;
				},
				mouseOut: e => {
					delete state.mouseActiveCell;
					grid.invalidateCell(e.col, e.row);
				}
			}), ...bindCellKeyAction(grid, col, util, {
				action
			})];
		}
	}

	module.exports = Action;
}

/***/ }),

/***/ "./columns/action/BaseAction.js":
/*!**************************************!*\
  !*** ./columns/action/BaseAction.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{

	class BaseAction {
		constructor(option = {}) {
			this._disabled = option.disabled;
		}
		get disabled() {
			return this._disabled;
		}
		set disabled(disabled) {
			this._disabled = !!disabled;
			this.onChangeDisabledInternal();
		}
		clone() {
			return new BaseAction(this);
		}
		bindGridEvent(grid, col, util) {
			return [];
		}
		onChangeDisabledInternal() {}
	}
	module.exports = BaseAction;
}

/***/ }),

/***/ "./columns/action/BaseInputEditor.js":
/*!*******************************************!*\
  !*** ./columns/action/BaseInputEditor.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{

	const Editor = __webpack_require__(/*! ./Editor */ "./columns/action/Editor.js");
	const { EVENT_TYPE: {
			INPUT_CELL,
			EDITABLEINPUT_CELL,
			SELECTED_CELL,
			DBLCLICK_CELL,
			DBLTAP_CELL,
			KEYDOWN,
			MODIFY_STATUS_EDITABLEINPUT_CELL,
			SCROLL
		} } = __webpack_require__(/*! ../../core/DrawGrid */ "./core/DrawGrid.js");
	const KEY_ENTER = 13;
	const KEY_F2 = 113;

	class BaseInputEditor extends Editor {
		constructor(option = {}) {
			super(option);
		}
		clone() {
			return new BaseInputEditor(this);
		}
		onInputCellInternal(grid, cell, inputValue) {
			throw new Error();
		}
		onOpenCellInternal(grid, cell) {
			throw new Error();
		}
		onChangeSelectCellInternal(grid, cell, selected) {
			throw new Error();
		}
		onSetInputAttrsInternal(grid, cell, input) {
			throw new Error();
		}
		onGridScrollInternal(grid) {
			throw new Error();
		}
		bindGridEvent(grid, col, util) {
			const open = cell => {
				if (this.readOnly || this.disabled) {
					return;
				}
				this.onOpenCellInternal(grid, cell);
			};

			const input = (cell, value) => {
				if (this.readOnly || this.disabled) {
					return;
				}
				this.onInputCellInternal(grid, cell, value);
			};
			return [grid.listen(INPUT_CELL, e => {
				if (!util.isTarget(e.col, e.row)) {
					return;
				}
				input({
					col: e.col,
					row: e.row
				}, e.value);
			}), grid.listen(DBLCLICK_CELL, cell => {
				if (!util.isTarget(cell.col, cell.row)) {
					return;
				}
				open({
					col: cell.col,
					row: cell.row
				});
			}), grid.listen(DBLTAP_CELL, e => {
				if (!util.isTarget(e.col, e.row)) {
					return;
				}
				open({
					col: e.col,
					row: e.row
				});

				e.event.preventDefault();
				e.event.stopPropagation();
			}), grid.listen(KEYDOWN, (keyCode, e) => {
				if (keyCode !== KEY_F2 && keyCode !== KEY_ENTER) {
					return;
				}
				const sel = grid.selection.select;
				if (!util.isTarget(sel.col, sel.row)) {
					return;
				}
				open({
					col: sel.col,
					row: sel.row
				});
			}), grid.listen(SELECTED_CELL, e => {
				this.onChangeSelectCellInternal(grid, { col: e.col, row: e.row }, e.selected);
			}), grid.listen(SCROLL, () => {
				this.onGridScrollInternal(grid);
			}), grid.listen(EDITABLEINPUT_CELL, cell => {
				if (!util.isTarget(cell.col, cell.row)) {
					return false;
				}
				if (this.readOnly || this.disabled) {
					return false;
				}
				return true;
			}), grid.listen(MODIFY_STATUS_EDITABLEINPUT_CELL, cell => {
				if (!util.isTarget(cell.col, cell.row)) {
					return;
				}
				if (this.readOnly || this.disabled) {
					return;
				}
				this.onSetInputAttrsInternal(grid, {
					col: cell.col,
					row: cell.row
				}, cell.input);
			})];
		}
	}

	module.exports = BaseInputEditor;
}

/***/ }),

/***/ "./columns/action/ButtonAction.js":
/*!****************************************!*\
  !*** ./columns/action/ButtonAction.js ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const { obj: { setReadonly } } = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");
	const Action = __webpack_require__(/*! ./Action */ "./columns/action/Action.js");
	const { BUTTON_COLUMN_STATE_ID } = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");
	class ButtonAction extends Action {
		getState(grid) {
			if (!grid[BUTTON_COLUMN_STATE_ID]) {
				setReadonly(grid, BUTTON_COLUMN_STATE_ID, {});
			}
			return grid[BUTTON_COLUMN_STATE_ID];
		}
	}

	module.exports = ButtonAction;
}

/***/ }),

/***/ "./columns/action/CheckEditor.js":
/*!***************************************!*\
  !*** ./columns/action/CheckEditor.js ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const { obj: { setReadonly }, isPromise } = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");
	const { bindCellClickAction, bindCellKeyAction } = __webpack_require__(/*! ./actionBind */ "./columns/action/actionBind.js");
	const animate = __webpack_require__(/*! ../../internal/animate */ "./internal/animate.js");

	const Editor = __webpack_require__(/*! ./Editor */ "./columns/action/Editor.js");
	const { CHECK_COLUMN_STATE_ID } = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

	const KEY_ENTER = 13;
	const KEY_SPACE = 32;

	function toggleValue(val) {
		if (typeof val === 'number') {
			if (val === 0) {
				return 1;
			} else {
				return 0;
			}
		} else if (typeof val === 'string') {
			if (val === 'false') {
				return 'true';
			} else if (val === 'off') {
				return 'on';
			} else if (val.match(/^0+$/)) {
				return val.replace(/^(0*)0$/, '$11');
			} else if (val === 'true') {
				return 'false';
			} else if (val === 'on') {
				return 'off';
			} else if (val.match(/^0*1$/)) {
				return val.replace(/^(0*)1$/, '$10');
			}
		}
		return !val;
	}

	class CheckEditor extends Editor {
		clone() {
			return new CheckEditor(this);
		}
		bindGridEvent(grid, col, util) {
			if (!grid[CHECK_COLUMN_STATE_ID]) {
				setReadonly(grid, CHECK_COLUMN_STATE_ID, {});
			}
			const state = grid[CHECK_COLUMN_STATE_ID];

			const action = cell => {
				const key = cell.col + ':' + cell.row;
				const blockKey = key + '::block';
				if (this.readOnly || this.disabled || state[blockKey]) {
					return;
				}
				const ret = grid.doChangeValue(cell.col, cell.row, toggleValue);
				if (ret) {

					const onChange = () => {
						// checkbox animation
						animate(200, point => {
							if (point === 1) {
								delete state[key];
							} else {
								state[key] = {
									elapsed: point
								};
							}
							grid.invalidateCell(cell.col, cell.row);
						});
					};
					if (isPromise(ret)) {
						state[blockKey] = true;
						ret.then(() => {
							delete state[blockKey];
							onChange();
						});
					} else {
						onChange();
					}
				}
			};
			return [...bindCellClickAction(grid, col, util, {
				action,
				mouseOver: e => {
					if (this.disabled) {
						return false;
					}
					state.mouseActiveCell = {
						col: e.col,
						row: e.row
					};
					grid.invalidateCell(e.col, e.row);
					return true;
				},
				mouseOut: e => {
					delete state.mouseActiveCell;
					grid.invalidateCell(e.col, e.row);
				}
			}), ...bindCellKeyAction(grid, col, util, {
				action: e => {
					const selrange = grid.selection.range;
					const col = grid.selection.select.col;
					for (let row = selrange.start.row; row <= selrange.end.row; row++) {
						if (!util.isTarget(col, row)) {
							continue;
						}
						action({
							col,
							row
						});
					}
				},
				acceptKeys: [KEY_ENTER, KEY_SPACE]
			})];
		}
	}

	module.exports = CheckEditor;
}

/***/ }),

/***/ "./columns/action/Editor.js":
/*!**********************************!*\
  !*** ./columns/action/Editor.js ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{

	const BaseAction = __webpack_require__(/*! ./BaseAction */ "./columns/action/BaseAction.js");
	class Editor extends BaseAction {
		constructor(option = {}) {
			super(option);
			this._readOnly = option.readOnly;
		}
		get readOnly() {
			return this._readOnly;
		}
		set readOnly(readOnly) {
			this._readOnly = !!readOnly;
			this.onChangeReadOnlyInternal();
		}
		clone() {
			return new Editor(this);
		}
		onChangeReadOnlyInternal() {}
	}
	module.exports = Editor;
}

/***/ }),

/***/ "./columns/action/InlineInputEditor.js":
/*!*********************************************!*\
  !*** ./columns/action/InlineInputEditor.js ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Array_dot_isArray) {

const { obj: { setReadonly } } = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");
const BaseInputEditor = __webpack_require__(/*! ./BaseInputEditor */ "./columns/action/BaseInputEditor.js");
const InlineInputElement = __webpack_require__(/*! ./internal/InlineInputElement */ "./columns/action/internal/InlineInputElement.js");
const { INLINE_INPUT_EDITOR_STATE_ID: _ } = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

let globalElement = null;
let bindGridCount = 0;
function attachInput(grid, cell, editor, value) {
	if (!grid[_]) {
		setReadonly(grid, _, {});
	}
	if (!globalElement) {
		globalElement = new InlineInputElement();
	}
	const state = grid[_];
	if (!state.element) {
		state.element = globalElement;
		bindGridCount++;
		grid.addDisposable({
			dispose() {
				bindGridCount--;
				if (!bindGridCount) {
					globalElement.dispose();
					globalElement = null;
				}
			}
		});
	}

	globalElement.attach(grid, editor, cell.col, cell.row, value);
}
function detachInput(gridFocus) {
	if (globalElement) {
		globalElement.detach(gridFocus);
	}
}
function doChangeValue(grid) {
	if (globalElement) {
		globalElement.doChangeValue();
	}
}

class InlineInputEditor extends BaseInputEditor {
	constructor(option = {}) {
		super(option);
		this._classList = option.classList;
		this._type = option.type;
	}
	get classList() {
		return this._classList && (__webpack_provided_Array_dot_isArray(this._classList) ? this._classList : [this._classList]);
	}
	set classList(classList) {
		this._classList = classList;
	}
	get type() {
		return this._type;
	}
	set type(type) {
		this._type = type;
	}
	clone() {
		return new InlineInputEditor(this);
	}
	onInputCellInternal(grid, cell, inputValue) {
		attachInput(grid, cell, this, inputValue);
	}
	onOpenCellInternal(grid, cell) {
		grid.doGetCellValue(cell.col, cell.row, value => {
			attachInput(grid, cell, this, value);
		});
	}
	onChangeSelectCellInternal(grid, cell, selected) {
		doChangeValue(grid);
		detachInput();
	}
	onGridScrollInternal(grid) {
		doChangeValue(grid);
		detachInput(true);
	}
	onChangeDisabledInternal() {
		// cancel input
		detachInput(true);
	}
	onChangeReadOnlyInternal() {
		// cancel input
		detachInput(true);
	}
	onSetInputAttrsInternal(grid, cell, input) {
		InlineInputElement.setInputAttrs(this, grid, input);
	}
}

module.exports = InlineInputEditor;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @/internal/com.js */ "./internal/com.js")["Array_isArray"]))

/***/ }),

/***/ "./columns/action/InlineMenuEditor.js":
/*!********************************************!*\
  !*** ./columns/action/InlineMenuEditor.js ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Array_dot_isArray) {

const { obj: { setReadonly } } = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");
const { normalize } = __webpack_require__(/*! ../../internal/menu-items */ "./internal/menu-items.js");

const Editor = __webpack_require__(/*! ./Editor */ "./columns/action/Editor.js");
const { EVENT_TYPE: {
		SELECTED_CELL,
		CLICK_CELL,
		KEYDOWN,
		SCROLL,
		MOUSEOVER_CELL,
		MOUSEOUT_CELL,
		MOUSEMOVE_CELL
	} } = __webpack_require__(/*! ../../core/DrawGrid */ "./core/DrawGrid.js");
const InlineMenuElement = __webpack_require__(/*! ./internal/InlineMenuElement */ "./columns/action/internal/InlineMenuElement.js");
const { INLINE_MENU_EDITOR_STATE_ID: _ } = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

let globalElement = null;
let bindGridCount = 0;
function attachMenu(grid, cell, editor, value) {
	if (!grid[_]) {
		setReadonly(grid, _, {});
	}
	if (!globalElement) {
		globalElement = new InlineMenuElement();
	}
	const state = grid[_];
	if (!state.element) {
		state.element = globalElement;
		bindGridCount++;
		grid.addDisposable({
			dispose() {
				bindGridCount--;
				if (!bindGridCount) {
					globalElement.dispose();
					globalElement = null;
				}
			}
		});
	}

	globalElement.attach(grid, editor, cell.col, cell.row, value);
}
function detachMenu(gridFocus) {
	if (globalElement) {
		globalElement.detach(gridFocus);
	}
}

const KEY_ENTER = 13;
const KEY_F2 = 113;

class InlineMenuEditor extends Editor {
	constructor(option = {}) {
		super(option);
		this._classList = option.classList;
		this._options = normalize(option.options);
	}
	dispose() {}
	get classList() {
		return this._classList && (__webpack_provided_Array_dot_isArray(this._classList) ? this._classList : [this._classList]);
	}
	set classList(classList) {
		this._classList = classList;
	}
	get options() {
		return this._options;
	}
	set options(options) {
		this._options = normalize(options);
	}
	clone() {
		return new InlineMenuEditor(this);
	}
	onChangeDisabledInternal() {
		// cancel input
		detachMenu(true);
	}
	onChangeReadOnlyInternal() {
		// cancel input
		detachMenu(true);
	}
	bindGridEvent(grid, col, util) {
		const open = cell => {
			if (this.readOnly || this.disabled) {
				return;
			}
			grid.doGetCellValue(cell.col, cell.row, value => {
				attachMenu(grid, cell, this, value);
			});
		};

		return [grid.listen(CLICK_CELL, cell => {
			if (!util.isTarget(cell.col, cell.row)) {
				return;
			}
			open({
				col: cell.col,
				row: cell.row
			});
		}), grid.listen(KEYDOWN, (keyCode, e) => {
			if (keyCode !== KEY_F2 && keyCode !== KEY_ENTER) {
				return;
			}
			const sel = grid.selection.select;
			if (!util.isTarget(sel.col, sel.row)) {
				return;
			}
			open({
				col: sel.col,
				row: sel.row
			});
		}), grid.listen(SELECTED_CELL, e => {
			detachMenu();
		}), grid.listen(SCROLL, () => {
			detachMenu(true);
		}),

		// mouse move
		grid.listen(MOUSEOVER_CELL, e => {
			if (this.readOnly || this.disabled) {
				return;
			}
			if (!util.isTarget(e.col, e.row)) {
				return;
			}
			grid.getElement().style.cursor = 'pointer';
		}), grid.listen(MOUSEMOVE_CELL, e => {
			if (this.readOnly || this.disabled) {
				return;
			}
			if (!util.isTarget(e.col, e.row)) {
				return;
			}
			if (!grid.getElement().style.cursor) {
				grid.getElement().style.cursor = 'pointer';
			}
		}), grid.listen(MOUSEOUT_CELL, e => {
			if (!util.isTarget(e.col, e.row)) {
				return;
			}
			grid.getElement().style.cursor = '';
		})];
	}
}

module.exports = InlineMenuEditor;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @/internal/com.js */ "./internal/com.js")["Array_isArray"]))

/***/ }),

/***/ "./columns/action/SmallDialogInputEditor.js":
/*!**************************************************!*\
  !*** ./columns/action/SmallDialogInputEditor.js ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Array_dot_isArray) {

const { obj: { setReadonly } } = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const SmallDialogInputElement = __webpack_require__(/*! ./internal/SmallDialogInputElement */ "./columns/action/internal/SmallDialogInputElement.js");
const { SMALL_DIALOG_INPUT_EDITOR_STATE_ID: _ } = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

let globalElement = null;
let bindGridCount = 0;
function attachInput(grid, cell, editor, value) {
	if (!grid[_]) {
		setReadonly(grid, _, {});
	}
	if (!globalElement) {
		globalElement = new SmallDialogInputElement();
	}
	const state = grid[_];
	if (!state.element) {
		state.element = globalElement;
		bindGridCount++;
		grid.addDisposable({
			dispose() {
				bindGridCount--;
				if (!bindGridCount) {
					globalElement.dispose();
					globalElement = null;
				}
			}
		});
	}

	globalElement.attach(grid, editor, cell.col, cell.row, value);
}
function detachInput(gridFocus) {
	if (globalElement) {
		globalElement.detach(gridFocus);
	}
}
const BaseInputEditor = __webpack_require__(/*! ./BaseInputEditor */ "./columns/action/BaseInputEditor.js");
class SmallDialogInputEditor extends BaseInputEditor {
	constructor(option = {}) {
		super(option);
		this._helperText = option.helperText;
		this._inputValidator = option.inputValidator;
		this._validator = option.validator;
		this._classList = option.classList;
		this._type = option.type;
	}
	dispose() {
		this._inputDialogManager.dispose();
		this._inputDialogManager = null;
	}
	get classList() {
		return this._classList && (__webpack_provided_Array_dot_isArray(this._classList) ? this._classList : [this._classList]);
	}
	set classList(classList) {
		this._classList = classList;
	}
	get type() {
		return this._type;
	}
	set type(type) {
		this._type = type;
	}
	get helperText() {
		return this._helperText;
	}
	get inputValidator() {
		return this._inputValidator;
	}
	get validator() {
		return this._validator;
	}
	clone() {
		return new SmallDialogInputEditor(this);
	}
	onInputCellInternal(grid, cell, inputValue) {
		attachInput(grid, cell, this, inputValue);
	}
	onOpenCellInternal(grid, cell) {
		grid.doGetCellValue(cell.col, cell.row, value => {
			attachInput(grid, cell, this, value);
		});
	}
	onChangeSelectCellInternal(grid, cell, selected) {
		// cancel input
		detachInput();
	}
	onGridScrollInternal(grid) {
		// cancel input
		detachInput(true);
	}
	onChangeDisabledInternal() {
		// cancel input
		detachInput(true);
	}
	onChangeReadOnlyInternal() {
		// cancel input
		detachInput(true);
	}
	onSetInputAttrsInternal(grid, cell, input) {
		SmallDialogInputElement.setInputAttrs(this, grid, input);
	}
}

module.exports = SmallDialogInputEditor;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @/internal/com.js */ "./internal/com.js")["Array_isArray"]))

/***/ }),

/***/ "./columns/action/actionBind.js":
/*!**************************************!*\
  !*** ./columns/action/actionBind.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{

	const { isPromise, event: { cancel } } = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");
	const { EVENT_TYPE: {
			CLICK_CELL,
			MOUSEOVER_CELL,
			MOUSEOUT_CELL,
			KEYDOWN
		} } = __webpack_require__(/*! ../../core/DrawGrid */ "./core/DrawGrid.js");
	const KEY_ENTER = 13;
	function bindCellClickAction(grid, col, util, {
		action,
		mouseOver,
		mouseOut
	}) {
		return [
		// click
		grid.listen(CLICK_CELL, e => {
			if (!util.isTarget(e.col, e.row)) {
				return;
			}
			if (isPromise(grid.getRowRecord(e.row))) {
				return;
			}
			action({
				col: e.col,
				row: e.row
			});
		}),
		// mouse move
		grid.listen(MOUSEOVER_CELL, e => {
			if (!util.isTarget(e.col, e.row)) {
				return;
			}
			if (isPromise(grid.getRowRecord(e.row))) {
				return;
			}
			if (mouseOver) {
				if (!mouseOver({
					col: e.col,
					row: e.row
				})) {
					return;
				}
			}
			grid.getElement().style.cursor = 'pointer';
		}), grid.listen(MOUSEOUT_CELL, e => {
			if (!util.isTarget(e.col, e.row)) {
				return;
			}
			if (mouseOut) {
				mouseOut({
					col: e.col,
					row: e.row
				});
			}
			grid.getElement().style.cursor = '';
		})];
	}
	function bindCellKeyAction(grid, col, util, { action, acceptKeys = [] }) {
		acceptKeys = [...acceptKeys, KEY_ENTER];
		return [
		// enter key down
		grid.listen(KEYDOWN, (keyCode, e) => {
			if (acceptKeys.indexOf(keyCode) === -1) {
				return;
			}
			const sel = grid.selection.select;
			if (!util.isTarget(sel.col, sel.row)) {
				return;
			}
			if (isPromise(grid.getRowRecord(sel.row))) {
				return;
			}
			action({
				col: sel.col,
				row: sel.row
			});
			cancel(e);
		})];
	}

	module.exports = {
		bindCellClickAction,
		bindCellKeyAction
	};
}

/***/ }),

/***/ "./columns/action/internal/InlineInputElement.css":
/*!********************************************************!*\
  !*** ./columns/action/internal/InlineInputElement.css ***!
  \********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader?minimize!./InlineInputElement.css */ "../../node_modules/css-loader/index.js?minimize!./columns/action/internal/InlineInputElement.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./columns/action/internal/InlineInputElement.js":
/*!*******************************************************!*\
  !*** ./columns/action/internal/InlineInputElement.js ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
	event: {
		getKeyCode,
		cancel: cancelEvent
	}
} = __webpack_require__(/*! ../../../internal/utils */ "./internal/utils.js");

const EventHandler = __webpack_require__(/*! ../../../internal/EventHandler */ "./internal/EventHandler.js");
const {
	createElement
} = __webpack_require__(/*! ../../../internal/dom */ "./internal/dom.js");
const KEY_ENTER = 13;

const CLASSNAME = 'cheetah-grid__inline-input';

function createInputElement() {
	__webpack_require__(/*! ./InlineInputElement.css */ "./columns/action/internal/InlineInputElement.css");
	return createElement('input', { classList: CLASSNAME });
}

function setInputAttrs(editor, grid, input) {
	const { classList, type } = editor;
	if (classList) {
		input.classList.add(...classList);
	}
	input.type = type || '';
}

class InlineInputElement {
	static setInputAttrs(...args) {
		setInputAttrs(...args);
	}
	constructor() {
		this._handler = new EventHandler();
		this._input = createInputElement();
		this._bindInputEvents();
	}
	dispose() {
		this.detach();
		this._handler.dispose();
		this._input = null;
		this._beforePropEditor = null;
	}
	attach(grid, editor, col, row, value) {
		const input = this._input;
		const handler = this._handler;

		if (this._beforePropEditor) {
			const { classList } = this._beforePropEditor;
			if (classList) {
				input.classList.remove(...classList);
			}
		}

		input.style.font = grid.font || '16px sans-serif';

		const { element, rect } = grid.getAttachCellArea(col, row);
		input.style.top = rect.top.toFixed() + 'px';
		input.style.left = rect.left.toFixed() + 'px';
		input.style.width = rect.width.toFixed() + 'px';
		input.style.height = rect.height.toFixed() + 'px';
		element.appendChild(input);

		setInputAttrs(editor, grid, input);
		input.value = value;

		this._activeData = { grid, col, row, editor };
		this._beforePropEditor = editor;

		const focus = () => {
			input.focus();

			const end = input.value.length;
			try {
				if (typeof input.selectionStart !== 'undefined') {
					input.selectionStart = end;
					input.selectionEnd = end;
					return;
				}
			} catch (e) {
				//ignore
			}
			if (document.selection) {
				const range = input.createTextRange();
				range.collapse();
				range.moveEnd('character', end);
				range.moveStart('character', end);
				range.select();
			}
		};
		handler.tryWithOffEvents(input, 'blur', () => {
			focus();
		});
	}
	detach(gridFocus) {
		if (this._isActive()) {
			const { grid, col, row } = this._activeData;
			const input = this._input;
			this._handler.tryWithOffEvents(input, 'blur', () => {
				input.parentElement.removeChild(input);
			});
			grid.invalidateCell(col, row);
			if (gridFocus) {
				grid.focus();
			}
		}
		this._activeData = null;
	}
	doChangeValue() {
		if (!this._isActive()) {
			return;
		}
		const input = this._input;
		const { value } = input;
		const { grid, col, row } = this._activeData;
		grid.doChangeValue(col, row, () => value);
	}
	_isActive() {
		const input = this._input;
		if (!input || !input.parentElement) {
			return false;
		}
		if (!this._activeData) {
			return false;
		}
		return true;
	}
	_bindInputEvents() {
		const handler = this._handler;
		const input = this._input;
		const stopPropagationOnly = e => e.stopPropagation(); // gridにイベントが伝播しないように
		handler.on(input, 'click', stopPropagationOnly);
		handler.on(input, 'mousedown', stopPropagationOnly);
		handler.on(input, 'touchstart', stopPropagationOnly);
		handler.on(input, 'dblclick', stopPropagationOnly);

		handler.on(input, 'compositionstart', e => {
			input.classList.add('composition');
		});
		handler.on(input, 'compositionend', e => {
			input.classList.remove('composition');
		});
		handler.on(input, 'keydown', e => {
			if (input.classList.contains('composition')) {
				return;
			}
			if (getKeyCode(e) === KEY_ENTER) {
				if (!this._isActive()) {
					return;
				}
				const { grid } = this._activeData;

				this.doChangeValue();
				if (grid) {
					grid.focus();
				}
				this.detach();
				cancelEvent(e);
			}
		});
		handler.on(input, 'blur', e => {
			this.doChangeValue();
			this.detach();
		});
	}
}

module.exports = InlineInputElement;

/***/ }),

/***/ "./columns/action/internal/InlineMenuElement.css":
/*!*******************************************************!*\
  !*** ./columns/action/internal/InlineMenuElement.css ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader?minimize!./InlineMenuElement.css */ "../../node_modules/css-loader/index.js?minimize!./columns/action/internal/InlineMenuElement.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./columns/action/internal/InlineMenuElement.js":
/*!******************************************************!*\
  !*** ./columns/action/internal/InlineMenuElement.js ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Array_dot_isArray) {

const {
	isDef,
	event: {
		getKeyCode,
		cancel: cancelEvent
	}
} = __webpack_require__(/*! ../../../internal/utils */ "./internal/utils.js");

const EventHandler = __webpack_require__(/*! ../../../internal/EventHandler */ "./internal/EventHandler.js");
const {
	createElement,
	appendHtml,
	empty,
	disableFocus,
	isFocusable,
	findPrevSiblingFocusable,
	findNextSiblingFocusable
} = __webpack_require__(/*! ../../../internal/dom */ "./internal/dom.js");

const KEY_TAB = 9;
const KEY_ENTER = 13;
const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_ESC = 27;

const CLASSNAME = 'cheetah-grid__inline-menu';
const ITEM_CLASSNAME = CLASSNAME + '__menu-item';
const HIDDEN_CLASSNAME = CLASSNAME + '--hidden';
const SHOWN_CLASSNAME = CLASSNAME + '--shown';
const EMPTY_ITEM_CLASSNAME = ITEM_CLASSNAME + '--empty';

function findItemParents(target) {
	let el = target;
	while (!el.classList.contains(ITEM_CLASSNAME)) {
		el = el.parentElement;
		if (!el || el.classList.contains(CLASSNAME)) {
			return undefined;
		}
	}
	return el;
}

function createMenuElement() {
	__webpack_require__(/*! ./InlineMenuElement.css */ "./columns/action/internal/InlineMenuElement.css");
	return createElement('ul', { classList: CLASSNAME });
}
function attachElement(element, rect, menu) {
	menu.style.top = rect.top.toFixed() + 'px';
	menu.style.left = rect.left.toFixed() + 'px';
	menu.style.width = rect.width.toFixed() + 'px';
	menu.style['line-height'] = rect.height.toFixed() + 'px';
	element.appendChild(menu);
}

function optionToLi({ classList, caption, value, html }, index) {
	const item = createElement('li', { classList: ITEM_CLASSNAME });
	item.tabIndex = 0;
	item.dataset.valueindex = index;
	if (classList) {
		item.classList.add(...(__webpack_provided_Array_dot_isArray(classList) ? classList : [classList]));
	}

	if (caption) {
		const span = createElement('span', { text: caption });
		item.appendChild(span);
	} else if (html) {
		appendHtml(item, html);
	}

	if (value === '' || !isDef(value)) {
		item.classList.add(EMPTY_ITEM_CLASSNAME);
	}

	return item;
}

function openMenu(grid, editor, col, row, value, menu) {
	const { options, classList } = editor;
	menu.classList.remove(SHOWN_CLASSNAME);
	menu.classList.add(HIDDEN_CLASSNAME);
	empty(menu);
	menu.style.font = grid.font || '16px sans-serif';
	let emptyItemEl = null;
	let valueItemEl = null;

	options.forEach((option, i) => {
		const item = optionToLi(option, i);
		menu.appendChild(item);
		if (option.value === value) {
			valueItemEl = item;
			item.dataset.select = true;
		}
		if (item.classList.contains(EMPTY_ITEM_CLASSNAME)) {
			emptyItemEl = item;
		}
	});
	const focusEl = valueItemEl || emptyItemEl || menu.children[0];
	if (classList) {
		menu.classList.add(...classList);
	}
	const children = Array.prototype.slice.call(menu.children, 0);
	const focusIndex = children.indexOf(focusEl);
	const { element, rect } = grid.getAttachCellArea(col, row);

	// Cover the right line
	rect.width++;

	// append for calculation
	attachElement(element, rect, menu);

	// Make the selection item at the middle
	let offset = 0;
	let allHeight = 0;
	for (let i = 0; i < children.length; i++) {
		const offsetHeight = children[i].offsetHeight;
		if (i < focusIndex) {
			offset += offsetHeight;
		}
		allHeight += offsetHeight;
	}
	rect.offsetTop(-offset);
	menu.style['transform-origin'] = `center ${offset + Math.ceil(children[focusIndex].offsetHeight / 2)}px 0px`;
	attachElement(element, rect, menu);

	// Control not to overflow the screen range
	const menuClientRect = menu.getBoundingClientRect();
	const scaleDiff = (allHeight - menuClientRect.height) / 2;
	const orgMenuTop = menuClientRect.top - scaleDiff;
	let menuTop = orgMenuTop;
	const menuBottom = menuTop + allHeight;
	const winBottom = window.innerHeight;
	const winMargin = 20;
	if (menuBottom > winBottom - winMargin) {
		const diff = menuBottom - winBottom + winMargin;
		menuTop -= diff;
	}
	if (menuTop < 0 /*winTop*/ + winMargin) {
		menuTop = winMargin;
	}
	if (menuTop !== orgMenuTop) {
		rect.offsetTop(-(orgMenuTop - menuTop));
		// re update
		attachElement(element, rect, menu);
	}

	if (focusEl) {
		focusEl.focus();
	}
	menu.classList.remove(HIDDEN_CLASSNAME);
	menu.classList.add(SHOWN_CLASSNAME);
}

function closeMenu(grid, col, row, menu) {
	menu.classList.remove(SHOWN_CLASSNAME);
	menu.classList.add(HIDDEN_CLASSNAME);
	disableFocus(menu);
}

class InlineMenuElement {
	constructor() {
		this._handler = new EventHandler();
		this._menu = createMenuElement();
		this._bindMenuEvents();
	}
	dispose() {
		const menu = this._menu;
		this.detach();
		this._handler.dispose();
		this._menu = null;
		this._beforePropEditor = null;
		if (menu.parentElement) {
			menu.parentElement.removeChild(menu);
		}
	}
	attach(grid, editor, col, row, value) {
		const menu = this._menu;

		if (this._beforePropEditor) {
			const { classList } = this._beforePropEditor;
			if (classList) {
				menu.classList.remove(...classList);
			}
		}

		openMenu(grid, editor, col, row, value, menu);
		this._activeData = { grid, col, row, editor };
		this._beforePropEditor = editor;
	}
	detach(gridFocus) {
		if (this._isActive()) {
			const { grid, col, row } = this._activeData;
			const menu = this._menu;
			closeMenu(grid, col, row, menu);

			grid.invalidateCell(col, row);
			if (gridFocus) {
				grid.focus();
			}
		}
		this._activeData = null;
	}
	_doChangeValue(valueindex) {
		if (!this._isActive()) {
			return;
		}
		const { grid, col, row, editor } = this._activeData;
		const { value } = editor.options[valueindex];
		grid.doChangeValue(col, row, () => value);
	}
	_isActive() {
		const menu = this._menu;
		if (!menu || !menu.parentElement) {
			return false;
		}
		if (!this._activeData) {
			return false;
		}
		return true;
	}
	_bindMenuEvents() {
		const handler = this._handler;
		const menu = this._menu;

		const stopPropagationOnly = e => e.stopPropagation(); // gridにイベントが伝播しないように

		handler.on(menu, 'mousedown', stopPropagationOnly);
		handler.on(menu, 'touchstart', stopPropagationOnly);
		handler.on(menu, 'dblclick', stopPropagationOnly);

		handler.on(menu, 'click', e => {
			e.stopPropagation();
			const item = findItemParents(e.target);
			if (!item) {
				return;
			}
			const valueindex = item.dataset.valueindex;
			this._doChangeValue(item.dataset.valueindex);
			this.detach(true);
		});
		handler.on(menu, 'keydown', e => {
			const item = findItemParents(e.target);
			if (!item) {
				return;
			}
			const keyCode = getKeyCode(e);
			if (keyCode === KEY_ENTER) {
				const valueindex = item.dataset.valueindex;
				this._doChangeValue(valueindex);
				this.detach(true);
				cancelEvent(e);
			} else if (keyCode === KEY_ESC) {
				this.detach(true);
				cancelEvent(e);
			} else if (keyCode === KEY_UP) {
				const n = findPrevSiblingFocusable(item);
				if (n) {
					n.focus();
					cancelEvent(e);
				}
			} else if (keyCode === KEY_DOWN) {
				const n = findNextSiblingFocusable(item);
				if (n) {
					n.focus();
					cancelEvent(e);
				}
			} else if (keyCode === KEY_TAB) {
				if (!e.shiftKey) {
					if (!findNextSiblingFocusable(item)) {
						let n = menu.querySelector('.' + ITEM_CLASSNAME);
						if (!isFocusable(n)) {
							n = findNextSiblingFocusable(n);
						}
						if (n) {
							n.focus();
							cancelEvent(e);
						}
					}
				} else {
					if (!findPrevSiblingFocusable(item)) {
						const items = menu.querySelectorAll('.' + ITEM_CLASSNAME);
						let n = items[items.length - 1];
						if (!isFocusable(n)) {
							n = findPrevSiblingFocusable(n);
						}
						if (n) {
							n.focus();
							cancelEvent(e);
						}
					}
				}
			}
		});
	}
}

module.exports = InlineMenuElement;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @/internal/com.js */ "./internal/com.js")["Array_isArray"]))

/***/ }),

/***/ "./columns/action/internal/SmallDialogInputElement.css":
/*!*************************************************************!*\
  !*** ./columns/action/internal/SmallDialogInputElement.css ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader?minimize!./SmallDialogInputElement.css */ "../../node_modules/css-loader/index.js?minimize!./columns/action/internal/SmallDialogInputElement.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./columns/action/internal/SmallDialogInputElement.js":
/*!************************************************************!*\
  !*** ./columns/action/internal/SmallDialogInputElement.js ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
	event: {
		getKeyCode,
		cancel: cancelEvent
	},
	then
} = __webpack_require__(/*! ../../../internal/utils */ "./internal/utils.js");

const EventHandler = __webpack_require__(/*! ../../../internal/EventHandler */ "./internal/EventHandler.js");
const {
	createElement
} = __webpack_require__(/*! ../../../internal/dom */ "./internal/dom.js");

const CLASSNAME = 'cheetah-grid__small-dialog-input';
const INPUT_CLASSNAME = CLASSNAME + '__input';
const HIDDEN_CLASSNAME = CLASSNAME + '--hidden';
const SHOWN_CLASSNAME = CLASSNAME + '--shown';

const KEY_ENTER = 13;
const KEY_ESC = 27;

function _focus(input, handler) {
	const focus = () => {
		input.focus();

		const end = input.value.length;
		try {
			if (typeof input.selectionStart !== 'undefined') {
				input.selectionStart = end;
				input.selectionEnd = end;
				return;
			}
		} catch (e) {
			//ignore
		}
		if (document.selection) {
			const range = input.createTextRange();
			range.collapse();
			range.moveEnd('character', end);
			range.moveStart('character', end);
			range.select();
		}
	};
	handler.tryWithOffEvents(input, 'blur', () => {
		focus();
	});
}

function createDialogElement() {
	__webpack_require__(/*! ./SmallDialogInputElement.css */ "./columns/action/internal/SmallDialogInputElement.css");
	const element = createElement('div', { classList: [CLASSNAME, HIDDEN_CLASSNAME] });
	const input = createElement('input', { classList: INPUT_CLASSNAME });
	input.readonly = true;
	input.tabIndex = -1;
	element.appendChild(input);
	return element;
}

function bindProps(grid, dialog, input, editor) {
	const { classList, helperText } = editor;
	if (classList) {
		dialog.classList.add(...classList);
	}
	if (helperText && typeof helperText !== 'function') {
		dialog.dataset.helperText = helperText;
	}
	setInputAttrs(editor, grid, input);
}

function unbindProps(grid, dialog, input, editor) {
	const { classList } = editor;
	if (classList) {
		dialog.classList.remove(...classList);
	}
	delete dialog.dataset.helperText;
	input.type = '';
}

function setInputAttrs(editor, grid, input) {
	const { type } = editor;
	input.type = type || '';
}

class SmallDialogInputElement {
	static setInputAttrs(...args) {
		setInputAttrs(...args);
	}
	constructor() {
		this._handler = new EventHandler();
		this._dialog = createDialogElement();
		this._input = this._dialog.querySelector('.' + INPUT_CLASSNAME);
		this._bindDialogEvents();
	}
	dispose() {
		const dialog = this._dialog;
		this.detach();
		this._handler.dispose();
		this._dialog = null;
		this._input = null;
		this._beforePropEditor = null;
		if (dialog.parentElement) {
			dialog.parentElement.removeChild(dialog);
		}
	}
	attach(grid, editor, col, row, value) {
		const handler = this._handler;
		const dialog = this._dialog;
		const input = this._input;

		if (this._beforePropEditor) {
			unbindProps(grid, dialog, input, this._beforePropEditor);
		}

		delete dialog.dataset.errorMessage;
		dialog.classList.remove(SHOWN_CLASSNAME);
		dialog.classList.add(HIDDEN_CLASSNAME);
		input.readonly = false;
		input.tabIndex = 0;
		const { element, rect } = grid.getAttachCellArea(col, row);
		dialog.style.top = rect.top.toFixed() + 'px';
		dialog.style.left = rect.left.toFixed() + 'px';
		dialog.style.width = rect.width.toFixed() + 'px';
		input.style.height = rect.height.toFixed() + 'px';
		element.appendChild(dialog);

		input.value = value;
		input.style.font = grid.font || '16px sans-serif';
		const activeData = { grid, col, row, editor };
		this._onInputValue(input, activeData);
		_focus(input, handler);
		dialog.classList.add(SHOWN_CLASSNAME);
		dialog.classList.remove(HIDDEN_CLASSNAME);
		input.readonly = true;

		bindProps(grid, dialog, input, editor);

		this._activeData = activeData;
		this._beforePropEditor = editor;
	}
	detach(gridFocus) {
		if (this._isActive()) {
			const dialog = this._dialog;
			const input = this._input;

			dialog.classList.remove(SHOWN_CLASSNAME);
			dialog.classList.add(HIDDEN_CLASSNAME);
			input.readonly = false;
			input.tabIndex = -1;

			const { grid, col, row } = this._activeData;

			grid.invalidateCell(col, row);
			if (gridFocus) {
				grid.focus();
			}
		}
		this._activeData = null;
		this._beforeValue = null;
	}
	_doChangeValue() {
		if (!this._isActive()) {
			return false;
		}
		const input = this._input;
		const { value } = input;
		return then(this._validate(value), res => {
			if (res && value === input.value) {
				const { grid, col, row } = this._activeData;
				grid.doChangeValue(col, row, () => value);
				return true;
			}
			return false;
		});
	}
	_isActive() {
		const dialog = this._dialog;
		if (!dialog || !dialog.parentElement) {
			return false;
		}
		if (!this._activeData) {
			return false;
		}
		return true;
	}
	_bindDialogEvents() {
		const handler = this._handler;
		const dialog = this._dialog;
		const input = this._input;
		const stopPropagationOnly = e => e.stopPropagation(); // gridにイベントが伝播しないように
		handler.on(dialog, 'click', stopPropagationOnly);
		handler.on(dialog, 'dblclick', stopPropagationOnly);
		handler.on(dialog, 'mousedown', stopPropagationOnly);
		handler.on(dialog, 'touchstart', stopPropagationOnly);

		handler.on(input, 'compositionstart', e => {
			input.classList.add('composition');
		});
		handler.on(input, 'compositionend', e => {
			input.classList.remove('composition');
			this._onInputValue(input);
		});
		const onKeyupAndPress = e => {
			if (input.classList.contains('composition')) {
				return;
			}
			this._onInputValue(input);
		};
		handler.on(input, 'keyup', onKeyupAndPress);
		handler.on(input, 'keypress', onKeyupAndPress);
		handler.on(input, 'keydown', e => {
			if (input.classList.contains('composition')) {
				return;
			}
			const keyCode = getKeyCode(e);
			if (keyCode === KEY_ESC) {
				this.detach(true);
				cancelEvent(e);
			} else if (keyCode === KEY_ENTER) {
				const input = this._input;
				const { value } = input;
				then(this._doChangeValue(), r => {
					if (r && value === input.value) {
						this.detach(true);
					}
				});
				cancelEvent(e);
			} else {
				this._onInputValue(input);
			}
		});
	}
	_onInputValue(input, activeData) {
		const before = this._beforeValue;
		const { value } = input;
		if (before !== value) {
			this._onInputValueChange(value, before, activeData);
		}
		this._beforeValue = value;
	}
	_onInputValueChange(after, before, activeData) {
		activeData = activeData || this._activeData;
		const dialog = this._dialog;
		const { grid, col, row, editor } = activeData;
		if (typeof editor.helperText === 'function') {
			const helperText = editor.helperText(after, { grid, col, row });
			if (helperText) {
				dialog.dataset.helperText = helperText;
			} else {
				delete dialog.dataset.helperText;
			}
		}
		if ('errorMessage' in dialog.dataset) {
			this._validate(after, true);
		}
	}
	_validate(value, inputOnly) {
		const dialog = this._dialog;
		const input = this._input;
		const { grid, col, row, editor } = this._activeData;
		let message = null;
		if (editor.inputValidator) {
			message = editor.inputValidator(value, { grid, col, row });
		}
		return then(message, message => {
			if (!message && editor.validator && !inputOnly) {
				message = editor.validator(value, { grid, col, row });
			}
			return then(message, message => {
				if (message && value === input.value) {
					dialog.dataset.errorMessage = message;
				} else {
					delete dialog.dataset.errorMessage;
				}
				return !message;
			});
		});
	}
}

module.exports = SmallDialogInputElement;

/***/ }),

/***/ "./columns/message/BaseMessage.js":
/*!****************************************!*\
  !*** ./columns/message/BaseMessage.js ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class BaseMessage {
	constructor(grid) {
		this._grid = grid;
	}
	dispose() {
		this.detachMessageElement();
		if (this._messageElement) {
			this._messageElement.dispose();
		}
		this._messageElement = null;
	}
	_getMessageElement() {
		return this._messageElement || (this._messageElement = this.createMessageElementInternal());
	}
	createMessageElementInternal() {}
	drawCellMessageInternal(message, context, style, helper, info) {}
	attachMessageElement(col, row, message) {
		const messageElement = this._getMessageElement();
		messageElement.attach(this._grid, col, row, message);
	}
	moveMessageElement(col, row) {
		const messageElement = this._getMessageElement();
		messageElement.move(this._grid, col, row);
	}
	detachMessageElement() {
		const messageElement = this._getMessageElement();
		messageElement._detach();
	}
	drawCellMessage(message, context, style, helper, info) {
		this.drawCellMessageInternal(message, context, style, helper, info);
	}
}

module.exports = BaseMessage;

/***/ }),

/***/ "./columns/message/ErrorMessage.js":
/*!*****************************************!*\
  !*** ./columns/message/ErrorMessage.js ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Rect = __webpack_require__(/*! ../../internal/Rect */ "./internal/Rect.js");
const BaseMessage = __webpack_require__(/*! ./BaseMessage */ "./columns/message/BaseMessage.js");
const ErrorMessageElement = __webpack_require__(/*! ./internal/ErrorMessageElement */ "./columns/message/internal/ErrorMessageElement.js");

const RED_A100 = '#ff8a80';
// const RED_A400 = '#FF1744';

class ErrorMessage extends BaseMessage {
	createMessageElementInternal() {
		return new ErrorMessageElement();
	}
	drawCellMessageInternal(message, context, style, helper, info) {
		const { bgColor } = style;

		const { selected } = context.getSelectState();

		const rect = context.getRect();

		helper.drawBorderWithClip(context, ctx => {
			if (!selected) {
				// draw box
				ctx.fillStyle = RED_A100;
				const boxRect = rect.copy();
				boxRect.left = boxRect.right - 24;
				ctx.fillRect(boxRect.left, boxRect.top, boxRect.width, boxRect.height - 1);

				// draw exclamation mark
				const fillColor = bgColor;
				const height = 20;
				const width = height / 5;
				const left = boxRect.left + (boxRect.width - width) / 2;
				const top = boxRect.top + (boxRect.height - height) / 2;
				helper.fillRectWithState(new Rect(left, top, width, height / 5 * 3), context, { fillColor });
				helper.fillRectWithState(new Rect(left, top + height / 5 * 4, width, height / 5), context, { fillColor });
			}
		});
	}
}

module.exports = ErrorMessage;

/***/ }),

/***/ "./columns/message/InfoMessage.js":
/*!****************************************!*\
  !*** ./columns/message/InfoMessage.js ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const BaseMessage = __webpack_require__(/*! ./BaseMessage */ "./columns/message/BaseMessage.js");
const MessageElement = __webpack_require__(/*! ./internal/MessageElement */ "./columns/message/internal/MessageElement.js");

const Rect = __webpack_require__(/*! ../../internal/Rect */ "./internal/Rect.js");

const GREY_L2 = '#e0e0e0';
// const GREY_L1 = '#bdbdbd';

class InfoMessage extends BaseMessage {
	createMessageElementInternal() {
		return new MessageElement();
	}
	drawCellMessageInternal(message, context, style, helper, info) {
		const { bgColor } = style;

		const { selected } = context.getSelectState();

		const rect = context.getRect();

		helper.drawBorderWithClip(context, ctx => {
			if (!selected) {
				// draw box
				ctx.fillStyle = GREY_L2;
				const boxRect = rect.copy();
				boxRect.left = boxRect.right - 24;
				ctx.fillRect(boxRect.left, boxRect.top, boxRect.width, boxRect.height - 1);

				// draw i mark
				const fillColor = bgColor;
				const height = 20;
				const width = height / 5;
				const left = boxRect.left + (boxRect.width - width) / 2;
				const top = boxRect.top + (boxRect.height - height) / 2;
				helper.fillRectWithState(new Rect(left, top, width, height / 5), context, { fillColor });
				helper.fillRectWithState(new Rect(left, top + height / 5 * 2, width, height / 5 * 3), context, { fillColor });
			}
		});
	}
}

module.exports = InfoMessage;

/***/ }),

/***/ "./columns/message/MessageHandler.js":
/*!*******************************************!*\
  !*** ./columns/message/MessageHandler.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isPromise } = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");
const {
	SELECTED_CELL,
	SCROLL,
	CHANGED_VALUE
} = __webpack_require__(/*! ../../list-grid/EVENT_TYPE */ "./list-grid/EVENT_TYPE.js");
const ErrorMessage = __webpack_require__(/*! ./ErrorMessage */ "./columns/message/ErrorMessage.js");
const WarningMessage = __webpack_require__(/*! ./WarningMessage */ "./columns/message/WarningMessage.js");
const InfoMessage = __webpack_require__(/*! ./InfoMessage */ "./columns/message/InfoMessage.js");

class MessageHandler {
	constructor(grid, getMessage) {
		this._grid = grid;
		this._messageInstances = {};
		this._bindGridEvent(grid, getMessage);
	}
	dispose() {
		const messageInstances = this._messageInstances;
		for (const k in messageInstances) {
			messageInstances[k].dispose();
		}
		this._messageInstances = null;
	}
	drawCellMessage(message, context, style, helper, info) {

		if (!message || isPromise(message)) {
			return;
		}
		const instance = this._getMessageInstanceOfMessage(message);
		instance.drawCellMessage(message, context, style, helper, info);
	}
	_attach(col, row, message) {
		const info = this._attachInfo;
		const instance = this._getMessageInstanceOfMessage(message);
		if (info && info.instance !== instance) {
			info.instance.detachMessageElement();
		}
		instance.attachMessageElement(col, row, this._toMessageText(message));
		this._attachInfo = { col, row, instance };
	}
	_move(col, row) {
		const info = this._attachInfo;
		if (!info || info.col !== col || info.row !== row) {
			return;
		}
		const { instance } = info;
		instance.moveMessageElement(col, row);
	}
	_detach() {
		const info = this._attachInfo;
		if (!info) {
			return;
		}
		const { instance } = info;
		instance.detachMessageElement();
		this._attachInfo = null;
	}
	_bindGridEvent(grid, getMessage) {
		const onSelectMessage = sel => {
			const message = getMessage(sel.col, sel.row);
			if (!message || isPromise(message)) {
				this._detach();
			} else {
				this._attach(sel.col, sel.row, message);
			}
		};
		grid.listen(SELECTED_CELL, e => {
			if (!e.selected) {
				return;
			}
			if (e.before.col === e.col && e.before.row === e.row) {
				return;
			}
			onSelectMessage(e);
		});
		grid.listen(SCROLL, () => {
			const sel = grid.selection.select;
			this._move(sel.col, sel.row);
		});
		grid.listen(CHANGED_VALUE, e => {
			const sel = grid.selection.select;
			if (sel.col !== e.col || sel.row !== e.row) {
				return;
			}
			onSelectMessage(e);
		});
	}
	_getMessageInstanceOfMessage(message) {
		message = message || '';
		if (typeof message === 'string') {
			return this._createMessageInstance('error', ErrorMessage);
		}
		const type = ('' + message.type).toLowerCase();
		if (type === 'info') {
			return this._createMessageInstance('info', InfoMessage);
		} else if (type === 'warning') {
			return this._createMessageInstance('warning', WarningMessage);
		}
		return this._createMessageInstance('error', ErrorMessage);
	}
	_toMessageText(message) {
		message = message || '';
		if (typeof message === 'string') {
			return message;
		}
		if (message.message) {
			return message.message;
		}
		return '' + message;
	}
	_createMessageInstance(name, Message) {
		const messageInstances = this._messageInstances;
		return messageInstances[name] || (messageInstances[name] = new Message(this._grid));
	}
}

module.exports = MessageHandler;

/***/ }),

/***/ "./columns/message/WarningMessage.js":
/*!*******************************************!*\
  !*** ./columns/message/WarningMessage.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Rect = __webpack_require__(/*! ../../internal/Rect */ "./internal/Rect.js");
const BaseMessage = __webpack_require__(/*! ./BaseMessage */ "./columns/message/BaseMessage.js");
const WarningMessageElement = __webpack_require__(/*! ./internal/WarningMessageElement */ "./columns/message/internal/WarningMessageElement.js");

const DEEP_ORANGE_A100 = '#ff9e80';

class WarningMessage extends BaseMessage {
	createMessageElementInternal() {
		return new WarningMessageElement();
	}
	drawCellMessageInternal(message, context, style, helper, info) {
		const { bgColor } = style;

		const { selected } = context.getSelectState();

		const rect = context.getRect();

		helper.drawBorderWithClip(context, ctx => {
			if (!selected) {
				// draw box
				ctx.fillStyle = DEEP_ORANGE_A100;
				const boxRect = rect.copy();
				boxRect.left = boxRect.right - 24;
				ctx.fillRect(boxRect.left, boxRect.top, boxRect.width, boxRect.height - 1);

				// draw exclamation mark
				const fillColor = bgColor;
				const height = 20;
				const width = height / 5;
				const left = boxRect.left + (boxRect.width - width) / 2;
				const top = boxRect.top + (boxRect.height - height) / 2;
				helper.fillRectWithState(new Rect(left, top, width, height / 5 * 3), context, { fillColor });
				helper.fillRectWithState(new Rect(left, top + height / 5 * 4, width, height / 5), context, { fillColor });
			}
		});
	}
}

module.exports = WarningMessage;

/***/ }),

/***/ "./columns/message/internal/ErrorMessageElement.css":
/*!**********************************************************!*\
  !*** ./columns/message/internal/ErrorMessageElement.css ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader?minimize!./ErrorMessageElement.css */ "../../node_modules/css-loader/index.js?minimize!./columns/message/internal/ErrorMessageElement.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./columns/message/internal/ErrorMessageElement.js":
/*!*********************************************************!*\
  !*** ./columns/message/internal/ErrorMessageElement.js ***!
  \*********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const MessageElement = __webpack_require__(/*! ./MessageElement */ "./columns/message/internal/MessageElement.js");

const CLASSNAME = 'cheetah-grid__error-message-element';
const MESSAGE_CLASSNAME = CLASSNAME + '__message';

class ErrorMessageElement extends MessageElement {
	constructor() {
		super();
		__webpack_require__(/*! ./ErrorMessageElement.css */ "./columns/message/internal/ErrorMessageElement.css");
		this._rootElement.classList.add(CLASSNAME);
		this._messageElement.classList.add(MESSAGE_CLASSNAME);
	}
}

module.exports = ErrorMessageElement;

/***/ }),

/***/ "./columns/message/internal/MessageElement.css":
/*!*****************************************************!*\
  !*** ./columns/message/internal/MessageElement.css ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader?minimize!./MessageElement.css */ "../../node_modules/css-loader/index.js?minimize!./columns/message/internal/MessageElement.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./columns/message/internal/MessageElement.js":
/*!****************************************************!*\
  !*** ./columns/message/internal/MessageElement.js ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EventHandler = __webpack_require__(/*! ../../../internal/EventHandler */ "./internal/EventHandler.js");
const {
	createElement
} = __webpack_require__(/*! ../../../internal/dom */ "./internal/dom.js");

const CLASSNAME = 'cheetah-grid__message-element';
const MESSAGE_CLASSNAME = CLASSNAME + '__message';
const HIDDEN_CLASSNAME = CLASSNAME + '--hidden';
const SHOWN_CLASSNAME = CLASSNAME + '--shown';

function createrootElement() {
	__webpack_require__(/*! ./MessageElement.css */ "./columns/message/internal/MessageElement.css");
	const element = createElement('div', { classList: [CLASSNAME, HIDDEN_CLASSNAME] });
	const message = createElement('span', { classList: [MESSAGE_CLASSNAME] });
	element.appendChild(message);
	return element;
}

class MessageElement {
	constructor() {
		this._handler = new EventHandler();
		const rootElement = this._rootElement = createrootElement();
		this._messageElement = rootElement.querySelector(`.${MESSAGE_CLASSNAME}`);
	}
	dispose() {
		this.detach();
		this._handler.dispose();
		this._rootElement = null;
		this._messageElement = null;
	}
	attach(grid, col, row, message) {
		const rootElement = this._rootElement;
		const messageElement = this._messageElement;

		rootElement.classList.remove(SHOWN_CLASSNAME);
		rootElement.classList.add(HIDDEN_CLASSNAME);

		if (this._attachCell(grid, col, row)) {
			rootElement.classList.add(SHOWN_CLASSNAME);
			rootElement.classList.remove(HIDDEN_CLASSNAME);

			messageElement.textContent = message;
		} else {
			this._detach();
		}
	}
	move(grid, col, row) {
		const rootElement = this._rootElement;
		if (this._attachCell(grid, col, row)) {

			rootElement.classList.add(SHOWN_CLASSNAME);
			rootElement.classList.remove(HIDDEN_CLASSNAME);
		} else {
			this._detach();
		}
	}
	detach() {
		this._detach();
	}
	_detach() {
		const rootElement = this._rootElement;
		if (rootElement.parentElement) {
			rootElement.parentElement.removeChild(rootElement);
			rootElement.classList.remove(SHOWN_CLASSNAME);
			rootElement.classList.add(HIDDEN_CLASSNAME);
		}
	}
	_attachCell(grid, col, row) {
		const rootElement = this._rootElement;
		const { element, rect } = grid.getAttachCellArea(col, row);

		const { bottom: top, left, width } = rect;
		const { frozenRowCount, frozenColCount } = grid;
		if (row >= frozenRowCount && frozenRowCount > 0) {
			const { rect: frozenRect } = grid.getAttachCellArea(col, frozenRowCount - 1);
			if (top < frozenRect.bottom) {
				return false;
			}
		} else {
			if (top < 0) {
				return false;
			}
		}
		if (col >= frozenColCount && frozenColCount > 0) {
			const { rect: frozenRect } = grid.getAttachCellArea(frozenColCount - 1, row);
			if (left < frozenRect.right) {
				return false;
			}
		} else {
			if (left < 0) {
				return false;
			}
		}
		const { offsetHeight, offsetWidth } = element;
		if (offsetHeight < top) {
			return false;
		}
		if (offsetWidth < left) {
			return false;
		}

		rootElement.style.top = top.toFixed() + 'px';
		rootElement.style.left = left.toFixed() + 'px';
		rootElement.style.width = width.toFixed() + 'px';
		if (rootElement.parentElement !== element) {
			element.appendChild(rootElement);
		}
		return true;
	}
}

module.exports = MessageElement;

/***/ }),

/***/ "./columns/message/internal/WarningMessageElement.css":
/*!************************************************************!*\
  !*** ./columns/message/internal/WarningMessageElement.css ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader?minimize!./WarningMessageElement.css */ "../../node_modules/css-loader/index.js?minimize!./columns/message/internal/WarningMessageElement.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./columns/message/internal/WarningMessageElement.js":
/*!***********************************************************!*\
  !*** ./columns/message/internal/WarningMessageElement.js ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const MessageElement = __webpack_require__(/*! ./MessageElement */ "./columns/message/internal/MessageElement.js");

const CLASSNAME = 'cheetah-grid__warning-message-element';
const MESSAGE_CLASSNAME = CLASSNAME + '__message';

class WarningMessageElement extends MessageElement {
	constructor() {
		super();
		__webpack_require__(/*! ./WarningMessageElement.css */ "./columns/message/internal/WarningMessageElement.css");
		this._rootElement.classList.add(CLASSNAME);
		this._messageElement.classList.add(MESSAGE_CLASSNAME);
	}
}

module.exports = WarningMessageElement;

/***/ }),

/***/ "./columns/style.js":
/*!**************************!*\
  !*** ./columns/style.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const BaseStyle = __webpack_require__(/*! ./style/BaseStyle */ "./columns/style/BaseStyle.js");
	const Style = __webpack_require__(/*! ./style/Style */ "./columns/style/Style.js");
	const NumberStyle = __webpack_require__(/*! ./style/NumberStyle */ "./columns/style/NumberStyle.js");
	const CheckStyle = __webpack_require__(/*! ./style/CheckStyle */ "./columns/style/CheckStyle.js");
	const ButtonStyle = __webpack_require__(/*! ./style/ButtonStyle */ "./columns/style/ButtonStyle.js");
	const ImageStyle = __webpack_require__(/*! ./style/ImageStyle */ "./columns/style/ImageStyle.js");
	const IconStyle = __webpack_require__(/*! ./style/IconStyle */ "./columns/style/IconStyle.js");
	const PercentCompleteBarStyle = __webpack_require__(/*! ./style/PercentCompleteBarStyle */ "./columns/style/PercentCompleteBarStyle.js");

	/**
  * column styles
  * @type {Object}
  * @namespace cheetahGrid.columns.style
  * @memberof cheetahGrid.columns
  */
	const style = {
		get EVENT_TYPE() {
			return BaseStyle.EVENT_TYPE;
		},
		get BaseStyle() {
			return BaseStyle;
		},
		get Style() {
			return Style;
		},
		get NumberStyle() {
			return NumberStyle;
		},
		get CheckStyle() {
			return CheckStyle;
		},
		get ButtonStyle() {
			return ButtonStyle;
		},
		get ImageStyle() {
			return ImageStyle;
		},
		get IconStyle() {
			return IconStyle;
		},
		get PercentCompleteBarStyle() {
			return PercentCompleteBarStyle;
		},
		of(columnStyle, record, StyleClass) {
			if (columnStyle) {
				if (columnStyle instanceof Style) {
					return columnStyle;
				} else if (typeof columnStyle === 'function') {
					return style.of(columnStyle(record), record, StyleClass);
				} else if (record && columnStyle in record) {
					return style.of(record[columnStyle], record, StyleClass);
				}
				return new StyleClass(columnStyle);
			} else {
				return StyleClass.DEFAULT;
			}
		}
	};
	module.exports = style;
}

/***/ }),

/***/ "./columns/style/BaseStyle.js":
/*!************************************!*\
  !*** ./columns/style/BaseStyle.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const EventTarget = __webpack_require__(/*! ../../core/EventTarget */ "./core/EventTarget.js");

	const EVENT_TYPE = {
		CHANGE_STYLE: 'change_style'
	};

	let defaultStyle;
	class BaseStyle extends EventTarget {
		static get EVENT_TYPE() {
			return EVENT_TYPE;
		}
		static get DEFAULT() {
			return defaultStyle ? defaultStyle : defaultStyle = new BaseStyle();
		}
		constructor({
			bgColor
		} = {}) {
			super();
			this._bgColor = bgColor;
		}
		get bgColor() {
			return this._bgColor;
		}
		set bgColor(bgColor) {
			this._bgColor = bgColor;
			this.doChangeStyle();
		}
		doChangeStyle() {
			this.fireListeners(EVENT_TYPE.CHANGE_STYLE);
		}
		clone() {
			return new BaseStyle(this);
		}
	}
	module.exports = BaseStyle;
}

/***/ }),

/***/ "./columns/style/BranchGraphStyle.js":
/*!*******************************************!*\
  !*** ./columns/style/BranchGraphStyle.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const BaseStyle = __webpack_require__(/*! ./BaseStyle */ "./columns/style/BaseStyle.js");
let defaultStyle;
function adj(style) {
	const { textAlign = 'center' } = style;
	style.textAlign = textAlign;
	return style;
}
const DEFAULT_BRANCH_COLORS = (name, index) => {
	switch (index % 3) {
		case 0:
			return '#979797';
		case 1:
			return '#008fb5';
		case 2:
			return '#f1c109';
		default:
	}
	return '#979797';
};
class BranchGraphStyle extends BaseStyle {
	static get DEFAULT() {
		return defaultStyle ? defaultStyle : defaultStyle = new BranchGraphStyle();
	}
	constructor(style = {}) {
		super(adj(style));
		this._branchColors = style.branchColors || DEFAULT_BRANCH_COLORS;
		this._margin = style.margin || 4;
		this._circleSize = style.circleSize || 16;
		this._branchLineWidth = style.branchLineWidth || 4;
		this._mergeStyle = style.mergeStyle === 'straight' ? 'straight' : 'bezier';
	}
	get branchColors() {
		return this._branchColors;
	}
	set branchColors(branchColors) {
		this._branchColors = branchColors;
		this.doChangeStyle();
	}
	get margin() {
		return this._margin;
	}
	set margin(margin) {
		this._margin = margin;
		this.doChangeStyle();
	}
	get circleSize() {
		return this._circleSize;
	}
	set circleSize(circleSize) {
		this._circleSize = circleSize;
		this.doChangeStyle();
	}
	get branchLineWidth() {
		return this._branchLineWidth;
	}
	set branchLineWidth(branchLineWidth) {
		this._branchLineWidth = branchLineWidth;
		this.doChangeStyle();
	}
	get mergeStyle() {
		return this._mergeStyle;
	}
	set mergeStyle(mergeStyle) {
		this._mergeStyle = mergeStyle;
		this.doChangeStyle();
	}
	clone() {
		return new BranchGraphStyle(this);
	}
}
module.exports = BranchGraphStyle;

/***/ }),

/***/ "./columns/style/ButtonStyle.js":
/*!**************************************!*\
  !*** ./columns/style/ButtonStyle.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const Style = __webpack_require__(/*! ./Style */ "./columns/style/Style.js");

	function adj(style) {
		const { textAlign = 'center' } = style;
		style.textAlign = textAlign;
		return style;
	}
	let defaultStyle;
	class ButtonStyle extends Style {
		static get DEFAULT() {
			return defaultStyle ? defaultStyle : defaultStyle = new ButtonStyle();
		}
		constructor(style = {}) {
			super(adj(style));
			const {
				buttonBgColor
			} = style;
			this._buttonBgColor = buttonBgColor;
		}
		get buttonBgColor() {
			return this._buttonBgColor;
		}
		set buttonBgColor(buttonBgColor) {
			this._buttonBgColor = buttonBgColor;
			this.doChangeStyle();
		}
		clone() {
			return new ButtonStyle(this);
		}
	}

	module.exports = ButtonStyle;
}

/***/ }),

/***/ "./columns/style/CheckStyle.js":
/*!*************************************!*\
  !*** ./columns/style/CheckStyle.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const StdBaseStyle = __webpack_require__(/*! ./StdBaseStyle */ "./columns/style/StdBaseStyle.js");

	function adj(style) {
		const { textAlign = 'center' } = style;
		style.textAlign = textAlign;
		return style;
	}
	let defaultStyle;
	class CheckStyle extends StdBaseStyle {
		static get DEFAULT() {
			return defaultStyle ? defaultStyle : defaultStyle = new CheckStyle();
		}
		constructor(style = {}) {
			super(adj(style));
			const {
				uncheckBgColor,
				checkBgColor,
				borderColor
			} = style;
			this._uncheckBgColor = uncheckBgColor;
			this._checkBgColor = checkBgColor;
			this._borderColor = borderColor;
		}
		get uncheckBgColor() {
			return this._uncheckBgColor;
		}
		set uncheckBgColor(uncheckBgColor) {
			this._uncheckBgColor = uncheckBgColor;
			this.doChangeStyle();
		}
		get checkBgColor() {
			return this._checkBgColor;
		}
		set checkBgColor(checkBgColor) {
			this._checkBgColor = checkBgColor;
			this.doChangeStyle();
		}
		get borderColor() {
			return this._borderColor;
		}
		set borderColor(borderColor) {
			this._borderColor = borderColor;
			this.doChangeStyle();
		}
		clone() {
			return new CheckStyle(this);
		}
	}

	module.exports = CheckStyle;
}

/***/ }),

/***/ "./columns/style/IconStyle.js":
/*!************************************!*\
  !*** ./columns/style/IconStyle.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const Style = __webpack_require__(/*! ./Style */ "./columns/style/Style.js");

	function adj(style) {
		const { textAlign = 'center' } = style;
		style.textAlign = textAlign;
		return style;
	}
	let defaultStyle;
	class IconStyle extends Style {
		static get DEFAULT() {
			return defaultStyle ? defaultStyle : defaultStyle = new IconStyle();
		}
		constructor(style = {}) {
			super(adj(style));
		}
		clone() {
			return new IconStyle(this);
		}
	}

	module.exports = IconStyle;
}

/***/ }),

/***/ "./columns/style/ImageStyle.js":
/*!*************************************!*\
  !*** ./columns/style/ImageStyle.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const StdBaseStyle = __webpack_require__(/*! ./StdBaseStyle */ "./columns/style/StdBaseStyle.js");
	let defaultStyle;
	function adj(style) {
		const { textAlign = 'center' } = style;
		style.textAlign = textAlign;
		return style;
	}
	class ImageStyle extends StdBaseStyle {
		static get DEFAULT() {
			return defaultStyle ? defaultStyle : defaultStyle = new ImageStyle();
		}
		constructor(style = {}) {
			super(adj(style));
			this._imageSizing = style.imageSizing;
			this._margin = style.margin || 4;
		}
		get imageSizing() {
			return this._imageSizing;
		}
		set imageSizing(imageSizing) {
			this._imageSizing = imageSizing;
			this.doChangeStyle();
		}
		get margin() {
			return this._margin;
		}
		set margin(margin) {
			this._margin = margin;
			this.doChangeStyle();
		}
		clone() {
			return new ImageStyle(this);
		}
	}
	module.exports = ImageStyle;
}

/***/ }),

/***/ "./columns/style/MultilineTextStyle.js":
/*!*********************************************!*\
  !*** ./columns/style/MultilineTextStyle.js ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const Style = __webpack_require__(/*! ./Style */ "./columns/style/Style.js");

	function adj(style) {
		const { textBaseline = 'top' } = style;
		style.textBaseline = textBaseline;
		return style;
	}
	let defaultStyle;
	class MultilineTextStyle extends Style {
		static get DEFAULT() {
			return defaultStyle ? defaultStyle : defaultStyle = new MultilineTextStyle();
		}
		constructor(style = {}) {
			super(adj(style));
			this._lineHeight = style.lineHeight || '1em';
		}
		clone() {
			return new MultilineTextStyle(this);
		}
		get lineHeight() {
			return this._lineHeight;
		}
		set lineHeight(lineHeight) {
			this._lineHeight = lineHeight;
			this.doChangeStyle();
		}
	}

	module.exports = MultilineTextStyle;
}

/***/ }),

/***/ "./columns/style/NumberStyle.js":
/*!**************************************!*\
  !*** ./columns/style/NumberStyle.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const Style = __webpack_require__(/*! ./Style */ "./columns/style/Style.js");

	function adj(style) {
		const { textAlign = 'right' } = style;
		style.textAlign = textAlign;
		return style;
	}
	let defaultStyle;
	class NumberStyle extends Style {
		static get DEFAULT() {
			return defaultStyle ? defaultStyle : defaultStyle = new NumberStyle();
		}
		constructor(style = {}) {
			super(adj(style));
		}
		clone() {
			return new NumberStyle(this);
		}
	}

	module.exports = NumberStyle;
}

/***/ }),

/***/ "./columns/style/PercentCompleteBarStyle.js":
/*!**************************************************!*\
  !*** ./columns/style/PercentCompleteBarStyle.js ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const Style = __webpack_require__(/*! ./Style */ "./columns/style/Style.js");
	let defaultStyle;
	const DEFAULT_BAR_COLOR = num => {
		if (num > 80) {
			return '#20a8d8';
		}
		if (num > 50) {
			return '#4dbd74';
		}
		if (num > 20) {
			return '#ffc107';
		}
		return '#f86c6b';
	};
	class PercentCompleteBarStyle extends Style {
		static get DEFAULT() {
			return defaultStyle ? defaultStyle : defaultStyle = new PercentCompleteBarStyle();
		}
		constructor(style = {}) {
			super(style);
			this._barColor = style.barColor || DEFAULT_BAR_COLOR;
			this._barBgColor = style.barBgColor || '#f0f3f5';
			this._barHeight = style.barHeight || 3;
		}
		get barColor() {
			return this._barColor;
		}
		set barColor(barColor) {
			this._barColor = barColor;
			this.doChangeStyle();
		}
		get barBgColor() {
			return this._barBgColor;
		}
		set barBgColor(barBgColor) {
			this._barBgColor = barBgColor;
			this.doChangeStyle();
		}
		get barHeight() {
			return this._barHeight;
		}
		set barHeight(barHeight) {
			this._barHeight = barHeight;
			this.doChangeStyle();
		}
		clone() {
			return new PercentCompleteBarStyle(this);
		}
	}
	module.exports = PercentCompleteBarStyle;
}

/***/ }),

/***/ "./columns/style/StdBaseStyle.js":
/*!***************************************!*\
  !*** ./columns/style/StdBaseStyle.js ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const BaseStyle = __webpack_require__(/*! ./BaseStyle */ "./columns/style/BaseStyle.js");

	let defaultStyle;
	class StdBaseStyle extends BaseStyle {
		static get DEFAULT() {
			return defaultStyle ? defaultStyle : defaultStyle = new StdBaseStyle();
		}
		constructor(style = {}) {
			super(style);
			this._textAlign = style.textAlign || 'left';
			this._textBaseline = style.textBaseline || 'middle';
		}
		get textAlign() {
			return this._textAlign;
		}
		set textAlign(textAlign) {
			this._textAlign = textAlign;
			this.doChangeStyle();
		}
		get textBaseline() {
			return this._textBaseline;
		}
		set textBaseline(textBaseline) {
			this._textBaseline = textBaseline;
			this.doChangeStyle();
		}
		clone() {
			return new StdBaseStyle(this);
		}
	}
	module.exports = StdBaseStyle;
}

/***/ }),

/***/ "./columns/style/Style.js":
/*!********************************!*\
  !*** ./columns/style/Style.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const StdBaseStyle = __webpack_require__(/*! ./StdBaseStyle */ "./columns/style/StdBaseStyle.js");
	let defaultStyle;
	class Style extends StdBaseStyle {
		static get DEFAULT() {
			return defaultStyle ? defaultStyle : defaultStyle = new Style();
		}
		constructor(style = {}) {
			super(style);
			this._color = style.color;
			this._font = style.font;
			this._padding = style.padding;
		}
		get color() {
			return this._color;
		}
		set color(color) {
			this._color = color;
			this.doChangeStyle();
		}
		get font() {
			return this._font;
		}
		set font(font) {
			this._font = font;
			this.doChangeStyle();
		}
		get padding() {
			return this._padding;
		}
		set padding(padding) {
			this._padding = padding;
			this.doChangeStyle();
		}
		clone() {
			return new Style(this);
		}
	}
	module.exports = Style;
}

/***/ }),

/***/ "./columns/type.js":
/*!*************************!*\
  !*** ./columns/type.js ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const Column = __webpack_require__(/*! ./type/Column */ "./columns/type/Column.js");
	const NumberColumn = __webpack_require__(/*! ./type/NumberColumn */ "./columns/type/NumberColumn.js");
	const CheckColumn = __webpack_require__(/*! ./type/CheckColumn */ "./columns/type/CheckColumn.js");
	const ButtonColumn = __webpack_require__(/*! ./type/ButtonColumn */ "./columns/type/ButtonColumn.js");
	const ImageColumn = __webpack_require__(/*! ./type/ImageColumn */ "./columns/type/ImageColumn.js");
	const PercentCompleteBarColumn = __webpack_require__(/*! ./type/PercentCompleteBarColumn */ "./columns/type/PercentCompleteBarColumn.js");
	const IconColumn = __webpack_require__(/*! ./type/IconColumn */ "./columns/type/IconColumn.js");
	const BranchGraphColumn = __webpack_require__(/*! ./type/BranchGraphColumn */ "./columns/type/BranchGraphColumn.js");
	const MenuColumn = __webpack_require__(/*! ./type/MenuColumn */ "./columns/type/MenuColumn.js");
	const MultilineTextColumn = __webpack_require__(/*! ./type/MultilineTextColumn */ "./columns/type/MultilineTextColumn.js");

	/**
  * column types
  * @type {Object}
  * @namespace cheetahGrid.columns.type
  * @memberof cheetahGrid.columns
  */
	const type = {
		TYPES: {
			DEFAULT: new Column(),
			NUMBER: new NumberColumn(),
			CHECK: new CheckColumn(),
			BUTTON: new ButtonColumn(),
			IMAGE: new ImageColumn(),
			MULTILINETEXT: new MultilineTextColumn()
		},
		get Column() {
			return Column;
		},
		get NumberColumn() {
			return NumberColumn;
		},
		get CheckColumn() {
			return CheckColumn;
		},
		get ButtonColumn() {
			return ButtonColumn;
		},
		get ImageColumn() {
			return ImageColumn;
		},
		get PercentCompleteBarColumn() {
			return PercentCompleteBarColumn;
		},
		get IconColumn() {
			return IconColumn;
		},
		get BranchGraphColumn() {
			return BranchGraphColumn;
		},
		get MenuColumn() {
			return MenuColumn;
		},
		get MultilineTextColumn() {
			return MultilineTextColumn;
		},
		of(columnType) {
			if (!columnType) {
				return type.TYPES.DEFAULT;
			} else if (typeof columnType === 'string') {
				return type.TYPES[columnType.toUpperCase()] || type.of(null);
			} else {
				return columnType;
			}
		}
	};
	module.exports = type;
}

/***/ }),

/***/ "./columns/type/BaseColumn.js":
/*!************************************!*\
  !*** ./columns/type/BaseColumn.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const styleContents = __webpack_require__(/*! ../style */ "./columns/style.js");
	const { isPromise, isDef, obj: { setReadonly } } = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");
	const animate = __webpack_require__(/*! ../../internal/animate */ "./internal/animate.js");
	const BaseStyle = __webpack_require__(/*! ../style/Style */ "./columns/style/Style.js");
	const { COLUMN_FADEIN_STATE_ID } = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

	function isFadeinWhenCallbackInPromise(column, grid) {
		if (isDef(column._fadeinWhenCallbackInPromise)) {
			return column._fadeinWhenCallbackInPromise;
		}
		return !!grid.configure('fadeinWhenCallbackInPromise');
	}

	function getFadinState(grid) {
		if (!grid[COLUMN_FADEIN_STATE_ID]) {
			setReadonly(grid, COLUMN_FADEIN_STATE_ID, {});
		}
		return grid[COLUMN_FADEIN_STATE_ID];
	}
	function _generateFadinPointAction(grid, col, row, context, drawInternal, drawCellBase) {
		return point => {
			const state = getFadinState(grid);
			const stateKey = col + ':' + row;
			if (point === 1) {
				delete state[stateKey];
			} else {
				state[stateKey] = {
					opacity: point
				};
			}
			drawCellBase();

			drawInternal();

			const cellState = state[stateKey];
			if (cellState) {
				//透過するため背景を透過で上書き
				const ctx = context.getContext();
				ctx.globalAlpha = 1 - cellState.opacity;
				try {
					drawCellBase();
				} finally {
					ctx.globalAlpha = 1;
				}
			}
		};
	}
	const fadinMgr = {
		animate(grid, col, row, context, drawInternal, drawCellBase) {
			// fadein animation
			const state = getFadinState(grid);

			const activeFadeins = [_generateFadinPointAction(grid, col, row, context, drawInternal, drawCellBase)];
			state.activeFadeins = activeFadeins;

			animate(500, point => {
				activeFadeins.forEach(f => f(point));
				if (point === 1) {
					delete state.activeFadeins;
				}
			});
		},
		margeAnimate(grid, col, row, context, drawInternal, drawCellBase) {
			const state = getFadinState(grid);
			if (state.activeFadeins) {
				state.activeFadeins.push(_generateFadinPointAction(grid, col, row, context, drawInternal, drawCellBase));
			} else {
				drawInternal();
			}
		}

	};

	class BaseColumn {
		constructor(option = {}) {
			this.onDrawCell = this.onDrawCell.bind(this); //スコープを固定させる

			//Promiseのcallbackでフェードイン表示する
			this._fadeinWhenCallbackInPromise = option.fadeinWhenCallbackInPromise;
		}
		get StyleClass() {
			return BaseStyle;
		}
		onDrawCell(cellValue, info, context, grid) {
			const { style, getRecord, drawCellBase } = info;
			delete info.getRecord;
			delete info.style;
			const helper = grid.getGridCanvasHelper();
			drawCellBase();

			//文字描画
			if (isPromise(cellValue)) {
				if (context.drawing) {
					return null;
				}
				const start = Date.now();
				return cellValue.then(val => {
					const currentContext = context.toCurrentContext();
					const drawRect = currentContext.getDrawRect();
					if (!drawRect) {
						return;
					}
					const time = Date.now() - start;

					const drawInternal = () => {
						const currentContext = context.toCurrentContext();
						const drawRect = currentContext.getDrawRect();
						if (!drawRect) {
							return;
						}
						const actStyle = styleContents.of(style, getRecord(), this.StyleClass);
						this.drawInternal(this.convertInternal(val), currentContext, actStyle, helper, grid, info);
						this.drawMessageInternal(info.getMessage(), context, actStyle, helper, grid, info);
					};

					if (!isFadeinWhenCallbackInPromise(this, grid)) {
						drawInternal(); //単純な描画
					} else {
						const { col, row } = context;
						if (time < 80) {
							//80ms以内のPromiseCallbackは前アニメーションに統合
							fadinMgr.margeAnimate(grid, col, row, context, drawInternal, drawCellBase);
						} else {
							//アニメーション
							fadinMgr.animate(grid, col, row, context, drawInternal, drawCellBase);
						}
					}
				});
			} else {
				const actStyle = styleContents.of(style, getRecord(), this.StyleClass);
				this.drawInternal(this.convertInternal(cellValue), context, actStyle, helper, grid, info);
				this.drawMessageInternal(info.getMessage(), context, actStyle, helper, grid, info);
				//フェードインの場合透過するため背景を透過で上書き
				const { col, row } = context;
				const stateKey = col + ':' + row;
				const cellState = grid[COLUMN_FADEIN_STATE_ID] && grid[COLUMN_FADEIN_STATE_ID][stateKey];
				if (cellState) {
					const ctx = context.getContext();
					ctx.globalAlpha = 1 - cellState.opacity;
					try {
						drawCellBase();
					} finally {
						ctx.globalAlpha = 1;
					}
				}
				return null;
			}
		}
		clone() {
			return new BaseColumn(this);
		}
		convertInternal(value) {
			return isDef(value) ? value : '';
		}
		drawInternal(value, context, style, helper, grid, info) {}
		drawMessageInternal(message, context, style, helper, grid, info) {
			info.messageHandler.drawCellMessage(message, context, style, helper, info);
		}
		bindGridEvent(grid, col, util) {
			return [];
		}
	}
	module.exports = BaseColumn;
}

/***/ }),

/***/ "./columns/type/BranchGraphColumn.js":
/*!*******************************************!*\
  !*** ./columns/type/BranchGraphColumn.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Array_dot_isArray) {

const { isDef, getOrApply, isPromise, obj: { isObject } } = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");
const BranchGraphStyle = __webpack_require__(/*! ../style/BranchGraphStyle */ "./columns/style/BranchGraphStyle.js");
const BaseColumn = __webpack_require__(/*! ./BaseColumn */ "./columns/type/BaseColumn.js");
const { BRANCH_GRAPH_COLUMN_STATE_ID: _ } = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

function getAllColumnData(grid, col, callback) {
	const dataSource = grid.dataSource;
	let field = grid.getField(col);
	if (isObject(field) && field.get && field.set) {
		field = field.get;
	}
	const allData = [];
	let promise;
	for (let index = 0; index < dataSource.length; index++) {
		const data = dataSource.getField(index, field);
		if (isPromise(data)) {
			const dataIndex = allData.length;
			allData.push(data);
			if (!promise) {
				promise = data.then(d => {
					allData[dataIndex] = d;
				});
			} else {
				promise = promise.then(() => data).then(d => {
					allData[dataIndex] = d;
				});
			}
		} else {
			allData.push(data);
		}
	}

	if (promise) {
		promise.then(() => callback(allData));
	} else {
		callback(allData);
	}
}

class BranchLine {
	constructor({ fromIndex, toIndex, colorIndex, point }) {
		this.fromIndex = fromIndex;
		this.toIndex = toIndex;
		this.colorIndex = colorIndex;
		this.point = point;
	}
}
class BranchPoint {
	constructor({ index, commit = false, lines = [], tag }) {
		this.index = index;
		this.commit = commit;
		this.lines = lines;
		this.tag = tag;
	}
	static mergeLines(lines) {
		const result = lines.filter(l => isDef(l.fromIndex) && isDef(l.toIndex));

		const froms = lines.filter(l => isDef(l.fromIndex) && !isDef(l.toIndex));
		const tos = lines.filter(l => !isDef(l.fromIndex) && isDef(l.toIndex));

		froms.forEach(f => {
			for (let i = 0; i < tos.length; i++) {
				const t = tos[i];
				if (t.point) {
					continue;
				}
				if (f.colorIndex === t.colorIndex) {
					f.toIndex = t.toIndex;
					tos.splice(i, 1);
					break;
				}
			}

			result.push(f);
		});

		return result.concat(tos);
	}
	static merge(a, b) {
		if (!a) {
			return b;
		}
		return new BranchPoint({
			index: a.index,
			commit: a.commit || b.commit,
			lines: BranchPoint.mergeLines(a.lines.concat(b.lines)),
			tag: a.tag || b.tag
		});
	}
}

function joinLine(timeline, branchIndex) {
	const reverse = [...timeline].reverse();
	for (let i = 0; i < reverse.length; i++) {
		const f = reverse[i][branchIndex];
		if (f) {
			f.lines = BranchPoint.mergeLines(f.lines.concat([new BranchLine({
				toIndex: branchIndex,
				colorIndex: branchIndex
			})]));

			for (let j = 0; j < i; j++) {
				const tl = reverse[j];
				tl[branchIndex] = new BranchPoint({
					index: branchIndex,
					lines: [new BranchLine({
						fromIndex: branchIndex,
						toIndex: branchIndex,
						colorIndex: branchIndex
					})]
				});
			}
			return true;
		}
	}
	return false;
}

function branch({ timeline, branches }, from, to) {
	const fromIndex = branches.indexOf(from);
	let toIndex = branches.indexOf(to);
	if (toIndex < 0) {
		toIndex = branches.length;
		branches.push(to);
	}

	function findBranchRootIndex() {
		for (let index = timeline.length - 1; index >= 0; index--) {
			const tl = timeline[index];
			const from = tl[fromIndex];
			if (from && from.commit) {
				return index;
			}
		}
		return -1;
	}

	if (fromIndex < 0) {
		return new BranchPoint({
			index: toIndex
		});
	} else {
		const fromTargetIndex = findBranchRootIndex();
		if (fromTargetIndex === -1) {
			return null;
		}
		const branchTargetFromIndex = fromTargetIndex + 1;
		const branchPoint = new BranchPoint({
			index: toIndex,
			lines: [new BranchLine({
				fromIndex,
				colorIndex: toIndex
			})]
		});
		let point;
		let result;
		if (branchTargetFromIndex < timeline.length) {
			const targetLine = timeline[branchTargetFromIndex];
			point = targetLine[toIndex] = BranchPoint.merge(targetLine[toIndex], branchPoint);
		} else {
			point = branchPoint;
			result = branchPoint;
		}
		const from = timeline[fromTargetIndex][fromIndex];
		from.lines = BranchPoint.mergeLines(from.lines.concat([new BranchLine({
			toIndex,
			colorIndex: toIndex,
			point
		})]));
		return result;
	}
}

function commit({ timeline, branches }, name) {
	const index = branches.indexOf(name);
	if (index < 0) {
		return null;
	}
	const result = new BranchPoint({
		index,
		commit: true
	});

	if (joinLine(timeline, index)) {
		result.lines = BranchPoint.mergeLines(result.lines.concat([new BranchLine({
			fromIndex: index,
			colorIndex: index
		})]));
	}
	return result;
}

function commitTag({ timeline, branches }, name, tag) {
	let index = branches.indexOf(name);
	if (index < 0) {
		index = branches.length;
		branches.push(name);
	}
	return new BranchPoint({
		index,
		tag
	});
}

function commitMerge({ timeline, branches }, from, to) {
	const fromIndex = branches.indexOf(from);
	const toIndex = branches.indexOf(to);
	if (toIndex < 0 || fromIndex < 0) {
		return new BranchPoint({
			index: toIndex,
			commit: true
		});
	}
	const result = new BranchPoint({
		index: toIndex,
		commit: true,
		lines: [new BranchLine({
			fromIndex,
			colorIndex: fromIndex
		}), new BranchLine({
			fromIndex: toIndex,
			colorIndex: toIndex
		})]
	});
	const froms = [...timeline];
	const fromTargetLine = froms.pop();
	if (fromTargetLine) {
		fromTargetLine[fromIndex] = BranchPoint.merge(fromTargetLine[fromIndex], new BranchPoint({
			index: toIndex,
			lines: [new BranchLine({
				toIndex,
				colorIndex: fromIndex
			})]
		}));
	}

	joinLine(froms, fromIndex);

	joinLine(timeline, toIndex);

	return result;
}

function calcCommand(info, command) {
	const { timeline } = info;
	const timelineData = [];
	// const last = timeline.length > 0 ? timeline[timeline.length - 1] : null;
	const commands = __webpack_provided_Array_dot_isArray(command) ? command : [command];
	commands.forEach(cmd => {
		if (!cmd) {
			return;
		}
		let point;
		if (cmd.command === 'branch') {
			const from = isObject(cmd.branch) ? cmd.branch.from : null;
			const to = isObject(cmd.branch) ? cmd.branch.to : cmd.branch;
			point = branch(info, from, to);
		} else if (cmd.command === 'commit') {
			const { branch } = cmd;
			point = commit(info, branch);
		} else if (cmd.command === 'merge') {
			const { from, to } = cmd.branch;
			point = commitMerge(info, from, to);
		} else if (cmd.command === 'tag') {
			const { branch, tag } = cmd;
			point = commitTag(info, branch, tag);
		}
		if (point && point.index > -1) {
			timelineData[point.index] = BranchPoint.merge(timelineData[point.index], point);
		}
	});
	timeline.push(timelineData);
}

function calcBranchesInfo(start, grid, col) {
	const result = {
		branches: [],
		timeline: []
	};
	getAllColumnData(grid, col, data => {
		if (start !== 'top') {
			data = [...data].reverse();
		}
		data.forEach(command => {
			calcCommand(result, command);
		});
	});
	return result;
}

function calcBranchXPoints(ctx, left, width, radius, branches, timeline) {
	let w = Math.max(width / branches.length + 1, 5);
	timeline.forEach(tl => {
		tl.forEach((p, index) => {
			if (index <= 0) {
				// 計算の意味が無い
				return;
			}
			if (p.tag) {
				const textWidth = ctx.measureText(p.tag).width;
				if (w * index + radius * 2 + 4 + textWidth > width) {
					w = Math.max((width - radius * 2 - 4 - textWidth) / index, 5);
				}
			}
		});
	});
	const result = [];
	let x = left;
	branches.forEach(() => {
		result.push(Math.ceil(x + radius));
		x += w;
	});
	return result;
}

function renderMerge(grid, ctx, x, y, upLineIndex, downLineIndex, colorIndex, {
	branchXPoints, margin, branchColors, branchLineWidth, mergeStyle
}, {
	width, col, row, branches
}) {
	if (isDef(upLineIndex) || isDef(downLineIndex)) {
		ctx.strokeStyle = getOrApply(branchColors, branches[colorIndex], colorIndex);
		ctx.lineWidth = branchLineWidth;
		ctx.lineCap = 'round';
		ctx.beginPath();

		if (isDef(upLineIndex)) {
			const upX = branchXPoints[upLineIndex];
			const upRect = grid.getCellRelativeRect(col, row - 1);
			const upY = upRect.top + upRect.height / 2;
			ctx.moveTo(upX, upY);
			if (mergeStyle === 'bezier') {
				ctx.bezierCurveTo(upX, (y + upY) / 2, x, (y + upY) / 2, x, y);
			} else {
				ctx.lineTo(x, y);
			}
		} else {
			ctx.moveTo(x, y);
		}

		if (isDef(downLineIndex)) {
			const downX = branchXPoints[downLineIndex];
			const downRect = grid.getCellRelativeRect(col, row + 1);
			const downY = downRect.top + downRect.height / 2;
			if (mergeStyle === 'bezier') {
				ctx.bezierCurveTo(x, (y + downY) / 2, downX, (y + downY) / 2, downX, downY);
			} else {
				ctx.lineTo(downX, downY);
			}
		}

		ctx.stroke();
	}
}

/**
 * BranchGraphColumn<br>
 * <br>
 * # Data command<br>
 * ## mastar branch or orphan branch<br>
 * <pre><code class="js">
 * {
 * 	command: 'branch',
 * 	branch: 'branch name A',
 * }
 * </code></pre>
 * ## commit<br>
 * <pre><code class="js">
 * {
 * 	command: 'commit',
 * 	branch: 'branch name A'
 * }
 * </code></pre>
 * ## branch<br>
 * <pre><code class="js">
 * {
 * 	command: 'branch',
 * 	branch: {
 * 		from: 'branch name A',
 * 		to: 'branch name B'
 * 	}
 * }
 * </code></pre>
 * ## merge<br>
 * <pre><code class="js">
 * {
 * 	command: 'merge',
 * 	branch: {
 * 		from: 'branch name B',
 * 		to: 'branch name A'
 * 	}
 * }
 * </code></pre>
 * ## tag<br>
 * <pre><code class="js">
 * {
 * 	command: 'tag',
 * 	branch: 'branch name A',
 * 	tag: 'tag name'
 * }
 * </code></pre>
 *
 *
 * @memberof cheetahGrid.columns.type
 */
class BranchGraphColumn extends BaseColumn {
	constructor(option = {}) {
		super(option);
		this._start = option.start || 'bottom';
		this._cache = isDef(option.cache) ? option.cache : false;
	}
	get StyleClass() {
		return BranchGraphStyle;
	}
	clearCache(grid) {
		delete grid[_];
	}
	onDrawCell(cellValue, info, context, grid) {
		if (this._cache) {
			const state = grid[_] || (grid[_] = {});
			const { col } = context;
			if (!state[col]) {
				state[col] = calcBranchesInfo(this._start, grid, col);
			}
		}
		return super.onDrawCell(cellValue, info, context, grid);
	}
	clone() {
		return new BranchGraphColumn(this);
	}
	drawInternal(value, context, style, helper, grid, { drawCellBase }) {
		const { col, row } = context;
		const { timeline, branches } = this._cache && grid[_] ? grid[_][col] : calcBranchesInfo(this._start, grid, col);

		const { upLineIndexKey, downLineIndexKey } = this._start !== 'top' ? { upLineIndexKey: 'toIndex', downLineIndexKey: 'fromIndex' } : { upLineIndexKey: 'fromIndex', downLineIndexKey: 'toIndex' };
		const data = this._start !== 'top' ? timeline[timeline.length - (row - grid.frozenRowCount) - 1] : timeline[row - grid.frozenRowCount];

		const {
			branchColors,
			branchLineWidth,
			circleSize,
			mergeStyle,
			margin,
			bgColor
		} = style;
		if (bgColor) {
			drawCellBase({
				bgColor
			});
		}

		const rect = context.getRect();
		const radius = circleSize / 2;
		const width = rect.width - margin * 2;

		helper.drawWithClip(context, ctx => {
			ctx.textAlign = 'left';
			ctx.textBaseline = 'middle';
			const branchXPoints = calcBranchXPoints(ctx, rect.left + margin, width, radius, branches, timeline);

			const y = rect.top + rect.height / 2;

			// draw join lines
			data.map((point, index) => point ? point.lines.map(line => ({
				colorIndex: line.colorIndex,
				upLineIndex: line[upLineIndexKey],
				downLineIndex: line[downLineIndexKey],
				pointIndex: index
			})) : []).reduce((p, c) => p.concat(c), []). // flatMap
			// order of overlap
			sort((a, b) => b.colorIndex - a.colorIndex).forEach(line => {
				const x = branchXPoints[line.pointIndex];
				renderMerge(grid, ctx, x, y, line.upLineIndex, line.downLineIndex, line.colorIndex, {
					margin,
					branchXPoints,
					branchLineWidth,
					branchColors,
					mergeStyle
				}, {
					width, col, row, branches
				});
			});
			// draw commit points
			data.forEach((p, index) => {
				if (p && p.commit) {
					const x = branchXPoints[index];
					ctx.fillStyle = getOrApply(branchColors, branches[index], index);
					ctx.beginPath();
					ctx.arc(x, y, radius, 0, Math.PI * 2, true);
					ctx.fill();
					ctx.closePath();
				}
			});
			// draw tags
			data.forEach((p, index) => {
				if (p && p.tag) {
					ctx.fillStyle = getOrApply(branchColors, branches[index], index);
					ctx.fillText(p.tag, branchXPoints[index] + radius + 4, y);
				}
			});
		});
	}
}
module.exports = BranchGraphColumn;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @/internal/com.js */ "./internal/com.js")["Array_isArray"]))

/***/ }),

/***/ "./columns/type/ButtonColumn.js":
/*!**************************************!*\
  !*** ./columns/type/ButtonColumn.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const Column = __webpack_require__(/*! ./Column */ "./columns/type/Column.js");
	const ButtonStyle = __webpack_require__(/*! ../style/ButtonStyle */ "./columns/style/ButtonStyle.js");
	const { BUTTON_COLUMN_STATE_ID } = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");
	const utils = __webpack_require__(/*! ./columnUtils */ "./columns/type/columnUtils.js");

	class ButtonColumn extends Column {
		constructor(option = {}) {
			super(option);
			this._caption = option.caption;
		}
		get StyleClass() {
			return ButtonStyle;
		}
		get caption() {
			return this._caption;
		}
		withCaption(caption) {
			const c = this.clone();
			c._caption = caption;
			return c;
		}
		clone() {
			return new ButtonColumn(this);
		}
		convertInternal(value) {
			return this._caption || value;
		}
		drawInternal(value, context, style, helper, grid, { drawCellBase, getIcon }) {
			const { textAlign, textBaseline, bgColor, color, buttonBgColor, font, padding } = style;
			if (bgColor) {
				drawCellBase({
					bgColor
				});
			}
			helper.testFontLoad(font, value, context);
			const { col, row } = context;
			let active = false;
			const state = grid[BUTTON_COLUMN_STATE_ID];
			if (state) {
				if (state.mouseActiveCell && state.mouseActiveCell.col === col && state.mouseActiveCell.row === row) {
					active = true;
				} else if (context.getSelectState().selected) {
					active = true;
				}
			}

			utils.loadIcons(getIcon(), context, helper, (icons, context) => {
				helper.button(value, context, {
					textAlign,
					textBaseline,
					bgColor: buttonBgColor,
					color,
					font,
					padding,
					shadow: active ? {
						color: 'rgba(0, 0, 0, 0.48)',
						blur: 6,
						offsetY: 3
					} : true,
					icons
				});
			});
		}
	}

	module.exports = ButtonColumn;
}

/***/ }),

/***/ "./columns/type/CheckColumn.js":
/*!*************************************!*\
  !*** ./columns/type/CheckColumn.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const BaseColumn = __webpack_require__(/*! ./BaseColumn */ "./columns/type/BaseColumn.js");
	const CheckStyle = __webpack_require__(/*! ../style/CheckStyle */ "./columns/style/CheckStyle.js");
	const { CHECK_COLUMN_STATE_ID } = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

	function toBoolean(val) {
		if (typeof val === 'string') {
			if (val === 'false') {
				return false;
			} else if (val === 'off') {
				return false;
			} else if (val.match(/^0+$/)) {
				return false;
			}
		}
		return val;
	}

	class CheckColumn extends BaseColumn {
		get StyleClass() {
			return CheckStyle;
		}
		clone() {
			return new CheckColumn(this);
		}
		convertInternal(value) {
			return toBoolean(value);
		}
		drawInternal(value, context, style, helper, grid, { drawCellBase }) {
			const {
				textAlign,
				textBaseline,
				borderColor,
				checkBgColor,
				uncheckBgColor,
				bgColor
			} = style;
			if (bgColor) {
				drawCellBase({
					bgColor
				});
			}

			const { col, row } = context;
			const key = col + ':' + row;
			const state = grid[CHECK_COLUMN_STATE_ID] && grid[CHECK_COLUMN_STATE_ID][key];

			const opt = {
				textAlign,
				textBaseline,
				borderColor,
				checkBgColor,
				uncheckBgColor
			};
			if (state) {
				opt.animElapsedTime = state.elapsed;
			}
			helper.checkbox(value, context, opt);
		}
		bindGridEvent(grid, col, util) {
			return [];
		}
	}

	module.exports = CheckColumn;
}

/***/ }),

/***/ "./columns/type/Column.js":
/*!********************************!*\
  !*** ./columns/type/Column.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const Style = __webpack_require__(/*! ../style/Style */ "./columns/style/Style.js");
	const BaseColumn = __webpack_require__(/*! ./BaseColumn */ "./columns/type/BaseColumn.js");
	const utils = __webpack_require__(/*! ./columnUtils */ "./columns/type/columnUtils.js");

	class Column extends BaseColumn {
		get StyleClass() {
			return Style;
		}
		clone() {
			return new Column(this);
		}
		drawInternal(value, context, style, helper, grid, { drawCellBase, getIcon }) {
			const {
				textAlign,
				textBaseline,
				color,
				font,
				bgColor,
				padding
			} = style;
			if (bgColor) {
				drawCellBase({
					bgColor
				});
			}
			helper.testFontLoad(font, value, context);
			utils.loadIcons(getIcon(), context, helper, (icons, context) => {
				helper.text(value, context, {
					textAlign,
					textBaseline,
					color,
					font,
					icons,
					padding
				});
			});
		}
	}
	module.exports = Column;
}

/***/ }),

/***/ "./columns/type/IconColumn.js":
/*!************************************!*\
  !*** ./columns/type/IconColumn.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const IconStyle = __webpack_require__(/*! ../style/IconStyle */ "./columns/style/IconStyle.js");
	const Column = __webpack_require__(/*! ./Column */ "./columns/type/Column.js");
	const icons = __webpack_require__(/*! ../../internal/icons */ "./internal/icons.js");

	function repeatArray(val, count) {
		if (count === Infinity) {
			count = 0;
		}
		const a = [];
		for (let i = 0; i < count; i++) {
			a.push(val);
		}
		return a;
	}

	class IconColumn extends Column {
		constructor(option = {}) {
			super(option);
			this._tagName = option.tagName || 'i';
			this._className = option.className;
			this._content = option.content;
			this._name = option.name;
			this._iconWidth = option.iconWidth;
		}
		get StyleClass() {
			return IconStyle;
		}
		clone() {
			return new IconColumn(this);
		}
		drawInternal(value, context, style, helper, grid, info) {
			const num = value - 0;
			if (!isNaN(num)) {
				const icon = {};
				icons.iconPropKeys.forEach(k => {
					icon[k] = style[k];
				});
				icon.className = this._className;
				icon.tagName = this._tagName;
				icon.content = this._content;
				icon.name = this._name;
				if (this._iconWidth) {
					icon.width = this._iconWidth;
				}

				info.getIcon = () => repeatArray(icon, num);
			} else {
				info.getIcon = () => null;
			}
			super.drawInternal('', context, style, helper, grid, info);
		}
	}
	module.exports = IconColumn;
}

/***/ }),

/***/ "./columns/type/ImageColumn.js":
/*!*************************************!*\
  !*** ./columns/type/ImageColumn.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const ImageStyle = __webpack_require__(/*! ../style/ImageStyle */ "./columns/style/ImageStyle.js");
	const { getCacheOrLoad } = __webpack_require__(/*! ../../internal/imgs */ "./internal/imgs.js");
	const { calcStartPosition } = __webpack_require__(/*! ../../internal/canvases */ "./internal/canvases.js");
	const BaseColumn = __webpack_require__(/*! ./BaseColumn */ "./columns/type/BaseColumn.js");

	const MAX_LRU_CACHE_SIZE = 50;
	function getImage(url) {
		return getCacheOrLoad('ImageColumn', MAX_LRU_CACHE_SIZE, url);
	}

	function calcKeepAspectRatioSize(width, height, maxWidth, maxHeight) {
		let newWidth = width;
		let newHeight = height;
		if (newWidth > maxWidth) {
			newWidth = maxWidth;
			newHeight = newWidth * height / width;
		}
		if (newHeight > maxHeight) {
			newHeight = maxHeight;
			newWidth = newHeight * width / height;
		}
		return {
			width: newWidth,
			height: newHeight
		};
	}

	class ImageColumn extends BaseColumn {
		get StyleClass() {
			return ImageStyle;
		}
		onDrawCell(cellValue, info, context, grid) {
			return super.onDrawCell(getImage(cellValue), info, context, grid);
		}
		clone() {
			return new ImageColumn(this);
		}
		drawInternal(value, context, style, helper, grid, { drawCellBase }) {
			if (value) {
				const {
					textAlign,
					textBaseline,
					margin,
					bgColor
				} = style;
				if (bgColor) {
					drawCellBase({
						bgColor
					});
				}
				helper.drawWithClip(context, ctx => {

					ctx.textAlign = textAlign;
					ctx.textBaseline = textBaseline;
					const rect = context.getRect();
					if (style.imageSizing === 'keep-aspect-ratio') {
						const { width, height } = calcKeepAspectRatioSize(value.width, value.height, rect.width - margin * 2, rect.height - margin * 2);
						const pos = calcStartPosition(ctx, rect, width, height, {
							offset: margin
						});
						ctx.drawImage(value, 0, 0, value.width, value.height, pos.x, pos.y, width, height);
					} else {
						ctx.drawImage(value, 0, 0, value.width, value.height, rect.left + margin, rect.top + margin, rect.width - margin * 2, rect.height - margin * 2);
					}
				});
			}
		}
	}
	module.exports = ImageColumn;
}

/***/ }),

/***/ "./columns/type/MenuColumn.js":
/*!************************************!*\
  !*** ./columns/type/MenuColumn.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const { normalize } = __webpack_require__(/*! ../../internal/menu-items */ "./internal/menu-items.js");
	const { isDef } = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");
	const BaseColumn = __webpack_require__(/*! ./BaseColumn */ "./columns/type/BaseColumn.js");
	const Style = __webpack_require__(/*! ../style/Style */ "./columns/style/Style.js");
	const utils = __webpack_require__(/*! ./columnUtils */ "./columns/type/columnUtils.js");

	class MenuColumn extends BaseColumn {
		constructor(option = {}) {
			super(option);
			this._options = normalize(option.options);
		}
		get StyleClass() {
			return Style;
		}
		clone() {
			return new MenuColumn(this);
		}
		get options() {
			return this._options;
		}
		withOptions(options) {
			const c = this.clone();
			c._options = normalize(options);
			return c;
		}
		drawInternal(value, context, style, helper, grid, { drawCellBase, getIcon }) {
			const {
				textAlign,
				textBaseline,
				font,
				bgColor,
				padding
			} = style;
			let {
				color
			} = style;
			if (bgColor) {
				drawCellBase({
					bgColor
				});
			}
			const text = this._convertInternal(value);
			helper.testFontLoad(font, text, context);
			utils.loadIcons(getIcon(), context, helper, (icons, context) => {
				const basePadding = helper.toBoxPixelArray(padding || 0, context);
				const textPadding = basePadding.slice(0);
				textPadding[1] += 26; // icon padding
				const iconPadding = basePadding.slice(0);
				iconPadding[1] += 8;
				if (!isDef(color) && (!isDef(value) || value === '')) {
					color = 'rgba(0, 0, 0, .38)';
				}
				helper.text(text, context, {
					textAlign,
					textBaseline,
					color,
					font,
					icons,
					padding: textPadding
				});
				// draw icon
				helper.text('', context, {
					textAlign: 'right',
					textBaseline,
					color,
					font,
					icons: [{
						path: 'M0 2 5 7 10 2z',
						width: 10,
						color: 'rgba(0, 0, 0, .54)'
					}],
					padding: iconPadding
				});
			});
		}
		convertInternal(value) {
			return value;
		}
		_convertInternal(value) {
			const options = this._options;
			for (let i = 0; i < options.length; i++) {
				const option = options[i];
				if (option.value === value) {
					value = option.caption;
					break;
				}
			}
			return super.convertInternal(value);
		}
	}

	module.exports = MenuColumn;
}

/***/ }),

/***/ "./columns/type/MultilineTextColumn.js":
/*!*********************************************!*\
  !*** ./columns/type/MultilineTextColumn.js ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const MultilineTextStyle = __webpack_require__(/*! ../style/MultilineTextStyle */ "./columns/style/MultilineTextStyle.js");
	const BaseColumn = __webpack_require__(/*! ./BaseColumn */ "./columns/type/BaseColumn.js");
	const utils = __webpack_require__(/*! ./columnUtils */ "./columns/type/columnUtils.js");
	class MultilineTextColumn extends BaseColumn {
		constructor(option = {}) {
			super(option);
		}
		get StyleClass() {
			return MultilineTextStyle;
		}
		clone() {
			return new MultilineTextColumn(this);
		}
		drawInternal(value, context, style, helper, grid, { drawCellBase, getIcon }) {
			const {
				textAlign,
				textBaseline,
				color,
				font,
				bgColor,
				padding,
				lineHeight
			} = style;
			if (bgColor) {
				drawCellBase({
					bgColor
				});
			}
			const multilines = value.replace(/\r?\n/g, '\n').replace(/\r/g, '\n').split('\n');
			helper.testFontLoad(font, value, context);
			utils.loadIcons(getIcon(), context, helper, (icons, context) => {
				helper.multilineText(multilines, context, {
					textAlign,
					textBaseline,
					color,
					font,
					icons,
					padding,
					lineHeight
				});
			});
		}
	}

	module.exports = MultilineTextColumn;
}

/***/ }),

/***/ "./columns/type/NumberColumn.js":
/*!**************************************!*\
  !*** ./columns/type/NumberColumn.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const Column = __webpack_require__(/*! ./Column */ "./columns/type/Column.js");
	const NumberStyle = __webpack_require__(/*! ../style/NumberStyle */ "./columns/style/NumberStyle.js");
	let defaultFotmat;
	class NumberColumn extends Column {
		static get defaultFotmat() {
			return defaultFotmat || (defaultFotmat = new Intl.NumberFormat());
		}
		static set defaultFotmat(fmt) {
			defaultFotmat = fmt;
		}
		constructor(option = {}) {
			super(option);
			this._format = option.format;
		}
		get StyleClass() {
			return NumberStyle;
		}
		clone() {
			return new NumberColumn(this);
		}
		get format() {
			return this._format;
		}
		withFormat(format) {
			const c = this.clone();
			c._format = format;
			return c;
		}
		convertInternal(value) {
			if (isNaN(value - 0)) {
				return value;
			}
			const format = this._format || NumberColumn.defaultFotmat;
			return format.format(value - 0);
		}
	}

	module.exports = NumberColumn;
}

/***/ }),

/***/ "./columns/type/PercentCompleteBarColumn.js":
/*!**************************************************!*\
  !*** ./columns/type/PercentCompleteBarColumn.js ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const PercentCompleteBarStyle = __webpack_require__(/*! ../style/PercentCompleteBarStyle */ "./columns/style/PercentCompleteBarStyle.js");
	const { getOrApply, str } = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");
	const Column = __webpack_require__(/*! ./Column */ "./columns/type/Column.js");

	const MARGIN = 2;

	class PercentCompleteBarColumn extends Column {
		constructor(option = {}) {
			super(option);
			this._min = option.min || 0;
			this._max = option.max || this._min + 100;
			this._formatter = option.formatter || (v => v);
		}
		get StyleClass() {
			return PercentCompleteBarStyle;
		}
		clone() {
			return new PercentCompleteBarColumn(this);
		}
		drawInternal(value, context, style, helper, grid, info) {
			super.drawInternal(this._formatter(value), context, style, helper, grid, info);
			const {
				barColor,
				barBgColor,
				barHeight
			} = style;

			let svalue = value + '';
			if (str.endsWith(svalue, '%')) {
				svalue = svalue.substr(0, svalue.length - 1);
			}
			const num = svalue - 0;
			const rate = num < this._min ? 0 : num > this._max ? 1 : (num - this._min) / (this._max - this._min);

			helper.drawWithClip(context, ctx => {
				const rect = context.getRect();

				const barMaxWidth = rect.width - MARGIN * 2 - 1 /*罫線*/;
				const barTop = rect.bottom - MARGIN - barHeight - 1 /*罫線*/;
				const barLeft = rect.left + MARGIN;
				ctx.fillStyle = getOrApply(barBgColor, rate * 100) || '#f0f3f5';
				ctx.beginPath();
				ctx.rect(barLeft, barTop, barMaxWidth, barHeight);
				ctx.fill();

				const barSize = Math.min(barMaxWidth * rate, barMaxWidth);
				ctx.fillStyle = getOrApply(barColor, rate * 100) || '#20a8d8';
				ctx.beginPath();
				ctx.rect(barLeft, barTop, barSize, barHeight);
				ctx.fill();
			});
		}
	}
	module.exports = PercentCompleteBarColumn;
}

/***/ }),

/***/ "./columns/type/columnUtils.js":
/*!*************************************!*\
  !*** ./columns/type/columnUtils.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const { isPromise } = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");
	const icons = __webpack_require__(/*! ../../internal/icons */ "./internal/icons.js");
	module.exports = {
		loadIcons(icon, context, helper, callback) {
			if (icon) {
				if (isPromise(icon)) {
					icon.then(i => {
						this.loadIcon(i, context.toCurrentContext(), callback);
					});
					icon = null;
				} else {
					const iconList = icons.toNormarizeArray(icon);
					iconList.forEach(i => {
						helper.testFontLoad(i.font, i.content, context);
					});
					icon = iconList;
				}
			}
			callback(icon, context);
		}
	};
}

/***/ }),

/***/ "./core.js":
/*!*****************!*\
  !*** ./core.js ***!
  \*****************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const DrawGrid = __webpack_require__(/*! ./core/DrawGrid */ "./core/DrawGrid.js");

	/**
  * core modules
  * @type {Object}
  * @namespace cheetahGrid.core
  * @memberof cheetahGrid
  */
	module.exports = {
		DrawGrid
	};
}

/***/ }),

/***/ "./core/DrawGrid.js":
/*!**************************!*\
  !*** ./core/DrawGrid.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const {
		isDef,
		browser,
		isDescendantElement,
		array,
		isPromise,
		event: {
			isTouchEvent,
			getMouseButtons,
			getKeyCode,
			cancel: cancelEvent
		}
	} = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");

	const EventTarget = __webpack_require__(/*! ./EventTarget */ "./core/EventTarget.js");
	const Rect = __webpack_require__(/*! ../internal/Rect */ "./internal/Rect.js");
	const Scrollable = __webpack_require__(/*! ../internal/Scrollable */ "./internal/Scrollable.js");
	const EventHandler = __webpack_require__(/*! ../internal/EventHandler */ "./internal/EventHandler.js");
	const NumberMap = __webpack_require__(/*! ../internal/NumberMap */ "./internal/NumberMap.js");
	const style = __webpack_require__(/*! ../internal/style */ "./internal/style.js");
	const calc = __webpack_require__(/*! ../internal/calc */ "./internal/calc.js");
	const hiDPI = __webpack_require__(/*! ../internal/hiDPI */ "./internal/hiDPI.js");
	//protected symbol
	const { PROTECTED_SYMBOL: _ } = __webpack_require__(/*! ../internal/symbolManager */ "./internal/symbolManager.js");

	function createRootElement() {
		const element = document.createElement('div');
		element.classList.add('cheetah-grid');
		return element;
	}

	const KEY_END = 35;
	const KEY_HOME = 36;
	const KEY_LEFT = 37;
	const KEY_UP = 38;
	const KEY_RIGHT = 39;
	const KEY_DOWN = 40;
	const KEY_ALPHA_C = 67;

	const EVENT_TYPE = {
		CLICK_CELL: 'click_cell',
		DBLCLICK_CELL: 'dblclick_cell',
		DBLTAP_CELL: 'dbltap_cell',
		MOUSEDOWN_CELL: 'mousedown_cell',
		MOUSEUP_CELL: 'mouseup_cell',
		SELECTED_CELL: 'selected_cell',
		KEYDOWN: 'keydown',
		MOUSEMOVE_CELL: 'mousemove_cell',
		MOUSEENTER_CELL: 'mouseenter_cell',
		MOUSELEAVE_CELL: 'mouseleave_cell',
		MOUSEOVER_CELL: 'mouseover_cell',
		MOUSEOUT_CELL: 'mouseout_cell',
		INPUT_CELL: 'input_cell',
		EDITABLEINPUT_CELL: 'editableinput_cell',
		MODIFY_STATUS_EDITABLEINPUT_CELL: 'modify_status_editableinput_cell',
		RESIZE_COLUMN: 'resize_column',
		SCROLL: 'scroll'
	};

	//private methods
	function _vibrate(e) {
		if (navigator.vibrate && isTouchEvent(e)) {
			navigator.vibrate(50);
		}
	}
	function _getTargetRowAt(grid, absoluteY) {
		const internal = grid.getTargetRowAtInternal(absoluteY);
		if (isDef(internal)) {
			return internal;
		}
		const findBefore = (startRow, startBottom) => {
			let bottom = startBottom;
			for (let row = startRow; row >= 0; row--) {
				const height = _getRowHeight(grid, row);
				const top = bottom - height;
				if (top <= absoluteY && absoluteY < bottom) {
					return {
						top,
						row
					};
				}
				bottom = top;
			}
			return null;
		};
		const findAfter = (startRow, startBottom) => {
			let top = startBottom - _getRowHeight(grid, startRow);
			const { rowCount } = grid[_];
			for (let row = startRow; row < rowCount; row++) {
				const height = _getRowHeight(grid, row);
				const bottom = top + height;
				if (top <= absoluteY && absoluteY < bottom) {
					return {
						top,
						row
					};
				}
				top = bottom;
			}
			return null;
		};
		const candRow = Math.min(Math.ceil(absoluteY / grid[_].defaultRowHeight), grid.rowCount - 1);
		const bottom = _getRowsHeight(grid, 0, candRow);
		if (absoluteY >= bottom) {
			return findAfter(candRow, bottom);
		} else {
			return findBefore(candRow, bottom);
		}
	}
	function _getTargetColAt(grid, absoluteX) {
		let left = 0;
		const { colCount } = grid[_];
		for (let col = 0; col < colCount; col++) {
			const width = _getColWidth(grid, col);
			const right = left + width;
			if (right > absoluteX) {
				return {
					left,
					col
				};
			}
			left = right;
		}
		return null;
	}
	function _getTargetFrozenRowAt(grid, absoluteY) {
		if (!grid[_].frozenRowCount) {
			return null;
		}
		let { top } = grid[_].scroll;
		const rowCount = grid[_].frozenRowCount;
		for (let row = 0; row < rowCount; row++) {
			const height = _getRowHeight(grid, row);
			const bottom = top + height;
			if (bottom > absoluteY) {
				return {
					top,
					row
				};
			}
			top = bottom;
		}
		return null;
	}
	function _getTargetFrozenColAt(grid, absoluteX) {
		if (!grid[_].frozenColCount) {
			return null;
		}
		let { left } = grid[_].scroll;
		const colCount = grid[_].frozenColCount;
		for (let col = 0; col < colCount; col++) {
			const width = _getColWidth(grid, col);
			const right = left + width;
			if (right > absoluteX) {
				return {
					left,
					col
				};
			}
			left = right;
		}
		return null;
	}
	function _getFrozenRowsRect(grid) {
		if (!grid[_].frozenRowCount) {
			return null;
		}
		const { top } = grid[_].scroll;
		let height = 0;
		const rowCount = grid[_].frozenRowCount;
		for (let row = 0; row < rowCount; row++) {
			height += _getRowHeight(grid, row);
		}
		return new Rect(grid[_].scroll.left, top, grid[_].canvas.width, height);
	}
	function _getFrozenColsRect(grid) {
		if (!grid[_].frozenColCount) {
			return null;
		}
		const { left } = grid[_].scroll;
		let width = 0;
		const colCount = grid[_].frozenColCount;
		for (let col = 0; col < colCount; col++) {
			width += _getColWidth(grid, col);
		}
		return new Rect(left, grid[_].scroll.top, width, grid[_].canvas.height);
	}
	function _isCellDrawing(grid, col, row) {
		if (!grid[_].drawCells[row]) {
			return false;
		}
		return !!grid[_].drawCells[row][col];
	}
	function _putCellDrawing(grid, col, row, context) {
		if (!grid[_].drawCells[row]) {
			grid[_].drawCells[row] = {};
		}
		grid[_].drawCells[row][col] = context;
	}
	function _removeCellDrawing(grid, col, row) {
		if (!grid[_].drawCells[row]) {
			return;
		}
		delete grid[_].drawCells[row][col];
		if (Object.keys(grid[_].drawCells[row]).length === 0) {
			delete grid[_].drawCells[row];
		}
	}
	function _drawCell(grid, ctx, col, absoluteLeft, width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, skipAbsoluteLeft, drawLayers) {
		const rect = new Rect(absoluteLeft - visibleRect.left, absoluteTop - visibleRect.top, width, height);

		const drawRect = Rect.bounds(Math.max(absoluteLeft, skipAbsoluteLeft) - visibleRect.left, Math.max(absoluteTop, skipAbsoluteTop) - visibleRect.top, rect.right, rect.bottom);

		if (drawRect.height > 0 && drawRect.width > 0) {
			ctx.save();
			try {
				const dcContext = new DrawCellContext(col, row, ctx, rect, drawRect, _isCellDrawing(grid, col, row), grid[_].selection, drawLayers);
				const p = grid.onDrawCell(col, row, dcContext);
				if (isPromise(p)) {
					//遅延描画
					_putCellDrawing(grid, col, row, dcContext);

					const pCol = col;
					dcContext._delayMode(grid, () => {
						_removeCellDrawing(grid, pCol, row);
					});
					p.then(() => {
						dcContext.terminate();
					});
				}
			} finally {
				ctx.restore();
			}
		}
	}

	function _drawRow(grid, ctx, initFrozenCol, initCol, drawRight, row, absoluteTop, height, visibleRect, skipAbsoluteTop, drawLayers) {
		const { colCount } = grid[_];
		const drawOuter = (col, absoluteLeft) => {
			//データ範囲外の描画
			if (col >= colCount - 1 && grid[_].canvas.width > absoluteLeft - visibleRect.left) {
				const outerLeft = absoluteLeft - visibleRect.left;
				ctx.save();
				ctx.beginPath();
				ctx.fillStyle = grid.underlayBackgroundColor || '#F6F6F6';
				ctx.rect(outerLeft, absoluteTop - visibleRect.top, grid[_].canvas.width - outerLeft, height);
				ctx.fill();
				ctx.restore();
			}
		};

		let skipAbsoluteLeft = 0;
		if (initFrozenCol) {
			let absoluteLeft = initFrozenCol.left;
			const count = grid[_].frozenColCount;
			for (let { col } = initFrozenCol; col < count; col++) {
				const width = _getColWidth(grid, col);

				_drawCell(grid, ctx, col, absoluteLeft, width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, 0, drawLayers);

				absoluteLeft += width;
				if (drawRight <= absoluteLeft) {
					//描画範囲外（終了）
					drawOuter(col, absoluteLeft);
					return;
				}
			}
			skipAbsoluteLeft = absoluteLeft;
		}

		let absoluteLeft = initCol.left;
		for (let { col } = initCol; col < colCount; col++) {
			const width = _getColWidth(grid, col);
			_drawCell(grid, ctx, col, absoluteLeft, width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, skipAbsoluteLeft, drawLayers);

			absoluteLeft += width;
			if (drawRight <= absoluteLeft) {
				//描画範囲外（終了）
				drawOuter(col, absoluteLeft);
				return;
			}
		}
		drawOuter(colCount - 1, absoluteLeft);
	}
	function _invalidateRect(grid, drawRect) {
		const visibleRect = _getVisibleRect(grid);
		const { rowCount } = grid[_];
		const ctx = grid._getInitContext();

		const initRow = _getTargetRowAt(grid, Math.max(visibleRect.top, drawRect.top)) || {
			top: _getRowsHeight(grid, 0, rowCount - 1),
			row: rowCount
		};
		const initCol = _getTargetColAt(grid, Math.max(visibleRect.left, drawRect.left)) || {
			left: _getColsWidth(grid, 0, grid[_].colCount - 1),
			col: grid[_].colCount
		};
		const drawBottom = Math.min(visibleRect.bottom, drawRect.bottom);
		const drawRight = Math.min(visibleRect.right, drawRect.right);

		const initFrozenRow = _getTargetFrozenRowAt(grid, Math.max(visibleRect.top, drawRect.top));
		const initFrozenCol = _getTargetFrozenColAt(grid, Math.max(visibleRect.left, drawRect.left));

		const drawLayers = new DrawLayers();

		const drawOuter = (row, absoluteTop) => {
			//データ範囲外の描画
			if (row >= rowCount - 1 && grid[_].canvas.height > absoluteTop - visibleRect.top) {
				const outerTop = absoluteTop - visibleRect.top;
				ctx.save();
				ctx.beginPath();
				ctx.fillStyle = grid.underlayBackgroundColor || '#F6F6F6';
				ctx.rect(0, outerTop, grid[_].canvas.width, grid[_].canvas.height - outerTop);
				ctx.fill();
				ctx.restore();
			}
		};

		let skipAbsoluteTop = 0;
		if (initFrozenRow) {
			let absoluteTop = initFrozenRow.top;
			const count = grid[_].frozenRowCount;
			for (let { row } = initFrozenRow; row < count; row++) {
				const height = _getRowHeight(grid, row);
				_drawRow(grid, ctx, initFrozenCol, initCol, drawRight, row, absoluteTop, height, visibleRect, 0, drawLayers);
				absoluteTop += height;
				if (drawBottom <= absoluteTop) {
					//描画範囲外（終了）
					drawOuter(row, absoluteTop);
					drawLayers.draw(ctx);
					return;
				}
			}
			skipAbsoluteTop = absoluteTop;
		}

		let absoluteTop = initRow.top;
		for (let { row } = initRow; row < rowCount; row++) {
			const height = _getRowHeight(grid, row);

			//行の描画
			_drawRow(grid, ctx, initFrozenCol, initCol, drawRight, row, absoluteTop, height, visibleRect, skipAbsoluteTop, drawLayers);

			absoluteTop += height;
			if (drawBottom <= absoluteTop) {
				//描画範囲外（終了）
				drawOuter(row, absoluteTop);
				drawLayers.draw(ctx);
				return;
			}
		}
		drawOuter(rowCount - 1, absoluteTop);

		drawLayers.draw(ctx);
	}

	function _toPxWidth(grid, width) {
		return Math.round(calc.toPx(width, grid[_].calcWidthContext));
	}

	function _getDefaultColPxWidth(grid) {
		return _toPxWidth(grid, grid.defaultColWidth);
	}

	function _adjustColWidth(grid, col, orgWidth) {
		const limit = grid[_].colWidthsLimit[col];
		if (!limit) {
			return orgWidth;
		}

		if (limit.min) {
			const min = _toPxWidth(grid, limit.min);
			if (min > orgWidth) {
				return min;
			}
		}
		if (limit.max) {
			const max = _toPxWidth(grid, limit.max);
			if (max < orgWidth) {
				return max;
			}
		}
		return orgWidth;
	}

	function _getColWidth(grid, col) {
		const width = grid[_].colWidthsMap.get(col);
		if (width) {
			return _adjustColWidth(grid, col, _toPxWidth(grid, width));
		}
		return _getDefaultColPxWidth(grid);
	}
	function _setColWidth(grid, col, width) {
		grid[_].colWidthsMap.put(col, width);
	}
	function _getColsWidth(grid, startCol, endCol) {
		const colCount = endCol - startCol + 1;
		let w = _getDefaultColPxWidth(grid) * colCount;
		grid[_].colWidthsMap.each(startCol, endCol, (width, col) => {
			w += _adjustColWidth(grid, col, _toPxWidth(grid, width)) - _getDefaultColPxWidth(grid);
		});
		return w;
	}

	function _getRowHeight(grid, row) {
		const internal = grid.getRowHeightInternal(row);
		if (isDef(internal)) {
			return internal;
		}
		const height = grid[_].rowHeightsMap.get(row);
		if (height) {
			return height;
		}
		return grid[_].defaultRowHeight;
	}
	function _setRowHeight(grid, row, height) {
		grid[_].rowHeightsMap.put(row, height);
	}
	function _getRowsHeight(grid, startRow, endRow) {
		const internal = grid.getRowsHeightInternal(startRow, endRow);
		if (isDef(internal)) {
			return internal;
		}
		const rowCount = endRow - startRow + 1;
		let h = grid[_].defaultRowHeight * rowCount;
		grid[_].rowHeightsMap.each(startRow, endRow, height => {
			h += height - grid[_].defaultRowHeight;
		});
		return h;
	}

	function _getScrollWidth(grid) {
		let w = _getDefaultColPxWidth(grid) * grid[_].colCount;
		grid[_].colWidthsMap.eachAll((width, col) => {
			w += _adjustColWidth(grid, col, _toPxWidth(grid, width)) - _getDefaultColPxWidth(grid);
		});
		return w;
	}
	function _getScrollHeight(grid, row) {
		const internal = grid.getScrollHeightInternal(row);
		if (isDef(internal)) {
			return internal;
		}
		let h = grid[_].defaultRowHeight * grid[_].rowCount;
		grid[_].rowHeightsMap.eachAll(height => {
			h += height - grid[_].defaultRowHeight;
		});
		return h;
	}
	function _onScroll(grid, e) {
		const lastLeft = grid[_].scroll.left;
		const lastTop = grid[_].scroll.top;
		const moveX = grid[_].scrollable.scrollLeft - lastLeft;
		const moveY = grid[_].scrollable.scrollTop - lastTop;

		//次回計算用情報を保持
		grid[_].scroll = {
			left: grid[_].scrollable.scrollLeft,
			top: grid[_].scrollable.scrollTop
		};
		const visibleRect = _getVisibleRect(grid);
		if (Math.abs(moveX) >= visibleRect.width || Math.abs(moveY) >= visibleRect.height) {
			//全再描画
			_invalidateRect(grid, visibleRect);
		} else {
			//差分再描画
			grid[_].context.drawImage(grid[_].canvas, -moveX, -moveY);

			if (moveX !== 0) {
				//横移動の再描画範囲を計算
				const redrawRect = visibleRect.copy();
				if (moveX < 0) {
					redrawRect.width = -moveX;
					if (grid[_].frozenColCount > 0) {
						//固定列がある場合固定列分描画
						const frozenRect = _getFrozenColsRect(grid);
						redrawRect.width += frozenRect.width;
					}
				} else if (moveX > 0) {
					redrawRect.left = redrawRect.right - moveX;
				}

				//再描画
				_invalidateRect(grid, redrawRect);

				if (moveX > 0) {
					if (grid[_].frozenColCount > 0) {
						//固定列がある場合固定列描画
						_invalidateRect(grid, _getFrozenColsRect(grid));
					}
				}
			}
			if (moveY !== 0) {
				//縦移動の再描画範囲を計算
				const redrawRect = visibleRect.copy();
				if (moveY < 0) {
					redrawRect.height = -moveY;
					if (grid[_].frozenRowCount > 0) {
						//固定行がある場合固定行分描画
						const frozenRect = _getFrozenRowsRect(grid);
						redrawRect.height += frozenRect.height;
					}
				} else if (moveY > 0) {
					redrawRect.top = redrawRect.bottom - moveY;
				}

				//再描画
				_invalidateRect(grid, redrawRect);

				if (moveY > 0) {
					if (grid[_].frozenRowCount > 0) {
						//固定行がある場合固定行描画
						_invalidateRect(grid, _getFrozenRowsRect(grid));
					}
				}
			}
		}
	}

	function _onKeyDownMove(grid, e) {
		const { shiftKey } = e;
		const keyCode = getKeyCode(e);
		const focusCell = shiftKey ? grid.selection._focus : grid.selection._sel;
		if (keyCode === KEY_LEFT) {
			const col = grid.getMoveLeftColByKeyDownInternal(focusCell);
			if (col < 0) {
				return;
			}
			_moveFocusCell(grid, col, focusCell.row, shiftKey);
			cancelEvent(e);
		} else if (keyCode === KEY_UP) {
			const row = grid.getMoveUpRowByKeyDownInternal(focusCell);
			if (row < 0) {
				return;
			}
			_moveFocusCell(grid, focusCell.col, row, shiftKey);
			cancelEvent(e);
		} else if (keyCode === KEY_RIGHT) {
			const col = grid.getMoveRightColByKeyDownInternal(focusCell);
			if (grid.colCount <= col) {
				return;
			}
			_moveFocusCell(grid, col, focusCell.row, shiftKey);
			cancelEvent(e);
		} else if (keyCode === KEY_DOWN) {
			const row = grid.getMoveDownRowByKeyDownInternal(focusCell);
			if (grid.rowCount <= row) {
				return;
			}
			_moveFocusCell(grid, focusCell.col, row, shiftKey);
			cancelEvent(e);
		} else if (keyCode === KEY_HOME) {
			const row = e.ctrlKey ? 0 : focusCell.row;
			_moveFocusCell(grid, 0, row, e.shiftKey);
			cancelEvent(e);
		} else if (keyCode === KEY_END) {
			const row = e.ctrlKey ? grid.rowCount - 1 : focusCell.row;
			_moveFocusCell(grid, grid.colCount - 1, row, shiftKey);
			cancelEvent(e);
		}
	}
	function _moveFocusCell(grid, col, row, shiftKey) {
		const offset = grid.getOffsetInvalidateCells();

		function extendRange(range) {
			if (offset > 0) {
				range.start.col -= offset;
				range.start.row -= offset;
				range.end.col += offset;
				range.end.row += offset;
			}
			return range;
		}

		const beforeRange = extendRange(grid.selection.range);
		const beforeRect = grid.getCellsRect(beforeRange.start.col, beforeRange.start.row, beforeRange.end.col, beforeRange.end.row);

		grid.selection._setFocusCell(col, row, shiftKey);
		grid.makeVisibleCell(col, row);
		grid.focusCell(col, row);

		const afterRange = extendRange(grid.selection.range);
		const afterRect = grid.getCellsRect(afterRange.start.col, afterRange.start.row, afterRange.end.col, afterRange.end.row);

		if (afterRect.intersection(beforeRect)) {
			const invalidateRect = Rect.max(afterRect, beforeRect);
			_invalidateRect(grid, invalidateRect);
		} else {
			_invalidateRect(grid, beforeRect);
			_invalidateRect(grid, afterRect);
		}
	}
	function _getMouseAbstractPoint(grid, e) {
		if (isTouchEvent(e)) {
			e = e.changedTouches[0];
		}
		const clientX = e.clientX || e.pageX + window.scrollX;
		const clientY = e.clientY || e.pageY + window.scrollY;
		const rect = grid[_].canvas.getBoundingClientRect();
		if (rect.right <= clientX) {
			return null;
		}
		if (rect.bottom <= clientY) {
			return null;
		}
		const x = clientX - rect.left + grid[_].scroll.left;
		const y = clientY - rect.top + grid[_].scroll.top;
		return { x, y };
	}

	function _bindEvents(grid) {
		const getCellEventArgsSet = e => {
			const abstractPos = _getMouseAbstractPoint(grid, e);
			if (!abstractPos) {
				return {};
			}
			const cell = grid.getCellAt(abstractPos.x, abstractPos.y);
			if (cell.col < 0 || cell.row < 0) {
				return {
					abstractPos,
					cell
				};
			}
			const eventArgs = {
				col: cell.col,
				row: cell.row,
				event: e
			};
			return {
				abstractPos,
				cell,
				eventArgs
			};
		};
		const canResizeColumn = col => {
			const limit = grid[_].colWidthsLimit[col];
			if (!limit || !limit.min || !limit.max) {
				return true;
			}
			return limit.max !== limit.min;
		};
		grid[_].handler.on(grid[_].element, 'mousedown', e => {
			const eventArgsSet = getCellEventArgsSet(e);
			const { abstractPos, eventArgs } = eventArgsSet;
			if (!abstractPos) {
				return;
			}
			if (eventArgs) {
				const results = grid.fireListeners(EVENT_TYPE.MOUSEDOWN_CELL, eventArgs);
				if (array.findIndex(results, v => !v) >= 0) {
					return;
				}
			}
			if (getMouseButtons(e) !== 1) {
				return;
			}
			const resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y);
			if (resizeCol >= 0 && canResizeColumn(resizeCol)) {
				//幅変更
				grid[_].columnResizer.start(resizeCol, e);
			} else {
				//選択
				grid[_].cellSelector.start(e);
			}
		});
		let doubleTapBefore = null;
		let longTouchId = null;
		grid[_].handler.on(grid[_].element, 'touchstart', e => {

			if (!doubleTapBefore) {
				doubleTapBefore = getCellEventArgsSet(e).eventArgs;
				setTimeout(() => {
					doubleTapBefore = null;
				}, 350);
			} else {
				const { eventArgs } = getCellEventArgsSet(e);
				if (eventArgs && eventArgs.col === doubleTapBefore.col && eventArgs.row === doubleTapBefore.row) {
					grid.fireListeners(EVENT_TYPE.DBLTAP_CELL, eventArgs);
				}

				doubleTapBefore = null;

				if (e.defaultPrevented) {
					return;
				}
			}

			longTouchId = setTimeout(() => {
				//長押しした場合選択モード
				longTouchId = null;
				const abstractPos = _getMouseAbstractPoint(grid, e);
				if (!abstractPos) {
					return;
				}

				const resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y, 15);
				if (resizeCol >= 0 && canResizeColumn(resizeCol)) {
					//幅変更
					grid[_].columnResizer.start(resizeCol, e);
				} else {
					//選択
					grid[_].cellSelector.start(e);
				}
			}, 500);
		});

		function cancel(e) {
			if (longTouchId) {
				clearTimeout(longTouchId);
				longTouchId = null;
			}
		}
		grid[_].handler.on(grid[_].element, 'touchcancel', cancel);
		grid[_].handler.on(grid[_].element, 'touchmove', cancel);
		grid[_].handler.on(grid[_].element, 'touchend', e => {
			if (longTouchId) {
				clearTimeout(longTouchId);
				grid[_].cellSelector.select(e);
				longTouchId = null;
			}
		});

		let isMouseover = false;
		let mouseEnterCell = null;
		let mouseOverCell = null;
		function onMouseenterCell(cell) {
			grid.fireListeners(EVENT_TYPE.MOUSEENTER_CELL, cell);
			mouseEnterCell = cell;
		}
		function onMouseleaveCell() {
			const beforeMouseCell = mouseEnterCell;
			mouseEnterCell = null;
			if (beforeMouseCell) {
				grid.fireListeners(EVENT_TYPE.MOUSELEAVE_CELL, {
					col: beforeMouseCell.col,
					row: beforeMouseCell.row
				});
			}
		}
		function onMouseoverCell(cell) {
			grid.fireListeners(EVENT_TYPE.MOUSEOVER_CELL, cell);
			mouseOverCell = cell;
		}
		function onMouseoutCell() {
			const beforeMouseCell = mouseOverCell;
			mouseOverCell = null;
			if (beforeMouseCell) {
				grid.fireListeners(EVENT_TYPE.MOUSEOUT_CELL, {
					col: beforeMouseCell.col,
					row: beforeMouseCell.row
				});
			}
		}
		const scrollElement = grid[_].scrollable.getElement();
		grid[_].handler.on(scrollElement, 'mouseover', e => {
			isMouseover = true;
		});
		grid[_].handler.on(scrollElement, 'mouseout', e => {
			isMouseover = false;
			onMouseoutCell();
		});

		grid[_].handler.on(grid[_].element, 'mouseleave', e => {
			onMouseleaveCell();
		});

		grid[_].handler.on(grid[_].element, 'mousemove', e => {
			const eventArgsSet = getCellEventArgsSet(e);
			const { abstractPos, eventArgs } = eventArgsSet;
			if (eventArgs) {
				const beforeMouseCell = mouseEnterCell;
				if (beforeMouseCell) {
					grid.fireListeners(EVENT_TYPE.MOUSEMOVE_CELL, eventArgs);
					if (beforeMouseCell.col !== eventArgs.col || beforeMouseCell.row !== eventArgs.row) {
						onMouseoutCell();
						onMouseleaveCell();
						const cell = {
							col: eventArgs.col,
							row: eventArgs.row
						};
						onMouseenterCell(cell);
						if (isMouseover) {
							onMouseoverCell(cell);
						}
					} else if (isMouseover && !mouseOverCell) {
						onMouseoverCell({
							col: eventArgs.col,
							row: eventArgs.row
						});
					}
				} else {
					const cell = {
						col: eventArgs.col,
						row: eventArgs.row
					};
					onMouseenterCell(cell);
					if (isMouseover) {
						onMouseoverCell(cell);
					}
					grid.fireListeners(EVENT_TYPE.MOUSEMOVE_CELL, eventArgs);
				}
			} else {
				onMouseoutCell();
				onMouseleaveCell();
			}
			if (grid[_].columnResizer.moving(e) || grid[_].cellSelector.moving(e)) {
				return;
			}
			const { style } = grid[_].element;
			if (!abstractPos) {
				if (style.cursor === 'col-resize') {
					style.cursor = '';
				}
				return;
			}
			const resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y);
			if (resizeCol >= 0 && canResizeColumn(resizeCol)) {
				style.cursor = 'col-resize';
			} else {
				if (style.cursor === 'col-resize') {
					style.cursor = '';
				}
			}
		});
		grid[_].handler.on(grid[_].element, 'click', e => {
			if (grid[_].columnResizer.lastMoving(e) || grid[_].cellSelector.lastMoving(e)) {
				return;
			}
			if (!grid.hasListeners(EVENT_TYPE.CLICK_CELL)) {
				return;
			}
			const { eventArgs } = getCellEventArgsSet(e);
			if (!eventArgs) {
				return;
			}
			grid.fireListeners(EVENT_TYPE.CLICK_CELL, eventArgs);
		});
		grid[_].handler.on(grid[_].element, 'dblclick', e => {
			if (!grid.hasListeners(EVENT_TYPE.DBLCLICK_CELL)) {
				return;
			}
			const { eventArgs } = getCellEventArgsSet(e);
			if (!eventArgs) {
				return;
			}
			grid.fireListeners(EVENT_TYPE.DBLCLICK_CELL, eventArgs);
		});
		grid[_].focusControl.listen('keydown', (keyCode, e) => {
			grid.fireListeners(EVENT_TYPE.KEYDOWN, keyCode, e);
		});
		grid[_].selection.listen(EVENT_TYPE.SELECTED_CELL, data => {
			grid.fireListeners(EVENT_TYPE.SELECTED_CELL, data, data.selected);
		});

		grid[_].scrollable.onScroll(e => {
			_onScroll(grid, e);
			grid.fireListeners(EVENT_TYPE.SCROLL, { event: e });
		});
		grid[_].focusControl.onKeyDownMove(e => {
			_onKeyDownMove(grid, e);
		});
		grid.listen('copydata', range => {
			let copyValue = '';
			for (let { row } = range.start; row <= range.end.row; row++) {
				for (let { col } = range.start; col <= range.end.col; col++) {
					const copyCellValue = grid.getCopyCellValue(col, row);
					if (window.Promise && copyCellValue instanceof window.Promise) {
						//非同期データは取得できない
					} else {
						const strCellValue = '' + copyCellValue;
						if (strCellValue.match(/^\[object .*\]$/)) {
							//object は無視
						} else {
							copyValue += strCellValue;
						}
					}

					if (col < range.end.col) {
						copyValue += '\t';
					}
				}
				copyValue += '\n';
			}
			return copyValue;
		});
		grid[_].focusControl.onCopy(e => array.find(grid.fireListeners('copydata', grid[_].selection.range), isDef));
		grid[_].focusControl.onInput(value => {
			const { col, row } = grid[_].selection.select;
			grid.fireListeners(EVENT_TYPE.INPUT_CELL, { col, row, value });
		});
		grid.bindEventsInternal();
	}

	function _getResizeColAt(grid, abstractX, abstractY, offset = 5) {
		if (grid[_].frozenRowCount <= 0) {
			return -1;
		}
		const frozenRect = _getFrozenRowsRect(grid);
		if (!frozenRect.inPoint(abstractX, abstractY)) {
			return -1;
		}
		const cell = grid.getCellAt(abstractX, abstractY);
		const cellRect = grid.getCellRect(cell.col, cell.row);
		if (abstractX < cellRect.left + offset) {
			return cell.col - 1;
		}
		if (cellRect.right - offset < abstractX) {
			return cell.col;
		}
		return -1;
	}
	function _getVisibleRect(grid) {
		return new Rect(grid[_].scroll.left, grid[_].scroll.top, grid[_].canvas.width, grid[_].canvas.height);
	}
	function _getScrollableVisibleRect(grid) {
		let frozenColsWidth = 0;
		if (grid[_].frozenColCount > 0) {
			//固定列がある場合固定列分描画
			const frozenRect = _getFrozenColsRect(grid);
			frozenColsWidth = frozenRect.width;
		}
		let frozenRowsHeight = 0;
		if (grid[_].frozenRowCount > 0) {
			//固定列がある場合固定列分描画
			const frozenRect = _getFrozenRowsRect(grid);
			frozenRowsHeight = frozenRect.height;
		}
		return new Rect(grid[_].scroll.left + frozenColsWidth, grid[_].scroll.top + frozenRowsHeight, grid[_].canvas.width - frozenColsWidth, grid[_].canvas.height - frozenRowsHeight);
	}

	function _toRelativeRect(grid, absoluteRect) {
		const rect = absoluteRect.copy();
		const visibleRect = _getVisibleRect(grid);
		rect.offsetLeft(-visibleRect.left);
		rect.offsetTop(-visibleRect.top);

		return rect;
	}
	//end private methods
	//
	//
	//
	//

	/**
  * managing mouse down moving
  * @private
  */
	class BaseMouseDownMover {
		constructor(grid) {
			this._grid = grid;
			this._handler = new EventHandler();
			this._events = {};
			this._started = false;
			this._moved = false;
		}
		moving(e) {
			return !!this._started;
		}
		lastMoving(e) {
			// mouseup後すぐに、clickイベントを反応しないようにする制御要
			if (this.moving(e)) {
				return true;
			}
			const last = this._mouseEndPoint;
			if (!last) {
				return false;
			}
			const pt = _getMouseAbstractPoint(this._grid, e);
			return pt.x === last.x && pt.y === last.y;
		}
		_bindMoveAndUp(e) {
			if (!isTouchEvent(e)) {
				this._events.mousemove = this._handler.on(document.body, 'mousemove', e => this._mouseMove(e));
				this._events.mouseup = this._handler.on(document.body, 'mouseup', e => this._mouseUp(e));
			} else {
				this._events.touchmove = this._handler.on(document.body, 'touchmove', e => this._mouseMove(e), { passive: false });
				this._events.touchend = this._handler.on(document.body, 'touchend', e => this._mouseUp(e));
				this._events.touchcancel = this._handler.on(document.body, 'touchcancel', e => this._mouseUp(e));
			}
			this._started = true;
			this._moved = false;
		}
		_mouseMove(e) {
			if (!isTouchEvent(e)) {
				if (getMouseButtons(e) !== 1) {
					this._mouseUp(e);
					return;
				}
			}
			this._moved = this._moveInternal(e) || this._moved /*calculation on after*/;

			cancelEvent(e);
		}
		_moveInternal(e) {
			//protected
		}
		_mouseUp(e) {
			this._handler.off(this._events.mousemove);
			this._handler.off(this._events.touchmove);
			this._handler.off(this._events.mouseup);
			this._handler.off(this._events.touchend);
			// this._handler.off(this._events.mouseleave);
			this._handler.off(this._events.touchcancel);

			this._started = false;

			this._upInternal(e);

			// mouseup後すぐに、clickイベントを反応しないようにする制御要
			if (this._moved) {
				//移動が発生していたら
				this._mouseEndPoint = _getMouseAbstractPoint(this._grid, e);
				setTimeout(() => {
					this._mouseEndPoint = null;
				}, 10);
			}
		}
		_upInternal(e) {
			//protected
		}
		dispose() {
			this._handler.dispose();
		}
	}

	/**
  * managing cell selection operation with mouse
  * @private
  */
	class CellSelector extends BaseMouseDownMover {
		start(e) {
			const cell = this._getTargetCell(e);
			if (!cell) {
				return;
			}
			_moveFocusCell(this._grid, cell.col, cell.row, e.shiftKey);

			this._bindMoveAndUp(e);

			this._cell = cell;

			cancelEvent(e);
			_vibrate(e);
		}
		select(e) {
			const cell = this._getTargetCell(e);
			if (!cell) {
				return;
			}
			_moveFocusCell(this._grid, cell.col, cell.row, e.shiftKey);
			this._cell = cell;
		}
		_moveInternal(e) {
			const cell = this._getTargetCell(e);
			if (!cell || this._cell.col === cell.col && this._cell.row === cell.row) {
				return false;
			}
			_moveFocusCell(this._grid, cell.col, cell.row, true);

			//make visible
			const makeVisibleCol = (() => {
				if (cell.col < this._cell.col && 0 < cell.col) {
					// move left
					return cell.col - 1;
				} else if (this._cell.col < cell.col && cell.col + 1 < this._grid.colCount) {
					// move right
					return cell.col + 1;
				}
				return cell.col;
			})();
			const makeVisibleRow = (() => {
				if (cell.row < this._cell.row && 0 < cell.row) {
					// move up
					return cell.row - 1;
				} else if (this._cell.row < cell.row && cell.row + 1 < this._grid.rowCount) {
					// move down
					return cell.row + 1;
				}
				return cell.row;
			})();
			if (makeVisibleCol !== cell.col || makeVisibleRow !== cell.row) {
				this._grid.makeVisibleCell(makeVisibleCol, makeVisibleRow);
			}
			this._cell = cell;
			return true;
		}
		_getTargetCell(e) {
			const abstractPos = _getMouseAbstractPoint(this._grid, e);
			if (!abstractPos) {
				return null;
			}
			const cell = this._grid.getCellAt(abstractPos.x, abstractPos.y);
			if (cell.col < 0 || cell.row < 0) {
				return null;
			}
			return cell;
		}
	}
	/**
  * managing row width changing operation with mouse
  * @private
  */
	class ColumnResizer extends BaseMouseDownMover {
		constructor(grid) {
			super(grid);
			this._targetCol = -1;
		}
		start(col, e) {
			let pageX;
			if (!isTouchEvent(e)) {
				({ pageX } = e);
			} else {
				({ pageX } = e.changedTouches[0]);
			}

			this._x = pageX;
			this._preX = 0;

			this._bindMoveAndUp(e);

			this._targetCol = col;
			this._invalidateAbsoluteLeft = _getColsWidth(this._grid, 0, col - 1);

			cancelEvent(e);
			_vibrate(e);
		}
		_moveInternal(e) {
			const pageX = isTouchEvent(e) ? e.changedTouches[0].pageX : e.pageX;

			const x = pageX - this._x;
			const moveX = x - this._preX;
			this._preX = x;
			const pre = this._grid.getColWidth(this._targetCol);
			let afterSize = _adjustColWidth(this._grid, this._targetCol, pre + moveX);
			if (afterSize < 10 && moveX < 0) {
				afterSize = 10;
			}
			_setColWidth(this._grid, this._targetCol, afterSize);

			const rect = _getVisibleRect(this._grid);
			rect.left = this._invalidateAbsoluteLeft;
			_invalidateRect(this._grid, rect);

			this._grid.fireListeners(EVENT_TYPE.RESIZE_COLUMN, { col: this._targetCol });

			return true;
		}
		_upInternal(e) {
			this._grid.updateScroll();
		}
	}

	function setSafeInputValue(input, value) {
		const { type } = input;
		input.type = '';
		input.value = value;
		if (type) {
			input.type = type;
		}
	}

	/**
  * Manage focus
  * @private
  */
	class FocusControl extends EventTarget {
		constructor(grid, parentElement, scrollable) {
			super();
			this._grid = grid;
			this._scrollable = scrollable;
			this._handler = new EventHandler();
			this._input = document.createElement('input');
			this._input.classList.add('grid-focus-control');
			this._input.readOnly = true;
			parentElement.appendChild(this._input);

			this._handler.on(this._input, 'compositionstart', e => {
				this._input.classList.add('composition');
				this._input.style.font = this._grid.font || '16px sans-serif';
				this._isComposition = true;
				grid.focus();
			});
			this._handler.on(this._input, 'compositionend', e => {
				this._isComposition = false;
				this._input.classList.remove('composition');
				this._input.style.font = '';
				if (!this._input.readOnly) {
					this.fireListeners('input', this._input.value);
				}
				setSafeInputValue(this._input, '');
			});
			this._handler.on(this._input, 'keypress', e => {
				if (this._isComposition) {
					return;
				}
				if (!this._input.readOnly && e.key && e.key.length === 1) {
					if (e.key === 'c' && (e.ctrlKey || e.metaKey)) {
						//copy! for Firefox
					} else {
						this.fireListeners('input', e.key);
						cancelEvent(e);
					}
				}
				setSafeInputValue(this._input, '');
			});
			this._handler.on(this._input, 'keydown', e => {
				if (this._isComposition) {
					return;
				}
				const keyCode = getKeyCode(e);
				this.fireListeners('keydown', keyCode, e);

				if (!this._input.readOnly && this._input.value) {
					// for Safari
					this.fireListeners('input', this._input.value);
				}

				setSafeInputValue(this._input, '');
			});
			const inputClear = e => {
				if (this._isComposition) {
					return;
				}
				setSafeInputValue(this._input, '');
			};

			this._handler.on(this._input, 'input', inputClear);
			this._handler.on(this._input, 'keyup', inputClear);
			this._handler.on(document, 'keydown', e => {
				if (!browser.IE) {
					return;
				}
				if (e.target !== this._input) {
					return;
				}
				const keyCode = getKeyCode(e);
				if (keyCode === KEY_ALPHA_C && e.ctrlKey) {
					setSafeInputValue(this._input, 'dummy');
					this._input.select();
					setTimeout(() => {
						setSafeInputValue(this._input, '');
					}, 100);
				}
			});
			this._handler.on(document, 'copy', e => {
				if (this._isComposition) {
					return;
				}
				if (!isDescendantElement(parentElement, e.target)) {
					return;
				}
				setSafeInputValue(this._input, '');
				const data = array.find(this.fireListeners('copy'), isDef);
				if (isDef(data)) {
					cancelEvent(e);
					if (browser.IE) {
						window.clipboardData.setData('Text', data); // IE
					} else {
						e.clipboardData.setData('text/plain', data); // Chrome, Firefox
					}
				}
			});
		}
		onKeyDownMove(fn) {
			this._handler.on(this._input, 'keydown', e => {
				if (this._isComposition) {
					return;
				}
				const keyCode = getKeyCode(e);
				if (keyCode === KEY_LEFT || keyCode === KEY_UP || keyCode === KEY_RIGHT || keyCode === KEY_DOWN || keyCode === KEY_HOME || keyCode === KEY_END) {
					fn(e);
				}
			});
		}
		onInput(fn) {
			return this.listen('input', fn);
		}
		onCopy(fn) {
			return this.listen('copy', fn);
		}
		focus() {
			// this._input.value = '';
			this._input.focus();
		}
		setFocusRect(rect) {
			const top = this._scrollable.calcTop(rect.top);
			this._input.style.top = (top - style.getScrollBarSize()).toFixed() + 'px'; //position:relative だとずれるが、IEは position:relativeじゃないと最大値まで利用できない
			this._input.style.left = rect.left.toFixed() + 'px';
			this._input.style.width = rect.width.toFixed() + 'px';
			this._input.style.height = rect.height.toFixed() + 'px';
		}
		set editMode(editMode) {
			this._input.readOnly = !editMode;
		}
		resetInputStatus() {
			const el = this._input;
			const composition = el.classList.contains('composition');

			const atts = el.attributes;
			const removeNames = [];
			for (let i = 0, n = atts.length; i < n; i++) {
				const att = atts[i];
				if (!this._inputStatus.hasOwnProperty(att.nodeName)) {
					removeNames.push(att.name);
				}
			}
			removeNames.forEach(removeName => {
				el.removeAttribute(removeName);
			});
			for (const name in this._inputStatus) {
				el.setAttribute(name, this._inputStatus[name]);
			}
			if (composition) {
				el.classList.add('composition');
				el.style.font = this._grid.font || '16px sans-serif';
			} else {
				el.classList.remove('composition');
			}
		}
		storeInputStatus() {
			const el = this._input;
			this._inputStatus = {};
			const atts = el.attributes;
			for (let i = 0, n = atts.length; i < n; i++) {
				const att = atts[i];
				this._inputStatus[att.name] = att.value;
			}
		}
		setDefaultInputStatus() {
			// なぜかスクロールが少しずつずれていくことがあるのでここではセットしない。
			// this._input.style.font = this._grid.font || '16px sans-serif';
		}
		get editMode() {
			return !this._input.readOnly;
		}
		get input() {
			return this._input;
		}
		dispose() {
			super.dispose();
			this._handler.dispose();
		}
	}

	/**
  * Selected area management
  */
	class Selection extends EventTarget {
		constructor(grid) {
			super();
			this._grid = grid;

			this._sel = { col: 0, row: 0 };
			this._focus = { col: 0, row: 0 };

			this._start = { col: 0, row: 0 };
			this._end = { col: 0, row: 0 };
		}
		get range() {
			const startCol = Math.min(this._start.col, this._end.col);
			const startRow = Math.min(this._start.row, this._end.row);
			const endCol = Math.max(this._start.col, this._end.col);
			const endRow = Math.max(this._start.row, this._end.row);
			return {
				start: {
					col: startCol,
					row: startRow
				},
				end: {
					col: endCol,
					row: endRow
				},
				inCell(col, row) {
					return startCol <= col && col <= endCol && startRow <= row && row <= endRow;
				}
			};
		}
		get select() {
			return {
				col: this._sel.col,
				row: this._sel.row
			};
		}
		set select(cell = {}) {
			this._wrapFireSelectedEvent(() => {
				const {
					col = 0,
					row = 0
				} = cell;
				this._setSelectCell(col, row);
				this._setFocusCell(col, row, true);
			});
		}
		_setSelectCell(col, row) {
			this._wrapFireSelectedEvent(() => {
				this._sel = { col, row };
				this._start = { col, row };
			});
		}
		_setFocusCell(col, row, keepSelect) {
			this._wrapFireSelectedEvent(() => {
				if (!keepSelect) {
					this._setSelectCell(col, row);
				}
				this._focus = { col, row };
				this._end = { col, row };
			});
		}
		_wrapFireSelectedEvent(callback) {
			if (this._isWraped) {
				callback();
			} else {
				this._isWraped = true;
				try {
					const before = {
						col: this._sel.col,
						row: this._sel.row,
						selected: false
					};
					callback();
					const after = {
						col: this._sel.col,
						row: this._sel.row,
						selected: true,
						before: {
							col: before.col,
							row: before.row
						}
					};
					before.after = {
						col: after.col,
						row: after.row
					};
					this.fireListeners(EVENT_TYPE.SELECTED_CELL, before);
					this.fireListeners(EVENT_TYPE.SELECTED_CELL, after);
				} finally {
					this._isWraped = false;
				}
			}
		}
	}

	/**
  * This class manages the drawing process for each layer
  */
	class DrawLayers {
		constructor() {
			this._layers = {};
		}
		addDraw(level, fn) {
			const l = this._layers[level] || (this._layers[level] = new DrawLayer(level));
			l.addDraw(fn);
		}
		draw(ctx) {
			const list = [];
			for (const k in this._layers) {
				list.push(this._layers[k]);
			}
			list.sort((a, b) => a.level - b.level);
			list.forEach(l => l.draw(ctx));
		}
	}
	class DrawLayer {
		constructor(level) {
			this._level = level;
			this._list = [];
		}
		get level() {
			return this._level;
		}
		addDraw(fn) {
			this._list.push(fn);
		}
		draw(ctx) {
			this._list.forEach(fn => {
				ctx.save();
				try {
					fn(ctx);
				} finally {
					ctx.restore();
				}
			});
		}
	}
	/**
  * Context of cell drawing
  */
	class DrawCellContext {
		/**
   * @private
   */
		constructor(col, row, ctx, rect, drawRect, drawing, selection, drawLayers) {
			this._col = col;
			this._row = row;
			this._mode = 0;
			this._ctx = ctx;
			this._rect = rect;
			this._drawRect = drawRect;
			this._drawing = drawing;
			this._selection = selection;
			this._drawLayers = drawLayers;
		}
		get drawing() {
			if (this._mode === 0) {
				return this._drawing;
			} else {
				return true;
			}
		}
		get row() {
			return this._row;
		}
		get col() {
			return this._col;
		}
		/**
   * select status.
   * @return {object} select status
   */
		getSelectState() {
			const sel = this._selection.select;
			return {
				selected: sel.col === this._col && sel.row === this._row,
				selection: this._selection.range.inCell(this._col, this._row)
			};
		}
		/**
   * Canvas context.
   * @return {CanvasRenderingContext2D} Canvas context.
   */
		getContext() {
			if (this._mode === 0) {
				return this._ctx;
			} else {
				return this._grid._getInitContext();
			}
		}
		/**
   * Rectangle of cell.
   * @return {Rect} rect Rectangle of cell.
   */
		getRect() {
			if (this._mode === 0) {
				return this._rect;
			} else {
				if (this._rect) {
					return this._rect;
				}
				return this._grid.getCellRelativeRect(this._col, this._row);
			}
		}
		setRect(rect) {
			this._rect = rect;
		}
		/**
   * Rectangle of Drawing range.
   * @return {Rect} Rectangle of Drawing range.
   */
		getDrawRect() {
			if (this._mode === 0) {
				return this._drawRect;
			} else {
				const absoluteRect = this._grid.getCellRect(this._col, this._row);
				return this._toRelativeDrawRect(absoluteRect);
			}
		}
		/**
   * get Context of current state
   * @return {DrawCellContext} current DrawCellContext.
   */
		toCurrentContext() {
			if (this._mode === 0) {
				return this;
			} else {
				const absoluteRect = this._grid.getCellRect(this._col, this._row);
				const rect = _toRelativeRect(this._grid, absoluteRect);
				const drawRect = this._toRelativeDrawRect(absoluteRect);
				const context = new DrawCellContext(this._col, this._row, this.getContext(), rect, drawRect, this.drawing, this._selection, this._drawLayers);
				// toCurrentContext は自分の toCurrentContextを呼ばせる
				context.toCurrentContext = this.toCurrentContext.bind(this);
				return context;
			}
		}
		addLayerDraw(level, fn) {
			this._drawLayers.addDraw(level, fn);
		}
		_toRelativeDrawRect(absoluteRect) {
			const visibleRect = _getVisibleRect(this._grid);
			let rect = absoluteRect.copy();
			if (!rect.intersection(visibleRect)) {
				return null;
			}

			const isFrozenCell = this._grid.isFrozenCell(this._col, this._row);
			if (this._grid.frozenColCount >= 0 && (!isFrozenCell || !isFrozenCell.col)) {
				const fRect = this._grid.getCellRect(this._grid.frozenColCount - 1, this._row);
				rect = Rect.bounds(Math.max(rect.left, fRect.right), rect.top, rect.right, rect.bottom);
			}
			if (this._grid.frozenRowCount >= 0 && (!isFrozenCell || !isFrozenCell.row)) {
				const fRect = this._grid.getCellRect(this._col, this._grid.frozenRowCount - 1);
				rect = Rect.bounds(rect.left, Math.max(rect.top, fRect.bottom), rect.right, rect.bottom);
			}

			if (!rect.intersection(visibleRect)) {
				return null;
			}
			rect.offsetLeft(-visibleRect.left);
			rect.offsetTop(-visibleRect.top);

			return rect;
		}
		_delayMode(grid, onTerminate) {
			this._mode = 1;
			this._ctx = null;
			this._rect = null;
			this._drawRect = null;
			this._grid = grid;
			this._onTerminate = onTerminate;
		}
		/**
   * terminate
   * @return {void}
   */
		terminate() {
			if (this._mode !== 0) {
				this._onTerminate();
			}
		}
	}
	/**
  * DrawGrid
  * @classdesc cheetahGrid.core.DrawGrid
  * @extends EventTarget
  * @memberof cheetahGrid.core
  */
	class DrawGrid extends EventTarget {
		static get EVENT_TYPE() {
			return EVENT_TYPE;
		}
		/**
   * constructor
   *
   * <pre>
   * Constructor options
   * -----
   * rowCount: grid row count.default 10
   * colCount: grid col count.default 10
   * frozenColCount: default 0
   * frozenRowCount: default 0
   * defaultRowHeight: default grid row height. default 40
   * defaultColWidth: default grid col width. default 80
   * parentElement: canvas parentElement
   * font: default font
   * underlayBackgroundColor: underlay background color
   * -----
   * </pre>
   *
   * @constructor
   * @param  {Object} options Constructor options
   */
		constructor({
			rowCount = 10,
			colCount = 10,
			frozenColCount = 0,
			frozenRowCount = 0,
			defaultRowHeight = 40,
			defaultColWidth = 80,
			font,
			underlayBackgroundColor,
			parentElement
		} = {}) {
			super();
			this[_] = {};
			style.initDocument();
			this[_].element = createRootElement();
			this[_].scrollable = new Scrollable();
			this[_].handler = new EventHandler();
			this[_].selection = new Selection(this);
			this[_].focusControl = new FocusControl(this, this[_].scrollable.getElement(), this[_].scrollable);

			this[_].canvas = hiDPI.transform(document.createElement('canvas'));
			this[_].context = this[_].canvas.getContext('2d', { alpha: false });

			this[_].rowCount = rowCount;
			this[_].colCount = colCount;
			this[_].frozenColCount = frozenColCount;
			this[_].frozenRowCount = frozenRowCount;

			this[_].defaultRowHeight = defaultRowHeight;
			this[_].defaultColWidth = defaultColWidth;

			this[_].font = font;
			this[_].underlayBackgroundColor = underlayBackgroundColor;

			/////
			this[_].rowHeightsMap = new NumberMap();
			this[_].colWidthsMap = new NumberMap();
			this[_].colWidthsLimit = {};
			this[_].calcWidthContext = {
				_: this[_],
				get full() {
					return this._.canvas.width;
				},
				get em() {
					return this._.context.measureText('あ').width;
				}
			};

			this[_].columnResizer = new ColumnResizer(this);
			this[_].cellSelector = new CellSelector(this);

			this[_].drawCells = {};

			this[_].element.appendChild(this[_].canvas);
			this[_].element.appendChild(this[_].scrollable.getElement());
			this.updateScroll();
			if (parentElement) {
				parentElement.appendChild(this[_].element);
				this.updateSize();
			} else {
				this.updateSize();
			}
			_bindEvents(this);
		}
		getElement() {
			return this[_].element;
		}
		get canvas() {
			return this[_].canvas;
		}
		focus() {
			const { col, row } = this[_].selection.select;
			this.focusCell(col, row);
		}
		get selection() {
			return this[_].selection;
		}
		get rowCount() {
			return this[_].rowCount;
		}
		set rowCount(rowCount) {
			this[_].rowCount = rowCount;
			this.updateScroll();
		}
		get colCount() {
			return this[_].colCount;
		}
		set colCount(colCount) {
			this[_].colCount = colCount;
			this.updateScroll();
		}
		get frozenColCount() {
			return this[_].frozenColCount;
		}
		set frozenColCount(frozenColCount) {
			this[_].frozenColCount = frozenColCount;
		}
		get frozenRowCount() {
			return this[_].frozenRowCount;
		}
		set frozenRowCount(frozenRowCount) {
			this[_].frozenRowCount = frozenRowCount;
		}
		get defaultRowHeight() {
			return this[_].rowCount;
		}
		set defaultRowHeight(defaultRowHeight) {
			this[_].defaultRowHeight = defaultRowHeight;
			this.updateScroll();
		}
		get defaultColWidth() {
			return this[_].defaultColWidth;
		}
		set defaultColWidth(defaultColWidth) {
			this[_].defaultColWidth = defaultColWidth;
			this.updateScroll();
		}
		get font() {
			return this[_].font;
		}
		set font(font) {
			this[_].font = font;
		}
		get underlayBackgroundColor() {
			return this[_].underlayBackgroundColor;
		}
		set underlayBackgroundColor(underlayBackgroundColor) {
			this[_].underlayBackgroundColor = underlayBackgroundColor;
		}
		configure(name, value) {
			const cfg = this[_].config || (this[_].config = {});
			if (isDef(value)) {
				cfg[name] = value;
			}
			return cfg[name];
		}
		updateSize() {
			//スタイルをクリアしてサイズ値を取得
			this[_].canvas.style.width = '';
			this[_].canvas.style.height = '';
			const width = Math.floor(this[_].canvas.offsetWidth ||
			/*for legacy*/this[_].canvas.parentElement.offsetWidth - style.getScrollBarSize());
			const height = Math.floor(this[_].canvas.offsetHeight ||
			/*for legacy*/this[_].canvas.parentElement.offsetHeight - style.getScrollBarSize());

			this[_].canvas.width = width;
			this[_].canvas.height = height;

			//整数で一致させるためstyleをセットして返す
			this[_].canvas.style.width = `${width}px`;
			this[_].canvas.style.height = `${height}px`;

			const sel = this[_].selection.select;
			this[_].focusControl.setFocusRect(this.getCellRect(sel.col, sel.row));
		}
		updateScroll() {
			this[_].scrollable.setScrollSize(_getScrollWidth(this), _getScrollHeight(this));
			this[_].scroll = {
				left: this[_].scrollable.scrollLeft,
				top: this[_].scrollable.scrollTop
			};
		}
		getRowHeight(row) {
			return _getRowHeight(this, row);
		}
		setRowHeight(row, height) {
			_setRowHeight(this, row, height);
			this.updateScroll();
		}
		getColWidth(col) {
			return _getColWidth(this, col);
		}
		setColWidth(col, width) {
			_setColWidth(this, col, width);
			this.updateScroll();
		}
		getMaxColWidth(col) {
			const obj = this[_].colWidthsLimit[col];
			return obj && obj.max || undefined;
		}
		setMaxColWidth(col, maxwidth) {
			const obj = this[_].colWidthsLimit[col] || (this[_].colWidthsLimit[col] = {});
			obj.max = maxwidth;
		}
		getMinColWidth(col) {
			const obj = this[_].colWidthsLimit[col];
			return obj && obj.min || undefined;
		}
		setMinColWidth(col, minwidth) {
			const obj = this[_].colWidthsLimit[col] || (this[_].colWidthsLimit[col] = {});
			obj.min = minwidth;
		}
		getCellRect(col, row) {
			const isFrozenCell = this.isFrozenCell(col, row);

			let absoluteLeft = _getColsWidth(this, 0, col - 1);
			const width = _getColWidth(this, col);
			if (isFrozenCell && isFrozenCell.col) {
				absoluteLeft += this[_].scroll.left;
			}

			let absoluteTop = _getRowsHeight(this, 0, row - 1);
			const height = _getRowHeight(this, row);
			if (isFrozenCell && isFrozenCell.row) {
				absoluteTop += this[_].scroll.top;
			}
			return new Rect(absoluteLeft, absoluteTop, width, height);
		}
		getCellRelativeRect(col, row) {
			return _toRelativeRect(this, this.getCellRect(col, row));
		}
		getCellsRect(startCol, startRow, endCol, endRow) {
			const isFrozenStartCell = this.isFrozenCell(startCol, startRow);
			const isFrozenEndCell = this.isFrozenCell(endCol, endRow);

			let absoluteLeft = _getColsWidth(this, 0, startCol - 1);
			let width = _getColsWidth(this, startCol, endCol);
			if (isFrozenStartCell && isFrozenStartCell.col) {
				const scrollLeft = this[_].scroll.left;
				absoluteLeft += scrollLeft;
				if (!isFrozenEndCell || !isFrozenEndCell.col) {
					width -= scrollLeft;
					width = Math.max(width, _getColsWidth(this, startCol, this.frozenColCount - 1));
				}
			}
			let absoluteTop = _getRowsHeight(this, 0, startRow - 1);
			let height = _getRowsHeight(this, startRow, endRow);
			if (isFrozenStartCell && isFrozenStartCell.row) {
				const scrollTop = this[_].scroll.top;
				absoluteTop += scrollTop;
				if (!isFrozenEndCell || !isFrozenEndCell.row) {
					height -= scrollTop;
					height = Math.max(height, _getColsWidth(this, startRow, this.frozenRowCount - 1));
				}
			}
			return new Rect(absoluteLeft, absoluteTop, width, height);
		}
		isFrozenCell(col, row) {
			const isFrozenRow = this[_].frozenRowCount > 0 && row < this[_].frozenRowCount;
			const isFrozenCol = this[_].frozenColCount > 0 && col < this[_].frozenColCount;
			if (isFrozenRow || isFrozenCol) {
				return {
					row: isFrozenRow,
					col: isFrozenCol
				};
			} else {
				return null;
			}
		}
		getRowAt(absoluteY) {
			const frozen = _getTargetFrozenRowAt(this, absoluteY);
			if (frozen) {
				return frozen.row;
			}
			const row = _getTargetRowAt(this, absoluteY);
			return row ? row.row : -1;
		}
		getColAt(absoluteX) {
			const frozen = _getTargetFrozenColAt(this, absoluteX);
			if (frozen) {
				return frozen.col;
			}
			const col = _getTargetColAt(this, absoluteX);
			return col ? col.col : -1;
		}
		getCellAt(absoluteX, absoluteY) {
			return {
				row: this.getRowAt(absoluteY),
				col: this.getColAt(absoluteX)
			};
		}
		makeVisibleCell(col, row) {
			const isFrozenCell = this.isFrozenCell(col, row);
			if (isFrozenCell && isFrozenCell.col && isFrozenCell.row) {
				return;
			}
			const rect = this.getCellRect(col, row);
			const visibleRect = _getScrollableVisibleRect(this);
			if (visibleRect.contains(rect)) {
				return;
			}
			if (!isFrozenCell || !isFrozenCell.col) {
				if (rect.left < visibleRect.left) {
					this[_].scrollable.scrollLeft -= visibleRect.left - rect.left;
				} else if (visibleRect.right < rect.right) {
					this[_].scrollable.scrollLeft -= visibleRect.right - rect.right;
				}
			}
			if (!isFrozenCell || !isFrozenCell.row) {
				if (rect.top < visibleRect.top) {
					this[_].scrollable.scrollTop -= visibleRect.top - rect.top;
				} else if (visibleRect.bottom < rect.bottom) {
					this[_].scrollable.scrollTop -= visibleRect.bottom - rect.bottom;
				}
			}
		}
		focusCell(col, row) {
			const oldEditMode = this[_].focusControl.editMode;
			if (oldEditMode) {
				this[_].focusControl.resetInputStatus();
			}

			this[_].focusControl.setFocusRect(this.getCellRect(col, row));

			const { col: selCol, row: selRow } = this[_].selection.select;
			const results = this.fireListeners(EVENT_TYPE.EDITABLEINPUT_CELL, { col: selCol, row: selRow });

			const editMode = array.findIndex(results, v => !!v) >= 0;
			this[_].focusControl.editMode = editMode;

			if (editMode) {
				this[_].focusControl.storeInputStatus();
				this[_].focusControl.setDefaultInputStatus();
				this.fireListeners(EVENT_TYPE.MODIFY_STATUS_EDITABLEINPUT_CELL, { col: selCol, row: selRow, input: this[_].focusControl.input });
			}

			// Failure occurs in IE if focus is not last
			this[_].focusControl.focus();
		}
		invalidateCell(col, row) {
			this.invalidateGridRect(col, row);
		}
		invalidateGridRect(startCol, startRow, endCol = startCol, endRow = startRow) {
			const offset = this.getOffsetInvalidateCells();
			if (offset > 0) {
				startCol -= offset;
				startRow -= offset;
				endCol += offset;
				endRow += offset;
			}

			const visibleRect = _getVisibleRect(this);
			const cellsRect = this.getCellsRect(startCol, startRow, endCol, endRow);
			const invalidateTarget = visibleRect.intersection(cellsRect);
			if (invalidateTarget) {

				if (this[_].frozenColCount > 0 && endCol >= this[_].frozenColCount) {
					const frozenRect = _getFrozenColsRect(this);
					if (frozenRect.intersection(invalidateTarget)) {
						invalidateTarget.left = Math.min(frozenRect.right - 1, frozenRect.right);
					}
				}

				if (this[_].frozenRowCount > 0 && endRow >= this[_].frozenRowCount) {
					const frozenRect = _getFrozenRowsRect(this);
					if (frozenRect.intersection(invalidateTarget)) {
						invalidateTarget.top = Math.min(frozenRect.bottom - 1, invalidateTarget.top);
					}
				}

				_invalidateRect(this, invalidateTarget);
			}
		}
		invalidate() {
			const visibleRect = _getVisibleRect(this);
			_invalidateRect(this, visibleRect);
		}
		/**
   * get cell value at copy action
   * <p>
   * Please implement
   * </p>
   *
   * @protected
   * @param  {number} col Column index of cell.
   * @param  {number} row Row index of cell.
   * @return {string}
   */
		getCopyCellValue(col, row) {}
		//Please implement get cell value!!

		/**
   * Draw a cell
   * <p>
   * Please implement cell drawing.
   * </p>
   *
   * @protected
   * @param  {number} col Column index of cell.
   * @param  {number} row Row index of cell.
   * @param  {DrawCellContext} context context of cell drawing.
   * @return {void}
   */
		onDrawCell(col, row, context) {
			//Please implement cell drawing!!
		}
		addDisposable(disposable) {
			if (!disposable || !disposable.dispose || typeof disposable.dispose !== 'function') {
				throw new Error('not disposable!');
			}
			const disposables = this[_].disposables = this[_].disposables || [];
			disposables.push(disposable);
		}
		dispose() {
			super.dispose();
			this[_].handler.dispose();
			this[_].scrollable.dispose();
			this[_].focusControl.dispose();
			this[_].columnResizer.dispose();
			this[_].cellSelector.dispose();
			if (this[_].disposables) {
				this[_].disposables.forEach(disposable => disposable.dispose());
				this[_].disposables = null;
			}

			const { parentElement } = this[_].element;
			if (parentElement) {
				parentElement.removeChild(this[_].element);
			}
		}
		getAttachCellArea(col, row) {
			return {
				element: this.getElement(),
				rect: _toRelativeRect(this, this.getCellRect(col, row))
			};
		}
		bindEventsInternal() {
			//nop
		}
		getTargetRowAtInternal(absoluteY) {
			//継承用 設定を無視して計算する場合継承して実装
		}
		getRowsHeightInternal(startRow, endRow) {
			//継承用 設定を無視して計算する場合継承して実装
		}
		getRowHeightInternal(row) {
			//継承用 設定を無視して計算する場合継承して実装
		}
		getScrollHeightInternal(row) {
			//継承用 設定を無視して計算する場合継承して実装
		}
		getMoveLeftColByKeyDownInternal({ col, row }) {
			return col - 1;
		}
		getMoveRightColByKeyDownInternal({ col, row }) {
			return col + 1;
		}
		getMoveUpRowByKeyDownInternal({ col, row }) {
			return row - 1;
		}
		getMoveDownRowByKeyDownInternal({ col, row }) {
			return row + 1;
		}
		getOffsetInvalidateCells() {
			return 0;
		}
		_getInitContext() {
			const ctx = this[_].context;
			//初期化
			ctx.fillStyle = 'white';
			ctx.strokeStyle = 'black';
			ctx.textAlign = 'left';
			ctx.textBaseline = 'top';
			ctx.lineWidth = 1;
			ctx.font = this.font || '16px sans-serif';
			return ctx;
		}
	}

	module.exports = DrawGrid;
}

/***/ }),

/***/ "./core/EventTarget.js":
/*!*****************************!*\
  !*** ./core/EventTarget.js ***!
  \*****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const { isDef, obj: { each } } = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");
	//private symbol
	const { _ } = __webpack_require__(/*! ../internal/symbolManager */ "./internal/symbolManager.js").get();

	let nextId = 1;
	/**
  * event target.
  */
	class EventTarget {
		constructor() {
			this[_] = {};
			this[_].listeners = {};
			this[_].listenerData = {};
		}
		/**
   * Adds an event listener.
   * @param  {string} type The event type id.
   * @param  {function} listener Callback method.
   * @return {number} unique id for the listener.
   */
		listen(type, listener) {
			const list = this[_].listeners[type] || (this[_].listeners[type] = []);
			list.push(listener);

			const id = nextId++;
			this[_].listenerData[id] = {
				type,
				listener,
				remove: () => {
					delete this[_].listenerData[id];
					const index = list.indexOf(listener);
					list.splice(index, 1);
					if (!this[_].listeners[type].length) {
						delete this[_].listeners[type];
					}
				}
			};
			return id;
		}
		/**
   * Removes an event listener which was added with listen() by the id returned by listen().
   * @param  {number} id the id returned by listen().
   * @return {void}
   */
		unlisten(id) {
			this[_].listenerData[id].remove();
		}
		addEventListener(type, listener) {
			this.listen(type, listener);
		}
		removeEventListener(type, listener) {
			each(this[_].listenerData, (obj, id) => {
				if (obj.type === type && obj.listener === listener) {
					this.unlisten(id);
				}
			});
		}
		hasListeners(type) {
			return !!this[_].listeners[type];
		}
		/**
   * Fires all registered listeners
   * @param  {string}    type The type of the listeners to fire.
   * @param  {...*} args fire arguments
   * @return {*} the result of the last listener
   */
		fireListeners(type, ...args) {
			const list = this[_].listeners[type];
			if (!list) {
				return [];
			}
			return list.map(listener => listener.call(this, ...args)).filter(isDef);
		}
		dispose() {
			delete this[_];
		}
	}

	module.exports = EventTarget;
}

/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const DataSource = __webpack_require__(/*! ./data/DataSource */ "./data/DataSource.js");
	const CachedDataSource = __webpack_require__(/*! ./data/CachedDataSource */ "./data/CachedDataSource.js");

	/**
  * data modules
  * @type {Object}
  * @namespace cheetahGrid.data
  * @memberof cheetahGrid
  */
	module.exports = {
		DataSource,
		CachedDataSource
	};
}

/***/ }),

/***/ "./data/CachedDataSource.js":
/*!**********************************!*\
  !*** ./data/CachedDataSource.js ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const { getChainSafe } = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");
	const DataSource = __webpack_require__(/*! ./DataSource */ "./data/DataSource.js");

	function _setFieldCache({ _fCache }, index, field, value) {
		const recCache = _fCache[index] || (_fCache[index] = {});
		recCache[field] = value;
	}
	/**
  * grid data source
  *
  * @classdesc cheetahGrid.data.CachedDataSource
  * @extends cheetahGrid.data.DataSource
  * @memberof cheetahGrid.data
  */
	class CachedDataSource extends DataSource {
		static get EVENT_TYPE() {
			return DataSource.EVENT_TYPE;
		}
		static ofArray(array) {
			return new CachedDataSource({
				get: index => array[index],
				length: array.length
			});
		}
		constructor(opt = {}) {
			super(opt);
			this._rCache = {};
			this._fCache = {};
		}
		getOriginal(index) {
			if (this._rCache && this._rCache[index]) {
				return this._rCache[index];
			}
			return super.getOriginal(index);
		}
		getOriginalField(index, field) {
			const cache = getChainSafe(this._fCache, index, field);
			if (cache) {
				return cache;
			}
			return super.getOriginalField(index, field);
		}
		setOriginalField(index, field, value) {
			const fCache = this._fCache;
			if (fCache && fCache[index]) {
				delete fCache[index]; // clear row cache
			}
			return super.setOriginalField(index, field, value);
		}
		clearCache() {
			if (this._rCache) {
				this._rCache = {};
			}
			if (this._fCache) {
				this._fCache = {};
			}
		}
		fieldPromiseCallBackInternal(index, field, val) {
			_setFieldCache(this, index, field, val);
		}
		recordPromiseCallBackInternal(index, val) {
			this._rCache[index] = val;
		}
		dispose() {
			super.dispose();
		}
	}

	module.exports = CachedDataSource;
}

/***/ }),

/***/ "./data/DataSource.js":
/*!****************************!*\
  !*** ./data/DataSource.js ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const { array, isDef, isPromise, getOrApply, applyChainSafe, emptyFn } = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");
	const sort = __webpack_require__(/*! ../internal/sort */ "./internal/sort.js");
	const EventTarget = __webpack_require__(/*! ../core/EventTarget */ "./core/EventTarget.js");

	const EVENT_TYPE = {
		UPDATE_LENGTH: 'update_length',
		UPDATED_LENGTH: 'updated_length',
		UPDATED_ORDER: 'updated_order'
	};

	function getValue(value, setPromiseBack) {
		value = getOrApply(value);
		if (isPromise(value)) {
			value = value.then(r => {
				if (!isPromise(r)) {
					setPromiseBack(r);
				}
				return getValue(r, setPromiseBack);
			});
			//一時的にキャッシュ
			setPromiseBack(value);
		}
		return value;
	}

	function getField(record, field, setPromiseBack) {
		if (!isDef(record)) {
			return undefined;
		}
		if (isPromise(record)) {
			return record.then(r => getField(r, field, setPromiseBack));
		}
		if (field in record) {
			return getValue(record[field], setPromiseBack);
		}
		if (typeof field === 'function') {
			return getValue(field(record), setPromiseBack);
		}

		const ss = (field + '').split('.');
		if (ss.length <= 1) {
			return getValue(record[field], setPromiseBack);
		}
		return getValue(applyChainSafe(record, (val, name) => getField(val, name, emptyFn), ...ss), setPromiseBack);
	}
	function setField(record, field, value) {
		if (field in record) {
			record[field] = value;
		} else if (typeof field === 'function') {
			return field(record, value);
		} else if (typeof field === 'string') {
			const ss = (field + '').split('.');
			let obj = record;
			const { length } = ss;
			for (let i = 0; i < length; i++) {
				const f = ss[i];
				if (i === length - 1) {
					obj[f] = value;
				} else {
					obj = obj[f] || (obj[f] = {});
				}
			}
		} else {
			record[field] = value;
		}
		return true;
	}
	function _getIndex(dataSource, index) {
		if (!dataSource._sortedIndexMap) {
			return index;
		}
		const mapIndex = dataSource._sortedIndexMap[index];
		return isDef(mapIndex) ? mapIndex : index;
	}

	/**
  * grid data source
  *
  * @classdesc cheetahGrid.data.DataSource
  * @extends EventTarget
  * @memberof cheetahGrid.data
  */
	class DataSource extends EventTarget {
		static get EVENT_TYPE() {
			return EVENT_TYPE;
		}
		static ofArray(array) {
			return new DataSource({
				get: index => array[index],
				length: array.length
			});
		}
		constructor({ get, length = 0 } = {}) {
			super();
			this._get = get;
			this._length = length;
			this._sortedIndexMap = false;
		}
		get(index) {
			return this.getOriginal(_getIndex(this, index));
		}
		getField(index, field) {
			return this.getOriginalField(_getIndex(this, index), field);
		}
		hasField(index, field) {
			return this.hasOriginalField(_getIndex(this, index), field);
		}
		setField(index, field, value) {
			return this.setOriginalField(_getIndex(this, index), field, value);
		}
		sort(field, order) {
			const sortedIndexMap = new Array(this._length);

			const orderFn = order !== 'desc' ? (v1, v2) => v1 === v2 ? 0 : v1 > v2 ? 1 : -1 : (v1, v2) => v1 === v2 ? 0 : v1 < v2 ? 1 : -1;

			return sort.sortPromise(index => isDef(sortedIndexMap[index]) ? sortedIndexMap[index] : sortedIndexMap[index] = index, (index, rel) => {
				sortedIndexMap[index] = rel;
			}, this._length, orderFn, index => this.getOriginalField(index, field)).then(() => {
				this._sortedIndexMap = sortedIndexMap;
				this.fireListeners(EVENT_TYPE.UPDATED_ORDER);
			});
		}
		get length() {
			return this._length;
		}
		set length(length) {
			const results = this.fireListeners(EVENT_TYPE.UPDATE_LENGTH, length);
			if (array.findIndex(results, v => !v) >= 0) {
				return;
			}
			this._length = length;
			this.fireListeners(EVENT_TYPE.UPDATED_LENGTH, this._length);
		}
		dispose() {
			super.dispose();
		}
		getOriginal(index) {
			return getValue(this._get(index), val => {
				this.recordPromiseCallBackInternal(index, val);
			});
		}
		getOriginalField(index, field) {
			if (!isDef(field)) {
				return undefined;
			}
			const record = this.getOriginal(index);
			return getField(record, field, val => {
				this.fieldPromiseCallBackInternal(index, field, val);
			});
		}
		hasOriginalField(index, field) {
			if (!isDef(field)) {
				return false;
			}
			if (typeof field === 'function') {
				return true;
			}
			const record = this.getOriginal(index);
			return field in record;
		}
		setOriginalField(index, field, value) {
			if (!isDef(field)) {
				return undefined;
			}
			const record = this.getOriginal(index);
			return setField(record, field, value);
		}
		fieldPromiseCallBackInternal(index, field, val) {
			//
		}
		recordPromiseCallBackInternal(index, val) {
			//
		}
	}
	DataSource.EMPTY = new DataSource({
		length: 0
	});

	module.exports = DataSource;
}

/***/ }),

/***/ "./element/Inline.js":
/*!***************************!*\
  !*** ./element/Inline.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isDef } = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");
class Inline {
	constructor(content) {
		this._content = isDef(content) ? content : '';
	}
	width({ ctx }) {
		return ctx.measureText(this._content).width;
	}
	font() {
		return null;
	}
	color() {
		return null;
	}
	canDraw() {
		return true;
	}
	onReady(fn) {}
	draw({
		ctx,
		canvashelper,
		rect,
		offset,
		offsetLeft,
		offsetRight,
		offsetTop,
		offsetBottom
	}) {
		canvashelper.fillTextRect(ctx, this._content, rect.left, rect.top, rect.width, rect.height, {
			offset: offset + 1,
			padding: {
				left: offsetLeft,
				right: offsetRight,
				top: offsetTop,
				bottom: offsetBottom
			}
		});
	}
}
module.exports = Inline;

/***/ }),

/***/ "./element/InlineDrawer.js":
/*!*********************************!*\
  !*** ./element/InlineDrawer.js ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Inline = __webpack_require__(/*! ./Inline */ "./element/Inline.js");

class InlineDrawer extends Inline {
	constructor({
		draw,
		width,
		height,
		color
	}) {
		super();

		this._draw = draw;
		this._width = width;
		this._height = height;
		this._color = color;
	}
	width({ ctx }) {
		return this._width;
	}
	font() {
		return null;
	}
	color() {
		return this._color;
	}
	canDraw() {
		return true;
	}
	onReady(callback) {}
	draw({
		ctx,
		canvashelper,
		rect,
		offset,
		offsetLeft,
		offsetRight,
		offsetTop,
		offsetBottom
	}) {
		this._draw({
			ctx,
			canvashelper,
			rect,
			offset,
			offsetLeft,
			offsetRight,
			offsetTop,
			offsetBottom
		});
	}
}

module.exports = InlineDrawer;

/***/ }),

/***/ "./element/InlineIcon.js":
/*!*******************************!*\
  !*** ./element/InlineIcon.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Inline = __webpack_require__(/*! ./Inline */ "./element/Inline.js");
const fonts = __webpack_require__(/*! ../internal/fonts */ "./internal/fonts.js");

class InlineIcon extends Inline {
	constructor(icon) {
		super();
		this._icon = icon || {};
	}
	width({ ctx }) {
		const icon = this._icon;
		if (icon.width) {
			return icon.width;
		}
		if (icon.font && fonts.check(icon.font, icon.content)) {
			ctx.save();
			try {
				ctx.font = icon.font || ctx.font;
				return ctx.measureText(icon.content).width;
			} finally {
				ctx.restore();
			}
		}
		return null;
	}
	font() {
		return this._icon.font;
	}
	color() {
		return this._icon.color;
	}
	canDraw() {
		const icon = this._icon;
		return icon.font ? fonts.check(icon.font, icon.content) : true;
	}
	onReady(callback) {
		const icon = this._icon;
		if (icon.font && !fonts.check(icon.font, icon.content)) {
			fonts.load(icon.font, icon.content, callback);
		}
	}
	draw({
		ctx,
		canvashelper,
		rect,
		offset,
		offsetLeft,
		offsetRight,
		offsetTop,
		offsetBottom
	}) {
		const icon = this._icon;
		if (icon.content) {
			canvashelper.fillTextRect(ctx, icon.content, rect.left, rect.top, rect.width, rect.height, {
				offset: offset + 1,
				padding: {
					left: offsetLeft,
					right: offsetRight,
					top: offsetTop,
					bottom: offsetBottom
				}
			});
		}
	}
}

module.exports = InlineIcon;

/***/ }),

/***/ "./element/InlineImage.js":
/*!********************************!*\
  !*** ./element/InlineImage.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Inline = __webpack_require__(/*! ./Inline */ "./element/Inline.js");
const { getCacheOrLoad } = __webpack_require__(/*! ../internal/imgs */ "./internal/imgs.js");
const { isPromise } = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");

class InlineImage extends Inline {
	constructor({
		src,
		width,
		height,
		imageLeft,
		imageTop,
		imageWidth,
		imageHeight
	}) {
		super();
		this._src = src;
		this._width = width;
		this._height = height;
		this._imageLeft = imageLeft;
		this._imageTop = imageTop;
		this._imageWidth = imageWidth;
		this._imageHeight = imageHeight;

		this._onloaded = [];

		this._loaded = false;
		if (isPromise(src)) {
			src.then(s => {
				this._src = s;
				this._loadImage(s);
			});
		} else {
			this._loadImage(src);
		}
	}
	_loadImage(src) {
		const img = this._inlineImg = getCacheOrLoad('InlineImage', 50, src);
		if (isPromise(img)) {
			img.then(i => {
				this._loaded = true;
				this._inlineImg = i;

				this._onloaded.forEach(fn => fn());
			});
		} else {
			this._loaded = true;
		}
	}
	width({ ctx }) {
		return this._width || (this._loaded ? this._inlineImg.width : 0);
	}
	font() {
		return null;
	}
	color() {
		return null;
	}
	canDraw() {
		return this._loaded;
	}
	onReady(callback) {
		if (isPromise(this._src) || isPromise(this._inlineImg)) {
			this._onloaded.push(() => callback());
		}
	}
	draw({
		ctx,
		canvashelper,
		rect,
		offset,
		offsetLeft,
		offsetRight,
		offsetTop,
		offsetBottom
	}) {
		const img = this._inlineImg;
		canvashelper.drawInlineImageRect(ctx, img, this._imageLeft || 0, this._imageTop || 0, this._imageWidth || img.width, this._imageHeight || img.height, this._width || img.width, this._height || img.height, rect.left, rect.top, rect.width, rect.height, {
			offset: offset + 1,
			padding: {
				left: offsetLeft,
				right: offsetRight,
				top: offsetTop,
				bottom: offsetBottom
			}
		});
	}
}

module.exports = InlineImage;

/***/ }),

/***/ "./element/InlinePath2D.js":
/*!*********************************!*\
  !*** ./element/InlinePath2D.js ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Inline = __webpack_require__(/*! ./Inline */ "./element/Inline.js");
const { calcStartPosition } = __webpack_require__(/*! ../internal/canvases */ "./internal/canvases.js");
const path2DManager = __webpack_require__(/*! ../internal/path2DManager */ "./internal/path2DManager.js");

class InlinePath2D extends Inline {
	constructor({
		path,
		width,
		height,
		color
	}) {
		super();
		// このタイミングでないとIEでPath2Dのpolyfillが反映されない
		this._path = new path2DManager.Path2D(path);
		this._width = width;
		this._height = height;
		this._color = color;
	}
	width({ ctx }) {
		return this._width;
	}
	font() {
		return null;
	}
	color() {
		return this._color;
	}
	canDraw() {
		return true;
	}
	onReady(callback) {}
	draw({
		ctx,
		canvashelper,
		rect,
		offset,
		offsetLeft,
		offsetRight,
		offsetTop,
		offsetBottom
	}) {
		offset++;
		const padding = {
			left: offsetLeft,
			right: offsetRight,
			top: offsetTop,
			bottom: offsetBottom
		};
		ctx.save();
		try {
			ctx.beginPath();
			ctx.rect(rect.left, rect.top, rect.width, rect.height);
			//clip
			ctx.clip();

			//文字描画
			const pos = calcStartPosition(ctx, rect, this._width, this._height, {
				offset,
				padding
			});
			ctx.translate(pos.x, pos.y);
			ctx.fill(this._path);
		} finally {
			ctx.restore();
		}
	}
}

module.exports = InlinePath2D;

/***/ }),

/***/ "./element/InlineSvg.js":
/*!******************************!*\
  !*** ./element/InlineSvg.js ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const InlineImage = __webpack_require__(/*! ./InlineImage */ "./element/InlineImage.js");
const { then } = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");

function buildSvgDataUrl(svg) {
	const data = typeof svg === 'string' ? svg : new XMLSerializer().serializeToString(svg);
	const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(data); //svgデータをbase64に変換
	return url;
}
function getSvgElement(svg) {
	if (typeof svg === 'string') {
		const parser = new DOMParser();
		return parser.parseFromString(svg, 'image/svg+xml');
	} else {
		return svg;
	}
}

class InlineSvg extends InlineImage {
	constructor({
		svg,
		width,
		height,
		imageLeft,
		imageTop,
		imageWidth,
		imageHeight
	}) {
		const svgElem = then(svg, getSvgElement);
		const elmWidth = svgElem.getAttribute ? svgElem.getAttribute('width') : null;
		const elmHeight = svgElem.getAttribute ? svgElem.getAttribute('height') : null;
		super({
			src: then(svg, buildSvgDataUrl),
			width: width || elmWidth,
			height: height || elmHeight,
			imageWidth: elmWidth,
			imageHeight: elmHeight
		});
	}
}

module.exports = InlineSvg;

/***/ }),

/***/ "./element/inlines.js":
/*!****************************!*\
  !*** ./element/inlines.js ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Array_dot_isArray) {

const Inline = __webpack_require__(/*! ./Inline */ "./element/Inline.js");
const InlineIcon = __webpack_require__(/*! ./InlineIcon */ "./element/InlineIcon.js");
const InlineImage = __webpack_require__(/*! ./InlineImage */ "./element/InlineImage.js");
const InlineSvg = __webpack_require__(/*! ./InlineSvg */ "./element/InlineSvg.js");
const InlineDrawer = __webpack_require__(/*! ./InlineDrawer */ "./element/InlineDrawer.js");
const InlinePath2D = __webpack_require__(/*! ./InlinePath2D */ "./element/InlinePath2D.js");
const { isDef } = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");
const { calcStartPosition } = __webpack_require__(/*! ../internal/canvases */ "./internal/canvases.js");
const icons = __webpack_require__(/*! ../icons */ "./icons.js");
const path2DManager = __webpack_require__(/*! ../internal/path2DManager */ "./internal/path2DManager.js");

function drawRegisteredIcon(ctx, icon, drawWidth, drawHeight, left, top, width, height, {
	offset = 2,
	padding
} = {}) {
	const rect = {
		left,
		top,
		width,
		height,
		right: left + width,
		bottom: top + height
	};
	ctx.save();
	try {
		ctx.beginPath();
		ctx.rect(rect.left, rect.top, rect.width, rect.height);
		//clip
		ctx.clip();

		//文字描画
		const pos = calcStartPosition(ctx, rect, drawWidth, drawHeight, {
			offset,
			padding
		});
		path2DManager.fill(icon, ctx, pos.x, pos.y, drawWidth, drawHeight);
	} finally {
		ctx.restore();
	}
}

module.exports = {
	iconOf(icon) {
		if (icon instanceof Inline) {
			return icon;
		}
		if (!icon) {
			return null;
		}
		if (icon.font && icon.content) {
			return new InlineIcon(icon);
		}
		if (icon.src) {
			return new InlineImage({
				src: icon.src,
				width: icon.width,
				height: icon.width
			});
		}
		if (icon.svg) {
			return new InlineSvg({
				svg: icon.svg,
				width: icon.width,
				height: icon.width
			});
		}
		if (icon.path) {
			return new InlinePath2D({
				path: icon.path,
				width: icon.width,
				height: icon.width,
				color: icon.color
			});
		}
		const regedIcons = icons.get();
		if (icon.name && regedIcons[icon.name]) {
			const regedIcon = regedIcons[icon.name];
			const width = icon.width || Math.max(regedIcon.width, regedIcon.height);
			return new InlineDrawer({
				draw({
					ctx,
					canvashelper,
					rect,
					offset,
					offsetLeft,
					offsetRight,
					offsetTop,
					offsetBottom
				}) {
					drawRegisteredIcon(ctx, regedIcon, width, width, rect.left, rect.top, rect.width, rect.height, {
						offset: offset + 1,
						padding: {
							left: offsetLeft,
							right: offsetRight,
							top: offsetTop,
							bottom: offsetBottom
						}
					});
				},
				width,
				height: width,
				color: icon.color
			});
		}
		return new InlineIcon(icon);
	},
	of(content) {
		if (!isDef(content)) {
			return null;
		}
		if (content instanceof Inline) {
			return content;
		}
		return new Inline(content);
	},
	buildInlines(icons, inline) {
		const result = [];
		if (icons) {
			result.push(...icons.map(icon => this.iconOf(icon)).filter(e => !!e));
		}
		if (__webpack_provided_Array_dot_isArray(inline) && inline.filter(il => il instanceof Inline).length) {
			result.push(...inline.map(il => this.of(il)).filter(e => !!e));
		} else {
			const il = this.of(inline);
			if (il) {
				result.push(il);
			}
		}
		return result;
	}
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @/internal/com.js */ "./internal/com.js")["Array_isArray"]))

/***/ }),

/***/ "./header/style.js":
/*!*************************!*\
  !*** ./header/style.js ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const BaseStyle = __webpack_require__(/*! ./style/BaseStyle */ "./header/style/BaseStyle.js");
	const Style = __webpack_require__(/*! ./style/Style */ "./header/style/Style.js");

	const style = {
		get BaseStyle() {
			return BaseStyle;
		},
		get Style() {
			return Style;
		},
		of(columnStyle, StyleClass) {
			if (columnStyle) {
				if (columnStyle instanceof Style) {
					return columnStyle;
				} else if (typeof columnStyle === 'function') {
					return style.of(columnStyle(), StyleClass);
				}
				return new StyleClass(columnStyle);
			} else {
				return StyleClass.DEFAULT;
			}
		}
	};
	module.exports = style;
}

/***/ }),

/***/ "./header/style/BaseStyle.js":
/*!***********************************!*\
  !*** ./header/style/BaseStyle.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const EventTarget = __webpack_require__(/*! ../../core/EventTarget */ "./core/EventTarget.js");

	const EVENT_TYPE = {
		CHANGE_STYLE: 'change_style'
	};

	let defaultStyle;
	class BaseStyle extends EventTarget {
		static get EVENT_TYPE() {
			return EVENT_TYPE;
		}
		static get DEFAULT() {
			return defaultStyle ? defaultStyle : defaultStyle = new BaseStyle();
		}
		constructor({
			textAlign = 'left',
			textBaseline = 'middle',
			bgColor
		} = {}) {
			super();
			this._textAlign = textAlign;
			this._textBaseline = textBaseline;
			this._bgColor = bgColor;
		}
		get textAlign() {
			return this._textAlign;
		}
		set textAlign(textAlign) {
			this._textAlign = textAlign;
			this.doChangeStyle();
		}
		get textBaseline() {
			return this._textBaseline;
		}
		set textBaseline(textBaseline) {
			this._textBaseline = textBaseline;
			this.doChangeStyle();
		}
		get bgColor() {
			return this._bgColor;
		}
		set bgColor(bgColor) {
			this._bgColor = bgColor;
			this.doChangeStyle();
		}
		doChangeStyle() {
			this.fireListeners(EVENT_TYPE.CHANGE_STYLE);
		}
		clone() {
			return new BaseStyle(this);
		}
	}
	module.exports = BaseStyle;
}

/***/ }),

/***/ "./header/style/Style.js":
/*!*******************************!*\
  !*** ./header/style/Style.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const BaseStyle = __webpack_require__(/*! ./BaseStyle */ "./header/style/BaseStyle.js");
	let defaultStyle;
	class Style extends BaseStyle {
		static get DEFAULT() {
			return defaultStyle ? defaultStyle : defaultStyle = new Style();
		}
		constructor(style = {}) {
			super(style);
			this._color = style.color;
		}
		get color() {
			return this._color;
		}
		set color(color) {
			this._color = color;
			this.doChangeStyle();
		}
		clone() {
			return new Style(this);
		}
	}
	module.exports = Style;
}

/***/ }),

/***/ "./header/type.js":
/*!************************!*\
  !*** ./header/type.js ***!
  \************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const Header = __webpack_require__(/*! ./type/Header */ "./header/type/Header.js");
	const SortHeader = __webpack_require__(/*! ./type/SortHeader */ "./header/type/SortHeader.js");

	const type = {
		create(headerCell) {
			if (headerCell.sort) {
				return new SortHeader(headerCell);
			}
			return new Header(headerCell);
		}
	};
	module.exports = type;
}

/***/ }),

/***/ "./header/type/BaseHeader.js":
/*!***********************************!*\
  !*** ./header/type/BaseHeader.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const styleContents = __webpack_require__(/*! ../style */ "./header/style.js");
	const { Style } = styleContents;

	class BaseHeader {
		constructor(headerCell) {
			this._headerCell = headerCell;
			this.onDrawCell = this.onDrawCell.bind(this); //スコープを固定させる
		}
		get StyleClass() {
			return Style;
		}
		onDrawCell(cellValue, info, context, grid) {
			const { style, drawCellBase } = info;
			delete info.getRecord;
			delete info.style;
			const helper = grid.getGridCanvasHelper();
			drawCellBase();
			//文字描画
			this.drawInternal(cellValue, context, styleContents.of(style, this.StyleClass), helper, grid, info);
		}
		drawInternal(value, context, style, helper, grid, info) {}
		bindGridEvent(grid) {
			return [];
		}
	}
	module.exports = BaseHeader;
}

/***/ }),

/***/ "./header/type/Header.js":
/*!*******************************!*\
  !*** ./header/type/Header.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const styleContents = __webpack_require__(/*! ../style */ "./header/style.js");
	const { Style } = styleContents;
	const BaseHeader = __webpack_require__(/*! ./BaseHeader */ "./header/type/BaseHeader.js");

	class Header extends BaseHeader {
		get StyleClass() {
			return Style;
		}
		drawInternal(value, context, style, helper, grid, { drawCellBase }) {
			const {
				textAlign,
				textBaseline,
				color,
				font,
				bgColor
			} = style;

			if (bgColor) {
				drawCellBase({
					bgColor
				});
			}

			helper.text(value, context, {
				textAlign,
				textBaseline,
				color,
				font
			});
		}
		bindGridEvent(grid) {
			return [];
		}
	}
	module.exports = Header;
}

/***/ }),

/***/ "./header/type/SortHeader.js":
/*!***********************************!*\
  !*** ./header/type/SortHeader.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const styleContents = __webpack_require__(/*! ../style */ "./header/style.js");
	const { Style } = styleContents;
	const BaseHeader = __webpack_require__(/*! ./BaseHeader */ "./header/type/BaseHeader.js");
	const { isDef } = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");
	const { EVENT_TYPE: {
			CLICK_CELL,
			MOUSEOVER_CELL,
			MOUSEOUT_CELL,
			MOUSEMOVE_CELL
		} } = __webpack_require__(/*! ../../core/DrawGrid */ "./core/DrawGrid.js");

	class SortHeader extends BaseHeader {
		constructor(headerCell) {
			super(headerCell);
			this._sort = headerCell.sort;
			this._range = headerCell.range;
		}
		get StyleClass() {
			return Style;
		}
		drawInternal(value, context, style, helper, grid, { drawCellBase }) {
			const {
				textAlign,
				textBaseline = 'middle',
				color,
				bgColor,
				font
			} = style;

			if (bgColor) {
				drawCellBase({
					bgColor
				});
			}

			const state = grid.sortState;
			let order = undefined;
			if (this._range.isCellInRange(state.col, this._range.startRow)) {
				order = state.order;
			}

			const ctx = context.getContext();
			const arrowSize = ctx.measureText('あ').width * 1.2;

			helper.text(value, context, {
				textAlign,
				textBaseline,
				color,
				font,
				icons: [{
					name: isDef(order) ? order === 'asc' ? 'arrow_downward' : 'arrow_upward' : null,
					width: arrowSize,
					color: 'rgba(0, 0, 0, 0.38)'
				}]
			});
		}
		_executeSort(newState, grid) {
			if (typeof this._sort === 'function') {
				this._sort(newState.order, newState.col, grid);
			} else {
				grid.dataSource.sort(grid.getField(newState.col), newState.order);
			}
		}
		bindGridEvent(grid) {
			return [grid.listen(CLICK_CELL, e => {
				if (!this._range.isCellInRange(e.col, e.row)) {
					return;
				}
				const state = grid.sortState;
				let newState;
				if (this._range.isCellInRange(state.col, e.row)) {
					newState = {
						col: this._range.startCol,
						order: state.order === 'asc' ? 'desc' : 'asc'
					};
				} else {
					newState = {
						col: this._range.startCol,
						order: 'asc'
					};
				}
				grid.sortState = newState;
				this._executeSort(newState, grid);
				grid.invalidateGridRect(0, 0, grid.colCount - 1, grid.rowCount - 1);
			}),
			// mouse move
			grid.listen(MOUSEOVER_CELL, e => {
				if (!this._range.isCellInRange(e.col, e.row)) {
					return;
				}
				grid.getElement().style.cursor = 'pointer';
			}),
			//横からMOUSEENTERした場合、'col-resize'の処理と競合するのでmoveを監視して処理する
			grid.listen(MOUSEMOVE_CELL, e => {
				if (!this._range.isCellInRange(e.col, e.row)) {
					return;
				}
				if (!grid.getElement().style.cursor) {
					grid.getElement().style.cursor = 'pointer';
				}
			}), grid.listen(MOUSEOUT_CELL, e => {
				if (!this._range.isCellInRange(e.col, e.row)) {
					return;
				}
				grid.getElement().style.cursor = '';
			})];
		}
	}
	module.exports = SortHeader;
}

/***/ }),

/***/ "./icons.js":
/*!******************!*\
  !*** ./icons.js ***!
  \******************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*eslint-disable camelcase*/


const { extend } = __webpack_require__(/*! ./internal/utils */ "./internal/utils.js");
const plugins = __webpack_require__(/*! ./plugins/icons */ "./plugins/icons.js");
const builtins = {
	get arrow_upward() {
		return __webpack_require__(/*! ../../webpack-loader/svg-to-icon-js-loader!material-design-icons/navigation/svg/production/ic_arrow_upward_48px.svg */ "../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/navigation/svg/production/ic_arrow_upward_48px.svg");
	},
	get arrow_downward() {
		return __webpack_require__(/*! ../../webpack-loader/svg-to-icon-js-loader!material-design-icons/navigation/svg/production/ic_arrow_downward_48px.svg */ "../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/navigation/svg/production/ic_arrow_downward_48px.svg");
	},
	get edit() {
		return __webpack_require__(/*! ../../webpack-loader/svg-to-icon-js-loader!material-design-icons/image/svg/production/ic_edit_48px.svg */ "../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/image/svg/production/ic_edit_48px.svg");
	},
	get add() {
		return __webpack_require__(/*! ../../webpack-loader/svg-to-icon-js-loader!material-design-icons/content/svg/production/ic_add_48px.svg */ "../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/content/svg/production/ic_add_48px.svg");
	},
	get star() {
		return __webpack_require__(/*! ../../webpack-loader/svg-to-icon-js-loader!material-design-icons/toggle/svg/production/ic_star_24px.svg */ "../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/toggle/svg/production/ic_star_24px.svg");
	},
	get star_border() {
		return __webpack_require__(/*! ../../webpack-loader/svg-to-icon-js-loader!material-design-icons/toggle/svg/production/ic_star_border_24px.svg */ "../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/toggle/svg/production/ic_star_border_24px.svg");
	},
	get star_half() {
		return __webpack_require__(/*! ../../webpack-loader/svg-to-icon-js-loader!material-design-icons/toggle/svg/production/ic_star_half_24px.svg */ "../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/toggle/svg/production/ic_star_half_24px.svg");
	}
};

module.exports = {
	get() {
		return extend(builtins, plugins);
	}
};

/***/ }),

/***/ "./internal/EventHandler.js":
/*!**********************************!*\
  !*** ./internal/EventHandler.js ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const { obj: { each } } = __webpack_require__(/*! ./utils */ "./internal/utils.js");
	let nextId = 1;

	class EventHandler {
		constructor() {
			this._listeners = {};
		}
		on(target, type, listener, ...options) {
			if (target.addEventListener) {
				target.addEventListener(type, listener, ...options);
			}
			const obj = {
				target, type, listener, options
			};
			const id = nextId++;
			this._listeners[id] = obj;
			return id;
		}
		tryWithOffEvents(target, type, call) {
			const list = [];
			try {
				each(this._listeners, obj => {
					if (obj.target === target && obj.type === type) {
						if (obj.target.removeEventListener) {
							obj.target.removeEventListener(obj.type, obj.listener, ...obj.options);
						}
						list.push(obj);
					}
				});
				call();
			} finally {
				list.forEach(obj => {
					if (obj.target.addEventListener) {
						obj.target.addEventListener(obj.type, obj.listener, ...obj.options);
					}
				});
			}
		}
		off(id) {
			if (!id) {
				return;
			}
			const obj = this._listeners[id];
			if (!obj) {
				return;
			}
			delete this._listeners[id];
			if (obj.target.removeEventListener) {
				obj.target.removeEventListener(obj.type, obj.listener, ...obj.options);
			}
		}
		fire(target, type, ...args) {
			each(this._listeners, obj => {
				if (obj.target === target && obj.type === type) {
					obj.listener.call(obj.target, ...args);
				}
			});
		}
		hasListener(target, type) {
			let result = false;
			each(this._listeners, obj => {
				if (obj.target === target && obj.type === type) {
					result = true;
				}
			});
			return result;
		}
		clear() {
			each(this._listeners, obj => {
				if (obj.target.removeEventListener) {
					obj.target.removeEventListener(obj.type, obj.listener, ...obj.options);
				}
			});
			this._listeners = {};
		}
		dispose() {
			this.clear();
			this._listeners = null;
		}
	}

	module.exports = EventHandler;
}

/***/ }),

/***/ "./internal/LRUCache.js":
/*!******************************!*\
  !*** ./internal/LRUCache.js ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class LRUCache {
	constructor(cacheSize) {
		this._list = [];
		this._map = {};
		this._cacheSize = cacheSize || 50;
	}
	get(key) {
		const val = this._map[key];
		if (val) {
			const idx = this._list.indexOf(key);
			this._list.splice(idx, 1);
			this._list.push(key);
		}
		return val;
	}
	put(key, value) {
		if (this._map[key]) {
			const idx = this._list.indexOf(key);
			this._list.splice(idx, 1);
		}
		this._map[key] = value;
		this._list.push(key);
		if (this._list.length > this._cacheSize) {
			const remKey = this._list.shift();
			delete this._map[remKey];
		}
	}
}
module.exports = LRUCache;

/***/ }),

/***/ "./internal/NumberMap.js":
/*!*******************************!*\
  !*** ./internal/NumberMap.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const indexFirst = (ary, elm) => {
		let low = 0;
		let high = ary.length - 1;
		while (low <= high) {
			const i = Math.floor((low + high) / 2);
			if (ary[i] === elm) {
				return i;
			} else if (ary[i] > elm) {
				high = i - 1;
			} else {
				low = i + 1;
			}
		}
		return high < 0 ? 0 : high;
	};

	class NumberMap {
		constructor() {
			this._keys = [];
			this._vals = {};
			this._sorted = false;
		}
		put(key, value) {
			if (!(key in this._vals)) {
				this._keys.push(key);
				this._sorted = false;
			}
			this._vals[key] = value;
		}
		get(key) {
			return this._vals[key];
		}
		eachAll(fn) {
			this._keys.forEach(key => {
				fn(this.get(key), key);
			});
		}
		each(keyFrom, keyTo, fn) {
			const { _keys: keys } = this;
			const { length } = keys;
			if (!this._sorted) {
				keys.sort((a, b) => {
					if (a < b) {
						return -1;
					}
					if (a > b) {
						return 1;
					}
					return 0;
				});
				this._sorted = true;
			}

			for (let i = indexFirst(keys, keyFrom); i < length; i++) {
				const key = keys[i];
				if (keyFrom <= key && key <= keyTo) {
					fn(this.get(key), key);
				} else if (keyTo < key) {
					return;
				}
			}
		}
	}

	module.exports = NumberMap;
}

/***/ }),

/***/ "./internal/Rect.js":
/*!**************************!*\
  !*** ./internal/Rect.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	class Rect {
		constructor(left, top, width, height) {
			this._left = left;
			this._top = top;
			this._width = width;
			this._height = height;
		}
		static bounds(left, top, right, bottom) {
			return new Rect(left, top, right - left, bottom - top);
		}
		static max(rect1, rect2) {
			return Rect.bounds(Math.min(rect1.left, rect2.left), Math.min(rect1.top, rect2.top), Math.max(rect1.right, rect2.right), Math.max(rect1.bottom, rect2.bottom));
		}
		get left() {
			return this._left;
		}
		set left(left) {
			const { right } = this;
			this._left = left;
			this.right = right;
		}
		get top() {
			return this._top;
		}
		set top(top) {
			const { bottom } = this;
			this._top = top;
			this.bottom = bottom;
		}
		get width() {
			return this._width;
		}
		set width(width) {
			this._width = width;
			this._right = undefined;
		}
		get height() {
			return this._height;
		}
		set height(height) {
			this._height = height;
			this._bottom = undefined;
		}
		get right() {
			return this._right !== undefined ? this._right : this._right = this.left + this.width;
		}
		set right(right) {
			this._right = right;
			this.width = right - this.left;
		}
		get bottom() {
			return this._bottom !== undefined ? this._bottom : this._bottom = this.top + this.height;
		}
		set bottom(bottom) {
			this._bottom = bottom;
			this.height = bottom - this.top;
		}
		offsetLeft(offset) {
			this._left += offset;
			this._right = undefined;
		}
		offsetTop(offset) {
			this._top += offset;
			this._bottom = undefined;
		}
		copy() {
			return new Rect(this.left, this.top, this.width, this.height);
		}
		intersection(rect) {
			const x0 = Math.max(this.left, rect.left);
			const x1 = Math.min(this.left + this.width, rect.left + rect.width);
			if (x0 <= x1) {
				const y0 = Math.max(this.top, rect.top);
				const y1 = Math.min(this.top + this.height, rect.top + rect.height);
				if (y0 <= y1) {
					return Rect.bounds(x0, y0, x1, y1);
				}
			}
			return null;
		}
		contains(another) {
			return this.left <= another.left && this.left + this.width >= another.left + another.width && this.top <= another.top && this.top + this.height >= another.top + another.height;
		}
		inPoint(x, y) {
			return this.left <= x && this.left + this.width >= x && this.top <= y && this.top + this.height >= y;
		}
	}
	module.exports = Rect;
}

/***/ }),

/***/ "./internal/Scrollable.js":
/*!********************************!*\
  !*** ./internal/Scrollable.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const EventHandler = __webpack_require__(/*! ./EventHandler */ "./internal/EventHandler.js");
	const style = __webpack_require__(/*! ./style */ "./internal/style.js");
	const { browser } = __webpack_require__(/*! ./utils */ "./internal/utils.js");

	const MAX_SCROLL = browser.heightLimit - 1000;

	function _update(scrollable) {
		let domHeight;
		if (scrollable._height > MAX_SCROLL) {
			const sbSize = style.getScrollBarSize();
			const offsetHeight = scrollable._scrollable.offsetHeight;
			const vScrollRange = MAX_SCROLL - offsetHeight + sbSize;
			const rScrollRange = scrollable._height - offsetHeight + sbSize;
			scrollable._p = vScrollRange / rScrollRange;
			domHeight = MAX_SCROLL;
		} else {
			scrollable._p = 1;
			domHeight = scrollable._height;
		}

		scrollable._endPointElement.style.top = domHeight.toFixed() + 'px';
		scrollable._endPointElement.style.left = scrollable._width.toFixed() + 'px';
	}

	class Scrollable {
		constructor() {
			this._handler = new EventHandler();

			this._scrollable = document.createElement('div');
			this._scrollable.classList.add('grid-scrollable');
			this._height = 0;
			this._width = 0;

			this._endPointElement = document.createElement('div');
			this._endPointElement.classList.add('grid-scroll-end-point');
			_update(this);
			this._scrollable.appendChild(this._endPointElement);

			// const mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel'; //FF doesn't recognize mousewheel as of FF3.x
			// this._handler.on(this._scrollable, mousewheelevt, (evt) => {
			// const delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta;
			// const point = Math.min(Math.abs(delta) / 12, this.scrollHeight / 5);
			// this.scrollTop += delta < 0 ? point : -point;
			// });
		}
		calcTop(top) {
			const relativeTop = top - this.scrollTop;
			return this._scrollable.scrollTop + relativeTop;
		}
		getElement() {
			return this._scrollable;
		}
		setScrollSize(width, height) {
			this._width = width;
			this._height = height;
			_update(this);
		}
		get scrollWidth() {
			return this._width;
		}
		set scrollWidth(width) {
			this._width = width;
			_update(this);
		}
		get scrollHeight() {
			return this._height;
		}
		set scrollHeight(height) {
			this._height = height;
			_update(this);
		}
		get scrollLeft() {
			return Math.ceil(this._scrollable.scrollLeft);
		}
		set scrollLeft(scrollLeft) {
			this._scrollable.scrollLeft = scrollLeft;
		}
		get scrollTop() {
			return Math.ceil(this._scrollable.scrollTop / this._p);
		}
		set scrollTop(scrollTop) {
			this._scrollable.scrollTop = scrollTop * this._p;
		}
		onScroll(fn) {
			this._handler.on(this._scrollable, 'scroll', fn);
		}
		dispose() {
			this._handler.dispose();
		}
	}

	module.exports = Scrollable;
}

/***/ }),

/***/ "./internal/animate.js":
/*!*****************************!*\
  !*** ./internal/animate.js ***!
  \*****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	function cubicBezier(x2, y2, x3, y3) {
		let step;
		const err = 0.0001;

		x2 *= 3;
		y2 *= 3;
		x3 *= 3;
		y3 *= 3;

		return function (t) {
			let p, a, b, c, d, x, s;
			if (t < 0 || 1 < t) {
				throw new Error(t);
			}

			p = step || t;

			do {
				a = 1 - p;
				b = a * a;
				c = p * p;
				d = c * p;

				x = x2 * b * p + x3 * a * c + d;
				s = t - x;
				p += s * 0.5;
			} while (err < Math.abs(s));

			step = p;
			return y2 * b * p + y3 * a * c + d;
		};
	}
	const EASINGS = {
		linear(p) {
			return p;
		},
		easeIn: cubicBezier(0.420, 0.000, 1.000, 1.000),
		easeOut: cubicBezier(0.000, 0.000, 0.580, 1.000),
		easeInOut: cubicBezier(0.420, 0.000, 0.580, 1.000)
	};

	const raf = window.requestAnimationFrame || setTimeout;

	function now() {
		return Date.now();
	}
	/**
  * <pre>
  * Animates.
  * </pre>
  * @function
  * @param {number} duration animation time.
  * @param {function} step
  * @param {function|string} easing
  * @returns {object} Deferred object.
  */
	module.exports = (duration, step, easing) => {
		const startedAt = now();

		if (!easing) {
			easing = EASINGS.easeInOut;
		} else if (typeof easing === 'string') {
			easing = EASINGS[easing];
		}

		let canceledFlg = false;
		const createAnim = (resolve, reject) => {
			const anim = () => {
				const point = now() - startedAt;
				if (canceledFlg) {
					//cancel
					if (reject) {
						reject();
					}
				} else if (point >= duration) {
					//end
					step(1);
					if (resolve) {
						resolve();
					}
				} else {
					step(easing(point / duration));

					raf(anim, 1);
				}
			};
			return anim;
		};
		const cancel = () => {
			canceledFlg = true;
		};
		if (window.Promise) {
			const result = new window.Promise((resolve, reject) => {
				const anim = createAnim(resolve, reject);
				step(0);
				anim();
			});
			result.cancel = cancel;
			return result;
		} else {
			const anim = createAnim(() => {}, () => {});
			step(0);
			anim();
			return {
				cancel
			};
		}
	};
}

/***/ }),

/***/ "./internal/calc.js":
/*!**************************!*\
  !*** ./internal/calc.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function parse(calcStr) {
	function replacer(match, num, unit) {
		switch (unit) {
			case '%':
				return `(${num} * this.full / 100)`;
			case 'em':
				return `(${num} * this.em)`;
			case 'px':
				return `(${num})`;
			default:
				throw new Error('calc error');
		}
	}
	const script = calcStr.replace(/^calc\((.*)\)$/, '$1').replace(/(\d+)([A-Za-z%]+)/g, replacer).replace(/(\d*\.\d+)([A-Za-z%]+)/g, replacer);
	return {
		eval(context) {
			return (() => {
				function calc(v) {
					// eslint-disable-line no-unused-vars
					return v;
				}
				return eval(script); // eslint-disable-line no-eval
			}).call(context);
		}
	};
}
function toPx(value, context) {
	if (/^calc\(.*\)$/.test(value)) {
		return parse(value).eval(context);
	}
	if (/^[+-]?\d+\.?\d*%$/.test(value)) {
		return context.full * value.substr(0, value.length - 1) / 100;
	}
	if (/^[+-]?\d+\.?\d*px$/.test(value)) {
		return value.substr(0, value.length - 2) - 0;
	}
	if (/^[+-]?\d+\.?\d*em$/.test(value)) {
		return context.em * (value.substr(0, value.length - 2) - 0);
	}
	return value - 0;
}

module.exports = {
	parse,
	toPx(value, context) {
		if (typeof value === 'string') {
			return toPx(value.trim(), context);
		}
		return value - 0;
	}
};

/***/ }),

/***/ "./internal/canvases.js":
/*!******************************!*\
  !*** ./internal/canvases.js ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{

	function calcBasePosition(ctx, rect, {
		offset = 0,
		padding: {
			left: paddingLeft = 0,
			right: paddingRight = 0,
			top: paddingTop = 0,
			bottom: paddingBottom = 0
		} = {}
	} = {}) {
		// const textAlign = ctx.textAlign || 'left';
		// const textBaseline = ctx.textBaseline || 'middle';
		// ctx.textAlign = textAlign;
		// ctx.textBaseline = textBaseline;

		// let x = rect.left + offset + paddingLeft;
		// if (textAlign === 'right' || textAlign === 'end') {
		// 	x = rect.right - offset - paddingRight;
		// } else if (textAlign === 'center') {
		// 	x = rect.left + ((rect.width + paddingLeft - paddingRight) / 2);
		// }
		// let y = rect.top + offset;
		// if (textBaseline === 'bottom' || textBaseline === 'alphabetic' || textBaseline === 'ideographic') {
		// 	y = rect.bottom - offset;
		// } else if (textBaseline === 'middle') {
		// 	y = rect.top + (rect.height / 2);
		// }
		// return {x, y};
		return calcStartPosition(ctx, rect, 0, 0, {
			offset,
			padding: {
				left: paddingLeft,
				right: paddingRight,
				top: paddingTop,
				bottom: paddingBottom
			}
		});
	}
	function calcStartPosition(ctx, rect, width, height, {
		offset = 0,
		padding: {
			left: paddingLeft = 0,
			right: paddingRight = 0,
			top: paddingTop = 0,
			bottom: paddingBottom = 0
		} = {}
	} = {}) {
		const textAlign = ctx.textAlign || 'left';
		const textBaseline = ctx.textBaseline || 'middle';
		ctx.textAlign = textAlign;
		ctx.textBaseline = textBaseline;

		let x = rect.left + offset + paddingLeft;
		if (textAlign === 'right' || textAlign === 'end') {
			x = rect.right - width - offset - paddingRight;
		} else if (textAlign === 'center') {
			x = rect.left + (rect.width - width + paddingLeft - paddingRight) / 2;
		}
		let y = rect.top + offset + paddingTop;
		if (textBaseline === 'bottom' || textBaseline === 'alphabetic' || textBaseline === 'ideographic') {
			y = rect.bottom - height - offset - paddingBottom;
		} else if (textBaseline === 'middle') {
			y = rect.top + (rect.height - height + paddingTop - paddingBottom) / 2;
		}
		return { x, y };
	}

	module.exports = {
		calcBasePosition,
		calcStartPosition
	};
}

/***/ }),

/***/ "./internal/color.js":
/*!***************************!*\
  !*** ./internal/color.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const rgbMap = {};
	function styleColorToRGB(color) {
		const dummy = document.createElement('div');
		const { style } = dummy;
		style.color = color;
		style.position = 'fixed';
		style.height = '1px';
		style.width = '1px';
		style.opacity = 0;
		document.body.appendChild(dummy);
		const { color: styleColor } = document.defaultView.getComputedStyle(dummy, '');
		document.body.removeChild(dummy);
		return colorToRGB0(styleColor);
	}

	function hexToNum(hex) {
		return parseInt(hex, 16);
	}
	function createRGB(r, g, b, a = 1) {
		return { r, g, b, a };
	}
	function tripleHexToRGB({ 1: r, 2: g, 3: b }) {
		return createRGB(hexToNum(r + r), hexToNum(g + g), hexToNum(b + b));
	}
	function sextupleHexToRGB({ 1: r1, 2: r2, 3: g1, 4: g2, 5: b1, 6: b2 }) {
		return createRGB(hexToNum(r1 + r2), hexToNum(g1 + g2), hexToNum(b1 + b2));
	}

	function testRGB({ r, g, b, a }) {
		return 0 <= r && r <= 255 && 0 <= g && g <= 255 && 0 <= b && b <= 255 && 0 <= a && a <= 1;
	}
	function rateToByte(r) {
		return Math.ceil(r * 255 / 100);
	}
	function colorToRGB0(color) {
		if (color.match(/^#[0-9a-f]{3}$/i)) {
			return tripleHexToRGB(color);
		}
		if (color.match(/^#[0-9a-f]{6}$/i)) {
			return sextupleHexToRGB(color);
		}
		let ret = color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i);
		if (ret) {
			const rgb = createRGB(ret[1] - 0, ret[2] - 0, ret[3] - 0);
			if (testRGB(rgb)) {
				return rgb;
			}
		}
		ret = color.match(/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d(\.\d)?)\s*\)$/i);
		if (ret) {
			const rgb = createRGB(ret[1] - 0, ret[2] - 0, ret[3] - 0, ret[4] - 0);
			if (testRGB(rgb)) {
				return rgb;
			}
		}
		ret = color.match(/^rgb\(\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d{1,3}(\.\d)?)%\s*\)$/i);
		if (ret) {
			const rgb = createRGB(rateToByte(ret[1]), rateToByte(ret[3]), rateToByte(ret[5]));
			if (testRGB(rgb)) {
				return rgb;
			}
		}
		ret = color.match(/^rgba\(\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d(\.\d)?)\s*\)$/i);
		if (ret) {
			const rgb = createRGB(rateToByte(ret[1]), rateToByte(ret[3]), rateToByte(ret[5]), ret[7] - 0);
			if (testRGB(rgb)) {
				return rgb;
			}
		}
		return null;
	}
	function colorToRGB(color) {
		if (typeof color !== 'string') {
			return createRGB(0, 0, 0, 0);
		}
		color = color.toLowerCase().trim();
		if (rgbMap[color]) {
			return rgbMap[color];
		}
		return colorToRGB0(color) || (rgbMap[color] = styleColorToRGB(color));
	}

	module.exports = {
		colorToRGB
	};
}

/***/ }),

/***/ "./internal/com.js":
/*!*************************!*\
  !*** ./internal/com.js ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	'Array_isArray': window.Array.isArray
};

/***/ }),

/***/ "./internal/dom.js":
/*!*************************!*\
  !*** ./internal/dom.js ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Array_dot_isArray) {

const { isDef } = __webpack_require__(/*! ./utils */ "./internal/utils.js");

function createElement(tagName, { classList, text, html } = {}) {
	const element = document.createElement(tagName);
	if (classList) {
		if (__webpack_provided_Array_dot_isArray(classList)) {
			element.classList.add(...classList);
		} else {
			element.classList.add(classList);
		}
	}
	if (text) {
		element.textContent = text;
	} else if (html) {
		element.innerHTML = html;
	}
	return element;
}

function empty(dom) {
	let c;
	while (c = dom.firstChild) {
		dom.removeChild(c);
	}
}
function isNode(arg) {
	return !!(arg.nodeType && arg.nodeName);
}
function toNode(arg) {
	if (isNode(arg)) {
		return arg;
	}
	const dom = createElement('div', { html: arg });
	return Array.prototype.slice.call(dom.childNodes);
}
function toNodeList(arg) {
	if (window.jQuery && arg instanceof window.jQuery) {
		return Array.prototype.map.call(arg, a => a);
	}
	if (__webpack_provided_Array_dot_isArray(arg)) {
		return arg.map(toNode);
	}
	return [toNode(arg)];
}

function appendHtml(dom, inner) {
	toNodeList(inner).forEach(node => {
		dom.appendChild(node);
	});
}

function disableFocus(el) {
	el.dataset.disableBeforeTabIndex = el.tabIndex;
	el.tabIndex = -1;
	Array.prototype.slice.call(el.children, 0).forEach(disableFocus);
}
function enableFocus(el) {
	if ('disableBeforeTabIndex' in el.dataset) {
		el.tabIndex = el.dataset.disableBeforeTabIndex;
	}
	Array.prototype.slice.call(el.children, 0).forEach(enableFocus);
}

function isFocusable(el) {
	return isDef(el.tabIndex) && el.tabIndex > -1;
}
function findPrevSiblingFocusable(el) {
	let n = el.previousSibling;
	while (n && !isFocusable(n)) {
		n = n.previousSibling;
	}
	return n;
}
function findNextSiblingFocusable(el) {
	let n = el.nextSibling;
	while (n && !isFocusable(n)) {
		n = n.nextSibling;
	}
	return n;
}

module.exports = {
	createElement,
	empty,
	isNode,
	toNode,
	toNodeList,
	appendHtml,
	disableFocus,
	enableFocus,
	isFocusable,
	findPrevSiblingFocusable,
	findNextSiblingFocusable
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @/internal/com.js */ "./internal/com.js")["Array_isArray"]))

/***/ }),

/***/ "./internal/fonts.js":
/*!***************************!*\
  !*** ./internal/fonts.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const loads = {};
	const legacy = !document.fonts;
	const load = legacy ? function (font, testStr, callback) {
		//for legacy(IE)
		if (loads[font + ' @ ' + testStr]) {
			callback();
			return;
		}
		__webpack_require__(/*! ./legacy/fontwatch/FontWatchRunner */ "./internal/legacy/fontwatch/FontWatchRunner.js").load(font, testStr, () => {
			loads[font + ' @ ' + testStr] = true;
			callback();
		}, () => {
			loads[font + ' @ ' + testStr] = true;
			callback();
		});
	} : function (font, testStr, callback) {
		if (loads.all || loads[font]) {
			callback();
			return;
		}
		document.fonts.ready.then(() => {
			loads.all = true;
		});
		document.fonts.load(font).then(() => {
			loads[font] = true;
			callback();
		});
	};
	const check = legacy ? function (font, testStr) {
		//for legacy(IE)
		if (loads[font + ' @ ' + testStr]) {
			return true;
		}
		load(font, testStr, () => {});
		return false;
	} : function (font, testStr) {
		if (loads.all || loads[font]) {
			return true;
		}
		if (!document.fonts.check(font)) {
			load(font, testStr, () => {});
			return false;
		}
		return true;
	};

	module.exports = {
		check,
		load
	};
}

/***/ }),

/***/ "./internal/hiDPI.js":
/*!***************************!*\
  !*** ./internal/hiDPI.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EventHandler = __webpack_require__(/*! ./EventHandler */ "./internal/EventHandler.js");
const handler = new EventHandler();

let ratio;
function setRatio() {
	ratio = Math.ceil(window.devicePixelRatio || 1);
	if (ratio > 1 && ratio % 2 !== 0) {
		ratio += 1;
	}
}
setRatio();
handler.on(window, 'resize', setRatio);

module.exports = {
	transform(canvas) {
		const ctx = canvas.getContext('2d');

		const getAttribute = canvas.getAttribute;
		canvas.getAttribute = function (name, ...args) {
			let result = getAttribute.call(this, name, ...args);
			if (name === 'width' || name === 'height') {
				result /= ratio;
			}
			return result;
		};
		const setAttribute = canvas.setAttribute;
		canvas.setAttribute = function (name, val, ...args) {
			const wh = name === 'width' || name === 'height';
			if (wh) {
				val *= ratio;
			}
			const result = setAttribute.call(this, name, val, ...args);
			if (wh) {
				ctx.scale(ratio, ratio);
			}
			return result;
		};

		Object.defineProperty(canvas, 'width', {
			get() {
				return canvas.getAttribute('width');
			},
			set: val => {
				canvas.setAttribute('width', Math.floor(val));
			},
			configurable: true,
			enumerable: true
		});
		Object.defineProperty(canvas, 'height', {
			get() {
				return canvas.getAttribute('height');
			},
			set: val => {
				canvas.setAttribute('height', Math.floor(val));
			},
			configurable: true,
			enumerable: true
		});
		const drawImage = ctx.drawImage;
		ctx.drawImage = function (img, ...args) {
			if (img !== canvas || ratio === 1) {
				return drawImage.call(this, img, ...args);
			}
			this.save();
			try {
				this.scale(1 / ratio, 1 / ratio);
				if (args.length > 4) {
					args[4] = args[4] * ratio;
					args[5] = args[5] * ratio;
				} else {
					args[0] = args[0] * ratio;
					args[1] = args[1] * ratio;
				}
				return drawImage.call(this, img, ...args);
			} finally {
				this.restore();
			}
		};

		return canvas;
	}
};

/***/ }),

/***/ "./internal/icons.js":
/*!***************************!*\
  !*** ./internal/icons.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Array_dot_isArray) {

const { isDef } = __webpack_require__(/*! ./utils */ "./internal/utils.js");

const ICON_PROP_KEYS = ['content', 'font', 'color', 'className', 'isLiga', 'width', 'src', 'svg', 'name', 'path'];

function quote(name) {
	const quoted = [];
	const split = name.split(/,\s*/);
	for (let i = 0; i < split.length; i++) {
		const part = split[i].replace(/['"]/g, '');
		if (part.indexOf(' ') === -1 && !/^\d/.test(part)) {
			quoted.push(part);
		} else {
			quoted.push('\'' + part + '\'');
		}
	}
	return quoted.join(',');
}

const doms = {};
const props = {};

function getIconProps(tagName, className) {
	const tagProps = props[tagName] || (props[tagName] = {});
	if (tagProps[className]) {
		return tagProps[className];
	}
	const dom = doms[tagName] || (doms[tagName] = document.createElement(tagName));
	dom.className = className;
	document.body.appendChild(dom);
	try {
		const beforeStyle = document.defaultView.getComputedStyle(dom, '::before');
		let content = beforeStyle.getPropertyValue('content');
		if (content.length >= 3 && (content[0] === '"' || content[0] === '\'')) {
			if (content[0] === content[content.length - 1]) {
				content = content.substr(1, content.length - 2);
			}
		}
		let font = beforeStyle.getPropertyValue('font');
		if (!font) {
			font = beforeStyle.getPropertyValue('font-style') + ' ' + beforeStyle.getPropertyValue('font-variant') + ' ' + beforeStyle.getPropertyValue('font-weight') + ' ' + beforeStyle.getPropertyValue('font-size') + '/' + beforeStyle.getPropertyValue('line-height') + ' ' + quote(beforeStyle.getPropertyValue('font-family'));
		}
		const color = beforeStyle.getPropertyValue('color');
		const width = dom.clientWidth;
		const isLiga = (beforeStyle.getPropertyValue('font-feature-settings') || '').indexOf('liga') > -1;

		return tagProps[className] = {
			content,
			font,
			color,
			width,
			isLiga
		};
	} finally {
		document.body.removeChild(dom);
	}
}

function toPropArray(prop, count) {
	const result = [];
	if (__webpack_provided_Array_dot_isArray(prop)) {
		result.push(...prop);
		for (let i = prop.length; i < count; i++) {
			result.push(null);
		}
	} else {
		for (let i = 0; i < count; i++) {
			result.push(prop);
		}
	}
	return result;
}

function toSimpleArray(iconProps) {
	if (!iconProps) {
		return iconProps;
	} else if (__webpack_provided_Array_dot_isArray(iconProps)) {
		return iconProps;
	}

	const workData = {};

	let count = 0;
	ICON_PROP_KEYS.forEach(k => {
		if (iconProps[k]) {
			if (__webpack_provided_Array_dot_isArray(iconProps[k])) {
				count = Math.max(count, iconProps[k].length);
			} else {
				count = Math.max(count, 1);
			}
		}
	});

	ICON_PROP_KEYS.forEach(k => {
		workData[k] = toPropArray(iconProps[k], count);
	});

	const result = [];
	for (let i = 0; i < count; i++) {
		const data = {};
		ICON_PROP_KEYS.forEach(k => {
			data[k] = workData[k][i];
		});
		result.push(data);
	}
	return result;
}

function normarize(iconProps) {
	const data = {};
	for (const k in iconProps) {
		if (k === 'className') {
			continue;
		}
		data[k] = iconProps[k];
	}
	if (iconProps.className) {
		const prop = getIconProps(iconProps.tagName || 'i', iconProps.className);
		for (const k in prop) {
			if (!isDef(iconProps[k])) {
				data[k] = prop[k];
			}
		}
	}
	return data;
}

module.exports = {
	toNormarizeArray(iconProps) {
		const icons = toSimpleArray(iconProps);
		if (!icons) {
			return icons;
		}
		return icons.map(icon => normarize(icon));
	},
	get iconPropKeys() {
		return ICON_PROP_KEYS;
	},
	getIconProps
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @/internal/com.js */ "./internal/com.js")["Array_isArray"]))

/***/ }),

/***/ "./internal/imgs.js":
/*!**************************!*\
  !*** ./internal/imgs.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { then } = __webpack_require__(/*! ./utils */ "./internal/utils.js");
const LRUCache = __webpack_require__(/*! ./LRUCache */ "./internal/LRUCache.js");

const allCache = {};

function isDataUrl(url) {
	return url.search(/^(data:)/) !== -1;
}

function loadImage(src) {
	if (!window.Promise) {
		console.error('Promise is not loaded. load Promise before this process.');
		return {
			then() {
				return this;
			}
		};
	}
	const img = new Image();
	const result = new window.Promise(resolve => {
		img.onload = () => {
			resolve(img);
		};
	});
	img.onerror = e => {
		const url = src.length > 200 ? `${src.substr(0, 200)}...` : src;
		console.warn(`cannot load: ${url}`);
		throw new Error(`IMAGE LOAD ERROR: ${url}`);
	};
	img.src = isDataUrl(src) ? src : `${src}?${Date.now()}`;
	return result;
}

function getCacheOrLoad0(cache, src) {
	return then(src, src => {
		const c = cache.get(src);
		if (c) {
			return c;
		}
		const result = loadImage(src).then(img => {
			cache.put(src, img);
			return img;
		});
		cache.put(src, result);
		return result;
	});
}

function getCacheOrLoad(cacheName, cacheSize, src) {
	const cache = allCache[cacheName] || (allCache[cacheName] = new LRUCache(cacheSize));
	return getCacheOrLoad0(cache, src);
}

module.exports = {
	loadImage,
	getCacheOrLoad
};

/***/ }),

/***/ "./internal/legacy/canvas/Path2D.js":
/*!******************************************!*\
  !*** ./internal/legacy/canvas/Path2D.js ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PathCommandsParser = __webpack_require__(/*! ./PathCommandsParser */ "./internal/legacy/canvas/PathCommandsParser.js");
const parser = new PathCommandsParser();

class Path2D {
	constructor(arg) {
		this._ops = [];
		['closePath', 'moveTo', 'lineTo', 'bezierCurveTo', 'quadraticCurveTo', 'arc', 'rect'].forEach(name => {
			this[name] = (...args) => {
				this._ops.push({ op: name, args });
			};
		});
		if (arg === undefined) {
			return;
		}
		if (typeof arg === 'string') {
			try {
				this._ops = parser.parse(arg);
			} catch (e) {
				throw e;
			}
		} else if (arg.hasOwnProperty('_ops')) {
			this._ops = [...this._ops];
		} else {
			throw new Error(`Error: ${typeof arg} is not a valid argument to Path`);
		}
	}
}

const CanvasRenderingContext2D = window.CanvasRenderingContext2D;

const originalFill = CanvasRenderingContext2D.prototype.fill;

CanvasRenderingContext2D.prototype.fill = function (...args) {
	if (args[0] instanceof Path2D) {
		const path = args[0];
		this.beginPath();
		path._ops.forEach(op => {
			this[op.op](...op.args);
		});
		originalFill.apply(this, Array.prototype.slice.call(args, 1));
	} else {
		originalFill.apply(this, args);
	}
};

module.exports = Path2D;

/***/ }),

/***/ "./internal/legacy/canvas/PathCommands.js":
/*!************************************************!*\
  !*** ./internal/legacy/canvas/PathCommands.js ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function mag(v) {
	return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
}

function dot(u, v) {
	return u[0] * v[0] + u[1] * v[1];
}

function ratio(u, v) {
	return dot(u, v) / (mag(u) * mag(v));
}

function clamp(value, min, max) {
	return Math.min(Math.max(value, min), max);
}

function angle(u, v) {
	let sign = 1.0;
	if (u[0] * v[1] - u[1] * v[0] < 0) {
		sign = -1.0;
	}
	return sign * Math.acos(clamp(ratio(u, v)), -1, 1);
}

function rotClockwise(v, angle) {
	const cost = Math.cos(angle);
	const sint = Math.sin(angle);
	return [cost * v[0] + sint * v[1], -1 * sint * v[0] + cost * v[1]];
}

function rotCounterClockwise(v, angle) {
	const cost = Math.cos(angle);
	const sint = Math.sin(angle);
	return [cost * v[0] - sint * v[1], sint * v[0] + cost * v[1]];
}

function midPoint(u, v) {
	return [(u[0] - v[0]) / 2.0, (u[1] - v[1]) / 2.0];
}

function meanVec(u, v) {
	return [(u[0] + v[0]) / 2.0, (u[1] + v[1]) / 2.0];
}

function pointMul(u, v) {
	return [u[0] * v[0], u[1] * v[1]];
}

function scale(c, v) {
	return [c * v[0], c * v[1]];
}

function sum(u, v) {
	return [u[0] + v[0], u[1] + v[1]];
}
// Convert an SVG elliptical arc to a series of canvas commands.
//
// x1, y1, x2, y2: start and stop coordinates of the ellipse.
// rx, ry: radii of the ellipse.
// phi: rotation of the ellipse.
// fA: large arc flag.
// fS: sweep flag.
function ellipseFromEllipticalArc(ctx, x1, y1, rx, ry, phi, fA, fS, x2, y2) {
	// Convert from endpoint to center parametrization, as detailed in:
	//   http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
	if (rx === 0 || ry === 0) {
		ctx.lineTo(x2, x1);
		return;
	}
	phi = phi * (Math.PI / 180.0);
	rx = Math.abs(rx);
	ry = Math.abs(ry);
	const xPrime = rotClockwise(midPoint(x1, x2), phi); // F.6.5.1
	const xPrime2 = pointMul(xPrime, xPrime);
	let rx2 = Math.pow(rx, 2);
	let ry2 = Math.pow(ry, 2);

	const lambda = Math.sqrt(xPrime2[0] / rx2 + xPrime2[1] / ry2);
	if (lambda > 1) {
		rx *= lambda;
		ry *= lambda;
		rx2 = Math.pow(rx, 2);
		ry2 = Math.pow(ry, 2);
	}
	let factor = Math.sqrt(Math.abs(rx2 * ry2 - rx2 * xPrime2[1] - ry2 * xPrime2[0]) / (rx2 * xPrime2[1] + ry2 * xPrime2[0]));
	if (fA === fS) {
		factor *= -1.0;
	}
	const cPrime = scale(factor, [rx * xPrime[1] / ry, -ry * xPrime[0] / rx]); // F.6.5.2
	const c = sum(rotCounterClockwise(cPrime, phi), meanVec(x1, x2)); // F.6.5.3
	const x1UnitVector = [(xPrime[0] - cPrime[0]) / rx, (xPrime[1] - cPrime[1]) / ry];
	const x2UnitVector = [(-1.0 * xPrime[0] - cPrime[0]) / rx, (-1.0 * xPrime[1] - cPrime[1]) / ry];
	const theta = angle([1, 0], x1UnitVector); // F.6.5.5
	const deltaTheta = angle(x1UnitVector, x2UnitVector); // F.6.5.6
	const start = theta;
	const end = theta + deltaTheta;
	ctx.save();
	ctx.translate(c[0], c[1]);
	ctx.rotate(phi);
	ctx.scale(rx, ry);
	ctx.arc(0, 0, 1, start, end, 1 - fS);
	ctx.restore();
}

class PathCommands {
	constructor(ctx) {
		let lMx;
		let lMy;
		let lx = 0;
		let ly = 0;
		let reflected;
		let lastCommand = '';
		function makeReflected() {
			if ('CcSsQqTt'.indexOf(lastCommand) < 0) {
				return { x: lx, y: ly };
			}
			return reflected;
		}

		this.M = (px, py) => {
			ctx.moveTo(px, py);
			lMx = px;
			lMy = py;
			lx = px;
			ly = py;
			lastCommand = 'M';
			return this;
		};
		this.m = (px, py) => this.M(px + lx, py + ly);
		this.L = (px, py) => {
			ctx.lineTo(px, py);
			lx = px;
			ly = py;
			lastCommand = 'L';
			return this;
		};
		this.l = (px, py) => this.L(px + lx, py + ly);
		this.H = px => this.L(px, ly);
		this.h = px => this.H(px + lx);
		this.V = py => this.L(lx, py);
		this.v = py => this.V(py + ly);
		this.Z = () => {
			ctx.closePath();
			lx = lMx;
			ly = lMy;
			lastCommand = 'Z';
			return this;
		};
		this.z = () => this.Z();
		//C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)
		this.C = (cp1x, cp1y, cp2x, cp2y, px, py) => {
			ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, px, py);
			lx = px;
			ly = py;
			reflected = {
				x: 2 * px - cp2x,
				y: 2 * py - cp2y
			};
			lastCommand = 'C';
			return this;
		};
		this.c = (cp1x, cp1y, cp2x, cp2y, px, py) => this.C(cp1x + lx, cp1y + ly, cp2x + lx, cp2y + ly, px + lx, py + ly);
		//S x2 y2, x y (or s dx2 dy2, dx dy)
		this.S = (cpx, cpy, px, py) => {
			const { x: cp1x, y: cp1y } = makeReflected(lastCommand);
			return this.C(cp1x, cp1y, cpx, cpy, px, py);
		};
		this.s = (cpx, cpy, px, py) => this.S(cpx + lx, cpy + ly, px + lx, py + ly);
		//Q x1 y1, x y (or q dx1 dy1, dx dy)
		this.Q = (cpx, cpy, px, py) => {
			ctx.quadraticCurveTo(cpx, cpy, px, py);
			lx = px;
			ly = py;
			reflected = {
				x: 2 * px - cpx,
				y: 2 * py - cpy
			};
			lastCommand = 'Q';
			return this;
		};
		this.q = (cpx, cpy, px, py) => this.Q(cpx + lx, cpy + ly, px + lx, py + ly);
		//T x y (or t dx dy)
		this.T = (px, py) => {
			const { x: cpx, y: cpy } = makeReflected();
			return this.Q(cpx, cpy, px, py);
		};
		this.t = (px, py) => this.T(px + lx, py + ly);
		//A rx ry x-axis-rotation large-arc-flag sweep-flag x y
		this.A = (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px, py) => {
			const x1 = lx;
			const y1 = ly;

			ellipseFromEllipticalArc(ctx, x1, y1, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px, py);

			lx = px;
			ly = py;
			lastCommand = 'A';
			return this;
		};
		//a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
		this.a = (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px, py) => this.A(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px + lx, py + ly);
	}
}

module.exports = PathCommands;

/***/ }),

/***/ "./internal/legacy/canvas/PathCommandsParser.js":
/*!******************************************************!*\
  !*** ./internal/legacy/canvas/PathCommandsParser.js ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PathCommands = __webpack_require__(/*! ./PathCommands */ "./internal/legacy/canvas/PathCommands.js");

function pathTokens(d) {
	let idx = 0;
	return {
		next() {
			let s = '';
			while (d.length > idx) {
				const c = d[idx];
				idx++;
				if (' ,\n\r\t'.indexOf(c) > -1) {
					if (s) {
						return s;
					}
				} else {
					const type = '.+-1234567890'.indexOf(c) > -1 ? 'num' : 'str';
					if (type === 'str') {
						if (s) {
							idx--;
							return s;
						}
						return c;
					}
					if ('-+'.indexOf(c) > -1) {
						if (s) {
							idx--;
							return s;
						}
					}
					if (c === '.') {
						if (s.indexOf('.') > -1) {
							idx--;
							return s;
						}
					}
					s += c;
				}
			}
			return s || null;
		}
	};
}

function command(builder, cmd, argsProvider) {
	if (cmd.toUpperCase() === 'M' || cmd.toUpperCase() === 'L' || cmd.toUpperCase() === 'T') {
		builder.command(cmd, argsProvider.next(), argsProvider.next());
		return cmd === 'M' ? 'L' : cmd === 'm' ? 'l' : cmd;
	} else if (cmd.toUpperCase() === 'H' || cmd.toUpperCase() === 'V') {
		builder.command(cmd, argsProvider.next());
		return cmd;
	} else if (cmd.toUpperCase() === 'Z') {
		builder.command(cmd);
		return cmd;
	} else if (cmd.toUpperCase() === 'C') {
		builder.command(cmd, argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next());
		return cmd;
	} else if (cmd.toUpperCase() === 'S' || cmd.toUpperCase() === 'Q') {
		builder.command(cmd, argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next());
		return cmd;
	} else if (cmd.toUpperCase() === 'A') {
		builder.command(cmd, argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next());
		return cmd;
	} else {
		// https://developer.mozilla.org/ja/docs/Web/SVG/Tutorial/Paths
		console.warn('unsupported:' + cmd);
	}
	return null;
}

const canvasOperations = window.CanvasRenderingContext2D ? Object.keys(window.CanvasRenderingContext2D.prototype) : ['save', 'restore', 'beginPath', 'closePath', 'moveTo', 'lineTo', 'bezierCurveTo', 'quadraticCurveTo', 'arc', 'arcTo', 'ellipse', 'rect', 'translate', 'rotate', 'scale'];

class PathCommandsParser {
	constructor() {
		this._commands = new PathCommands(this);
		canvasOperations.forEach(op => {
			this[op] = (...args) => {
				this._ops.push({
					op,
					args
				});
			};
		});
	}
	command(name, ...args) {
		args = args || [];
		for (let i = 0; i < args.length; i++) {
			args[i] = args[i] - 0;
		}
		this._commands[name](...args);
	}
	parse(d) {
		const ops = this._ops = [];
		const tokens = pathTokens(d);
		try {
			let cmd;
			let subsequentCommand;
			while (cmd = tokens.next()) {
				if (!isNaN(cmd - 0)) {
					let fst = true;
					const argsProvider = {
						next() {
							if (fst) {
								fst = false;
								return cmd;
							}
							return tokens.next();
						}
					};
					subsequentCommand = command(this, subsequentCommand, argsProvider);
				} else {
					subsequentCommand = command(this, cmd, tokens);
				}
			}
		} catch (e) {
			console.log('Error: ' + d);
			throw e;
		}
		return ops;
	}
}

module.exports = PathCommandsParser;

/***/ }),

/***/ "./internal/legacy/fontwatch/FontRuler.js":
/*!************************************************!*\
  !*** ./internal/legacy/fontwatch/FontRuler.js ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//see https://github.com/typekit/webfontloader

function computeStyle(font) {
	return [{
		display: 'block',
		position: 'absolute',
		top: '-9999px',
		left: '-9999px',
		width: 'auto',
		height: 'auto',
		margin: '0',
		padding: '0',
		'white-space': 'nowrap',
		font
	}, {
		'font-variant': 'normal',
		'font-size': '300px',
		'font-style': 'normal',
		'font-weight': '400',
		'line-height': 'normal'
	}];
}

class FontRuler {
	constructor(font, testStr) {
		const e = document.createElement('span');
		e.setAttribute('aria-hidden', 'true');
		e.textContent = testStr || 'BESbswy';

		computeStyle(font).forEach(style => {
			for (const key in style) {
				e.style[key] = style[key];
			}
		});
		document.body.appendChild(e);
		this.el_ = e;
	}
	getWidth() {
		return this.el_.offsetWidth;
	}
	remove() {
		document.body.removeChild(this.el_);
	}
}

module.exports = FontRuler;

/***/ }),

/***/ "./internal/legacy/fontwatch/FontWatchRunner.js":
/*!******************************************************!*\
  !*** ./internal/legacy/fontwatch/FontWatchRunner.js ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//see https://github.com/typekit/webfontloader

//http://defghi1977.html.xdomain.jp/tech/canvasMemo/canvasMemo.htm

const FontRuler = __webpack_require__(/*! ./FontRuler */ "./internal/legacy/fontwatch/FontRuler.js");

const LastResortFonts = {
	SERIF: 'serif',
	SANS_SERIF: 'sans-serif'
};

const watchRunners = {};

class FontWatchRunner {
	static load(font, testStr, activeCallback, inactiveCallback) {
		const c = watchRunners[font] || (watchRunners[font] = {});
		testStr = testStr + '';
		let runner;
		if (c[testStr]) {
			runner = c[testStr];
		} else {
			runner = c[testStr] = new FontWatchRunner(font, testStr);
		}
		runner.then(activeCallback, inactiveCallback);
	}
	constructor(font, testStr) {
		this.activeCallbacks = [];
		this.inactiveCallbacks = [];
		this.status = null;
		this.lastResortWidths_ = {};

		this.fontRulerA_ = new FontRuler(font + ',' + LastResortFonts.SERIF, testStr);
		this.fontRulerB_ = new FontRuler(font + ',' + LastResortFonts.SANS_SERIF, testStr);
		const lastResortRulerA = new FontRuler('4px ' + LastResortFonts.SERIF, testStr);
		const lastResortRulerB = new FontRuler('4px ' + LastResortFonts.SANS_SERIF, testStr);

		//start
		this.lastResortWidths_[LastResortFonts.SERIF] = lastResortRulerA.getWidth();
		this.lastResortWidths_[LastResortFonts.SANS_SERIF] = lastResortRulerB.getWidth();

		lastResortRulerA.remove();
		lastResortRulerB.remove();

		this.started_ = Date.now();

		this.check_();
	}
	then(activeCallback, inactiveCallback) {
		if (this.status) {
			if (this.status !== 'ng') {
				activeCallback();
			} else {
				inactiveCallback();
			}
		} else {
			this.activeCallbacks.push(activeCallback);
			this.inactiveCallbacks.push(inactiveCallback);
		}
	}
	check_() {
		const widthA = this.fontRulerA_.getWidth();
		const widthB = this.fontRulerB_.getWidth();

		if (this.isFallbackFont_(widthA, widthB) || this.isLastResortFont_(widthA, widthB)) {
			if (Date.now() - this.started_ >= 3000) {
				// timeout
				if (this.isLastResortFont_(widthA, widthB)) {
					this.finish_(this.activeCallbacks);
					this.status = 'ok';
				} else {
					this.finish_(this.inactiveCallbacks);
					this.status = 'ng';
				}
			} else {
				setTimeout(() => {
					this.check_();
				}, 50);
			}
		} else {
			this.finish_(this.activeCallbacks);
			this.status = 'ok';
		}
	}
	isFallbackFont_(a, b) {
		return this.widthMatches_(a, LastResortFonts.SERIF) && this.widthMatches_(b, LastResortFonts.SANS_SERIF);
	}
	widthsMatchLastResortWidths_(a, b) {
		for (const font in LastResortFonts) {
			if (LastResortFonts.hasOwnProperty(font)) {
				if (this.widthMatches_(a, LastResortFonts[font]) && this.widthMatches_(b, LastResortFonts[font])) {
					return true;
				}
			}
		}
		return false;
	}
	widthMatches_(width, lastResortFont) {
		return width === this.lastResortWidths_[lastResortFont];
	}
	isLastResortFont_(a, b) {
		return hasWebKitFallbackBug() && this.widthsMatchLastResortWidths_(a, b);
	}
	finish_(callbacks) {
		setTimeout(() => {
			this.fontRulerA_.remove();
			this.fontRulerB_.remove();
			callbacks.forEach(cb => cb());
		}, 0);
	}
}

let HAS_WEBKIT_FALLBACK_BUG = null;
function hasWebKitFallbackBug() {
	if (HAS_WEBKIT_FALLBACK_BUG === null) {
		const match = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);

		HAS_WEBKIT_FALLBACK_BUG = !!match && (parseInt(match[1], 10) < 536 || parseInt(match[1], 10) === 536 && parseInt(match[2], 10) <= 11);
	}
	return HAS_WEBKIT_FALLBACK_BUG;
}

module.exports = FontWatchRunner;

/***/ }),

/***/ "./internal/menu-items.js":
/*!********************************!*\
  !*** ./internal/menu-items.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Array_dot_isArray) {

function normalize(options) {
	if (!options) {
		return [];
	}
	if (__webpack_provided_Array_dot_isArray(options)) {
		return options;
	}
	if (typeof options === 'string') {
		return normalize(JSON.parse(options));
	}
	const result = [];
	for (const k in options) {
		result.push({
			value: k,
			caption: options[k]
		});
	}
	return result;
}

module.exports = {
	normalize
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @/internal/com.js */ "./internal/com.js")["Array_isArray"]))

/***/ }),

/***/ "./internal/path2DManager.js":
/*!***********************************!*\
  !*** ./internal/path2DManager.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getPath2D() {
	//return require('./legacy/canvas/Path2D');
	return window.Path2D || __webpack_require__(/*! ./legacy/canvas/Path2D */ "./internal/legacy/canvas/Path2D.js");
}

module.exports = {
	fill(module, ctx, x, y, w, h) {
		ctx.save();
		try {
			const { width, height } = module;
			const { ud: upsideDown, x: offsetX = 0, y: offsetY = 0 } = module;
			w = w || width;
			h = h || height;
			const xrate = w / width;
			const yrate = h / (upsideDown ? -height : height);
			x = x || 0;
			y = upsideDown ? (y || 0) + -height * yrate : y || 0;

			ctx.translate(x, y);
			ctx.scale(xrate, yrate);
			if (offsetX !== 0 || offsetY !== 0) {
				ctx.translate(offsetX, offsetY);
			}
			const Path2D = getPath2D();
			module.path2d = module.path2d || new Path2D(module.d);
			ctx.fill(module.path2d);
		} finally {
			ctx.restore();
		}
	},
	get Path2D() {
		return getPath2D();
	}
};

/***/ }),

/***/ "./internal/sort.js":
/*!**************************!*\
  !*** ./internal/sort.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const { isPromise } = __webpack_require__(/*! ./utils */ "./internal/utils.js");

	function wait(val) {
		return val.then(v => {
			if (isPromise(v)) {
				return wait(v);
			} else {
				return v;
			}
		});
	}
	function createArray(get, length) {
		const array = new Array(length);
		for (let i = 0; i < length; i++) {
			array[i] = get(i);
		}
		return array;
	}
	function createArrayPromise(get, getField, length) {
		return new Promise(resolve => {
			const plist = [];
			const array = new Array(length);
			for (let i = 0; i < length; i++) {
				const data = get(i);
				const record = {
					v: data,
					f: data
				};
				array[i] = record;
				if (isPromise(data)) {
					plist.push(wait(data).then(v => {
						record.v = v;
						record.f = v;
					}));
				}
			}
			Promise.all(plist).then(() => setArrayField(array, getField)).then(resolve);
		});
	}
	function setArrayField(array, getField) {
		if (!getField) {
			return Promise.resolve(array);
		}
		return new Promise(resolve => {
			const length = array.length;
			const plist = [];
			for (let i = 0; i < length; i++) {
				const record = array[i];
				record.f = getField(record.v);
				if (isPromise(record.f)) {
					plist.push(wait(record.f).then(v => {
						record.f = v;
					}));
				}
			}
			Promise.all(plist).then(() => resolve(array));
		});
	}
	const sort = {
		sort(get, set, length, compare, getField) {
			const old = createArray(get, length);
			if (getField) {
				old.sort((r1, r2) => compare(getField(r1), getField(r2)));
			} else {
				old.sort(compare);
			}
			for (let i = 0; i < length; i++) {
				set(i, old[i]);
			}
		},
		sortArray(array, compare) {
			Array.prototype.sort.call(array, compare);
		},
		sortPromise(get, set, length, compare, getField) {
			if (window.Promise) {
				return createArrayPromise(get, getField, length).then(array => {
					array.sort((r1, r2) => compare(r1.f, r2.f));
					for (let i = 0; i < length; i++) {
						set(i, array[i].v);
					}
				});
			} else {
				sort.sort(get, set, length, compare, getField);
				const dummyPromise = {
					then(fn) {
						fn();
						return dummyPromise;
					},
					catch() {
						return dummyPromise;
					}
				};
				return dummyPromise;
			}
		}
	};
	module.exports = sort;
}

/***/ }),

/***/ "./internal/style.css":
/*!****************************!*\
  !*** ./internal/style.css ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader?minimize!./style.css */ "../../node_modules/css-loader/index.js?minimize!./internal/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./internal/style.js":
/*!***************************!*\
  !*** ./internal/style.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	function getScrollBarWidth() {
		const dummy = document.createElement('div');
		const { style } = dummy;
		style.position = 'absolute';
		style.height = '9999px';
		style.width = 'calc(100vw - 100%)';
		style.opacity = 0;
		dummy.textContent = 'x';
		document.body.appendChild(dummy);
		const { width } = document.defaultView.getComputedStyle(dummy, '');
		document.body.removeChild(dummy);
		return parseInt(width, 10);
	}

	let SCROLLBAR_SIZE;
	const initDocument = () => {
		__webpack_require__(/*! ./style.css */ "./internal/style.css");
		SCROLLBAR_SIZE = getScrollBarWidth() || 10;
		const style = document.createElement('style');
		style.setAttribute('type', 'text/css');
		style.setAttribute('data-name', 'cheetah-grid');
		style.innerHTML = `
.cheetah-grid .grid-scroll-end-point {
	width: ${SCROLLBAR_SIZE}px;
	height: ${SCROLLBAR_SIZE}px;
}
.cheetah-grid > canvas {
	width: -webkit-calc(100% - ${SCROLLBAR_SIZE}px);
	width: calc(100% - ${SCROLLBAR_SIZE}px);
	height: -webkit-calc(100% - ${SCROLLBAR_SIZE}px);
	height: calc(100% - ${SCROLLBAR_SIZE}px);
}
		`;

		document.head.appendChild(style);
	};

	const style = {
		initDocument() {
			style.initDocument = () => {};
			initDocument();
		},
		getScrollBarSize() {
			return SCROLLBAR_SIZE;
		}
	};

	module.exports = style;
}

/***/ }),

/***/ "./internal/symbolManager.js":
/*!***********************************!*\
  !*** ./internal/symbolManager.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const Symbol = window.Symbol ? window.Symbol : (() => {
		let nextId = 1;
		return name => {
			const id = nextId++;
			if (name) {
				return ` $$$ ${name} - ${id} $$$ `;
			} else {
				return ` $$$ ${id} $$$ `;
			}
		};
	})();
	const mem = {};

	module.exports = {
		get(name) {
			if (name) {
				return mem[name] ? mem[name] : mem[name] = Symbol(name);
			} else {
				return Symbol();
			}
		},
		get PROTECTED_SYMBOL() {
			return this.get('protected');
		},
		get CHECK_COLUMN_STATE_ID() {
			return this.get('chkcol.stateID');
		},
		get BUTTON_COLUMN_STATE_ID() {
			return this.get('btncol.stateID');
		},
		get COLUMN_FADEIN_STATE_ID() {
			return this.get('col.fadein_stateID');
		},
		get BRANCH_GRAPH_COLUMN_STATE_ID() {
			return this.get('branch_graph_col.stateID');
		},
		get SMALL_DIALOG_INPUT_EDITOR_STATE_ID() {
			return this.get('small_dialog_input_editor.stateID');
		},
		get INLINE_INPUT_EDITOR_STATE_ID() {
			return this.get('inline_input_editor.stateID');
		},
		get INLINE_MENU_EDITOR_STATE_ID() {
			return this.get('inline_menu_editor.stateID');
		}
	};
}

/***/ }),

/***/ "./internal/utils.js":
/*!***************************!*\
  !*** ./internal/utils.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Array_dot_isArray) {

{
	let arrayFind;
	let arrayFindIndex;
	const array = {
		get find() {
			if (arrayFind) {
				return arrayFind;
			}
			if (Array.prototype.find) {
				arrayFind = (arr, predicate) => Array.prototype.find.call(arr, predicate);
			} else {
				arrayFind = (arr, predicate) => {
					const index = array.findIndex(arr, predicate);
					return index >= 0 ? arr[index] : undefined;
				};
			}
			return arrayFind;
		},
		get findIndex() {
			if (arrayFindIndex) {
				return arrayFindIndex;
			}
			if (Array.prototype.findIndex) {
				arrayFindIndex = (arr, predicate) => Array.prototype.findIndex.call(arr, predicate);
			} else {
				arrayFindIndex = (arr, predicate) => {
					const length = arr.length;
					for (let i = 0; i < length; i++) {
						const value = arr[i];
						if (predicate(value, i, arr)) {
							return i;
						}
					}
					return -1;
				};
			}
			return arrayFindIndex;
		}
	};

	function isDef(data) {
		return data !== null && typeof data !== 'undefined';
	}
	const ua = window.navigator.userAgent.toLowerCase();
	const IE = ua.match(/(msie)/) || ua.match(/trident/);
	const Chrome = ua.indexOf('chrome') > -1 && ua.indexOf('edge') === -1;
	const Firefox = ua.indexOf('firefox') > -1;

	function setReadonly(obj, name, value) {
		Object.defineProperty(obj, name, {
			enumerable: false,
			configurable: true,
			value
		});
	}

	function each(obj, fn) {
		for (const key in obj) {
			fn(obj[key], key, obj);
		}
	}

	function isObject(obj) {
		return obj === Object(obj);
	}

	function extend(...args) {
		const result = {};
		args.forEach(source => {
			for (const key in source) {
				Object.defineProperty(result, key, {
					get() {
						return source[key];
					},
					set(val) {
						source[key] = val;
					},
					configurable: true,
					enumerable: true
				});
			}
		});
		return result;
	}
	function isDescendantElement(root, target) {
		while (target.parentElement) {
			const p = target.parentElement;
			if (root === p) {
				return true;
			}
			target = p;
		}
		return false;
	}
	function applyChainSafe(obj, fn, ...names) {
		let value = obj;
		for (let i = 0; i < names.length && isDef(value); i++) {
			value = fn(value, names[i]);
		}
		return value;
	}
	function getChainSafe(obj, ...names) {
		return applyChainSafe(obj, (val, name) => val[name], ...names);
	}
	function getOrApply(value, ...args) {
		if (typeof value === 'function') {
			return value(...args);
		} else {
			return value;
		}
	}
	function endsWith(str, searchString, position) {
		const subjectString = str.toString();
		if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
			position = subjectString.length;
		}
		position -= searchString.length;
		const lastIndex = subjectString.lastIndexOf(searchString, position);
		return lastIndex !== -1 && lastIndex === position;
	}
	const isPromise = data => data && typeof data.then === 'function';
	const then = (result, callback) => isPromise(result) ? result.then(r => callback(r)) : callback(result);
	function getMouseButtons(e) {
		if (isDef(e.buttons)) {
			return e.buttons;
		}
		/*for legacy*/
		if (isDef(e.which)) {
			if (e.which === 3) {
				//right?
				return 4;
			}
			if (e.which === 2) {
				//middle?
				return 4;
			}
			return e.which; //left or no
		}

		if (e.button === 0 || e.button === 1) {
			return 1; //candidate left
		}
		if (e.button === 2) {
			return 2; // right
		}
		return 0; //no or middle?
	}
	function getKeyCode(e) {
		return e.keyCode || e.which;
	}
	function isTouchEvent(e) {
		return !!e.changedTouches;
	}
	function getIgnoreCase(obj, name) {
		if (obj[name]) {
			return obj[name];
		}
		const l = name.toLowerCase();
		if (obj[l]) {
			return obj[l];
		}
		const u = name.toLowerCase();
		if (obj[u]) {
			return obj[u];
		}
		for (const k in obj) {
			if (k.toLowerCase() === l) {
				return obj[k];
			}
		}
		return undefined;
	}
	function cancel(e) {
		e.preventDefault();
		e.stopPropagation();
	}

	function toBoxArray(obj) {
		if (!__webpack_provided_Array_dot_isArray(obj)) {
			return [obj /*top*/, obj /*right*/, obj /*bottom*/, obj /*left*/];
		}
		if (obj.length === 3) {
			return [obj[0] /*top*/, obj[1] /*right*/, obj[2] /*bottom*/, obj[1] /*left*/];
		}
		if (obj.length === 2) {
			return [obj[0] /*top*/, obj[1] /*right*/, obj[0] /*bottom*/, obj[1] /*left*/];
		}
		if (obj.length === 1) {
			return [obj[0] /*top*/, obj[0] /*right*/, obj[0] /*bottom*/, obj[0] /*left*/];
		}
		return obj;
	}

	// Chrome 33554431
	// FireFox 17895588
	// IE 10737433
	module.exports = {
		isDef,
		browser: {
			IE,
			Chrome,
			Firefox,
			heightLimit: Chrome ? 33554431 : Firefox ? 17895588 : 10737433 // default IE limit
		},
		extend,
		isDescendantElement,
		getChainSafe,
		applyChainSafe,
		getOrApply,
		getIgnoreCase,
		isPromise,
		then,
		array,
		obj: {
			setReadonly,
			each,
			isObject
		},
		str: {
			endsWith
		},
		event: {
			getMouseButtons,
			getKeyCode,
			isTouchEvent,
			cancel
		},
		style: {
			toBoxArray
		},
		emptyFn() {}
	};
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @/internal/com.js */ "./internal/com.js")["Array_isArray"]))

/***/ }),

/***/ "./list-grid/EVENT_TYPE.js":
/*!*********************************!*\
  !*** ./list-grid/EVENT_TYPE.js ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { extend } = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");
const DrawGrid = __webpack_require__(/*! ../core/DrawGrid */ "./core/DrawGrid.js");
const EVENT_TYPE = extend(DrawGrid.EVENT_TYPE, {
	CHANGED_VALUE: 'changed_value'
});
module.exports = EVENT_TYPE;

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const core = __webpack_require__(/*! ./core */ "./core.js");
	const tools = __webpack_require__(/*! ./tools */ "./tools.js");
	const columns = __webpack_require__(/*! ./columns */ "./columns.js");
	const themes = __webpack_require__(/*! ./themes */ "./themes.js");
	const data = __webpack_require__(/*! ./data */ "./data.js");

	const ListGrid = __webpack_require__(/*! ./ListGrid */ "./ListGrid.js");
	const GridCanvasHelper = __webpack_require__(/*! ./GridCanvasHelper */ "./GridCanvasHelper.js");

	const icons = __webpack_require__(/*! ./icons */ "./icons.js");
	const register = __webpack_require__(/*! ./register */ "./register.js");

	/**
  * Cheetah Grid
  * @type {Object}
  * @namespace cheetahGrid
  */
	module.exports = {
		core,
		tools,

		// impl Grids
		ListGrid,

		// objects
		columns,
		themes,
		data,

		// helper
		GridCanvasHelper,
		get icons() {
			return icons.get();
		},

		//plugin registers
		register,

		get _internal() {
			console.warn('use internal!!');
			return {
				color: __webpack_require__(/*! ./internal/color */ "./internal/color.js"),
				sort: __webpack_require__(/*! ./internal/sort */ "./internal/sort.js"),
				calc: __webpack_require__(/*! ./internal/calc */ "./internal/calc.js"),
				symbolManager: __webpack_require__(/*! ./internal/symbolManager */ "./internal/symbolManager.js"),
				path2DManager: __webpack_require__(/*! ./internal/path2DManager */ "./internal/path2DManager.js")
			};
		}
	};
}

/***/ }),

/***/ "./plugins/icons.js":
/*!**************************!*\
  !*** ./plugins/icons.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),

/***/ "./plugins/themes.js":
/*!***************************!*\
  !*** ./plugins/themes.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),

/***/ "./register.js":
/*!*********************!*\
  !*** ./register.js ***!
  \*********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const themePlugins = __webpack_require__(/*! ./plugins/themes */ "./plugins/themes.js");
const iconPlugins = __webpack_require__(/*! ./plugins/icons */ "./plugins/icons.js");

function register(obj, name, value) {
	if (value) {
		const old = obj[name];
		obj[name] = value;
		return old;
	} else {
		return obj[name];
	}
}
function registers(obj, values) {
	for (const k in values) {
		obj[k] = values[k];
	}
}
module.exports = {
	theme(name, theme) {
		return register(themePlugins, name, theme);
	},
	icon(name, icon) {
		return register(iconPlugins, name, icon);
	},
	icons(icons) {
		registers(iconPlugins, icons);
	}
};

/***/ }),

/***/ "./themes.js":
/*!*******************!*\
  !*** ./themes.js ***!
  \*******************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const { extend, getIgnoreCase } = __webpack_require__(/*! ./internal/utils */ "./internal/utils.js");
	const theme = __webpack_require__(/*! ./themes/theme */ "./themes/theme.js");
	const plugins = __webpack_require__(/*! ./plugins/themes */ "./plugins/themes.js");
	const BASIC = theme.create(__webpack_require__(/*! ./themes/BASIC */ "./themes/BASIC.js"));
	const MATERIAL_DESIGN = theme.create(__webpack_require__(/*! ./themes/MATERIAL_DESIGN */ "./themes/MATERIAL_DESIGN.js"));

	const builtin = {
		BASIC,
		MATERIAL_DESIGN
	};
	let defTheme = theme.create({});
	/**
  * themes
  * @type {Object}
  * @namespace cheetahGrid.themes
  * @memberof cheetahGrid
  */
	const themes = {
		get default() {
			return defTheme;
		},
		set default(defaultTheme) {
			defTheme = defaultTheme;
		},
		theme,
		of(value) {
			if (!value) {
				return null;
			}
			if (typeof value === 'string') {
				const t = getIgnoreCase(themes.choices, value);
				if (t) {
					return t;
				}
				return null;
			}
			return value;
		},
		/**
   * @namespace cheetahGrid.themes.choices
   */
		get choices() {
			return extend(builtin, plugins);
		}
	};
	module.exports = themes;
}

/***/ }),

/***/ "./themes/BASIC.js":
/*!*************************!*\
  !*** ./themes/BASIC.js ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*eslint no-bitwise:0*/


function DEFAULT_BG_COLOR(args) {
	const {
		row,
		grid: { frozenRowCount }
	} = args;
	if (!(row - frozenRowCount & 1)) {
		return '#FFF';
	} else {
		return '#F6F6F6';
	}
}
const cacheLinearGradient = {};
function getLinearGradient(context, left, top, right, bottom, colorStops) {
	let stop;
	const stopsKey = [];
	for (stop in colorStops) {
		stopsKey.push(`${stop}@${colorStops[stop]}`);
	}
	const key = `${left}/${top}/${right}/${bottom}/${stopsKey.join(',')}`;
	const ret = cacheLinearGradient[key];
	if (ret) {
		return ret;
	}
	const grad = context.createLinearGradient(left, top, left, bottom);
	for (stop in colorStops) {
		grad.addColorStop(stop, colorStops[stop]);
	}
	return cacheLinearGradient[key] = grad;
}
function FROZEN_ROWS_BG_COLOR(args) {
	const {
		col,
		grid,
		grid: { frozenRowCount },
		context
	} = args;
	const { left, top } = grid.getCellRelativeRect(col, 0);
	const { bottom } = grid.getCellRelativeRect(col, frozenRowCount - 1);

	return getLinearGradient(context, left, top, left, bottom, { 0: '#FFF', 1: '#D3D3D3' });
}
/**
 * basic theme
 * @name BASIC
 * @type {Object}
 * @memberof cheetahGrid.themes.choices
 */
module.exports = {
	color: '#000',
	defaultBgColor: DEFAULT_BG_COLOR,
	frozenRowsBgColor: FROZEN_ROWS_BG_COLOR,
	hiliteBorderColor: '#5E9ED6',
	selectionBgColor: '#CCE0FF',
	borderColor: '#000',
	checkbox: {
		uncheckBgColor: '#FFF',
		checkBgColor: 'rgb(76, 73, 72)'
	},
	button: {
		color: '#FFF',
		bgColor: '#2196F3'
	},
	underlayBackgroundColor: '#F6F6F6'
};

/***/ }),

/***/ "./themes/MATERIAL_DESIGN.js":
/*!***********************************!*\
  !*** ./themes/MATERIAL_DESIGN.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*eslint no-bitwise:0*/


function FROZEN_ROWS_BORDER_COLOR(args) {
	const {
		row,
		grid: { frozenRowCount }
	} = args;
	if (frozenRowCount - 1 === row) {
		return ['#f2f2f2', '#f2f2f2', '#ccc7c7', '#f2f2f2'];
	} else {
		return ['#f2f2f2'];
	}
}
function BORDER_COLOR(args) {
	const {
		col,
		grid: { colCount }
	} = args;
	if (colCount - 1 === col) {
		return ['#ccc7c7', '#f2f2f2', '#ccc7c7', null];
	} else {
		return ['#ccc7c7', null];
	}
}
/**
 * material design theme
 * @name MATERIAL_DESIGN
 * @type {Object}
 * @memberof cheetahGrid.themes.choices
 */
module.exports = {
	color: 'rgba(0, 0, 0, 0.87)',
	defaultBgColor: '#FFF',
	frozenRowsBgColor: '#FFF',
	frozenRowsColor: 'rgba(0, 0, 0, 0.54)',
	hiliteBorderColor: '#5E9ED6',
	selectionBgColor: '#CCE0FF',
	borderColor: BORDER_COLOR,
	frozenRowsBorderColor: FROZEN_ROWS_BORDER_COLOR,
	checkbox: {
		uncheckBgColor: '#FFF',
		checkBgColor: 'rgb(76, 73, 72)',
		borderColor: 'rgba(0, 0, 0, 0.26)'
	},
	button: {
		color: '#FFF',
		bgColor: '#2196F3'
	},
	underlayBackgroundColor: '#FFF'
};

/***/ }),

/***/ "./themes/theme.js":
/*!*************************!*\
  !*** ./themes/theme.js ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*eslint no-bitwise:0*/


{
	const { getChainSafe } = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");
	const defaultTheme = __webpack_require__(/*! ./MATERIAL_DESIGN */ "./themes/MATERIAL_DESIGN.js");

	function getProp(obj, superObj, names, defNames) {
		return getChainSafe(obj, ...names) || defNames && getChainSafe(obj, ...defNames) || getChainSafe(superObj, ...names);
	}
	function createTheme(obj = {}, superTheme = defaultTheme) {
		return {
			get font() {
				return getProp(obj, superTheme, ['font']);
			},
			get underlayBackgroundColor() {
				return getProp(obj, superTheme, ['underlayBackgroundColor']);
			},
			// color
			get color() {
				return getProp(obj, superTheme, ['color']);
			},
			get frozenRowsColor() {
				return getProp(obj, superTheme, ['frozenRowsColor'], ['color']);
			},
			// background
			get defaultBgColor() {
				return getProp(obj, superTheme, ['defaultBgColor']);
			},
			get frozenRowsBgColor() {
				return getProp(obj, superTheme, ['frozenRowsBgColor'], ['defaultBgColor']);
			},
			get selectionBgColor() {
				return getProp(obj, superTheme, ['selectionBgColor'], ['defaultBgColor']);
			},
			// border
			get borderColor() {
				return getProp(obj, superTheme, ['borderColor']);
			},
			get frozenRowsBorderColor() {
				return getProp(obj, superTheme, ['frozenRowsBorderColor'], ['borderColor']);
			},
			get hiliteBorderColor() {
				return getProp(obj, superTheme, ['hiliteBorderColor'], ['borderColor']);
			},
			get checkbox() {
				return this._checkbox || (this._checkbox = {
					get uncheckBgColor() {
						return getProp(obj, superTheme, ['checkbox', 'uncheckBgColor'], ['defaultBgColor']);
					},
					get checkBgColor() {
						return getProp(obj, superTheme, ['checkbox', 'checkBgColor'], ['defaultBgColor']);
					},
					get borderColor() {
						return getProp(obj, superTheme, ['checkbox', 'borderColor'], ['borderColor']);
					}
				});
			},
			get button() {
				return this._button || (this._button = {
					get color() {
						return getProp(obj, superTheme, ['button', 'color'], ['color']);
					},
					get bgColor() {
						return getProp(obj, superTheme, ['button', 'bgColor'], ['defaultBgColor']);
					}
				});
			},
			extends(obj) {
				return createTheme(obj, this);
			}
		};
	}

	/**
  * theme object
  * @type {Object}
  * @namespace cheetahGrid.themes.theme
  * @memberof cheetahGrid.themes
  */
	module.exports = {
		create(obj) {
			return createTheme(obj);
		}
	};
}

/***/ }),

/***/ "./tools.js":
/*!******************!*\
  !*** ./tools.js ***!
  \******************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const canvashelper = __webpack_require__(/*! ./tools/canvashelper */ "./tools/canvashelper.js");

	/**
  * tools
  * @type {Object}
  * @namespace cheetahGrid.tools
  * @memberof cheetahGrid
  */
	module.exports = {
		canvashelper
	};
}

/***/ }),

/***/ "./tools/canvashelper.js":
/*!*******************************!*\
  !*** ./tools/canvashelper.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
	const { calcBasePosition, calcStartPosition } = __webpack_require__(/*! ../internal/canvases */ "./internal/canvases.js");
	const { ceil, PI } = Math;

	function strokeColorsRect(ctx, borderColors, left, top, width, height) {
		function strokeRectLines(positions) {
			for (let i = 0; i < borderColors.length; i++) {
				const color = borderColors[i];
				const preColor = borderColors[i - 1];
				if (color) {
					if (preColor !== color) {
						if (preColor) {
							ctx.strokeStyle = preColor;
							ctx.stroke();
						}
						const pos1 = positions[i];
						ctx.beginPath();
						ctx.moveTo(pos1.x, pos1.y);
					}
					const pos2 = positions[i + 1];
					ctx.lineTo(pos2.x, pos2.y);
				} else {
					if (preColor) {
						ctx.strokeStyle = preColor;
						ctx.stroke();
					}
				}
			}
			const preColor = borderColors[borderColors.length - 1];
			if (preColor) {
				ctx.strokeStyle = preColor;
				ctx.stroke();
			}
		}
		if (borderColors[0] === borderColors[1] && borderColors[0] === borderColors[2] && borderColors[0] === borderColors[3]) {
			if (borderColors[0]) {
				ctx.strokeStyle = borderColors[0];
				ctx.strokeRect(left, top, width, height);
			}
		} else {
			strokeRectLines([{ x: left, y: top }, { x: left + width, y: top }, { x: left + width, y: top + height }, { x: left, y: top + height }, { x: left, y: top }]);
		}
	}
	function roundRect(ctx, left, top, width, height, radius) {
		ctx.beginPath();
		ctx.arc(left + radius, top + radius, radius, -PI, -0.5 * PI, false);
		ctx.arc(left + width - radius, top + radius, radius, -0.5 * PI, 0, false);
		ctx.arc(left + width - radius, top + height - radius, radius, 0, 0.5 * PI, false);
		ctx.arc(left + radius, top + height - radius, radius, 0.5 * PI, PI, false);
		ctx.closePath();
	}
	function fillRoundRect(ctx, left, top, width, height, radius) {
		roundRect(ctx, left, top, width, height, radius);
		ctx.fill();
	}
	function strokeRoundRect(ctx, left, top, width, height, radius) {
		roundRect(ctx, left, top, width, height, radius);
		ctx.stroke();
	}
	function fillTextRect(ctx, text, left, top, width, height, {
		offset = 2,
		padding
	} = {}) {
		const rect = {
			left,
			top,
			width,
			height,
			right: left + width,
			bottom: top + height
		};
		ctx.save();
		try {
			ctx.beginPath();
			ctx.rect(rect.left, rect.top, rect.width, rect.height);
			//clip
			ctx.clip();

			//文字描画
			const pos = calcBasePosition(ctx, rect, {
				offset,
				padding
			});

			ctx.fillText(text, pos.x, pos.y);
		} finally {
			ctx.restore();
		}
	}
	function drawInlineImageRect(ctx, image, srcLeft, srcTop, srcWidth, srcHeight, destWidth, destHeight, left, top, width, height, {
		offset = 2,
		padding
	} = {}) {
		const rect = {
			left,
			top,
			width,
			height,
			right: left + width,
			bottom: top + height
		};
		ctx.save();
		try {
			ctx.beginPath();
			ctx.rect(rect.left, rect.top, rect.width, rect.height);
			//clip
			ctx.clip();

			//文字描画
			const pos = calcStartPosition(ctx, rect, destWidth, destHeight, {
				offset,
				padding
			});

			ctx.drawImage(image, srcLeft, srcTop, srcWidth, srcHeight, pos.x, pos.y, destWidth, destHeight);
		} finally {
			ctx.restore();
		}
	}

	/**
  * Returns an object containing the width of the checkbox.
  * @param  {CanvasRenderingContext2D} ctx canvas context
  * @return {Object} Object containing the width of the checkbox
  * @memberof cheetahGrid.tools.canvashelper
  */
	function measureCheckbox(ctx) {
		return {
			width: ctx.measureText('あ').width
		};
	}

	/**
  * draw Checkbox
  * @param  {CanvasRenderingContext2D} ctx canvas context
  * @param  {number} x The x coordinate where to start drawing the checkbox (relative to the canvas)
  * @param  {number} y The y coordinate where to start drawing the checkbox (relative to the canvas)
  * @param  {boolean|number} check checkbox check status
  * @param  {object} option option
  * @return {void}
  * @memberof cheetahGrid.tools.canvashelper
  */
	function drawCheckbox(ctx, x, y, check, {
		uncheckBgColor = '#FFF',
		checkBgColor = 'rgb(76, 73, 72)',
		borderColor = '#000',
		boxSize = measureCheckbox(ctx).width
	} = {}) {
		const checkPoint = typeof check === 'number' ? check > 1 ? 1 : check : 1;

		ctx.save();
		try {
			ctx.fillStyle = check ? checkBgColor : uncheckBgColor;

			fillRoundRect(ctx, ceil(x) - 1, ceil(y) - 1, ceil(boxSize + 1), ceil(boxSize + 1), boxSize / 5);
			ctx.lineWidth = 1;
			ctx.strokeStyle = borderColor;
			strokeRoundRect(ctx, ceil(x) - 0.5, ceil(y) - 0.5, ceil(boxSize), ceil(boxSize), boxSize / 5);
			if (check) {
				ctx.lineWidth = ceil(boxSize / 10);
				ctx.strokeStyle = uncheckBgColor;
				let leftWidth = boxSize / 4;
				let rightWidth = boxSize / 2 * 0.9;
				const leftLeftPos = x + boxSize * 0.2;
				const leftTopPos = y + boxSize / 2;

				if (checkPoint < 0.5) {
					leftWidth = leftWidth * (checkPoint * 2);
				}

				ctx.beginPath();
				ctx.moveTo(leftLeftPos, leftTopPos);
				ctx.lineTo(leftLeftPos + leftWidth, leftTopPos + leftWidth);
				if (checkPoint > 0.5) {
					if (checkPoint < 1) {
						rightWidth = rightWidth * ((checkPoint - 0.5) * 2);
					}
					ctx.lineTo(leftLeftPos + leftWidth + rightWidth, leftTopPos + leftWidth - rightWidth);
				}
				ctx.stroke();
			}
		} finally {
			ctx.restore();
		}
	}
	function drawButton(ctx, left, top, width, height, option = {}) {
		const {
			backgroundColor = '#FFF',
			bgColor = backgroundColor,
			radius = 4,
			shadow = {}
		} = option;
		ctx.save();
		try {
			ctx.fillStyle = bgColor;

			if (shadow) {
				const {
					color = 'rgba(0, 0, 0, 0.24)',
					blur = 1,
					offsetX = 0,
					offsetY = 2,
					offset: {
						x: ox = offsetX,
						y: oy = offsetY
					} = {}
				} = shadow;
				ctx.shadowColor = color;
				ctx.shadowBlur = blur; //ぼかし
				ctx.shadowOffsetX = ox;
				ctx.shadowOffsetY = oy;
			}

			fillRoundRect(ctx, ceil(left), ceil(top), ceil(width), ceil(height), radius);
		} finally {
			ctx.restore();
		}
	}

	/**
  * canvashelper
  * @type {Object}
  * @namespace cheetahGrid.tools.canvashelper
  * @memberof cheetahGrid.tools
  */
	const canvashelper = {
		roundRect,
		fillRoundRect,
		strokeRoundRect,
		drawCheckbox,
		measureCheckbox,
		fillTextRect,
		drawButton,
		drawInlineImageRect,
		strokeColorsRect
	};

	module.exports = canvashelper;
}

/***/ })

/******/ });
});
//# sourceMappingURL=cheetahGrid.js.map