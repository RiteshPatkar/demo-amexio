(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-report-issue-issue-module"],{

/***/ "./src/app/pages/report/issue/issue.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/report/issue/issue.component.ts ***!
  \*******************************************************/
/*! exports provided: IssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueComponent", function() { return IssueComponent; });
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
 * Created by sagar on 3/8/17.
 */

var IssueComponent = /** @class */ (function () {
    function IssueComponent() {
    }
    IssueComponent.prototype.onRowSelect = function (event) {
    };
    IssueComponent.prototype.onRowClick = function (event) {
    };
    IssueComponent.prototype.ngOnInit = function () { };
    IssueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'issue',
            template: __webpack_require__(/*! ./issue.html */ "./src/app/pages/report/issue/issue.html")
        }),
        __metadata("design:paramtypes", [])
    ], IssueComponent);
    return IssueComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/issue/issue.html":
/*!***********************************************!*\
  !*** ./src/app/pages/report/issue/issue.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card [header] = \"true\">\n  <amexio-header>\n    Q2-2017 Issues Raised\n  </amexio-header>\n  <amexio-body>\n<amexio-row>\n\n  <amexio-column [size]=\"2\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\">\n      <amexio-west [content-align]=\"'z'\">\n        <amexio-image [icon-class]=\"'fa fa-check'\"></amexio-image>\n      </amexio-west>\n      <amexio-center [content-align]=\"'right'\">\n        <amexio-label size=\"small\">8</amexio-label><br/> <amexio-box padding= \"true\">\n            <amexio-label size=\"small\">Closed</amexio-label>\n          </amexio-box>\n      </amexio-center>\n    </amexio-datapoints>\n  </amexio-column>\n\n  <amexio-column [size]=\"2\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\">\n      <amexio-west [content-align]=\"'left'\">\n        <!--<i class=\"fa fa-envelope-open fa-2x\"></i>-->\n        <amexio-image [icon-class]=\"'fa fa-envelope-open'\"></amexio-image>\n      </amexio-west>\n     \n      <amexio-center [content-align]=\"'right'\" >\n       <amexio-label size=\"small\">13</amexio-label>\n        <br/>\n        <amexio-box padding= \"true\">\n          <amexio-label size=\"small\">Open</amexio-label>\n        </amexio-box>\n      </amexio-center>\n    </amexio-datapoints>\n  </amexio-column>\n\n  <amexio-column [size]=\"2\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\" >\n      <amexio-west [content-align]=\"'left'\">\n        <!--<i class=\"fa fa-spinner fa-2x\"></i>-->\n        <amexio-image [icon-class]=\"'fa fa-spinner'\"></amexio-image>\n      </amexio-west>\n      <amexio-center [content-align]=\"'right'\">\n        <amexio-label size=\"small\">3</amexio-label><br/> <amexio-box padding= \"true\">\n            <amexio-label size=\"small\">WIP</amexio-label>\n          </amexio-box>\n      </amexio-center>\n    </amexio-datapoints>\n  </amexio-column>\n\n  <amexio-column [size]=\"2\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\">\n      <amexio-west [content-align]=\"'left'\">\n        <amexio-image [icon-class]=\"'fa fa-bolt'\"></amexio-image>\n      </amexio-west>\n      <amexio-center [content-align]=\"'right'\">\n        <amexio-label size=\"small\">6</amexio-label><br/>\n        <amexio-box padding= \"true\">\n            <amexio-label size=\"small\">High</amexio-label>\n          </amexio-box>\n      </amexio-center>\n    </amexio-datapoints>\n  </amexio-column>\n\n<amexio-column [size]=\"2\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\">\n      <amexio-west [content-align]=\"'left'\">\n        <amexio-image [icon-class]=\"'fa fa-medium'\"></amexio-image>\n      </amexio-west>\n      <amexio-center [content-align]=\"'right'\">\n            <amexio-label size=\"small\">9</amexio-label><br/>\n            <amexio-box padding= \"true\">\n                <amexio-label size=\"small\">Medium</amexio-label>\n              </amexio-box>\n      </amexio-center>\n    </amexio-datapoints>\n  </amexio-column>\n\n  <amexio-column [size]=\"2\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\">\n      <amexio-west [content-align]=\"'left'\">\n        <amexio-image [icon-class]=\"'fa fa-low-vision'\"></amexio-image>\n      </amexio-west>\n      <amexio-center [content-align]=\"'right'\">\n        <amexio-label size=\"small\">6</amexio-label><br/>\n        <amexio-box padding= \"true\">\n            <amexio-label size=\"small\">Low</amexio-label>\n          </amexio-box>\n      </amexio-center>\n    </amexio-datapoints>\n  </amexio-column>\n\n</amexio-row>\n<br/>\n<amexio-datagrid\n      [height]=\"500\"\n      [title]=\"'List of Issues Raised'\"\n      [page-size] = \"10\"\n      [data-reader]=\"'response.data'\"\n      [enable-checkbox]=\"false\"\n      [http-url]=\"'assets/data/issue.json'\"\n      [http-method]=\"'get'\"\n      (selectedRowData)=\"onRowSelect($event)\"\n      (rowSelect)=\"onRowClick($event)\" [c-class]=\"'gridStyle'\" [tableDatacclass]=\"'datagridrow'\" [tableTitlecclass]=\"'headerStyle'\" [tableHeadercclass]=\"'headerStyleColumn'\">\n      <amexio-data-table-column [width]=\"'15'\" [data-index]=\"'date'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Date'\"></amexio-data-table-column>\n      <amexio-data-table-column [width]=\"'15'\" [data-index]=\"'status'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Status'\"></amexio-data-table-column>\n      <amexio-data-table-column [data-index]=\"'issue'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Issue'\"></amexio-data-table-column>\n      <amexio-data-table-column [width]=\"'15'\" [data-index]=\"'severity'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Severity'\"></amexio-data-table-column>\n    </amexio-datagrid>\n</amexio-body>\n</amexio-card>\n"

/***/ }),

/***/ "./src/app/pages/report/issue/issue.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/report/issue/issue.module.ts ***!
  \****************************************************/
/*! exports provided: IssueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueModule", function() { return IssueModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _issue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./issue.component */ "./src/app/pages/report/issue/issue.component.ts");
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
    { path: '', component: _issue_component__WEBPACK_IMPORTED_MODULE_4__["IssueComponent"] }
];
var IssueModule = /** @class */ (function () {
    function IssueModule() {
    }
    IssueModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDashBoardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _issue_component__WEBPACK_IMPORTED_MODULE_4__["IssueComponent"]
            ],
            providers: []
        })
    ], IssueModule);
    return IssueModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-report-issue-issue-module.js.map