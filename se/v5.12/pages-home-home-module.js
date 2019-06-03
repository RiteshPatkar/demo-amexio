(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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
 * Created by sagar on 2/8/17.
 */

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.smallScreen = false;
        this.timelineData = [
            [{ "datatype": 'string', "label": 'Prime Minister' },
                { "datatype": "date", "label": 'Start' },
                { "datatype": "date", "label": "End" }
            ],
            ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
            ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
            ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)]
        ];
        this.barStackData = [
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350]
        ];
        this.lineData = [
            [{ "datatype": "number", "label": 'Day' }, { "datatype": "number", "label": 'Guardians of the Galaxy' },
                { "datatype": "number", "label": 'The Avengers' }, { "datatype": "number", "label": 'Transformers: Age of Extinction' }
            ],
            [1, 37.8, 80.8, 41.8],
            [2, 30.9, 69.5, 32.4],
            [3, 25.4, 57, 25.7],
            [4, 11.7, 18.8, 10.5],
            [5, 11.9, 17.6, 10.4],
            [6, 8.8, 13.6, 7.7],
            [7, 7.6, 12.3, 9.6],
            [8, 12.3, 29.2, 10.6],
            [9, 16.9, 42.9, 14.8],
            [10, 12.8, 30.9, 11.6],
            [11, 5.3, 7.9, 4.7],
            [12, 6.6, 8.4, 5.2],
            [13, 4.8, 6.3, 3.6],
            [14, 4.2, 6.2, 3.4]
        ];
        this.columnStackData = [
            [{ "datatype": 'timeofday', "label": 'Time of Day' },
                { "datatype": "number", "label": 'Motivation Level' },
                { "datatype": "number", "label": "Energy Level" }
            ],
            [{ v: [8, 0, 0], f: '8 am' }, 1, .25],
            [{ v: [9, 0, 0], f: '9 am' }, 2, .5],
            [{ v: [10, 0, 0], f: '10 am' }, 3, 1],
            [{ v: [11, 0, 0], f: '11 am' }, 4, 2.25],
            [{ v: [12, 0, 0], f: '12 pm' }, 5, 2.25],
            [{ v: [13, 0, 0], f: '1 pm' }, 6, 3],
            [{ v: [14, 0, 0], f: '2 pm' }, 7, 4],
            [{ v: [15, 0, 0], f: '3 pm' }, 8, 5.25],
            [{ v: [16, 0, 0], f: '4 pm' }, 9, 7.5],
            [{ v: [17, 0, 0], f: '5 pm' }, 10, 10],
        ];
        this.donutData = [
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
        ];
        this.areaData = [
            ['Year', 'Sales', 'Expenses'],
            ['2013', 1000, 400],
            ['2014', 1170, 460],
            ['2015', 660, 1120],
            ['2016', 1030, 540]
        ];
        this.gaugeData = [
            ['Label', 'Value'],
            ['Memory', 80],
            ['CPU', 55]
        ];
        this.pieChartData = [
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
        ];
        this.openIssuedata = {
            response: {
                data: [{
                        issueId: 1,
                        issueName: 'Bug with .share operator?',
                        checked: false
                    }, {
                        issueId: 2,
                        issueName: "e.preventDefault broken in ie8",
                        checked: false
                    }, {
                        issueId: 1,
                        issueName: 'Third groupBy argument (key serializer) ignored',
                        checked: false
                    }
                ]
            }
        };
    }
    HomeComponent.prototype.onRowSelect = function (event) {
    };
    HomeComponent.prototype.onRowClick = function (event) {
    };
    HomeComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 768) {
            this.smallScreen = true;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.html */ "./src/app/pages/home/home.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.html":
/*!**************************************!*\
  !*** ./src/app/pages/home/home.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-row>\n<amexio-column [size]=\"4\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\" >\n      <amexio-west [content-align]=\"'center'\">\n        <amexio-image [icon-class]=\"'fa fa-line-chart fa-3x'\">\n        </amexio-image>\n      </amexio-west>\n      <amexio-center [content-align]=\"'center'\">\n        <amexio-label size=\"large-bold\">200 Million</amexio-label><br/>\n        <amexio-label size=\"medium\">Sales Volume</amexio-label>\n      </amexio-center>\n      <amexio-south [content-align]=\"'center'\">\n        <amexio-label>10% More than last year</amexio-label>\n      </amexio-south>\n    </amexio-datapoints>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\" >\n      <amexio-west [content-align]=\"'center'\">\n        <amexio-image [icon-class]=\"'fa fa-line-chart fa-3x'\">\n        </amexio-image>\n      </amexio-west>\n      <amexio-center [content-align]=\"'center'\">\n            <amexio-label size=\"large-bold\">$20 Million</amexio-label><br/>\n        <amexio-label size=\"medium\">Sales Revenue</amexio-label>\n      </amexio-center>\n      <amexio-south [content-align]=\"'center'\">\n        <amexio-label>15% More than last year</amexio-label>\n      </amexio-south>\n    </amexio-datapoints>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\"  >\n      <amexio-west [content-align]=\"'center'\">\n        <amexio-image [icon-class]=\"'fa fa-line-chart fa-3x'\">\n        </amexio-image>\n      </amexio-west>\n      <amexio-center [content-align]=\"'center'\">\n        <amexio-label size=\"large-bold\">$20 Million</amexio-label><br/>\n        <amexio-label size=\"medium\">Profit</amexio-label>\n      </amexio-center>\n      <amexio-south [content-align]=\"'center'\" >\n       <amexio-label>10% More than last year</amexio-label>\n      </amexio-south>\n    </amexio-datapoints>\n  </amexio-column>\n</amexio-row>\n<amexio-row>\n  <amexio-column [size]=\"6\">\n  <amexio-card [footer]=\"false\" [header]=\"true\">\n    <amexio-header>\n      Motivation and Energy Level\n    </amexio-header>\n    <amexio-body>\n      <amexio-chart-column [data]=\"columnStackData\" [stacked]=\"true\" >\n        <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n      </amexio-chart-column>\n    </amexio-body>\n  </amexio-card>\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>\n        Company Performance\n      </amexio-header>\n      <amexio-body>\n    <amexio-chart-bar [data]=\"barStackData\" [stacked]=\"true\" >\n      <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n    </amexio-chart-bar>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n\n<amexio-row>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>\n        My Daily Activities\n      </amexio-header>\n      <amexio-body>\n    <amexio-chart-donut [data]=\"donutData\">\n      <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n    </amexio-chart-donut>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>\n        Company Performance\n      </amexio-header>\n      <amexio-body>\n    <amexio-chart-area [data]=\"areaData\">\n      <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n    </amexio-chart-area>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n\n</amexio-row>\n\n<amexio-row>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Box Office Earnings - First 2 Weeks</amexio-header>\n      <amexio-body>\n        <amexio-chart-line [data]=\"lineData\">\n          <amexio-chart-legend [position]=\"'top'\"></amexio-chart-legend>\n        </amexio-chart-line>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Daily Activities</amexio-header>\n      <amexio-body>\n        <amexio-chart-pie [data]=\"pieChartData\" [is3d]=\"true\">\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-pie>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
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
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioChartsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDashBoardModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["ChartLoaderService"]],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map