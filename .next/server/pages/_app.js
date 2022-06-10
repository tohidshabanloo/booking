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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/api/getAirportFlightList.ts":
/*!*****************************************!*\
  !*** ./src/api/getAirportFlightList.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetch(\"https://ws.alibaba.ir/api/v1/flightInfo/THR/departure\").then((res)=>res.json()\n));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2dldEFpcnBvcnRGbGlnaHRMaXN0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZUEsS0FBSyxDQUNsQix1REFBdUQsQ0FDeEQsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7QUFBQSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGlnaHQtc3RhdHVzLy4vc3JjL2FwaS9nZXRBaXJwb3J0RmxpZ2h0TGlzdC50cz80YWY2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZldGNoKFxuICBcImh0dHBzOi8vd3MuYWxpYmFiYS5pci9hcGkvdjEvZmxpZ2h0SW5mby9USFIvZGVwYXJ0dXJlXCJcbikudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiJdLCJuYW1lcyI6WyJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/getAirportFlightList.ts\n");

/***/ }),

/***/ "./src/api/getAirportList.ts":
/*!***********************************!*\
  !*** ./src/api/getAirportList.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetch(\"https://ws.alibaba.ir/api/v1/flightInfo/airports\").then((res)=>res.json()\n));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2dldEFpcnBvcnRMaXN0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZUEsS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUNDLElBQUksQ0FDM0UsQ0FBQ0MsR0FBRyxHQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTtBQUFBLENBQ3BCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGlnaHQtc3RhdHVzLy4vc3JjL2FwaS9nZXRBaXJwb3J0TGlzdC50cz9hMzNiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZldGNoKFwiaHR0cHM6Ly93cy5hbGliYWJhLmlyL2FwaS92MS9mbGlnaHRJbmZvL2FpcnBvcnRzXCIpLnRoZW4oXG4gIChyZXMpID0+IHJlcy5qc29uKClcbik7XG4iXSwibmFtZXMiOlsiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/getAirportList.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/font.css */ \"./src/styles/font.css\");\n/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_font_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/store */ \"./src/redux/store.ts\");\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/tohidshabanlou/Clone/booking/src/pages/_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tohidshabanlou/Clone/booking/src/pages/_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTJCO0FBQ0c7QUFFUztBQUNMO0FBRWxDLFNBQVNFLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDSixpREFBUTtRQUFDQyxLQUFLLEVBQUVBLG9EQUFLO2tCQUNwQiw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNuQixDQUNYO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxpZ2h0LXN0YXR1cy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2ZvbnQuY3NzXCI7XG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiQC9yZWR1eC9zdG9yZVwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/redux/reducer/dataReducer.ts":
/*!******************************************!*\
  !*** ./src/redux/reducer/dataReducer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataSlice\": () => (/* binding */ dataSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getFlights\": () => (/* binding */ getFlights),\n/* harmony export */   \"getList\": () => (/* binding */ getList)\n/* harmony export */ });\n/* harmony import */ var _api_getAirportFlightList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/getAirportFlightList */ \"./src/api/getAirportFlightList.ts\");\n/* harmony import */ var _api_getAirportList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/getAirportList */ \"./src/api/getAirportList.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst dataSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n    name: \"data\",\n    initialState: {\n        airportList: [],\n        airportFlights: []\n    },\n    reducers: {\n        updateList: (state, action)=>{\n            state.airportList = action.payload;\n        },\n        updateFlights: (state, action)=>{\n            state.airportFlights = action.payload;\n        }\n    }\n});\nconst { updateList , updateFlights  } = dataSlice.actions;\nconst getList = ()=>(dispatch, getState)=>{\n        _api_getAirportList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].then((res)=>{\n            dispatch(updateList(res.result));\n        });\n    }\n;\nconst getFlights = ()=>(dispatch, getState)=>{\n        _api_getAirportFlightList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].then((res)=>{\n            dispatch(updateFlights(res.result));\n        });\n    }\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlci9kYXRhUmVkdWNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RDtBQUNaO0FBQ0g7QUFFeEMsTUFBTUcsU0FBUyxHQUFHRCw2REFBVyxDQUFDO0lBQ25DRSxJQUFJLEVBQUUsTUFBTTtJQUNaQyxZQUFZLEVBQUU7UUFDWkMsV0FBVyxFQUFFLEVBQUU7UUFDZkMsY0FBYyxFQUFFLEVBQUU7S0FDbkI7SUFDREMsUUFBUSxFQUFFO1FBQ1JDLFVBQVUsRUFBRSxDQUFDQyxLQUFVLEVBQUVDLE1BQVcsR0FBSztZQUN2Q0QsS0FBSyxDQUFDSixXQUFXLEdBQUdLLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQ3BDO1FBQ0RDLGFBQWEsRUFBRSxDQUFDSCxLQUFVLEVBQUVDLE1BQVcsR0FBSztZQUMxQ0QsS0FBSyxDQUFDSCxjQUFjLEdBQUdJLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQ3ZDO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLEVBQUVILFVBQVUsR0FBRUksYUFBYSxHQUFFLEdBQUdWLFNBQVMsQ0FBQ1csT0FBTztBQUVoRCxNQUFNQyxPQUFPLEdBQVEsSUFBTSxDQUFDQyxRQUFhLEVBQUVDLFFBQWEsR0FBSztRQUNsRWhCLGdFQUFtQixDQUFDLENBQUNrQixHQUFHLEdBQUs7WUFDM0JILFFBQVEsQ0FBQ1AsVUFBVSxDQUFDVSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0tBQ0o7QUFBQSxDQUFDO0FBRUssTUFBTUMsVUFBVSxHQUFRLElBQU0sQ0FBQ0wsUUFBYSxFQUFFQyxRQUFhLEdBQUs7UUFDckVqQixzRUFBeUIsQ0FBQyxDQUFDbUIsR0FBRyxHQUFLO1lBQ2pDSCxRQUFRLENBQUNILGFBQWEsQ0FBQ00sR0FBRyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3JDLENBQUMsQ0FBQztLQUNKO0FBQUEsQ0FBQztBQUVGLGlFQUFlakIsU0FBUyxDQUFDbUIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxpZ2h0LXN0YXR1cy8uL3NyYy9yZWR1eC9yZWR1Y2VyL2RhdGFSZWR1Y2VyLnRzP2FkMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEFpcnBvcnRGbGlnaHRMaXN0IGZyb20gXCJAL2FwaS9nZXRBaXJwb3J0RmxpZ2h0TGlzdFwiO1xuaW1wb3J0IGdldEFpcnBvcnRMaXN0IGZyb20gXCJAL2FwaS9nZXRBaXJwb3J0TGlzdFwiO1xuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5leHBvcnQgY29uc3QgZGF0YVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImRhdGFcIixcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgYWlycG9ydExpc3Q6IFtdLFxuICAgIGFpcnBvcnRGbGlnaHRzOiBbXSxcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICB1cGRhdGVMaXN0OiAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgIHN0YXRlLmFpcnBvcnRMaXN0ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgICB1cGRhdGVGbGlnaHRzOiAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgIHN0YXRlLmFpcnBvcnRGbGlnaHRzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCB7IHVwZGF0ZUxpc3QsIHVwZGF0ZUZsaWdodHMgfSA9IGRhdGFTbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgY29uc3QgZ2V0TGlzdDogYW55ID0gKCkgPT4gKGRpc3BhdGNoOiBhbnksIGdldFN0YXRlOiBhbnkpID0+IHtcbiAgZ2V0QWlycG9ydExpc3QudGhlbigocmVzKSA9PiB7XG4gICAgZGlzcGF0Y2godXBkYXRlTGlzdChyZXMucmVzdWx0KSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEZsaWdodHM6IGFueSA9ICgpID0+IChkaXNwYXRjaDogYW55LCBnZXRTdGF0ZTogYW55KSA9PiB7XG4gIGdldEFpcnBvcnRGbGlnaHRMaXN0LnRoZW4oKHJlcykgPT4ge1xuICAgIGRpc3BhdGNoKHVwZGF0ZUZsaWdodHMocmVzLnJlc3VsdCkpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImdldEFpcnBvcnRGbGlnaHRMaXN0IiwiZ2V0QWlycG9ydExpc3QiLCJjcmVhdGVTbGljZSIsImRhdGFTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJhaXJwb3J0TGlzdCIsImFpcnBvcnRGbGlnaHRzIiwicmVkdWNlcnMiLCJ1cGRhdGVMaXN0Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwidXBkYXRlRmxpZ2h0cyIsImFjdGlvbnMiLCJnZXRMaXN0IiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsInRoZW4iLCJyZXMiLCJyZXN1bHQiLCJnZXRGbGlnaHRzIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/reducer/dataReducer.ts\n");

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducer_dataReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer/dataReducer */ \"./src/redux/reducer/dataReducer.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        data: _reducer_dataReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDtBQUNGO0FBRWhELGlFQUFlQSxnRUFBYyxDQUFDO0lBQzVCRSxPQUFPLEVBQUU7UUFDUEMsSUFBSSxFQUFFRiw0REFBVztLQUNsQjtDQUNGLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsaWdodC1zdGF0dXMvLi9zcmMvcmVkdXgvc3RvcmUudHM/YTViMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgZGF0YVJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlci9kYXRhUmVkdWNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICBkYXRhOiBkYXRhUmVkdWNlclxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJkYXRhUmVkdWNlciIsInJlZHVjZXIiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/store.ts\n");

/***/ }),

/***/ "./src/styles/font.css":
/*!*****************************!*\
  !*** ./src/styles/font.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();