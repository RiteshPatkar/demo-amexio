(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search-customer/search-customer.component */ "./src/app/components/search-customer/search-customer.component.ts");
/* harmony import */ var _components_add_account_add_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add-account/add-account.component */ "./src/app/components/add-account/add-account.component.ts");
/* harmony import */ var _components_new_order_new_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-order/new-order.component */ "./src/app/components/new-order/new-order.component.ts");
/* harmony import */ var _components_contactdetails_contactdetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contactdetails/contactdetails.component */ "./src/app/components/contactdetails/contactdetails.component.ts");
/* harmony import */ var _components_order_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/order/order-details/order-details.component */ "./src/app/components/order/order-details/order-details.component.ts");
/* harmony import */ var _components_charges_chargeclaculation_chargeclaculation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/charges/chargeclaculation/chargeclaculation.component */ "./src/app/components/charges/chargeclaculation/chargeclaculation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            {
                path: 'searchcust', component: _components_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_4__["SearchCustomerComponent"]
            },
            {
                path: 'addaccount', component: _components_add_account_add_account_component__WEBPACK_IMPORTED_MODULE_5__["AddAccountComponent"]
            },
            {
                path: 'neworder', component: _components_new_order_new_order_component__WEBPACK_IMPORTED_MODULE_6__["NewOrderComponent"]
            },
            {
                path: 'addcontdetails', component: _components_contactdetails_contactdetails_component__WEBPACK_IMPORTED_MODULE_7__["ContactdetailsComponent"]
            },
            {
                path: 'orderdetails', component: _components_order_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_8__["OrderDetailsComponent"]
            },
            {
                path: 'chargecal', component: _components_charges_chargeclaculation_chargeclaculation_component__WEBPACK_IMPORTED_MODULE_9__["ChargeClaculationComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.componentList = [
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _components_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_4__["SearchCustomerComponent"],
        _components_add_account_add_account_component__WEBPACK_IMPORTED_MODULE_5__["AddAccountComponent"],
        _components_new_order_new_order_component__WEBPACK_IMPORTED_MODULE_6__["NewOrderComponent"],
        _components_contactdetails_contactdetails_component__WEBPACK_IMPORTED_MODULE_7__["ContactdetailsComponent"],
        _components_order_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_8__["OrderDetailsComponent"],
        _components_charges_chargeclaculation_chargeclaculation_component__WEBPACK_IMPORTED_MODULE_9__["ChargeClaculationComponent"]
    ];
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(updates) {
        this.title = 'Airtel-PWA asdadsa';
        updates.available.subscribe((function (event) {
            updates.activateUpdate().then(function () { return document.location.reload(); });
        }));
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_charges_mplscharges_mplscharges_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/charges/mplscharges/mplscharges.component */ "./src/app/components/charges/mplscharges/mplscharges.component.ts");
/* harmony import */ var _components_charges_internetcharges_internetcharges_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/charges/internetcharges/internetcharges.component */ "./src/app/components/charges/internetcharges/internetcharges.component.ts");
/* harmony import */ var _components_charges_nldandlocalloopcharges_nldandlocalloopcharges_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/charges/nldandlocalloopcharges/nldandlocalloopcharges.component */ "./src/app/components/charges/nldandlocalloopcharges/nldandlocalloopcharges.component.ts");
/* harmony import */ var _components_charges_commancharges_commancharges_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/charges/commancharges/commancharges.component */ "./src/app/components/charges/commancharges/commancharges.component.ts");
/* harmony import */ var _components_order_internet_internet_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/order/internet/internet.order.component */ "./src/app/components/order/internet/internet.order.component.ts");
/* harmony import */ var _components_order_mpls_mpls_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/order/mpls/mpls.order.component */ "./src/app/components/order/mpls/mpls.order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"].componentList,
                _components_charges_internetcharges_internetcharges_component__WEBPACK_IMPORTED_MODULE_10__["InternetChargesComponent"],
                _components_charges_mplscharges_mplscharges_component__WEBPACK_IMPORTED_MODULE_9__["MplsChargesComponent"],
                _components_charges_nldandlocalloopcharges_nldandlocalloopcharges_component__WEBPACK_IMPORTED_MODULE_11__["NldandLocalloopChargesComponent"],
                _components_charges_commancharges_commancharges_component__WEBPACK_IMPORTED_MODULE_12__["CommanChargesComponent"],
                _components_order_internet_internet_order_component__WEBPACK_IMPORTED_MODULE_13__["InternetOrderComponent"],
                _components_order_mpls_mpls_order_component__WEBPACK_IMPORTED_MODULE_14__["MPLSComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__["AmexioWidgetModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-account/add-account.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-account/add-account.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> WIP</h1>\n"

/***/ }),

/***/ "./src/app/components/add-account/add-account.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-account/add-account.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountComponent", function() { return AddAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
 * Created by dattaram on 25/4/19.
 */

var AddAccountComponent = /** @class */ (function () {
    function AddAccountComponent() {
    }
    AddAccountComponent.prototype.ngOnInit = function () {
    };
    AddAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-account',
            template: __webpack_require__(/*! ./add-account.component.html */ "./src/app/components/add-account/add-account.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AddAccountComponent);
    return AddAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/charges/chargeclaculation/chargeclaculation.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/charges/chargeclaculation/chargeclaculation.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"productType == '1'\">\n<app-internetcharges></app-internetcharges>\n</ng-container>\n\n<ng-container *ngIf=\"productType == '2'\">\n  <app-mplscharges></app-mplscharges>\n</ng-container>\n\n<ng-container *ngIf=\"productType == '3' || productType == '4'\">\n  <app-nldandlocalloopcharges></app-nldandlocalloopcharges>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/charges/chargeclaculation/chargeclaculation.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/charges/chargeclaculation/chargeclaculation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChargeClaculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeClaculationComponent", function() { return ChargeClaculationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
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
 * Created by dattaram on 26/4/19.
 */




var ChargeClaculationComponent = /** @class */ (function () {
    function ChargeClaculationComponent(_httpService, _router, _dataService) {
        this._httpService = _httpService;
        this._router = _router;
        this._dataService = _dataService;
    }
    ChargeClaculationComponent.prototype.ngOnInit = function () {
        this.productType = this._dataService.order.productType;
    };
    ChargeClaculationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'charge-claculation',
            template: __webpack_require__(/*! ./chargeclaculation.component.html */ "./src/app/components/charges/chargeclaculation/chargeclaculation.component.html")
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ChargeClaculationComponent);
    return ChargeClaculationComponent;
}());



/***/ }),

/***/ "./src/app/components/charges/commancharges/commancharges.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/charges/commancharges/commancharges.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcmdlcy9jb21tYW5jaGFyZ2VzL2NvbW1hbmNoYXJnZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/charges/commancharges/commancharges.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/charges/commancharges/commancharges.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n               <amexio-row>\n                <amexio-column size=\"6\">\n              <amexio-text-input\n                  [(ngModel)]=\"commanChargesModel.totalOrderValue\"\n                    name =\"Total Order Value\"\n                    [field-label]=\"'Total Order Value'\"\n                    [place-holder]=\"'Total Order Value '\"\n                   >\n               </amexio-text-input>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                <amexio-dropdown\n                [(ngModel)]=\"commanChargesModel.currency\"\n                [place-holder]=\"'Choose currency'\"\n                 name=\"Currency\"\n                 [data-reader] = \"'data'\"\n                [field-label]=\"'Currency'\"\n                [http-url]=\"'assets/data/currency.json'\"\n                [http-method]=\"'get'\"\n                [display-field]=\"'primaryDisplay'\"\n                [value-field]=\"'primaryKey'\"\n                [enable-sort]=\"true\"\n                [sort]=\"'asc'\">\n              </amexio-dropdown>\n                </amexio-column>\n              </amexio-row>\n\n            <amexio-row>\n              <amexio-column size=\"6\">\n                  <amexio-dropdown\n                  [(ngModel)]=\"commanChargesModel.currencyDetails\"\n                  [place-holder]=\"' Choose Currency Details'\"\n                   name=\"Currency Details\"\n                   [data-reader] = \"'data'\"\n                  [field-label]=\"'Currency Details'\"\n                  [http-url]=\"'assets/data/currencydetails.json'\"\n                  [http-method]=\"'get'\"\n                  [display-field]=\"'primaryDisplay'\"\n                  [value-field]=\"'primaryKey'\"\n                  [enable-sort]=\"true\"\n                  [sort]=\"'asc'\">\n                </amexio-dropdown>\n              </amexio-column>\n              <amexio-column size=\"6\">\n                  <amexio-dropdown\n                  [(ngModel)]=\"commanChargesModel.billingCycle\"\n                  [place-holder]=\"' Choose Billing Cycle'\"\n                   name=\"Billing Cycle\"\n                   [data-reader] = \"'data'\"\n                  [field-label]=\"'Billing Cycle'\"\n                  [http-url]=\"'assets/data/billingcycle.json'\"\n                  [http-method]=\"'get'\"\n                  [display-field]=\"'primaryDisplay'\"\n                  [value-field]=\"'primaryKey'\"\n                  [enable-sort]=\"true\"\n                  [sort]=\"'asc'\">\n                </amexio-dropdown>\n            </amexio-column>\n            </amexio-row>\n\n            <amexio-row>\n              <amexio-column size=\"6\">\n                  <amexio-dropdown\n                  [(ngModel)]=\"commanChargesModel.billFormat\"\n                  [place-holder]=\"' Choose Bill Format'\"\n                   name=\"Bill Format\"\n                   [data-reader] = \"'data'\"\n                  [field-label]=\"'Bill Format'\"\n                  [http-url]=\"'assets/data/billformat.json'\"\n                  [http-method]=\"'get'\"\n                  [display-field]=\"'primaryDisplay'\"\n                  [value-field]=\"'primaryKey'\"\n                  [enable-sort]=\"true\"\n                  [sort]=\"'asc'\">\n                </amexio-dropdown>\n               </amexio-column>\n              <amexio-column size=\"6\">\n                  <amexio-text-input\n                  [(ngModel)]=\"commanChargesModel.taxation\"\n                    name =\"Taxation\"\n                    [field-label]=\"'Taxation'\"\n                    [place-holder]=\"'Enter Taxation '\"\n                   >\n               </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-text-input\n                    [(ngModel)]=\"commanChargesModel.standardReason\"\n                      name =\"Standard Reason\"\n                      [field-label]=\"'Standard Reason'\"\n                      [place-holder]=\"' Enter Standard Reason '\"\n                     >\n                 </amexio-text-input>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                    <amexio-text-input\n                    [(ngModel)]=\"commanChargesModel.noticePeriod\"\n                    name =\"Notice Period\"\n                    [field-label]=\"'Notice Period'\"\n                    [place-holder]=\"' Enter Notice Period '\"\n                   >\n               </amexio-text-input>\n                </amexio-column>\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"6\" >\n                    <amexio-text-input\n                    [enable-popover]=\"true\"\n                    [(ngModel)]=\"commanChargesModel.Comments\"\n                    field-label=\"Comments\"\n                    [place-holder]=\"' Enter Comments'\"\n                    name =\"Comments\"\n                   [icon-feedback]=\"true\"\n                   >\n              </amexio-text-input>\n                </amexio-column>\n              </amexio-row>\n\n"

/***/ }),

/***/ "./src/app/components/charges/commancharges/commancharges.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/charges/commancharges/commancharges.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CommanChargesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommanChargesComponent", function() { return CommanChargesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_charges_commancharges_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/charges/commancharges.model */ "./src/app/models/charges/commancharges.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommanChargesComponent = /** @class */ (function () {
    function CommanChargesComponent() {
        this.commanChargesModel = new _models_charges_commancharges_model__WEBPACK_IMPORTED_MODULE_1__["CommanChargesModel"]();
    }
    CommanChargesComponent.prototype.ngOnInit = function () {
    };
    CommanChargesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commancharges',
            template: __webpack_require__(/*! ./commancharges.component.html */ "./src/app/components/charges/commancharges/commancharges.component.html"),
            styles: [__webpack_require__(/*! ./commancharges.component.css */ "./src/app/components/charges/commancharges/commancharges.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommanChargesComponent);
    return CommanChargesComponent;
}());



/***/ }),

/***/ "./src/app/components/charges/internetcharges/internetcharges.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/charges/internetcharges/internetcharges.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcmdlcy9pbnRlcm5ldGNoYXJnZXMvaW50ZXJuZXRjaGFyZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/charges/internetcharges/internetcharges.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/charges/internetcharges/internetcharges.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-row>\n  <amexio-column [fit]=\"true\" [size]=\"12\">\n\n                      <amexio-card [body-height]=\"80\"  [footer]=\"false\" [header]=\"true\">\n                        <amexio-header>\n                          Internet Charges\n                        </amexio-header>\n                          <amexio-body>\n\n                            <app-commancharges></app-commancharges>\n\n                                <amexio-row>\n                                        <amexio-column size=\"3\">\n                                           <b>One Time Charges [A]</b>\n                                        </amexio-column>\n                                        <amexio-column size=\"3\">\n                                         <b>Annual Recurring Charges [B]</b>\n                                        </amexio-column>\n                                        <amexio-column size=\"3\">\n                                          <b> Order Term [C]</b>\n\n                                        </amexio-column>\n                                        <amexio-column size=\"3\">\n                                                <b>Total[D]</b>\n                                        </amexio-column>\n                                      </amexio-row>\n               <amexio-row>\n                <amexio-column size=\"3\">\n              <amexio-number-input\n                  [(ngModel)]=\"internetchargesModel.internetBWOTC\"\n                    name =\"Internet BW One Time Charges\"\n                    [field-label]=\"'Internet BW '\"\n                    [place-holder]=\"' Internet BW One Time Charges'\"\n                   >\n               </amexio-number-input>\n                </amexio-column>\n                <amexio-column size=\"3\">\n                    <amexio-number-input\n                    [(ngModel)]=\"internetchargesModel.internetARC\"\n                      name =\"Internet BW Annual Recurring Charges \"\n                      [field-label]=\"'Internet BW '\"\n                      [place-holder]=\"' Internet BW Annual Recurring Charges  '\"\n                     >\n                 </amexio-number-input>\n                </amexio-column>\n                <amexio-column size=\"3\">\n                    <amexio-number-input\n                    [(ngModel)]=\"internetchargesModel.internetBWOT\"\n                      name =\"Internet BW Order Term\"\n                      [field-label]=\"'Internet BW'\"\n                      [place-holder]=\"'Internet BW Order Term '\"\n                     >\n                 </amexio-number-input>\n                </amexio-column>\n                <amexio-column size=\"3\">\n                    <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._internetBW}}</amexio-label>\n                </amexio-column>\n              </amexio-row>\n\n              <amexio-row>\n                  <amexio-column size=\"3\">\n                <amexio-number-input\n                    [(ngModel)]=\"internetchargesModel.portChargesOTC\"\n                      name =\"Port Charges One Time Charges\"\n                      [field-label]=\"'Port Charges '\"\n                      [place-holder]=\"'Port Charges One Time Charges'\"\n                     >\n                 </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                      <amexio-number-input\n                      [(ngModel)]=\"internetchargesModel.portChargesARC\"\n                        name =\"Port Charges Annual Recurring Charges \"\n                        [field-label]=\"'Port Charges'\"\n                        [place-holder]=\"' Port Charges Annual Recurring Charges  '\"\n                       >\n                   </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                      <amexio-number-input\n                      [(ngModel)]=\"internetchargesModel.portChargesOT\"\n                        name =\"Port Charges Order Term \"\n                        [field-label]=\"'Port Charges'\"\n                        [place-holder]=\"'Port Charges Order Term'\"\n                       >\n                   </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                      <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._portCharges}}</amexio-label>\n                  </amexio-column>\n                </amexio-row>\n\n                <amexio-row>\n                    <amexio-column size=\"3\">\n                  <amexio-number-input\n                      [(ngModel)]=\"internetchargesModel.offPeakHoursBWOTC\"\n                        name =\"Off Peak Hours BW One Time Charges\"\n                        [field-label]=\"'Off Peak Hours BW '\"\n                        [place-holder]=\"'Off Peak Hours BW  One Time Charges '\"\n                       >\n                   </amexio-number-input>\n                    </amexio-column>\n                    <amexio-column size=\"3\">\n                        <amexio-number-input\n                        [(ngModel)]=\"internetchargesModel.offPeakHoursBWARC\"\n                          name =\"Off Peak Hours BW Annual Recurring Charges  \"\n                          [field-label]=\"'Off Peak Hours BW '\"\n                          [place-holder]=\"' Off Peak Hours BW Annual Recurring Charges  '\"\n                         >\n                     </amexio-number-input>\n                    </amexio-column>\n                    <amexio-column size=\"3\">\n                        <amexio-number-input\n                        [(ngModel)]=\"internetchargesModel.offPeakHoursBWOT\"\n                          name =\"Off Peak Hours BW Order Term\"\n                          [field-label]=\"'Off Peak Hours BW'\"\n                          [place-holder]=\"'Off Peak Hours BW Order Term'\"\n                         >\n                     </amexio-number-input>\n                    </amexio-column>\n                    <amexio-column size=\"3\">\n                        <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._offPeakHoursBW}}</amexio-label>\n                    </amexio-column>\n                  </amexio-row>\n\n\n                  <amexio-row>\n                      <amexio-column size=\"3\">\n                    <amexio-number-input\n                        [(ngModel)]=\"internetchargesModel.primaryLastMileOTC\"\n                          name =\"Primary Last Mile One Time Charges\"\n                          [field-label]=\"'Primary Last Mile  '\"\n                          [place-holder]=\"'Primary Last Mile One Time Charges '\"\n                         >\n                     </amexio-number-input>\n                      </amexio-column>\n                      <amexio-column size=\"3\">\n                          <amexio-number-input\n                          [(ngModel)]=\"internetchargesModel.primaryLastMileARC\"\n                            name =\"Primary Last Mile Annual Recurring Charges\"\n                            [field-label]=\"'Primary Last Mile  '\"\n                            [place-holder]=\"' Primary Last Mile Annual Recurring Charges'\"\n                           >\n                       </amexio-number-input>\n                      </amexio-column>\n                      <amexio-column size=\"3\">\n                          <amexio-number-input\n                          [(ngModel)]=\"internetchargesModel.primaryLastMileOT\"\n                            name =\"Primary Last Mile Order Term\"\n                            [field-label]=\"'Primary Last Mile '\"\n                            [place-holder]=\"'Primary Last Mile Order Term  '\"\n                           >\n                       </amexio-number-input>\n                      </amexio-column>\n                      <amexio-column size=\"3\">\n                          <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._primaryLastMile}}</amexio-label>\n                      </amexio-column>\n                    </amexio-row>\n\n                    <amexio-row>\n                        <amexio-column size=\"3\">\n                      <amexio-number-input\n                          [(ngModel)]=\"internetchargesModel.secondaryLastMileOTC\"\n                            name =\"Secondary Last Mile One Time Charges\"\n                            [field-label]=\"'Secondary Last Mile   '\"\n                            [place-holder]=\"'Secondary Last Mile One Time Charges  '\"\n                           >\n                       </amexio-number-input>\n                        </amexio-column>\n                        <amexio-column size=\"3\">\n                            <amexio-number-input\n                            [(ngModel)]=\"internetchargesModel.secondaryLastMileARC\"\n                              name =\"Secondary Last Mile Annual Recurring Charges  \"\n                              [field-label]=\"'Secondary Last Mile  '\"\n                              [place-holder]=\"' Secondary Last Mile Annual Recurring Charges   '\"\n                             >\n                         </amexio-number-input>\n                        </amexio-column>\n                        <amexio-column size=\"3\">\n                            <amexio-number-input\n                            [(ngModel)]=\"internetchargesModel.secondaryLastMileOT\"\n                              name =\"Secondary Last Mile Order Term\"\n                              [field-label]=\"'Secondary Last Mile '\"\n                              [place-holder]=\"'Secondary Last Mile Order Term  '\"\n                             >\n                         </amexio-number-input>\n                        </amexio-column>\n                        <amexio-column size=\"3\">\n                            <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._secondaryLastMile}}</amexio-label>\n                        </amexio-column>\n                      </amexio-row>\n\n                      <amexio-row>\n                          <amexio-column size=\"3\">\n                        <amexio-number-input\n                            [(ngModel)]=\"internetchargesModel.dDoSOTC\"\n                              name =\"DDoS One Time Charges ''\"\n                              [field-label]=\"'DDoS   '\"\n                              [place-holder]=\"'DDoS One Time Charges '\"\n                             >\n                         </amexio-number-input>\n                          </amexio-column>\n                          <amexio-column size=\"3\">\n                              <amexio-number-input\n                              [(ngModel)]=\"internetchargesModel.dDoSARC\"\n                                name =\"DDoS Annual Recurring Charges \"\n                                [field-label]=\"'DDoS  '\"\n                                [place-holder]=\"' DDoS Annual Recurring Charges '\"\n                               >\n                           </amexio-number-input>\n                          </amexio-column>\n                          <amexio-column size=\"3\">\n                              <amexio-number-input\n                              [(ngModel)]=\"internetchargesModel.dDoSOT\"\n                                name =\"DDoS Order Term\"\n                                [field-label]=\"'DDoS'\"\n                                [place-holder]=\"'DDoS Order Term'\"\n                               >\n                           </amexio-number-input>\n                          </amexio-column>\n                          <amexio-column size=\"3\">\n                              <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._dDoS}}</amexio-label>\n                          </amexio-column>\n                        </amexio-row>\n\n                        <amexio-row>\n                            <amexio-column size=\"3\">\n                          <amexio-number-input\n                              [(ngModel)]=\"internetchargesModel.routerOTC\"\n                                name =\"Router One Time Charges\"\n                                [field-label]=\"'Router   '\"\n                                [place-holder]=\"'Router One Time Charges'\"\n                               >\n                           </amexio-number-input>\n                            </amexio-column>\n                            <amexio-column size=\"3\">\n                                <amexio-number-input\n                                [(ngModel)]=\"internetchargesModel.routerARC\"\n                                  name =\"Router Annual Recurring Charges \"\n                                  [field-label]=\"'Router '\"\n                                  [place-holder]=\"' Router Annual Recurring Charges '\"\n                                 >\n                             </amexio-number-input>\n                            </amexio-column>\n                            <amexio-column size=\"3\">\n                                <amexio-number-input\n                                [(ngModel)]=\"internetchargesModel.routerOT\"\n                                  name =\"Router Order Term\"\n                                  [field-label]=\"'Router'\"\n                                  [place-holder]=\"'Router Order Term'\"\n                                 >\n                             </amexio-number-input>\n                            </amexio-column>\n                            <amexio-column size=\"3\">\n                                <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._router}}</amexio-label>\n                            </amexio-column>\n                          </amexio-row>\n\n                          <amexio-row>\n                              <amexio-column size=\"3\">\n                            <amexio-number-input\n                                [(ngModel)]=\"internetchargesModel.modemOTC\"\n                                  name =\"Modem One Time Charges'\"\n                                  [field-label]=\"'Modem '\"\n                                  [place-holder]=\"'Modem One Time Charges'\"\n                                 >\n                             </amexio-number-input>\n                              </amexio-column>\n                              <amexio-column size=\"3\">\n                                  <amexio-number-input\n                                  [(ngModel)]=\"internetchargesModel.modemARC\"\n                                    name =\"Modem Annual Recurring Charges\"\n                                    [field-label]=\"'Modem  '\"\n                                    [place-holder]=\"' Modem Annual Recurring Charges'\"\n                                   >\n                               </amexio-number-input>\n                              </amexio-column>\n                              <amexio-column size=\"3\">\n                                  <amexio-number-input\n                                  [(ngModel)]=\"internetchargesModel.modemOT\"\n                                    name =\"Modem Order Term\"\n                                    [field-label]=\"'Modem'\"\n                                    [place-holder]=\"'Modem Order Term'\"\n                                   >\n                               </amexio-number-input>\n                              </amexio-column>\n                              <amexio-column size=\"3\">\n                                  <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._modem}}</amexio-label>\n                              </amexio-column>\n                            </amexio-row>\n\n                            <amexio-row>\n                                <amexio-column size=\"3\">\n                              <amexio-number-input\n                                  [(ngModel)]=\"internetchargesModel.converterOTC\"\n                                    name =\"Converter One Time Charges\"\n                                    [field-label]=\"'Converter '\"\n                                    [place-holder]=\"'Converter One Time Charges '\"\n                                   >\n                               </amexio-number-input>\n                                </amexio-column>\n                                <amexio-column size=\"3\">\n                                    <amexio-number-input\n                                    [(ngModel)]=\"internetchargesModel.converterARC\"\n                                      name =\"Converter Annual Recurring Charges\"\n                                      [field-label]=\"'Converter  '\"\n                                      [place-holder]=\"' Converter Annual Recurring Charges '\"\n                                     >\n                                 </amexio-number-input>\n                                </amexio-column>\n                                <amexio-column size=\"3\">\n                                    <amexio-number-input\n                                    [(ngModel)]=\"internetchargesModel.converterOT\"\n                                      name =\"Converter Order Term\"\n                                      [field-label]=\"'Converter'\"\n                                      [place-holder]=\"'Converter Order Term '\"\n                                     >\n                                 </amexio-number-input>\n                                </amexio-column>\n                                <amexio-column size=\"3\">\n                                    <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._converter}}</amexio-label>\n                                </amexio-column>\n                              </amexio-row>\n                              <amexio-row>\n                                  <amexio-column size=\"3\">\n                                <amexio-number-input\n                                    [(ngModel)]=\"internetchargesModel.dDosCpeOTC\"\n                                      name =\"DosCpe One Time Charges\"\n                                      [field-label]=\"'DosCpe '\"\n                                      [place-holder]=\"'DosCpe One Time Charges'\"\n                                     >\n                                 </amexio-number-input>\n                                  </amexio-column>\n                                  <amexio-column size=\"3\">\n                                      <amexio-number-input\n                                      [(ngModel)]=\"internetchargesModel.dDosCpeARC\"\n                                        name =\"DosCpe  Annual Recurring Charges\"\n                                        [field-label]=\"'DosCpe  '\"\n                                        [place-holder]=\"' DosCpe  Annual Recurring Charges'\"\n                                       >\n                                   </amexio-number-input>\n                                  </amexio-column>\n                                  <amexio-column size=\"3\">\n                                      <amexio-number-input\n                                      [(ngModel)]=\"internetchargesModel.dDosCpeOT\"\n                                        name =\"DosCpe Order Term\"\n                                        [field-label]=\"'DosCpe '\"\n                                        [place-holder]=\"'DosCpe Order Term'\"\n                                       >\n                                   </amexio-number-input>\n                                  </amexio-column>\n                                  <amexio-column size=\"3\">\n                                      <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._dDosCpe}}</amexio-label>\n                                  </amexio-column>\n                                </amexio-row>\n                                <amexio-row>\n                                    <amexio-column size=\"3\">\n                                  <amexio-number-input\n                                      [(ngModel)]=\"internetchargesModel.otherHardwareOTC\"\n                                        name =\"Other Hardware One Time Charges\"\n                                        [field-label]=\"'Other Hardware'\"\n                                        [place-holder]=\"'Other Hardware One Time Charges '\"\n                                       >\n                                   </amexio-number-input>\n                                    </amexio-column>\n                                    <amexio-column size=\"3\">\n                                        <amexio-number-input\n                                        [(ngModel)]=\"internetchargesModel.otherHardwareARC\"\n                                          name =\"Other Hardware Annual Recurring Charges\"\n                                          [field-label]=\"'Other Hardware'\"\n                                          [place-holder]=\"'Other Hardware Annual Recurring Charges'\"\n                                         >\n                                     </amexio-number-input>\n                                    </amexio-column>\n                                    <amexio-column size=\"3\">\n                                        <amexio-number-input\n                                        [(ngModel)]=\"internetchargesModel.otherHardwareOT\"\n                                          name =\"Other Hardware Order Term\"\n                                          [field-label]=\"'Other Hardware '\"\n                                          [place-holder]=\"'Other Hardware Order Term '\"\n                                         >\n                                     </amexio-number-input>\n                                    </amexio-column>\n\n                                    <amexio-column size=\"3\">\n                                        <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._otherHardware}}</amexio-label>\n                                    </amexio-column>\n                                  </amexio-row>\n                                  <amexio-row>\n                                      <amexio-column size=\"3\">\n                                    <amexio-number-input\n                                        [(ngModel)]=\"internetchargesModel.hardwareAMCOTC\"\n                                          name =\"Hardware AMC One Time Charges '\"\n                                          [field-label]=\"'Hardware AMC '\"\n                                          [place-holder]=\"'Hardware AMC  One Time Charges '\"\n                                         >\n                                     </amexio-number-input>\n                                      </amexio-column>\n                                      <amexio-column size=\"3\">\n                                          <amexio-number-input\n                                          [(ngModel)]=\"internetchargesModel.hardwareAMCARC\"\n                                            name =\"Hardware AMC Annual Recurring Charges\"\n                                            [field-label]=\"'Hardware AMC  '\"\n                                            [place-holder]=\"'Hardware AMC Annual Recurring Charges'\"\n                                           >\n                                       </amexio-number-input>\n                                      </amexio-column>\n                                      <amexio-column size=\"3\">\n                                          <amexio-number-input\n                                          [(ngModel)]=\"internetchargesModel.hardwareAMCOT\"\n                                            name =\"Hardware AMC Order Term\"\n                                            [field-label]=\"'Hardware AMC'\"\n                                            [place-holder]=\"'Hardware AMC Order Term '\"\n                                           >\n                                       </amexio-number-input>\n                                      </amexio-column>\n                                      <amexio-column size=\"3\">\n                                          <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._hardwareAMC}}</amexio-label>\n                                      </amexio-column>\n                                    </amexio-row>\n\n\n                                      <amexio-row>\n                                          <amexio-column size=\"3\">\n                                        <amexio-number-input\n                                            [(ngModel)]=\"internetchargesModel.linkMgmtChargesOTC\"\n                                              name =\"Link Mgmt One Time Charges\"\n                                              [field-label]=\"'Link Mgmt Charges  '\"\n                                              [place-holder]=\"'Link Mgmt One Time Charges'\"\n                                             >\n                                         </amexio-number-input>\n                                          </amexio-column>\n                                          <amexio-column size=\"3\">\n                                              <amexio-number-input\n                                              [(ngModel)]=\"internetchargesModel.linkMgmtChargesARC\"\n                                                name =\"Link Mgmt Charges Annual Recurring Charges\"\n                                                [field-label]=\"'Link Mgmt Charges '\"\n                                                [place-holder]=\"'Link Mgmt Charges Annual Recurring Charges'\"\n                                               >\n                                           </amexio-number-input>\n                                          </amexio-column>\n                                          <amexio-column size=\"3\">\n                                              <amexio-number-input\n                                              [(ngModel)]=\"internetchargesModel.linkMgmtChargesOT\"\n                                                name =\"Link Mgmt Charges Order Term \"\n                                                [field-label]=\"'Link Mgmt Charges '\"\n                                                [place-holder]=\"'Link Mgmt Charges Order Term   '\"\n                                               >\n                                           </amexio-number-input>\n                                          </amexio-column>\n                                          <amexio-column size=\"3\">\n                                              <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._linkMgmtCharges}}</amexio-label>\n                                          </amexio-column>\n                                        </amexio-row>\n\n\n                                        <amexio-row>\n                                            <amexio-column size=\"3\">\n                                          <amexio-number-input\n                                              [(ngModel)]=\"internetchargesModel.managedSerivcesOTC\"\n                                                name =\"Managed Serivces One Time Charges \"\n                                                [field-label]=\"'Managed Serivces '\"\n                                                [place-holder]=\"'Managed Serivces One Time Charges '\"\n                                               >\n                                           </amexio-number-input>\n                                            </amexio-column>\n                                            <amexio-column size=\"3\">\n                                                <amexio-number-input\n                                                [(ngModel)]=\"internetchargesModel.managedSerivcesARC\"\n                                                  name =\"Managed Serivces Annual Recurring Charges \"\n                                                  [field-label]=\"'Managed Serivces '\"\n                                                  [place-holder]=\"'Managed Serivces Annual Recurring Charges'\"\n                                                 >\n                                             </amexio-number-input>\n                                            </amexio-column>\n                                            <amexio-column size=\"3\">\n                                                <amexio-number-input\n                                                [(ngModel)]=\"internetchargesModel.managedSerivcesOT\"\n                                                  name =\"Managed Serivces Order Term \"\n                                                  [field-label]=\"'Managed Serivces Charges '\"\n                                                  [place-holder]=\"'Managed Serivces Charges Order Term   '\"\n                                                 >\n                                             </amexio-number-input>\n                                            </amexio-column>\n                                            <amexio-column size=\"3\">\n                                                <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._managedSerivces}}</amexio-label>\n                                            </amexio-column>\n                                          </amexio-row>\n\n                                          <amexio-row>\n                                              <amexio-column size=\"3\">\n                                            <amexio-number-input\n                                                [(ngModel)]=\"internetchargesModel.otherChargesOTC\"\n                                                  name =\"Other charges One Time Charges\"\n                                                  [field-label]=\"'Other charges '\"\n                                                  [place-holder]=\"'Other charges One Time Charges'\"\n                                                 >\n                                             </amexio-number-input>\n                                              </amexio-column>\n                                              <amexio-column size=\"3\">\n                                                  <amexio-number-input\n                                                  [(ngModel)]=\"internetchargesModel.otherChargesARC\"\n                                                    name =\"Other charges Annual Recurring Charges\"\n                                                    [field-label]=\"'Other Charges '\"\n                                                    [place-holder]=\"'Other Charges Annual Recurring Charges'\"\n                                                   >\n                                               </amexio-number-input>\n                                              </amexio-column>\n                                              <amexio-column size=\"3\">\n                                                  <amexio-number-input\n                                                  [(ngModel)]=\"internetchargesModel.otherChargesOT\"\n                                                    name =\"Other Charges Order Term \"\n                                                    [field-label]=\"'Other Charges '\"\n                                                    [place-holder]=\"'Other Charges Order Term'\"\n                                                   >\n                                               </amexio-number-input>\n                                              </amexio-column>\n                                              <amexio-column size=\"3\">\n                                                  <amexio-label [font-color]=\"fontColor\"> {{internetchargesModel._otherCharges}}</amexio-label>\n                                              </amexio-column>\n                                            </amexio-row>\n                                            <amexio-row>\n                                                <amexio-column size=\"3\">\n                                                      <amexio-text-input\n                                                      [(ngModel)]=\"internetchargesModel.minCommittedBWMRC\"\n                                                       name=\"Min. Committed BW (MRC / Unit)\"\n                                                       [place-holder]=\"'Min. Committed BW (MRC / Unit) '\"\n                                                      field-label=\"Min. Committed BW (MRC / Unit)\"\n                                                      >\n                                                    </amexio-text-input>\n                                                </amexio-column>\n                                                <amexio-column size=\"3\">\n                                                      <amexio-text-input\n                                                      [(ngModel)]=\"internetchargesModel.minCommittedBWARC\"\n                                                       name=\"Min. Committed BW (ARC / Unit)\"\n                                                       [place-holder]=\"'Min. Committed BW (ARC / Unit)'\"\n                                                      field-label=\"Min. Committed BW (ARC / Unit)\"\n                                                      >\n                                                    </amexio-text-input>\n                                                </amexio-column>\n                                                <amexio-column size=\"3\">\n                                                    <amexio-text-input\n                                                    [(ngModel)]=\"internetchargesModel.burstBWMRC\"\n                                                     name=\"Burst BW (MRC / Unit)\"\n                                                     [place-holder]=\"'Burst BW (MRC / Unit)'\"\n                                                    field-label=\"Burst BW (MRC / Unit)\"\n                                                    >\n                                                  </amexio-text-input>\n                                              </amexio-column>\n                                              </amexio-row>\n\n                                              <amexio-row>\n                                                  <amexio-column size=\"3\">\n                                                        <amexio-text-input\n                                                        [(ngModel)]=\"internetchargesModel.burstBWARC\"\n                                                         name=\"Burst BW (ARC / Unit)\"\n                                                         [place-holder]=\"'Burst BW (ARC / Unit)'\"\n                                                        field-label=\"Burst BW (ARC / Unit)\"\n                                                        >\n                                                      </amexio-text-input>\n                                                  </amexio-column>\n                                                  <amexio-column size=\"3\">\n                                                        <amexio-text-input\n                                                        [(ngModel)]=\"internetchargesModel.volumeCharges\"\n                                                         name=\"Volume Charges / GB\"\n                                                         [place-holder]=\"'Volume Charges / GB'\"\n                                                        field-label=\"Volume Charges / GB\"\n                                                        >\n                                                      </amexio-text-input>\n                                                  </amexio-column>\n                                                  <amexio-column size=\"3\">\n                                                      <amexio-text-input\n                                                      [(ngModel)]=\"internetchargesModel.burstCharges\"\n                                                       name=\"Burst Charges / GB\"\n                                                       [place-holder]=\"'Burst Charges / GB'\"\n                                                      field-label=\"Burst Charges / GB\"\n                                                      >\n                                                    </amexio-text-input>\n                                                </amexio-column>\n                                                </amexio-row>\n\n\n\n\n\n\n\n               </amexio-body>\n               <!-- <amexio-action>\n                  <amexio-toolbar>\n                      <amexio-toolbar-item position-left [seperator-position]=\"'right'\">\n\n                              <amexio-button [label]=\"'Submit'\"  [form-bind]=\"'commanchargefieldForm'\"  [tooltip]=\"'Submit'\"  [icon]=\"'fa fa-paper-plane'\" (onClick)=\"saveInfo()\"\n                             [type]=\"'green'\"></amexio-button>\n\n                        </amexio-toolbar-item>\n                  </amexio-toolbar>\n                </amexio-action> -->\n            </amexio-card>\n            </amexio-column>\n          </amexio-row>\n"

/***/ }),

/***/ "./src/app/components/charges/internetcharges/internetcharges.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/charges/internetcharges/internetcharges.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InternetChargesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetChargesComponent", function() { return InternetChargesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_charges_internetcharges_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/charges/internetcharges.model */ "./src/app/models/charges/internetcharges.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InternetChargesComponent = /** @class */ (function () {
    function InternetChargesComponent() {
        this.fontColor = "#351CB0";
        this.internetchargesModel = new _models_charges_internetcharges_model__WEBPACK_IMPORTED_MODULE_1__["InternetChargesModel"]();
    }
    InternetChargesComponent.prototype.ngOnInit = function () {
    };
    InternetChargesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-internetcharges',
            template: __webpack_require__(/*! ./internetcharges.component.html */ "./src/app/components/charges/internetcharges/internetcharges.component.html"),
            styles: [__webpack_require__(/*! ./internetcharges.component.css */ "./src/app/components/charges/internetcharges/internetcharges.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InternetChargesComponent);
    return InternetChargesComponent;
}());



/***/ }),

/***/ "./src/app/components/charges/mplscharges/mplscharges.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/charges/mplscharges/mplscharges.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcmdlcy9tcGxzY2hhcmdlcy9tcGxzY2hhcmdlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/charges/mplscharges/mplscharges.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/charges/mplscharges/mplscharges.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-row>\n  <amexio-column [fit]=\"true\" [size]=\"12\">\n    <amexio-card [body-height]=\"80\" [footer]=\"false\" [header]=\"true\">\n      <amexio-header>\n        MPLS Charges\n      </amexio-header>\n      <amexio-body>\n        <app-commancharges></app-commancharges>\n          <amexio-row>\n            <amexio-column size=\"3\">\n              <b>One Time Charges [A]</b>\n           </amexio-column>\n           <amexio-column size=\"3\">\n            <b>Annual Recurring Charges [B]</b>\n           </amexio-column>\n           <amexio-column size=\"3\">\n             <b> Order Term [C]</b>\n\n           </amexio-column>\n           <amexio-column size=\"3\">\n                   <b>Total[D]</b>\n           </amexio-column>\n            </amexio-row>\n        <amexio-row>\n          <amexio-column size=\"3\">\n            <amexio-number-input [(ngModel)]=\"mplsChrgesModel.installationCommissioningOTC\" name=\"Installation & Commissioning  One Time Charges \"\n              [field-label]=\"'Installation & Commissioning '\" [place-holder]=\"'Enter Installation & Commissioning  One Time Charges  '\">\n            </amexio-number-input>\n          </amexio-column>\n          <amexio-column size=\"3\">\n            <amexio-number-input [(ngModel)]=\"mplsChrgesModel.installationCommissioningARC\" name=\"Installation & Commissioning Annual Recurring Charges \"\n              [field-label]=\"'Installation & Commissioning '\" [place-holder]=\"' Installation & Commissioning  Annual Recurring Charges'\">\n            </amexio-number-input>\n          </amexio-column>\n          <amexio-column size=\"3\">\n            <amexio-number-input [(ngModel)]=\"mplsChrgesModel.installationCommissioningOT\" name=\"Installation & Commissioning Order Term \"\n              [field-label]=\"'Installation & Commissioning '\" [place-holder]=\"'Installation & Commissioning Order Term  '\">\n            </amexio-number-input>\n          </amexio-column>\n          <amexio-column size=\"3\">\n            <amexio-label [font-color]=\"fontColor\"> {{mplsChrgesModel._installationCommissioning}}</amexio-label>\n          </amexio-column>\n        </amexio-row>\n\n        <amexio-row>\n          <amexio-column size=\"3\">\n            <amexio-number-input [(ngModel)]=\"mplsChrgesModel.primaryMPLSBandwidthOTC\" name=\"Primary MPLS Bandwidth  One Time Charges \"\n              [field-label]=\"'Primary MPLS Bandwidth  '\" [place-holder]=\"'Primary MPLS Bandwidth  One Time Charges  '\">\n            </amexio-number-input>\n          </amexio-column>\n          <amexio-column size=\"3\">\n            <amexio-number-input [(ngModel)]=\"mplsChrgesModel.primaryMPLSBandwidthARC\" name=\"Primary MPLS Bandwidth Annual Recurring Charges \"\n              [field-label]=\"'Primary MPLS Bandwidth '\" [place-holder]=\"' Primary MPLS Bandwidth  Annual Recurring Charges'\">\n            </amexio-number-input>\n          </amexio-column>\n          <amexio-column size=\"3\">\n            <amexio-number-input [(ngModel)]=\"mplsChrgesModel.primaryMPLSBandwidthOT\" name=\"Primary MPLS Bandwidth Order Term \" [field-label]=\"'Primary MPLS Bandwidth'\"\n              [place-holder]=\"'Primary MPLS Bandwidth  Order Term  '\">\n            </amexio-number-input>\n          </amexio-column>\n          <amexio-column size=\"3\">\n            <amexio-label [font-color]=\"fontColor\"> {{mplsChrgesModel._primaryMPLSBandwidth}}</amexio-label>\n          </amexio-column>\n        </amexio-row>\n\n        <amexio-row>\n          <amexio-column size=\"3\">\n            <amexio-number-input [(ngModel)]=\"mplsChrgesModel.secondaryMPLSBandwidthOTC\" name=\"Secondary MPLS Bandwidth  One Time Charges \"\n              [field-label]=\"'Secondary MPLS Bandwidth'\" [place-holder]=\"'Secondary MPLS Bandwidth  One Time Charges'\">\n            </amexio-number-input>\n          </amexio-column>\n          <amexio-column size=\"3\">\n            <amexio-number-input [(ngModel)]=\"mplsChrgesModel.secondaryMPLSBandwidthARC\" name=\"secondary MPLS Bandwidth Annual Recurring Charges\"\n              [field-label]=\"'Secondary MPLS Bandwidth '\" [place-holder]=\"' Secondary MPLS Bandwidth Annual Recurring Charges '\">\n            </amexio-number-input>\n          </amexio-column>\n          <amexio-column size=\"3\">\n            <amexio-number-input [(ngModel)]=\"mplsChrgesModel.secondaryMPLSBandwidthOT\" name=\"Secondary MPLS Bandwidth  Order Term \" [field-label]=\"'Secondary MPLS Bandwidth'\"\n              [place-holder]=\"'Secondary MPLS Bandwidth  Order Term '\">\n            </amexio-number-input>\n          </amexio-column>\n          <amexio-column size=\"3\">\n            <amexio-label [font-color]=\"fontColor\"> {{mplsChrgesModel._secondaryMPLSBandwidth}}</amexio-label>\n          </amexio-column>\n        </amexio-row>\n\n        <amexio-row>\n            <amexio-column size=\"3\">\n              <amexio-number-input [(ngModel)]=\"mplsChrgesModel.lastMileBandwidthOTC\" name=\"Last Mile Bandwidth  One Time Charges \"\n                [field-label]=\"'Last Mile Bandwidth'\" [place-holder]=\"'Last Mile Bandwidth  One Time Charges'\">\n              </amexio-number-input>\n            </amexio-column>\n            <amexio-column size=\"3\">\n              <amexio-number-input [(ngModel)]=\"mplsChrgesModel.lastMileBandwidthARC\" name=\"Last Mile Bandwidth Annual Recurring Charges\"\n                [field-label]=\"'Last Mile Bandwidth '\" [place-holder]=\"' Last Mile Bandwidth Annual Recurring Charges'\">\n              </amexio-number-input>\n            </amexio-column>\n            <amexio-column size=\"3\">\n              <amexio-number-input [(ngModel)]=\"mplsChrgesModel.lastMileBandwidthOT\" name=\"Last Mile Bandwidth  Order Term\" [field-label]=\"'Last Mile Bandwidth'\"\n                [place-holder]=\"'Last Mile Bandwidth  Order Term '\">\n              </amexio-number-input>\n            </amexio-column>\n            <amexio-column size=\"3\">\n              <amexio-label [font-color]=\"fontColor\"> {{mplsChrgesModel._lastMileBandwidth}}</amexio-label>\n            </amexio-column>\n          </amexio-row>\n\n          <amexio-row>\n              <amexio-column size=\"3\">\n                <amexio-number-input [(ngModel)]=\"mplsChrgesModel.routerOTC\" name=\"Router  One Time Charges \"\n                  [field-label]=\"'Router'\" [place-holder]=\"'Router  One Time Charges'\">\n                </amexio-number-input>\n              </amexio-column>\n              <amexio-column size=\"3\">\n                <amexio-number-input [(ngModel)]=\"mplsChrgesModel.routerARC\" name=\"Router Annual Recurring Charges\"\n                  [field-label]=\"'Router'\" [place-holder]=\"' Router Annual Recurring Charges'\">\n                </amexio-number-input>\n              </amexio-column>\n              <amexio-column size=\"3\">\n                <amexio-number-input [(ngModel)]=\"mplsChrgesModel.routerOT\" name=\"Router  Order Term\" [field-label]=\"'Router'\"\n                  [place-holder]=\"'Router  Order Term '\">\n                </amexio-number-input>\n              </amexio-column>\n              <amexio-column size=\"3\">\n                <amexio-label [font-color]=\"fontColor\"> {{mplsChrgesModel._router}}</amexio-label>\n              </amexio-column>\n            </amexio-row>\n\n            <amexio-row>\n                <amexio-column size=\"3\">\n                  <amexio-number-input [(ngModel)]=\"mplsChrgesModel.modemOTC\" name=\"Modem  One Time Charges \"\n                    [field-label]=\"'Modem'\" [place-holder]=\"'Modem  One Time Charges'\">\n                  </amexio-number-input>\n                </amexio-column>\n                <amexio-column size=\"3\">\n                  <amexio-number-input [(ngModel)]=\"mplsChrgesModel.modemARC\" name=\"Modem Annual Recurring Charges\"\n                    [field-label]=\"'Modem'\" [place-holder]=\"' Modem Annual Recurring Charges'\">\n                  </amexio-number-input>\n                </amexio-column>\n                <amexio-column size=\"3\">\n                  <amexio-number-input [(ngModel)]=\"mplsChrgesModel.modemOT\" name=\"Modem  Order Term\" [field-label]=\"'Modem'\"\n                    [place-holder]=\"'Modem  Order Term'\">\n                  </amexio-number-input>\n                </amexio-column>\n                <amexio-column size=\"3\">\n                  <amexio-label [font-color]=\"fontColor\"> {{mplsChrgesModel._modem}}</amexio-label>\n                </amexio-column>\n              </amexio-row>\n\n              <amexio-row>\n                  <amexio-column size=\"3\">\n                    <amexio-number-input [(ngModel)]=\"mplsChrgesModel.othersOTC\" name=\"Others  One Time Charges \"\n                      [field-label]=\"'Others'\" [place-holder]=\"'Others  One Time Charges'\">\n                    </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                    <amexio-number-input [(ngModel)]=\"mplsChrgesModel.othersARC\" name=\"Others Annual Recurring Charges\"\n                      [field-label]=\"'Others'\" [place-holder]=\"' Others Annual Recurring Charges'\">\n                    </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                    <amexio-number-input [(ngModel)]=\"mplsChrgesModel.othersOT\" name=\"Others  Order Term\" [field-label]=\"'Others'\"\n                      [place-holder]=\"'Others  Order Term'\">\n                    </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                    <amexio-label [font-color]=\"fontColor\"> {{mplsChrgesModel._others}}</amexio-label>\n                  </amexio-column>\n                </amexio-row>\n\n\n                <amexio-row>\n                    <amexio-column size=\"3\">\n                      <amexio-number-input [(ngModel)]=\"mplsChrgesModel.managedSerivcesOTC\" name=\" Managed Serivces  One Time Charges\"\n                        [field-label]=\"'Managed Serivces'\" [place-holder]=\"'Managed Serivces One Time Charges'\">\n                      </amexio-number-input>\n                    </amexio-column>\n                    <amexio-column size=\"3\">\n                      <amexio-number-input [(ngModel)]=\"mplsChrgesModel.managedSerivcesARC\" name=\"Managed Serivces Annual Recurring Charges\"\n                        [field-label]=\"'Managed Serivces'\" [place-holder]=\"' Managed Serivces Annual Recurring Charges'\">\n                      </amexio-number-input>\n                    </amexio-column>\n                    <amexio-column size=\"3\">\n                      <amexio-number-input [(ngModel)]=\"mplsChrgesModel.managedSerivcesOT\" name=\"Managed Serivces  Order Term\" [field-label]=\"'Managed Serivces'\"\n                        [place-holder]=\"'Managed Serivces  Order Term'\">\n                      </amexio-number-input>\n                    </amexio-column>\n                    <amexio-column size=\"3\">\n                      <amexio-label [font-color]=\"fontColor\"> {{mplsChrgesModel._managedSerivces}}</amexio-label>\n                    </amexio-column>\n                  </amexio-row>\n\n                  <amexio-row>\n                      <amexio-column size=\"3\">\n                        <amexio-number-input [(ngModel)]=\"mplsChrgesModel.otherChargesOTC\" name=\" Other Charges One Time Charges\"\n                          [field-label]=\"'Other Charges'\" [place-holder]=\"'Other Charges One Time Charges'\">\n                        </amexio-number-input>\n                      </amexio-column>\n                      <amexio-column size=\"3\">\n                        <amexio-number-input [(ngModel)]=\"mplsChrgesModel.otherChargesARC\" name=\"Other Charges Annual Recurring Charges\"\n                          [field-label]=\"'Other Charges'\" [place-holder]=\"'Other Charges Annual Recurring Charges'\">\n                        </amexio-number-input>\n                      </amexio-column>\n                      <amexio-column size=\"3\">\n                        <amexio-number-input [(ngModel)]=\"mplsChrgesModel.otherChargesOT\" name=\"Other Charges  Order Term\" [field-label]=\"'Other Charges'\"\n                          [place-holder]=\"'Other Charges  Order Term'\">\n                        </amexio-number-input>\n                      </amexio-column>\n                      <amexio-column size=\"3\">\n                        <amexio-label [font-color]=\"fontColor\"> {{mplsChrgesModel._otherCharges}}</amexio-label>\n                      </amexio-column>\n                    </amexio-row>\n      </amexio-body>\n      <!-- <amexio-action>\n                  <amexio-toolbar>\n                      <amexio-toolbar-item position-left [seperator-position]=\"'right'\">\n\n                              <amexio-button [label]=\"'Submit'\"  [form-bind]=\"'commanchargefieldForm'\"  [tooltip]=\"'Submit'\"  [icon]=\"'fa fa-paper-plane'\" (onClick)=\"saveInfo()\"\n                             [type]=\"'green'\"></amexio-button>\n\n                        </amexio-toolbar-item>\n                  </amexio-toolbar>\n                </amexio-action> -->\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n"

/***/ }),

/***/ "./src/app/components/charges/mplscharges/mplscharges.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/charges/mplscharges/mplscharges.component.ts ***!
  \*************************************************************************/
/*! exports provided: MplsChargesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MplsChargesComponent", function() { return MplsChargesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_charges_mplscharges_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/charges/mplscharges.model */ "./src/app/models/charges/mplscharges.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MplsChargesComponent = /** @class */ (function () {
    function MplsChargesComponent() {
        this.fontColor = "#351CB0";
        this.mplsChrgesModel = new _models_charges_mplscharges_model__WEBPACK_IMPORTED_MODULE_1__["MplsChargesModel"]();
    }
    MplsChargesComponent.prototype.ngOnInit = function () {
    };
    MplsChargesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mplscharges',
            template: __webpack_require__(/*! ./mplscharges.component.html */ "./src/app/components/charges/mplscharges/mplscharges.component.html"),
            styles: [__webpack_require__(/*! ./mplscharges.component.css */ "./src/app/components/charges/mplscharges/mplscharges.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MplsChargesComponent);
    return MplsChargesComponent;
}());



/***/ }),

/***/ "./src/app/components/charges/nldandlocalloopcharges/nldandlocalloopcharges.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/charges/nldandlocalloopcharges/nldandlocalloopcharges.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcmdlcy9ubGRhbmRsb2NhbGxvb3BjaGFyZ2VzL25sZGFuZGxvY2FsbG9vcGNoYXJnZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/charges/nldandlocalloopcharges/nldandlocalloopcharges.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/charges/nldandlocalloopcharges/nldandlocalloopcharges.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-row>\n    <amexio-column [fit]=\"true\" [size]=\"12\">\n      <amexio-card [body-height]=\"80\"  [footer]=\"false\" [header]=\"true\">\n        <amexio-header>\n          NLD And Local Loop Charges\n        </amexio-header>\n        <amexio-body>\n          <app-commancharges></app-commancharges>\n            <amexio-row>\n              <amexio-column size=\"3\">\n                <b>One Time Charges [A]</b>\n             </amexio-column>\n             <amexio-column size=\"3\">\n              <b>Annual Recurring Charges [B]</b>\n             </amexio-column>\n             <amexio-column size=\"3\">\n               <b> Order Term [C]</b>\n\n             </amexio-column>\n             <amexio-column size=\"3\">\n                     <b>Total[D]</b>\n             </amexio-column>\n              </amexio-row>\n          <amexio-row>\n            <amexio-column size=\"3\">\n              <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.nLDLocalLoopBandwidthOTC\" name=\"NLD / Local Loop Bandwidth One Time Charges \"\n                [field-label]=\"'NLD / Local Loop Bandwidth '\" [place-holder]=\"'NLD / Local Loop Bandwidth One Time Charges '\">\n              </amexio-number-input>\n            </amexio-column>\n            <amexio-column size=\"3\">\n              <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.nLDLocalLoopBandwidthARC\" name=\"NLD / Local Loop Bandwidth Annual Recurring Charges\"\n                [field-label]=\"'NLD / Local Loop Bandwidth'\" [place-holder]=\"'NLD / Local Loop Bandwidth Annual Recurring Charges'\">\n              </amexio-number-input>\n            </amexio-column>\n            <amexio-column size=\"3\">\n              <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.nLDLocalLoopBandwidthOT\" name=\"NLD / Local Loop Bandwidth Order Term\"\n                [field-label]=\"'NLD / Local Loop Bandwidth '\" [place-holder]=\"'NLD / Local Loop Bandwidth Order Term '\">\n              </amexio-number-input>\n            </amexio-column>\n            <amexio-column size=\"3\">\n              <amexio-label [font-color]=\"fontColor\" > {{nldAndLocalLoopModel._nLDLocalLoopBandwidth}}</amexio-label>\n            </amexio-column>\n          </amexio-row>\n\n          <amexio-row>\n              <amexio-column size=\"3\">\n                <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.modemConvertorOTC\" name=\"Modem / Convertor One Time Charges \"\n                  [field-label]=\"'Modem / Convertor '\" [place-holder]=\"'Modem / Convertor One Time Charges '\">\n                </amexio-number-input>\n              </amexio-column>\n              <amexio-column size=\"3\">\n                <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.modemConvertorARC\" name=\"Modem / Convertor Annual Recurring Charges\"\n                  [field-label]=\"'Modem / Convertor'\" [place-holder]=\"'Modem / Convertor Annual Recurring Charges '\">\n                </amexio-number-input>\n              </amexio-column>\n              <amexio-column size=\"3\">\n                <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.modemConvertorOT\" name=\"Modem / Convertor Order Term\"\n                  [field-label]=\"'Modem / Convertor '\" [place-holder]=\"'Modem / Convertor Order Term'\">\n                </amexio-number-input>\n              </amexio-column>\n              <amexio-column size=\"3\">\n                <amexio-label [font-color]=\"fontColor\"> {{nldAndLocalLoopModel._modemConvertor}}</amexio-label>\n              </amexio-column>\n            </amexio-row>\n\n            <amexio-row>\n                <amexio-column size=\"3\">\n                  <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.routerOTC\" name=\"Router One Time Charges\"\n                    [field-label]=\"'Router'\" [place-holder]=\"'Router One Time Charges '\">\n                  </amexio-number-input>\n                </amexio-column>\n                <amexio-column size=\"3\">\n                  <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.routerARC\" name=\"Router Annual Recurring Charges\"\n                    [field-label]=\"'Router'\" [place-holder]=\"'Router Annual Recurring Charges '\">\n                  </amexio-number-input>\n                </amexio-column>\n                <amexio-column size=\"3\">\n                  <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.routerOT\" name=\"Router Order Term\"\n                    [field-label]=\"'Router'\" [place-holder]=\"'Router Order Term'\">\n                  </amexio-number-input>\n                </amexio-column>\n                <amexio-column size=\"3\">\n                  <amexio-label [font-color]=\"fontColor\"> {{nldAndLocalLoopModel._router}}</amexio-label>\n                </amexio-column>\n              </amexio-row>\n\n              <amexio-row>\n                  <amexio-column size=\"3\">\n                    <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.otherHardwareOTC\" name=\"Other Hardware One Time Charges\"\n                      [field-label]=\"'Other Hardware'\" [place-holder]=\"'Other Hardware One Time Charges'\">\n                    </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                    <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.otherHardwareARC\" name=\"Other Hardware Annual Recurring Charges\"\n                      [field-label]=\"'Other Hardware'\" [place-holder]=\"'Other Hardware  Annual Recurring Charges '\">\n                    </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                    <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.otherHardwareOT\" name=\"Other Hardware Order Term\"\n                      [field-label]=\"'Other Hardware '\" [place-holder]=\"'Other Hardware Order Term'\">\n                    </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                    <amexio-label [font-color]=\"fontColor\"> {{nldAndLocalLoopModel._otherHardware}}</amexio-label>\n                  </amexio-column>\n                </amexio-row>\n\n\n              <amexio-row>\n                  <amexio-column size=\"3\">\n                    <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.fibreExtensionChargesOTC\" name=\"Fibre Extension Charges One Time Charges\"\n                      [field-label]=\"'Fibre Extension Charges'\" [place-holder]=\"'Fibre Extension Charges One Time Charges'\">\n                    </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                    <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.fibreExtensionChargesARC\" name=\"Fibre Extension Charges  Annual Recurring Charges\"\n                      [field-label]=\"'Fibre Extension Charges'\" [place-holder]=\"'Fibre Extension Charges  Annual Recurring Charges'\">\n                    </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                    <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.fibreExtensionChargesOT\" name=\"Fibre Extension Charges Order Term\"\n                      [field-label]=\"'Fibre Extension Charges'\" [place-holder]=\"'Fibre Extension Charges Order Term'\">\n                    </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                    <amexio-label [font-color]=\"fontColor\"> {{nldAndLocalLoopModel._fibreExtensionCharges}}</amexio-label>\n                  </amexio-column>\n                </amexio-row>\n\n\n              <amexio-row>\n                  <amexio-column size=\"3\">\n                    <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.installationChargesOTC\" name=\"Installation Charges One Time Charges \"\n                      [field-label]=\"'Installation Charges'\" [place-holder]=\"'Installation Charges One Time Charges'\">\n                    </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                    <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.installationChargesARC\" name=\"Installation Charges Annual Recurring Charges\"\n                      [field-label]=\"'Installation Charges'\" [place-holder]=\"'Installation Charges Annual Recurring Charges'\">\n                    </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                    <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.installationChargesOT\" name=\"Installation Charges Order Term\"\n                      [field-label]=\"'Installation Charges'\" [place-holder]=\"'Installation Charges Order Term'\">\n                    </amexio-number-input>\n                  </amexio-column>\n                  <amexio-column size=\"3\">\n                    <amexio-label [font-color]=\"fontColor\"> {{nldAndLocalLoopModel._installationCharges}}</amexio-label>\n                  </amexio-column>\n                </amexio-row>\n\n                <amexio-row>\n                    <amexio-column size=\"3\">\n                      <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.otherChargesOTC\" name=\"Other Charges One Time Charges \"\n                        [field-label]=\"'Other Charges'\" [place-holder]=\"'Other Charges One Time Charges'\">\n                      </amexio-number-input>\n                    </amexio-column>\n                    <amexio-column size=\"3\">\n                      <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.otherChargesARC\" name=\"Other Charges Annual Recurring Charges\"\n                        [field-label]=\"'Other Charges'\" [place-holder]=\"'Other Charges Annual Recurring Charges'\">\n                      </amexio-number-input>\n                    </amexio-column>\n                    <amexio-column size=\"3\">\n                      <amexio-number-input [(ngModel)]=\"nldAndLocalLoopModel.otherChargesOT\" name=\"Other Charges Order Term\"\n                        [field-label]=\"'Other Charges'\" [place-holder]=\"'Other Charges Order Term'\">\n                      </amexio-number-input>\n                    </amexio-column>\n                    <amexio-column size=\"3\">\n                      <amexio-label [font-color]=\"fontColor\"> {{nldAndLocalLoopModel._otherCharges}}</amexio-label>\n                    </amexio-column>\n                  </amexio-row>\n        </amexio-body>\n        <!-- <amexio-action>\n                    <amexio-toolbar>\n                        <amexio-toolbar-item position-left [seperator-position]=\"'right'\">\n\n                                <amexio-button [label]=\"'Submit'\"  [form-bind]=\"'commanchargefieldForm'\"  [tooltip]=\"'Submit'\"  [icon]=\"'fa fa-paper-plane'\" (onClick)=\"saveInfo()\"\n                               [type]=\"'green'\"></amexio-button>\n\n                          </amexio-toolbar-item>\n                    </amexio-toolbar>\n                  </amexio-action> -->\n      </amexio-card>\n    </amexio-column>\n  </amexio-row>\n"

/***/ }),

/***/ "./src/app/components/charges/nldandlocalloopcharges/nldandlocalloopcharges.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/charges/nldandlocalloopcharges/nldandlocalloopcharges.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NldandLocalloopChargesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NldandLocalloopChargesComponent", function() { return NldandLocalloopChargesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_charges_nldandlocalloop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/charges/nldandlocalloop.model */ "./src/app/models/charges/nldandlocalloop.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NldandLocalloopChargesComponent = /** @class */ (function () {
    function NldandLocalloopChargesComponent() {
        this.fontColor = "#351CB0";
        this.nldAndLocalLoopModel = new _models_charges_nldandlocalloop_model__WEBPACK_IMPORTED_MODULE_1__["NldAndLocalLoopModel"]();
    }
    NldandLocalloopChargesComponent.prototype.ngOnInit = function () {
    };
    NldandLocalloopChargesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nldandlocalloopcharges',
            template: __webpack_require__(/*! ./nldandlocalloopcharges.component.html */ "./src/app/components/charges/nldandlocalloopcharges/nldandlocalloopcharges.component.html"),
            styles: [__webpack_require__(/*! ./nldandlocalloopcharges.component.css */ "./src/app/components/charges/nldandlocalloopcharges/nldandlocalloopcharges.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NldandLocalloopChargesComponent);
    return NldandLocalloopChargesComponent;
}());



/***/ }),

/***/ "./src/app/components/contactdetails/contactdetails.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/contactdetails/contactdetails.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card [body-height]=\"80\"  [header]=\"false\" [footer]=\"true\">\n  <amexio-body>\n<ng-container *ngFor=\"let conData of addressGroupData\">\n  <amexio-row>\n    <amexio-column [fit]=\"true\" size=\"12\">\n      <amexio-card  height=\"450\"  [header]=\"true\" [footer]=\"false\" >\n        <amexio-header>\n          {{conData.addresslabel}}\n        </amexio-header>\n        <amexio-body>\n          <amexio-row>\n            <amexio-column size=\"6\">\n              <amexio-dropdown\n                [(ngModel)]=\"conData.contactDetailsModel.contactType\"\n                [place-holder]=\"'Choose contact type'\"\n                name=\"Contact Type\"\n                [data-reader] = \"'data'\"\n                [field-label]=\"'Contact Type'\"\n                [http-url]=\"'assets/data/contacttype.json'\"\n                [http-method]=\"'get'\"\n                [display-field]=\"'primaryDisplay'\"\n                [value-field]=\"'primaryKey'\"\n                [enable-sort]=\"true\"\n                [sort]=\"'asc'\">\n              </amexio-dropdown>\n            </amexio-column>\n            <amexio-column size=\"6\">\n              <amexio-dropdown\n                [(ngModel)]=\"conData.contactDetailsModel.salutation\"\n                [place-holder]=\"'Choose salutation'\"\n                name=\"Salutation\"\n                [data-reader]=\"'data'\"\n                [field-label]=\"'Salutation'\"\n                [http-url]=\"'assets/data/salutation.json'\"\n                [http-method]=\"'get'\"\n                [display-field]=\"'primaryDisplay'\"\n                [value-field]=\"'primaryKey'\"\n                [enable-sort]=\"true\"\n                [sort]=\"'asc'\">\n              </amexio-dropdown>\n            </amexio-column>\n          </amexio-row>\n\n          <amexio-row>\n            <amexio-column size=\"6\">\n              <amexio-text-input\n                [(ngModel)]=\"conData.contactDetailsModel.firstName\"\n                name=\"First Name\"\n                field-label=\"First Name\"\n              >\n              </amexio-text-input>\n            </amexio-column>\n            <amexio-column size=\"6\">\n              <amexio-text-input\n                [(ngModel)]=\"conData.contactDetailsModel.lastName\"\n                icon-feedback=\"true\"\n                name=\"Last Name\"\n                field-label=\"Last Name\">\n              </amexio-text-input>\n            </amexio-column>\n          </amexio-row>\n\n          <amexio-row>\n            <amexio-column size=\"6\">\n              <amexio-email-input\n                [(ngModel)]=\"conData.contactDetailsModel.email\"\n                name =\"email\"\n                [field-label]=\"'Email'\"\n                [place-holder]=\"'Enter Email Id'\"\n              >\n              </amexio-email-input>\n            </amexio-column>\n            <amexio-column size=\"6\">\n              <amexio-number-input\n                name =\"Cell No\"\n                [(ngModel)]=\"conData.contactDetailsModel.cellNo\"\n                [field-label]=\"'Cell No'\"\n                [place-holder]=\"'Enter Cell No'\">\n              </amexio-number-input>\n            </amexio-column>\n          </amexio-row>\n\n          <amexio-row>\n            <amexio-column size=\"6\">\n              <amexio-text-input\n                [enable-popover]=\"true\"\n                [(ngModel)]=\"conData.contactDetailsModel.fax\"\n                field-label=\"Fax\"\n                name =\"Fax\"\n                [icon-feedback]=\"true\"\n              >\n              </amexio-text-input>\n            </amexio-column>\n            <amexio-column size=\"6\">\n              <amexio-text-input\n                [enable-popover]=\"true\"\n                [(ngModel)]=\"conData.contactDetailsModel.address1\"\n                field-label=\"Address1\"\n                name =\"Address1\"\n                [icon-feedback]=\"true\"\n              >\n              </amexio-text-input>\n            </amexio-column>\n          </amexio-row>\n\n          <amexio-row>\n            <amexio-column size=\"6\">\n              <amexio-text-input\n                [(ngModel)]=\"conData.contactDetailsModel.address2\"\n                icon-feedback=\"true\"\n                name=\"Address2\"\n                field-label=\"Address2\">\n              </amexio-text-input>\n            </amexio-column>\n            <amexio-column size=\"6\">\n              <amexio-text-input\n                [(ngModel)]=\"conData.contactDetailsModel.address3\"\n                icon-feedback=\"true\"\n                name=\"Address3\"\n                field-label=\"Address3\">\n              </amexio-text-input>\n            </amexio-column>\n          </amexio-row>\n          <amexio-row>\n            <amexio-column size=\"6\">\n              <amexio-dropdown\n                [(ngModel)]=\"conData.contactDetailsModel.city\"\n                [place-holder]=\"'Choose city'\"\n                name=\"City\"\n                [data-reader] = \"'data'\"\n                [field-label]=\"'City'\"\n                [http-url]=\"'assets/data/city.json'\"\n                [http-method]=\"'get'\"\n                [display-field]=\"'primaryDisplay'\"\n                [value-field]=\"'primaryKey'\"\n                [enable-sort]=\"true\"\n                [sort]=\"'asc'\">\n              </amexio-dropdown>\n            </amexio-column>\n            <amexio-column size=\"6\">\n              <amexio-number-input\n                name =\"Pin\"\n                [(ngModel)]=\"conData.contactDetailsModel.pin\"\n                [field-label]=\"'Pin'\"\n                [place-holder]=\"'Enter Pin'\">\n              </amexio-number-input>\n            </amexio-column>\n          </amexio-row>\n          <amexio-row>\n            <amexio-column size=\"6\">\n              <amexio-dropdown\n                [(ngModel)]=\"conData.contactDetailsModel.country\"\n                [place-holder]=\"'Choose country'\"\n                name=\"Country\"\n                [data-reader] = \"'data'\"\n                [field-label]=\"'Country'\"\n                [http-url]=\"'assets/data/country.json'\"\n                [http-method]=\"'get'\"\n                [display-field]=\"'primaryDisplay'\"\n                [value-field]=\"'primaryKey'\"\n                [enable-sort]=\"true\"\n                [sort]=\"'asc'\">\n              </amexio-dropdown>\n            </amexio-column>\n          </amexio-row>\n        </amexio-body>\n\n      </amexio-card>\n    </amexio-column>\n  </amexio-row>\n</ng-container>\n  </amexio-body>\n  <amexio-action>\n    <amexio-toolbar>\n      <amexio-toolbar-item position-left >\n\n        <amexio-button [label]=\"'Add More'\"   [tooltip]=\"'Add More'\"  [icon]=\"'fa fa-plus'\" (onClick)=\"addMoreHandle()\"\n                       [type]=\"'theme-color'\"></amexio-button>\n\n      </amexio-toolbar-item>\n\n      <amexio-toolbar-item position-right >\n\n        <amexio-button [label]=\"'Proceed'\"   [tooltip]=\"'Proceed'\"  [icon]=\"'fa fa-paper-plane'\" (onClick)=\"proceedHandle()\"\n                       [type]=\"'theme-color'\"></amexio-button>\n\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action>\n</amexio-card>\n\n\n\n\n<!--\n  <amexio-dialogue [(show)]=\"isSuccess\"\n  [material-design]=\"true\"\n  [close-on-escape]=\"true\"\n  [custom]=\"true\"\n  [title]=\"'Info'\"\n  [type]=\"'alert'\">\n  <amexio-body>\n  {{successMessage}}\n  </amexio-body>\n  <amexio-action>\n  <amexio-button type=\"primary\"\n  label=\"Ok\" (onClick)=\"onDialougeOKClick()\">\n  </amexio-button>\n  </amexio-action>\n  </amexio-dialogue>\n\n  <amexio-dialogue [(show)]=\"isError\"\n[material-design]=\"true\"\n[close-on-escape]=\"true\"\n[custom]=\"true\"\n[title]=\"'Error'\"\n[type]=\"'alert'\"\n[close-on-escape]=\"true\"\n>\n<amexio-body>\n<ol >\n<li *ngFor=\"let msg of errorMessage ;let index=index\">{{msg}}</li>\n</ol>\n</amexio-body>\n<amexio-action>\n<amexio-button type=\"primary\"\nlabel=\"Ok\" (onClick)=\"onErrorDialougeOkClick($event)\">\n</amexio-button>\n</amexio-action>\n</amexio-dialogue> -->\n"

/***/ }),

/***/ "./src/app/components/contactdetails/contactdetails.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/contactdetails/contactdetails.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContactdetailsComponent, AddressGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactdetailsComponent", function() { return ContactdetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressGroup", function() { return AddressGroup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_contactdetails_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/contactdetails.model */ "./src/app/models/contactdetails.model.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactdetailsComponent = /** @class */ (function () {
    function ContactdetailsComponent(_httpService, _router, _dataService) {
        this._httpService = _httpService;
        this._router = _router;
        this._dataService = _dataService;
        this.contactDetailsModel = new _models_contactdetails_model__WEBPACK_IMPORTED_MODULE_1__["ContactDetailsModel"]();
    }
    ContactdetailsComponent.prototype.ngOnInit = function () {
        this.addressGroupData = [];
        if (this._dataService.order.productType == '1' || this._dataService.order.productType == '2') {
            this.createFirstTypeGroup();
        }
        else {
            this.createSecondTypeGroup();
        }
    };
    ContactdetailsComponent.prototype.createFirstTypeGroup = function () {
        this.addressGroupData.push(new AddressGroup('Billing Address', '1'), new AddressGroup('Installation Address', '2'));
    };
    ContactdetailsComponent.prototype.createSecondTypeGroup = function () {
        this.addressGroupData.push(new AddressGroup('Billing Address', '1'), new AddressGroup('End A', '3'), new AddressGroup('End B', '4'));
    };
    ContactdetailsComponent.prototype.addMoreHandle = function () {
        this.createFirstTypeGroup();
    };
    ContactdetailsComponent.prototype.proceedHandle = function () {
        var _this = this;
        this._dataService.order.contactAdrress = [];
        this.addressGroupData.forEach(function (addr) {
            _this._dataService.order.contactAdrress.push(addr.contactDetailsModel);
        });
        this._router.navigate(['home/orderdetails']);
    };
    ContactdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactdetails',
            template: __webpack_require__(/*! ./contactdetails.component.html */ "./src/app/components/contactdetails/contactdetails.component.html")
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ContactdetailsComponent);
    return ContactdetailsComponent;
}());

var AddressGroup = /** @class */ (function () {
    function AddressGroup(_label, pType) {
        this.addresslabel = _label;
        this.contactDetailsModel = new _models_contactdetails_model__WEBPACK_IMPORTED_MODULE_1__["ContactDetailsModel"]();
        this.contactDetailsModel.addressType = pType;
    }
    return AddressGroup;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-homepage-ce [type]=\"'1'\">\n  <amexio-homepage-northpanel>\n    <amexio-nav [logo]=\"'assets/images/rinalogo.png'\"\n                [title]=\"'Airtel'\">\n    </amexio-nav>\n  </amexio-homepage-northpanel>\n  <amexio-homepage-westpanel>\n    <amexio-side-nav [http-url]=\"'assets/data/sidenav.json'\"\n                     [http-method]=\"'get'\"\n                     [data-reader]=\"'data'\"\n                     (nodeClick)=\"sidenavClickHandle($event)\">\n    </amexio-side-nav>\n  </amexio-homepage-westpanel>\n  <amexio-homepage-centerpanel>\n    <amexio-spinner [show]=_dataService.showLoader [type]=\"'rectanglebounce'\" [vertical-position]=\"'center'\"\n                    [horizontal-position]=\"'center'\" [color]=\"'blue'\">\n    </amexio-spinner>\n    <router-outlet></router-outlet>\n  </amexio-homepage-centerpanel>\n</amexio-homepage-ce>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
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
 * Created by dattaram on 24/4/19.
 */



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route, _dataService) {
        this._route = _route;
        this._dataService = _dataService;
    }
    HomeComponent.prototype.sidenavClickHandle = function (event) {
        this._route.navigate(['home/' + event.link]);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-spinner [show]=\"showLoader\" [type]=\"'rectanglebounce'\" [vertical-position]=\"'center'\" [horizontal-position]=\"'center'\" [color]=\"'yellow'\">\n</amexio-spinner>\n<div class=\"login-page-div\">\n   <amexio-nav [transparent]=\"true\" [enable-side-nav-position]=\"true\" class=\"ok\" [title]=\"'RINA Platform'\" [logo]=\"'assets/images/rinalogo.png'\">\n   </amexio-nav>\n  <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'center'\">\n    <amexio-layout-item>\n      <amexio-layout-columns [fit]=\"true\" [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'end'\">\n        <amexio-layout-item>  &nbsp; </amexio-layout-item>\n        <amexio-layout-item class=\"login-page\">\n          <div [formGroup]=\"signInGroup\">\n            <amexio-card-ce>\n\n              <amexio-header-ce [border-bottom]=\"true\">\n                <amexio-label size=\"large-bold\">\n                  Login\n                </amexio-label>\n              </amexio-header-ce>\n\n              <amexio-body-ce>\n                <amexio-layout-columns [border]=\"false\" [fit]=\"true\" [alignment]=\"'start'\" [orientation]=\"'vertical'\">\n                  <amexio-layout-item>\n                    <amexio-text-input formControlName=\"email\" [field-label]=\"'User Id'\" name=\"email\"\n                      [place-holder]=\"'Enter User Id'\" [allow-blank]=\"false\" [(ngModel)]=\"loginModel.userId\"\n                      [error-msg]=\"'Please Enter User Id'\" [icon-feedback]=\"true\">\n                    </amexio-text-input>\n\n                  </amexio-layout-item>\n                  <amexio-layout-item>\n                    <amexio-password-input formControlName=\"Password\" [field-label]=\"'Password'\" name=\"password\"\n                      [place-holder]=\"'Enter password'\" [allow-blank]=\"false\" [(ngModel)]=\"loginModel.password\"\n                      [error-msg]=\"'Please Enter password'\" [icon-feedback]=\"true\">\n                    </amexio-password-input>\n                  </amexio-layout-item>\n                </amexio-layout-columns>\n              </amexio-body-ce>\n              <amexio-action-ce [align]=\"'center'\" [border-top]=\"true\">\n                <amexio-button [icon]=\"'fa fa-sign-in'\" [disabled]=\"!signInGroup.valid\" [label]=\"'Login'\" [type]=\"'theme-color'\"\n                  (onClick)=\"loginHandle()\" [tooltip]=\"'Login'\" [block]=\"true\">\n                </amexio-button>\n              </amexio-action-ce>\n\n            </amexio-card-ce>\n          </div>\n\n        </amexio-layout-item>\n        <amexio-layout-item> &nbsp;</amexio-layout-item>\n      </amexio-layout-columns>\n\n    </amexio-layout-item>\n  </amexio-layout-columns>\n</div>\n  <amexio-notification\n        [data]=\"errorMsgData\"\n        [vertical-position]=\"'top'\"\n        [horizontal-position]=\"'right'\"\n        [close-on-escape] =\"true\"\n        [background-color]=\"'red'\"\n        [auto-dismiss-msg]=\"false\"\n        [auto-dismiss-msg-interval]=\"6000\">\n      </amexio-notification>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/login.model */ "./src/app/models/login.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _constants_app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/app.constant */ "./src/app/constants/app.constant.ts");
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
    function LoginComponent(_httpClient, fb, _router) {
        this._httpClient = _httpClient;
        this.fb = fb;
        this._router = _router;
        this.showLoader = false;
        this.errorMsgData = [];
        this.loginModel = new _models_login_model__WEBPACK_IMPORTED_MODULE_1__["LoginModel"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.validateSigninform();
    };
    LoginComponent.prototype.validateSigninform = function () {
        this.signInGroup = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    };
    LoginComponent.prototype.loginHandle = function () {
        var _this = this;
        var response;
        this.showLoader = true;
        this._httpClient.post(_constants_app_constant__WEBPACK_IMPORTED_MODULE_5__["AUTH_URL"], this.loginModel).subscribe(function (res) {
            response = res;
        }, function (error) {
            console.log(error);
            _this.showLoader = false;
        }, function () {
            if (response.success) {
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
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/new-order/new-order.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/new-order/new-order.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'center'\">\n  <amexio-layout-item [fit]=\"true\">\n    <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n      <amexio-layout-item >\n        <amexio-card [header]=\"false\"\n                     [footer]=\"true\"\n                     [footer-align]=\"'right'\">\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"12\">\n                <amexio-text-input field-label=\"Party Name\"\n                                   name=\"name\"\n                                   place-holder=\"Enter  name\"\n                                    [(ngModel)]=\"name\"\n                                   [disabled]=\"true\"\n                                   icon-feedback=\"true\">\n                </amexio-text-input>\n              </amexio-column>\n             <!-- <amexio-column [size]=\"12\">\n                <amexio-text-input field-label=\"Category\"\n                                   name=\"name\"\n                                    [(ngModel)]=\"category\"\n                                   place-holder=\"Enter category\"\n                                   icon-feedback=\"true\">\n                </amexio-text-input>\n              </amexio-column>-->\n              <amexio-column [size]=\"12\">\n                <amexio-dropdown\n                                 [place-holder]=\"'Choose'\"\n                                 name=\"productType\"\n                                 [data-reader]=\"'data'\"\n                                 [field-label]=\"'Product Type'\"\n                                  [(ngModel)]=\"productType\"\n                                 [http-url]=\"'assets/data/productType.json'\"\n                                 [http-method]=\"'get'\"\n                                 [display-field]=\"'productName'\"\n                                 [value-field]=\"'productType'\"\n                                 (onSingleSelect)=\"onSingleSelectHandle($event)\"\n                                 [enable-sort]=\"true\"\n                                 [sort]=\"'asc'\">\n                </amexio-dropdown>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n          <amexio-action >\n            <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\" (onClick)=\"backHandle()\"></amexio-button>\n            <amexio-button [label]=\"'New Order'\" [type]=\"'theme-color'\" (onClick)=\"newOrderHandle()\"></amexio-button>\n          </amexio-action>\n        </amexio-card>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n  </amexio-layout-item>\n</amexio-layout-columns>\n"

/***/ }),

/***/ "./src/app/components/new-order/new-order.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/new-order/new-order.component.ts ***!
  \*************************************************************/
/*! exports provided: NewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrderComponent", function() { return NewOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
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
 * Created by dattaram on 25/4/19.
 */




var NewOrderComponent = /** @class */ (function () {
    function NewOrderComponent(_httpService, _router, _dataService) {
        this._httpService = _httpService;
        this._router = _router;
        this._dataService = _dataService;
        this.productType = "1";
    }
    NewOrderComponent.prototype.ngOnInit = function () {
        this.name = this._dataService.order.customerDemographics.partyName;
        this.category = this._dataService.order.customerDemographics.custCategory;
    };
    NewOrderComponent.prototype.newOrderHandle = function () {
        this._dataService.order.productType = this.productType;
        this._dataService.order.productName = this.productName;
        this._router.navigate(['home/addcontdetails']);
    };
    NewOrderComponent.prototype.onSingleSelectHandle = function (event) {
        this.productName = event.productName;
    };
    NewOrderComponent.prototype.backHandle = function () {
        this._router.navigate(['home/searchcust']);
    };
    NewOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-order',
            template: __webpack_require__(/*! ./new-order.component.html */ "./src/app/components/new-order/new-order.component.html")
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], NewOrderComponent);
    return NewOrderComponent;
}());



/***/ }),

/***/ "./src/app/components/order/internet/internet.order.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/order/internet/internet.order.component.ts ***!
  \***********************************************************************/
/*! exports provided: InternetOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetOrderComponent", function() { return InternetOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_order_internetorder_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/order/internetorder.model */ "./src/app/models/order/internetorder.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InternetOrderComponent = /** @class */ (function () {
    function InternetOrderComponent() {
        this.isOtherDetails = false;
        this.isCPMOtherDetails = false;
        this.isPrimaryOtherTechnologyDetails = false;
        this.isSecondaryOtherTechnologyDetails = false;
        this.internetOrder = new _models_order_internetorder_model__WEBPACK_IMPORTED_MODULE_1__["InternetOrder"]();
    }
    // TO CUSTOMER INTERFACE SELECTION
    InternetOrderComponent.prototype.onCustomerInterfaceSelection = function (data) {
        var _this = this;
        this.internetOrder.customerInterface = [];
        var set = new Set();
        if (data && data.length > 0) {
            data.forEach(function (obj) {
                if (obj.primaryKey === '11') {
                    _this.isOtherDetails = true;
                }
                else {
                    _this.isOtherDetails = false;
                }
                set.add(obj.primaryKey);
            });
        }
        else {
            this.isOtherDetails = false;
        }
        if (set) {
            set.forEach(function (item) {
                _this.internetOrder.customerInterface.push(item);
            });
        }
    };
    // CPM TYPE SEELCTION
    InternetOrderComponent.prototype.onCPMTypeSelection = function (data) {
        var _this = this;
        this.internetOrder.cPEType = [];
        var set = new Set();
        if (data && data.length > 0) {
            data.forEach(function (obj) {
                if (obj.primaryKey === '4') {
                    _this.isCPMOtherDetails = true;
                }
                else {
                    _this.isCPMOtherDetails = false;
                }
                set.add(obj.primaryKey);
            });
        }
        else {
            this.isCPMOtherDetails = false;
        }
        if (set) {
            set.forEach(function (item) {
                _this.internetOrder.cPEType.push(item);
            });
        }
    };
    // ON SELECT TECHNOLOGY
    InternetOrderComponent.prototype.onPrimaryTechnologySelection = function (data) {
        var _this = this;
        this.internetOrder.primaryTechnology = [];
        var set = new Set();
        if (data && data.length > 0) {
            data.forEach(function (obj) {
                if (obj.primaryKey === '6') {
                    _this.isPrimaryOtherTechnologyDetails = true;
                }
                else {
                    _this.isPrimaryOtherTechnologyDetails = false;
                }
                set.add(obj.primaryKey);
            });
        }
        else {
            this.isPrimaryOtherTechnologyDetails = false;
        }
        if (set) {
            set.forEach(function (item) {
                _this.internetOrder.primaryTechnology.push(item);
            });
        }
    };
    // ON SELECT TECHNOLOGY
    InternetOrderComponent.prototype.onSecondaryTechnologySelection = function (data) {
        var _this = this;
        this.internetOrder.secondaryTechnology = [];
        var set = new Set();
        if (data && data.length > 0) {
            data.forEach(function (obj) {
                if (obj.primaryKey === '6') {
                    _this.isSecondaryOtherTechnologyDetails = true;
                }
                else {
                    _this.isSecondaryOtherTechnologyDetails = false;
                }
                set.add(obj.primaryKey);
            });
        }
        else {
            this.isSecondaryOtherTechnologyDetails = false;
        }
        if (set) {
            set.forEach(function (item) {
                _this.internetOrder.secondaryTechnology.push(item);
            });
        }
    };
    InternetOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'internet-order',
            template: __webpack_require__(/*! ./internet_order_details.component.html */ "./src/app/components/order/internet/internet_order_details.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], InternetOrderComponent);
    return InternetOrderComponent;
}());



/***/ }),

/***/ "./src/app/components/order/internet/internet_order_details.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/order/internet/internet_order_details.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-row>\n\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"internetOrder.poNo\" name=\"poNo\" field-label=\"PO No\" place-holder=\"Enter PO No\">\n        </amexio-text-input>\n    </amexio-column>\n\n    <amexio-column size=\"6\">\n        <amexio-date-time-picker [field-label]=\"'PO Date'\" [time-picker]=\"false\" [date-picker]=\"true\" [(ngModel)]=\"internetOrder.poDate\">\n        </amexio-date-time-picker>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\">\n        <amexio-date-time-picker [field-label]=\"'PO RFS Date'\" [time-picker]=\"false\" [date-picker]=\"true\" [(ngModel)]=\"internetOrder.poRfsDate\">\n        </amexio-date-time-picker>\n    </amexio-column>\n\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"internetOrder.lastMileFeasibility\" [place-holder]=\"'Choose Last Mile Feasibility'\" [data-reader]=\"'data'\" [field-label]=\"'Last Mile Feasibility'\" [http-url]=\"'assets/data/order/internet/last_mile_feasibility.json'\" [http-method]=\"'get'\"\n            [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"internetOrder.lastMileFeasibilityRequesID\" name=\"lastMileFeasibilityRequesID\" field-label=\"Last Mile Feasibility Reques ID\" place-holder=\"Last Mile Feasibility Reques ID\">\n        </amexio-text-input>\n    </amexio-column>\n</amexio-row>\n\n\n<amexio-row>\n  <amexio-column size=\"6\">\n    <amexio-dropdown [(ngModel)]=\"internetOrder.orderType\" [search]=\"true\" [place-holder]=\"'Choose Order Type'\" [data-reader]=\"'data'\" [field-label]=\"'Order Type'\" [http-url]=\"'assets/data/order/internet/ordertype.json'\" [http-method]=\"'get'\"\n            [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n  </amexio-column>\n  <amexio-column size=\"6\">\n    <amexio-dropdown [(ngModel)]=\"internetOrder.serviceType\" [search]=\"true\" [place-holder]=\"'Choose Service Type'\" [data-reader]=\"'data'\" [field-label]=\"'Service Type'\" [http-url]=\"'assets/data/order/internet/servicetype.json'\" [http-method]=\"'get'\"\n            [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n  </amexio-column>\n</amexio-row>\n\n<amexio-row *ngIf=\"internetOrder.serviceType == '18'\">\n  <amexio-column size=\"12\">\n      <amexio-text-input [(ngModel)]=\"internetOrder.otherServiceTypeDetails\" name=\"otherServiceTypeDetails\" field-label=\"Other Service Type Details\" place-holder=\"Other Service Type Details\">\n      </amexio-text-input>\n  </amexio-column>\n</amexio-row>\n\n<amexio-row *ngIf=\"internetOrder.orderType == '7' || internetOrder.orderType == '8' || internetOrder.orderType == '10'\">\n  <amexio-column size=\"12\">\n    <amexio-text-input [(ngModel)]=\"internetOrder.changeOrderCircuitID\" name=\"changeOrderCircuitID\" field-label=\"Change Order Circuit ID\" place-holder=\"Change Order Circuit ID\">\n    </amexio-text-input>\n  </amexio-column>\n</amexio-row>\n\n<amexio-row >\n  <amexio-column size=\"12\">\n    <amexio-dropdown [(ngModel)]=\"internetOrder.portType\"\n    [search]=\"true\" [place-holder]=\"'Choose Port Type'\" [data-reader]=\"'data'\"\n    [field-label]=\"'Port Type'\" [http-url]=\"'assets/data/order/internet/porttype.json'\"\n    [http-method]=\"'get'\"\n   [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n   [enable-sort]=\"true\" [sort]=\"'asc'\">\n      </amexio-dropdown>\n  </amexio-column>\n</amexio-row>\n\n<amexio-row  *ngIf=\"internetOrder.portType=='2'\">\n  <amexio-column size=\"12\">\n    <amexio-dropdown [(ngModel)]=\"internetOrder.billingTypeforMultipleBurstablePorts\"\n    [search]=\"true\" [place-holder]=\"'Choose Billing Type for Multiple Burstable Ports'\" [data-reader]=\"'data'\"\n    [field-label]=\"'Billing Type for Multiple Burstable Ports'\" [http-url]=\"'assets/data/order/internet/billingtype_for_multiple_burstable_ports.json'\"\n    [http-method]=\"'get'\"\n   [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n   [enable-sort]=\"true\" [sort]=\"'asc'\">\n      </amexio-dropdown>\n  </amexio-column>\n</amexio-row>\n\n<amexio-row>\n  <amexio-column size=\"6\">\n      <amexio-text-input [(ngModel)]=\"internetOrder.committedBandwidth\" name=\"committedBandwidth\" field-label=\"Committed Bandwidth\" place-holder=\"Enter Committed Bandwidth\">\n      </amexio-text-input>\n  </amexio-column>\n\n  <amexio-column size=\"6\">\n    <amexio-dropdown [(ngModel)]=\"internetOrder.uom\"\n    [search]=\"true\" [place-holder]=\"'Choose UMO'\" [data-reader]=\"'data'\"\n    [field-label]=\"'UMO'\" [http-url]=\"'assets/data/order/internet/uom.json'\"\n    [http-method]=\"'get'\"\n   [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n   [enable-sort]=\"true\" [sort]=\"'asc'\">\n      </amexio-dropdown>\n  </amexio-column>\n</amexio-row>\n\n<amexio-row>\n  <amexio-column size=\"12\">\n    <amexio-dropdown [(ngModel)]=\"internetOrder.ratio\"\n    [search]=\"true\" [place-holder]=\"'Choose Ratio'\" [data-reader]=\"'data'\"\n    [field-label]=\"'Ratio'\" [http-url]=\"'assets/data/order/internet/ratio.json'\"\n    [http-method]=\"'get'\"\n   [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n   [enable-sort]=\"true\" [sort]=\"'asc'\">\n      </amexio-dropdown>\n  </amexio-column>\n</amexio-row>\n\n\n<amexio-row *ngIf=\"internetOrder.serviceType === '17'\">\n\n  <amexio-column size=\"6\">\n      <amexio-text-input [(ngModel)]=\"internetOrder.airtelPOP1\" name=\"poNo\" field-label=\"Airtel POP 1\" place-holder=\"Airtel POP 1\">\n      </amexio-text-input>\n  </amexio-column>\n\n  <amexio-column size=\"6\">\n    <amexio-text-input [(ngModel)]=\"internetOrder.airtelPOP2\" name=\"airtelPOP2\" field-label=\"Airtel POP 2\" place-holder=\"Airtel POP 2\">\n    </amexio-text-input>\n  </amexio-column>\n</amexio-row>\n\n<amexio-row *ngIf=\"internetOrder.serviceType == '19'\">\n  <amexio-column size=\"6\">\n    <amexio-dropdown [(ngModel)]=\"internetOrder.dDoSCPERequired\"\n    [search]=\"true\" [place-holder]=\"'Choose DDoS CPE Required'\" [data-reader]=\"'data'\"\n    [field-label]=\"'DDoS CPE Required'\" [http-url]=\"'assets/data/order/internet/ddos _cpe_required.json'\"\n    [http-method]=\"'get'\"\n   [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n   [enable-sort]=\"true\" [sort]=\"'asc'\">\n      </amexio-dropdown>\n  </amexio-column>\n\n  <amexio-column size=\"6\">\n    <amexio-dropdown [(ngModel)]=\"internetOrder.dDoSCPEprovidedby\"\n    [search]=\"true\" [place-holder]=\"'Choose DDoS CPE provided by'\" [data-reader]=\"'data'\"\n    [field-label]=\"'DDoS CPE provided by'\" [http-url]=\"'assets/data/order/internet/ddos_cpe_providedby.json'\"\n    [http-method]=\"'get'\"\n   [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n   [enable-sort]=\"true\" [sort]=\"'asc'\">\n      </amexio-dropdown>\n  </amexio-column>\n</amexio-row>\n\n\n<amexio-row *ngIf=\"internetOrder.serviceType == '20'\">\n  <amexio-column size=\"4\">\n    <amexio-dropdown [(ngModel)]=\"internetOrder.webReporting\"\n    [search]=\"true\" [place-holder]=\"'Choose Web Reporting'\" [data-reader]=\"'data'\"\n    [field-label]=\"'Web Reporting'\" [http-url]=\"'assets/data/order/internet/web_reporting.json'\"\n    [http-method]=\"'get'\"\n   [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n   [enable-sort]=\"true\" [sort]=\"'asc'\">\n      </amexio-dropdown>\n  </amexio-column>\n\n  <amexio-column size=\"4\">\n    <amexio-dropdown [(ngModel)]=\"internetOrder.configurationManagement\"\n    [search]=\"true\" [place-holder]=\"'Choose Configuration Management'\" [data-reader]=\"'data'\"\n    [field-label]=\"'Configuration Management'\" [http-url]=\"'assets/data/order/internet/configuration_management.json'\"\n    [http-method]=\"'get'\"\n   [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n   [enable-sort]=\"true\" [sort]=\"'asc'\">\n      </amexio-dropdown>\n  </amexio-column>\n\n  <amexio-column size=\"4\">\n    <amexio-dropdown [(ngModel)]=\"internetOrder.proactiveMonitoring\"\n    [search]=\"true\" [place-holder]=\"'Choose Proactive Monitoring'\" [data-reader]=\"'data'\"\n    [field-label]=\"'Proactive Monitoring'\" [http-url]=\"'assets/data/order/internet/proactive_monitoring.json'\"\n    [http-method]=\"'get'\"\n   [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n   [enable-sort]=\"true\" [sort]=\"'asc'\">\n      </amexio-dropdown>\n  </amexio-column>\n</amexio-row>\n\n\n<ng-container *ngIf=\"internetOrder.serviceType === '4'\">\n    <amexio-row >\n        <amexio-column size=\"6\">\n            <amexio-text-input [(ngModel)]=\"internetOrder.portBW\" name=\"portBW\" field-label=\"Port BW\" place-holder=\"Port BW\">\n            </amexio-text-input>\n        </amexio-column>\n\n        <amexio-column size=\"6\">\n          <amexio-dropdown [(ngModel)]=\"internetOrder.uOMPortBW\"\n          [search]=\"true\" [place-holder]=\"'Choose UOM - Port BW'\" [data-reader]=\"'data'\"\n          [field-label]=\"'UOM-Port BW'\" [http-url]=\"'assets/data/order/internet/uom.json'\"\n          [http-method]=\"'get'\"\n         [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n         [enable-sort]=\"true\" [sort]=\"'asc'\">\n            </amexio-dropdown>\n        </amexio-column>\n      </amexio-row>\n\n      <amexio-row >\n          <amexio-column size=\"6\">\n              <amexio-text-input [(ngModel)]=\"internetOrder.committedVolumeMonth\" name=\"committedVolumeMonth\" field-label=\"Committed Volume / Month\" place-holder=\"Committed Volume / Month\">\n              </amexio-text-input>\n          </amexio-column>\n\n          <amexio-column size=\"6\">\n            <amexio-dropdown [(ngModel)]=\"internetOrder.uOMCommittedVolumeMonth\"\n            [search]=\"true\" [place-holder]=\"'Choose UOM - Committed Volume / Month'\" [data-reader]=\"'data'\"\n            [field-label]=\"'UOM-Committed Volume / Month'\" [http-url]=\"'assets/data/order/internet/uom.json'\"\n            [http-method]=\"'get'\"\n           [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n           [enable-sort]=\"true\" [sort]=\"'asc'\">\n              </amexio-dropdown>\n          </amexio-column>\n        </amexio-row>\n\n</ng-container>\n\n\n\n<ng-container *ngIf=\"internetOrder.serviceType === '6'\">\n    <amexio-row >\n        <amexio-column size=\"6\">\n            <amexio-text-input [(ngModel)]=\"internetOrder.bW_24_7\" name=\"bW_24_7\" field-label=\"24X7 BW\" place-holder=\"24X7 BW\">\n            </amexio-text-input>\n        </amexio-column>\n\n        <amexio-column size=\"6\">\n          <amexio-dropdown [(ngModel)]=\"internetOrder.bW_uom_24_7\"\n          [search]=\"true\" [place-holder]=\"'Choose UOM - 24X7 BW'\" [data-reader]=\"'data'\"\n          [field-label]=\"'UOM - 24X7 BW'\" [http-url]=\"'assets/data/order/internet/uom.json'\"\n          [http-method]=\"'get'\"\n         [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n         [enable-sort]=\"true\" [sort]=\"'asc'\">\n            </amexio-dropdown>\n        </amexio-column>\n      </amexio-row>\n\n      <amexio-row >\n          <amexio-column size=\"6\">\n              <amexio-text-input [(ngModel)]=\"internetOrder.offPeakHoursBW\" name=\"offPeakHoursBW\" field-label=\"Off Peak Hours BW\" place-holder=\"Off Peak Hours BW\">\n              </amexio-text-input>\n          </amexio-column>\n\n          <amexio-column size=\"6\">\n            <amexio-dropdown [(ngModel)]=\"internetOrder.uOMOffPeakHoursBW\"\n            [search]=\"true\" [place-holder]=\"'Choose UOM - Off Peak Hours BW'\" [data-reader]=\"'data'\"\n            [field-label]=\"'UOM - Off Peak Hours BW'\" [http-url]=\"'assets/data/order/internet/uom.json'\"\n            [http-method]=\"'get'\"\n           [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n           [enable-sort]=\"true\" [sort]=\"'asc'\">\n              </amexio-dropdown>\n          </amexio-column>\n        </amexio-row>\n\n</ng-container>\n\n\n\n<ng-container *ngIf=\"internetOrder.serviceType === '9'\">\n    <amexio-row >\n        <amexio-column size=\"6\">\n            <amexio-text-input [(ngModel)]=\"internetOrder.indiaBW\" name=\"indiaBW\" field-label=\"India BW\" place-holder=\"India BW\">\n            </amexio-text-input>\n        </amexio-column>\n\n        <amexio-column size=\"6\">\n          <amexio-dropdown [(ngModel)]=\"internetOrder.uOMIndiaBW\"\n          [search]=\"true\" [place-holder]=\"'Choose UOM - India BW'\" [data-reader]=\"'data'\"\n          [field-label]=\"'UOM - India BW'\" [http-url]=\"'assets/data/order/internet/uom.json'\"\n          [http-method]=\"'get'\"\n         [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n         [enable-sort]=\"true\" [sort]=\"'asc'\">\n            </amexio-dropdown>\n        </amexio-column>\n      </amexio-row>\n\n      <amexio-row >\n          <amexio-column size=\"6\">\n              <amexio-text-input [(ngModel)]=\"internetOrder.internationalBW\" name=\"internationalBW\"\n              field-label=\"International BW\" place-holder=\"International BW\">\n              </amexio-text-input>\n          </amexio-column>\n\n          <amexio-column size=\"6\">\n            <amexio-dropdown [(ngModel)]=\"internetOrder.uOMInternationalBW\"\n            [search]=\"true\" [place-holder]=\"'Choose UOM - International BW'\" [data-reader]=\"'data'\"\n            [field-label]=\"'UOM - International BW'\" [http-url]=\"'assets/data/order/internet/uom.json'\"\n            [http-method]=\"'get'\"\n           [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n           [enable-sort]=\"true\" [sort]=\"'asc'\">\n              </amexio-dropdown>\n          </amexio-column>\n        </amexio-row>\n\n</ng-container>\n\n<ng-container *ngIf=\"internetOrder.serviceType === '19'\">\n    <amexio-row >\n        <amexio-column size=\"6\">\n            <amexio-text-input [(ngModel)]=\"internetOrder.bW\" name=\"bW\" field-label=\"BW\" place-holder=\"BW\">\n            </amexio-text-input>\n        </amexio-column>\n\n        <amexio-column size=\"6\">\n          <amexio-dropdown [(ngModel)]=\"internetOrder.uOMBW\"\n          [search]=\"true\" [place-holder]=\"'Choose UOM - BW'\" [data-reader]=\"'data'\"\n          [field-label]=\"'UOM - BW'\" [http-url]=\"'assets/data/order/internet/uom.json'\"\n          [http-method]=\"'get'\"\n         [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n         [enable-sort]=\"true\" [sort]=\"'asc'\">\n            </amexio-dropdown>\n        </amexio-column>\n      </amexio-row>\n\n      <amexio-row >\n          <amexio-column size=\"12\">\n              <amexio-text-input [(ngModel)]=\"internetOrder.dDoSCPEType\" name=\"dDoSCPEType\"\n              field-label=\"DDoS CPE Type\" place-holder=\"DDoS CPE Type\">\n              </amexio-text-input>\n          </amexio-column>\n\n          <amexio-column size=\"12\">\n              <amexio-checkbox-group [field-label]=\"'Customer Interface'\"\n              [data-reader]=\"'data'\"\n              [display-field]=\"'primaryDisplay'\"\n              [value-field]=\"'checked'\"\n              (onSelection)=\"onCustomerInterfaceSelection($event)\"\n              [horizontal]=\"true\"\n              [http-method]=\"'get'\"\n              [http-url]=\"'assets/data/order/internet/customer_interface.json'\">\n          </amexio-checkbox-group>\n          </amexio-column>\n        </amexio-row>\n\n</ng-container>\n\n<ng-container *ngIf=\"isOtherDetails\">\n    <amexio-row >\n        <amexio-column size=\"12\">\n    <amexio-text-input [(ngModel)]=\"internetOrder.otherDetails\" name=\"otherDetails\"\n    field-label=\"Other details\" place-holder=\"Other details\">\n    </amexio-text-input>\n  </amexio-column>\n</amexio-row>\n</ng-container>\n\n<ng-container *ngIf=\"internetOrder.serviceType === '19'\">\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"internetOrder.cPEProvidedby\"\n        [search]=\"true\" [place-holder]=\"'Choose CPE Provided by'\" [data-reader]=\"'data'\"\n        [field-label]=\"'CPE Provided by'\" [http-url]=\"'assets/data/order/internet/ddos_cpe_providedby.json'\"\n        [http-method]=\"'get'\"\n       [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n       [enable-sort]=\"true\" [sort]=\"'asc'\">\n          </amexio-dropdown>\n      </amexio-column>\n      <amexio-column size=\"6\">\n          <amexio-dropdown [(ngModel)]=\"internetOrder.cPECommercials\"\n          [search]=\"true\" [place-holder]=\"'Choose CPE Commercials'\" [data-reader]=\"'data'\"\n          [field-label]=\"'CPE Commercials'\" [http-url]=\"'assets/data/order/internet/cpe_commercials.json'\"\n          [http-method]=\"'get'\"\n         [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n         [enable-sort]=\"true\" [sort]=\"'asc'\">\n            </amexio-dropdown>\n        </amexio-column>\n        <amexio-column size=\"12\">\n            <amexio-checkbox-group [field-label]=\"'CPE Type'\"\n            [data-reader]=\"'data'\"\n            [display-field]=\"'primaryDisplay'\"\n            [value-field]=\"'checked'\"\n            (onSelection)=\"onCPMTypeSelection($event)\"\n            [horizontal]=\"true\"\n            [http-method]=\"'get'\"\n            [http-url]=\"'assets/data/order/internet/cpe_type.json'\">\n        </amexio-checkbox-group>\n      </amexio-column>\n</ng-container>\n\n<ng-container *ngIf=\"isCPMOtherDetails\">\n    <amexio-row >\n        <amexio-column size=\"12\">\n    <amexio-text-input [(ngModel)]=\"internetOrder.cPMOtherDetails\" name=\"cPMOtherDetails\"\n    field-label=\"CPM Other details\" place-holder=\"CPM Other details\">\n    </amexio-text-input>\n  </amexio-column>\n</amexio-row>\n</ng-container>\n\n\n<ng-container *ngIf=\"internetOrder.serviceType === '19'\">\n\n    <amexio-row >\n        <amexio-column size=\"6\">\n            <amexio-text-input [(ngModel)]=\"internetOrder.quantityofRouters\" name=\"quantityofRouters\"\n            field-label=\"Quantity of Routers\" place-holder=\"Quantity of Routers\">\n            </amexio-text-input>\n         </amexio-column>\n         <amexio-column size=\"6\">\n            <amexio-text-input [(ngModel)]=\"internetOrder.quantityofModems\" name=\"quantityofModems\"\n            field-label=\"Quantity of Modems\" place-holder=\"Quantity of Modems\">\n            </amexio-text-input>\n          </amexio-column>\n      </amexio-row>\n\n      <amexio-row >\n          <amexio-column size=\"6\">\n              <amexio-text-input [(ngModel)]=\"internetOrder.quantityofConverters\" name=\"quantityofConverters\"\n              field-label=\"Quantity of Converters\" place-holder=\"Quantity of Converters\">\n              </amexio-text-input>\n           </amexio-column>\n           <amexio-column size=\"6\">\n              <amexio-text-input [(ngModel)]=\"internetOrder.quantityofOther\" name=\"quantityofOther\"\n              field-label=\"Quantity of Other \" place-holder=\"Quantity of Other \">\n              </amexio-text-input>\n            </amexio-column>\n        </amexio-row>\n\n</ng-container >\n\n<amexio-row >\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"internetOrder.remarks\" name=\"remarks\"\n        field-label=\"Remarks\" place-holder=\"Remarks\">\n        </amexio-text-input>\n     </amexio-column>\n\n</amexio-row>\n\n<amexio-row >\n<amexio-column size=\"12\">\n    <amexio-dropdown [(ngModel)]=\"internetOrder.primaryAccessRequired\"\n    [search]=\"true\" [place-holder]=\"'Choose Primary Access required'\" [data-reader]=\"'data'\"\n    [field-label]=\"'Primary Access required'\" [http-url]=\"'assets/data/order/internet/ddos _cpe_required.json'\"\n    [http-method]=\"'get'\"\n   [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n   [enable-sort]=\"true\" [sort]=\"'asc'\">\n      </amexio-dropdown>\n  </amexio-column>\n</amexio-row>\n\n<amexio-row *ngIf=\"internetOrder.primaryAccessRequired == '1'\">\n          <amexio-column size=\"6\">\n              <amexio-dropdown [(ngModel)]=\"internetOrder.primaryAccessArrangedBy\"\n        [search]=\"true\" [place-holder]=\"'Choose Primary Access Arranged By'\" [data-reader]=\"'data'\"\n        [field-label]=\"'Primary Access Arranged By'\" [http-url]=\"'assets/data/order/internet/ddos_cpe_providedby.json'\"\n        [http-method]=\"'get'\"\n       [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n       [enable-sort]=\"true\" [sort]=\"'asc'\">\n          </amexio-dropdown>\n          </amexio-column>\n          <amexio-column *ngIf=\"internetOrder.primaryAccessArrangedBy == '2'\" size=\"6\">\n              <amexio-text-input [(ngModel)]=\"internetOrder.primaryAccessProviderName\" name=\"primaryAccessProviderName\"\n              field-label=\"Access Provider's Name\" place-holder=\"Access Provider's Name\">\n              </amexio-text-input>\n          </amexio-column>\n      </amexio-row >\n      <ng-container *ngIf=\"internetOrder.primaryAccessRequired == '1'\">\n          <amexio-row >\n              <amexio-column size=\"6\">\n                  <amexio-text-input [(ngModel)]=\"internetOrder.primaryAccessBandwidth\" name=\"primaryAccessBandwidth\"\n                  field-label=\"Access Bandwidth\" place-holder=\"Access Bandwidth\">\n                  </amexio-text-input>\n              </amexio-column>\n              <amexio-column size=\"6\">\n                <amexio-dropdown [(ngModel)]=\"internetOrder.primaryUOMAccessBandwidth\"\n                [search]=\"true\" [place-holder]=\"'Choose UOM - Access Bandwidth'\" [data-reader]=\"'data'\"\n                [field-label]=\"'UOM - Access Bandwidth'\" [http-url]=\"'assets/data/order/internet/uom.json'\"\n                [http-method]=\"'get'\"\n               [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n               [enable-sort]=\"true\" [sort]=\"'asc'\">\n                  </amexio-dropdown>\n              </amexio-column>\n            </amexio-row>\n\n            <amexio-row >\n                <amexio-column size=\"6\">\n                    <amexio-text-input [(ngModel)]=\"internetOrder.primaryDistanceInKM\" name=\"primaryDistanceInKM\"\n                    field-label=\"Distance in KM\" place-holder=\"Distance in KM\">\n                    </amexio-text-input>\n                </amexio-column>\n\n                <amexio-column size=\"6\">\n                  <amexio-dropdown [(ngModel)]=\"internetOrder.primaryMedia\"\n                  [search]=\"true\" [place-holder]=\"'Choose Media'\" [data-reader]=\"'data'\"\n                  [field-label]=\"'UOM - Media'\" [http-url]=\"'assets/data/order/internet/media.json'\"\n                  [http-method]=\"'get'\"\n                 [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n                 [enable-sort]=\"true\" [sort]=\"'asc'\">\n                    </amexio-dropdown>\n                </amexio-column>\n                <amexio-column size=\"12\">\n                    <amexio-checkbox-group [field-label]=\"'Technology'\"\n                    [data-reader]=\"'data'\"\n                    [display-field]=\"'primaryDisplay'\"\n                    [value-field]=\"'checked'\"\n                    (onSelection)=\"onPrimaryTechnologySelection($event)\"\n                    [horizontal]=\"true\"\n                    [http-method]=\"'get'\"\n                    [http-url]=\"'assets/data/order/internet/technology.json'\">\n                </amexio-checkbox-group>\n              </amexio-column>\n              </amexio-row>\n\n              <amexio-row *ngIf=\"isPrimaryOtherTechnologyDetails\">\n                  <amexio-column size=\"12\">\n                      <amexio-text-input [(ngModel)]=\"internetOrder.primaryOtherTechnologyDetails\" name=\"primaryOtherTechnologyDetails\"\n                      field-label=\"Other Technology Details\" place-holder=\"Other Technology Details\">\n                      </amexio-text-input>\n                  </amexio-column>\n                </amexio-row>\n      </ng-container>\n\n<!-- Secondery -->\n      <amexio-row >\n          <amexio-column size=\"12\">\n              <amexio-dropdown [(ngModel)]=\"internetOrder.secondaryAccessRequired\"\n              [search]=\"true\" [place-holder]=\"'Choose Secondary Access required'\" [data-reader]=\"'data'\"\n              [field-label]=\"'Secondary Access required'\" [http-url]=\"'assets/data/order/internet/ddos _cpe_required.json'\"\n              [http-method]=\"'get'\"\n             [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n             [enable-sort]=\"true\" [sort]=\"'asc'\">\n                </amexio-dropdown>\n            </amexio-column>\n          </amexio-row>\n\n          <amexio-row *ngIf=\"internetOrder.secondaryAccessRequired == '1'\">\n                    <amexio-column size=\"6\">\n                        <amexio-dropdown [(ngModel)]=\"internetOrder.secondaryAccessArrangedBy\"\n                  [search]=\"true\" [place-holder]=\"'Choose Secondary Access Arranged By'\" [data-reader]=\"'data'\"\n                  [field-label]=\"'Secondary Access Arranged By'\" [http-url]=\"'assets/data/order/internet/ddos_cpe_providedby.json'\"\n                  [http-method]=\"'get'\"\n                 [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n                 [enable-sort]=\"true\" [sort]=\"'asc'\">\n                    </amexio-dropdown>\n                    </amexio-column>\n                    <amexio-column *ngIf=\"internetOrder.secondaryAccessArrangedBy == '2'\" size=\"6\">\n                        <amexio-text-input [(ngModel)]=\"internetOrder.secondaryAccessProviderName\" name=\"primaryAccessProviderName\"\n                        field-label=\"Access Provider's Name\" place-holder=\"Access Provider's Name\">\n                        </amexio-text-input>\n                    </amexio-column>\n                </amexio-row >\n                <ng-container *ngIf=\"internetOrder.secondaryAccessRequired == '1'\">\n                    <amexio-row >\n                        <amexio-column size=\"6\">\n                            <amexio-text-input [(ngModel)]=\"internetOrder.secondaryAccessBandwidth\" name=\"secondaryAccessBandwidth\"\n                            field-label=\"Access Bandwidth\" place-holder=\"Access Bandwidth\">\n                            </amexio-text-input>\n                        </amexio-column>\n                        <amexio-column size=\"6\">\n                          <amexio-dropdown [(ngModel)]=\"internetOrder.secondaryUOMAccessBandwidth\"\n                          [search]=\"true\" [place-holder]=\"'Choose UOM - Access Bandwidth'\" [data-reader]=\"'data'\"\n                          [field-label]=\"'UOM - Access Bandwidth'\" [http-url]=\"'assets/data/order/internet/uom.json'\"\n                          [http-method]=\"'get'\"\n                         [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n                         [enable-sort]=\"true\" [sort]=\"'asc'\">\n                            </amexio-dropdown>\n                        </amexio-column>\n                      </amexio-row>\n\n                      <amexio-row >\n                          <amexio-column size=\"6\">\n                              <amexio-text-input [(ngModel)]=\"internetOrder.secondaryDistanceInKM\" name=\"secondaryDistanceInKM\"\n                              field-label=\"Distance in KM\" place-holder=\"Distance in KM\">\n                              </amexio-text-input>\n                          </amexio-column>\n\n                          <amexio-column size=\"6\">\n                            <amexio-dropdown [(ngModel)]=\"internetOrder.secondaryMedia\"\n                            [search]=\"true\" [place-holder]=\"'Choose Media'\" [data-reader]=\"'data'\"\n                            [field-label]=\"'UOM - Media'\" [http-url]=\"'assets/data/order/internet/media.json'\"\n                            [http-method]=\"'get'\"\n                           [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\"\n                           [enable-sort]=\"true\" [sort]=\"'asc'\">\n                              </amexio-dropdown>\n                          </amexio-column>\n\n                          <amexio-column size=\"12\">\n                              <amexio-checkbox-group [field-label]=\"'Technology'\"\n                              [data-reader]=\"'data'\"\n                              [display-field]=\"'primaryDisplay'\"\n                              [value-field]=\"'checked'\"\n                              (onSelection)=\"onSecondaryTechnologySelection($event)\"\n                              [horizontal]=\"true\"\n                              [http-method]=\"'get'\"\n                              [http-url]=\"'assets/data/order/internet/technology.json'\">\n                          </amexio-checkbox-group>\n                        </amexio-column>\n                        </amexio-row>\n\n                        <amexio-row *ngIf=\"isSecondaryOtherTechnologyDetails\">\n                            <amexio-column size=\"12\">\n                                <amexio-text-input [(ngModel)]=\"internetOrder.secondaryOtherTechnologyDetails\" name=\"secondaryOtherTechnologyDetails\"\n                                field-label=\"Other Technology Details\" place-holder=\"Other Technology Details\">\n                                </amexio-text-input>\n                            </amexio-column>\n                          </amexio-row>\n                </ng-container>\n"

/***/ }),

/***/ "./src/app/components/order/mpls/mpls.order.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/order/mpls/mpls.order.component.ts ***!
  \***************************************************************/
/*! exports provided: MPLSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MPLSComponent", function() { return MPLSComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_order_mplsorder_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/order/mplsorder.model */ "./src/app/models/order/mplsorder.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MPLSComponent = /** @class */ (function () {
    function MPLSComponent() {
        this.isRoutersQty = false;
        this.isModemsQty = false;
        this.isConvertersQty = false;
        this.othersQty = false;
        this.mPLSOrder = new _models_order_mplsorder_model__WEBPACK_IMPORTED_MODULE_1__["MPLSOrder"]();
    }
    // TO AIRTEL END EQUIPMENTS
    MPLSComponent.prototype.onAirtelEndEquipmentSelection = function (data) {
        var _this = this;
        this.mPLSOrder.airtelEndEquipment = [];
        var set = new Set();
        if (data && data.length > 0) {
            data.forEach(function (obj) {
                set.add(obj.primaryKey);
            });
        }
        if (set) {
            set.forEach(function (item) {
                _this.mPLSOrder.airtelEndEquipment.push(item);
            });
            if (set.has('1')) {
                this.isRoutersQty = true;
            }
            else {
                this.isRoutersQty = false;
            }
            if (set.has('2')) {
                this.isModemsQty = true;
            }
            else {
                this.isModemsQty = false;
            }
            if (set.has('3')) {
                this.isConvertersQty = true;
            }
            else {
                this.isConvertersQty = false;
            }
            if (set.has('4')) {
                this.othersQty = true;
            }
            else {
                this.othersQty = false;
            }
        }
    };
    // PREMINUM
    MPLSComponent.prototype.onPremiumRTSelection = function (data) {
        var _this = this;
        this.mPLSOrder.customerPremiumRT = [];
        var set = new Set();
        if (data && data.length > 0) {
            data.forEach(function (obj) {
                set.add(obj.primaryKey);
            });
        }
        if (set) {
            set.forEach(function (item) {
                _this.mPLSOrder.customerPremiumRT.push(item);
            });
        }
    };
    // PremiumNRT
    MPLSComponent.prototype.onPremiumNRTSelection = function (data) {
        var _this = this;
        this.mPLSOrder.customerPremiumNRT = [];
        var set = new Set();
        if (data && data.length > 0) {
            data.forEach(function (obj) {
                set.add(obj.primaryKey);
            });
        }
        if (set) {
            set.forEach(function (item) {
                _this.mPLSOrder.customerPremiumNRT.push(item);
            });
        }
    };
    // BUSINESS
    MPLSComponent.prototype.onBusinessSelection = function (data) {
        var _this = this;
        this.mPLSOrder.customerBusiness = [];
        var set = new Set();
        if (data && data.length > 0) {
            data.forEach(function (obj) {
                set.add(obj.primaryKey);
            });
        }
        if (set) {
            set.forEach(function (item) {
                _this.mPLSOrder.customerBusiness.push(item);
            });
        }
    };
    // STANDARD
    MPLSComponent.prototype.onStandardSelection = function (data) {
        var _this = this;
        this.mPLSOrder.customerStandard = [];
        var set = new Set();
        if (data && data.length > 0) {
            data.forEach(function (obj) {
                set.add(obj.primaryKey);
            });
        }
        if (set) {
            set.forEach(function (item) {
                _this.mPLSOrder.customerStandard.push(item);
            });
        }
    };
    // SMART VC
    MPLSComponent.prototype.onSmartVCPRTSelection = function (data) {
        var _this = this;
        this.mPLSOrder.customerSmartVCPrt = [];
        var set = new Set();
        if (data && data.length > 0) {
            data.forEach(function (obj) {
                set.add(obj.primaryKey);
            });
        }
        if (set) {
            set.forEach(function (item) {
                _this.mPLSOrder.customerSmartVCPrt.push(item);
            });
        }
    };
    MPLSComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mpls-order',
            template: __webpack_require__(/*! ./mpls_order_details.component.html */ "./src/app/components/order/mpls/mpls_order_details.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MPLSComponent);
    return MPLSComponent;
}());



/***/ }),

/***/ "./src/app/components/order/mpls/mpls_order_details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/order/mpls/mpls_order_details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-row>\n\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.poNo\" name=\"poNo\" field-label=\"PO No\" place-holder=\"Enter PO No\">\n        </amexio-text-input>\n    </amexio-column>\n\n    <amexio-column size=\"6\">\n        <amexio-date-time-picker [field-label]=\"'PO Date'\" [time-picker]=\"false\" [date-picker]=\"true\" [(ngModel)]=\"mPLSOrder.poDate\">\n        </amexio-date-time-picker>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\">\n        <amexio-date-time-picker [field-label]=\"'PO RFS Date'\" [time-picker]=\"false\" [date-picker]=\"true\" [(ngModel)]=\"mPLSOrder.poRfsDate\">\n        </amexio-date-time-picker>\n    </amexio-column>\n\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.lastMileFeasibility\" [place-holder]=\"'Choose Last Mile Feasibility'\" [data-reader]=\"'data'\" [field-label]=\"'Last Mile Feasibility'\" [http-url]=\"'assets/data/order/internet/last_mile_feasibility.json'\" [http-method]=\"'get'\"\n            [display-field]=\"'primaryDisplay'\" [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n\n    <amexio-column size=\"12\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.lastMileFeasibilityRequesID\" name=\"lastMileFeasibilityRequesID\" field-label=\"Last Mile Feasibility Reques ID\" place-holder=\"Last Mile Feasibility Reques ID\">\n        </amexio-text-input>\n    </amexio-column>\n</amexio-row>\n\n\n<amexio-row>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.servicesOrdered\" [place-holder]=\"'Choose Services Ordered'\" [data-reader]=\"'data'\" [field-label]=\"'Services Ordered'\" [http-url]=\"'assets/data/order/mpls/services_ordered.json'\" [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n            [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.specifyNetworkDetails\" [place-holder]=\"'Choose Specify Network Details'\" [data-reader]=\"'data'\" [field-label]=\"'Specify Network Details'\" [http-url]=\"'assets/data/order/mpls/specify_network_details.json'\" [http-method]=\"'get'\"\n            [display-field]=\"'primaryDisplay'\" [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"12\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.managedMPLS\" [place-holder]=\"'Choose Managed MPLS'\" [data-reader]=\"'data'\" [field-label]=\"'Managed MPLS'\" [http-url]=\"'assets/data/order/mpls/managed_mpls.json'\" [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n            [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row *ngIf=\"mPLSOrder.managedMPLS == '1'\">\n    <amexio-column size=\"4\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.cEWebReporting\" [place-holder]=\"'Choose CE Web Reporting'\" [data-reader]=\"'data'\" [field-label]=\"'CE Web Reporting'\" [http-url]=\"'assets/data/order/mpls/managed_mpls.json'\" [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n            [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n    <amexio-column size=\"4\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.proactiveManagement\" [place-holder]=\"'Choose Proactive Management'\" [data-reader]=\"'data'\" [field-label]=\"'Proactive Management'\" [http-url]=\"'assets/data/order/mpls/managed_mpls.json'\" [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n            [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n    <amexio-column size=\"4\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.configurationManagement\" [place-holder]=\"'Choose Configuration Management'\" [data-reader]=\"'data'\" [field-label]=\"'Configuration Management'\" [http-url]=\"'assets/data/order/mpls/managed_mpls.json'\" [http-method]=\"'get'\"\n            [display-field]=\"'primaryDisplay'\" [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.noOfSites\" name=\"noOfSites\" field-label=\"No of Sites\" place-holder=\"No of Sites\">\n        </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-textarea-input [(ngModel)]=\"mPLSOrder.remarks\" name=\"remarks\" field-label=\"Remarks\" place-holder=\"Remarks\">\n        </amexio-textarea-input>\n    </amexio-column>\n</amexio-row>\n\n\n<amexio-row>\n    <amexio-column size=\"12\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.protocolEncapsulation\" [place-holder]=\"'Choose Protocol Encapsulation'\" [data-reader]=\"'data'\" [field-label]=\"'Protocol Encapsulation'\" [http-url]=\"'assets/data/order/mpls/protocol_encapsulation.json'\" [http-method]=\"'get'\"\n            [display-field]=\"'primaryDisplay'\" [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row *ngIf=\"mPLSOrder.protocolEncapsulation =='6'\">\n    <amexio-column size=\"12\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.otherDetailsonProtocolEncapsulation\" name=\"otherDetailsonProtocolEncapsulation\" field-label=\"Other Details On PE\" place-holder=\"Other Details On PE\">\n        </amexio-text-input>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.typeOfCoS\" [place-holder]=\"'Choose Type of CoS'\" [data-reader]=\"'data'\" [field-label]=\"'Type of CoS'\" [http-url]=\"'assets/data/order/mpls/type_of_cos.json'\" [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n            [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.typeOfOrder\" [place-holder]=\"'Choose Type of Order'\" [data-reader]=\"'data'\" [field-label]=\"'Type of Order'\" [http-url]=\"'assets/data/order/mpls/type_of_order.json'\" [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n            [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row *ngIf=\"mPLSOrder.typeOfOrder =='1' || mPLSOrder.typeOfOrder =='5'\">\n    <amexio-column size=\"12\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.circuitID\" name=\"circuitID\" field-label=\"Circuit ID\" place-holder=\"Circuit ID\">\n        </amexio-text-input>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.typeOfSite\" [place-holder]=\"'Choose Type of Site'\" [data-reader]=\"'data'\" [field-label]=\"'Type of Site'\" [http-url]=\"'assets/data/order/mpls/type_of_site.json'\" [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n            [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.accessDetailsMedia\" [place-holder]=\"'Choose Access Details Media'\" [data-reader]=\"'data'\" [field-label]=\"'Access Details Media'\" [http-url]=\"'assets/data/order/mpls/access_details_media.json'\" [http-method]=\"'get'\"\n            [display-field]=\"'primaryDisplay'\" [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.primaryAccessTechnology\" [place-holder]=\"'Choose Primary Access Technology'\" [data-reader]=\"'data'\" [field-label]=\"'Primary Access Technology'\" [http-url]=\"'assets/data/order/mpls/primary_access_technology.json'\"\n            [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\" [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n    <amexio-column size=\"6\" *ngIf=\"mPLSOrder.primaryAccessTechnology == '7'\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.otherdetailsOfPAT\" name=\"otherdetailsOfPAT\" field-label=\"Other details of PAT\" place-holder=\"Other details of PAT\">\n        </amexio-text-input>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.secondaryAccessTechnology\" [place-holder]=\"'Choose Secondary Access Technology'\" [data-reader]=\"'data'\" [field-label]=\"'Secondary Access Technology'\" [http-url]=\"'assets/data/order/mpls/primary_access_technology.json'\"\n            [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\" [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n    <amexio-column size=\"6\" *ngIf=\"mPLSOrder.secondaryAccessTechnology == '7'\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.otherdetailsOfSAT\" name=\"otherdetailsOfSAT\" field-label=\"Other details of SAT\" place-holder=\"Other details of SAT\">\n        </amexio-text-input>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"12\">\n      <amexio-dropdown [(ngModel)]=\"mPLSOrder.customerEndEquipment\" [place-holder]=\"'Choose Customer End Equipment'\" [data-reader]=\"'data'\" [field-label]=\"'Customer End Equipment'\" [http-url]=\"'assets/data/order/mpls/customer_end_equipment.json'\" [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n            [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n</amexio-row>\n<amexio-row>\n    <amexio-column size=\"6\" *ngIf=\"mPLSOrder.customerEndEquipment == '1'\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.equipmentType\" [place-holder]=\"'Choose Equipment Type'\" [data-reader]=\"'data'\" [field-label]=\"'Equipment Type'\" [http-url]=\"'assets/data/order/mpls/equipment_type.json'\" [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n            [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n</amexio-row>\n\n\n<amexio-row>\n<amexio-column size=\"12\">\n    <amexio-checkbox-group [field-label]=\"'Airtel End Equipment'\"\n    [data-reader]=\"'data'\"\n    [display-field]=\"'primaryDisplay'\"\n    [value-field]=\"'checked'\"\n    (onSelection)=\"onAirtelEndEquipmentSelection($event)\"\n    [horizontal]=\"true\"\n    [http-method]=\"'get'\"\n    [http-url]=\"'assets/data/order/mpls/airtel_end_equipment.json'\">\n    </amexio-checkbox-group>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"12\" *ngIf=\"isRoutersQty\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.routersQty\" name=\"routersQty\" field-label=\"Routers Qty\" place-holder=\"Routers Qty\">\n          </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"12\" *ngIf=\"isModemsQty\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.modemsQty\" name=\"modemsQty\" field-label=\"Modems Qty\" place-holder=\"Modems Qty\">\n          </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"12\" *ngIf=\"isConvertersQty\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.convertersQty\" name=\"convertersQty\" field-label=\"Converters Qty\" place-holder=\"Converters Qty\">\n          </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"12\" *ngIf=\"othersQty\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.othersQty\" name=\"othersQty\" field-label=\"Others Qty\" place-holder=\"Others Qty\">\n          </amexio-text-input>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\">\n      <amexio-dropdown [(ngModel)]=\"mPLSOrder.customerEndInterface\"\n      [place-holder]=\"'Choose Customer End Interface'\" [data-reader]=\"'data'\"\n      [field-label]=\"'Customer End Interface'\"\n      [http-url]=\"'assets/data/order/mpls/customer_end_interface.json'\"\n      [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n            [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n    <amexio-column size=\"6\" *ngIf=\"mPLSOrder.customerEndInterface=='5'\">\n    <amexio-text-input [(ngModel)]=\"mPLSOrder.detailsOfcei\" name=\"detailsOfcei\" field-label=\"Details of Customer End Interface\" place-holder=\"Details of Customer End Interface\">\n      </amexio-text-input>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"4\">\n      <amexio-dropdown [(ngModel)]=\"mPLSOrder.dualPOPService\"\n      [place-holder]=\"'Choose Dual POP Service'\" [data-reader]=\"'data'\"\n      [field-label]=\"'Dual POP Service'\"\n      [http-url]=\"'assets/data/order/mpls/managed_mpls.json'\"\n      [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n            [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n    <amexio-column size=\"4\" *ngIf=\"mPLSOrder.dualPOPService=='1'\">\n    <amexio-text-input [(ngModel)]=\"mPLSOrder.airtelPOP1\" name=\"airtelPOP1\" field-label=\"Airtel POP 1\" place-holder=\"Airtel POP 1\">\n      </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"4\" *ngIf=\"mPLSOrder.dualPOPService=='1'\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.airtelPOP2\" name=\"airtelPOP2\" field-label=\"Airtel POP 2\" place-holder=\"Airtel POP 2\">\n          </amexio-text-input>\n        </amexio-column>\n</amexio-row>\n\n\n<amexio-row>\n    <amexio-column size=\"6\">\n      <amexio-dropdown [(ngModel)]=\"mPLSOrder.primaryAccessServiceProvider\"\n      [place-holder]=\"'Choose Primary ASP'\" [data-reader]=\"'data'\"\n      [field-label]=\"'Primary Access Service Provider'\"\n      [http-url]=\"'assets/data/order/mpls/primary_asp.json'\"\n      [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n            [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.primaryBandwidth\" name=\"primaryBandwidth\" field-label=\"Primary Bandwidth\" place-holder=\"Primary Bandwidth\">\n          </amexio-text-input>\n        </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\">\n      <amexio-dropdown [(ngModel)]=\"mPLSOrder.primaryBandwidthUOM\"\n      [place-holder]=\"'Choose Primary Bandwidth UOM'\" [data-reader]=\"'data'\"\n      [field-label]=\"'Primary Bandwidth UOM'\"\n      [http-url]=\"'assets/data/order/mpls/uom.json'\"\n      [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n            [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.primaryAccessDistance\" name=\"primaryAccessDistance\" field-label=\"Primary Access Distance (in KM)\" place-holder=\"Primary Access Distance (in KM)\">\n          </amexio-text-input>\n        </amexio-column>\n</amexio-row>\n\n\n<amexio-row>\n    <amexio-column size=\"6\">\n      <amexio-dropdown [(ngModel)]=\"mPLSOrder.secondaryAccessServiceProvider\"\n      [place-holder]=\"'Choose Secondary ASP'\" [data-reader]=\"'data'\"\n      [field-label]=\"'Secondary Access Service Provider'\"\n      [http-url]=\"'assets/data/order/mpls/primary_asp.json'\"\n      [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n            [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.secondaryLastmileRequired\"\n        [place-holder]=\"'Choose Secondary Lastmile Required'\" [data-reader]=\"'data'\"\n        [field-label]=\"'Secondary Lastmile Required'\"\n        [http-url]=\"'assets/data/order/mpls/secondary_slr.json'\"\n        [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n        [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n          </amexio-dropdown>\n        </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.secondaryBandwidth\" name=\"secondaryBandwidth\"\n        field-label=\"Secondary Bandwidth\"\n        place-holder=\"Secondary Bandwidth\">\n          </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.secondaryBandwidthUOM\"\n        [place-holder]=\"'Choose Secondary Bandwidth UOM'\" [data-reader]=\"'data'\"\n        [field-label]=\"'Secondary Bandwidth UOM'\"\n        [http-url]=\"'assets/data/order/mpls/uom.json'\"\n        [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n        [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n          </amexio-dropdown>\n        </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.secondaryAccessDistance\" name=\"secondaryAccessDistance\"\n        field-label=\"Secondary Access Distance (in KM)\"\n        place-holder=\"Secondary Access Distance (in KM)\">\n          </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.secondLinkusedonLoadSharingbasis\"\n        [place-holder]=\"'Choose Second Link Load Sharing basis'\" [data-reader]=\"'data'\"\n        [field-label]=\"'Second Link used on Load Sharing basis'\"\n        [http-url]=\"'assets/data/order/mpls/secondary_slr.json'\"\n        [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n        [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n          </amexio-dropdown>\n        </amexio-column>\n</amexio-row>\n\n<amexio-row *ngIf=\"mPLSOrder.secondLinkusedonLoadSharingbasis == '1'\">\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.secondaryAccessDistance\" name=\"secondaryAccessDistance\"\n        field-label=\"Secondary Access Distance (in KM)\"\n        place-holder=\"Secondary Access Distance (in KM)\">\n          </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.secondLinkusedonLoadSharingbasis\"\n        [place-holder]=\"'Choose Second Link Load Sharing basis'\" [data-reader]=\"'data'\"\n        [field-label]=\"'Second Link used on Load Sharing basis'\"\n        [http-url]=\"'assets/data/order/mpls/secondary_slr.json'\"\n        [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n        [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n          </amexio-dropdown>\n        </amexio-column>\n</amexio-row>\n\n\n\n<amexio-row >\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.parallelBandwidth\" name=\"parallelBandwidth\"\n        field-label=\"Parallel Bandwidth\"\n        place-holder=\"Parallel Bandwidth\">\n          </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.parallelBandwidthUOM\"\n        [place-holder]=\"'Choose Parallel Bandwidth UOM'\" [data-reader]=\"'data'\"\n        [field-label]=\"'Second Parallel Bandwidth UOM'\"\n        [http-url]=\"'assets/data/order/mpls/uom.json'\"\n        [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n        [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n          </amexio-dropdown>\n        </amexio-column>\n</amexio-row>\n\n<amexio-row >\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.mPLSPortSize\" name=\"mPLSPortSize\"\n        field-label=\"MPLS Port Size\"\n        place-holder=\"MPLS Port Size\">\n          </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.mPLSPortSize\"\n        [place-holder]=\"'Choose MPLS Port Size UOM'\" [data-reader]=\"'data'\"\n        [field-label]=\"'Second MPLS Port Size UOM'\"\n        [http-url]=\"'assets/data/order/mpls/uom.json'\"\n        [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n        [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n          </amexio-dropdown>\n        </amexio-column>\n</amexio-row>\n\n\n<amexio-row >\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.mPLSPortSize\" name=\"mPLSPortSize\"\n        field-label=\"MPLS Port Size\"\n        place-holder=\"MPLS Port Size\">\n          </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.mPLSPortSizeUOM\"\n        [place-holder]=\"'Choose MPLS Port Size UOM'\" [data-reader]=\"'data'\"\n        [field-label]=\"'Second MPLS Port Size UOM'\"\n        [http-url]=\"'assets/data/order/mpls/uom.json'\"\n        [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n        [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n          </amexio-dropdown>\n        </amexio-column>\n</amexio-row>\n\n\n<amexio-row >\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.totalMPLSBandwith\" name=\"totalMPLSBandwith\"\n        field-label=\"Total MPLS Bandwith\"\n        place-holder=\"Total MPLS Bandwith\">\n          </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-dropdown [(ngModel)]=\"mPLSOrder.totalMPLSBandwidthUOM\"\n        [place-holder]=\"'Choose Total MPLS Bandwidth UOM'\" [data-reader]=\"'data'\"\n        [field-label]=\"'Total MPLS Bandwidth UOM'\"\n        [http-url]=\"'assets/data/order/mpls/uom.json'\"\n        [http-method]=\"'get'\" [display-field]=\"'primaryDisplay'\"\n        [search]=\"true\" [value-field]=\"'primaryKey'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n        </amexio-dropdown>\n      </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"12\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.classwiseBandwidth\" name=\"classwiseBandwidth\"\n        field-label=\"Classwise Bandwidth\" disabled=\"true\"\n        place-holder=\"Classwise Bandwidth\">\n          </amexio-text-input>\n    </amexio-column>\n</amexio-row>\n\n\n<amexio-row>\n    <amexio-column size=\"4\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.premiumRT\" name=\"premiumRT\"\n        field-label=\"Premium RT\"\n        place-holder=\"Premium RT\">\n          </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"4\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.premiumNRT\" name=\"premiumNRT\"\n        field-label=\"Premium NRT\"\n        place-holder=\"Premium NRT\">\n          </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"4\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.business\" name=\"business\"\n        field-label=\"Business\"\n        place-holder=\"Business\">\n          </amexio-text-input>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.standard\" name=\"standard\"\n        field-label=\"Standard\"\n        place-holder=\"Standard\">\n          </amexio-text-input>\n    </amexio-column>\n    <amexio-column size=\"6\">\n        <amexio-text-input [(ngModel)]=\"mPLSOrder.smartVCPRT\" name=\"smartVCPRT\"\n        field-label=\"Smart VC PRT\"\n        place-holder=\"Smart VC PRT\">\n          </amexio-text-input>\n    </amexio-column>\n\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"12\">\n        <amexio-checkbox-group [field-label]=\"'Premium RT'\"\n        [data-reader]=\"'data'\"\n        [display-field]=\"'primaryDisplay'\"\n        [value-field]=\"'checked'\"\n        (onSelection)=\"onPremiumRTSelection($event)\"\n        [horizontal]=\"true\"\n        [http-method]=\"'get'\"\n        [http-url]=\"'assets/data/order/mpls/premium_rt.json'\">\n        </amexio-checkbox-group>\n    </amexio-column>\n</amexio-row>\n<amexio-row>\n    <amexio-column size=\"12\">\n        <amexio-checkbox-group [field-label]=\"'Premium NRT'\"\n        [data-reader]=\"'data'\"\n        [display-field]=\"'primaryDisplay'\"\n        [value-field]=\"'checked'\"\n        (onSelection)=\"onPremiumNRTSelection($event)\"\n        [horizontal]=\"true\"\n        [http-method]=\"'get'\"\n        [http-url]=\"'assets/data/order/mpls/premium_rt.json'\">\n        </amexio-checkbox-group>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"12\">\n        <amexio-checkbox-group [field-label]=\"'Business'\"\n        [data-reader]=\"'data'\"\n        [display-field]=\"'primaryDisplay'\"\n        [value-field]=\"'checked'\"\n        (onSelection)=\"onBusinessSelection($event)\"\n        [horizontal]=\"true\"\n        [http-method]=\"'get'\"\n        [http-url]=\"'assets/data/order/mpls/premium_rt.json'\">\n        </amexio-checkbox-group>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"12\">\n        <amexio-checkbox-group [field-label]=\"'Standard'\"\n        [data-reader]=\"'data'\"\n        [display-field]=\"'primaryDisplay'\"\n        [value-field]=\"'checked'\"\n        (onSelection)=\"onStandardSelection($event)\"\n        [horizontal]=\"true\"\n        [http-method]=\"'get'\"\n        [http-url]=\"'assets/data/order/mpls/premium_rt.json'\">\n        </amexio-checkbox-group>\n    </amexio-column>\n</amexio-row>\n\n<amexio-row>\n    <amexio-column size=\"12\">\n        <amexio-checkbox-group [field-label]=\"'Smart VC PRT'\"\n        [data-reader]=\"'data'\"\n        [display-field]=\"'primaryDisplay'\"\n        [value-field]=\"'checked'\"\n        (onSelection)=\"onSmartVCPRTSelection($event)\"\n        [horizontal]=\"true\"\n        [http-method]=\"'get'\"\n        [http-url]=\"'assets/data/order/mpls/premium_rt.json'\">\n        </amexio-checkbox-group>\n    </amexio-column>\n</amexio-row>\n"

/***/ }),

/***/ "./src/app/components/order/order-details/order-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/order/order-details/order-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card [body-height]=\"80\"  [header]=\"true\" [footer]=\"true\">\n  <amexio-header>\n    Order Details\n  </amexio-header>\n  <amexio-body>\n    <ng-container *ngIf=\"_dataService.order.productType == '1'\">\n      <internet-order></internet-order>\n    </ng-container>\n    <ng-container  *ngIf=\"_dataService.order.productType == '2'\">\n      <mpls-order></mpls-order>\n    </ng-container>\n  </amexio-body>\n  <amexio-action>\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right >\n\n        <amexio-button [label]=\"'Proceed To Charges'\"   [tooltip]=\"'Proceed'\"  [icon]=\"'fa fa-paper-plane'\" (onClick)=\"proceedToChargesHandle()\"\n                       [type]=\"'theme-color'\"></amexio-button>\n\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action>\n</amexio-card>\n"

/***/ }),

/***/ "./src/app/components/order/order-details/order-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/order/order-details/order-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
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
 * Created by dattaram on 26/4/19.
 */




var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(_httpService, _router, _dataService) {
        this._httpService = _httpService;
        this._router = _router;
        this._dataService = _dataService;
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
    };
    OrderDetailsComponent.prototype.proceedToChargesHandle = function () {
        this._router.navigate(['home/chargecal']);
    };
    OrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'order-details',
            template: __webpack_require__(/*! ./order-details.component.html */ "./src/app/components/order/order-details/order-details.component.html")
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/search-customer/search-customer.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/search-customer/search-customer.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'center'\">\n  <amexio-layout-item [fit]=\"true\">\n    <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n      <amexio-layout-item >\n        <amexio-card [header]=\"false\"\n                     [footer]=\"true\"\n                     [footer-align]=\"'center'\">\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"12\">\n                <amexio-text-input field-label=\"Party Name\"\n                                   name=\"name\"\n                                   [(ngModel)]=\"partyName\"\n                                   place-holder=\"Enter party name\"\n                                   (input)=\"onInputHandle('P', partyName)\"\n                                   icon-feedback=\"true\"\n                                   [disabled]=\"partyflag\">\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]=\"12\">\n                <amexio-label [size]=\"'medium-bold'\">OR</amexio-label>\n              </amexio-column>\n              <amexio-column [size]=\"12\">\n                <amexio-text-input field-label=\"Account No\"\n                                   name=\"name\"\n                                   [(ngModel)]=\"accountNo\"\n                                   (input)=\"onInputHandle('A', accountNo)\"\n                                   place-holder=\"Enter account no\"\n                                   icon-feedback=\"true\"\n                                   [disabled]=\"accflag\">\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n          <amexio-action >\n            <amexio-button [label]=\"'Search Customer'\" [type]=\"'primary'\" (onClick)=\"searchHandle()\"></amexio-button>\n          </amexio-action>\n        </amexio-card>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n  </amexio-layout-item>\n</amexio-layout-columns>\n"

/***/ }),

/***/ "./src/app/components/search-customer/search-customer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/search-customer/search-customer.component.ts ***!
  \*************************************************************************/
/*! exports provided: SearchCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCustomerComponent", function() { return SearchCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_constants_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/app.constant */ "./src/app/constants/app.constant.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
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
 * Created by dattaram on 25/4/19.
 */





var SearchCustomerComponent = /** @class */ (function () {
    function SearchCustomerComponent(_httpService, _router, _dataService) {
        this._httpService = _httpService;
        this._router = _router;
        this._dataService = _dataService;
        this.partyflag = false;
        this.accflag = false;
    }
    SearchCustomerComponent.prototype.ngOnInit = function () {
    };
    SearchCustomerComponent.prototype.searchHandle = function () {
        var _this = this;
        this._dataService.showLoader = true;
        var requestJson = {
            'accountNo': '',
            'partyName': ''
        };
        if (this.accflag) {
            requestJson.accountNo = '-1';
            requestJson.partyName = this.partyName;
        }
        else {
            requestJson.partyName = '-1';
            requestJson.accountNo = this.accountNo;
        }
        var response;
        this._httpService.fetch(src_app_constants_app_constant__WEBPACK_IMPORTED_MODULE_3__["CUST_BASE_URL"] + requestJson.partyName + '/' + requestJson.accountNo, 'get').subscribe(function (res) {
            response = res;
        }, function (error) {
            _this._dataService.showLoader = false;
            console.log('error', error);
        }, function () {
            _this._dataService.showLoader = false;
            if (response.success) {
                _this._dataService.order.customerDemographics = response.response.data;
                _this._router.navigate(['home/neworder']);
            }
        });
    };
    SearchCustomerComponent.prototype.onInputHandle = function (type) {
        if (type == 'P' && this.partyName !== '') {
            this.accflag = true;
        }
        else if (type == 'A' && this.accountNo !== '') {
            this.partyflag = true;
        }
        else if (type == 'P' && this.partyName == '') {
            this.accflag = false;
        }
        else if (type == 'A' && this.accountNo == '') {
            this.partyflag = false;
        }
    };
    SearchCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-customer',
            template: __webpack_require__(/*! ./search-customer.component.html */ "./src/app/components/search-customer/search-customer.component.html")
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], SearchCustomerComponent);
    return SearchCustomerComponent;
}());



/***/ }),

/***/ "./src/app/constants/app.constant.ts":
/*!*******************************************!*\
  !*** ./src/app/constants/app.constant.ts ***!
  \*******************************************/
/*! exports provided: SERVICE_URL, AUTH_URL, CUST_BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_URL", function() { return SERVICE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_URL", function() { return AUTH_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUST_BASE_URL", function() { return CUST_BASE_URL; });
/**
 * Created by dattaram on 25/4/19.
 */
var BASE_URL = '';
var SERVICE_URL = {};
var AUTH_URL = 'https://restapi.amexio.org:9890/rinashell/auth/validate';
var CUST_BASE_URL = 'https://restapi.amexio.org:9890/rinashell/customer/sdpprofile/105/';


/***/ }),

/***/ "./src/app/models/charges/commancharges.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/models/charges/commancharges.model.ts ***!
  \*******************************************************/
/*! exports provided: CommanChargesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommanChargesModel", function() { return CommanChargesModel; });
var CommanChargesModel = /** @class */ (function () {
    function CommanChargesModel() {
        this.totalOrderValue = "";
        this.currency = "";
        this.currencyDetails = "";
        this.billingCycle = "";
        this.taxation = "";
        this.standardReason = "";
        this.noticePeriod = "";
        this.Comments = "";
    }
    return CommanChargesModel;
}());



/***/ }),

/***/ "./src/app/models/charges/internetcharges.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/models/charges/internetcharges.model.ts ***!
  \*********************************************************/
/*! exports provided: InternetChargesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetChargesModel", function() { return InternetChargesModel; });
var InternetChargesModel = /** @class */ (function () {
    function InternetChargesModel() {
        this.internetBWOTC = null;
        this.internetARC = null;
        this.internetBWOT = null;
        this.portChargesOTC = null;
        this.portChargesARC = null;
        this.portChargesOT = null;
        this.offPeakHoursBWOTC = null;
        this.offPeakHoursBWARC = null;
        this.offPeakHoursBWOT = null;
        this.primaryLastMileOTC = null;
        this.primaryLastMileARC = null;
        this.primaryLastMileOT = null;
        this.secondaryLastMileOTC = null;
        this.secondaryLastMileARC = null;
        this.secondaryLastMileOT = null;
        this.dDoSOTC = null;
        this.dDoSARC = null;
        this.dDoSOT = null;
        this.routerOTC = null;
        this.routerARC = null;
        this.routerOT = null;
        this.modemOTC = null;
        this.modemARC = null;
        this.modemOT = null;
        this.converterOTC = null;
        this.converterARC = null;
        this.converterOT = null;
        this.dDosCpeOTC = null;
        this.dDosCpeARC = null;
        this.dDosCpeOT = null;
        this.otherHardwareOTC = null;
        this.otherHardwareARC = null;
        this.otherHardwareOT = null;
        this.hardwareAMCOTC = null;
        this.hardwareAMCARC = null;
        this.hardwareAMCOT = null;
        this.linkMgmtChargesOTC = null;
        this.linkMgmtChargesARC = null;
        this.linkMgmtChargesOT = null;
        this.managedSerivcesOTC = null;
        this.managedSerivcesARC = null;
        this.managedSerivcesOT = null;
        this.otherChargesOTC = null;
        this.otherChargesARC = null;
        this.otherChargesOT = null;
        this.minCommittedBWMRC = "";
        this.minCommittedBWARC = "";
        this.burstBWMRC = "";
        this.burstBWARC = "";
        this.volumeCharges = "";
        this.burstCharges = "";
    }
    Object.defineProperty(InternetChargesModel.prototype, "_internetBW", {
        get: function () {
            return this.calculateIntenetCharges(this.internetBWOTC, this.internetARC, this.internetBWOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetChargesModel.prototype, "_portCharges", {
        get: function () {
            return this.calculateIntenetCharges(this.portChargesOTC, this.portChargesARC, this.portChargesOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetChargesModel.prototype, "_offPeakHoursBW", {
        get: function () {
            return this.calculateIntenetCharges(this.offPeakHoursBWOTC, this.offPeakHoursBWARC, this.offPeakHoursBWOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetChargesModel.prototype, "_primaryLastMile", {
        get: function () {
            return this.calculateIntenetCharges(this.primaryLastMileOTC, this.primaryLastMileARC, this.primaryLastMileOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetChargesModel.prototype, "_secondaryLastMile", {
        get: function () {
            return this.calculateIntenetCharges(this.secondaryLastMileOTC, this.secondaryLastMileARC, this.secondaryLastMileOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetChargesModel.prototype, "_dDoS", {
        get: function () {
            return this.calculateIntenetCharges(this.dDoSOTC, this.dDoSARC, this.dDoSOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetChargesModel.prototype, "_router", {
        get: function () {
            return this.calculateIntenetCharges(this.routerOTC, this.routerARC, this.routerOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetChargesModel.prototype, "_modem", {
        get: function () {
            return this.calculateIntenetCharges(this.modemOTC, this.modemARC, this.modemOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetChargesModel.prototype, "_converter", {
        get: function () {
            return this.calculateIntenetCharges(this.converterOTC, this.converterARC, this.converterOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetChargesModel.prototype, "_dDosCpe", {
        get: function () {
            return this.calculateIntenetCharges(this.dDosCpeOTC, this.dDosCpeARC, this.dDosCpeOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetChargesModel.prototype, "_otherHardware", {
        get: function () {
            return this.calculateIntenetCharges(this.otherHardwareOTC, this.otherHardwareARC, this.otherHardwareOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetChargesModel.prototype, "_hardwareAMC", {
        get: function () {
            return this.calculateIntenetCharges(this.hardwareAMCOTC, this.hardwareAMCARC, this.hardwareAMCOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetChargesModel.prototype, "_linkMgmtCharges", {
        get: function () {
            return this.calculateIntenetCharges(this.linkMgmtChargesOTC, this.linkMgmtChargesARC, this.linkMgmtChargesOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetChargesModel.prototype, "_managedSerivces", {
        get: function () {
            return this.calculateIntenetCharges(this.managedSerivcesOTC, this.managedSerivcesARC, this.managedSerivcesOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetChargesModel.prototype, "_otherCharges", {
        get: function () {
            return this.calculateIntenetCharges(this.otherChargesOTC, this.otherChargesARC, this.otherChargesOT);
        },
        enumerable: true,
        configurable: true
    });
    InternetChargesModel.prototype.calculateIntenetCharges = function (a, b, c) {
        return a + (b * c);
    };
    return InternetChargesModel;
}());



/***/ }),

/***/ "./src/app/models/charges/mplscharges.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/charges/mplscharges.model.ts ***!
  \*****************************************************/
/*! exports provided: MplsChargesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MplsChargesModel", function() { return MplsChargesModel; });
var MplsChargesModel = /** @class */ (function () {
    function MplsChargesModel() {
        this.installationCommissioningOTC = null;
        this.installationCommissioningARC = null;
        this.installationCommissioningOT = null;
        this.primaryMPLSBandwidthOTC = null;
        this.primaryMPLSBandwidthARC = null;
        this.primaryMPLSBandwidthOT = null;
        this.secondaryMPLSBandwidthOTC = null;
        this.secondaryMPLSBandwidthARC = null;
        this.secondaryMPLSBandwidthOT = null;
        this.lastMileBandwidthOTC = null;
        this.lastMileBandwidthARC = null;
        this.lastMileBandwidthOT = null;
        this.secondaryLastMileOTC = null;
        this.secondaryLastMileARC = null;
        this.secondaryLastMileOT = null;
        this.routerOTC = null;
        this.routerARC = null;
        this.routerOT = null;
        this.modemOTC = null;
        this.modemARC = null;
        this.modemOT = null;
        this.othersOTC = null;
        this.othersARC = null;
        this.othersOT = null;
        this.managedSerivcesOTC = null;
        this.managedSerivcesARC = null;
        this.managedSerivcesOT = null;
        this.otherChargesOTC = null;
        this.otherChargesARC = null;
        this.otherChargesOT = null;
    }
    Object.defineProperty(MplsChargesModel.prototype, "_installationCommissioning", {
        get: function () {
            return this.calculateMlpsCharges(this.installationCommissioningOTC, this.installationCommissioningARC, this.installationCommissioningOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MplsChargesModel.prototype, "_primaryMPLSBandwidth", {
        get: function () {
            return this.calculateMlpsCharges(this.primaryMPLSBandwidthOTC, this.primaryMPLSBandwidthARC, this.primaryMPLSBandwidthOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MplsChargesModel.prototype, "_secondaryMPLSBandwidth", {
        get: function () {
            return this.calculateMlpsCharges(this.secondaryMPLSBandwidthOTC, this.secondaryMPLSBandwidthARC, this.secondaryMPLSBandwidthOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MplsChargesModel.prototype, "_lastMileBandwidth", {
        get: function () {
            return this.calculateMlpsCharges(this.lastMileBandwidthOTC, this.lastMileBandwidthARC, this.lastMileBandwidthOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MplsChargesModel.prototype, "_secondaryLastMile", {
        get: function () {
            return this.calculateMlpsCharges(this.secondaryLastMileOTC, this.secondaryLastMileARC, this.secondaryLastMileOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MplsChargesModel.prototype, "_router", {
        get: function () {
            return this.calculateMlpsCharges(this.routerOTC, this.routerARC, this.routerOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MplsChargesModel.prototype, "_modem", {
        get: function () {
            return this.calculateMlpsCharges(this.modemOTC, this.modemARC, this.modemOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MplsChargesModel.prototype, "_others", {
        get: function () {
            return this.calculateMlpsCharges(this.othersOTC, this.othersARC, this.othersOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MplsChargesModel.prototype, "_managedSerivces", {
        get: function () {
            return this.calculateMlpsCharges(this.managedSerivcesOTC, this.managedSerivcesARC, this.managedSerivcesOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MplsChargesModel.prototype, "_otherCharges", {
        get: function () {
            return this.calculateMlpsCharges(this.otherChargesOTC, this.otherChargesARC, this.otherChargesOT);
        },
        enumerable: true,
        configurable: true
    });
    MplsChargesModel.prototype.calculateMlpsCharges = function (a, b, c) {
        return a + (b * c);
    };
    return MplsChargesModel;
}());



/***/ }),

/***/ "./src/app/models/charges/nldandlocalloop.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/models/charges/nldandlocalloop.model.ts ***!
  \*********************************************************/
/*! exports provided: NldAndLocalLoopModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NldAndLocalLoopModel", function() { return NldAndLocalLoopModel; });
var NldAndLocalLoopModel = /** @class */ (function () {
    function NldAndLocalLoopModel() {
        this.nLDLocalLoopBandwidthOTC = null;
        this.nLDLocalLoopBandwidthARC = null;
        this.nLDLocalLoopBandwidthOT = null;
        this.modemConvertorOTC = null;
        this.modemConvertorARC = null;
        this.modemConvertorOT = null;
        this.routerOTC = null;
        this.routerARC = null;
        this.routerOT = null;
        this.otherHardwareOTC = null;
        this.otherHardwareARC = null;
        this.otherHardwareOT = null;
        this.fibreExtensionChargesOTC = null;
        this.fibreExtensionChargesARC = null;
        this.fibreExtensionChargesOT = null;
        this.installationChargesOTC = null;
        this.installationChargesARC = null;
        this.installationChargesOT = null;
        this.otherChargesOTC = null;
        this.otherChargesARC = null;
        this.otherChargesOT = null;
    }
    Object.defineProperty(NldAndLocalLoopModel.prototype, "_nLDLocalLoopBandwidth", {
        get: function () {
            return this.calculateNldAndLocalLoopCharges(this.nLDLocalLoopBandwidthOTC, this.nLDLocalLoopBandwidthARC, this.nLDLocalLoopBandwidthOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NldAndLocalLoopModel.prototype, "_modemConvertor", {
        get: function () {
            return this.calculateNldAndLocalLoopCharges(this.modemConvertorOTC, this.modemConvertorARC, this.modemConvertorOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NldAndLocalLoopModel.prototype, "_router", {
        get: function () {
            return this.calculateNldAndLocalLoopCharges(this.routerOTC, this.routerARC, this.routerOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NldAndLocalLoopModel.prototype, "_otherHardware", {
        get: function () {
            return this.calculateNldAndLocalLoopCharges(this.otherHardwareOTC, this.otherHardwareARC, this.otherHardwareOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NldAndLocalLoopModel.prototype, "_fibreExtensionCharges", {
        get: function () {
            return this.calculateNldAndLocalLoopCharges(this.fibreExtensionChargesOTC, this.fibreExtensionChargesARC, this.fibreExtensionChargesOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NldAndLocalLoopModel.prototype, "_installationCharges", {
        get: function () {
            return this.calculateNldAndLocalLoopCharges(this.installationChargesOTC, this.installationChargesARC, this.installationChargesOT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NldAndLocalLoopModel.prototype, "_otherCharges", {
        get: function () {
            return this.calculateNldAndLocalLoopCharges(this.otherChargesOTC, this.otherChargesARC, this.otherChargesOT);
        },
        enumerable: true,
        configurable: true
    });
    NldAndLocalLoopModel.prototype.calculateNldAndLocalLoopCharges = function (a, b, c) {
        return a + (b * c);
    };
    return NldAndLocalLoopModel;
}());



/***/ }),

/***/ "./src/app/models/contactdetails.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/contactdetails.model.ts ***!
  \************************************************/
/*! exports provided: ContactDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsModel", function() { return ContactDetailsModel; });
var ContactDetailsModel = /** @class */ (function () {
    function ContactDetailsModel() {
        this.addressType = "";
        this.contactType = "";
        this.salutation = "";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.cellNo = "";
        this.fax = "";
        this.address1 = "";
        this.address2 = "";
        this.address3 = "";
        this.cityName = "";
        this.pin = "";
        this.countryName = "";
    }
    return ContactDetailsModel;
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
        this.userId = 'asdpadmin';
        this.password = 'asdpadmin';
    }
    return LoginModel;
}());



/***/ }),

/***/ "./src/app/models/order.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/order.model.ts ***!
  \***************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/**
 * Created by dattaram on 25/4/19.
 */
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/models/order/common.order.model.ts":
/*!****************************************************!*\
  !*** ./src/app/models/order/common.order.model.ts ***!
  \****************************************************/
/*! exports provided: CommonOrderModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonOrderModel", function() { return CommonOrderModel; });
var CommonOrderModel = /** @class */ (function () {
    function CommonOrderModel() {
    }
    return CommonOrderModel;
}());



/***/ }),

/***/ "./src/app/models/order/internetorder.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/order/internetorder.model.ts ***!
  \*****************************************************/
/*! exports provided: InternetOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetOrder", function() { return InternetOrder; });
/* harmony import */ var _common_order_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.order.model */ "./src/app/models/order/common.order.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var InternetOrder = /** @class */ (function (_super) {
    __extends(InternetOrder, _super);
    function InternetOrder() {
        var _this = _super.call(this) || this;
        _this.customerInterface = [];
        _this.cPEType = [];
        _this.primaryTechnology = [];
        _this.secondaryTechnology = [];
        return _this;
    }
    return InternetOrder;
}(_common_order_model__WEBPACK_IMPORTED_MODULE_0__["CommonOrderModel"]));



/***/ }),

/***/ "./src/app/models/order/mplsorder.model.ts":
/*!*************************************************!*\
  !*** ./src/app/models/order/mplsorder.model.ts ***!
  \*************************************************/
/*! exports provided: MPLSOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MPLSOrder", function() { return MPLSOrder; });
/* harmony import */ var _common_order_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.order.model */ "./src/app/models/order/common.order.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MPLSOrder = /** @class */ (function (_super) {
    __extends(MPLSOrder, _super);
    function MPLSOrder() {
        var _this = _super.call(this) || this;
        _this.classwiseBandwidth = '100%';
        _this.airtelEndEquipment = [];
        _this.customerPremiumRT = [];
        _this.customerPremiumNRT = [];
        _this.customerBusiness = [];
        _this.customerStandard = [];
        _this.customerSmartVCPrt = [];
        return _this;
    }
    return MPLSOrder;
}(_common_order_model__WEBPACK_IMPORTED_MODULE_0__["CommonOrderModel"]));



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/order.model */ "./src/app/models/order.model.ts");
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
 * Created by dattaram on 25/4/19.
 */


var DataService = /** @class */ (function () {
    function DataService() {
        this.showLoader = false;
        this.order = new _models_order_model__WEBPACK_IMPORTED_MODULE_1__["Order"]();
    }
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.fetch = function (serviceUrl, methodType) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json;charset=UTF-8').append('tokenid', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJtdGVpZFwiOlwibXRlaWRcIixcInVzZXJJZFwiOlwidXNlcklkXCIsXCJhcHBTZXNzaW9uSWRcIjpcImFwcFNlc3Npb25JZFwiLFwicHJvamVjdElkXCI6XCJwcm9qZWN0SWRcIixcInByb2plY3RWZXJzaW9uSWRcIjpcInByb2plY3RWZXJzaW9uSWRcIn0iLCJleHAiOjE1NjMzMzk4ODl9.ao9jUzKAdNfFtNic5SS9xCWlwN84zvDojPZWvUFFN35iEpQXHv32c6tYFpobqU2ElW0Pcy5UZ8Jf48TtfRU1nQ');
        if (methodType === 'post') {
            return this.http.post(serviceUrl, methodType);
        }
        else if (methodType === 'get') {
            return this.http.get(serviceUrl, { headers: headers });
        }
    };
    HttpService.prototype.post = function (serviceUrl, methodType, requestJson) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json;charset=UTF-8').append('tokenid', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJtdGVpZFwiOlwibXRlaWRcIixcInVzZXJJZFwiOlwidXNlcklkXCIsXCJhcHBTZXNzaW9uSWRcIjpcImFwcFNlc3Npb25JZFwiLFwicHJvamVjdElkXCI6XCJwcm9qZWN0SWRcIixcInByb2plY3RWZXJzaW9uSWRcIjpcInByb2plY3RWZXJzaW9uSWRcIn0iLCJleHAiOjE1NjMzMzk4ODl9.ao9jUzKAdNfFtNic5SS9xCWlwN84zvDojPZWvUFFN35iEpQXHv32c6tYFpobqU2ElW0Pcy5UZ8Jf48TtfRU1nQ');
        if (methodType === 'post') {
            return this.http.post(serviceUrl, requestJson, { headers: headers });
        }
        else if (methodType === 'get') {
            return this.http.get(serviceUrl);
        }
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
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

module.exports = __webpack_require__(/*! /home/deepali/Docker-Containers/POC_RINA/Airtel-PWA-POC/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map