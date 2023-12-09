"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/editproduct/[productId]/page",{

/***/ "(app-pages-browser)/./app/editproduct/[productId]/page.tsx":
/*!**********************************************!*\
  !*** ./app/editproduct/[productId]/page.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _features_products_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/features/products/actions */ \"(app-pages-browser)/./features/products/actions.ts\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/hooks */ \"(app-pages-browser)/./store/hooks.ts\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductEdit = (param)=>{\n    let { params } = param;\n    _s();\n    const { productId } = params;\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { product } = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.productsState);\n    const [editedProduct, setEditedProduct] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (productId) dispatch((0,_features_products_actions__WEBPACK_IMPORTED_MODULE_1__.getProductById)(productId));\n    }, [\n        productId\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (product) {\n            setEditedProduct({\n                ...product\n            });\n        }\n    }, [\n        product\n    ]);\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setEditedProduct((prevProduct)=>({\n                ...prevProduct,\n                [name]: value\n            }));\n    };\n    const handleUpdate = ()=>{\n        try {\n            dispatch((0,_features_products_actions__WEBPACK_IMPORTED_MODULE_1__.updateProduct)(editedProduct));\n            router.back();\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    const handleDelete = ()=>{\n        try {} catch (e) {\n            console.log(e);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        maxWidth: \"md\",\n        sx: {\n            marginTop: 10\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h5\",\n                gutterBottom: true,\n                color: \"black\",\n                children: \"Edit Product\"\n            }, void 0, false, {\n                fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        label: \"Product Name\",\n                        variant: \"outlined\",\n                        fullWidth: true,\n                        margin: \"normal\",\n                        name: \"name\",\n                        value: (editedProduct === null || editedProduct === void 0 ? void 0 : editedProduct.name) || \"\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        label: \"Description\",\n                        variant: \"outlined\",\n                        fullWidth: true,\n                        multiline: true,\n                        margin: \"normal\",\n                        name: \"description\",\n                        value: (editedProduct === null || editedProduct === void 0 ? void 0 : editedProduct.description) || \"\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        label: \"Price\",\n                        variant: \"outlined\",\n                        fullWidth: true,\n                        type: \"number\",\n                        margin: \"normal\",\n                        name: \"price\",\n                        value: (editedProduct === null || editedProduct === void 0 ? void 0 : editedProduct.price) || \"\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        variant: \"contained\",\n                        color: \"primary\",\n                        onClick: handleUpdate,\n                        sx: {\n                            margin: \"1px\"\n                        },\n                        children: \"Update Product\"\n                    }, void 0, false, {\n                        fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        variant: \"contained\",\n                        color: \"error\",\n                        onClick: ()=>router.back(),\n                        sx: {\n                            margin: \"1px\"\n                        },\n                        children: \"Delete Product\"\n                    }, void 0, false, {\n                        fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductEdit, \"X7u1uuRASLmPfNdzXDBFwzVVV64=\", false, function() {\n    return [\n        _store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = ProductEdit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductEdit);\nvar _c;\n$RefreshReg$(_c, \"ProductEdit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9lZGl0cHJvZHVjdC9bcHJvZHVjdElkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM0RTtBQUNiO0FBRVU7QUFDN0I7QUFDQTtBQVE1QyxNQUFNVyxjQUFjO1FBQUMsRUFBRUMsTUFBTSxFQUFTOztJQUNwQyxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHRDtJQUN0QixNQUFNRSxXQUFXWiw0REFBY0E7SUFDL0IsTUFBTWEsU0FBU1AsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRVEsT0FBTyxFQUFFLEdBQUdiLDREQUFjQSxDQUFDLENBQUNjLFFBQVVBLE1BQU1DLGFBQWE7SUFDakUsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBO0lBRWxERCxnREFBU0EsQ0FBQztRQUNSLElBQUlJLFdBQVdDLFNBQVNkLDBFQUFjQSxDQUFDYTtJQUN6QyxHQUFHO1FBQUNBO0tBQVU7SUFFZEosZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxTQUFTO1lBQ1hJLGlCQUFpQjtnQkFDZixHQUFHSixPQUFPO1lBQ1o7UUFDRjtJQUNGLEdBQUc7UUFBQ0E7S0FBUTtJQUVaLE1BQU1LLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDTCxpQkFBaUIsQ0FBQ00sY0FBaUI7Z0JBQ2pDLEdBQUdBLFdBQVc7Z0JBQ2QsQ0FBQ0gsS0FBSyxFQUFFQztZQUNWO0lBQ0Y7SUFFQSxNQUFNRyxlQUFlO1FBQ25CLElBQUk7WUFDRmIsU0FBU2IseUVBQWFBLENBQUNrQjtZQUN2QkosT0FBT2EsSUFBSTtRQUNiLEVBQUUsT0FBT04sR0FBRztZQUNWTyxRQUFRQyxHQUFHLENBQUNSO1FBQ2Q7SUFDRjtJQUVBLE1BQU1TLGVBQWU7UUFDbkIsSUFBSSxDQUNKLEVBQUUsT0FBT1QsR0FBRztZQUNWTyxRQUFRQyxHQUFHLENBQUNSO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDakIsaUhBQVNBO1FBQUMyQixVQUFTO1FBQUtDLElBQUk7WUFBRUMsV0FBVztRQUFHOzswQkFDM0MsOERBQUMzQixpSEFBVUE7Z0JBQUM0QixTQUFRO2dCQUFLQyxZQUFZO2dCQUFDQyxPQUFPOzBCQUFTOzs7Ozs7MEJBR3RELDhEQUFDQzs7a0NBQ0MsOERBQUNoQyxpSEFBU0E7d0JBQ1JpQyxPQUFNO3dCQUNOSixTQUFRO3dCQUNSSyxTQUFTO3dCQUNUQyxRQUFPO3dCQUNQbEIsTUFBSzt3QkFDTEMsT0FBT0wsQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFlSSxJQUFJLEtBQUk7d0JBQzlCbUIsVUFBVXJCOzs7Ozs7a0NBRVosOERBQUNmLGlIQUFTQTt3QkFDUmlDLE9BQU07d0JBQ05KLFNBQVE7d0JBQ1JLLFNBQVM7d0JBQ1RHLFNBQVM7d0JBQ1RGLFFBQU87d0JBQ1BsQixNQUFLO3dCQUNMQyxPQUFPTCxDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWV5QixXQUFXLEtBQUk7d0JBQ3JDRixVQUFVckI7Ozs7OztrQ0FFWiw4REFBQ2YsaUhBQVNBO3dCQUNSaUMsT0FBTTt3QkFDTkosU0FBUTt3QkFDUkssU0FBUzt3QkFDVEssTUFBSzt3QkFDTEosUUFBTzt3QkFDUGxCLE1BQUs7d0JBQ0xDLE9BQU9MLENBQUFBLDBCQUFBQSxvQ0FBQUEsY0FBZTJCLEtBQUssS0FBSTt3QkFDL0JKLFVBQVVyQjs7Ozs7O2tDQUVaLDhEQUFDakIsaUhBQU1BO3dCQUNMK0IsU0FBUTt3QkFDUkUsT0FBTTt3QkFDTlUsU0FBU3BCO3dCQUNUTSxJQUFJOzRCQUFFUSxRQUFRO3dCQUFNO2tDQUNyQjs7Ozs7O2tDQUdELDhEQUFDckMsaUhBQU1BO3dCQUNMK0IsU0FBUTt3QkFDUkUsT0FBTTt3QkFDTlUsU0FBUyxJQUFNaEMsT0FBT2EsSUFBSTt3QkFDMUJLLElBQUk7NEJBQUVRLFFBQVE7d0JBQU07a0NBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQWpHTTlCOztRQUVhVCx3REFBY0E7UUFDaEJNLHNEQUFTQTtRQUNKTCx3REFBY0E7OztLQUo5QlE7QUFtR04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2VkaXRwcm9kdWN0L1twcm9kdWN0SWRdL3BhZ2UudHN4PzEyMzQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IGdldFByb2R1Y3RCeUlkLCB1cGRhdGVQcm9kdWN0IH0gZnJvbSBcIkAvZmVhdHVyZXMvcHJvZHVjdHMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9zdG9yZS9ob29rc1wiO1xyXG5pbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gXCJAL3R5cGVzL3Byb2R1Y3RzVHlwZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBwYXJhbXM6IHtcclxuICAgIHByb2R1Y3RJZDogbnVtYmVyO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBQcm9kdWN0RWRpdCA9ICh7IHBhcmFtcyB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZHVjdElkIH0gPSBwYXJhbXM7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0c1N0YXRlKTtcclxuICBjb25zdCBbZWRpdGVkUHJvZHVjdCwgc2V0RWRpdGVkUHJvZHVjdF0gPSB1c2VTdGF0ZTxwcm9kdWN0cz4oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9kdWN0SWQpIGRpc3BhdGNoKGdldFByb2R1Y3RCeUlkKHByb2R1Y3RJZCkpO1xyXG4gIH0sIFtwcm9kdWN0SWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgIHNldEVkaXRlZFByb2R1Y3Qoe1xyXG4gICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9kdWN0XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0RWRpdGVkUHJvZHVjdCgocHJldlByb2R1Y3QpID0+ICh7XHJcbiAgICAgIC4uLnByZXZQcm9kdWN0LFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZVByb2R1Y3QoZWRpdGVkUHJvZHVjdCkpO1xyXG4gICAgICByb3V0ZXIuYmFjaygpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCIgc3g9e3sgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tIGNvbG9yPXtcImJsYWNrXCJ9PlxyXG4gICAgICAgIEVkaXQgUHJvZHVjdFxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPVwiUHJvZHVjdCBOYW1lXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICB2YWx1ZT17ZWRpdGVkUHJvZHVjdD8ubmFtZSB8fCBcIlwifVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIHZhbHVlPXtlZGl0ZWRQcm9kdWN0Py5kZXNjcmlwdGlvbiB8fCBcIlwifVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPVwiUHJpY2VcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgIHZhbHVlPXtlZGl0ZWRQcm9kdWN0Py5wcmljZSB8fCBcIlwifVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgIHN4PXt7IG1hcmdpbjogXCIxcHhcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFVwZGF0ZSBQcm9kdWN0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cImVycm9yXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9XHJcbiAgICAgICAgICBzeD17eyBtYXJnaW46IFwiMXB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBEZWxldGUgUHJvZHVjdFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEVkaXQ7XHJcbiJdLCJuYW1lcyI6WyJnZXRQcm9kdWN0QnlJZCIsInVwZGF0ZVByb2R1Y3QiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiVGV4dEZpZWxkIiwiVHlwb2dyYXBoeSIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdEVkaXQiLCJwYXJhbXMiLCJwcm9kdWN0SWQiLCJkaXNwYXRjaCIsInJvdXRlciIsInByb2R1Y3QiLCJzdGF0ZSIsInByb2R1Y3RzU3RhdGUiLCJlZGl0ZWRQcm9kdWN0Iiwic2V0RWRpdGVkUHJvZHVjdCIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2UHJvZHVjdCIsImhhbmRsZVVwZGF0ZSIsImJhY2siLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGVsZXRlIiwibWF4V2lkdGgiLCJzeCIsIm1hcmdpblRvcCIsInZhcmlhbnQiLCJndXR0ZXJCb3R0b20iLCJjb2xvciIsImZvcm0iLCJsYWJlbCIsImZ1bGxXaWR0aCIsIm1hcmdpbiIsIm9uQ2hhbmdlIiwibXVsdGlsaW5lIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwicHJpY2UiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/editproduct/[productId]/page.tsx\n"));

/***/ })

});