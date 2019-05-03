(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-report-groupbyissue-groupbyissue-module"],{

/***/ "./src/app/pages/report/groupbyissue/groupbyissue.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/report/groupbyissue/groupbyissue.component.ts ***!
  \*********************************************************************/
/*! exports provided: GroupbyIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupbyIssueComponent", function() { return GroupbyIssueComponent; });
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

var GroupbyIssueComponent = /** @class */ (function () {
    function GroupbyIssueComponent() {
    }
    GroupbyIssueComponent.prototype.onRowSelect = function (event) {
    };
    GroupbyIssueComponent.prototype.onRowClick = function (event) {
    };
    GroupbyIssueComponent.prototype.ngOnInit = function () { };
    GroupbyIssueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'group-by-issue',
            template: __webpack_require__(/*! ./groupbyissue.html */ "./src/app/pages/report/groupbyissue/groupbyissue.html")
        }),
        __metadata("design:paramtypes", [])
    ], GroupbyIssueComponent);
    return GroupbyIssueComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/groupbyissue/groupbyissue.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/report/groupbyissue/groupbyissue.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card [header] = \"true\">\n  <amexio-header>\nIssue Details\n  </amexio-header>\n  <amexio-body>\n      <amexio-datagrid\n        [title]=\"'Issue Details by Severity'\"\n        [page-size] = \"10\"\n        [groupby]=\"true\"\n        [groupby-data-index]=\"'severity'\"\n        [data-reader]=\"'response.data'\"\n        [enable-checkbox]=\"false\"\n        [http-url]=\"'assets/data/issue.json'\"\n        [http-method]=\"'get'\">\n        <amexio-data-table-column [width]=\"12\" [data-index]=\"'status'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Status'\"></amexio-data-table-column>\n        <amexio-data-table-column [width]=\"50\" [data-index]=\"'issue'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Issue'\"></amexio-data-table-column>\n        <amexio-data-table-column [width]=\"15\" [data-index]=\"'severity'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Severity'\"></amexio-data-table-column>\n        <amexio-data-table-column [width]=\"20\" [data-index]=\"'date'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Date'\"></amexio-data-table-column>\n      </amexio-datagrid>\n    </amexio-body>\n    </amexio-card>\n"

/***/ }),

/***/ "./src/app/pages/report/groupbyissue/groupbyissue.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/report/groupbyissue/groupbyissue.module.ts ***!
  \******************************************************************/
/*! exports provided: GroupbyIssueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupbyIssueModule", function() { return GroupbyIssueModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _groupbyissue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groupbyissue.component */ "./src/app/pages/report/groupbyissue/groupbyissue.component.ts");
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
    { path: '', component: _groupbyissue_component__WEBPACK_IMPORTED_MODULE_4__["GroupbyIssueComponent"] }
];
var GroupbyIssueModule = /** @class */ (function () {
    function GroupbyIssueModule() {
    }
    GroupbyIssueModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _groupbyissue_component__WEBPACK_IMPORTED_MODULE_4__["GroupbyIssueComponent"]
            ],
            providers: []
        })
    ], GroupbyIssueModule);
    return GroupbyIssueModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-report-groupbyissue-groupbyissue-module.js.map