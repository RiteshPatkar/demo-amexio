(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-datagrid-datagrid-module"],{

/***/ "./src/app/pages/datagrid/datagrid.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/datagrid/datagrid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-row>\n  <amexio-column [size]=\"12\">\n    <amexio-tab-view header=\"Data Grid\" [header-align]=\"'right'\"\n    [divide-header-equally]=false>\n      <amexio-tab title=\"Grid\" active=\"true\" [amexio-color]=\"'red'\">\n        <amexio-row>\n          <amexio-column [size]=\"12\">\n            <amexio-card [footer]=\"false\" [header]=\"true\">\n              <amexio-header>Simple Data Grid</amexio-header>\n              <amexio-body>\n                <amexio-datagrid\n                  [enable-column-fiter]=\"true\" [enable-checkbox]=\"false\"  [height]=\"300\" title=\"Country Grid\"   [http-method]=\"'get'\" [http-url]=\"'assets/data/datagrid.json'\" [data-reader]=\"'data'\"  [page-size] = \"10\" [enable-data-filter]=\"false\">\n                  <amexio-data-table-column [data-index]=\"'name_official'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                  </amexio-data-table-column>\n                  <amexio-data-table-column [data-index]=\"'latitude'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Latitude'\"></amexio-data-table-column>\n                  <amexio-data-table-column [data-index]=\"'longitude'\" [data-type]=\"'number'\" [hidden]=\"false\" [text]=\"'Longitude'\"></amexio-data-table-column>\n                </amexio-datagrid>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row><br>\n        <amexio-row>\n          <amexio-column [size]=\"12\">\n            <amexio-card [footer]=\"false\" [header]=\"true\">\n              <amexio-header>Data Grid with Template</amexio-header>\n              <amexio-body>\n                <amexio-datagrid  [enable-checkbox]=\"false\" title=\"Country Grid\"   [http-method]=\"'get'\" [http-url]=\"'assets/data/datagrid.json'\" [data-reader]=\"'data'\"  [page-size] = \"10\" [enable-data-filter]=\"false\">\n                  <amexio-data-table-column [width]=\"50\" [data-index]=\"'name_official'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                    <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                      <div class=\"datagrid-template\">\n                          <span>\n                            <amexio-image [path]=\"'assets/images/flags/flags/'+row.flag_32\"></amexio-image>\n                          </span>\n                        <span>{{row.name}}</span>\n\n                        <span>( {{row.name_official}} )</span>\n                      </div>\n                    </ng-template>\n                  </amexio-data-table-column>\n                  <amexio-data-table-column [width]=\"20\" [data-index]=\"'latitude'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Latitude'\"></amexio-data-table-column>\n                  <amexio-data-table-column [width]=\"20\" [data-index]=\"'longitude'\" [data-type]=\"'number'\" [hidden]=\"false\" [text]=\"'Longitude'\"></amexio-data-table-column>\n                </amexio-datagrid>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row><br>\n        <amexio-row>\n          <amexio-column [size]=\"12\">\n            <amexio-card [footer]=\"false\" [header]=\"true\">\n              <amexio-header>Data Grid with Filtering</amexio-header>\n              <amexio-body>\n                <amexio-datagrid\n                  [title]=\"'Employee Data'\"\n                  [page-size] = \"10\"\n                  [data-reader]=\"'data'\"\n                  [http-url]=\"'assets/data/datagridgroupby.json'\"\n                  [http-method]=\"'get'\"\n                  [enable-data-filter]=\"true\">\n                  <amexio-data-table-column [data-index]=\"'preferredFullName'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'FullName'\"></amexio-data-table-column>\n                  <amexio-data-table-column [data-index]=\"'jobTitle'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Job Title'\">\n                  </amexio-data-table-column>\n                  <amexio-data-table-column [data-index]=\"'salary'\" [data-type]=\"'number'\" [hidden]=\"false\" [text]=\"'Salary'\"></amexio-data-table-column>\n                </amexio-datagrid>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row>\n         <amexio-row>\n          <amexio-column [size]=\"12\">\n            <amexio-card [footer]=\"false\" [header]=\"true\">\n              <amexio-header>Group By Data Grid</amexio-header>\n              <amexio-body>\n                <amexio-datagrid\n                  [enable-column-fiter]=\"true\"  [groupby]=\"true\"  [groupby-data-index]=\"'jobTitle'\" [enable-checkbox]=\"false\" title=\"Employee Details\"   [http-method]=\"'get'\" [http-url]=\"'assets/data/datagridgroupby.json'\" [data-reader]=\"'data'\"  [page-size] = \"5\" [enable-data-filter]=\"false\">\n                  <amexio-data-table-column [width]=\"30\" [data-index]=\"'preferredFullName'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'FullName'\"></amexio-data-table-column>\n                  <amexio-data-table-column [width]=\"30\" [data-index]=\"'jobTitle'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Job Title'\">\n                  </amexio-data-table-column>\n                  <amexio-data-table-column  [width]=\"30\" [data-index]=\"'salary'\" [data-type]=\"'number'\" [hidden]=\"false\" [text]=\"'Salary'\"></amexio-data-table-column>\n                </amexio-datagrid>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row>\n        <br>\n        <amexio-row>\n          <amexio-column [size]=\"12\">\n            <amexio-card [footer]=\"false\" [header]=\"true\">\n              <amexio-header> Data Grid with Global Filter</amexio-header>\n              <amexio-body>\n                <amexio-datagrid\n                  [global-filter]=\"true\" title=\"Country Grid\"   [http-method]=\"'get'\" [http-url]=\"'assets/data/datagrid.json'\" [data-reader]=\"'data'\"  [page-size] = \"10\">\n                  <amexio-data-table-column [data-index]=\"'name_official'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n                  </amexio-data-table-column>\n                  <amexio-data-table-column [data-index]=\"'code3l'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Code'\">\n                  </amexio-data-table-column>\n                  <amexio-data-table-column [data-index]=\"'latitude'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Latitude'\"></amexio-data-table-column>\n                  <amexio-data-table-column [data-index]=\"'longitude'\" [data-type]=\"'number'\" [hidden]=\"false\" [text]=\"'Longitude'\"></amexio-data-table-column>\n                </amexio-datagrid>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row>\n\n      </amexio-tab>\n      <amexio-tab title=\"Tree Data Grid\" [amexio-color]=\"'blue'\">\n\n        <amexio-row>\n          <amexio-column [size]=\"12\">\n            <amexio-card [footer]=\"false\" [header]=\"true\">\n              <amexio-header>Tree Data Grid</amexio-header>\n              <amexio-body>\n                <amexio-tree-data-table [http-method]=\"'get'\" [http-url]=\"'assets/data/treedatatable.json'\" [data-reader]=\"'data'\">\n                  <amexio-data-table-column [data-index]=\"'task'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Task'\"></amexio-data-table-column>\n                  <amexio-data-table-column [data-index]=\"'user'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'User'\"></amexio-data-table-column>\n                  <amexio-data-table-column [data-index]=\"'duration'\" [data-type]=\"'number'\" [hidden]=\"false\" [text]=\"'Duration'\"></amexio-data-table-column>\n                </amexio-tree-data-table>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row><br>\n      </amexio-tab>\n      <amexio-tab title=\"Tree\" [amexio-color]=\"'green'\">\n        <amexio-row>\n          <amexio-column [size]=\"3\">\n            <amexio-card [footer]=\"false\" [header]=\"true\">\n              <amexio-header>Simple Tree</amexio-header>\n              <amexio-body>\n                <amexio-treeview [data-reader]=\"'data'\"\n                                 [http-url]=\"'assets/data/simpletree.json'\"\n                                 [http-method]=\"'get'\">\n                </amexio-treeview>\n\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column [size]=\"3\">\n            <amexio-card [footer]=\"false\" [header]=\"true\">\n              <amexio-header>Tree with Filtering</amexio-header>\n              <amexio-body>\n                <amexio-tree-filter-view [data-reader]=\"'data'\"\n                                         [http-method]=\"'get'\"\n                                         [http-url]=\"'assets/data/simpletree.json'\">\n                </amexio-tree-filter-view>\n              </amexio-body>\n\n            </amexio-card>\n          </amexio-column>\n          <amexio-column [size]=\"3\">\n            <amexio-card [footer]=\"false\" [header]=\"true\">\n              <amexio-header>Tree with Checkbox</amexio-header>\n              <amexio-body>\n                <amexio-treeview [enable-checkbox]=\"true\" [data-reader]=\"'data'\"\n                                 [http-url]=\"'assets/data/treecheckbox.json'\"\n                                 [http-method]=\"'get'\">\n                </amexio-treeview>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column [size]=\"3\">\n            <amexio-card [footer]=\"false\" [header]=\"true\">\n              <amexio-header>Tree with Template</amexio-header>\n              <amexio-body>\n                <amexio-treeview [data-reader]=\"'data'\"\n                                 [http-url]=\"'assets/data/treecheckbox.json'\"\n                                 [http-method]=\"'get'\">\n                  <ng-template #amexioTreeTemplate let-tree let-icon=\"icon\" let-node=\"node\">\n                    <i [attr.class]=\"node.icon\"></i> &nbsp;{{tree.text}}\n                  </ng-template>\n                </amexio-treeview>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row><br>\n      </amexio-tab>\n      <amexio-tab title=\"Horizontal Tree View\" [amexio-color]=\"'brown'\">\n        <amexio-row>\n          <amexio-column [size]=\"12\">\n            <amexio-card [footer]=\"false\" [header]=\"true\">\n              <amexio-header>Horizontal Tree View</amexio-header>\n              <amexio-body>\n                <amexio-horizontal-treeview [data-reader]=\"'data'\" [http-url]=\"'assets/data/menus/sidebar.json'\" [http-method]=\"'get'\" label=\"Menu\"></amexio-horizontal-treeview>\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row><br>\n      </amexio-tab>\n\n    </amexio-tab-view>\n\n\n  </amexio-column>\n</amexio-row>\n\n"

/***/ }),

/***/ "./src/app/pages/datagrid/datagrid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/datagrid/datagrid.component.ts ***!
  \******************************************************/
/*! exports provided: DataGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridComponent", function() { return DataGridComponent; });
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

var DataGridComponent = /** @class */ (function () {
    function DataGridComponent() {
        this.localData = [];
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
        this.localData = [
            {
                "status": "Open",
                "issue": "Bug with .share operator?",
                "severity": "High",
                "date": "10-06-2017"
            }, {
                "status": "Close",
                "issue": "e.preventDefault broken in ie8",
                "severity": "Low",
                "date": "01-06-2017"
            }, {
                "status": "Close",
                "issue": "Third groupBy argument (key serializer) ignored",
                "severity": "Medium",
                "date": "16-06-2017"
            }, {
                "status": "Open",
                "issue": "Animate no longer supports objects",
                "severity": "Medium",
                "date": "16-06-2017"
            }, {
                "status": "Close",
                "issue": "Automatic build-version-publish after 1.0",
                "severity": "Medium",
                "date": "15-06-2017"
            }, {
                "status": "Open",
                "issue": "Uncaught TypeError: Cannot read property 'ngOriginalError' of null",
                "severity": "Medium",
                "date": "03-05-2017"
            }, {
                "status": "Open",
                "issue": "Animation background color changes for state when using *",
                "severity": "Medium",
                "date": "01-05-2017"
            }, {
                "status": "Close",
                "issue": "Component/declarative error handling (ala React 16's <ErrorBoundary/>)",
                "severity": "Low",
                "date": "01-05-2017"
            }, {
                "status": "Open",
                "issue": "Angular Router + Browser History=> extra page view count in GA",
                "severity": "High",
                "date": "23-04-2017"
            }, {
                "status": "Open",
                "issue": "[Hidden] not working in platform-server",
                "severity": "High",
                "date": "22-04-2017"
            }, {
                "status": "Close",
                "issue": "Set ViewEncapsulation per module",
                "severity": "Medium",
                "date": "20-04-2017"
            }, {
                "status": "Open",
                "issue": "Router upgrade does not work when initial state is Angular ",
                "severity": "Medium",
                "date": "19-04-2017"
            }, {
                "status": "Open",
                "issue": "Animations: animateChild() not working correctly ",
                "severity": "Medium",
                "date": "18-04-2017"
            }, {
                "status": "Close",
                "issue": "type definition of UrlMatcher should allow to return null",
                "severity": "High",
                "date": "16-04-2017"
            }, {
                "status": "Open",
                "issue": "Animations - stagger not working in route outlet ",
                "severity": "High",
                "date": "15-04-2017"
            }, {
                "status": "Close",
                "issue": "Angular Router cuts off URL at &",
                "severity": "High",
                "date": "15-04-2017"
            }, {
                "status": "Open",
                "issue": "Add scientific number format pipe",
                "severity": "Low",
                "date": "13-04-2017"
            },
            {
                "status": "Open",
                "issue": "Route param auto change when refresh the window.",
                "severity": "Low",
                "date": "13-04-2017"
            }, {
                "status": "Close",
                "issue": "Add scientific number format pipe",
                "severity": "Medium",
                "date": "12-04-2017"
            }, {
                "status": "Open",
                "issue": "docs(aio): API missing constructor overloads",
                "severity": "Low",
                "date": "13-04-2017"
            }, {
                "status": "Open",
                "issue": "Http request status always pending ",
                "severity": "Low",
                "date": "11-04-2017"
            }
        ];
        this.treeLocalData = {
            "data": [{
                    "text": "Web App",
                    "expand": true,
                    "children": [
                        {
                            "text": "app",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Application.js"
                                }
                            ]
                        },
                        {
                            "text": "button",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "Button.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Cycle.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Split.js"
                                }
                            ]
                        },
                        {
                            "text": "container",
                            "expand": true,
                            "children": [
                                {
                                    "leaf": true,
                                    "text": "ButtonGroup.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Container.js"
                                },
                                {
                                    "leaf": true,
                                    "text": "Viewport.js",
                                    "expand": true,
                                    "children": [],
                                    "lazy": {
                                        "httpurl": "data/treeview.json",
                                        "httpmethod": "get"
                                    }
                                }
                            ]
                        },
                        {
                            "text": "core",
                            "expand": true,
                            "children": [
                                {
                                    "text": "dom",
                                    "expand": true,
                                    "children": [
                                        {
                                            "leaf": true,
                                            "text": "Element.form.js"
                                        },
                                        {
                                            "leaf": true,
                                            "text": "Element.static-more.js"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }]
        };
    }
    DataGridComponent.prototype.ngOnInit = function () {
    };
    DataGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-grid',
            template: __webpack_require__(/*! ./datagrid.component.html */ "./src/app/pages/datagrid/datagrid.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DataGridComponent);
    return DataGridComponent;
}());



/***/ }),

/***/ "./src/app/pages/datagrid/datagrid.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/datagrid/datagrid.module.ts ***!
  \***************************************************/
/*! exports provided: DataGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridModule", function() { return DataGridModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _datagrid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datagrid.component */ "./src/app/pages/datagrid/datagrid.component.ts");
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
    { path: '', component: _datagrid_component__WEBPACK_IMPORTED_MODULE_5__["DataGridComponent"] }
];
var DataGridModule = /** @class */ (function () {
    function DataGridModule() {
    }
    DataGridModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioDataModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _datagrid_component__WEBPACK_IMPORTED_MODULE_5__["DataGridComponent"]
            ],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["CommonDataService"]]
        })
    ], DataGridModule);
    return DataGridModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-datagrid-datagrid-module.js.map