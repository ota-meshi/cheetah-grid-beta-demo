/*! Cheetah Grid v0.2.0 | license MIT */
(function(){
'use strict';

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
	(function webpackUniversalModuleDefinition(root, factory) {
		if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["cheetahGrid"] = factory();else root["cheetahGrid"] = factory();
	})(window, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId]) {
						/******/return installedModules[moduleId].exports;
						/******/
					}
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/i: moduleId,
						/******/l: false,
						/******/exports: {}
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.l = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // define getter function for harmony exports
				/******/__webpack_require__.d = function (exports, name, getter) {
					/******/if (!__webpack_require__.o(exports, name)) {
						/******/Object.defineProperty(exports, name, {
							/******/configurable: false,
							/******/enumerable: true,
							/******/get: getter
							/******/ });
						/******/
					}
					/******/
				};
				/******/
				/******/ // define __esModule on exports
				/******/__webpack_require__.r = function (exports) {
					/******/Object.defineProperty(exports, '__esModule', { value: true });
					/******/
				};
				/******/
				/******/ // getDefaultExport function for compatibility with non-harmony modules
				/******/__webpack_require__.n = function (module) {
					/******/var getter = module && module.__esModule ?
					/******/function getDefault() {
						return module['default'];
					} :
					/******/function getModuleExports() {
						return module;
					};
					/******/__webpack_require__.d(getter, 'a', getter);
					/******/return getter;
					/******/
				};
				/******/
				/******/ // Object.prototype.hasOwnProperty.call
				/******/__webpack_require__.o = function (object, property) {
					return Object.prototype.hasOwnProperty.call(object, property);
				};
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(__webpack_require__.s = "./main.js");
				/******/
			}(
			/************************************************************************/
			/******/{

				/***/"../../node_modules/css-loader/index.js?minimize!./columns/action/internal/InlineInputElement.css":
				/*!***********************************************************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader?minimize!./columns/action/internal/InlineInputElement.css ***!
      \***********************************************************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function node_modulesCssLoaderIndexJsMinimizeColumnsActionInternalInlineInputElementCss(module, exports, __webpack_require__) {

					exports = module.exports = __webpack_require__( /*! ../../../../../node_modules/css-loader/lib/css-base.js */"../../node_modules/css-loader/lib/css-base.js")(false);
					// imports


					// module
					exports.push([module.i, ".cheetah-grid__inline-input::-ms-clear{visibility:hidden}.cheetah-grid__inline-input{position:absolute;box-sizing:border-box}", ""]);

					// exports


					/***/
				},

				/***/"../../node_modules/css-loader/index.js?minimize!./columns/action/internal/InlineMenuElement.css":
				/*!**********************************************************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader?minimize!./columns/action/internal/InlineMenuElement.css ***!
      \**********************************************************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function node_modulesCssLoaderIndexJsMinimizeColumnsActionInternalInlineMenuElementCss(module, exports, __webpack_require__) {

					exports = module.exports = __webpack_require__( /*! ../../../../../node_modules/css-loader/lib/css-base.js */"../../node_modules/css-loader/lib/css-base.js")(false);
					// imports


					// module
					exports.push([module.i, ".cheetah-grid__inline-menu{position:absolute;color:rgba(0,0,0,.87);box-sizing:content-box;margin:-1px auto auto -1px;padding:8px 0;background-color:#fafafa;list-style-type:none;border-radius:2px;max-height:calc(100vh - 40px);overflow-y:auto}.cheetah-grid__inline-menu--hidden{transform:scale(.9);box-shadow:none;opacity:0;pointer-events:none;transition:all 50ms ease-out}.cheetah-grid__inline-menu--hidden *{pointer-events:none}.cheetah-grid__inline-menu--shown{transform:translateY(-7px);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);opacity:1;transition:all .15s ease-out}.cheetah-grid__inline-menu__menu-item{height:100%;box-sizing:border-box;display:flex;align-items:center;justify-content:flex-start;outline:none;cursor:pointer;position:relative;overflow:hidden;padding:0 16px}.cheetah-grid__inline-menu__menu-item--empty{color:rgba(0,0,0,.38)}.cheetah-grid__inline-menu__menu-item:before{content:\"\";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background-color:#000;opacity:0;pointer-events:none;transition:opacity 15ms linear}.cheetah-grid__inline-menu__menu-item:hover:before,.cheetah-grid__inline-menu__menu-item[data-select]:before{opacity:.04}.cheetah-grid__inline-menu__menu-item:focus:before{opacity:.12}", ""]);

					// exports


					/***/
				},

				/***/"../../node_modules/css-loader/index.js?minimize!./columns/action/internal/SmallDialogInputElement.css":
				/*!****************************************************************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader?minimize!./columns/action/internal/SmallDialogInputElement.css ***!
      \****************************************************************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function node_modulesCssLoaderIndexJsMinimizeColumnsActionInternalSmallDialogInputElementCss(module, exports, __webpack_require__) {

					exports = module.exports = __webpack_require__( /*! ../../../../../node_modules/css-loader/lib/css-base.js */"../../node_modules/css-loader/lib/css-base.js")(false);
					// imports


					// module
					exports.push([module.i, ".cheetah-grid__small-dialog-input__input::-ms-clear{visibility:hidden}@keyframes cheetah-grid__small-dialog-input--hidden-animation{0%{opacity:1}99%{opacity:1}to{opacity:0}}.cheetah-grid__small-dialog-input{position:absolute;box-sizing:content-box;margin:-1px auto auto -1px;border-radius:3px;background-color:#fafafa;transition:padding .15s ease-out,box-shadow .15s ease-out}.cheetah-grid__small-dialog-input--hidden{box-shadow:none;padding:0;pointer-events:none;animation:cheetah-grid__small-dialog-input--hidden-animation .15s ease-out;opacity:0}.cheetah-grid__small-dialog-input--shown{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);padding:8px 24px}.cheetah-grid__small-dialog-input__input{width:100%;height:100%;box-sizing:border-box;padding:3px 2px 0 4px;border:none;border-bottom:1px solid rgba(0,0,0,.87);outline:none;background-color:transparent;transition:all .3s ease-out}.cheetah-grid__small-dialog-input__input:focus{border-bottom:1px solid #2196f3;box-shadow:0 1px 0 0 #2196f3}.cheetah-grid__small-dialog-input:after{content:\"\";font-family:Roboto;font-size:12px;font-size:.75rem;min-height:1em;line-height:1;display:block;width:100%;padding-top:8px}.cheetah-grid__small-dialog-input.helper-text--right-justified:after{text-align:right}.cheetah-grid__small-dialog-input[data-helper-text]:after{content:attr(data-helper-text);color:rgba(0,0,0,.87)}.cheetah-grid__small-dialog-input[data-error-message] input{border-bottom:1px solid #ff1744;box-shadow:0 1px 0 0 #ff1744}.cheetah-grid__small-dialog-input[data-error-message]:after{content:attr(data-error-message);color:#ff1744;text-align:left}", ""]);

					// exports


					/***/
				},

				/***/"../../node_modules/css-loader/index.js?minimize!./columns/message/internal/ErrorMessageElement.css":
				/*!*************************************************************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader?minimize!./columns/message/internal/ErrorMessageElement.css ***!
      \*************************************************************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function node_modulesCssLoaderIndexJsMinimizeColumnsMessageInternalErrorMessageElementCss(module, exports, __webpack_require__) {

					exports = module.exports = __webpack_require__( /*! ../../../../../node_modules/css-loader/lib/css-base.js */"../../node_modules/css-loader/lib/css-base.js")(false);
					// imports


					// module
					exports.push([module.i, ".cheetah-grid__error-message-element{border-top:1px solid #ff1744;color:#ff1744}", ""]);

					// exports


					/***/
				},

				/***/"../../node_modules/css-loader/index.js?minimize!./columns/message/internal/MessageElement.css":
				/*!********************************************************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader?minimize!./columns/message/internal/MessageElement.css ***!
      \********************************************************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function node_modulesCssLoaderIndexJsMinimizeColumnsMessageInternalMessageElementCss(module, exports, __webpack_require__) {

					exports = module.exports = __webpack_require__( /*! ../../../../../node_modules/css-loader/lib/css-base.js */"../../node_modules/css-loader/lib/css-base.js")(false);
					// imports


					// module
					exports.push([module.i, ".cheetah-grid__message-element{position:absolute;margin-top:-2px;box-sizing:border-box;border-radius:0 0 3px 3px;background-color:hsla(0,0%,98%,.85);padding:8px 2px;pointer-events:none;user-select:none}.cheetah-grid__message-element--hidden{opacity:0;display:none}.cheetah-grid__message-element__message{font-family:Roboto;font-size:12px;font-size:.75rem;min-height:1em;line-height:1;display:block;width:100%}.cheetah-grid__message-element{border-top:1px solid rgba(0,0,0,.87);color:rgba(0,0,0,.87)}.cheetah-grid__message-element.helper-text--right-justified{text-align:right}", ""]);

					// exports


					/***/
				},

				/***/"../../node_modules/css-loader/index.js?minimize!./columns/message/internal/WarningMessageElement.css":
				/*!***************************************************************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader?minimize!./columns/message/internal/WarningMessageElement.css ***!
      \***************************************************************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function node_modulesCssLoaderIndexJsMinimizeColumnsMessageInternalWarningMessageElementCss(module, exports, __webpack_require__) {

					exports = module.exports = __webpack_require__( /*! ../../../../../node_modules/css-loader/lib/css-base.js */"../../node_modules/css-loader/lib/css-base.js")(false);
					// imports


					// module
					exports.push([module.i, ".cheetah-grid__warning-message-element{border-top:1px solid #dd2c00;color:#dd2c00}", ""]);

					// exports


					/***/
				},

				/***/"../../node_modules/css-loader/index.js?minimize!./internal/style.css":
				/*!*******************************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader?minimize!./internal/style.css ***!
      \*******************************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function node_modulesCssLoaderIndexJsMinimizeInternalStyleCss(module, exports, __webpack_require__) {

					exports = module.exports = __webpack_require__( /*! ../../../node_modules/css-loader/lib/css-base.js */"../../node_modules/css-loader/lib/css-base.js")(false);
					// imports


					// module
					exports.push([module.i, ".cheetah-grid .grid-scrollable{height:100%;width:100%;position:absolute;overflow:scroll}.cheetah-grid .grid-scroll-end-point{opacity:0;position:relative}.cheetah-grid{position:relative;width:100%;height:100%}.cheetah-grid>canvas{position:absolute;width:0;height:0}.cheetah-grid .grid-focus-control{position:relative!important;width:1px;height:1px;opacity:0;padding:0;margin:0;box-sizing:border-box;pointer-events:none;max-width:0;max-height:0;float:none!important}.cheetah-grid input.grid-focus-control::-ms-clear{visibility:hidden}.cheetah-grid input.grid-focus-control.composition{opacity:1;max-width:none;max-height:none}", ""]);

					// exports


					/***/
				},

				/***/"../../node_modules/css-loader/lib/css-base.js":
				/*!*****************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/css-loader/lib/css-base.js ***!
      \*****************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function node_modulesCssLoaderLibCssBaseJs(module, exports) {

					/*
     	MIT License http://www.opensource.org/licenses/mit-license.php
     	Author Tobias Koppers @sokra
     */
					// css base code, injected by the css-loader
					module.exports = function (useSourceMap) {
						var list = [];

						// return the list of modules as css string
						list.toString = function toString() {
							return this.map(function (item) {
								var content = cssWithMappingToString(item, useSourceMap);
								if (item[2]) {
									return "@media " + item[2] + "{" + content + "}";
								} else {
									return content;
								}
							}).join("");
						};

						// import a list of modules into the list
						list.i = function (modules, mediaQuery) {
							if (typeof modules === "string") modules = [[null, modules, ""]];
							var alreadyImportedModules = {};
							for (var i = 0; i < this.length; i++) {
								var id = this[i][0];
								if (typeof id === "number") alreadyImportedModules[id] = true;
							}
							for (i = 0; i < modules.length; i++) {
								var item = modules[i];
								// skip already imported module
								// this implementation is not 100% perfect for weird media query combinations
								//  when a module is imported multiple times with different media queries.
								//  I hope this will never occur (Hey this way we have smaller bundles)
								if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
									if (mediaQuery && !item[2]) {
										item[2] = mediaQuery;
									} else if (mediaQuery) {
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
								return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
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

					/***/
				},

				/***/"../../node_modules/style-loader/lib/addStyles.js":
				/*!********************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/style-loader/lib/addStyles.js ***!
      \********************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function node_modulesStyleLoaderLibAddStylesJs(module, exports, __webpack_require__) {

					/*
     	MIT License http://www.opensource.org/licenses/mit-license.php
     	Author Tobias Koppers @sokra
     */

					var stylesInDom = {};

					var memoize = function memoize(fn) {
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

					var getTarget = function getTarget(target) {
						return document.querySelector(target);
					};

					var getElement = function (fn) {
						var memo = {};

						return function (target) {
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
									} catch (e) {
										styleTarget = null;
									}
								}
								memo[target] = styleTarget;
							}
							return memo[target];
						};
					}();

					var singleton = null;
					var singletonCounter = 0;
					var stylesInsertedAtTop = [];

					var fixUrls = __webpack_require__( /*! ./urls */"../../node_modules/style-loader/lib/urls.js");

					module.exports = function (list, options) {
						if (typeof DEBUG !== "undefined" && DEBUG) {
							if ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
						}

						options = options || {};

						options.attrs = _typeof(options.attrs) === "object" ? options.attrs : {};

						// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
						// tags it will allow on a page
						if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

						// By default, add <style> tags to the <head> element
						if (!options.insertInto) options.insertInto = "head";

						// By default, add <style> tags to the bottom of the target
						if (!options.insertAt) options.insertAt = "bottom";

						var styles = listToStyles(list, options);

						addStylesToDom(styles, options);

						return function update(newList) {
							var mayRemove = [];

							for (var i = 0; i < styles.length; i++) {
								var item = styles[i];
								var domStyle = stylesInDom[item.id];

								domStyle.refs--;
								mayRemove.push(domStyle);
							}

							if (newList) {
								var newStyles = listToStyles(newList, options);
								addStylesToDom(newStyles, options);
							}

							for (var i = 0; i < mayRemove.length; i++) {
								var domStyle = mayRemove[i];

								if (domStyle.refs === 0) {
									for (var j = 0; j < domStyle.parts.length; j++) {
										domStyle.parts[j]();
									}delete stylesInDom[domStyle.id];
								}
							}
						};
					};

					function addStylesToDom(styles, options) {
						for (var i = 0; i < styles.length; i++) {
							var item = styles[i];
							var domStyle = stylesInDom[item.id];

							if (domStyle) {
								domStyle.refs++;

								for (var j = 0; j < domStyle.parts.length; j++) {
									domStyle.parts[j](item.parts[j]);
								}

								for (; j < item.parts.length; j++) {
									domStyle.parts.push(addStyle(item.parts[j], options));
								}
							} else {
								var parts = [];

								for (var j = 0; j < item.parts.length; j++) {
									parts.push(addStyle(item.parts[j], options));
								}

								stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
							}
						}
					}

					function listToStyles(list, options) {
						var styles = [];
						var newStyles = {};

						for (var i = 0; i < list.length; i++) {
							var item = list[i];
							var id = options.base ? item[0] + options.base : item[0];
							var css = item[1];
							var media = item[2];
							var sourceMap = item[3];
							var part = { css: css, media: media, sourceMap: sourceMap };

							if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });else newStyles[id].parts.push(part);
						}

						return styles;
					}

					function insertStyleElement(options, style) {
						var target = getElement(options.insertInto);

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
						} else if (_typeof(options.insertAt) === "object" && options.insertAt.before) {
							var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
							target.insertBefore(style, nextSibling);
						} else {
							throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
						}
					}

					function removeStyleElement(style) {
						if (style.parentNode === null) return false;
						style.parentNode.removeChild(style);

						var idx = stylesInsertedAtTop.indexOf(style);
						if (idx >= 0) {
							stylesInsertedAtTop.splice(idx, 1);
						}
					}

					function createStyleElement(options) {
						var style = document.createElement("style");

						options.attrs.type = "text/css";

						addAttrs(style, options.attrs);
						insertStyleElement(options, style);

						return style;
					}

					function createLinkElement(options) {
						var link = document.createElement("link");

						options.attrs.type = "text/css";
						options.attrs.rel = "stylesheet";

						addAttrs(link, options.attrs);
						insertStyleElement(options, link);

						return link;
					}

					function addAttrs(el, attrs) {
						Object.keys(attrs).forEach(function (key) {
							el.setAttribute(key, attrs[key]);
						});
					}

					function addStyle(obj, options) {
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
								return function () {
									// noop
								};
							}
						}

						if (options.singleton) {
							var styleIndex = singletonCounter++;

							style = singleton || (singleton = createStyleElement(options));

							update = applyToSingletonTag.bind(null, style, styleIndex, false);
							remove = applyToSingletonTag.bind(null, style, styleIndex, true);
						} else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
							style = createLinkElement(options);
							update = updateLink.bind(null, style, options);
							remove = function remove() {
								removeStyleElement(style);

								if (style.href) URL.revokeObjectURL(style.href);
							};
						} else {
							style = createStyleElement(options);
							update = applyToTag.bind(null, style);
							remove = function remove() {
								removeStyleElement(style);
							};
						}

						update(obj);

						return function updateStyle(newObj) {
							if (newObj) {
								if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
									return;
								}

								update(obj = newObj);
							} else {
								remove();
							}
						};
					}

					var replaceText = function () {
						var textStore = [];

						return function (index, replacement) {
							textStore[index] = replacement;

							return textStore.filter(Boolean).join('\n');
						};
					}();

					function applyToSingletonTag(style, index, remove, obj) {
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

					function applyToTag(style, obj) {
						var css = obj.css;
						var media = obj.media;

						if (media) {
							style.setAttribute("media", media);
						}

						if (style.styleSheet) {
							style.styleSheet.cssText = css;
						} else {
							while (style.firstChild) {
								style.removeChild(style.firstChild);
							}

							style.appendChild(document.createTextNode(css));
						}
					}

					function updateLink(link, options, obj) {
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

						if (oldSrc) URL.revokeObjectURL(oldSrc);
					}

					/***/
				},

				/***/"../../node_modules/style-loader/lib/urls.js":
				/*!***************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/node_modules/style-loader/lib/urls.js ***!
      \***************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function node_modulesStyleLoaderLibUrlsJs(module, exports) {

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
						var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
							// strip quotes (if they exist)
							var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
								return $1;
							}).replace(/^'(.*)'$/, function (o, $1) {
								return $1;
							});

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

					/***/
				},

				/***/"../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/content/svg/production/ic_add_48px.svg":
				/*!*************************************************************************************************************************************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/webpack-loader/svg-to-icon-js-loader.js!C:/Users/ohta2346/git/github/cheetah-grid/node_modules/material-design-icons/content/svg/production/ic_add_48px.svg ***!
      \*************************************************************************************************************************************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function webpackLoaderSvgToIconJsLoaderJsNode_modulesMaterialDesignIconsContentSvgProductionIc_add_48pxSvg(module, exports) {

					module.exports = {
						/*
      original svg
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z"/></svg>
      @ material-design-icons\content\svg\production\ic_add_48px.svg
      */
						d: 'M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z',
						width: 48,
						height: 48

					};

					/***/
				},

				/***/"../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/image/svg/production/ic_edit_48px.svg":
				/*!************************************************************************************************************************************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/webpack-loader/svg-to-icon-js-loader.js!C:/Users/ohta2346/git/github/cheetah-grid/node_modules/material-design-icons/image/svg/production/ic_edit_48px.svg ***!
      \************************************************************************************************************************************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function webpackLoaderSvgToIconJsLoaderJsNode_modulesMaterialDesignIconsImageSvgProductionIc_edit_48pxSvg(module, exports) {

					module.exports = {
						/*
      original svg
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"/></svg>
      @ material-design-icons\image\svg\production\ic_edit_48px.svg
      */
						d: 'M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z',
						width: 48,
						height: 48

					};

					/***/
				},

				/***/"../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/navigation/svg/production/ic_arrow_downward_48px.svg":
				/*!***************************************************************************************************************************************************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/webpack-loader/svg-to-icon-js-loader.js!C:/Users/ohta2346/git/github/cheetah-grid/node_modules/material-design-icons/navigation/svg/production/ic_arrow_downward_48px.svg ***!
      \***************************************************************************************************************************************************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function webpackLoaderSvgToIconJsLoaderJsNode_modulesMaterialDesignIconsNavigationSvgProductionIc_arrow_downward_48pxSvg(module, exports) {

					module.exports = {
						/*
      original svg
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#010101" d="M40 24l-2.82-2.82L26 32.34V8h-4v24.34L10.84 21.16 8 24l16 16 16-16z"/></svg>
      @ material-design-icons\navigation\svg\production\ic_arrow_downward_48px.svg
      */
						d: 'M40 24l-2.82-2.82L26 32.34V8h-4v24.34L10.84 21.16 8 24l16 16 16-16z',
						width: 48,
						height: 48

					};

					/***/
				},

				/***/"../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/navigation/svg/production/ic_arrow_upward_48px.svg":
				/*!*************************************************************************************************************************************************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/webpack-loader/svg-to-icon-js-loader.js!C:/Users/ohta2346/git/github/cheetah-grid/node_modules/material-design-icons/navigation/svg/production/ic_arrow_upward_48px.svg ***!
      \*************************************************************************************************************************************************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function webpackLoaderSvgToIconJsLoaderJsNode_modulesMaterialDesignIconsNavigationSvgProductionIc_arrow_upward_48pxSvg(module, exports) {

					module.exports = {
						/*
      original svg
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z"/></svg>
      @ material-design-icons\navigation\svg\production\ic_arrow_upward_48px.svg
      */
						d: 'M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z',
						width: 48,
						height: 48

					};

					/***/
				},

				/***/"../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/toggle/svg/production/ic_star_24px.svg":
				/*!*************************************************************************************************************************************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/webpack-loader/svg-to-icon-js-loader.js!C:/Users/ohta2346/git/github/cheetah-grid/node_modules/material-design-icons/toggle/svg/production/ic_star_24px.svg ***!
      \*************************************************************************************************************************************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function webpackLoaderSvgToIconJsLoaderJsNode_modulesMaterialDesignIconsToggleSvgProductionIc_star_24pxSvg(module, exports) {

					module.exports = {
						/*
      original svg
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      @ material-design-icons\toggle\svg\production\ic_star_24px.svg
      */
						d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
						width: 24,
						height: 24

					};

					/***/
				},

				/***/"../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/toggle/svg/production/ic_star_border_24px.svg":
				/*!********************************************************************************************************************************************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/webpack-loader/svg-to-icon-js-loader.js!C:/Users/ohta2346/git/github/cheetah-grid/node_modules/material-design-icons/toggle/svg/production/ic_star_border_24px.svg ***!
      \********************************************************************************************************************************************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function webpackLoaderSvgToIconJsLoaderJsNode_modulesMaterialDesignIconsToggleSvgProductionIc_star_border_24pxSvg(module, exports) {

					module.exports = {
						/*
      original svg
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
      @ material-design-icons\toggle\svg\production\ic_star_border_24px.svg
      */
						d: 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z',
						width: 24,
						height: 24

					};

					/***/
				},

				/***/"../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/toggle/svg/production/ic_star_half_24px.svg":
				/*!******************************************************************************************************************************************************************************************************************!*\
      !*** C:/Users/ohta2346/git/github/cheetah-grid/webpack-loader/svg-to-icon-js-loader.js!C:/Users/ohta2346/git/github/cheetah-grid/node_modules/material-design-icons/toggle/svg/production/ic_star_half_24px.svg ***!
      \******************************************************************************************************************************************************************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function webpackLoaderSvgToIconJsLoaderJsNode_modulesMaterialDesignIconsToggleSvgProductionIc_star_half_24pxSvg(module, exports) {

					module.exports = {
						/*
      original svg
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
      @ material-design-icons\toggle\svg\production\ic_star_half_24px.svg
      */
						d: 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z',
						width: 24,
						height: 24

					};

					/***/
				},

				/***/"./GridCanvasHelper.js":
				/*!*****************************!*\
      !*** ./GridCanvasHelper.js ***!
      \*****************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function GridCanvasHelperJs(module, exports, __webpack_require__) {

					"use strict";
					/* WEBPACK VAR INJECTION */
					(function (__webpack_provided_Array_dot_isArray) {
						/*eslint no-bitwise:0*/

						{
							var invalidateCell = function invalidateCell(context, grid) {
								var col = context.col,
								    row = context.row;

								grid.invalidateCell(col, row);
							};

							var _getColor = function _getColor(color, col, row, grid, context) {
								return getOrApply(color, {
									col: col,
									row: row,
									grid: grid,
									context: context
								});
							};

							var _getThemeColor = function _getThemeColor(grid) {
								for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
									names[_key - 1] = arguments[_key];
								}

								return getChainSafe.apply(undefined, [grid.theme].concat(names)) || getChainSafe.apply(undefined, [themes.default].concat(names));
							};

							var _testFontLoad = function _testFontLoad(font, value, context, grid) {
								if (font) {
									if (!fonts.check(font, value)) {
										fonts.load(font, value, function () {
											return invalidateCell(context, grid);
										});
										return false;
									}
								}
								return true;
							};

							var drawInlines = function drawInlines(ctx, inlines, rect, offset, offsetTop, offsetBottom, col, row, grid) {
								function drawInline(inline, offsetLeft, offsetRight) {
									if (inline.canDraw()) {
										ctx.save();
										try {
											ctx.fillStyle = _getColor(inline.color() || ctx.fillStyle, col, row, grid, ctx);
											ctx.font = inline.font() || ctx.font;
											inline.draw({
												ctx: ctx,
												canvashelper: canvashelper,
												rect: rect,
												offset: offset,
												offsetLeft: offsetLeft,
												offsetRight: offsetRight,
												offsetTop: offsetTop,
												offsetBottom: offsetBottom
											});
										} finally {
											ctx.restore();
										}
									} else {
										inline.onReady(function () {
											return grid.invalidateCell(col, row);
										});
										//noop
									}
								}
								if (inlines.length === 1) {
									//1件の場合は幅計算が不要なため分岐
									var inline = inlines[0];
									drawInline(inline, 0, 0);
								} else {
									var inlineWidths = inlines.map(function (inline) {
										return (inline.width({ ctx: ctx }) || 0) - 0;
									});
									var offsetRight = inlineWidths.reduce(function (a, b) {
										return a + b;
									});

									var offsetLeft = 0;
									inlines.forEach(function (inline, index) {
										var inlineWidth = inlineWidths[index];
										offsetRight -= inlineWidth;
										drawInline(inline, offsetLeft, offsetRight);
										offsetLeft += inlineWidth;
									});
								}
							};

							var _inlineRect = function _inlineRect(grid, ctx, inline, rect, col, row) {
								var _ref = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {},
								    offset = _ref.offset,
								    color = _ref.color,
								    textAlign = _ref.textAlign,
								    textBaseline = _ref.textBaseline,
								    font = _ref.font,
								    icons = _ref.icons;

								//文字style
								ctx.fillStyle = _getColor(color, col, row, grid, ctx);
								ctx.textAlign = textAlign;
								ctx.textBaseline = textBaseline;
								ctx.font = font || ctx.font;

								var actInlines = inlines.buildInlines(icons, inline);
								drawInlines(ctx, actInlines, rect, offset, 0, 0, col, row, grid);
							};

							var _multiInlineRect = function _multiInlineRect(grid, ctx, multiInlines, rect, col, row) {
								var _ref2 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {},
								    offset = _ref2.offset,
								    color = _ref2.color,
								    textAlign = _ref2.textAlign,
								    textBaseline = _ref2.textBaseline,
								    font = _ref2.font,
								    lineHeight = _ref2.lineHeight,
								    icons = _ref2.icons;

								//文字style
								ctx.fillStyle = _getColor(color, col, row, grid, ctx);
								ctx.textAlign = textAlign;
								ctx.textBaseline = textBaseline;
								ctx.font = font || ctx.font;

								multiInlines = [].concat(_toConsumableArray(multiInlines));

								var paddingTop = 0;
								var paddingBottom = lineHeight * (multiInlines.length - 1);

								if (ctx.textBaseline === 'top' || ctx.textBaseline === 'hanging') {
									var em = ctx.measureText('あ').width;
									var pad = (lineHeight - em) / 2;
									paddingTop += pad;
									paddingBottom -= pad;
								} else if (ctx.textBaseline === 'bottom' || ctx.textBaseline === 'alphabetic' || ctx.textBaseline === 'ideographic') {
									var _em = ctx.measureText('あ').width;
									var _pad = (lineHeight - _em) / 2;
									paddingTop -= _pad;
									paddingBottom += _pad;
								}
								var line = multiInlines.shift() || '';
								var actInlines = inlines.buildInlines(icons, line);
								drawInlines(ctx, actInlines, rect, offset, paddingTop, paddingBottom, col, row, grid);
								paddingTop += lineHeight;
								paddingBottom -= lineHeight;
								while (multiInlines.length) {
									var _line = multiInlines.shift();
									var _actInlines = inlines.buildInlines(undefined, _line);
									drawInlines(ctx, _actInlines, rect, offset, paddingTop, paddingBottom, col, row, grid);
									paddingTop += lineHeight;
									paddingBottom -= lineHeight;
								}
							};

							var drawCheckbox = function drawCheckbox(ctx, rect, check, helper) {
								var _ref3 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
								    _ref3$animElapsedTime = _ref3.animElapsedTime,
								    animElapsedTime = _ref3$animElapsedTime === undefined ? 1 : _ref3$animElapsedTime,
								    _ref3$uncheckBgColor = _ref3.uncheckBgColor,
								    uncheckBgColor = _ref3$uncheckBgColor === undefined ? helper.theme.checkbox.uncheckBgColor : _ref3$uncheckBgColor,
								    _ref3$checkBgColor = _ref3.checkBgColor,
								    checkBgColor = _ref3$checkBgColor === undefined ? helper.theme.checkbox.checkBgColor : _ref3$checkBgColor,
								    _ref3$borderColor = _ref3.borderColor,
								    borderColor = _ref3$borderColor === undefined ? helper.theme.checkbox.borderColor : _ref3$borderColor,
								    _ref3$textAlign = _ref3.textAlign,
								    textAlign = _ref3$textAlign === undefined ? 'center' : _ref3$textAlign,
								    _ref3$textBaseline = _ref3.textBaseline,
								    textBaseline = _ref3$textBaseline === undefined ? 'middle' : _ref3$textBaseline;

								var boxWidth = canvashelper.measureCheckbox(ctx).width;
								ctx.textAlign = textAlign;
								ctx.textBaseline = textBaseline;
								var pos = calcStartPosition(ctx, rect, boxWidth + 1 /*罫線分+1*/, boxWidth + 1 /*罫線分+1*/);
								if (0 < animElapsedTime && animElapsedTime < 1) {
									var uncheckBgRGB = colorToRGB(uncheckBgColor);
									var checkBgRGB = colorToRGB(checkBgColor);
									var checkRGB = function checkRGB(colorName) {
										var start = uncheckBgRGB[colorName];
										var end = checkBgRGB[colorName];
										if (animElapsedTime >= 1) {
											return end;
										}
										var diff = start - end;
										return Math.ceil(start - diff * animElapsedTime);
									};
									var uncheckRGB = function uncheckRGB(colorName) {
										var end = uncheckBgRGB[colorName];
										var start = checkBgRGB[colorName];
										if (animElapsedTime >= 1) {
											return end;
										}
										var diff = end - start;
										return Math.ceil(start + diff * animElapsedTime);
									};
									uncheckBgColor = check ? uncheckBgColor : 'rgb(' + uncheckRGB('r') + ' , ' + uncheckRGB('g') + ', ' + uncheckRGB('b') + ')';
									checkBgColor = 'rgb(' + checkRGB('r') + ' , ' + checkRGB('g') + ', ' + checkRGB('b') + ')';
								}

								canvashelper.drawCheckbox(ctx, pos.x, pos.y, check ? animElapsedTime : false, {
									uncheckBgColor: uncheckBgColor,
									checkBgColor: checkBgColor,
									borderColor: borderColor
								});
							};

							var strokeRect = function strokeRect(ctx, color, left, top, width, height) {
								if (!__webpack_provided_Array_dot_isArray(color)) {
									if (color) {
										ctx.strokeStyle = color;
										ctx.strokeRect(left, top, width, height);
									}
								} else {
									var borderColors = _toBoxArray(color);
									canvashelper.strokeColorsRect(ctx, borderColors, left, top, width, height);
								}
							};

							var _webpack_require__ = __webpack_require__( /*! ./internal/canvases */"./internal/canvases.js"),
							    calcStartPosition = _webpack_require__.calcStartPosition;

							var inlines = __webpack_require__( /*! ./element/inlines */"./element/inlines.js");
							var canvashelper = __webpack_require__( /*! ./tools/canvashelper */"./tools/canvashelper.js");
							var themes = __webpack_require__( /*! ./themes */"./themes.js");

							var _webpack_require__2 = __webpack_require__( /*! ./internal/color */"./internal/color.js"),
							    colorToRGB = _webpack_require__2.colorToRGB;

							var Rect = __webpack_require__( /*! ./internal/Rect */"./internal/Rect.js");

							var _webpack_require__3 = __webpack_require__( /*! ./internal/utils */"./internal/utils.js"),
							    getChainSafe = _webpack_require__3.getChainSafe,
							    getOrApply = _webpack_require__3.getOrApply,
							    _toBoxArray = _webpack_require__3.style.toBoxArray;

							var fonts = __webpack_require__( /*! ./internal/fonts */"./internal/fonts.js");
							var calc = __webpack_require__( /*! ./internal/calc */"./internal/calc.js");

							var Theme = function () {
								function Theme(grid) {
									_classCallCheck(this, Theme);

									this._grid = grid;
								}

								_createClass(Theme, [{
									key: 'getThemeColor',
									value: function getThemeColor() {
										for (var _len2 = arguments.length, name = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
											name[_key2] = arguments[_key2];
										}

										return _getThemeColor.apply(undefined, [this._grid].concat(name));
									}
								}, {
									key: 'font',
									get: function get() {
										return _getThemeColor(this._grid, 'font');
									}
								}, {
									key: 'underlayBackgroundColor',
									get: function get() {
										return _getThemeColor(this._grid, 'underlayBackgroundColor');
									}
									// color

								}, {
									key: 'color',
									get: function get() {
										return _getThemeColor(this._grid, 'color');
									}
								}, {
									key: 'frozenRowsColor',
									get: function get() {
										return _getThemeColor(this._grid, 'frozenRowsColor');
									}
									// background

								}, {
									key: 'defaultBgColor',
									get: function get() {
										return _getThemeColor(this._grid, 'defaultBgColor');
									}
								}, {
									key: 'frozenRowsBgColor',
									get: function get() {
										return _getThemeColor(this._grid, 'frozenRowsBgColor');
									}
								}, {
									key: 'selectionBgColor',
									get: function get() {
										return _getThemeColor(this._grid, 'selectionBgColor');
									}
									// border

								}, {
									key: 'borderColor',
									get: function get() {
										return _getThemeColor(this._grid, 'borderColor');
									}
								}, {
									key: 'frozenRowsBorderColor',
									get: function get() {
										return _getThemeColor(this._grid, 'frozenRowsBorderColor');
									}
								}, {
									key: 'hiliteBorderColor',
									get: function get() {
										return _getThemeColor(this._grid, 'hiliteBorderColor');
									}
								}, {
									key: 'checkbox',
									get: function get() {
										var grid = this._grid;
										return this._checkbox || (this._checkbox = {
											get uncheckBgColor() {
												return _getThemeColor(grid, 'checkbox', 'uncheckBgColor');
											},
											get checkBgColor() {
												return _getThemeColor(grid, 'checkbox', 'checkBgColor');
											},
											get borderColor() {
												return _getThemeColor(grid, 'checkbox', 'borderColor');
											}
										});
									}
								}, {
									key: 'button',
									get: function get() {
										var grid = this._grid;
										return this._button || (this._button = {
											get color() {
												return _getThemeColor(grid, 'button', 'color');
											},
											get bgColor() {
												return _getThemeColor(grid, 'button', 'bgColor');
											}
										});
									}
								}]);

								return Theme;
							}();

							var GridCanvasHelper = function () {
								function GridCanvasHelper(grid) {
									_classCallCheck(this, GridCanvasHelper);

									this._grid = grid;
									this._theme = new Theme(grid);
								}

								_createClass(GridCanvasHelper, [{
									key: 'createCalculator',
									value: function createCalculator(context) {
										return {
											calcWidth: function calcWidth(width) {
												return calc.toPx(width, {
													get full() {
														var rect = context.getRect();
														return rect.width;
													},
													get em() {
														var ctx = context.getContext();
														return ctx.measureText('あ').width;
													}
												});
											},
											calcHeight: function calcHeight(height) {
												return calc.toPx(height, {
													get full() {
														var rect = context.getRect();
														return rect.height;
													},
													get em() {
														var ctx = context.getContext();
														return ctx.measureText('あ').width;
													}
												});
											}
										};
									}
								}, {
									key: 'getColor',
									value: function getColor(color, col, row, ctx) {
										return _getColor(color, col, row, this._grid, ctx);
									}
								}, {
									key: 'toBoxArray',
									value: function toBoxArray(obj) {
										return _toBoxArray(obj);
									}
								}, {
									key: 'toBoxPixelArray',
									value: function toBoxPixelArray(value, context) {
										if (typeof value === 'string' || __webpack_provided_Array_dot_isArray(value)) {
											var calculator = this.createCalculator(context);
											var box = _toBoxArray(value);
											return [calculator.calcHeight(box[0]), calculator.calcWidth(box[1]), calculator.calcHeight(box[2]), calculator.calcWidth(box[3])];
										}
										return _toBoxArray(value);
									}
								}, {
									key: 'drawWithClip',
									value: function drawWithClip(context, draw) {
										var drawRect = context.getDrawRect();
										if (!drawRect) {
											return;
										}
										var ctx = context.getContext();

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
								}, {
									key: 'drawBorderWithClip',
									value: function drawBorderWithClip(context, draw) {
										var drawRect = context.getDrawRect();
										if (!drawRect) {
											return;
										}
										var rect = context.getRect();
										var ctx = context.getContext();
										ctx.save();
										try {
											//罫線用clip
											ctx.beginPath();
											var clipLeft = drawRect.left;
											var clipWidth = drawRect.width;
											if (drawRect.left === rect.left) {
												clipLeft += -1;
												clipWidth += 1;
											}
											var clipTop = drawRect.top;
											var clipHeight = drawRect.height;
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
								}, {
									key: 'text',
									value: function text(_text, context) {
										var _this = this;

										var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
										    padding = _ref4.padding,
										    _ref4$offset = _ref4.offset,
										    offset = _ref4$offset === undefined ? 2 : _ref4$offset,
										    color = _ref4.color,
										    _ref4$textAlign = _ref4.textAlign,
										    textAlign = _ref4$textAlign === undefined ? 'left' : _ref4$textAlign,
										    _ref4$textBaseline = _ref4.textBaseline,
										    textBaseline = _ref4$textBaseline === undefined ? 'middle' : _ref4$textBaseline,
										    font = _ref4.font,
										    icons = _ref4.icons;

										var rect = context.getRect();

										var col = context.col,
										    row = context.row;


										if (!color) {
											// header color
											color = this.theme.color;
											var isFrozenCell = this._grid.isFrozenCell(col, row);
											if (isFrozenCell && isFrozenCell.row) {
												color = this.theme.frozenRowsColor;
											}
										}

										this.drawWithClip(context, function (ctx) {
											if (padding) {
												ctx.font = font || ctx.font;
												padding = _this.toBoxPixelArray(padding, context);
												var left = rect.left + padding[3];
												var top = rect.top + padding[0];
												var width = rect.width - padding[1] - padding[3];
												var height = rect.height - padding[0] - padding[2];
												rect = new Rect(left, top, width, height);
											}
											_inlineRect(_this._grid, ctx, _text, rect, col, row, {
												offset: offset,
												color: color,
												textAlign: textAlign,
												textBaseline: textBaseline,
												font: font,
												icons: icons
											});
										});
									}
								}, {
									key: 'multilineText',
									value: function multilineText(multilines, context) {
										var _this2 = this;

										var _ref5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
										    padding = _ref5.padding,
										    _ref5$offset = _ref5.offset,
										    offset = _ref5$offset === undefined ? 2 : _ref5$offset,
										    color = _ref5.color,
										    _ref5$textAlign = _ref5.textAlign,
										    textAlign = _ref5$textAlign === undefined ? 'left' : _ref5$textAlign,
										    _ref5$textBaseline = _ref5.textBaseline,
										    textBaseline = _ref5$textBaseline === undefined ? 'middle' : _ref5$textBaseline,
										    font = _ref5.font,
										    _ref5$lineHeight = _ref5.lineHeight,
										    lineHeight = _ref5$lineHeight === undefined ? '1em' : _ref5$lineHeight,
										    icons = _ref5.icons;

										var rect = context.getRect();

										var col = context.col,
										    row = context.row;


										if (!color) {
											// header color
											color = this.theme.color;
											var isFrozenCell = this._grid.isFrozenCell(col, row);
											if (isFrozenCell && isFrozenCell.row) {
												color = this.theme.frozenRowsColor;
											}
										}

										this.drawWithClip(context, function (ctx) {
											ctx.font = font || ctx.font;
											if (padding) {
												padding = _this2.toBoxPixelArray(padding, context);
												var left = rect.left + padding[3];
												var top = rect.top + padding[0];
												var width = rect.width - padding[1] - padding[3];
												var height = rect.height - padding[0] - padding[2];
												rect = new Rect(left, top, width, height);
											}
											var calculator = _this2.createCalculator(context);
											lineHeight = calculator.calcHeight(lineHeight);
											_multiInlineRect(_this2._grid, ctx, multilines, rect, col, row, {
												offset: offset,
												color: color,
												textAlign: textAlign,
												textBaseline: textBaseline,
												font: font,
												lineHeight: lineHeight,
												icons: icons
											});
										});
									}
								}, {
									key: 'fillText',
									value: function fillText(text, x, y, context) {
										var _ref6 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
										    color = _ref6.color,
										    _ref6$textAlign = _ref6.textAlign,
										    textAlign = _ref6$textAlign === undefined ? 'left' : _ref6$textAlign,
										    _ref6$textBaseline = _ref6.textBaseline,
										    textBaseline = _ref6$textBaseline === undefined ? 'top' : _ref6$textBaseline,
										    font = _ref6.font;

										var col = context.col,
										    row = context.row;


										if (!color) {
											// header color
											color = this.theme.color;
											var isFrozenCell = this._grid.isFrozenCell(col, row);
											if (isFrozenCell && isFrozenCell.row) {
												color = this.theme.frozenRowsColor;
											}
										}
										var ctx = context.getContext();
										ctx.save();
										try {
											ctx.fillStyle = _getColor(color, col, row, this._grid, ctx);
											ctx.textAlign = textAlign;
											ctx.textBaseline = textBaseline;
											ctx.font = font || ctx.font;
											ctx.fillText(text, x, y);
										} finally {
											ctx.restore();
										}
									}
								}, {
									key: 'fillCell',
									value: function fillCell(context) {
										var _this3 = this;

										var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
										    _ref7$fillColor = _ref7.fillColor,
										    fillColor = _ref7$fillColor === undefined ? this.theme.defaultBgColor : _ref7$fillColor;

										var rect = context.getRect();

										this.drawWithClip(context, function (ctx) {
											var col = context.col,
											    row = context.row;

											ctx.fillStyle = _getColor(fillColor, col, row, _this3._grid, ctx);

											ctx.beginPath();
											ctx.rect(rect.left, rect.top, rect.width, rect.height);
											ctx.fill();
										});
									}
								}, {
									key: 'fillCellWithState',
									value: function fillCellWithState(context) {
										var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

										option.fillColor = this.getFillColorState(context, option);
										this.fillCell(context, option);
									}
								}, {
									key: 'fillRect',
									value: function fillRect(rect, context) {
										var _ref8 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
										    _ref8$fillColor = _ref8.fillColor,
										    fillColor = _ref8$fillColor === undefined ? this.theme.defaultBgColor : _ref8$fillColor;

										var ctx = context.getContext();
										ctx.save();
										try {
											var col = context.col,
											    row = context.row;

											ctx.fillStyle = _getColor(fillColor, col, row, this._grid, ctx);

											ctx.beginPath();
											ctx.rect(rect.left, rect.top, rect.width, rect.height);
											ctx.fill();
										} finally {
											ctx.restore();
										}
									}
								}, {
									key: 'fillRectWithState',
									value: function fillRectWithState(rect, context) {
										var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

										option.fillColor = this.getFillColorState(context, option);

										this.fillRect(rect, context, option);
									}
								}, {
									key: 'getFillColorState',
									value: function getFillColorState(context) {
										var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

										var state = context.getSelectState();
										var col = context.col,
										    row = context.row;

										if (!state.selected && state.selection) {
											return this.theme.selectionBgColor;
										} else {
											var isFrozenCell = this._grid.isFrozenCell(col, row);
											if (isFrozenCell && isFrozenCell.row) {
												return this.theme.frozenRowsBgColor;
											}
										}
										return option.fillColor || this.theme.defaultBgColor;
									}
								}, {
									key: 'border',
									value: function border(context) {
										var _this4 = this;

										var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
										    _ref9$borderColor = _ref9.borderColor,
										    borderColor = _ref9$borderColor === undefined ? this.theme.borderColor : _ref9$borderColor,
										    _ref9$lineWidth = _ref9.lineWidth,
										    lineWidth = _ref9$lineWidth === undefined ? 1 : _ref9$lineWidth;

										var rect = context.getRect();

										this.drawBorderWithClip(context, function (ctx) {
											var col = context.col,
											    row = context.row;

											var borderColors = _getColor(borderColor, col, row, _this4._grid, ctx);

											if (lineWidth === 1) {
												ctx.lineWidth = 1;
												strokeRect(ctx, borderColors, rect.left - 0.5, rect.top - 0.5, rect.width, rect.height);
											} else if (lineWidth === 2) {
												ctx.lineWidth = 2;
												strokeRect(ctx, borderColors, rect.left, rect.top, rect.width - 1, rect.height - 1);
											} else {
												ctx.lineWidth = lineWidth;
												var startOffset = lineWidth / 2 - 1;
												strokeRect(ctx, borderColors, rect.left + startOffset, rect.top + startOffset, rect.width - lineWidth + 1, rect.height - lineWidth + 1);
											}
										});
									}
								}, {
									key: 'borderWithState',
									value: function borderWithState(context) {
										var _this5 = this;

										var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

										var rect = context.getRect();
										var state = context.getSelectState();
										var col = context.col,
										    row = context.row;

										//罫線

										if (state.selected) {
											option.borderColor = this.theme.hiliteBorderColor;
											option.lineWidth = 2;
											this.border(context, option);
										} else {
											// header color
											var isFrozenCell = this._grid.isFrozenCell(col, row);
											if (isFrozenCell && isFrozenCell.row) {
												option.borderColor = this.theme.frozenRowsBorderColor;
											}

											option.lineWidth = 1;
											this.border(context, option);

											//追加処理
											var sel = this._grid.selection.select;
											if (sel.col + 1 === col && sel.row === row) {
												//右が選択されている
												this.drawBorderWithClip(context, function (ctx) {
													var borderColors = _toBoxArray(_getColor(_this5.theme.hiliteBorderColor, sel.col, sel.row, _this5._grid, ctx));
													ctx.lineWidth = 1;
													ctx.strokeStyle = borderColors[1];
													ctx.beginPath();
													ctx.moveTo(rect.left - 0.5, rect.top);
													ctx.lineTo(rect.left - 0.5, rect.bottom);
													ctx.stroke();
												});
											} else if (sel.col === col && sel.row + 1 === row) {
												//上が選択されている
												this.drawBorderWithClip(context, function (ctx) {
													var borderColors = _toBoxArray(_getColor(_this5.theme.hiliteBorderColor, sel.col, sel.row, _this5._grid, ctx));
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
								}, {
									key: 'checkbox',
									value: function checkbox(check, context) {
										var _this6 = this;

										var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

										this.drawWithClip(context, function (ctx) {
											drawCheckbox(ctx, context.getRect(), check, _this6, option);
										});
									}
								}, {
									key: 'button',
									value: function button(caption, context) {
										var _this7 = this;

										var _ref10 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
										    _ref10$bgColor = _ref10.bgColor,
										    bgColor = _ref10$bgColor === undefined ? this.theme.button.bgColor : _ref10$bgColor,
										    padding = _ref10.padding,
										    _ref10$offset = _ref10.offset,
										    offset = _ref10$offset === undefined ? 2 : _ref10$offset,
										    _ref10$color = _ref10.color,
										    color = _ref10$color === undefined ? this.theme.button.color : _ref10$color,
										    _ref10$textAlign = _ref10.textAlign,
										    textAlign = _ref10$textAlign === undefined ? 'center' : _ref10$textAlign,
										    _ref10$textBaseline = _ref10.textBaseline,
										    textBaseline = _ref10$textBaseline === undefined ? 'middle' : _ref10$textBaseline,
										    shadow = _ref10.shadow,
										    font = _ref10.font,
										    icons = _ref10.icons;

										var rect = context.getRect();

										this.drawWithClip(context, function (ctx) {
											var col = context.col,
											    row = context.row;

											padding = _this7.toBoxPixelArray(padding || rect.height / 8, context);
											var left = rect.left + padding[3];
											var top = rect.top + padding[0];
											var width = rect.width - padding[1] - padding[3];
											var height = rect.height - padding[0] - padding[2];

											canvashelper.drawButton(ctx, left, top, width, height, {
												bgColor: bgColor,
												radius: rect.height / 8,
												offset: offset,
												shadow: shadow
											});
											_inlineRect(_this7._grid, ctx, caption, new Rect(left, top, width, height), col, row, {
												offset: offset,
												color: color,
												textAlign: textAlign,
												textBaseline: textBaseline,
												font: font,
												icons: icons
											});
										});
									}
								}, {
									key: 'testFontLoad',
									value: function testFontLoad(font, value, context) {
										return _testFontLoad(font, value, context, this._grid);
									}
								}, {
									key: 'theme',
									get: function get() {
										return this._theme;
									}
								}]);

								return GridCanvasHelper;
							}();

							module.exports = GridCanvasHelper;
						}
						/* WEBPACK VAR INJECTION */
					}).call(this, __webpack_require__( /*! @/internal/com.js */"./internal/com.js")["Array_isArray"]);

					/***/
				},

				/***/"./ListGrid.js":
				/*!*********************!*\
      !*** ./ListGrid.js ***!
      \*********************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function ListGridJs(module, exports, __webpack_require__) {

					"use strict";
					/* WEBPACK VAR INJECTION */
					(function (__webpack_provided_Array_dot_isArray) {

						{
							//private methods
							var _getHeaderCellRange = function _getHeaderCellRange(grid, col, row) {
								return grid[_].headerMap.getHeaderCellRange(col, row);
							};

							var _updateRect = function _updateRect(grid, col, row, context) {
								var rect = context.getRect();

								var _getHeaderCellRange2 = _getHeaderCellRange(grid, col, row),
								    startCol = _getHeaderCellRange2.startCol,
								    endCol = _getHeaderCellRange2.endCol,
								    startRow = _getHeaderCellRange2.startRow,
								    endRow = _getHeaderCellRange2.endRow;

								for (var c = col - 1; c >= startCol; c--) {
									rect.left -= grid.getColWidth(c);
								}
								for (var _c = col + 1; _c <= endCol; _c++) {
									rect.right += grid.getColWidth(_c);
								}
								for (var r = row - 1; r >= startRow; r--) {
									rect.top -= grid.getRowHeight(r);
								}
								for (var _r = row + 1; _r <= endRow; _r++) {
									rect.bottom += grid.getRowHeight(_r);
								}
								context.setRect(rect);
							};

							var _getCellValue = function _getCellValue(grid, col, row) {
								if (row < grid[_].headerMap.rowCount) {
									return grid[_].headerMap.getCell(col, row).caption;
								} else {
									var field = grid[_].headerMap.columns[col].field;

									if (isObject(field) && field.get && field.set) {
										field = field.get;
									}
									return _getField(grid, field, row);
								}
							};

							var _setCellValue = function _setCellValue(grid, col, row, value) {
								if (row < grid[_].headerMap.rowCount) {
									// nop
									return false;
								} else {
									var field = grid[_].headerMap.columns[col].field;

									if (isObject(field) && field.get && field.set) {
										field = field.set;
									}
									var index = _getRowRecordIndex(grid, row);
									var res = grid[_].dataSource.setField(index, field, value);
									return isPromise(res) ? res : true;
								}
							};

							var _getCellMessage = function _getCellMessage(grid, col, row) {
								if (row < grid[_].headerMap.rowCount) {
									return null;
								} else {
									var message = grid[_].headerMap.columns[col].message;

									if (!message) {
										return null;
									}
									return _getField(grid, message, row);
								}
							};

							var _getCellIcon0 = function _getCellIcon0(grid, icon, row) {
								if (!isDef(icon)) {
									return null;
								}
								if (__webpack_provided_Array_dot_isArray(icon)) {
									return icon.map(function (i) {
										return _getCellIcon0(grid, i, row);
									});
								}
								if (!isObject(icon)) {
									return _getField(grid, icon, row);
								}
								var retIcon = {};
								icons.iconPropKeys.forEach(function (k) {
									if (icon[k]) {
										var f = _getField(grid, icon[k], row);
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
							};

							var _getCellIcon = function _getCellIcon(grid, col, row) {
								var icon = grid[_].headerMap.columns[col].icon;

								return _getCellIcon0(grid, icon, row);
							};

							var _getField = function _getField(grid, field, row) {
								if (!isDef(field)) {
									return null;
								}
								if (row < grid[_].headerMap.rowCount) {
									return null;
								} else {
									var index = _getRowRecordIndex(grid, row);
									return grid[_].dataSource.getField(index, field);
								}
							};

							var _hasField = function _hasField(grid, field, row) {
								if (!isDef(field)) {
									return false;
								}
								if (row < grid[_].headerMap.rowCount) {
									return false;
								} else {
									var index = _getRowRecordIndex(grid, row);
									return grid[_].dataSource.hasField(index, field);
								}
							};

							var _onDrawValue = function _onDrawValue(grid, cellValue, context, _ref11, style, draw) {
								var col = _ref11.col,
								    row = _ref11.row;

								var helper = grid[_].gridCanvasHelper;

								var drawCellBg = function drawCellBg() {
									var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
									    bgColor = _ref12.bgColor;

									var fillOpt = {
										fillColor: bgColor
									};
									//cell全体を描画
									helper.fillCellWithState(context, fillOpt);
								};
								var drawCellBorder = function drawCellBorder() {

									if (context.col === grid.frozenColCount - 1) {
										//固定列罫線
										var rect = context.getRect();
										helper.drawWithClip(context, function (ctx) {
											var borderColor = context.row >= grid.frozenRowCount ? helper.theme.borderColor : helper.theme.frozenRowsBorderColor;

											var borderColors = helper.toBoxArray(helper.getColor(borderColor, context.col, context.row, ctx));
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

								var drawCellBase = function drawCellBase() {
									var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
									    bgColor = _ref13.bgColor;

									drawCellBg({ bgColor: bgColor });
									drawCellBorder();
								};
								var info = {
									getRecord: function getRecord() {
										return grid.getRowRecord(row);
									},
									getIcon: function getIcon() {
										return _getCellIcon(grid, col, row);
									},
									getMessage: function getMessage() {
										return _getCellMessage(grid, col, row);
									},
									messageHandler: grid[_].messageHandler,
									style: style,
									drawCellBase: drawCellBase,
									drawCellBg: drawCellBg,
									drawCellBorder: drawCellBorder
								};

								return draw(cellValue, info, context, grid);
							};

							var _headerBorderWithState = function _headerBorderWithState(grid, helper, context) {
								var col = context.col,
								    row = context.row;

								var sel = grid.selection.select;
								if (sel.row >= grid[_].headerMap.rowCount) {
									//通常の処理でまかなえる
									helper.borderWithState(context);
									return;
								}

								var _grid$_$headerMap$get = grid[_].headerMap.getCell(col, row),
								    id = _grid$_$headerMap$get.id;

								var rect = context.getRect();
								var option = {};

								var _grid$_$headerMap$get2 = grid[_].headerMap.getCell(sel.col, sel.row),
								    selId = _grid$_$headerMap$get2.id;
								//罫線


								if (selId === id) {
									option.borderColor = helper.theme.hiliteBorderColor;
									option.lineWidth = 2;
									helper.border(context, option);
								} else {
									option.lineWidth = 1;
									// header color
									var isFrozenCell = grid.isFrozenCell(col, row);
									if (isFrozenCell && isFrozenCell.row) {
										option.borderColor = helper.theme.frozenRowsBorderColor;
									}
									helper.border(context, option);

									//追加処理
									if (col > 0 && grid[_].headerMap.getCell(col - 1, row).id === selId) {
										//右が選択されている
										helper.drawBorderWithClip(context, function (ctx) {
											var borderColors = helper.toBoxArray(helper.getColor(helper.theme.hiliteBorderColor, sel.col, sel.row, ctx));
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
										helper.drawBorderWithClip(context, function (ctx) {
											var borderColors = helper.toBoxArray(helper.getColor(helper.theme.hiliteBorderColor, sel.col, sel.row, ctx));
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
							};

							var _refreshHeader = function _refreshHeader(grid) {
								if (grid[_].headerEvents) {
									grid[_].headerEvents.forEach(function (id) {
										return grid.unlisten(id);
									});
								}
								grid[_].headerMap = new HeaderMap(grid[_].header);
								grid[_].headerEvents = [];
								grid[_].headerMap.headerObjects.forEach(function (cell) {
									var _grid$_$headerEvents;

									var ids = cell.headerType.bindGridEvent(grid);
									(_grid$_$headerEvents = grid[_].headerEvents).push.apply(_grid$_$headerEvents, _toConsumableArray(ids));
									if (cell.style) {
										if (cell.style instanceof HeaderBaseStyle) {
											var id = cell.style.listen(HeaderBaseStyle.EVENT_TYPE.CHANGE_STYLE, function () {
												grid.invalidate();
											});
											grid[_].headerEvents.push(id);
										}
									}
								});
								grid[_].headerMap.columns.forEach(function (col, index) {
									if (col.action) {
										var _grid$_$headerEvents2;

										var ids = col.action.bindGridEvent(grid, index, {
											isTarget: function isTarget(col, row) {
												return index === col && grid.frozenRowCount <= row;
											}
										});
										(_grid$_$headerEvents2 = grid[_].headerEvents).push.apply(_grid$_$headerEvents2, _toConsumableArray(ids));
									}
									if (col.columnType) {
										var _grid$_$headerEvents3;

										var _ids = col.columnType.bindGridEvent(grid, index, {
											isTarget: function isTarget(col, row) {
												return index === col && grid.frozenRowCount <= row;
											}
										});
										(_grid$_$headerEvents3 = grid[_].headerEvents).push.apply(_grid$_$headerEvents3, _toConsumableArray(_ids));
									}
									if (col.style) {
										if (col.style instanceof BaseStyle) {
											var id = col.style.listen(columns.style.EVENT_TYPE.CHANGE_STYLE, function () {
												grid.invalidate();
											});
											grid[_].headerEvents.push(id);
										}
									}
								});
								grid.colCount = grid[_].headerMap.columns.length;
								_refreshRowCount(grid);
								grid.frozenRowCount = grid[_].headerMap.rowCount;
								for (var col = 0; col < grid[_].headerMap.columns.length; col++) {
									var column = grid[_].headerMap.columns[col];
									var width = column.width,
									    minWidth = column.minWidth,
									    maxWidth = column.maxWidth;

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
								var isArrayHeaderRowHeight = __webpack_provided_Array_dot_isArray(grid[_].headerRowHeight);
								for (var row = 0; row < grid[_].headerMap.rowCount; row++) {
									var height = isArrayHeaderRowHeight ? grid[_].headerRowHeight[row] : grid[_].headerRowHeight;
									if (height && height > 0) {
										grid.setRowHeight(row, height);
									}
								}
							};

							var _refreshRowCount = function _refreshRowCount(grid) {
								grid.rowCount = grid[_].dataSource.length + grid[_].headerMap.rowCount;
							};

							var _tryWithUpdateDataSource = function _tryWithUpdateDataSource(grid, fn) {
								if (grid[_].dataSourceEventIds) {
									grid[_].dataSourceEventIds.forEach(function (id) {
										return grid[_].handler.off(id);
									});
								}

								fn(grid);

								grid[_].dataSourceEventIds = [grid[_].handler.on(grid[_].dataSource, DataSource.EVENT_TYPE.UPDATED_LENGTH, function () {
									_refreshRowCount(grid);
									grid.invalidate();
								}), grid[_].handler.on(grid[_].dataSource, DataSource.EVENT_TYPE.UPDATED_ORDER, function () {
									grid.invalidate();
								})];
							};

							var _setRecords = function _setRecords(grid) {
								var records = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

								_tryWithUpdateDataSource(grid, function () {
									grid[_].records = records;
									grid[_].dataSource = CachedDataSource.ofArray(grid[_].records);
								});
							};

							var _setDataSource = function _setDataSource(grid, dataSource) {
								_tryWithUpdateDataSource(grid, function () {
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
							};

							var _getRowRecordIndex = function _getRowRecordIndex(grid, row) {
								if (row < grid[_].headerMap.rowCount) {
									return undefined;
								} else {
									return row - grid[_].headerMap.rowCount;
								}
							};
							//end private methods
							//
							//
							//

							var adjustListGridOption = function adjustListGridOption(options) {
								if (options) {
									delete options.frozenRowCount;
									delete options.colCount;
									delete options.rowCount;
								}
								return options;
							};

							/**
        * ListGrid
        * @classdesc cheetahGrid.ListGrid
        * @extends cheetahGrid.core.DrawGrid
        * @memberof cheetahGrid
        */


							var _webpack_require__4 = __webpack_require__( /*! ./internal/utils */"./internal/utils.js"),
							    isDef = _webpack_require__4.isDef,
							    isPromise = _webpack_require__4.isPromise,
							    then = _webpack_require__4.then,
							    isObject = _webpack_require__4.obj.isObject;

							var GridCanvasHelper = __webpack_require__( /*! ./GridCanvasHelper */"./GridCanvasHelper.js");
							var columns = __webpack_require__( /*! ./columns */"./columns.js");
							var BaseStyle = columns.style.BaseStyle;

							var headerType = __webpack_require__( /*! ./header/type */"./header/type.js");

							var _webpack_require__5 = __webpack_require__( /*! ./header/style */"./header/style.js"),
							    HeaderBaseStyle = _webpack_require__5.BaseStyle;

							var DrawGrid = __webpack_require__( /*! ./core/DrawGrid */"./core/DrawGrid.js");

							var _webpack_require__6 = __webpack_require__( /*! ./data */"./data.js"),
							    DataSource = _webpack_require__6.DataSource,
							    CachedDataSource = _webpack_require__6.CachedDataSource;

							var themes = __webpack_require__( /*! ./themes */"./themes.js");
							var icons = __webpack_require__( /*! ./internal/icons */"./internal/icons.js");
							var MessageHandler = __webpack_require__( /*! ./columns/message/MessageHandler */"./columns/message/MessageHandler.js");
							var EVENT_TYPE = __webpack_require__( /*! ./list-grid/EVENT_TYPE */"./list-grid/EVENT_TYPE.js");

							//protected symbol

							var _webpack_require__7 = __webpack_require__( /*! ./internal/symbolManager */"./internal/symbolManager.js"),
							    _ = _webpack_require__7.PROTECTED_SYMBOL;

							var headerId = 0;
							var HeaderMap = function () {
								function HeaderMap(header) {
									_classCallCheck(this, HeaderMap);

									this._columns = [];
									this._headerCells = [];
									this._headerObjects = [];

									this._addHeaders(0, header, []);
									this._setupHeaderType();
								}

								_createClass(HeaderMap, [{
									key: 'getCell',
									value: function getCell(col, row) {
										return this._headerCells[row][col];
									}
								}, {
									key: 'getHeaderCellRangeById',
									value: function getHeaderCellRangeById(id) {
										for (var r = 0; r < this.rowCount; r++) {
											for (var c = 0; c < this.columns.length; c++) {
												if (id === this.getCell(c, r).id) {
													return this.getHeaderCellRange(c, r);
												}
											}
										}
										return undefined;
									}
								}, {
									key: 'getHeaderCellRange',
									value: function getHeaderCellRange(col, row) {
										var result = {
											startCol: col,
											startRow: row,
											endCol: col,
											endRow: row,
											isCellInRange: function isCellInRange(col, row) {
												return this.startCol <= col && col <= this.endCol && this.startRow <= row && row <= this.endRow;
											}
										};

										var _getCell = this.getCell(col, row),
										    id = _getCell.id;

										for (var c = col - 1; c >= 0; c--) {
											if (id !== this.getCell(c, row).id) {
												break;
											}
											result.startCol = c;
										}
										for (var _c2 = col + 1; _c2 < this.columns.length; _c2++) {
											if (id !== this.getCell(_c2, row).id) {
												break;
											}
											result.endCol = _c2;
										}
										for (var r = row - 1; r >= 0; r--) {
											if (id !== this.getCell(col, r).id) {
												break;
											}
											result.startRow = r;
										}
										for (var _r2 = row + 1; _r2 < this.rowCount; _r2++) {
											if (id !== this.getCell(col, _r2).id) {
												break;
											}
											result.endRow = _r2;
										}
										return result;
									}
								}, {
									key: '_addHeaders',
									value: function _addHeaders(row, header, roots) {
										var _this8 = this;

										var rowCells = this._headerCells[row] || this._newRow(row);
										header.forEach(function (hd) {
											var col = _this8._columns.length;
											var cell = {
												id: headerId++,
												caption: hd.caption,
												style: hd.headerStyle,
												sort: hd.sort
											};
											_this8._headerObjects.push(cell);
											rowCells[col] = cell;
											for (var r = row - 1; r >= 0; r--) {
												_this8._headerCells[r][col] = roots[r];
											}
											if (hd.columns) {
												_this8._addHeaders(row + 1, hd.columns, [].concat(_toConsumableArray(roots), [cell]));
											} else {
												_this8._columns.push({
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
												for (var _r3 = row + 1; _r3 < _this8._headerCells.length; _r3++) {
													_this8._headerCells[_r3][col] = cell;
												}
											}
										});
									}
								}, {
									key: '_setupHeaderType',
									value: function _setupHeaderType() {
										var _this9 = this;

										this._headerObjects.forEach(function (cell) {
											cell.range = _this9.getHeaderCellRangeById(cell.id);
											cell.headerType = headerType.create(cell);
										});
									}
								}, {
									key: '_newRow',
									value: function _newRow(row) {
										var newRow = this._headerCells[row] = [];
										if (!this._columns.length) {
											return newRow;
										}
										var prev = this._headerCells[row - 1];
										for (var col = 0; col < prev.length; col++) {
											newRow[col] = prev[col];
										}
										return newRow;
									}
								}, {
									key: 'columns',
									get: function get() {
										return this._columns;
									}
								}, {
									key: 'rowCount',
									get: function get() {
										return this._headerCells.length;
									}
								}, {
									key: 'headerObjects',
									get: function get() {
										return this._headerObjects;
									}
								}]);

								return HeaderMap;
							}();

							var ListGrid = function (_DrawGrid) {
								_inherits(ListGrid, _DrawGrid);

								_createClass(ListGrid, null, [{
									key: 'EVENT_TYPE',
									get: function get() {
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

								}]);

								function ListGrid() {
									var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

									_classCallCheck(this, ListGrid);

									var _this10 = _possibleConstructorReturn(this, (ListGrid.__proto__ || Object.getPrototypeOf(ListGrid)).call(this, adjustListGridOption(options)));

									_this10[_].header = options.header || [];
									_this10[_].headerRowHeight = options.headerRowHeight || [];
									if (options.dataSource) {
										_setDataSource(_this10, options.dataSource);
									} else {
										_setRecords(_this10, options.records);
									}
									_refreshHeader(_this10);
									_this10[_].sortState = {
										col: -1,
										order: undefined
									};
									_this10[_].gridCanvasHelper = new GridCanvasHelper(_this10);
									_this10[_].theme = themes.of(options.theme);
									_this10[_].messageHandler = new MessageHandler(_this10, function (col, row) {
										return _getCellMessage(_this10, col, row);
									});
									_this10.invalidate();
									_this10[_].handler.on(window, 'resize', function () {
										_this10.updateSize();
										_this10.updateScroll();
										_this10.invalidate();
									});
									return _this10;
								}

								_createClass(ListGrid, [{
									key: 'dispose',
									value: function dispose() {
										this[_].messageHandler.dispose();
										_get(ListGrid.prototype.__proto__ || Object.getPrototypeOf(ListGrid.prototype), 'dispose', this).call(this);
									}
									/**
          * header define
          * @type {Array}
          */

								}, {
									key: 'getField',
									value: function getField(col) {
										return this[_].headerMap.columns[col].field;
									}
								}, {
									key: 'getRowRecord',
									value: function getRowRecord(row) {
										if (row < this[_].headerMap.rowCount) {
											return undefined;
										} else {
											return this[_].dataSource.get(_getRowRecordIndex(this, row));
										}
									}
								}, {
									key: 'getGridCanvasHelper',
									value: function getGridCanvasHelper() {
										return this[_].gridCanvasHelper;
									}
								}, {
									key: 'getCopyCellValue',
									value: function getCopyCellValue(col, row) {
										if (row < this[_].headerMap.rowCount) {
											var _getHeaderCellRange3 = _getHeaderCellRange(this, col, row),
											    startCol = _getHeaderCellRange3.startCol,
											    startRow = _getHeaderCellRange3.startRow;

											if (startCol !== col || startRow !== row) {
												return '';
											}
										}
										return _getCellValue(this, col, row);
									}
								}, {
									key: 'onDrawCell',
									value: function onDrawCell(col, row, context) {
										var column = this[_].headerMap.columns[col];

										var draw = void 0;
										var style = void 0;
										if (row < this[_].headerMap.rowCount) {
											var hd = this[_].headerMap.getCell(col, row);
											draw = hd.headerType.onDrawCell;
											style = hd.style;

											_updateRect(this, col, row, context);
										} else {
											draw = column.columnType.onDrawCell;
											style = column.style;
										}
										var cellValue = _getCellValue(this, col, row);
										return _onDrawValue(this, cellValue, context, { col: col, row: row }, style, draw);
									}
								}, {
									key: 'doGetCellValue',
									value: function doGetCellValue(col, row, valueCallback) {
										if (row < this[_].headerMap.rowCount) {
											// nop
											return false;
										} else {
											var value = _getCellValue(this, col, row);
											if (isPromise(value)) {
												//遅延中は無視
												return false;
											}
											valueCallback(value);
										}
										return true;
									}
								}, {
									key: 'doChangeValue',
									value: function doChangeValue(col, row, changeValueCallback) {
										var _this11 = this;

										if (row < this[_].headerMap.rowCount) {
											// nop
											return false;
										} else {
											var before = _getCellValue(this, col, row);
											if (isPromise(before)) {
												//遅延中は無視
												return false;
											}
											var after = changeValueCallback(before);
											if (after === undefined) {
												return false;
											}
											return then(_setCellValue(this, col, row, after), function (ret) {
												if (ret) {
													var field = _this11[_].headerMap.columns[col].field;

													var self = _this11;
													_this11.fireListeners(EVENT_TYPE.CHANGED_VALUE, {
														col: col,
														row: row,
														get record() {
															return self.getRowRecord(row);
														},
														field: field,
														value: after
													});
												}
												return ret;
											});
										}
									}
								}, {
									key: 'bindEventsInternal',
									value: function bindEventsInternal() {
										var _this12 = this;

										this.listen(EVENT_TYPE.SELECTED_CELL, function (e) {
											if (e.row < _this12[_].headerMap.rowCount) {
												var _getHeaderCellRange4 = _getHeaderCellRange(_this12, e.col, e.row),
												    startCol = _getHeaderCellRange4.startCol,
												    endCol = _getHeaderCellRange4.endCol,
												    startRow = _getHeaderCellRange4.startRow,
												    endRow = _getHeaderCellRange4.endRow;

												if (startCol !== endCol || startRow !== endRow) {
													_this12.invalidateGridRect(startCol, startRow, endCol, endRow);
												}
											}
										});
									}
								}, {
									key: 'getMoveLeftColByKeyDownInternal',
									value: function getMoveLeftColByKeyDownInternal(_ref14) {
										var col = _ref14.col,
										    row = _ref14.row;

										if (row < this[_].headerMap.rowCount) {
											var _getHeaderCellRange5 = _getHeaderCellRange(this, col, row),
											    startCol = _getHeaderCellRange5.startCol;

											col = startCol;
										}
										return _get(ListGrid.prototype.__proto__ || Object.getPrototypeOf(ListGrid.prototype), 'getMoveLeftColByKeyDownInternal', this).call(this, { col: col, row: row });
									}
								}, {
									key: 'getMoveRightColByKeyDownInternal',
									value: function getMoveRightColByKeyDownInternal(_ref15) {
										var col = _ref15.col,
										    row = _ref15.row;

										if (row < this[_].headerMap.rowCount) {
											var _getHeaderCellRange6 = _getHeaderCellRange(this, col, row),
											    endCol = _getHeaderCellRange6.endCol;

											col = endCol;
										}
										return _get(ListGrid.prototype.__proto__ || Object.getPrototypeOf(ListGrid.prototype), 'getMoveRightColByKeyDownInternal', this).call(this, { col: col, row: row });
									}
								}, {
									key: 'getMoveUpRowByKeyDownInternal',
									value: function getMoveUpRowByKeyDownInternal(_ref16) {
										var col = _ref16.col,
										    row = _ref16.row;

										if (row < this[_].headerMap.rowCount) {
											var _getHeaderCellRange7 = _getHeaderCellRange(this, col, row),
											    startRow = _getHeaderCellRange7.startRow;

											row = startRow;
										}
										return _get(ListGrid.prototype.__proto__ || Object.getPrototypeOf(ListGrid.prototype), 'getMoveUpRowByKeyDownInternal', this).call(this, { col: col, row: row });
									}
								}, {
									key: 'getMoveDownRowByKeyDownInternal',
									value: function getMoveDownRowByKeyDownInternal(_ref17) {
										var col = _ref17.col,
										    row = _ref17.row;

										if (row < this[_].headerMap.rowCount) {
											var _getHeaderCellRange8 = _getHeaderCellRange(this, col, row),
											    endRow = _getHeaderCellRange8.endRow;

											row = endRow;
										}
										return _get(ListGrid.prototype.__proto__ || Object.getPrototypeOf(ListGrid.prototype), 'getMoveDownRowByKeyDownInternal', this).call(this, { col: col, row: row });
									}
								}, {
									key: 'getOffsetInvalidateCells',
									value: function getOffsetInvalidateCells() {
										return 1;
									}
								}, {
									key: 'getColumnIndexByField',
									value: function getColumnIndexByField(field) {
										for (var columnIndex in this[_].headerMap.columns) {
											if (this[_].headerMap.columns[columnIndex].field === field) {
												return columnIndex - 0;
											}
										}
										return null;
									}
								}, {
									key: 'focusGridCell',
									value: function focusGridCell(field, index) {
										var _selection$range = this.selection.range,
										    _selection$range$star = _selection$range.start,
										    startCol = _selection$range$star.col,
										    startRow = _selection$range$star.row,
										    _selection$range$end = _selection$range.end,
										    endCol = _selection$range$end.col,
										    endRow = _selection$range$end.row;


										var newCol = this.getColumnIndexByField(field);
										var newRow = index + this[_].headerMap.rowCount;
										this.focusCell(newCol, newRow);
										this.selection.select = {
											col: newCol,
											row: newRow
										};
										this.invalidateGridRect(startCol, startRow, endCol, endRow);
										this.invalidateCell(newCol, newRow);
									}
								}, {
									key: 'makeVisibleGridCell',
									value: function makeVisibleGridCell(field, index) {
										this.makeVisibleCell(this.getColumnIndexByField(field), index + this[_].headerMap.rowCount);
									}
								}, {
									key: 'header',
									get: function get() {
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
									,
									set: function set(header) {
										this[_].header = header;
										_refreshHeader(this);
									}
								}, {
									key: 'records',
									get: function get() {
										return this[_].records;
									},
									set: function set(records) {
										_setRecords(this, records);
										_refreshRowCount(this);
										this.invalidate();
									}
								}, {
									key: 'dataSource',
									get: function get() {
										return this[_].dataSource;
									},
									set: function set(dataSource) {
										_setDataSource(this, dataSource);
										_refreshRowCount(this);
										this.invalidate();
									}
								}, {
									key: 'theme',
									get: function get() {
										return this[_].theme;
									},
									set: function set(theme) {
										this[_].theme = themes.of(theme);
										this.invalidate();
									}
								}, {
									key: 'font',
									get: function get() {
										return _get(ListGrid.prototype.__proto__ || Object.getPrototypeOf(ListGrid.prototype), 'font', this) || this[_].gridCanvasHelper.theme.font;
									},
									set: function set(font) {
										_set(ListGrid.prototype.__proto__ || Object.getPrototypeOf(ListGrid.prototype), 'font', font, this);
									}
								}, {
									key: 'underlayBackgroundColor',
									get: function get() {
										return _get(ListGrid.prototype.__proto__ || Object.getPrototypeOf(ListGrid.prototype), 'underlayBackgroundColor', this) || this[_].gridCanvasHelper.theme.underlayBackgroundColor;
									},
									set: function set(underlayBackgroundColor) {
										_set(ListGrid.prototype.__proto__ || Object.getPrototypeOf(ListGrid.prototype), 'underlayBackgroundColor', underlayBackgroundColor, this);
									}
								}, {
									key: 'sortState',
									get: function get() {
										return this[_].sortState;
									},
									set: function set(sortState) {
										this[_].sortState = sortState;
									}
								}]);

								return ListGrid;
							}(DrawGrid);

							module.exports = ListGrid;
						}
						/* WEBPACK VAR INJECTION */
					}).call(this, __webpack_require__( /*! @/internal/com.js */"./internal/com.js")["Array_isArray"]);

					/***/
				},

				/***/"./columns.js":
				/*!********************!*\
      !*** ./columns.js ***!
      \********************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var action = __webpack_require__( /*! ./columns/action */"./columns/action.js");
						var type = __webpack_require__( /*! ./columns/type */"./columns/type.js");
						var style = __webpack_require__( /*! ./columns/style */"./columns/style.js");

						/**
       * columns
       * @type {Object}
       * @namespace cheetahGrid.columns
       * @memberof cheetahGrid
       */
						module.exports = {
							action: action,
							type: type,
							style: style
						};
					}

					/***/
				},

				/***/"./columns/action.js":
				/*!***************************!*\
      !*** ./columns/action.js ***!
      \***************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var BaseAction = __webpack_require__( /*! ./action/BaseAction */"./columns/action/BaseAction.js");
						var Action = __webpack_require__( /*! ./action/Action */"./columns/action/Action.js");
						var Editor = __webpack_require__( /*! ./action/Editor */"./columns/action/Editor.js");
						var CheckEditor = __webpack_require__( /*! ./action/CheckEditor */"./columns/action/CheckEditor.js");
						var ButtonAction = __webpack_require__( /*! ./action/ButtonAction */"./columns/action/ButtonAction.js");
						var SmallDialogInputEditor = __webpack_require__( /*! ./action/SmallDialogInputEditor */"./columns/action/SmallDialogInputEditor.js");
						var InlineInputEditor = __webpack_require__( /*! ./action/InlineInputEditor */"./columns/action/InlineInputEditor.js");
						var InlineMenuEditor = __webpack_require__( /*! ./action/InlineMenuEditor */"./columns/action/InlineMenuEditor.js");

						var ImmutableCheckEditor = function (_CheckEditor) {
							_inherits(ImmutableCheckEditor, _CheckEditor);

							function ImmutableCheckEditor() {
								_classCallCheck(this, ImmutableCheckEditor);

								return _possibleConstructorReturn(this, (ImmutableCheckEditor.__proto__ || Object.getPrototypeOf(ImmutableCheckEditor)).apply(this, arguments));
							}

							_createClass(ImmutableCheckEditor, [{
								key: 'disabled',
								get: function get() {
									return this._disabled;
								}
							}, {
								key: 'readOnly',
								get: function get() {
									return this._readOnly;
								}
							}]);

							return ImmutableCheckEditor;
						}(CheckEditor);

						var ImmutableInputEditor = function (_SmallDialogInputEdit) {
							_inherits(ImmutableInputEditor, _SmallDialogInputEdit);

							function ImmutableInputEditor() {
								_classCallCheck(this, ImmutableInputEditor);

								return _possibleConstructorReturn(this, (ImmutableInputEditor.__proto__ || Object.getPrototypeOf(ImmutableInputEditor)).apply(this, arguments));
							}

							_createClass(ImmutableInputEditor, [{
								key: 'disabled',
								get: function get() {
									return this._disabled;
								}
							}, {
								key: 'readOnly',
								get: function get() {
									return this._readOnly;
								}
							}]);

							return ImmutableInputEditor;
						}(SmallDialogInputEditor);

						/**
       * column actions
       * @type {Object}
       * @namespace cheetahGrid.columns.action
       * @memberof cheetahGrid.columns
       */


						var action = {
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
							of: function of(columnAction) {
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

					/***/
				},

				/***/"./columns/action/Action.js":
				/*!**********************************!*\
      !*** ./columns/action/Action.js ***!
      \**********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionActionJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var _webpack_require__8 = __webpack_require__( /*! ./actionBind */"./columns/action/actionBind.js"),
						    bindCellClickAction = _webpack_require__8.bindCellClickAction,
						    bindCellKeyAction = _webpack_require__8.bindCellKeyAction;

						var BaseAction = __webpack_require__( /*! ./BaseAction */"./columns/action/BaseAction.js");

						var Action = function (_BaseAction) {
							_inherits(Action, _BaseAction);

							function Action() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, Action);

								var _this15 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, option));

								_this15._action = option.action;
								return _this15;
							}

							_createClass(Action, [{
								key: 'clone',
								value: function clone() {
									return new Action(this);
								}
							}, {
								key: 'getState',
								value: function getState(grid) {
									return {};
								}
							}, {
								key: 'bindGridEvent',
								value: function bindGridEvent(grid, col, util) {
									var _this16 = this;

									var state = this.getState(grid);
									var action = function action(cell) {
										if (_this16.disabled) {
											return;
										}
										var record = grid.getRowRecord(cell.row);
										_this16._action(record);
									};

									return [].concat(_toConsumableArray(bindCellClickAction(grid, col, util, {
										action: action,
										mouseOver: function mouseOver(e) {
											if (_this16.disabled) {
												return false;
											}
											state.mouseActiveCell = {
												col: e.col,
												row: e.row
											};
											grid.invalidateCell(e.col, e.row);
											return true;
										},
										mouseOut: function mouseOut(e) {
											delete state.mouseActiveCell;
											grid.invalidateCell(e.col, e.row);
										}
									})), _toConsumableArray(bindCellKeyAction(grid, col, util, {
										action: action
									})));
								}
							}, {
								key: 'action',
								get: function get() {
									return this._action;
								},
								set: function set(action) {
									this._action = action;
								}
							}]);

							return Action;
						}(BaseAction);

						module.exports = Action;
					}

					/***/
				},

				/***/"./columns/action/BaseAction.js":
				/*!**************************************!*\
      !*** ./columns/action/BaseAction.js ***!
      \**************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionBaseActionJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var BaseAction = function () {
							function BaseAction() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, BaseAction);

								this._disabled = option.disabled;
							}

							_createClass(BaseAction, [{
								key: 'clone',
								value: function clone() {
									return new BaseAction(this);
								}
							}, {
								key: 'bindGridEvent',
								value: function bindGridEvent(grid, col, util) {
									return [];
								}
							}, {
								key: 'onChangeDisabledInternal',
								value: function onChangeDisabledInternal() {}
							}, {
								key: 'disabled',
								get: function get() {
									return this._disabled;
								},
								set: function set(disabled) {
									this._disabled = !!disabled;
									this.onChangeDisabledInternal();
								}
							}]);

							return BaseAction;
						}();

						module.exports = BaseAction;
					}

					/***/
				},

				/***/"./columns/action/BaseInputEditor.js":
				/*!*******************************************!*\
      !*** ./columns/action/BaseInputEditor.js ***!
      \*******************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionBaseInputEditorJs(module, exports, __webpack_require__) {

					"use strict";

					{

						var Editor = __webpack_require__( /*! ./Editor */"./columns/action/Editor.js");

						var _webpack_require__9 = __webpack_require__( /*! ../../core/DrawGrid */"./core/DrawGrid.js"),
						    _webpack_require__9$E = _webpack_require__9.EVENT_TYPE,
						    INPUT_CELL = _webpack_require__9$E.INPUT_CELL,
						    EDITABLEINPUT_CELL = _webpack_require__9$E.EDITABLEINPUT_CELL,
						    SELECTED_CELL = _webpack_require__9$E.SELECTED_CELL,
						    DBLCLICK_CELL = _webpack_require__9$E.DBLCLICK_CELL,
						    DBLTAP_CELL = _webpack_require__9$E.DBLTAP_CELL,
						    KEYDOWN = _webpack_require__9$E.KEYDOWN,
						    MODIFY_STATUS_EDITABLEINPUT_CELL = _webpack_require__9$E.MODIFY_STATUS_EDITABLEINPUT_CELL,
						    SCROLL = _webpack_require__9$E.SCROLL;

						var KEY_ENTER = 13;
						var KEY_F2 = 113;

						var BaseInputEditor = function (_Editor) {
							_inherits(BaseInputEditor, _Editor);

							function BaseInputEditor() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, BaseInputEditor);

								return _possibleConstructorReturn(this, (BaseInputEditor.__proto__ || Object.getPrototypeOf(BaseInputEditor)).call(this, option));
							}

							_createClass(BaseInputEditor, [{
								key: 'clone',
								value: function clone() {
									return new BaseInputEditor(this);
								}
							}, {
								key: 'onInputCellInternal',
								value: function onInputCellInternal(grid, cell, inputValue) {
									throw new Error();
								}
							}, {
								key: 'onOpenCellInternal',
								value: function onOpenCellInternal(grid, cell) {
									throw new Error();
								}
							}, {
								key: 'onChangeSelectCellInternal',
								value: function onChangeSelectCellInternal(grid, cell, selected) {
									throw new Error();
								}
							}, {
								key: 'onSetInputAttrsInternal',
								value: function onSetInputAttrsInternal(grid, cell, input) {
									throw new Error();
								}
							}, {
								key: 'onGridScrollInternal',
								value: function onGridScrollInternal(grid) {
									throw new Error();
								}
							}, {
								key: 'bindGridEvent',
								value: function bindGridEvent(grid, col, util) {
									var _this18 = this;

									var open = function open(cell) {
										if (_this18.readOnly || _this18.disabled) {
											return;
										}
										_this18.onOpenCellInternal(grid, cell);
									};

									var input = function input(cell, value) {
										if (_this18.readOnly || _this18.disabled) {
											return;
										}
										_this18.onInputCellInternal(grid, cell, value);
									};
									return [grid.listen(INPUT_CELL, function (e) {
										if (!util.isTarget(e.col, e.row)) {
											return;
										}
										input({
											col: e.col,
											row: e.row
										}, e.value);
									}), grid.listen(DBLCLICK_CELL, function (cell) {
										if (!util.isTarget(cell.col, cell.row)) {
											return;
										}
										open({
											col: cell.col,
											row: cell.row
										});
									}), grid.listen(DBLTAP_CELL, function (e) {
										if (!util.isTarget(e.col, e.row)) {
											return;
										}
										open({
											col: e.col,
											row: e.row
										});

										e.event.preventDefault();
										e.event.stopPropagation();
									}), grid.listen(KEYDOWN, function (keyCode, e) {
										if (keyCode !== KEY_F2 && keyCode !== KEY_ENTER) {
											return;
										}
										var sel = grid.selection.select;
										if (!util.isTarget(sel.col, sel.row)) {
											return;
										}
										open({
											col: sel.col,
											row: sel.row
										});
									}), grid.listen(SELECTED_CELL, function (e) {
										_this18.onChangeSelectCellInternal(grid, { col: e.col, row: e.row }, e.selected);
									}), grid.listen(SCROLL, function () {
										_this18.onGridScrollInternal(grid);
									}), grid.listen(EDITABLEINPUT_CELL, function (cell) {
										if (!util.isTarget(cell.col, cell.row)) {
											return false;
										}
										if (_this18.readOnly || _this18.disabled) {
											return false;
										}
										return true;
									}), grid.listen(MODIFY_STATUS_EDITABLEINPUT_CELL, function (cell) {
										if (!util.isTarget(cell.col, cell.row)) {
											return;
										}
										if (_this18.readOnly || _this18.disabled) {
											return;
										}
										_this18.onSetInputAttrsInternal(grid, {
											col: cell.col,
											row: cell.row
										}, cell.input);
									})];
								}
							}]);

							return BaseInputEditor;
						}(Editor);

						module.exports = BaseInputEditor;
					}

					/***/
				},

				/***/"./columns/action/ButtonAction.js":
				/*!****************************************!*\
      !*** ./columns/action/ButtonAction.js ***!
      \****************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionButtonActionJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var _webpack_require__10 = __webpack_require__( /*! ../../internal/utils */"./internal/utils.js"),
						    setReadonly = _webpack_require__10.obj.setReadonly;

						var Action = __webpack_require__( /*! ./Action */"./columns/action/Action.js");

						var _webpack_require__11 = __webpack_require__( /*! ../../internal/symbolManager */"./internal/symbolManager.js"),
						    BUTTON_COLUMN_STATE_ID = _webpack_require__11.BUTTON_COLUMN_STATE_ID;

						var ButtonAction = function (_Action) {
							_inherits(ButtonAction, _Action);

							function ButtonAction() {
								_classCallCheck(this, ButtonAction);

								return _possibleConstructorReturn(this, (ButtonAction.__proto__ || Object.getPrototypeOf(ButtonAction)).apply(this, arguments));
							}

							_createClass(ButtonAction, [{
								key: 'getState',
								value: function getState(grid) {
									if (!grid[BUTTON_COLUMN_STATE_ID]) {
										setReadonly(grid, BUTTON_COLUMN_STATE_ID, {});
									}
									return grid[BUTTON_COLUMN_STATE_ID];
								}
							}]);

							return ButtonAction;
						}(Action);

						module.exports = ButtonAction;
					}

					/***/
				},

				/***/"./columns/action/CheckEditor.js":
				/*!***************************************!*\
      !*** ./columns/action/CheckEditor.js ***!
      \***************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionCheckEditorJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var toggleValue = function toggleValue(val) {
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
						};

						var _webpack_require__12 = __webpack_require__( /*! ../../internal/utils */"./internal/utils.js"),
						    setReadonly = _webpack_require__12.obj.setReadonly,
						    isPromise = _webpack_require__12.isPromise;

						var _webpack_require__13 = __webpack_require__( /*! ./actionBind */"./columns/action/actionBind.js"),
						    bindCellClickAction = _webpack_require__13.bindCellClickAction,
						    bindCellKeyAction = _webpack_require__13.bindCellKeyAction;

						var animate = __webpack_require__( /*! ../../internal/animate */"./internal/animate.js");

						var Editor = __webpack_require__( /*! ./Editor */"./columns/action/Editor.js");

						var _webpack_require__14 = __webpack_require__( /*! ../../internal/symbolManager */"./internal/symbolManager.js"),
						    CHECK_COLUMN_STATE_ID = _webpack_require__14.CHECK_COLUMN_STATE_ID;

						var KEY_ENTER = 13;
						var KEY_SPACE = 32;

						var CheckEditor = function (_Editor2) {
							_inherits(CheckEditor, _Editor2);

							function CheckEditor() {
								_classCallCheck(this, CheckEditor);

								return _possibleConstructorReturn(this, (CheckEditor.__proto__ || Object.getPrototypeOf(CheckEditor)).apply(this, arguments));
							}

							_createClass(CheckEditor, [{
								key: 'clone',
								value: function clone() {
									return new CheckEditor(this);
								}
							}, {
								key: 'bindGridEvent',
								value: function bindGridEvent(grid, col, util) {
									var _this21 = this;

									if (!grid[CHECK_COLUMN_STATE_ID]) {
										setReadonly(grid, CHECK_COLUMN_STATE_ID, {});
									}
									var state = grid[CHECK_COLUMN_STATE_ID];

									var _action = function _action(cell) {
										var key = cell.col + ':' + cell.row;
										var blockKey = key + '::block';
										if (_this21.readOnly || _this21.disabled || state[blockKey]) {
											return;
										}
										var ret = grid.doChangeValue(cell.col, cell.row, toggleValue);
										if (ret) {

											var onChange = function onChange() {
												// checkbox animation
												animate(200, function (point) {
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
												ret.then(function () {
													delete state[blockKey];
													onChange();
												});
											} else {
												onChange();
											}
										}
									};
									return [].concat(_toConsumableArray(bindCellClickAction(grid, col, util, {
										action: _action,
										mouseOver: function mouseOver(e) {
											if (_this21.disabled) {
												return false;
											}
											state.mouseActiveCell = {
												col: e.col,
												row: e.row
											};
											grid.invalidateCell(e.col, e.row);
											return true;
										},
										mouseOut: function mouseOut(e) {
											delete state.mouseActiveCell;
											grid.invalidateCell(e.col, e.row);
										}
									})), _toConsumableArray(bindCellKeyAction(grid, col, util, {
										action: function action(e) {
											var selrange = grid.selection.range;
											var col = grid.selection.select.col;
											for (var row = selrange.start.row; row <= selrange.end.row; row++) {
												if (!util.isTarget(col, row)) {
													continue;
												}
												_action({
													col: col,
													row: row
												});
											}
										},
										acceptKeys: [KEY_ENTER, KEY_SPACE]
									})));
								}
							}]);

							return CheckEditor;
						}(Editor);

						module.exports = CheckEditor;
					}

					/***/
				},

				/***/"./columns/action/Editor.js":
				/*!**********************************!*\
      !*** ./columns/action/Editor.js ***!
      \**********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionEditorJs(module, exports, __webpack_require__) {

					"use strict";

					{

						var BaseAction = __webpack_require__( /*! ./BaseAction */"./columns/action/BaseAction.js");

						var Editor = function (_BaseAction2) {
							_inherits(Editor, _BaseAction2);

							function Editor() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, Editor);

								var _this22 = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, option));

								_this22._readOnly = option.readOnly;
								return _this22;
							}

							_createClass(Editor, [{
								key: 'clone',
								value: function clone() {
									return new Editor(this);
								}
							}, {
								key: 'onChangeReadOnlyInternal',
								value: function onChangeReadOnlyInternal() {}
							}, {
								key: 'readOnly',
								get: function get() {
									return this._readOnly;
								},
								set: function set(readOnly) {
									this._readOnly = !!readOnly;
									this.onChangeReadOnlyInternal();
								}
							}]);

							return Editor;
						}(BaseAction);

						module.exports = Editor;
					}

					/***/
				},

				/***/"./columns/action/InlineInputEditor.js":
				/*!*********************************************!*\
      !*** ./columns/action/InlineInputEditor.js ***!
      \*********************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionInlineInputEditorJs(module, exports, __webpack_require__) {

					"use strict";
					/* WEBPACK VAR INJECTION */
					(function (__webpack_provided_Array_dot_isArray) {
						var _webpack_require__15 = __webpack_require__( /*! ../../internal/utils */"./internal/utils.js"),
						    setReadonly = _webpack_require__15.obj.setReadonly;

						var BaseInputEditor = __webpack_require__( /*! ./BaseInputEditor */"./columns/action/BaseInputEditor.js");
						var InlineInputElement = __webpack_require__( /*! ./internal/InlineInputElement */"./columns/action/internal/InlineInputElement.js");

						var _webpack_require__16 = __webpack_require__( /*! ../../internal/symbolManager */"./internal/symbolManager.js"),
						    _ = _webpack_require__16.INLINE_INPUT_EDITOR_STATE_ID;

						var globalElement = null;
						var bindGridCount = 0;
						function attachInput(grid, cell, editor, value) {
							if (!grid[_]) {
								setReadonly(grid, _, {});
							}
							if (!globalElement) {
								globalElement = new InlineInputElement();
							}
							var state = grid[_];
							if (!state.element) {
								state.element = globalElement;
								bindGridCount++;
								grid.addDisposable({
									dispose: function dispose() {
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

						var InlineInputEditor = function (_BaseInputEditor) {
							_inherits(InlineInputEditor, _BaseInputEditor);

							function InlineInputEditor() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, InlineInputEditor);

								var _this23 = _possibleConstructorReturn(this, (InlineInputEditor.__proto__ || Object.getPrototypeOf(InlineInputEditor)).call(this, option));

								_this23._classList = option.classList;
								_this23._type = option.type;
								return _this23;
							}

							_createClass(InlineInputEditor, [{
								key: 'clone',
								value: function clone() {
									return new InlineInputEditor(this);
								}
							}, {
								key: 'onInputCellInternal',
								value: function onInputCellInternal(grid, cell, inputValue) {
									attachInput(grid, cell, this, inputValue);
								}
							}, {
								key: 'onOpenCellInternal',
								value: function onOpenCellInternal(grid, cell) {
									var _this24 = this;

									grid.doGetCellValue(cell.col, cell.row, function (value) {
										attachInput(grid, cell, _this24, value);
									});
								}
							}, {
								key: 'onChangeSelectCellInternal',
								value: function onChangeSelectCellInternal(grid, cell, selected) {
									doChangeValue(grid);
									detachInput();
								}
							}, {
								key: 'onGridScrollInternal',
								value: function onGridScrollInternal(grid) {
									doChangeValue(grid);
									detachInput(true);
								}
							}, {
								key: 'onChangeDisabledInternal',
								value: function onChangeDisabledInternal() {
									// cancel input
									detachInput(true);
								}
							}, {
								key: 'onChangeReadOnlyInternal',
								value: function onChangeReadOnlyInternal() {
									// cancel input
									detachInput(true);
								}
							}, {
								key: 'onSetInputAttrsInternal',
								value: function onSetInputAttrsInternal(grid, cell, input) {
									InlineInputElement.setInputAttrs(this, grid, input);
								}
							}, {
								key: 'classList',
								get: function get() {
									return this._classList && (__webpack_provided_Array_dot_isArray(this._classList) ? this._classList : [this._classList]);
								},
								set: function set(classList) {
									this._classList = classList;
								}
							}, {
								key: 'type',
								get: function get() {
									return this._type;
								},
								set: function set(type) {
									this._type = type;
								}
							}]);

							return InlineInputEditor;
						}(BaseInputEditor);

						module.exports = InlineInputEditor;
						/* WEBPACK VAR INJECTION */
					}).call(this, __webpack_require__( /*! @/internal/com.js */"./internal/com.js")["Array_isArray"]);

					/***/
				},

				/***/"./columns/action/InlineMenuEditor.js":
				/*!********************************************!*\
      !*** ./columns/action/InlineMenuEditor.js ***!
      \********************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionInlineMenuEditorJs(module, exports, __webpack_require__) {

					"use strict";
					/* WEBPACK VAR INJECTION */
					(function (__webpack_provided_Array_dot_isArray) {
						var _webpack_require__17 = __webpack_require__( /*! ../../internal/utils */"./internal/utils.js"),
						    setReadonly = _webpack_require__17.obj.setReadonly;

						var _webpack_require__18 = __webpack_require__( /*! ../../internal/menu-items */"./internal/menu-items.js"),
						    normalize = _webpack_require__18.normalize;

						var Editor = __webpack_require__( /*! ./Editor */"./columns/action/Editor.js");

						var _webpack_require__19 = __webpack_require__( /*! ../../core/DrawGrid */"./core/DrawGrid.js"),
						    _webpack_require__19$ = _webpack_require__19.EVENT_TYPE,
						    SELECTED_CELL = _webpack_require__19$.SELECTED_CELL,
						    CLICK_CELL = _webpack_require__19$.CLICK_CELL,
						    KEYDOWN = _webpack_require__19$.KEYDOWN,
						    SCROLL = _webpack_require__19$.SCROLL,
						    MOUSEOVER_CELL = _webpack_require__19$.MOUSEOVER_CELL,
						    MOUSEOUT_CELL = _webpack_require__19$.MOUSEOUT_CELL,
						    MOUSEMOVE_CELL = _webpack_require__19$.MOUSEMOVE_CELL;

						var InlineMenuElement = __webpack_require__( /*! ./internal/InlineMenuElement */"./columns/action/internal/InlineMenuElement.js");

						var _webpack_require__20 = __webpack_require__( /*! ../../internal/symbolManager */"./internal/symbolManager.js"),
						    _ = _webpack_require__20.INLINE_MENU_EDITOR_STATE_ID;

						var globalElement = null;
						var bindGridCount = 0;
						function attachMenu(grid, cell, editor, value) {
							if (!grid[_]) {
								setReadonly(grid, _, {});
							}
							if (!globalElement) {
								globalElement = new InlineMenuElement();
							}
							var state = grid[_];
							if (!state.element) {
								state.element = globalElement;
								bindGridCount++;
								grid.addDisposable({
									dispose: function dispose() {
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

						var KEY_ENTER = 13;
						var KEY_F2 = 113;

						var InlineMenuEditor = function (_Editor3) {
							_inherits(InlineMenuEditor, _Editor3);

							function InlineMenuEditor() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, InlineMenuEditor);

								var _this25 = _possibleConstructorReturn(this, (InlineMenuEditor.__proto__ || Object.getPrototypeOf(InlineMenuEditor)).call(this, option));

								_this25._classList = option.classList;
								_this25._options = normalize(option.options);
								return _this25;
							}

							_createClass(InlineMenuEditor, [{
								key: 'dispose',
								value: function dispose() {}
							}, {
								key: 'clone',
								value: function clone() {
									return new InlineMenuEditor(this);
								}
							}, {
								key: 'onChangeDisabledInternal',
								value: function onChangeDisabledInternal() {
									// cancel input
									detachMenu(true);
								}
							}, {
								key: 'onChangeReadOnlyInternal',
								value: function onChangeReadOnlyInternal() {
									// cancel input
									detachMenu(true);
								}
							}, {
								key: 'bindGridEvent',
								value: function bindGridEvent(grid, col, util) {
									var _this26 = this;

									var open = function open(cell) {
										if (_this26.readOnly || _this26.disabled) {
											return;
										}
										grid.doGetCellValue(cell.col, cell.row, function (value) {
											attachMenu(grid, cell, _this26, value);
										});
									};

									return [grid.listen(CLICK_CELL, function (cell) {
										if (!util.isTarget(cell.col, cell.row)) {
											return;
										}
										open({
											col: cell.col,
											row: cell.row
										});
									}), grid.listen(KEYDOWN, function (keyCode, e) {
										if (keyCode !== KEY_F2 && keyCode !== KEY_ENTER) {
											return;
										}
										var sel = grid.selection.select;
										if (!util.isTarget(sel.col, sel.row)) {
											return;
										}
										open({
											col: sel.col,
											row: sel.row
										});
									}), grid.listen(SELECTED_CELL, function (e) {
										detachMenu();
									}), grid.listen(SCROLL, function () {
										detachMenu(true);
									}),

									// mouse move
									grid.listen(MOUSEOVER_CELL, function (e) {
										if (_this26.readOnly || _this26.disabled) {
											return;
										}
										if (!util.isTarget(e.col, e.row)) {
											return;
										}
										grid.getElement().style.cursor = 'pointer';
									}), grid.listen(MOUSEMOVE_CELL, function (e) {
										if (_this26.readOnly || _this26.disabled) {
											return;
										}
										if (!util.isTarget(e.col, e.row)) {
											return;
										}
										if (!grid.getElement().style.cursor) {
											grid.getElement().style.cursor = 'pointer';
										}
									}), grid.listen(MOUSEOUT_CELL, function (e) {
										if (!util.isTarget(e.col, e.row)) {
											return;
										}
										grid.getElement().style.cursor = '';
									})];
								}
							}, {
								key: 'classList',
								get: function get() {
									return this._classList && (__webpack_provided_Array_dot_isArray(this._classList) ? this._classList : [this._classList]);
								},
								set: function set(classList) {
									this._classList = classList;
								}
							}, {
								key: 'options',
								get: function get() {
									return this._options;
								},
								set: function set(options) {
									this._options = normalize(options);
								}
							}]);

							return InlineMenuEditor;
						}(Editor);

						module.exports = InlineMenuEditor;
						/* WEBPACK VAR INJECTION */
					}).call(this, __webpack_require__( /*! @/internal/com.js */"./internal/com.js")["Array_isArray"]);

					/***/
				},

				/***/"./columns/action/SmallDialogInputEditor.js":
				/*!**************************************************!*\
      !*** ./columns/action/SmallDialogInputEditor.js ***!
      \**************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionSmallDialogInputEditorJs(module, exports, __webpack_require__) {

					"use strict";
					/* WEBPACK VAR INJECTION */
					(function (__webpack_provided_Array_dot_isArray) {
						var _webpack_require__21 = __webpack_require__( /*! ../../internal/utils */"./internal/utils.js"),
						    setReadonly = _webpack_require__21.obj.setReadonly;

						var SmallDialogInputElement = __webpack_require__( /*! ./internal/SmallDialogInputElement */"./columns/action/internal/SmallDialogInputElement.js");

						var _webpack_require__22 = __webpack_require__( /*! ../../internal/symbolManager */"./internal/symbolManager.js"),
						    _ = _webpack_require__22.SMALL_DIALOG_INPUT_EDITOR_STATE_ID;

						var globalElement = null;
						var bindGridCount = 0;
						function attachInput(grid, cell, editor, value) {
							if (!grid[_]) {
								setReadonly(grid, _, {});
							}
							if (!globalElement) {
								globalElement = new SmallDialogInputElement();
							}
							var state = grid[_];
							if (!state.element) {
								state.element = globalElement;
								bindGridCount++;
								grid.addDisposable({
									dispose: function dispose() {
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
						var BaseInputEditor = __webpack_require__( /*! ./BaseInputEditor */"./columns/action/BaseInputEditor.js");

						var SmallDialogInputEditor = function (_BaseInputEditor2) {
							_inherits(SmallDialogInputEditor, _BaseInputEditor2);

							function SmallDialogInputEditor() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, SmallDialogInputEditor);

								var _this27 = _possibleConstructorReturn(this, (SmallDialogInputEditor.__proto__ || Object.getPrototypeOf(SmallDialogInputEditor)).call(this, option));

								_this27._helperText = option.helperText;
								_this27._inputValidator = option.inputValidator;
								_this27._validator = option.validator;
								_this27._classList = option.classList;
								_this27._type = option.type;
								return _this27;
							}

							_createClass(SmallDialogInputEditor, [{
								key: 'dispose',
								value: function dispose() {
									this._inputDialogManager.dispose();
									this._inputDialogManager = null;
								}
							}, {
								key: 'clone',
								value: function clone() {
									return new SmallDialogInputEditor(this);
								}
							}, {
								key: 'onInputCellInternal',
								value: function onInputCellInternal(grid, cell, inputValue) {
									attachInput(grid, cell, this, inputValue);
								}
							}, {
								key: 'onOpenCellInternal',
								value: function onOpenCellInternal(grid, cell) {
									var _this28 = this;

									grid.doGetCellValue(cell.col, cell.row, function (value) {
										attachInput(grid, cell, _this28, value);
									});
								}
							}, {
								key: 'onChangeSelectCellInternal',
								value: function onChangeSelectCellInternal(grid, cell, selected) {
									// cancel input
									detachInput();
								}
							}, {
								key: 'onGridScrollInternal',
								value: function onGridScrollInternal(grid) {
									// cancel input
									detachInput(true);
								}
							}, {
								key: 'onChangeDisabledInternal',
								value: function onChangeDisabledInternal() {
									// cancel input
									detachInput(true);
								}
							}, {
								key: 'onChangeReadOnlyInternal',
								value: function onChangeReadOnlyInternal() {
									// cancel input
									detachInput(true);
								}
							}, {
								key: 'onSetInputAttrsInternal',
								value: function onSetInputAttrsInternal(grid, cell, input) {
									SmallDialogInputElement.setInputAttrs(this, grid, input);
								}
							}, {
								key: 'classList',
								get: function get() {
									return this._classList && (__webpack_provided_Array_dot_isArray(this._classList) ? this._classList : [this._classList]);
								},
								set: function set(classList) {
									this._classList = classList;
								}
							}, {
								key: 'type',
								get: function get() {
									return this._type;
								},
								set: function set(type) {
									this._type = type;
								}
							}, {
								key: 'helperText',
								get: function get() {
									return this._helperText;
								}
							}, {
								key: 'inputValidator',
								get: function get() {
									return this._inputValidator;
								}
							}, {
								key: 'validator',
								get: function get() {
									return this._validator;
								}
							}]);

							return SmallDialogInputEditor;
						}(BaseInputEditor);

						module.exports = SmallDialogInputEditor;
						/* WEBPACK VAR INJECTION */
					}).call(this, __webpack_require__( /*! @/internal/com.js */"./internal/com.js")["Array_isArray"]);

					/***/
				},

				/***/"./columns/action/actionBind.js":
				/*!**************************************!*\
      !*** ./columns/action/actionBind.js ***!
      \**************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionActionBindJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var bindCellClickAction = function bindCellClickAction(grid, col, util, _ref18) {
							var action = _ref18.action,
							    mouseOver = _ref18.mouseOver,
							    mouseOut = _ref18.mouseOut;

							return [
							// click
							grid.listen(CLICK_CELL, function (e) {
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
							grid.listen(MOUSEOVER_CELL, function (e) {
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
							}), grid.listen(MOUSEOUT_CELL, function (e) {
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
						};

						var bindCellKeyAction = function bindCellKeyAction(grid, col, util, _ref19) {
							var action = _ref19.action,
							    _ref19$acceptKeys = _ref19.acceptKeys,
							    acceptKeys = _ref19$acceptKeys === undefined ? [] : _ref19$acceptKeys;

							acceptKeys = [].concat(_toConsumableArray(acceptKeys), [KEY_ENTER]);
							return [
							// enter key down
							grid.listen(KEYDOWN, function (keyCode, e) {
								if (acceptKeys.indexOf(keyCode) === -1) {
									return;
								}
								var sel = grid.selection.select;
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
						};

						var _webpack_require__23 = __webpack_require__( /*! ../../internal/utils */"./internal/utils.js"),
						    isPromise = _webpack_require__23.isPromise,
						    cancel = _webpack_require__23.event.cancel;

						var _webpack_require__24 = __webpack_require__( /*! ../../core/DrawGrid */"./core/DrawGrid.js"),
						    _webpack_require__24$ = _webpack_require__24.EVENT_TYPE,
						    CLICK_CELL = _webpack_require__24$.CLICK_CELL,
						    MOUSEOVER_CELL = _webpack_require__24$.MOUSEOVER_CELL,
						    MOUSEOUT_CELL = _webpack_require__24$.MOUSEOUT_CELL,
						    KEYDOWN = _webpack_require__24$.KEYDOWN;

						var KEY_ENTER = 13;


						module.exports = {
							bindCellClickAction: bindCellClickAction,
							bindCellKeyAction: bindCellKeyAction
						};
					}

					/***/
				},

				/***/"./columns/action/internal/InlineInputElement.css":
				/*!********************************************************!*\
      !*** ./columns/action/internal/InlineInputElement.css ***!
      \********************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionInternalInlineInputElementCss(module, exports, __webpack_require__) {

					var content = __webpack_require__( /*! !../../../../../node_modules/css-loader?minimize!./InlineInputElement.css */"../../node_modules/css-loader/index.js?minimize!./columns/action/internal/InlineInputElement.css");

					if (typeof content === 'string') content = [[module.i, content, '']];

					var transform;
					var insertInto;

					var options = { "hmr": true };

					options.transform = transform;
					options.insertInto = undefined;

					var update = __webpack_require__( /*! ../../../../../node_modules/style-loader/lib/addStyles.js */"../../node_modules/style-loader/lib/addStyles.js")(content, options);

					if (content.locals) module.exports = content.locals;

					if (false) {}

					/***/
				},

				/***/"./columns/action/internal/InlineInputElement.js":
				/*!*******************************************************!*\
      !*** ./columns/action/internal/InlineInputElement.js ***!
      \*******************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionInternalInlineInputElementJs(module, exports, __webpack_require__) {

					"use strict";

					var _webpack_require__25 = __webpack_require__( /*! ../../../internal/utils */"./internal/utils.js"),
					    _webpack_require__25$ = _webpack_require__25.event,
					    getKeyCode = _webpack_require__25$.getKeyCode,
					    cancelEvent = _webpack_require__25$.cancel;

					var EventHandler = __webpack_require__( /*! ../../../internal/EventHandler */"./internal/EventHandler.js");

					var _webpack_require__26 = __webpack_require__( /*! ../../../internal/dom */"./internal/dom.js"),
					    createElement = _webpack_require__26.createElement;

					var KEY_ENTER = 13;

					var CLASSNAME = 'cheetah-grid__inline-input';

					function createInputElement() {
						__webpack_require__( /*! ./InlineInputElement.css */"./columns/action/internal/InlineInputElement.css");
						return createElement('input', { classList: CLASSNAME });
					}

					function _setInputAttrs(editor, grid, input) {
						var classList = editor.classList,
						    type = editor.type;

						if (classList) {
							var _input$classList;

							(_input$classList = input.classList).add.apply(_input$classList, _toConsumableArray(classList));
						}
						input.type = type || '';
					}

					var InlineInputElement = function () {
						_createClass(InlineInputElement, null, [{
							key: 'setInputAttrs',
							value: function setInputAttrs() {
								_setInputAttrs.apply(undefined, arguments);
							}
						}]);

						function InlineInputElement() {
							_classCallCheck(this, InlineInputElement);

							this._handler = new EventHandler();
							this._input = createInputElement();
							this._bindInputEvents();
						}

						_createClass(InlineInputElement, [{
							key: 'dispose',
							value: function dispose() {
								this.detach();
								this._handler.dispose();
								this._input = null;
								this._beforePropEditor = null;
							}
						}, {
							key: 'attach',
							value: function attach(grid, editor, col, row, value) {
								var input = this._input;
								var handler = this._handler;

								if (this._beforePropEditor) {
									var classList = this._beforePropEditor.classList;

									if (classList) {
										var _input$classList2;

										(_input$classList2 = input.classList).remove.apply(_input$classList2, _toConsumableArray(classList));
									}
								}

								input.style.font = grid.font || '16px sans-serif';

								var _grid$getAttachCellAr = grid.getAttachCellArea(col, row),
								    element = _grid$getAttachCellAr.element,
								    rect = _grid$getAttachCellAr.rect;

								input.style.top = rect.top.toFixed() + 'px';
								input.style.left = rect.left.toFixed() + 'px';
								input.style.width = rect.width.toFixed() + 'px';
								input.style.height = rect.height.toFixed() + 'px';
								element.appendChild(input);

								_setInputAttrs(editor, grid, input);
								input.value = value;

								this._activeData = { grid: grid, col: col, row: row, editor: editor };
								this._beforePropEditor = editor;

								var focus = function focus() {
									input.focus();

									var end = input.value.length;
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
										var range = input.createTextRange();
										range.collapse();
										range.moveEnd('character', end);
										range.moveStart('character', end);
										range.select();
									}
								};
								handler.tryWithOffEvents(input, 'blur', function () {
									focus();
								});
							}
						}, {
							key: 'detach',
							value: function detach(gridFocus) {
								if (this._isActive()) {
									var _activeData = this._activeData,
									    grid = _activeData.grid,
									    col = _activeData.col,
									    row = _activeData.row;

									var input = this._input;
									this._handler.tryWithOffEvents(input, 'blur', function () {
										input.parentElement.removeChild(input);
									});
									grid.invalidateCell(col, row);
									if (gridFocus) {
										grid.focus();
									}
								}
								this._activeData = null;
							}
						}, {
							key: 'doChangeValue',
							value: function doChangeValue() {
								if (!this._isActive()) {
									return;
								}
								var input = this._input;
								var value = input.value;
								var _activeData2 = this._activeData,
								    grid = _activeData2.grid,
								    col = _activeData2.col,
								    row = _activeData2.row;

								grid.doChangeValue(col, row, function () {
									return value;
								});
							}
						}, {
							key: '_isActive',
							value: function _isActive() {
								var input = this._input;
								if (!input || !input.parentElement) {
									return false;
								}
								if (!this._activeData) {
									return false;
								}
								return true;
							}
						}, {
							key: '_bindInputEvents',
							value: function _bindInputEvents() {
								var _this29 = this;

								var handler = this._handler;
								var input = this._input;
								var stopPropagationOnly = function stopPropagationOnly(e) {
									return e.stopPropagation();
								}; // gridにイベントが伝播しないように
								handler.on(input, 'click', stopPropagationOnly);
								handler.on(input, 'mousedown', stopPropagationOnly);
								handler.on(input, 'touchstart', stopPropagationOnly);
								handler.on(input, 'dblclick', stopPropagationOnly);

								handler.on(input, 'compositionstart', function (e) {
									input.classList.add('composition');
								});
								handler.on(input, 'compositionend', function (e) {
									input.classList.remove('composition');
								});
								handler.on(input, 'keydown', function (e) {
									if (input.classList.contains('composition')) {
										return;
									}
									if (getKeyCode(e) === KEY_ENTER) {
										if (!_this29._isActive()) {
											return;
										}
										var grid = _this29._activeData.grid;


										_this29.doChangeValue();
										if (grid) {
											grid.focus();
										}
										_this29.detach();
										cancelEvent(e);
									}
								});
								handler.on(input, 'blur', function (e) {
									_this29.doChangeValue();
									_this29.detach();
								});
							}
						}]);

						return InlineInputElement;
					}();

					module.exports = InlineInputElement;

					/***/
				},

				/***/"./columns/action/internal/InlineMenuElement.css":
				/*!*******************************************************!*\
      !*** ./columns/action/internal/InlineMenuElement.css ***!
      \*******************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionInternalInlineMenuElementCss(module, exports, __webpack_require__) {

					var content = __webpack_require__( /*! !../../../../../node_modules/css-loader?minimize!./InlineMenuElement.css */"../../node_modules/css-loader/index.js?minimize!./columns/action/internal/InlineMenuElement.css");

					if (typeof content === 'string') content = [[module.i, content, '']];

					var transform;
					var insertInto;

					var options = { "hmr": true };

					options.transform = transform;
					options.insertInto = undefined;

					var update = __webpack_require__( /*! ../../../../../node_modules/style-loader/lib/addStyles.js */"../../node_modules/style-loader/lib/addStyles.js")(content, options);

					if (content.locals) module.exports = content.locals;

					if (false) {}

					/***/
				},

				/***/"./columns/action/internal/InlineMenuElement.js":
				/*!******************************************************!*\
      !*** ./columns/action/internal/InlineMenuElement.js ***!
      \******************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionInternalInlineMenuElementJs(module, exports, __webpack_require__) {

					"use strict";
					/* WEBPACK VAR INJECTION */
					(function (__webpack_provided_Array_dot_isArray) {
						var _webpack_require__27 = __webpack_require__( /*! ../../../internal/utils */"./internal/utils.js"),
						    isDef = _webpack_require__27.isDef,
						    _webpack_require__27$ = _webpack_require__27.event,
						    getKeyCode = _webpack_require__27$.getKeyCode,
						    cancelEvent = _webpack_require__27$.cancel;

						var EventHandler = __webpack_require__( /*! ../../../internal/EventHandler */"./internal/EventHandler.js");

						var _webpack_require__28 = __webpack_require__( /*! ../../../internal/dom */"./internal/dom.js"),
						    createElement = _webpack_require__28.createElement,
						    appendHtml = _webpack_require__28.appendHtml,
						    empty = _webpack_require__28.empty,
						    disableFocus = _webpack_require__28.disableFocus,
						    isFocusable = _webpack_require__28.isFocusable,
						    findPrevSiblingFocusable = _webpack_require__28.findPrevSiblingFocusable,
						    findNextSiblingFocusable = _webpack_require__28.findNextSiblingFocusable;

						var KEY_TAB = 9;
						var KEY_ENTER = 13;
						var KEY_UP = 38;
						var KEY_DOWN = 40;
						var KEY_ESC = 27;

						var CLASSNAME = 'cheetah-grid__inline-menu';
						var ITEM_CLASSNAME = CLASSNAME + '__menu-item';
						var HIDDEN_CLASSNAME = CLASSNAME + '--hidden';
						var SHOWN_CLASSNAME = CLASSNAME + '--shown';
						var EMPTY_ITEM_CLASSNAME = ITEM_CLASSNAME + '--empty';

						function findItemParents(target) {
							var el = target;
							while (!el.classList.contains(ITEM_CLASSNAME)) {
								el = el.parentElement;
								if (!el || el.classList.contains(CLASSNAME)) {
									return undefined;
								}
							}
							return el;
						}

						function createMenuElement() {
							__webpack_require__( /*! ./InlineMenuElement.css */"./columns/action/internal/InlineMenuElement.css");
							return createElement('ul', { classList: CLASSNAME });
						}
						function attachElement(element, rect, menu) {
							menu.style.top = rect.top.toFixed() + 'px';
							menu.style.left = rect.left.toFixed() + 'px';
							menu.style.width = rect.width.toFixed() + 'px';
							menu.style['line-height'] = rect.height.toFixed() + 'px';
							element.appendChild(menu);
						}

						function optionToLi(_ref20, index) {
							var classList = _ref20.classList,
							    caption = _ref20.caption,
							    value = _ref20.value,
							    html = _ref20.html;

							var item = createElement('li', { classList: ITEM_CLASSNAME });
							item.tabIndex = 0;
							item.dataset.valueindex = index;
							if (classList) {
								var _item$classList;

								(_item$classList = item.classList).add.apply(_item$classList, _toConsumableArray(__webpack_provided_Array_dot_isArray(classList) ? classList : [classList]));
							}

							if (caption) {
								var span = createElement('span', { text: caption });
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
							var options = editor.options,
							    classList = editor.classList;

							menu.classList.remove(SHOWN_CLASSNAME);
							menu.classList.add(HIDDEN_CLASSNAME);
							empty(menu);
							menu.style.font = grid.font || '16px sans-serif';
							var emptyItemEl = null;
							var valueItemEl = null;

							options.forEach(function (option, i) {
								var item = optionToLi(option, i);
								menu.appendChild(item);
								if (option.value === value) {
									valueItemEl = item;
									item.dataset.select = true;
								}
								if (item.classList.contains(EMPTY_ITEM_CLASSNAME)) {
									emptyItemEl = item;
								}
							});
							var focusEl = valueItemEl || emptyItemEl || menu.children[0];
							if (classList) {
								var _menu$classList;

								(_menu$classList = menu.classList).add.apply(_menu$classList, _toConsumableArray(classList));
							}
							var children = Array.prototype.slice.call(menu.children, 0);
							var focusIndex = children.indexOf(focusEl);

							var _grid$getAttachCellAr2 = grid.getAttachCellArea(col, row),
							    element = _grid$getAttachCellAr2.element,
							    rect = _grid$getAttachCellAr2.rect;

							// Cover the right line


							rect.width++;

							// append for calculation
							attachElement(element, rect, menu);

							// Make the selection item at the middle
							var offset = 0;
							var allHeight = 0;
							for (var i = 0; i < children.length; i++) {
								var offsetHeight = children[i].offsetHeight;
								if (i < focusIndex) {
									offset += offsetHeight;
								}
								allHeight += offsetHeight;
							}
							rect.offsetTop(-offset);
							menu.style['transform-origin'] = 'center ' + (offset + Math.ceil(children[focusIndex].offsetHeight / 2)) + 'px 0px';
							attachElement(element, rect, menu);

							// Control not to overflow the screen range
							var menuClientRect = menu.getBoundingClientRect();
							var scaleDiff = (allHeight - menuClientRect.height) / 2;
							var orgMenuTop = menuClientRect.top - scaleDiff;
							var menuTop = orgMenuTop;
							var menuBottom = menuTop + allHeight;
							var winBottom = window.innerHeight;
							var winMargin = 20;
							if (menuBottom > winBottom - winMargin) {
								var diff = menuBottom - winBottom + winMargin;
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

						var InlineMenuElement = function () {
							function InlineMenuElement() {
								_classCallCheck(this, InlineMenuElement);

								this._handler = new EventHandler();
								this._menu = createMenuElement();
								this._bindMenuEvents();
							}

							_createClass(InlineMenuElement, [{
								key: 'dispose',
								value: function dispose() {
									var menu = this._menu;
									this.detach();
									this._handler.dispose();
									this._menu = null;
									this._beforePropEditor = null;
									if (menu.parentElement) {
										menu.parentElement.removeChild(menu);
									}
								}
							}, {
								key: 'attach',
								value: function attach(grid, editor, col, row, value) {
									var menu = this._menu;

									if (this._beforePropEditor) {
										var classList = this._beforePropEditor.classList;

										if (classList) {
											var _menu$classList2;

											(_menu$classList2 = menu.classList).remove.apply(_menu$classList2, _toConsumableArray(classList));
										}
									}

									openMenu(grid, editor, col, row, value, menu);
									this._activeData = { grid: grid, col: col, row: row, editor: editor };
									this._beforePropEditor = editor;
								}
							}, {
								key: 'detach',
								value: function detach(gridFocus) {
									if (this._isActive()) {
										var _activeData3 = this._activeData,
										    grid = _activeData3.grid,
										    col = _activeData3.col,
										    row = _activeData3.row;

										var menu = this._menu;
										closeMenu(grid, col, row, menu);

										grid.invalidateCell(col, row);
										if (gridFocus) {
											grid.focus();
										}
									}
									this._activeData = null;
								}
							}, {
								key: '_doChangeValue',
								value: function _doChangeValue(valueindex) {
									if (!this._isActive()) {
										return;
									}
									var _activeData4 = this._activeData,
									    grid = _activeData4.grid,
									    col = _activeData4.col,
									    row = _activeData4.row,
									    editor = _activeData4.editor;
									var value = editor.options[valueindex].value;

									grid.doChangeValue(col, row, function () {
										return value;
									});
								}
							}, {
								key: '_isActive',
								value: function _isActive() {
									var menu = this._menu;
									if (!menu || !menu.parentElement) {
										return false;
									}
									if (!this._activeData) {
										return false;
									}
									return true;
								}
							}, {
								key: '_bindMenuEvents',
								value: function _bindMenuEvents() {
									var _this30 = this;

									var handler = this._handler;
									var menu = this._menu;

									var stopPropagationOnly = function stopPropagationOnly(e) {
										return e.stopPropagation();
									}; // gridにイベントが伝播しないように

									handler.on(menu, 'mousedown', stopPropagationOnly);
									handler.on(menu, 'touchstart', stopPropagationOnly);
									handler.on(menu, 'dblclick', stopPropagationOnly);

									handler.on(menu, 'click', function (e) {
										e.stopPropagation();
										var item = findItemParents(e.target);
										if (!item) {
											return;
										}
										var valueindex = item.dataset.valueindex;
										_this30._doChangeValue(item.dataset.valueindex);
										_this30.detach(true);
									});
									handler.on(menu, 'keydown', function (e) {
										var item = findItemParents(e.target);
										if (!item) {
											return;
										}
										var keyCode = getKeyCode(e);
										if (keyCode === KEY_ENTER) {
											var valueindex = item.dataset.valueindex;
											_this30._doChangeValue(valueindex);
											_this30.detach(true);
											cancelEvent(e);
										} else if (keyCode === KEY_ESC) {
											_this30.detach(true);
											cancelEvent(e);
										} else if (keyCode === KEY_UP) {
											var n = findPrevSiblingFocusable(item);
											if (n) {
												n.focus();
												cancelEvent(e);
											}
										} else if (keyCode === KEY_DOWN) {
											var _n = findNextSiblingFocusable(item);
											if (_n) {
												_n.focus();
												cancelEvent(e);
											}
										} else if (keyCode === KEY_TAB) {
											if (!e.shiftKey) {
												if (!findNextSiblingFocusable(item)) {
													var _n2 = menu.querySelector('.' + ITEM_CLASSNAME);
													if (!isFocusable(_n2)) {
														_n2 = findNextSiblingFocusable(_n2);
													}
													if (_n2) {
														_n2.focus();
														cancelEvent(e);
													}
												}
											} else {
												if (!findPrevSiblingFocusable(item)) {
													var items = menu.querySelectorAll('.' + ITEM_CLASSNAME);
													var _n3 = items[items.length - 1];
													if (!isFocusable(_n3)) {
														_n3 = findPrevSiblingFocusable(_n3);
													}
													if (_n3) {
														_n3.focus();
														cancelEvent(e);
													}
												}
											}
										}
									});
								}
							}]);

							return InlineMenuElement;
						}();

						module.exports = InlineMenuElement;
						/* WEBPACK VAR INJECTION */
					}).call(this, __webpack_require__( /*! @/internal/com.js */"./internal/com.js")["Array_isArray"]);

					/***/
				},

				/***/"./columns/action/internal/SmallDialogInputElement.css":
				/*!*************************************************************!*\
      !*** ./columns/action/internal/SmallDialogInputElement.css ***!
      \*************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionInternalSmallDialogInputElementCss(module, exports, __webpack_require__) {

					var content = __webpack_require__( /*! !../../../../../node_modules/css-loader?minimize!./SmallDialogInputElement.css */"../../node_modules/css-loader/index.js?minimize!./columns/action/internal/SmallDialogInputElement.css");

					if (typeof content === 'string') content = [[module.i, content, '']];

					var transform;
					var insertInto;

					var options = { "hmr": true };

					options.transform = transform;
					options.insertInto = undefined;

					var update = __webpack_require__( /*! ../../../../../node_modules/style-loader/lib/addStyles.js */"../../node_modules/style-loader/lib/addStyles.js")(content, options);

					if (content.locals) module.exports = content.locals;

					if (false) {}

					/***/
				},

				/***/"./columns/action/internal/SmallDialogInputElement.js":
				/*!************************************************************!*\
      !*** ./columns/action/internal/SmallDialogInputElement.js ***!
      \************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsActionInternalSmallDialogInputElementJs(module, exports, __webpack_require__) {

					"use strict";

					var _webpack_require__29 = __webpack_require__( /*! ../../../internal/utils */"./internal/utils.js"),
					    _webpack_require__29$ = _webpack_require__29.event,
					    getKeyCode = _webpack_require__29$.getKeyCode,
					    cancelEvent = _webpack_require__29$.cancel,
					    then = _webpack_require__29.then;

					var EventHandler = __webpack_require__( /*! ../../../internal/EventHandler */"./internal/EventHandler.js");

					var _webpack_require__30 = __webpack_require__( /*! ../../../internal/dom */"./internal/dom.js"),
					    createElement = _webpack_require__30.createElement;

					var CLASSNAME = 'cheetah-grid__small-dialog-input';
					var INPUT_CLASSNAME = CLASSNAME + '__input';
					var HIDDEN_CLASSNAME = CLASSNAME + '--hidden';
					var SHOWN_CLASSNAME = CLASSNAME + '--shown';

					var KEY_ENTER = 13;
					var KEY_ESC = 27;

					function _focus(input, handler) {
						var focus = function focus() {
							input.focus();

							var end = input.value.length;
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
								var range = input.createTextRange();
								range.collapse();
								range.moveEnd('character', end);
								range.moveStart('character', end);
								range.select();
							}
						};
						handler.tryWithOffEvents(input, 'blur', function () {
							focus();
						});
					}

					function createDialogElement() {
						__webpack_require__( /*! ./SmallDialogInputElement.css */"./columns/action/internal/SmallDialogInputElement.css");
						var element = createElement('div', { classList: [CLASSNAME, HIDDEN_CLASSNAME] });
						var input = createElement('input', { classList: INPUT_CLASSNAME });
						input.readonly = true;
						input.tabIndex = -1;
						element.appendChild(input);
						return element;
					}

					function bindProps(grid, dialog, input, editor) {
						var classList = editor.classList,
						    helperText = editor.helperText;

						if (classList) {
							var _dialog$classList;

							(_dialog$classList = dialog.classList).add.apply(_dialog$classList, _toConsumableArray(classList));
						}
						if (helperText && typeof helperText !== 'function') {
							dialog.dataset.helperText = helperText;
						}
						_setInputAttrs2(editor, grid, input);
					}

					function unbindProps(grid, dialog, input, editor) {
						var classList = editor.classList;

						if (classList) {
							var _dialog$classList2;

							(_dialog$classList2 = dialog.classList).remove.apply(_dialog$classList2, _toConsumableArray(classList));
						}
						delete dialog.dataset.helperText;
						input.type = '';
					}

					function _setInputAttrs2(editor, grid, input) {
						var type = editor.type;

						input.type = type || '';
					}

					var SmallDialogInputElement = function () {
						_createClass(SmallDialogInputElement, null, [{
							key: 'setInputAttrs',
							value: function setInputAttrs() {
								_setInputAttrs2.apply(undefined, arguments);
							}
						}]);

						function SmallDialogInputElement() {
							_classCallCheck(this, SmallDialogInputElement);

							this._handler = new EventHandler();
							this._dialog = createDialogElement();
							this._input = this._dialog.querySelector('.' + INPUT_CLASSNAME);
							this._bindDialogEvents();
						}

						_createClass(SmallDialogInputElement, [{
							key: 'dispose',
							value: function dispose() {
								var dialog = this._dialog;
								this.detach();
								this._handler.dispose();
								this._dialog = null;
								this._input = null;
								this._beforePropEditor = null;
								if (dialog.parentElement) {
									dialog.parentElement.removeChild(dialog);
								}
							}
						}, {
							key: 'attach',
							value: function attach(grid, editor, col, row, value) {
								var handler = this._handler;
								var dialog = this._dialog;
								var input = this._input;

								if (this._beforePropEditor) {
									unbindProps(grid, dialog, input, this._beforePropEditor);
								}

								delete dialog.dataset.errorMessage;
								dialog.classList.remove(SHOWN_CLASSNAME);
								dialog.classList.add(HIDDEN_CLASSNAME);
								input.readonly = false;
								input.tabIndex = 0;

								var _grid$getAttachCellAr3 = grid.getAttachCellArea(col, row),
								    element = _grid$getAttachCellAr3.element,
								    rect = _grid$getAttachCellAr3.rect;

								dialog.style.top = rect.top.toFixed() + 'px';
								dialog.style.left = rect.left.toFixed() + 'px';
								dialog.style.width = rect.width.toFixed() + 'px';
								input.style.height = rect.height.toFixed() + 'px';
								element.appendChild(dialog);

								input.value = value;
								input.style.font = grid.font || '16px sans-serif';
								var activeData = { grid: grid, col: col, row: row, editor: editor };
								this._onInputValue(input, activeData);
								_focus(input, handler);
								dialog.classList.add(SHOWN_CLASSNAME);
								dialog.classList.remove(HIDDEN_CLASSNAME);
								input.readonly = true;

								bindProps(grid, dialog, input, editor);

								this._activeData = activeData;
								this._beforePropEditor = editor;
							}
						}, {
							key: 'detach',
							value: function detach(gridFocus) {
								if (this._isActive()) {
									var dialog = this._dialog;
									var input = this._input;

									dialog.classList.remove(SHOWN_CLASSNAME);
									dialog.classList.add(HIDDEN_CLASSNAME);
									input.readonly = false;
									input.tabIndex = -1;

									var _activeData5 = this._activeData,
									    grid = _activeData5.grid,
									    col = _activeData5.col,
									    row = _activeData5.row;


									grid.invalidateCell(col, row);
									if (gridFocus) {
										grid.focus();
									}
								}
								this._activeData = null;
								this._beforeValue = null;
							}
						}, {
							key: '_doChangeValue',
							value: function _doChangeValue() {
								var _this31 = this;

								if (!this._isActive()) {
									return false;
								}
								var input = this._input;
								var value = input.value;

								return then(this._validate(value), function (res) {
									if (res && value === input.value) {
										var _activeData6 = _this31._activeData,
										    grid = _activeData6.grid,
										    col = _activeData6.col,
										    row = _activeData6.row;

										grid.doChangeValue(col, row, function () {
											return value;
										});
										return true;
									}
									return false;
								});
							}
						}, {
							key: '_isActive',
							value: function _isActive() {
								var dialog = this._dialog;
								if (!dialog || !dialog.parentElement) {
									return false;
								}
								if (!this._activeData) {
									return false;
								}
								return true;
							}
						}, {
							key: '_bindDialogEvents',
							value: function _bindDialogEvents() {
								var _this32 = this;

								var handler = this._handler;
								var dialog = this._dialog;
								var input = this._input;
								var stopPropagationOnly = function stopPropagationOnly(e) {
									return e.stopPropagation();
								}; // gridにイベントが伝播しないように
								handler.on(dialog, 'click', stopPropagationOnly);
								handler.on(dialog, 'dblclick', stopPropagationOnly);
								handler.on(dialog, 'mousedown', stopPropagationOnly);
								handler.on(dialog, 'touchstart', stopPropagationOnly);

								handler.on(input, 'compositionstart', function (e) {
									input.classList.add('composition');
								});
								handler.on(input, 'compositionend', function (e) {
									input.classList.remove('composition');
									_this32._onInputValue(input);
								});
								var onKeyupAndPress = function onKeyupAndPress(e) {
									if (input.classList.contains('composition')) {
										return;
									}
									_this32._onInputValue(input);
								};
								handler.on(input, 'keyup', onKeyupAndPress);
								handler.on(input, 'keypress', onKeyupAndPress);
								handler.on(input, 'keydown', function (e) {
									if (input.classList.contains('composition')) {
										return;
									}
									var keyCode = getKeyCode(e);
									if (keyCode === KEY_ESC) {
										_this32.detach(true);
										cancelEvent(e);
									} else if (keyCode === KEY_ENTER) {
										var _input = _this32._input;
										var value = _input.value;

										then(_this32._doChangeValue(), function (r) {
											if (r && value === _input.value) {
												_this32.detach(true);
											}
										});
										cancelEvent(e);
									} else {
										_this32._onInputValue(input);
									}
								});
							}
						}, {
							key: '_onInputValue',
							value: function _onInputValue(input, activeData) {
								var before = this._beforeValue;
								var value = input.value;

								if (before !== value) {
									this._onInputValueChange(value, before, activeData);
								}
								this._beforeValue = value;
							}
						}, {
							key: '_onInputValueChange',
							value: function _onInputValueChange(after, before, activeData) {
								activeData = activeData || this._activeData;
								var dialog = this._dialog;
								var _activeData7 = activeData,
								    grid = _activeData7.grid,
								    col = _activeData7.col,
								    row = _activeData7.row,
								    editor = _activeData7.editor;

								if (typeof editor.helperText === 'function') {
									var helperText = editor.helperText(after, { grid: grid, col: col, row: row });
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
						}, {
							key: '_validate',
							value: function _validate(value, inputOnly) {
								var dialog = this._dialog;
								var input = this._input;
								var _activeData8 = this._activeData,
								    grid = _activeData8.grid,
								    col = _activeData8.col,
								    row = _activeData8.row,
								    editor = _activeData8.editor;

								var message = null;
								if (editor.inputValidator) {
									message = editor.inputValidator(value, { grid: grid, col: col, row: row });
								}
								return then(message, function (message) {
									if (!message && editor.validator && !inputOnly) {
										message = editor.validator(value, { grid: grid, col: col, row: row });
									}
									return then(message, function (message) {
										if (message && value === input.value) {
											dialog.dataset.errorMessage = message;
										} else {
											delete dialog.dataset.errorMessage;
										}
										return !message;
									});
								});
							}
						}]);

						return SmallDialogInputElement;
					}();

					module.exports = SmallDialogInputElement;

					/***/
				},

				/***/"./columns/message/BaseMessage.js":
				/*!****************************************!*\
      !*** ./columns/message/BaseMessage.js ***!
      \****************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsMessageBaseMessageJs(module, exports, __webpack_require__) {

					"use strict";

					var BaseMessage = function () {
						function BaseMessage(grid) {
							_classCallCheck(this, BaseMessage);

							this._grid = grid;
						}

						_createClass(BaseMessage, [{
							key: 'dispose',
							value: function dispose() {
								this.detachMessageElement();
								if (this._messageElement) {
									this._messageElement.dispose();
								}
								this._messageElement = null;
							}
						}, {
							key: '_getMessageElement',
							value: function _getMessageElement() {
								return this._messageElement || (this._messageElement = this.createMessageElementInternal());
							}
						}, {
							key: 'createMessageElementInternal',
							value: function createMessageElementInternal() {}
						}, {
							key: 'drawCellMessageInternal',
							value: function drawCellMessageInternal(message, context, style, helper, info) {}
						}, {
							key: 'attachMessageElement',
							value: function attachMessageElement(col, row, message) {
								var messageElement = this._getMessageElement();
								messageElement.attach(this._grid, col, row, message);
							}
						}, {
							key: 'moveMessageElement',
							value: function moveMessageElement(col, row) {
								var messageElement = this._getMessageElement();
								messageElement.move(this._grid, col, row);
							}
						}, {
							key: 'detachMessageElement',
							value: function detachMessageElement() {
								var messageElement = this._getMessageElement();
								messageElement._detach();
							}
						}, {
							key: 'drawCellMessage',
							value: function drawCellMessage(message, context, style, helper, info) {
								this.drawCellMessageInternal(message, context, style, helper, info);
							}
						}]);

						return BaseMessage;
					}();

					module.exports = BaseMessage;

					/***/
				},

				/***/"./columns/message/ErrorMessage.js":
				/*!*****************************************!*\
      !*** ./columns/message/ErrorMessage.js ***!
      \*****************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsMessageErrorMessageJs(module, exports, __webpack_require__) {

					"use strict";

					var Rect = __webpack_require__( /*! ../../internal/Rect */"./internal/Rect.js");
					var BaseMessage = __webpack_require__( /*! ./BaseMessage */"./columns/message/BaseMessage.js");
					var ErrorMessageElement = __webpack_require__( /*! ./internal/ErrorMessageElement */"./columns/message/internal/ErrorMessageElement.js");

					var RED_A100 = '#ff8a80';
					// const RED_A400 = '#FF1744';

					var ErrorMessage = function (_BaseMessage) {
						_inherits(ErrorMessage, _BaseMessage);

						function ErrorMessage() {
							_classCallCheck(this, ErrorMessage);

							return _possibleConstructorReturn(this, (ErrorMessage.__proto__ || Object.getPrototypeOf(ErrorMessage)).apply(this, arguments));
						}

						_createClass(ErrorMessage, [{
							key: 'createMessageElementInternal',
							value: function createMessageElementInternal() {
								return new ErrorMessageElement();
							}
						}, {
							key: 'drawCellMessageInternal',
							value: function drawCellMessageInternal(message, context, style, helper, info) {
								var bgColor = style.bgColor;

								var _context$getSelectSta = context.getSelectState(),
								    selected = _context$getSelectSta.selected;

								var rect = context.getRect();

								helper.drawBorderWithClip(context, function (ctx) {
									if (!selected) {
										// draw box
										ctx.fillStyle = RED_A100;
										var boxRect = rect.copy();
										boxRect.left = boxRect.right - 24;
										ctx.fillRect(boxRect.left, boxRect.top, boxRect.width, boxRect.height - 1);

										// draw exclamation mark
										var fillColor = bgColor;
										var height = 20;
										var width = height / 5;
										var left = boxRect.left + (boxRect.width - width) / 2;
										var top = boxRect.top + (boxRect.height - height) / 2;
										helper.fillRectWithState(new Rect(left, top, width, height / 5 * 3), context, { fillColor: fillColor });
										helper.fillRectWithState(new Rect(left, top + height / 5 * 4, width, height / 5), context, { fillColor: fillColor });
									}
								});
							}
						}]);

						return ErrorMessage;
					}(BaseMessage);

					module.exports = ErrorMessage;

					/***/
				},

				/***/"./columns/message/InfoMessage.js":
				/*!****************************************!*\
      !*** ./columns/message/InfoMessage.js ***!
      \****************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsMessageInfoMessageJs(module, exports, __webpack_require__) {

					"use strict";

					var BaseMessage = __webpack_require__( /*! ./BaseMessage */"./columns/message/BaseMessage.js");
					var MessageElement = __webpack_require__( /*! ./internal/MessageElement */"./columns/message/internal/MessageElement.js");

					var Rect = __webpack_require__( /*! ../../internal/Rect */"./internal/Rect.js");

					var GREY_L2 = '#e0e0e0';
					// const GREY_L1 = '#bdbdbd';

					var InfoMessage = function (_BaseMessage2) {
						_inherits(InfoMessage, _BaseMessage2);

						function InfoMessage() {
							_classCallCheck(this, InfoMessage);

							return _possibleConstructorReturn(this, (InfoMessage.__proto__ || Object.getPrototypeOf(InfoMessage)).apply(this, arguments));
						}

						_createClass(InfoMessage, [{
							key: 'createMessageElementInternal',
							value: function createMessageElementInternal() {
								return new MessageElement();
							}
						}, {
							key: 'drawCellMessageInternal',
							value: function drawCellMessageInternal(message, context, style, helper, info) {
								var bgColor = style.bgColor;

								var _context$getSelectSta2 = context.getSelectState(),
								    selected = _context$getSelectSta2.selected;

								var rect = context.getRect();

								helper.drawBorderWithClip(context, function (ctx) {
									if (!selected) {
										// draw box
										ctx.fillStyle = GREY_L2;
										var boxRect = rect.copy();
										boxRect.left = boxRect.right - 24;
										ctx.fillRect(boxRect.left, boxRect.top, boxRect.width, boxRect.height - 1);

										// draw i mark
										var fillColor = bgColor;
										var height = 20;
										var width = height / 5;
										var left = boxRect.left + (boxRect.width - width) / 2;
										var top = boxRect.top + (boxRect.height - height) / 2;
										helper.fillRectWithState(new Rect(left, top, width, height / 5), context, { fillColor: fillColor });
										helper.fillRectWithState(new Rect(left, top + height / 5 * 2, width, height / 5 * 3), context, { fillColor: fillColor });
									}
								});
							}
						}]);

						return InfoMessage;
					}(BaseMessage);

					module.exports = InfoMessage;

					/***/
				},

				/***/"./columns/message/MessageHandler.js":
				/*!*******************************************!*\
      !*** ./columns/message/MessageHandler.js ***!
      \*******************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsMessageMessageHandlerJs(module, exports, __webpack_require__) {

					"use strict";

					var _webpack_require__31 = __webpack_require__( /*! ../../internal/utils */"./internal/utils.js"),
					    isPromise = _webpack_require__31.isPromise;

					var _webpack_require__32 = __webpack_require__( /*! ../../list-grid/EVENT_TYPE */"./list-grid/EVENT_TYPE.js"),
					    SELECTED_CELL = _webpack_require__32.SELECTED_CELL,
					    SCROLL = _webpack_require__32.SCROLL,
					    CHANGED_VALUE = _webpack_require__32.CHANGED_VALUE;

					var ErrorMessage = __webpack_require__( /*! ./ErrorMessage */"./columns/message/ErrorMessage.js");
					var WarningMessage = __webpack_require__( /*! ./WarningMessage */"./columns/message/WarningMessage.js");
					var InfoMessage = __webpack_require__( /*! ./InfoMessage */"./columns/message/InfoMessage.js");

					var MessageHandler = function () {
						function MessageHandler(grid, getMessage) {
							_classCallCheck(this, MessageHandler);

							this._grid = grid;
							this._messageInstances = {};
							this._bindGridEvent(grid, getMessage);
						}

						_createClass(MessageHandler, [{
							key: 'dispose',
							value: function dispose() {
								var messageInstances = this._messageInstances;
								for (var k in messageInstances) {
									messageInstances[k].dispose();
								}
								this._messageInstances = null;
							}
						}, {
							key: 'drawCellMessage',
							value: function drawCellMessage(message, context, style, helper, info) {

								if (!message || isPromise(message)) {
									return;
								}
								var instance = this._getMessageInstanceOfMessage(message);
								instance.drawCellMessage(message, context, style, helper, info);
							}
						}, {
							key: '_attach',
							value: function _attach(col, row, message) {
								var info = this._attachInfo;
								var instance = this._getMessageInstanceOfMessage(message);
								if (info && info.instance !== instance) {
									info.instance.detachMessageElement();
								}
								instance.attachMessageElement(col, row, this._toMessageText(message));
								this._attachInfo = { col: col, row: row, instance: instance };
							}
						}, {
							key: '_move',
							value: function _move(col, row) {
								var info = this._attachInfo;
								if (!info || info.col !== col || info.row !== row) {
									return;
								}
								var instance = info.instance;

								instance.moveMessageElement(col, row);
							}
						}, {
							key: '_detach',
							value: function _detach() {
								var info = this._attachInfo;
								if (!info) {
									return;
								}
								var instance = info.instance;

								instance.detachMessageElement();
								this._attachInfo = null;
							}
						}, {
							key: '_bindGridEvent',
							value: function _bindGridEvent(grid, getMessage) {
								var _this35 = this;

								var onSelectMessage = function onSelectMessage(sel) {
									var message = getMessage(sel.col, sel.row);
									if (!message || isPromise(message)) {
										_this35._detach();
									} else {
										_this35._attach(sel.col, sel.row, message);
									}
								};
								grid.listen(SELECTED_CELL, function (e) {
									if (!e.selected) {
										return;
									}
									if (e.before.col === e.col && e.before.row === e.row) {
										return;
									}
									onSelectMessage(e);
								});
								grid.listen(SCROLL, function () {
									var sel = grid.selection.select;
									_this35._move(sel.col, sel.row);
								});
								grid.listen(CHANGED_VALUE, function (e) {
									var sel = grid.selection.select;
									if (sel.col !== e.col || sel.row !== e.row) {
										return;
									}
									onSelectMessage(e);
								});
							}
						}, {
							key: '_getMessageInstanceOfMessage',
							value: function _getMessageInstanceOfMessage(message) {
								message = message || '';
								if (typeof message === 'string') {
									return this._createMessageInstance('error', ErrorMessage);
								}
								var type = ('' + message.type).toLowerCase();
								if (type === 'info') {
									return this._createMessageInstance('info', InfoMessage);
								} else if (type === 'warning') {
									return this._createMessageInstance('warning', WarningMessage);
								}
								return this._createMessageInstance('error', ErrorMessage);
							}
						}, {
							key: '_toMessageText',
							value: function _toMessageText(message) {
								message = message || '';
								if (typeof message === 'string') {
									return message;
								}
								if (message.message) {
									return message.message;
								}
								return '' + message;
							}
						}, {
							key: '_createMessageInstance',
							value: function _createMessageInstance(name, Message) {
								var messageInstances = this._messageInstances;
								return messageInstances[name] || (messageInstances[name] = new Message(this._grid));
							}
						}]);

						return MessageHandler;
					}();

					module.exports = MessageHandler;

					/***/
				},

				/***/"./columns/message/WarningMessage.js":
				/*!*******************************************!*\
      !*** ./columns/message/WarningMessage.js ***!
      \*******************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsMessageWarningMessageJs(module, exports, __webpack_require__) {

					"use strict";

					var Rect = __webpack_require__( /*! ../../internal/Rect */"./internal/Rect.js");
					var BaseMessage = __webpack_require__( /*! ./BaseMessage */"./columns/message/BaseMessage.js");
					var WarningMessageElement = __webpack_require__( /*! ./internal/WarningMessageElement */"./columns/message/internal/WarningMessageElement.js");

					var DEEP_ORANGE_A100 = '#ff9e80';

					var WarningMessage = function (_BaseMessage3) {
						_inherits(WarningMessage, _BaseMessage3);

						function WarningMessage() {
							_classCallCheck(this, WarningMessage);

							return _possibleConstructorReturn(this, (WarningMessage.__proto__ || Object.getPrototypeOf(WarningMessage)).apply(this, arguments));
						}

						_createClass(WarningMessage, [{
							key: 'createMessageElementInternal',
							value: function createMessageElementInternal() {
								return new WarningMessageElement();
							}
						}, {
							key: 'drawCellMessageInternal',
							value: function drawCellMessageInternal(message, context, style, helper, info) {
								var bgColor = style.bgColor;

								var _context$getSelectSta3 = context.getSelectState(),
								    selected = _context$getSelectSta3.selected;

								var rect = context.getRect();

								helper.drawBorderWithClip(context, function (ctx) {
									if (!selected) {
										// draw box
										ctx.fillStyle = DEEP_ORANGE_A100;
										var boxRect = rect.copy();
										boxRect.left = boxRect.right - 24;
										ctx.fillRect(boxRect.left, boxRect.top, boxRect.width, boxRect.height - 1);

										// draw exclamation mark
										var fillColor = bgColor;
										var height = 20;
										var width = height / 5;
										var left = boxRect.left + (boxRect.width - width) / 2;
										var top = boxRect.top + (boxRect.height - height) / 2;
										helper.fillRectWithState(new Rect(left, top, width, height / 5 * 3), context, { fillColor: fillColor });
										helper.fillRectWithState(new Rect(left, top + height / 5 * 4, width, height / 5), context, { fillColor: fillColor });
									}
								});
							}
						}]);

						return WarningMessage;
					}(BaseMessage);

					module.exports = WarningMessage;

					/***/
				},

				/***/"./columns/message/internal/ErrorMessageElement.css":
				/*!**********************************************************!*\
      !*** ./columns/message/internal/ErrorMessageElement.css ***!
      \**********************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsMessageInternalErrorMessageElementCss(module, exports, __webpack_require__) {

					var content = __webpack_require__( /*! !../../../../../node_modules/css-loader?minimize!./ErrorMessageElement.css */"../../node_modules/css-loader/index.js?minimize!./columns/message/internal/ErrorMessageElement.css");

					if (typeof content === 'string') content = [[module.i, content, '']];

					var transform;
					var insertInto;

					var options = { "hmr": true };

					options.transform = transform;
					options.insertInto = undefined;

					var update = __webpack_require__( /*! ../../../../../node_modules/style-loader/lib/addStyles.js */"../../node_modules/style-loader/lib/addStyles.js")(content, options);

					if (content.locals) module.exports = content.locals;

					if (false) {}

					/***/
				},

				/***/"./columns/message/internal/ErrorMessageElement.js":
				/*!*********************************************************!*\
      !*** ./columns/message/internal/ErrorMessageElement.js ***!
      \*********************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsMessageInternalErrorMessageElementJs(module, exports, __webpack_require__) {

					"use strict";

					var MessageElement = __webpack_require__( /*! ./MessageElement */"./columns/message/internal/MessageElement.js");

					var CLASSNAME = 'cheetah-grid__error-message-element';
					var MESSAGE_CLASSNAME = CLASSNAME + '__message';

					var ErrorMessageElement = function (_MessageElement) {
						_inherits(ErrorMessageElement, _MessageElement);

						function ErrorMessageElement() {
							_classCallCheck(this, ErrorMessageElement);

							var _this37 = _possibleConstructorReturn(this, (ErrorMessageElement.__proto__ || Object.getPrototypeOf(ErrorMessageElement)).call(this));

							__webpack_require__( /*! ./ErrorMessageElement.css */"./columns/message/internal/ErrorMessageElement.css");
							_this37._rootElement.classList.add(CLASSNAME);
							_this37._messageElement.classList.add(MESSAGE_CLASSNAME);
							return _this37;
						}

						return ErrorMessageElement;
					}(MessageElement);

					module.exports = ErrorMessageElement;

					/***/
				},

				/***/"./columns/message/internal/MessageElement.css":
				/*!*****************************************************!*\
      !*** ./columns/message/internal/MessageElement.css ***!
      \*****************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsMessageInternalMessageElementCss(module, exports, __webpack_require__) {

					var content = __webpack_require__( /*! !../../../../../node_modules/css-loader?minimize!./MessageElement.css */"../../node_modules/css-loader/index.js?minimize!./columns/message/internal/MessageElement.css");

					if (typeof content === 'string') content = [[module.i, content, '']];

					var transform;
					var insertInto;

					var options = { "hmr": true };

					options.transform = transform;
					options.insertInto = undefined;

					var update = __webpack_require__( /*! ../../../../../node_modules/style-loader/lib/addStyles.js */"../../node_modules/style-loader/lib/addStyles.js")(content, options);

					if (content.locals) module.exports = content.locals;

					if (false) {}

					/***/
				},

				/***/"./columns/message/internal/MessageElement.js":
				/*!****************************************************!*\
      !*** ./columns/message/internal/MessageElement.js ***!
      \****************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsMessageInternalMessageElementJs(module, exports, __webpack_require__) {

					"use strict";

					var EventHandler = __webpack_require__( /*! ../../../internal/EventHandler */"./internal/EventHandler.js");

					var _webpack_require__33 = __webpack_require__( /*! ../../../internal/dom */"./internal/dom.js"),
					    createElement = _webpack_require__33.createElement;

					var CLASSNAME = 'cheetah-grid__message-element';
					var MESSAGE_CLASSNAME = CLASSNAME + '__message';
					var HIDDEN_CLASSNAME = CLASSNAME + '--hidden';
					var SHOWN_CLASSNAME = CLASSNAME + '--shown';

					function createrootElement() {
						__webpack_require__( /*! ./MessageElement.css */"./columns/message/internal/MessageElement.css");
						var element = createElement('div', { classList: [CLASSNAME, HIDDEN_CLASSNAME] });
						var message = createElement('span', { classList: [MESSAGE_CLASSNAME] });
						element.appendChild(message);
						return element;
					}

					var MessageElement = function () {
						function MessageElement() {
							_classCallCheck(this, MessageElement);

							this._handler = new EventHandler();
							var rootElement = this._rootElement = createrootElement();
							this._messageElement = rootElement.querySelector('.' + MESSAGE_CLASSNAME);
						}

						_createClass(MessageElement, [{
							key: 'dispose',
							value: function dispose() {
								this.detach();
								this._handler.dispose();
								this._rootElement = null;
								this._messageElement = null;
							}
						}, {
							key: 'attach',
							value: function attach(grid, col, row, message) {
								var rootElement = this._rootElement;
								var messageElement = this._messageElement;

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
						}, {
							key: 'move',
							value: function move(grid, col, row) {
								var rootElement = this._rootElement;
								if (this._attachCell(grid, col, row)) {

									rootElement.classList.add(SHOWN_CLASSNAME);
									rootElement.classList.remove(HIDDEN_CLASSNAME);
								} else {
									this._detach();
								}
							}
						}, {
							key: 'detach',
							value: function detach() {
								this._detach();
							}
						}, {
							key: '_detach',
							value: function _detach() {
								var rootElement = this._rootElement;
								if (rootElement.parentElement) {
									rootElement.parentElement.removeChild(rootElement);
									rootElement.classList.remove(SHOWN_CLASSNAME);
									rootElement.classList.add(HIDDEN_CLASSNAME);
								}
							}
						}, {
							key: '_attachCell',
							value: function _attachCell(grid, col, row) {
								var rootElement = this._rootElement;

								var _grid$getAttachCellAr4 = grid.getAttachCellArea(col, row),
								    element = _grid$getAttachCellAr4.element,
								    rect = _grid$getAttachCellAr4.rect;

								var top = rect.bottom,
								    left = rect.left,
								    width = rect.width;
								var frozenRowCount = grid.frozenRowCount,
								    frozenColCount = grid.frozenColCount;

								if (row >= frozenRowCount && frozenRowCount > 0) {
									var _grid$getAttachCellAr5 = grid.getAttachCellArea(col, frozenRowCount - 1),
									    frozenRect = _grid$getAttachCellAr5.rect;

									if (top < frozenRect.bottom) {
										return false;
									}
								} else {
									if (top < 0) {
										return false;
									}
								}
								if (col >= frozenColCount && frozenColCount > 0) {
									var _grid$getAttachCellAr6 = grid.getAttachCellArea(frozenColCount - 1, row),
									    _frozenRect = _grid$getAttachCellAr6.rect;

									if (left < _frozenRect.right) {
										return false;
									}
								} else {
									if (left < 0) {
										return false;
									}
								}
								var offsetHeight = element.offsetHeight,
								    offsetWidth = element.offsetWidth;

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
						}]);

						return MessageElement;
					}();

					module.exports = MessageElement;

					/***/
				},

				/***/"./columns/message/internal/WarningMessageElement.css":
				/*!************************************************************!*\
      !*** ./columns/message/internal/WarningMessageElement.css ***!
      \************************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsMessageInternalWarningMessageElementCss(module, exports, __webpack_require__) {

					var content = __webpack_require__( /*! !../../../../../node_modules/css-loader?minimize!./WarningMessageElement.css */"../../node_modules/css-loader/index.js?minimize!./columns/message/internal/WarningMessageElement.css");

					if (typeof content === 'string') content = [[module.i, content, '']];

					var transform;
					var insertInto;

					var options = { "hmr": true };

					options.transform = transform;
					options.insertInto = undefined;

					var update = __webpack_require__( /*! ../../../../../node_modules/style-loader/lib/addStyles.js */"../../node_modules/style-loader/lib/addStyles.js")(content, options);

					if (content.locals) module.exports = content.locals;

					if (false) {}

					/***/
				},

				/***/"./columns/message/internal/WarningMessageElement.js":
				/*!***********************************************************!*\
      !*** ./columns/message/internal/WarningMessageElement.js ***!
      \***********************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsMessageInternalWarningMessageElementJs(module, exports, __webpack_require__) {

					"use strict";

					var MessageElement = __webpack_require__( /*! ./MessageElement */"./columns/message/internal/MessageElement.js");

					var CLASSNAME = 'cheetah-grid__warning-message-element';
					var MESSAGE_CLASSNAME = CLASSNAME + '__message';

					var WarningMessageElement = function (_MessageElement2) {
						_inherits(WarningMessageElement, _MessageElement2);

						function WarningMessageElement() {
							_classCallCheck(this, WarningMessageElement);

							var _this38 = _possibleConstructorReturn(this, (WarningMessageElement.__proto__ || Object.getPrototypeOf(WarningMessageElement)).call(this));

							__webpack_require__( /*! ./WarningMessageElement.css */"./columns/message/internal/WarningMessageElement.css");
							_this38._rootElement.classList.add(CLASSNAME);
							_this38._messageElement.classList.add(MESSAGE_CLASSNAME);
							return _this38;
						}

						return WarningMessageElement;
					}(MessageElement);

					module.exports = WarningMessageElement;

					/***/
				},

				/***/"./columns/style.js":
				/*!**************************!*\
      !*** ./columns/style.js ***!
      \**************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var BaseStyle = __webpack_require__( /*! ./style/BaseStyle */"./columns/style/BaseStyle.js");
						var Style = __webpack_require__( /*! ./style/Style */"./columns/style/Style.js");
						var NumberStyle = __webpack_require__( /*! ./style/NumberStyle */"./columns/style/NumberStyle.js");
						var CheckStyle = __webpack_require__( /*! ./style/CheckStyle */"./columns/style/CheckStyle.js");
						var ButtonStyle = __webpack_require__( /*! ./style/ButtonStyle */"./columns/style/ButtonStyle.js");
						var ImageStyle = __webpack_require__( /*! ./style/ImageStyle */"./columns/style/ImageStyle.js");
						var IconStyle = __webpack_require__( /*! ./style/IconStyle */"./columns/style/IconStyle.js");
						var PercentCompleteBarStyle = __webpack_require__( /*! ./style/PercentCompleteBarStyle */"./columns/style/PercentCompleteBarStyle.js");

						/**
       * column styles
       * @type {Object}
       * @namespace cheetahGrid.columns.style
       * @memberof cheetahGrid.columns
       */
						var style = {
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
							of: function of(columnStyle, record, StyleClass) {
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

					/***/
				},

				/***/"./columns/style/BaseStyle.js":
				/*!************************************!*\
      !*** ./columns/style/BaseStyle.js ***!
      \************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsStyleBaseStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var EventTarget = __webpack_require__( /*! ../../core/EventTarget */"./core/EventTarget.js");

						var EVENT_TYPE = {
							CHANGE_STYLE: 'change_style'
						};

						var defaultStyle = void 0;

						var BaseStyle = function (_EventTarget) {
							_inherits(BaseStyle, _EventTarget);

							_createClass(BaseStyle, null, [{
								key: 'EVENT_TYPE',
								get: function get() {
									return EVENT_TYPE;
								}
							}, {
								key: 'DEFAULT',
								get: function get() {
									return defaultStyle ? defaultStyle : defaultStyle = new BaseStyle();
								}
							}]);

							function BaseStyle() {
								var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
								    bgColor = _ref21.bgColor;

								_classCallCheck(this, BaseStyle);

								var _this39 = _possibleConstructorReturn(this, (BaseStyle.__proto__ || Object.getPrototypeOf(BaseStyle)).call(this));

								_this39._bgColor = bgColor;
								return _this39;
							}

							_createClass(BaseStyle, [{
								key: 'doChangeStyle',
								value: function doChangeStyle() {
									this.fireListeners(EVENT_TYPE.CHANGE_STYLE);
								}
							}, {
								key: 'clone',
								value: function clone() {
									return new BaseStyle(this);
								}
							}, {
								key: 'bgColor',
								get: function get() {
									return this._bgColor;
								},
								set: function set(bgColor) {
									this._bgColor = bgColor;
									this.doChangeStyle();
								}
							}]);

							return BaseStyle;
						}(EventTarget);

						module.exports = BaseStyle;
					}

					/***/
				},

				/***/"./columns/style/BranchGraphStyle.js":
				/*!*******************************************!*\
      !*** ./columns/style/BranchGraphStyle.js ***!
      \*******************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsStyleBranchGraphStyleJs(module, exports, __webpack_require__) {

					"use strict";

					var BaseStyle = __webpack_require__( /*! ./BaseStyle */"./columns/style/BaseStyle.js");
					var defaultStyle = void 0;
					function adj(style) {
						var _style$textAlign = style.textAlign,
						    textAlign = _style$textAlign === undefined ? 'center' : _style$textAlign;

						style.textAlign = textAlign;
						return style;
					}
					var DEFAULT_BRANCH_COLORS = function DEFAULT_BRANCH_COLORS(name, index) {
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

					var BranchGraphStyle = function (_BaseStyle) {
						_inherits(BranchGraphStyle, _BaseStyle);

						_createClass(BranchGraphStyle, null, [{
							key: 'DEFAULT',
							get: function get() {
								return defaultStyle ? defaultStyle : defaultStyle = new BranchGraphStyle();
							}
						}]);

						function BranchGraphStyle() {
							var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

							_classCallCheck(this, BranchGraphStyle);

							var _this40 = _possibleConstructorReturn(this, (BranchGraphStyle.__proto__ || Object.getPrototypeOf(BranchGraphStyle)).call(this, adj(style)));

							_this40._branchColors = style.branchColors || DEFAULT_BRANCH_COLORS;
							_this40._margin = style.margin || 4;
							_this40._circleSize = style.circleSize || 16;
							_this40._branchLineWidth = style.branchLineWidth || 4;
							_this40._mergeStyle = style.mergeStyle === 'straight' ? 'straight' : 'bezier';
							return _this40;
						}

						_createClass(BranchGraphStyle, [{
							key: 'clone',
							value: function clone() {
								return new BranchGraphStyle(this);
							}
						}, {
							key: 'branchColors',
							get: function get() {
								return this._branchColors;
							},
							set: function set(branchColors) {
								this._branchColors = branchColors;
								this.doChangeStyle();
							}
						}, {
							key: 'margin',
							get: function get() {
								return this._margin;
							},
							set: function set(margin) {
								this._margin = margin;
								this.doChangeStyle();
							}
						}, {
							key: 'circleSize',
							get: function get() {
								return this._circleSize;
							},
							set: function set(circleSize) {
								this._circleSize = circleSize;
								this.doChangeStyle();
							}
						}, {
							key: 'branchLineWidth',
							get: function get() {
								return this._branchLineWidth;
							},
							set: function set(branchLineWidth) {
								this._branchLineWidth = branchLineWidth;
								this.doChangeStyle();
							}
						}, {
							key: 'mergeStyle',
							get: function get() {
								return this._mergeStyle;
							},
							set: function set(mergeStyle) {
								this._mergeStyle = mergeStyle;
								this.doChangeStyle();
							}
						}]);

						return BranchGraphStyle;
					}(BaseStyle);

					module.exports = BranchGraphStyle;

					/***/
				},

				/***/"./columns/style/ButtonStyle.js":
				/*!**************************************!*\
      !*** ./columns/style/ButtonStyle.js ***!
      \**************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsStyleButtonStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var adj = function adj(style) {
							var _style$textAlign2 = style.textAlign,
							    textAlign = _style$textAlign2 === undefined ? 'center' : _style$textAlign2;

							style.textAlign = textAlign;
							return style;
						};

						var Style = __webpack_require__( /*! ./Style */"./columns/style/Style.js");

						var defaultStyle = void 0;

						var ButtonStyle = function (_Style) {
							_inherits(ButtonStyle, _Style);

							_createClass(ButtonStyle, null, [{
								key: 'DEFAULT',
								get: function get() {
									return defaultStyle ? defaultStyle : defaultStyle = new ButtonStyle();
								}
							}]);

							function ButtonStyle() {
								var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, ButtonStyle);

								var _this41 = _possibleConstructorReturn(this, (ButtonStyle.__proto__ || Object.getPrototypeOf(ButtonStyle)).call(this, adj(style)));

								var buttonBgColor = style.buttonBgColor;

								_this41._buttonBgColor = buttonBgColor;
								return _this41;
							}

							_createClass(ButtonStyle, [{
								key: 'clone',
								value: function clone() {
									return new ButtonStyle(this);
								}
							}, {
								key: 'buttonBgColor',
								get: function get() {
									return this._buttonBgColor;
								},
								set: function set(buttonBgColor) {
									this._buttonBgColor = buttonBgColor;
									this.doChangeStyle();
								}
							}]);

							return ButtonStyle;
						}(Style);

						module.exports = ButtonStyle;
					}

					/***/
				},

				/***/"./columns/style/CheckStyle.js":
				/*!*************************************!*\
      !*** ./columns/style/CheckStyle.js ***!
      \*************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsStyleCheckStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var adj = function adj(style) {
							var _style$textAlign3 = style.textAlign,
							    textAlign = _style$textAlign3 === undefined ? 'center' : _style$textAlign3;

							style.textAlign = textAlign;
							return style;
						};

						var StdBaseStyle = __webpack_require__( /*! ./StdBaseStyle */"./columns/style/StdBaseStyle.js");

						var defaultStyle = void 0;

						var CheckStyle = function (_StdBaseStyle) {
							_inherits(CheckStyle, _StdBaseStyle);

							_createClass(CheckStyle, null, [{
								key: 'DEFAULT',
								get: function get() {
									return defaultStyle ? defaultStyle : defaultStyle = new CheckStyle();
								}
							}]);

							function CheckStyle() {
								var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, CheckStyle);

								var _this42 = _possibleConstructorReturn(this, (CheckStyle.__proto__ || Object.getPrototypeOf(CheckStyle)).call(this, adj(style)));

								var uncheckBgColor = style.uncheckBgColor,
								    checkBgColor = style.checkBgColor,
								    borderColor = style.borderColor;

								_this42._uncheckBgColor = uncheckBgColor;
								_this42._checkBgColor = checkBgColor;
								_this42._borderColor = borderColor;
								return _this42;
							}

							_createClass(CheckStyle, [{
								key: 'clone',
								value: function clone() {
									return new CheckStyle(this);
								}
							}, {
								key: 'uncheckBgColor',
								get: function get() {
									return this._uncheckBgColor;
								},
								set: function set(uncheckBgColor) {
									this._uncheckBgColor = uncheckBgColor;
									this.doChangeStyle();
								}
							}, {
								key: 'checkBgColor',
								get: function get() {
									return this._checkBgColor;
								},
								set: function set(checkBgColor) {
									this._checkBgColor = checkBgColor;
									this.doChangeStyle();
								}
							}, {
								key: 'borderColor',
								get: function get() {
									return this._borderColor;
								},
								set: function set(borderColor) {
									this._borderColor = borderColor;
									this.doChangeStyle();
								}
							}]);

							return CheckStyle;
						}(StdBaseStyle);

						module.exports = CheckStyle;
					}

					/***/
				},

				/***/"./columns/style/IconStyle.js":
				/*!************************************!*\
      !*** ./columns/style/IconStyle.js ***!
      \************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsStyleIconStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var adj = function adj(style) {
							var _style$textAlign4 = style.textAlign,
							    textAlign = _style$textAlign4 === undefined ? 'center' : _style$textAlign4;

							style.textAlign = textAlign;
							return style;
						};

						var Style = __webpack_require__( /*! ./Style */"./columns/style/Style.js");

						var defaultStyle = void 0;

						var IconStyle = function (_Style2) {
							_inherits(IconStyle, _Style2);

							_createClass(IconStyle, null, [{
								key: 'DEFAULT',
								get: function get() {
									return defaultStyle ? defaultStyle : defaultStyle = new IconStyle();
								}
							}]);

							function IconStyle() {
								var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, IconStyle);

								return _possibleConstructorReturn(this, (IconStyle.__proto__ || Object.getPrototypeOf(IconStyle)).call(this, adj(style)));
							}

							_createClass(IconStyle, [{
								key: 'clone',
								value: function clone() {
									return new IconStyle(this);
								}
							}]);

							return IconStyle;
						}(Style);

						module.exports = IconStyle;
					}

					/***/
				},

				/***/"./columns/style/ImageStyle.js":
				/*!*************************************!*\
      !*** ./columns/style/ImageStyle.js ***!
      \*************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsStyleImageStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var adj = function adj(style) {
							var _style$textAlign5 = style.textAlign,
							    textAlign = _style$textAlign5 === undefined ? 'center' : _style$textAlign5;

							style.textAlign = textAlign;
							return style;
						};

						var StdBaseStyle = __webpack_require__( /*! ./StdBaseStyle */"./columns/style/StdBaseStyle.js");
						var defaultStyle = void 0;

						var ImageStyle = function (_StdBaseStyle2) {
							_inherits(ImageStyle, _StdBaseStyle2);

							_createClass(ImageStyle, null, [{
								key: 'DEFAULT',
								get: function get() {
									return defaultStyle ? defaultStyle : defaultStyle = new ImageStyle();
								}
							}]);

							function ImageStyle() {
								var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, ImageStyle);

								var _this44 = _possibleConstructorReturn(this, (ImageStyle.__proto__ || Object.getPrototypeOf(ImageStyle)).call(this, adj(style)));

								_this44._imageSizing = style.imageSizing;
								_this44._margin = style.margin || 4;
								return _this44;
							}

							_createClass(ImageStyle, [{
								key: 'clone',
								value: function clone() {
									return new ImageStyle(this);
								}
							}, {
								key: 'imageSizing',
								get: function get() {
									return this._imageSizing;
								},
								set: function set(imageSizing) {
									this._imageSizing = imageSizing;
									this.doChangeStyle();
								}
							}, {
								key: 'margin',
								get: function get() {
									return this._margin;
								},
								set: function set(margin) {
									this._margin = margin;
									this.doChangeStyle();
								}
							}]);

							return ImageStyle;
						}(StdBaseStyle);

						module.exports = ImageStyle;
					}

					/***/
				},

				/***/"./columns/style/MultilineTextStyle.js":
				/*!*********************************************!*\
      !*** ./columns/style/MultilineTextStyle.js ***!
      \*********************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsStyleMultilineTextStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var adj = function adj(style) {
							var _style$textBaseline = style.textBaseline,
							    textBaseline = _style$textBaseline === undefined ? 'top' : _style$textBaseline;

							style.textBaseline = textBaseline;
							return style;
						};

						var Style = __webpack_require__( /*! ./Style */"./columns/style/Style.js");

						var defaultStyle = void 0;

						var MultilineTextStyle = function (_Style3) {
							_inherits(MultilineTextStyle, _Style3);

							_createClass(MultilineTextStyle, null, [{
								key: 'DEFAULT',
								get: function get() {
									return defaultStyle ? defaultStyle : defaultStyle = new MultilineTextStyle();
								}
							}]);

							function MultilineTextStyle() {
								var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, MultilineTextStyle);

								var _this45 = _possibleConstructorReturn(this, (MultilineTextStyle.__proto__ || Object.getPrototypeOf(MultilineTextStyle)).call(this, adj(style)));

								_this45._lineHeight = style.lineHeight || '1em';
								return _this45;
							}

							_createClass(MultilineTextStyle, [{
								key: 'clone',
								value: function clone() {
									return new MultilineTextStyle(this);
								}
							}, {
								key: 'lineHeight',
								get: function get() {
									return this._lineHeight;
								},
								set: function set(lineHeight) {
									this._lineHeight = lineHeight;
									this.doChangeStyle();
								}
							}]);

							return MultilineTextStyle;
						}(Style);

						module.exports = MultilineTextStyle;
					}

					/***/
				},

				/***/"./columns/style/NumberStyle.js":
				/*!**************************************!*\
      !*** ./columns/style/NumberStyle.js ***!
      \**************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsStyleNumberStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var adj = function adj(style) {
							var _style$textAlign6 = style.textAlign,
							    textAlign = _style$textAlign6 === undefined ? 'right' : _style$textAlign6;

							style.textAlign = textAlign;
							return style;
						};

						var Style = __webpack_require__( /*! ./Style */"./columns/style/Style.js");

						var defaultStyle = void 0;

						var NumberStyle = function (_Style4) {
							_inherits(NumberStyle, _Style4);

							_createClass(NumberStyle, null, [{
								key: 'DEFAULT',
								get: function get() {
									return defaultStyle ? defaultStyle : defaultStyle = new NumberStyle();
								}
							}]);

							function NumberStyle() {
								var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, NumberStyle);

								return _possibleConstructorReturn(this, (NumberStyle.__proto__ || Object.getPrototypeOf(NumberStyle)).call(this, adj(style)));
							}

							_createClass(NumberStyle, [{
								key: 'clone',
								value: function clone() {
									return new NumberStyle(this);
								}
							}]);

							return NumberStyle;
						}(Style);

						module.exports = NumberStyle;
					}

					/***/
				},

				/***/"./columns/style/PercentCompleteBarStyle.js":
				/*!**************************************************!*\
      !*** ./columns/style/PercentCompleteBarStyle.js ***!
      \**************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsStylePercentCompleteBarStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var Style = __webpack_require__( /*! ./Style */"./columns/style/Style.js");
						var defaultStyle = void 0;
						var DEFAULT_BAR_COLOR = function DEFAULT_BAR_COLOR(num) {
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

						var PercentCompleteBarStyle = function (_Style5) {
							_inherits(PercentCompleteBarStyle, _Style5);

							_createClass(PercentCompleteBarStyle, null, [{
								key: 'DEFAULT',
								get: function get() {
									return defaultStyle ? defaultStyle : defaultStyle = new PercentCompleteBarStyle();
								}
							}]);

							function PercentCompleteBarStyle() {
								var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, PercentCompleteBarStyle);

								var _this47 = _possibleConstructorReturn(this, (PercentCompleteBarStyle.__proto__ || Object.getPrototypeOf(PercentCompleteBarStyle)).call(this, style));

								_this47._barColor = style.barColor || DEFAULT_BAR_COLOR;
								_this47._barBgColor = style.barBgColor || '#f0f3f5';
								_this47._barHeight = style.barHeight || 3;
								return _this47;
							}

							_createClass(PercentCompleteBarStyle, [{
								key: 'clone',
								value: function clone() {
									return new PercentCompleteBarStyle(this);
								}
							}, {
								key: 'barColor',
								get: function get() {
									return this._barColor;
								},
								set: function set(barColor) {
									this._barColor = barColor;
									this.doChangeStyle();
								}
							}, {
								key: 'barBgColor',
								get: function get() {
									return this._barBgColor;
								},
								set: function set(barBgColor) {
									this._barBgColor = barBgColor;
									this.doChangeStyle();
								}
							}, {
								key: 'barHeight',
								get: function get() {
									return this._barHeight;
								},
								set: function set(barHeight) {
									this._barHeight = barHeight;
									this.doChangeStyle();
								}
							}]);

							return PercentCompleteBarStyle;
						}(Style);

						module.exports = PercentCompleteBarStyle;
					}

					/***/
				},

				/***/"./columns/style/StdBaseStyle.js":
				/*!***************************************!*\
      !*** ./columns/style/StdBaseStyle.js ***!
      \***************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsStyleStdBaseStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var BaseStyle = __webpack_require__( /*! ./BaseStyle */"./columns/style/BaseStyle.js");

						var defaultStyle = void 0;

						var StdBaseStyle = function (_BaseStyle2) {
							_inherits(StdBaseStyle, _BaseStyle2);

							_createClass(StdBaseStyle, null, [{
								key: 'DEFAULT',
								get: function get() {
									return defaultStyle ? defaultStyle : defaultStyle = new StdBaseStyle();
								}
							}]);

							function StdBaseStyle() {
								var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, StdBaseStyle);

								var _this48 = _possibleConstructorReturn(this, (StdBaseStyle.__proto__ || Object.getPrototypeOf(StdBaseStyle)).call(this, style));

								_this48._textAlign = style.textAlign || 'left';
								_this48._textBaseline = style.textBaseline || 'middle';
								return _this48;
							}

							_createClass(StdBaseStyle, [{
								key: 'clone',
								value: function clone() {
									return new StdBaseStyle(this);
								}
							}, {
								key: 'textAlign',
								get: function get() {
									return this._textAlign;
								},
								set: function set(textAlign) {
									this._textAlign = textAlign;
									this.doChangeStyle();
								}
							}, {
								key: 'textBaseline',
								get: function get() {
									return this._textBaseline;
								},
								set: function set(textBaseline) {
									this._textBaseline = textBaseline;
									this.doChangeStyle();
								}
							}]);

							return StdBaseStyle;
						}(BaseStyle);

						module.exports = StdBaseStyle;
					}

					/***/
				},

				/***/"./columns/style/Style.js":
				/*!********************************!*\
      !*** ./columns/style/Style.js ***!
      \********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsStyleStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var StdBaseStyle = __webpack_require__( /*! ./StdBaseStyle */"./columns/style/StdBaseStyle.js");
						var defaultStyle = void 0;

						var Style = function (_StdBaseStyle3) {
							_inherits(Style, _StdBaseStyle3);

							_createClass(Style, null, [{
								key: 'DEFAULT',
								get: function get() {
									return defaultStyle ? defaultStyle : defaultStyle = new Style();
								}
							}]);

							function Style() {
								var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, Style);

								var _this49 = _possibleConstructorReturn(this, (Style.__proto__ || Object.getPrototypeOf(Style)).call(this, style));

								_this49._color = style.color;
								_this49._font = style.font;
								_this49._padding = style.padding;
								return _this49;
							}

							_createClass(Style, [{
								key: 'clone',
								value: function clone() {
									return new Style(this);
								}
							}, {
								key: 'color',
								get: function get() {
									return this._color;
								},
								set: function set(color) {
									this._color = color;
									this.doChangeStyle();
								}
							}, {
								key: 'font',
								get: function get() {
									return this._font;
								},
								set: function set(font) {
									this._font = font;
									this.doChangeStyle();
								}
							}, {
								key: 'padding',
								get: function get() {
									return this._padding;
								},
								set: function set(padding) {
									this._padding = padding;
									this.doChangeStyle();
								}
							}]);

							return Style;
						}(StdBaseStyle);

						module.exports = Style;
					}

					/***/
				},

				/***/"./columns/type.js":
				/*!*************************!*\
      !*** ./columns/type.js ***!
      \*************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsTypeJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var Column = __webpack_require__( /*! ./type/Column */"./columns/type/Column.js");
						var NumberColumn = __webpack_require__( /*! ./type/NumberColumn */"./columns/type/NumberColumn.js");
						var CheckColumn = __webpack_require__( /*! ./type/CheckColumn */"./columns/type/CheckColumn.js");
						var ButtonColumn = __webpack_require__( /*! ./type/ButtonColumn */"./columns/type/ButtonColumn.js");
						var ImageColumn = __webpack_require__( /*! ./type/ImageColumn */"./columns/type/ImageColumn.js");
						var PercentCompleteBarColumn = __webpack_require__( /*! ./type/PercentCompleteBarColumn */"./columns/type/PercentCompleteBarColumn.js");
						var IconColumn = __webpack_require__( /*! ./type/IconColumn */"./columns/type/IconColumn.js");
						var BranchGraphColumn = __webpack_require__( /*! ./type/BranchGraphColumn */"./columns/type/BranchGraphColumn.js");
						var MenuColumn = __webpack_require__( /*! ./type/MenuColumn */"./columns/type/MenuColumn.js");
						var MultilineTextColumn = __webpack_require__( /*! ./type/MultilineTextColumn */"./columns/type/MultilineTextColumn.js");

						/**
       * column types
       * @type {Object}
       * @namespace cheetahGrid.columns.type
       * @memberof cheetahGrid.columns
       */
						var type = {
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
							of: function of(columnType) {
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

					/***/
				},

				/***/"./columns/type/BaseColumn.js":
				/*!************************************!*\
      !*** ./columns/type/BaseColumn.js ***!
      \************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsTypeBaseColumnJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var isFadeinWhenCallbackInPromise = function isFadeinWhenCallbackInPromise(column, grid) {
							if (isDef(column._fadeinWhenCallbackInPromise)) {
								return column._fadeinWhenCallbackInPromise;
							}
							return !!grid.configure('fadeinWhenCallbackInPromise');
						};

						var getFadinState = function getFadinState(grid) {
							if (!grid[COLUMN_FADEIN_STATE_ID]) {
								setReadonly(grid, COLUMN_FADEIN_STATE_ID, {});
							}
							return grid[COLUMN_FADEIN_STATE_ID];
						};

						var _generateFadinPointAction = function _generateFadinPointAction(grid, col, row, context, drawInternal, drawCellBase) {
							return function (point) {
								var state = getFadinState(grid);
								var stateKey = col + ':' + row;
								if (point === 1) {
									delete state[stateKey];
								} else {
									state[stateKey] = {
										opacity: point
									};
								}
								drawCellBase();

								drawInternal();

								var cellState = state[stateKey];
								if (cellState) {
									//透過するため背景を透過で上書き
									var ctx = context.getContext();
									ctx.globalAlpha = 1 - cellState.opacity;
									try {
										drawCellBase();
									} finally {
										ctx.globalAlpha = 1;
									}
								}
							};
						};

						var styleContents = __webpack_require__( /*! ../style */"./columns/style.js");

						var _webpack_require__34 = __webpack_require__( /*! ../../internal/utils */"./internal/utils.js"),
						    isPromise = _webpack_require__34.isPromise,
						    isDef = _webpack_require__34.isDef,
						    setReadonly = _webpack_require__34.obj.setReadonly;

						var _animate = __webpack_require__( /*! ../../internal/animate */"./internal/animate.js");
						var BaseStyle = __webpack_require__( /*! ../style/Style */"./columns/style/Style.js");

						var _webpack_require__35 = __webpack_require__( /*! ../../internal/symbolManager */"./internal/symbolManager.js"),
						    COLUMN_FADEIN_STATE_ID = _webpack_require__35.COLUMN_FADEIN_STATE_ID;

						var fadinMgr = {
							animate: function animate(grid, col, row, context, drawInternal, drawCellBase) {
								// fadein animation
								var state = getFadinState(grid);

								var activeFadeins = [_generateFadinPointAction(grid, col, row, context, drawInternal, drawCellBase)];
								state.activeFadeins = activeFadeins;

								_animate(500, function (point) {
									activeFadeins.forEach(function (f) {
										return f(point);
									});
									if (point === 1) {
										delete state.activeFadeins;
									}
								});
							},
							margeAnimate: function margeAnimate(grid, col, row, context, drawInternal, drawCellBase) {
								var state = getFadinState(grid);
								if (state.activeFadeins) {
									state.activeFadeins.push(_generateFadinPointAction(grid, col, row, context, drawInternal, drawCellBase));
								} else {
									drawInternal();
								}
							}
						};

						var BaseColumn = function () {
							function BaseColumn() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, BaseColumn);

								this.onDrawCell = this.onDrawCell.bind(this); //スコープを固定させる

								//Promiseのcallbackでフェードイン表示する
								this._fadeinWhenCallbackInPromise = option.fadeinWhenCallbackInPromise;
							}

							_createClass(BaseColumn, [{
								key: 'onDrawCell',
								value: function onDrawCell(cellValue, info, context, grid) {
									var _this50 = this;

									var style = info.style,
									    getRecord = info.getRecord,
									    drawCellBase = info.drawCellBase;

									delete info.getRecord;
									delete info.style;
									var helper = grid.getGridCanvasHelper();
									drawCellBase();

									//文字描画
									if (isPromise(cellValue)) {
										if (context.drawing) {
											return null;
										}
										var start = Date.now();
										return cellValue.then(function (val) {
											var currentContext = context.toCurrentContext();
											var drawRect = currentContext.getDrawRect();
											if (!drawRect) {
												return;
											}
											var time = Date.now() - start;

											var drawInternal = function drawInternal() {
												var currentContext = context.toCurrentContext();
												var drawRect = currentContext.getDrawRect();
												if (!drawRect) {
													return;
												}
												var actStyle = styleContents.of(style, getRecord(), _this50.StyleClass);
												_this50.drawInternal(_this50.convertInternal(val), currentContext, actStyle, helper, grid, info);
												_this50.drawMessageInternal(info.getMessage(), context, actStyle, helper, grid, info);
											};

											if (!isFadeinWhenCallbackInPromise(_this50, grid)) {
												drawInternal(); //単純な描画
											} else {
												var col = context.col,
												    row = context.row;

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
										var actStyle = styleContents.of(style, getRecord(), this.StyleClass);
										this.drawInternal(this.convertInternal(cellValue), context, actStyle, helper, grid, info);
										this.drawMessageInternal(info.getMessage(), context, actStyle, helper, grid, info);
										//フェードインの場合透過するため背景を透過で上書き
										var col = context.col,
										    row = context.row;

										var stateKey = col + ':' + row;
										var cellState = grid[COLUMN_FADEIN_STATE_ID] && grid[COLUMN_FADEIN_STATE_ID][stateKey];
										if (cellState) {
											var ctx = context.getContext();
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
							}, {
								key: 'clone',
								value: function clone() {
									return new BaseColumn(this);
								}
							}, {
								key: 'convertInternal',
								value: function convertInternal(value) {
									return isDef(value) ? value : '';
								}
							}, {
								key: 'drawInternal',
								value: function drawInternal(value, context, style, helper, grid, info) {}
							}, {
								key: 'drawMessageInternal',
								value: function drawMessageInternal(message, context, style, helper, grid, info) {
									info.messageHandler.drawCellMessage(message, context, style, helper, info);
								}
							}, {
								key: 'bindGridEvent',
								value: function bindGridEvent(grid, col, util) {
									return [];
								}
							}, {
								key: 'StyleClass',
								get: function get() {
									return BaseStyle;
								}
							}]);

							return BaseColumn;
						}();

						module.exports = BaseColumn;
					}

					/***/
				},

				/***/"./columns/type/BranchGraphColumn.js":
				/*!*******************************************!*\
      !*** ./columns/type/BranchGraphColumn.js ***!
      \*******************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsTypeBranchGraphColumnJs(module, exports, __webpack_require__) {

					"use strict";
					/* WEBPACK VAR INJECTION */
					(function (__webpack_provided_Array_dot_isArray) {
						var _webpack_require__36 = __webpack_require__( /*! ../../internal/utils */"./internal/utils.js"),
						    isDef = _webpack_require__36.isDef,
						    getOrApply = _webpack_require__36.getOrApply,
						    isPromise = _webpack_require__36.isPromise,
						    isObject = _webpack_require__36.obj.isObject;

						var BranchGraphStyle = __webpack_require__( /*! ../style/BranchGraphStyle */"./columns/style/BranchGraphStyle.js");
						var BaseColumn = __webpack_require__( /*! ./BaseColumn */"./columns/type/BaseColumn.js");

						var _webpack_require__37 = __webpack_require__( /*! ../../internal/symbolManager */"./internal/symbolManager.js"),
						    _ = _webpack_require__37.BRANCH_GRAPH_COLUMN_STATE_ID;

						function getAllColumnData(grid, col, callback) {
							var dataSource = grid.dataSource;
							var field = grid.getField(col);
							if (isObject(field) && field.get && field.set) {
								field = field.get;
							}
							var allData = [];
							var promise = void 0;

							var _loop = function _loop(index) {
								var data = dataSource.getField(index, field);
								if (isPromise(data)) {
									var dataIndex = allData.length;
									allData.push(data);
									if (!promise) {
										promise = data.then(function (d) {
											allData[dataIndex] = d;
										});
									} else {
										promise = promise.then(function () {
											return data;
										}).then(function (d) {
											allData[dataIndex] = d;
										});
									}
								} else {
									allData.push(data);
								}
							};

							for (var index = 0; index < dataSource.length; index++) {
								_loop(index);
							}

							if (promise) {
								promise.then(function () {
									return callback(allData);
								});
							} else {
								callback(allData);
							}
						}

						var BranchLine = function BranchLine(_ref22) {
							var fromIndex = _ref22.fromIndex,
							    toIndex = _ref22.toIndex,
							    colorIndex = _ref22.colorIndex,
							    point = _ref22.point;

							_classCallCheck(this, BranchLine);

							this.fromIndex = fromIndex;
							this.toIndex = toIndex;
							this.colorIndex = colorIndex;
							this.point = point;
						};

						var BranchPoint = function () {
							function BranchPoint(_ref23) {
								var index = _ref23.index,
								    _ref23$commit = _ref23.commit,
								    commit = _ref23$commit === undefined ? false : _ref23$commit,
								    _ref23$lines = _ref23.lines,
								    lines = _ref23$lines === undefined ? [] : _ref23$lines,
								    tag = _ref23.tag;

								_classCallCheck(this, BranchPoint);

								this.index = index;
								this.commit = commit;
								this.lines = lines;
								this.tag = tag;
							}

							_createClass(BranchPoint, null, [{
								key: 'mergeLines',
								value: function mergeLines(lines) {
									var result = lines.filter(function (l) {
										return isDef(l.fromIndex) && isDef(l.toIndex);
									});

									var froms = lines.filter(function (l) {
										return isDef(l.fromIndex) && !isDef(l.toIndex);
									});
									var tos = lines.filter(function (l) {
										return !isDef(l.fromIndex) && isDef(l.toIndex);
									});

									froms.forEach(function (f) {
										for (var i = 0; i < tos.length; i++) {
											var t = tos[i];
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
							}, {
								key: 'merge',
								value: function merge(a, b) {
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
							}]);

							return BranchPoint;
						}();

						function joinLine(timeline, branchIndex) {
							var reverse = [].concat(_toConsumableArray(timeline)).reverse();
							for (var i = 0; i < reverse.length; i++) {
								var f = reverse[i][branchIndex];
								if (f) {
									f.lines = BranchPoint.mergeLines(f.lines.concat([new BranchLine({
										toIndex: branchIndex,
										colorIndex: branchIndex
									})]));

									for (var j = 0; j < i; j++) {
										var tl = reverse[j];
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

						function branch(_ref24, from, to) {
							var timeline = _ref24.timeline,
							    branches = _ref24.branches;

							var fromIndex = branches.indexOf(from);
							var toIndex = branches.indexOf(to);
							if (toIndex < 0) {
								toIndex = branches.length;
								branches.push(to);
							}

							function findBranchRootIndex() {
								for (var index = timeline.length - 1; index >= 0; index--) {
									var tl = timeline[index];
									var _from = tl[fromIndex];
									if (_from && _from.commit) {
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
								var fromTargetIndex = findBranchRootIndex();
								if (fromTargetIndex === -1) {
									return null;
								}
								var branchTargetFromIndex = fromTargetIndex + 1;
								var branchPoint = new BranchPoint({
									index: toIndex,
									lines: [new BranchLine({
										fromIndex: fromIndex,
										colorIndex: toIndex
									})]
								});
								var point = void 0;
								var result = void 0;
								if (branchTargetFromIndex < timeline.length) {
									var targetLine = timeline[branchTargetFromIndex];
									point = targetLine[toIndex] = BranchPoint.merge(targetLine[toIndex], branchPoint);
								} else {
									point = branchPoint;
									result = branchPoint;
								}
								var _from2 = timeline[fromTargetIndex][fromIndex];
								_from2.lines = BranchPoint.mergeLines(_from2.lines.concat([new BranchLine({
									toIndex: toIndex,
									colorIndex: toIndex,
									point: point
								})]));
								return result;
							}
						}

						function commit(_ref25, name) {
							var timeline = _ref25.timeline,
							    branches = _ref25.branches;

							var index = branches.indexOf(name);
							if (index < 0) {
								return null;
							}
							var result = new BranchPoint({
								index: index,
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

						function commitTag(_ref26, name, tag) {
							var timeline = _ref26.timeline,
							    branches = _ref26.branches;

							var index = branches.indexOf(name);
							if (index < 0) {
								index = branches.length;
								branches.push(name);
							}
							return new BranchPoint({
								index: index,
								tag: tag
							});
						}

						function commitMerge(_ref27, from, to) {
							var timeline = _ref27.timeline,
							    branches = _ref27.branches;

							var fromIndex = branches.indexOf(from);
							var toIndex = branches.indexOf(to);
							if (toIndex < 0 || fromIndex < 0) {
								return new BranchPoint({
									index: toIndex,
									commit: true
								});
							}
							var result = new BranchPoint({
								index: toIndex,
								commit: true,
								lines: [new BranchLine({
									fromIndex: fromIndex,
									colorIndex: fromIndex
								}), new BranchLine({
									fromIndex: toIndex,
									colorIndex: toIndex
								})]
							});
							var froms = [].concat(_toConsumableArray(timeline));
							var fromTargetLine = froms.pop();
							if (fromTargetLine) {
								fromTargetLine[fromIndex] = BranchPoint.merge(fromTargetLine[fromIndex], new BranchPoint({
									index: toIndex,
									lines: [new BranchLine({
										toIndex: toIndex,
										colorIndex: fromIndex
									})]
								}));
							}

							joinLine(froms, fromIndex);

							joinLine(timeline, toIndex);

							return result;
						}

						function calcCommand(info, command) {
							var timeline = info.timeline;

							var timelineData = [];
							// const last = timeline.length > 0 ? timeline[timeline.length - 1] : null;
							var commands = __webpack_provided_Array_dot_isArray(command) ? command : [command];
							commands.forEach(function (cmd) {
								if (!cmd) {
									return;
								}
								var point = void 0;
								if (cmd.command === 'branch') {
									var from = isObject(cmd.branch) ? cmd.branch.from : null;
									var to = isObject(cmd.branch) ? cmd.branch.to : cmd.branch;
									point = branch(info, from, to);
								} else if (cmd.command === 'commit') {
									var _branch = cmd.branch;

									point = commit(info, _branch);
								} else if (cmd.command === 'merge') {
									var _cmd$branch = cmd.branch,
									    _from3 = _cmd$branch.from,
									    _to = _cmd$branch.to;

									point = commitMerge(info, _from3, _to);
								} else if (cmd.command === 'tag') {
									var _branch2 = cmd.branch,
									    tag = cmd.tag;

									point = commitTag(info, _branch2, tag);
								}
								if (point && point.index > -1) {
									timelineData[point.index] = BranchPoint.merge(timelineData[point.index], point);
								}
							});
							timeline.push(timelineData);
						}

						function calcBranchesInfo(start, grid, col) {
							var result = {
								branches: [],
								timeline: []
							};
							getAllColumnData(grid, col, function (data) {
								if (start !== 'top') {
									data = [].concat(_toConsumableArray(data)).reverse();
								}
								data.forEach(function (command) {
									calcCommand(result, command);
								});
							});
							return result;
						}

						function calcBranchXPoints(ctx, left, width, radius, branches, timeline) {
							var w = Math.max(width / branches.length + 1, 5);
							timeline.forEach(function (tl) {
								tl.forEach(function (p, index) {
									if (index <= 0) {
										// 計算の意味が無い
										return;
									}
									if (p.tag) {
										var textWidth = ctx.measureText(p.tag).width;
										if (w * index + radius * 2 + 4 + textWidth > width) {
											w = Math.max((width - radius * 2 - 4 - textWidth) / index, 5);
										}
									}
								});
							});
							var result = [];
							var x = left;
							branches.forEach(function () {
								result.push(Math.ceil(x + radius));
								x += w;
							});
							return result;
						}

						function renderMerge(grid, ctx, x, y, upLineIndex, downLineIndex, colorIndex, _ref28, _ref29) {
							var branchXPoints = _ref28.branchXPoints,
							    margin = _ref28.margin,
							    branchColors = _ref28.branchColors,
							    branchLineWidth = _ref28.branchLineWidth,
							    mergeStyle = _ref28.mergeStyle;
							var width = _ref29.width,
							    col = _ref29.col,
							    row = _ref29.row,
							    branches = _ref29.branches;

							if (isDef(upLineIndex) || isDef(downLineIndex)) {
								ctx.strokeStyle = getOrApply(branchColors, branches[colorIndex], colorIndex);
								ctx.lineWidth = branchLineWidth;
								ctx.lineCap = 'round';
								ctx.beginPath();

								if (isDef(upLineIndex)) {
									var upX = branchXPoints[upLineIndex];
									var upRect = grid.getCellRelativeRect(col, row - 1);
									var upY = upRect.top + upRect.height / 2;
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
									var downX = branchXPoints[downLineIndex];
									var downRect = grid.getCellRelativeRect(col, row + 1);
									var downY = downRect.top + downRect.height / 2;
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

						var BranchGraphColumn = function (_BaseColumn) {
							_inherits(BranchGraphColumn, _BaseColumn);

							function BranchGraphColumn() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, BranchGraphColumn);

								var _this51 = _possibleConstructorReturn(this, (BranchGraphColumn.__proto__ || Object.getPrototypeOf(BranchGraphColumn)).call(this, option));

								_this51._start = option.start || 'bottom';
								_this51._cache = isDef(option.cache) ? option.cache : false;
								return _this51;
							}

							_createClass(BranchGraphColumn, [{
								key: 'clearCache',
								value: function clearCache(grid) {
									delete grid[_];
								}
							}, {
								key: 'onDrawCell',
								value: function onDrawCell(cellValue, info, context, grid) {
									if (this._cache) {
										var state = grid[_] || (grid[_] = {});
										var col = context.col;

										if (!state[col]) {
											state[col] = calcBranchesInfo(this._start, grid, col);
										}
									}
									return _get(BranchGraphColumn.prototype.__proto__ || Object.getPrototypeOf(BranchGraphColumn.prototype), 'onDrawCell', this).call(this, cellValue, info, context, grid);
								}
							}, {
								key: 'clone',
								value: function clone() {
									return new BranchGraphColumn(this);
								}
							}, {
								key: 'drawInternal',
								value: function drawInternal(value, context, style, helper, grid, _ref30) {
									var drawCellBase = _ref30.drawCellBase;
									var col = context.col,
									    row = context.row;

									var _ref31 = this._cache && grid[_] ? grid[_][col] : calcBranchesInfo(this._start, grid, col),
									    timeline = _ref31.timeline,
									    branches = _ref31.branches;

									var _ref32 = this._start !== 'top' ? { upLineIndexKey: 'toIndex', downLineIndexKey: 'fromIndex' } : { upLineIndexKey: 'fromIndex', downLineIndexKey: 'toIndex' },
									    upLineIndexKey = _ref32.upLineIndexKey,
									    downLineIndexKey = _ref32.downLineIndexKey;

									var data = this._start !== 'top' ? timeline[timeline.length - (row - grid.frozenRowCount) - 1] : timeline[row - grid.frozenRowCount];

									var branchColors = style.branchColors,
									    branchLineWidth = style.branchLineWidth,
									    circleSize = style.circleSize,
									    mergeStyle = style.mergeStyle,
									    margin = style.margin,
									    bgColor = style.bgColor;

									if (bgColor) {
										drawCellBase({
											bgColor: bgColor
										});
									}

									var rect = context.getRect();
									var radius = circleSize / 2;
									var width = rect.width - margin * 2;

									helper.drawWithClip(context, function (ctx) {
										ctx.textAlign = 'left';
										ctx.textBaseline = 'middle';
										var branchXPoints = calcBranchXPoints(ctx, rect.left + margin, width, radius, branches, timeline);

										var y = rect.top + rect.height / 2;

										// draw join lines
										data.map(function (point, index) {
											return point ? point.lines.map(function (line) {
												return {
													colorIndex: line.colorIndex,
													upLineIndex: line[upLineIndexKey],
													downLineIndex: line[downLineIndexKey],
													pointIndex: index
												};
											}) : [];
										}).reduce(function (p, c) {
											return p.concat(c);
										}, []). // flatMap
										// order of overlap
										sort(function (a, b) {
											return b.colorIndex - a.colorIndex;
										}).forEach(function (line) {
											var x = branchXPoints[line.pointIndex];
											renderMerge(grid, ctx, x, y, line.upLineIndex, line.downLineIndex, line.colorIndex, {
												margin: margin,
												branchXPoints: branchXPoints,
												branchLineWidth: branchLineWidth,
												branchColors: branchColors,
												mergeStyle: mergeStyle
											}, {
												width: width, col: col, row: row, branches: branches
											});
										});
										// draw commit points
										data.forEach(function (p, index) {
											if (p && p.commit) {
												var x = branchXPoints[index];
												ctx.fillStyle = getOrApply(branchColors, branches[index], index);
												ctx.beginPath();
												ctx.arc(x, y, radius, 0, Math.PI * 2, true);
												ctx.fill();
												ctx.closePath();
											}
										});
										// draw tags
										data.forEach(function (p, index) {
											if (p && p.tag) {
												ctx.fillStyle = getOrApply(branchColors, branches[index], index);
												ctx.fillText(p.tag, branchXPoints[index] + radius + 4, y);
											}
										});
									});
								}
							}, {
								key: 'StyleClass',
								get: function get() {
									return BranchGraphStyle;
								}
							}]);

							return BranchGraphColumn;
						}(BaseColumn);

						module.exports = BranchGraphColumn;
						/* WEBPACK VAR INJECTION */
					}).call(this, __webpack_require__( /*! @/internal/com.js */"./internal/com.js")["Array_isArray"]);

					/***/
				},

				/***/"./columns/type/ButtonColumn.js":
				/*!**************************************!*\
      !*** ./columns/type/ButtonColumn.js ***!
      \**************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsTypeButtonColumnJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var Column = __webpack_require__( /*! ./Column */"./columns/type/Column.js");
						var ButtonStyle = __webpack_require__( /*! ../style/ButtonStyle */"./columns/style/ButtonStyle.js");

						var _webpack_require__38 = __webpack_require__( /*! ../../internal/symbolManager */"./internal/symbolManager.js"),
						    BUTTON_COLUMN_STATE_ID = _webpack_require__38.BUTTON_COLUMN_STATE_ID;

						var utils = __webpack_require__( /*! ./columnUtils */"./columns/type/columnUtils.js");

						var ButtonColumn = function (_Column) {
							_inherits(ButtonColumn, _Column);

							function ButtonColumn() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, ButtonColumn);

								var _this52 = _possibleConstructorReturn(this, (ButtonColumn.__proto__ || Object.getPrototypeOf(ButtonColumn)).call(this, option));

								_this52._caption = option.caption;
								return _this52;
							}

							_createClass(ButtonColumn, [{
								key: 'withCaption',
								value: function withCaption(caption) {
									var c = this.clone();
									c._caption = caption;
									return c;
								}
							}, {
								key: 'clone',
								value: function clone() {
									return new ButtonColumn(this);
								}
							}, {
								key: 'convertInternal',
								value: function convertInternal(value) {
									return this._caption || value;
								}
							}, {
								key: 'drawInternal',
								value: function drawInternal(value, context, style, helper, grid, _ref33) {
									var drawCellBase = _ref33.drawCellBase,
									    getIcon = _ref33.getIcon;
									var textAlign = style.textAlign,
									    textBaseline = style.textBaseline,
									    bgColor = style.bgColor,
									    color = style.color,
									    buttonBgColor = style.buttonBgColor,
									    font = style.font,
									    padding = style.padding;

									if (bgColor) {
										drawCellBase({
											bgColor: bgColor
										});
									}
									helper.testFontLoad(font, value, context);
									var col = context.col,
									    row = context.row;

									var active = false;
									var state = grid[BUTTON_COLUMN_STATE_ID];
									if (state) {
										if (state.mouseActiveCell && state.mouseActiveCell.col === col && state.mouseActiveCell.row === row) {
											active = true;
										} else if (context.getSelectState().selected) {
											active = true;
										}
									}

									utils.loadIcons(getIcon(), context, helper, function (icons, context) {
										helper.button(value, context, {
											textAlign: textAlign,
											textBaseline: textBaseline,
											bgColor: buttonBgColor,
											color: color,
											font: font,
											padding: padding,
											shadow: active ? {
												color: 'rgba(0, 0, 0, 0.48)',
												blur: 6,
												offsetY: 3
											} : true,
											icons: icons
										});
									});
								}
							}, {
								key: 'StyleClass',
								get: function get() {
									return ButtonStyle;
								}
							}, {
								key: 'caption',
								get: function get() {
									return this._caption;
								}
							}]);

							return ButtonColumn;
						}(Column);

						module.exports = ButtonColumn;
					}

					/***/
				},

				/***/"./columns/type/CheckColumn.js":
				/*!*************************************!*\
      !*** ./columns/type/CheckColumn.js ***!
      \*************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsTypeCheckColumnJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var toBoolean = function toBoolean(val) {
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
						};

						var BaseColumn = __webpack_require__( /*! ./BaseColumn */"./columns/type/BaseColumn.js");
						var CheckStyle = __webpack_require__( /*! ../style/CheckStyle */"./columns/style/CheckStyle.js");

						var _webpack_require__39 = __webpack_require__( /*! ../../internal/symbolManager */"./internal/symbolManager.js"),
						    CHECK_COLUMN_STATE_ID = _webpack_require__39.CHECK_COLUMN_STATE_ID;

						var CheckColumn = function (_BaseColumn2) {
							_inherits(CheckColumn, _BaseColumn2);

							function CheckColumn() {
								_classCallCheck(this, CheckColumn);

								return _possibleConstructorReturn(this, (CheckColumn.__proto__ || Object.getPrototypeOf(CheckColumn)).apply(this, arguments));
							}

							_createClass(CheckColumn, [{
								key: 'clone',
								value: function clone() {
									return new CheckColumn(this);
								}
							}, {
								key: 'convertInternal',
								value: function convertInternal(value) {
									return toBoolean(value);
								}
							}, {
								key: 'drawInternal',
								value: function drawInternal(value, context, style, helper, grid, _ref34) {
									var drawCellBase = _ref34.drawCellBase;
									var textAlign = style.textAlign,
									    textBaseline = style.textBaseline,
									    borderColor = style.borderColor,
									    checkBgColor = style.checkBgColor,
									    uncheckBgColor = style.uncheckBgColor,
									    bgColor = style.bgColor;

									if (bgColor) {
										drawCellBase({
											bgColor: bgColor
										});
									}

									var col = context.col,
									    row = context.row;

									var key = col + ':' + row;
									var state = grid[CHECK_COLUMN_STATE_ID] && grid[CHECK_COLUMN_STATE_ID][key];

									var opt = {
										textAlign: textAlign,
										textBaseline: textBaseline,
										borderColor: borderColor,
										checkBgColor: checkBgColor,
										uncheckBgColor: uncheckBgColor
									};
									if (state) {
										opt.animElapsedTime = state.elapsed;
									}
									helper.checkbox(value, context, opt);
								}
							}, {
								key: 'bindGridEvent',
								value: function bindGridEvent(grid, col, util) {
									return [];
								}
							}, {
								key: 'StyleClass',
								get: function get() {
									return CheckStyle;
								}
							}]);

							return CheckColumn;
						}(BaseColumn);

						module.exports = CheckColumn;
					}

					/***/
				},

				/***/"./columns/type/Column.js":
				/*!********************************!*\
      !*** ./columns/type/Column.js ***!
      \********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsTypeColumnJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var Style = __webpack_require__( /*! ../style/Style */"./columns/style/Style.js");
						var BaseColumn = __webpack_require__( /*! ./BaseColumn */"./columns/type/BaseColumn.js");
						var utils = __webpack_require__( /*! ./columnUtils */"./columns/type/columnUtils.js");

						var Column = function (_BaseColumn3) {
							_inherits(Column, _BaseColumn3);

							function Column() {
								_classCallCheck(this, Column);

								return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
							}

							_createClass(Column, [{
								key: 'clone',
								value: function clone() {
									return new Column(this);
								}
							}, {
								key: 'drawInternal',
								value: function drawInternal(value, context, style, helper, grid, _ref35) {
									var drawCellBase = _ref35.drawCellBase,
									    getIcon = _ref35.getIcon;
									var textAlign = style.textAlign,
									    textBaseline = style.textBaseline,
									    color = style.color,
									    font = style.font,
									    bgColor = style.bgColor,
									    padding = style.padding;

									if (bgColor) {
										drawCellBase({
											bgColor: bgColor
										});
									}
									helper.testFontLoad(font, value, context);
									utils.loadIcons(getIcon(), context, helper, function (icons, context) {
										helper.text(value, context, {
											textAlign: textAlign,
											textBaseline: textBaseline,
											color: color,
											font: font,
											icons: icons,
											padding: padding
										});
									});
								}
							}, {
								key: 'StyleClass',
								get: function get() {
									return Style;
								}
							}]);

							return Column;
						}(BaseColumn);

						module.exports = Column;
					}

					/***/
				},

				/***/"./columns/type/IconColumn.js":
				/*!************************************!*\
      !*** ./columns/type/IconColumn.js ***!
      \************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsTypeIconColumnJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var repeatArray = function repeatArray(val, count) {
							if (count === Infinity) {
								count = 0;
							}
							var a = [];
							for (var i = 0; i < count; i++) {
								a.push(val);
							}
							return a;
						};

						var IconStyle = __webpack_require__( /*! ../style/IconStyle */"./columns/style/IconStyle.js");
						var Column = __webpack_require__( /*! ./Column */"./columns/type/Column.js");
						var icons = __webpack_require__( /*! ../../internal/icons */"./internal/icons.js");

						var IconColumn = function (_Column2) {
							_inherits(IconColumn, _Column2);

							function IconColumn() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, IconColumn);

								var _this55 = _possibleConstructorReturn(this, (IconColumn.__proto__ || Object.getPrototypeOf(IconColumn)).call(this, option));

								_this55._tagName = option.tagName || 'i';
								_this55._className = option.className;
								_this55._content = option.content;
								_this55._name = option.name;
								_this55._iconWidth = option.iconWidth;
								return _this55;
							}

							_createClass(IconColumn, [{
								key: 'clone',
								value: function clone() {
									return new IconColumn(this);
								}
							}, {
								key: 'drawInternal',
								value: function drawInternal(value, context, style, helper, grid, info) {
									var num = value - 0;
									if (!isNaN(num)) {
										var icon = {};
										icons.iconPropKeys.forEach(function (k) {
											icon[k] = style[k];
										});
										icon.className = this._className;
										icon.tagName = this._tagName;
										icon.content = this._content;
										icon.name = this._name;
										if (this._iconWidth) {
											icon.width = this._iconWidth;
										}

										info.getIcon = function () {
											return repeatArray(icon, num);
										};
									} else {
										info.getIcon = function () {
											return null;
										};
									}
									_get(IconColumn.prototype.__proto__ || Object.getPrototypeOf(IconColumn.prototype), 'drawInternal', this).call(this, '', context, style, helper, grid, info);
								}
							}, {
								key: 'StyleClass',
								get: function get() {
									return IconStyle;
								}
							}]);

							return IconColumn;
						}(Column);

						module.exports = IconColumn;
					}

					/***/
				},

				/***/"./columns/type/ImageColumn.js":
				/*!*************************************!*\
      !*** ./columns/type/ImageColumn.js ***!
      \*************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsTypeImageColumnJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var getImage = function getImage(url) {
							return getCacheOrLoad('ImageColumn', MAX_LRU_CACHE_SIZE, url);
						};

						var calcKeepAspectRatioSize = function calcKeepAspectRatioSize(width, height, maxWidth, maxHeight) {
							var newWidth = width;
							var newHeight = height;
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
						};

						var ImageStyle = __webpack_require__( /*! ../style/ImageStyle */"./columns/style/ImageStyle.js");

						var _webpack_require__40 = __webpack_require__( /*! ../../internal/imgs */"./internal/imgs.js"),
						    getCacheOrLoad = _webpack_require__40.getCacheOrLoad;

						var _webpack_require__41 = __webpack_require__( /*! ../../internal/canvases */"./internal/canvases.js"),
						    calcStartPosition = _webpack_require__41.calcStartPosition;

						var BaseColumn = __webpack_require__( /*! ./BaseColumn */"./columns/type/BaseColumn.js");

						var MAX_LRU_CACHE_SIZE = 50;

						var ImageColumn = function (_BaseColumn4) {
							_inherits(ImageColumn, _BaseColumn4);

							function ImageColumn() {
								_classCallCheck(this, ImageColumn);

								return _possibleConstructorReturn(this, (ImageColumn.__proto__ || Object.getPrototypeOf(ImageColumn)).apply(this, arguments));
							}

							_createClass(ImageColumn, [{
								key: 'onDrawCell',
								value: function onDrawCell(cellValue, info, context, grid) {
									return _get(ImageColumn.prototype.__proto__ || Object.getPrototypeOf(ImageColumn.prototype), 'onDrawCell', this).call(this, getImage(cellValue), info, context, grid);
								}
							}, {
								key: 'clone',
								value: function clone() {
									return new ImageColumn(this);
								}
							}, {
								key: 'drawInternal',
								value: function drawInternal(value, context, style, helper, grid, _ref36) {
									var drawCellBase = _ref36.drawCellBase;

									if (value) {
										var textAlign = style.textAlign,
										    textBaseline = style.textBaseline,
										    margin = style.margin,
										    bgColor = style.bgColor;

										if (bgColor) {
											drawCellBase({
												bgColor: bgColor
											});
										}
										helper.drawWithClip(context, function (ctx) {

											ctx.textAlign = textAlign;
											ctx.textBaseline = textBaseline;
											var rect = context.getRect();
											if (style.imageSizing === 'keep-aspect-ratio') {
												var _calcKeepAspectRatioS = calcKeepAspectRatioSize(value.width, value.height, rect.width - margin * 2, rect.height - margin * 2),
												    width = _calcKeepAspectRatioS.width,
												    height = _calcKeepAspectRatioS.height;

												var pos = calcStartPosition(ctx, rect, width, height, {
													offset: margin
												});
												ctx.drawImage(value, 0, 0, value.width, value.height, pos.x, pos.y, width, height);
											} else {
												ctx.drawImage(value, 0, 0, value.width, value.height, rect.left + margin, rect.top + margin, rect.width - margin * 2, rect.height - margin * 2);
											}
										});
									}
								}
							}, {
								key: 'StyleClass',
								get: function get() {
									return ImageStyle;
								}
							}]);

							return ImageColumn;
						}(BaseColumn);

						module.exports = ImageColumn;
					}

					/***/
				},

				/***/"./columns/type/MenuColumn.js":
				/*!************************************!*\
      !*** ./columns/type/MenuColumn.js ***!
      \************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsTypeMenuColumnJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var _webpack_require__42 = __webpack_require__( /*! ../../internal/menu-items */"./internal/menu-items.js"),
						    normalize = _webpack_require__42.normalize;

						var _webpack_require__43 = __webpack_require__( /*! ../../internal/utils */"./internal/utils.js"),
						    isDef = _webpack_require__43.isDef;

						var BaseColumn = __webpack_require__( /*! ./BaseColumn */"./columns/type/BaseColumn.js");
						var Style = __webpack_require__( /*! ../style/Style */"./columns/style/Style.js");
						var utils = __webpack_require__( /*! ./columnUtils */"./columns/type/columnUtils.js");

						var MenuColumn = function (_BaseColumn5) {
							_inherits(MenuColumn, _BaseColumn5);

							function MenuColumn() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, MenuColumn);

								var _this57 = _possibleConstructorReturn(this, (MenuColumn.__proto__ || Object.getPrototypeOf(MenuColumn)).call(this, option));

								_this57._options = normalize(option.options);
								return _this57;
							}

							_createClass(MenuColumn, [{
								key: 'clone',
								value: function clone() {
									return new MenuColumn(this);
								}
							}, {
								key: 'withOptions',
								value: function withOptions(options) {
									var c = this.clone();
									c._options = normalize(options);
									return c;
								}
							}, {
								key: 'drawInternal',
								value: function drawInternal(value, context, style, helper, grid, _ref37) {
									var drawCellBase = _ref37.drawCellBase,
									    getIcon = _ref37.getIcon;
									var textAlign = style.textAlign,
									    textBaseline = style.textBaseline,
									    font = style.font,
									    bgColor = style.bgColor,
									    padding = style.padding;
									var color = style.color;

									if (bgColor) {
										drawCellBase({
											bgColor: bgColor
										});
									}
									var text = this._convertInternal(value);
									helper.testFontLoad(font, text, context);
									utils.loadIcons(getIcon(), context, helper, function (icons, context) {
										var basePadding = helper.toBoxPixelArray(padding || 0, context);
										var textPadding = basePadding.slice(0);
										textPadding[1] += 26; // icon padding
										var iconPadding = basePadding.slice(0);
										iconPadding[1] += 8;
										if (!isDef(color) && (!isDef(value) || value === '')) {
											color = 'rgba(0, 0, 0, .38)';
										}
										helper.text(text, context, {
											textAlign: textAlign,
											textBaseline: textBaseline,
											color: color,
											font: font,
											icons: icons,
											padding: textPadding
										});
										// draw icon
										helper.text('', context, {
											textAlign: 'right',
											textBaseline: textBaseline,
											color: color,
											font: font,
											icons: [{
												path: 'M0 2 5 7 10 2z',
												width: 10,
												color: 'rgba(0, 0, 0, .54)'
											}],
											padding: iconPadding
										});
									});
								}
							}, {
								key: 'convertInternal',
								value: function convertInternal(value) {
									return value;
								}
							}, {
								key: '_convertInternal',
								value: function _convertInternal(value) {
									var options = this._options;
									for (var i = 0; i < options.length; i++) {
										var option = options[i];
										if (option.value === value) {
											value = option.caption;
											break;
										}
									}
									return _get(MenuColumn.prototype.__proto__ || Object.getPrototypeOf(MenuColumn.prototype), 'convertInternal', this).call(this, value);
								}
							}, {
								key: 'StyleClass',
								get: function get() {
									return Style;
								}
							}, {
								key: 'options',
								get: function get() {
									return this._options;
								}
							}]);

							return MenuColumn;
						}(BaseColumn);

						module.exports = MenuColumn;
					}

					/***/
				},

				/***/"./columns/type/MultilineTextColumn.js":
				/*!*********************************************!*\
      !*** ./columns/type/MultilineTextColumn.js ***!
      \*********************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsTypeMultilineTextColumnJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var MultilineTextStyle = __webpack_require__( /*! ../style/MultilineTextStyle */"./columns/style/MultilineTextStyle.js");
						var BaseColumn = __webpack_require__( /*! ./BaseColumn */"./columns/type/BaseColumn.js");
						var utils = __webpack_require__( /*! ./columnUtils */"./columns/type/columnUtils.js");

						var MultilineTextColumn = function (_BaseColumn6) {
							_inherits(MultilineTextColumn, _BaseColumn6);

							function MultilineTextColumn() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, MultilineTextColumn);

								return _possibleConstructorReturn(this, (MultilineTextColumn.__proto__ || Object.getPrototypeOf(MultilineTextColumn)).call(this, option));
							}

							_createClass(MultilineTextColumn, [{
								key: 'clone',
								value: function clone() {
									return new MultilineTextColumn(this);
								}
							}, {
								key: 'drawInternal',
								value: function drawInternal(value, context, style, helper, grid, _ref38) {
									var drawCellBase = _ref38.drawCellBase,
									    getIcon = _ref38.getIcon;
									var textAlign = style.textAlign,
									    textBaseline = style.textBaseline,
									    color = style.color,
									    font = style.font,
									    bgColor = style.bgColor,
									    padding = style.padding,
									    lineHeight = style.lineHeight;

									if (bgColor) {
										drawCellBase({
											bgColor: bgColor
										});
									}
									var multilines = value.replace(/\r?\n/g, '\n').replace(/\r/g, '\n').split('\n');
									helper.testFontLoad(font, value, context);
									utils.loadIcons(getIcon(), context, helper, function (icons, context) {
										helper.multilineText(multilines, context, {
											textAlign: textAlign,
											textBaseline: textBaseline,
											color: color,
											font: font,
											icons: icons,
											padding: padding,
											lineHeight: lineHeight
										});
									});
								}
							}, {
								key: 'StyleClass',
								get: function get() {
									return MultilineTextStyle;
								}
							}]);

							return MultilineTextColumn;
						}(BaseColumn);

						module.exports = MultilineTextColumn;
					}

					/***/
				},

				/***/"./columns/type/NumberColumn.js":
				/*!**************************************!*\
      !*** ./columns/type/NumberColumn.js ***!
      \**************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsTypeNumberColumnJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var Column = __webpack_require__( /*! ./Column */"./columns/type/Column.js");
						var NumberStyle = __webpack_require__( /*! ../style/NumberStyle */"./columns/style/NumberStyle.js");
						var defaultFotmat = void 0;

						var NumberColumn = function (_Column3) {
							_inherits(NumberColumn, _Column3);

							_createClass(NumberColumn, null, [{
								key: 'defaultFotmat',
								get: function get() {
									return defaultFotmat || (defaultFotmat = new Intl.NumberFormat());
								},
								set: function set(fmt) {
									defaultFotmat = fmt;
								}
							}]);

							function NumberColumn() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, NumberColumn);

								var _this59 = _possibleConstructorReturn(this, (NumberColumn.__proto__ || Object.getPrototypeOf(NumberColumn)).call(this, option));

								_this59._format = option.format;
								return _this59;
							}

							_createClass(NumberColumn, [{
								key: 'clone',
								value: function clone() {
									return new NumberColumn(this);
								}
							}, {
								key: 'withFormat',
								value: function withFormat(format) {
									var c = this.clone();
									c._format = format;
									return c;
								}
							}, {
								key: 'convertInternal',
								value: function convertInternal(value) {
									if (isNaN(value - 0)) {
										return value;
									}
									var format = this._format || NumberColumn.defaultFotmat;
									return format.format(value - 0);
								}
							}, {
								key: 'StyleClass',
								get: function get() {
									return NumberStyle;
								}
							}, {
								key: 'format',
								get: function get() {
									return this._format;
								}
							}]);

							return NumberColumn;
						}(Column);

						module.exports = NumberColumn;
					}

					/***/
				},

				/***/"./columns/type/PercentCompleteBarColumn.js":
				/*!**************************************************!*\
      !*** ./columns/type/PercentCompleteBarColumn.js ***!
      \**************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsTypePercentCompleteBarColumnJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var PercentCompleteBarStyle = __webpack_require__( /*! ../style/PercentCompleteBarStyle */"./columns/style/PercentCompleteBarStyle.js");

						var _webpack_require__44 = __webpack_require__( /*! ../../internal/utils */"./internal/utils.js"),
						    getOrApply = _webpack_require__44.getOrApply,
						    str = _webpack_require__44.str;

						var Column = __webpack_require__( /*! ./Column */"./columns/type/Column.js");

						var MARGIN = 2;

						var PercentCompleteBarColumn = function (_Column4) {
							_inherits(PercentCompleteBarColumn, _Column4);

							function PercentCompleteBarColumn() {
								var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, PercentCompleteBarColumn);

								var _this60 = _possibleConstructorReturn(this, (PercentCompleteBarColumn.__proto__ || Object.getPrototypeOf(PercentCompleteBarColumn)).call(this, option));

								_this60._min = option.min || 0;
								_this60._max = option.max || _this60._min + 100;
								_this60._formatter = option.formatter || function (v) {
									return v;
								};
								return _this60;
							}

							_createClass(PercentCompleteBarColumn, [{
								key: 'clone',
								value: function clone() {
									return new PercentCompleteBarColumn(this);
								}
							}, {
								key: 'drawInternal',
								value: function drawInternal(value, context, style, helper, grid, info) {
									_get(PercentCompleteBarColumn.prototype.__proto__ || Object.getPrototypeOf(PercentCompleteBarColumn.prototype), 'drawInternal', this).call(this, this._formatter(value), context, style, helper, grid, info);
									var barColor = style.barColor,
									    barBgColor = style.barBgColor,
									    barHeight = style.barHeight;


									var svalue = value + '';
									if (str.endsWith(svalue, '%')) {
										svalue = svalue.substr(0, svalue.length - 1);
									}
									var num = svalue - 0;
									var rate = num < this._min ? 0 : num > this._max ? 1 : (num - this._min) / (this._max - this._min);

									helper.drawWithClip(context, function (ctx) {
										var rect = context.getRect();

										var barMaxWidth = rect.width - MARGIN * 2 - 1 /*罫線*/;
										var barTop = rect.bottom - MARGIN - barHeight - 1 /*罫線*/;
										var barLeft = rect.left + MARGIN;
										ctx.fillStyle = getOrApply(barBgColor, rate * 100) || '#f0f3f5';
										ctx.beginPath();
										ctx.rect(barLeft, barTop, barMaxWidth, barHeight);
										ctx.fill();

										var barSize = Math.min(barMaxWidth * rate, barMaxWidth);
										ctx.fillStyle = getOrApply(barColor, rate * 100) || '#20a8d8';
										ctx.beginPath();
										ctx.rect(barLeft, barTop, barSize, barHeight);
										ctx.fill();
									});
								}
							}, {
								key: 'StyleClass',
								get: function get() {
									return PercentCompleteBarStyle;
								}
							}]);

							return PercentCompleteBarColumn;
						}(Column);

						module.exports = PercentCompleteBarColumn;
					}

					/***/
				},

				/***/"./columns/type/columnUtils.js":
				/*!*************************************!*\
      !*** ./columns/type/columnUtils.js ***!
      \*************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function columnsTypeColumnUtilsJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var _webpack_require__45 = __webpack_require__( /*! ../../internal/utils */"./internal/utils.js"),
						    isPromise = _webpack_require__45.isPromise;

						var icons = __webpack_require__( /*! ../../internal/icons */"./internal/icons.js");
						module.exports = {
							loadIcons: function loadIcons(icon, context, helper, callback) {
								var _this61 = this;

								if (icon) {
									if (isPromise(icon)) {
										icon.then(function (i) {
											_this61.loadIcon(i, context.toCurrentContext(), callback);
										});
										icon = null;
									} else {
										var iconList = icons.toNormarizeArray(icon);
										iconList.forEach(function (i) {
											helper.testFontLoad(i.font, i.content, context);
										});
										icon = iconList;
									}
								}
								callback(icon, context);
							}
						};
					}

					/***/
				},

				/***/"./core.js":
				/*!*****************!*\
      !*** ./core.js ***!
      \*****************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function coreJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var DrawGrid = __webpack_require__( /*! ./core/DrawGrid */"./core/DrawGrid.js");

						/**
       * core modules
       * @type {Object}
       * @namespace cheetahGrid.core
       * @memberof cheetahGrid
       */
						module.exports = {
							DrawGrid: DrawGrid
						};
					}

					/***/
				},

				/***/"./core/DrawGrid.js":
				/*!**************************!*\
      !*** ./core/DrawGrid.js ***!
      \**************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function coreDrawGridJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var createRootElement = function createRootElement() {
							var element = document.createElement('div');
							element.classList.add('cheetah-grid');
							return element;
						};

						//private methods
						var _vibrate = function _vibrate(e) {
							if (navigator.vibrate && isTouchEvent(e)) {
								navigator.vibrate(50);
							}
						};

						var _getTargetRowAt = function _getTargetRowAt(grid, absoluteY) {
							var internal = grid.getTargetRowAtInternal(absoluteY);
							if (isDef(internal)) {
								return internal;
							}
							var findBefore = function findBefore(startRow, startBottom) {
								var bottom = startBottom;
								for (var row = startRow; row >= 0; row--) {
									var height = _getRowHeight(grid, row);
									var top = bottom - height;
									if (top <= absoluteY && absoluteY < bottom) {
										return {
											top: top,
											row: row
										};
									}
									bottom = top;
								}
								return null;
							};
							var findAfter = function findAfter(startRow, startBottom) {
								var top = startBottom - _getRowHeight(grid, startRow);
								var rowCount = grid[_].rowCount;

								for (var row = startRow; row < rowCount; row++) {
									var height = _getRowHeight(grid, row);
									var _bottom = top + height;
									if (top <= absoluteY && absoluteY < _bottom) {
										return {
											top: top,
											row: row
										};
									}
									top = _bottom;
								}
								return null;
							};
							var candRow = Math.min(Math.ceil(absoluteY / grid[_].defaultRowHeight), grid.rowCount - 1);
							var bottom = _getRowsHeight(grid, 0, candRow);
							if (absoluteY >= bottom) {
								return findAfter(candRow, bottom);
							} else {
								return findBefore(candRow, bottom);
							}
						};

						var _getTargetColAt = function _getTargetColAt(grid, absoluteX) {
							var left = 0;
							var colCount = grid[_].colCount;

							for (var col = 0; col < colCount; col++) {
								var width = _getColWidth(grid, col);
								var right = left + width;
								if (right > absoluteX) {
									return {
										left: left,
										col: col
									};
								}
								left = right;
							}
							return null;
						};

						var _getTargetFrozenRowAt = function _getTargetFrozenRowAt(grid, absoluteY) {
							if (!grid[_].frozenRowCount) {
								return null;
							}
							var top = grid[_].scroll.top;

							var rowCount = grid[_].frozenRowCount;
							for (var row = 0; row < rowCount; row++) {
								var height = _getRowHeight(grid, row);
								var bottom = top + height;
								if (bottom > absoluteY) {
									return {
										top: top,
										row: row
									};
								}
								top = bottom;
							}
							return null;
						};

						var _getTargetFrozenColAt = function _getTargetFrozenColAt(grid, absoluteX) {
							if (!grid[_].frozenColCount) {
								return null;
							}
							var left = grid[_].scroll.left;

							var colCount = grid[_].frozenColCount;
							for (var col = 0; col < colCount; col++) {
								var width = _getColWidth(grid, col);
								var right = left + width;
								if (right > absoluteX) {
									return {
										left: left,
										col: col
									};
								}
								left = right;
							}
							return null;
						};

						var _getFrozenRowsRect = function _getFrozenRowsRect(grid) {
							if (!grid[_].frozenRowCount) {
								return null;
							}
							var top = grid[_].scroll.top;

							var height = 0;
							var rowCount = grid[_].frozenRowCount;
							for (var row = 0; row < rowCount; row++) {
								height += _getRowHeight(grid, row);
							}
							return new Rect(grid[_].scroll.left, top, grid[_].canvas.width, height);
						};

						var _getFrozenColsRect = function _getFrozenColsRect(grid) {
							if (!grid[_].frozenColCount) {
								return null;
							}
							var left = grid[_].scroll.left;

							var width = 0;
							var colCount = grid[_].frozenColCount;
							for (var col = 0; col < colCount; col++) {
								width += _getColWidth(grid, col);
							}
							return new Rect(left, grid[_].scroll.top, width, grid[_].canvas.height);
						};

						var _isCellDrawing = function _isCellDrawing(grid, col, row) {
							if (!grid[_].drawCells[row]) {
								return false;
							}
							return !!grid[_].drawCells[row][col];
						};

						var _putCellDrawing = function _putCellDrawing(grid, col, row, context) {
							if (!grid[_].drawCells[row]) {
								grid[_].drawCells[row] = {};
							}
							grid[_].drawCells[row][col] = context;
						};

						var _removeCellDrawing = function _removeCellDrawing(grid, col, row) {
							if (!grid[_].drawCells[row]) {
								return;
							}
							delete grid[_].drawCells[row][col];
							if (Object.keys(grid[_].drawCells[row]).length === 0) {
								delete grid[_].drawCells[row];
							}
						};

						var _drawCell = function _drawCell(grid, ctx, col, absoluteLeft, width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, skipAbsoluteLeft, drawLayers) {
							var rect = new Rect(absoluteLeft - visibleRect.left, absoluteTop - visibleRect.top, width, height);

							var drawRect = Rect.bounds(Math.max(absoluteLeft, skipAbsoluteLeft) - visibleRect.left, Math.max(absoluteTop, skipAbsoluteTop) - visibleRect.top, rect.right, rect.bottom);

							if (drawRect.height > 0 && drawRect.width > 0) {
								ctx.save();
								try {
									var dcContext = new DrawCellContext(col, row, ctx, rect, drawRect, _isCellDrawing(grid, col, row), grid[_].selection, drawLayers);
									var p = grid.onDrawCell(col, row, dcContext);
									if (isPromise(p)) {
										//遅延描画
										_putCellDrawing(grid, col, row, dcContext);

										var pCol = col;
										dcContext._delayMode(grid, function () {
											_removeCellDrawing(grid, pCol, row);
										});
										p.then(function () {
											dcContext.terminate();
										});
									}
								} finally {
									ctx.restore();
								}
							}
						};

						var _drawRow = function _drawRow(grid, ctx, initFrozenCol, initCol, drawRight, row, absoluteTop, height, visibleRect, skipAbsoluteTop, drawLayers) {
							var colCount = grid[_].colCount;

							var drawOuter = function drawOuter(col, absoluteLeft) {
								//データ範囲外の描画
								if (col >= colCount - 1 && grid[_].canvas.width > absoluteLeft - visibleRect.left) {
									var outerLeft = absoluteLeft - visibleRect.left;
									ctx.save();
									ctx.beginPath();
									ctx.fillStyle = grid.underlayBackgroundColor || '#F6F6F6';
									ctx.rect(outerLeft, absoluteTop - visibleRect.top, grid[_].canvas.width - outerLeft, height);
									ctx.fill();
									ctx.restore();
								}
							};

							var skipAbsoluteLeft = 0;
							if (initFrozenCol) {
								var _absoluteLeft = initFrozenCol.left;
								var count = grid[_].frozenColCount;
								for (var col = initFrozenCol.col; col < count; col++) {
									var width = _getColWidth(grid, col);

									_drawCell(grid, ctx, col, _absoluteLeft, width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, 0, drawLayers);

									_absoluteLeft += width;
									if (drawRight <= _absoluteLeft) {
										//描画範囲外（終了）
										drawOuter(col, _absoluteLeft);
										return;
									}
								}
								skipAbsoluteLeft = _absoluteLeft;
							}

							var absoluteLeft = initCol.left;
							for (var _col = initCol.col; _col < colCount; _col++) {
								var _width = _getColWidth(grid, _col);
								_drawCell(grid, ctx, _col, absoluteLeft, _width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, skipAbsoluteLeft, drawLayers);

								absoluteLeft += _width;
								if (drawRight <= absoluteLeft) {
									//描画範囲外（終了）
									drawOuter(_col, absoluteLeft);
									return;
								}
							}
							drawOuter(colCount - 1, absoluteLeft);
						};

						var _invalidateRect = function _invalidateRect(grid, drawRect) {
							var visibleRect = _getVisibleRect(grid);
							var rowCount = grid[_].rowCount;

							var ctx = grid._getInitContext();

							var initRow = _getTargetRowAt(grid, Math.max(visibleRect.top, drawRect.top)) || {
								top: _getRowsHeight(grid, 0, rowCount - 1),
								row: rowCount
							};
							var initCol = _getTargetColAt(grid, Math.max(visibleRect.left, drawRect.left)) || {
								left: _getColsWidth(grid, 0, grid[_].colCount - 1),
								col: grid[_].colCount
							};
							var drawBottom = Math.min(visibleRect.bottom, drawRect.bottom);
							var drawRight = Math.min(visibleRect.right, drawRect.right);

							var initFrozenRow = _getTargetFrozenRowAt(grid, Math.max(visibleRect.top, drawRect.top));
							var initFrozenCol = _getTargetFrozenColAt(grid, Math.max(visibleRect.left, drawRect.left));

							var drawLayers = new DrawLayers();

							var drawOuter = function drawOuter(row, absoluteTop) {
								//データ範囲外の描画
								if (row >= rowCount - 1 && grid[_].canvas.height > absoluteTop - visibleRect.top) {
									var outerTop = absoluteTop - visibleRect.top;
									ctx.save();
									ctx.beginPath();
									ctx.fillStyle = grid.underlayBackgroundColor || '#F6F6F6';
									ctx.rect(0, outerTop, grid[_].canvas.width, grid[_].canvas.height - outerTop);
									ctx.fill();
									ctx.restore();
								}
							};

							var skipAbsoluteTop = 0;
							if (initFrozenRow) {
								var _absoluteTop = initFrozenRow.top;
								var count = grid[_].frozenRowCount;
								for (var row = initFrozenRow.row; row < count; row++) {
									var height = _getRowHeight(grid, row);
									_drawRow(grid, ctx, initFrozenCol, initCol, drawRight, row, _absoluteTop, height, visibleRect, 0, drawLayers);
									_absoluteTop += height;
									if (drawBottom <= _absoluteTop) {
										//描画範囲外（終了）
										drawOuter(row, _absoluteTop);
										drawLayers.draw(ctx);
										return;
									}
								}
								skipAbsoluteTop = _absoluteTop;
							}

							var absoluteTop = initRow.top;
							for (var _row = initRow.row; _row < rowCount; _row++) {
								var _height = _getRowHeight(grid, _row);

								//行の描画
								_drawRow(grid, ctx, initFrozenCol, initCol, drawRight, _row, absoluteTop, _height, visibleRect, skipAbsoluteTop, drawLayers);

								absoluteTop += _height;
								if (drawBottom <= absoluteTop) {
									//描画範囲外（終了）
									drawOuter(_row, absoluteTop);
									drawLayers.draw(ctx);
									return;
								}
							}
							drawOuter(rowCount - 1, absoluteTop);

							drawLayers.draw(ctx);
						};

						var _toPxWidth = function _toPxWidth(grid, width) {
							return Math.round(calc.toPx(width, grid[_].calcWidthContext));
						};

						var _getDefaultColPxWidth = function _getDefaultColPxWidth(grid) {
							return _toPxWidth(grid, grid.defaultColWidth);
						};

						var _adjustColWidth = function _adjustColWidth(grid, col, orgWidth) {
							var limit = grid[_].colWidthsLimit[col];
							if (!limit) {
								return orgWidth;
							}

							if (limit.min) {
								var min = _toPxWidth(grid, limit.min);
								if (min > orgWidth) {
									return min;
								}
							}
							if (limit.max) {
								var max = _toPxWidth(grid, limit.max);
								if (max < orgWidth) {
									return max;
								}
							}
							return orgWidth;
						};

						var _getColWidth = function _getColWidth(grid, col) {
							var width = grid[_].colWidthsMap.get(col);
							if (width) {
								return _adjustColWidth(grid, col, _toPxWidth(grid, width));
							}
							return _getDefaultColPxWidth(grid);
						};

						var _setColWidth = function _setColWidth(grid, col, width) {
							grid[_].colWidthsMap.put(col, width);
						};

						var _getColsWidth = function _getColsWidth(grid, startCol, endCol) {
							var colCount = endCol - startCol + 1;
							var w = _getDefaultColPxWidth(grid) * colCount;
							grid[_].colWidthsMap.each(startCol, endCol, function (width, col) {
								w += _adjustColWidth(grid, col, _toPxWidth(grid, width)) - _getDefaultColPxWidth(grid);
							});
							return w;
						};

						var _getRowHeight = function _getRowHeight(grid, row) {
							var internal = grid.getRowHeightInternal(row);
							if (isDef(internal)) {
								return internal;
							}
							var height = grid[_].rowHeightsMap.get(row);
							if (height) {
								return height;
							}
							return grid[_].defaultRowHeight;
						};

						var _setRowHeight = function _setRowHeight(grid, row, height) {
							grid[_].rowHeightsMap.put(row, height);
						};

						var _getRowsHeight = function _getRowsHeight(grid, startRow, endRow) {
							var internal = grid.getRowsHeightInternal(startRow, endRow);
							if (isDef(internal)) {
								return internal;
							}
							var rowCount = endRow - startRow + 1;
							var h = grid[_].defaultRowHeight * rowCount;
							grid[_].rowHeightsMap.each(startRow, endRow, function (height) {
								h += height - grid[_].defaultRowHeight;
							});
							return h;
						};

						var _getScrollWidth = function _getScrollWidth(grid) {
							var w = _getDefaultColPxWidth(grid) * grid[_].colCount;
							grid[_].colWidthsMap.eachAll(function (width, col) {
								w += _adjustColWidth(grid, col, _toPxWidth(grid, width)) - _getDefaultColPxWidth(grid);
							});
							return w;
						};

						var _getScrollHeight = function _getScrollHeight(grid, row) {
							var internal = grid.getScrollHeightInternal(row);
							if (isDef(internal)) {
								return internal;
							}
							var h = grid[_].defaultRowHeight * grid[_].rowCount;
							grid[_].rowHeightsMap.eachAll(function (height) {
								h += height - grid[_].defaultRowHeight;
							});
							return h;
						};

						var _onScroll = function _onScroll(grid, e) {
							var lastLeft = grid[_].scroll.left;
							var lastTop = grid[_].scroll.top;
							var moveX = grid[_].scrollable.scrollLeft - lastLeft;
							var moveY = grid[_].scrollable.scrollTop - lastTop;

							//次回計算用情報を保持
							grid[_].scroll = {
								left: grid[_].scrollable.scrollLeft,
								top: grid[_].scrollable.scrollTop
							};
							var visibleRect = _getVisibleRect(grid);
							if (Math.abs(moveX) >= visibleRect.width || Math.abs(moveY) >= visibleRect.height) {
								//全再描画
								_invalidateRect(grid, visibleRect);
							} else {
								//差分再描画
								grid[_].context.drawImage(grid[_].canvas, -moveX, -moveY);

								if (moveX !== 0) {
									//横移動の再描画範囲を計算
									var redrawRect = visibleRect.copy();
									if (moveX < 0) {
										redrawRect.width = -moveX;
										if (grid[_].frozenColCount > 0) {
											//固定列がある場合固定列分描画
											var frozenRect = _getFrozenColsRect(grid);
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
									var _redrawRect = visibleRect.copy();
									if (moveY < 0) {
										_redrawRect.height = -moveY;
										if (grid[_].frozenRowCount > 0) {
											//固定行がある場合固定行分描画
											var _frozenRect2 = _getFrozenRowsRect(grid);
											_redrawRect.height += _frozenRect2.height;
										}
									} else if (moveY > 0) {
										_redrawRect.top = _redrawRect.bottom - moveY;
									}

									//再描画
									_invalidateRect(grid, _redrawRect);

									if (moveY > 0) {
										if (grid[_].frozenRowCount > 0) {
											//固定行がある場合固定行描画
											_invalidateRect(grid, _getFrozenRowsRect(grid));
										}
									}
								}
							}
						};

						var _onKeyDownMove = function _onKeyDownMove(grid, e) {
							var shiftKey = e.shiftKey;

							var keyCode = getKeyCode(e);
							var focusCell = shiftKey ? grid.selection._focus : grid.selection._sel;
							if (keyCode === KEY_LEFT) {
								var col = grid.getMoveLeftColByKeyDownInternal(focusCell);
								if (col < 0) {
									return;
								}
								_moveFocusCell(grid, col, focusCell.row, shiftKey);
								cancelEvent(e);
							} else if (keyCode === KEY_UP) {
								var row = grid.getMoveUpRowByKeyDownInternal(focusCell);
								if (row < 0) {
									return;
								}
								_moveFocusCell(grid, focusCell.col, row, shiftKey);
								cancelEvent(e);
							} else if (keyCode === KEY_RIGHT) {
								var _col2 = grid.getMoveRightColByKeyDownInternal(focusCell);
								if (grid.colCount <= _col2) {
									return;
								}
								_moveFocusCell(grid, _col2, focusCell.row, shiftKey);
								cancelEvent(e);
							} else if (keyCode === KEY_DOWN) {
								var _row2 = grid.getMoveDownRowByKeyDownInternal(focusCell);
								if (grid.rowCount <= _row2) {
									return;
								}
								_moveFocusCell(grid, focusCell.col, _row2, shiftKey);
								cancelEvent(e);
							} else if (keyCode === KEY_HOME) {
								var _row3 = e.ctrlKey ? 0 : focusCell.row;
								_moveFocusCell(grid, 0, _row3, e.shiftKey);
								cancelEvent(e);
							} else if (keyCode === KEY_END) {
								var _row4 = e.ctrlKey ? grid.rowCount - 1 : focusCell.row;
								_moveFocusCell(grid, grid.colCount - 1, _row4, shiftKey);
								cancelEvent(e);
							}
						};

						var _moveFocusCell = function _moveFocusCell(grid, col, row, shiftKey) {
							var offset = grid.getOffsetInvalidateCells();

							function extendRange(range) {
								if (offset > 0) {
									range.start.col -= offset;
									range.start.row -= offset;
									range.end.col += offset;
									range.end.row += offset;
								}
								return range;
							}

							var beforeRange = extendRange(grid.selection.range);
							var beforeRect = grid.getCellsRect(beforeRange.start.col, beforeRange.start.row, beforeRange.end.col, beforeRange.end.row);

							grid.selection._setFocusCell(col, row, shiftKey);
							grid.makeVisibleCell(col, row);
							grid.focusCell(col, row);

							var afterRange = extendRange(grid.selection.range);
							var afterRect = grid.getCellsRect(afterRange.start.col, afterRange.start.row, afterRange.end.col, afterRange.end.row);

							if (afterRect.intersection(beforeRect)) {
								var invalidateRect = Rect.max(afterRect, beforeRect);
								_invalidateRect(grid, invalidateRect);
							} else {
								_invalidateRect(grid, beforeRect);
								_invalidateRect(grid, afterRect);
							}
						};

						var _getMouseAbstractPoint = function _getMouseAbstractPoint(grid, e) {
							if (isTouchEvent(e)) {
								e = e.changedTouches[0];
							}
							var clientX = e.clientX || e.pageX + window.scrollX;
							var clientY = e.clientY || e.pageY + window.scrollY;
							var rect = grid[_].canvas.getBoundingClientRect();
							if (rect.right <= clientX) {
								return null;
							}
							if (rect.bottom <= clientY) {
								return null;
							}
							var x = clientX - rect.left + grid[_].scroll.left;
							var y = clientY - rect.top + grid[_].scroll.top;
							return { x: x, y: y };
						};

						var _bindEvents = function _bindEvents(grid) {
							var getCellEventArgsSet = function getCellEventArgsSet(e) {
								var abstractPos = _getMouseAbstractPoint(grid, e);
								if (!abstractPos) {
									return {};
								}
								var cell = grid.getCellAt(abstractPos.x, abstractPos.y);
								if (cell.col < 0 || cell.row < 0) {
									return {
										abstractPos: abstractPos,
										cell: cell
									};
								}
								var eventArgs = {
									col: cell.col,
									row: cell.row,
									event: e
								};
								return {
									abstractPos: abstractPos,
									cell: cell,
									eventArgs: eventArgs
								};
							};
							var canResizeColumn = function canResizeColumn(col) {
								var limit = grid[_].colWidthsLimit[col];
								if (!limit || !limit.min || !limit.max) {
									return true;
								}
								return limit.max !== limit.min;
							};
							grid[_].handler.on(grid[_].element, 'mousedown', function (e) {
								var eventArgsSet = getCellEventArgsSet(e);
								var abstractPos = eventArgsSet.abstractPos,
								    eventArgs = eventArgsSet.eventArgs;

								if (!abstractPos) {
									return;
								}
								if (eventArgs) {
									var results = grid.fireListeners(EVENT_TYPE.MOUSEDOWN_CELL, eventArgs);
									if (array.findIndex(results, function (v) {
										return !v;
									}) >= 0) {
										return;
									}
								}
								if (getMouseButtons(e) !== 1) {
									return;
								}
								var resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y);
								if (resizeCol >= 0 && canResizeColumn(resizeCol)) {
									//幅変更
									grid[_].columnResizer.start(resizeCol, e);
								} else {
									//選択
									grid[_].cellSelector.start(e);
								}
							});
							var doubleTapBefore = null;
							var longTouchId = null;
							grid[_].handler.on(grid[_].element, 'touchstart', function (e) {

								if (!doubleTapBefore) {
									doubleTapBefore = getCellEventArgsSet(e).eventArgs;
									setTimeout(function () {
										doubleTapBefore = null;
									}, 350);
								} else {
									var _getCellEventArgsSet = getCellEventArgsSet(e),
									    eventArgs = _getCellEventArgsSet.eventArgs;

									if (eventArgs && eventArgs.col === doubleTapBefore.col && eventArgs.row === doubleTapBefore.row) {
										grid.fireListeners(EVENT_TYPE.DBLTAP_CELL, eventArgs);
									}

									doubleTapBefore = null;

									if (e.defaultPrevented) {
										return;
									}
								}

								longTouchId = setTimeout(function () {
									//長押しした場合選択モード
									longTouchId = null;
									var abstractPos = _getMouseAbstractPoint(grid, e);
									if (!abstractPos) {
										return;
									}

									var resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y, 15);
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
							grid[_].handler.on(grid[_].element, 'touchend', function (e) {
								if (longTouchId) {
									clearTimeout(longTouchId);
									grid[_].cellSelector.select(e);
									longTouchId = null;
								}
							});

							var isMouseover = false;
							var mouseEnterCell = null;
							var mouseOverCell = null;
							function onMouseenterCell(cell) {
								grid.fireListeners(EVENT_TYPE.MOUSEENTER_CELL, cell);
								mouseEnterCell = cell;
							}
							function onMouseleaveCell() {
								var beforeMouseCell = mouseEnterCell;
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
								var beforeMouseCell = mouseOverCell;
								mouseOverCell = null;
								if (beforeMouseCell) {
									grid.fireListeners(EVENT_TYPE.MOUSEOUT_CELL, {
										col: beforeMouseCell.col,
										row: beforeMouseCell.row
									});
								}
							}
							var scrollElement = grid[_].scrollable.getElement();
							grid[_].handler.on(scrollElement, 'mouseover', function (e) {
								isMouseover = true;
							});
							grid[_].handler.on(scrollElement, 'mouseout', function (e) {
								isMouseover = false;
								onMouseoutCell();
							});

							grid[_].handler.on(grid[_].element, 'mouseleave', function (e) {
								onMouseleaveCell();
							});

							grid[_].handler.on(grid[_].element, 'mousemove', function (e) {
								var eventArgsSet = getCellEventArgsSet(e);
								var abstractPos = eventArgsSet.abstractPos,
								    eventArgs = eventArgsSet.eventArgs;

								if (eventArgs) {
									var beforeMouseCell = mouseEnterCell;
									if (beforeMouseCell) {
										grid.fireListeners(EVENT_TYPE.MOUSEMOVE_CELL, eventArgs);
										if (beforeMouseCell.col !== eventArgs.col || beforeMouseCell.row !== eventArgs.row) {
											onMouseoutCell();
											onMouseleaveCell();
											var cell = {
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
										var _cell = {
											col: eventArgs.col,
											row: eventArgs.row
										};
										onMouseenterCell(_cell);
										if (isMouseover) {
											onMouseoverCell(_cell);
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
								var style = grid[_].element.style;

								if (!abstractPos) {
									if (style.cursor === 'col-resize') {
										style.cursor = '';
									}
									return;
								}
								var resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y);
								if (resizeCol >= 0 && canResizeColumn(resizeCol)) {
									style.cursor = 'col-resize';
								} else {
									if (style.cursor === 'col-resize') {
										style.cursor = '';
									}
								}
							});
							grid[_].handler.on(grid[_].element, 'click', function (e) {
								if (grid[_].columnResizer.lastMoving(e) || grid[_].cellSelector.lastMoving(e)) {
									return;
								}
								if (!grid.hasListeners(EVENT_TYPE.CLICK_CELL)) {
									return;
								}

								var _getCellEventArgsSet2 = getCellEventArgsSet(e),
								    eventArgs = _getCellEventArgsSet2.eventArgs;

								if (!eventArgs) {
									return;
								}
								grid.fireListeners(EVENT_TYPE.CLICK_CELL, eventArgs);
							});
							grid[_].handler.on(grid[_].element, 'dblclick', function (e) {
								if (!grid.hasListeners(EVENT_TYPE.DBLCLICK_CELL)) {
									return;
								}

								var _getCellEventArgsSet3 = getCellEventArgsSet(e),
								    eventArgs = _getCellEventArgsSet3.eventArgs;

								if (!eventArgs) {
									return;
								}
								grid.fireListeners(EVENT_TYPE.DBLCLICK_CELL, eventArgs);
							});
							grid[_].focusControl.listen('keydown', function (keyCode, e) {
								grid.fireListeners(EVENT_TYPE.KEYDOWN, keyCode, e);
							});
							grid[_].selection.listen(EVENT_TYPE.SELECTED_CELL, function (data) {
								grid.fireListeners(EVENT_TYPE.SELECTED_CELL, data, data.selected);
							});

							grid[_].scrollable.onScroll(function (e) {
								_onScroll(grid, e);
								grid.fireListeners(EVENT_TYPE.SCROLL, { event: e });
							});
							grid[_].focusControl.onKeyDownMove(function (e) {
								_onKeyDownMove(grid, e);
							});
							grid.listen('copydata', function (range) {
								var copyValue = '';
								for (var row = range.start.row; row <= range.end.row; row++) {
									for (var col = range.start.col; col <= range.end.col; col++) {
										var copyCellValue = grid.getCopyCellValue(col, row);
										if (window.Promise && copyCellValue instanceof window.Promise) {
											//非同期データは取得できない
										} else {
											var strCellValue = '' + copyCellValue;
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
							grid[_].focusControl.onCopy(function (e) {
								return array.find(grid.fireListeners('copydata', grid[_].selection.range), isDef);
							});
							grid[_].focusControl.onInput(function (value) {
								var _grid$_$selection$sel = grid[_].selection.select,
								    col = _grid$_$selection$sel.col,
								    row = _grid$_$selection$sel.row;

								grid.fireListeners(EVENT_TYPE.INPUT_CELL, { col: col, row: row, value: value });
							});
							grid.bindEventsInternal();
						};

						var _getResizeColAt = function _getResizeColAt(grid, abstractX, abstractY) {
							var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;

							if (grid[_].frozenRowCount <= 0) {
								return -1;
							}
							var frozenRect = _getFrozenRowsRect(grid);
							if (!frozenRect.inPoint(abstractX, abstractY)) {
								return -1;
							}
							var cell = grid.getCellAt(abstractX, abstractY);
							var cellRect = grid.getCellRect(cell.col, cell.row);
							if (abstractX < cellRect.left + offset) {
								return cell.col - 1;
							}
							if (cellRect.right - offset < abstractX) {
								return cell.col;
							}
							return -1;
						};

						var _getVisibleRect = function _getVisibleRect(grid) {
							return new Rect(grid[_].scroll.left, grid[_].scroll.top, grid[_].canvas.width, grid[_].canvas.height);
						};

						var _getScrollableVisibleRect = function _getScrollableVisibleRect(grid) {
							var frozenColsWidth = 0;
							if (grid[_].frozenColCount > 0) {
								//固定列がある場合固定列分描画
								var frozenRect = _getFrozenColsRect(grid);
								frozenColsWidth = frozenRect.width;
							}
							var frozenRowsHeight = 0;
							if (grid[_].frozenRowCount > 0) {
								//固定列がある場合固定列分描画
								var _frozenRect3 = _getFrozenRowsRect(grid);
								frozenRowsHeight = _frozenRect3.height;
							}
							return new Rect(grid[_].scroll.left + frozenColsWidth, grid[_].scroll.top + frozenRowsHeight, grid[_].canvas.width - frozenColsWidth, grid[_].canvas.height - frozenRowsHeight);
						};

						var _toRelativeRect = function _toRelativeRect(grid, absoluteRect) {
							var rect = absoluteRect.copy();
							var visibleRect = _getVisibleRect(grid);
							rect.offsetLeft(-visibleRect.left);
							rect.offsetTop(-visibleRect.top);

							return rect;
						};
						//end private methods
						//
						//
						//
						//

						/**
       * managing mouse down moving
       * @private
       */


						var setSafeInputValue = function setSafeInputValue(input, value) {
							var type = input.type;

							input.type = '';
							input.value = value;
							if (type) {
								input.type = type;
							}
						};

						/**
       * Manage focus
       * @private
       */


						var _webpack_require__46 = __webpack_require__( /*! ../internal/utils */"./internal/utils.js"),
						    isDef = _webpack_require__46.isDef,
						    browser = _webpack_require__46.browser,
						    isDescendantElement = _webpack_require__46.isDescendantElement,
						    array = _webpack_require__46.array,
						    isPromise = _webpack_require__46.isPromise,
						    _webpack_require__46$ = _webpack_require__46.event,
						    isTouchEvent = _webpack_require__46$.isTouchEvent,
						    getMouseButtons = _webpack_require__46$.getMouseButtons,
						    getKeyCode = _webpack_require__46$.getKeyCode,
						    cancelEvent = _webpack_require__46$.cancel;

						var EventTarget = __webpack_require__( /*! ./EventTarget */"./core/EventTarget.js");
						var Rect = __webpack_require__( /*! ../internal/Rect */"./internal/Rect.js");
						var Scrollable = __webpack_require__( /*! ../internal/Scrollable */"./internal/Scrollable.js");
						var EventHandler = __webpack_require__( /*! ../internal/EventHandler */"./internal/EventHandler.js");
						var NumberMap = __webpack_require__( /*! ../internal/NumberMap */"./internal/NumberMap.js");
						var style = __webpack_require__( /*! ../internal/style */"./internal/style.js");
						var calc = __webpack_require__( /*! ../internal/calc */"./internal/calc.js");
						var hiDPI = __webpack_require__( /*! ../internal/hiDPI */"./internal/hiDPI.js");
						//protected symbol

						var _webpack_require__47 = __webpack_require__( /*! ../internal/symbolManager */"./internal/symbolManager.js"),
						    _ = _webpack_require__47.PROTECTED_SYMBOL;

						var KEY_END = 35;
						var KEY_HOME = 36;
						var KEY_LEFT = 37;
						var KEY_UP = 38;
						var KEY_RIGHT = 39;
						var KEY_DOWN = 40;
						var KEY_ALPHA_C = 67;

						var EVENT_TYPE = {
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
						var BaseMouseDownMover = function () {
							function BaseMouseDownMover(grid) {
								_classCallCheck(this, BaseMouseDownMover);

								this._grid = grid;
								this._handler = new EventHandler();
								this._events = {};
								this._started = false;
								this._moved = false;
							}

							_createClass(BaseMouseDownMover, [{
								key: 'moving',
								value: function moving(e) {
									return !!this._started;
								}
							}, {
								key: 'lastMoving',
								value: function lastMoving(e) {
									// mouseup後すぐに、clickイベントを反応しないようにする制御要
									if (this.moving(e)) {
										return true;
									}
									var last = this._mouseEndPoint;
									if (!last) {
										return false;
									}
									var pt = _getMouseAbstractPoint(this._grid, e);
									return pt.x === last.x && pt.y === last.y;
								}
							}, {
								key: '_bindMoveAndUp',
								value: function _bindMoveAndUp(e) {
									var _this62 = this;

									if (!isTouchEvent(e)) {
										this._events.mousemove = this._handler.on(document.body, 'mousemove', function (e) {
											return _this62._mouseMove(e);
										});
										this._events.mouseup = this._handler.on(document.body, 'mouseup', function (e) {
											return _this62._mouseUp(e);
										});
									} else {
										this._events.touchmove = this._handler.on(document.body, 'touchmove', function (e) {
											return _this62._mouseMove(e);
										}, { passive: false });
										this._events.touchend = this._handler.on(document.body, 'touchend', function (e) {
											return _this62._mouseUp(e);
										});
										this._events.touchcancel = this._handler.on(document.body, 'touchcancel', function (e) {
											return _this62._mouseUp(e);
										});
									}
									this._started = true;
									this._moved = false;
								}
							}, {
								key: '_mouseMove',
								value: function _mouseMove(e) {
									if (!isTouchEvent(e)) {
										if (getMouseButtons(e) !== 1) {
											this._mouseUp(e);
											return;
										}
									}
									this._moved = this._moveInternal(e) || this._moved /*calculation on after*/;

									cancelEvent(e);
								}
							}, {
								key: '_moveInternal',
								value: function _moveInternal(e) {
									//protected
								}
							}, {
								key: '_mouseUp',
								value: function _mouseUp(e) {
									var _this63 = this;

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
										setTimeout(function () {
											_this63._mouseEndPoint = null;
										}, 10);
									}
								}
							}, {
								key: '_upInternal',
								value: function _upInternal(e) {
									//protected
								}
							}, {
								key: 'dispose',
								value: function dispose() {
									this._handler.dispose();
								}
							}]);

							return BaseMouseDownMover;
						}();

						/**
       * managing cell selection operation with mouse
       * @private
       */


						var CellSelector = function (_BaseMouseDownMover) {
							_inherits(CellSelector, _BaseMouseDownMover);

							function CellSelector() {
								_classCallCheck(this, CellSelector);

								return _possibleConstructorReturn(this, (CellSelector.__proto__ || Object.getPrototypeOf(CellSelector)).apply(this, arguments));
							}

							_createClass(CellSelector, [{
								key: 'start',
								value: function start(e) {
									var cell = this._getTargetCell(e);
									if (!cell) {
										return;
									}
									_moveFocusCell(this._grid, cell.col, cell.row, e.shiftKey);

									this._bindMoveAndUp(e);

									this._cell = cell;

									cancelEvent(e);
									_vibrate(e);
								}
							}, {
								key: 'select',
								value: function select(e) {
									var cell = this._getTargetCell(e);
									if (!cell) {
										return;
									}
									_moveFocusCell(this._grid, cell.col, cell.row, e.shiftKey);
									this._cell = cell;
								}
							}, {
								key: '_moveInternal',
								value: function _moveInternal(e) {
									var _this65 = this;

									var cell = this._getTargetCell(e);
									if (!cell || this._cell.col === cell.col && this._cell.row === cell.row) {
										return false;
									}
									_moveFocusCell(this._grid, cell.col, cell.row, true);

									//make visible
									var makeVisibleCol = function () {
										if (cell.col < _this65._cell.col && 0 < cell.col) {
											// move left
											return cell.col - 1;
										} else if (_this65._cell.col < cell.col && cell.col + 1 < _this65._grid.colCount) {
											// move right
											return cell.col + 1;
										}
										return cell.col;
									}();
									var makeVisibleRow = function () {
										if (cell.row < _this65._cell.row && 0 < cell.row) {
											// move up
											return cell.row - 1;
										} else if (_this65._cell.row < cell.row && cell.row + 1 < _this65._grid.rowCount) {
											// move down
											return cell.row + 1;
										}
										return cell.row;
									}();
									if (makeVisibleCol !== cell.col || makeVisibleRow !== cell.row) {
										this._grid.makeVisibleCell(makeVisibleCol, makeVisibleRow);
									}
									this._cell = cell;
									return true;
								}
							}, {
								key: '_getTargetCell',
								value: function _getTargetCell(e) {
									var abstractPos = _getMouseAbstractPoint(this._grid, e);
									if (!abstractPos) {
										return null;
									}
									var cell = this._grid.getCellAt(abstractPos.x, abstractPos.y);
									if (cell.col < 0 || cell.row < 0) {
										return null;
									}
									return cell;
								}
							}]);

							return CellSelector;
						}(BaseMouseDownMover);
						/**
       * managing row width changing operation with mouse
       * @private
       */


						var ColumnResizer = function (_BaseMouseDownMover2) {
							_inherits(ColumnResizer, _BaseMouseDownMover2);

							function ColumnResizer(grid) {
								_classCallCheck(this, ColumnResizer);

								var _this66 = _possibleConstructorReturn(this, (ColumnResizer.__proto__ || Object.getPrototypeOf(ColumnResizer)).call(this, grid));

								_this66._targetCol = -1;
								return _this66;
							}

							_createClass(ColumnResizer, [{
								key: 'start',
								value: function start(col, e) {
									var pageX = void 0;
									if (!isTouchEvent(e)) {
										pageX = e.pageX;
									} else {
										pageX = e.changedTouches[0].pageX;
									}

									this._x = pageX;
									this._preX = 0;

									this._bindMoveAndUp(e);

									this._targetCol = col;
									this._invalidateAbsoluteLeft = _getColsWidth(this._grid, 0, col - 1);

									cancelEvent(e);
									_vibrate(e);
								}
							}, {
								key: '_moveInternal',
								value: function _moveInternal(e) {
									var pageX = isTouchEvent(e) ? e.changedTouches[0].pageX : e.pageX;

									var x = pageX - this._x;
									var moveX = x - this._preX;
									this._preX = x;
									var pre = this._grid.getColWidth(this._targetCol);
									var afterSize = _adjustColWidth(this._grid, this._targetCol, pre + moveX);
									if (afterSize < 10 && moveX < 0) {
										afterSize = 10;
									}
									_setColWidth(this._grid, this._targetCol, afterSize);

									var rect = _getVisibleRect(this._grid);
									rect.left = this._invalidateAbsoluteLeft;
									_invalidateRect(this._grid, rect);

									this._grid.fireListeners(EVENT_TYPE.RESIZE_COLUMN, { col: this._targetCol });

									return true;
								}
							}, {
								key: '_upInternal',
								value: function _upInternal(e) {
									this._grid.updateScroll();
								}
							}]);

							return ColumnResizer;
						}(BaseMouseDownMover);

						var FocusControl = function (_EventTarget2) {
							_inherits(FocusControl, _EventTarget2);

							function FocusControl(grid, parentElement, scrollable) {
								_classCallCheck(this, FocusControl);

								var _this67 = _possibleConstructorReturn(this, (FocusControl.__proto__ || Object.getPrototypeOf(FocusControl)).call(this));

								_this67._grid = grid;
								_this67._scrollable = scrollable;
								_this67._handler = new EventHandler();
								_this67._input = document.createElement('input');
								_this67._input.classList.add('grid-focus-control');
								_this67._input.readOnly = true;
								parentElement.appendChild(_this67._input);

								_this67._handler.on(_this67._input, 'compositionstart', function (e) {
									_this67._input.classList.add('composition');
									_this67._input.style.font = _this67._grid.font || '16px sans-serif';
									_this67._isComposition = true;
									grid.focus();
								});
								_this67._handler.on(_this67._input, 'compositionend', function (e) {
									_this67._isComposition = false;
									_this67._input.classList.remove('composition');
									_this67._input.style.font = '';
									if (!_this67._input.readOnly) {
										_this67.fireListeners('input', _this67._input.value);
									}
									setSafeInputValue(_this67._input, '');
								});
								_this67._handler.on(_this67._input, 'keypress', function (e) {
									if (_this67._isComposition) {
										return;
									}
									if (!_this67._input.readOnly && e.key && e.key.length === 1) {
										if (e.key === 'c' && (e.ctrlKey || e.metaKey)) {
											//copy! for Firefox
										} else {
											_this67.fireListeners('input', e.key);
											cancelEvent(e);
										}
									}
									setSafeInputValue(_this67._input, '');
								});
								_this67._handler.on(_this67._input, 'keydown', function (e) {
									if (_this67._isComposition) {
										return;
									}
									var keyCode = getKeyCode(e);
									_this67.fireListeners('keydown', keyCode, e);

									if (!_this67._input.readOnly && _this67._input.value) {
										// for Safari
										_this67.fireListeners('input', _this67._input.value);
									}

									setSafeInputValue(_this67._input, '');
								});
								var inputClear = function inputClear(e) {
									if (_this67._isComposition) {
										return;
									}
									setSafeInputValue(_this67._input, '');
								};

								_this67._handler.on(_this67._input, 'input', inputClear);
								_this67._handler.on(_this67._input, 'keyup', inputClear);
								_this67._handler.on(document, 'keydown', function (e) {
									if (!browser.IE) {
										return;
									}
									if (e.target !== _this67._input) {
										return;
									}
									var keyCode = getKeyCode(e);
									if (keyCode === KEY_ALPHA_C && e.ctrlKey) {
										setSafeInputValue(_this67._input, 'dummy');
										_this67._input.select();
										setTimeout(function () {
											setSafeInputValue(_this67._input, '');
										}, 100);
									}
								});
								_this67._handler.on(document, 'copy', function (e) {
									if (_this67._isComposition) {
										return;
									}
									if (!isDescendantElement(parentElement, e.target)) {
										return;
									}
									setSafeInputValue(_this67._input, '');
									var data = array.find(_this67.fireListeners('copy'), isDef);
									if (isDef(data)) {
										cancelEvent(e);
										if (browser.IE) {
											window.clipboardData.setData('Text', data); // IE
										} else {
											e.clipboardData.setData('text/plain', data); // Chrome, Firefox
										}
									}
								});
								return _this67;
							}

							_createClass(FocusControl, [{
								key: 'onKeyDownMove',
								value: function onKeyDownMove(fn) {
									var _this68 = this;

									this._handler.on(this._input, 'keydown', function (e) {
										if (_this68._isComposition) {
											return;
										}
										var keyCode = getKeyCode(e);
										if (keyCode === KEY_LEFT || keyCode === KEY_UP || keyCode === KEY_RIGHT || keyCode === KEY_DOWN || keyCode === KEY_HOME || keyCode === KEY_END) {
											fn(e);
										}
									});
								}
							}, {
								key: 'onInput',
								value: function onInput(fn) {
									return this.listen('input', fn);
								}
							}, {
								key: 'onCopy',
								value: function onCopy(fn) {
									return this.listen('copy', fn);
								}
							}, {
								key: 'focus',
								value: function focus() {
									// this._input.value = '';
									this._input.focus();
								}
							}, {
								key: 'setFocusRect',
								value: function setFocusRect(rect) {
									var top = this._scrollable.calcTop(rect.top);
									this._input.style.top = (top - style.getScrollBarSize()).toFixed() + 'px'; //position:relative だとずれるが、IEは position:relativeじゃないと最大値まで利用できない
									this._input.style.left = rect.left.toFixed() + 'px';
									this._input.style.width = rect.width.toFixed() + 'px';
									this._input.style.height = rect.height.toFixed() + 'px';
								}
							}, {
								key: 'resetInputStatus',
								value: function resetInputStatus() {
									var el = this._input;
									var composition = el.classList.contains('composition');

									var atts = el.attributes;
									var removeNames = [];
									for (var i = 0, n = atts.length; i < n; i++) {
										var att = atts[i];
										if (!this._inputStatus.hasOwnProperty(att.nodeName)) {
											removeNames.push(att.name);
										}
									}
									removeNames.forEach(function (removeName) {
										el.removeAttribute(removeName);
									});
									for (var name in this._inputStatus) {
										el.setAttribute(name, this._inputStatus[name]);
									}
									if (composition) {
										el.classList.add('composition');
										el.style.font = this._grid.font || '16px sans-serif';
									} else {
										el.classList.remove('composition');
									}
								}
							}, {
								key: 'storeInputStatus',
								value: function storeInputStatus() {
									var el = this._input;
									this._inputStatus = {};
									var atts = el.attributes;
									for (var i = 0, n = atts.length; i < n; i++) {
										var att = atts[i];
										this._inputStatus[att.name] = att.value;
									}
								}
							}, {
								key: 'setDefaultInputStatus',
								value: function setDefaultInputStatus() {
									// なぜかスクロールが少しずつずれていくことがあるのでここではセットしない。
									// this._input.style.font = this._grid.font || '16px sans-serif';
								}
							}, {
								key: 'dispose',
								value: function dispose() {
									_get(FocusControl.prototype.__proto__ || Object.getPrototypeOf(FocusControl.prototype), 'dispose', this).call(this);
									this._handler.dispose();
								}
							}, {
								key: 'editMode',
								set: function set(editMode) {
									this._input.readOnly = !editMode;
								},
								get: function get() {
									return !this._input.readOnly;
								}
							}, {
								key: 'input',
								get: function get() {
									return this._input;
								}
							}]);

							return FocusControl;
						}(EventTarget);

						/**
       * Selected area management
       */


						var Selection = function (_EventTarget3) {
							_inherits(Selection, _EventTarget3);

							function Selection(grid) {
								_classCallCheck(this, Selection);

								var _this69 = _possibleConstructorReturn(this, (Selection.__proto__ || Object.getPrototypeOf(Selection)).call(this));

								_this69._grid = grid;

								_this69._sel = { col: 0, row: 0 };
								_this69._focus = { col: 0, row: 0 };

								_this69._start = { col: 0, row: 0 };
								_this69._end = { col: 0, row: 0 };
								return _this69;
							}

							_createClass(Selection, [{
								key: '_setSelectCell',
								value: function _setSelectCell(col, row) {
									var _this70 = this;

									this._wrapFireSelectedEvent(function () {
										_this70._sel = { col: col, row: row };
										_this70._start = { col: col, row: row };
									});
								}
							}, {
								key: '_setFocusCell',
								value: function _setFocusCell(col, row, keepSelect) {
									var _this71 = this;

									this._wrapFireSelectedEvent(function () {
										if (!keepSelect) {
											_this71._setSelectCell(col, row);
										}
										_this71._focus = { col: col, row: row };
										_this71._end = { col: col, row: row };
									});
								}
							}, {
								key: '_wrapFireSelectedEvent',
								value: function _wrapFireSelectedEvent(callback) {
									if (this._isWraped) {
										callback();
									} else {
										this._isWraped = true;
										try {
											var before = {
												col: this._sel.col,
												row: this._sel.row,
												selected: false
											};
											callback();
											var after = {
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
							}, {
								key: 'range',
								get: function get() {
									var startCol = Math.min(this._start.col, this._end.col);
									var startRow = Math.min(this._start.row, this._end.row);
									var endCol = Math.max(this._start.col, this._end.col);
									var endRow = Math.max(this._start.row, this._end.row);
									return {
										start: {
											col: startCol,
											row: startRow
										},
										end: {
											col: endCol,
											row: endRow
										},
										inCell: function inCell(col, row) {
											return startCol <= col && col <= endCol && startRow <= row && row <= endRow;
										}
									};
								}
							}, {
								key: 'select',
								get: function get() {
									return {
										col: this._sel.col,
										row: this._sel.row
									};
								},
								set: function set() {
									var _this72 = this;

									var cell = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

									this._wrapFireSelectedEvent(function () {
										var _cell$col = cell.col,
										    col = _cell$col === undefined ? 0 : _cell$col,
										    _cell$row = cell.row,
										    row = _cell$row === undefined ? 0 : _cell$row;

										_this72._setSelectCell(col, row);
										_this72._setFocusCell(col, row, true);
									});
								}
							}]);

							return Selection;
						}(EventTarget);

						/**
       * This class manages the drawing process for each layer
       */


						var DrawLayers = function () {
							function DrawLayers() {
								_classCallCheck(this, DrawLayers);

								this._layers = {};
							}

							_createClass(DrawLayers, [{
								key: 'addDraw',
								value: function addDraw(level, fn) {
									var l = this._layers[level] || (this._layers[level] = new DrawLayer(level));
									l.addDraw(fn);
								}
							}, {
								key: 'draw',
								value: function draw(ctx) {
									var list = [];
									for (var k in this._layers) {
										list.push(this._layers[k]);
									}
									list.sort(function (a, b) {
										return a.level - b.level;
									});
									list.forEach(function (l) {
										return l.draw(ctx);
									});
								}
							}]);

							return DrawLayers;
						}();

						var DrawLayer = function () {
							function DrawLayer(level) {
								_classCallCheck(this, DrawLayer);

								this._level = level;
								this._list = [];
							}

							_createClass(DrawLayer, [{
								key: 'addDraw',
								value: function addDraw(fn) {
									this._list.push(fn);
								}
							}, {
								key: 'draw',
								value: function draw(ctx) {
									this._list.forEach(function (fn) {
										ctx.save();
										try {
											fn(ctx);
										} finally {
											ctx.restore();
										}
									});
								}
							}, {
								key: 'level',
								get: function get() {
									return this._level;
								}
							}]);

							return DrawLayer;
						}();
						/**
       * Context of cell drawing
       */


						var DrawCellContext = function () {
							/**
        * @private
        */
							function DrawCellContext(col, row, ctx, rect, drawRect, drawing, selection, drawLayers) {
								_classCallCheck(this, DrawCellContext);

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

							_createClass(DrawCellContext, [{
								key: 'getSelectState',

								/**
         * select status.
         * @return {object} select status
         */
								value: function getSelectState() {
									var sel = this._selection.select;
									return {
										selected: sel.col === this._col && sel.row === this._row,
										selection: this._selection.range.inCell(this._col, this._row)
									};
								}
								/**
         * Canvas context.
         * @return {CanvasRenderingContext2D} Canvas context.
         */

							}, {
								key: 'getContext',
								value: function getContext() {
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

							}, {
								key: 'getRect',
								value: function getRect() {
									if (this._mode === 0) {
										return this._rect;
									} else {
										if (this._rect) {
											return this._rect;
										}
										return this._grid.getCellRelativeRect(this._col, this._row);
									}
								}
							}, {
								key: 'setRect',
								value: function setRect(rect) {
									this._rect = rect;
								}
								/**
         * Rectangle of Drawing range.
         * @return {Rect} Rectangle of Drawing range.
         */

							}, {
								key: 'getDrawRect',
								value: function getDrawRect() {
									if (this._mode === 0) {
										return this._drawRect;
									} else {
										var absoluteRect = this._grid.getCellRect(this._col, this._row);
										return this._toRelativeDrawRect(absoluteRect);
									}
								}
								/**
         * get Context of current state
         * @return {DrawCellContext} current DrawCellContext.
         */

							}, {
								key: 'toCurrentContext',
								value: function toCurrentContext() {
									if (this._mode === 0) {
										return this;
									} else {
										var absoluteRect = this._grid.getCellRect(this._col, this._row);
										var rect = _toRelativeRect(this._grid, absoluteRect);
										var drawRect = this._toRelativeDrawRect(absoluteRect);
										var context = new DrawCellContext(this._col, this._row, this.getContext(), rect, drawRect, this.drawing, this._selection, this._drawLayers);
										// toCurrentContext は自分の toCurrentContextを呼ばせる
										context.toCurrentContext = this.toCurrentContext.bind(this);
										return context;
									}
								}
							}, {
								key: 'addLayerDraw',
								value: function addLayerDraw(level, fn) {
									this._drawLayers.addDraw(level, fn);
								}
							}, {
								key: '_toRelativeDrawRect',
								value: function _toRelativeDrawRect(absoluteRect) {
									var visibleRect = _getVisibleRect(this._grid);
									var rect = absoluteRect.copy();
									if (!rect.intersection(visibleRect)) {
										return null;
									}

									var isFrozenCell = this._grid.isFrozenCell(this._col, this._row);
									if (this._grid.frozenColCount >= 0 && (!isFrozenCell || !isFrozenCell.col)) {
										var fRect = this._grid.getCellRect(this._grid.frozenColCount - 1, this._row);
										rect = Rect.bounds(Math.max(rect.left, fRect.right), rect.top, rect.right, rect.bottom);
									}
									if (this._grid.frozenRowCount >= 0 && (!isFrozenCell || !isFrozenCell.row)) {
										var _fRect = this._grid.getCellRect(this._col, this._grid.frozenRowCount - 1);
										rect = Rect.bounds(rect.left, Math.max(rect.top, _fRect.bottom), rect.right, rect.bottom);
									}

									if (!rect.intersection(visibleRect)) {
										return null;
									}
									rect.offsetLeft(-visibleRect.left);
									rect.offsetTop(-visibleRect.top);

									return rect;
								}
							}, {
								key: '_delayMode',
								value: function _delayMode(grid, onTerminate) {
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

							}, {
								key: 'terminate',
								value: function terminate() {
									if (this._mode !== 0) {
										this._onTerminate();
									}
								}
							}, {
								key: 'drawing',
								get: function get() {
									if (this._mode === 0) {
										return this._drawing;
									} else {
										return true;
									}
								}
							}, {
								key: 'row',
								get: function get() {
									return this._row;
								}
							}, {
								key: 'col',
								get: function get() {
									return this._col;
								}
							}]);

							return DrawCellContext;
						}();
						/**
       * DrawGrid
       * @classdesc cheetahGrid.core.DrawGrid
       * @extends EventTarget
       * @memberof cheetahGrid.core
       */


						var DrawGrid = function (_EventTarget4) {
							_inherits(DrawGrid, _EventTarget4);

							_createClass(DrawGrid, null, [{
								key: 'EVENT_TYPE',
								get: function get() {
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

							}]);

							function DrawGrid() {
								var _ref39 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
								    _ref39$rowCount = _ref39.rowCount,
								    rowCount = _ref39$rowCount === undefined ? 10 : _ref39$rowCount,
								    _ref39$colCount = _ref39.colCount,
								    colCount = _ref39$colCount === undefined ? 10 : _ref39$colCount,
								    _ref39$frozenColCount = _ref39.frozenColCount,
								    frozenColCount = _ref39$frozenColCount === undefined ? 0 : _ref39$frozenColCount,
								    _ref39$frozenRowCount = _ref39.frozenRowCount,
								    frozenRowCount = _ref39$frozenRowCount === undefined ? 0 : _ref39$frozenRowCount,
								    _ref39$defaultRowHeig = _ref39.defaultRowHeight,
								    defaultRowHeight = _ref39$defaultRowHeig === undefined ? 40 : _ref39$defaultRowHeig,
								    _ref39$defaultColWidt = _ref39.defaultColWidth,
								    defaultColWidth = _ref39$defaultColWidt === undefined ? 80 : _ref39$defaultColWidt,
								    font = _ref39.font,
								    underlayBackgroundColor = _ref39.underlayBackgroundColor,
								    parentElement = _ref39.parentElement;

								_classCallCheck(this, DrawGrid);

								var _this73 = _possibleConstructorReturn(this, (DrawGrid.__proto__ || Object.getPrototypeOf(DrawGrid)).call(this));

								_this73[_] = {};
								style.initDocument();
								_this73[_].element = createRootElement();
								_this73[_].scrollable = new Scrollable();
								_this73[_].handler = new EventHandler();
								_this73[_].selection = new Selection(_this73);
								_this73[_].focusControl = new FocusControl(_this73, _this73[_].scrollable.getElement(), _this73[_].scrollable);

								_this73[_].canvas = hiDPI.transform(document.createElement('canvas'));
								_this73[_].context = _this73[_].canvas.getContext('2d', { alpha: false });

								_this73[_].rowCount = rowCount;
								_this73[_].colCount = colCount;
								_this73[_].frozenColCount = frozenColCount;
								_this73[_].frozenRowCount = frozenRowCount;

								_this73[_].defaultRowHeight = defaultRowHeight;
								_this73[_].defaultColWidth = defaultColWidth;

								_this73[_].font = font;
								_this73[_].underlayBackgroundColor = underlayBackgroundColor;

								/////
								_this73[_].rowHeightsMap = new NumberMap();
								_this73[_].colWidthsMap = new NumberMap();
								_this73[_].colWidthsLimit = {};
								_this73[_].calcWidthContext = {
									_: _this73[_],
									get full() {
										return this._.canvas.width;
									},
									get em() {
										return this._.context.measureText('あ').width;
									}
								};

								_this73[_].columnResizer = new ColumnResizer(_this73);
								_this73[_].cellSelector = new CellSelector(_this73);

								_this73[_].drawCells = {};

								_this73[_].element.appendChild(_this73[_].canvas);
								_this73[_].element.appendChild(_this73[_].scrollable.getElement());
								_this73.updateScroll();
								if (parentElement) {
									parentElement.appendChild(_this73[_].element);
									_this73.updateSize();
								} else {
									_this73.updateSize();
								}
								_bindEvents(_this73);
								return _this73;
							}

							_createClass(DrawGrid, [{
								key: 'getElement',
								value: function getElement() {
									return this[_].element;
								}
							}, {
								key: 'focus',
								value: function focus() {
									var _$selection$select = this[_].selection.select,
									    col = _$selection$select.col,
									    row = _$selection$select.row;

									this.focusCell(col, row);
								}
							}, {
								key: 'configure',
								value: function configure(name, value) {
									var cfg = this[_].config || (this[_].config = {});
									if (isDef(value)) {
										cfg[name] = value;
									}
									return cfg[name];
								}
							}, {
								key: 'updateSize',
								value: function updateSize() {
									//スタイルをクリアしてサイズ値を取得
									this[_].canvas.style.width = '';
									this[_].canvas.style.height = '';
									var width = Math.floor(this[_].canvas.offsetWidth ||
									/*for legacy*/this[_].canvas.parentElement.offsetWidth - style.getScrollBarSize());
									var height = Math.floor(this[_].canvas.offsetHeight ||
									/*for legacy*/this[_].canvas.parentElement.offsetHeight - style.getScrollBarSize());

									this[_].canvas.width = width;
									this[_].canvas.height = height;

									//整数で一致させるためstyleをセットして返す
									this[_].canvas.style.width = width + 'px';
									this[_].canvas.style.height = height + 'px';

									var sel = this[_].selection.select;
									this[_].focusControl.setFocusRect(this.getCellRect(sel.col, sel.row));
								}
							}, {
								key: 'updateScroll',
								value: function updateScroll() {
									this[_].scrollable.setScrollSize(_getScrollWidth(this), _getScrollHeight(this));
									this[_].scroll = {
										left: this[_].scrollable.scrollLeft,
										top: this[_].scrollable.scrollTop
									};
								}
							}, {
								key: 'getRowHeight',
								value: function getRowHeight(row) {
									return _getRowHeight(this, row);
								}
							}, {
								key: 'setRowHeight',
								value: function setRowHeight(row, height) {
									_setRowHeight(this, row, height);
									this.updateScroll();
								}
							}, {
								key: 'getColWidth',
								value: function getColWidth(col) {
									return _getColWidth(this, col);
								}
							}, {
								key: 'setColWidth',
								value: function setColWidth(col, width) {
									_setColWidth(this, col, width);
									this.updateScroll();
								}
							}, {
								key: 'getMaxColWidth',
								value: function getMaxColWidth(col) {
									var obj = this[_].colWidthsLimit[col];
									return obj && obj.max || undefined;
								}
							}, {
								key: 'setMaxColWidth',
								value: function setMaxColWidth(col, maxwidth) {
									var obj = this[_].colWidthsLimit[col] || (this[_].colWidthsLimit[col] = {});
									obj.max = maxwidth;
								}
							}, {
								key: 'getMinColWidth',
								value: function getMinColWidth(col) {
									var obj = this[_].colWidthsLimit[col];
									return obj && obj.min || undefined;
								}
							}, {
								key: 'setMinColWidth',
								value: function setMinColWidth(col, minwidth) {
									var obj = this[_].colWidthsLimit[col] || (this[_].colWidthsLimit[col] = {});
									obj.min = minwidth;
								}
							}, {
								key: 'getCellRect',
								value: function getCellRect(col, row) {
									var isFrozenCell = this.isFrozenCell(col, row);

									var absoluteLeft = _getColsWidth(this, 0, col - 1);
									var width = _getColWidth(this, col);
									if (isFrozenCell && isFrozenCell.col) {
										absoluteLeft += this[_].scroll.left;
									}

									var absoluteTop = _getRowsHeight(this, 0, row - 1);
									var height = _getRowHeight(this, row);
									if (isFrozenCell && isFrozenCell.row) {
										absoluteTop += this[_].scroll.top;
									}
									return new Rect(absoluteLeft, absoluteTop, width, height);
								}
							}, {
								key: 'getCellRelativeRect',
								value: function getCellRelativeRect(col, row) {
									return _toRelativeRect(this, this.getCellRect(col, row));
								}
							}, {
								key: 'getCellsRect',
								value: function getCellsRect(startCol, startRow, endCol, endRow) {
									var isFrozenStartCell = this.isFrozenCell(startCol, startRow);
									var isFrozenEndCell = this.isFrozenCell(endCol, endRow);

									var absoluteLeft = _getColsWidth(this, 0, startCol - 1);
									var width = _getColsWidth(this, startCol, endCol);
									if (isFrozenStartCell && isFrozenStartCell.col) {
										var scrollLeft = this[_].scroll.left;
										absoluteLeft += scrollLeft;
										if (!isFrozenEndCell || !isFrozenEndCell.col) {
											width -= scrollLeft;
											width = Math.max(width, _getColsWidth(this, startCol, this.frozenColCount - 1));
										}
									}
									var absoluteTop = _getRowsHeight(this, 0, startRow - 1);
									var height = _getRowsHeight(this, startRow, endRow);
									if (isFrozenStartCell && isFrozenStartCell.row) {
										var scrollTop = this[_].scroll.top;
										absoluteTop += scrollTop;
										if (!isFrozenEndCell || !isFrozenEndCell.row) {
											height -= scrollTop;
											height = Math.max(height, _getColsWidth(this, startRow, this.frozenRowCount - 1));
										}
									}
									return new Rect(absoluteLeft, absoluteTop, width, height);
								}
							}, {
								key: 'isFrozenCell',
								value: function isFrozenCell(col, row) {
									var isFrozenRow = this[_].frozenRowCount > 0 && row < this[_].frozenRowCount;
									var isFrozenCol = this[_].frozenColCount > 0 && col < this[_].frozenColCount;
									if (isFrozenRow || isFrozenCol) {
										return {
											row: isFrozenRow,
											col: isFrozenCol
										};
									} else {
										return null;
									}
								}
							}, {
								key: 'getRowAt',
								value: function getRowAt(absoluteY) {
									var frozen = _getTargetFrozenRowAt(this, absoluteY);
									if (frozen) {
										return frozen.row;
									}
									var row = _getTargetRowAt(this, absoluteY);
									return row ? row.row : -1;
								}
							}, {
								key: 'getColAt',
								value: function getColAt(absoluteX) {
									var frozen = _getTargetFrozenColAt(this, absoluteX);
									if (frozen) {
										return frozen.col;
									}
									var col = _getTargetColAt(this, absoluteX);
									return col ? col.col : -1;
								}
							}, {
								key: 'getCellAt',
								value: function getCellAt(absoluteX, absoluteY) {
									return {
										row: this.getRowAt(absoluteY),
										col: this.getColAt(absoluteX)
									};
								}
							}, {
								key: 'makeVisibleCell',
								value: function makeVisibleCell(col, row) {
									var isFrozenCell = this.isFrozenCell(col, row);
									if (isFrozenCell && isFrozenCell.col && isFrozenCell.row) {
										return;
									}
									var rect = this.getCellRect(col, row);
									var visibleRect = _getScrollableVisibleRect(this);
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
							}, {
								key: 'focusCell',
								value: function focusCell(col, row) {
									var oldEditMode = this[_].focusControl.editMode;
									if (oldEditMode) {
										this[_].focusControl.resetInputStatus();
									}

									this[_].focusControl.setFocusRect(this.getCellRect(col, row));

									var _$selection$select2 = this[_].selection.select,
									    selCol = _$selection$select2.col,
									    selRow = _$selection$select2.row;

									var results = this.fireListeners(EVENT_TYPE.EDITABLEINPUT_CELL, { col: selCol, row: selRow });

									var editMode = array.findIndex(results, function (v) {
										return !!v;
									}) >= 0;
									this[_].focusControl.editMode = editMode;

									if (editMode) {
										this[_].focusControl.storeInputStatus();
										this[_].focusControl.setDefaultInputStatus();
										this.fireListeners(EVENT_TYPE.MODIFY_STATUS_EDITABLEINPUT_CELL, { col: selCol, row: selRow, input: this[_].focusControl.input });
									}

									// Failure occurs in IE if focus is not last
									this[_].focusControl.focus();
								}
							}, {
								key: 'invalidateCell',
								value: function invalidateCell(col, row) {
									this.invalidateGridRect(col, row);
								}
							}, {
								key: 'invalidateGridRect',
								value: function invalidateGridRect(startCol, startRow) {
									var endCol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startCol;
									var endRow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startRow;

									var offset = this.getOffsetInvalidateCells();
									if (offset > 0) {
										startCol -= offset;
										startRow -= offset;
										endCol += offset;
										endRow += offset;
									}

									var visibleRect = _getVisibleRect(this);
									var cellsRect = this.getCellsRect(startCol, startRow, endCol, endRow);
									var invalidateTarget = visibleRect.intersection(cellsRect);
									if (invalidateTarget) {

										if (this[_].frozenColCount > 0 && endCol >= this[_].frozenColCount) {
											var frozenRect = _getFrozenColsRect(this);
											if (frozenRect.intersection(invalidateTarget)) {
												invalidateTarget.left = Math.min(frozenRect.right - 1, frozenRect.right);
											}
										}

										if (this[_].frozenRowCount > 0 && endRow >= this[_].frozenRowCount) {
											var _frozenRect4 = _getFrozenRowsRect(this);
											if (_frozenRect4.intersection(invalidateTarget)) {
												invalidateTarget.top = Math.min(_frozenRect4.bottom - 1, invalidateTarget.top);
											}
										}

										_invalidateRect(this, invalidateTarget);
									}
								}
							}, {
								key: 'invalidate',
								value: function invalidate() {
									var visibleRect = _getVisibleRect(this);
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

							}, {
								key: 'getCopyCellValue',
								value: function getCopyCellValue(col, row) {}
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

							}, {
								key: 'onDrawCell',
								value: function onDrawCell(col, row, context) {
									//Please implement cell drawing!!
								}
							}, {
								key: 'addDisposable',
								value: function addDisposable(disposable) {
									if (!disposable || !disposable.dispose || typeof disposable.dispose !== 'function') {
										throw new Error('not disposable!');
									}
									var disposables = this[_].disposables = this[_].disposables || [];
									disposables.push(disposable);
								}
							}, {
								key: 'dispose',
								value: function dispose() {
									_get(DrawGrid.prototype.__proto__ || Object.getPrototypeOf(DrawGrid.prototype), 'dispose', this).call(this);
									this[_].handler.dispose();
									this[_].scrollable.dispose();
									this[_].focusControl.dispose();
									this[_].columnResizer.dispose();
									this[_].cellSelector.dispose();
									if (this[_].disposables) {
										this[_].disposables.forEach(function (disposable) {
											return disposable.dispose();
										});
										this[_].disposables = null;
									}

									var parentElement = this[_].element.parentElement;

									if (parentElement) {
										parentElement.removeChild(this[_].element);
									}
								}
							}, {
								key: 'getAttachCellArea',
								value: function getAttachCellArea(col, row) {
									return {
										element: this.getElement(),
										rect: _toRelativeRect(this, this.getCellRect(col, row))
									};
								}
							}, {
								key: 'bindEventsInternal',
								value: function bindEventsInternal() {
									//nop
								}
							}, {
								key: 'getTargetRowAtInternal',
								value: function getTargetRowAtInternal(absoluteY) {
									//継承用 設定を無視して計算する場合継承して実装
								}
							}, {
								key: 'getRowsHeightInternal',
								value: function getRowsHeightInternal(startRow, endRow) {
									//継承用 設定を無視して計算する場合継承して実装
								}
							}, {
								key: 'getRowHeightInternal',
								value: function getRowHeightInternal(row) {
									//継承用 設定を無視して計算する場合継承して実装
								}
							}, {
								key: 'getScrollHeightInternal',
								value: function getScrollHeightInternal(row) {
									//継承用 設定を無視して計算する場合継承して実装
								}
							}, {
								key: 'getMoveLeftColByKeyDownInternal',
								value: function getMoveLeftColByKeyDownInternal(_ref40) {
									var col = _ref40.col,
									    row = _ref40.row;

									return col - 1;
								}
							}, {
								key: 'getMoveRightColByKeyDownInternal',
								value: function getMoveRightColByKeyDownInternal(_ref41) {
									var col = _ref41.col,
									    row = _ref41.row;

									return col + 1;
								}
							}, {
								key: 'getMoveUpRowByKeyDownInternal',
								value: function getMoveUpRowByKeyDownInternal(_ref42) {
									var col = _ref42.col,
									    row = _ref42.row;

									return row - 1;
								}
							}, {
								key: 'getMoveDownRowByKeyDownInternal',
								value: function getMoveDownRowByKeyDownInternal(_ref43) {
									var col = _ref43.col,
									    row = _ref43.row;

									return row + 1;
								}
							}, {
								key: 'getOffsetInvalidateCells',
								value: function getOffsetInvalidateCells() {
									return 0;
								}
							}, {
								key: '_getInitContext',
								value: function _getInitContext() {
									var ctx = this[_].context;
									//初期化
									ctx.fillStyle = 'white';
									ctx.strokeStyle = 'black';
									ctx.textAlign = 'left';
									ctx.textBaseline = 'top';
									ctx.lineWidth = 1;
									ctx.font = this.font || '16px sans-serif';
									return ctx;
								}
							}, {
								key: 'canvas',
								get: function get() {
									return this[_].canvas;
								}
							}, {
								key: 'selection',
								get: function get() {
									return this[_].selection;
								}
							}, {
								key: 'rowCount',
								get: function get() {
									return this[_].rowCount;
								},
								set: function set(rowCount) {
									this[_].rowCount = rowCount;
									this.updateScroll();
								}
							}, {
								key: 'colCount',
								get: function get() {
									return this[_].colCount;
								},
								set: function set(colCount) {
									this[_].colCount = colCount;
									this.updateScroll();
								}
							}, {
								key: 'frozenColCount',
								get: function get() {
									return this[_].frozenColCount;
								},
								set: function set(frozenColCount) {
									this[_].frozenColCount = frozenColCount;
								}
							}, {
								key: 'frozenRowCount',
								get: function get() {
									return this[_].frozenRowCount;
								},
								set: function set(frozenRowCount) {
									this[_].frozenRowCount = frozenRowCount;
								}
							}, {
								key: 'defaultRowHeight',
								get: function get() {
									return this[_].rowCount;
								},
								set: function set(defaultRowHeight) {
									this[_].defaultRowHeight = defaultRowHeight;
									this.updateScroll();
								}
							}, {
								key: 'defaultColWidth',
								get: function get() {
									return this[_].defaultColWidth;
								},
								set: function set(defaultColWidth) {
									this[_].defaultColWidth = defaultColWidth;
									this.updateScroll();
								}
							}, {
								key: 'font',
								get: function get() {
									return this[_].font;
								},
								set: function set(font) {
									this[_].font = font;
								}
							}, {
								key: 'underlayBackgroundColor',
								get: function get() {
									return this[_].underlayBackgroundColor;
								},
								set: function set(underlayBackgroundColor) {
									this[_].underlayBackgroundColor = underlayBackgroundColor;
								}
							}]);

							return DrawGrid;
						}(EventTarget);

						module.exports = DrawGrid;
					}

					/***/
				},

				/***/"./core/EventTarget.js":
				/*!*****************************!*\
      !*** ./core/EventTarget.js ***!
      \*****************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function coreEventTargetJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var _webpack_require__48 = __webpack_require__( /*! ../internal/utils */"./internal/utils.js"),
						    isDef = _webpack_require__48.isDef,
						    each = _webpack_require__48.obj.each;
						//private symbol


						var _webpack_require__$g = __webpack_require__( /*! ../internal/symbolManager */"./internal/symbolManager.js").get(),
						    _ = _webpack_require__$g._;

						var nextId = 1;
						/**
       * event target.
       */

						var EventTarget = function () {
							function EventTarget() {
								_classCallCheck(this, EventTarget);

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


							_createClass(EventTarget, [{
								key: 'listen',
								value: function listen(type, listener) {
									var _this74 = this;

									var list = this[_].listeners[type] || (this[_].listeners[type] = []);
									list.push(listener);

									var id = nextId++;
									this[_].listenerData[id] = {
										type: type,
										listener: listener,
										remove: function remove() {
											delete _this74[_].listenerData[id];
											var index = list.indexOf(listener);
											list.splice(index, 1);
											if (!_this74[_].listeners[type].length) {
												delete _this74[_].listeners[type];
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

							}, {
								key: 'unlisten',
								value: function unlisten(id) {
									this[_].listenerData[id].remove();
								}
							}, {
								key: 'addEventListener',
								value: function addEventListener(type, listener) {
									this.listen(type, listener);
								}
							}, {
								key: 'removeEventListener',
								value: function removeEventListener(type, listener) {
									var _this75 = this;

									each(this[_].listenerData, function (obj, id) {
										if (obj.type === type && obj.listener === listener) {
											_this75.unlisten(id);
										}
									});
								}
							}, {
								key: 'hasListeners',
								value: function hasListeners(type) {
									return !!this[_].listeners[type];
								}
								/**
         * Fires all registered listeners
         * @param  {string}    type The type of the listeners to fire.
         * @param  {...*} args fire arguments
         * @return {*} the result of the last listener
         */

							}, {
								key: 'fireListeners',
								value: function fireListeners(type) {
									var _this76 = this;

									for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
										args[_key3 - 1] = arguments[_key3];
									}

									var list = this[_].listeners[type];
									if (!list) {
										return [];
									}
									return list.map(function (listener) {
										return listener.call.apply(listener, [_this76].concat(args));
									}).filter(isDef);
								}
							}, {
								key: 'dispose',
								value: function dispose() {
									delete this[_];
								}
							}]);

							return EventTarget;
						}();

						module.exports = EventTarget;
					}

					/***/
				},

				/***/"./data.js":
				/*!*****************!*\
      !*** ./data.js ***!
      \*****************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function dataJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var DataSource = __webpack_require__( /*! ./data/DataSource */"./data/DataSource.js");
						var CachedDataSource = __webpack_require__( /*! ./data/CachedDataSource */"./data/CachedDataSource.js");

						/**
       * data modules
       * @type {Object}
       * @namespace cheetahGrid.data
       * @memberof cheetahGrid
       */
						module.exports = {
							DataSource: DataSource,
							CachedDataSource: CachedDataSource
						};
					}

					/***/
				},

				/***/"./data/CachedDataSource.js":
				/*!**********************************!*\
      !*** ./data/CachedDataSource.js ***!
      \**********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function dataCachedDataSourceJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var _setFieldCache = function _setFieldCache(_ref44, index, field, value) {
							var _fCache = _ref44._fCache;

							var recCache = _fCache[index] || (_fCache[index] = {});
							recCache[field] = value;
						};
						/**
       * grid data source
       *
       * @classdesc cheetahGrid.data.CachedDataSource
       * @extends cheetahGrid.data.DataSource
       * @memberof cheetahGrid.data
       */


						var _webpack_require__49 = __webpack_require__( /*! ../internal/utils */"./internal/utils.js"),
						    getChainSafe = _webpack_require__49.getChainSafe;

						var DataSource = __webpack_require__( /*! ./DataSource */"./data/DataSource.js");

						var CachedDataSource = function (_DataSource) {
							_inherits(CachedDataSource, _DataSource);

							_createClass(CachedDataSource, null, [{
								key: 'ofArray',
								value: function ofArray(array) {
									return new CachedDataSource({
										get: function get(index) {
											return array[index];
										},
										length: array.length
									});
								}
							}, {
								key: 'EVENT_TYPE',
								get: function get() {
									return DataSource.EVENT_TYPE;
								}
							}]);

							function CachedDataSource() {
								var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, CachedDataSource);

								var _this77 = _possibleConstructorReturn(this, (CachedDataSource.__proto__ || Object.getPrototypeOf(CachedDataSource)).call(this, opt));

								_this77._rCache = {};
								_this77._fCache = {};
								return _this77;
							}

							_createClass(CachedDataSource, [{
								key: 'getOriginal',
								value: function getOriginal(index) {
									if (this._rCache && this._rCache[index]) {
										return this._rCache[index];
									}
									return _get(CachedDataSource.prototype.__proto__ || Object.getPrototypeOf(CachedDataSource.prototype), 'getOriginal', this).call(this, index);
								}
							}, {
								key: 'getOriginalField',
								value: function getOriginalField(index, field) {
									var cache = getChainSafe(this._fCache, index, field);
									if (cache) {
										return cache;
									}
									return _get(CachedDataSource.prototype.__proto__ || Object.getPrototypeOf(CachedDataSource.prototype), 'getOriginalField', this).call(this, index, field);
								}
							}, {
								key: 'setOriginalField',
								value: function setOriginalField(index, field, value) {
									var fCache = this._fCache;
									if (fCache && fCache[index]) {
										delete fCache[index]; // clear row cache
									}
									return _get(CachedDataSource.prototype.__proto__ || Object.getPrototypeOf(CachedDataSource.prototype), 'setOriginalField', this).call(this, index, field, value);
								}
							}, {
								key: 'clearCache',
								value: function clearCache() {
									if (this._rCache) {
										this._rCache = {};
									}
									if (this._fCache) {
										this._fCache = {};
									}
								}
							}, {
								key: 'fieldPromiseCallBackInternal',
								value: function fieldPromiseCallBackInternal(index, field, val) {
									_setFieldCache(this, index, field, val);
								}
							}, {
								key: 'recordPromiseCallBackInternal',
								value: function recordPromiseCallBackInternal(index, val) {
									this._rCache[index] = val;
								}
							}, {
								key: 'dispose',
								value: function dispose() {
									_get(CachedDataSource.prototype.__proto__ || Object.getPrototypeOf(CachedDataSource.prototype), 'dispose', this).call(this);
								}
							}]);

							return CachedDataSource;
						}(DataSource);

						module.exports = CachedDataSource;
					}

					/***/
				},

				/***/"./data/DataSource.js":
				/*!****************************!*\
      !*** ./data/DataSource.js ***!
      \****************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function dataDataSourceJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var getValue = function getValue(value, setPromiseBack) {
							value = getOrApply(value);
							if (isPromise(value)) {
								value = value.then(function (r) {
									if (!isPromise(r)) {
										setPromiseBack(r);
									}
									return getValue(r, setPromiseBack);
								});
								//一時的にキャッシュ
								setPromiseBack(value);
							}
							return value;
						};

						var getField = function getField(record, field, setPromiseBack) {
							if (!isDef(record)) {
								return undefined;
							}
							if (isPromise(record)) {
								return record.then(function (r) {
									return getField(r, field, setPromiseBack);
								});
							}
							if (field in record) {
								return getValue(record[field], setPromiseBack);
							}
							if (typeof field === 'function') {
								return getValue(field(record), setPromiseBack);
							}

							var ss = (field + '').split('.');
							if (ss.length <= 1) {
								return getValue(record[field], setPromiseBack);
							}
							return getValue(applyChainSafe.apply(undefined, [record, function (val, name) {
								return getField(val, name, emptyFn);
							}].concat(_toConsumableArray(ss))), setPromiseBack);
						};

						var setField = function setField(record, field, value) {
							if (field in record) {
								record[field] = value;
							} else if (typeof field === 'function') {
								return field(record, value);
							} else if (typeof field === 'string') {
								var ss = (field + '').split('.');
								var obj = record;
								var length = ss.length;

								for (var i = 0; i < length; i++) {
									var f = ss[i];
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
						};

						var _getIndex = function _getIndex(dataSource, index) {
							if (!dataSource._sortedIndexMap) {
								return index;
							}
							var mapIndex = dataSource._sortedIndexMap[index];
							return isDef(mapIndex) ? mapIndex : index;
						};

						/**
       * grid data source
       *
       * @classdesc cheetahGrid.data.DataSource
       * @extends EventTarget
       * @memberof cheetahGrid.data
       */


						var _webpack_require__50 = __webpack_require__( /*! ../internal/utils */"./internal/utils.js"),
						    array = _webpack_require__50.array,
						    isDef = _webpack_require__50.isDef,
						    isPromise = _webpack_require__50.isPromise,
						    getOrApply = _webpack_require__50.getOrApply,
						    applyChainSafe = _webpack_require__50.applyChainSafe,
						    emptyFn = _webpack_require__50.emptyFn;

						var _sort = __webpack_require__( /*! ../internal/sort */"./internal/sort.js");
						var EventTarget = __webpack_require__( /*! ../core/EventTarget */"./core/EventTarget.js");

						var EVENT_TYPE = {
							UPDATE_LENGTH: 'update_length',
							UPDATED_LENGTH: 'updated_length',
							UPDATED_ORDER: 'updated_order'
						};

						var DataSource = function (_EventTarget5) {
							_inherits(DataSource, _EventTarget5);

							_createClass(DataSource, null, [{
								key: 'ofArray',
								value: function ofArray(array) {
									return new DataSource({
										get: function get(index) {
											return array[index];
										},
										length: array.length
									});
								}
							}, {
								key: 'EVENT_TYPE',
								get: function get() {
									return EVENT_TYPE;
								}
							}]);

							function DataSource() {
								var _ref45 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
								    get = _ref45.get,
								    _ref45$length = _ref45.length,
								    length = _ref45$length === undefined ? 0 : _ref45$length;

								_classCallCheck(this, DataSource);

								var _this78 = _possibleConstructorReturn(this, (DataSource.__proto__ || Object.getPrototypeOf(DataSource)).call(this));

								_this78._get = get;
								_this78._length = length;
								_this78._sortedIndexMap = false;
								return _this78;
							}

							_createClass(DataSource, [{
								key: 'get',
								value: function get(index) {
									return this.getOriginal(_getIndex(this, index));
								}
							}, {
								key: 'getField',
								value: function getField(index, field) {
									return this.getOriginalField(_getIndex(this, index), field);
								}
							}, {
								key: 'hasField',
								value: function hasField(index, field) {
									return this.hasOriginalField(_getIndex(this, index), field);
								}
							}, {
								key: 'setField',
								value: function setField(index, field, value) {
									return this.setOriginalField(_getIndex(this, index), field, value);
								}
							}, {
								key: 'sort',
								value: function sort(field, order) {
									var _this79 = this;

									var sortedIndexMap = new Array(this._length);

									var orderFn = order !== 'desc' ? function (v1, v2) {
										return v1 === v2 ? 0 : v1 > v2 ? 1 : -1;
									} : function (v1, v2) {
										return v1 === v2 ? 0 : v1 < v2 ? 1 : -1;
									};

									return _sort.sortPromise(function (index) {
										return isDef(sortedIndexMap[index]) ? sortedIndexMap[index] : sortedIndexMap[index] = index;
									}, function (index, rel) {
										sortedIndexMap[index] = rel;
									}, this._length, orderFn, function (index) {
										return _this79.getOriginalField(index, field);
									}).then(function () {
										_this79._sortedIndexMap = sortedIndexMap;
										_this79.fireListeners(EVENT_TYPE.UPDATED_ORDER);
									});
								}
							}, {
								key: 'dispose',
								value: function dispose() {
									_get(DataSource.prototype.__proto__ || Object.getPrototypeOf(DataSource.prototype), 'dispose', this).call(this);
								}
							}, {
								key: 'getOriginal',
								value: function getOriginal(index) {
									var _this80 = this;

									return getValue(this._get(index), function (val) {
										_this80.recordPromiseCallBackInternal(index, val);
									});
								}
							}, {
								key: 'getOriginalField',
								value: function getOriginalField(index, field) {
									var _this81 = this;

									if (!isDef(field)) {
										return undefined;
									}
									var record = this.getOriginal(index);
									return getField(record, field, function (val) {
										_this81.fieldPromiseCallBackInternal(index, field, val);
									});
								}
							}, {
								key: 'hasOriginalField',
								value: function hasOriginalField(index, field) {
									if (!isDef(field)) {
										return false;
									}
									if (typeof field === 'function') {
										return true;
									}
									var record = this.getOriginal(index);
									return field in record;
								}
							}, {
								key: 'setOriginalField',
								value: function setOriginalField(index, field, value) {
									if (!isDef(field)) {
										return undefined;
									}
									var record = this.getOriginal(index);
									return setField(record, field, value);
								}
							}, {
								key: 'fieldPromiseCallBackInternal',
								value: function fieldPromiseCallBackInternal(index, field, val) {
									//
								}
							}, {
								key: 'recordPromiseCallBackInternal',
								value: function recordPromiseCallBackInternal(index, val) {
									//
								}
							}, {
								key: 'length',
								get: function get() {
									return this._length;
								},
								set: function set(length) {
									var results = this.fireListeners(EVENT_TYPE.UPDATE_LENGTH, length);
									if (array.findIndex(results, function (v) {
										return !v;
									}) >= 0) {
										return;
									}
									this._length = length;
									this.fireListeners(EVENT_TYPE.UPDATED_LENGTH, this._length);
								}
							}]);

							return DataSource;
						}(EventTarget);

						DataSource.EMPTY = new DataSource({
							length: 0
						});

						module.exports = DataSource;
					}

					/***/
				},

				/***/"./element/Inline.js":
				/*!***************************!*\
      !*** ./element/Inline.js ***!
      \***************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function elementInlineJs(module, exports, __webpack_require__) {

					"use strict";

					var _webpack_require__51 = __webpack_require__( /*! ../internal/utils */"./internal/utils.js"),
					    isDef = _webpack_require__51.isDef;

					var Inline = function () {
						function Inline(content) {
							_classCallCheck(this, Inline);

							this._content = isDef(content) ? content : '';
						}

						_createClass(Inline, [{
							key: 'width',
							value: function width(_ref46) {
								var ctx = _ref46.ctx;

								return ctx.measureText(this._content).width;
							}
						}, {
							key: 'font',
							value: function font() {
								return null;
							}
						}, {
							key: 'color',
							value: function color() {
								return null;
							}
						}, {
							key: 'canDraw',
							value: function canDraw() {
								return true;
							}
						}, {
							key: 'onReady',
							value: function onReady(fn) {}
						}, {
							key: 'draw',
							value: function draw(_ref47) {
								var ctx = _ref47.ctx,
								    canvashelper = _ref47.canvashelper,
								    rect = _ref47.rect,
								    offset = _ref47.offset,
								    offsetLeft = _ref47.offsetLeft,
								    offsetRight = _ref47.offsetRight,
								    offsetTop = _ref47.offsetTop,
								    offsetBottom = _ref47.offsetBottom;

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
						}]);

						return Inline;
					}();

					module.exports = Inline;

					/***/
				},

				/***/"./element/InlineDrawer.js":
				/*!*********************************!*\
      !*** ./element/InlineDrawer.js ***!
      \*********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function elementInlineDrawerJs(module, exports, __webpack_require__) {

					"use strict";

					var Inline = __webpack_require__( /*! ./Inline */"./element/Inline.js");

					var InlineDrawer = function (_Inline) {
						_inherits(InlineDrawer, _Inline);

						function InlineDrawer(_ref48) {
							var draw = _ref48.draw,
							    width = _ref48.width,
							    height = _ref48.height,
							    color = _ref48.color;

							_classCallCheck(this, InlineDrawer);

							var _this82 = _possibleConstructorReturn(this, (InlineDrawer.__proto__ || Object.getPrototypeOf(InlineDrawer)).call(this));

							_this82._draw = draw;
							_this82._width = width;
							_this82._height = height;
							_this82._color = color;
							return _this82;
						}

						_createClass(InlineDrawer, [{
							key: 'width',
							value: function width(_ref49) {
								var ctx = _ref49.ctx;

								return this._width;
							}
						}, {
							key: 'font',
							value: function font() {
								return null;
							}
						}, {
							key: 'color',
							value: function color() {
								return this._color;
							}
						}, {
							key: 'canDraw',
							value: function canDraw() {
								return true;
							}
						}, {
							key: 'onReady',
							value: function onReady(callback) {}
						}, {
							key: 'draw',
							value: function draw(_ref50) {
								var ctx = _ref50.ctx,
								    canvashelper = _ref50.canvashelper,
								    rect = _ref50.rect,
								    offset = _ref50.offset,
								    offsetLeft = _ref50.offsetLeft,
								    offsetRight = _ref50.offsetRight,
								    offsetTop = _ref50.offsetTop,
								    offsetBottom = _ref50.offsetBottom;

								this._draw({
									ctx: ctx,
									canvashelper: canvashelper,
									rect: rect,
									offset: offset,
									offsetLeft: offsetLeft,
									offsetRight: offsetRight,
									offsetTop: offsetTop,
									offsetBottom: offsetBottom
								});
							}
						}]);

						return InlineDrawer;
					}(Inline);

					module.exports = InlineDrawer;

					/***/
				},

				/***/"./element/InlineIcon.js":
				/*!*******************************!*\
      !*** ./element/InlineIcon.js ***!
      \*******************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function elementInlineIconJs(module, exports, __webpack_require__) {

					"use strict";

					var Inline = __webpack_require__( /*! ./Inline */"./element/Inline.js");
					var fonts = __webpack_require__( /*! ../internal/fonts */"./internal/fonts.js");

					var InlineIcon = function (_Inline2) {
						_inherits(InlineIcon, _Inline2);

						function InlineIcon(icon) {
							_classCallCheck(this, InlineIcon);

							var _this83 = _possibleConstructorReturn(this, (InlineIcon.__proto__ || Object.getPrototypeOf(InlineIcon)).call(this));

							_this83._icon = icon || {};
							return _this83;
						}

						_createClass(InlineIcon, [{
							key: 'width',
							value: function width(_ref51) {
								var ctx = _ref51.ctx;

								var icon = this._icon;
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
						}, {
							key: 'font',
							value: function font() {
								return this._icon.font;
							}
						}, {
							key: 'color',
							value: function color() {
								return this._icon.color;
							}
						}, {
							key: 'canDraw',
							value: function canDraw() {
								var icon = this._icon;
								return icon.font ? fonts.check(icon.font, icon.content) : true;
							}
						}, {
							key: 'onReady',
							value: function onReady(callback) {
								var icon = this._icon;
								if (icon.font && !fonts.check(icon.font, icon.content)) {
									fonts.load(icon.font, icon.content, callback);
								}
							}
						}, {
							key: 'draw',
							value: function draw(_ref52) {
								var ctx = _ref52.ctx,
								    canvashelper = _ref52.canvashelper,
								    rect = _ref52.rect,
								    offset = _ref52.offset,
								    offsetLeft = _ref52.offsetLeft,
								    offsetRight = _ref52.offsetRight,
								    offsetTop = _ref52.offsetTop,
								    offsetBottom = _ref52.offsetBottom;

								var icon = this._icon;
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
						}]);

						return InlineIcon;
					}(Inline);

					module.exports = InlineIcon;

					/***/
				},

				/***/"./element/InlineImage.js":
				/*!********************************!*\
      !*** ./element/InlineImage.js ***!
      \********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function elementInlineImageJs(module, exports, __webpack_require__) {

					"use strict";

					var Inline = __webpack_require__( /*! ./Inline */"./element/Inline.js");

					var _webpack_require__52 = __webpack_require__( /*! ../internal/imgs */"./internal/imgs.js"),
					    getCacheOrLoad = _webpack_require__52.getCacheOrLoad;

					var _webpack_require__53 = __webpack_require__( /*! ../internal/utils */"./internal/utils.js"),
					    isPromise = _webpack_require__53.isPromise;

					var InlineImage = function (_Inline3) {
						_inherits(InlineImage, _Inline3);

						function InlineImage(_ref53) {
							var src = _ref53.src,
							    width = _ref53.width,
							    height = _ref53.height,
							    imageLeft = _ref53.imageLeft,
							    imageTop = _ref53.imageTop,
							    imageWidth = _ref53.imageWidth,
							    imageHeight = _ref53.imageHeight;

							_classCallCheck(this, InlineImage);

							var _this84 = _possibleConstructorReturn(this, (InlineImage.__proto__ || Object.getPrototypeOf(InlineImage)).call(this));

							_this84._src = src;
							_this84._width = width;
							_this84._height = height;
							_this84._imageLeft = imageLeft;
							_this84._imageTop = imageTop;
							_this84._imageWidth = imageWidth;
							_this84._imageHeight = imageHeight;

							_this84._onloaded = [];

							_this84._loaded = false;
							if (isPromise(src)) {
								src.then(function (s) {
									_this84._src = s;
									_this84._loadImage(s);
								});
							} else {
								_this84._loadImage(src);
							}
							return _this84;
						}

						_createClass(InlineImage, [{
							key: '_loadImage',
							value: function _loadImage(src) {
								var _this85 = this;

								var img = this._inlineImg = getCacheOrLoad('InlineImage', 50, src);
								if (isPromise(img)) {
									img.then(function (i) {
										_this85._loaded = true;
										_this85._inlineImg = i;

										_this85._onloaded.forEach(function (fn) {
											return fn();
										});
									});
								} else {
									this._loaded = true;
								}
							}
						}, {
							key: 'width',
							value: function width(_ref54) {
								var ctx = _ref54.ctx;

								return this._width || (this._loaded ? this._inlineImg.width : 0);
							}
						}, {
							key: 'font',
							value: function font() {
								return null;
							}
						}, {
							key: 'color',
							value: function color() {
								return null;
							}
						}, {
							key: 'canDraw',
							value: function canDraw() {
								return this._loaded;
							}
						}, {
							key: 'onReady',
							value: function onReady(callback) {
								if (isPromise(this._src) || isPromise(this._inlineImg)) {
									this._onloaded.push(function () {
										return callback();
									});
								}
							}
						}, {
							key: 'draw',
							value: function draw(_ref55) {
								var ctx = _ref55.ctx,
								    canvashelper = _ref55.canvashelper,
								    rect = _ref55.rect,
								    offset = _ref55.offset,
								    offsetLeft = _ref55.offsetLeft,
								    offsetRight = _ref55.offsetRight,
								    offsetTop = _ref55.offsetTop,
								    offsetBottom = _ref55.offsetBottom;

								var img = this._inlineImg;
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
						}]);

						return InlineImage;
					}(Inline);

					module.exports = InlineImage;

					/***/
				},

				/***/"./element/InlinePath2D.js":
				/*!*********************************!*\
      !*** ./element/InlinePath2D.js ***!
      \*********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function elementInlinePath2DJs(module, exports, __webpack_require__) {

					"use strict";

					var Inline = __webpack_require__( /*! ./Inline */"./element/Inline.js");

					var _webpack_require__54 = __webpack_require__( /*! ../internal/canvases */"./internal/canvases.js"),
					    calcStartPosition = _webpack_require__54.calcStartPosition;

					var path2DManager = __webpack_require__( /*! ../internal/path2DManager */"./internal/path2DManager.js");

					var InlinePath2D = function (_Inline4) {
						_inherits(InlinePath2D, _Inline4);

						function InlinePath2D(_ref56) {
							var path = _ref56.path,
							    width = _ref56.width,
							    height = _ref56.height,
							    color = _ref56.color;

							_classCallCheck(this, InlinePath2D);

							// このタイミングでないとIEでPath2Dのpolyfillが反映されない
							var _this86 = _possibleConstructorReturn(this, (InlinePath2D.__proto__ || Object.getPrototypeOf(InlinePath2D)).call(this));

							_this86._path = new path2DManager.Path2D(path);
							_this86._width = width;
							_this86._height = height;
							_this86._color = color;
							return _this86;
						}

						_createClass(InlinePath2D, [{
							key: 'width',
							value: function width(_ref57) {
								var ctx = _ref57.ctx;

								return this._width;
							}
						}, {
							key: 'font',
							value: function font() {
								return null;
							}
						}, {
							key: 'color',
							value: function color() {
								return this._color;
							}
						}, {
							key: 'canDraw',
							value: function canDraw() {
								return true;
							}
						}, {
							key: 'onReady',
							value: function onReady(callback) {}
						}, {
							key: 'draw',
							value: function draw(_ref58) {
								var ctx = _ref58.ctx,
								    canvashelper = _ref58.canvashelper,
								    rect = _ref58.rect,
								    offset = _ref58.offset,
								    offsetLeft = _ref58.offsetLeft,
								    offsetRight = _ref58.offsetRight,
								    offsetTop = _ref58.offsetTop,
								    offsetBottom = _ref58.offsetBottom;

								offset++;
								var padding = {
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
									var pos = calcStartPosition(ctx, rect, this._width, this._height, {
										offset: offset,
										padding: padding
									});
									ctx.translate(pos.x, pos.y);
									ctx.fill(this._path);
								} finally {
									ctx.restore();
								}
							}
						}]);

						return InlinePath2D;
					}(Inline);

					module.exports = InlinePath2D;

					/***/
				},

				/***/"./element/InlineSvg.js":
				/*!******************************!*\
      !*** ./element/InlineSvg.js ***!
      \******************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function elementInlineSvgJs(module, exports, __webpack_require__) {

					"use strict";

					var InlineImage = __webpack_require__( /*! ./InlineImage */"./element/InlineImage.js");

					var _webpack_require__55 = __webpack_require__( /*! ../internal/utils */"./internal/utils.js"),
					    then = _webpack_require__55.then;

					function buildSvgDataUrl(svg) {
						var data = typeof svg === 'string' ? svg : new XMLSerializer().serializeToString(svg);
						var url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(data); //svgデータをbase64に変換
						return url;
					}
					function getSvgElement(svg) {
						if (typeof svg === 'string') {
							var parser = new DOMParser();
							return parser.parseFromString(svg, 'image/svg+xml');
						} else {
							return svg;
						}
					}

					var InlineSvg = function (_InlineImage) {
						_inherits(InlineSvg, _InlineImage);

						function InlineSvg(_ref59) {
							var svg = _ref59.svg,
							    width = _ref59.width,
							    height = _ref59.height,
							    imageLeft = _ref59.imageLeft,
							    imageTop = _ref59.imageTop,
							    imageWidth = _ref59.imageWidth,
							    imageHeight = _ref59.imageHeight;

							_classCallCheck(this, InlineSvg);

							var svgElem = then(svg, getSvgElement);
							var elmWidth = svgElem.getAttribute ? svgElem.getAttribute('width') : null;
							var elmHeight = svgElem.getAttribute ? svgElem.getAttribute('height') : null;
							return _possibleConstructorReturn(this, (InlineSvg.__proto__ || Object.getPrototypeOf(InlineSvg)).call(this, {
								src: then(svg, buildSvgDataUrl),
								width: width || elmWidth,
								height: height || elmHeight,
								imageWidth: elmWidth,
								imageHeight: elmHeight
							}));
						}

						return InlineSvg;
					}(InlineImage);

					module.exports = InlineSvg;

					/***/
				},

				/***/"./element/inlines.js":
				/*!****************************!*\
      !*** ./element/inlines.js ***!
      \****************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function elementInlinesJs(module, exports, __webpack_require__) {

					"use strict";
					/* WEBPACK VAR INJECTION */
					(function (__webpack_provided_Array_dot_isArray) {

						var Inline = __webpack_require__( /*! ./Inline */"./element/Inline.js");
						var InlineIcon = __webpack_require__( /*! ./InlineIcon */"./element/InlineIcon.js");
						var InlineImage = __webpack_require__( /*! ./InlineImage */"./element/InlineImage.js");
						var InlineSvg = __webpack_require__( /*! ./InlineSvg */"./element/InlineSvg.js");
						var InlineDrawer = __webpack_require__( /*! ./InlineDrawer */"./element/InlineDrawer.js");
						var InlinePath2D = __webpack_require__( /*! ./InlinePath2D */"./element/InlinePath2D.js");

						var _webpack_require__56 = __webpack_require__( /*! ../internal/utils */"./internal/utils.js"),
						    isDef = _webpack_require__56.isDef;

						var _webpack_require__57 = __webpack_require__( /*! ../internal/canvases */"./internal/canvases.js"),
						    calcStartPosition = _webpack_require__57.calcStartPosition;

						var icons = __webpack_require__( /*! ../icons */"./icons.js");
						var path2DManager = __webpack_require__( /*! ../internal/path2DManager */"./internal/path2DManager.js");

						function drawRegisteredIcon(ctx, icon, drawWidth, drawHeight, left, top, width, height) {
							var _ref60 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : {},
							    _ref60$offset = _ref60.offset,
							    offset = _ref60$offset === undefined ? 2 : _ref60$offset,
							    padding = _ref60.padding;

							var rect = {
								left: left,
								top: top,
								width: width,
								height: height,
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
								var pos = calcStartPosition(ctx, rect, drawWidth, drawHeight, {
									offset: offset,
									padding: padding
								});
								path2DManager.fill(icon, ctx, pos.x, pos.y, drawWidth, drawHeight);
							} finally {
								ctx.restore();
							}
						}

						module.exports = {
							iconOf: function iconOf(icon) {
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
								var regedIcons = icons.get();
								if (icon.name && regedIcons[icon.name]) {
									var regedIcon = regedIcons[icon.name];
									var width = icon.width || Math.max(regedIcon.width, regedIcon.height);
									return new InlineDrawer({
										draw: function draw(_ref61) {
											var ctx = _ref61.ctx,
											    canvashelper = _ref61.canvashelper,
											    rect = _ref61.rect,
											    offset = _ref61.offset,
											    offsetLeft = _ref61.offsetLeft,
											    offsetRight = _ref61.offsetRight,
											    offsetTop = _ref61.offsetTop,
											    offsetBottom = _ref61.offsetBottom;

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

										width: width,
										height: width,
										color: icon.color
									});
								}
								return new InlineIcon(icon);
							},
							of: function of(content) {
								if (!isDef(content)) {
									return null;
								}
								if (content instanceof Inline) {
									return content;
								}
								return new Inline(content);
							},
							buildInlines: function buildInlines(icons, inline) {
								var _this88 = this;

								var result = [];
								if (icons) {
									result.push.apply(result, _toConsumableArray(icons.map(function (icon) {
										return _this88.iconOf(icon);
									}).filter(function (e) {
										return !!e;
									})));
								}
								if (__webpack_provided_Array_dot_isArray(inline) && inline.filter(function (il) {
									return il instanceof Inline;
								}).length) {
									result.push.apply(result, _toConsumableArray(inline.map(function (il) {
										return _this88.of(il);
									}).filter(function (e) {
										return !!e;
									})));
								} else {
									var il = this.of(inline);
									if (il) {
										result.push(il);
									}
								}
								return result;
							}
						};
						/* WEBPACK VAR INJECTION */
					}).call(this, __webpack_require__( /*! @/internal/com.js */"./internal/com.js")["Array_isArray"]);

					/***/
				},

				/***/"./header/style.js":
				/*!*************************!*\
      !*** ./header/style.js ***!
      \*************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function headerStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var BaseStyle = __webpack_require__( /*! ./style/BaseStyle */"./header/style/BaseStyle.js");
						var Style = __webpack_require__( /*! ./style/Style */"./header/style/Style.js");

						var style = {
							get BaseStyle() {
								return BaseStyle;
							},
							get Style() {
								return Style;
							},
							of: function of(columnStyle, StyleClass) {
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

					/***/
				},

				/***/"./header/style/BaseStyle.js":
				/*!***********************************!*\
      !*** ./header/style/BaseStyle.js ***!
      \***********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function headerStyleBaseStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var EventTarget = __webpack_require__( /*! ../../core/EventTarget */"./core/EventTarget.js");

						var EVENT_TYPE = {
							CHANGE_STYLE: 'change_style'
						};

						var defaultStyle = void 0;

						var BaseStyle = function (_EventTarget6) {
							_inherits(BaseStyle, _EventTarget6);

							_createClass(BaseStyle, null, [{
								key: 'EVENT_TYPE',
								get: function get() {
									return EVENT_TYPE;
								}
							}, {
								key: 'DEFAULT',
								get: function get() {
									return defaultStyle ? defaultStyle : defaultStyle = new BaseStyle();
								}
							}]);

							function BaseStyle() {
								var _ref62 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
								    _ref62$textAlign = _ref62.textAlign,
								    textAlign = _ref62$textAlign === undefined ? 'left' : _ref62$textAlign,
								    _ref62$textBaseline = _ref62.textBaseline,
								    textBaseline = _ref62$textBaseline === undefined ? 'middle' : _ref62$textBaseline,
								    bgColor = _ref62.bgColor;

								_classCallCheck(this, BaseStyle);

								var _this89 = _possibleConstructorReturn(this, (BaseStyle.__proto__ || Object.getPrototypeOf(BaseStyle)).call(this));

								_this89._textAlign = textAlign;
								_this89._textBaseline = textBaseline;
								_this89._bgColor = bgColor;
								return _this89;
							}

							_createClass(BaseStyle, [{
								key: 'doChangeStyle',
								value: function doChangeStyle() {
									this.fireListeners(EVENT_TYPE.CHANGE_STYLE);
								}
							}, {
								key: 'clone',
								value: function clone() {
									return new BaseStyle(this);
								}
							}, {
								key: 'textAlign',
								get: function get() {
									return this._textAlign;
								},
								set: function set(textAlign) {
									this._textAlign = textAlign;
									this.doChangeStyle();
								}
							}, {
								key: 'textBaseline',
								get: function get() {
									return this._textBaseline;
								},
								set: function set(textBaseline) {
									this._textBaseline = textBaseline;
									this.doChangeStyle();
								}
							}, {
								key: 'bgColor',
								get: function get() {
									return this._bgColor;
								},
								set: function set(bgColor) {
									this._bgColor = bgColor;
									this.doChangeStyle();
								}
							}]);

							return BaseStyle;
						}(EventTarget);

						module.exports = BaseStyle;
					}

					/***/
				},

				/***/"./header/style/Style.js":
				/*!*******************************!*\
      !*** ./header/style/Style.js ***!
      \*******************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function headerStyleStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var BaseStyle = __webpack_require__( /*! ./BaseStyle */"./header/style/BaseStyle.js");
						var defaultStyle = void 0;

						var Style = function (_BaseStyle3) {
							_inherits(Style, _BaseStyle3);

							_createClass(Style, null, [{
								key: 'DEFAULT',
								get: function get() {
									return defaultStyle ? defaultStyle : defaultStyle = new Style();
								}
							}]);

							function Style() {
								var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

								_classCallCheck(this, Style);

								var _this90 = _possibleConstructorReturn(this, (Style.__proto__ || Object.getPrototypeOf(Style)).call(this, style));

								_this90._color = style.color;
								return _this90;
							}

							_createClass(Style, [{
								key: 'clone',
								value: function clone() {
									return new Style(this);
								}
							}, {
								key: 'color',
								get: function get() {
									return this._color;
								},
								set: function set(color) {
									this._color = color;
									this.doChangeStyle();
								}
							}]);

							return Style;
						}(BaseStyle);

						module.exports = Style;
					}

					/***/
				},

				/***/"./header/type.js":
				/*!************************!*\
      !*** ./header/type.js ***!
      \************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function headerTypeJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var Header = __webpack_require__( /*! ./type/Header */"./header/type/Header.js");
						var SortHeader = __webpack_require__( /*! ./type/SortHeader */"./header/type/SortHeader.js");

						var type = {
							create: function create(headerCell) {
								if (headerCell.sort) {
									return new SortHeader(headerCell);
								}
								return new Header(headerCell);
							}
						};
						module.exports = type;
					}

					/***/
				},

				/***/"./header/type/BaseHeader.js":
				/*!***********************************!*\
      !*** ./header/type/BaseHeader.js ***!
      \***********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function headerTypeBaseHeaderJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var styleContents = __webpack_require__( /*! ../style */"./header/style.js");
						var Style = styleContents.Style;

						var BaseHeader = function () {
							function BaseHeader(headerCell) {
								_classCallCheck(this, BaseHeader);

								this._headerCell = headerCell;
								this.onDrawCell = this.onDrawCell.bind(this); //スコープを固定させる
							}

							_createClass(BaseHeader, [{
								key: 'onDrawCell',
								value: function onDrawCell(cellValue, info, context, grid) {
									var style = info.style,
									    drawCellBase = info.drawCellBase;

									delete info.getRecord;
									delete info.style;
									var helper = grid.getGridCanvasHelper();
									drawCellBase();
									//文字描画
									this.drawInternal(cellValue, context, styleContents.of(style, this.StyleClass), helper, grid, info);
								}
							}, {
								key: 'drawInternal',
								value: function drawInternal(value, context, style, helper, grid, info) {}
							}, {
								key: 'bindGridEvent',
								value: function bindGridEvent(grid) {
									return [];
								}
							}, {
								key: 'StyleClass',
								get: function get() {
									return Style;
								}
							}]);

							return BaseHeader;
						}();

						module.exports = BaseHeader;
					}

					/***/
				},

				/***/"./header/type/Header.js":
				/*!*******************************!*\
      !*** ./header/type/Header.js ***!
      \*******************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function headerTypeHeaderJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var styleContents = __webpack_require__( /*! ../style */"./header/style.js");
						var Style = styleContents.Style;

						var BaseHeader = __webpack_require__( /*! ./BaseHeader */"./header/type/BaseHeader.js");

						var Header = function (_BaseHeader) {
							_inherits(Header, _BaseHeader);

							function Header() {
								_classCallCheck(this, Header);

								return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
							}

							_createClass(Header, [{
								key: 'drawInternal',
								value: function drawInternal(value, context, style, helper, grid, _ref63) {
									var drawCellBase = _ref63.drawCellBase;
									var textAlign = style.textAlign,
									    textBaseline = style.textBaseline,
									    color = style.color,
									    font = style.font,
									    bgColor = style.bgColor;


									if (bgColor) {
										drawCellBase({
											bgColor: bgColor
										});
									}

									helper.text(value, context, {
										textAlign: textAlign,
										textBaseline: textBaseline,
										color: color,
										font: font
									});
								}
							}, {
								key: 'bindGridEvent',
								value: function bindGridEvent(grid) {
									return [];
								}
							}, {
								key: 'StyleClass',
								get: function get() {
									return Style;
								}
							}]);

							return Header;
						}(BaseHeader);

						module.exports = Header;
					}

					/***/
				},

				/***/"./header/type/SortHeader.js":
				/*!***********************************!*\
      !*** ./header/type/SortHeader.js ***!
      \***********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function headerTypeSortHeaderJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var styleContents = __webpack_require__( /*! ../style */"./header/style.js");
						var Style = styleContents.Style;

						var BaseHeader = __webpack_require__( /*! ./BaseHeader */"./header/type/BaseHeader.js");

						var _webpack_require__58 = __webpack_require__( /*! ../../internal/utils */"./internal/utils.js"),
						    isDef = _webpack_require__58.isDef;

						var _webpack_require__59 = __webpack_require__( /*! ../../core/DrawGrid */"./core/DrawGrid.js"),
						    _webpack_require__59$ = _webpack_require__59.EVENT_TYPE,
						    CLICK_CELL = _webpack_require__59$.CLICK_CELL,
						    MOUSEOVER_CELL = _webpack_require__59$.MOUSEOVER_CELL,
						    MOUSEOUT_CELL = _webpack_require__59$.MOUSEOUT_CELL,
						    MOUSEMOVE_CELL = _webpack_require__59$.MOUSEMOVE_CELL;

						var SortHeader = function (_BaseHeader2) {
							_inherits(SortHeader, _BaseHeader2);

							function SortHeader(headerCell) {
								_classCallCheck(this, SortHeader);

								var _this92 = _possibleConstructorReturn(this, (SortHeader.__proto__ || Object.getPrototypeOf(SortHeader)).call(this, headerCell));

								_this92._sort = headerCell.sort;
								_this92._range = headerCell.range;
								return _this92;
							}

							_createClass(SortHeader, [{
								key: 'drawInternal',
								value: function drawInternal(value, context, style, helper, grid, _ref64) {
									var drawCellBase = _ref64.drawCellBase;
									var textAlign = style.textAlign,
									    _style$textBaseline2 = style.textBaseline,
									    textBaseline = _style$textBaseline2 === undefined ? 'middle' : _style$textBaseline2,
									    color = style.color,
									    bgColor = style.bgColor,
									    font = style.font;


									if (bgColor) {
										drawCellBase({
											bgColor: bgColor
										});
									}

									var state = grid.sortState;
									var order = undefined;
									if (this._range.isCellInRange(state.col, this._range.startRow)) {
										order = state.order;
									}

									var ctx = context.getContext();
									var arrowSize = ctx.measureText('あ').width * 1.2;

									helper.text(value, context, {
										textAlign: textAlign,
										textBaseline: textBaseline,
										color: color,
										font: font,
										icons: [{
											name: isDef(order) ? order === 'asc' ? 'arrow_downward' : 'arrow_upward' : null,
											width: arrowSize,
											color: 'rgba(0, 0, 0, 0.38)'
										}]
									});
								}
							}, {
								key: '_executeSort',
								value: function _executeSort(newState, grid) {
									if (typeof this._sort === 'function') {
										this._sort(newState.order, newState.col, grid);
									} else {
										grid.dataSource.sort(grid.getField(newState.col), newState.order);
									}
								}
							}, {
								key: 'bindGridEvent',
								value: function bindGridEvent(grid) {
									var _this93 = this;

									return [grid.listen(CLICK_CELL, function (e) {
										if (!_this93._range.isCellInRange(e.col, e.row)) {
											return;
										}
										var state = grid.sortState;
										var newState = void 0;
										if (_this93._range.isCellInRange(state.col, e.row)) {
											newState = {
												col: _this93._range.startCol,
												order: state.order === 'asc' ? 'desc' : 'asc'
											};
										} else {
											newState = {
												col: _this93._range.startCol,
												order: 'asc'
											};
										}
										grid.sortState = newState;
										_this93._executeSort(newState, grid);
										grid.invalidateGridRect(0, 0, grid.colCount - 1, grid.rowCount - 1);
									}),
									// mouse move
									grid.listen(MOUSEOVER_CELL, function (e) {
										if (!_this93._range.isCellInRange(e.col, e.row)) {
											return;
										}
										grid.getElement().style.cursor = 'pointer';
									}),
									//横からMOUSEENTERした場合、'col-resize'の処理と競合するのでmoveを監視して処理する
									grid.listen(MOUSEMOVE_CELL, function (e) {
										if (!_this93._range.isCellInRange(e.col, e.row)) {
											return;
										}
										if (!grid.getElement().style.cursor) {
											grid.getElement().style.cursor = 'pointer';
										}
									}), grid.listen(MOUSEOUT_CELL, function (e) {
										if (!_this93._range.isCellInRange(e.col, e.row)) {
											return;
										}
										grid.getElement().style.cursor = '';
									})];
								}
							}, {
								key: 'StyleClass',
								get: function get() {
									return Style;
								}
							}]);

							return SortHeader;
						}(BaseHeader);

						module.exports = SortHeader;
					}

					/***/
				},

				/***/"./icons.js":
				/*!******************!*\
      !*** ./icons.js ***!
      \******************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function iconsJs(module, exports, __webpack_require__) {

					"use strict";
					/*eslint-disable camelcase*/

					var _webpack_require__60 = __webpack_require__( /*! ./internal/utils */"./internal/utils.js"),
					    extend = _webpack_require__60.extend;

					var plugins = __webpack_require__( /*! ./plugins/icons */"./plugins/icons.js");
					var builtins = {
						get arrow_upward() {
							return __webpack_require__( /*! ../../webpack-loader/svg-to-icon-js-loader!material-design-icons/navigation/svg/production/ic_arrow_upward_48px.svg */"../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/navigation/svg/production/ic_arrow_upward_48px.svg");
						},
						get arrow_downward() {
							return __webpack_require__( /*! ../../webpack-loader/svg-to-icon-js-loader!material-design-icons/navigation/svg/production/ic_arrow_downward_48px.svg */"../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/navigation/svg/production/ic_arrow_downward_48px.svg");
						},
						get edit() {
							return __webpack_require__( /*! ../../webpack-loader/svg-to-icon-js-loader!material-design-icons/image/svg/production/ic_edit_48px.svg */"../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/image/svg/production/ic_edit_48px.svg");
						},
						get add() {
							return __webpack_require__( /*! ../../webpack-loader/svg-to-icon-js-loader!material-design-icons/content/svg/production/ic_add_48px.svg */"../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/content/svg/production/ic_add_48px.svg");
						},
						get star() {
							return __webpack_require__( /*! ../../webpack-loader/svg-to-icon-js-loader!material-design-icons/toggle/svg/production/ic_star_24px.svg */"../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/toggle/svg/production/ic_star_24px.svg");
						},
						get star_border() {
							return __webpack_require__( /*! ../../webpack-loader/svg-to-icon-js-loader!material-design-icons/toggle/svg/production/ic_star_border_24px.svg */"../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/toggle/svg/production/ic_star_border_24px.svg");
						},
						get star_half() {
							return __webpack_require__( /*! ../../webpack-loader/svg-to-icon-js-loader!material-design-icons/toggle/svg/production/ic_star_half_24px.svg */"../../webpack-loader/svg-to-icon-js-loader.js!../../node_modules/material-design-icons/toggle/svg/production/ic_star_half_24px.svg");
						}
					};

					module.exports = {
						get: function get() {
							return extend(builtins, plugins);
						}
					};

					/***/
				},

				/***/"./internal/EventHandler.js":
				/*!**********************************!*\
      !*** ./internal/EventHandler.js ***!
      \**********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalEventHandlerJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var _webpack_require__61 = __webpack_require__( /*! ./utils */"./internal/utils.js"),
						    each = _webpack_require__61.obj.each;

						var nextId = 1;

						var EventHandler = function () {
							function EventHandler() {
								_classCallCheck(this, EventHandler);

								this._listeners = {};
							}

							_createClass(EventHandler, [{
								key: 'on',
								value: function on(target, type, listener) {
									for (var _len4 = arguments.length, options = Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
										options[_key4 - 3] = arguments[_key4];
									}

									if (target.addEventListener) {
										target.addEventListener.apply(target, [type, listener].concat(options));
									}
									var obj = {
										target: target, type: type, listener: listener, options: options
									};
									var id = nextId++;
									this._listeners[id] = obj;
									return id;
								}
							}, {
								key: 'tryWithOffEvents',
								value: function tryWithOffEvents(target, type, call) {
									var list = [];
									try {
										each(this._listeners, function (obj) {
											if (obj.target === target && obj.type === type) {
												if (obj.target.removeEventListener) {
													var _obj$target;

													(_obj$target = obj.target).removeEventListener.apply(_obj$target, [obj.type, obj.listener].concat(_toConsumableArray(obj.options)));
												}
												list.push(obj);
											}
										});
										call();
									} finally {
										list.forEach(function (obj) {
											if (obj.target.addEventListener) {
												var _obj$target2;

												(_obj$target2 = obj.target).addEventListener.apply(_obj$target2, [obj.type, obj.listener].concat(_toConsumableArray(obj.options)));
											}
										});
									}
								}
							}, {
								key: 'off',
								value: function off(id) {
									if (!id) {
										return;
									}
									var obj = this._listeners[id];
									if (!obj) {
										return;
									}
									delete this._listeners[id];
									if (obj.target.removeEventListener) {
										var _obj$target3;

										(_obj$target3 = obj.target).removeEventListener.apply(_obj$target3, [obj.type, obj.listener].concat(_toConsumableArray(obj.options)));
									}
								}
							}, {
								key: 'fire',
								value: function fire(target, type) {
									for (var _len5 = arguments.length, args = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
										args[_key5 - 2] = arguments[_key5];
									}

									each(this._listeners, function (obj) {
										if (obj.target === target && obj.type === type) {
											var _obj$listener;

											(_obj$listener = obj.listener).call.apply(_obj$listener, [obj.target].concat(args));
										}
									});
								}
							}, {
								key: 'hasListener',
								value: function hasListener(target, type) {
									var result = false;
									each(this._listeners, function (obj) {
										if (obj.target === target && obj.type === type) {
											result = true;
										}
									});
									return result;
								}
							}, {
								key: 'clear',
								value: function clear() {
									each(this._listeners, function (obj) {
										if (obj.target.removeEventListener) {
											var _obj$target4;

											(_obj$target4 = obj.target).removeEventListener.apply(_obj$target4, [obj.type, obj.listener].concat(_toConsumableArray(obj.options)));
										}
									});
									this._listeners = {};
								}
							}, {
								key: 'dispose',
								value: function dispose() {
									this.clear();
									this._listeners = null;
								}
							}]);

							return EventHandler;
						}();

						module.exports = EventHandler;
					}

					/***/
				},

				/***/"./internal/LRUCache.js":
				/*!******************************!*\
      !*** ./internal/LRUCache.js ***!
      \******************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalLRUCacheJs(module, exports, __webpack_require__) {

					"use strict";

					var LRUCache = function () {
						function LRUCache(cacheSize) {
							_classCallCheck(this, LRUCache);

							this._list = [];
							this._map = {};
							this._cacheSize = cacheSize || 50;
						}

						_createClass(LRUCache, [{
							key: 'get',
							value: function get(key) {
								var val = this._map[key];
								if (val) {
									var idx = this._list.indexOf(key);
									this._list.splice(idx, 1);
									this._list.push(key);
								}
								return val;
							}
						}, {
							key: 'put',
							value: function put(key, value) {
								if (this._map[key]) {
									var idx = this._list.indexOf(key);
									this._list.splice(idx, 1);
								}
								this._map[key] = value;
								this._list.push(key);
								if (this._list.length > this._cacheSize) {
									var remKey = this._list.shift();
									delete this._map[remKey];
								}
							}
						}]);

						return LRUCache;
					}();

					module.exports = LRUCache;

					/***/
				},

				/***/"./internal/NumberMap.js":
				/*!*******************************!*\
      !*** ./internal/NumberMap.js ***!
      \*******************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalNumberMapJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var indexFirst = function indexFirst(ary, elm) {
							var low = 0;
							var high = ary.length - 1;
							while (low <= high) {
								var i = Math.floor((low + high) / 2);
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

						var NumberMap = function () {
							function NumberMap() {
								_classCallCheck(this, NumberMap);

								this._keys = [];
								this._vals = {};
								this._sorted = false;
							}

							_createClass(NumberMap, [{
								key: 'put',
								value: function put(key, value) {
									if (!(key in this._vals)) {
										this._keys.push(key);
										this._sorted = false;
									}
									this._vals[key] = value;
								}
							}, {
								key: 'get',
								value: function get(key) {
									return this._vals[key];
								}
							}, {
								key: 'eachAll',
								value: function eachAll(fn) {
									var _this94 = this;

									this._keys.forEach(function (key) {
										fn(_this94.get(key), key);
									});
								}
							}, {
								key: 'each',
								value: function each(keyFrom, keyTo, fn) {
									var keys = this._keys;
									var length = keys.length;

									if (!this._sorted) {
										keys.sort(function (a, b) {
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

									for (var i = indexFirst(keys, keyFrom); i < length; i++) {
										var key = keys[i];
										if (keyFrom <= key && key <= keyTo) {
											fn(this.get(key), key);
										} else if (keyTo < key) {
											return;
										}
									}
								}
							}]);

							return NumberMap;
						}();

						module.exports = NumberMap;
					}

					/***/
				},

				/***/"./internal/Rect.js":
				/*!**************************!*\
      !*** ./internal/Rect.js ***!
      \**************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalRectJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var Rect = function () {
							function Rect(left, top, width, height) {
								_classCallCheck(this, Rect);

								this._left = left;
								this._top = top;
								this._width = width;
								this._height = height;
							}

							_createClass(Rect, [{
								key: 'offsetLeft',
								value: function offsetLeft(offset) {
									this._left += offset;
									this._right = undefined;
								}
							}, {
								key: 'offsetTop',
								value: function offsetTop(offset) {
									this._top += offset;
									this._bottom = undefined;
								}
							}, {
								key: 'copy',
								value: function copy() {
									return new Rect(this.left, this.top, this.width, this.height);
								}
							}, {
								key: 'intersection',
								value: function intersection(rect) {
									var x0 = Math.max(this.left, rect.left);
									var x1 = Math.min(this.left + this.width, rect.left + rect.width);
									if (x0 <= x1) {
										var y0 = Math.max(this.top, rect.top);
										var y1 = Math.min(this.top + this.height, rect.top + rect.height);
										if (y0 <= y1) {
											return Rect.bounds(x0, y0, x1, y1);
										}
									}
									return null;
								}
							}, {
								key: 'contains',
								value: function contains(another) {
									return this.left <= another.left && this.left + this.width >= another.left + another.width && this.top <= another.top && this.top + this.height >= another.top + another.height;
								}
							}, {
								key: 'inPoint',
								value: function inPoint(x, y) {
									return this.left <= x && this.left + this.width >= x && this.top <= y && this.top + this.height >= y;
								}
							}, {
								key: 'left',
								get: function get() {
									return this._left;
								},
								set: function set(left) {
									var right = this.right;

									this._left = left;
									this.right = right;
								}
							}, {
								key: 'top',
								get: function get() {
									return this._top;
								},
								set: function set(top) {
									var bottom = this.bottom;

									this._top = top;
									this.bottom = bottom;
								}
							}, {
								key: 'width',
								get: function get() {
									return this._width;
								},
								set: function set(width) {
									this._width = width;
									this._right = undefined;
								}
							}, {
								key: 'height',
								get: function get() {
									return this._height;
								},
								set: function set(height) {
									this._height = height;
									this._bottom = undefined;
								}
							}, {
								key: 'right',
								get: function get() {
									return this._right !== undefined ? this._right : this._right = this.left + this.width;
								},
								set: function set(right) {
									this._right = right;
									this.width = right - this.left;
								}
							}, {
								key: 'bottom',
								get: function get() {
									return this._bottom !== undefined ? this._bottom : this._bottom = this.top + this.height;
								},
								set: function set(bottom) {
									this._bottom = bottom;
									this.height = bottom - this.top;
								}
							}], [{
								key: 'bounds',
								value: function bounds(left, top, right, bottom) {
									return new Rect(left, top, right - left, bottom - top);
								}
							}, {
								key: 'max',
								value: function max(rect1, rect2) {
									return Rect.bounds(Math.min(rect1.left, rect2.left), Math.min(rect1.top, rect2.top), Math.max(rect1.right, rect2.right), Math.max(rect1.bottom, rect2.bottom));
								}
							}]);

							return Rect;
						}();

						module.exports = Rect;
					}

					/***/
				},

				/***/"./internal/Scrollable.js":
				/*!********************************!*\
      !*** ./internal/Scrollable.js ***!
      \********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalScrollableJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var _update = function _update(scrollable) {
							var domHeight = void 0;
							if (scrollable._height > MAX_SCROLL) {
								var sbSize = style.getScrollBarSize();
								var offsetHeight = scrollable._scrollable.offsetHeight;
								var vScrollRange = MAX_SCROLL - offsetHeight + sbSize;
								var rScrollRange = scrollable._height - offsetHeight + sbSize;
								scrollable._p = vScrollRange / rScrollRange;
								domHeight = MAX_SCROLL;
							} else {
								scrollable._p = 1;
								domHeight = scrollable._height;
							}

							scrollable._endPointElement.style.top = domHeight.toFixed() + 'px';
							scrollable._endPointElement.style.left = scrollable._width.toFixed() + 'px';
						};

						var EventHandler = __webpack_require__( /*! ./EventHandler */"./internal/EventHandler.js");
						var style = __webpack_require__( /*! ./style */"./internal/style.js");

						var _webpack_require__62 = __webpack_require__( /*! ./utils */"./internal/utils.js"),
						    browser = _webpack_require__62.browser;

						var MAX_SCROLL = browser.heightLimit - 1000;

						var Scrollable = function () {
							function Scrollable() {
								_classCallCheck(this, Scrollable);

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

							_createClass(Scrollable, [{
								key: 'calcTop',
								value: function calcTop(top) {
									var relativeTop = top - this.scrollTop;
									return this._scrollable.scrollTop + relativeTop;
								}
							}, {
								key: 'getElement',
								value: function getElement() {
									return this._scrollable;
								}
							}, {
								key: 'setScrollSize',
								value: function setScrollSize(width, height) {
									this._width = width;
									this._height = height;
									_update(this);
								}
							}, {
								key: 'onScroll',
								value: function onScroll(fn) {
									this._handler.on(this._scrollable, 'scroll', fn);
								}
							}, {
								key: 'dispose',
								value: function dispose() {
									this._handler.dispose();
								}
							}, {
								key: 'scrollWidth',
								get: function get() {
									return this._width;
								},
								set: function set(width) {
									this._width = width;
									_update(this);
								}
							}, {
								key: 'scrollHeight',
								get: function get() {
									return this._height;
								},
								set: function set(height) {
									this._height = height;
									_update(this);
								}
							}, {
								key: 'scrollLeft',
								get: function get() {
									return Math.ceil(this._scrollable.scrollLeft);
								},
								set: function set(scrollLeft) {
									this._scrollable.scrollLeft = scrollLeft;
								}
							}, {
								key: 'scrollTop',
								get: function get() {
									return Math.ceil(this._scrollable.scrollTop / this._p);
								},
								set: function set(scrollTop) {
									this._scrollable.scrollTop = scrollTop * this._p;
								}
							}]);

							return Scrollable;
						}();

						module.exports = Scrollable;
					}

					/***/
				},

				/***/"./internal/animate.js":
				/*!*****************************!*\
      !*** ./internal/animate.js ***!
      \*****************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalAnimateJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var cubicBezier = function cubicBezier(x2, y2, x3, y3) {
							var step = void 0;
							var err = 0.0001;

							x2 *= 3;
							y2 *= 3;
							x3 *= 3;
							y3 *= 3;

							return function (t) {
								var p = void 0,
								    a = void 0,
								    b = void 0,
								    c = void 0,
								    d = void 0,
								    x = void 0,
								    s = void 0;
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
						};

						var now = function now() {
							return Date.now();
						};
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


						var EASINGS = {
							linear: function linear(p) {
								return p;
							},

							easeIn: cubicBezier(0.420, 0.000, 1.000, 1.000),
							easeOut: cubicBezier(0.000, 0.000, 0.580, 1.000),
							easeInOut: cubicBezier(0.420, 0.000, 0.580, 1.000)
						};

						var raf = window.requestAnimationFrame || setTimeout;

						module.exports = function (duration, step, easing) {
							var startedAt = now();

							if (!easing) {
								easing = EASINGS.easeInOut;
							} else if (typeof easing === 'string') {
								easing = EASINGS[easing];
							}

							var canceledFlg = false;
							var createAnim = function createAnim(resolve, reject) {
								var anim = function anim() {
									var point = now() - startedAt;
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
							var cancel = function cancel() {
								canceledFlg = true;
							};
							if (window.Promise) {
								var result = new window.Promise(function (resolve, reject) {
									var anim = createAnim(resolve, reject);
									step(0);
									anim();
								});
								result.cancel = cancel;
								return result;
							} else {
								var anim = createAnim(function () {}, function () {});
								step(0);
								anim();
								return {
									cancel: cancel
								};
							}
						};
					}

					/***/
				},

				/***/"./internal/calc.js":
				/*!**************************!*\
      !*** ./internal/calc.js ***!
      \**************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalCalcJs(module, exports, __webpack_require__) {

					"use strict";

					function parse(calcStr) {
						function replacer(match, num, unit) {
							switch (unit) {
								case '%':
									return '(' + num + ' * this.full / 100)';
								case 'em':
									return '(' + num + ' * this.em)';
								case 'px':
									return '(' + num + ')';
								default:
									throw new Error('calc error');
							}
						}
						var script = calcStr.replace(/^calc\((.*)\)$/, '$1').replace(/(\d+)([A-Za-z%]+)/g, replacer).replace(/(\d*\.\d+)([A-Za-z%]+)/g, replacer);
						return {
							eval: function _eval(context) {
								return function () {
									function calc(v) {
										// eslint-disable-line no-unused-vars
										return v;
									}
									return eval(script); // eslint-disable-line no-eval
								}.call(context);
							}
						};
					}
					function _toPx(value, context) {
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
						parse: parse,
						toPx: function toPx(value, context) {
							if (typeof value === 'string') {
								return _toPx(value.trim(), context);
							}
							return value - 0;
						}
					};

					/***/
				},

				/***/"./internal/canvases.js":
				/*!******************************!*\
      !*** ./internal/canvases.js ***!
      \******************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalCanvasesJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var calcBasePosition = function calcBasePosition(ctx, rect) {
							var _ref65 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
							    _ref65$offset = _ref65.offset,
							    offset = _ref65$offset === undefined ? 0 : _ref65$offset,
							    _ref65$padding = _ref65.padding;

							_ref65$padding = _ref65$padding === undefined ? {} : _ref65$padding;
							var _ref65$padding$left = _ref65$padding.left,
							    paddingLeft = _ref65$padding$left === undefined ? 0 : _ref65$padding$left,
							    _ref65$padding$right = _ref65$padding.right,
							    paddingRight = _ref65$padding$right === undefined ? 0 : _ref65$padding$right,
							    _ref65$padding$top = _ref65$padding.top,
							    paddingTop = _ref65$padding$top === undefined ? 0 : _ref65$padding$top,
							    _ref65$padding$bottom = _ref65$padding.bottom,
							    paddingBottom = _ref65$padding$bottom === undefined ? 0 : _ref65$padding$bottom;

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
								offset: offset,
								padding: {
									left: paddingLeft,
									right: paddingRight,
									top: paddingTop,
									bottom: paddingBottom
								}
							});
						};

						var calcStartPosition = function calcStartPosition(ctx, rect, width, height) {
							var _ref66 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
							    _ref66$offset = _ref66.offset,
							    offset = _ref66$offset === undefined ? 0 : _ref66$offset,
							    _ref66$padding = _ref66.padding;

							_ref66$padding = _ref66$padding === undefined ? {} : _ref66$padding;
							var _ref66$padding$left = _ref66$padding.left,
							    paddingLeft = _ref66$padding$left === undefined ? 0 : _ref66$padding$left,
							    _ref66$padding$right = _ref66$padding.right,
							    paddingRight = _ref66$padding$right === undefined ? 0 : _ref66$padding$right,
							    _ref66$padding$top = _ref66$padding.top,
							    paddingTop = _ref66$padding$top === undefined ? 0 : _ref66$padding$top,
							    _ref66$padding$bottom = _ref66$padding.bottom,
							    paddingBottom = _ref66$padding$bottom === undefined ? 0 : _ref66$padding$bottom;

							var textAlign = ctx.textAlign || 'left';
							var textBaseline = ctx.textBaseline || 'middle';
							ctx.textAlign = textAlign;
							ctx.textBaseline = textBaseline;

							var x = rect.left + offset + paddingLeft;
							if (textAlign === 'right' || textAlign === 'end') {
								x = rect.right - width - offset - paddingRight;
							} else if (textAlign === 'center') {
								x = rect.left + (rect.width - width + paddingLeft - paddingRight) / 2;
							}
							var y = rect.top + offset + paddingTop;
							if (textBaseline === 'bottom' || textBaseline === 'alphabetic' || textBaseline === 'ideographic') {
								y = rect.bottom - height - offset - paddingBottom;
							} else if (textBaseline === 'middle') {
								y = rect.top + (rect.height - height + paddingTop - paddingBottom) / 2;
							}
							return { x: x, y: y };
						};

						module.exports = {
							calcBasePosition: calcBasePosition,
							calcStartPosition: calcStartPosition
						};
					}

					/***/
				},

				/***/"./internal/color.js":
				/*!***************************!*\
      !*** ./internal/color.js ***!
      \***************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalColorJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var styleColorToRGB = function styleColorToRGB(color) {
							var dummy = document.createElement('div');
							var style = dummy.style;

							style.color = color;
							style.position = 'fixed';
							style.height = '1px';
							style.width = '1px';
							style.opacity = 0;
							document.body.appendChild(dummy);

							var _document$defaultView = document.defaultView.getComputedStyle(dummy, ''),
							    styleColor = _document$defaultView.color;

							document.body.removeChild(dummy);
							return colorToRGB0(styleColor);
						};

						var hexToNum = function hexToNum(hex) {
							return parseInt(hex, 16);
						};

						var createRGB = function createRGB(r, g, b) {
							var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

							return { r: r, g: g, b: b, a: a };
						};

						var tripleHexToRGB = function tripleHexToRGB(_ref67) {
							var r = _ref67[1],
							    g = _ref67[2],
							    b = _ref67[3];

							return createRGB(hexToNum(r + r), hexToNum(g + g), hexToNum(b + b));
						};

						var sextupleHexToRGB = function sextupleHexToRGB(_ref68) {
							var r1 = _ref68[1],
							    r2 = _ref68[2],
							    g1 = _ref68[3],
							    g2 = _ref68[4],
							    b1 = _ref68[5],
							    b2 = _ref68[6];

							return createRGB(hexToNum(r1 + r2), hexToNum(g1 + g2), hexToNum(b1 + b2));
						};

						var testRGB = function testRGB(_ref69) {
							var r = _ref69.r,
							    g = _ref69.g,
							    b = _ref69.b,
							    a = _ref69.a;

							return 0 <= r && r <= 255 && 0 <= g && g <= 255 && 0 <= b && b <= 255 && 0 <= a && a <= 1;
						};

						var rateToByte = function rateToByte(r) {
							return Math.ceil(r * 255 / 100);
						};

						var colorToRGB0 = function colorToRGB0(color) {
							if (color.match(/^#[0-9a-f]{3}$/i)) {
								return tripleHexToRGB(color);
							}
							if (color.match(/^#[0-9a-f]{6}$/i)) {
								return sextupleHexToRGB(color);
							}
							var ret = color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i);
							if (ret) {
								var rgb = createRGB(ret[1] - 0, ret[2] - 0, ret[3] - 0);
								if (testRGB(rgb)) {
									return rgb;
								}
							}
							ret = color.match(/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d(\.\d)?)\s*\)$/i);
							if (ret) {
								var _rgb = createRGB(ret[1] - 0, ret[2] - 0, ret[3] - 0, ret[4] - 0);
								if (testRGB(_rgb)) {
									return _rgb;
								}
							}
							ret = color.match(/^rgb\(\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d{1,3}(\.\d)?)%\s*\)$/i);
							if (ret) {
								var _rgb2 = createRGB(rateToByte(ret[1]), rateToByte(ret[3]), rateToByte(ret[5]));
								if (testRGB(_rgb2)) {
									return _rgb2;
								}
							}
							ret = color.match(/^rgba\(\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d(\.\d)?)\s*\)$/i);
							if (ret) {
								var _rgb3 = createRGB(rateToByte(ret[1]), rateToByte(ret[3]), rateToByte(ret[5]), ret[7] - 0);
								if (testRGB(_rgb3)) {
									return _rgb3;
								}
							}
							return null;
						};

						var colorToRGB = function colorToRGB(color) {
							if (typeof color !== 'string') {
								return createRGB(0, 0, 0, 0);
							}
							color = color.toLowerCase().trim();
							if (rgbMap[color]) {
								return rgbMap[color];
							}
							return colorToRGB0(color) || (rgbMap[color] = styleColorToRGB(color));
						};

						var rgbMap = {};


						module.exports = {
							colorToRGB: colorToRGB
						};
					}

					/***/
				},

				/***/"./internal/com.js":
				/*!*************************!*\
      !*** ./internal/com.js ***!
      \*************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalComJs(module, exports, __webpack_require__) {

					"use strict";

					module.exports = {
						'Array_isArray': window.Array.isArray
					};

					/***/
				},

				/***/"./internal/dom.js":
				/*!*************************!*\
      !*** ./internal/dom.js ***!
      \*************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalDomJs(module, exports, __webpack_require__) {

					"use strict";
					/* WEBPACK VAR INJECTION */
					(function (__webpack_provided_Array_dot_isArray) {
						var _webpack_require__63 = __webpack_require__( /*! ./utils */"./internal/utils.js"),
						    isDef = _webpack_require__63.isDef;

						function createElement(tagName) {
							var _ref70 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
							    classList = _ref70.classList,
							    text = _ref70.text,
							    html = _ref70.html;

							var element = document.createElement(tagName);
							if (classList) {
								if (__webpack_provided_Array_dot_isArray(classList)) {
									var _element$classList;

									(_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classList));
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
							var c = void 0;
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
							var dom = createElement('div', { html: arg });
							return Array.prototype.slice.call(dom.childNodes);
						}
						function toNodeList(arg) {
							if (window.jQuery && arg instanceof window.jQuery) {
								return Array.prototype.map.call(arg, function (a) {
									return a;
								});
							}
							if (__webpack_provided_Array_dot_isArray(arg)) {
								return arg.map(toNode);
							}
							return [toNode(arg)];
						}

						function appendHtml(dom, inner) {
							toNodeList(inner).forEach(function (node) {
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
							var n = el.previousSibling;
							while (n && !isFocusable(n)) {
								n = n.previousSibling;
							}
							return n;
						}
						function findNextSiblingFocusable(el) {
							var n = el.nextSibling;
							while (n && !isFocusable(n)) {
								n = n.nextSibling;
							}
							return n;
						}

						module.exports = {
							createElement: createElement,
							empty: empty,
							isNode: isNode,
							toNode: toNode,
							toNodeList: toNodeList,
							appendHtml: appendHtml,
							disableFocus: disableFocus,
							enableFocus: enableFocus,
							isFocusable: isFocusable,
							findPrevSiblingFocusable: findPrevSiblingFocusable,
							findNextSiblingFocusable: findNextSiblingFocusable
						};
						/* WEBPACK VAR INJECTION */
					}).call(this, __webpack_require__( /*! @/internal/com.js */"./internal/com.js")["Array_isArray"]);

					/***/
				},

				/***/"./internal/fonts.js":
				/*!***************************!*\
      !*** ./internal/fonts.js ***!
      \***************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalFontsJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var loads = {};
						var legacy = !document.fonts;
						var load = legacy ? function (font, testStr, callback) {
							//for legacy(IE)
							if (loads[font + ' @ ' + testStr]) {
								callback();
								return;
							}
							__webpack_require__( /*! ./legacy/fontwatch/FontWatchRunner */"./internal/legacy/fontwatch/FontWatchRunner.js").load(font, testStr, function () {
								loads[font + ' @ ' + testStr] = true;
								callback();
							}, function () {
								loads[font + ' @ ' + testStr] = true;
								callback();
							});
						} : function (font, testStr, callback) {
							if (loads.all || loads[font]) {
								callback();
								return;
							}
							document.fonts.ready.then(function () {
								loads.all = true;
							});
							document.fonts.load(font).then(function () {
								loads[font] = true;
								callback();
							});
						};
						var check = legacy ? function (font, testStr) {
							//for legacy(IE)
							if (loads[font + ' @ ' + testStr]) {
								return true;
							}
							load(font, testStr, function () {});
							return false;
						} : function (font, testStr) {
							if (loads.all || loads[font]) {
								return true;
							}
							if (!document.fonts.check(font)) {
								load(font, testStr, function () {});
								return false;
							}
							return true;
						};

						module.exports = {
							check: check,
							load: load
						};
					}

					/***/
				},

				/***/"./internal/hiDPI.js":
				/*!***************************!*\
      !*** ./internal/hiDPI.js ***!
      \***************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalHiDPIJs(module, exports, __webpack_require__) {

					"use strict";

					var EventHandler = __webpack_require__( /*! ./EventHandler */"./internal/EventHandler.js");
					var handler = new EventHandler();

					var ratio = void 0;
					function setRatio() {
						ratio = Math.ceil(window.devicePixelRatio || 1);
						if (ratio > 1 && ratio % 2 !== 0) {
							ratio += 1;
						}
					}
					setRatio();
					handler.on(window, 'resize', setRatio);

					module.exports = {
						transform: function transform(canvas) {
							var ctx = canvas.getContext('2d');

							var getAttribute = canvas.getAttribute;
							canvas.getAttribute = function (name) {
								for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
									args[_key6 - 1] = arguments[_key6];
								}

								var result = getAttribute.call.apply(getAttribute, [this, name].concat(args));
								if (name === 'width' || name === 'height') {
									result /= ratio;
								}
								return result;
							};
							var setAttribute = canvas.setAttribute;
							canvas.setAttribute = function (name, val) {
								var wh = name === 'width' || name === 'height';
								if (wh) {
									val *= ratio;
								}

								for (var _len7 = arguments.length, args = Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
									args[_key7 - 2] = arguments[_key7];
								}

								var result = setAttribute.call.apply(setAttribute, [this, name, val].concat(args));
								if (wh) {
									ctx.scale(ratio, ratio);
								}
								return result;
							};

							Object.defineProperty(canvas, 'width', {
								get: function get() {
									return canvas.getAttribute('width');
								},

								set: function set(val) {
									canvas.setAttribute('width', Math.floor(val));
								},
								configurable: true,
								enumerable: true
							});
							Object.defineProperty(canvas, 'height', {
								get: function get() {
									return canvas.getAttribute('height');
								},

								set: function set(val) {
									canvas.setAttribute('height', Math.floor(val));
								},
								configurable: true,
								enumerable: true
							});
							var drawImage = ctx.drawImage;
							ctx.drawImage = function (img) {
								for (var _len8 = arguments.length, args = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
									args[_key8 - 1] = arguments[_key8];
								}

								if (img !== canvas || ratio === 1) {
									return drawImage.call.apply(drawImage, [this, img].concat(args));
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
									return drawImage.call.apply(drawImage, [this, img].concat(args));
								} finally {
									this.restore();
								}
							};

							return canvas;
						}
					};

					/***/
				},

				/***/"./internal/icons.js":
				/*!***************************!*\
      !*** ./internal/icons.js ***!
      \***************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalIconsJs(module, exports, __webpack_require__) {

					"use strict";
					/* WEBPACK VAR INJECTION */
					(function (__webpack_provided_Array_dot_isArray) {
						var _webpack_require__64 = __webpack_require__( /*! ./utils */"./internal/utils.js"),
						    isDef = _webpack_require__64.isDef;

						var ICON_PROP_KEYS = ['content', 'font', 'color', 'className', 'isLiga', 'width', 'src', 'svg', 'name', 'path'];

						function quote(name) {
							var quoted = [];
							var split = name.split(/,\s*/);
							for (var i = 0; i < split.length; i++) {
								var part = split[i].replace(/['"]/g, '');
								if (part.indexOf(' ') === -1 && !/^\d/.test(part)) {
									quoted.push(part);
								} else {
									quoted.push('\'' + part + '\'');
								}
							}
							return quoted.join(',');
						}

						var doms = {};
						var props = {};

						function getIconProps(tagName, className) {
							var tagProps = props[tagName] || (props[tagName] = {});
							if (tagProps[className]) {
								return tagProps[className];
							}
							var dom = doms[tagName] || (doms[tagName] = document.createElement(tagName));
							dom.className = className;
							document.body.appendChild(dom);
							try {
								var beforeStyle = document.defaultView.getComputedStyle(dom, '::before');
								var content = beforeStyle.getPropertyValue('content');
								if (content.length >= 3 && (content[0] === '"' || content[0] === '\'')) {
									if (content[0] === content[content.length - 1]) {
										content = content.substr(1, content.length - 2);
									}
								}
								var font = beforeStyle.getPropertyValue('font');
								if (!font) {
									font = beforeStyle.getPropertyValue('font-style') + ' ' + beforeStyle.getPropertyValue('font-variant') + ' ' + beforeStyle.getPropertyValue('font-weight') + ' ' + beforeStyle.getPropertyValue('font-size') + '/' + beforeStyle.getPropertyValue('line-height') + ' ' + quote(beforeStyle.getPropertyValue('font-family'));
								}
								var color = beforeStyle.getPropertyValue('color');
								var width = dom.clientWidth;
								var isLiga = (beforeStyle.getPropertyValue('font-feature-settings') || '').indexOf('liga') > -1;

								return tagProps[className] = {
									content: content,
									font: font,
									color: color,
									width: width,
									isLiga: isLiga
								};
							} finally {
								document.body.removeChild(dom);
							}
						}

						function toPropArray(prop, count) {
							var result = [];
							if (__webpack_provided_Array_dot_isArray(prop)) {
								result.push.apply(result, _toConsumableArray(prop));
								for (var i = prop.length; i < count; i++) {
									result.push(null);
								}
							} else {
								for (var _i = 0; _i < count; _i++) {
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

							var workData = {};

							var count = 0;
							ICON_PROP_KEYS.forEach(function (k) {
								if (iconProps[k]) {
									if (__webpack_provided_Array_dot_isArray(iconProps[k])) {
										count = Math.max(count, iconProps[k].length);
									} else {
										count = Math.max(count, 1);
									}
								}
							});

							ICON_PROP_KEYS.forEach(function (k) {
								workData[k] = toPropArray(iconProps[k], count);
							});

							var result = [];

							var _loop2 = function _loop2(i) {
								var data = {};
								ICON_PROP_KEYS.forEach(function (k) {
									data[k] = workData[k][i];
								});
								result.push(data);
							};

							for (var i = 0; i < count; i++) {
								_loop2(i);
							}
							return result;
						}

						function normarize(iconProps) {
							var data = {};
							for (var k in iconProps) {
								if (k === 'className') {
									continue;
								}
								data[k] = iconProps[k];
							}
							if (iconProps.className) {
								var prop = getIconProps(iconProps.tagName || 'i', iconProps.className);
								for (var _k in prop) {
									if (!isDef(iconProps[_k])) {
										data[_k] = prop[_k];
									}
								}
							}
							return data;
						}

						module.exports = {
							toNormarizeArray: function toNormarizeArray(iconProps) {
								var icons = toSimpleArray(iconProps);
								if (!icons) {
									return icons;
								}
								return icons.map(function (icon) {
									return normarize(icon);
								});
							},

							get iconPropKeys() {
								return ICON_PROP_KEYS;
							},
							getIconProps: getIconProps
						};
						/* WEBPACK VAR INJECTION */
					}).call(this, __webpack_require__( /*! @/internal/com.js */"./internal/com.js")["Array_isArray"]);

					/***/
				},

				/***/"./internal/imgs.js":
				/*!**************************!*\
      !*** ./internal/imgs.js ***!
      \**************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalImgsJs(module, exports, __webpack_require__) {

					"use strict";

					var _webpack_require__65 = __webpack_require__( /*! ./utils */"./internal/utils.js"),
					    then = _webpack_require__65.then;

					var LRUCache = __webpack_require__( /*! ./LRUCache */"./internal/LRUCache.js");

					var allCache = {};

					function isDataUrl(url) {
						return url.search(/^(data:)/) !== -1;
					}

					function loadImage(src) {
						if (!window.Promise) {
							console.error('Promise is not loaded. load Promise before this process.');
							return {
								then: function then() {
									return this;
								}
							};
						}
						var img = new Image();
						var result = new window.Promise(function (resolve) {
							img.onload = function () {
								resolve(img);
							};
						});
						img.onerror = function (e) {
							var url = src.length > 200 ? src.substr(0, 200) + '...' : src;
							console.warn('cannot load: ' + url);
							throw new Error('IMAGE LOAD ERROR: ' + url);
						};
						img.src = isDataUrl(src) ? src : src + '?' + Date.now();
						return result;
					}

					function getCacheOrLoad0(cache, src) {
						return then(src, function (src) {
							var c = cache.get(src);
							if (c) {
								return c;
							}
							var result = loadImage(src).then(function (img) {
								cache.put(src, img);
								return img;
							});
							cache.put(src, result);
							return result;
						});
					}

					function getCacheOrLoad(cacheName, cacheSize, src) {
						var cache = allCache[cacheName] || (allCache[cacheName] = new LRUCache(cacheSize));
						return getCacheOrLoad0(cache, src);
					}

					module.exports = {
						loadImage: loadImage,
						getCacheOrLoad: getCacheOrLoad
					};

					/***/
				},

				/***/"./internal/legacy/canvas/Path2D.js":
				/*!******************************************!*\
      !*** ./internal/legacy/canvas/Path2D.js ***!
      \******************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalLegacyCanvasPath2DJs(module, exports, __webpack_require__) {

					"use strict";

					var PathCommandsParser = __webpack_require__( /*! ./PathCommandsParser */"./internal/legacy/canvas/PathCommandsParser.js");
					var parser = new PathCommandsParser();

					var Path2D = function Path2D(arg) {
						var _this95 = this;

						_classCallCheck(this, Path2D);

						this._ops = [];
						['closePath', 'moveTo', 'lineTo', 'bezierCurveTo', 'quadraticCurveTo', 'arc', 'rect'].forEach(function (name) {
							_this95[name] = function () {
								for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
									args[_key9] = arguments[_key9];
								}

								_this95._ops.push({ op: name, args: args });
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
							this._ops = [].concat(_toConsumableArray(this._ops));
						} else {
							throw new Error('Error: ' + (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) + ' is not a valid argument to Path');
						}
					};

					var CanvasRenderingContext2D = window.CanvasRenderingContext2D;

					var originalFill = CanvasRenderingContext2D.prototype.fill;

					CanvasRenderingContext2D.prototype.fill = function () {
						var _this96 = this;

						for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
							args[_key10] = arguments[_key10];
						}

						if (args[0] instanceof Path2D) {
							var path = args[0];
							this.beginPath();
							path._ops.forEach(function (op) {
								_this96[op.op].apply(_this96, _toConsumableArray(op.args));
							});
							originalFill.apply(this, Array.prototype.slice.call(args, 1));
						} else {
							originalFill.apply(this, args);
						}
					};

					module.exports = Path2D;

					/***/
				},

				/***/"./internal/legacy/canvas/PathCommands.js":
				/*!************************************************!*\
      !*** ./internal/legacy/canvas/PathCommands.js ***!
      \************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalLegacyCanvasPathCommandsJs(module, exports, __webpack_require__) {

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
						var sign = 1.0;
						if (u[0] * v[1] - u[1] * v[0] < 0) {
							sign = -1.0;
						}
						return sign * Math.acos(clamp(ratio(u, v)), -1, 1);
					}

					function rotClockwise(v, angle) {
						var cost = Math.cos(angle);
						var sint = Math.sin(angle);
						return [cost * v[0] + sint * v[1], -1 * sint * v[0] + cost * v[1]];
					}

					function rotCounterClockwise(v, angle) {
						var cost = Math.cos(angle);
						var sint = Math.sin(angle);
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
						var xPrime = rotClockwise(midPoint(x1, x2), phi); // F.6.5.1
						var xPrime2 = pointMul(xPrime, xPrime);
						var rx2 = Math.pow(rx, 2);
						var ry2 = Math.pow(ry, 2);

						var lambda = Math.sqrt(xPrime2[0] / rx2 + xPrime2[1] / ry2);
						if (lambda > 1) {
							rx *= lambda;
							ry *= lambda;
							rx2 = Math.pow(rx, 2);
							ry2 = Math.pow(ry, 2);
						}
						var factor = Math.sqrt(Math.abs(rx2 * ry2 - rx2 * xPrime2[1] - ry2 * xPrime2[0]) / (rx2 * xPrime2[1] + ry2 * xPrime2[0]));
						if (fA === fS) {
							factor *= -1.0;
						}
						var cPrime = scale(factor, [rx * xPrime[1] / ry, -ry * xPrime[0] / rx]); // F.6.5.2
						var c = sum(rotCounterClockwise(cPrime, phi), meanVec(x1, x2)); // F.6.5.3
						var x1UnitVector = [(xPrime[0] - cPrime[0]) / rx, (xPrime[1] - cPrime[1]) / ry];
						var x2UnitVector = [(-1.0 * xPrime[0] - cPrime[0]) / rx, (-1.0 * xPrime[1] - cPrime[1]) / ry];
						var theta = angle([1, 0], x1UnitVector); // F.6.5.5
						var deltaTheta = angle(x1UnitVector, x2UnitVector); // F.6.5.6
						var start = theta;
						var end = theta + deltaTheta;
						ctx.save();
						ctx.translate(c[0], c[1]);
						ctx.rotate(phi);
						ctx.scale(rx, ry);
						ctx.arc(0, 0, 1, start, end, 1 - fS);
						ctx.restore();
					}

					var PathCommands = function PathCommands(ctx) {
						var _this97 = this;

						_classCallCheck(this, PathCommands);

						var lMx = void 0;
						var lMy = void 0;
						var lx = 0;
						var ly = 0;
						var reflected = void 0;
						var lastCommand = '';
						function makeReflected() {
							if ('CcSsQqTt'.indexOf(lastCommand) < 0) {
								return { x: lx, y: ly };
							}
							return reflected;
						}

						this.M = function (px, py) {
							ctx.moveTo(px, py);
							lMx = px;
							lMy = py;
							lx = px;
							ly = py;
							lastCommand = 'M';
							return _this97;
						};
						this.m = function (px, py) {
							return _this97.M(px + lx, py + ly);
						};
						this.L = function (px, py) {
							ctx.lineTo(px, py);
							lx = px;
							ly = py;
							lastCommand = 'L';
							return _this97;
						};
						this.l = function (px, py) {
							return _this97.L(px + lx, py + ly);
						};
						this.H = function (px) {
							return _this97.L(px, ly);
						};
						this.h = function (px) {
							return _this97.H(px + lx);
						};
						this.V = function (py) {
							return _this97.L(lx, py);
						};
						this.v = function (py) {
							return _this97.V(py + ly);
						};
						this.Z = function () {
							ctx.closePath();
							lx = lMx;
							ly = lMy;
							lastCommand = 'Z';
							return _this97;
						};
						this.z = function () {
							return _this97.Z();
						};
						//C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)
						this.C = function (cp1x, cp1y, cp2x, cp2y, px, py) {
							ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, px, py);
							lx = px;
							ly = py;
							reflected = {
								x: 2 * px - cp2x,
								y: 2 * py - cp2y
							};
							lastCommand = 'C';
							return _this97;
						};
						this.c = function (cp1x, cp1y, cp2x, cp2y, px, py) {
							return _this97.C(cp1x + lx, cp1y + ly, cp2x + lx, cp2y + ly, px + lx, py + ly);
						};
						//S x2 y2, x y (or s dx2 dy2, dx dy)
						this.S = function (cpx, cpy, px, py) {
							var _makeReflected = makeReflected(lastCommand),
							    cp1x = _makeReflected.x,
							    cp1y = _makeReflected.y;

							return _this97.C(cp1x, cp1y, cpx, cpy, px, py);
						};
						this.s = function (cpx, cpy, px, py) {
							return _this97.S(cpx + lx, cpy + ly, px + lx, py + ly);
						};
						//Q x1 y1, x y (or q dx1 dy1, dx dy)
						this.Q = function (cpx, cpy, px, py) {
							ctx.quadraticCurveTo(cpx, cpy, px, py);
							lx = px;
							ly = py;
							reflected = {
								x: 2 * px - cpx,
								y: 2 * py - cpy
							};
							lastCommand = 'Q';
							return _this97;
						};
						this.q = function (cpx, cpy, px, py) {
							return _this97.Q(cpx + lx, cpy + ly, px + lx, py + ly);
						};
						//T x y (or t dx dy)
						this.T = function (px, py) {
							var _makeReflected2 = makeReflected(),
							    cpx = _makeReflected2.x,
							    cpy = _makeReflected2.y;

							return _this97.Q(cpx, cpy, px, py);
						};
						this.t = function (px, py) {
							return _this97.T(px + lx, py + ly);
						};
						//A rx ry x-axis-rotation large-arc-flag sweep-flag x y
						this.A = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px, py) {
							var x1 = lx;
							var y1 = ly;

							ellipseFromEllipticalArc(ctx, x1, y1, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px, py);

							lx = px;
							ly = py;
							lastCommand = 'A';
							return _this97;
						};
						//a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
						this.a = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px, py) {
							return _this97.A(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px + lx, py + ly);
						};
					};

					module.exports = PathCommands;

					/***/
				},

				/***/"./internal/legacy/canvas/PathCommandsParser.js":
				/*!******************************************************!*\
      !*** ./internal/legacy/canvas/PathCommandsParser.js ***!
      \******************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalLegacyCanvasPathCommandsParserJs(module, exports, __webpack_require__) {

					"use strict";

					var PathCommands = __webpack_require__( /*! ./PathCommands */"./internal/legacy/canvas/PathCommands.js");

					function pathTokens(d) {
						var idx = 0;
						return {
							next: function next() {
								var s = '';
								while (d.length > idx) {
									var c = d[idx];
									idx++;
									if (' ,\n\r\t'.indexOf(c) > -1) {
										if (s) {
											return s;
										}
									} else {
										var type = '.+-1234567890'.indexOf(c) > -1 ? 'num' : 'str';
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

					var canvasOperations = window.CanvasRenderingContext2D ? Object.keys(window.CanvasRenderingContext2D.prototype) : ['save', 'restore', 'beginPath', 'closePath', 'moveTo', 'lineTo', 'bezierCurveTo', 'quadraticCurveTo', 'arc', 'arcTo', 'ellipse', 'rect', 'translate', 'rotate', 'scale'];

					var PathCommandsParser = function () {
						function PathCommandsParser() {
							var _this98 = this;

							_classCallCheck(this, PathCommandsParser);

							this._commands = new PathCommands(this);
							canvasOperations.forEach(function (op) {
								_this98[op] = function () {
									for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
										args[_key11] = arguments[_key11];
									}

									_this98._ops.push({
										op: op,
										args: args
									});
								};
							});
						}

						_createClass(PathCommandsParser, [{
							key: 'command',
							value: function command(name) {
								var _commands;

								for (var _len12 = arguments.length, args = Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
									args[_key12 - 1] = arguments[_key12];
								}

								args = args || [];
								for (var i = 0; i < args.length; i++) {
									args[i] = args[i] - 0;
								}
								(_commands = this._commands)[name].apply(_commands, _toConsumableArray(args));
							}
						}, {
							key: 'parse',
							value: function parse(d) {
								var _this99 = this;

								var ops = this._ops = [];
								var tokens = pathTokens(d);
								try {
									(function () {
										var cmd = void 0;
										var subsequentCommand = void 0;
										while (cmd = tokens.next()) {
											if (!isNaN(cmd - 0)) {
												(function () {
													var fst = true;
													var argsProvider = {
														next: function next() {
															if (fst) {
																fst = false;
																return cmd;
															}
															return tokens.next();
														}
													};
													subsequentCommand = command(_this99, subsequentCommand, argsProvider);
												})();
											} else {
												subsequentCommand = command(_this99, cmd, tokens);
											}
										}
									})();
								} catch (e) {
									console.log('Error: ' + d);
									throw e;
								}
								return ops;
							}
						}]);

						return PathCommandsParser;
					}();

					module.exports = PathCommandsParser;

					/***/
				},

				/***/"./internal/legacy/fontwatch/FontRuler.js":
				/*!************************************************!*\
      !*** ./internal/legacy/fontwatch/FontRuler.js ***!
      \************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalLegacyFontwatchFontRulerJs(module, exports, __webpack_require__) {

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
							font: font
						}, {
							'font-variant': 'normal',
							'font-size': '300px',
							'font-style': 'normal',
							'font-weight': '400',
							'line-height': 'normal'
						}];
					}

					var FontRuler = function () {
						function FontRuler(font, testStr) {
							_classCallCheck(this, FontRuler);

							var e = document.createElement('span');
							e.setAttribute('aria-hidden', 'true');
							e.textContent = testStr || 'BESbswy';

							computeStyle(font).forEach(function (style) {
								for (var key in style) {
									e.style[key] = style[key];
								}
							});
							document.body.appendChild(e);
							this.el_ = e;
						}

						_createClass(FontRuler, [{
							key: 'getWidth',
							value: function getWidth() {
								return this.el_.offsetWidth;
							}
						}, {
							key: 'remove',
							value: function remove() {
								document.body.removeChild(this.el_);
							}
						}]);

						return FontRuler;
					}();

					module.exports = FontRuler;

					/***/
				},

				/***/"./internal/legacy/fontwatch/FontWatchRunner.js":
				/*!******************************************************!*\
      !*** ./internal/legacy/fontwatch/FontWatchRunner.js ***!
      \******************************************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalLegacyFontwatchFontWatchRunnerJs(module, exports, __webpack_require__) {

					"use strict";

					//see https://github.com/typekit/webfontloader

					//http://defghi1977.html.xdomain.jp/tech/canvasMemo/canvasMemo.htm

					var FontRuler = __webpack_require__( /*! ./FontRuler */"./internal/legacy/fontwatch/FontRuler.js");

					var LastResortFonts = {
						SERIF: 'serif',
						SANS_SERIF: 'sans-serif'
					};

					var watchRunners = {};

					var FontWatchRunner = function () {
						_createClass(FontWatchRunner, null, [{
							key: 'load',
							value: function load(font, testStr, activeCallback, inactiveCallback) {
								var c = watchRunners[font] || (watchRunners[font] = {});
								testStr = testStr + '';
								var runner = void 0;
								if (c[testStr]) {
									runner = c[testStr];
								} else {
									runner = c[testStr] = new FontWatchRunner(font, testStr);
								}
								runner.then(activeCallback, inactiveCallback);
							}
						}]);

						function FontWatchRunner(font, testStr) {
							_classCallCheck(this, FontWatchRunner);

							this.activeCallbacks = [];
							this.inactiveCallbacks = [];
							this.status = null;
							this.lastResortWidths_ = {};

							this.fontRulerA_ = new FontRuler(font + ',' + LastResortFonts.SERIF, testStr);
							this.fontRulerB_ = new FontRuler(font + ',' + LastResortFonts.SANS_SERIF, testStr);
							var lastResortRulerA = new FontRuler('4px ' + LastResortFonts.SERIF, testStr);
							var lastResortRulerB = new FontRuler('4px ' + LastResortFonts.SANS_SERIF, testStr);

							//start
							this.lastResortWidths_[LastResortFonts.SERIF] = lastResortRulerA.getWidth();
							this.lastResortWidths_[LastResortFonts.SANS_SERIF] = lastResortRulerB.getWidth();

							lastResortRulerA.remove();
							lastResortRulerB.remove();

							this.started_ = Date.now();

							this.check_();
						}

						_createClass(FontWatchRunner, [{
							key: 'then',
							value: function then(activeCallback, inactiveCallback) {
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
						}, {
							key: 'check_',
							value: function check_() {
								var _this100 = this;

								var widthA = this.fontRulerA_.getWidth();
								var widthB = this.fontRulerB_.getWidth();

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
										setTimeout(function () {
											_this100.check_();
										}, 50);
									}
								} else {
									this.finish_(this.activeCallbacks);
									this.status = 'ok';
								}
							}
						}, {
							key: 'isFallbackFont_',
							value: function isFallbackFont_(a, b) {
								return this.widthMatches_(a, LastResortFonts.SERIF) && this.widthMatches_(b, LastResortFonts.SANS_SERIF);
							}
						}, {
							key: 'widthsMatchLastResortWidths_',
							value: function widthsMatchLastResortWidths_(a, b) {
								for (var font in LastResortFonts) {
									if (LastResortFonts.hasOwnProperty(font)) {
										if (this.widthMatches_(a, LastResortFonts[font]) && this.widthMatches_(b, LastResortFonts[font])) {
											return true;
										}
									}
								}
								return false;
							}
						}, {
							key: 'widthMatches_',
							value: function widthMatches_(width, lastResortFont) {
								return width === this.lastResortWidths_[lastResortFont];
							}
						}, {
							key: 'isLastResortFont_',
							value: function isLastResortFont_(a, b) {
								return hasWebKitFallbackBug() && this.widthsMatchLastResortWidths_(a, b);
							}
						}, {
							key: 'finish_',
							value: function finish_(callbacks) {
								var _this101 = this;

								setTimeout(function () {
									_this101.fontRulerA_.remove();
									_this101.fontRulerB_.remove();
									callbacks.forEach(function (cb) {
										return cb();
									});
								}, 0);
							}
						}]);

						return FontWatchRunner;
					}();

					var HAS_WEBKIT_FALLBACK_BUG = null;
					function hasWebKitFallbackBug() {
						if (HAS_WEBKIT_FALLBACK_BUG === null) {
							var match = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);

							HAS_WEBKIT_FALLBACK_BUG = !!match && (parseInt(match[1], 10) < 536 || parseInt(match[1], 10) === 536 && parseInt(match[2], 10) <= 11);
						}
						return HAS_WEBKIT_FALLBACK_BUG;
					}

					module.exports = FontWatchRunner;

					/***/
				},

				/***/"./internal/menu-items.js":
				/*!********************************!*\
      !*** ./internal/menu-items.js ***!
      \********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalMenuItemsJs(module, exports, __webpack_require__) {

					"use strict";
					/* WEBPACK VAR INJECTION */
					(function (__webpack_provided_Array_dot_isArray) {

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
							var result = [];
							for (var k in options) {
								result.push({
									value: k,
									caption: options[k]
								});
							}
							return result;
						}

						module.exports = {
							normalize: normalize
						};
						/* WEBPACK VAR INJECTION */
					}).call(this, __webpack_require__( /*! @/internal/com.js */"./internal/com.js")["Array_isArray"]);

					/***/
				},

				/***/"./internal/path2DManager.js":
				/*!***********************************!*\
      !*** ./internal/path2DManager.js ***!
      \***********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalPath2DManagerJs(module, exports, __webpack_require__) {

					"use strict";

					function getPath2D() {
						//return require('./legacy/canvas/Path2D');
						return window.Path2D || __webpack_require__( /*! ./legacy/canvas/Path2D */"./internal/legacy/canvas/Path2D.js");
					}

					module.exports = {
						fill: function fill(module, ctx, x, y, w, h) {
							ctx.save();
							try {
								var width = module.width,
								    height = module.height;
								var upsideDown = module.ud,
								    _module$x = module.x,
								    offsetX = _module$x === undefined ? 0 : _module$x,
								    _module$y = module.y,
								    offsetY = _module$y === undefined ? 0 : _module$y;

								w = w || width;
								h = h || height;
								var xrate = w / width;
								var yrate = h / (upsideDown ? -height : height);
								x = x || 0;
								y = upsideDown ? (y || 0) + -height * yrate : y || 0;

								ctx.translate(x, y);
								ctx.scale(xrate, yrate);
								if (offsetX !== 0 || offsetY !== 0) {
									ctx.translate(offsetX, offsetY);
								}
								var Path2D = getPath2D();
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

					/***/
				},

				/***/"./internal/sort.js":
				/*!**************************!*\
      !*** ./internal/sort.js ***!
      \**************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalSortJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var wait = function wait(val) {
							return val.then(function (v) {
								if (isPromise(v)) {
									return wait(v);
								} else {
									return v;
								}
							});
						};

						var createArray = function createArray(get, length) {
							var array = new Array(length);
							for (var i = 0; i < length; i++) {
								array[i] = get(i);
							}
							return array;
						};

						var createArrayPromise = function createArrayPromise(get, getField, length) {
							return new Promise(function (resolve) {
								var plist = [];
								var array = new Array(length);

								var _loop3 = function _loop3(i) {
									var data = get(i);
									var record = {
										v: data,
										f: data
									};
									array[i] = record;
									if (isPromise(data)) {
										plist.push(wait(data).then(function (v) {
											record.v = v;
											record.f = v;
										}));
									}
								};

								for (var i = 0; i < length; i++) {
									_loop3(i);
								}
								Promise.all(plist).then(function () {
									return setArrayField(array, getField);
								}).then(resolve);
							});
						};

						var setArrayField = function setArrayField(array, getField) {
							if (!getField) {
								return Promise.resolve(array);
							}
							return new Promise(function (resolve) {
								var length = array.length;
								var plist = [];

								var _loop4 = function _loop4(i) {
									var record = array[i];
									record.f = getField(record.v);
									if (isPromise(record.f)) {
										plist.push(wait(record.f).then(function (v) {
											record.f = v;
										}));
									}
								};

								for (var i = 0; i < length; i++) {
									_loop4(i);
								}
								Promise.all(plist).then(function () {
									return resolve(array);
								});
							});
						};

						var _webpack_require__66 = __webpack_require__( /*! ./utils */"./internal/utils.js"),
						    isPromise = _webpack_require__66.isPromise;

						var sort = {
							sort: function sort(get, set, length, compare, getField) {
								var old = createArray(get, length);
								if (getField) {
									old.sort(function (r1, r2) {
										return compare(getField(r1), getField(r2));
									});
								} else {
									old.sort(compare);
								}
								for (var i = 0; i < length; i++) {
									set(i, old[i]);
								}
							},
							sortArray: function sortArray(array, compare) {
								Array.prototype.sort.call(array, compare);
							},
							sortPromise: function sortPromise(get, set, length, compare, getField) {
								if (window.Promise) {
									return createArrayPromise(get, getField, length).then(function (array) {
										array.sort(function (r1, r2) {
											return compare(r1.f, r2.f);
										});
										for (var i = 0; i < length; i++) {
											set(i, array[i].v);
										}
									});
								} else {
									sort.sort(get, set, length, compare, getField);
									var dummyPromise = {
										then: function then(fn) {
											fn();
											return dummyPromise;
										},
										catch: function _catch() {
											return dummyPromise;
										}
									};
									return dummyPromise;
								}
							}
						};
						module.exports = sort;
					}

					/***/
				},

				/***/"./internal/style.css":
				/*!****************************!*\
      !*** ./internal/style.css ***!
      \****************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalStyleCss(module, exports, __webpack_require__) {

					var content = __webpack_require__( /*! !../../../node_modules/css-loader?minimize!./style.css */"../../node_modules/css-loader/index.js?minimize!./internal/style.css");

					if (typeof content === 'string') content = [[module.i, content, '']];

					var transform;
					var insertInto;

					var options = { "hmr": true };

					options.transform = transform;
					options.insertInto = undefined;

					var update = __webpack_require__( /*! ../../../node_modules/style-loader/lib/addStyles.js */"../../node_modules/style-loader/lib/addStyles.js")(content, options);

					if (content.locals) module.exports = content.locals;

					if (false) {}

					/***/
				},

				/***/"./internal/style.js":
				/*!***************************!*\
      !*** ./internal/style.js ***!
      \***************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalStyleJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var getScrollBarWidth = function getScrollBarWidth() {
							var dummy = document.createElement('div');
							var style = dummy.style;

							style.position = 'absolute';
							style.height = '9999px';
							style.width = 'calc(100vw - 100%)';
							style.opacity = 0;
							dummy.textContent = 'x';
							document.body.appendChild(dummy);

							var _document$defaultView2 = document.defaultView.getComputedStyle(dummy, ''),
							    width = _document$defaultView2.width;

							document.body.removeChild(dummy);
							return parseInt(width, 10);
						};

						var SCROLLBAR_SIZE = void 0;
						var _initDocument = function _initDocument() {
							__webpack_require__( /*! ./style.css */"./internal/style.css");
							SCROLLBAR_SIZE = getScrollBarWidth() || 10;
							var style = document.createElement('style');
							style.setAttribute('type', 'text/css');
							style.setAttribute('data-name', 'cheetah-grid');
							style.innerHTML = '\n.cheetah-grid .grid-scroll-end-point {\n\twidth: ' + SCROLLBAR_SIZE + 'px;\n\theight: ' + SCROLLBAR_SIZE + 'px;\n}\n.cheetah-grid > canvas {\n\twidth: -webkit-calc(100% - ' + SCROLLBAR_SIZE + 'px);\n\twidth: calc(100% - ' + SCROLLBAR_SIZE + 'px);\n\theight: -webkit-calc(100% - ' + SCROLLBAR_SIZE + 'px);\n\theight: calc(100% - ' + SCROLLBAR_SIZE + 'px);\n}\n\t\t';

							document.head.appendChild(style);
						};

						var style = {
							initDocument: function initDocument() {
								style.initDocument = function () {};
								_initDocument();
							},
							getScrollBarSize: function getScrollBarSize() {
								return SCROLLBAR_SIZE;
							}
						};

						module.exports = style;
					}

					/***/
				},

				/***/"./internal/symbolManager.js":
				/*!***********************************!*\
      !*** ./internal/symbolManager.js ***!
      \***********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalSymbolManagerJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var _Symbol = window.Symbol ? window.Symbol : function () {
							var nextId = 1;
							return function (name) {
								var id = nextId++;
								if (name) {
									return ' $$$ ' + name + ' - ' + id + ' $$$ ';
								} else {
									return ' $$$ ' + id + ' $$$ ';
								}
							};
						}();
						var mem = {};

						module.exports = {
							get: function get(name) {
								if (name) {
									return mem[name] ? mem[name] : mem[name] = _Symbol(name);
								} else {
									return _Symbol();
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

					/***/
				},

				/***/"./internal/utils.js":
				/*!***************************!*\
      !*** ./internal/utils.js ***!
      \***************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function internalUtilsJs(module, exports, __webpack_require__) {

					"use strict";
					/* WEBPACK VAR INJECTION */
					(function (__webpack_provided_Array_dot_isArray) {

						{
							var isDef = function isDef(data) {
								return data !== null && typeof data !== 'undefined';
							};

							var setReadonly = function setReadonly(obj, name, value) {
								Object.defineProperty(obj, name, {
									enumerable: false,
									configurable: true,
									value: value
								});
							};

							var each = function each(obj, fn) {
								for (var key in obj) {
									fn(obj[key], key, obj);
								}
							};

							var isObject = function isObject(obj) {
								return obj === Object(obj);
							};

							var extend = function extend() {
								var result = {};

								for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
									args[_key13] = arguments[_key13];
								}

								args.forEach(function (source) {
									var _loop5 = function _loop5(key) {
										Object.defineProperty(result, key, {
											get: function get() {
												return source[key];
											},
											set: function set(val) {
												source[key] = val;
											},

											configurable: true,
											enumerable: true
										});
									};

									for (var key in source) {
										_loop5(key);
									}
								});
								return result;
							};

							var isDescendantElement = function isDescendantElement(root, target) {
								while (target.parentElement) {
									var p = target.parentElement;
									if (root === p) {
										return true;
									}
									target = p;
								}
								return false;
							};

							var applyChainSafe = function applyChainSafe(obj, fn) {
								var value = obj;

								for (var _len14 = arguments.length, names = Array(_len14 > 2 ? _len14 - 2 : 0), _key14 = 2; _key14 < _len14; _key14++) {
									names[_key14 - 2] = arguments[_key14];
								}

								for (var i = 0; i < names.length && isDef(value); i++) {
									value = fn(value, names[i]);
								}
								return value;
							};

							var getChainSafe = function getChainSafe(obj) {
								for (var _len15 = arguments.length, names = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
									names[_key15 - 1] = arguments[_key15];
								}

								return applyChainSafe.apply(undefined, [obj, function (val, name) {
									return val[name];
								}].concat(names));
							};

							var getOrApply = function getOrApply(value) {
								if (typeof value === 'function') {
									for (var _len16 = arguments.length, args = Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
										args[_key16 - 1] = arguments[_key16];
									}

									return value.apply(undefined, args);
								} else {
									return value;
								}
							};

							var endsWith = function endsWith(str, searchString, position) {
								var subjectString = str.toString();
								if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
									position = subjectString.length;
								}
								position -= searchString.length;
								var lastIndex = subjectString.lastIndexOf(searchString, position);
								return lastIndex !== -1 && lastIndex === position;
							};

							var getMouseButtons = function getMouseButtons(e) {
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
							};

							var getKeyCode = function getKeyCode(e) {
								return e.keyCode || e.which;
							};

							var isTouchEvent = function isTouchEvent(e) {
								return !!e.changedTouches;
							};

							var getIgnoreCase = function getIgnoreCase(obj, name) {
								if (obj[name]) {
									return obj[name];
								}
								var l = name.toLowerCase();
								if (obj[l]) {
									return obj[l];
								}
								var u = name.toLowerCase();
								if (obj[u]) {
									return obj[u];
								}
								for (var k in obj) {
									if (k.toLowerCase() === l) {
										return obj[k];
									}
								}
								return undefined;
							};

							var cancel = function cancel(e) {
								e.preventDefault();
								e.stopPropagation();
							};

							var toBoxArray = function toBoxArray(obj) {
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
							};

							// Chrome 33554431
							// FireFox 17895588
							// IE 10737433


							var arrayFind = void 0;
							var arrayFindIndex = void 0;
							var array = {
								get find() {
									if (arrayFind) {
										return arrayFind;
									}
									if (Array.prototype.find) {
										arrayFind = function arrayFind(arr, predicate) {
											return Array.prototype.find.call(arr, predicate);
										};
									} else {
										arrayFind = function arrayFind(arr, predicate) {
											var index = array.findIndex(arr, predicate);
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
										arrayFindIndex = function arrayFindIndex(arr, predicate) {
											return Array.prototype.findIndex.call(arr, predicate);
										};
									} else {
										arrayFindIndex = function arrayFindIndex(arr, predicate) {
											var length = arr.length;
											for (var i = 0; i < length; i++) {
												var value = arr[i];
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

							var ua = window.navigator.userAgent.toLowerCase();
							var IE = ua.match(/(msie)/) || ua.match(/trident/);
							var Chrome = ua.indexOf('chrome') > -1 && ua.indexOf('edge') === -1;
							var Firefox = ua.indexOf('firefox') > -1;

							var isPromise = function isPromise(data) {
								return data && typeof data.then === 'function';
							};
							var then = function then(result, callback) {
								return isPromise(result) ? result.then(function (r) {
									return callback(r);
								}) : callback(result);
							};
							module.exports = {
								isDef: isDef,
								browser: {
									IE: IE,
									Chrome: Chrome,
									Firefox: Firefox,
									heightLimit: Chrome ? 33554431 : Firefox ? 17895588 : 10737433 // default IE limit
								},
								extend: extend,
								isDescendantElement: isDescendantElement,
								getChainSafe: getChainSafe,
								applyChainSafe: applyChainSafe,
								getOrApply: getOrApply,
								getIgnoreCase: getIgnoreCase,
								isPromise: isPromise,
								then: then,
								array: array,
								obj: {
									setReadonly: setReadonly,
									each: each,
									isObject: isObject
								},
								str: {
									endsWith: endsWith
								},
								event: {
									getMouseButtons: getMouseButtons,
									getKeyCode: getKeyCode,
									isTouchEvent: isTouchEvent,
									cancel: cancel
								},
								style: {
									toBoxArray: toBoxArray
								},
								emptyFn: function emptyFn() {}
							};
						}
						/* WEBPACK VAR INJECTION */
					}).call(this, __webpack_require__( /*! @/internal/com.js */"./internal/com.js")["Array_isArray"]);

					/***/
				},

				/***/"./list-grid/EVENT_TYPE.js":
				/*!*********************************!*\
      !*** ./list-grid/EVENT_TYPE.js ***!
      \*********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function listGridEVENT_TYPEJs(module, exports, __webpack_require__) {

					"use strict";

					var _webpack_require__67 = __webpack_require__( /*! ../internal/utils */"./internal/utils.js"),
					    extend = _webpack_require__67.extend;

					var DrawGrid = __webpack_require__( /*! ../core/DrawGrid */"./core/DrawGrid.js");
					var EVENT_TYPE = extend(DrawGrid.EVENT_TYPE, {
						CHANGED_VALUE: 'changed_value'
					});
					module.exports = EVENT_TYPE;

					/***/
				},

				/***/"./main.js":
				/*!*****************!*\
      !*** ./main.js ***!
      \*****************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function mainJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var core = __webpack_require__( /*! ./core */"./core.js");
						var tools = __webpack_require__( /*! ./tools */"./tools.js");
						var columns = __webpack_require__( /*! ./columns */"./columns.js");
						var themes = __webpack_require__( /*! ./themes */"./themes.js");
						var _data = __webpack_require__( /*! ./data */"./data.js");

						var ListGrid = __webpack_require__( /*! ./ListGrid */"./ListGrid.js");
						var GridCanvasHelper = __webpack_require__( /*! ./GridCanvasHelper */"./GridCanvasHelper.js");

						var icons = __webpack_require__( /*! ./icons */"./icons.js");
						var register = __webpack_require__( /*! ./register */"./register.js");

						/**
       * Cheetah Grid
       * @type {Object}
       * @namespace cheetahGrid
       */
						module.exports = {
							core: core,
							tools: tools,

							// impl Grids
							ListGrid: ListGrid,

							// objects
							columns: columns,
							themes: themes,
							data: _data,

							// helper
							GridCanvasHelper: GridCanvasHelper,
							get icons() {
								return icons.get();
							},

							//plugin registers
							register: register,

							get _internal() {
								console.warn('use internal!!');
								return {
									color: __webpack_require__( /*! ./internal/color */"./internal/color.js"),
									sort: __webpack_require__( /*! ./internal/sort */"./internal/sort.js"),
									calc: __webpack_require__( /*! ./internal/calc */"./internal/calc.js"),
									symbolManager: __webpack_require__( /*! ./internal/symbolManager */"./internal/symbolManager.js"),
									path2DManager: __webpack_require__( /*! ./internal/path2DManager */"./internal/path2DManager.js")
								};
							}
						};
					}

					/***/
				},

				/***/"./plugins/icons.js":
				/*!**************************!*\
      !*** ./plugins/icons.js ***!
      \**************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function pluginsIconsJs(module, exports, __webpack_require__) {

					"use strict";

					module.exports = {};

					/***/
				},

				/***/"./plugins/themes.js":
				/*!***************************!*\
      !*** ./plugins/themes.js ***!
      \***************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function pluginsThemesJs(module, exports, __webpack_require__) {

					"use strict";

					module.exports = {};

					/***/
				},

				/***/"./register.js":
				/*!*********************!*\
      !*** ./register.js ***!
      \*********************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function registerJs(module, exports, __webpack_require__) {

					"use strict";

					var themePlugins = __webpack_require__( /*! ./plugins/themes */"./plugins/themes.js");
					var iconPlugins = __webpack_require__( /*! ./plugins/icons */"./plugins/icons.js");

					function register(obj, name, value) {
						if (value) {
							var old = obj[name];
							obj[name] = value;
							return old;
						} else {
							return obj[name];
						}
					}
					function registers(obj, values) {
						for (var k in values) {
							obj[k] = values[k];
						}
					}
					module.exports = {
						theme: function theme(name, _theme) {
							return register(themePlugins, name, _theme);
						},
						icon: function icon(name, _icon) {
							return register(iconPlugins, name, _icon);
						},
						icons: function icons(_icons) {
							registers(iconPlugins, _icons);
						}
					};

					/***/
				},

				/***/"./themes.js":
				/*!*******************!*\
      !*** ./themes.js ***!
      \*******************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function themesJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var _webpack_require__68 = __webpack_require__( /*! ./internal/utils */"./internal/utils.js"),
						    extend = _webpack_require__68.extend,
						    getIgnoreCase = _webpack_require__68.getIgnoreCase;

						var theme = __webpack_require__( /*! ./themes/theme */"./themes/theme.js");
						var plugins = __webpack_require__( /*! ./plugins/themes */"./plugins/themes.js");
						var BASIC = theme.create(__webpack_require__( /*! ./themes/BASIC */"./themes/BASIC.js"));
						var MATERIAL_DESIGN = theme.create(__webpack_require__( /*! ./themes/MATERIAL_DESIGN */"./themes/MATERIAL_DESIGN.js"));

						var builtin = {
							BASIC: BASIC,
							MATERIAL_DESIGN: MATERIAL_DESIGN
						};
						var defTheme = theme.create({});
						/**
       * themes
       * @type {Object}
       * @namespace cheetahGrid.themes
       * @memberof cheetahGrid
       */
						var themes = {
							get default() {
								return defTheme;
							},
							set default(defaultTheme) {
								defTheme = defaultTheme;
							},
							theme: theme,
							of: function of(value) {
								if (!value) {
									return null;
								}
								if (typeof value === 'string') {
									var t = getIgnoreCase(themes.choices, value);
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

					/***/
				},

				/***/"./themes/BASIC.js":
				/*!*************************!*\
      !*** ./themes/BASIC.js ***!
      \*************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function themesBASICJs(module, exports, __webpack_require__) {

					"use strict";
					/*eslint no-bitwise:0*/

					function DEFAULT_BG_COLOR(args) {
						var row = args.row,
						    frozenRowCount = args.grid.frozenRowCount;

						if (!(row - frozenRowCount & 1)) {
							return '#FFF';
						} else {
							return '#F6F6F6';
						}
					}
					var cacheLinearGradient = {};
					function getLinearGradient(context, left, top, right, bottom, colorStops) {
						var stop = void 0;
						var stopsKey = [];
						for (stop in colorStops) {
							stopsKey.push(stop + '@' + colorStops[stop]);
						}
						var key = left + '/' + top + '/' + right + '/' + bottom + '/' + stopsKey.join(',');
						var ret = cacheLinearGradient[key];
						if (ret) {
							return ret;
						}
						var grad = context.createLinearGradient(left, top, left, bottom);
						for (stop in colorStops) {
							grad.addColorStop(stop, colorStops[stop]);
						}
						return cacheLinearGradient[key] = grad;
					}
					function FROZEN_ROWS_BG_COLOR(args) {
						var col = args.col,
						    grid = args.grid,
						    frozenRowCount = args.grid.frozenRowCount,
						    context = args.context;

						var _grid$getCellRelative = grid.getCellRelativeRect(col, 0),
						    left = _grid$getCellRelative.left,
						    top = _grid$getCellRelative.top;

						var _grid$getCellRelative2 = grid.getCellRelativeRect(col, frozenRowCount - 1),
						    bottom = _grid$getCellRelative2.bottom;

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

					/***/
				},

				/***/"./themes/MATERIAL_DESIGN.js":
				/*!***********************************!*\
      !*** ./themes/MATERIAL_DESIGN.js ***!
      \***********************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function themesMATERIAL_DESIGNJs(module, exports, __webpack_require__) {

					"use strict";
					/*eslint no-bitwise:0*/

					function FROZEN_ROWS_BORDER_COLOR(args) {
						var row = args.row,
						    frozenRowCount = args.grid.frozenRowCount;

						if (frozenRowCount - 1 === row) {
							return ['#f2f2f2', '#f2f2f2', '#ccc7c7', '#f2f2f2'];
						} else {
							return ['#f2f2f2'];
						}
					}
					function BORDER_COLOR(args) {
						var col = args.col,
						    colCount = args.grid.colCount;

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

					/***/
				},

				/***/"./themes/theme.js":
				/*!*************************!*\
      !*** ./themes/theme.js ***!
      \*************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function themesThemeJs(module, exports, __webpack_require__) {

					"use strict";
					/*eslint no-bitwise:0*/

					{
						var getProp = function getProp(obj, superObj, names, defNames) {
							return getChainSafe.apply(undefined, [obj].concat(_toConsumableArray(names))) || defNames && getChainSafe.apply(undefined, [obj].concat(_toConsumableArray(defNames))) || getChainSafe.apply(undefined, [superObj].concat(_toConsumableArray(names)));
						};

						var createTheme = function createTheme() {
							var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
							var superTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTheme;

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
								extends: function _extends(obj) {
									return createTheme(obj, this);
								}
							};
						};

						/**
       * theme object
       * @type {Object}
       * @namespace cheetahGrid.themes.theme
       * @memberof cheetahGrid.themes
       */


						var _webpack_require__69 = __webpack_require__( /*! ../internal/utils */"./internal/utils.js"),
						    getChainSafe = _webpack_require__69.getChainSafe;

						var defaultTheme = __webpack_require__( /*! ./MATERIAL_DESIGN */"./themes/MATERIAL_DESIGN.js");

						module.exports = {
							create: function create(obj) {
								return createTheme(obj);
							}
						};
					}

					/***/
				},

				/***/"./tools.js":
				/*!******************!*\
      !*** ./tools.js ***!
      \******************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function toolsJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var canvashelper = __webpack_require__( /*! ./tools/canvashelper */"./tools/canvashelper.js");

						/**
       * tools
       * @type {Object}
       * @namespace cheetahGrid.tools
       * @memberof cheetahGrid
       */
						module.exports = {
							canvashelper: canvashelper
						};
					}

					/***/
				},

				/***/"./tools/canvashelper.js":
				/*!*******************************!*\
      !*** ./tools/canvashelper.js ***!
      \*******************************/
				/*! no static exports found */
				/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
				/***/function toolsCanvashelperJs(module, exports, __webpack_require__) {

					"use strict";

					{
						var strokeColorsRect = function strokeColorsRect(ctx, borderColors, left, top, width, height) {
							function strokeRectLines(positions) {
								for (var i = 0; i < borderColors.length; i++) {
									var color = borderColors[i];
									var _preColor = borderColors[i - 1];
									if (color) {
										if (_preColor !== color) {
											if (_preColor) {
												ctx.strokeStyle = _preColor;
												ctx.stroke();
											}
											var pos1 = positions[i];
											ctx.beginPath();
											ctx.moveTo(pos1.x, pos1.y);
										}
										var pos2 = positions[i + 1];
										ctx.lineTo(pos2.x, pos2.y);
									} else {
										if (_preColor) {
											ctx.strokeStyle = _preColor;
											ctx.stroke();
										}
									}
								}
								var preColor = borderColors[borderColors.length - 1];
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
						};

						var roundRect = function roundRect(ctx, left, top, width, height, radius) {
							ctx.beginPath();
							ctx.arc(left + radius, top + radius, radius, -PI, -0.5 * PI, false);
							ctx.arc(left + width - radius, top + radius, radius, -0.5 * PI, 0, false);
							ctx.arc(left + width - radius, top + height - radius, radius, 0, 0.5 * PI, false);
							ctx.arc(left + radius, top + height - radius, radius, 0.5 * PI, PI, false);
							ctx.closePath();
						};

						var fillRoundRect = function fillRoundRect(ctx, left, top, width, height, radius) {
							roundRect(ctx, left, top, width, height, radius);
							ctx.fill();
						};

						var strokeRoundRect = function strokeRoundRect(ctx, left, top, width, height, radius) {
							roundRect(ctx, left, top, width, height, radius);
							ctx.stroke();
						};

						var fillTextRect = function fillTextRect(ctx, text, left, top, width, height) {
							var _ref71 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {},
							    _ref71$offset = _ref71.offset,
							    offset = _ref71$offset === undefined ? 2 : _ref71$offset,
							    padding = _ref71.padding;

							var rect = {
								left: left,
								top: top,
								width: width,
								height: height,
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
								var pos = calcBasePosition(ctx, rect, {
									offset: offset,
									padding: padding
								});

								ctx.fillText(text, pos.x, pos.y);
							} finally {
								ctx.restore();
							}
						};

						var drawInlineImageRect = function drawInlineImageRect(ctx, image, srcLeft, srcTop, srcWidth, srcHeight, destWidth, destHeight, left, top, width, height) {
							var _ref72 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : {},
							    _ref72$offset = _ref72.offset,
							    offset = _ref72$offset === undefined ? 2 : _ref72$offset,
							    padding = _ref72.padding;

							var rect = {
								left: left,
								top: top,
								width: width,
								height: height,
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
								var pos = calcStartPosition(ctx, rect, destWidth, destHeight, {
									offset: offset,
									padding: padding
								});

								ctx.drawImage(image, srcLeft, srcTop, srcWidth, srcHeight, pos.x, pos.y, destWidth, destHeight);
							} finally {
								ctx.restore();
							}
						};

						/**
       * Returns an object containing the width of the checkbox.
       * @param  {CanvasRenderingContext2D} ctx canvas context
       * @return {Object} Object containing the width of the checkbox
       * @memberof cheetahGrid.tools.canvashelper
       */


						var measureCheckbox = function measureCheckbox(ctx) {
							return {
								width: ctx.measureText('あ').width
							};
						};

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


						var drawCheckbox = function drawCheckbox(ctx, x, y, check) {
							var _ref73 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
							    _ref73$uncheckBgColor = _ref73.uncheckBgColor,
							    uncheckBgColor = _ref73$uncheckBgColor === undefined ? '#FFF' : _ref73$uncheckBgColor,
							    _ref73$checkBgColor = _ref73.checkBgColor,
							    checkBgColor = _ref73$checkBgColor === undefined ? 'rgb(76, 73, 72)' : _ref73$checkBgColor,
							    _ref73$borderColor = _ref73.borderColor,
							    borderColor = _ref73$borderColor === undefined ? '#000' : _ref73$borderColor,
							    _ref73$boxSize = _ref73.boxSize,
							    boxSize = _ref73$boxSize === undefined ? measureCheckbox(ctx).width : _ref73$boxSize;

							var checkPoint = typeof check === 'number' ? check > 1 ? 1 : check : 1;

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
									var leftWidth = boxSize / 4;
									var rightWidth = boxSize / 2 * 0.9;
									var leftLeftPos = x + boxSize * 0.2;
									var leftTopPos = y + boxSize / 2;

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
						};

						var drawButton = function drawButton(ctx, left, top, width, height) {
							var option = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
							var _option$backgroundCol = option.backgroundColor,
							    backgroundColor = _option$backgroundCol === undefined ? '#FFF' : _option$backgroundCol,
							    _option$bgColor = option.bgColor,
							    bgColor = _option$bgColor === undefined ? backgroundColor : _option$bgColor,
							    _option$radius = option.radius,
							    radius = _option$radius === undefined ? 4 : _option$radius,
							    _option$shadow = option.shadow,
							    shadow = _option$shadow === undefined ? {} : _option$shadow;

							ctx.save();
							try {
								ctx.fillStyle = bgColor;

								if (shadow) {
									var _shadow$color = shadow.color,
									    color = _shadow$color === undefined ? 'rgba(0, 0, 0, 0.24)' : _shadow$color,
									    _shadow$blur = shadow.blur,
									    blur = _shadow$blur === undefined ? 1 : _shadow$blur,
									    _shadow$offsetX = shadow.offsetX,
									    offsetX = _shadow$offsetX === undefined ? 0 : _shadow$offsetX,
									    _shadow$offsetY = shadow.offsetY,
									    offsetY = _shadow$offsetY === undefined ? 2 : _shadow$offsetY,
									    _shadow$offset = shadow.offset;
									_shadow$offset = _shadow$offset === undefined ? {} : _shadow$offset;
									var _shadow$offset$x = _shadow$offset.x,
									    ox = _shadow$offset$x === undefined ? offsetX : _shadow$offset$x,
									    _shadow$offset$y = _shadow$offset.y,
									    oy = _shadow$offset$y === undefined ? offsetY : _shadow$offset$y;

									ctx.shadowColor = color;
									ctx.shadowBlur = blur; //ぼかし
									ctx.shadowOffsetX = ox;
									ctx.shadowOffsetY = oy;
								}

								fillRoundRect(ctx, ceil(left), ceil(top), ceil(width), ceil(height), radius);
							} finally {
								ctx.restore();
							}
						};

						/**
       * canvashelper
       * @type {Object}
       * @namespace cheetahGrid.tools.canvashelper
       * @memberof cheetahGrid.tools
       */


						var _webpack_require__70 = __webpack_require__( /*! ../internal/canvases */"./internal/canvases.js"),
						    calcBasePosition = _webpack_require__70.calcBasePosition,
						    calcStartPosition = _webpack_require__70.calcStartPosition;

						var ceil = Math.ceil,
						    PI = Math.PI;
						var canvashelper = {
							roundRect: roundRect,
							fillRoundRect: fillRoundRect,
							strokeRoundRect: strokeRoundRect,
							drawCheckbox: drawCheckbox,
							measureCheckbox: measureCheckbox,
							fillTextRect: fillTextRect,
							drawButton: drawButton,
							drawInlineImageRect: drawInlineImageRect,
							strokeColorsRect: strokeColorsRect
						};

						module.exports = canvashelper;
					}

					/***/
				}

				/******/ })
		);
	});
}).call(typeof global !== "undefined" ? global : window);
})();
//# sourceMappingURL=cheetahGrid.es5.js.map