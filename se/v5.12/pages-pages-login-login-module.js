(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-login-login-module"],{

/***/ "./src/app/pages/pages/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/pages/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Created by sagar on 3/8/17.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.html */ "./src/app/pages/pages/login/login.html"),
            styles: ["\n    \n    "]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages/login/login.html":
/*!**********************************************!*\
  !*** ./src/app/pages/pages/login/login.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-row>\n  <amexio-column [size]=\"3\"></amexio-column>\n  <amexio-column [size]=\"6\">\n      <amexio-card [show]=\"true\" [footer]=\"true\" [header] = \"true\">\n        <amexio-header>\n          Sign into Your account\n        </amexio-header>\n        <amexio-body>\n          <amexio-row>\n            <amexio-column [size]=\"12\" >\n              <amexio-email-input [field-label]=\"'Email'\" name=\"email\"\n                                  [place-holder]=\"' Email'\">\n              </amexio-email-input>\n              <amexio-password-input\n                [field-label]=\"'Password'\" name=\"password\"\n                [place-holder]=\"' Password'\"\n                [icon-feedback]=\"true\"\n              >\n            </amexio-password-input>\n              <div class=\"forgot-password\"><a href=\"#\">Forgot Password</a></div>\n            </amexio-column>\n          </amexio-row>\n\n        </amexio-body>\n        <br /><br /><br /><br />\n        <amexio-action>\n\n            <amexio-btn-group [size]=\"'default'\">\n              <amexio-button [label]=\"'Signup'\" [type]=\"'primary'\" [tooltip]=\"'Sign-up'\" ></amexio-button>\n                <amexio-button [label]=\"'Login'\" [type]=\"'secondary'\" [tooltip]=\"'Login Account'\"></amexio-button>\n\n          </amexio-btn-group>\n\n        </amexio-action>\n      </amexio-card>\n  </amexio-column>\n  <amexio-column [size]=\"3\"></amexio-column>\n</amexio-row>\n"

/***/ }),

/***/ "./src/app/pages/pages/login/login.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/pages/login/login.module.ts ***!
  \***************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/pages/login/login.component.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by sagar on 3/8/17.
 */






var routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioFormsModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            ],
            providers: []
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-login-login-module.js.map