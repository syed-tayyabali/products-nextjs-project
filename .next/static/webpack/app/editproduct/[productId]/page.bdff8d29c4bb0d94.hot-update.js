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

/***/ "(app-pages-browser)/./features/products/actions.ts":
/*!**************************************!*\
  !*** ./features/products/actions.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProduct: function() { return /* binding */ addProduct; },\n/* harmony export */   getAllProducts: function() { return /* binding */ getAllProducts; },\n/* harmony export */   getProductById: function() { return /* binding */ getProductById; },\n/* harmony export */   updateProduct: function() { return /* binding */ updateProduct; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst dummyData = [\n    {\n        id: 1,\n        name: \"dummy 1\",\n        description: \"abc\",\n        price: 123\n    },\n    {\n        id: 2,\n        name: \"dummy 2\",\n        description: \"abc\",\n        price: 123\n    },\n    {\n        id: 3,\n        name: \"dummy 1\",\n        description: \"abc\",\n        price: 123\n    },\n    {\n        id: 4,\n        name: \"dummy 2\",\n        description: \"abc\",\n        price: 123\n    },\n    {\n        id: 5,\n        name: \"dummy 1\",\n        description: \"abc\",\n        price: 123\n    },\n    {\n        id: 6,\n        name: \"dummy 2\",\n        description: \"abc\",\n        price: 123\n    }\n];\nconst getAllProducts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"products/getAllProducts\", async ()=>{\n    try {\n        const response = await fetch(\"http://localhost:4000/products\");\n        const respData = await response.json();\n        return respData;\n    } catch (e) {\n        console.log(e);\n    }\n});\nconst getProductById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"products/getProductById\", async (id)=>{\n    try {\n        const response = await fetch(\"http://localhost:4000/products/\".concat(id));\n        const respData = await response.json();\n        return respData;\n    } catch (e) {\n        console.log(e);\n    }\n});\nconst updateProduct = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"products/updateProduct\", async (data)=>{\n    try {\n        const response = await fetch(\"http://localhost:4000/products\", {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                ...data\n            })\n        });\n        const respData = await response.json();\n        return respData;\n    } catch (e) {\n        console.log(e);\n    }\n});\nconst addProduct = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"products/addProduct\", async (data)=>{\n    try {\n        const response = await fetch(\"http://localhost:4000/products\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                ...data\n            })\n        });\n        const respData = await response.json();\n        return respData;\n    } catch (e) {\n        console.log(e);\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2ZlYXR1cmVzL3Byb2R1Y3RzL2FjdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDb0Q7QUFFcEQsTUFBTUMsWUFBWTtJQUNoQjtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPO0lBQ1Q7Q0FDRDtBQUVNLE1BQU1DLGlCQUFpQk4sa0VBQWdCQSxDQUM1QywyQkFDQTtJQUNFLElBQUk7UUFDRixNQUFNTyxXQUFXLE1BQU1DLE1BQU07UUFDN0IsTUFBTUMsV0FBVyxNQUFNRixTQUFTRyxJQUFJO1FBQ3BDLE9BQU9EO0lBQ1QsRUFBRSxPQUFPRSxHQUFHO1FBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtBQUNGLEdBQ0E7QUFFSyxNQUFNRyxpQkFBaUJkLGtFQUFnQkEsQ0FDNUMsMkJBQ0EsT0FBT0U7SUFDTCxJQUFJO1FBQ0YsTUFBTUssV0FBVyxNQUFNQyxNQUFNLGtDQUFxQyxPQUFITjtRQUMvRCxNQUFNTyxXQUFXLE1BQU1GLFNBQVNHLElBQUk7UUFDcEMsT0FBT0Q7SUFDVCxFQUFFLE9BQU9FLEdBQUc7UUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0FBQ0YsR0FDQTtBQUVLLE1BQU1JLGdCQUFnQmYsa0VBQWdCQSxDQUMzQywwQkFDQSxPQUFPZ0I7SUFDTCxJQUFJO1FBQ0YsTUFBTVQsV0FBVyxNQUFNQyxNQUFPLGtDQUFpQztZQUM3RFMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUUsR0FBR0wsSUFBSTtZQUFDO1FBQ2pDO1FBQ0EsTUFBTVAsV0FBVyxNQUFNRixTQUFTRyxJQUFJO1FBQ3BDLE9BQU9EO0lBQ1QsRUFBRSxPQUFPRSxHQUFHO1FBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtBQUNGLEdBQ0E7QUFFSyxNQUFNVyxhQUFhdEIsa0VBQWdCQSxDQUN4Qyx1QkFDQSxPQUFPZ0I7SUFDTCxJQUFJO1FBQ0YsTUFBTVQsV0FBVyxNQUFNQyxNQUFPLGtDQUFpQztZQUM3RFMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUUsR0FBR0wsSUFBSTtZQUFDO1FBQ2pDO1FBQ0EsTUFBTVAsV0FBVyxNQUFNRixTQUFTRyxJQUFJO1FBQ3BDLE9BQU9EO0lBQ1QsRUFBRSxPQUFPRSxHQUFHO1FBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtBQUNGLEdBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmVhdHVyZXMvcHJvZHVjdHMvYWN0aW9ucy50cz84ODQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSBcIkAvdHlwZXMvcHJvZHVjdHNUeXBlc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGR1bW15RGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIG5hbWU6IFwiZHVtbXkgMVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiYWJjXCIsXHJcbiAgICBwcmljZTogMTIzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiBcImR1bW15IDJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcImFiY1wiLFxyXG4gICAgcHJpY2U6IDEyMyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgbmFtZTogXCJkdW1teSAxXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJhYmNcIixcclxuICAgIHByaWNlOiAxMjMsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6IFwiZHVtbXkgMlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiYWJjXCIsXHJcbiAgICBwcmljZTogMTIzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBuYW1lOiBcImR1bW15IDFcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcImFiY1wiLFxyXG4gICAgcHJpY2U6IDEyMyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogXCJkdW1teSAyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJhYmNcIixcclxuICAgIHByaWNlOiAxMjMsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxQcm9kdWN0cyA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJwcm9kdWN0cy9nZXRBbGxQcm9kdWN0c1wiLFxyXG4gIGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvcHJvZHVjdHNcIik7XHJcbiAgICAgIGNvbnN0IHJlc3BEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gcmVzcERhdGE7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0QnlJZCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJwcm9kdWN0cy9nZXRQcm9kdWN0QnlJZFwiLFxyXG4gIGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcHJvZHVjdHMvJHtpZH1gKTtcclxuICAgICAgY29uc3QgcmVzcERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiByZXNwRGF0YTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2R1Y3QgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwicHJvZHVjdHMvdXBkYXRlUHJvZHVjdFwiLFxyXG4gIGFzeW5jIChkYXRhOiBwcm9kdWN0cyB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Byb2R1Y3RzYCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgLi4uZGF0YSB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlc3BEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gcmVzcERhdGE7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQcm9kdWN0ID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcInByb2R1Y3RzL2FkZFByb2R1Y3RcIixcclxuICBhc3luYyAoZGF0YTogcHJvZHVjdHMgfCB1bmRlZmluZWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wcm9kdWN0c2AsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAuLi5kYXRhIH0pLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVzcERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiByZXNwRGF0YTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImR1bW15RGF0YSIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJnZXRBbGxQcm9kdWN0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXNwRGF0YSIsImpzb24iLCJlIiwiY29uc29sZSIsImxvZyIsImdldFByb2R1Y3RCeUlkIiwidXBkYXRlUHJvZHVjdCIsImRhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhZGRQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./features/products/actions.ts\n"));

/***/ })

});