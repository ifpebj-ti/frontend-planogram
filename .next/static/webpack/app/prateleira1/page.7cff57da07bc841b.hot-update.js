"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/prateleira1/page",{

/***/ "(app-pages-browser)/./app/components/prateleira.tsx":
/*!***************************************!*\
  !*** ./app/components/prateleira.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Shelf)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button/Button */ \"(app-pages-browser)/./app/components/Button/Button.tsx\");\n/* harmony import */ var _IndicatorBox_IndicatorBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IndicatorBox/IndicatorBox */ \"(app-pages-browser)/./app/components/IndicatorBox/IndicatorBox.tsx\");\n/* harmony import */ var _LegendBox_LegendBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LegendBox/LegendBox */ \"(app-pages-browser)/./app/components/LegendBox/LegendBox.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _ButtonVisual_ButtonV__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ButtonVisual/ButtonV */ \"(app-pages-browser)/./app/components/ButtonVisual/ButtonV.tsx\");\n/* harmony import */ var _TabelaV_TabelaV__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TabelaV/TabelaV */ \"(app-pages-browser)/./app/components/TabelaV/TabelaV.tsx\");\n/* harmony import */ var _TabelaSlot_TabelaS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TabelaSlot/TabelaS */ \"(app-pages-browser)/./app/components/TabelaSlot/TabelaS.tsx\");\n/* harmony import */ var _styles_prateleira_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/prateleira.css */ \"(app-pages-browser)/./app/styles/prateleira.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Shelf() {\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isTableOpen, setIsTableOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tableData, setTableData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const shampooData = [\n        {\n            produto: 'Shampoo A',\n            quantidade: 10,\n            saida: 2\n        },\n        {\n            produto: 'Shampoo B',\n            quantidade: 5,\n            saida: 1\n        },\n        {\n            produto: 'Shampoo C',\n            quantidade: 8,\n            saida: 3\n        }\n    ];\n    const handlePress = (product)=>{\n        alert(\"Voc\\xea clicou no produto: \".concat(product));\n    };\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleRedirect = ()=>{\n        router.push('/visualizar');\n    };\n    const handleOpenModal = ()=>{\n        setIsModalOpen(true);\n    };\n    const handleCloseModal = ()=>{\n        setIsModalOpen(false);\n    };\n    const handleOpenTable = (data)=>{\n        setTableData(data);\n        setIsTableOpen(true);\n    };\n    const handleCloseTable = ()=>{\n        setIsTableOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"containerPratileira1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: '600px',\n                    height: '700px',\n                    backgroundImage: \"url('/estante.png')\",\n                    backgroundSize: 'cover',\n                    backgroundPosition: 'center',\n                    position: 'relative',\n                    padding: '5%'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            position: 'absolute',\n                            top: '60px',\n                            left: '40px',\n                            display: 'flex',\n                            gap: '10px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                textobotao: \"Shampoo\",\n                                corDeFundo: \"#A8F0A4\",\n                                pressione: ()=>handleOpenTable(shampooData)\n                            }, void 0, false, {\n                                fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                textobotao: \"Condicionador\",\n                                corDeFundo: \"#F9F571\",\n                                pressione: ()=>handlePress('Condicionador')\n                            }, void 0, false, {\n                                fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                textobotao: \"Chupeta\",\n                                corDeFundo: \"#F58282\",\n                                pressione: ()=>handlePress('Chupeta')\n                            }, void 0, false, {\n                                fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            position: 'absolute',\n                            top: '180px',\n                            left: '40px',\n                            display: 'flex',\n                            gap: '10px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                textobotao: \"Shampoo\",\n                                corDeFundo: \"#A8F0A4\",\n                                pressione: ()=>handlePress('Shampoo')\n                            }, void 0, false, {\n                                fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                textobotao: \"Condicionador\",\n                                corDeFundo: \"#F9F571\",\n                                pressione: ()=>handlePress('Condicionador')\n                            }, void 0, false, {\n                                fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                textobotao: \"Chupeta\",\n                                corDeFundo: \"#F58282\",\n                                pressione: ()=>handlePress('Chupeta')\n                            }, void 0, false, {\n                                fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: 'flex',\n                    flexDirection: 'column',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    gap: '20px',\n                    backgroundColor: '#EFF0F0',\n                    padding: '15px'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center h-screen bg-gray-100 m-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonVisual_ButtonV__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                label: \"Visualizar\",\n                                onClick: handleOpenModal\n                            }, void 0, false, {\n                                fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonVisual_ButtonV__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                label: \"Editar\",\n                                onClick: handleRedirect\n                            }, void 0, false, {\n                                fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: 'flex',\n                            gap: '20px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IndicatorBox_IndicatorBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                title: \"Total de slots\",\n                                value: 15\n                            }, void 0, false, {\n                                fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IndicatorBox_IndicatorBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                title: \"Total de produtos\",\n                                value: 250\n                            }, void 0, false, {\n                                fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LegendBox_LegendBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 13\n                    }, this),\n                    isModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabelaV_TabelaV__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        onClose: handleCloseModal\n                    }, void 0, false, {\n                        fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 29\n                    }, this),\n                    isTableOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabelaSlot_TabelaS__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        onClose: handleCloseTable,\n                        data: tableData,\n                        title: \"Prateleira Shampoo\",\n                        slotText: \"Slot 001\"\n                    }, void 0, false, {\n                        fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/violeta/Documentos/frontend-planogram/app/components/prateleira.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Shelf, \"es8hycBuMd9xJwttfu4/dW3xWow=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Shelf;\nvar _c;\n$RefreshReg$(_c, \"Shelf\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3ByYXRlbGVpcmEudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ0g7QUFDa0I7QUFDVDtBQUNGO0FBQ0M7QUFDTDtBQUNHO0FBRVQ7QUFFbkIsU0FBU1M7O0lBRXRCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYSxXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFRLEVBQUU7SUFFcEQsTUFBTWUsY0FBYztRQUNsQjtZQUFFQyxTQUFTO1lBQWFDLFlBQVk7WUFBSUMsT0FBTztRQUFFO1FBQ2pEO1lBQUVGLFNBQVM7WUFBYUMsWUFBWTtZQUFHQyxPQUFPO1FBQUU7UUFDaEQ7WUFBRUYsU0FBUztZQUFhQyxZQUFZO1lBQUdDLE9BQU87UUFBRTtLQUNqRDtJQUVELE1BQU1DLGNBQWMsQ0FBQ0M7UUFDbkJDLE1BQU0sOEJBQW1DLE9BQVJEO0lBQ25DO0lBRUEsTUFBTUUsU0FBU2xCLDBEQUFTQTtJQUV4QixNQUFNbUIsaUJBQWlCO1FBQ3JCRCxPQUFPRSxJQUFJLENBQUM7SUFDZDtJQUdBLE1BQU1DLGtCQUFrQjtRQUN0QmYsZUFBZTtJQUNqQjtJQUVBLE1BQU1nQixtQkFBbUI7UUFDdkJoQixlQUFlO0lBQ2pCO0lBQ0EsTUFBTWlCLGtCQUFrQixDQUFDQztRQUN2QmQsYUFBYWM7UUFDYmhCLGVBQWU7SUFDakI7SUFFQSxNQUFNaUIsbUJBQW1CO1FBQ3ZCakIsZUFBZTtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDa0I7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUNERSxPQUFPO29CQUNIQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxpQkFBa0I7b0JBQ2xCQyxnQkFBZ0I7b0JBQ2hCQyxvQkFBb0I7b0JBQ3BCQyxVQUFVO29CQUNWQyxTQUFTO2dCQUNiOztrQ0FHSSw4REFBQ1Q7d0JBQUlFLE9BQU87NEJBQUVNLFVBQVU7NEJBQVlFLEtBQUs7NEJBQVFDLE1BQU07NEJBQVFDLFNBQVM7NEJBQVFDLEtBQUs7d0JBQU87OzBDQUN4Riw4REFBQzFDLHNEQUFNQTtnQ0FBQzJDLFlBQVc7Z0NBQVVDLFlBQVc7Z0NBQVVDLFdBQVcsSUFBTW5CLGdCQUFnQlo7Ozs7OzswQ0FDbkYsOERBQUNkLHNEQUFNQTtnQ0FBQzJDLFlBQVc7Z0NBQWdCQyxZQUFXO2dDQUFVQyxXQUFXLElBQU0zQixZQUFZOzs7Ozs7MENBQ3JGLDhEQUFDbEIsc0RBQU1BO2dDQUFDMkMsWUFBVztnQ0FBVUMsWUFBVztnQ0FBVUMsV0FBVyxJQUFNM0IsWUFBWTs7Ozs7Ozs7Ozs7O2tDQUVuRiw4REFBQ1c7d0JBQUlFLE9BQU87NEJBQUVNLFVBQVU7NEJBQVlFLEtBQUs7NEJBQVNDLE1BQU07NEJBQVFDLFNBQVM7NEJBQVFDLEtBQUs7d0JBQU87OzBDQUN6Riw4REFBQzFDLHNEQUFNQTtnQ0FBQzJDLFlBQVc7Z0NBQVVDLFlBQVc7Z0NBQVVDLFdBQVcsSUFBTTNCLFlBQVk7Ozs7OzswQ0FDL0UsOERBQUNsQixzREFBTUE7Z0NBQUMyQyxZQUFXO2dDQUFnQkMsWUFBVztnQ0FBVUMsV0FBVyxJQUFNM0IsWUFBWTs7Ozs7OzBDQUNyRiw4REFBQ2xCLHNEQUFNQTtnQ0FBQzJDLFlBQVc7Z0NBQVVDLFlBQVc7Z0NBQVVDLFdBQVcsSUFBTTNCLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdkYsOERBQUNXO2dCQUNERSxPQUFPO29CQUNQVSxTQUFTO29CQUNUSyxlQUFlO29CQUNmQyxZQUFZO29CQUNaQyxnQkFBZ0I7b0JBQ2hCTixLQUFLO29CQUNMTyxpQkFBaUI7b0JBQ2pCWCxTQUFTO2dCQUNUOztrQ0FFRSw4REFBQ1Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDMUIsNkRBQU9BO2dDQUFDOEMsT0FBTTtnQ0FBYUMsU0FBUzNCOzs7Ozs7MENBQ3JDLDhEQUFDcEIsNkRBQU9BO2dDQUFDOEMsT0FBTTtnQ0FBU0MsU0FBUzdCOzs7Ozs7Ozs7Ozs7a0NBRWpDLDhEQUFDTzt3QkFBSUUsT0FBTzs0QkFBRVUsU0FBUzs0QkFBUUMsS0FBSzt3QkFBTzs7MENBQzNDLDhEQUFDekMsa0VBQVlBO2dDQUFDbUQsT0FBTTtnQ0FBaUJDLE9BQU87Ozs7OzswQ0FDNUMsOERBQUNwRCxrRUFBWUE7Z0NBQUNtRCxPQUFNO2dDQUFvQkMsT0FBTzs7Ozs7Ozs7Ozs7O2tDQUcvQyw4REFBQ25ELDREQUFTQTs7Ozs7b0JBQ1RNLDZCQUFlLDhEQUFDSCx3REFBT0E7d0JBQUNpRCxTQUFTN0I7Ozs7OztvQkFDakNmLDZCQUNELDhEQUFDSiwyREFBT0E7d0JBQUNnRCxTQUFTMUI7d0JBQ2xCRCxNQUFNZjt3QkFDTndDLE9BQU07d0JBQ05HLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQjtHQS9Gd0JoRDs7UUFnQlBKLHNEQUFTQTs7O0tBaEJGSSIsInNvdXJjZXMiOlsiL2hvbWUvdmlvbGV0YS9Eb2N1bWVudG9zL2Zyb250ZW5kLXBsYW5vZ3JhbS9hcHAvY29tcG9uZW50cy9wcmF0ZWxlaXJhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBJbmRpY2F0b3JCb3ggZnJvbSAnLi9JbmRpY2F0b3JCb3gvSW5kaWNhdG9yQm94JztcbmltcG9ydCBMZWdlbmRCb3ggZnJvbSAnLi9MZWdlbmRCb3gvTGVnZW5kQm94JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgQnV0dG9uViBmcm9tICcuL0J1dHRvblZpc3VhbC9CdXR0b25WJztcbmltcG9ydCBUYWJlbGFWIGZyb20gJy4vVGFiZWxhVi9UYWJlbGFWJztcbmltcG9ydCBUYWJlbGFTIGZyb20gJy4vVGFiZWxhU2xvdC9UYWJlbGFTJztcblxuaW1wb3J0ICcuLi9zdHlsZXMvcHJhdGVsZWlyYS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGVsZigpIHtcblxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzVGFibGVPcGVuLCBzZXRJc1RhYmxlT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0YWJsZURhdGEsIHNldFRhYmxlRGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuXG4gIGNvbnN0IHNoYW1wb29EYXRhID0gW1xuICAgIHsgcHJvZHV0bzogJ1NoYW1wb28gQScsIHF1YW50aWRhZGU6IDEwLCBzYWlkYTogMiB9LFxuICAgIHsgcHJvZHV0bzogJ1NoYW1wb28gQicsIHF1YW50aWRhZGU6IDUsIHNhaWRhOiAxIH0sXG4gICAgeyBwcm9kdXRvOiAnU2hhbXBvbyBDJywgcXVhbnRpZGFkZTogOCwgc2FpZGE6IDMgfSxcbiAgXTtcblxuICBjb25zdCBoYW5kbGVQcmVzcyA9IChwcm9kdWN0OiBzdHJpbmcpID0+IHtcbiAgICBhbGVydChgVm9jw6ogY2xpY291IG5vIHByb2R1dG86ICR7cHJvZHVjdH1gKTtcbiAgfTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVSZWRpcmVjdCA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaCgnL3Zpc3VhbGl6YXInKTsgXG4gIH07XG5cblxuICBjb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZU9wZW5UYWJsZSA9IChkYXRhOiBhbnlbXSkgPT4ge1xuICAgIHNldFRhYmxlRGF0YShkYXRhKTtcbiAgICBzZXRJc1RhYmxlT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZVRhYmxlID0gKCkgPT4ge1xuICAgIHNldElzVGFibGVPcGVuKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJQcmF0aWxlaXJhMSc+XG4gICAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAnNjAwcHgnLCBcbiAgICAgICAgICAgIGhlaWdodDogJzcwMHB4JywgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy9lc3RhbnRlLnBuZycpYCxcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgcGFkZGluZzogJzUlJ1xuICAgICAgICB9fVxuICAgICAgICA+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzYwcHgnLCBsZWZ0OiAnNDBweCcsIGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0b2JvdGFvPVwiU2hhbXBvb1wiIGNvckRlRnVuZG89XCIjQThGMEE0XCIgcHJlc3Npb25lPXsoKSA9PiBoYW5kbGVPcGVuVGFibGUoc2hhbXBvb0RhdGEpfS8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0b2JvdGFvPVwiQ29uZGljaW9uYWRvclwiIGNvckRlRnVuZG89XCIjRjlGNTcxXCIgcHJlc3Npb25lPXsoKSA9PiBoYW5kbGVQcmVzcygnQ29uZGljaW9uYWRvcicpfSAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dG9ib3Rhbz1cIkNodXBldGFcIiBjb3JEZUZ1bmRvPVwiI0Y1ODI4MlwiIHByZXNzaW9uZT17KCkgPT4gaGFuZGxlUHJlc3MoJ0NodXBldGEnKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnMTgwcHgnLCBsZWZ0OiAnNDBweCcsIGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0b2JvdGFvPVwiU2hhbXBvb1wiIGNvckRlRnVuZG89XCIjQThGMEE0XCIgcHJlc3Npb25lPXsoKSA9PiBoYW5kbGVQcmVzcygnU2hhbXBvbycpfSAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dG9ib3Rhbz1cIkNvbmRpY2lvbmFkb3JcIiBjb3JEZUZ1bmRvPVwiI0Y5RjU3MVwiIHByZXNzaW9uZT17KCkgPT4gaGFuZGxlUHJlc3MoJ0NvbmRpY2lvbmFkb3InKX0gLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHRvYm90YW89XCJDaHVwZXRhXCIgY29yRGVGdW5kbz1cIiNGNTgyODJcIiBwcmVzc2lvbmU9eygpID0+IGhhbmRsZVByZXNzKCdDaHVwZXRhJyl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBnYXA6ICcyMHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VGRjBGMCcsXG4gICAgICAgIHBhZGRpbmc6ICcxNXB4JyxcbiAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gYmctZ3JheS0xMDAgbS04XCI+XG4gICAgICAgICAgICA8QnV0dG9uViBsYWJlbD1cIlZpc3VhbGl6YXJcIiBvbkNsaWNrPXtoYW5kbGVPcGVuTW9kYWx9ICAvPlxuICAgICAgICAgICAgPEJ1dHRvblYgbGFiZWw9XCJFZGl0YXJcIiBvbkNsaWNrPXtoYW5kbGVSZWRpcmVjdH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcyMHB4JyB9fT5cbiAgICAgICAgICAgIDxJbmRpY2F0b3JCb3ggdGl0bGU9XCJUb3RhbCBkZSBzbG90c1wiIHZhbHVlPXsxNX0gLz5cbiAgICAgICAgICAgIDxJbmRpY2F0b3JCb3ggdGl0bGU9XCJUb3RhbCBkZSBwcm9kdXRvc1wiIHZhbHVlPXsyNTB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPExlZ2VuZEJveCAvPlxuICAgICAgICAgICAge2lzTW9kYWxPcGVuICYmIDxUYWJlbGFWIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9IC8+fVxuICAgICAgICAgICAge2lzVGFibGVPcGVuICYmIFxuICAgICAgICAgICAgPFRhYmVsYVMgb25DbG9zZT17aGFuZGxlQ2xvc2VUYWJsZX1cbiAgICAgICAgICAgIGRhdGE9e3RhYmxlRGF0YX0gLy8gUGFzc2Egb3MgZGFkb3MgY29tbyBwcm9wXG4gICAgICAgICAgICB0aXRsZT1cIlByYXRlbGVpcmEgU2hhbXBvb1wiXG4gICAgICAgICAgICBzbG90VGV4dD1cIlNsb3QgMDAxXCIgLz59XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJJbmRpY2F0b3JCb3giLCJMZWdlbmRCb3giLCJ1c2VSb3V0ZXIiLCJCdXR0b25WIiwiVGFiZWxhViIsIlRhYmVsYVMiLCJTaGVsZiIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJpc1RhYmxlT3BlbiIsInNldElzVGFibGVPcGVuIiwidGFibGVEYXRhIiwic2V0VGFibGVEYXRhIiwic2hhbXBvb0RhdGEiLCJwcm9kdXRvIiwicXVhbnRpZGFkZSIsInNhaWRhIiwiaGFuZGxlUHJlc3MiLCJwcm9kdWN0IiwiYWxlcnQiLCJyb3V0ZXIiLCJoYW5kbGVSZWRpcmVjdCIsInB1c2giLCJoYW5kbGVPcGVuTW9kYWwiLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlT3BlblRhYmxlIiwiZGF0YSIsImhhbmRsZUNsb3NlVGFibGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJwb3NpdGlvbiIsInBhZGRpbmciLCJ0b3AiLCJsZWZ0IiwiZGlzcGxheSIsImdhcCIsInRleHRvYm90YW8iLCJjb3JEZUZ1bmRvIiwicHJlc3Npb25lIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImxhYmVsIiwib25DbGljayIsInRpdGxlIiwidmFsdWUiLCJvbkNsb3NlIiwic2xvdFRleHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/prateleira.tsx\n"));

/***/ })

});