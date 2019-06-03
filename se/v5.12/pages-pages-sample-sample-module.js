(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-sample-sample-module"],{

/***/ "./src/app/pages/pages/sample/sample.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/pages/sample/sample.component.ts ***!
  \********************************************************/
/*! exports provided: SampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleComponent", function() { return SampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Created by ketangote on 8/17/17.
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

var SampleComponent = /** @class */ (function () {
    function SampleComponent() {
        this.currentDate = new Date();
        this.rate = 5;
        this.disabledDate = [
            {
                "from": "13-Mar-2018",
                "to": "15-Mar-2018"
            },
            {
                "from": "20-Aug-2018",
                "to": "25-Aug-2018"
            }
        ];
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
    }
    SampleComponent.prototype.ngOnInit = function () { };
    SampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sample',
            template: __webpack_require__(/*! ./sample.html */ "./src/app/pages/pages/sample/sample.html")
        }),
        __metadata("design:paramtypes", [])
    ], SampleComponent);
    return SampleComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages/sample/sample.html":
/*!************************************************!*\
  !*** ./src/app/pages/pages/sample/sample.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-form [form-name] = \"'sampleForm'\" [header]=\"true\" [show-error]=\"true\" [height] = \"'600'\">\n  <amexio-form-header>\n    Sample Form\n  </amexio-form-header>\n  <amexio-form-body>\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-text-input [field-label]=\"'Name'\" name=\"country\"\n                           [place-holder]=\"'Enter name'\"\n                           [enable-popover]=\"true\"\n                           [icon-feedback]=\"true\"\n                           [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                           [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                           [max-error-msg]=\"'Name should be less than 15 characters'\"\n        >\n        </amexio-text-input>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-text-input [field-label]=\"'Surname'\" name=\"name\"\n                           [place-holder]=\"'Enter surname'\"\n                           [enable-popover]=\"true\"\n                           [icon-feedback]=\"true\"\n                           [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                           [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                           [max-error-msg]=\"'Surname should be less than 15 characters'\"\n        >\n        </amexio-text-input>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\"\n                               [place-holder]=\"'Enter address'\"\n                               [error-msg]=\"'Please enter address'\"\n                               [icon-feedback]=\"true\"\n                               [rows]=\"'1'\" [columns]=\"'2'\"\n                               [allow-blank]=\"false\" [enable-popover]=\"true\"\n\n        >\n        </amexio-textarea-input>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-typeahead [data-reader]=\"'response.data'\"\n                          [http-url]=\"'assets/data/country.json'\"\n                          [http-method]=\"'get'\"\n                          [allow-blank] = \"false\"\n                          [key]=\"'countryName'\"\n                          [display-field]=\"'countryName'\"\n                          [field-label]=\"'Nationality'\" [place-holder]=\"'Search'\">\n        </amexio-typeahead>\n      </amexio-column>\n    </amexio-row>\n\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n\n        <amexio-date-time-picker\n          [field-label]=\"'Date Of Birth'\"\n          [time-picker]=\"false\"\n          [date-picker]=\"true\"\n          [min-date]=\"'22-Mar-2016'\" \n          [max-date]=\"'22-Feb-2020'\"\n          [disabled-date]=\"disabledDate\"\n          [required] = \"true\"\n          [(ngModel)]=\"currentDate\">\n        </amexio-date-time-picker>\n\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-date-time-picker\n          [field-label]=\"'Time Of Birth'\"\n          [time-picker]=\"true\"\n          [date-picker]=\"false\"\n          [ngModel]=\"time\">\n        </amexio-date-time-picker>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-number-input [field-label]=\"'Age'\" name =\"age\"\n                             [place-holder]=\"'Enter Age'\">\n        </amexio-number-input>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n                  <amexio-dropdown\n                                 [(ngModel)]=\"country\"\n                                 [place-holder]=\"'Choose City'\"\n                                 name=\"country\"\n                                 [data-reader]=\"'response.data'\"\n                                 [field-label]=\"'City'\"\n                                 [http-url]=\"'assets/data/cities.json'\"\n                                 [http-method]=\"'get'\"\n                                 [search]=\"'true'\"\n                                 [allow-blank] = \"false\"\n                                 [display-field]=\"'cityName'\"\n                                 [value-field]=\"'cityName'\"\n                                 >\n                </amexio-dropdown>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-email-input [field-label]=\"'Email'\" name=\"email\"\n                            [place-holder]=\"'Enter mail id'\"\n                            [enable-popover]=\"true\"\n                            [icon-feedback]=\"true\"\n                            [allow-blank]=\"false\" [error-msg]=\"'Please enter correct mail id'\">\n        </amexio-email-input>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-password-input [field-label]=\"'Password'\" name=\"password\"\n                               [place-holder]=\"'Enter Password'\"\n                               [allow-blank]=\"false\"\n                               [error-msg]=\"'Please enter password'\"\n                               [min-length]=\"6\"\n                               [min-error-msg]=\"'Minimum 6 char required'\"\n                               [max-length]=\"32\"\n                               [max-error-msg]=\"'Maximum 32 char allowed'\"\n                               [enable-popover]=\"true\">\n        </amexio-password-input>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-checkbox-group\n          [field-label]=\"'Hobbies'\" name=\"language\"\n          [horizontal]=\"true\"\n          [required] = \"true\"\n          [data-reader]=\"'response.data'\"\n          [display-field]=\"'language'\"\n          [value-field]=\"'checked'\"\n          [data]=\"checkboxGroupdata\">\n        </amexio-checkbox-group>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-radio-group\n          name=\"name\"\n          [field-label] = \"'Gender'\"\n          [horizontal]=\"true\"\n          [allow-blank] = \"false\"\n          [data-reader]=\"'response.data'\"\n          [display-field]=\"'gender'\"\n          [value-field]=\"'genderId'\"\n          [data]=\"radioGroupData\"\n          >\n        </amexio-radio-group>\n      </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n      <amexio-slider [(ngModel)]=\"name\" minvalue=\"0\" maxvalue=\"100\" stepvalue=\"10\"></amexio-slider>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n      <amexio-fileupload [http-url]=\"'/upload'\"\n        [http-method]=\"'POST'\"\n        [file-type]=\"'image/*'\"\n        [multiple-file]=\"'*'\"\n        [droppable]=\"true\"\n        [field-label]=\"'Photo Upload'\">\n      </amexio-fileupload>\n    </amexio-column>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-tag-input [data-reader]=\"'response.data'\"\n                          [http-url]=\"'assets/data/country.json'\"\n                          [http-method]=\"'get'\"\n                          [key]=\"'countryName'\"\n                          [allow-blank]=\"false\"\n                          [display-field]=\"'countryName'\"\n                          [field-label]=\"'Having visa'\">\n        </amexio-tag-input>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <amexio-rating-input [field-label]=\"'Credit rating'\"  [(ngModel)]=\"rate\" [max]=\"10\" name=\"rate\"></amexio-rating-input>\n      </amexio-column>\n    </amexio-row>\n\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n      <amexio-item-selector [height]=\"200\" [display-field]=\"'countryName'\"\n                            [value-field]=\"'countryId'\"\n                            [http-url]=\"'assets/data/itemdata.json'\"\n                            [http-method]=\"'get'\" [data-reader]=\"'data'\" >\n      </amexio-item-selector>\n      </amexio-column>\n    </amexio-row>\n  </amexio-form-body>\n  <amexio-form-action>\n      <amexio-btn-group>\n        <amexio-button [label]=\"'OK'\"\n                       [type]=\"'theme-color'\"\n                       [tooltip]=\"'OK'\"\n                       [disabled]=\"'true'\"\n                       [form-bind]=\"'sampleForm'\">\n        </amexio-button>\n        <amexio-button [label]=\"'Cancel'\"\n                       [type]=\"'theme-color'\"\n                       [tooltip]=\"'Cancel'\">\n        </amexio-button>\n      </amexio-btn-group>\n  </amexio-form-action>\n</amexio-form>\n\n"

/***/ }),

/***/ "./src/app/pages/pages/sample/sample.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/pages/sample/sample.module.ts ***!
  \*****************************************************/
/*! exports provided: SampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleModule", function() { return SampleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _sample_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sample.component */ "./src/app/pages/pages/sample/sample.component.ts");
/**
 * Created by ketangote on 8/17/17.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _sample_component__WEBPACK_IMPORTED_MODULE_5__["SampleComponent"] }
];
var SampleModule = /** @class */ (function () {
    function SampleModule() {
    }
    SampleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioFormsModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _sample_component__WEBPACK_IMPORTED_MODULE_5__["SampleComponent"]
            ],
            providers: []
        })
    ], SampleModule);
    return SampleModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-sample-sample-module.js.map