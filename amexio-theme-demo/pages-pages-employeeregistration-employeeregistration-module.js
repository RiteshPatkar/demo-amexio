(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-employeeregistration-employeeregistration-module"],{

/***/ "./src/app/pages/pages/employeeregistration/employeeregistration.componet.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/pages/employeeregistration/employeeregistration.componet.ts ***!
  \***********************************************************************************/
/*! exports provided: EmployeeRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRegistrationComponent", function() { return EmployeeRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Created by sagar on 3/8/17.
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

var EmployeeRegistrationComponent = /** @class */ (function () {
    function EmployeeRegistrationComponent() {
        this.currentDate = new Date();
        this.time = new Date();
    }
    EmployeeRegistrationComponent.prototype.getCountry = function (event) {
    };
    EmployeeRegistrationComponent.prototype.getCity = function (event) {
    };
    EmployeeRegistrationComponent.prototype.getState = function (event) {
    };
    EmployeeRegistrationComponent.prototype.ngOnInit = function () { };
    EmployeeRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'employeeregistration',
            template: __webpack_require__(/*! ./employeeregistration.html */ "./src/app/pages/pages/employeeregistration/employeeregistration.html")
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeRegistrationComponent);
    return EmployeeRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages/employeeregistration/employeeregistration.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/pages/employeeregistration/employeeregistration.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-row>\n  <amexio-column [size] = \"12\">\n    <amexio-card [header] = \"true\" [footer] = \"true\">\n      <amexio-header>\n        Employee Registration\n      </amexio-header>\n      <amexio-body>\n        <amexio-tab-view>\n          <amexio-tab title=\"Profile\" [active]=\"true\">\n          <amexio-row>\n            <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'First Name'\" name=\"fname\"\n                                   [place-holder]=\"'Enter first name'\"\n                                   [enable-popover]=\"true\"\n                                   [allow-blank]=\"false\"\n                                   [error-msg]=\"'Please enter first name'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'First name should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'First name should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n            </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Last name'\" name=\"lname\"\n                                   [place-holder]=\"'Enter last-name'\"\n                                   [enable-popover]=\"true\"\n                                   [allow-blank]=\"false\"\n                                   [error-msg]=\"'Please enter last name'\"\n                                   [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Last name should be minimum 3 characters'\"\n                                   [max-error-msg]=\"'Last name should be less than 15 characters'\"\n                >\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n                <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-date-time-picker\n                  [field-label]=\"'Date of Birth'\"\n                  [time-picker]=\"false\"\n                  [date-picker]=\"true\"\n                  [(ngModel)]=\"currentDate\">\n                </amexio-date-time-picker>\n              </amexio-column>\n            <amexio-column [size]=\"6\">\n                <br>\n                <amexio-text-input [field-label]=\"'Phone'\" name=\"phone\"\n                                   [place-holder]=\"'Enter phone number'\"\n                                   [enable-popover]=\"true\"\n                                   [allow-blank]=\"false\"\n                                   [error-msg]=\"'Please enter phone number'\"\n                                   [min-length]=\"10\" [min-error-msg]=\"'Phone number should be 10 digits.'\"\n                >\n                </amexio-text-input>\n            </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                  <amexio-password-input\n                  [field-label]=\"'Password'\" name=\"password\"\n                  [place-holder]=\"'Enter password'\"\n                  [enable-popover]=\"true\"\n                  [allow-blank]=\"false\"\n                  [error-msg]=\"'Please enter Password'\"\n                  [min-length]=\"5\" [min-error-msg]=\"'Password length should be grater than 5'\"\n                  [min-length]=\"10\" [min-error-msg]=\"'Password length should be less than 10'\"\n                ></amexio-password-input>\n                </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-password-input\n                  [field-label]=\"'Confirm Password'\" name=\"confirmpassword\"\n                  [place-holder]=\"'Enter confirm password'\"\n                  [enable-popover]=\"true\"\n                  [allow-blank]=\"false\"\n                  [error-msg]=\"'Please enter confirm password'\"\n                  [min-length]=\"5\" [min-error-msg]=\"'Password length should be grater than 5'\"\n                  [min-length]=\"10\" [min-error-msg]=\"'Password length should be less than 10'\"\n                ></amexio-password-input>\n                </amexio-column>\n            </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"Address\" >\n            <amexio-row>\n              <amexio-column [size]=\"4\">\n                  <amexio-dropdown\n                  [(ngModel)]=\"countryName\"\n                  [place-holder]=\"'Choose country'\"\n                  name=\"countryName\"\n                  [data-reader]=\"'response.data'\"\n                  [field-label]=\"'Country'\"\n                  [http-url]=\"'assets/data/country.json'\"\n                  [http-method]=\"'get'\"\n                  [display-field]=\"'countryName'\"\n                  [value-field]=\"'countryId'\"\n                  (onSingleSelect)=\"getCountry($event)\">\n                </amexio-dropdown>\n              </amexio-column>\n\n                <amexio-column [size]=\"6\">\n\n                <amexio-dropdown\n                  [(ngModel)]=\"stateName\"\n                  [place-holder]=\"'Choose state'\"\n                  name=\"stateName\"\n                  [data-reader]=\"'response.data'\"\n                  [field-label]=\"'State'\"\n                  [http-url]=\"'assets/data/state.json'\"\n                  [http-method]=\"'get'\"\n                  [display-field]=\"'stateName'\"\n                  [value-field]=\"'stateCode'\"\n                  (onSingleSelect)=\"getState($event)\">\n                </amexio-dropdown>\n              </amexio-column>\n              <amexio-column [size]=\"4\">\n                <amexio-dropdown\n                  [(ngModel)]=\"cityName\"\n                  [place-holder]=\"'Choose city'\"\n                  name=\"cityName\"\n                  [data-reader]=\"'response.data'\"\n                  [field-label]=\"'City'\"\n                  [http-url]=\"'assets/data/city.json'\"\n                  [http-method]=\"'get'\"\n                  [display-field]=\"'cityName'\"\n                  [value-field]=\"'cityCode'\"\n                  (onSingleSelect)=\"getCity($event)\">\n                </amexio-dropdown>\n             <br>\n           </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n               <amexio-textarea-input [field-label]=\"'Address1'\" name=\"Address1\"\n                                       [place-holder]=\"'Enter address 1'\"\n                                       [enable-popover]=\"true\"\n                                       [allow-blank]=\"true\" [error-msg]=\"'Please enter Address 1'\"\n                                        [rows]=\"'2'\" [columns]=\"'2'\"\n                                       >\n                                       <!-- [popover-position]=\"'top'\" -->\n                </amexio-textarea-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-textarea-input [field-label]=\"'Address2'\" name=\"Address2\"\n                                       [place-holder]=\"'Enter address 2'\" [enable-popover]=\"true\"\n                                       [allow-blank]=\"true\" [error-msg]=\"'Please enter Address 2'\"\n                                       [rows]=\"'2'\" [columns]=\"'2'\"\n                                       >\n                </amexio-textarea-input>\n              </amexio-column>\n              </amexio-row>\n              <amexio-row>\n                <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Pincode'\" name=\"pincode\"\n                                   [place-holder]=\"'Enter pincode'\"\n                                   [error-msg]=\"'Please enter pincode'\"\n                                   [min-length]=\"6\" [enable-popover]=\"true\"\n                                   [allow-blank]=\"false\"\n                                   [min-error-msg]=\"'Pincode should be 6 digits.'\"\n                                   [max-length]=\"6\"  [max-error-msg]=\"'Pincode should be 6 digits.'\"\n                                   >\n                </amexio-text-input>\n              </amexio-column>\n            <amexio-column [size]=\"6\">\n            </amexio-column>\n          </amexio-row>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n      <amexio-action>\n        <!-- <div class=\"d-flex justify-content-end\">\n          <div class=\"p-2\"> -->\n            <amexio-button [label]=\"'Cancel'\" [type]=\"'info'\" [tooltip]=\"'Save'\"></amexio-button>\n          <!-- </div>\n          <div class=\"p-2\"> -->\n            <amexio-button [label]=\"'Save'\" [type]=\"'primary'\" [tooltip]=\"'Save'\"></amexio-button>\n            <!-- </div>\n          </div> -->\n      </amexio-action>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>\n"

/***/ }),

/***/ "./src/app/pages/pages/employeeregistration/employeeregistration.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/pages/employeeregistration/employeeregistration.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EmployeeRegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRegistrationModule", function() { return EmployeeRegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _employeeregistration_componet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employeeregistration.componet */ "./src/app/pages/pages/employeeregistration/employeeregistration.componet.ts");
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
    { path: '', component: _employeeregistration_componet__WEBPACK_IMPORTED_MODULE_4__["EmployeeRegistrationComponent"] }
];
var EmployeeRegistrationModule = /** @class */ (function () {
    function EmployeeRegistrationModule() {
    }
    EmployeeRegistrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioFormsModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _employeeregistration_componet__WEBPACK_IMPORTED_MODULE_4__["EmployeeRegistrationComponent"]
            ],
            providers: []
        })
    ], EmployeeRegistrationModule);
    return EmployeeRegistrationModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-employeeregistration-employeeregistration-module.js.map