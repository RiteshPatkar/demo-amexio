(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../app/auth-module/auth.module": [
		"./src/app/auth-module/auth.module.ts",
		"default~app-auth-module-auth-module~app-home-layout-home-layout-module",
		"app-auth-module-auth-module"
	],
	"../app/home-layout/home.layout.module": [
		"./src/app/home-layout/home.layout.module.ts",
		"default~app-auth-module-auth-module~app-home-layout-home-layout-module",
		"app-home-layout-home-layout-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/customer.profile.model */ "./src/app/models/customer.profile.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BADGE = {
    '1': 'GOLD',
    '2': 'PLATINUM',
    '3': 'SILVER'
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.badge = '';
        this.customerOrigin = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__["CustomerProfileOrigin"]();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.setOpenServiceWindowObject = function () {
        var _this = this;
        if (this.customerOrigin.openServiceRequest) {
            setTimeout(function () {
                _this.showOpenServiceRequest = true;
            }, 2000);
        }
        this.badge = BADGE[this.customerOrigin.customerProfile.type];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_module_authguard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-module/authguard.service */ "./src/app/auth-module/authguard.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', loadChildren: '../app/auth-module/auth.module#AuthModule'
    },
    {
        path: 'home', canActivate: [_auth_module_authguard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], loadChildren: '../app/home-layout/home.layout.module#HomeLayoutModule'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_6__["NgReduxModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({
                /* an empty object here for this time */
                }),
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-module/authguard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/auth-module/authguard.service.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/**
 * Created by dattaram on 15/4/19.
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



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router, store) {
        this._router = _router;
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var status = false;
        this.store
            .select(function (state) { return state.authentication; })
            .subscribe(function (loginInfo) {
            if (loginInfo && typeof loginInfo !== 'undefined' && Object.keys(loginInfo).length > 0) {
                status = true;
            }
            else {
                // navigate to login page
                _this._router.navigate(['/login']);
                // you can save redirect url so after authing we can move them back to the page they requested
                status = false;
            }
        });
        return status;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/customer.profile.model.ts":
/*!**************************************************!*\
  !*** ./src/app/models/customer.profile.model.ts ***!
  \**************************************************/
/*! exports provided: CustomerProfileOrigin, OpenServiceRequest, CustomerProfile, ServiceTypeStructure, ServiceMetadataStructure, UpdateInformation, AddressModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfileOrigin", function() { return CustomerProfileOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenServiceRequest", function() { return OpenServiceRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfile", function() { return CustomerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeStructure", function() { return ServiceTypeStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMetadataStructure", function() { return ServiceMetadataStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInformation", function() { return UpdateInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModel", function() { return AddressModel; });
var CustomerProfileOrigin = /** @class */ (function () {
    function CustomerProfileOrigin() {
        this.openServiceRequest = null;
        this.interactionHistory = [];
        this.customerProfile = new CustomerProfile();
        this.electricity = new ServiceTypeStructure();
        this.naturalGas = new ServiceTypeStructure();
    }
    return CustomerProfileOrigin;
}());

var OpenServiceRequest = /** @class */ (function () {
    function OpenServiceRequest() {
        this.srNo = '';
        this.ticketType = '';
        this.openDate = '';
        this.dueDate = '';
        this.status = '';
        this.priority = '';
        this.agentRemarks = '';
        this.createdBy = null;
        this.createdDate = '';
        this.assignedFieldEngineer = '';
        this.scheduleVistTime = '';
        this.estimatedVistTime = '';
        this.reason = '';
    }
    return OpenServiceRequest;
}());

var CustomerProfile = /** @class */ (function () {
    function CustomerProfile() {
        this.customerId = '';
        this.customerNo = '';
        this.name = '';
        this.firstName = '';
        this.lastName = '';
        this.mobile = '';
        this.companyName = '';
        this.operatingStatus = '';
        this.addressLabel = '';
        this.address = new AddressModel();
        this.email = '';
        this.birthday = '';
        this.altNumber = '';
        this.anniversary = '';
        this.profileImageUrl = '';
        this.customerClass = '';
        this.uaeId = '';
        this.preferredModeOfContact = '';
        this.uniqueNo = '';
        this.type = '';
        this.internalCall = [];
    }
    return CustomerProfile;
}());

var ServiceTypeStructure = /** @class */ (function () {
    function ServiceTypeStructure() {
    }
    return ServiceTypeStructure;
}());

var ServiceMetadataStructure = /** @class */ (function () {
    function ServiceMetadataStructure() {
        this.currentPlan = {};
        this.billSummary = {};
        this.usageReports = {};
        this.addOnInfo = null;
        this.analytics = null;
    }
    return ServiceMetadataStructure;
}());

var UpdateInformation = /** @class */ (function () {
    function UpdateInformation(mob, email, addr) {
        this.mobile = mob;
        this.email = email;
        this.address = addr;
    }
    return UpdateInformation;
}());

var AddressModel = /** @class */ (function () {
    function AddressModel() {
        this.addressLine1 = '';
        this.addressLine2 = '';
        this.city = '';
        this.state = '';
        this.postCode = '';
    }
    return AddressModel;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/deepali/Docker-Containers/POC_RINA/rina-base-shell/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map