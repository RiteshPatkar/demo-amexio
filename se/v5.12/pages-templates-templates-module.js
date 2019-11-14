(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-templates-templates-module"],{

/***/ "./src/app/pages/templates/templates.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/templates/templates.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<amexio-row>\n  <amexio-column [size]=\"12\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Data Grid with Template</amexio-header>\n      <amexio-body>\n        <amexio-datagrid [enable-checkbox]=\"false\" title=\"User Activity Details\" [http-method]=\"'get'\" [http-url]=\"'assets/data/datagridtemplate.json'\"\n          [data-reader]=\"'response.data'\" [page-size]=\"10\" [enable-data-filter]=\"false\">\n          <amexio-data-table-column [width]=\"40\" [data-index]=\"'User'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'USER'\">\n            <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n              <amexio-row>\n                <amexio-column [size]=\"3\">\n                  <!-- <div class=profile-image-round> -->\n                  <!-- <img src=\"assets/images/profile/{{row.profile}}\"/> -->\n                  <amexio-image [path]=\"'assets/images/profile/'+row.profile\" [c-class]=\"'image-round'\">\n                  </amexio-image>\n                  <!-- </div> -->\n                </amexio-column>\n                <amexio-column [size]=\"9\">\n                  <amexio-label size=\"small\">\n                    {{row.User}}\n                  </amexio-label>\n                  <br>\n                  <amexio-label size=\"small\" font-color=\"grey\">\n                    Registered:{{row.Date}}\n                  </amexio-label>\n                </amexio-column>\n              </amexio-row>\n            </ng-template>\n          </amexio-data-table-column>\n          <amexio-data-table-column [width]=\"40\" [data-index]=\"'Usage'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'USAGE'\">\n            <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n              <span>{{row.Usage}}%</span>\n\n              <amexio-progress-bar [current-value]=\"row.Usage\" [infinite]=\"false\" [type]=\"getGridTemplateData(row)\"></amexio-progress-bar>\n\n              <amexio-label size=\"small\" font-color=\"grey\">\n                {{row.usageFromDate}}-{{row.usageToDate}}\n              </amexio-label>\n\n            </ng-template>\n          </amexio-data-table-column>\n          <amexio-data-table-column [width]=\"20\" [data-index]=\"'Payment'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'PAYMENT'\">\n            <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n              <span>\n                <!-- <div class=profile-image-round> -->\n                <!-- <img src=\"assets/images/{{row.Payment}}\"/> -->\n                <amexio-image [path]=\"'assets/images/'+row.Payment\" [c-class]=\"'image-round'\">\n                </amexio-image>\n                <!-- </div> -->\n              </span>\n            </ng-template>\n          </amexio-data-table-column>\n          <amexio-data-table-column [width]=\"20\" [data-index]=\"'Activity'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'ACTIVITY'\">\n            <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n\n              <amexio-label size=\"small\" font-color=\"grey\">\n                Last login\n              </amexio-label>\n              <br>\n              <amexio-label size=\"small\">\n                {{row.Activity}}\n              </amexio-label>\n\n\n            </ng-template>\n          </amexio-data-table-column>\n          <amexio-data-table-column [width]=\"10\" [data-index]=\"''\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"''\">\n            <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n\n              <span>\n                <amexio-image style=\"color:grey;\" [icon-class]=\"'fa fa-pencil fa-2x'\"></amexio-image>\n              </span>\n\n            </ng-template>\n          </amexio-data-table-column>\n        </amexio-datagrid>\n        <br>\n        <amexio-datagrid [enable-checkbox]=\"false\" title=\"Invoice Details\" [http-method]=\"'get'\" [http-url]=\"'assets/data/templategrid.json'\"\n          [data-reader]=\"'response.data'\" [page-size]=\"10\" [enable-data-filter]=\"false\">\n          <amexio-data-table-column [width]=\"5\" [data-index]=\"'No'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'No.'\">\n            <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n              <amexio-label size=\"small\" font-color=\"grey\">\n                {{row.No}}\n              </amexio-label>\n            </ng-template>\n          </amexio-data-table-column>\n          <amexio-data-table-column [width]=\"10\" [data-index]=\"'Invoice Subject'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Invoice Subject'\">\n          </amexio-data-table-column>\n          <amexio-data-table-column [width]=\"8\" [data-index]=\"'client'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Client'\">\n\n          </amexio-data-table-column>\n          <amexio-data-table-column [width]=\"6\" [data-index]=\"'Vat No.'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Vat No.'\">\n\n          </amexio-data-table-column>\n          <amexio-data-table-column [width]=\"8\" [data-index]=\"'Created'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Created'\">\n\n          </amexio-data-table-column>\n          <amexio-data-table-column [width]=\"10\" [data-index]=\"'Status'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Status'\">\n            <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n              <a class=\"fa fa-circle fa-lg\" [ngClass]=\"{'green': row.Status== 'Paid' , 'yellow': row.Status =='Pending' , 'red' : row.Status=='Paid Today'}\"></a>\n              &nbsp;{{row.Status}}\n            </ng-template>\n          </amexio-data-table-column>\n          <amexio-data-table-column [width]=\"5\" [data-index]=\"'Price'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Price'\">\n\n          </amexio-data-table-column>\n          <amexio-data-table-column [width]=\"15\" [data-index]=\"''\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"''\">\n            <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n              <amexio-row>\n                <amexio-column [size]=\"4\">\n                  <amexio-button [label]=\"'Manage'\" [size]=\"'small'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Manage'\">\n                  </amexio-button>\n                </amexio-column>\n                <amexio-column [size]=\"5\">\n                  <amexio-btn-dropdown [label]=\"'Action'\" [type]=\"'theme-backgroundcolor'\" [size]=\"'small'\">\n                    <amexio-btn-dropdown-item [label]=\"'Accept'\">\n                    </amexio-btn-dropdown-item>\n                    <amexio-btn-dropdown-item [label]=\"'Reject'\">\n                    </amexio-btn-dropdown-item>\n                  </amexio-btn-dropdown>\n                </amexio-column>\n                <amexio-column [size]=\"3\">\n                  <amexio-image style=\"color:grey;\" [icon-class]=\"'fa fa-pencil fa-2x'\"></amexio-image>\n                </amexio-column>\n              </amexio-row>\n            </ng-template>\n          </amexio-data-table-column>\n\n        </amexio-datagrid>\n\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n<br>\n<!--List Box Template-->\n<amexio-row>\n  <amexio-column [size]=\"12\">\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>List Box With template</amexio-header>\n      <amexio-body>\n        <amexio-row>\n          <amexio-column [size]=\"5\">\n            <amexio-listbox [height]=\"360\" [data]=\"projectData\" [filter]=\"false\" [header]=\"'Project'\" [enable-checkbox]=\"false\" [data-reader]=\"'response.data'\"\n              [display-field]=\"'name'\">\n              <ng-template #amexioBodyTmpl let-row=\"row\">\n                <amexio-row>\n                  <amexio-column [size]=\"5\">\n                    <amexio-label size=\"small\">\n                      {{row.name}}\n                    </amexio-label>\n                  </amexio-column>\n                  <amexio-column [size]=\"3\">\n\n                  </amexio-column>\n                  <amexio-column [size]=\"4\">\n\n                    <a [ngClass]=\"{'listbox-StatusYellow': row.status == 'Pending', 'listbox-StatusGreen' : row.status == 'Finished','listbox-StatusRed'  : row.status == 'Rejected'}\">\n                      {{row.status}}\n                    </a>\n                  </amexio-column>\n                </amexio-row>\n              </ng-template>\n            </amexio-listbox>\n          </amexio-column>\n          <amexio-column [size]=\"7\">\n            <amexio-listbox [height]=\"480\" [data]=\"browserData\" [filter]=\"false\" [header]=\"'Browser Stats'\" [enable-checkbox]=\"false\"\n              [data-reader]=\"'response.data'\" [display-field]=\"'name'\">\n              <ng-template #amexioBodyTmpl let-row=\"row\">\n                <amexio-row>\n                  <amexio-column [size]=\"4\">\n                    <span>\n\n                      <amexio-image [path]=\"'assets/images/'+row.icon\" [c-class]=\"'image-round'\">\n                      </amexio-image>\n\n                    </span>\n\n                  </amexio-column>\n                  <amexio-column [size]=\"6\">\n                    <amexio-label size=\"small\">\n                      {{row.name}}\n                    </amexio-label>\n                  </amexio-column>\n                  <amexio-column [size]=\"2\">\n                    <amexio-label size=\"small\" font-color=\"grey\">\n                      {{row.usage}}\n                    </amexio-label>\n\n                  </amexio-column>\n                </amexio-row>\n              </ng-template>\n            </amexio-listbox>\n          </amexio-column>\n        </amexio-row>\n      </amexio-body>\n    </amexio-card>"

/***/ }),

/***/ "./src/app/pages/templates/templates.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/templates/templates.component.ts ***!
  \********************************************************/
/*! exports provided: TemplatesGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesGridComponent", function() { return TemplatesGridComponent; });
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
 * Created by dattaram on 13/1/18.
 */

var TemplatesGridComponent = /** @class */ (function () {
    function TemplatesGridComponent() {
        this.projectData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Admin Template	",
                        "status": " 65%"
                    },
                    {
                        "name": "Landing Page",
                        "status": "Finished"
                    },
                    {
                        "name": "Backend UI	",
                        "status": "Rejected"
                    },
                    {
                        "name": "Personal Blog",
                        "status": "40%"
                    },
                    {
                        "name": "E-mail Templates	",
                        "status": "13%"
                    },
                    {
                        "name": "Corporate Website",
                        "status": "Pending"
                    }
                ]
            }
        };
        this.browserData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Google Chrome",
                        "usage": "23%",
                        "icon": "GoogleChrome.jpg "
                    },
                    {
                        "name": "Mozila Firefox",
                        "usage": "15%",
                        "icon": "MozilaFirefox.png "
                    },
                    {
                        "name": "Apple Safari",
                        "usage": "7%",
                        "icon": "AppleSafari.png "
                    },
                    {
                        "name": "Internet Explorer",
                        "usage": "9%",
                        "icon": "InternetExplorer.jpeg"
                    },
                    {
                        "name": "Opera mini",
                        "usage": "20%",
                        "icon": "Operamini.jpg"
                    },
                    {
                        "name": "Microsoft edge",
                        "usage": "9%",
                        "icon": "Microsoftedge.jpg"
                    }
                ]
            }
        };
    }
    TemplatesGridComponent.prototype.ngOnInit = function () {
    };
    TemplatesGridComponent.prototype.getGridTemplateData = function (row) {
        if (row.Usage >= 50) {
            return "success";
        }
        if (row.Usage < 50 && row.Usage >= 30) {
            return "warning";
        }
        if (row.Usage < 30) {
            return "danger";
        }
    };
    TemplatesGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'templates',
            template: __webpack_require__(/*! ./templates.component.html */ "./src/app/pages/templates/templates.component.html"),
            styles: ["\n    .listbox-StatusYellow {\n      background-color: yellow;\n    }\n    .listbox-StatusGreen  {\n      background-color: green;\n     }\n    .listbox-StatusRed {\n      background-color: red;\n  }\n  \n  \n.red {\n    color: red!important;\n   \n}\n.green {\n    color: green!important;\n   \n}\n.yellow {\n    color: yellow!important;\n    \n}\n.template-progressBar .progress{\n  height:5px !important;\n}  \n"]
        }),
        __metadata("design:paramtypes", [])
    ], TemplatesGridComponent);
    return TemplatesGridComponent;
}());



/***/ }),

/***/ "./src/app/pages/templates/templates.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/templates/templates.module.ts ***!
  \*****************************************************/
/*! exports provided: TemplateGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateGridModule", function() { return TemplateGridModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _templates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates.component */ "./src/app/pages/templates/templates.component.ts");
/**
 * Created by dattaram on 13/1/18.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _templates_component__WEBPACK_IMPORTED_MODULE_5__["TemplatesGridComponent"] }
];
var TemplateGridModule = /** @class */ (function () {
    function TemplateGridModule() {
    }
    TemplateGridModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioDataModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _templates_component__WEBPACK_IMPORTED_MODULE_5__["TemplatesGridComponent"]
            ],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["CommonDataService"]]
        })
    ], TemplateGridModule);
    return TemplateGridModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-templates-templates-module.js.map