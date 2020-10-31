(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/products/handlers/get-product-list.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/products/dal/product.repository.ts":
/*!************************************************!*\
  !*** ./src/products/dal/product.repository.ts ***!
  \************************************************/
/*! exports provided: ProductRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRepository", function() { return ProductRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock_product_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/product.mock */ "./src/products/mock/product.mock.ts");


class ProductRepository {
    find() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return _mock_product_mock__WEBPACK_IMPORTED_MODULE_1__["productMock"];
        });
    }
    findOne(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const product = _mock_product_mock__WEBPACK_IMPORTED_MODULE_1__["productMock"].find((item) => item.id === id);
            return product;
        });
    }
}


/***/ }),

/***/ "./src/products/handlers/get-product-list.ts":
/*!***************************************************!*\
  !*** ./src/products/handlers/get-product-list.ts ***!
  \***************************************************/
/*! exports provided: handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_http_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http-response */ "./src/utils/http-response.ts");
/* harmony import */ var _utils_http_status_code_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/http-status-code.enum */ "./src/utils/http-status-code.enum.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "./src/products/product.service.ts");




const handler = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    try {
        const products = yield _product_service__WEBPACK_IMPORTED_MODULE_3__["productService"].find();
        return new _utils_http_response__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](_utils_http_status_code_enum__WEBPACK_IMPORTED_MODULE_2__["HttpStatusCode"].OK, products);
    }
    catch (error) {
        return new _utils_http_response__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](_utils_http_status_code_enum__WEBPACK_IMPORTED_MODULE_2__["HttpStatusCode"].INTERNAL_SERVER_ERROR, error);
    }
});


/***/ }),

/***/ "./src/products/mock/product.mock.ts":
/*!*******************************************!*\
  !*** ./src/products/mock/product.mock.ts ***!
  \*******************************************/
/*! exports provided: productMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productMock", function() { return productMock; });
// function generateProduct() {
//   return {
//     id: faker.random.uuid(),
//     title: faker.commerce.productName(),
//     description: faker.commerce.productDescription(),
//     price: faker.commerce.price(),
//     imageUrl: faker.image.imageUrl(),
//   };
// }
const productMock = [
    {
        id: 'ecbfaf6c-f87a-418b-82af-2f5304445216',
        title: 'Sleek Steel Shirt',
        description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
        price: '483.00',
        imageUrl: 'http://placeimg.com/640/480',
    },
    {
        id: '553993bf-6ba0-46ad-b557-74e121749ca0',
        title: 'Handmade Frozen Chips',
        description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
        price: '837.00',
        imageUrl: 'http://placeimg.com/640/480',
    },
    {
        id: '1c787d3e-c50f-417f-9f18-6beee5ec07d1',
        title: 'Handmade Fresh Bike',
        description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
        price: '781.00',
        imageUrl: 'http://placeimg.com/640/480',
    },
    {
        id: 'f4af45b7-7442-4539-994c-b696c0c0bf7e',
        title: 'Sleek Wooden Hat',
        description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
        price: '255.00',
        imageUrl: 'http://placeimg.com/640/480',
    },
    {
        id: '6c095a2e-4f1d-41ce-9bfa-658ff3865791',
        title: 'Generic Metal Shirt',
        description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
        price: '159.00',
        imageUrl: 'http://placeimg.com/640/480',
    },
    {
        id: '9cb70d2b-1a1f-437e-b767-02035d9bac45',
        title: 'Fantastic Plastic Chair',
        description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
        price: '271.00',
        imageUrl: 'http://placeimg.com/640/480',
    },
];


/***/ }),

/***/ "./src/products/product.service.ts":
/*!*****************************************!*\
  !*** ./src/products/product.service.ts ***!
  \*****************************************/
/*! exports provided: ProcutsService, productService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcutsService", function() { return ProcutsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productService", function() { return productService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dal_product_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dal/product.repository */ "./src/products/dal/product.repository.ts");


class ProcutsService {
    constructor(repository) {
        this.repository = repository;
    }
    find() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const entities = yield this.repository.find();
            return entities;
        });
    }
    findOne(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const entity = yield this.repository.findOne(id);
            return entity;
        });
    }
}
const productService = new ProcutsService(new _dal_product_repository__WEBPACK_IMPORTED_MODULE_1__["ProductRepository"]());


/***/ }),

/***/ "./src/utils/http-response.ts":
/*!************************************!*\
  !*** ./src/utils/http-response.ts ***!
  \************************************/
/*! exports provided: HttpResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
class HttpResponse {
    constructor(statusCode, body = {}) {
        this.statusCode = statusCode;
        this.body = JSON.stringify(body, null, 2);
    }
}


/***/ }),

/***/ "./src/utils/http-status-code.enum.ts":
/*!********************************************!*\
  !*** ./src/utils/http-status-code.enum.ts ***!
  \********************************************/
/*! exports provided: HttpStatusCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpStatusCode", function() { return HttpStatusCode; });
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["CONTINUE"] = 100] = "CONTINUE";
    HttpStatusCode[HttpStatusCode["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpStatusCode[HttpStatusCode["PROCESSING"] = 102] = "PROCESSING";
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["CREATED"] = 201] = "CREATED";
    HttpStatusCode[HttpStatusCode["ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatusCode[HttpStatusCode["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatusCode[HttpStatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatusCode[HttpStatusCode["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpStatusCode[HttpStatusCode["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpStatusCode[HttpStatusCode["MULTI_STATUS"] = 207] = "MULTI_STATUS";
    HttpStatusCode[HttpStatusCode["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
    HttpStatusCode[HttpStatusCode["IM_USED"] = 226] = "IM_USED";
    HttpStatusCode[HttpStatusCode["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    HttpStatusCode[HttpStatusCode["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatusCode[HttpStatusCode["FOUND"] = 302] = "FOUND";
    HttpStatusCode[HttpStatusCode["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpStatusCode[HttpStatusCode["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatusCode[HttpStatusCode["USE_PROXY"] = 305] = "USE_PROXY";
    HttpStatusCode[HttpStatusCode["SWITCH_PROXY"] = 306] = "SWITCH_PROXY";
    HttpStatusCode[HttpStatusCode["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpStatusCode[HttpStatusCode["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCode[HttpStatusCode["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatusCode[HttpStatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpStatusCode[HttpStatusCode["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpStatusCode[HttpStatusCode["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpStatusCode[HttpStatusCode["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpStatusCode[HttpStatusCode["CONFLICT"] = 409] = "CONFLICT";
    HttpStatusCode[HttpStatusCode["GONE"] = 410] = "GONE";
    HttpStatusCode[HttpStatusCode["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpStatusCode[HttpStatusCode["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpStatusCode[HttpStatusCode["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HttpStatusCode[HttpStatusCode["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    HttpStatusCode[HttpStatusCode["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpStatusCode[HttpStatusCode["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
    HttpStatusCode[HttpStatusCode["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpStatusCode[HttpStatusCode["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
    HttpStatusCode[HttpStatusCode["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    HttpStatusCode[HttpStatusCode["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatusCode[HttpStatusCode["LOCKED"] = 423] = "LOCKED";
    HttpStatusCode[HttpStatusCode["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HttpStatusCode[HttpStatusCode["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
    HttpStatusCode[HttpStatusCode["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    HttpStatusCode[HttpStatusCode["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpStatusCode[HttpStatusCode["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    HttpStatusCode[HttpStatusCode["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    HttpStatusCode[HttpStatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatusCode[HttpStatusCode["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpStatusCode[HttpStatusCode["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatusCode[HttpStatusCode["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatusCode[HttpStatusCode["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpStatusCode[HttpStatusCode["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    HttpStatusCode[HttpStatusCode["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
    HttpStatusCode[HttpStatusCode["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    HttpStatusCode[HttpStatusCode["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
    HttpStatusCode[HttpStatusCode["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
    HttpStatusCode[HttpStatusCode["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
})(HttpStatusCode || (HttpStatusCode = {}));


/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=get-product-list.js.map