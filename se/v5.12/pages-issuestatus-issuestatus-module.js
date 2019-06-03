(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-issuestatus-issuestatus-module"],{

/***/ "./src/app/pages/issuestatus/issuestatus.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/issuestatus/issuestatus.component.ts ***!
  \************************************************************/
/*! exports provided: IssueStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueStatusComponent", function() { return IssueStatusComponent; });
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

var IssueStatusComponent = /** @class */ (function () {
    function IssueStatusComponent() {
        this.feedbackData =
            [
                {
                    "content": "You researched three vendors when making a proposal of who we should choose to manage our payroll operations. Great job!- Kelvin peter"
                },
                {
                    "content": "I know that whatever I give you to do will get done the first time I ask and will be accurate. I don’t have to ask again or check your work. You check your work for typos and mistakes before submitting it.- Sagar Jadhav"
                },
                {
                    "content": "Last week you noticed an invoice that didn’t seem accurate. You researched the invoice and got the mistake corrected before I even knew there was a problem. You make my job easy.- Dattaram Gawas"
                }
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
    IssueStatusComponent.prototype.onRowSelect = function (event) {
    };
    IssueStatusComponent.prototype.onRowClick = function (event) {
    };
    IssueStatusComponent.prototype.ngOnInit = function () { };
    IssueStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'issue-status',
            template: __webpack_require__(/*! ./issuestatus.html */ "./src/app/pages/issuestatus/issuestatus.html")
        }),
        __metadata("design:paramtypes", [])
    ], IssueStatusComponent);
    return IssueStatusComponent;
}());



/***/ }),

/***/ "./src/app/pages/issuestatus/issuestatus.html":
/*!****************************************************!*\
  !*** ./src/app/pages/issuestatus/issuestatus.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-row>\n  <amexio-column [size] = \"6\">\n     <amexio-card [footer]=\"false\" [show]=\"true\" [header] = \"true\">\n        <amexio-header>\n          Issue Status\n        </amexio-header>\n        <amexio-body>\n          <table width=\"100%\">\n            <tr>\n              <td width=\"15%\">Open</td>\n              <td align=\"left\">\n                <amexio-progress-bar [show]=\"true\"\n                type=\"success\"\n                                     [infinite]=\"false\"\n                                     [current-value]=\"70\">\n                </amexio-progress-bar>\n              </td>\n            </tr>\n            <tr>\n              <td width=\"15%\">Close</td>\n              <td align=\"left\">\n                 <amexio-progress-bar [show]=\"true\"\n                                     [infinite]=\"false\"\n                                     type=\"success\"\n                                     [current-value]=\"20\">\n                </amexio-progress-bar>\n              </td>\n            </tr>\n            <tr>\n              <td width=\"20%\">In-Progress</td>\n              <td align=\"left\">\n                <amexio-progress-bar [show]=\"true\"\n                                     [infinite]=\"false\"\n                                     type=\"success\"\n                                     [current-value]=\"10\">\n                </amexio-progress-bar>\n              </td>\n            </tr>\n          </table>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n\n  <amexio-column [size] = \"6\">\n      <amexio-card [footer]=\"false\" [show]=\"true\" [header] = \"true\">\n        <amexio-header>\n          Issue By Severity\n        </amexio-header>\n        <amexio-body>\n\n          <table width=\"100%\">\n            <tr>\n              <td width=\"20px\">Low</td>\n              <td align=\"left\">\n                 <amexio-progress-bar [show]=\"true\"\n                                     [infinite]=\"false\"\n                                     [current-value]=\"20\"\n                                     [amexio-color]=\"'amexio-yellow'\">\n                </amexio-progress-bar>\n              </td>\n            </tr>\n            <tr>\n              <td width=\"20px\">High</td>\n              <td align=\"left\">\n                <amexio-progress-bar [show]=\"true\"\n                                     [infinite]=\"false\"\n                                     [current-value]=\"50\"\n                                     [amexio-color]=\"'amexio-black'\"\n                >\n\n                </amexio-progress-bar>\n              </td>\n            </tr>\n            <tr>\n              <td width=\"20px\">Medium</td>\n              <td align=\"left\">\n                <amexio-progress-bar [show]=\"true\"\n                                     [infinite]=\"false\"\n                                     [current-value]=\"30\"\n                                     [amexio-color]=\"'amexio-purple'\"\n                >\n\n                </amexio-progress-bar>\n              </td>\n            </tr>\n          </table>\n        </amexio-body>\n      </amexio-card>\n      <br>\n    </amexio-column>\n  </amexio-row>\n  <amexio-row>\n  <amexio-column [size] = \"6\">\n      <amexio-card [header] = \"true\" [footer]=\"false\" [show]=\"true\">\n        <amexio-header>\n          Open Issue\n        </amexio-header>\n        <amexio-body>\n          <amexio-checkbox-group name=\"openissue\"\n                           [data-reader]=\"'response.data'\"\n                           [display-field]=\"'issueName'\"\n                           [value-field]=\"'checked'\"\n                           [data]=\"openIssuedata\" >\n          </amexio-checkbox-group>\n            <amexio-text-input name=\"issuename\" [place-holder]=\"'Issue name'\" [has-label]=\"false\">\n            </amexio-text-input>\n            <amexio-button [label]=\"'Add'\" [type]=\"'warning'\"></amexio-button>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n\n  <amexio-column [size] = \"6\">\n      <amexio-card [header] = \"true\"[footer]=\"false\" [show]=\"true\">\n        <amexio-header>\n          Customer Feedback\n        </amexio-header>\n        <amexio-body>\n          <amexio-carousel [data]=\"feedbackData\" mode=\"single\" >\n  <ng-template let-feedback amexioTemplate=\"item\">\n    <div style=\"height: 200px;width: 320px;\">\n    {{feedback.content}}\n    </div>\n  </ng-template>\n</amexio-carousel>\n        </amexio-body>\n      </amexio-card>\n    </amexio-column>\n  </amexio-row>\n"

/***/ }),

/***/ "./src/app/pages/issuestatus/issuestatus.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/issuestatus/issuestatus.module.ts ***!
  \*********************************************************/
/*! exports provided: IssueStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueStatusModule", function() { return IssueStatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _issuestatus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./issuestatus.component */ "./src/app/pages/issuestatus/issuestatus.component.ts");
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
    { path: '', component: _issuestatus_component__WEBPACK_IMPORTED_MODULE_5__["IssueStatusComponent"] }
];
var IssueStatusModule = /** @class */ (function () {
    function IssueStatusModule() {
    }
    IssueStatusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioPaneModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _issuestatus_component__WEBPACK_IMPORTED_MODULE_5__["IssueStatusComponent"]
            ]
        })
    ], IssueStatusModule);
    return IssueStatusModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-issuestatus-issuestatus-module.js.map