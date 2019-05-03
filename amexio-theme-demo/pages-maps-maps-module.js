(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maps-maps-module"],{

/***/ "./src/app/pages/maps/maps.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/maps/maps.component.ts ***!
  \**********************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Created by sagar on 2/8/17.
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

var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
        this.geoChartData = [
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 550],
            ['RU', 350],
            ['India', 700]
        ];
        this.treeMapData = [
            ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
            ['Global', null, 0, 0],
            ['America', 'Global', 0, 0],
            ['Europe', 'Global', 0, 0],
            ['Asia', 'Global', 0, 0],
            ['Australia', 'Global', 0, 0],
            ['Africa', 'Global', 0, 0],
            ['Brazil', 'America', 11, 10],
            ['USA', 'America', 52, 31],
            ['Mexico', 'America', 24, 12],
            ['Canada', 'America', 16, -23],
            ['France', 'Europe', 42, -11],
            ['Germany', 'Europe', 31, -2],
            ['Sweden', 'Europe', 22, -13],
            ['Italy', 'Europe', 17, 4],
            ['UK', 'Europe', 21, -5],
            ['China', 'Asia', 36, 4],
            ['Japan', 'Asia', 20, -12],
            ['India', 'Asia', 40, 63],
            ['Laos', 'Asia', 4, 34],
            ['Mongolia', 'Asia', 1, -5],
            ['Israel', 'Asia', 12, 24],
            ['Iran', 'Asia', 18, 13],
            ['Pakistan', 'Asia', 11, -52],
            ['Egypt', 'Africa', 21, 0],
            ['S. Africa', 'Africa', 30, 43],
            ['Sudan', 'Africa', 12, 2],
            ['Congo', 'Africa', 10, 12],
            ['Zaire', 'Africa', 8, 10]
        ];
    }
    MapsComponent.prototype.ngOnInit = function () { };
    MapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'maps',
            template: __webpack_require__(/*! ./maps.html */ "./src/app/pages/maps/maps.html")
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/pages/maps/maps.html":
/*!**************************************!*\
  !*** ./src/app/pages/maps/maps.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-row>\n<amexio-column [size]=\"12\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Region Geo-Charts</amexio-header>\n      <amexio-body>\n        <amexio-map-geo-chart [height]=\"'500px'\" [width]=\"'100%'\" [data]=\"geoChartData\">\n        </amexio-map-geo-chart>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n\n<amexio-row>\n  <amexio-column [size]=\"12\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Treemaps</amexio-header>\n      <amexio-body>\n        <amexio-map-treemap [height]=\"'500px'\" [width]=\"'100%'\" [data]=\"treeMapData\"\n                            [max-color]=\"'#0d0'\" [mid-color]=\"'#ddd'\" [min-color]=\"'#f00'\" [max-post-depth]=\"2\" [show-scale]=\"true\">\n        </amexio-map-treemap>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n"

/***/ }),

/***/ "./src/app/pages/maps/maps.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/maps/maps.module.ts ***!
  \*******************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _maps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maps.component */ "./src/app/pages/maps/maps.component.ts");
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
    { path: '', component: _maps_component__WEBPACK_IMPORTED_MODULE_4__["MapsComponent"] }
];
var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioMapModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _maps_component__WEBPACK_IMPORTED_MODULE_4__["MapsComponent"]
            ],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["MapLoaderService"]]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-maps-maps-module.js.map