"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/SideNavBar.tsx":
/*!*******************************************!*\
  !*** ./src/app/components/SideNavBar.tsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SideNavBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _styles_SideNavBar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/SideNavBar.css */ \"(app-pages-browser)/./src/app/styles/SideNavBar.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SideNavBar() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sidenav \".concat(isOpen ? 'expanded' : ''),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"toggle-button\",\n                onClick: ()=>setIsOpen(!isOpen),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: isOpen ? '/assets/images/logo.png' : '/assets/images/logo2.png',\n                    alt: \"Menu Toggle Icon\",\n                    width: \"90%\",\n                    height: \"70%\"\n                }, void 0, false, {\n                    fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"menu-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu-item\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/Home.svg\",\n                                    alt: \"Home\",\n                                    width: \"24\",\n                                    height: \"24\"\n                                }, void 0, false, {\n                                    fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 11\n                                }, this),\n                                isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"In\\xedcio\"\n                                }, void 0, false, {\n                                    fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 24\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu-item\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/importar\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/import.svg\",\n                                    alt: \"Importar\",\n                                    width: \"24\",\n                                    height: \"24\"\n                                }, void 0, false, {\n                                    fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 11\n                                }, this),\n                                isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Importar\"\n                                }, void 0, false, {\n                                    fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 24\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu-item\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/configuracoes\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/Config.svg\",\n                                    alt: \"Configura\\xe7\\xe3o\",\n                                    width: \"24\",\n                                    height: \"24\"\n                                }, void 0, false, {\n                                    fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 11\n                                }, this),\n                                isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Configura\\xe7\\xf5es\"\n                                }, void 0, false, {\n                                    fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 24\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu-item\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/sair\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/Sair.svg\",\n                                    alt: \"Sair\",\n                                    width: \"24\",\n                                    height: \"24\"\n                                }, void 0, false, {\n                                    fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 11\n                                }, this),\n                                isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Sair\"\n                                }, void 0, false, {\n                                    fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 24\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/violeta/Documentos/frontend-planogram/src/app/components/SideNavBar.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(SideNavBar, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = SideNavBar;\nvar _c;\n$RefreshReg$(_c, \"SideNavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TaWRlTmF2QmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNpQztBQUNKO0FBR0s7QUFFbkIsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVyQyxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVyxXQUFvQyxPQUF6QkgsU0FBUyxhQUFhOzswQkFDL0MsOERBQUNJO2dCQUFPRCxXQUFVO2dCQUFnQkUsU0FBUyxJQUFNSixVQUFVLENBQUNEOzBCQUM1RCw0RUFBQ007b0JBQ0dDLEtBQUtQLFNBQVMsNEJBQTRCO29CQUMxQ1EsS0FBSTtvQkFDSkMsT0FBTTtvQkFDTkMsUUFBTzs7Ozs7Ozs7Ozs7MEJBR1gsOERBQUNSO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNMLGlEQUFJQTs0QkFBQ2EsTUFBSzs7OENBQ1gsOERBQUNMO29DQUFJQyxLQUFJO29DQUFZQyxLQUFJO29DQUFPQyxPQUFNO29DQUFLQyxRQUFPOzs7Ozs7Z0NBQy9DVix3QkFBVSw4REFBQ1k7OENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdyQiw4REFBQ1Y7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNMLGlEQUFJQTs0QkFBQ2EsTUFBSzs7OENBQ1gsOERBQUNMO29DQUFJQyxLQUFJO29DQUFjQyxLQUFJO29DQUFXQyxPQUFNO29DQUFLQyxRQUFPOzs7Ozs7Z0NBQ3JEVix3QkFBVSw4REFBQ1k7OENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdyQiw4REFBQ1Y7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNMLGlEQUFJQTs0QkFBQ2EsTUFBSzs7OENBQ1gsOERBQUNMO29DQUFJQyxLQUFJO29DQUFjQyxLQUFJO29DQUFlQyxPQUFNO29DQUFLQyxRQUFPOzs7Ozs7Z0NBQ3pEVix3QkFBVSw4REFBQ1k7OENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdyQiw4REFBQ1Y7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNMLGlEQUFJQTs0QkFBQ2EsTUFBSzs7OENBQ1gsOERBQUNMO29DQUFJQyxLQUFJO29DQUFZQyxLQUFJO29DQUFPQyxPQUFNO29DQUFLQyxRQUFPOzs7Ozs7Z0NBQy9DVix3QkFBVSw4REFBQ1k7OENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdCO0dBekN3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1NpZGVOYXZCYXIudHN4PzI4OTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBGYUhvbWUsIEZhRmlsZUltcG9ydCwgRmFDb2csIEZhU2lnbk91dEFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJzsgLy8gw61jb25lcyBkbyByZWFjdC1pY29uc1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9TaWRlTmF2QmFyLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVOYXZCYXIoKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHNpZGVuYXYgJHtpc09wZW4gPyAnZXhwYW5kZWQnIDogJyd9YH0+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRvZ2dsZS1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9PlxuICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17aXNPcGVuID8gJy9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nJyA6ICcvYXNzZXRzL2ltYWdlcy9sb2dvMi5wbmcnfVxuICAgICAgICAgIGFsdD1cIk1lbnUgVG9nZ2xlIEljb25cIlxuICAgICAgICAgIHdpZHRoPVwiOTAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCI3MCVcIlxuICAgICAgICAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvSG9tZS5zdmdcIiBhbHQ9XCJIb21lXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgLz5cbiAgICAgICAgICAgIHtpc09wZW4gJiYgPHNwYW4+SW7DrWNpbzwvc3Bhbj59XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2ltcG9ydGFyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1wb3J0LnN2Z1wiIGFsdD1cIkltcG9ydGFyXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgLz5cbiAgICAgICAgICAgIHtpc09wZW4gJiYgPHNwYW4+SW1wb3J0YXI8L3NwYW4+fVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb25maWd1cmFjb2VzXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvQ29uZmlnLnN2Z1wiIGFsdD1cIkNvbmZpZ3VyYcOnw6NvXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgLz5cbiAgICAgICAgICAgIHtpc09wZW4gJiYgPHNwYW4+Q29uZmlndXJhw6fDtWVzPC9zcGFuPn1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2FpclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL1NhaXIuc3ZnXCIgYWx0PVwiU2FpclwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIC8+XG4gICAgICAgICAgICB7aXNPcGVuICYmIDxzcGFuPlNhaXI8L3NwYW4+fVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJTaWRlTmF2QmFyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SideNavBar.tsx\n"));

/***/ })

});