"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./features/products/productsSlice.ts":
/*!********************************************!*\
  !*** ./features/products/productsSlice.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"(app-pages-browser)/./features/products/actions.ts\");\n\n\nconst initialState = {\n    products: [],\n    loading: false,\n    product: null,\n    cart: []\n};\nconst productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"fortniteShop\",\n    initialState,\n    reducers: {\n        addToCart: (state, param)=>{\n            let { payload } = param;\n            const isExist = state.cart.some((item)=>item._id === payload.id);\n            if (!isExist) {\n                state.cart.push(payload);\n            }\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_actions__WEBPACK_IMPORTED_MODULE_0__.getAllProducts.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_actions__WEBPACK_IMPORTED_MODULE_0__.getAllProducts.fulfilled, (state, param)=>{\n            let { payload } = param;\n            state.products = payload;\n            state.loading = false;\n        }).addCase(_actions__WEBPACK_IMPORTED_MODULE_0__.getAllProducts.rejected, (state)=>{\n            state.loading = true;\n        });\n        builder.addCase(_actions__WEBPACK_IMPORTED_MODULE_0__.getProductById.pending, (state)=>{\n            state.loading = true;\n        }).addCase(_actions__WEBPACK_IMPORTED_MODULE_0__.getProductById.fulfilled, (state, param)=>{\n            let { payload } = param;\n            state.product = payload;\n            state.loading = false;\n        }).addCase(_actions__WEBPACK_IMPORTED_MODULE_0__.getProductById.rejected, (state)=>{\n            state.loading = true;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2ZlYXR1cmVzL3Byb2R1Y3RzL3Byb2R1Y3RzU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQytDO0FBQ1k7QUFTM0QsTUFBTUcsZUFBc0I7SUFDMUJDLFVBQVUsRUFBRTtJQUNaQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsTUFBTSxFQUFFO0FBQ1Y7QUFFQSxNQUFNQyxnQkFBZ0JSLDZEQUFXQSxDQUFDO0lBQ2hDUyxNQUFNO0lBQ05OO0lBQ0FPLFVBQVU7UUFDUkMsV0FBVyxDQUFDQztnQkFBTyxFQUFFQyxPQUFPLEVBQUU7WUFDNUIsTUFBTUMsVUFBVUYsTUFBTUwsSUFBSSxDQUFDUSxJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsR0FBRyxLQUFLSixRQUFRSyxFQUFFO1lBQ2pFLElBQUksQ0FBQ0osU0FBUztnQkFDWkYsTUFBTUwsSUFBSSxDQUFDWSxJQUFJLENBQUNOO1lBQ2xCO1FBQ0Y7SUFDRjtJQUNBTyxlQUFlLENBQUNDO1FBQ2RBLFFBQ0dDLE9BQU8sQ0FBQ3JCLG9EQUFjQSxDQUFDc0IsT0FBTyxFQUFFLENBQUNYO1lBQ2hDQSxNQUFNUCxPQUFPLEdBQUc7UUFDbEIsR0FDQ2lCLE9BQU8sQ0FBQ3JCLG9EQUFjQSxDQUFDdUIsU0FBUyxFQUFFLENBQUNaO2dCQUFZLEVBQUVDLE9BQU8sRUFBRTtZQUN6REQsTUFBTVIsUUFBUSxHQUFHUztZQUNqQkQsTUFBTVAsT0FBTyxHQUFHO1FBQ2xCLEdBQ0NpQixPQUFPLENBQUNyQixvREFBY0EsQ0FBQ3dCLFFBQVEsRUFBRSxDQUFDYjtZQUNqQ0EsTUFBTVAsT0FBTyxHQUFHO1FBQ2xCO1FBRUZnQixRQUNHQyxPQUFPLENBQUNwQixvREFBY0EsQ0FBQ3FCLE9BQU8sRUFBRSxDQUFDWDtZQUNoQ0EsTUFBTVAsT0FBTyxHQUFHO1FBQ2xCLEdBQ0NpQixPQUFPLENBQUNwQixvREFBY0EsQ0FBQ3NCLFNBQVMsRUFBRSxDQUFDWjtnQkFBWSxFQUFFQyxPQUFPLEVBQUU7WUFDekRELE1BQU1OLE9BQU8sR0FBR087WUFDaEJELE1BQU1QLE9BQU8sR0FBRztRQUNsQixHQUNDaUIsT0FBTyxDQUFDcEIsb0RBQWNBLENBQUN1QixRQUFRLEVBQUUsQ0FBQ2I7WUFDakNBLE1BQU1QLE9BQU8sR0FBRztRQUNsQjtJQUNKO0FBQ0Y7QUFFQSwrREFBZUcsY0FBY2tCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9mZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0c1NsaWNlLnRzPzJjMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvZHVjdHMgfSBmcm9tIFwiQC90eXBlcy9wcm9kdWN0c1R5cGVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgZ2V0QWxsUHJvZHVjdHMsIGdldFByb2R1Y3RCeUlkIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgc3RhdGUgPSB7XHJcbiAgcHJvZHVjdHM6IHByb2R1Y3RzW107XHJcbiAgbG9hZGluZzogYm9vbGVhbjtcclxuICBwcm9kdWN0OiBwcm9kdWN0cyB8IG51bGw7XHJcbiAgY2FydDogcHJvZHVjdHNbXTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogc3RhdGUgPSB7XHJcbiAgcHJvZHVjdHM6IFtdLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIHByb2R1Y3Q6IG51bGwsXHJcbiAgY2FydDogW10sXHJcbn07XHJcblxyXG5jb25zdCBwcm9kdWN0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiZm9ydG5pdGVTaG9wXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBhZGRUb0NhcnQ6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgY29uc3QgaXNFeGlzdCA9IHN0YXRlLmNhcnQuc29tZSgoaXRlbSkgPT4gaXRlbS5faWQgPT09IHBheWxvYWQuaWQpO1xyXG4gICAgICBpZiAoIWlzRXhpc3QpIHtcclxuICAgICAgICBzdGF0ZS5jYXJ0LnB1c2gocGF5bG9hZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlclxyXG4gICAgICAuYWRkQ2FzZShnZXRBbGxQcm9kdWN0cy5wZW5kaW5nLCAoc3RhdGU6IGFueSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShnZXRBbGxQcm9kdWN0cy5mdWxmaWxsZWQsIChzdGF0ZTogYW55LCB7IHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzID0gcGF5bG9hZDtcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKGdldEFsbFByb2R1Y3RzLnJlamVjdGVkLCAoc3RhdGU6IGFueSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBidWlsZGVyXHJcbiAgICAgIC5hZGRDYXNlKGdldFByb2R1Y3RCeUlkLnBlbmRpbmcsIChzdGF0ZTogYW55KSA9PiB7XHJcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKGdldFByb2R1Y3RCeUlkLmZ1bGZpbGxlZCwgKHN0YXRlOiBhbnksIHsgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdCA9IHBheWxvYWQ7XHJcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShnZXRQcm9kdWN0QnlJZC5yZWplY3RlZCwgKHN0YXRlOiBhbnkpID0+IHtcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0c1NsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImdldEFsbFByb2R1Y3RzIiwiZ2V0UHJvZHVjdEJ5SWQiLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0cyIsImxvYWRpbmciLCJwcm9kdWN0IiwiY2FydCIsInByb2R1Y3RzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0NhcnQiLCJzdGF0ZSIsInBheWxvYWQiLCJpc0V4aXN0Iiwic29tZSIsIml0ZW0iLCJfaWQiLCJpZCIsInB1c2giLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./features/products/productsSlice.ts\n"));

/***/ })

});