"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/loginPage/Signup.js":
/*!********************************************!*\
  !*** ./src/components/loginPage/Signup.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_cinetie_developer_Desktop_All_RoomyFam_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_cinetie_developer_Desktop_All_RoomyFam_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cinetie_developer_Desktop_All_RoomyFam_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Signup = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), password = ref2[0], setPassword = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), error = ref3[0], setError = ref3[1];\n    var handleRegistration = function() {\n        var _ref = _asyncToGenerator(_Users_cinetie_developer_Desktop_All_RoomyFam_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            return _Users_cinetie_developer_Desktop_All_RoomyFam_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        if (!(email.trim() === '' || password.trim() === '')) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        setError('Please enter both email and password.');\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        setIsLoading(true);\n                        // Perform registration logic here\n                        setTimeout(function() {\n                            setIsLoading(false);\n                            setIsRegistered(true);\n                        }, 2000);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleRegistration(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"border border-brown-500 p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"text-lg font-medium mb-4 text-amber-900\",\n                children: \"Registration\"\n            }, void 0, false, {\n                fileName: \"/Users/cinetie-developer/Desktop/All/RoomyFam/src/components/loginPage/Signup.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"text-red-500 mb-4\",\n                children: [\n                    \"We are currently not allowing sign-in. This feature is still in progress.\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://docs.google.com/forms/d/e/1FAIpQLSdTKngJsgbrobMpCxRxrkpA5UqQErtHg4lgKRVS6QFwyIcGow/viewform?usp=sf_link\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"text-amber-900\",\n                        children: \"Join our waiting list\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cinetie-developer/Desktop/All/RoomyFam/src/components/loginPage/Signup.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cinetie-developer/Desktop/All/RoomyFam/src/components/loginPage/Signup.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: handleRegistration,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"block mb-2\",\n                        children: \"Email Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cinetie-developer/Desktop/All/RoomyFam/src/components/loginPage/Signup.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        className: \"border border-gray-300 rounded-md w-full py-2 px-3 mb-4\",\n                        type: \"email\",\n                        name: \"email\",\n                        value: email,\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        },\n                        placeholder: \"Type your email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cinetie-developer/Desktop/All/RoomyFam/src/components/loginPage/Signup.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"block mb-2\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cinetie-developer/Desktop/All/RoomyFam/src/components/loginPage/Signup.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        className: \"border border-gray-300 rounded-md w-full py-2 px-3 mb-4\",\n                        type: \"password\",\n                        name: \"password\",\n                        value: password,\n                        onChange: function(e) {\n                            return setPassword(e.target.value);\n                        },\n                        placeholder: \"Type your password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cinetie-developer/Desktop/All/RoomyFam/src/components/loginPage/Signup.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"bg-amber-800 text-white font-semibold px-4 py-2 text-center mb-6 rounded hover:bg-amber-900 transition duration-200 relative\",\n                        type: \"submit\",\n                        disabled: true,\n                        children: [\n                            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"absolute inset-0 flex items-center justify-center text-brown-700\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cinetie-developer/Desktop/All/RoomyFam/src/components/loginPage/Signup.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/cinetie-developer/Desktop/All/RoomyFam/src/components/loginPage/Signup.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, _this),\n                            \"Register\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cinetie-developer/Desktop/All/RoomyFam/src/components/loginPage/Signup.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cinetie-developer/Desktop/All/RoomyFam/src/components/loginPage/Signup.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cinetie-developer/Desktop/All/RoomyFam/src/components/loginPage/Signup.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this));\n};\n_s(Signup, \"Ck/1J9BRz65knuKMx/nu1SlWgbs=\");\n_c = Signup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\nvar _c;\n$RefreshReg$(_c, \"Signup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sb2dpblBhZ2UvU2lnbnVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLEdBQUssQ0FBQ0csTUFBTSxHQUFHLFFBQ2YsR0FEcUIsQ0FBQzs7SUFDcEIsR0FBSyxDQUE2QkgsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBekNJLFNBQVMsR0FBa0JKLEdBQWUsS0FBL0JLLFlBQVksR0FBSUwsR0FBZTtJQUNqRCxHQUFLLENBQXFCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE5Qk0sS0FBSyxHQUFjTixJQUFZLEtBQXhCTyxRQUFRLEdBQUlQLElBQVk7SUFDdEMsR0FBSyxDQUEyQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcENRLFFBQVEsR0FBaUJSLElBQVksS0FBM0JTLFdBQVcsR0FBSVQsSUFBWTtJQUM1QyxHQUFLLENBQXFCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE5QlUsS0FBSyxHQUFjVixJQUFZLEtBQXhCVyxRQUFRLEdBQUlYLElBQVk7SUFFdEMsR0FBSyxDQUFDWSxrQkFBa0I7OExBQUcsUUFBUSxTQUFEQyxLQUFLLEVBQUssQ0FBQzs7Ozt3QkFDM0NBLEtBQUssQ0FBQ0MsY0FBYzs4QkFHaEJSLEtBQUssQ0FBQ1MsSUFBSSxPQUFPLENBQUUsS0FBSVAsUUFBUSxDQUFDTyxJQUFJLE9BQU8sQ0FBRTs7Ozt3QkFDL0NKLFFBQVEsQ0FBQyxDQUF1Qzs7O3dCQUlsRE4sWUFBWSxDQUFDLElBQUk7d0JBQ2pCLEVBQWtDO3dCQUNsQ1csVUFBVSxDQUFDLFFBQ2YsR0FEcUIsQ0FBQzs0QkFDaEJYLFlBQVksQ0FBQyxLQUFLOzRCQUNsQlksZUFBZSxDQUFDLElBQUk7d0JBQ3RCLENBQUMsRUFBRSxJQUFJOzs7Ozs7UUFDVCxDQUFDO3dCQWZLTCxrQkFBa0IsQ0FBVUMsS0FBSzs7OztJQWlCdkMsTUFBTSw2RUFDSEssQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBNkI7O3dGQUN6Q0MsQ0FBRTtnQkFBQ0QsU0FBUyxFQUFDLENBQXlDOzBCQUFDLENBQVk7Ozs7Ozt3RkFDbkVFLENBQUM7Z0JBQUNGLFNBQVMsRUFBQyxDQUFtQjs7b0JBQUMsQ0FDMEM7b0JBQUMsQ0FBRztnR0FDNUVHLENBQUM7d0JBQUNDLElBQUksRUFBQyxDQUFpSDt3QkFBQ0MsTUFBTSxFQUFDLENBQVE7d0JBQUNDLEdBQUcsRUFBQyxDQUFxQjt3QkFBQ04sU0FBUyxFQUFDLENBQWdCO2tDQUFDLENBQXFCOzs7Ozs7Ozs7Ozs7d0ZBRXJOTyxDQUFJO2dCQUFDQyxRQUFRLEVBQUVmLGtCQUFrQjs7Z0dBQy9CZ0IsQ0FBSzt3QkFBQ1QsU0FBUyxFQUFDLENBQVk7a0NBQUMsQ0FBYTs7Ozs7O2dHQUMxQ1UsQ0FBSzt3QkFDSlYsU0FBUyxFQUFDLENBQXlEO3dCQUNuRVcsSUFBSSxFQUFDLENBQU87d0JBQ1pDLElBQUksRUFBQyxDQUFPO3dCQUNaQyxLQUFLLEVBQUUxQixLQUFLO3dCQUNaMkIsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQzs0QkFBSzNCLE1BQU0sQ0FBTkEsUUFBUSxDQUFDMkIsQ0FBQyxDQUFDVixNQUFNLENBQUNRLEtBQUs7O3dCQUN4Q0csV0FBVyxFQUFDLENBQWlCOzs7Ozs7Z0dBRTlCUCxDQUFLO3dCQUFDVCxTQUFTLEVBQUMsQ0FBWTtrQ0FBQyxDQUFROzs7Ozs7Z0dBQ3JDVSxDQUFLO3dCQUNKVixTQUFTLEVBQUMsQ0FBeUQ7d0JBQ25FVyxJQUFJLEVBQUMsQ0FBVTt3QkFDZkMsSUFBSSxFQUFDLENBQVU7d0JBQ2ZDLEtBQUssRUFBRXhCLFFBQVE7d0JBQ2Z5QixRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRCQUFLekIsTUFBTSxDQUFOQSxXQUFXLENBQUN5QixDQUFDLENBQUNWLE1BQU0sQ0FBQ1EsS0FBSzs7d0JBQzNDRyxXQUFXLEVBQUMsQ0FBb0I7Ozs7OztnR0FFakNDLENBQU07d0JBQ0xqQixTQUFTLEVBQUMsQ0FBOEg7d0JBQ3hJVyxJQUFJLEVBQUMsQ0FBUTt3QkFDYk8sUUFBUSxFQUFFLElBQUk7OzRCQUViakMsU0FBUyxnRkFDUGMsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQWtFO3NIQUM5RUQsQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQTZFOzs7Ozs7Ozs7Ozs0QkFFOUYsQ0FFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7R0FoRUtoQixNQUFNO0tBQU5BLE1BQU07QUFrRVosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sb2dpblBhZ2UvU2lnbnVwLmpzPzQwMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZVJlZ2lzdHJhdGlvbiA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBWYWxpZGF0ZSBlbWFpbCBhbmQgcGFzc3dvcmRcbiAgICBpZiAoZW1haWwudHJpbSgpID09PSAnJyB8fCBwYXNzd29yZC50cmltKCkgPT09ICcnKSB7XG4gICAgICBzZXRFcnJvcignUGxlYXNlIGVudGVyIGJvdGggZW1haWwgYW5kIHBhc3N3b3JkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAvLyBQZXJmb3JtIHJlZ2lzdHJhdGlvbiBsb2dpYyBoZXJlXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgc2V0SXNSZWdpc3RlcmVkKHRydWUpO1xuICAgIH0sIDIwMDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJyb3duLTUwMCBwLTRcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIG1iLTQgdGV4dC1hbWJlci05MDBcIj5SZWdpc3RyYXRpb248L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIG1iLTRcIj5cbiAgICAgICAgV2UgYXJlIGN1cnJlbnRseSBub3QgYWxsb3dpbmcgc2lnbi1pbi4gVGhpcyBmZWF0dXJlIGlzIHN0aWxsIGluIHByb2dyZXNzLntcIiBcIn1cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvZS8xRkFJcFFMU2RUS25nSnNnYnJvYk1wQ3hSeHJrcEE1VXFRRXJ0SGc0bGdLUlZTNlFGd3lJY0dvdy92aWV3Zm9ybT91c3A9c2ZfbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9J3RleHQtYW1iZXItOTAwJz5Kb2luIG91ciB3YWl0aW5nIGxpc3Q8L2E+XG4gICAgICA8L3A+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlUmVnaXN0cmF0aW9ufT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTJcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHctZnVsbCBweS0yIHB4LTMgbWItNFwiXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBlbWFpbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi0yXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgdy1mdWxsIHB5LTIgcHgtMyBtYi00XCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWFtYmVyLTgwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHgtNCBweS0yIHRleHQtY2VudGVyIG1iLTYgcm91bmRlZCBob3ZlcjpiZy1hbWJlci05MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgcmVsYXRpdmVcIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICA+XG4gICAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1icm93bi03MDBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXIgZWFzZS1saW5lYXIgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci10LTIgYm9yZGVyLWdyYXktMjAwIGgtNiB3LTZcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiU2lnbnVwIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlUmVnaXN0cmF0aW9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJzZXRUaW1lb3V0Iiwic2V0SXNSZWdpc3RlcmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/loginPage/Signup.js\n");

/***/ })

});