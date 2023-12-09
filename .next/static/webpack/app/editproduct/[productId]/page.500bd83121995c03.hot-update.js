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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _features_products_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/features/products/actions */ \"(app-pages-browser)/./features/products/actions.ts\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/hooks */ \"(app-pages-browser)/./store/hooks.ts\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductEdit = (param)=>{\n    let { params } = param;\n    _s();\n    const { productId } = params;\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { product } = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.productsState);\n    const [editedProduct, setEditedProduct] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (productId) dispatch((0,_features_products_actions__WEBPACK_IMPORTED_MODULE_1__.getProductById)(productId));\n    }, [\n        productId\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (product) {\n            setEditedProduct({\n                ...product\n            });\n        }\n    }, [\n        product\n    ]);\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setEditedProduct((prevProduct)=>({\n                ...prevProduct,\n                [name]: value\n            }));\n    };\n    const handleUpdate = ()=>{\n        try {\n            dispatch((0,_features_products_actions__WEBPACK_IMPORTED_MODULE_1__.updateProduct)(editedProduct));\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        maxWidth: \"md\",\n        sx: {\n            marginTop: 10\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h5\",\n                gutterBottom: true,\n                color: \"black\",\n                children: \"Edit Product\"\n            }, void 0, false, {\n                fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        label: \"Product Name\",\n                        variant: \"outlined\",\n                        fullWidth: true,\n                        margin: \"normal\",\n                        name: \"name\",\n                        value: (editedProduct === null || editedProduct === void 0 ? void 0 : editedProduct.name) || \"\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        label: \"Description\",\n                        variant: \"outlined\",\n                        fullWidth: true,\n                        multiline: true,\n                        margin: \"normal\",\n                        name: \"description\",\n                        value: (editedProduct === null || editedProduct === void 0 ? void 0 : editedProduct.description) || \"\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        label: \"Price\",\n                        variant: \"outlined\",\n                        fullWidth: true,\n                        type: \"number\",\n                        margin: \"normal\",\n                        name: \"price\",\n                        value: (editedProduct === null || editedProduct === void 0 ? void 0 : editedProduct.price) || \"\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        variant: \"contained\",\n                        color: \"primary\",\n                        onClick: handleUpdate,\n                        sx: {\n                            margin: \"1px\"\n                        },\n                        children: \"Update Product\"\n                    }, void 0, false, {\n                        fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        variant: \"contained\",\n                        color: \"error\",\n                        onClick: handleUpdate,\n                        sx: {\n                            margin: \"1px\"\n                        },\n                        children: \"Delete Product\"\n                    }, void 0, false, {\n                        fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/syed/projects/nodeAndNextJs/frontend/app/editproduct/[productId]/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductEdit, \"X7u1uuRASLmPfNdzXDBFwzVVV64=\", false, function() {\n    return [\n        _store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = ProductEdit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductEdit);\nvar _c;\n$RefreshReg$(_c, \"ProductEdit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9lZGl0cHJvZHVjdC9bcHJvZHVjdElkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM0RTtBQUNiO0FBRVU7QUFDN0I7QUFDQTtBQVE1QyxNQUFNVyxjQUFjO1FBQUMsRUFBRUMsTUFBTSxFQUFTOztJQUNwQyxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHRDtJQUN0QixNQUFNRSxXQUFXWiw0REFBY0E7SUFDL0IsTUFBTWEsU0FBU1AsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRVEsT0FBTyxFQUFFLEdBQUdiLDREQUFjQSxDQUFDLENBQUNjLFFBQVVBLE1BQU1DLGFBQWE7SUFDakUsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBO0lBRWxERCxnREFBU0EsQ0FBQztRQUNSLElBQUlJLFdBQVdDLFNBQVNkLDBFQUFjQSxDQUFDYTtJQUN6QyxHQUFHO1FBQUNBO0tBQVU7SUFFZEosZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxTQUFTO1lBQ1hJLGlCQUFpQjtnQkFDZixHQUFHSixPQUFPO1lBQ1o7UUFDRjtJQUNGLEdBQUc7UUFBQ0E7S0FBUTtJQUVaLE1BQU1LLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDTCxpQkFBaUIsQ0FBQ00sY0FBaUI7Z0JBQ2pDLEdBQUdBLFdBQVc7Z0JBQ2QsQ0FBQ0gsS0FBSyxFQUFFQztZQUNWO0lBQ0Y7SUFFQSxNQUFNRyxlQUFlO1FBQ25CLElBQUk7WUFDRmIsU0FBU2IseUVBQWFBLENBQUNrQjtRQUN6QixFQUFFLE9BQU9HLEdBQUc7WUFDVk0sUUFBUUMsR0FBRyxDQUFDUDtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2pCLGlIQUFTQTtRQUFDeUIsVUFBUztRQUFLQyxJQUFJO1lBQUVDLFdBQVc7UUFBRzs7MEJBQzNDLDhEQUFDekIsaUhBQVVBO2dCQUFDMEIsU0FBUTtnQkFBS0MsWUFBWTtnQkFBQ0MsT0FBTzswQkFBUzs7Ozs7OzBCQUd0RCw4REFBQ0M7O2tDQUNDLDhEQUFDOUIsaUhBQVNBO3dCQUNSK0IsT0FBTTt3QkFDTkosU0FBUTt3QkFDUkssU0FBUzt3QkFDVEMsUUFBTzt3QkFDUGhCLE1BQUs7d0JBQ0xDLE9BQU9MLENBQUFBLDBCQUFBQSxvQ0FBQUEsY0FBZUksSUFBSSxLQUFJO3dCQUM5QmlCLFVBQVVuQjs7Ozs7O2tDQUVaLDhEQUFDZixpSEFBU0E7d0JBQ1IrQixPQUFNO3dCQUNOSixTQUFRO3dCQUNSSyxTQUFTO3dCQUNURyxTQUFTO3dCQUNURixRQUFPO3dCQUNQaEIsTUFBSzt3QkFDTEMsT0FBT0wsQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFldUIsV0FBVyxLQUFJO3dCQUNyQ0YsVUFBVW5COzs7Ozs7a0NBRVosOERBQUNmLGlIQUFTQTt3QkFDUitCLE9BQU07d0JBQ05KLFNBQVE7d0JBQ1JLLFNBQVM7d0JBQ1RLLE1BQUs7d0JBQ0xKLFFBQU87d0JBQ1BoQixNQUFLO3dCQUNMQyxPQUFPTCxDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWV5QixLQUFLLEtBQUk7d0JBQy9CSixVQUFVbkI7Ozs7OztrQ0FFWiw4REFBQ2pCLGlIQUFNQTt3QkFDTDZCLFNBQVE7d0JBQ1JFLE9BQU07d0JBQ05VLFNBQVNsQjt3QkFDVEksSUFBSTs0QkFBRVEsUUFBUTt3QkFBTTtrQ0FDckI7Ozs7OztrQ0FHRCw4REFBQ25DLGlIQUFNQTt3QkFDTDZCLFNBQVE7d0JBQ1JFLE9BQU07d0JBQ05VLFNBQVNsQjt3QkFDVEksSUFBSTs0QkFBRVEsUUFBUTt3QkFBTTtrQ0FDckI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBekZNNUI7O1FBRWFULHdEQUFjQTtRQUNoQk0sc0RBQVNBO1FBQ0pMLHdEQUFjQTs7O0tBSjlCUTtBQTJGTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZWRpdHByb2R1Y3QvW3Byb2R1Y3RJZF0vcGFnZS50c3g/MTIzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdEJ5SWQsIHVwZGF0ZVByb2R1Y3QgfSBmcm9tIFwiQC9mZWF0dXJlcy9wcm9kdWN0cy9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL3N0b3JlL2hvb2tzXCI7XHJcbmltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSBcIkAvdHlwZXMvcHJvZHVjdHNUeXBlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgVGV4dEZpZWxkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHBhcmFtczoge1xyXG4gICAgcHJvZHVjdElkOiBudW1iZXI7XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IFByb2R1Y3RFZGl0ID0gKHsgcGFyYW1zIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IHBhcmFtcztcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBwcm9kdWN0IH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzU3RhdGUpO1xyXG4gIGNvbnN0IFtlZGl0ZWRQcm9kdWN0LCBzZXRFZGl0ZWRQcm9kdWN0XSA9IHVzZVN0YXRlPHByb2R1Y3RzPigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3RJZCkgZGlzcGF0Y2goZ2V0UHJvZHVjdEJ5SWQocHJvZHVjdElkKSk7XHJcbiAgfSwgW3Byb2R1Y3RJZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgc2V0RWRpdGVkUHJvZHVjdCh7XHJcbiAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3Byb2R1Y3RdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRFZGl0ZWRQcm9kdWN0KChwcmV2UHJvZHVjdCkgPT4gKHtcclxuICAgICAgLi4ucHJldlByb2R1Y3QsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2godXBkYXRlUHJvZHVjdChlZGl0ZWRQcm9kdWN0KSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBzeD17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBndXR0ZXJCb3R0b20gY29sb3I9e1wiYmxhY2tcIn0+XHJcbiAgICAgICAgRWRpdCBQcm9kdWN0XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgbGFiZWw9XCJQcm9kdWN0IE5hbWVcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXtlZGl0ZWRQcm9kdWN0Py5uYW1lIHx8IFwiXCJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgdmFsdWU9e2VkaXRlZFByb2R1Y3Q/LmRlc2NyaXB0aW9uIHx8IFwiXCJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgbGFiZWw9XCJQcmljZVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgdmFsdWU9e2VkaXRlZFByb2R1Y3Q/LnByaWNlIHx8IFwiXCJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgc3g9e3sgbWFyZ2luOiBcIjFweFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVXBkYXRlIFByb2R1Y3RcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgIGNvbG9yPVwiZXJyb3JcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgc3g9e3sgbWFyZ2luOiBcIjFweFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRGVsZXRlIFByb2R1Y3RcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RFZGl0O1xyXG4iXSwibmFtZXMiOlsiZ2V0UHJvZHVjdEJ5SWQiLCJ1cGRhdGVQcm9kdWN0IiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIlRleHRGaWVsZCIsIlR5cG9ncmFwaHkiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3RFZGl0IiwicGFyYW1zIiwicHJvZHVjdElkIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJwcm9kdWN0Iiwic3RhdGUiLCJwcm9kdWN0c1N0YXRlIiwiZWRpdGVkUHJvZHVjdCIsInNldEVkaXRlZFByb2R1Y3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldlByb2R1Y3QiLCJoYW5kbGVVcGRhdGUiLCJjb25zb2xlIiwibG9nIiwibWF4V2lkdGgiLCJzeCIsIm1hcmdpblRvcCIsInZhcmlhbnQiLCJndXR0ZXJCb3R0b20iLCJjb2xvciIsImZvcm0iLCJsYWJlbCIsImZ1bGxXaWR0aCIsIm1hcmdpbiIsIm9uQ2hhbmdlIiwibXVsdGlsaW5lIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwicHJpY2UiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/editproduct/[productId]/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/next/navigation.js":
/*!*****************************************!*\
  !*** ./node_modules/next/navigation.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6IkFBQUEsK0pBQStEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25hdmlnYXRpb24uanM/M2I3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvY29tcG9uZW50cy9uYXZpZ2F0aW9uJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/navigation.js\n"));

/***/ })

});