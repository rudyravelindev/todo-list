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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --bg-primary: #f8fafc;\n  --bg-sidebar: #0f172a;\n  --text-main: #1e293b;\n  --text-light: #64748b;\n  --text-white: #ffffff;\n  --border-color: #e2e8f0;\n\n  --primary: #2563eb;\n  --primary-hover: #1d4ed8;\n  --success: #16a34a;\n  --success-hover: #15803d;\n  --danger: #ef4444;\n  --danger-hover: #dc2626;\n\n  --priority-low: #3b82f6;\n  --priority-medium: #f59e0b;\n  --priority-high: #ef4444;\n\n  --radius-md: 8px;\n  --radius-lg: 12px;\n  --transition: all 0.2s ease-in-out;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family:\n    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,\n    sans-serif;\n  background-color: var(--bg-primary);\n  color: var(--text-main);\n  line-height: 1.5;\n  height: 100vh;\n  overflow: hidden;\n}\n\n#app {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  height: 100vh;\n  width: 100vw;\n}\n\n#sidebar {\n  background-color: var(--bg-sidebar);\n  color: var(--text-white);\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem;\n  border-right: 1px solid var(--border-color);\n}\n\n.sidebar-header {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n\n.sidebar-header h2 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: -0.025em;\n}\n\n.project-list-container {\n  flex: 1;\n  overflow-y: auto;\n}\n\n#project-list {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.project-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: var(--transition);\n}\n\n.project-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.project-item.active {\n  background-color: var(--primary);\n  color: var(--text-white);\n}\n\n.project-name-text {\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n\n.btn-delete-project {\n  background: none;\n  border: none;\n  color: currentColor;\n  font-size: 1.25rem;\n  cursor: pointer;\n  opacity: 0.6;\n  padding: 0 0.25rem;\n  transition: var(--transition);\n}\n\n.btn-delete-project:hover {\n  opacity: 1;\n  transform: scale(1.1);\n}\n\n#main-content {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  overflow-y: auto;\n}\n\n.main-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid var(--border-color);\n}\n\n#current-project-title {\n  font-size: 1.75rem;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n}\n\n.task-section {\n  flex: 1;\n}\n\n#task-list {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.no-tasks {\n  color: var(--text-light);\n  font-style: italic;\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.task-item {\n  background-color: var(--text-white);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  padding: 1.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: var(--transition);\n}\n\n.task-item:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  transform: translateY(-1px);\n}\n\n.task-main-info {\n  flex: 1;\n}\n\n.task-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  display: block;\n}\n\n.task-desc {\n  color: var(--text-light);\n  font-size: 0.9rem;\n}\n\n.task-meta {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.task-date {\n  font-size: 0.85rem;\n  color: var(--text-light);\n  background-color: var(--bg-primary);\n  padding: 0.25rem 0.5rem;\n  border-radius: var(--radius-md);\n}\n\n.task-badge {\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n.task-item.priority-low {\n  border-left: 5px solid var(--priority-low);\n}\n.task-item.priority-low .task-badge {\n  background-color: #eff6ff;\n  color: var(--priority-low);\n}\n\n.task-item.priority-medium {\n  border-left: 5px solid var(--priority-medium);\n}\n.task-item.priority-medium .task-badge {\n  background-color: #fffbeb;\n  color: var(--priority-medium);\n}\n\n.task-item.priority-high {\n  border-left: 5px solid var(--priority-high);\n}\n.task-item.priority-high .task-badge {\n  background-color: #fef2f2;\n  color: var(--priority-high);\n}\n\n.task-item.status-done {\n  opacity: 0.6;\n}\n.task-item.status-done .task-title {\n  text-decoration: line-through;\n}\n\ndialog {\n  border: none;\n  border-radius: var(--radius-lg);\n  box-shadow:\n    0 20px 25px -5px rgba(0, 0, 0, 0.1),\n    0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  padding: 2rem;\n  width: 100%;\n  max-width: 500px;\n  margin: auto;\n}\n\ndialog::backdrop {\n  background-color: rgba(15, 23, 42, 0.5);\n  backdrop-filter: blur(4px);\n}\n\ndialog h3 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  letter-spacing: -0.025em;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1.25rem;\n}\n\n.form-group label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-main);\n}\n\n.form-group input[type='text'],\n.form-group input[type='date'],\n.form-group select,\n.form-group textarea {\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background-color: var(--text-white);\n  font-family: inherit;\n  font-size: 0.95rem;\n  color: var(--text-main);\n  transition: var(--transition);\n}\n\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n}\n\n.form-group textarea {\n  resize: vertical;\n}\n\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 2rem;\n}\n\nbutton {\n  font-family: inherit;\n  font-size: 0.925rem;\n  font-weight: 600;\n  padding: 0.625rem 1.25rem;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: var(--transition);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\nbutton:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.btn-primary {\n  background-color: var(--primary);\n  color: var(--text-white);\n}\n.btn-primary:not(:disabled):hover {\n  background-color: var(--primary-hover);\n}\n\n.btn-success {\n  background-color: var(--success);\n  color: var(--text-white);\n}\n.btn-success:not(:disabled):hover {\n  background-color: var(--success-hover);\n}\n\n.btn-secondary {\n  background-color: var(--bg-primary);\n  color: var(--text-main);\n  border: 1px solid var(--border-color);\n}\n.btn-secondary:not(:disabled):hover {\n  background-color: var(--border-color);\n}\n\n.btn-delete-task {\n  background-color: transparent;\n  color: var(--text-light);\n  border: 1px solid var(--border-color);\n  padding: 0.375rem 0.75rem;\n  font-size: 0.85rem;\n}\n.btn-delete-task:hover {\n  background-color: var(--danger);\n  color: var(--text-white);\n  border-color: var(--danger);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/project.js"
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createProject(name) {\n  return {\n    id: crypto.randomUUID(),\n    name,\n    tasks: [],\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?\n}");

/***/ },

/***/ "./src/modules/projectManager.js"
/*!***************************************!*\
  !*** ./src/modules/projectManager.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/modules/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\n\n\nconst projectManager = (function () {\n  let projects = [];\n\n  const saveToStorage = () => {\n    try {\n      const projectsJson = JSON.stringify(projects);\n      localStorage.setItem('projectsData', projectsJson);\n    } catch (error) {\n      console.error('Error saving to localStorage:', error);\n    }\n  };\n\n  const loadFromStorage = () => {\n    try {\n      const projectsJson = localStorage.getItem('projectsData');\n      if (projectsJson !== null) {\n        projects = JSON.parse(projectsJson);\n      }\n    } catch (error) {\n      console.error('Error loading from localStorage:', error);\n    }\n  };\n  loadFromStorage();\n  console.log('after load:', projects);\n  if (projects.length === 0) {\n    projects.push((0,_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Default'));\n  }\n  console.log('after default:', projects);\n  if (projects.length === 0) {\n    projects.push((0,_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Default'));\n  }\n  const addProject = (name) => {\n    const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n    projects.push(newProject);\n    saveToStorage();\n    return newProject;\n  };\n\n  const getProject = () => projects;\n\n  const deleteProject = (id) => {\n    projects = projects.filter((project) => project.id !== id);\n    saveToStorage();\n  };\n  const addTask = (projectId, title, description, date, priority, status) => {\n    const project = projects.find((p) => p.id === projectId);\n    if (!project) return null;\n\n    const newTask = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title, description, date, priority, status);\n\n    project.tasks.push(newTask);\n\n    saveToStorage();\n    return newTask;\n  };\n\n  const deleteTask = (projectId, taskId) => {\n    const project = projects.find((p) => p.id === projectId);\n    if (!project) return;\n\n    project.tasks = project.tasks.filter((task) => task.id !== taskId);\n    saveToStorage();\n  };\n\n  return {\n    addProject,\n    getProject,\n    deleteProject,\n    deleteTask,\n    addTask,\n    saveToStorage,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/projectManager.js?\n}");

/***/ },

/***/ "./src/modules/task.js"
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTask(title, description, date, priority, status) {\n  return {\n    id: crypto.randomUUID(),\n    title,\n    description,\n    date,\n    priority,\n    status,\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?\n}");

/***/ },

/***/ "./src/ui.js"
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/projectManager.js */ \"./src/modules/projectManager.js\");\n\n\nlet activeProjectId = null;\n\nconst projectModal = document.getElementById('project-modal');\nconst openProjectModalBtn = document.getElementById('open-project-modal');\nconst closeProjectModalBtn = document.getElementById('close-project-modal');\nconst projectForm = document.getElementById('project-form');\n\nconst taskModal = document.getElementById('task-modal');\nconst openTaskModalBtn = document.getElementById('open-task-modal');\nconst closeTaskModalBtn = document.getElementById('close-task-modal');\nconst taskForm = document.getElementById('task-form');\n\nconst projectListEl = document.getElementById('project-list');\nconst taskListEl = document.getElementById('task-list');\n\nfunction renderProjects() {\n  const currentProjectTitleEl = document.getElementById(\n    'current-project-title',\n  );\n\n  projectListEl.innerHTML = '';\n\n  const projects = _modules_projectManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProject();\n\n  if (activeProjectId === null && projects.length > 0) {\n    activeProjectId = projects[0].id;\n  }\n\n  projects.forEach((project) => {\n    const li = document.createElement('li');\n    li.className = `project-item ${project.id === activeProjectId ? 'active' : ''}`;\n    li.setAttribute('data-project-id', project.id);\n\n    const nameSpan = document.createElement('span');\n    nameSpan.className = 'project-name-text';\n    nameSpan.textContent = project.name;\n\n    const deleteBtn = document.createElement('button');\n    deleteBtn.className = 'btn-delete-project';\n    deleteBtn.textContent = '×';\n\n    li.appendChild(nameSpan);\n    li.appendChild(deleteBtn);\n    projectListEl.appendChild(li);\n  });\n\n  const currentProject = projects.find((p) => p.id === activeProjectId);\n  if (currentProject) {\n    currentProjectTitleEl.textContent = currentProject.name;\n    openTaskModalBtn.removeAttribute('disabled');\n    renderTasks(activeProjectId);\n  } else {\n    currentProjectTitleEl.textContent = 'Select a Project';\n    openTaskModalBtn.setAttribute('disabled', 'true');\n    renderTasks(null);\n  }\n}\n\nfunction renderTasks(projectId) {\n  taskListEl.innerHTML = '';\n\n  if (!projectId) return;\n\n  const projects = _modules_projectManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProject();\n  const currentProject = projects.find((p) => p.id === projectId);\n\n  if (\n    !currentProject ||\n    !currentProject.tasks ||\n    currentProject.tasks.length === 0\n  ) {\n    taskListEl.innerHTML =\n      '<li class=\"no-tasks\">No tasks found for this project.</li>';\n    return;\n  }\n\n  currentProject.tasks.forEach((task) => {\n    const li = document.createElement('li');\n    li.className = `task-item priority-${task.priority} status-${task.status}`;\n    li.setAttribute('data-task-id', task.id);\n\n    li.innerHTML = `\n            <div class=\"task-main-info\">\n                <span class=\"task-title\">${task.title}</span>\n                <p class=\"task-desc\">${task.description || ''}</p>\n            </div>\n            <div class=\"task-meta\">\n                <span class=\"task-date\">${task.dueDate || ''}</span>\n                <span class=\"task-badge\">${task.priority.toUpperCase()}</span>\n                <button class=\"btn-delete-task\">Delete</button>\n            </div>\n        `;\n    taskListEl.appendChild(li);\n  });\n}\n\nopenProjectModalBtn.addEventListener('click', () => {\n  projectModal.showModal();\n});\n\ncloseProjectModalBtn.addEventListener('click', () => {\n  projectForm.reset();\n  projectModal.close();\n});\n\nprojectForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n\n  const projectNameInput = document.getElementById('project-name-input');\n  const name = projectNameInput.value.trim();\n\n  if (name) {\n    const newProject = _modules_projectManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(name);\n    activeProjectId = newProject.id;\n    projectForm.reset();\n    projectModal.close();\n    renderProjects();\n  }\n});\n\nopenTaskModalBtn.addEventListener('click', () => {\n  taskModal.showModal();\n});\n\ncloseTaskModalBtn.addEventListener('click', () => {\n  taskForm.reset();\n  taskModal.close();\n});\n\ntaskForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n\n  const title = document.getElementById('task-title-input').value.trim();\n  const description = document.getElementById('task-desc-input').value.trim();\n  const date = document.getElementById('task-date-input').value;\n  const priority = document.getElementById('task-priority-input').value;\n  const status = document.getElementById('task-status-input').value;\n\n  if (title && activeProjectId !== null) {\n    _modules_projectManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(\n      activeProjectId,\n      title,\n      description,\n      date,\n      priority,\n      status,\n    );\n\n    taskForm.reset();\n    taskModal.close();\n    renderTasks(activeProjectId);\n  }\n});\n\nprojectListEl.addEventListener('click', (e) => {\n  const projectItem = e.target.closest('.project-item');\n  if (!projectItem) return;\n\n  const projectId = projectItem.getAttribute('data-project-id');\n\n  if (e.target.classList.contains('btn-delete-project')) {\n    e.stopPropagation();\n\n    _modules_projectManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject(projectId);\n\n    if (activeProjectId === projectId) {\n      activeProjectId = null;\n    }\n\n    renderProjects();\n    return;\n  }\n\n  activeProjectId = projectId;\n  renderProjects();\n});\n\ntaskListEl.addEventListener('click', (e) => {\n  if (e.target.classList.contains('btn-delete-task')) {\n    const taskItem = e.target.closest('.task-item');\n    if (!taskItem) return;\n\n    const taskId = taskItem.getAttribute('data-task-id');\n\n    _modules_projectManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(activeProjectId, taskId);\n\n    renderTasks(activeProjectId);\n  }\n});\n\nrenderProjects();\n\n\n//# sourceURL=webpack://todo-list/./src/ui.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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