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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// CSS\r\n__webpack_require__(/*! ./src/style.css */ \"./src/style.css\");\r\n// JS\r\n__webpack_require__(/*! ./src/js/index.js */ \"./src/js/index.js\");\r\n\n\n//# sourceURL=webpack://hangman-game/./app.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvas\": () => (/* binding */ canvas),\n/* harmony export */   \"ctx\": () => (/* binding */ ctx),\n/* harmony export */   \"drawHead\": () => (/* binding */ drawHead),\n/* harmony export */   \"drawLeftArm\": () => (/* binding */ drawLeftArm),\n/* harmony export */   \"drawLeftLeg\": () => (/* binding */ drawLeftLeg),\n/* harmony export */   \"drawRightArm\": () => (/* binding */ drawRightArm),\n/* harmony export */   \"drawTorso\": () => (/* binding */ drawTorso)\n/* harmony export */ });\nconst canvas = document.querySelector('.hangman');\r\nconst ctx = canvas.getContext('2d');\r\nctx.fillStyle = '#fff';\r\nctx.strokeStyle = '#fff';\r\nctx.lineWidth = 5;\r\nctx.fillRect(10, 180, 60, 10);\r\nctx.beginPath();\r\nctx.moveTo(30, 180);\r\nctx.lineTo(30, 0);\r\nctx.lineTo(140, 0);\r\nctx.lineTo(140, 40);\r\nctx.stroke();\r\n\r\nconst drawHead = function () {\r\n  ctx.beginPath();\r\n  ctx.arc(140, 50, 10, 0, Math.PI * 2, true);\r\n  ctx.stroke();\r\n};\r\n\r\nconst drawTorso = function () {\r\n  ctx.moveTo(140, 60);\r\n  ctx.lineTo(140, 130);\r\n  ctx.stroke();\r\n};\r\nconst drawLeftArm = function () {\r\n  ctx.moveTo(140, 60);\r\n  ctx.lineTo(100, 100);\r\n  ctx.stroke();\r\n};\r\nconst drawRightArm = function () {\r\n  ctx.moveTo(140, 60);\r\n  ctx.lineTo(180, 100);\r\n  ctx.stroke();\r\n};\r\nconst drawLeftLeg = function () {\r\n  ctx.moveTo(140, 130);\r\n  ctx.lineTo(100, 180);\r\n  ctx.stroke();\r\n};\r\n\n\n//# sourceURL=webpack://hangman-game/./src/js/canvas.js?");

/***/ }),

/***/ "./src/js/http.js":
/*!************************!*\
  !*** ./src/js/http.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWordFromAPI\": () => (/* binding */ getWordFromAPI)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/js/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_js__WEBPACK_IMPORTED_MODULE_0__]);\n_index_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// HTTP request to swapi.dev\r\n\r\n\r\n\r\nconst getWordFromAPI = async function () {\r\n  const response = await fetch('https://swapi.dev/api/planets');\r\n  try {\r\n    if (response.ok) {\r\n      const data = await response.json();\r\n      const randomWord =\r\n        data.results[Math.floor(Math.random() * data.results.length)].name;\r\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.message.textContent = 'Indovina la parola...una lettera alla volta';\r\n      return randomWord.toLowerCase();\r\n    } else {\r\n      throw new Error(`Ops, qualcosa è andato storto`);\r\n    }\r\n  } catch (error) {\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.showMessage)(`${error.message}`);\r\n  }\r\n};\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://hangman-game/./src/js/http.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"message\": () => (/* binding */ message),\n/* harmony export */   \"showMessage\": () => (/* binding */ showMessage)\n/* harmony export */ });\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/js/canvas.js\");\n/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.js */ \"./src/js/http.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http_js__WEBPACK_IMPORTED_MODULE_1__]);\n_http_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n'use scrict';\r\n\r\n// import _ from 'lodash';\r\n\r\n\r\n\r\nconst theWordEl = document.querySelector('.the-word');\r\nconst keyboardKeysArray = document.querySelectorAll('.btn');\r\nconst layoutChanger = document.querySelector('.change-layout');\r\nconst message = document.querySelector('.message');\r\nconst modal = document.querySelector('.modal');\r\nconst modalMessage = document.querySelector('.modal-message');\r\nconst tryAgain = document.querySelector('.try-again');\r\n\r\nlet score = 6;\r\n\r\nmessage.textContent = 'Recupero parola casuale...';\r\n\r\nconst showMessage = function (text) {\r\n  message.style.visibility = 'visible';\r\n  message.textContent = text;\r\n  setTimeout(() => {\r\n    message.style.visibility = 'hidden';\r\n  }, 1500);\r\n};\r\n\r\n// HTTP request to swapi.dev\r\nconst randomWord = await (0,_http_js__WEBPACK_IMPORTED_MODULE_1__.getWordFromAPI)();\r\n\r\n// Creating an array from randomWord string\r\nconst randomWordArray = Array.from(randomWord);\r\n\r\n// Creating an empty array to fill with player correct alphabets\r\nconst playerArray = [];\r\n\r\n// Adding a dash in \"theWord\" element for every alphabet of randomWord\r\nrandomWordArray.forEach((el) => {\r\n  const span = document.createElement('span');\r\n  if (el !== ' ' && el !== \"'\") {\r\n    theWordEl.appendChild(span);\r\n    span.innerHTML = '_';\r\n  } else {\r\n    theWordEl.appendChild(span);\r\n    span.style.marginRight = '2rem';\r\n    playerArray.push(' ');\r\n  }\r\n});\r\n\r\n// Comparing arrays\r\nconst arraysAreEquals = function () {\r\n  return (\r\n    playerArray.length === randomWordArray.length &&\r\n    playerArray.every((el) => randomWordArray.includes(el))\r\n  );\r\n};\r\n\r\n// Game Logic  ///////////////////////////////////\r\nconst tryAlphabet = (event) => {\r\n  const input = event.target.textContent.toLowerCase();\r\n  const inputIsIncluded = randomWord.includes(input);\r\n\r\n  // avoid double insertion\r\n  if (!playerArray.includes(input)) {\r\n    if (inputIsIncluded) {\r\n      // loop the randomWordArray and check for input match\r\n      for (let i = 0; i < randomWordArray.length; i++) {\r\n        if (input === randomWordArray[i]) {\r\n          // insert input into theWordEl and playerArray\r\n          theWordEl.childNodes[i].innerHTML = input;\r\n          playerArray.push(input);\r\n          if (arraysAreEquals()) {\r\n            showModal(\r\n              `HAI VINTO!!! 🥳🥳🥳 <br> la parola era:<p style=\"color:brown\">${randomWord.toUpperCase()}</p>`,\r\n              'green'\r\n            );\r\n          }\r\n        }\r\n      }\r\n    } else strike();\r\n  } else showMessage('LETTERA GIÀ INSERITA');\r\n};\r\n\r\nconst shakeTheWordEl = function () {\r\n  theWordEl.classList.remove('wrong');\r\n  theWordEl.offsetWidth;\r\n  theWordEl.classList.add('wrong');\r\n};\r\n\r\nconst showModal = function (text, color) {\r\n  modal.style.backgroundColor = color;\r\n  modal.style.display = 'block';\r\n  modalMessage.innerHTML = text;\r\n  tryAgain.classList.remove('hidden');\r\n};\r\n\r\n// Strike logic /////////////////////////////////\r\nconst strike = function () {\r\n  score--;\r\n  shakeTheWordEl();\r\n  showMessage('LETTERA ERRATA');\r\n  if (score === 5) _canvas_js__WEBPACK_IMPORTED_MODULE_0__.drawHead();\r\n  if (score === 4) _canvas_js__WEBPACK_IMPORTED_MODULE_0__.drawTorso();\r\n  if (score === 3) _canvas_js__WEBPACK_IMPORTED_MODULE_0__.drawLeftArm();\r\n  if (score === 2) _canvas_js__WEBPACK_IMPORTED_MODULE_0__.drawRightArm();\r\n  if (score === 1) {\r\n    showMessage('ATTENZIONE! UN ALTRO ERRORE ED AVRAI PERSO');\r\n    _canvas_js__WEBPACK_IMPORTED_MODULE_0__.drawLeftLeg();\r\n  }\r\n  if (score === 0) {\r\n    showModal(\r\n      `HAI PERSO!!! 😔😔😔 <br> la parola segreta era: <p style=\"color:brown\">${randomWord.toUpperCase()}</p>`,\r\n      'red'\r\n    );\r\n  }\r\n};\r\n\r\n// Event listeners //////////////////////////\r\nkeyboardKeysArray.forEach((key) => {\r\n  key.addEventListener('click', tryAlphabet);\r\n});\r\n\r\nlayoutChanger.addEventListener('click', () => {\r\n  document.querySelector('.keyboard.abcde').classList.toggle('hidden');\r\n  document.querySelector('.keyboard.qwerty').classList.toggle('hidden');\r\n});\r\n\r\ntryAgain.addEventListener('click', () => {\r\n  window.location.reload();\r\n});\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://hangman-game/./src/js/index.js?");

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