(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-email-email-module"],{

/***/ "./src/app/pages/email/email.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/email/email.component.ts ***!
  \************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
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

var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
        this.isComposeOpen = false;
        this.bindData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Ketan Gote",
                        "name_official": "Ketan Gote",
                        "profile": "ketan.jpg"
                    },
                    {
                        "name": "vrushabh kokil",
                        "name_official": "vrushabh kokil",
                        "profile": "vrushabh.jpg"
                    },
                    {
                        "name": "Dattaram Gawas",
                        "name_official": "Dattaram Gawas",
                        "profile": "dats.jpg"
                    },
                    {
                        "name": "Sagar Jadhav",
                        "name_official": "Sagar Jadhav",
                        "profile": "sagar.jpg"
                    },
                    {
                        "name": "sandip mohite",
                        "name_official": "sandip mohite",
                        "profile": "sandip.jpg"
                    },
                    {
                        "name": "vrushabh Jadhav",
                        "name_official": "vrushabh Jadhav",
                        "profile": "ahutosh.jpg"
                    }
                ]
            }
        };
        this.isVisible = false;
    }
    EmailComponent.prototype.onRowSelect = function (event) {
        if (event.length > 0) {
            this.isVisible = true;
        }
        else {
            this.isVisible = false;
        }
    };
    EmailComponent.prototype.onRowClick = function (event) {
    };
    EmailComponent.prototype.toggle = function () {
        this.isComposeOpen = !this.isComposeOpen;
    };
    EmailComponent.prototype.ngOnInit = function () {
        this.data = [
            {
                "text": "Inbox",
                "expanded": false,
                "checked": false,
                "selected": true,
                "icon": "fa fa-inbox"
            }, {
                "text": "Sent",
                "expanded": false,
                "checked": false,
                "icon": "fa fa-envelope-o"
            }, {
                "text": "Trash",
                "expanded": false,
                "checked": false,
                "icon": "fa fa-trash-o"
            },
            {
                "text": "Labels",
                "expanded": false,
                "checked": false,
                "icon": "fa fa-tag",
                "children": [
                    {
                        "text": "High",
                        "expanded": false,
                        "checked": false,
                        "icon": "fa fa-tag fa-lg"
                    }, {
                        "text": "Medium",
                        "expanded": false,
                        "checked": false,
                        "icon": "fa fa-tag fa-md"
                    }, {
                        "text": "Low",
                        "expanded": false,
                        "checked": false,
                        "icon": "fa fa-tag "
                    }
                ]
            }
        ];
    };
    EmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'email',
            template: __webpack_require__(/*! ./email.html */ "./src/app/pages/email/email.html")
        }),
        __metadata("design:paramtypes", [])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/pages/email/email.html":
/*!****************************************!*\
  !*** ./src/app/pages/email/email.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card [header]=\"true\">\n  <amexio-header>\n    Email\n  </amexio-header>\n  <amexio-body>  \n      <amexio-row>\n        <amexio-column [size]=\"3\">\n          <div style=\"text-align: center;padding: 10px\">\n            <amexio-button [label]=\"'Compose'\" [type]=\"'danger'\" [size]=\"'default'\"[tooltip]=\"'Compose'\" (click)=\"toggle()\" ></amexio-button>\n          </div>\n          <amexio-treeview   [data]=\"data\"\n                            (selectedRecord)=\"onRowSelect($event)\"\n                            [enable-checkbox]=\"false\" >\n          </amexio-treeview >        \n          <amexio-row>\n             <amexio-column [size] =12 >\n              \n            </amexio-column>\n          </amexio-row>\n          \n          <amexio-listbox [height]=\"400\"  [header] = \"'Contacts'\" [search-placeholder]=\"'Search Contacts'\" [data]=\"bindData\" [filter]=\"false\"\n                          [enable-checkbox] = \"false\" [data-reader]=\"'response.data'\"\n                          [display-field]=\"'name'\">\n            <ng-template #amexioBodyTmpl let-row=\"row\">\n              <amexio-row>\n                <amexio-column [size]=\"12\">\n                   <div class=\"profile-image-round\">\n\n                    <amexio-image \n                    [path]=\"'assets/images/profile/'+row.profile\" \n                    [c-class]=\"'image-round'\">\n                    </amexio-image>\n                      <a>{{row.name}}</a>\n                     </div> \n                    \n\n\n                \n \n\n                </amexio-column>\n                </amexio-row>\n            </ng-template>\n          </amexio-listbox>\n        </amexio-column>\n        <amexio-column [size] =\"9\" >\n          <amexio-datagrid\n            [page-size] = \"15\"\n            [data-reader]=\"'response.data'\"\n            [enable-checkbox]=\"false\"\n            [http-url]=\"'assets/data/email.json'\"\n            [http-method]=\"'get'\"\n            [enable-data-filter]=\"false\"\n            (selectedRowData)=\"onRowSelect($event)\"\n            (rowSelect)=\"onRowClick($event)\" [c-class]=\"'gridStyle'\" [tableDatacclass]=\"'datagridrow'\" [tableTitlecclass]=\"'headerStyle'\" [tableHeadercclass]=\"'headerStyleColumn'\">\n            <amexio-data-table-column [data-index]=\"'date'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Date'\"></amexio-data-table-column>\n            <amexio-data-table-column [data-index]=\"'from'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'From'\"></amexio-data-table-column>\n            <amexio-data-table-column [data-index]=\"'title'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Subject'\"></amexio-data-table-column>\n          </amexio-datagrid>      \n          </amexio-column>\n      </amexio-row>\n  </amexio-body> \n</amexio-card>\n"

/***/ }),

/***/ "./src/app/pages/email/email.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/email/email.module.ts ***!
  \*********************************************/
/*! exports provided: EmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email.component */ "./src/app/pages/email/email.component.ts");
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
    { path: '', component: _email_component__WEBPACK_IMPORTED_MODULE_4__["EmailComponent"] }
];
var EmailModule = /** @class */ (function () {
    function EmailModule() {
    }
    EmailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioFormsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioLayoutModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDataModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _email_component__WEBPACK_IMPORTED_MODULE_4__["EmailComponent"]
            ],
            providers: []
        })
    ], EmailModule);
    return EmailModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-email-email-module.js.map