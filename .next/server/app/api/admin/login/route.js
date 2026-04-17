"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/admin/login/route";
exports.ids = ["app/api/admin/login/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flogin%2Froute&page=%2Fapi%2Fadmin%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CADMIN%5CDesktop%5Ccode%5Ccactistock%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CADMIN%5CDesktop%5Ccode%5Ccactistock&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flogin%2Froute&page=%2Fapi%2Fadmin%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CADMIN%5CDesktop%5Ccode%5Ccactistock%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CADMIN%5CDesktop%5Ccode%5Ccactistock&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ADMIN_Desktop_code_cactistock_app_api_admin_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/login/route.ts */ \"(rsc)/./app/api/admin/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/login/route\",\n        pathname: \"/api/admin/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\code\\\\cactistock\\\\app\\\\api\\\\admin\\\\login\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_ADMIN_Desktop_code_cactistock_app_api_admin_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRmxvZ2luJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRmxvZ2luJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBRE1JTiU1Q0Rlc2t0b3AlNUNjb2RlJTVDY2FjdGlzdG9jayU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQURNSU4lNUNEZXNrdG9wJTVDY29kZSU1Q2NhY3Rpc3RvY2smaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzZCO0FBQzFHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FjdGlzdG9jay1uZXh0Lz85MDdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEFETUlOXFxcXERlc2t0b3BcXFxcY29kZVxcXFxjYWN0aXN0b2NrXFxcXGFwcFxcXFxhcGlcXFxcYWRtaW5cXFxcbG9naW5cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkbWluL2xvZ2luL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vbG9naW5cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkbWluL2xvZ2luL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQURNSU5cXFxcRGVza3RvcFxcXFxjb2RlXFxcXGNhY3Rpc3RvY2tcXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFxsb2dpblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYWRtaW4vbG9naW4vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flogin%2Froute&page=%2Fapi%2Fadmin%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CADMIN%5CDesktop%5Ccode%5Ccactistock%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CADMIN%5CDesktop%5Ccode%5Ccactistock&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/login/route.ts":
/*!**************************************!*\
  !*** ./app/api/admin/login/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_admin_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/admin-auth */ \"(rsc)/./src/lib/admin-auth.ts\");\n\n\nasync function POST(req) {\n    const { username, password } = await req.json();\n    if (!await (0,_lib_admin_auth__WEBPACK_IMPORTED_MODULE_1__.validateAdminCredential)(username, password)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Invalid credentials\"\n        }, {\n            status: 401\n        });\n    }\n    const token = await (0,_lib_admin_auth__WEBPACK_IMPORTED_MODULE_1__.signAdminToken)();\n    const res = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        ok: true\n    });\n    res.cookies.set(_lib_admin_auth__WEBPACK_IMPORTED_MODULE_1__.adminCookieName, token, {\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        sameSite: \"lax\",\n        path: \"/\",\n        maxAge: 60 * 60 * 12\n    });\n    return res;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL2xvZ2luL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RDtBQUNvQztBQUVyRixlQUFlSSxLQUFLQyxHQUFnQjtJQUN6QyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFLEdBQUcsTUFBTUYsSUFBSUcsSUFBSTtJQUU3QyxJQUFJLENBQUUsTUFBTUwsd0VBQXVCQSxDQUFDRyxVQUFVQyxXQUFZO1FBQ3hELE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFzQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMzRTtJQUVBLE1BQU1DLFFBQVEsTUFBTVQsK0RBQWNBO0lBQ2xDLE1BQU1VLE1BQU1aLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7UUFBRUssSUFBSTtJQUFLO0lBQ3pDRCxJQUFJRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2QsNERBQWVBLEVBQUVVLE9BQU87UUFDdENLLFVBQVU7UUFDVkMsUUFBUUMsa0JBQXlCO1FBQ2pDQyxVQUFVO1FBQ1ZDLE1BQU07UUFDTkMsUUFBUSxLQUFLLEtBQUs7SUFDcEI7SUFFQSxPQUFPVDtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FjdGlzdG9jay1uZXh0Ly4vYXBwL2FwaS9hZG1pbi9sb2dpbi9yb3V0ZS50cz9mNDRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgYWRtaW5Db29raWVOYW1lLCBzaWduQWRtaW5Ub2tlbiwgdmFsaWRhdGVBZG1pbkNyZWRlbnRpYWwgfSBmcm9tIFwiQC9saWIvYWRtaW4tYXV0aFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICBpZiAoIShhd2FpdCB2YWxpZGF0ZUFkbWluQ3JlZGVudGlhbCh1c2VybmFtZSwgcGFzc3dvcmQpKSkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiSW52YWxpZCBjcmVkZW50aWFsc1wiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2tlbiA9IGF3YWl0IHNpZ25BZG1pblRva2VuKCk7XHJcbiAgY29uc3QgcmVzID0gTmV4dFJlc3BvbnNlLmpzb24oeyBvazogdHJ1ZSB9KTtcclxuICByZXMuY29va2llcy5zZXQoYWRtaW5Db29raWVOYW1lLCB0b2tlbiwge1xyXG4gICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAxMixcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlcztcclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiYWRtaW5Db29raWVOYW1lIiwic2lnbkFkbWluVG9rZW4iLCJ2YWxpZGF0ZUFkbWluQ3JlZGVudGlhbCIsIlBPU1QiLCJyZXEiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidG9rZW4iLCJyZXMiLCJvayIsImNvb2tpZXMiLCJzZXQiLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJzYW1lU2l0ZSIsInBhdGgiLCJtYXhBZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/login/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/admin-auth.ts":
/*!*******************************!*\
  !*** ./src/lib/admin-auth.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   adminCookieName: () => (/* binding */ adminCookieName),\n/* harmony export */   isAdminAuthenticated: () => (/* binding */ isAdminAuthenticated),\n/* harmony export */   signAdminToken: () => (/* binding */ signAdminToken),\n/* harmony export */   validateAdminCredential: () => (/* binding */ validateAdminCredential)\n/* harmony export */ });\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! server-only */ \"(rsc)/./node_modules/next/dist/compiled/server-only/empty.js\");\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(server_only__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/sign.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\n\n\nconst COOKIE_NAME = \"admin_session\";\nfunction getSecret() {\n    const secret = process.env.ADMIN_JWT_SECRET || \"change_me_please\";\n    return new TextEncoder().encode(secret);\n}\nasync function validateAdminCredential(username, password) {\n    const expectedUser = process.env.ADMIN_USERNAME || \"admin\";\n    const expectedHash = process.env.ADMIN_PASSWORD_HASH;\n    const expectedPass = process.env.ADMIN_PASSWORD;\n    if (username !== expectedUser) {\n        return false;\n    }\n    if (expectedHash) {\n        return await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare(password, expectedHash);\n    }\n    return password === (expectedPass || \"admin1234\");\n}\nasync function signAdminToken() {\n    return await new jose__WEBPACK_IMPORTED_MODULE_3__.SignJWT({\n        role: \"admin\"\n    }).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"12h\").sign(getSecret());\n}\nasync function isAdminAuthenticated() {\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)();\n    const token = cookieStore.get(COOKIE_NAME)?.value;\n    if (!token) {\n        return false;\n    }\n    try {\n        await (0,jose__WEBPACK_IMPORTED_MODULE_4__.jwtVerify)(token, getSecret());\n        return true;\n    } catch  {\n        return false;\n    }\n}\nconst adminCookieName = COOKIE_NAME;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2FkbWluLWF1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFxQjtBQUVTO0FBQ1k7QUFDSDtBQUV2QyxNQUFNSSxjQUFjO0FBRXBCLFNBQVNDO0lBQ1AsTUFBTUMsU0FBU0MsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0IsSUFBSTtJQUMvQyxPQUFPLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ0w7QUFDbEM7QUFFTyxlQUFlTSx3QkFBd0JDLFFBQWdCLEVBQUVDLFFBQWdCO0lBQzlFLE1BQU1DLGVBQWVSLFFBQVFDLEdBQUcsQ0FBQ1EsY0FBYyxJQUFJO0lBQ25ELE1BQU1DLGVBQWVWLFFBQVFDLEdBQUcsQ0FBQ1UsbUJBQW1CO0lBQ3BELE1BQU1DLGVBQWVaLFFBQVFDLEdBQUcsQ0FBQ1ksY0FBYztJQUUvQyxJQUFJUCxhQUFhRSxjQUFjO1FBQzdCLE9BQU87SUFDVDtJQUVBLElBQUlFLGNBQWM7UUFDaEIsT0FBTyxNQUFNakIsd0RBQWMsQ0FBQ2MsVUFBVUc7SUFDeEM7SUFFQSxPQUFPSCxhQUFjSyxDQUFBQSxnQkFBZ0IsV0FBVTtBQUNqRDtBQUVPLGVBQWVHO0lBQ3BCLE9BQU8sTUFBTSxJQUFJckIseUNBQU9BLENBQUM7UUFBRXNCLE1BQU07SUFBUSxHQUN0Q0Msa0JBQWtCLENBQUM7UUFBRUMsS0FBSztJQUFRLEdBQ2xDQyxXQUFXLEdBQ1hDLGlCQUFpQixDQUFDLE9BQ2xCQyxJQUFJLENBQUN2QjtBQUNWO0FBRU8sZUFBZXdCO0lBQ3BCLE1BQU1DLGNBQWMsTUFBTTNCLHFEQUFPQTtJQUNqQyxNQUFNNEIsUUFBUUQsWUFBWUUsR0FBRyxDQUFDNUIsY0FBYzZCO0lBQzVDLElBQUksQ0FBQ0YsT0FBTztRQUNWLE9BQU87SUFDVDtJQUVBLElBQUk7UUFDRixNQUFNN0IsK0NBQVNBLENBQUM2QixPQUFPMUI7UUFDdkIsT0FBTztJQUNULEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGO0FBRU8sTUFBTTZCLGtCQUFrQjlCLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWN0aXN0b2NrLW5leHQvLi9zcmMvbGliL2FkbWluLWF1dGgudHM/MmRmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJzZXJ2ZXItb25seVwiO1xyXG5cclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgU2lnbkpXVCwgand0VmVyaWZ5IH0gZnJvbSBcImpvc2VcIjtcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuXHJcbmNvbnN0IENPT0tJRV9OQU1FID0gXCJhZG1pbl9zZXNzaW9uXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRTZWNyZXQoKSB7XHJcbiAgY29uc3Qgc2VjcmV0ID0gcHJvY2Vzcy5lbnYuQURNSU5fSldUX1NFQ1JFVCB8fCBcImNoYW5nZV9tZV9wbGVhc2VcIjtcclxuICByZXR1cm4gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHNlY3JldCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZUFkbWluQ3JlZGVudGlhbCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgY29uc3QgZXhwZWN0ZWRVc2VyID0gcHJvY2Vzcy5lbnYuQURNSU5fVVNFUk5BTUUgfHwgXCJhZG1pblwiO1xyXG4gIGNvbnN0IGV4cGVjdGVkSGFzaCA9IHByb2Nlc3MuZW52LkFETUlOX1BBU1NXT1JEX0hBU0g7XHJcbiAgY29uc3QgZXhwZWN0ZWRQYXNzID0gcHJvY2Vzcy5lbnYuQURNSU5fUEFTU1dPUkQ7XHJcblxyXG4gIGlmICh1c2VybmFtZSAhPT0gZXhwZWN0ZWRVc2VyKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoZXhwZWN0ZWRIYXNoKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIGV4cGVjdGVkSGFzaCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFzc3dvcmQgPT09IChleHBlY3RlZFBhc3MgfHwgXCJhZG1pbjEyMzRcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduQWRtaW5Ub2tlbigpIHtcclxuICByZXR1cm4gYXdhaXQgbmV3IFNpZ25KV1QoeyByb2xlOiBcImFkbWluXCIgfSlcclxuICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGc6IFwiSFMyNTZcIiB9KVxyXG4gICAgLnNldElzc3VlZEF0KClcclxuICAgIC5zZXRFeHBpcmF0aW9uVGltZShcIjEyaFwiKVxyXG4gICAgLnNpZ24oZ2V0U2VjcmV0KCkpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNBZG1pbkF1dGhlbnRpY2F0ZWQoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoQ09PS0lFX05BTUUpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgand0VmVyaWZ5KHRva2VuLCBnZXRTZWNyZXQoKSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZG1pbkNvb2tpZU5hbWUgPSBDT09LSUVfTkFNRTtcclxuIl0sIm5hbWVzIjpbImJjcnlwdCIsIlNpZ25KV1QiLCJqd3RWZXJpZnkiLCJjb29raWVzIiwiQ09PS0lFX05BTUUiLCJnZXRTZWNyZXQiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiQURNSU5fSldUX1NFQ1JFVCIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwidmFsaWRhdGVBZG1pbkNyZWRlbnRpYWwiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZXhwZWN0ZWRVc2VyIiwiQURNSU5fVVNFUk5BTUUiLCJleHBlY3RlZEhhc2giLCJBRE1JTl9QQVNTV09SRF9IQVNIIiwiZXhwZWN0ZWRQYXNzIiwiQURNSU5fUEFTU1dPUkQiLCJjb21wYXJlIiwic2lnbkFkbWluVG9rZW4iLCJyb2xlIiwic2V0UHJvdGVjdGVkSGVhZGVyIiwiYWxnIiwic2V0SXNzdWVkQXQiLCJzZXRFeHBpcmF0aW9uVGltZSIsInNpZ24iLCJpc0FkbWluQXV0aGVudGljYXRlZCIsImNvb2tpZVN0b3JlIiwidG9rZW4iLCJnZXQiLCJ2YWx1ZSIsImFkbWluQ29va2llTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/admin-auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/jose","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flogin%2Froute&page=%2Fapi%2Fadmin%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CADMIN%5CDesktop%5Ccode%5Ccactistock%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CADMIN%5CDesktop%5Ccode%5Ccactistock&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();