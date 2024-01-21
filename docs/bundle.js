/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/style.css */ \"./src/style.css\");\n/* harmony import */ var _src_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/index.js */ \"./src/js/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_js_index_js__WEBPACK_IMPORTED_MODULE_1__]);\n_src_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// CSS\n\n// JS\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://hangman-game/./app.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hangman-game/./src/style.css?");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvas\": () => (/* binding */ canvas),\n/* harmony export */   \"ctx\": () => (/* binding */ ctx),\n/* harmony export */   \"drawHead\": () => (/* binding */ drawHead),\n/* harmony export */   \"drawLeftArm\": () => (/* binding */ drawLeftArm),\n/* harmony export */   \"drawLeftLeg\": () => (/* binding */ drawLeftLeg),\n/* harmony export */   \"drawRightArm\": () => (/* binding */ drawRightArm),\n/* harmony export */   \"drawTorso\": () => (/* binding */ drawTorso)\n/* harmony export */ });\nconst canvas = document.querySelector('.hangman');\nconst ctx = canvas.getContext('2d');\nctx.fillStyle = '#fff';\nctx.strokeStyle = '#fff';\nctx.lineWidth = 5;\nctx.fillRect(10, 180, 60, 10);\nctx.beginPath();\nctx.moveTo(30, 180);\nctx.lineTo(30, 0);\nctx.lineTo(140, 0);\nctx.lineTo(140, 40);\nctx.stroke();\n\nconst drawHead = function () {\n  ctx.beginPath();\n  ctx.arc(140, 50, 10, 0, Math.PI * 2, true);\n  ctx.stroke();\n};\n\nconst drawTorso = function () {\n  ctx.moveTo(140, 60);\n  ctx.lineTo(140, 130);\n  ctx.stroke();\n};\nconst drawLeftArm = function () {\n  ctx.moveTo(140, 60);\n  ctx.lineTo(100, 100);\n  ctx.stroke();\n};\nconst drawRightArm = function () {\n  ctx.moveTo(140, 60);\n  ctx.lineTo(180, 100);\n  ctx.stroke();\n};\nconst drawLeftLeg = function () {\n  ctx.moveTo(140, 130);\n  ctx.lineTo(100, 180);\n  ctx.stroke();\n};\n\n\n//# sourceURL=webpack://hangman-game/./src/js/canvas.js?");

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ ((module) => {

eval("const areEquals = (array1, array2) => {\n  if (typeof array1 === 'object' && typeof array2 === 'object') {\n    if (\n      array1.length > 0 &&\n      array2.length > 0 &&\n      array1.length === array2.length &&\n      array1.every((el) => array2.includes(el))\n    ) {\n      return true;\n    } else return false;\n  } else return false;\n};\n\nmodule.exports = { areEquals };\n\n\n//# sourceURL=webpack://hangman-game/./src/js/helpers.js?");

/***/ }),

/***/ "./src/js/http.js":
/*!************************!*\
  !*** ./src/js/http.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWordFromAPI\": () => (/* binding */ getWordFromAPI)\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/js/view.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_view__WEBPACK_IMPORTED_MODULE_0__]);\n_view__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// HTTP request\n\n\nconst getWordFromAPI = async function () {\n\ttry {\n\t\tconst response = await fetch(\"https://random-word-api.herokuapp.com/word?lang=it\");\n\t\tif (response.ok) {\n\t\t\tconst words = await response.json();\n\t\t\treturn words[0];\n\t\t} else {\n\t\t\tthrow new Error(`Ops, qualcosa è andato storto`);\n\t\t}\n\t} catch (error) {\n\t\t(0,_view__WEBPACK_IMPORTED_MODULE_0__.showMessage)(`${error.message}`);\n\t}\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://hangman-game/./src/js/http.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"playerArray\": () => (/* binding */ playerArray),\n/* harmony export */   \"tryAlphabet\": () => (/* binding */ tryAlphabet)\n/* harmony export */ });\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ \"./src/js/http.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/js/view.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ \"./src/js/canvas.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ \"./src/js/helpers.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http__WEBPACK_IMPORTED_MODULE_0__, _view__WEBPACK_IMPORTED_MODULE_1__]);\n([_http__WEBPACK_IMPORTED_MODULE_0__, _view__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\"use scrict\";\n\n\n\n\n\n\nconst keyboardKeysArray = document.querySelectorAll(\".btn\");\nconst layoutChanger = document.querySelector(\".change-layout\");\n\n// Setting starting score\nlet score = 6;\n\n_view__WEBPACK_IMPORTED_MODULE_1__.setMessage(\"Recupero parola casuale...\");\n\nconst randomWord = await (0,_http__WEBPACK_IMPORTED_MODULE_0__.getWordFromAPI)();\n\n// Creating an empty array to fill with player correct alphabets\nconst playerArray = [];\n\n// Adding a dash in \"theWord\" element for every alphabet in randomWord\n_view__WEBPACK_IMPORTED_MODULE_1__.renderADashPerAlphabet(randomWord);\n\n_view__WEBPACK_IMPORTED_MODULE_1__.setMessage(\"Indovina la parola...una lettera alla volta\");\n\n// Strike logic /////////////////////////////////\nconst strike = function () {\n\tscore--;\n\t_view__WEBPACK_IMPORTED_MODULE_1__.shakeTheWordEl();\n\t_view__WEBPACK_IMPORTED_MODULE_1__.showMessage(\"LETTERA ERRATA\");\n\tswitch (score) {\n\t\tcase 5:\n\t\t\t_canvas__WEBPACK_IMPORTED_MODULE_2__.drawHead();\n\t\t\tbreak;\n\t\tcase 4:\n\t\t\t_canvas__WEBPACK_IMPORTED_MODULE_2__.drawTorso();\n\t\t\tbreak;\n\t\tcase 3:\n\t\t\t_canvas__WEBPACK_IMPORTED_MODULE_2__.drawLeftArm();\n\t\t\tbreak;\n\t\tcase 2:\n\t\t\t_canvas__WEBPACK_IMPORTED_MODULE_2__.drawRightArm();\n\t\t\tbreak;\n\t\tcase 1: {\n\t\t\t_canvas__WEBPACK_IMPORTED_MODULE_2__.drawLeftLeg();\n\t\t\t_view__WEBPACK_IMPORTED_MODULE_1__.setMessage(\"ATTENZIONE! UN ALTRO ERRORE ED AVRAI PERSO\");\n\t\t\tbreak;\n\t\t}\n\t\tcase 0: {\n\t\t\t_view__WEBPACK_IMPORTED_MODULE_1__.showModal(\n\t\t\t\t`HAI PERSO!!! 😔😔😔 <br> la parola segreta era: <p style=\"color:brown\">${randomWord.toUpperCase()}</p>`,\n\t\t\t\t\"red\"\n\t\t\t);\n\t\t}\n\t}\n};\n\n// Game Logic  ///////////////////////////////////\nconst tryAlphabet = (event) => {\n\tconst input = event.target.textContent.toLowerCase();\n\tif (randomWord.includes(input)) {\n\t\t// avoid double insertion\n\t\tif (!playerArray.includes(input)) {\n\t\t\tconst randomWordArray = Array.from(randomWord);\n\t\t\trandomWordArray.forEach((alphabet, index) => {\n\t\t\t\tif (alphabet === input) {\n\t\t\t\t\t_view__WEBPACK_IMPORTED_MODULE_1__.theWordEl.childNodes[index].innerHTML = input;\n\t\t\t\t\tplayerArray.push(input);\n\t\t\t\t\tif ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.areEquals)(playerArray, randomWordArray)) {\n\t\t\t\t\t\t_view__WEBPACK_IMPORTED_MODULE_1__.showModal(\n\t\t\t\t\t\t\t`HAI VINTO!!! 🥳🥳🥳 <br> la parola era:<p style=\"color:brown\">${randomWord.toUpperCase()}</p>`,\n\t\t\t\t\t\t\t\"green\"\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\t\t} else _view__WEBPACK_IMPORTED_MODULE_1__.showMessage(\"LETTERA GIÀ INSERITA\");\n\t} else strike();\n};\n\n// Event listeners //////////////////////////\nkeyboardKeysArray.forEach((key) => {\n\tkey.addEventListener(\"click\", tryAlphabet);\n});\n\nlayoutChanger.addEventListener(\"click\", () => {\n\tdocument.querySelector(\".keyboard.abcde\").classList.toggle(\"hidden\");\n\tdocument.querySelector(\".keyboard.qwerty\").classList.toggle(\"hidden\");\n});\n\n_view__WEBPACK_IMPORTED_MODULE_1__.tryAgain.addEventListener(\"click\", () => {\n\twindow.location.reload();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ playerArray, tryAlphabet });\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://hangman-game/./src/js/index.js?");

/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"message\": () => (/* binding */ message),\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"modalMessage\": () => (/* binding */ modalMessage),\n/* harmony export */   \"renderADashPerAlphabet\": () => (/* binding */ renderADashPerAlphabet),\n/* harmony export */   \"setMessage\": () => (/* binding */ setMessage),\n/* harmony export */   \"shakeTheWordEl\": () => (/* binding */ shakeTheWordEl),\n/* harmony export */   \"showMessage\": () => (/* binding */ showMessage),\n/* harmony export */   \"showModal\": () => (/* binding */ showModal),\n/* harmony export */   \"theWordEl\": () => (/* binding */ theWordEl),\n/* harmony export */   \"tryAgain\": () => (/* binding */ tryAgain)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);\n_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nconst theWordEl = document.querySelector('.the-word');\nconst message = document.querySelector('.message');\nconst modal = document.querySelector('.modal');\nconst modalMessage = document.querySelector('.modal-message');\nconst tryAgain = document.querySelector('.try-again');\n\n\n\nconst setMessage = (text) => {\n  message.textContent = text;\n};\n\nconst showMessage = (text) => {\n  message.style.visibility = 'visible';\n  message.textContent = text;\n  setTimeout(() => {\n    message.style.visibility = 'hidden';\n  }, 1500);\n};\n\nconst renderADashPerAlphabet = (string) => {\n  for (const alphabet of string) {\n    const span = document.createElement('span');\n    if (alphabet !== ' ' && alphabet !== \"'\") {\n      theWordEl.appendChild(span);\n      span.innerHTML = '_';\n    } else {\n      theWordEl.appendChild(span);\n      span.style.marginRight = '2rem';\n      _index__WEBPACK_IMPORTED_MODULE_0__.playerArray.push(' ');\n    }\n  }\n};\n\nconst shakeTheWordEl = function () {\n  theWordEl.classList.remove('wrong');\n  theWordEl.offsetWidth;\n  theWordEl.classList.add('wrong');\n};\n\nconst showModal = function (text, color) {\n  modal.style.backgroundColor = color;\n  modal.style.display = 'block';\n  modalMessage.innerHTML = text;\n  tryAgain.classList.remove('hidden');\n};\n\nconst closeModal = function () {\n  modal.style.display = 'none';\n  tryAgain.classList.add('hidden');\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://hangman-game/./src/js/view.js?");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;