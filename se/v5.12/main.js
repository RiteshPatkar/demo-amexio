(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/action/action": [
		"./src/app/pages/action/action.ts",
		"pages-action-action"
	],
	"./pages/carouseldemo/carouseldemo.module": [
		"./src/app/pages/carouseldemo/carouseldemo.module.ts",
		"pages-carouseldemo-carouseldemo-module"
	],
	"./pages/charts/charts.module": [
		"./src/app/pages/charts/charts.module.ts",
		"pages-charts-charts-module"
	],
	"./pages/dashboard/dashboard.module": [
		"./src/app/pages/dashboard/dashboard.module.ts",
		"pages-dashboard-dashboard-module"
	],
	"./pages/datagrid/datagrid.module": [
		"./src/app/pages/datagrid/datagrid.module.ts",
		"pages-datagrid-datagrid-module"
	],
	"./pages/email/email.module": [
		"./src/app/pages/email/email.module.ts",
		"pages-email-email-module"
	],
	"./pages/formsutil/formsutil": [
		"./src/app/pages/formsutil/formsutil.ts",
		"pages-formsutil-formsutil"
	],
	"./pages/home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"pages-home-home-module"
	],
	"./pages/issuestatus/issuestatus.module": [
		"./src/app/pages/issuestatus/issuestatus.module.ts",
		"pages-issuestatus-issuestatus-module"
	],
	"./pages/layout/layout.module": [
		"./src/app/pages/layout/layout.module.ts",
		"pages-layout-layout-module"
	],
	"./pages/maps/maps.module": [
		"./src/app/pages/maps/maps.module.ts",
		"pages-maps-maps-module"
	],
	"./pages/navigation/navigation.module": [
		"./src/app/pages/navigation/navigation.module.ts",
		"pages-navigation-navigation-module"
	],
	"./pages/pages/employeeregistration/employeeregistration.module": [
		"./src/app/pages/pages/employeeregistration/employeeregistration.module.ts",
		"pages-pages-employeeregistration-employeeregistration-module"
	],
	"./pages/pages/images/images.module": [
		"./src/app/pages/pages/images/images.module.ts",
		"pages-pages-images-images-module"
	],
	"./pages/pages/login/login.module": [
		"./src/app/pages/pages/login/login.module.ts",
		"pages-pages-login-login-module"
	],
	"./pages/pages/sample/sample.module": [
		"./src/app/pages/pages/sample/sample.module.ts",
		"pages-pages-sample-sample-module"
	],
	"./pages/profile/profile.module": [
		"./src/app/pages/profile/profile.module.ts",
		"pages-profile-profile-module"
	],
	"./pages/report/groupbyissue/groupbyissue.module": [
		"./src/app/pages/report/groupbyissue/groupbyissue.module.ts",
		"pages-report-groupbyissue-groupbyissue-module"
	],
	"./pages/report/issue/issue.module": [
		"./src/app/pages/report/issue/issue.module.ts",
		"pages-report-issue-issue-module"
	],
	"./pages/templates/templates.module": [
		"./src/app/pages/templates/templates.module.ts",
		"pages-templates-templates-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hasThemeInit;else themeInitContent\">\n  <amexio-nav [enable-side-nav-position]=\"true\" \n  [title]=\"'Amexio Component Examples'\"\n  [logo]=\"'assets/images/logos/amexio-logo.png'\">\n  <amexio-nav-item position-left [type]=\"'slider'\">\n  </amexio-nav-item>\n  <amexio-nav-item position-right\n    [icon]=\"'fa fa-home fa-fw fa-lg'\"\n    [title]=\"'Home'\" \n    [type]=\"'link'\" \n    (onNavItemClick)=\"onClick('http://demo.amexio.tech')\" \n    style=\"cursor: pointer;\" >\n  </amexio-nav-item>\n  <amexio-nav-item position-right\n    [type]=\"'link'\"\n    [icon]=\"'fa fa-user-circle fa-fw fa-lg'\" \n    [title]=\"'John Doe'\" \n    style=\"cursor: pointer;\" \n    (onNavItemClick)=\"onUserClick()\">\n  </amexio-nav-item>\n  <amexio-nav-item position-right *ngFor=\"let menus of topMenuData\" \n  [type]=\"'menu'\" \n  [title]=\"menus.text\"\n  [data]=\"menus.submenus\"\n  [icon]=\"menus.icon\"\n  (onNavItemClick)=\"externalLink($event)\">\t\t\t\n  </amexio-nav-item>       \n  \n  </amexio-nav>\n  \n  \n  <amexio-row>\n    <amexio-column [size]=\"'2pt5'\" style=\"padding-top: 68px;\">\n      <amexio-side-nav [http-url]=\"'assets/data/menus/sidebar.json'\" \n                      [http-method]=\"'get'\" \n                      [height]=\"'92%'\" \n                      [data-reader]=\"'data'\"\n                      (nodeClick)=\"routeToLink($event)\">\n      </amexio-side-nav>\n    </amexio-column>\n    <amexio-column [size]=\"'9pt5'\">\n      <div class=\"route-container\">\n        <div class=\"loadingnav\" *ngIf=\"isRouteLoading\">Loading&#8230;</div>\n        <router-outlet></router-outlet>\n      </div>\n    </amexio-column>\n  </amexio-row>\n  \n  \n  <amexio-floating-panel1 [event]=\"event\" [show]=\"showfloatplanel\">\n  <amexio-card >\n    <amexio-body>\n      <div class=\"floating-theme\">\n      <amexio-tab-view  [closable]=\"false\">\n        <amexio-tab title=\"Material\" [active]=\"true\">\n          <div style=\"height: 350px;overflow-x: auto\">\n            <amexio-row *ngFor=\"let objArray of materialThemeArray\" >\n              <ng-container *ngFor=\"let obj of objArray\">\n                <amexio-column style=\"cursor: pointer\" [size]=\"4\"  (click)=\"themeChange(obj)\">\n                  <amexio-image [path]=\"'assets/images/themematerialicons/'+ obj.link\"></amexio-image><br><b>{{obj.themeName}}</b>\n                </amexio-column>\n              </ng-container>\n            </amexio-row>\n          </div>\n        </amexio-tab>\n        <!-- <amexio-tab title=\"Amexio\">\n          <div style=\"height: 350px;overflow-x: auto\">\n            <amexio-row *ngFor=\"let objArray of amexioThemeArray\" >\n              <ng-container *ngFor=\"let obj of objArray\">\n                <amexio-column style=\"cursor: pointer\" [size]=\"4\"  (click)=\"themeChange(obj)\">\n                  <amexio-image [path]=\"'assets/images/themeamexioicon/'+ obj.link\"></amexio-image><br><b>{{obj.themeName}}</b>\n                </amexio-column>\n              </ng-container>\n            </amexio-row>\n          </div>\n        </amexio-tab> -->\n      </amexio-tab-view>\n    </div>\n    </amexio-body>\n  </amexio-card>\n  </amexio-floating-panel1>\n  </div>\n  \n  <ng-template #themeInitContent>\n    <style>\n      .loading {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n      }\n      .loading-bar {\n        display: inline-block;\n        width: 4px;\n        height: 18px;\n        border-radius: 4px;\n        animation: loading 1s ease-in-out infinite;\n      }\n      .loading-bar:nth-child(1) {\n        background-color: #3498db;\n        animation-delay: 0;\n      }\n      .loading-bar:nth-child(2) {\n        background-color: #c0392b;\n        animation-delay: 0.09s;\n      }\n      .loading-bar:nth-child(3) {\n        background-color: #f1c40f;\n        animation-delay: .18s;\n      }\n      .loading-bar:nth-child(4) {\n        background-color: #27ae60;\n        animation-delay: .27s;\n      }\n      @keyframes loading {\n        0% {\n          transform: scale(1);\n        }\n        20% {\n          transform: scale(1, 2.2);\n        }\n        40% {\n          transform: scale(1);\n        }\n      }\n    </style>\n    <div class=\"loading\">\n      <div class=\"loading-bar\"></div>\n      <div class=\"loading-bar\"></div>\n      <div class=\"loading-bar\"></div>\n      <div class=\"loading-bar\"></div>\n    </div>\n  </ng-template>\n  "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/http.service */ "./src/app/service/http.service.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AppComponent = /** @class */ (function () {
    function AppComponent(document, httpService, platform, _http, _router, cookieService) {
        var _this = this;
        this.document = document;
        this.httpService = httpService;
        this.platform = platform;
        this._http = _http;
        this._router = _router;
        this.cookieService = cookieService;
        this.title = 'app';
        this.data = [];
        this.menuData = [];
        this.msgList = [];
        this.isRouteLoading = false;
        this.showfloatplanel = false;
        this.flag = false;
        this.topMenuData = JSON.parse("[\n      {\n        \"text\": \"Products\",\n        \"icon\": \"fa fa-snowflake-o fa-fw\",\n        \"submenus\": [{\n          \"text\": \"Amexio API\",\n          \"link\": \"https://amexio.tech/amexio-api\"\n        }, \n        {\n          \"text\": \"Amexio API Docs\",\n          \"link\": \"http://api.amexio.tech/\"\n        },\n        {\n          \"text\": \"Amexio Canvas\",\n          \"link\": \"https://amexio.tech/amexio-canvas\"\n        },\n        {\n          \"text\": \"Amexio Colors\",\n          \"link\": \"https://amexio.tech/amexio-colors\"\n        }]\n      },\n      {\n        \"text\": \"Case Studies\",\n        \"icon\": \"fa fa-clone fa-fw\",\n        \"submenus\": [\n          {\n            \"text\": \"Showcase\",\n            \"link\": \"https://showcase.amexio.org/#/landingPage-app\"\n          },\n          {\n            \"text\": \"Traffic Analysis\",\n            \"link\": \"https://eedemo.amexio.org/#/home/dashboard\",\n            \"separator\": true,\n            \"separatorHeader\": \"Enterprise Edition Apps\"\n          },\n          {\n            \"text\": \"City Analysis\",\n            \"link\": \"https://eedemo.amexio.org/#/home/dashboardtwo\"\n          },\n          {\n            \"text\": \"Movie Portal\",\n            \"link\": \"https://cedemo.amexio.org/Virtual-Scroller/#/sc\",\n            \"separator\": true,\n            \"separatorHeader\": \"Creative Edition Apps\"\n          },\n          {\n            \"text\": \"TecMFlix\",\n            \"link\": \"https://cedemo.amexio.org/tecmflix/\"\n          },\n          {\n            \"text\": \"Creative Home Page\",\n            \"link\": \"https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/ce-demo-app\"\n          },\n          {\n            \"text\": \"Components App\",\n            \"link\": \"https://demo.amexio.org/se/v5.12/index.html#/home\",\n            \"separator\": true,\n            \"separatorHeader\": \"Standard Edition Apps\"\n          },\n          {\n            \"text\": \"Insurance Portal\",\n            \"link\": \"https://sedemo.amexio.org/se/insuranceportal/#/home\"\n          },\n          {\n            \"text\": \"Shopping Portal\",\n            \"link\": \"https://sedemo.amexio.org/se/shoppingportal/#/home\"\n          },\n          {\n            \"text\": \"US Election Results\",\n            \"link\": \"https://sedemo.amexio.org/se/us-election/ \"\n          },\n          {\n            \"text\": \"NpmStats\",\n            \"link\": \"https://www.npmstats.com/\"\n          }\n        ]\n      }, {\n      \"text\": \"About Us\",\n      \"icon\": \"fa fa-address-book-o fa-fw\",\n      \"submenus\": [{\n        \"text\": \"Contact\",\n        \"link\": \"https://metamagicglobal.com/contact\"\n      }, {\n        \"text\": \"Company\",\n        \"link\": \"http://www.metamagicglobal.com/company\"\n      }, {\n        \"text\": \"MetaMagic\",\n        \"link\": \"https://www.metamagicglobal.com/\"\n      }]\n    }\n  ]\n  ");
        this._http.get('assets/data/menus/topmenu.json').subscribe(function (response) {
            _this.httpResponse = response;
        }, function (error) {
            //prompt on error
        }, function () {
            _this.menuData = _this.httpResponse.menus;
        });
        if (this.cookieService.get('theme_name_v4')) {
            var currentTheme = document.head.querySelectorAll("link[rel=\"stylesheet\"]");
            this.removeExistingTheme(currentTheme);
            var linkEl = document.createElement('link');
            linkEl.onload = function () {
                _this.hasThemeInit = true;
            };
            linkEl.setAttribute('rel', 'stylesheet');
            linkEl.id = 'themeid';
            linkEl.href = 'assets/themes/at-md-black.css';
            document.head.appendChild(linkEl);
        }
        else {
            var linkEl = document.createElement('link');
            linkEl.onload = function () {
                _this.hasThemeInit = true;
            };
            linkEl.setAttribute('rel', 'stylesheet');
            linkEl.id = 'themeid';
            linkEl.href = 'assets/themes/at-md-rasberry-sangria.css';
            document.head.appendChild(linkEl);
        }
        //Get Data of Themes
        this.getTheThemesData();
    }
    AppComponent.prototype.routeToLink = function (data) {
        if (!data.hasOwnProperty('children') && data.link)
            this._router.navigate([data.link]);
    };
    AppComponent.prototype.externalLink = function (event) {
        if (event.data.node.link)
            //this.document.location.href=event.data.node.link;
            window.open(event.data.node.link, '_blank');
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"]) {
                _this.isRouteLoading = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"]) {
                _this.isRouteLoading = false;
            }
        });
    };
    AppComponent.prototype.onNodeClick = function (node) {
        if (node.hasOwnProperty('link'))
            this._router.navigate([node.link]);
    };
    AppComponent.prototype.getTheThemesData = function () {
        var _this = this;
        var amexioThemeRepsonse;
        var materialThemeResponse;
        //HTML FILE
        this._http.get('assets/material.json').subscribe(function (data) {
            materialThemeResponse = data;
        }, function (error) {
        }, function () {
            _this.materialThemeArray = materialThemeResponse;
        });
    };
    AppComponent.prototype.onClick = function (link) {
        // this.document.location.href=link;
        window.open(link, '_blank');
    };
    AppComponent.prototype.onUserClick = function () {
        this.amexioNav.close();
    };
    AppComponent.prototype.onHomeClick = function () {
        this._router.navigate(['home']);
        this.amexioNav.close();
    };
    //Window Open
    AppComponent.prototype.toggle = function () {
        this.flag = !this.flag;
    };
    AppComponent.prototype.themeChange = function (theme) {
        var response;
        debugger;
        this.httpService.fetch('https://api.amexio.org/api/mda/' + theme.themeJSONFile).subscribe(function (data) {
            response = data;
        }, function (error) {
        }, function () {
            var themeColor = response.themeColor;
            var appColor = response.appColor;
            var compColor = response.compColor;
            themeColor.forEach(function (style) {
                var value = style.value.replace(';', '');
                document.documentElement.style.setProperty(style.key, value);
            });
            appColor.forEach(function (style) {
                var value = style.value.replace(';', '');
                document.documentElement.style.setProperty(style.key, value);
            });
            compColor.forEach(function (style) {
                document.documentElement.style.setProperty(style.key, style.value);
            });
        });
    };
    AppComponent.prototype.addNewTheme = function (newTheme, existingTheme) {
        var _this = this;
        var linkEl = document.createElement('link');
        linkEl.onload = function () {
            _this.removeExistingTheme(existingTheme);
            _this.isRouteLoading = false;
        };
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.id = 'themeid';
        linkEl.href = newTheme;
        document.head.appendChild(linkEl);
    };
    //removed old theme css
    AppComponent.prototype.removeExistingTheme = function (keyList) {
        if (keyList != null && keyList && keyList.length != 0) {
            for (var i = 0; i < keyList.length; i++) {
                var key = keyList[i];
                if (key.id == 'themeid') {
                    document.head.removeChild(key);
                }
            }
        }
    };
    AppComponent.prototype.onFloatingClick = function (eventobject) {
        this.showfloatplanel = !this.showfloatplanel;
        this.event = eventobject.event;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioNavBarComponent"]),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "amexioNav", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _service_http_service__WEBPACK_IMPORTED_MODULE_3__["HTTPService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PlatformRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _pages_dashboardex_dashboardex_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dashboardex/dashboardex.component */ "./src/app/pages/dashboardex/dashboardex.component.ts");
/* harmony import */ var _pages_sampleformex_sampleformex_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/sampleformex/sampleformex.component */ "./src/app/pages/sampleformex/sampleformex.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _component_floatingpanel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/floatingpanel.component */ "./src/app/component/floatingpanel.component.ts");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/http.service */ "./src/app/service/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var route = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'carouseldemo', loadChildren: './pages/carouseldemo/carouseldemo.module#CarouselDemoModule'
    },
    {
        path: 'email', loadChildren: './pages/email/email.module#EmailModule'
    },
    {
        path: 'layout', loadChildren: './pages/layout/layout.module#LayoutModule'
    },
    {
        path: 'profile', loadChildren: './pages/profile/profile.module#ProfileModule'
    },
    {
        path: 'group-by-issue', loadChildren: './pages/report/groupbyissue/groupbyissue.module#GroupbyIssueModule'
    },
    {
        path: 'issue', loadChildren: './pages/report/issue/issue.module#IssueModule'
    },
    {
        path: 'images', loadChildren: './pages/pages/images/images.module#ImagesModule'
    },
    {
        path: 'issuestatus', loadChildren: './pages/issuestatus/issuestatus.module#IssueStatusModule'
    },
    {
        path: 'charts', loadChildren: './pages/charts/charts.module#ChartsModule'
    },
    {
        path: 'maps', loadChildren: './pages/maps/maps.module#MapsModule'
    },
    {
        path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'home', loadChildren: './pages/home/home.module#HomeModule'
    },
    {
        path: 'employee-registration',
        loadChildren: './pages/pages/employeeregistration/employeeregistration.module#EmployeeRegistrationModule'
    },
    {
        path: 'login', loadChildren: './pages/pages/login/login.module#LoginModule'
    },
    {
        path: 'sample', loadChildren: './pages/pages/sample/sample.module#SampleModule'
    },
    {
        path: 'datagrid', loadChildren: './pages/datagrid/datagrid.module#DataGridModule'
    },
    {
        path: 'templates', loadChildren: './pages/templates/templates.module#TemplateGridModule'
    },
    {
        path: 'action', loadChildren: './pages/action/action#ActionRoutingModule'
    },
    {
        path: 'formutils', loadChildren: './pages/formsutil/formsutil#FormUtilsRoutingModule'
    },
    {
        path: 'navigation', loadChildren: './pages/navigation/navigation.module#NavigationModule'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_dashboardex_dashboardex_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _pages_sampleformex_sampleformex_component__WEBPACK_IMPORTED_MODULE_7__["SampleFormComponent"],
                _component_floatingpanel_component__WEBPACK_IMPORTED_MODULE_10__["AmexioFloatingPanelComponent1"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioNavModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(route, { useHash: true }),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioLayoutModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioFormsModule"],
            ],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["DeviceQueryService"], _service_http_service__WEBPACK_IMPORTED_MODULE_11__["HTTPService"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["CommonDataService"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["IconLoaderService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/floatingpanel.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/floatingpanel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"floatingpanel\">\n    <div class=\"floatingpanelbutton\"> \n        <amexio-floating-button [relative] = \"true\"\n            [icon]=\"'fa fa-ellipsis-v'\" [type]=\"'red'\">\n        </amexio-floating-button>\n        <div class=\"floatingcontent\">\n                <ng-content></ng-content>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/floatingpanel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/floatingpanel.component.ts ***!
  \******************************************************/
/*! exports provided: AmexioFloatingPanelComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioFloatingPanelComponent1", function() { return AmexioFloatingPanelComponent1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by vrushabh on 14/12/17.
 */
/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - vrushabh kokil
 *
 */


var AmexioFloatingPanelComponent1 = /** @class */ (function () {
    function AmexioFloatingPanelComponent1(document, elementRef) {
        this.document = document;
        this.elementRef = elementRef;
        this.show = true;
    }
    Object.defineProperty(AmexioFloatingPanelComponent1.prototype, "event", {
        get: function () {
            return this._event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AmexioFloatingPanelComponent1.prototype, "setEvent", {
        set: function (value) {
            this._event = value;
            // this.adjustPosition();
        },
        enumerable: true,
        configurable: true
    });
    AmexioFloatingPanelComponent1.prototype.ngOnInit = function () {
    };
    AmexioFloatingPanelComponent1.prototype.adjustPosition = function () {
        //debugger;
        var cr = this.event.currentTarget.getBoundingClientRect();
        var x = cr.x;
        var y = cr.y;
        var wwidth = window.innerWidth;
        var wheight = window.innerHeight;
        this.top = null;
        this.bottom = null;
        this.left = null;
        this.right = null;
        if ((wwidth - x) < 100) {
            console.log("position at right");
            this.right = "5px";
        }
        else {
            console.log("position at left");
            this.left = (x + cr.width) + "px";
        }
        if ((wheight - y) < 100) {
            this.bottom = "100px";
        }
        else {
            this.top = (y + cr.height) + "px";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('position-top'),
        __metadata("design:type", String)
    ], AmexioFloatingPanelComponent1.prototype, "top", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('position-bottom'),
        __metadata("design:type", String)
    ], AmexioFloatingPanelComponent1.prototype, "bottom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('position-left'),
        __metadata("design:type", String)
    ], AmexioFloatingPanelComponent1.prototype, "left", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('position-right'),
        __metadata("design:type", String)
    ], AmexioFloatingPanelComponent1.prototype, "right", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('event'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AmexioFloatingPanelComponent1.prototype, "setEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('show'),
        __metadata("design:type", Boolean)
    ], AmexioFloatingPanelComponent1.prototype, "show", void 0);
    AmexioFloatingPanelComponent1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-floating-panel1',
            template: __webpack_require__(/*! ./floatingpanel.component.html */ "./src/app/component/floatingpanel.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AmexioFloatingPanelComponent1);
    return AmexioFloatingPanelComponent1;
}());



/***/ }),

/***/ "./src/app/pages/dashboardex/dashboardex.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/dashboardex/dashboardex.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<amexio-row>\n\n  <amexio-column [size]=\"4\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\" >\n      <amexio-west [contentalign]=\"'center'\" [width]=\"'100px'\" [c-class]=\"'visual'\">\n        <i class=\"fa fa-line-chart fa-3x\"></i>\n      </amexio-west>\n      <amexio-center [contentalign]=\"'left'\">\n        <span class=\"title\">200 Million</span>\n        <br>\n        <span class=\"subtitle\">Sales Volume</span>\n      </amexio-center>\n      <amexio-south [contentalign]=\"'center'\" [c-class]=\"'footer'\" ><div>10% More than last year</div></amexio-south>\n    </amexio-datapoints>\n  </amexio-column>\n\n  <amexio-column [size]=\"4\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\" >\n      <amexio-west [contentalign]=\"'center'\" [width]=\"'100px'\" [c-class]=\"'visual'\">\n        <i class=\"fa fa-line-chart fa-3x\"></i>\n      </amexio-west>\n      <amexio-center [contentalign]=\"'left'\">\n        <span class=\"title\">$10 Million</span>\n        <br>\n        <span class=\"subtitle\">Sales Revenue</span>\n      </amexio-center>\n      <amexio-south [contentalign]=\"'center'\" [c-class]=\"'footer'\"><div >5% More than last year</div></amexio-south>\n    </amexio-datapoints>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\"  >\n      <amexio-west [contentalign]=\"'center'\" [width]=\"'100px'\" [c-class]=\"'visual'\">\n        <i class=\"fa fa-line-chart fa-3x\"></i>\n      </amexio-west>\n      <amexio-center [contentalign]=\"'left'\">\n        <span class=\"title\">$2 Million</span>\n        <br>\n        <span class=\"subtitle\">Profit</span>\n      </amexio-center>\n\n      <amexio-south [contentalign]=\"'center'\" [c-class]=\"'footer'\"><div>10% More than last year</div></amexio-south>\n    </amexio-datapoints>\n  </amexio-column>\n</amexio-row>\n\n<amexio-row>  \n  <amexio-column [size]=\"6\">\n\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>\n        Motivation and Energy Level\n      </amexio-header>\n      <amexio-body>\n\n        <amexio-chart-bar [data]=\"barStackData\" [stacked]=\"true\" >\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-bar>\n\n      </amexio-body>\n    </amexio-card>\n\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>\n        Company Performance\n      </amexio-header>\n      <amexio-body>\n        <amexio-chart-bar [data]=\"barStackData\" [stacked]=\"true\" >\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-bar>\n      </amexio-body>\n    </amexio-card>\n\n  </amexio-column>\n</amexio-row>\n<amexio-row>  \n\n  <amexio-column [size]=\"6\">\n\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>\n        My Daily Activities\n      </amexio-header>\n      <amexio-body>\n        <amexio-chart-donut [data]=\"donutData\">\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-donut>\n      </amexio-body>\n    </amexio-card>\n\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>\n        Company Performance\n      </amexio-header>\n      <amexio-body>\n        <amexio-chart-area [data]=\"areaData\">\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-area>\n      </amexio-body>\n    </amexio-card>\n\n  </amexio-column>\n</amexio-row>\n<amexio-row>  \n\n  <amexio-column [size]=\"6\">\n\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Box Office Earnings - First 2 Weeks</amexio-header>\n      <amexio-body>\n        <amexio-chart-line [data]=\"lineData\">\n          <amexio-chart-legend [position]=\"'top'\"></amexio-chart-legend>\n        </amexio-chart-line>\n      </amexio-body>\n    </amexio-card>\n\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Daily Activities</amexio-header>\n      <amexio-body>\n        <amexio-chart-pie [data]=\"pieChartData\" [is3d]=\"true\">\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-pie>\n      </amexio-body>\n    </amexio-card>\n\n  </amexio-column>\n</amexio-row>\n-->\n<!--\n<amexio-row>\n\n  <amexio-column [size]=\"4\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\" >\n      <amexio-west [contentalign]=\"'center'\" [width]=\"'100px'\" [c-class]=\"'visual'\">\n        <i class=\"fa fa-line-chart fa-3x\"></i>\n      </amexio-west>\n      <amexio-center [contentalign]=\"'left'\">\n        <span class=\"title\">200 Million</span>\n        <br>\n        <span class=\"subtitle\">Sales Volume</span>\n      </amexio-center>\n      <amexio-south [contentalign]=\"'center'\" [c-class]=\"'footer'\" ><div>10% More than last year</div></amexio-south>\n    </amexio-datapoints>\n  </amexio-column>\n\n  <amexio-column [size]=\"4\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\" >\n      <amexio-west [contentalign]=\"'center'\" [width]=\"'100px'\" [c-class]=\"'visual'\">\n        <i class=\"fa fa-line-chart fa-3x\"></i>\n      </amexio-west>\n      <amexio-center [contentalign]=\"'left'\">\n        <span class=\"title\">$10 Million</span>\n        <br>\n        <span class=\"subtitle\">Sales Revenue</span>\n      </amexio-center>\n      <amexio-south [contentalign]=\"'center'\" [c-class]=\"'footer'\"><div >5% More than last year</div></amexio-south>\n    </amexio-datapoints>\n  </amexio-column>\n  <amexio-column [size]=\"4\">\n    <amexio-datapoints [west]=\"true\" [center]=\"true\" [east]=\"true\" [south]=\"true\"  >\n      <amexio-west [contentalign]=\"'center'\" [width]=\"'100px'\" [c-class]=\"'visual'\">\n        <i class=\"fa fa-line-chart fa-3x\"></i>\n      </amexio-west>\n      <amexio-center [contentalign]=\"'left'\">\n        <span class=\"title\">$2 Million</span>\n        <br>\n        <span class=\"subtitle\">Profit</span>\n      </amexio-center>\n\n      <amexio-south [contentalign]=\"'center'\" [c-class]=\"'footer'\"><div>10% More than last year</div></amexio-south>\n    </amexio-datapoints>\n  </amexio-column>\n</amexio-row>\n\n<amexio-row>  \n  <amexio-column [size]=\"6\">\n\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>\n        Motivation and Energy Level\n      </amexio-header>\n      <amexio-body>\n\n        <amexio-chart-bar [data]=\"barStackData\" [stacked]=\"true\" >\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-bar>\n\n      </amexio-body>\n    </amexio-card>\n\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>\n        Company Performance\n      </amexio-header>\n      <amexio-body>\n        <amexio-chart-bar [data]=\"barStackData\" [stacked]=\"true\" >\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-bar>\n      </amexio-body>\n    </amexio-card>\n\n  </amexio-column>\n</amexio-row>\n<amexio-row>  \n\n  <amexio-column [size]=\"6\">\n\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>\n        My Daily Activities\n      </amexio-header>\n      <amexio-body>\n        <amexio-chart-donut [data]=\"donutData\">\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-donut>\n      </amexio-body>\n    </amexio-card>\n\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>\n        Company Performance\n      </amexio-header>\n      <amexio-body>\n        <amexio-chart-area [data]=\"areaData\">\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-area>\n      </amexio-body>\n    </amexio-card>\n\n  </amexio-column>\n</amexio-row>\n<amexio-row>  \n\n  <amexio-column [size]=\"6\">\n\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Box Office Earnings - First 2 Weeks</amexio-header>\n      <amexio-body>\n        <amexio-chart-line [data]=\"lineData\">\n          <amexio-chart-legend [position]=\"'top'\"></amexio-chart-legend>\n        </amexio-chart-line>\n      </amexio-body>\n    </amexio-card>\n\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n\n    <amexio-card [footer]=\"false\" [header]=\"true\">\n      <amexio-header>Daily Activities</amexio-header>\n      <amexio-body>\n        <amexio-chart-pie [data]=\"pieChartData\" [is3d]=\"true\">\n          <amexio-chart-legend [position]=\"'bottom'\"></amexio-chart-legend>\n        </amexio-chart-pie>\n      </amexio-body>\n    </amexio-card>\n\n  </amexio-column>\n</amexio-row>\n-->\n"

/***/ }),

/***/ "./src/app/pages/dashboardex/dashboardex.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/dashboardex/dashboardex.component.ts ***!
  \************************************************************/
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
    DashboardComponent.prototype.onRowSelect = function (event) {
    };
    DashboardComponent.prototype.onRowClick = function (event) {
    };
    DashboardComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 768) {
            this.smallScreen = true;
        }
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboardex.component.html */ "./src/app/pages/dashboardex/dashboardex.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/sampleformex/sampleformex.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/sampleformex/sampleformex.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/sampleformex/sampleformex.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/sampleformex/sampleformex.component.ts ***!
  \**************************************************************/
/*! exports provided: SampleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleFormComponent", function() { return SampleFormComponent; });
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

var SampleFormComponent = /** @class */ (function () {
    function SampleFormComponent() {
        this.currentDate = new Date();
        this.chk = false;
        this.rate = 5;
        this.country = "Hello";
        this.checkboxGroupdata = {
            response: {
                data: [{
                        language: 'Learning',
                        checked: false
                    }, {
                        language: 'Shopping',
                        checked: false
                    }, {
                        language: 'Fishing',
                        checked: false
                    }
                ]
            }
        };
        this.radioGroupData = {
            response: {
                data: [{
                        gender: 'Male',
                        genderId: 'male'
                    }, {
                        gender: 'Female',
                        genderId: 'female'
                    },
                ]
            }
        };
        this.bindData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Buck Kulkarni",
                        "name_official": "Buck Kulkarni",
                        "profile": "buck.jpg",
                        "email": "buck.kulkarni@metamagic.in"
                    },
                    {
                        "name": "Araf Karsh Hamid",
                        "name_official": "Araf Karsh Hamid",
                        "profile": "karsh.jpg",
                        "email": "araf.karsh@metamagic.in"
                    },
                    {
                        "name": "ketan Gote",
                        "name_official": "Ketan Gote",
                        "profile": "ketan.jpg",
                        "email": "ketan.gote@metamagic.in"
                    },
                    {
                        "name": "vrushabh kokil",
                        "name_official": "vrushabh kokil",
                        "profile": "vrushabh.jpg",
                        "email": "vrushabh.kokil@metamagic.in"
                    },
                    {
                        "name": "Dattaram Gawas",
                        "name_official": "Dattaram Gawas",
                        "profile": "dats.jpg",
                        "email": "dattaram.gawas@metamagic.in"
                    },
                    {
                        "name": "Sagar Jadhav",
                        "name_official": "Sagar Jadhav",
                        "profile": "sagar.jpg",
                        "email": "sagar.jadhav@metamagic.in"
                    },
                    {
                        "name": "sandip mohite",
                        "name_official": "sandip mohite",
                        "profile": "sandip.jpg",
                        "email": "sandip.mohite@metamagic.in"
                    },
                    {
                        "name": "vrushabh Jadhav",
                        "name_official": "vrushabh Jadhav",
                        "profile": "ahutosh.jpg",
                        "email": "vrushabh.jadhav@metamagic.in"
                    },
                    {
                        "name": "payal Kulkarni",
                        "name_official": "payal Kulkarni",
                        "profile": "payal.jpg",
                        "email": "payal.kulkarni@metamagic.in"
                    },
                    {
                        "name": "puja more",
                        "name_official": "puja more",
                        "profile": "puja.jpg",
                        "email": "puja.more@metamagic.in"
                    },
                    {
                        "name": "Rashmi Thakkar",
                        "name_official": "Rashmi Thakkar",
                        "profile": "rashmi.jpg",
                        "email": "rashmi.thakkar@metamagic.in"
                    },
                    {
                        "name": "Deepali Arvind",
                        "name_official": "Deepali Arvind",
                        "profile": "dipali.jpg",
                        "email": "deepali.arvind@metamagic.in"
                    },
                    {
                        "name": "Ashwini Agre",
                        "name_official": "Ashwini Agre",
                        "profile": "ashwini.jpg",
                        "email": "ashwini.agre@metamagic.in"
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
    }
    SampleFormComponent.prototype.ngOnInit = function () { };
    SampleFormComponent.prototype.onClick = function (event) {
        debugger;
        this.printvalue = event;
    };
    SampleFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sampleform',
            template: __webpack_require__(/*! ./sampleformex.component.html */ "./src/app/pages/sampleformex/sampleformex.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SampleFormComponent);
    return SampleFormComponent;
}());



/***/ }),

/***/ "./src/app/service/http.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/http.service.ts ***!
  \*****************************************/
/*! exports provided: HTTPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPService", function() { return HTTPService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HTTPService = /** @class */ (function () {
    function HTTPService(http) {
        this.http = http;
    }
    HTTPService.prototype.fetch = function (url) {
        return this.http.get(url);
    };
    HTTPService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HTTPService);
    return HTTPService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/meta-magic/Amexio-theme-Demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map