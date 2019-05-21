(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-navigation-navigation-module"],{

/***/ "./src/app/pages/navigation/navigation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/navigation/navigation.component.ts ***!
  \**********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navigation',
            template: __webpack_require__(/*! ./navigation.html */ "./src/app/pages/navigation/navigation.html")
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/pages/navigation/navigation.html":
/*!**************************************************!*\
  !*** ./src/app/pages/navigation/navigation.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-tab-view  [closable]=\"false\">\n    <amexio-tab [title]=\"'Top Menu'\"[icon]=\"'fa fa-bars'\"  [active]=\"true\" >\n       <amexio-card [header]=\"true\">\n  <amexio-header>Top Menu</amexio-header>\n  <amexio-body>\n    <amexio-menu\n       [http-url]=\"'assets/data/menus/hometopmenu.json'\"\n       [http-method]=\"'get'\"\n       [data-reader]=\"'data'\" >\n  </amexio-menu>\n\n</amexio-body>\n</amexio-card>\n\n</amexio-tab>\n<amexio-tab [title]=\"'Side Menu'\" [icon]=\"'fa fa-building'\">\n\n<amexio-card [header]=\"true\">\n  <amexio-header>Side Menu</amexio-header>\n  <amexio-body>\n<amexio-row>\n    <amexio-column [size]=\"4\">\n\n      <amexio-side-nav\n       [http-url]=\"'assets/data/menus/hometopmenu.json'\"\n       [http-method]=\"'get'\" [position]=\"'relative'\"\n        [width] =\"200\">\n\n  </amexio-side-nav>\n\n    </amexio-column>\n  </amexio-row>\n</amexio-body>\n</amexio-card>\n\n</amexio-tab>\n<amexio-tab [title]=\"'Dockbar'\" [icon]=\"'fa fa-cube'\">\n\n<amexio-card [header]=\"true\">\n  <amexio-header>Dockbar</amexio-header>\n  <amexio-body>\n  <amexio-row>\n    <amexio-column [size]=\"12\">\n      <amexio-dockbar [height]=\"'300px'\">\n          <amexio-dockbar-item [icon]=\"'fa fa-star'\"\n                [title]=\"'Dockbar-I'\"\n                [width]=\"'250px'\"  [height]=\"'295px'\">\n            Dockbar-I\n          </amexio-dockbar-item>\n          <amexio-dockbar-item [icon]=\"'fa fa-cube'\"\n                    [title]=\"'Dockbar-II'\"\n                    [width]=\"'250px'\" [height]=\"'295px'\">\n            Dockbar-II\n          </amexio-dockbar-item>\n          <amexio-dockbar-item [icon]=\"'fa fa-bug'\"\n                      [title]=\"'Dockbar-III'\"\n                      [width]=\"'250px'\" [height]=\"'295px'\">\n            Dockbar-III\n          </amexio-dockbar-item>\n      </amexio-dockbar>\n    </amexio-column>\n</amexio-row>\n</amexio-body>\n</amexio-card>\n</amexio-tab>\n"

/***/ }),

/***/ "./src/app/pages/navigation/navigation.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/navigation/navigation.module.ts ***!
  \*******************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation.component */ "./src/app/pages/navigation/navigation.component.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by sagar on 2/8/17.
 */






var routes = [
    { path: '', component: _navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"] }
];
var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioFormsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioNavModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDataModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioLayoutModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioPaneModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]
            ],
            providers: []
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-navigation-navigation-module.js.map