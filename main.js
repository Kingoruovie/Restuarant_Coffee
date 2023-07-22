/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background_beans.jpg */ \"./src/background_beans.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, *::after, *::before {\n    box-sizing: border-box;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    color: #FBFBFB;\n}\n\n\n/* NAVIGATION AND TITLE */\nheader {\n    padding-top: 30px;\n    padding-bottom: 30px;\n}\n\nh1 {\n    text-align: center;\n    font-size: 3rem;\n    margin: 0;\n    margin-bottom: 20px;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n\nul {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: space-evenly;\n    margin: 0 auto;\n    width: 40%;\n    font-size: 2rem;\n\n    & li {\n        list-style-type: none;\n        transition: transform 1s;\n    \n        & a {\n            color: #FBFBFB;\n            text-decoration: none;\n        }\n    }\n\n    & li:hover {\n        transform: translateY(10px);\n        text-decoration: underline;\n    }\n}\n\n\n/* MAIN PAGE */\n.coffee-shop-intro {\n    width: 500px;\n    margin: 30px auto;\n    background-color: #c3692d52;\n    text-align: center;\n    padding: 40px;\n    font-size: 1.2rem;\n    border: 1px solid #EADCA6;\n    border-radius: 10px;\n\n    & img {\n        width: 200px;\n        margin-bottom: 20px;\n        object-fit: cover;\n        border-radius: 10px;\n    }\n}\n\n/* MENU PAGE */\n.menu {\n    width: 722px;\n    margin: 30px auto;\n    background-color: #c3692d85;\n    border: 1px solid #EADCA6;\n    border-radius: 10px;\n    padding: 20px;\n    display: flex;\n    gap: 20px;\n    flex-wrap: wrap;\n    text-align: center;\n\n    & .menu-items:last-child {\n        height: 350px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        & button {\n            height: 50px;\n            width: 50px;\n            border: 1px solid #EADCA6;\n            border-radius: 15px;\n            font-size: 100%;\n            font-weight: 600;\n            background-color: #C36A2D;\n        }\n    }\n\n    & .menu-items {\n        flex: 0 0 330px;\n        display: flex;\n        flex-direction: column;\n        background-color: #c3692d67;\n        border: 1px solid #eadca681;\n        padding: 10px;\n\n        & img {\n            width: 200px;\n            height: 200px;\n            object-fit: cover;\n            border: 1px solid #EADCA6;\n        }\n\n        & .menu-items-title {\n            font-size: 1.5rem;\n            font-weight: 600;\n        }\n\n        & .menu-items-description {\n            padding: 0 20px;\n        }\n\n        & div {\n            margin: 5px;\n        }\n\n    }\n}\n\n\n/* CONTACT PAGE */\n.contact {\n    width: 600px;\n    margin: 30px auto;\n    background-color: #c3692d52;\n    padding: 40px;\n    font-size: 1.3rem;\n    border: 1px solid #EADCA6;\n    border-radius: 10px;\n\n    & div {\n        width: 100%;\n    }\n\n    & label {\n        display: block;\n        margin-top: 20px;\n    }\n    \n    & input, & textarea {\n        padding: 20px;\n        width: 100%;\n        border-radius: 8px;\n        background-color: #c3692d85;\n        color: #FBFBFB;\n        font-size: 100%;\n        margin-top: 10px;\n        border: 1px solid #EADCA6;\n    }\n\n    & button {\n        padding: 10px;\n        margin-top: 20px;\n        font-size: 100%;\n        border: 1px solid #EADCA6;\n        background-color: #c3692d85;\n        border-radius: 8px;\n        color: #FBFBFB;\n        cursor: pointer;\n    }\n}\n\n\nfooter {\n    padding: 40px;\n    text-align: center;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://reataurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://reataurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://reataurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://reataurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://reataurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://reataurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://reataurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://reataurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://reataurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://reataurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://reataurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer() {\n    const footer = document.createElement('footer');\n\n    const div = document.createElement('div');\n    div.innerHTML = 'Oru Ovie - Copyright &copy; 2023'\n\n    footer.appendChild(div);\n\n    return footer\n}\n\n//# sourceURL=webpack://reataurant/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _mainHomeMenuContact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainHomeMenuContact */ \"./src/mainHomeMenuContact.js\");\n\n\nfunction header() {\n\n    const header = document.createElement('header');\n\n    const mainTitle = document.createElement('h1');\n    mainTitle.innerHTML = 'MyMyCoffee';\n    mainTitle.classList.add('main-title');\n\n    const navBar = document.createElement('nav');\n\n    const uL = document.createElement('ul');\n    const lI_1 = document.createElement('li');\n    const lI_2 = document.createElement('li');\n    const lI_3 = document.createElement('li');\n\n    const homeLink = document.createElement('a');\n    homeLink.classList.add('active')\n    homeLink.innerHTML = 'Home';\n    const contactLink = document.createElement('a');\n    contactLink.innerHTML = 'Contact';\n    const menuLink = document.createElement('a');\n    menuLink.innerHTML = 'Menu';\n\n    homeLink.onclick = _mainHomeMenuContact__WEBPACK_IMPORTED_MODULE_0__.mainHome;\n    menuLink.onclick = _mainHomeMenuContact__WEBPACK_IMPORTED_MODULE_0__.mainMenu;\n    contactLink.onclick = _mainHomeMenuContact__WEBPACK_IMPORTED_MODULE_0__.mainContact;\n\n    lI_1.appendChild(homeLink);\n    lI_2.appendChild(menuLink);\n    lI_3.appendChild(contactLink);\n\n    uL.appendChild(lI_1);\n    uL.appendChild(lI_2);\n    uL.appendChild(lI_3);\n\n    navBar.appendChild(uL);\n\n    header.appendChild(mainTitle);\n    header.appendChild(navBar)\n\n    return header\n}\n\n//# sourceURL=webpack://reataurant/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _mainHomeMenuContact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainHomeMenuContact */ \"./src/mainHomeMenuContact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nconst myPageMap = {\n    \"Home\": _mainHomeMenuContact__WEBPACK_IMPORTED_MODULE_2__.mainHome,\n    \"Menu\": _mainHomeMenuContact__WEBPACK_IMPORTED_MODULE_2__.mainMenu,\n    \"Contact\": _mainHomeMenuContact__WEBPACK_IMPORTED_MODULE_2__.mainContact,\n}\n\n\ndocument.body.append((0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\ndocument.body.append(myPageMap[document.querySelector('.active').textContent]())\n\ndocument.body.append((0,_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n\n//# sourceURL=webpack://reataurant/./src/index.js?");

/***/ }),

/***/ "./src/mainHomeMenuContact.js":
/*!************************************!*\
  !*** ./src/mainHomeMenuContact.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mainContact: () => (/* binding */ mainContact),\n/* harmony export */   mainHome: () => (/* binding */ mainHome),\n/* harmony export */   mainMenu: () => (/* binding */ mainMenu)\n/* harmony export */ });\n/* harmony import */ var _Logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.jpg */ \"./src/Logo.jpg\");\n/* harmony import */ var _Americano_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Americano.jpeg */ \"./src/Americano.jpeg\");\n/* harmony import */ var _Cappuccino_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cappuccino.jpg */ \"./src/Cappuccino.jpg\");\n/* harmony import */ var _Expresso_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Expresso.jpg */ \"./src/Expresso.jpg\");\n/* harmony import */ var _Latte_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Latte.jpg */ \"./src/Latte.jpg\");\n\n\n\n\n\n\n\n\nconst main = document.createElement('main');\n\n\n\nfunction mainHome() {\n    const section = document.createElement('section');\n    section.classList.add('coffee-shop-intro');\n\n    const myLogo = new Image()\n    myLogo.src = _Logo_jpg__WEBPACK_IMPORTED_MODULE_0__\n\n    const article = document.createElement('article')\n    article.innerHTML = \"\\\n        Do you love the smell of freshly brewed coffee in the morning? Do you enjoy spending time in cozy, inviting atmospheres? If so, then you'll love MyMyCoffe.\\\n        We're a coffee shop that's passionate about making your day. We use only the finest beans, and we roast them fresh to order. We also offer a variety of other coffee drinks, including espresso, lattes, cappuccinos, and more.\\\n        But what really sets us apart is our atmosphere. We're located in a charming, historic building that's been lovingly restored. Our walls are lined with books, and our tables are made from reclaimed wood. We have a fireplace that's perfect for curling up with a good book on a cold winter day.\\\n        We're the perfect place to relax and people-watch. Whether you're working on your laptop, meeting up with friends, or just need a quiet place to escape, MyMyCoffe is the perfect place for you.\\\n    \"\n\n    section.appendChild(myLogo);\n    section.appendChild(article);\n\n    main.innerHTML = \"\";\n\n    main.appendChild(section)\n\n    return main\n}\n\n\nfunction mainMenu() {\n    const section = document.createElement('section');\n    section.classList.add('menu');\n\n    const coffeeVariety = [\n        {\n            imageUrl: _Cappuccino_jpg__WEBPACK_IMPORTED_MODULE_2__,\n            name: 'Cappuccino',\n            description: 'Cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam (microfoam).'\n        },\n        {\n            imageUrl: _Latte_jpg__WEBPACK_IMPORTED_MODULE_4__,\n            name: 'Latte',\n            description: 'Latte is a coffee drink made with espresso, steamed milk, and a thin layer of foamed milk.'\n        },\n        {\n            imageUrl: _Expresso_jpg__WEBPACK_IMPORTED_MODULE_3__,\n            name: 'Expresso',\n            description: 'Espresso is a concentrated coffee drink made by forcing hot water through finely-ground coffee beans at high pressure.'\n        },\n        {\n            imageUrl: _Americano_jpeg__WEBPACK_IMPORTED_MODULE_1__,\n            name: 'Americano',\n            description: 'An Americano is a coffee drink made by diluting an espresso shot with hot water.'\n        },\n    ];\n\n\n    for (let i=0; i<coffeeVariety.length; i++) {\n        const article = document.createElement('article');\n        article.classList.add('menu-items');\n\n        const imageDiv = document.createElement('div');\n        imageDiv.classList.add('menu-items-image');\n        const coffeeDrink = new Image()\n        coffeeDrink.src = coffeeVariety[i].imageUrl\n        imageDiv.appendChild(coffeeDrink)\n\n        const titleDiv = document.createElement('div');\n        titleDiv.classList.add('menu-items-title');\n        titleDiv.innerHTML = coffeeVariety[i].name;\n\n        const descriptionDiv = document.createElement('div');\n        descriptionDiv.classList.add('menu-items-description');\n        descriptionDiv.innerHTML = coffeeVariety[i].description;\n\n        article.appendChild(imageDiv);\n        article.appendChild(titleDiv);\n        article.appendChild(descriptionDiv);\n\n        section.appendChild(article)\n    }\n\n    const lastArticle = document.createElement('article');\n    lastArticle.classList.add('menu-items');\n\n    const moreBtn = document.createElement('div');\n    moreBtn.id = 'more-button';\n\n    const btn = document.createElement('button');\n    btn.innerHTML = '>'\n\n    moreBtn.appendChild(btn)\n    lastArticle.appendChild(moreBtn);\n\n    section.appendChild(lastArticle);\n\n    main.innerHTML = \"\"\n    \n    main.appendChild(section);\n    return main;\n}\n\n\nfunction mainContact() {\n    const section = document.createElement('section');\n    section.classList.add('contact')\n\n    const form = document.createElement('form');\n\n    const emailDiv = document.createElement('div');\n    const labelEmail = document.createElement('label');\n    labelEmail.htmlFor = 'email';\n    labelEmail.innerHTML = 'Email';\n    const inputEmail = document.createElement('input');\n    inputEmail.setAttribute('type', 'email');\n    inputEmail.id = 'email';\n    emailDiv.appendChild(labelEmail);\n    emailDiv.appendChild(inputEmail)\n\n\n    const textAreaDiv = document.createElement('div');\n    const labelTextArea = document.createElement('label');\n    labelTextArea.htmlFor = 'message';\n    labelTextArea.innerHTML = 'Message';\n    const inputTextArea = document.createElement('textarea');\n    inputTextArea.id = 'message';\n    inputTextArea.rows = 10;\n    inputTextArea.cols = 30;\n    textAreaDiv.appendChild(labelTextArea);\n    textAreaDiv.appendChild(inputTextArea);\n\n\n    const btnDiv = document.createElement('div');\n    const btn = document.createElement('button')\n    btn.setAttribute('type', 'submit');\n    btn.innerHTML = 'Submit';\n    btnDiv.appendChild(btn);\n\n    form.appendChild(emailDiv);\n    form.appendChild(textAreaDiv);\n    form.appendChild(btnDiv);\n\n    section.appendChild(form)\n\n    main.innerHTML = \"\";\n    main.appendChild(section);\n\n    return main;\n}\n\n//# sourceURL=webpack://reataurant/./src/mainHomeMenuContact.js?");

/***/ }),

/***/ "./src/Americano.jpeg":
/*!****************************!*\
  !*** ./src/Americano.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68ae692354e22498faac.jpeg\";\n\n//# sourceURL=webpack://reataurant/./src/Americano.jpeg?");

/***/ }),

/***/ "./src/Cappuccino.jpg":
/*!****************************!*\
  !*** ./src/Cappuccino.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"99a961d932f8759e669c.jpg\";\n\n//# sourceURL=webpack://reataurant/./src/Cappuccino.jpg?");

/***/ }),

/***/ "./src/Expresso.jpg":
/*!**************************!*\
  !*** ./src/Expresso.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"47176c8acd4ad90dd497.jpg\";\n\n//# sourceURL=webpack://reataurant/./src/Expresso.jpg?");

/***/ }),

/***/ "./src/Latte.jpg":
/*!***********************!*\
  !*** ./src/Latte.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"119fc0d22e840ccb4d10.jpg\";\n\n//# sourceURL=webpack://reataurant/./src/Latte.jpg?");

/***/ }),

/***/ "./src/Logo.jpg":
/*!**********************!*\
  !*** ./src/Logo.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dab5764eaf2768f680fa.jpg\";\n\n//# sourceURL=webpack://reataurant/./src/Logo.jpg?");

/***/ }),

/***/ "./src/background_beans.jpg":
/*!**********************************!*\
  !*** ./src/background_beans.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b4da390a86c2f4929872.jpg\";\n\n//# sourceURL=webpack://reataurant/./src/background_beans.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;