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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n}\\n  \\n:root{\\n    --main-color: \\t#481317;\\n    --secondary-color: #dfe0a1;\\n    --colorOne: #770e07;\\n    --colorTwo: #b24800;\\n    --colorThree: #e48f33;\\n}\\n\\n#content{\\n    display:grid;\\n    grid-template-columns: 1fr 4fr;\\n    grid-template-rows: 1fr 5fr;\\n}\\n\\n/*--------BANNER---------*/\\n\\n#banner{\\n    background-color: var(--main-color);\\n    color: var(--secondary-color);\\n    text-align: right;\\n    grid-area: 1/1/2/5;\\n}\\n\\n/*--------NAVIGATION---------*/\\n\\n#nav{\\n    background-color: var(--colorOne);\\n    color: var(--secondary-color);\\n    grid-area: 2/1/6/2;\\n    padding: 5rem;\\n}\\n\\n#nav a{\\n    color: var(--secondary-color);\\n    text-decoration: none;\\n}\\n\\n#projects{\\n    padding-top: 0.5rem;\\n    padding-left: 1rem;\\n    display: grid;\\n    gap: 0.5rem;\\n}\\n\\n/*--------MAIN---------*/\\n\\n#mainContent{\\n    background-color: var(--secondary-color);\\n    color: var(--main-color);\\n    grid-area: 2/2/6/5;\\n    display: grid;\\n    grid-template-columns: 2fr 1fr;\\n    grid-template-rows: 1fr 1fr 5fr;\\n}\\n\\n#mainContentHeading{\\n    grid-area:1/1/3/3;\\n    padding: 2rem;\\n}\\n\\n#tasks{\\n    grid-area: 3/1/7/3;\\n    margin: auto;\\n    width: 80%;\\n    padding-bottom: 3rem;\\n}\\n\\n#key{\\n    grid-area: 1/2/2/3;\\n}\\n\\n.low{\\n    color: green;\\n}\\n\\n.medium{\\n    color: orange;\\n}\\n\\n.high{\\n    color: red;\\n}\\n\\n#addTask{\\n    grid-area: 2/2/3/3;\\n}\\n\\n/*--------MODALS---------*/\\n#projectModal, #taskModal{\\n    position: fixed; \\n    z-index: 1; \\n    left: 0;\\n    top: 0;\\n    width: 100%; \\n    height: 100%; \\n    overflow: auto; \\n}\\n\\n.modal-content{\\n    background-color: var(--secondary-color);\\n    margin: 15% auto; /* 15% from the top and centered */\\n    padding: 20px;\\n    border: 1px solid var(--main-color);\\n    border-radius: 5px;\\n    width: 25rem;\\n    box-shadow: 5px 5px 5px var(--main-color); \\n}\\n\\n  /* The Close Button */\\n  .close {\\n    color: var(--main-color);\\n    float: right;\\n    font-size: 28px;\\n    font-weight: bold;\\n  }\\n  \\n  .close:hover,\\n  .close:focus {\\n    color: var(--tertiary-color);\\n    text-decoration: none;\\n    cursor: pointer;\\n  }\\n\\n/*--------TASKS---------*/\\n.task{\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 2fr 1fr;\\n    border: 1px solid black;\\n   \\n}\\n\\n.deleteTask{\\n    grid-area: 1/2/2/3;\\n    width: 10%;\\n}\\n\\n.description{\\n    grid-area: 2/1/3/3;\\n    border-top: 1px solid black;\\n}\\n\\n.complete{\\n    text-decoration: line-through;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_UILoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UILoad.js */ \"./src/modules/UILoad.js\");\n\n\n\n_modules_UILoad_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadFullPage();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/List.js":
/*!*****************************!*\
  !*** ./src/modules/List.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n\n\n\nclass List{\n    constructor(){\n        this.projects = [];\n    }\n\n\n\n    addProject(project){\n        this.projects.push(project);\n    }\n\n    setProjects(projects) {\n        this.projects = projects;\n    }\n\n    getProject(title){\n        let projectsLength = this.projects.length;\n        for(let i=0; i<projectsLength; i++){\n            let project = this.projects[i];\n           if(project.getTitle().toLowerCase()==title.toLowerCase()){\n                return this.projects[i];\n            }\n        }\n    }\n    \n\n    getProjects(){\n        return this.projects;\n    }\n    static removeTask(project){\n        // find the project in the array and remove\n    }\n\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/List.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project{\n    constructor(title){\n        this.title = title;\n        this.tasks = [];\n    }\n\n    setTitle(title){\n        this.title = title;\n    }\n\n    getTitle(){\n        return this.title;\n    }\n\n    addTask(task){\n        if(!(this.taskExists(task))){\n            this.tasks.push(task);\n        }        \n    }\n\n    getTasks(){\n        return this.tasks;\n    }\n\n    removeTask(task){\n        // find the task in the array and remove\n        let tasks = this.tasks;\n        for(let i=0; i<tasks.length; i++){\n            if(tasks[i].getTitle().toLowerCase()==task.getTitle().toLowerCase()){\n                tasks.splice(i,1);\n            }\n        }\n    }\n\n    setTasks(tasks){\n        this.tasks = tasks;\n    }\n\n    taskExists(task){\n        let exists = false;\n        for(let i=0; i<this.tasks.length; i++){\n            if(this.tasks[i].getTitle()==task.getTitle()){\n                exists = true;\n                break;\n            }\n        }\n        return exists;\n    }\n\n    /*\n    Get the tasks based on the priority level (low, medium, high)\n    */\n    getPriorityTasks(priorityLevel){\n\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List */ \"./src/modules/List.js\");\n/* harmony import */ var _UILoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UILoad */ \"./src/modules/UILoad.js\");\n\n\n\n\n\n\n\n\nclass Storage {\n\n    static saveList(data) {\n        localStorage.setItem('list', JSON.stringify(data))\n      }\n    \n    static getList() {\n    const list = Object.assign(new _List__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), JSON.parse(localStorage.getItem('list')));\n\n    list.setProjects(list.getProjects().map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), project)));\n\n    list.getProjects().forEach((project) => project.setTasks(project.getTasks().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), task))));\n        return list\n    }\n\n    static addProject(project) {\n        const list = Storage.getList();\n        list.addProject(project);\n        Storage.saveList(list);\n      }\n\n    static addTask(task, projectTitle) {\n        const list = Storage.getList();\n        list.getProject(projectTitle).addTask(task);\n        Storage.saveList(list);\n        _UILoad__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loadNavigation();\n    }\n\n    static deleteTask(task, projectTitle){\n      const list = Storage.getList();\n      list.getProject(projectTitle).removeTask(task);\n      // Does task need to be deleted from any other projects\n      let projects = list.getProjects();\n      for(let i=0; i<projects.length; i++){\n        let tasks = projects[i].getTasks();\n        for(let j=0; j<tasks.length; j++){\n          let projectBeingSearched = projects[i].getTitle();\n          let currentTaskTitle = task.getTitle();\n          if(tasks[j].getTitle().toLowerCase == task.getTitle().toLowerCase){\n            projects[i].removeTask(task);\n          }\n        }\n      }\n      Storage.saveList(list);\n      _UILoad__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loadNavigation();\n    }\n\n\n\n\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    constructor(title, description, priority, dueDate, isComplete){\n        this.title = title;\n        this.description = description;\n        this.priority = priority;\n        this.dueDate = dueDate;\n        this.isComplete = isComplete;\n    }\n\n    setTitle(title){\n        this.title = title;\n    }\n\n    getTitle(){\n        return this.title;\n    }\n\n    setDescription(description){\n        this.description = description;\n    }\n\n    getDescription(){\n        return this.description;\n    }\n\n    setPriority(priority){\n        this.priority = priority;\n    }\n\n    getPriority(){\n        return this.priority;\n    }\n\n    setDueDate(dueDate){\n        this.dueDate = dueDate;\n    }\n\n    getDueDate(){\n        return this.dueDate;\n    }\n\n    setIsComplete(isComplete){\n        if(isComplete==null || isComplete==\"\"){\n            this.isComplete = false;\n        }else{\n            this.isComplete = isComplete;\n        }\n    }\n\n    getIsComplete(){\n        if(this.isComplete==null || this.isComplete==\"\"){\n            return false;\n        }else{\n            return this.isComplete;\n        }\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/UILoad.js":
/*!*******************************!*\
  !*** ./src/modules/UILoad.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UILoad)\n/* harmony export */ });\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ \"./src/modules/List.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n\n\n\n\n\nclass UILoad{\n\n    static loadFullPage(){\n        let content = document.getElementById(\"content\");\n        if(content.innerHTML!=null && content.innerHTML!=\"\"){\n            content.innerHTML=\"\";\n        }\n        // Load Banner\n        let banner = UILoad.loadBanner();\n        // Load Navigation\n        UILoad.loadNavigation();\n        // Load main/task content\n        UILoad.loadMainContent();\n        content.appendChild(banner);\n    }\n\n    static loadBanner(){\n        let bannerDiv = document.createElement(\"div\");\n        bannerDiv.id = \"banner\";\n        let heading = document.createElement(\"h1\");\n        heading.id = \"heading\";\n        heading.innerHTML = \"My Projects\";\n        bannerDiv.appendChild(heading);\n        return bannerDiv;\n    }\n\n    static loadNavigation(){\n        let nav = document.createElement(\"div\");\n        nav.id = \"nav\";\n        let homeButton = document.createElement(\"p\");\n        homeButton.id = \"homeButton\";\n        homeButton.innerHTML = \"Home\";\n   \n        nav.appendChild(homeButton);\n        homeButton.addEventListener(\"click\", function(){\n            UILoad.loadFullPage();\n        });\n\n        let projectsDiv = document.createElement(\"div\");\n        projectsDiv.id = \"projects\";\n        // Add the projects to the navigation bar\n        let projects = _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getList().getProjects();\n        for(let i = 0; i < projects.length; i++){\n            // Get total number of tasks for each project (get only the uncompleted tasks)\n            let tasks = projects[i].getTasks();\n            let taskNumber = 0;\n            for(let j = 0; j<tasks.length; j++){\n                if(!(tasks[j].isComplete)){\n                    taskNumber++;\n                }\n            }\n            let projectLink = document.createElement(\"a\");\n            projectLink.classList.add(\"project-link\");\n            projectLink.id = \"project\" + projects[i].getTitle();\n            projectLink.innerHTML = projects[i].getTitle();\n            let projectTasksNumber = document.createElement(\"p\");\n            projectTasksNumber.innerHTML = taskNumber;\n\n            // Add event listener to each project link\n            projectLink.addEventListener(\"click\", function(){\n                UILoad.loadProject(this.innerHTML);\n            });\n            projectsDiv.appendChild(projectLink);\n            projectsDiv.appendChild(projectTasksNumber);\n        }\n\n        let addProjectButton = document.createElement(\"a\"); // need to add event listener\n        addProjectButton.id = \"add-project\";\n        addProjectButton.innerHTML = \"+ Add Project\";\n        addProjectButton.addEventListener(\"click\", function(){\n            UILoad.createAddProjectModal();\n        });\n        projectsDiv.appendChild(addProjectButton);\n        nav.appendChild(projectsDiv);\n        content.appendChild(nav);\n    }\n\n    static loadMainContent(){\n        /* UI for mainContent banner which includes title, key and buttons */\n        let mainContent = document.createElement(\"div\");\n        mainContent.id = \"mainContent\";\n        let heading = document.createElement(\"h2\");\n        heading.innerHTML = \"Home\";\n        heading.id = \"mainContentHeading\";\n        mainContent.appendChild(heading);\n        let keyDiv = document.createElement(\"div\");\n        keyDiv.id = \"key\";\n        keyDiv.innerHTML = '<h3>Priority Key</h3><span class=\"low\">Low </span><span class=\"medium\">Medium </span><span class=\"high\">High</span>';\n        mainContent.appendChild(keyDiv);\n        let addTask = document.createElement(\"div\");\n        addTask.id=\"addTask\";\n        mainContent.appendChild(addTask);\n        /* UI for the tasks */\n        let tasksDiv = document.createElement(\"div\");\n        tasksDiv.id = \"tasks\";\n        mainContent.appendChild(tasksDiv);\n        content.appendChild(mainContent);\n        // Loop through projects and display all tasks\n        let projects = _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getList().getProjects();\n        \n        for(let i=0; i<projects.length; i++){\n                UILoad.displayTasks(projects[i], \"home\");           \n        }     \n    }\n\n    static loadProject(projectTitle){\n        let projects = _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getList().getProjects();\n        let project = \"\";\n        for(let i=0; i<projects.length; i++){\n            if(projects[i].getTitle()==projectTitle){\n                project = projects[i];\n            }\n        }\n        let tasksDiv = document.getElementById(\"tasks\");\n        tasksDiv.innerHTML= \"\";\n        this.displayTasks(project, \"project\");\n        let mainHeader = document.getElementById(\"mainContentHeading\");\n        mainHeader.innerHTML = projectTitle;\n        let addTask = document.getElementById(\"addTask\");\n        addTask.innerHTML=\"\";\n        let addTaskBtn = document.createElement(\"button\");\n        addTaskBtn.id = \"addTaskBtn\";\n        addTaskBtn.innerHTML = \"Add Task\";\n        addTaskBtn.addEventListener(\"click\", function(){\n            UILoad.createAddTaskModal(project);\n        });        \n        addTask.appendChild(addTaskBtn);\n    }\n\n\n    static displayTasks(project, page){\n        let list = _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getList();\n        let tasks = list.getProject(project.getTitle()).getTasks();\n        let tasksDiv = document.getElementById(\"tasks\");\n        if(tasks.length==0 && page==\"project\"){\n            tasksDiv.innerHTML = \"No tasks exist in this project yet.\";\n        }else{\n            for(let j=0; j<tasks.length; j++){\n\n                let taskElement = document.createElement(\"div\");\n                taskElement.classList.add(\"task\");\n                // Add Title\n                let taskTitle = document.createElement(\"div\");\n                taskTitle.classList.add(\"title\");\n                taskTitle.innerHTML = tasks[j].getTitle();\n                // Add description\n                let taskDescription = document.createElement(\"div\");\n                taskDescription.classList.add(\"description\");\n                taskDescription.innerHTML = tasks[j].getDescription();\n                // Add due date\n                let taskDueDate = document.createElement(\"div\");\n                taskDueDate.classList.add(\"dueDate\");\n                taskDueDate.classList.add(tasks[j].getPriority());\n                taskDueDate.innerHTML = tasks[j].getDueDate();\n                // Add iscompleted \n                let isComplete = document.createElement(\"div\");\n                isComplete.classList.add(\"isComplete\");\n                isComplete.innerHTML=\"Complete:\";\n                // Add check box\n                let completeCheckbox = document.createElement(\"input\");\n                completeCheckbox.setAttribute(\"type\", \"checkbox\");\n                // If task already complete, set checkbox and class\n                if(tasks[j].isComplete){\n                    completeCheckbox.checked = true;\n                    taskElement.classList.add(\"complete\");\n                }else{\n                    completeCheckbox.checked = false;\n                    taskElement.classList.remove(\"complete\");\n                }\n                \n                console.log(completeCheckbox.checked);\n                completeCheckbox.addEventListener(\"change\", function(){\n                    // get if checked\n                    if(this.checked){\n                        tasks[j].setIsComplete(true);\n                        taskElement.classList.add(\"complete\");\n                    }else{\n                        tasks[j].setIsComplete(false);\n                        taskElement.classList.remove(\"complete\");\n                    }\n                    _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].saveList(list);\n                    UILoad.loadNavigation();\n                });\n                isComplete.appendChild(completeCheckbox);\n                // Add delete button\n                let deleteButton = document.createElement(\"div\"); \n                deleteButton.classList.add(\"deleteTask\");\n                deleteButton.innerHTML = \"Delete Task\";\n                deleteButton.addEventListener(\"click\", function(){\n                    _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteTask(tasks[j], project.getTitle());\n                    UILoad.loadProject(project.getTitle());\n                });\n                taskElement.setAttribute(\"project-name\", project.getTitle());\n                taskElement.appendChild(taskTitle);\n                taskElement.appendChild(deleteButton);\n                taskElement.appendChild(taskDescription);\n                taskElement.appendChild(taskDueDate);\n                taskElement.appendChild(isComplete);\n                tasksDiv.appendChild(taskElement);\n            }\n        }\n        \n    }\n    \n    static createAddProjectModal(){\n        let modalDiv = document.getElementById(\"projectModal\")\n        if(modalDiv==null || modalDiv==\"\"){\n            modalDiv = document.createElement(\"div\");\n            modalDiv.id = \"projectModal\";\n            modalDiv.innerHTML = `<div class=\"modal-content\"><span class=\"close\">&times;</span><h2>Add Project</h2>\n            <form action=\"#\" method=\"post\" id=\"addProjectForm\"><div id=\"formFields\">\n            <label for=\"Title\">Title:</label><input type=\"text\" id=\"title\" required/></div>\n            <input type=\"submit\" value=\"Submit\"></form></div>`;\n            content.appendChild(modalDiv);            \n        }else{\n            let form = document.getElementById(\"addProjectForm\");\n            form.reset();\n            modalDiv.style.display=\"block\";\n        }\n        var span = document.getElementsByClassName(\"close\")[0];\n        span.onclick = function() {\n            modalDiv.style.display = \"none\";\n        }\n\n        let form = document.getElementById(\"addProjectForm\");\n\n        form.addEventListener('submit', (event) => {\n            let projectExists = false;\n            let projects = _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getList().getProjects();\n            for(let i=0; i<projects.length; i++){\n                if(projects[i].getTitle().toLowerCase() == form.title.value.toLowerCase()){\n                    projectExists = true;\n                   \n                }\n            }\n            if(projectExists){\n                alert(\"A task with this project already exists.  Please change the title.\");\n                event.preventDefault();\n                event.stopImmediatePropagation();\n            }else{\n                let project = new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](form.title.value);\n                _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addProject(project);\n                modalDiv.style.display=\"none\";\n                UILoad.loadNavigation();\n                UILoad.loadProject(project.getTitle());\n                event.preventDefault();\n                event.stopImmediatePropagation();\n            }\n            \n            \n        });\n        \n    }\n\n    static createAddTaskModal(project){\n        let modalDiv = document.getElementById(\"taskModal\")\n        if(modalDiv==null || modalDiv==\"\"){\n            modalDiv = document.createElement(\"div\");\n            modalDiv.id = \"taskModal\";\n            modalDiv.innerHTML = `<div class=\"modal-content\"><span class=\"close\">&times;</span>\n            <h2>Add Task</h2><form action=\"#\" method=\"post\" id=\"addTaskForm\"><div id=\"formFields\">\n            <label for=\"Title\">Title:</label><input type=\"text\" id=\"title\" required/>\n            Description:<textarea name=\"description\" form=\"addTaskForm\" required></textarea>\n            Priority: <input type=\"radio\" id=\"low\" name=\"priority\" value=\"low\" checked><label for=\"low\">Low</label><br>\n            <input type=\"radio\" id=\"medium\" name=\"priority\" value=\"medium\"><label for=\"medium\">Medium</label><br>\n            <input type=\"radio\" id=\"high\" name=\"priority\" value=\"high\"><label for=\"high\">High</label>\n            <label for=\"dueDate\">Date Due:</label><br><input type=\"date\" id=\"dueDate\" name=\"dueDate\">\n            <br></div><input type=\"submit\" value=\"Submit\"></form></div>`;\n            content.appendChild(modalDiv);            \n        }else{\n            modalDiv.style.display=\"block\";\n            let form = document.getElementById(\"addTaskForm\");\n            form.reset();\n        }\n        var span = document.getElementsByClassName(\"close\")[0];\n        span.onclick = function() {\n            modalDiv.style.display = \"none\";\n        }\n        let form = document.getElementById(\"addTaskForm\");\n\n        form.addEventListener('submit', (event) => {\n\n            let taskExists = false;\n            let tasks = _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getList().getProject(project.getTitle()).getTasks();\n            for(let i=0; i<tasks.length; i++){\n                if(tasks[i].getTitle().toLowerCase() == form.title.value.toLowerCase()){\n                    taskExists = true;\n                }\n            }\n            if(taskExists){\n                alert(\"A task with this title already appears in this project.  Please change the title.\");\n                event.preventDefault();\n                event.stopImmediatePropagation();\n            }else{\n                console.log(\"the due date in the form is: \" + form.dueDate.value);\n                let task = new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](form.title.value, form.description.value, form.priority.value, form.dueDate.value, false);\n                _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addTask(task, project.getTitle());\n                modalDiv.style.display=\"none\";\n                UILoad.loadProject(project.getTitle());\n                event.preventDefault();\n                event.stopImmediatePropagation();\n            }\n            \n        });\n\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/UILoad.js?");

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