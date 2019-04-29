(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-auth-module-auth-module"],{

/***/ "./src/app/auth-module/auth-store/auth.action.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth-module/auth-store/auth.action.ts ***!
  \*******************************************************/
/*! exports provided: AuthenticationActionType, AddLoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationActionType", function() { return AuthenticationActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLoginInfo", function() { return AddLoginInfo; });
var AuthenticationActionType;
(function (AuthenticationActionType) {
    AuthenticationActionType["AddLoginInfo"] = "AddLoginInfo";
})(AuthenticationActionType || (AuthenticationActionType = {}));
var AddLoginInfo = /** @class */ (function () {
    function AddLoginInfo(data) {
        this.data = data;
        this.type = AuthenticationActionType.AddLoginInfo;
    }
    return AddLoginInfo;
}());



/***/ }),

/***/ "./src/app/auth-module/auth-store/auth.reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/auth-module/auth-store/auth.reducer.ts ***!
  \********************************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.action */ "./src/app/auth-module/auth-store/auth.action.ts");
/**
 * Created by dattaram on 11/4/19.
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* INITIAL STATE OF PRODUCT STATE */
/* INITIAL STATE OF PRODUCT STATE */

var initialState = {
    loginInfo: {}
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _auth_action__WEBPACK_IMPORTED_MODULE_0__["AuthenticationActionType"].AddLoginInfo:
            return __assign({}, state, { loginInfo: action.data });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/auth-module/auth.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth-module/auth.module.ts ***!
  \********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth-module/login/login.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-store/auth.reducer */ "./src/app/auth-module/auth-store/auth.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by dattaram on 11/4/19.
 */










var routes = [
    {
        path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('authentication', _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_8__["authReducer"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth-module/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/auth-module/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-spinner [show]=\"showLoader\" [type]=\"'rectanglebounce'\" [vertical-position]=\"'center'\" [horizontal-position]=\"'center'\" [color]=\"'yellow'\">\n</amexio-spinner>\n<div class=\"login-page-div\">\n\n \n   <amexio-nav [transparent]=\"true\" [enable-side-nav-position]=\"true\" class=\"ok\" [title]=\"'RINA Platform'\" [logo]=\"'assets/images/rinalogo.png'\">\n   </amexio-nav>\n  <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'center'\">\n    <amexio-layout-item>\n      <amexio-layout-columns [fit]=\"true\" [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'end'\">\n        <amexio-layout-item>  &nbsp; </amexio-layout-item>\n        <amexio-layout-item class=\"login-page\">\n          <div [formGroup]=\"signInGroup\">\n            <amexio-card-ce>\n\n              <amexio-header-ce [border-bottom]=\"true\">\n                <amexio-label size=\"large-bold\">\n                  Login\n                </amexio-label>\n              </amexio-header-ce>\n\n              <amexio-body-ce>\n                <amexio-layout-columns [border]=\"false\" [fit]=\"true\" [alignment]=\"'start'\" [orientation]=\"'vertical'\">\n                  <amexio-layout-item>\n                    <amexio-text-input formControlName=\"email\" [field-label]=\"'User Id'\" name=\"email\"\n                      [place-holder]=\"'Enter User Id'\" [allow-blank]=\"false\" [(ngModel)]=\"loginModel.userId\"\n                      [error-msg]=\"'Please Enter User Id'\" [icon-feedback]=\"true\">\n                    </amexio-text-input>\n\n                  </amexio-layout-item>\n                  <amexio-layout-item>\n                    <amexio-password-input formControlName=\"Password\" [field-label]=\"'Password'\" name=\"password\"\n                      [place-holder]=\"'Enter password'\" [allow-blank]=\"false\" [(ngModel)]=\"loginModel.password\"\n                      [error-msg]=\"'Please Enter password'\" [icon-feedback]=\"true\">\n                    </amexio-password-input>\n                  </amexio-layout-item>\n                </amexio-layout-columns>\n              </amexio-body-ce>\n              <amexio-action-ce [align]=\"'center'\" [border-top]=\"true\">\n                <amexio-button [icon]=\"'fa fa-sign-in'\" [disabled]=\"!signInGroup.valid\" [label]=\"'Login'\" [type]=\"'theme-color'\"\n                  (onClick)=\"loginHandle()\" [tooltip]=\"'Login'\" [block]=\"true\">\n                </amexio-button>\n              </amexio-action-ce>\n\n            </amexio-card-ce>\n          </div>\n\n        </amexio-layout-item>\n        <amexio-layout-item> &nbsp;</amexio-layout-item>\n      </amexio-layout-columns>\n\n    </amexio-layout-item>\n  </amexio-layout-columns>\n</div>\n  <amexio-notification\n        [data]=\"errorMsgData\"\n        [vertical-position]=\"'top'\"\n        [horizontal-position]=\"'right'\"\n        [close-on-escape] =\"true\"\n        [background-color]=\"'red'\"\n        [auto-dismiss-msg]=\"false\"\n        [auto-dismiss-msg-interval]=\"6000\">\n      </amexio-notification>"

/***/ }),

/***/ "./src/app/auth-module/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/auth-module/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/login.model */ "./src/app/models/login.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth-store/auth.action */ "./src/app/auth-module/auth-store/auth.action.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _constant_service_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constant/service.constant */ "./src/app/constant/service.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by dattaram on 11/4/19.
 */








var LoginComponent = /** @class */ (function () {
    function LoginComponent(_httpClient, fb, store, _router) {
        this._httpClient = _httpClient;
        this.fb = fb;
        this.store = store;
        this._router = _router;
        this.showLoader = false;
        this.errorMsgData = [];
        this.loginModel = new _models_login_model__WEBPACK_IMPORTED_MODULE_1__["LoginModel"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.validateSigninform();
        /*
            this.store
              .select<any>((state: any) => state.authentication)
              .subscribe((customerState: any) => {
                  console.log(customerState);
              }
              );*/
    };
    LoginComponent.prototype.validateSigninform = function () {
        this.signInGroup = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
        });
    };
    LoginComponent.prototype.loginHandle = function () {
        var _this = this;
        debugger;
        var response;
        this.showLoader = true;
        this._httpClient.post(_constant_service_constant__WEBPACK_IMPORTED_MODULE_7__["Auth_URL"], this.loginModel).subscribe(function (res) {
            response = res;
        }, function (error) {
            console.log(error);
            _this.showLoader = false;
        }, function () {
            if (response.success) {
                // TENENT_ID =  response.response.tenantId;
                _this.store.dispatch(new _auth_store_auth_action__WEBPACK_IMPORTED_MODULE_5__["AddLoginInfo"]({ 'userId': response.response.userId, 'tenantId': response.response.tenantId, 'gamification': response.response.gamification }));
                _this._router.navigate(['home']);
                _this.showLoader = false;
            }
            else {
                _this.errorMsgData.push('Please Enter valid UserId / Password');
                _this.showLoader = false;
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth-module/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/login.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/login.model.ts ***!
  \***************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
/**
 * Created by dattaram on 11/4/19.
 */
var LoginModel = /** @class */ (function () {
    function LoginModel() {
        this.userId = '';
        this.password = '';
    }
    return LoginModel;
}());



/***/ })

}]);
//# sourceMappingURL=app-auth-module-auth-module.js.map