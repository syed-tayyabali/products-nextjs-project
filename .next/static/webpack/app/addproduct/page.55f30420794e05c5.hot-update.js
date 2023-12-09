"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/addproduct/page",{

/***/ "(app-pages-browser)/./features/products/actions.ts":
/*!**************************************!*\
  !*** ./features/products/actions.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProduct: function() { return /* binding */ addProduct; },\n/* harmony export */   deleteProduct: function() { return /* binding */ deleteProduct; },\n/* harmony export */   getAllProducts: function() { return /* binding */ getAllProducts; },\n/* harmony export */   getProductById: function() { return /* binding */ getProductById; },\n/* harmony export */   updateProduct: function() { return /* binding */ updateProduct; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst getAllProducts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"products/getAllProducts\", async ()=>{\n    try {\n        const response = await fetch(\"http://localhost:4000/products\");\n        const respData = await response.json();\n        return respData;\n    } catch (e) {\n        console.log(e);\n    }\n});\nconst getProductById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"products/getProductById\", async (id)=>{\n    try {\n        const response = await fetch(\"http://localhost:4000/products/\".concat(id));\n        const respData = await response.json();\n        return respData;\n    } catch (e) {\n        console.log(e);\n    }\n});\nconst updateProduct = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"products/updateProduct\", async (data)=>{\n    try {\n        const response = await fetch(\"http://localhost:4000/products\", {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                ...data\n            })\n        });\n        const respData = await response.json();\n        return respData;\n    } catch (e) {\n        console.log(e);\n    }\n});\nconst addProduct = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"products/addProduct\", async (data)=>{\n    try {\n        const response = await fetch(\"http://localhost:4000/products\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                ...data\n            })\n        });\n        const respData = await response.json();\n        return respData;\n    } catch (e) {\n        console.log(e);\n    }\n});\nconst deleteProduct = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"products/addProduct\", async (data)=>{\n    try {\n        const response = await fetch(\"http://localhost:4000/products\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                ...data\n            })\n        });\n        const respData = await response.json();\n        return respData;\n    } catch (e) {\n        console.log(e);\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2ZlYXR1cmVzL3Byb2R1Y3RzL2FjdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ29EO0FBRTdDLE1BQU1DLGlCQUFpQkQsa0VBQWdCQSxDQUM1QywyQkFDQTtJQUNFLElBQUk7UUFDRixNQUFNRSxXQUFXLE1BQU1DLE1BQU07UUFDN0IsTUFBTUMsV0FBVyxNQUFNRixTQUFTRyxJQUFJO1FBQ3BDLE9BQU9EO0lBQ1QsRUFBRSxPQUFPRSxHQUFHO1FBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtBQUNGLEdBQ0E7QUFFSyxNQUFNRyxpQkFBaUJULGtFQUFnQkEsQ0FDNUMsMkJBQ0EsT0FBT1U7SUFDTCxJQUFJO1FBQ0YsTUFBTVIsV0FBVyxNQUFNQyxNQUFNLGtDQUFxQyxPQUFITztRQUMvRCxNQUFNTixXQUFXLE1BQU1GLFNBQVNHLElBQUk7UUFDcEMsT0FBT0Q7SUFDVCxFQUFFLE9BQU9FLEdBQUc7UUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0FBQ0YsR0FDQTtBQUVLLE1BQU1LLGdCQUFnQlgsa0VBQWdCQSxDQUMzQywwQkFDQSxPQUFPWTtJQUNMLElBQUk7UUFDRixNQUFNVixXQUFXLE1BQU1DLE1BQU8sa0NBQWlDO1lBQzdEVSxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRSxHQUFHTCxJQUFJO1lBQUM7UUFDakM7UUFDQSxNQUFNUixXQUFXLE1BQU1GLFNBQVNHLElBQUk7UUFDcEMsT0FBT0Q7SUFDVCxFQUFFLE9BQU9FLEdBQUc7UUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0FBQ0YsR0FDQTtBQUVLLE1BQU1ZLGFBQWFsQixrRUFBZ0JBLENBQ3hDLHVCQUNBLE9BQU9ZO0lBQ0wsSUFBSTtRQUNGLE1BQU1WLFdBQVcsTUFBTUMsTUFBTyxrQ0FBaUM7WUFDN0RVLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFLEdBQUdMLElBQUk7WUFBQztRQUNqQztRQUNBLE1BQU1SLFdBQVcsTUFBTUYsU0FBU0csSUFBSTtRQUNwQyxPQUFPRDtJQUNULEVBQUUsT0FBT0UsR0FBRztRQUNWQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2Q7QUFDRixHQUNBO0FBRUssTUFBTWEsZ0JBQWdCbkIsa0VBQWdCQSxDQUMzQyx1QkFDQSxPQUFPWTtJQUNMLElBQUk7UUFDRixNQUFNVixXQUFXLE1BQU1DLE1BQU8sa0NBQWlDO1lBQzdEVSxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRSxHQUFHTCxJQUFJO1lBQUM7UUFDakM7UUFDQSxNQUFNUixXQUFXLE1BQU1GLFNBQVNHLElBQUk7UUFDcEMsT0FBT0Q7SUFDVCxFQUFFLE9BQU9FLEdBQUc7UUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0FBQ0YsR0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9mZWF0dXJlcy9wcm9kdWN0cy9hY3Rpb25zLnRzPzg4NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvZHVjdHMgfSBmcm9tIFwiQC90eXBlcy9wcm9kdWN0c1R5cGVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbFByb2R1Y3RzID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcInByb2R1Y3RzL2dldEFsbFByb2R1Y3RzXCIsXHJcbiAgYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wcm9kdWN0c1wiKTtcclxuICAgICAgY29uc3QgcmVzcERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiByZXNwRGF0YTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RCeUlkID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcInByb2R1Y3RzL2dldFByb2R1Y3RCeUlkXCIsXHJcbiAgYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wcm9kdWN0cy8ke2lkfWApO1xyXG4gICAgICBjb25zdCByZXNwRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIHJlc3BEYXRhO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZHVjdCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJwcm9kdWN0cy91cGRhdGVQcm9kdWN0XCIsXHJcbiAgYXN5bmMgKGRhdGE6IHByb2R1Y3RzIHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcHJvZHVjdHNgLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAuLi5kYXRhIH0pLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVzcERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiByZXNwRGF0YTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFByb2R1Y3QgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwicHJvZHVjdHMvYWRkUHJvZHVjdFwiLFxyXG4gIGFzeW5jIChkYXRhOiBwcm9kdWN0cyB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Byb2R1Y3RzYCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLmRhdGEgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZXNwRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIHJlc3BEYXRhO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvZHVjdCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJwcm9kdWN0cy9hZGRQcm9kdWN0XCIsXHJcbiAgYXN5bmMgKGRhdGE6IHByb2R1Y3RzIHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcHJvZHVjdHNgLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgLi4uZGF0YSB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlc3BEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gcmVzcERhdGE7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJnZXRBbGxQcm9kdWN0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXNwRGF0YSIsImpzb24iLCJlIiwiY29uc29sZSIsImxvZyIsImdldFByb2R1Y3RCeUlkIiwiaWQiLCJ1cGRhdGVQcm9kdWN0IiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFkZFByb2R1Y3QiLCJkZWxldGVQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./features/products/actions.ts\n"));

/***/ })

});