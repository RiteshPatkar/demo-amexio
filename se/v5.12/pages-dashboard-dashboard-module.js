(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card [header]=\"true\">\n  <amexio-header>\n    Datapoints\n  </amexio-header>\n  <amexio-body>\n    <amexio-row>\n<amexio-column [size]=\"4\">\n      <amexio-datapoints [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\">\n        <amexio-west [content-align]=\"'center'\" [width]=\"'100px'\">\n          <i class=\"fa fa-line-chart fa-3x\"></i>\n        </amexio-west>\n        <amexio-center [content-align]=\"'right'\">\n          <amexio-datapoints [north]=\"true\" [center]=\"true\" [south]=\"true\">\n            <amexio-north >\n              <span>200 Million</span>\n            </amexio-north>\n            <amexio-center >\n              <span>Sales Volume</span>\n            </amexio-center>\n          </amexio-datapoints>\n        </amexio-center>\n        <amexio-south [content-align]=\"'center'\"  >10% More than last year</amexio-south>\n      </amexio-datapoints>\n    </amexio-column>\n  <amexio-column [size]=\"4\">\n      <amexio-datapoints [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\" >\n        <amexio-west [content-align]=\"'center'\" [width]=\"'100px'\" >\n          <amexio-image [icon-class]=\"'fa fa-line-chart fa-3x'\"></amexio-image>\n        </amexio-west>\n        <amexio-center [content-align]=\"'right'\">\n          <amexio-datapoints [north]=\"true\" [center]=\"true\" [south]=\"true\">\n            <amexio-north >\n              <span>$10 Million</span>\n            </amexio-north>\n            <amexio-center>\n              <span>Sales Revenue</span>\n            </amexio-center>\n          </amexio-datapoints>\n        </amexio-center>\n        <amexio-south [content-align]=\"'center'\">5% more than last year</amexio-south>\n      </amexio-datapoints>\n    </amexio-column>\n    <amexio-column [size]=\"4\">\n      <amexio-datapoints [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\">\n        <amexio-west [content-align]=\"'center'\" [width]=\"'100px'\" >\n          <i class=\"fa fa-line-chart fa-3x\"></i>\n        </amexio-west>\n        <amexio-center [content-align]=\"'right'\" >\n          <amexio-datapoints [north]=\"true\" [center]=\"true\" [south]=\"true\">\n            <amexio-north>\n              <span>$2 Million</span>\n            </amexio-north>\n            <amexio-center>\n              <span >Profit</span>\n            </amexio-center>\n          </amexio-datapoints>\n        </amexio-center>\n        <amexio-south [content-align]=\"'center'\" >10% more than last year</amexio-south>\n      </amexio-datapoints>\n    </amexio-column>\n  </amexio-row>\n    </amexio-body>\n    </amexio-card>\n\n  <amexio-card [footer]=\"false\" [header]=\"true\">\n    <!-- <amexio-row>\n    <amexio-column [size]=\"6\"> -->\n    <amexio-header>Computational resources</amexio-header>\n    <amexio-body>\n      <amexio-dashboard-gauge [height]=\"'300px'\" [width]=\"'100%'\" [data]=\"gaugeData\" [red-color-from]=\"90\" [red-color-to]=\"100\" [yellow-color-from]=\"75\"\n                          [yellow-color-to]=\"90\" [scale-value]=\"5\"></amexio-dashboard-gauge>\n    </amexio-body>\n  <!-- </amexio-column>\n  </amexio-row> -->\n  </amexio-card>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Created by ketangote on 1/10/18.
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.gaugeData = [
            ['Label', 'Value'],
            ['Memory', 80],
            ['CPU', 55],
            ['Network', 68],
            ['Main Memory', 88]
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard-home',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
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
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDashBoardModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["ChartLoaderService"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["DashboardLoaderService"]],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module.js.map