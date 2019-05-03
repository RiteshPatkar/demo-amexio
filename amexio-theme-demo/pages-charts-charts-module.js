(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-charts-charts-module"],{

/***/ "./src/app/pages/charts/charts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/charts/charts.component.ts ***!
  \**************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
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

var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
        this.comparasionChartData = [
            ['City', '2010 Population', '2000 Population'],
            ['New York City, NY', 8175000, 8008000],
            ['Los Angeles, CA', 3792000, 3694000],
            ['Chicago, IL', 2695000, 2896000],
            ['Houston, TX', 2099000, 1953000],
            ['Philadelphia, PA', 1526000, 1517000]
        ];
        this.barStackChartData = [
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350]
        ];
        this.barChartData = [
            ['City', '2010 Population',],
            ['New York City, NY', 8175000],
            ['Los Angeles, CA', 3792000],
            ['Chicago, IL', 2695000],
            ['Houston, TX', 2099000],
            ['Philadelphia, PA', 1526000]
        ];
        this.columnStackChartData = [
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
        this.columnChartData = [
            [{ "datatype": 'timeofday', "label": 'Time of Day' },
                { "datatype": "number", "label": 'Motivation Level' }
            ],
            [{ v: [8, 0, 0], f: '8 am' }, 1],
            [{ v: [9, 0, 0], f: '9 am' }, 2],
            [{ v: [10, 0, 0], f: '10 am' }, 3],
            [{ v: [11, 0, 0], f: '11 am' }, 4],
            [{ v: [12, 0, 0], f: '12 pm' }, 5],
            [{ v: [13, 0, 0], f: '1 pm' }, 6],
            [{ v: [14, 0, 0], f: '2 pm' }, 7],
            [{ v: [15, 0, 0], f: '3 pm' }, 8],
            [{ v: [16, 0, 0], f: '4 pm' }, 9],
            [{ v: [17, 0, 0], f: '5 pm' }, 10],
        ];
        this.pieChartData = [
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
        ];
        this.histogramChartData = [
            ['Dinosaur', 'Length'],
            ['Acrocanthosaurus (top-spined lizard)', 12.2],
            ['Albertosaurus (Alberta lizard)', 9.1],
            ['Allosaurus (other lizard)', 12.2],
            ['Apatosaurus (deceptive lizard)', 22.9],
            ['Archaeopteryx (ancient wing)', 0.9],
            ['Argentinosaurus (Argentina lizard)', 36.6],
            ['Baryonyx (heavy claws)', 9.1],
            ['Brachiosaurus (arm lizard)', 30.5],
            ['Ceratosaurus (horned lizard)', 6.1],
            ['Coelophysis (hollow form)', 2.7],
            ['Compsognathus (elegant jaw)', 0.9],
            ['Deinonychus (terrible claw)', 2.7],
            ['Diplodocus (double beam)', 27.1],
            ['Dromicelomimus (emu mimic)', 3.4],
            ['Gallimimus (fowl mimic)', 5.5],
            ['Mamenchisaurus (Mamenchi lizard)', 21.0],
            ['Megalosaurus (big lizard)', 7.9],
            ['Microvenator (small hunter)', 1.2],
            ['Ornithomimus (bird mimic)', 4.6],
            ['Oviraptor (egg robber)', 1.5],
            ['Plateosaurus (flat lizard)', 7.9],
            ['Sauronithoides (narrow-clawed lizard)', 2.0],
            ['Seismosaurus (tremor lizard)', 45.7],
            ['Spinosaurus (spiny lizard)', 12.2],
            ['Supersaurus (super lizard)', 30.5],
            ['Tyrannosaurus (tyrant lizard)', 15.2],
            ['Ultrasaurus (ultra lizard)', 30.5],
            ['Velociraptor (swift robber)', 1.8]
        ];
        this.bubbleChartData = [
            ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
            ['CAN', 80.66, 1.67, 'North America', 33739900],
            ['DEU', 79.84, 1.36, 'Europe', 81902307],
            ['DNK', 78.6, 1.84, 'Europe', 5523095],
            ['EGY', 72.73, 2.78, 'Middle East', 79716203],
            ['GBR', 80.05, 2, 'Europe', 61801570],
            ['IRN', 72.49, 1.7, 'Middle East', 73137148],
            ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
            ['ISR', 81.55, 2.96, 'Middle East', 7485600],
            ['RUS', 68.6, 1.54, 'Europe', 141850000],
            ['USA', 78.09, 2.05, 'North America', 307007000]
        ];
        this.scatterChartData = [
            ['Age', 'Weight'],
            [8, 12],
            [4, 5.5],
            [11, 14],
            [4, 5],
            [3, 3.5],
            [6.5, 7]
        ];
        this.lineChartData = [
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
        this.areaChartData = [
            ['Year', 'Sales', 'Expenses'],
            ['2013', 1000, 400],
            ['2014', 1170, 460],
            ['2015', 660, 1120],
            ['2016', 1030, 540]
        ];
        this.timelineChartData = [
            [{ "datatype": 'string', "label": 'Prime Minister' },
                { "datatype": "date", "label": 'Start' },
                { "datatype": "date", "label": "End" }
            ],
            ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
            ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
            ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)]
        ];
        this.comboChartData = [
            ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
            ['2004/05', 165, 938, 522, 998, 450, 614.6],
            ['2005/06', 135, 1120, 599, 1268, 288, 682],
            ['2006/07', 157, 1167, 587, 807, 397, 623],
            ['2007/08', 139, 1110, 615, 968, 215, 609.4],
            ['2008/09', 136, 691, 629, 1026, 366, 569.6]
        ];
        this.bubbleChartColorAxis = [
            ['ID', 'X', 'Y', 'Temperature'],
            ['', 80, 167, 120],
            ['', 79, 136, 130],
            ['', 78, 184, 50],
            ['', 72, 278, 230],
            ['', 81, 200, 210],
            ['', 72, 170, 100],
            ['', 68, 477, 80]
        ];
        this.candlestickChartData = [
            ['Mon', 20, 28, 38, 45],
            ['Tue', 31, 38, 55, 66],
            ['Wed', 50, 55, 77, 80],
            ['Thu', 77, 77, 66, 50],
            ['Fri', 68, 66, 22, 15]
        ];
        this.candlestickWaterfallChart = [
            ['Mon', 28, 28, 38, 38],
            ['Tue', 38, 38, 55, 55],
            ['Wed', 55, 55, 77, 77],
            ['Thu', 77, 77, 66, 66],
            ['Fri', 66, 66, 22, 22]
            // Treat the first row as data.
        ];
    }
    ChartsComponent.prototype.ngOnInit = function () { };
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'charts',
            template: __webpack_require__(/*! ./charts.html */ "./src/app/pages/charts/charts.html")
        }),
        __metadata("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/charts.html":
/*!******************************************!*\
  !*** ./src/app/pages/charts/charts.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-row>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Bubble Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-bubble [data]=\"bubbleChartData\" [axis-color]=\"['yellow', 'red']\">\n          <amexio-chart-title [title]=\"'Correlation between life expectancy,fertility rate'\"></amexio-chart-title>\n          <amexio-chart-horizontal-axis [title]=\"'Life Expectancy'\"></amexio-chart-horizontal-axis>\n          <amexio-chart-vertical-axis [title]=\"'Fertility Rate'\"></amexio-chart-vertical-axis>\n        </amexio-chart-bubble>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Color Axis Bubble Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-bubble [data]=\"bubbleChartColorAxis\" [axis-color]=\"['yellow', 'red']\">\n        </amexio-chart-bubble>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n<amexio-row>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Combo Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-combo [data]=\"comboChartData\">\n          <amexio-chart-title [title]=\"'Monthly Coffee Production by Country'\"></amexio-chart-title>\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n          <amexio-chart-horizontal-axis [title]=\"'Month'\"></amexio-chart-horizontal-axis>\n          <amexio-chart-vertical-axis [title]=\"'Cups'\"></amexio-chart-vertical-axis>\n        </amexio-chart-combo>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Scatter Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-scatter [data]=\"scatterChartData\">\n          <amexio-chart-title [title]=\"'Age vs. Weight comparison'\"></amexio-chart-title>\n          <amexio-chart-horizontal-axis [title]=\"'Age'\"></amexio-chart-horizontal-axis>\n          <amexio-chart-vertical-axis [title]=\"'Weight'\"></amexio-chart-vertical-axis>\n        </amexio-chart-scatter>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n<amexio-row>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Donut Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-donut [data]=\"pieChartData\">\n          <amexio-chart-title [title]=\"'My Daily Activities'\"></amexio-chart-title>\n          <amexio-chart-legend [position]=\"'right'\"></amexio-chart-legend>\n        </amexio-chart-donut>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Candlestick Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-candlestick [data]=\"candlestickChartData\">\n          <amexio-chart-title [title]=\"'Stock Statistics'\"></amexio-chart-title>\n        </amexio-chart-candlestick>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n<amexio-row>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Candlestick Waterfall Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-candlestick-waterfall [data]=\"candlestickWaterfallChart\" [bar-width]=\"'100%'\"\n                                            [falling-color]=\"'#a52714'\" [rising-color]=\"'#0f9d58'\">\n          <amexio-chart-title [title]=\"'Stock Statistics'\"></amexio-chart-title>\n        </amexio-chart-candlestick-waterfall>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Histogram Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-histogram [data]=\"histogramChartData\">\n          <amexio-chart-title [title]=\"'Lengths of dinosaurs, in meters'\"></amexio-chart-title>\n        </amexio-chart-histogram>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n<amexio-row>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Pie Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-pie [data]=\"pieChartData\">\n          <amexio-chart-title [title]=\"'My Daily Activities'\"></amexio-chart-title>\n          <amexio-chart-legend [position]=\"'right'\"></amexio-chart-legend>\n        </amexio-chart-pie>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>3D Pie Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-pie [is3d]=\"true\" [data]=\"pieChartData\">\n          <amexio-chart-title [title]=\"'My Daily Activities'\"></amexio-chart-title>\n          <amexio-chart-legend [position]=\"'right'\"></amexio-chart-legend>\n        </amexio-chart-pie>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n<amexio-row>\n  <amexio-column [size]=\"12\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Line Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-line [data]=\"lineChartData\">\n          <amexio-chart-legend [position]=\"'top'\"></amexio-chart-legend>\n        </amexio-chart-line>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n<amexio-row>\n  <amexio-column [size]=\"12\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Area Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-area [data]=\"areaChartData\">\n          <amexio-chart-title [title]=\"'Company Performance'\"></amexio-chart-title>\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-area>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n<amexio-row>\n  <amexio-column [size]=\"12\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>TimeLine Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-timeline [data]=\"timelineChartData\"></amexio-chart-timeline>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n<amexio-row>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Bar Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-bar [data]=\"barChartData\">\n          <amexio-chart-title [title]=\"'Population of Largest U.S. Cities'\"></amexio-chart-title>\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-bar>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Stack Bar Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-bar [data]=\"barStackChartData\" [stacked]=\"true\">\n          <amexio-chart-title [title]=\"'Population of Largest U.S. Cities'\"></amexio-chart-title>\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-bar>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n<amexio-row>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Bar Chart with comparision</amexio-header>\n      <amexio-body>\n        <amexio-chart-bar [data]=\"comparasionChartData\">\n          <amexio-chart-title [title]=\"'Population of Largest U.S. Cities'\"></amexio-chart-title>\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-bar>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Column Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-column [data]=\"columnChartData\">\n          <amexio-chart-title [title]=\"'Motivation and Energy Level'\"></amexio-chart-title>\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-column>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n<amexio-row>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Stack Column Chart</amexio-header>\n      <amexio-body>\n        <amexio-chart-column [data]=\"columnStackChartData\" [stacked]=\"true\">\n          <amexio-chart-title [title]=\"'Motivation Level Throughout the Day'\"></amexio-chart-title>\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-column>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Column Chart with comparision</amexio-header>\n      <amexio-body>\n        <amexio-chart-column [data]=\"columnStackChartData\">\n          <amexio-chart-title [title]=\"'Motivation Level Throughout the Day'\"></amexio-chart-title>\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-column>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n"

/***/ }),

/***/ "./src/app/pages/charts/charts.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/charts/charts.module.ts ***!
  \***********************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts.component */ "./src/app/pages/charts/charts.component.ts");
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
    { path: '', component: _charts_component__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"] }
];
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioChartsModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _charts_component__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"]
            ],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["ChartLoaderService"]]
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-charts-charts-module.js.map