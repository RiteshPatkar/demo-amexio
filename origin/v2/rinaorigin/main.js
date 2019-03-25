(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.html":
/*!***************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card-ce>\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n      THANK YOU\n    </amexio-label>\n  </amexio-header-ce>\n  <rina-step-box [active-index]=\"8\"></rina-step-box>\n  <amexio-body-ce [align]=\"'start'\">\n    <amexio-row>\n      <amexio-column size=\"3\"></amexio-column>\n      <amexio-column size=\"6\">\n        <amexio-label>{{appointmentMsg}}</amexio-label><br /><br />\n        <amexio-label>Service Location:</amexio-label><br />\n        <amexio-label>Emirates Motor Company</amexio-label><br />\n        <amexio-label>M5, intersection, 17th Street</amexio-label><br />\n        <amexio-label>Phone: +91.0987654321</amexio-label><br /><br />\n      </amexio-column>\n      <amexio-column size=\"3\"></amexio-column>\n    </amexio-row>\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-button [label]=\"'Close'\" [type]=\"'theme-color'\" [tooltip]=\"'Close'\" [size]=\"'large'\" (onClick)=\"close($event)\">\n    </amexio-button>\n  </amexio-action-ce>\n</amexio-card-ce>\n"

/***/ }),

/***/ "../rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.ts":
/*!*************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.ts ***!
  \*************************************************************************************/
/*! exports provided: AppoinmentConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppoinmentConfirmationComponent", function() { return AppoinmentConfirmationComponent; });
/* harmony import */ var projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/rina-lib/src/lib/services/alfahim/personal.details.service */ "../rina-lib/src/lib/services/alfahim/personal.details.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppoinmentConfirmationComponent = /** @class */ (function () {
    function AppoinmentConfirmationComponent(service) {
        this.service = service;
        this.onConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serviceAvailibilityModel = this.service.getPeferredLocation();
    }
    AppoinmentConfirmationComponent.prototype.close = function (event) {
        this.onConfirm.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AppoinmentConfirmationComponent.prototype, "onConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appointment-msg'),
        __metadata("design:type", String)
    ], AppoinmentConfirmationComponent.prototype, "appointmentMsg", void 0);
    AppoinmentConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'appointment-confirmation',
            template: __webpack_require__(/*! ./appointment.confirmation.html */ "../rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.html")
        }),
        __metadata("design:paramtypes", [projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__["PersonalDetailsService"]])
    ], AppoinmentConfirmationComponent);
    return AppoinmentConfirmationComponent;
}());



/***/ }),

/***/ "../rina-lib/src/lib/components/before-confirm/before.confirm.component.html":
/*!***********************************************************************************!*\
  !*** ../rina-lib/src/lib/components/before-confirm/before.confirm.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<amexio-card-ce>\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n      BEFORE YOU CONFIRM\n    </amexio-label>\n  </amexio-header-ce>\n  <rina-step-box [active-index]=\"6\"></rina-step-box>\n\n  <amexio-body-ce [align]=\"'start'\">\n    <amexio-label [size]=\"'medium'\">We've got some iconic Lifestyle Accessories just for you!</amexio-label>\n    <amexio-layout-columns [fit]=\"false\" [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'start'\">\n      <amexio-layout-item *ngFor=\"let accessiories of accessioriesData\" style=\"min-width:24%;\">\n        <content-card [image-url]=\"'https://demo.amexio.org/alfahim/'+accessiories.imageUrl\" [description]=\"accessiories.description\">\n          <amexio-button [label]=\"'SHOW ME'\" [type]=\"'green'\" [tooltip]=\"'show me'\">\n          </amexio-button>\n        </content-card>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Back'\" [size]=\"'large'\" (onClick)=\"onBackHandle($event)\">\n        </amexio-button>\n        <amexio-button [label]=\"'SKIP'\" [type]=\"'theme-color'\" [tooltip]=\"'skip'\" [size]=\"'large'\" (onClick)=\"onClickHandle($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action-ce>\n</amexio-card-ce>\n"

/***/ }),

/***/ "../rina-lib/src/lib/components/before-confirm/before.confirm.component.ts":
/*!*********************************************************************************!*\
  !*** ../rina-lib/src/lib/components/before-confirm/before.confirm.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BeforeConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeConfirmComponent", function() { return BeforeConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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
 * Created by dattaram on 24/1/19.
 */

var BeforeConfirmComponent = /** @class */ (function () {
    function BeforeConfirmComponent() {
        this.accessioriesData = [];
        this.onBeforeConfirmClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.steps = [];
        this.steps = ['fa-user ', 'fa-home', 'fa-shopping-cart', 'fa fa-money'];
    }
    BeforeConfirmComponent.prototype.ngOnInit = function () {
        this.accessioriesData = [
            {
                "imageUrl": "assets/images/mbwatch.jpg",
                "description": "Men's Black Edition Business chronograph watch. Stainless steel case with black PVD coating. Black dial with blue highlights. Stainless steel hands with luminous detail. Stainless steel bracelet strap with black PVD coating. Stopwatch function. Water-resistant to 10 ATM. Diameter 43 mm. Ronda 5021 quartz chronograph movement. Swiss made."
            },
            {
                "imageUrl": "assets/images/mbcap.jpg",
                "description": "Basic cap. 100% cotton. Metal clasp for adjusting fit. Black B6 695 2242. Black/white B6 695 2243. Navy B6 695 2244"
            },
            {
                "imageUrl": "assets/images/mbcar.jpg",
                "description": "The annual endurance race of the Mille Miglia attracted a very impressive group of competitors in 1955. Mercedes-Benz had big plans up its sleeve, so it sent over a fleet of four racing cars, all of the type 300 SLR, which was to make its debut here. Piloted by world-famous top drivers, the 300 SLR was intended to be a passport to victory over such hard competitors as Ferrari, Maserati, and Aston Martin. Half of Italy was on its feet to follow the national racing highlight of the year."
            },
            {
                "imageUrl": "assets/images/mbkey.png",
                "description": "This practical key ring in robust stainless steel echoes the illuminated version of the central Mercedes star. The black PVD-coated background features a diamond pattern while the inner contours of the Mercedes star have a luminous finish which, after exposure to daylight or an artificial light source, glows blue in the dark for up to four hours. The key ring, which measures approx. 9 cm in length, features a flat split ring, engraved with Mercedes-Benz, and three mini split rings for quick removal and replacement of individual keys."
            }
        ];
    };
    BeforeConfirmComponent.prototype.onClickHandle = function (event) {
        this.onBeforeConfirmClick.emit(event);
    };
    BeforeConfirmComponent.prototype.onBackHandle = function (event) {
        this.onBeforeBack.emit(event);
    };
    BeforeConfirmComponent.prototype.onCancel = function (event) {
        this.onClose.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BeforeConfirmComponent.prototype, "onBeforeConfirmClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BeforeConfirmComponent.prototype, "onBeforeBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BeforeConfirmComponent.prototype, "onClose", void 0);
    BeforeConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'before-confirm',
            template: __webpack_require__(/*! ./before.confirm.component.html */ "../rina-lib/src/lib/components/before-confirm/before.confirm.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BeforeConfirmComponent);
    return BeforeConfirmComponent;
}());



/***/ }),

/***/ "../rina-lib/src/lib/components/confirmation/service.confirmation.html":
/*!*****************************************************************************!*\
  !*** ../rina-lib/src/lib/components/confirmation/service.confirmation.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-spinner [show]=\"showLoader\" [type]=\"'rectanglebounce'\" [vertical-position]=\"'center'\" [horizontal-position]=\"'center'\" [color]=\"'yellow'\">\n</amexio-spinner>\n\n\n\n<amexio-card-ce class=\"serviceconf\">\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n      PLEASE CONFIRM DETAILS\n    </amexio-label>\n  </amexio-header-ce>\n  <rina-step-box [active-index]=\"7\"></rina-step-box>\n  <amexio-body-ce [align]=\"'start'\">\n    <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'end'\">\n            <table>\n              <tr style=\"vertical-align: top;text-align: left\" *ngFor=\"let data of serviceConfirmData\">\n                <td>\n                  <b>{{data.fieldName}}</b>\n                </td>\n                <td style=\"word-break: break-all;max-width: 250px\">\n                  {{data.fieldValue}}\n                </td>\n              </tr>\n\n              <tr style=\"vertical-align: top;text-align: left\">\n                <td>\n                  <b>Service Type</b>\n                </td>\n                <td style=\"word-break: break-all;max-width: 250px\">\n                  <ng-container *ngIf=\"extraServiceData && extraServiceData.selectedJobType\">\n                    <ng-container *ngFor=\"let type of extraServiceData.selectedJobType; let index=index\">\n                      {{index+1}}. {{type.typeName}}<br>\n                    </ng-container>\n                  </ng-container>\n                </td>\n              </tr>\n\n              <tr style=\"vertical-align: top;text-align: left\" *ngIf=\"extraServiceData\">\n                <td>\n                  <b>Remarks</b>\n                </td>\n                <td style=\"word-break: break-all;max-width: 250px\">\n                    {{extraServiceData.remarks}}\n                </td>\n              </tr>\n            </table>\n      <amexio-layout-item [fit]=\"true\">\n        <amexio-google-map [initial-zoom-level]=\"8\" [initial-lat]=\"24.4086\" [initial-lng]=\"55.2701\" [height]=\"'100%'\" [data]=\"serviceStations\" [google-map-key]=\"'AIzaSyDKSPX97z-ndeh_Mgq3xkaML2Kp9AwHA9s'\">\n        </amexio-google-map>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Back'\" (onClick)=\"onBackClick()\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\">\n        </amexio-button>\n        <amexio-button [label]=\"'Confirm'\" [type]=\"'theme-color'\" [tooltip]=\"'Confirm'\" [size]=\"'large'\" (onClick)=\"confirmAppointment($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action-ce>\n</amexio-card-ce>\n\n"

/***/ }),

/***/ "../rina-lib/src/lib/components/confirmation/service.confirmation.ts":
/*!***************************************************************************!*\
  !*** ../rina-lib/src/lib/components/confirmation/service.confirmation.ts ***!
  \***************************************************************************/
/*! exports provided: ServiceConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceConfirmationComponent", function() { return ServiceConfirmationComponent; });
/* harmony import */ var projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/rina-lib/src/lib/services/alfahim/personal.details.service */ "../rina-lib/src/lib/services/alfahim/personal.details.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/rina-lib/src/public_api */ "../rina-lib/src/public_api.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amexio-ng-extensions */ "../../node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/shared/personal.details.model */ "../rina-lib/src/lib/model/shared/personal.details.model.ts");
/* harmony import */ var _services_shared_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared/http.service */ "../rina-lib/src/lib/services/shared/http.service.ts");
/* harmony import */ var _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/shared/propertygrid.model */ "../rina-lib/src/lib/model/shared/propertygrid.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ServiceConfirmationComponent = /** @class */ (function () {
    function ServiceConfirmationComponent(personalDetailsService, datePipe, _httpService) {
        this.personalDetailsService = personalDetailsService;
        this.datePipe = datePipe;
        this._httpService = _httpService;
        this.serviceLocations = [];
        this.timeSlots = [];
        this.assitantPerson = [];
        this.orderConfirm = true;
        this.serviceStations = [];
        this.extraServiceData = null;
        this.showLoader = false;
        this.serviceConfirmData = [];
        this.onPrevious = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.personalDetails = new _model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_4__["PersonalDetails"]();
        if (this.personalDetailsService.getPersonalDetails()) {
            this.personalDetails = this.personalDetailsService.getPersonalDetails();
        }
        this.extraServiceData = this.personalDetailsService.getExtraServiceData();
    }
    ServiceConfirmationComponent.prototype.createServiceDataStructure = function () {
        this.serviceConfirmData = [];
        this.serviceConfirmData.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_6__["PropertyGridModel"]('Name', this.personalDetails.firstName + ' ' + this.personalDetails.surname));
        this.serviceConfirmData.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_6__["PropertyGridModel"]('Booking Date', this.datePipe.transform(this.serviceModel.selectedSlotDate, 'MMM dd, yyyy')));
        this.serviceConfirmData.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_6__["PropertyGridModel"]('Booking Time', this.serviceModel.selectedSlot.toString()));
        this.serviceConfirmData.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_6__["PropertyGridModel"]('Assitant Name', this.serviceModel.assitantPersonName));
        this.serviceConfirmData.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_6__["PropertyGridModel"]('Phone no', this.personalDetails.phone));
        this.serviceConfirmData.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_6__["PropertyGridModel"]('Email Id', this.personalDetails.email));
    };
    ServiceConfirmationComponent.prototype.ngOnInit = function () {
        if (this.serviceModel) {
            this.loadData();
        }
        this.serviceStations = [];
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["GoogleMapOverlays"](Number(this.serviceModel.locationModel.latitude), Number(this.serviceModel.locationModel.longitude), this.serviceModel.locationName + ', UAE', true, 'https://testapi.amexio.org/api/v5.5/assets/images/googlemap/mercgooglemarker.png', { country: 'United Arab Emirates', capital: 'Abu Dhabi' }));
        this.createServiceDataStructure();
    };
    ServiceConfirmationComponent.prototype.confirmAppointment = function (personalDetails) {
        var _this = this;
        this.showLoader = true;
        var response;
        var requestBody = {
            'profileDetails': this.personalDetailsService.getPersonalDetails(),
            'orderDetails': this.personalDetailsService.getPeferredLocation()
        };
        this._httpService.post('booking/confirm', 'post', requestBody).subscribe(function (res) {
            response = res;
        }, function (err) {
            _this.showLoader = false;
        }, function () {
            if (response.success) {
                _this.showLoader = false;
                _this.onConfirm.emit(personalDetails);
            }
            else {
                _this.showLoader = false;
            }
        });
    };
    ServiceConfirmationComponent.prototype.onBackClick = function () {
        this.onPrevious.emit(this.serviceModel);
    };
    ServiceConfirmationComponent.prototype.close = function (event) {
        this.orderConfirm = false;
    };
    ServiceConfirmationComponent.prototype.loadData = function () {
        this.loadLocations();
        this.loadAssitants();
        this.loadWorkingSlots();
    };
    ServiceConfirmationComponent.prototype.loadWorkingSlots = function () {
        this.timeSlots = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["TimeUtil"]().workingslot1();
    };
    ServiceConfirmationComponent.prototype.loadAssitants = function () {
        var _this = this;
        var response;
        this.personalDetailsService.getAssitantList(this.serviceModel.location).subscribe(function (res) {
            response = res;
        }, 
        // tslint:disable-next-line:no-shadowed-variable
        function (error) {
            console.log('Invalid url');
        }, function () {
            _this.assitantPerson = response;
        });
    };
    ServiceConfirmationComponent.prototype.loadLocations = function () {
        var _this = this;
        var response;
        this.personalDetailsService.getLocations().subscribe(function (res) {
            response = res;
        }, 
        // tslint:disable-next-line:no-shadowed-variable
        function (error) {
            console.log('Invalid url');
        }, function () {
            _this.serviceLocations = response;
        });
    };
    ServiceConfirmationComponent.prototype.onCancel = function (event) {
        this.onClose.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('service-model'),
        __metadata("design:type", projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ServiceAvailibilityModel"])
    ], ServiceConfirmationComponent.prototype, "serviceModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ServiceConfirmationComponent.prototype, "onPrevious", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ServiceConfirmationComponent.prototype, "onConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ServiceConfirmationComponent.prototype, "onClose", void 0);
    ServiceConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'service-confirmation',
            template: __webpack_require__(/*! ./service.confirmation.html */ "../rina-lib/src/lib/components/confirmation/service.confirmation.html")
        }),
        __metadata("design:paramtypes", [projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__["PersonalDetailsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _services_shared_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], ServiceConfirmationComponent);
    return ServiceConfirmationComponent;
}());



/***/ }),

/***/ "../rina-lib/src/lib/components/content-card/content.card.component.html":
/*!*******************************************************************************!*\
  !*** ../rina-lib/src/lib/components/content-card/content.card.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card-ce>\n  <amexio-body-ce [align]=\"'start'\">\n    <amexio-layout-columns [border]=\"false\" [orientation]=\"'vertical'\" [alignment]=\"'space-between'\">\n      <amexio-layout-item >\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n          <amexio-layout-item [ngClass]=\"{'content-card': description}\">\n            <amexio-image [path]=\"imageUrl\">\n            </amexio-image>\n            <br/>\n            <amexio-label [size]=\"'medium-bold'\" *ngIf=\"title\">{{title}}</amexio-label>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-layout-item>\n\n      <amexio-layout-item style=\"max-height: 200px; overflow: auto;\">\n        <rina-property-grid *ngIf=\"propertyData.length > 0\" [key-value-data]=\"propertyData\" [has-border]=\"false\"></rina-property-grid>\n        <p *ngIf=\"description\">{{description}}</p>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <ng-content></ng-content>\n  </amexio-action-ce>\n</amexio-card-ce>\n"

/***/ }),

/***/ "../rina-lib/src/lib/components/content-card/content.card.component.ts":
/*!*****************************************************************************!*\
  !*** ../rina-lib/src/lib/components/content-card/content.card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ContentCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentCardComponent", function() { return ContentCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/**
 * Created by dattaram on 24/1/19.
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

var ContentCardComponent = /** @class */ (function () {
    function ContentCardComponent() {
        this.propertyData = [];
    }
    ContentCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('image-url'),
        __metadata("design:type", String)
    ], ContentCardComponent.prototype, "imageUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", String)
    ], ContentCardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('description'),
        __metadata("design:type", String)
    ], ContentCardComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('property-data'),
        __metadata("design:type", Array)
    ], ContentCardComponent.prototype, "propertyData", void 0);
    ContentCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'content-card',
            template: __webpack_require__(/*! ./content.card.component.html */ "../rina-lib/src/lib/components/content-card/content.card.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ContentCardComponent);
    return ContentCardComponent;
}());



/***/ }),

/***/ "../rina-lib/src/lib/components/customer-vehicle-list/customer.vehiclelist.component.html":
/*!************************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/customer-vehicle-list/customer.vehiclelist.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card-ce>\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n      QUICK BOOKING\n    </amexio-label>\n  </amexio-header-ce>\n  <amexio-body-ce [align]=\"'start'\">\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-label [size]=\"'small-bold'\"> Please select vehicle you would like to get serviced: </amexio-label>\n      </amexio-column><br/>\n    </amexio-row>\n    <amexio-row>\n      <amexio-column [fit]=\"true\" [size]=\"4\" *ngFor=\"let vehicle of contentCardData\">\n        <content-card [title]=\"vehicle.title\" [image-url]=\"vehicle.imageUrl\" [property-data]=\"vehicle.propertyData\">\n          <div *ngIf=\"vehicle.vehicleMetadata.bu === 'CME'\">\n            <amexio-label [font-color]=\"'red'\">Sorry, we are not accepting Service Bookings for CME Business Unit.</amexio-label>\n          </div>\n          <div *ngIf=\"vehicle.vehicleMetadata.bu != 'CME'\" class=\"inputgroup from-group\">\n            <label for=\"{{vehicle.vehicleId}}\" [attr.aria-checked]=\"vehicle.selected\" [attr.aria-disabled]=\"(vehicle.vehicleMetadata.bu === 'CME')\" class=\"input-box-container\" style=\"padding-bottom:0px !important; margin: 5px !important\" (click)=\"selectVehicle(vehicle)\">\n              Select Vehicle\n              <input  style=\"top:0; left:0\" id=\"{{vehicle.vehicleId}}\" type=\"radio\"\n                      name=\"selectvehicle\" [value]=\"vehicle.selected\"\n                      [checked]=\"vehicle.selected\">\n\n              <span class=\"input-box-radiobox-label\"></span>\n            </label>\n          </div>\n        </content-card>\n      </amexio-column>\n    </amexio-row>\n\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Back'\" [size]=\"'large'\" (onClick)=\"onBackHandle($event)\">\n        </amexio-button>\n        <amexio-button [label]=\"'Next'\" [disabled]=\"selectedVehicle === null ? true : false\" [type]=\"'theme-color'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"onClickHandle()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action-ce>\n</amexio-card-ce>\n"

/***/ }),

/***/ "../rina-lib/src/lib/components/customer-vehicle-list/customer.vehiclelist.component.ts":
/*!**********************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/customer-vehicle-list/customer.vehiclelist.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CustomerVehicleListComponent, ContentCardData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerVehicleListComponent", function() { return CustomerVehicleListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentCardData", function() { return ContentCardData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rinaalfahim_src_app_models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../rinaalfahim/src/app/models/customer.profile.model */ "../rinaalfahim/src/app/models/customer.profile.model.ts");
/* harmony import */ var _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/shared/propertygrid.model */ "../rina-lib/src/lib/model/shared/propertygrid.model.ts");
/* harmony import */ var _model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/shared/personal.details.model */ "../rina-lib/src/lib/model/shared/personal.details.model.ts");
/* harmony import */ var _services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alfahim/personal.details.service */ "../rina-lib/src/lib/services/alfahim/personal.details.service.ts");
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
 * Created by dattaram on 23/1/19.
 */





var CustomerVehicleListComponent = /** @class */ (function () {
    function CustomerVehicleListComponent(_personalDetailsService) {
        this._personalDetailsService = _personalDetailsService;
        this.contentCardData = [];
        this.onVehicleListNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedVehicle = null;
        this.selected = false;
    }
    CustomerVehicleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.customerProfile && this.customerProfile.vehicles.length > 0) {
            this.customerProfile.vehicles.forEach(function (vehicle) {
                _this.contentCardData.push(new ContentCardData(vehicle.vehicleDetail.image, vehicle.vehicleDetail.modelName, _this.createVehiclePropertyStructure(vehicle), vehicle));
            });
        }
    };
    CustomerVehicleListComponent.prototype.selectVehicle = function (vehicle) {
        this.contentCardData.forEach(function (veh) {
            veh.selected = false;
        });
        vehicle.selected = true;
        if (vehicle.selected) {
            this.selectedVehicle = vehicle;
        }
        else {
            this.selectedVehicle = null;
        }
        this._personalDetailsService.setSelectedVehicleData(vehicle);
    };
    CustomerVehicleListComponent.prototype.createVehiclePropertyStructure = function (vehicle) {
        var vehicleKeyValuedata = [];
        vehicleKeyValuedata.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_2__["PropertyGridModel"]('Model Year', vehicle.vehicleDetail.modelYear));
        vehicleKeyValuedata.push(new _model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_2__["PropertyGridModel"]('License Plate', vehicle.registrationNo));
        return vehicleKeyValuedata;
    };
    CustomerVehicleListComponent.prototype.onClickHandle = function () {
        this.onVehicleListNext.emit(this.createPersonalDetails());
    };
    CustomerVehicleListComponent.prototype.createPersonalDetails = function () {
        var personalDetails = new _model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_3__["PersonalDetails"]();
        personalDetails.firstName = this.customerProfile.firstName;
        personalDetails.surname = this.customerProfile.lastName;
        personalDetails.email = this.customerProfile.email;
        personalDetails.phone = this.customerProfile.mobile;
        personalDetails.perferredContact = this.customerProfile.preferredModeOfContact;
        if (this.selectedVehicle != null) {
            personalDetails.vehicleType = this.selectedVehicle.vehicleMetadata.vehicleDetail.vehicleClass;
            personalDetails.modelYear = this.selectedVehicle.vehicleMetadata.vehicleDetail.modelYear;
            personalDetails.registrationNumber = this.selectedVehicle.vehicleMetadata.registrationNo;
        }
        return personalDetails;
    };
    CustomerVehicleListComponent.prototype.onBackHandle = function (event) {
        this.onBack.emit(event);
    };
    CustomerVehicleListComponent.prototype.onCancel = function (event) {
        this.onClose.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('customer-profile'),
        __metadata("design:type", _rinaalfahim_src_app_models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__["CustomerProfile"])
    ], CustomerVehicleListComponent.prototype, "customerProfile", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomerVehicleListComponent.prototype, "onVehicleListNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomerVehicleListComponent.prototype, "onBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomerVehicleListComponent.prototype, "onClose", void 0);
    CustomerVehicleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customer-vehicle-list',
            template: __webpack_require__(/*! ./customer.vehiclelist.component.html */ "../rina-lib/src/lib/components/customer-vehicle-list/customer.vehiclelist.component.html")
        }),
        __metadata("design:paramtypes", [_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_4__["PersonalDetailsService"]])
    ], CustomerVehicleListComponent);
    return CustomerVehicleListComponent;
}());

var ContentCardData = /** @class */ (function () {
    function ContentCardData(_imageUrl, _title, _propertyData, _vehicleMetadata) {
        this.propertyData = [];
        this.imageUrl = _imageUrl;
        this.title = _title;
        this.propertyData = _propertyData;
        this.selected = false;
        this.vehicleMetadata = _vehicleMetadata;
    }
    return ContentCardData;
}());



/***/ }),

/***/ "../rina-lib/src/lib/components/preferred-location/preferred-location.component.html":
/*!*******************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/preferred-location/preferred-location.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<amexio-card-ce>\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n      Preferred location\n    </amexio-label>\n  </amexio-header-ce>\n  <rina-step-box [active-index]=\"4\"></rina-step-box>\n  <amexio-body-ce [align]=\"'start'\">\n\n    <service-availiblity-lib #formgroup [service-model]=\"serviceModel\" [start-time]=\"10\" [end-time]=\"15\"></service-availiblity-lib>\n\n  </amexio-body-ce>\n\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right>\n        <div class=\"amexio-checkbox-style\">\n          <amexio-checkbox [field-label]=\"'Notify SA'\" [(ngModel)]=\"serviceModel.isNotifySA\">\n          </amexio-checkbox>\n        </div>\n\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Proceed to personal profile'\" [size]=\"'large'\" (onClick)=\"backClick($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right>\n        <amexio-button [label]=\"'Schedule'\" [disabled]=\"!this.serviceModel.isValidate()\" [type]=\"'theme-color'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"scheduleAppointment()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action-ce>\n\n</amexio-card-ce>\n"

/***/ }),

/***/ "../rina-lib/src/lib/components/preferred-location/preferred.location.component.ts":
/*!*****************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/preferred-location/preferred.location.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PreferredLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferredLocationComponent", function() { return PreferredLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/service.availiblity.model */ "../rina-lib/src/lib/model/service.availiblity.model.ts");
/**
 * Created by dattaram on 18/1/19.
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


var PreferredLocationComponent = /** @class */ (function () {
    function PreferredLocationComponent() {
        this.secondaryButton = 'Back';
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPrevious = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.serviceModel = new _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"]();
    }
    PreferredLocationComponent.prototype.ngOnInit = function () { };
    PreferredLocationComponent.prototype.scheduleAppointment = function () {
        if (this.serviceModel.appointmentDate) {
            var todayDate = new Date();
            this.serviceModel.serviceTimeLeft = Math.round(Math.abs((this.serviceModel.selectedSlotDate.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24)));
        }
        this.onNext.emit(this.serviceModel);
    };
    PreferredLocationComponent.prototype.backClick = function (event) {
        this.onPrevious.emit(event);
    };
    PreferredLocationComponent.prototype.onCancel = function (event) {
        this.onClose.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('service-model'),
        __metadata("design:type", _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"])
    ], PreferredLocationComponent.prototype, "serviceModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('Secondary-button'),
        __metadata("design:type", Object)
    ], PreferredLocationComponent.prototype, "secondaryButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PreferredLocationComponent.prototype, "onNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PreferredLocationComponent.prototype, "onPrevious", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PreferredLocationComponent.prototype, "onClose", void 0);
    PreferredLocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'preferred-location',
            template: __webpack_require__(/*! ./preferred-location.component.html */ "../rina-lib/src/lib/components/preferred-location/preferred-location.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PreferredLocationComponent);
    return PreferredLocationComponent;
}());



/***/ }),

/***/ "../rina-lib/src/lib/components/property-grid/propertygrid.component.html":
/*!********************************************************************************!*\
  !*** ../rina-lib/src/lib/components/property-grid/propertygrid.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card [class.remove-border]=\"!hasBorder\" [header]=\"false\" [footer]=\"false\">\n    <amexio-body class=\"property-style\">\n          <div *ngIf=\"hasRadio && hasRadioTitle && hasRadioTitleData\"  class=\"inputgroup from-group\">\n            <label [ngClass]=\"{'disabled-Style': hasRadioTitleData.disabled}\" for=\"{{hasRadioTitleData.title}}\" [attr.aria-checked]=\"hasRadioTitleData.selected\"   class=\"input-box-container\" style=\"padding-bottom:0px !important;\" >\n              <b>{{hasRadioTitleData.title}}</b>\n              <input  [attr.disabled]=\"hasRadioTitleData.disabled ? true: null\" (click)=\"selectRadio(hasRadioTitleData)\"  style=\"top:0; left:0\" id=\"{{hasRadioTitleData.title}}\" type=\"radio\"\n                      name=\"selectTitle\" [value]=\"hasRadioTitleData.selected\"\n                      [checked]=\"hasRadioTitleData.selected ? true : null\">\n\n              <span class=\"input-box-radiobox-label\"></span>\n            </label>\n          </div>\n          <div *ngIf=\"!hasRadio && hasRadioTitleData\">\n            <b>{{hasRadioTitleData.title}}</b>\n          </div>\n\n      <ng-container *ngIf=\"data && data.length > 0; else elseBlock\">\n        <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'end'\">\n            <amexio-layout-item style=\"width: 20%\" *ngIf=\"hasImage\">\n              <amexio-image [path]=\"image\" [filter]=\"'round'\">\n              </amexio-image>\n            </amexio-layout-item>\n            <amexio-layout-item [fit]=\"true\">\n                <table style=\"padding: 2px;\">\n                  <tr *ngFor=\"let item of data\">\n                    <td>{{item.fieldName}}:</td>\n                    <td style=\"word-break: break-all;\">{{item.fieldValue}}</td>\n                  </tr>\n                </table>\n\n            </amexio-layout-item>\n          </amexio-layout-columns>\n      </ng-container>\n      <ng-template #elseBlock>\n        Account not found\n      </ng-template>\n      <ng-container *ngIf=\"hasBadge && badge \" >\n        <amexio-badge [absolute]=\"true\" [background]=\"'red'\" [color]=\"'white'\" [bottom]=\"'0px'\" [right]=\"'0px'\">\n          <amexio-label size=\"medium-bold\">{{badge}}</amexio-label>\n        </amexio-badge>\n      </ng-container>\n    </amexio-body>\n</amexio-card>\n\n\n"

/***/ }),

/***/ "../rina-lib/src/lib/components/property-grid/propertygrid.component.ts":
/*!******************************************************************************!*\
  !*** ../rina-lib/src/lib/components/property-grid/propertygrid.component.ts ***!
  \******************************************************************************/
/*! exports provided: PropertyGridComponnent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyGridComponnent", function() { return PropertyGridComponnent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PropertyGridComponnent = /** @class */ (function () {
    function PropertyGridComponnent() {
        this.hasImage = false;
        this.hasRadioTitle = false;
        this.hasBadge = false;
        this.hasRadio = true;
        this.badge = false;
        this.hasBorder = true;
        this.onPropertySelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PropertyGridComponnent.prototype.selectRadio = function (selectedObject) {
        this.onPropertySelect.emit(selectedObject);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('key-value-data'),
        __metadata("design:type", Array)
    ], PropertyGridComponnent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('image'),
        __metadata("design:type", String)
    ], PropertyGridComponnent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('has-image'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "hasImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('has-radio-title'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "hasRadioTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('has-badge'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "hasBadge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('has-radio'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "hasRadio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('badge'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "badge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('radio-title-data'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "hasRadioTitleData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('has-border'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "hasBorder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PropertyGridComponnent.prototype, "onPropertySelect", void 0);
    PropertyGridComponnent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rina-property-grid',
            template: __webpack_require__(/*! ./propertygrid.component.html */ "../rina-lib/src/lib/components/property-grid/propertygrid.component.html")
        })
    ], PropertyGridComponnent);
    return PropertyGridComponnent;
}());



/***/ }),

/***/ "../rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.html":
/*!*********************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <amexio-layout-columns [orientation]=\"'horizontal'\" [fit]=\"true\" [alignment]=\"'start'\" [border]=\"false\">\n      <amexio-layout-item >\n        <amexio-layout-columns [orientation]=\"'vertical'\" [fit]=\"true\" [alignment]=\"'start'\" [border]=\"false\">\n          <amexio-layout-item>\n            <amexio-dropdown [(ngModel)]=\"serviceModel.location\" [enable-sort]=\"true\" [sort]=\"'asc'\" [search]=\"true\" [place-holder]=\"'Select Location'\" name=\"location\" [field-label]=\"'Select Location'\" [data]=\"serviceLocations\" [display-field]=\"'primaryDisplay'\"\n                             [value-field]=\"'primaryKey'\" (onSingleSelect)=\"onLocationClick($event)\">\n            </amexio-dropdown>\n          </amexio-layout-item>\n\n          <amexio-layout-item *ngIf=\"_windowTService.appType != '1'; else notTime\">\n            <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'start'\">\n              <amexio-layout-item>\n                <amexio-date-time-picker [field-label]=\"'Select Date'\" [min-date]=\"minDate\" [time-picker]=\"false\" [date-picker]=\"true\" name=\"appointmentDate\" [min-date]=\"todayDate\" [(ngModel)]=\"serviceModel.appointmentDate\">\n                </amexio-date-time-picker>\n              </amexio-layout-item>\n              <amexio-layout-item class=\"timebox-width\">\n                  <amexio-dropdown [(ngModel)]=\"serviceModel.appointmentTime\" [enable-sort]=\"true\" [sort]=\"'asc'\" [search]=\"true\" (onSingleSelect)=\"setTime($event)\" [place-holder]=\"'Select Time'\" name=\"appointmentTime\" [field-label]=\"'Select time'\" [data]=\"timeSlots\" [display-field]=\"'time'\"\n                                   [value-field]=\"'timeId'\">\n                  </amexio-dropdown>\n              </amexio-layout-item>\n            </amexio-layout-columns>\n          </amexio-layout-item>\n\n          <ng-template #notTime>\n            <amexio-layout-item>\n              <amexio-date-time-picker [field-label]=\"'Select Date'\" [min-date]=\"minDate\" [time-picker]=\"false\" [date-picker]=\"true\" name=\"appointmentDate\" [min-date]=\"todayDate\" [(ngModel)]=\"serviceModel.appointmentDate\">\n              </amexio-date-time-picker>\n            </amexio-layout-item>\n          </ng-template>\n\n\n\n\n          <amexio-layout-item>\n            <amexio-dropdown [(ngModel)]=\"serviceModel.assitantPersonId\" [enable-sort]=\"true\" [sort]=\"'asc'\" [search]=\"true\" [place-holder]=\"'Select SA'\" name=\"assitantPerson\" [field-label]=\"'Service Advisor (SA)'\" [data]=\"assitantPerson\" [display-field]=\"'primaryDisplay'\"\n                             [value-field]=\"'primaryKey'\" (onSingleSelect)=\"onAssitantClick($event)\">\n            </amexio-dropdown>\n          </amexio-layout-item>\n\n\n\n          <amexio-layout-item>\n            <amexio-button [label]=\"'CHECK SA AVAILIBLITY'\" [type]=\"'theme-color'\" [tooltip]=\"'CHECK SA AVAILIBLITY'\" (onClick)=\"checkAvailiblity()\"></amexio-button>\n          </amexio-layout-item>\n\n          <amexio-layout-item>\n            <amexio-ee-appointment [height]=\"'200px'\"\n                                   [available-slots-color]=\"'white'\"\n                                   [available-slots-bg-color]=\"'#4CAF50'\"\n                                   [selected-slot-bg-color]=\"'yellow'\"\n                                   [selected-slot-color]=\"'green'\"\n                                   [date]=\"serviceModel.appointmentDate\" [start-time]=\"serviceModel.appointmentTime\"\n                                   [end-time]=\"endTime\" [available-slots]=\"availableslots\" (onSingleSelect)=\"onSlotSelection($event)\">\n\n            </amexio-ee-appointment>\n\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-layout-item>\n      <amexio-layout-item [fit]=\"true\">\n        <amexio-google-map [initial-zoom-level]=\"8\" [initial-lat]=\"24.4086\" [initial-lng]=\"55.2701\" [height]=\"'100%'\" [data]=\"serviceStations\" (onMarkerClick)=\"onMarkerClick($event)\" [google-map-key]=\"'AIzaSyDKSPX97z-ndeh_Mgq3xkaML2Kp9AwHA9s'\">\n        </amexio-google-map>\n      </amexio-layout-item>\n\n    </amexio-layout-columns>\n\n"

/***/ }),

/***/ "../rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.ts":
/*!*******************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ServiceAvailiblityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailiblityComponent", function() { return ServiceAvailiblityComponent; });
/* harmony import */ var _services_bookingavailable_service_booking_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/bookingavailable/service.booking.service */ "../rina-lib/src/lib/services/bookingavailable/service.booking.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "../../node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _services_servicebooking_service_booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/servicebooking/service.booking.service */ "../rina-lib/src/lib/services/servicebooking/service.booking.service.ts");
/* harmony import */ var _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/service.availiblity.model */ "../rina-lib/src/lib/model/service.availiblity.model.ts");
/* harmony import */ var _services_shared_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared/common.service */ "../rina-lib/src/lib/services/shared/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var projects_rina_lib_src_lib_model_shared_daterange_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/rina-lib/src/lib/model/shared/daterange.model */ "../rina-lib/src/lib/model/shared/daterange.model.ts");
/* harmony import */ var _services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/alfahim/window.toggle.service */ "../rina-lib/src/lib/services/alfahim/window.toggle.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ServiceAvailiblityComponent = /** @class */ (function () {
    function ServiceAvailiblityComponent(_windowTService, sbService, commonService, bookingAvailableService) {
        this._windowTService = _windowTService;
        this.sbService = sbService;
        this.commonService = commonService;
        this.bookingAvailableService = bookingAvailableService;
        this.startTime = 10;
        this.endTime = 12;
        this.serviceStations = [];
        this.assitantPerson = [];
        this.availableslots = [];
        this.serviceModel = new _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_4__["ServiceAvailibilityModel"]();
        this.minDate = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(new Date(), 'dd-MMM-yyyy');
        this.dateRangeModel = new projects_rina_lib_src_lib_model_shared_daterange_model__WEBPACK_IMPORTED_MODULE_7__["DateRangeModel"]();
    }
    ServiceAvailiblityComponent.prototype.checkAvailiblity = function () {
        var _this = this;
        var response;
        this.availableslots = [];
        this.dateRangeModel.inDate = this.serviceModel.appointmentDate;
        this.dateRangeModel.locationid = this.serviceModel.location;
        this.dateRangeModel.type = this._windowTService.appType;
        this.bookingAvailableService.getAllAvailabelSlots(this.dateRangeModel).subscribe(function (resp) {
            response = resp;
        }, function (error) {
        }, function () {
            if (response) {
                _this.availableslots = [];
                response.forEach(function (element) {
                    _this.availableslots.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AvailableSlotsModel"](new Date(element.datetimeLong), element.data));
                });
            }
        });
    };
    ServiceAvailiblityComponent.prototype.ngOnInit = function () {
        this.initLocation();
        this.initTime();
    };
    ServiceAvailiblityComponent.prototype.onSlotSelection = function (event) {
        this.serviceModel.selectedSlot = event.time;
        this.serviceModel.selectedSlotDate = event.date;
    };
    ServiceAvailiblityComponent.prototype.onAssitantClick = function (event) {
        this.serviceModel.assitantPersonName = event.primaryDisplay;
    };
    ServiceAvailiblityComponent.prototype.initLocation = function () {
        var _this = this;
        var response;
        this.sbService.fetchLocations().subscribe(function (resp) {
            response = resp;
        }, function (error) {
        }, function () {
            _this.serviceLocations = response;
            _this.serviceStations = [];
            _this.serviceLocations.forEach(function (element) {
                if (element) {
                    _this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GoogleMapOverlays"](Number(element.latitude), Number(element.longitude), element.locationName + ', UAE', true, 'https://testapi.amexio.org/api/v5.5/assets/images/googlemap/mercgooglemarker.png', element));
                }
            });
        });
    };
    ServiceAvailiblityComponent.prototype.initSA = function (id) {
        var _this = this;
        var response;
        var pathVariable = id + '/' + this._windowTService.appType;
        this.sbService.fetchSABasedOnLocation(pathVariable).subscribe(function (resp) {
            response = resp;
        }, function (error) {
        }, function () {
            _this.assitantPerson = response;
        });
    };
    ServiceAvailiblityComponent.prototype.initTime = function () {
        this.timeSlots = this.commonService.workingSlot1();
        if (this.timeSlots && this.timeSlots.length > 0) {
            this.endTime = this.timeSlots.pop().timeId;
        }
    };
    ServiceAvailiblityComponent.prototype.setTime = function (event) {
    };
    ServiceAvailiblityComponent.prototype.onMarkerClick = function (serviceStation) {
        if (serviceStation.primaryKey && this.serviceModel.location !== serviceStation.primaryKey) {
            this.serviceModel.location = serviceStation.primaryKey;
            this.serviceModel.locationName = serviceStation.primaryDisplay;
            this.serviceModel.assitantPersonId = '';
            this.availableslots = [];
            if (serviceStation) {
                this.serviceModel.locationModel.latitude = serviceStation.latitude;
                this.serviceModel.locationModel.longitude = serviceStation.longitude;
            }
            this.initSA(this.serviceModel.location);
        }
    };
    ServiceAvailiblityComponent.prototype.onLocationClick = function (data) {
        if (this.serviceModel.locationName !== data.primaryDisplay) {
            this.serviceModel.assitantPersonId = '';
            this.availableslots = [];
            this.initSA(data.primaryKey);
            this.serviceModel.locationName = data.primaryDisplay;
            this.serviceModel.locationModel.latitude = data.latitude;
            this.serviceModel.locationModel.longitude = data.longitude;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('start-time'),
        __metadata("design:type", Number)
    ], ServiceAvailiblityComponent.prototype, "startTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('end-time'),
        __metadata("design:type", Number)
    ], ServiceAvailiblityComponent.prototype, "endTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('service-model'),
        __metadata("design:type", _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_4__["ServiceAvailibilityModel"])
    ], ServiceAvailiblityComponent.prototype, "serviceModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('is-edit-mode'),
        __metadata("design:type", Boolean)
    ], ServiceAvailiblityComponent.prototype, "isEditModel", void 0);
    ServiceAvailiblityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'service-availiblity-lib',
            template: __webpack_require__(/*! ./service.availiblity-lib.component.html */ "../rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.html")
        }),
        __metadata("design:paramtypes", [_services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_8__["WindowToogleService"], _services_servicebooking_service_booking_service__WEBPACK_IMPORTED_MODULE_3__["ServiceBookingService"], _services_shared_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _services_bookingavailable_service_booking_service__WEBPACK_IMPORTED_MODULE_0__["BookingAvailableService"]])
    ], ServiceAvailiblityComponent);
    return ServiceAvailiblityComponent;
}());



/***/ }),

/***/ "../rina-lib/src/lib/components/service-job-type/jobtype.component.html":
/*!******************************************************************************!*\
  !*** ../rina-lib/src/lib/components/service-job-type/jobtype.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card-ce>\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n      SELECT SERVICE TYPE\n    </amexio-label>\n  </amexio-header-ce>\n  <rina-step-box [active-index]=\"5\"></rina-step-box>\n  <amexio-body-ce [align]=\"'start'\">\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-listbox [enable-checkbox]=\"true\" [height]=\"300\" [header]=\"'Service Type'\" [data]=\"serviceTypeData\" [display-field]=\"'typeName'\" (selectedRows)=\"getSelectedType($event)\">\n        </amexio-listbox>\n        <amexio-textarea-input field-label=\"Remark\" [(ngModel)]=\"remarks\" name=\"remarks\" place-holder=\"Enter remark\">\n        </amexio-textarea-input>\n      </amexio-column>\n    </amexio-row>\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Back'\" [size]=\"'large'\" (onClick)=\"onBackHandle($event)\">\n        </amexio-button>\n        <amexio-button [label]=\"'Next'\" [type]=\"'theme-color'\" [tooltip]=\"'skip'\" [size]=\"'large'\" (onClick)=\"onNextHandle()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action-ce>\n</amexio-card-ce>\n"

/***/ }),

/***/ "../rina-lib/src/lib/components/service-job-type/jobtype.component.ts":
/*!****************************************************************************!*\
  !*** ../rina-lib/src/lib/components/service-job-type/jobtype.component.ts ***!
  \****************************************************************************/
/*! exports provided: ServiceTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeComponent", function() { return ServiceTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alfahim/personal.details.service */ "../rina-lib/src/lib/services/alfahim/personal.details.service.ts");
/**
 * Created by dattaram on 5/2/19.
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


var ServiceTypeComponent = /** @class */ (function () {
    function ServiceTypeComponent(_personalDetailsService) {
        this._personalDetailsService = _personalDetailsService;
        this.serviceTypeData = [];
        this.selectedServiceJobs = [];
        this.remarks = '';
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resetBindedData();
        this.serviceTypeData = [
            {
                'typeName': 'Check Battery System',
                'typeValue': 'Check Battery System',
            },
            {
                'typeName': 'Horn Check',
                'typeValue': 'Horn Check',
            },
            {
                'typeName': 'Instrument Cluster / Display Instruments Check',
                'typeValue': 'Instrument Cluster / Display Instruments Check',
            },
            {
                'typeName': 'Steering Wheel Heater Check',
                'typeValue': 'Steering Wheel Heater Check',
            },
            {
                'typeName': 'Fuel Indicator Level Check',
                'typeValue': 'Fuel Indicator Level Check',
            },
            {
                'typeName': 'Electrical System Check',
                'typeValue': 'Electrical System Check',
            }
        ];
        this.assignOldData();
    }
    ServiceTypeComponent.prototype.assignOldData = function () {
        var _this = this;
        var dataRef = this._personalDetailsService.getExtraServiceData();
        if (dataRef) {
            this.remarks = dataRef.remarks;
            if (dataRef.selectedJobType) {
                this.selectedServiceJobs = dataRef.selectedJobType;
                dataRef.selectedJobType.forEach(function (selectedItem) {
                    _this.serviceTypeData.forEach(function (item, index) {
                        if (selectedItem.typeValue === item.typeValue) {
                            _this.serviceTypeData[index] = selectedItem;
                        }
                    });
                });
            }
        }
    };
    ServiceTypeComponent.prototype.ngOnInit = function () {
    };
    ServiceTypeComponent.prototype.getSelectedType = function (event) {
        this.selectedServiceJobs = event;
    };
    ServiceTypeComponent.prototype.onNextHandle = function () {
        var createEmitingObj = {
            selectedJobType: this.selectedServiceJobs,
            remarks: this.remarks
        };
        this.onNext.emit(createEmitingObj);
        this.resetBindedData();
    };
    ServiceTypeComponent.prototype.onBackHandle = function (event) {
        this.onBack.emit(event);
    };
    ServiceTypeComponent.prototype.onCancel = function (event) {
        this.onClose.emit(event);
    };
    ServiceTypeComponent.prototype.resetBindedData = function () {
        this.selectedServiceJobs = [];
        this.remarks = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ServiceTypeComponent.prototype, "onNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ServiceTypeComponent.prototype, "onBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ServiceTypeComponent.prototype, "onClose", void 0);
    ServiceTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'service-job-type',
            template: __webpack_require__(/*! ./jobtype.component.html */ "../rina-lib/src/lib/components/service-job-type/jobtype.component.html")
        }),
        __metadata("design:paramtypes", [_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_1__["PersonalDetailsService"]])
    ], ServiceTypeComponent);
    return ServiceTypeComponent;
}());



/***/ }),

/***/ "../rina-lib/src/lib/components/step-box/step-box.component.html":
/*!***********************************************************************!*\
  !*** ../rina-lib/src/lib/components/step-box/step-box.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--\n<amexio-steps [icon]=\"true\" >\n  <amexio-step-block *ngFor=\"let item of stepBoxData\" [active]=\"(item.index === activeIndex)\" [icon]=\"item.icon\">\n  </amexio-step-block>\n</amexio-steps>\n-->\n\n\n<br/>\n<div class=\"alfahimstepbox\">\n  <div class=\"alfahimstepboxitems\" [ngClass]=\"{'alfahimstepboxitems-active': (item.index === activeIndex), 'alfahimstepboxitems-deactive': (item.index != activeIndex)}\" [ngClass]=\"{'alfahimstepboxitems-active': true}\" *ngFor=\"let item of stepBoxData\">\n    <div  [attr.class]=\"item.icon\" ></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../rina-lib/src/lib/components/step-box/step-box.component.ts":
/*!*********************************************************************!*\
  !*** ../rina-lib/src/lib/components/step-box/step-box.component.ts ***!
  \*********************************************************************/
/*! exports provided: RinaStepBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RinaStepBoxComponent", function() { return RinaStepBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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
 * Created by dattaram on 8/2/19.
 */

var RinaStepBoxComponent = /** @class */ (function () {
    function RinaStepBoxComponent() {
        this.stepBoxData = [];
    }
    RinaStepBoxComponent.prototype.ngOnInit = function () {
        this.stepBoxData = [
            {
                "label": "User",
                "icon": "fa fa-user ",
                "active": false,
                "index": 3
            },
            {
                "label": "Location",
                "icon": "fa fa-map-marker ",
                "active": false,
                "index": 4
            },
            {
                "label": "Service Type",
                "icon": "fa fa-cubes ",
                "active": false,
                "index": 5
            },
            {
                "label": "Sale",
                "icon": "fa fa-shopping-cart",
                "active": false,
                "index": 6
            },
            {
                "label": "Confirm",
                "icon": "fa fa-check-circle ",
                "active": false,
                "index": 7
            },
            {
                "label": "Info",
                "icon": "fa fa-info ",
                "active": false,
                "index": 8
            }
        ];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('active-index'),
        __metadata("design:type", Object)
    ], RinaStepBoxComponent.prototype, "activeIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('step-box-data'),
        __metadata("design:type", Array)
    ], RinaStepBoxComponent.prototype, "stepBoxData", void 0);
    RinaStepBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rina-step-box',
            template: __webpack_require__(/*! ./step-box.component.html */ "../rina-lib/src/lib/components/step-box/step-box.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RinaStepBoxComponent);
    return RinaStepBoxComponent;
}());



/***/ }),

/***/ "../rina-lib/src/lib/model/service.availiblity.model.ts":
/*!**************************************************************!*\
  !*** ../rina-lib/src/lib/model/service.availiblity.model.ts ***!
  \**************************************************************/
/*! exports provided: ServiceAvailibilityModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailibilityModel", function() { return ServiceAvailibilityModel; });
/* harmony import */ var projects_rina_lib_src_lib_model_shared_location_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/rina-lib/src/lib/model/shared/location.model */ "../rina-lib/src/lib/model/shared/location.model.ts");

var ServiceAvailibilityModel = /** @class */ (function () {
    function ServiceAvailibilityModel() {
        this.appointmentDate = new Date();
        this.appointmentTime = 10;
        this.selectedSlotDate = new Date();
        this.vehicleName = '';
        this.vehiclePlate = '';
        this.locationModel = new projects_rina_lib_src_lib_model_shared_location_model__WEBPACK_IMPORTED_MODULE_0__["LocationModel"]();
    }
    ServiceAvailibilityModel.prototype.isValidate = function () {
        var isValid = false;
        if (this.location != null && this.appointmentDate != null && this.appointmentTime != null && this.assitantPersonId != null && this.selectedSlot != null) {
            isValid = true;
        }
        else {
            isValid = false;
        }
        return isValid;
    };
    return ServiceAvailibilityModel;
}());



/***/ }),

/***/ "../rina-lib/src/lib/model/shared/base.model.ts":
/*!******************************************************!*\
  !*** ../rina-lib/src/lib/model/shared/base.model.ts ***!
  \******************************************************/
/*! exports provided: BaseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return BaseModel; });
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    return BaseModel;
}());



/***/ }),

/***/ "../rina-lib/src/lib/model/shared/daterange.model.ts":
/*!***********************************************************!*\
  !*** ../rina-lib/src/lib/model/shared/daterange.model.ts ***!
  \***********************************************************/
/*! exports provided: DateRangeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangeModel", function() { return DateRangeModel; });
var DateRangeModel = /** @class */ (function () {
    function DateRangeModel() {
    }
    return DateRangeModel;
}());



/***/ }),

/***/ "../rina-lib/src/lib/model/shared/location.model.ts":
/*!**********************************************************!*\
  !*** ../rina-lib/src/lib/model/shared/location.model.ts ***!
  \**********************************************************/
/*! exports provided: LocationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationModel", function() { return LocationModel; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "../rina-lib/src/lib/model/shared/base.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LocationModel = /** @class */ (function (_super) {
    __extends(LocationModel, _super);
    function LocationModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocationModel;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



/***/ }),

/***/ "../rina-lib/src/lib/model/shared/personal.details.model.ts":
/*!******************************************************************!*\
  !*** ../rina-lib/src/lib/model/shared/personal.details.model.ts ***!
  \******************************************************************/
/*! exports provided: PersonalDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetails", function() { return PersonalDetails; });
var PersonalDetails = /** @class */ (function () {
    function PersonalDetails() {
        this.perferredContact = '1';
    }
    return PersonalDetails;
}());



/***/ }),

/***/ "../rina-lib/src/lib/model/shared/propertygrid.model.ts":
/*!**************************************************************!*\
  !*** ../rina-lib/src/lib/model/shared/propertygrid.model.ts ***!
  \**************************************************************/
/*! exports provided: PropertyGridModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyGridModel", function() { return PropertyGridModel; });
var PropertyGridModel = /** @class */ (function () {
    function PropertyGridModel(_fieldName, _fieldValue) {
        this.fieldName = _fieldName;
        this.fieldValue = _fieldValue;
    }
    return PropertyGridModel;
}());



/***/ }),

/***/ "../rina-lib/src/lib/rina-lib.components.ts":
/*!**************************************************!*\
  !*** ../rina-lib/src/lib/rina-lib.components.ts ***!
  \**************************************************/
/*! exports provided: RINA_COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RINA_COMPONENTS", function() { return RINA_COMPONENTS; });
/* harmony import */ var _components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/service-booking/service.availiblity-lib.component */ "../rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.ts");
/* harmony import */ var _components_preferred_location_preferred_location_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/preferred-location/preferred.location.component */ "../rina-lib/src/lib/components/preferred-location/preferred.location.component.ts");
/* harmony import */ var _components_confirmation_service_confirmation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/confirmation/service.confirmation */ "../rina-lib/src/lib/components/confirmation/service.confirmation.ts");
/* harmony import */ var _components_appointmentdetails_appointment_confirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/appointmentdetails/appointment.confirmation */ "../rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.ts");
/* harmony import */ var _components_property_grid_propertygrid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/property-grid/propertygrid.component */ "../rina-lib/src/lib/components/property-grid/propertygrid.component.ts");
/* harmony import */ var _components_before_confirm_before_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/before-confirm/before.confirm.component */ "../rina-lib/src/lib/components/before-confirm/before.confirm.component.ts");
/* harmony import */ var _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/content-card/content.card.component */ "../rina-lib/src/lib/components/content-card/content.card.component.ts");
/* harmony import */ var _components_customer_vehicle_list_customer_vehiclelist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/customer-vehicle-list/customer.vehiclelist.component */ "../rina-lib/src/lib/components/customer-vehicle-list/customer.vehiclelist.component.ts");
/* harmony import */ var _components_service_job_type_jobtype_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/service-job-type/jobtype.component */ "../rina-lib/src/lib/components/service-job-type/jobtype.component.ts");
/* harmony import */ var _components_step_box_step_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/step-box/step-box.component */ "../rina-lib/src/lib/components/step-box/step-box.component.ts");










var RINA_COMPONENTS = [
    _components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_0__["ServiceAvailiblityComponent"],
    _components_preferred_location_preferred_location_component__WEBPACK_IMPORTED_MODULE_1__["PreferredLocationComponent"],
    _components_confirmation_service_confirmation__WEBPACK_IMPORTED_MODULE_2__["ServiceConfirmationComponent"],
    _components_appointmentdetails_appointment_confirmation__WEBPACK_IMPORTED_MODULE_3__["AppoinmentConfirmationComponent"],
    _components_property_grid_propertygrid_component__WEBPACK_IMPORTED_MODULE_4__["PropertyGridComponnent"],
    _components_before_confirm_before_confirm_component__WEBPACK_IMPORTED_MODULE_5__["BeforeConfirmComponent"],
    _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_6__["ContentCardComponent"],
    _components_customer_vehicle_list_customer_vehiclelist_component__WEBPACK_IMPORTED_MODULE_7__["CustomerVehicleListComponent"],
    _components_service_job_type_jobtype_component__WEBPACK_IMPORTED_MODULE_8__["ServiceTypeComponent"],
    _components_step_box_step_box_component__WEBPACK_IMPORTED_MODULE_9__["RinaStepBoxComponent"]
];


/***/ }),

/***/ "../rina-lib/src/lib/rina-lib.module.ts":
/*!**********************************************!*\
  !*** ../rina-lib/src/lib/rina-lib.module.ts ***!
  \**********************************************/
/*! exports provided: RinaLibModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RinaLibModule", function() { return RinaLibModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rina_lib_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rina-lib.components */ "../rina-lib/src/lib/rina-lib.components.ts");
/* harmony import */ var _services_shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/shared/http.service */ "../rina-lib/src/lib/services/shared/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "../../node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_servicebooking_service_booking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/servicebooking/service.booking.service */ "../rina-lib/src/lib/services/servicebooking/service.booking.service.ts");
/* harmony import */ var _services_shared_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/shared/common.service */ "../rina-lib/src/lib/services/shared/common.service.ts");
/* harmony import */ var _services_bookingavailable_service_booking_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/bookingavailable/service.booking.service */ "../rina-lib/src/lib/services/bookingavailable/service.booking.service.ts");
/* harmony import */ var _services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/alfahim/personal.details.service */ "../rina-lib/src/lib/services/alfahim/personal.details.service.ts");
/* harmony import */ var _services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/alfahim/window.toggle.service */ "../rina-lib/src/lib/services/alfahim/window.toggle.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_shared_notification_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/shared/notification-loader.service */ "../rina-lib/src/lib/services/shared/notification-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var RinaLibModule = /** @class */ (function () {
    function RinaLibModule() {
    }
    RinaLibModule_1 = RinaLibModule;
    RinaLibModule.forRoot = function () {
        return {
            ngModule: RinaLibModule_1,
            providers: [_services_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
                _services_servicebooking_service_booking_service__WEBPACK_IMPORTED_MODULE_7__["ServiceBookingService"],
                _services_bookingavailable_service_booking_service__WEBPACK_IMPORTED_MODULE_9__["BookingAvailableService"],
                _services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_10__["PersonalDetailsService"],
                _services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_11__["WindowToogleService"],
                _services_shared_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
                _services_shared_notification_loader_service__WEBPACK_IMPORTED_MODULE_13__["NotificationAndLoaderService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
            ],
        };
    };
    var RinaLibModule_1;
    RinaLibModule = RinaLibModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: _rina_lib_components__WEBPACK_IMPORTED_MODULE_1__["RINA_COMPONENTS"],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioEnterpriseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            exports: _rina_lib_components__WEBPACK_IMPORTED_MODULE_1__["RINA_COMPONENTS"]
        })
    ], RinaLibModule);
    return RinaLibModule;
}());



/***/ }),

/***/ "../rina-lib/src/lib/services/alfahim/personal.details.service.ts":
/*!************************************************************************!*\
  !*** ../rina-lib/src/lib/services/alfahim/personal.details.service.ts ***!
  \************************************************************************/
/*! exports provided: PersonalDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsService", function() { return PersonalDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.constant */ "../rina-lib/src/lib/services/service.constant.ts");
/* harmony import */ var projects_rina_lib_src_lib_model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/rina-lib/src/lib/model/shared/personal.details.model */ "../rina-lib/src/lib/model/shared/personal.details.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalDetailsService = /** @class */ (function () {
    function PersonalDetailsService(httpClient) {
        this.httpClient = httpClient;
        this.vehicleName = '';
        this.vehicleRgNo = '';
        this.extraServiceData = null;
    }
    PersonalDetailsService.prototype.getTitles = function () {
        return this.httpClient.get(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'title/');
    };
    PersonalDetailsService.prototype.getVehicles = function () {
        return this.httpClient.get(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'vehicle/');
    };
    PersonalDetailsService.prototype.getVehicleModels = function () {
        return this.httpClient.get(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'vehiclemodel/');
    };
    PersonalDetailsService.prototype.getLocations = function () {
        return this.httpClient.get(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'map/');
    };
    PersonalDetailsService.prototype.getAssitantList = function (id) {
        return this.httpClient.get(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'map/' + id);
    };
    PersonalDetailsService.prototype.getPersonalDetails = function () {
        return this.personalDetails;
    };
    PersonalDetailsService.prototype.setPersonalDetails = function (personalDetails) {
        this.personalDetails = personalDetails;
        this.vehicleName = this.personalDetails.vehicleType;
        this.vehicleRgNo = this.personalDetails.registrationNumber;
    };
    PersonalDetailsService.prototype.setPeferredLocation = function (serviceAvailibilityModel) {
        this.serviceAvailibilityModel = serviceAvailibilityModel;
        this.serviceAvailibilityModel.vehiclePlate = this.vehicleRgNo;
        this.serviceAvailibilityModel.vehicleName = this.vehicleName;
    };
    PersonalDetailsService.prototype.getPeferredLocation = function () {
        return this.serviceAvailibilityModel;
    };
    PersonalDetailsService.prototype.setPersonalDetailsForCcm = function (personalDetails) {
        this.convertIntoPersonalModel(personalDetails);
    };
    PersonalDetailsService.prototype.convertIntoPersonalModel = function (personalDetails) {
        this.personalDetails = new projects_rina_lib_src_lib_model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_3__["PersonalDetails"]();
        this.personalDetails.firstName = personalDetails.name;
        this.personalDetails.email = personalDetails.email;
        this.personalDetails.phone = personalDetails.mobile;
    };
    PersonalDetailsService.prototype.setExtraServiceData = function (data) {
        this.extraServiceData = data;
    };
    PersonalDetailsService.prototype.getExtraServiceData = function () {
        return this.extraServiceData;
    };
    PersonalDetailsService.prototype.setSelectedVehicleData = function (data) {
        this.selectedVehicleData = data;
        this.vehicleRgNo = this.selectedVehicleData.vehicleMetadata.registrationNo;
        this.vehicleName = this.selectedVehicleData.title;
    };
    PersonalDetailsService.prototype.resetServiceData = function () {
        this.personalDetails = null;
        this.serviceAvailibilityModel = null;
        this.selectedVehicleData = null;
        this.vehicleName = '';
        this.vehicleRgNo = '';
        this.extraServiceData = null;
    };
    PersonalDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PersonalDetailsService);
    return PersonalDetailsService;
}());



/***/ }),

/***/ "../rina-lib/src/lib/services/alfahim/window.toggle.service.ts":
/*!*********************************************************************!*\
  !*** ../rina-lib/src/lib/services/alfahim/window.toggle.service.ts ***!
  \*********************************************************************/
/*! exports provided: WindowToogleService, WindowDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowToogleService", function() { return WindowToogleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowDetails", function() { return WindowDetails; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowToogleService = /** @class */ (function () {
    function WindowToogleService() {
        this.isNewUserFlow = false;
        this.appType = '1';
        this.addWindowMap();
    }
    WindowToogleService.prototype.getNextWindow = function (windowNumber) {
        return this.widdownMap.get(windowNumber + 1);
    };
    WindowToogleService.prototype.getPreviousWindow = function (windowNumber) {
        return this.widdownMap.get(windowNumber - 1);
    };
    WindowToogleService.prototype.addWindowMap = function () {
        this.widdownMap = new Map();
        this.widdownMap.set(0, 0);
        this.widdownMap.set(1, 1);
        this.widdownMap.set(2, 2);
        this.widdownMap.set(3, 3);
        this.widdownMap.set(4, 4);
        this.widdownMap.set(5, 5);
        this.widdownMap.set(6, 6);
        this.widdownMap.set(7, 7);
        this.widdownMap.set(8, 8);
        this.widdownMap.set(11, 11);
    };
    WindowToogleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WindowToogleService);
    return WindowToogleService;
}());

var WindowDetails = /** @class */ (function () {
    function WindowDetails() {
    }
    return WindowDetails;
}());



/***/ }),

/***/ "../rina-lib/src/lib/services/bookingavailable/service.booking.service.ts":
/*!********************************************************************************!*\
  !*** ../rina-lib/src/lib/services/bookingavailable/service.booking.service.ts ***!
  \********************************************************************************/
/*! exports provided: BookingAvailableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingAvailableService", function() { return BookingAvailableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/http.service */ "../rina-lib/src/lib/services/shared/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookingAvailableService = /** @class */ (function () {
    function BookingAvailableService(http) {
        this.http = http;
    }
    BookingAvailableService.prototype.getAllAvailabelSlots = function (dateRangeModel) {
        return this.http.post('assistant/available', 'post', dateRangeModel);
    };
    BookingAvailableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], BookingAvailableService);
    return BookingAvailableService;
}());



/***/ }),

/***/ "../rina-lib/src/lib/services/service.constant.ts":
/*!********************************************************!*\
  !*** ../rina-lib/src/lib/services/service.constant.ts ***!
  \********************************************************/
/*! exports provided: SERVICE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_URL", function() { return SERVICE_URL; });
var SERVICE_URL = {
    BASE_APP_URL: 'https://restapi.amexio.org:8991/alfahim/api/'
};


/***/ }),

/***/ "../rina-lib/src/lib/services/servicebooking/service.booking.service.ts":
/*!******************************************************************************!*\
  !*** ../rina-lib/src/lib/services/servicebooking/service.booking.service.ts ***!
  \******************************************************************************/
/*! exports provided: ServiceBookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBookingService", function() { return ServiceBookingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/http.service */ "../rina-lib/src/lib/services/shared/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceBookingService = /** @class */ (function () {
    function ServiceBookingService(http) {
        this.http = http;
    }
    ServiceBookingService.prototype.fetchLocations = function () {
        return this.http.fetch('map/', 'get');
    };
    ServiceBookingService.prototype.fetchSABasedOnLocation = function (locationId) {
        return this.http.fetch('map/' + locationId, 'get');
    };
    ServiceBookingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ServiceBookingService);
    return ServiceBookingService;
}());



/***/ }),

/***/ "../rina-lib/src/lib/services/shared/common.service.ts":
/*!*************************************************************!*\
  !*** ../rina-lib/src/lib/services/shared/common.service.ts ***!
  \*************************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "../../node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CommonService = /** @class */ (function () {
    function CommonService() {
    }
    CommonService.prototype.timeData = function () {
        return new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["TimeUtil"]().timeData(false);
    };
    CommonService.prototype.workingSlot1 = function () {
        return new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["TimeUtil"]().workingslot1();
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "../rina-lib/src/lib/services/shared/http.service.ts":
/*!***********************************************************!*\
  !*** ../rina-lib/src/lib/services/shared/http.service.ts ***!
  \***********************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.constant */ "../rina-lib/src/lib/services/service.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.fetch = function (serviceUrl, methodType) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json;charset=UTF-8');
        if (methodType === 'post') {
            return this.http.post(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + serviceUrl, { headers: headers });
        }
        else if (methodType === 'get') {
            return this.http.get(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + serviceUrl, { headers: headers });
        }
    };
    HttpService.prototype.post = function (serviceUrl, methodType, requestJson) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json;charset=UTF-8');
        if (methodType === 'post') {
            return this.http.post(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + serviceUrl, requestJson, { headers: headers });
        }
        else if (methodType === 'get') {
            return this.http.get(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + serviceUrl, { headers: headers });
        }
    };
    HttpService.prototype.fetchLocalData = function (serviceUrl, methodType) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json;charset=UTF-8');
        if (methodType === 'post') {
            return this.http.post(serviceUrl, { headers: headers });
        }
        else if (methodType === 'get') {
            return this.http.get(serviceUrl, { headers: headers });
        }
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "../rina-lib/src/lib/services/shared/notification-loader.service.ts":
/*!**************************************************************************!*\
  !*** ../rina-lib/src/lib/services/shared/notification-loader.service.ts ***!
  \**************************************************************************/
/*! exports provided: NotificationAndLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationAndLoaderService", function() { return NotificationAndLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/**
 * Created by dattaram on 6/2/19.
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

var NotificationAndLoaderService = /** @class */ (function () {
    function NotificationAndLoaderService() {
        this.showLoader = false;
    }
    NotificationAndLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotificationAndLoaderService);
    return NotificationAndLoaderService;
}());



/***/ }),

/***/ "../rina-lib/src/public_api.ts":
/*!*************************************!*\
  !*** ../rina-lib/src/public_api.ts ***!
  \*************************************/
/*! exports provided: RinaLibModule, ServiceAvailibilityModel, PropertyGridModel, ServiceAvailiblityComponent, PreferredLocationComponent, ServiceConfirmationComponent, AppoinmentConfirmationComponent, PropertyGridComponnent, BeforeConfirmComponent, ContentCardComponent, CustomerVehicleListComponent, ContentCardData, ServiceTypeComponent, RinaStepBoxComponent, CustomerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/rina-lib.module */ "../rina-lib/src/lib/rina-lib.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RinaLibModule", function() { return _lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_0__["RinaLibModule"]; });

/* harmony import */ var _lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/model/service.availiblity.model */ "../rina-lib/src/lib/model/service.availiblity.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailibilityModel", function() { return _lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"]; });

/* harmony import */ var _rinaalfahim_src_app_models_customer_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rinaalfahim/src/app/models/customer.details.model */ "../rinaalfahim/src/app/models/customer.details.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return _rinaalfahim_src_app_models_customer_details_model__WEBPACK_IMPORTED_MODULE_2__["CustomerModel"]; });

/* harmony import */ var _lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/model/shared/propertygrid.model */ "../rina-lib/src/lib/model/shared/propertygrid.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyGridModel", function() { return _lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]; });

/* harmony import */ var _lib_components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/components/service-booking/service.availiblity-lib.component */ "../rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailiblityComponent", function() { return _lib_components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_4__["ServiceAvailiblityComponent"]; });

/* harmony import */ var _lib_components_preferred_location_preferred_location_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/components/preferred-location/preferred.location.component */ "../rina-lib/src/lib/components/preferred-location/preferred.location.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreferredLocationComponent", function() { return _lib_components_preferred_location_preferred_location_component__WEBPACK_IMPORTED_MODULE_5__["PreferredLocationComponent"]; });

/* harmony import */ var _lib_components_confirmation_service_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/components/confirmation/service.confirmation */ "../rina-lib/src/lib/components/confirmation/service.confirmation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceConfirmationComponent", function() { return _lib_components_confirmation_service_confirmation__WEBPACK_IMPORTED_MODULE_6__["ServiceConfirmationComponent"]; });

/* harmony import */ var _lib_components_appointmentdetails_appointment_confirmation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/components/appointmentdetails/appointment.confirmation */ "../rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppoinmentConfirmationComponent", function() { return _lib_components_appointmentdetails_appointment_confirmation__WEBPACK_IMPORTED_MODULE_7__["AppoinmentConfirmationComponent"]; });

/* harmony import */ var _lib_components_property_grid_propertygrid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/components/property-grid/propertygrid.component */ "../rina-lib/src/lib/components/property-grid/propertygrid.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyGridComponnent", function() { return _lib_components_property_grid_propertygrid_component__WEBPACK_IMPORTED_MODULE_8__["PropertyGridComponnent"]; });

/* harmony import */ var _lib_components_before_confirm_before_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/components/before-confirm/before.confirm.component */ "../rina-lib/src/lib/components/before-confirm/before.confirm.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeforeConfirmComponent", function() { return _lib_components_before_confirm_before_confirm_component__WEBPACK_IMPORTED_MODULE_9__["BeforeConfirmComponent"]; });

/* harmony import */ var _lib_components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/components/content-card/content.card.component */ "../rina-lib/src/lib/components/content-card/content.card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentCardComponent", function() { return _lib_components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_10__["ContentCardComponent"]; });

/* harmony import */ var _lib_components_customer_vehicle_list_customer_vehiclelist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/components/customer-vehicle-list/customer.vehiclelist.component */ "../rina-lib/src/lib/components/customer-vehicle-list/customer.vehiclelist.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerVehicleListComponent", function() { return _lib_components_customer_vehicle_list_customer_vehiclelist_component__WEBPACK_IMPORTED_MODULE_11__["CustomerVehicleListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentCardData", function() { return _lib_components_customer_vehicle_list_customer_vehiclelist_component__WEBPACK_IMPORTED_MODULE_11__["ContentCardData"]; });

/* harmony import */ var _lib_components_service_job_type_jobtype_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/components/service-job-type/jobtype.component */ "../rina-lib/src/lib/components/service-job-type/jobtype.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeComponent", function() { return _lib_components_service_job_type_jobtype_component__WEBPACK_IMPORTED_MODULE_12__["ServiceTypeComponent"]; });

/* harmony import */ var _lib_components_step_box_step_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/components/step-box/step-box.component */ "../rina-lib/src/lib/components/step-box/step-box.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RinaStepBoxComponent", function() { return _lib_components_step_box_step_box_component__WEBPACK_IMPORTED_MODULE_13__["RinaStepBoxComponent"]; });

/*
 * Public API Surface of rina-lib
 */




/* EXPORTED COMPONENT */












/***/ }),

/***/ "../rinaalfahim/src/app/models/customer.details.model.ts":
/*!***************************************************************!*\
  !*** ../rinaalfahim/src/app/models/customer.details.model.ts ***!
  \***************************************************************/
/*! exports provided: CustomerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return CustomerModel; });
/**
 * Created by dattaram on 14/1/19.
 */
/*export class CustomerDetailsInterface {
  customerId: number;
  mobile: number ;
  name: string;
  companyName: string;
  operatingStatus: string;
  email: string;
  altNumber: number;
  birthday: string;
  anniversary: string;
  profileImageUrl: string;
  callAttempt: number;
  bu: string;
  vehicle: string ;
  dateOfPurchase: string ;
  modelYear: string ;
  registrationNo: string ;
  customerClass: string;
  preferredModeOfContact: string ;
  lastService: string;
  nextService: string;
  openSRs: string;
  vehicleDetails: any[];

}*/
var CustomerModel = /** @class */ (function () {
    function CustomerModel() {
        this.customerId = null;
        this.mobile = null;
        this.name = '';
        this.companyName = '';
        this.operatingStatus = '';
        this.email = '';
        this.altNumber = null;
        this.birthday = '';
        this.anniversary = '';
        this.profileImageUrl = '';
        this.callAttempt = null;
        this.bu = '';
        this.vehicle = '';
        this.dateOfPurchase = '';
        this.modelYear = '';
        this.registrationNo = '';
        this.customerClass = '';
        this.preferredModeOfContact = '';
        this.lastService = '';
        this.nextService = '';
        this.openSRs = '';
        this.vehicleDetails = [];
    }
    return CustomerModel;
}());



/***/ }),

/***/ "../rinaalfahim/src/app/models/customer.profile.model.ts":
/*!***************************************************************!*\
  !*** ../rinaalfahim/src/app/models/customer.profile.model.ts ***!
  \***************************************************************/
/*! exports provided: CustomerProfile, Vehicle, Vehicles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfile", function() { return CustomerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicle", function() { return Vehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicles", function() { return Vehicles; });
/**
 * Created by dattaram on 18/1/19.
 */
var CustomerProfile = /** @class */ (function () {
    function CustomerProfile() {
        this.customerId = '';
        this.customerNo = '';
        this.name = '';
        this.firstName = '';
        this.lastName = '';
        this.mobile = '';
        this.companyName = '';
        this.operatingStatus = '';
        this.email = '';
        this.birthday = '';
        this.altNumber = '';
        this.anniversary = '';
        this.profileImageUrl = '';
        this.customerClass = '';
        this.uaeId = '';
        this.preferredModeOfContact = '';
    }
    return CustomerProfile;
}());

var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.vehicleId = '';
        this.modelName = '';
        this.image = '';
        this.modelYear = '';
        this.engine = '';
        this.horsepower = '';
        this.torque = '';
        this.acceleration = '';
        this.topSpeed = '';
        this.vehicleClass = '';
    }
    return Vehicle;
}());

var Vehicles = /** @class */ (function () {
    function Vehicles() {
        this.vehicleId = '';
        this.registrationNo = '';
        this.dateOfPurchase = '';
        this.bu = '';
        this.lastService = '';
        this.nextService = '';
        this.openSRs = '';
        this.vehicleDetail = new Vehicle();
    }
    return Vehicles;
}());



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9yaW5hb3JpZ2luL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rina-home></rina-home>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _rina_home_rina_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rina-home/rina-home.component */ "./src/app/rina-home/rina-home.component.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "../../node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rina_lib_src_lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../rina-lib/src/lib/rina-lib.module */ "../rina-lib/src/lib/rina-lib.module.ts");
/* harmony import */ var _feature_component_company_logo_company_logo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feature-component/company-logo/company.logo.component */ "./src/app/feature-component/company-logo/company.logo.component.ts");
/* harmony import */ var _feature_component_searchbox_searchbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feature-component/searchbox/searchbox.component */ "./src/app/feature-component/searchbox/searchbox.component.ts");
/* harmony import */ var _feature_component_service_list_service_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feature-component/service-list/service.list.component */ "./src/app/feature-component/service-list/service.list.component.ts");
/* harmony import */ var _feature_component_tab_component_current_plan_current_plan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./feature-component/tab-component/current-plan/current-plan.component */ "./src/app/feature-component/tab-component/current-plan/current-plan.component.ts");
/* harmony import */ var _feature_component_tab_component_electricity_bill_electricity_bill_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feature-component/tab-component/electricity-bill/electricity-bill.component */ "./src/app/feature-component/tab-component/electricity-bill/electricity-bill.component.ts");
/* harmony import */ var _feature_component_tab_component_interaction_history_interaction_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./feature-component/tab-component/interaction-history/interaction-history.component */ "./src/app/feature-component/tab-component/interaction-history/interaction-history.component.ts");
/* harmony import */ var _feature_component_tab_component_natural_gas_bill_natural_gas_bill_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./feature-component/tab-component/natural-gas-bill/natural-gas-bill.component */ "./src/app/feature-component/tab-component/natural-gas-bill/natural-gas-bill.component.ts");
/* harmony import */ var _feature_component_tab_component_usage_report_usage_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./feature-component/tab-component/usage-report/usage-report.component */ "./src/app/feature-component/tab-component/usage-report/usage-report.component.ts");
/* harmony import */ var amexio_chart_d3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! amexio-chart-d3 */ "../../node_modules/amexio-chart-d3/fesm5/amexio-chart-d3.js");
/* harmony import */ var _feature_component_openService_request_openservice_request_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./feature-component/openService-request/openservice.request.component */ "./src/app/feature-component/openService-request/openservice.request.component.ts");
/* harmony import */ var _feature_component_energy_plan_energy_plan_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./feature-component/energy-plan/energy.plan.component */ "./src/app/feature-component/energy-plan/energy.plan.component.ts");
/* harmony import */ var projects_rinaorigin_src_app_feature_component_tab_component_right_sell_right_sell_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! projects/rinaorigin/src/app/feature-component/tab-component/right-sell/right-sell.component */ "./src/app/feature-component/tab-component/right-sell/right-sell.component.ts");
/* harmony import */ var _feature_component_update_information_update_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./feature-component/update-information/update.info.component */ "./src/app/feature-component/update-information/update.info.component.ts");
/* harmony import */ var _feature_component_change_address_change_address_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./feature-component/change.address/change.address.component */ "./src/app/feature-component/change.address/change.address.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var COMPONENT = [
    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _rina_home_rina_home_component__WEBPACK_IMPORTED_MODULE_3__["RinaHomeComponent"],
    _feature_component_company_logo_company_logo_component__WEBPACK_IMPORTED_MODULE_9__["CompanyLogoComponent"],
    _feature_component_searchbox_searchbox_component__WEBPACK_IMPORTED_MODULE_10__["SearchBoxComponent"],
    _feature_component_service_list_service_list_component__WEBPACK_IMPORTED_MODULE_11__["ServiceListComponent"],
    _feature_component_tab_component_current_plan_current_plan_component__WEBPACK_IMPORTED_MODULE_12__["CurrentPlanComponent"],
    _feature_component_tab_component_electricity_bill_electricity_bill_component__WEBPACK_IMPORTED_MODULE_13__["ElectricityBillComponent"],
    _feature_component_tab_component_interaction_history_interaction_history_component__WEBPACK_IMPORTED_MODULE_14__["InteractionHistoryComponent"],
    _feature_component_tab_component_natural_gas_bill_natural_gas_bill_component__WEBPACK_IMPORTED_MODULE_15__["NaturalGasBillComponent"],
    _feature_component_tab_component_usage_report_usage_report_component__WEBPACK_IMPORTED_MODULE_16__["UsageReportComponent"],
    projects_rinaorigin_src_app_feature_component_tab_component_right_sell_right_sell_component__WEBPACK_IMPORTED_MODULE_20__["RightSellComponent"],
    _feature_component_openService_request_openservice_request_component__WEBPACK_IMPORTED_MODULE_18__["OpenServiceRequestComponent"],
    _feature_component_energy_plan_energy_plan_component__WEBPACK_IMPORTED_MODULE_19__["EnergyPlanComponent"],
    _feature_component_update_information_update_info_component__WEBPACK_IMPORTED_MODULE_21__["UpdateInfoComponent"],
    _feature_component_change_address_change_address_component__WEBPACK_IMPORTED_MODULE_22__["ChangeAddressComponent"]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _rina_lib_src_lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_8__["RinaLibModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"],
                amexio_chart_d3__WEBPACK_IMPORTED_MODULE_17__["AmexioChartD3Module"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioDashBoardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            declarations: COMPONENT,
            entryComponents: [
                _feature_component_tab_component_current_plan_current_plan_component__WEBPACK_IMPORTED_MODULE_12__["CurrentPlanComponent"],
                _feature_component_tab_component_interaction_history_interaction_history_component__WEBPACK_IMPORTED_MODULE_14__["InteractionHistoryComponent"],
                _feature_component_tab_component_natural_gas_bill_natural_gas_bill_component__WEBPACK_IMPORTED_MODULE_15__["NaturalGasBillComponent"],
                _feature_component_tab_component_usage_report_usage_report_component__WEBPACK_IMPORTED_MODULE_16__["UsageReportComponent"],
                projects_rinaorigin_src_app_feature_component_tab_component_right_sell_right_sell_component__WEBPACK_IMPORTED_MODULE_20__["RightSellComponent"],
                _feature_component_tab_component_electricity_bill_electricity_bill_component__WEBPACK_IMPORTED_MODULE_13__["ElectricityBillComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constants/service.url.constant.ts":
/*!***************************************************!*\
  !*** ./src/app/constants/service.url.constant.ts ***!
  \***************************************************/
/*! exports provided: SERVICE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_URL", function() { return SERVICE_URL; });
/**
 * Created by dattaram on 20/3/19.
 */
var BASE_URL = 'https://restapi.amexio.org:9890/rina2/api/origin/';
var SERVICE_URL = {
    CUSTOMER_SEARCH: BASE_URL + 'profile/',
    CHANGE_ENERGY_PLAN: BASE_URL + 'energyPlan/',
    CUSTOMER_DETAILS: BASE_URL + 'profile/updateInfo/',
    RIGHT_SELL: BASE_URL + 'rightSell/'
};


/***/ }),

/***/ "./src/app/constants/tab-map.constant.ts":
/*!***********************************************!*\
  !*** ./src/app/constants/tab-map.constant.ts ***!
  \***********************************************/
/*! exports provided: tab_map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tab_map", function() { return tab_map; });
/* harmony import */ var _feature_component_tab_component_current_plan_current_plan_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../feature-component/tab-component/current-plan/current-plan.component */ "./src/app/feature-component/tab-component/current-plan/current-plan.component.ts");
/* harmony import */ var _feature_component_tab_component_electricity_bill_electricity_bill_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feature-component/tab-component/electricity-bill/electricity-bill.component */ "./src/app/feature-component/tab-component/electricity-bill/electricity-bill.component.ts");
/* harmony import */ var _feature_component_tab_component_natural_gas_bill_natural_gas_bill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature-component/tab-component/natural-gas-bill/natural-gas-bill.component */ "./src/app/feature-component/tab-component/natural-gas-bill/natural-gas-bill.component.ts");
/* harmony import */ var _feature_component_tab_component_interaction_history_interaction_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feature-component/tab-component/interaction-history/interaction-history.component */ "./src/app/feature-component/tab-component/interaction-history/interaction-history.component.ts");
/* harmony import */ var _feature_component_tab_component_usage_report_usage_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../feature-component/tab-component/usage-report/usage-report.component */ "./src/app/feature-component/tab-component/usage-report/usage-report.component.ts");
/* harmony import */ var _feature_component_tab_component_right_sell_right_sell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../feature-component/tab-component/right-sell/right-sell.component */ "./src/app/feature-component/tab-component/right-sell/right-sell.component.ts");






/**
 * Created by dattaram on 19/2/19.
 */
var tab_map;
(function (tab_map) {
    tab_map.TAB_KEY_VALUE_PAIR = {
        CP: _feature_component_tab_component_current_plan_current_plan_component__WEBPACK_IMPORTED_MODULE_0__["CurrentPlanComponent"],
        EB: _feature_component_tab_component_electricity_bill_electricity_bill_component__WEBPACK_IMPORTED_MODULE_1__["ElectricityBillComponent"],
        NGB: _feature_component_tab_component_natural_gas_bill_natural_gas_bill_component__WEBPACK_IMPORTED_MODULE_2__["NaturalGasBillComponent"],
        IH: _feature_component_tab_component_interaction_history_interaction_history_component__WEBPACK_IMPORTED_MODULE_3__["InteractionHistoryComponent"],
        UR: _feature_component_tab_component_usage_report_usage_report_component__WEBPACK_IMPORTED_MODULE_4__["UsageReportComponent"],
        RS: _feature_component_tab_component_right_sell_right_sell_component__WEBPACK_IMPORTED_MODULE_5__["RightSellComponent"]
    };
})(tab_map || (tab_map = {}));


/***/ }),

/***/ "./src/app/feature-component/change.address/change.address.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/feature-component/change.address/change.address.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- UPDATE INFO-->\n\n<amexio-card-ce >\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n      {{ 'Change Address' | uppercase}}\n    </amexio-label>\n  </amexio-header-ce>\n  <amexio-body-ce [align]=\"'start'\">\n\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-text-input field-label=\"Address Line 1\"\n                           name=\"addressLine1\"\n                           [(ngModel)]=\"readonlyAddressModel.addressLine1\"\n                           [disabled]=\"true\"\n                           place-holder=\"Enter Address Line 1\">\n        </amexio-text-input>\n\n        <amexio-text-input field-label=\"Address Line 2\"\n                           [(ngModel)]=\"readonlyAddressModel.addressLine2\"\n                           [disabled]=\"true\"\n                           name=\"addressLine2\"\n                           place-holder=\"Enter Address Line 2\">\n        </amexio-text-input>\n\n        <amexio-text-input field-label=\"City\"\n                           [(ngModel)]=\"readonlyAddressModel.city\"\n                           [disabled]=\"true\"\n                           name=\"city\"\n                           place-holder=\"Enter City\">\n        </amexio-text-input>\n\n        <amexio-text-input field-label=\"State\"\n                           [(ngModel)]=\"readonlyAddressModel.state\"\n                           [disabled]=\"true\"\n                           name=\"state\"\n                           place-holder=\"Enter State\">\n        </amexio-text-input>\n\n        <amexio-text-input field-label=\"Postcode\"\n                           [(ngModel)]=\"readonlyAddressModel.postCode\"\n                           [disabled]=\"true\"\n                           name=\"postCode\"\n                           place-holder=\"Enter Postcode\">\n        </amexio-text-input>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <form #addrForm=\"ngForm\">\n          <amexio-text-input field-label=\"Address Line 1\"\n                             name=\"addressLine1\"\n                             [(ngModel)]=\"data.addressLine1\"\n                             place-holder=\"Enter Address Line 1\">\n          </amexio-text-input>\n\n          <amexio-text-input field-label=\"Address Line 2\"\n                             [(ngModel)]=\"data.addressLine2\"\n                             name=\"addressLine2\"\n                             place-holder=\"Enter Address Line 2\">\n          </amexio-text-input>\n\n          <amexio-text-input field-label=\"City\"\n                             [(ngModel)]=\"data.city\"\n                             name=\"city\"\n                             place-holder=\"Enter City\">\n          </amexio-text-input>\n\n          <amexio-text-input field-label=\"State\"\n                             [(ngModel)]=\"data.state\"\n                             name=\"state\"\n                             place-holder=\"Enter State\">\n          </amexio-text-input>\n\n          <amexio-text-input field-label=\"Postcode\"\n                             [(ngModel)]=\"data.postCode\"\n                             name=\"postCode\"\n                             place-holder=\"Enter Postcode\">\n          </amexio-text-input>\n        </form>\n      </amexio-column>\n    </amexio-row>\n\n\n<!--    <ng-container >\n      <form #addrForm=\"ngForm\">\n      <amexio-row>\n        <amexio-column [size]=\"12\">\n          <amexio-text-input field-label=\"Address Line 1\"\n                             name=\"addressLine1\"\n                             [(ngModel)]=\"data.addressLine1\"\n                             place-holder=\"Enter Address Line 1\">\n          </amexio-text-input>\n        </amexio-column>\n      </amexio-row>\n\n\n      <amexio-row>\n        <amexio-column [size]=\"12\">\n          <amexio-text-input field-label=\"Address Line 2\"\n                             [(ngModel)]=\"data.addressLine2\"\n                             name=\"addressLine2\"\n                             place-holder=\"Enter Address Line 2\">\n          </amexio-text-input>\n        </amexio-column>\n      </amexio-row>\n\n      <amexio-row>\n        <amexio-column [size]=\"12\">\n          <amexio-text-input field-label=\"City\"\n                             [(ngModel)]=\"data.city\"\n                             name=\"city\"\n                             place-holder=\"Enter City\">\n          </amexio-text-input>\n        </amexio-column>\n      </amexio-row>\n\n\n      <amexio-row>\n        <amexio-column [size]=\"12\">\n          <amexio-text-input field-label=\"State\"\n                             [(ngModel)]=\"data.state\"\n                             name=\"state\"\n                             place-holder=\"Enter State\">\n          </amexio-text-input>\n        </amexio-column>\n      </amexio-row>\n\n\n      <amexio-row>\n        <amexio-column [size]=\"12\">\n          <amexio-text-input field-label=\"Postcode\"\n                             [(ngModel)]=\"data.postCode\"\n                             name=\"postCode\"\n                             place-holder=\"Enter Postcode\">\n          </amexio-text-input>\n        </amexio-column>\n      </amexio-row>\n      </form>\n\n    </ng-container>-->\n\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\"\n                       [type]=\"'theme-backgroundcolor'\"\n                       [size]=\"'large'\"\n                       (onClick)=\"onChangeAddressCancelHandle()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Submit'\"\n                       [type]=\"'theme-color'\"\n                       [size]=\"'large'\"\n                       [disabled]=\"!addrForm.valid\"\n                       (onClick)=\"onChangeAddressSubmitHandle()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action-ce>\n</amexio-card-ce>\n\n"

/***/ }),

/***/ "./src/app/feature-component/change.address/change.address.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/feature-component/change.address/change.address.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChangeAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeAddressComponent", function() { return ChangeAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/customer.profile.model */ "./src/app/models/customer.profile.model.ts");
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
 * Created by dattaram on 21/3/19.
 */


var ChangeAddressComponent = /** @class */ (function () {
    function ChangeAddressComponent() {
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.readonlyAddressModel = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__["AddressModel"]();
    }
    ChangeAddressComponent.prototype.ngOnInit = function () { };
    ChangeAddressComponent.prototype.ngOnChanges = function (changes) {
        if (changes['data']) {
            this.readonlyAddressModel = Object.assign(this.readonlyAddressModel, changes.data.currentValue);
        }
    };
    ChangeAddressComponent.prototype.onChangeAddressCancelHandle = function () {
        this.onCancel.emit();
    };
    ChangeAddressComponent.prototype.onChangeAddressSubmitHandle = function () {
        this.onSubmit.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__["AddressModel"])
    ], ChangeAddressComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ChangeAddressComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ChangeAddressComponent.prototype, "onSubmit", void 0);
    ChangeAddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'change-address',
            template: __webpack_require__(/*! ./change.address.component.html */ "./src/app/feature-component/change.address/change.address.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ChangeAddressComponent);
    return ChangeAddressComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/company-logo/company.logo.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/feature-component/company-logo/company.logo.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" alignment=\"space-between\">\n  <amexio-layout-item [padding]=\"'0px'\">\n    <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" alignment=\"center\">\n      <amexio-layout-item [padding]=\"'0px'\">\n        <amexio-image [height]=\"'200px'\"  [path]=\"'assets/images/logo1.png'\" [filter]=\"'normal'\">\n        </amexio-image>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n  </amexio-layout-item>\n  <amexio-layout-item [padding]=\"'0px'\">\n    <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" alignment=\"space-between\">\n      <amexio-layout-item>\n        <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-volume-control-phone'\"  [type]=\"'green'\"></amexio-floating-button>\n      </amexio-layout-item>\n      <amexio-layout-item [padding]=\"'0px'\">\n        <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-phone'\" [type]=\"'theme-color'\"></amexio-floating-button>\n      </amexio-layout-item>\n      <amexio-layout-item [padding]=\"'0px'\">\n        <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-pause '\" [type]=\"'yellow'\"></amexio-floating-button>\n      </amexio-layout-item>\n      <amexio-layout-item [padding]=\"'0px'\">\n        <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-phone-square'\" [type]=\"'red'\"></amexio-floating-button>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n  </amexio-layout-item>\n</amexio-layout-columns>\n"

/***/ }),

/***/ "./src/app/feature-component/company-logo/company.logo.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/feature-component/company-logo/company.logo.component.ts ***!
  \**************************************************************************/
/*! exports provided: CompanyLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyLogoComponent", function() { return CompanyLogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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
 * Created by dattaram on 15/1/19.
 */

var CompanyLogoComponent = /** @class */ (function () {
    function CompanyLogoComponent() {
    }
    CompanyLogoComponent.prototype.ngOnInit = function () {
    };
    CompanyLogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'company-logo',
            template: __webpack_require__(/*! ./company.logo.component.html */ "./src/app/feature-component/company-logo/company.logo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CompanyLogoComponent);
    return CompanyLogoComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/energy-plan/energy-plan.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/feature-component/energy-plan/energy-plan.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ng-container *ngIf=\"show || showEnergyDetails\">\n  <amexio-badge  [absolute]=\"true\" [background]=\"'black'\" [color]=\"'white'\" [top]=\"'0'\" [right]=\"'0'\">\n    <amexio-label style=\"padding:10px 20px;\" size=\"medium\">Change Energy Plan</amexio-label>\n  </amexio-badge>\n</ng-container>\n<amexio-card-ce *ngIf=\"show\">\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n     {{'Energy Plans' | uppercase}}\n    </amexio-label>\n  </amexio-header-ce><br>\n  <amexio-body-ce [align]=\"'start'\">\n    <amexio-row>\n      <amexio-column [size]=\"4\">\n        <amexio-label>CURRENT ENERGY PLAN</amexio-label><br>\n        <amexio-label size=\"medium-bold\"> {{data.currentEnergyPlan.plan}}</amexio-label><br>\n        <amexio-label *ngFor=\"let bn of data.currentEnergyPlan.benefits\">{{bn}}</amexio-label><br>\n      </amexio-column>\n      <amexio-column [size]=\"4\" *ngFor=\"let peplan of data.purposedEnergyPlan\">\n        <amexio-card-ce >\n          <amexio-header-ce [background]=\"'transparent'\" [border-bottom]=\"true\">\n            <div *ngIf=\"peplan.estimatedElectricityPrice == null\">\n              <b>{{peplan.name | uppercase}} <span  style=\"color: red\"> &nbsp;( plan unavailable )</span></b>\n            </div>\n            <div *ngIf=\"peplan.estimatedElectricityPrice != null\">\n              <label for=\"{{peplan.name}}\" [attr.aria-checked]=\"peplan.selected\" [ngClass]=\"{'disabledStyle': peplan.estimatedElectricityPrice == null}\"\n                     style=\"margin-top: 0px !important;padding-bottom: 0px!important; margin-bottom: 0px!important; \"  class=\"input-box-container\" (click)=\"selectPlan(peplan)\">\n                <b>{{peplan.name | uppercase}} </b>\n                <input  style=\"top:0; left:0\" id=\"{{peplan.name}}\" type=\"radio\"\n                        name=\"selectplan\" [value]=\"peplan.selected\"\n                        [checked]=\"peplan.selected\">\n                <span class=\"input-box-radiobox-label\"></span>\n              </label>\n            </div>\n\n          </amexio-header-ce>\n          <amexio-body-ce [height]=\"'100px'\">\n            <amexio-label >{{peplan.electricityUsageCharges}}</amexio-label><br>\n            <amexio-label >{{peplan.naturalGasUsageCharges}}</amexio-label><br>\n          </amexio-body-ce>\n        </amexio-card-ce>\n      </amexio-column>\n    </amexio-row>\n  </amexio-body-ce><br>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Next'\" [disabled]=\"!selectedPlan\" [type]=\"'theme-color'\"  [size]=\"'large'\" (onClick)=\"onNextHandle()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action-ce>\n</amexio-card-ce>\n\n<amexio-card-ce *ngIf=\"showEnergyDetails\">\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n        {{'Plan Details' | uppercase}}\n    </amexio-label>\n  </amexio-header-ce>\n  <amexio-body-ce [align]=\"'start'\">\n    <ng-container *ngIf=\"showEnergyDetails\">\n      <amexio-row>\n        <amexio-column [size]=\"4\">\n          <amexio-label size=\"medium-bold\">{{planDetails.name}}</amexio-label><br><br>\n          <amexio-label >{{planDetails.electricityUsageCharges}}</amexio-label><br>\n          <amexio-label size=\"medium-bold\">Plan Summary</amexio-label><hr>\n          <amexio-label size=\"medium-bold\">General Charges</amexio-label><br>\n          <amexio-label >Daily supply Charge: {{planDetails.dailySupplyCharges}}</amexio-label><br>\n          <amexio-label >General usage rate: {{planDetails.generalUsageRates}}</amexio-label><br><br>\n          <amexio-label >Connection fee <b>{{planDetails.connectionFee}}</b></amexio-label>\n        </amexio-column>\n        <amexio-column [size]=\"8\">\n          <amexio-datagrid title=\"Estimated Electricity Price\"\n                             [data]=\"planDetails.estimatedElectricityPrice\">\n            <amexio-data-table-column\n              [data-index]=\"'noOfPerson'\"\n              [data-type]=\"'string'\"\n              [text]=\"''\">\n              <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                <ng-container *ngIf=\"row.noOfPerson == '1 person'; else elseBlock\">\n                  <i class=\"fa fa-user\" style=\"font-size: 30px;\" aria-hidden=\"true\"></i> &nbsp; {{row.noOfPerson}}\n                </ng-container>\n                <ng-template #elseBlock>\n                  <i class=\"fa fa-users\" style=\"font-size: 30px;\" aria-hidden=\"true\"></i> &nbsp; {{row.noOfPerson}}\n                </ng-template>\n\n              </ng-template>\n            </amexio-data-table-column>\n            <amexio-data-table-column\n              [data-index]=\"'energyConsumption'\"\n              [data-type]=\"'string'\">\n            </amexio-data-table-column>\n            <amexio-data-table-column\n              [data-index]=\"'priceWithDiscount'\"\n              [data-type]=\"'string'\">\n            </amexio-data-table-column>\n            <amexio-data-table-column\n              [data-index]=\"'price'\"\n              [data-type]=\"'string'\">\n            </amexio-data-table-column>\n          </amexio-datagrid>\n        </amexio-column>\n      </amexio-row>\n\n    </ng-container>\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Back'\"\n                       [type]=\"'theme-backgroundcolor'\"\n                       [size]=\"'large'\"\n                       (onClick)=\"onBackClick()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Select Plan'\"\n                       [type]=\"'theme-color'\"\n                       [size]=\"'large'\"\n                       (onClick)=\"onSelectPlanClick()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action-ce>\n</amexio-card-ce>\n\n"

/***/ }),

/***/ "./src/app/feature-component/energy-plan/energy.plan.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/feature-component/energy-plan/energy.plan.component.ts ***!
  \************************************************************************/
/*! exports provided: EnergyPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnergyPlanComponent", function() { return EnergyPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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
 * Created by dattaram on 20/3/19.
 */

var EnergyPlanComponent = /** @class */ (function () {
    function EnergyPlanComponent() {
        this.show = false;
        this.showEnergyDetails = false;
        this.selectedPlan = false;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectPlan = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EnergyPlanComponent.prototype.ngOnInit = function () {
    };
    EnergyPlanComponent.prototype.selectPlan = function (planDetails) {
        this.data.purposedEnergyPlan.forEach(function (plan) {
            plan.selected = false;
        });
        planDetails.selected = true;
        this.planDetails = planDetails;
        this.selectedPlan = true;
    };
    EnergyPlanComponent.prototype.onBackClick = function () {
        this.showEnergyDetails = false;
        this.show = true;
    };
    EnergyPlanComponent.prototype.onSelectPlanClick = function () {
        this.showEnergyDetails = false;
        this.show = false;
        var notificationObj = {
            'name': this.planDetails.name,
            'planId': this.planDetails.planId,
            'startDate': this.planDetails.startDate,
            'endDate': this.planDetails.endDate,
        };
        this.onSelectPlan.emit(notificationObj);
        this.onClose.emit();
    };
    EnergyPlanComponent.prototype.onCancel = function () {
        this.onClose.emit();
        this.show = false;
    };
    EnergyPlanComponent.prototype.onNextHandle = function () {
        this.show = false;
        this.showEnergyDetails = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EnergyPlanComponent.prototype, "show", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EnergyPlanComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EnergyPlanComponent.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EnergyPlanComponent.prototype, "onSelectPlan", void 0);
    EnergyPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'energy-plan',
            template: __webpack_require__(/*! ./energy-plan.component.html */ "./src/app/feature-component/energy-plan/energy-plan.component.html"),
            styles: [
                "\n      .disabledStyle {\n        cursor: not-allowed !important;\n        pointer-events: none!important;\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], EnergyPlanComponent);
    return EnergyPlanComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/openService-request/open-service-request.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/feature-component/openService-request/open-service-request.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"serviceRequestObject\">\n  <amexio-datagrid [enable-column-fiter]=\"false\" [data]=\"serviceRequestObject\">\n    <amexio-data-table-column\n      [data-index]=\"'srNo'\"\n      [data-type]=\"'string'\"\n      [hidden]=\"false\"\n      [text]=\"'SR Number'\">\n    </amexio-data-table-column>\n    <amexio-data-table-column\n      [sort]=\"false\"\n      [data-index]=\"'ticketType'\"\n      [data-type]=\"'string'\"\n      [hidden]=\"false\"\n      [text]=\"'Ticket Type'\">\n    </amexio-data-table-column>\n    <amexio-data-table-column\n      [data-index]=\"'openDate'\"\n      [data-type]=\"'string'\"\n      [hidden]=\"false\"\n      [text]=\"'SR Open Date'\">\n    </amexio-data-table-column>\n    <amexio-data-table-column\n      [data-index]=\"'dueDate'\"\n      [data-type]=\"'string'\"\n      [hidden]=\"false\"\n      [text]=\"'Due Date'\">\n    </amexio-data-table-column>\n\n    <amexio-data-table-column\n      [data-index]=\"'status'\"\n      [data-type]=\"'string'\"\n      [hidden]=\"false\"\n      [text]=\"'Status'\">\n    </amexio-data-table-column>\n    <amexio-data-table-column\n      [data-index]=\"'priority'\"\n      [data-type]=\"'string'\"\n      [hidden]=\"false\"\n      [text]=\"'Priority'\">\n    </amexio-data-table-column>\n\n\n    <amexio-data-table-column\n      [data-index]=\"'agentRemarks'\"\n      [data-type]=\"'string'\"\n      [hidden]=\"false\"\n      [text]=\"'Front Line Agent Remarks'\">\n      <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n          <span [ngClass]=\"{'open-status':row.status =='Open', 'close-status': row.status == 'Closed'}\" (click)=\"getFieldEngInfo(row)\">{{row.agentRemarks}}</span>\n      </ng-template>\n    </amexio-data-table-column>\n    <amexio-data-table-column\n      [data-index]=\"'createdBy'\"\n      [data-type]=\"'string'\"\n      [hidden]=\"false\"\n      [text]=\"'Created by User'\">\n    </amexio-data-table-column>\n  </amexio-datagrid>\n  <br>\n\n  <table *ngIf=\"fieldEnggInfo\">\n    <tr>\n      <td><b>Assigned Field Engineer</b></td>\n      <td>{{fieldEnggInfo.assignedFieldEngineer}}</td>\n    </tr>\n    <tr>\n      <td><b>Scheduled Visit Time</b></td>\n      <td>{{fieldEnggInfo.scheduleVistTime}}</td>\n    </tr>\n    <tr>\n      <td><b>Estimated Visit Time</b></td>\n      <td style=\"color: red\">{{fieldEnggInfo.estimatedVistTime}}</td>\n    </tr>\n    <tr>\n      <td><b>Reason</b></td>\n      <td>{{fieldEnggInfo.reason}}</td>\n    </tr>\n  </table>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/feature-component/openService-request/openservice.request.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/feature-component/openService-request/openservice.request.component.ts ***!
  \****************************************************************************************/
/*! exports provided: OpenServiceRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenServiceRequestComponent", function() { return OpenServiceRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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
 * Created by dattaram on 25/2/19.
 */

var OpenServiceRequestComponent = /** @class */ (function () {
    function OpenServiceRequestComponent() {
        this.serviceRequestObject = [];
        this.isInteractionHistory = false;
    }
    OpenServiceRequestComponent.prototype.ngOnInit = function () {
    };
    OpenServiceRequestComponent.prototype.ngOnChanges = function (changes) {
        if (changes['serviceRequestObject']) {
            this.serviceRequestObject = [];
            this.serviceRequestObject = changes.serviceRequestObject.currentValue;
            if (this.serviceRequestObject && !this.isInteractionHistory) {
                this.fieldEnggInfo = this.serviceRequestObject[0];
            }
        }
    };
    OpenServiceRequestComponent.prototype.getFieldEngInfo = function (data) {
        this.fieldEnggInfo = data;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('service-request-object'),
        __metadata("design:type", Array)
    ], OpenServiceRequestComponent.prototype, "serviceRequestObject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('is-interaction-history'),
        __metadata("design:type", Object)
    ], OpenServiceRequestComponent.prototype, "isInteractionHistory", void 0);
    OpenServiceRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'open-service-request',
            template: __webpack_require__(/*! ./open-service-request.component.html */ "./src/app/feature-component/openService-request/open-service-request.component.html"),
            styles: [
                "      \n      .open-status {\n        text-decoration: underline;\n      }\n      .close-status {\n        pointer-events: none;\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], OpenServiceRequestComponent);
    return OpenServiceRequestComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/searchbox/searchbox.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/feature-component/searchbox/searchbox.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inputgroup\" #rootDiv>\n  <input\n    id=\"input\"\n    role=\"combobox\"\n    name=\"searchbox\"\n    [(ngModel)]=\"searchId\"\n    type=\"text\" class=\"input-control\"\n    (focus)=\"focusHandle($event)\"\n    (blur)=\"blurHandle($event)\"\n    [attr.placeholder]=\"'search'\"/>\n  <span class=\"drodown-caret-down\" (click)=\"iconHandle()\" style=\"cursor: pointer\">\n      <i class=\"fa fa-search\"></i>\n      </span>\n  <span #dropdownitems  class=\"dropdown\"  [ngStyle]=\"dropdownstyle\">\n          <ul class=\"dropdown-list\">\n            <li (mousedown)=\"liClickHandle(item)\"  role=\"option\"  class=\"list-items\" *ngFor=\"let item of dropDownItemList\">{{item.key}} <i style=\"float: right\" [ngClass]=\"{'fa fa-check': item.selected}\" aria-hidden=\"true\"></i></li>\n          </ul>\n        </span>\n</div>\n<br>\n"

/***/ }),

/***/ "./src/app/feature-component/searchbox/searchbox.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/feature-component/searchbox/searchbox.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rina_lib_src_lib_services_shared_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../rina-lib/src/lib/services/shared/http.service */ "../rina-lib/src/lib/services/shared/http.service.ts");
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
 * Created by dattaram on 15/1/19.
 */


var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent(_httpService) {
        this._httpService = _httpService;
        this.showDropdown = false;
        this.dropDownItemList = [];
        this.searchId = '';
        this.searchType = 1;
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        this.getSearchOptionList();
        this.showList(this.showDropdown);
    };
    SearchBoxComponent.prototype.getSearchOptionList = function () {
        var _this = this;
        this._httpService.fetchLocalData('assets/searchoptionlist.json', 'get').subscribe(function (res) {
            _this.dropDownItemList = res.data;
        });
    };
    SearchBoxComponent.prototype.focusHandle = function (event) {
        this.showList(true);
    };
    SearchBoxComponent.prototype.iconHandle = function () {
        var searchObject = {
            searchId: this.searchId.replace(/\s/g, ''),
            searchType: this.searchType
        };
        this.search.emit(searchObject);
    };
    SearchBoxComponent.prototype.blurHandle = function (event) {
        this.showList(false);
    };
    SearchBoxComponent.prototype.liClickHandle = function (item) {
        this.dropDownItemList.forEach(function (obj) {
            obj.selected = false;
        });
        item.selected = true;
        this.searchType = item.id;
        if (this.searchId !== '') {
            this.iconHandle();
        }
        this.showList(false);
    };
    SearchBoxComponent.prototype.showList = function (flag) {
        this.showDropdown = flag;
        if (this.showDropdown) {
            this.dropdownstyle = { visibility: 'visible' };
        }
        else {
            this.dropdownstyle = { visibility: 'hidden' };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchBoxComponent.prototype, "search", void 0);
    SearchBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-box',
            template: __webpack_require__(/*! ./searchbox.component.html */ "./src/app/feature-component/searchbox/searchbox.component.html")
        }),
        __metadata("design:paramtypes", [_rina_lib_src_lib_services_shared_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/service-list/service-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/feature-component/service-list/service-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"servicelist\">\n    <amexio-card [header]=\"false\"\n                          [footer]=\"true\"\n                          [footer-align]=\"'center'\">\n         <amexio-body>\n           <search-box (search)=\"getSearchObject($event)\"></search-box>\n           <ng-container *ngFor=\"let service of serviceList\">\n             <amexio-button [label]=\"service.serviceName\"\n                            [type]=\"'theme-color'\"\n                            (onClick)=\"openServiceBookingWindow(service)\"\n                            [disabled]=\"service.disabled\"\n                            [tooltip]=\"'large'\"\n                            [block]=\"true\">\n             </amexio-button><br>\n           </ng-container>\n         </amexio-body>\n         <amexio-action>\n           <amexio-row>\n             <amexio-column [size]=\"4\">\n               <amexio-image style=\"color: lightskyblue\" [icon-class]=\"'fa fa-file-pdf-o fa-2x'\" ></amexio-image>\n             </amexio-column>\n             <amexio-column [size]=\"4\">\n               <amexio-image style=\"color: blue\" [icon-class]=\"'fa fa-file-word-o fa-2x'\" ></amexio-image>\n             </amexio-column>\n             <amexio-column [size]=\"4\">\n               <amexio-image style=\"color: green\" [icon-class]=\"'fa fa-file-excel-o fa-2x'\" ></amexio-image>\n             </amexio-column>\n           </amexio-row>\n         </amexio-action>\n       </amexio-card>\n</span>\n\n<amexio-notification\n  [data]=\"errorMsgData\"\n  [vertical-position]=\"'top'\"\n  [horizontal-position]=\"'center'\"\n  [close-on-escape] =\"true\"\n  [background-color]=\"'red'\"\n  [auto-dismiss-msg]=\"true\"\n  [icon]=\"'fa fa-times-circle-o'\"\n  [auto-dismiss-msg-interval]=\"4000\">\n</amexio-notification>\n"

/***/ }),

/***/ "./src/app/feature-component/service-list/service.list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/feature-component/service-list/service.list.component.ts ***!
  \**************************************************************************/
/*! exports provided: ServiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceListComponent", function() { return ServiceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/**
 * Created by dattaram on 17/1/19.
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

var ServiceListComponent = /** @class */ (function () {
    function ServiceListComponent() {
        this.serviceList = [];
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errorFound = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.serviceTypeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errorMsgData = [];
    }
    ServiceListComponent.prototype.ngOnInit = function () {
    };
    ServiceListComponent.prototype.getSearchObject = function (event) {
        this.search.emit(event);
    };
    ServiceListComponent.prototype.openServiceBookingWindow = function (service) {
        this.serviceTypeClick.emit(service);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('service-list'),
        __metadata("design:type", Array)
    ], ServiceListComponent.prototype, "serviceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ServiceListComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ServiceListComponent.prototype, "errorFound", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ServiceListComponent.prototype, "serviceTypeClick", void 0);
    ServiceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'service-list-component',
            template: __webpack_require__(/*! ./service-list.component.html */ "./src/app/feature-component/service-list/service-list.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ServiceListComponent);
    return ServiceListComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/tab-component/current-plan/current-plan.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/feature-component/tab-component/current-plan/current-plan.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card [header]=\"true\"\n             [footer]=\"false\">\n  <amexio-header>\n    YOUR ENERGY PLAN\n  </amexio-header>\n  <amexio-body>\n    <amexio-label size=\"small-bold\">{{currentPlan.plan}}</amexio-label><br><br>\n    <amexio-label size=\"small-bold\">{{currentPlan.benefits[0]}}</amexio-label><br>\n    <amexio-label>{{currentPlan.benefits[1]}}</amexio-label>\n  </amexio-body>\n</amexio-card>\n\n"

/***/ }),

/***/ "./src/app/feature-component/tab-component/current-plan/current-plan.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/feature-component/tab-component/current-plan/current-plan.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CurrentPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPlanComponent", function() { return CurrentPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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
 * Created by dattaram on 19/2/19.
 */

var CurrentPlanComponent = /** @class */ (function () {
    function CurrentPlanComponent() {
        this.currentPlan = {};
    }
    CurrentPlanComponent.prototype.ngOnInit = function () {
    };
    CurrentPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'current-plan',
            template: __webpack_require__(/*! ./current-plan.component.html */ "./src/app/feature-component/tab-component/current-plan/current-plan.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CurrentPlanComponent);
    return CurrentPlanComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/tab-component/electricity-bill/electricity-bill.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/feature-component/tab-component/electricity-bill/electricity-bill.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<b>Period: {{billSummary.period}}</b><br>\n<label>Your rate: {{billSummary.rate}}</label>\n<amexio-datagrid [data]=\"billSummary.billDetails\">\n  <amexio-data-table-column [width]=\"50\" [data-index]=\"'title'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"''\">\n    <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n      <ng-container *ngIf=\"row.bold\">\n        <b>{{row.title}}</b>\n      </ng-container>\n      <ng-container *ngIf=\"!row.bold\">\n        <span>{{row.title}}</span>\n      </ng-container>\n    </ng-template>\n  </amexio-data-table-column>\n  <amexio-data-table-column  [data-index]=\"'usage'\" [data-type]=\"'string'\" [text]=\"'Usage(kwh)'\">\n  </amexio-data-table-column>\n  <amexio-data-table-column  [data-index]=\"'charge'\" [data-type]=\"'string'\" [text]=\"'Charge'\">\n  </amexio-data-table-column>\n  <amexio-data-table-column  [data-index]=\"'amount'\" [data-type]=\"'string'\" [text]=\"'Amount'\">\n  </amexio-data-table-column>\n</amexio-datagrid>\n"

/***/ }),

/***/ "./src/app/feature-component/tab-component/electricity-bill/electricity-bill.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/feature-component/tab-component/electricity-bill/electricity-bill.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ElectricityBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityBillComponent", function() { return ElectricityBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/**
 * Created by dattaram on 19/2/19.
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

var ElectricityBillComponent = /** @class */ (function () {
    function ElectricityBillComponent() {
    }
    ElectricityBillComponent.prototype.ngOnInit = function () { };
    ElectricityBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'electricity-bill',
            template: __webpack_require__(/*! ./electricity-bill.component.html */ "./src/app/feature-component/tab-component/electricity-bill/electricity-bill.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ElectricityBillComponent);
    return ElectricityBillComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/tab-component/interaction-history/interaction-history.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/feature-component/tab-component/interaction-history/interaction-history.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<open-service-request [service-request-object]=\"interactionHistory\" [is-interaction-history]=\"true\"></open-service-request>\n"

/***/ }),

/***/ "./src/app/feature-component/tab-component/interaction-history/interaction-history.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/feature-component/tab-component/interaction-history/interaction-history.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: InteractionHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionHistoryComponent", function() { return InteractionHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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
 * Created by dattaram on 19/2/19.
 */

var InteractionHistoryComponent = /** @class */ (function () {
    function InteractionHistoryComponent() {
    }
    InteractionHistoryComponent.prototype.ngOnInit = function () {
    };
    InteractionHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'interaction-history',
            template: __webpack_require__(/*! ./interaction-history.component.html */ "./src/app/feature-component/tab-component/interaction-history/interaction-history.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], InteractionHistoryComponent);
    return InteractionHistoryComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/tab-component/natural-gas-bill/natural-gas-bill.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/feature-component/tab-component/natural-gas-bill/natural-gas-bill.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"billSummary\">\n  <b>Period: {{billSummary.period}}</b><br>\n  <span>Your rate: {{billSummary.rate}}</span>\n  <amexio-datagrid\n    [data]=\"billSummary.meterDetails\">\n    <amexio-data-table-column\n      [data-index]=\"'meterNo'\"\n      [data-type]=\"'string'\"\n      [width]=\"13\"\n      [text]=\"'Meter no'\">\n    </amexio-data-table-column>\n    <amexio-data-table-column\n      [data-index]=\"'previousRead'\"\n      [data-type]=\"'string'\"\n      [width]=\"20\"\n      [text]=\"'Previous Read'\">\n    </amexio-data-table-column>\n    <amexio-data-table-column\n      [data-index]=\"'currentRead'\"\n      [data-type]=\"'string'\"\n      [width]=\"15\"\n      [text]=\"'Current Read'\">\n    </amexio-data-table-column>\n    <amexio-data-table-column\n      [data-index]=\"'volumeX'\"\n      [data-type]=\"'string'\"\n      [width]=\"13\"\n      [text]=\"'Volumn X'\">\n    </amexio-data-table-column>\n    <amexio-data-table-column\n      [data-index]=\"'correctionFactorX'\"\n      [data-type]=\"'string'\"\n      [width]=\"20\"\n      [text]=\"'Correction factor X'\">\n    </amexio-data-table-column>\n    <amexio-data-table-column\n      [data-index]=\"'heatingValue'\"\n      [data-type]=\"'string'\"\n      [width]=\"17\"\n      [text]=\"'Heating Value'\">\n      <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n        <ng-container *ngIf=\"row.bold\">\n          <b>{{row.heatingValue}}</b>\n        </ng-container>\n        <ng-container *ngIf=\"!row.bold\">\n          <span>{{row.heatingValue}}</span>\n        </ng-container>\n      </ng-template>\n    </amexio-data-table-column>\n    <amexio-data-table-column\n      [data-index]=\"'usageMJ'\"\n      [data-type]=\"'string'\"\n      [width]=\"15\"\n      [text]=\"'Usage (MJ)'\">\n      <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n        <ng-container *ngIf=\"row.bold\">\n          <b>{{row.usageMJ}}</b>\n        </ng-container>\n        <ng-container *ngIf=\"!row.bold\">\n          <span>{{row.usageMJ}}</span>\n        </ng-container>\n      </ng-template>\n    </amexio-data-table-column>\n  </amexio-datagrid>\n\n\n  <amexio-row>\n    <amexio-column [size]=\"10\">\n      <amexio-datagrid\n        [data]=\"billSummary.billDetails\">\n        <amexio-data-table-column\n          [data-index]=\"'title'\"\n          [data-type]=\"'string'\"\n          [width]=\"18\"\n          [text]=\"'Charges'\">\n          <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n            <ng-container *ngIf=\"row.bold\">\n              <b>{{row.title}}</b>\n            </ng-container>\n            <ng-container *ngIf=\"!row.bold\">\n              <span>{{row.title}}</span>\n            </ng-container>\n          </ng-template>\n        </amexio-data-table-column>\n        <amexio-data-table-column\n          [data-index]=\"'billDays'\"\n          [data-type]=\"'string'\"\n          [width]=\"13\"\n          [text]=\"'Bill Days'\">\n        </amexio-data-table-column>\n        <amexio-data-table-column\n          [data-index]=\"'usage'\"\n          [data-type]=\"'string'\"\n          [width]=\"17\"\n          [text]=\"'Usage (MJ)'\">\n        </amexio-data-table-column>\n        <amexio-data-table-column\n          [data-index]=\"'charge'\"\n          [data-type]=\"'string'\"\n          [width]=\"15\"\n          [text]=\"'Charge'\">\n        </amexio-data-table-column>\n        <amexio-data-table-column\n          [data-index]=\"'amount'\"\n          [data-type]=\"'string'\"\n          [width]=\"10\"\n          [text]=\"'Amount'\">\n          <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n            <ng-container *ngIf=\"row.bold\">\n              <b>{{row.amount}}</b>\n            </ng-container>\n            <ng-container *ngIf=\"!row.bold\">\n              <span>{{row.amount}}</span>\n            </ng-container>\n          </ng-template>\n        </amexio-data-table-column>\n\n      </amexio-datagrid>\n    </amexio-column>\n  </amexio-row>\n</ng-container>\n\n"

/***/ }),

/***/ "./src/app/feature-component/tab-component/natural-gas-bill/natural-gas-bill.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/feature-component/tab-component/natural-gas-bill/natural-gas-bill.component.ts ***!
  \************************************************************************************************/
/*! exports provided: NaturalGasBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaturalGasBillComponent", function() { return NaturalGasBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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
 * Created by dattaram on 19/2/19.
 */

var NaturalGasBillComponent = /** @class */ (function () {
    function NaturalGasBillComponent() {
    }
    NaturalGasBillComponent.prototype.ngOnInit = function () { };
    NaturalGasBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'natural-gas-bill',
            template: __webpack_require__(/*! ./natural-gas-bill.component.html */ "./src/app/feature-component/tab-component/natural-gas-bill/natural-gas-bill.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NaturalGasBillComponent);
    return NaturalGasBillComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/tab-component/right-sell/right-sell.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/feature-component/tab-component/right-sell/right-sell.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"rightSell\">\n    <amexio-card [header]=\"true\" [footer]=\"false\">\n        <amexio-header>\n            OFFER : MINI SOLAR SYSTEM , SAVING {{rightSell.saving}} ON AVERAGE QUARTERLY BILL\n        </amexio-header>\n        <amexio-body>\n            <amexio-row>\n                <amexio-column size=\"6\" [fit]=\"true\">\n                    <table style=\"width: 100%\">\n                        <tr>\n                            <td><b>PostCode:</b></td>\n                            <td>{{rightSell.postCode}}</td>\n                        </tr>\n                        <tr>\n                            <td><b>Average 3 month electricity bill:</b></td>\n                            <td>{{rightSell.avg3MonthElectricityBill}}</td>\n                        </tr>\n                        <tr>\n                            <td><b>Energy Usage Pattern:</b></td>\n                            <td><b>{{rightSell.energyUsagePattern}}</b></td>\n                        </tr>\n                    </table>\n                </amexio-column>\n                <amexio-column size=\"6\" [fit]=\"true\">\n                    <amexio-row>\n                        <amexio-column size=\"4\">\n                            <b>Mini system</b><br> {{rightSell.miniSystem}}\n                        </amexio-column>\n                        <amexio-column size=\"4\">\n                            <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"space-between\">\n                                <amexio-layout-item>\n                                    <amexio-image [icon-class]=\"'fa fa-square-o fa-3x'\">\n                                    </amexio-image>\n                                </amexio-layout-item>\n                                <amexio-layout-item>\n                                    <b>{{rightSell.energy}}</b><br> invertor\n                                </amexio-layout-item>\n                            </amexio-layout-columns>\n                        </amexio-column>\n                        <amexio-column size=\"4\">\n                            <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"space-between\">\n                                <amexio-layout-item>\n                                    <amexio-image style=\"color:blue\" [icon-class]=\"'fa fa-th fa-3x'\">\n                                    </amexio-image>\n                                </amexio-layout-item>\n                                <amexio-layout-item>\n                                    <b>{{rightSell.noOfSolarPanels}}</b><br> solar panels\n                                </amexio-layout-item>\n                            </amexio-layout-columns>\n                        </amexio-column>\n                    </amexio-row>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column size=\"6\">\n                    <amexio-label size=\"large\" font-color=\"green\">\n                        {{rightSell.saving}}\n                    </amexio-label>\n                    <span><amexio-label size=\"small\">Estimated savings on your average quarterly bill</amexio-label></span>\n                    <br>\n                    <amexio-row>\n                        <amexio-column size=\"6\">\n                            <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"space-between\">\n                                <amexio-layout-item>\n                                    <amexio-image [icon-class]=\"'fa fa-usd fa-3x'\">\n                                    </amexio-image>\n                                </amexio-layout-item>\n                                <amexio-layout-item>\n                                    <span>Your system will cost</span><br>\n                                    <b>{{rightSell.systemCost}}</b>\n                                </amexio-layout-item>\n                            </amexio-layout-columns>\n                        </amexio-column>\n                        <amexio-column size=\"6\">\n                            <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"space-between\">\n                                <amexio-layout-item>\n                                    <amexio-image [icon-class]=\"'fa fa-calendar-minus-o fa-3x'\">\n                                    </amexio-image>\n                                </amexio-layout-item>\n                                <amexio-layout-item>\n                                    <span>It'll be paying for itself in</span><br>\n                                    <b>{{rightSell.years}}</b>\n                                </amexio-layout-item>\n                            </amexio-layout-columns>\n                        </amexio-column>\n                    </amexio-row>\n                </amexio-column>\n                <amexio-column size=\"6\">\n                    <amexio-image height=\"180px\" width=\"100%\" [path]=\"'assets/images/solarsystem.jpeg'\">\n                    </amexio-image>\n                </amexio-column>\n            </amexio-row>\n            <amexio-row>\n                <amexio-column size=\"4\">\n                    <b>How was this worked out ?</b><br>\n                    <p>We estimate a potential savings of <b style=\"color:green\">{{rightSell.totalCost}}</b> based on:</p>\n                    <p>\n                        Your average quarterly bill of <b>{{rightSell.avg3MonthElectricityBill}}</b>, with most of your energy\n                        used <b>both during {{rightSell.energyUsagePattern}}</b>, which means you'd likely use <b>{{rightSell.usedEnergy}}</b>                        of the solar energy you generate.\n                    </p>\n                </amexio-column>\n                <amexio-column [fit]=\"true\" size=\"8\">\n\n                    <amexio-datagrid [enable-column-fiter]=\"false\" [data]=\"rightSell.solarEnergyUse\">\n                        <amexio-data-table-column [width]=\"25\" [data-index]=\"'label'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"''\">\n                        </amexio-data-table-column>\n                        <amexio-data-table-column [width]=\"15\" [data-index]=\"'energy'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"''\">\n                        </amexio-data-table-column>\n                        <amexio-data-table-column [width]=\"15\" [data-index]=\"'cost'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"''\">\n                        </amexio-data-table-column>\n                        <amexio-data-table-column [width]=\"15\" [data-index]=\"'totalCost'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"''\">\n                        </amexio-data-table-column>\n                    </amexio-datagrid>\n                </amexio-column>\n                <amexio-column size=\"12\">\n                    <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'end'\">\n                        <amexio-layout-item>\n                            <amexio-button [label]=\"'EMAIL QUOTE'\" [type]=\"'theme-color'\" [size]=\"'default'\">\n                            </amexio-button>\n                        </amexio-layout-item>\n                        <amexio-layout-item>\n                            <amexio-button [label]=\"'ENROL NOW'\" [type]=\"'theme-color'\" [size]=\"'default'\">\n                            </amexio-button>\n                        </amexio-layout-item>\n                    </amexio-layout-columns>\n                </amexio-column>\n            </amexio-row>\n        </amexio-body>\n    </amexio-card>\n</ng-container>\n<ng-container *ngIf=\"upSell\">\n    <amexio-card [header]=\"true\" [footer]=\"false\">\n        <amexio-header>\n            OFFER : RIGHT ENERGY PLAN FOR YOU\n        </amexio-header>\n        <amexio-body>\n            <amexio-row>\n                <amexio-column size=\"4\" [fit]=\"true\">\n                    <p><b>{{upSell.currentPlan | uppercase}}</b></p>\n                    <p>10% Off our natural gas usage charges when you pay on time.</p>\n                    <p>Discount is based on 8% + 2% online bonus.\n                    </p>\n                    <p>\n                        Includes bonus 2% off our usage charges when you sign up online. Flexible payment options. eBilling and eCorrespondence available.\n                        No exit fees or lock-in contracts</p>\n                </amexio-column>\n                <amexio-column size=\"8\" [fit]=\"true\">\n                    <br>\n                    <amexio-datagrid title=\"Estimated Price\" [data]=\"upSell.estimatedPrice\">\n                        <amexio-data-table-column [data-index]=\"'noOfPerson'\" [data-type]=\"'string'\" [text]=\"''\">\n                            <ng-template #amexioBodyTmpl let-column let-row=\"row\">\n                                <ng-container *ngIf=\"row.noOfPerson == '1 person'; else elseBlock\">\n                                    <i class=\"fa fa-user\" style=\"font-size: 30px;\" aria-hidden=\"true\"></i> &nbsp; {{row.noOfPerson}}\n                                </ng-container>\n                                <ng-template #elseBlock>\n                                    <i class=\"fa fa-users\" style=\"font-size: 30px;\" aria-hidden=\"true\"></i> &nbsp; {{row.noOfPerson}}\n                                </ng-template>\n\n                            </ng-template>\n                        </amexio-data-table-column>\n                        <amexio-data-table-column [data-index]=\"'energyConsumption'\" [data-type]=\"'string'\">\n                        </amexio-data-table-column>\n                        <amexio-data-table-column [data-index]=\"'priceWithDiscount'\" [data-type]=\"'string'\">\n                        </amexio-data-table-column>\n                        <amexio-data-table-column [data-index]=\"'price'\" [data-type]=\"'string'\">\n                        </amexio-data-table-column>\n                    </amexio-datagrid>\n                </amexio-column>\n                <amexio-column size=\"4\" [fit]=\"true\">\n                  <amexio-label\n                        [size]=\"'medium-bold'\">\n                            Price Summary\n                    </amexio-label>\n                        <hr>\n                       <amexio-label\n                        [size]=\"'medium-bold'\">\n                           General charges\n                    </amexio-label> <br>\n                        <span>Daily supply charges:</span>\n                        &nbsp;\n                        <b>{{upSell.dailySupplyCharges}}</b>\n                        <br>\n                        <span>General usage rates:</span>\n                        &nbsp;\n                        <b>{{upSell.generalUsageRates}}</b><br>\n                        <span> <b>ConnectionFee</b></span> &nbsp;{{upSell.connectionFee}}<br>\n                        <BR>\n                       <amexio-button [label]=\"'SELECT PLAN'\" [type]=\"'theme-color'\" [size]=\"'default'\">\n                            </amexio-button>\n                </amexio-column>\n                <amexio-column size=\"8\" [fit]=\"true\" style=\"\">\n                    <amexio-label\n                        [size]=\"'medium-bold'\">\n                            General usage charges\n                    </amexio-label><br>\n                    <span>Usage Rate(at all times)</span>\n                    <hr>\n                    <amexio-row>\n                       <amexio-column size=\"2\" [fit]=\"true\" *ngFor=\"let usagecharges of upSell.generalUasageCharges\"> \n                    <a class=\"fa fa-circle\"\n                       [ngClass]=\"{'first': usagecharges.slabName== 'First', 'next': usagecharges.slabName== 'Next' , 'remaining': usagecharges.slabName == 'Remaining'}\"></a>\n                    &nbsp;{{usagecharges.slabName}}\n                  <br>\n                           {{usagecharges.slab}}<br>\n                           {{usagecharges.slabUnit}}\n                       </amexio-column>   \n                    </amexio-row>\n                </amexio-column>\n            </amexio-row>\n        </amexio-body>\n    </amexio-card>\n</ng-container>"

/***/ }),

/***/ "./src/app/feature-component/tab-component/right-sell/right-sell.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/feature-component/tab-component/right-sell/right-sell.component.ts ***!
  \************************************************************************************/
/*! exports provided: RightSellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSellComponent", function() { return RightSellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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
 * Created by ashwini on 21/3/19.
 */

var RightSellComponent = /** @class */ (function () {
    function RightSellComponent() {
    }
    RightSellComponent.prototype.ngOnInit = function () {
    };
    RightSellComponent.prototype.getRightSell = function (data) {
        if (data) {
            if (data.type == '2') {
                this.rightSell = data.rightSell;
            }
            else if (data.type == '1') {
                this.upSell = data.upSell;
            }
        }
    };
    RightSellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'right-sell',
            template: __webpack_require__(/*! ./right-sell.component.html */ "./src/app/feature-component/tab-component/right-sell/right-sell.component.html"),
            styles: [
                ".first {\n        color: #fda50f!important;\n      }\n      .next {\n        color: #FFFF69!important;\n      }\n      .remaining {\n        color: #AF7300!important;\n      }\n  ; }\n    "
            ],
        }),
        __metadata("design:paramtypes", [])
    ], RightSellComponent);
    return RightSellComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/tab-component/usage-report/usage-report.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/feature-component/tab-component/usage-report/usage-report.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"usageReports\">\n  <ng-container *ngFor=\"let usageReport of usageReports\">\n    <amexio-card [header]=\"true\"\n                 [footer]=\"false\">\n      <amexio-header>\n        YOUR USAGE SUMMARY\n      </amexio-header>\n      <amexio-body>\n        <amexio-row>\n          <amexio-column [size]=\"6\">\n            <table style=\"width: 100%\">\n              <tr>\n                <td>Average cost per day</td>\n                <td><b>{{usageReport.avgCostPerDay}}</b></td>\n              </tr>\n              <tr>\n                <td>Average daily usage</td>\n                <td><b>{{usageReport.avgDailyUsage}}</b></td>\n              </tr>\n              <tr>\n                <td>Same time last year</td>\n                <td><b>{{usageReport.sameTimeLastYear}}</b></td>\n              </tr>\n\n              <tr>\n                <td>  <p><b>Year indicative greenhouse gas emissions</b></p></td>\n              </tr>\n\n              <tr>\n                <td>Total for this bill</td>\n                <td><b>{{usageReport.totalBill}}</b></td>\n              </tr>\n              <tr>\n                <td>Same time last year</td>\n                <td><b>{{usageReport.samelastYear}}</b></td>\n              </tr>\n              <tr *ngIf=\"tabData.value == 'naturalgas'\">\n                <td>Saved with Green Gas</td>\n                <td><b>{{usageReport.savedwithGreenPower}}</b></td>\n              </tr>\n              <tr *ngIf=\"tabData.value == 'electricity'\">\n                <td>Saved with GreenPower</td>\n                <td><b>{{usageReport.savedwithGreenPower}}</b></td>\n              </tr>\n            </table><br>\n            <span>For more information on greenhouse gas emission visit</span><br>\n            <span><b>originenery.com.au</b></span>\n\n          </amexio-column>\n          <amexio-column [size]=\"6\">\n            <amexio-label size=\"medium-bold\">{{usageReport.summary.usagelastYear}} increase</amexio-label><br/>\n            <amexio-label>In usage since last year</amexio-label>\n            <amexio-layout-columns [alignment]=\"'center'\" [orientation]=\"'horizontal'\" [border]=\"false\" [fit]=\"true\">\n              <amexio-layout-item>\n                <amexio-layout-columns [alignment]=\"'end'\" [orientation]=\"'vertical'\" [border]=\"false\" [fit]=\"true\">\n                  <amexio-layout-item [padding]=\"'0px'\">\n                    <i class=\"fa fa-home \" style=\"font-size: 100px;color: #FFC90A\" aria-hidden=\"true\"></i>\n                  </amexio-layout-item>\n                  <amexio-layout-item [padding]=\"'0px'\"  style=\"text-align: center\">\n                    <span>{{usageReport.summary.lastYear}}</span><br/>\n                    <span><b>LAST YEAR</b></span>\n                  </amexio-layout-item>\n                </amexio-layout-columns>\n\n              </amexio-layout-item>\n              <amexio-layout-item>\n                <amexio-layout-columns [alignment]=\"'end'\" [orientation]=\"'vertical'\" [border]=\"false\" [fit]=\"true\">\n                  <amexio-layout-item [padding]=\"'0px'\">\n                    <i class=\"fa fa-home \" style=\"font-size: 150px;color: #FFC90A\" aria-hidden=\"true\"></i>\n\n                  </amexio-layout-item>\n                  <amexio-layout-item [padding]=\"'0px'\" style=\"text-align: center\">\n                    <span>{{usageReport.summary.thisYear}}</span><br/>\n                    <span><b>THIS YEAR</b></span>\n\n\n                  </amexio-layout-item>\n                </amexio-layout-columns>\n\n              </amexio-layout-item>\n            </amexio-layout-columns>\n\n          </amexio-column>\n\n        </amexio-row>\n      </amexio-body>\n    </amexio-card><br>\n\n    <amexio-card [header]=\"true\"\n                 [footer]=\"false\">\n      <amexio-header>\n        YOUR USAGE BREAKDOWN\n      </amexio-header>\n      <amexio-body>\n        <amexio-row>\n          <amexio-column [size]=\"6\">\n            <table style=\"width: 100%\">\n              <tr>\n                <td>Average cost per day</td>\n                <td><b>{{usageReport.avgCostPerDay}}</b></td>\n              </tr>\n              <tr>\n                <td>Average daily usage</td>\n                <td><b>{{usageReport.avgDailyUsage}}</b></td>\n              </tr>\n              <tr>\n                <td>Same time last year</td>\n                <td><b>{{usageReport.sameTimeLastYear}}</b></td>\n              </tr>\n\n              <tr>\n                <td>  <p><b>Year indicative greenhouse gas emissions</b></p></td>\n              </tr>\n\n              <tr>\n                <td>Total for this bill</td>\n                <td><b>{{usageReport.totalBill}}</b></td>\n              </tr>\n              <tr>\n                <td>Same time last year</td>\n                <td><b>{{usageReport.samelastYear}}</b></td>\n              </tr>\n              <tr *ngIf=\"tabData.value == 'naturalgas'\">\n                <td>Saved with Green Gas</td>\n                <td><b>{{usageReport.savedwithGreenPower}}</b></td>\n              </tr>\n              <tr *ngIf=\"tabData.value == 'electricity'\">\n                <td>Saved with GreenPower</td>\n                <td><b>{{usageReport.savedwithGreenPower}}</b></td>\n              </tr>\n            </table><br>\n            <span>For more information on greenhouse gas emission visit</span><br>\n            <span><b>originenery.com.au</b></span>\n\n          </amexio-column>\n          <amexio-column [size]=\"6\">\n            <amexio-d3-chart-bar\n              [data]=\"usageReport.breakdown\"\n              [height]=\"300\"\n              [label-color]=\"'white'\"\n              [label]=\"true\">\n            </amexio-d3-chart-bar>\n          </amexio-column>\n\n        </amexio-row>\n      </amexio-body>\n    </amexio-card>\n  </ng-container>\n\n</ng-container>\n\n"

/***/ }),

/***/ "./src/app/feature-component/tab-component/usage-report/usage-report.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/feature-component/tab-component/usage-report/usage-report.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UsageReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageReportComponent", function() { return UsageReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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
 * Created by dattaram on 19/2/19.
 */

var UsageReportComponent = /** @class */ (function () {
    function UsageReportComponent() {
    }
    UsageReportComponent.prototype.ngOnInit = function () {
    };
    UsageReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'usage-report',
            template: __webpack_require__(/*! ./usage-report.component.html */ "./src/app/feature-component/tab-component/usage-report/usage-report.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], UsageReportComponent);
    return UsageReportComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/update-information/update.info.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/feature-component/update-information/update.info.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- UPDATE INFO-->\n\n<amexio-card-ce >\n  <amexio-header-ce>\n    <amexio-label size=\"medium-bold\">\n      {{'Update Information' | uppercase}}\n    </amexio-label>\n  </amexio-header-ce>\n  <amexio-body-ce [align]=\"'start'\">\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-text-input field-label=\"Mobile No\"\n                           [(ngModel)]=\"readonlyUpdateInfor.mobile\"\n                           name=\"mobNo1\"\n                           [disabled]=\"true\"\n                           place-holder=\"Enter Mobile Number\">\n        </amexio-text-input>\n        <amexio-email-input field-label=\"Email\"\n                            name=\"email1\"\n                            [(ngModel)]=\"readonlyUpdateInfor.email\"\n                            place-holder=\"Enter Email\"\n                            [disabled]=\"true\"\n                            [icon-feedback]=\"false\">\n        </amexio-email-input>\n        <amexio-textarea-input field-label=\"Address\"\n                               name=\"address1\"\n                               place-holder=\"Enter Address\"\n                               [(ngModel)]=\"readonlyUpdateInfor.address\"\n                               [rows]=\"'3'\"\n                               [columns]=\"'2'\"\n                               [disabled]=\"true\"\n                               [icon-feedback]=\"false\">\n        </amexio-textarea-input>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <form #updateForm=\"ngForm\">\n          <amexio-text-input field-label=\"Mobile No\"\n                             [(ngModel)]=\"data.mobile\"\n                             name=\"mobNo\"\n                             place-holder=\"Enter Mobile Number\"\n                             [icon-feedback]=\"false\">\n          </amexio-text-input>\n          <amexio-email-input field-label=\"Email\"\n                              name=\"email\"\n                              [(ngModel)]=\"data.email\"\n                              place-holder=\"Enter Email\"\n                              [icon-feedback]=\"false\">\n          </amexio-email-input>\n          <amexio-textarea-input field-label=\"Address\"\n                                 name=\"address\"\n                                 place-holder=\"Enter Address\"\n                                 [(ngModel)]=\"data.address\"\n                                 [rows]=\"'3'\"\n                                 [columns]=\"'2'\"\n                                 [icon-feedback]=\"false\">\n          </amexio-textarea-input>\n\n        </form>\n      </amexio-column>\n\n    </amexio-row>\n\n  </amexio-body-ce>\n  <amexio-action-ce [align]=\"'flex-end'\" [border-top]=\"true\">\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\"\n                       [type]=\"'theme-backgroundcolor'\"\n                       [size]=\"'large'\"\n                       (onClick)=\"onUpdateInfoCancelHandle()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 5px;\">\n        <amexio-button [label]=\"'Submit'\"\n                       [type]=\"'theme-color'\"\n                       [size]=\"'large'\"\n                       [disabled]=\"!updateForm.valid\"\n                       (onClick)=\"onUpdateInfoSubmitHandle()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action-ce>\n</amexio-card-ce>\n\n"

/***/ }),

/***/ "./src/app/feature-component/update-information/update.info.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/feature-component/update-information/update.info.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UpdateInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInfoComponent", function() { return UpdateInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/customer.profile.model */ "./src/app/models/customer.profile.model.ts");
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
 * Created by dattaram on 21/3/19.
 */


var UpdateInfoComponent = /** @class */ (function () {
    function UpdateInfoComponent() {
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.readonlyUpdateInfor = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__["UpdateInformation"]('', '', '');
    }
    UpdateInfoComponent.prototype.ngOnInit = function () {
    };
    UpdateInfoComponent.prototype.ngOnChanges = function (changes) {
        if (changes['data']) {
            this.readonlyUpdateInfor = Object.assign(this.readonlyUpdateInfor, changes.data.currentValue);
        }
    };
    UpdateInfoComponent.prototype.onUpdateInfoCancelHandle = function () {
        this.onCancel.emit();
    };
    UpdateInfoComponent.prototype.onUpdateInfoSubmitHandle = function () {
        this.onSubmit.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__["UpdateInformation"])
    ], UpdateInfoComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UpdateInfoComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UpdateInfoComponent.prototype, "onSubmit", void 0);
    UpdateInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'update-information',
            template: __webpack_require__(/*! ./update.info.component.html */ "./src/app/feature-component/update-information/update.info.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], UpdateInfoComponent);
    return UpdateInfoComponent;
}());



/***/ }),

/***/ "./src/app/models/customer.profile.model.ts":
/*!**************************************************!*\
  !*** ./src/app/models/customer.profile.model.ts ***!
  \**************************************************/
/*! exports provided: CustomerProfileOrigin, OpenServiceRequest, CustomerProfile, ServiceTypeStructure, ServiceMetadataStructure, UpdateInformation, AddressModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfileOrigin", function() { return CustomerProfileOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenServiceRequest", function() { return OpenServiceRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfile", function() { return CustomerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeStructure", function() { return ServiceTypeStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMetadataStructure", function() { return ServiceMetadataStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInformation", function() { return UpdateInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModel", function() { return AddressModel; });
/**
 * Created by dattaram on 18/1/19.
 */
var CustomerProfileOrigin = /** @class */ (function () {
    function CustomerProfileOrigin() {
        this.openServiceRequest = null;
        this.interactionHistory = [];
        this.customerProfile = new CustomerProfile();
        this.electricity = new ServiceTypeStructure();
        this.naturalGas = new ServiceTypeStructure();
    }
    return CustomerProfileOrigin;
}());

var OpenServiceRequest = /** @class */ (function () {
    function OpenServiceRequest() {
        this.srNo = '';
        this.ticketType = '';
        this.openDate = '';
        this.dueDate = '';
        this.status = '';
        this.priority = '';
        this.agentRemarks = '';
        this.createdBy = null;
        this.createdDate = '';
        this.assignedFieldEngineer = '';
        this.scheduleVistTime = '';
        this.estimatedVistTime = '';
        this.reason = '';
    }
    return OpenServiceRequest;
}());

var CustomerProfile = /** @class */ (function () {
    function CustomerProfile() {
        this.customerId = '';
        this.customerNo = '';
        this.name = '';
        this.firstName = '';
        this.lastName = '';
        this.mobile = '';
        this.companyName = '';
        this.operatingStatus = '';
        this.addressLabel = '';
        this.address = new AddressModel();
        this.email = '';
        this.birthday = '';
        this.altNumber = '';
        this.anniversary = '';
        this.profileImageUrl = '';
        this.customerClass = '';
        this.uaeId = '';
        this.preferredModeOfContact = '';
        this.uniqueNo = '';
        this.type = '';
    }
    return CustomerProfile;
}());

var ServiceTypeStructure = /** @class */ (function () {
    function ServiceTypeStructure() {
    }
    return ServiceTypeStructure;
}());

var ServiceMetadataStructure = /** @class */ (function () {
    function ServiceMetadataStructure() {
        this.currentPlan = {};
        this.billSummary = {};
        this.usageReports = {};
        this.addOnInfo = null;
        this.analytics = null;
    }
    return ServiceMetadataStructure;
}());

var UpdateInformation = /** @class */ (function () {
    function UpdateInformation(mob, email, addr) {
        this.mobile = mob;
        this.email = email;
        this.address = addr;
    }
    return UpdateInformation;
}());

var AddressModel = /** @class */ (function () {
    function AddressModel() {
        this.addressLine1 = '';
        this.addressLine2 = '';
        this.city = '';
        this.state = '';
        this.postCode = '';
    }
    return AddressModel;
}());



/***/ }),

/***/ "./src/app/rina-home/rina-home.component.html":
/*!****************************************************!*\
  !*** ./src/app/rina-home/rina-home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-spinner [show]=\"showLoader\" [type]=\"'rectanglebounce'\" [vertical-position]=\"'center'\" [horizontal-position]=\"'center'\" [color]=\"'yellow'\">\n</amexio-spinner>\n<amexio-layout-grid [layout]=\"'rinahomepage'\">\n    <amexio-grid-item [name]=\"'logoposition'\">\n        <amexio-card [header]=\"false\" [footer]=\"false\">\n            <amexio-body>\n                <company-logo></company-logo>\n            </amexio-body>\n        </amexio-card>\n    </amexio-grid-item>\n    <amexio-grid-item [name]=\"'topslot2'\">\n        <span class=\"custdetail\">\n          <rina-property-grid [key-value-data]=\"customerKeyValuedata\" [has-badge]=\"true\" [badge]=\"badge\"></rina-property-grid>\n\n        </span>\n    </amexio-grid-item>\n    <amexio-grid-item [name]=\"'topslot3'\">\n       <span class=\"custdetail\">\n        <rina-property-grid [key-value-data]=\"eleSummaryKeyValueData\"\n                            (onPropertySelect)=\"onPropertySelectHandle($event)\"\n                            [has-radio-title]=\"true\" [radio-title-data]=\"electricityTitleData\">\n        </rina-property-grid>\n       </span>\n    </amexio-grid-item>\n\n    <amexio-grid-item [name]=\"'topslot4'\">\n      <span class=\"custdetail\">\n        <rina-property-grid  [has-radio-title]=\"true\"\n                             [has-radio]=\"hasNgas\"\n                             [radio-title-data]=\"gasTitleData\"\n                             (onPropertySelect)=\"onPropertySelectHandle($event)\"\n                             [key-value-data]=\"ngasSummaryKeyValueData\"></rina-property-grid>\n      </span>\n    </amexio-grid-item>\n    <amexio-grid-item [name]=\"'guages'\">\n        <amexio-card [header]=\"false\" [footer]=\"false\">\n            <amexio-body>\n                <amexio-layout-columns [fit]=\"true\" [orientation]=\"'horizontal'\" [border]=\"false\">\n                    <amexio-layout-item [fit]=\"true\" *ngFor=\"let alignment of ['center']\">\n                        <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'vertical'\" [alignment]=\"alignment\">\n                            <amexio-layout-item>\n                                <amexio-dashboard-gauge  [data]=\"gaugeChartData\" [red-color-from]=\"90\" [red-color-to]=\"100\" [yellow-color-from]=\"75\" [yellow-color-to]=\"90\" [scale-value]=\"5\">\n                                </amexio-dashboard-gauge>\n                                <amexio-row>\n                                    <amexio-column size=\"6\">\n                                        <amexio-label [size]=\"small\">\n                                            CSAT 70/100%\n                                        </amexio-label>\n                                    </amexio-column>\n                                    <amexio-column size=\"6\">\n                                        <amexio-label [size]=\"small\">\n                                            AHT SLA 200\n                                        </amexio-label>\n                                    </amexio-column>\n                                </amexio-row>\n                            </amexio-layout-item>\n                        </amexio-layout-columns>\n                    </amexio-layout-item>\n                </amexio-layout-columns>\n\n            </amexio-body>\n        </amexio-card>\n    </amexio-grid-item>\n    <amexio-grid-item [name]=\"'rinasidemenu'\">\n        <service-list-component [service-list]=\"serviceList\" (errorFound)=\"handleError()\" (search)=\"getSearchObject($event)\" (serviceTypeClick)=\"serviceTypeClickHandle($event)\"></service-list-component>\n    </amexio-grid-item>\n    <amexio-grid-item [name]=\"'rinasidecenter'\">\n        <amexio-layout-columns style=\"background-color: white\" [fit]=\"true\" [border]=\"false\" [orientation]=\"'vertical'\" [alignment]=\"'space-between'\">\n            <amexio-layout-item [padding]=\"false\" [fit]=\"true\">\n                <amexio-tab-view #tab [divide-header-equally]=\"true\" [closable]=\"false\" [body-height]=\"40\" >\n                </amexio-tab-view>\n            </amexio-layout-item>\n            <amexio-layout-item style=\"background-color: #E8E8E8\" [padding]=\"false\">\n              <amexio-layout-columns style=\"height: unset;\"  [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'start'\">\n                <amexio-layout-item [padding]=\"'0px'\">\n                  <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'start'\">\n                    <amexio-layout-item [fit]=\"true\">\n                      <div class=\"amexio-checkboxgroup-style\">\n                        <amexio-checkbox-group [data-reader]=\"'data'\" [display-field]=\"'serviceType'\" [value-field]=\"'serviceType'\" [horizontal]=\"true\" [http-method]=\"'get'\" [http-url]=\"'assets/serviceType.json'\">\n                        </amexio-checkbox-group>\n                      </div>\n                    </amexio-layout-item>\n                  </amexio-layout-columns>\n\n                </amexio-layout-item>\n\n                <amexio-layout-item [padding]=\"'0px'\">\n                  <amexio-layout-columns  [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'space-between'\">\n                    <amexio-layout-item [fit]=\"true\">\n                      <amexio-text-input place-holder=\"Call Remark\" [allow-blank]=\"true\" has-label=\"false\">\n                      </amexio-text-input>\n                    </amexio-layout-item>\n                    <amexio-layout-item>\n                      <amexio-button [size]=\"'medium'\" [label]=\"'Submit'\" [type]=\"'theme-color'\" [tooltip]=\"'submit'\">\n                      </amexio-button>\n                    </amexio-layout-item>\n                  </amexio-layout-columns>\n\n                </amexio-layout-item>\n\n\n              </amexio-layout-columns>\n            </amexio-layout-item>\n        </amexio-layout-columns>\n    </amexio-grid-item>\n    <amexio-grid-item [name]=\"'rinasidesearch'\">\n        <span class=\"servicelist\">\n            <amexio-card [header]=\"false\" [footer]=\"false\">\n                <amexio-body>\n                    <amexio-dropdown [place-holder]=\"'Select Script'\" [display-field]=\"'scriptName'\" [data-reader]=\"'data'\"\n                        [value-field]=\"'scriptUrl'\" [http-method]=\"'get'\" [http-url]=\"'assets/script.json'\"\n                        [enable-sort]=\"true\" [sort]=\"'asc'\">\n                    </amexio-dropdown>\n                       <p>\n                    <b>Fee changes affecting customers on market contracts</b><br/><br/>\n                     {{infoMsg}}\n                  </p>\n                </amexio-body>\n            </amexio-card>\n        </span>\n    </amexio-grid-item>\n</amexio-layout-grid>\n<amexio-dialogue [(show)]=\"warningdialogue\" [material-design]=\"true\" [message]=\"warningMsg\" [title]=\"'Error'\" [message-type]=\"'error'\" [type]=\"'alert'\">\n</amexio-dialogue>\n\n\n\n<amexio-notification\n  [background-color]=\"'orange'\"\n  [foreground-color]=\"'black'\"\n  [data]=\"notificationData\"\n  [vertical-position]=\"'bottom'\"\n  [horizontal-position]=\"'right'\"\n  [close-on-escape] =\"true\">\n  <ng-template   #amexioNotificationTemp let-data=\"data\" >\n    <amexio-box padding=\"true\" [box-width]=\"'225px'\">\n      <amexio-label size=\"medium-bold\">Additional Information</amexio-label><br/>\n      <amexio-label>{{data}}</amexio-label><br/>\n      <br/>\n      <amexio-button [label]=\"'more info'\"\n                     [type]=\"'white'\"\n                     [size]=\"'small'\"\n                     (onClick)=\"onClickHandle($event)\"\n                     [tooltip]=\"'more info'\">\n      </amexio-button>\n    </amexio-box>\n  </ng-template>\n\n\n</amexio-notification>\n\n\n<!-- OPEN SERVICE REQUEST-->\n\n<amexio-window\n  [(show)]=\"showOpenServiceRequest\"\n  [close-on-escape]=\"true\"\n  [material-design]=\"true\"\n  [width]=\"'70%'\">\n  <amexio-header>\n    <b>{{'Open Service Requests' | uppercase}}</b>\n  </amexio-header>\n  <amexio-body>\n    <ng-container *ngIf=\"customerOrigin.openServiceRequest\">\n      <open-service-request [is-interaction-history]=\"false\" [service-request-object]=\"[customerOrigin.openServiceRequest]\"></open-service-request>\n    </ng-container>\n  </amexio-body>\n</amexio-window>\n\n\n\n<!-- CHART WINDOW-->\n\n<amexio-window\n  [(show)]=\"showWindow\"\n  [close-on-escape]=\"true\"\n  [material-design]=\"true\"\n  [width]=\"'70%'\">\n  <amexio-header>\n    &nbsp;\n  </amexio-header>\n  <amexio-body>\n        <ng-container *ngIf=\"showWindow && serviceMetadataStructure.analytics\">\n          <amexio-d3-chart-multiseries\n            [title]=\"'Last Year Usage VS Projection'\"\n            [data]=\"serviceMetadataStructure.analytics.comparative\"\n            [label]=\"true\"\n            [label-color]=\"'#7B0099'\">\n          </amexio-d3-chart-multiseries>\n        </ng-container>\n\n  </amexio-body>\n</amexio-window>\n\n<!-- WAVERS INFO-->\n\n<amexio-window\n  [(show)]=\"shoWWaverWindow\"\n  [close-on-escape]=\"true\"\n  [material-design]=\"true\"\n  [footer]=\"true\"\n  [width]=\"'30%'\">\n  <amexio-header>\n    Waiver Workflow\n  </amexio-header>\n  <amexio-body>\n    <ng-container *ngIf=\"shoWWaverWindow\">\n\n      <table>\n        <tr>\n          <td><b>Due Amount</b></td>\n          <td>{{customerOrigin.electricity.unbilledAmount}}</td>\n        </tr>\n        <tr>\n          <td><b>Due Date</b></td>\n          <td>{{customerOrigin.electricity.dueDate}}</td>\n        </tr>\n        <tr>\n          <td><b>Amount After Due Date</b></td>\n          <td>{{customerOrigin.electricity.dueAmountAfterDueDate}}</td>\n        </tr>\n      </table><br>\n      <amexio-checkbox  [field-label]=\"'Waiver additional charges'\">\n      </amexio-checkbox>\n\n      <amexio-textarea-input [enable-popover]=\"false\"\n                             [allow-blank]=\"true\"\n                             [icon-feedback]=\"false\"\n                             [rows]=\"'3'\"\n                             [columns]=\"'2'\">\n      </amexio-textarea-input>\n    </ng-container>\n\n  </amexio-body>\n  <amexio-action>\n    <amexio-button [label]=\"'Submit'\"\n                   [type]=\"'theme-color'\"\n                   (onClick)=\"onSubmitHandle($event)\">\n    </amexio-button>\n  </amexio-action>\n</amexio-window>\n\n\n\n\n\n\n\n\n<!--<amexio-window\n  [(show)]=\"showChangeAddressWindow\"\n  [close-on-escape]=\"true\"\n  [material-design]=\"true\"\n  [footer]=\"true\"\n  [width]=\"'60%'\">\n  <amexio-header>\n    Change Address\n  </amexio-header>\n  <amexio-body>\n    <ng-container *ngIf=\"showChangeAddressWindow\">\n\n      <amexio-row>\n        <amexio-column [size]=\"5\">\n          <amexio-text-input field-label=\"Address Line 1\"\n                             [(ngModel)]=\"addressModel.addressLine1\"\n                             place-holder=\"Enter Address Line 1\"\n                             [disabled]=\"true\"\n                             icon-feedback=\"false\">\n          </amexio-text-input>\n        </amexio-column>\n        <amexio-column [size]=\"2\" style=\"text-align: center\">\n          <i class=\"fa fa-refresh fa-3x\" aria-hidden=\"true\"></i>\n        </amexio-column>\n        <amexio-column [size]=\"5\">\n          <amexio-text-input field-label=\"Address Line 1\"\n                             [(ngModel)]=\"addressModel.addressLine1\"\n                             place-holder=\"Enter Address Line 1\"\n                             [disabled]=\"false\"\n                             icon-feedback=\"true\">\n          </amexio-text-input>\n        </amexio-column>\n      </amexio-row>\n\n\n      <amexio-row>\n        <amexio-column [size]=\"5\">\n          <amexio-text-input field-label=\"Address Line 2\"\n                             [(ngModel)]=\"addressModel.addressLine2\"\n                             place-holder=\"Enter Address Line 2\"\n                             [disabled]=\"true\"\n                             icon-feedback=\"false\">\n          </amexio-text-input>\n        </amexio-column>\n        <amexio-column [size]=\"2\" style=\"text-align: center\">\n          <i class=\"fa fa-refresh fa-3x\" aria-hidden=\"true\"></i>\n        </amexio-column>\n        <amexio-column [size]=\"5\">\n          <amexio-text-input field-label=\"Address Line 2\"\n                             [(ngModel)]=\"addressModel.addressLine2\"\n                             place-holder=\"Enter Address Line 2\"\n                             [disabled]=\"false\"\n                             icon-feedback=\"true\">\n          </amexio-text-input>\n        </amexio-column>\n      </amexio-row>\n\n\n      <amexio-row>\n        <amexio-column [size]=\"5\">\n          <amexio-text-input field-label=\"City\"\n                             [(ngModel)]=\"addressModel.city\"\n                             place-holder=\"Enter City\"\n                             [disabled]=\"true\"\n                             icon-feedback=\"false\">\n          </amexio-text-input>\n        </amexio-column>\n        <amexio-column [size]=\"2\" style=\"text-align: center\">\n          <i class=\"fa fa-refresh fa-3x\" aria-hidden=\"true\"></i>\n        </amexio-column>\n        <amexio-column [size]=\"5\">\n          <amexio-text-input field-label=\"City\"\n                             [(ngModel)]=\"addressModel.city\"\n                             place-holder=\"Enter city\"\n                             [disabled]=\"false\"\n                             icon-feedback=\"true\">\n          </amexio-text-input>\n        </amexio-column>\n      </amexio-row>\n\n\n      <amexio-row>\n        <amexio-column [size]=\"5\">\n          <amexio-text-input field-label=\"State\"\n                             [(ngModel)]=\"addressModel.state\"\n                             place-holder=\"Enter State\"\n                             [disabled]=\"true\"\n                             icon-feedback=\"false\">\n          </amexio-text-input>\n        </amexio-column>\n        <amexio-column [size]=\"2\" style=\"text-align: center\">\n          <i class=\"fa fa-refresh fa-3x\" aria-hidden=\"true\"></i>\n        </amexio-column>\n        <amexio-column [size]=\"5\">\n          <amexio-text-input field-label=\"State\"\n                             [(ngModel)]=\"addressModel.state\"\n                             place-holder=\"Enter State\"\n                             [disabled]=\"false\"\n                             icon-feedback=\"true\">\n          </amexio-text-input>\n        </amexio-column>\n      </amexio-row>\n\n\n      <amexio-row>\n        <amexio-column [size]=\"5\">\n          <amexio-text-input field-label=\"Postcode\"\n                             [(ngModel)]=\"addressModel.postCode\"\n                             place-holder=\"Enter Postcode\"\n                             [disabled]=\"true\"\n                             icon-feedback=\"false\">\n          </amexio-text-input>\n        </amexio-column>\n        <amexio-column [size]=\"2\" style=\"text-align: center\">\n          <i class=\"fa fa-refresh fa-3x\" aria-hidden=\"true\"></i>\n        </amexio-column>\n        <amexio-column [size]=\"5\">\n          <amexio-text-input field-label=\"Postcode\"\n                             [(ngModel)]=\"addressModel.postCode\"\n                             place-holder=\"Enter Postcode\"\n                             [disabled]=\"false\"\n                             icon-feedback=\"true\">\n          </amexio-text-input>\n        </amexio-column>\n      </amexio-row>\n\n    </ng-container>\n\n  </amexio-body>\n  <amexio-action>\n    <amexio-button [label]=\"'Cancel'\"\n                   [type]=\"'theme-backgroundcolor'\"\n                   (onClick)=\"onChangeAddressCancelHandle()\">\n    </amexio-button>\n    <amexio-button [label]=\"'Submit'\"\n                   [type]=\"'theme-color'\"\n                   (onClick)=\"onChangeAddressSubmitHandle($event)\">\n    </amexio-button>\n  </amexio-action>\n</amexio-window>-->\n\n\n\n\n\n\n\n\n<amexio-notification\n  [background-color]=\"'orange'\"\n  [foreground-color]=\"'black'\"\n  [data]=\"operationStatusNotification\"\n  [vertical-position]=\"'top'\"\n  [horizontal-position]=\"'center'\"\n  [close-on-escape] =\"true\"\n  [auto-dismiss-msg]=\"false\">\n</amexio-notification>\n\n\n\n\n\n\n\n\n\n<div *ngIf=\"windowEnable\" class=\"alfahim-root-window\">\n  <div> &nbsp; </div>\n  <div class=\"alfahim-root-window-inner\">\n    <div class=\"alfahim-root-window-content\">\n\n      <!-- CHANGE ENERY PLAN-->\n\n        <energy-plan *ngIf=\"showChangeEnergyPlanWindow\"\n                     (onClose)=\"onCancelHandle()\"\n                     (onSelectPlan)=\"getSelectedPlanData($event)\"\n                     [(show)]=\"showChangeEnergyPlanWindow\"\n                     [data]=\"energyPlanData\">\n        </energy-plan>\n\n      <update-information *ngIf=\"showUpdateInformationWindow\"\n                          [data]=\"updateInformation\"\n                          (onCancel)=\"onCancelHandle()\"\n                          (onSubmit)=\"onUpdateInfoSubmitHandle()\">\n      </update-information>\n\n      <change-address *ngIf=\"showChangeAddressWindow\"\n                      [data]=\"addressModel\"\n                      (onCancel)=\"onCancelHandle()\"\n                      (onSubmit)=\"onChangeAddressSubmitHandle()\">\n      </change-address>\n    </div>\n  </div>\n</div>\n\n\n\n<amexio-notification\n  [background-color]=\"'orange'\"\n  [foreground-color]=\"'black'\"\n  [data]=\"selectedPlanNotification\"\n  [vertical-position]=\"'top'\"\n  [horizontal-position]=\"'center'\"\n  [close-on-escape] =\"true\"\n  [auto-dismiss-msg]=\"false\">\n  <ng-template #amexioNotificationTemp let-data=\"data\" >\n    <amexio-label>Electricity Plan changed from ORIGIN SAVER to <b>{{data.name}}</b> (Plan ID: <b>{{data.planId}}</b>)\n    </amexio-label><br/><br/>\n    <amexio-label>Plan start date: {{data.startDate}}</amexio-label><br/><br/>\n    <amexio-label>Plan start date: {{data.endDate}}</amexio-label><br/>\n\n  </ng-template>\n</amexio-notification>\n"

/***/ }),

/***/ "./src/app/rina-home/rina-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/rina-home/rina-home.component.ts ***!
  \**************************************************/
/*! exports provided: RinaHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RinaHomeComponent", function() { return RinaHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "../../node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/customer.profile.model */ "./src/app/models/customer.profile.model.ts");
/* harmony import */ var _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../rina-lib/src/lib/model/shared/propertygrid.model */ "../rina-lib/src/lib/model/shared/propertygrid.model.ts");
/* harmony import */ var _constants_tab_map_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/tab-map.constant */ "./src/app/constants/tab-map.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_service_url_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/service.url.constant */ "./src/app/constants/service.url.constant.ts");
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
 * Created by dattaram on 14/1/19.
 */







var BADGE = {
    '1': 'GOLD',
    '2': 'PLATINUM',
    '3': 'SILVER'
};
var RinaHomeComponent = /** @class */ (function () {
    function RinaHomeComponent(_httpClient, _gridlayoutService) {
        this._httpClient = _httpClient;
        this._gridlayoutService = _gridlayoutService;
        this.windowEnable = false;
        this.serviceList = [];
        this.warningdialogue = false;
        this.warningMsg = '';
        this.showLoader = false;
        this.gaugeChartData = [];
        this.notificationData = [];
        this.showWindow = false;
        this.userDefineColors = [];
        this.badge = '';
        this.shoWWaverWindow = false;
        this.showChangeAddressWindow = false;
        this.operationStatusNotification = [];
        this.showChangeEnergyPlanWindow = false;
        this.selectedPlanNotification = [];
        /* update information */
        this.showUpdateInformationWindow = false;
        this.hasNgas = true;
        this.setDefaultInfo();
        this.customerOrigin = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_2__["CustomerProfileOrigin"]();
        this.updateInformation = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_2__["UpdateInformation"]('', '', '');
        this.addressModel = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_2__["AddressModel"]();
        this.serviceMetadataStructure = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_2__["ServiceMetadataStructure"]();
        this.gaugeChartData = [
            ['Label', 'Value'],
            ['CSAT', 80],
            ['AHT-SLA', 68]
        ];
        this.createLayouts();
        this._gridlayoutService.createLayout(this.rinaHomeDesktopLayout);
    }
    RinaHomeComponent.prototype.setDefaultInfo = function () {
        this.infoMsg = " From 1 October 2018 Origin's card payment fee structure changed. A separate card payment fee now applies for each card type, with fees limited to the amount it costs Origin to accept payments made using each card. If you pay by debit card, payments may incur a fee of 0.26%\n    for Visa or 0.32% for Mastercard. If you pay by credit card, payments may incur a fee of 0.60% for Visa or 0.72% for Mastercard. If you pay at an Australia Post outlet, a card payment fee of 0.49% (incl GST) may apply.";
    };
    RinaHomeComponent.prototype.ngOnInit = function () {
        this.createRadioData();
        this.getServiceList();
        this.createPropertyStructure();
    };
    RinaHomeComponent.prototype.createRadioData = function () {
        var _this = this;
        this._httpClient.get('assets/tabdata.json').subscribe(function (res) {
            _this.electricityTitleData = res[0];
            _this.selectedRadioGroup = _this.electricityTitleData;
            _this.gasTitleData = res[1];
        });
    };
    RinaHomeComponent.prototype.getServiceList = function () {
        var _this = this;
        this._httpClient.get('assets/serviceList.json').subscribe(function (res) {
            _this.serviceList = res.data;
        });
    };
    RinaHomeComponent.prototype.createLayouts = function () {
        this.rinaHomeDesktopLayout = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConfig"]('rinahomepage', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConstants"].Desktop)
            .addlayout(['logoposition', 'topslot2', 'topslot3', 'topslot4', 'guages'])
            .addlayout(['rinasidemenu', 'rinasidecenter', 'rinasidecenter', 'rinasidecenter', 'rinasidesearch']);
    };
    RinaHomeComponent.prototype.createPropertyStructure = function () {
        this.createCustomerDetailsPropertyStructure();
        this.createElectricityPropertyStructure();
        if (this.customerOrigin.naturalGas !== null) {
            this.hasNgas = true;
            this.createNaturalGasPropertyStructure();
        }
        else {
            this.ngasSummaryKeyValueData = [];
            this.hasNgas = false;
        }
    };
    RinaHomeComponent.prototype.getSearchObject = function (searchObject) {
        var _this = this;
        var response;
        this.showLoader = true;
        this._httpClient.get(_constants_service_url_constant__WEBPACK_IMPORTED_MODULE_6__["SERVICE_URL"].CUSTOMER_SEARCH + searchObject.searchId + '/' + searchObject.searchType).subscribe(function (res) {
            response = res;
        }, function (error) {
            _this.showLoader = false;
            _this.warningMsg = 'unable to retrieve data please try after sometime.';
            _this.warningdialogue = true;
        }, function () {
            if (response.success) {
                _this.showLoader = false;
                _this.customerOrigin = response.response;
                _this.setOpenServiceWindowObject();
                _this.resetRadioData();
                _this.createPropertyStructure();
                _this.setWaverInfo(_this.selectedRadioGroup);
                _this.onPropertySelectHandle(_this.selectedRadioGroup);
                _this.enableServiceList();
            }
            else {
                _this.showLoader = false;
                _this.warningMsg = response.errorMessage;
                _this.warningdialogue = true;
            }
        });
    };
    RinaHomeComponent.prototype.enableServiceList = function () {
        this.serviceList[0].disabled = false;
        this.serviceList[1].disabled = false;
        this.serviceList[2].disabled = false;
    };
    RinaHomeComponent.prototype.setOpenServiceWindowObject = function () {
        var _this = this;
        if (this.customerOrigin.openServiceRequest) {
            setTimeout(function () {
                _this.showOpenServiceRequest = true;
            }, 2000);
        }
        this.badge = BADGE[this.customerOrigin.customerProfile.type];
    };
    RinaHomeComponent.prototype.resetRadioData = function () {
        this.electricityTitleData.disabled = false;
        this.gasTitleData.disabled = false;
        this.electricityTitleData.selected = true;
    };
    RinaHomeComponent.prototype.getTabComponentList = function (tabData) {
        this.tabRef.closeAll();
        // create 1 tab
        var currentPlane = this.tabRef.addDynamicTab(tabData.data[0].title, '', false, _constants_tab_map_constant__WEBPACK_IMPORTED_MODULE_4__["tab_map"].TAB_KEY_VALUE_PAIR[tabData.data[0].key]);
        currentPlane.currentPlan = this.serviceMetadataStructure.currentPlan;
        // create 2 tab
        var elecBill = this.tabRef.addDynamicTab(tabData.data[1].title, '', false, _constants_tab_map_constant__WEBPACK_IMPORTED_MODULE_4__["tab_map"].TAB_KEY_VALUE_PAIR[tabData.data[1].key]);
        elecBill.billSummary = this.serviceMetadataStructure.billSummary;
        // create 4 tab
        var usageReport = this.tabRef.addDynamicTab(tabData.data[3].title, '', false, _constants_tab_map_constant__WEBPACK_IMPORTED_MODULE_4__["tab_map"].TAB_KEY_VALUE_PAIR[tabData.data[3].key]);
        usageReport.usageReports = this.serviceMetadataStructure.usageReports;
        usageReport.tabData = tabData;
        // create 3 tab
        var interaction = this.tabRef.addDynamicTab(tabData.data[2].title, '', false, _constants_tab_map_constant__WEBPACK_IMPORTED_MODULE_4__["tab_map"].TAB_KEY_VALUE_PAIR[tabData.data[2].key]);
        interaction.interactionHistory = this.customerOrigin.interactionHistory;
        this.tabRef.setActiveTab(3);
    };
    RinaHomeComponent.prototype.createCustomerDetailsPropertyStructure = function () {
        this.customerKeyValuedata = [];
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Account Number', this.customerOrigin.customerProfile.uniqueNo));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Mobile #', this.customerOrigin.customerProfile.mobile));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Name', this.customerOrigin.customerProfile.name));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Company Name', this.customerOrigin.customerProfile.companyName));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Operating Status', this.customerOrigin.customerProfile.uaeId));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Email', this.customerOrigin.customerProfile.email));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Address', this.customerOrigin.customerProfile.addressLabel));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Birthday', this.customerOrigin.customerProfile.birthday));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Anniversary', this.customerOrigin.customerProfile.anniversary));
    };
    RinaHomeComponent.prototype.createElectricityPropertyStructure = function () {
        this.eleSummaryKeyValueData = [];
        this.eleSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Current Plan', this.customerOrigin.electricity.currentPlan));
        this.eleSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Plan Validity', this.customerOrigin.electricity.planValidity));
        this.eleSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('NMI', this.customerOrigin.electricity.nmi));
        this.eleSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Last meter read date', this.customerOrigin.electricity.lastMeterReadDate));
        this.eleSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Next Scheduled Read Date', this.customerOrigin.electricity.nextScheduledReadDate));
        this.eleSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Due Amount', this.customerOrigin.electricity.unbilledAmount));
        if (this.customerOrigin.electricity.dueAmountAfterDueDate) {
            this.eleSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Due Amount After Due Date', this.customerOrigin.electricity.dueAmountAfterDueDate));
        }
        this.eleSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Due Date', this.customerOrigin.electricity.dueDate));
        this.eleSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Last Payment Amount', this.customerOrigin.electricity.lastpaymentAmount));
        this.eleSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Last Payment Date', this.customerOrigin.electricity.lastPaymentDate));
    };
    RinaHomeComponent.prototype.createNaturalGasPropertyStructure = function () {
        this.ngasSummaryKeyValueData = [];
        this.ngasSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Current Plan', this.customerOrigin.naturalGas.currentPlan));
        this.ngasSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Plan Validity', this.customerOrigin.naturalGas.planValidity));
        this.ngasSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('MIRN', this.customerOrigin.naturalGas.mirn));
        this.ngasSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Last meter read date', this.customerOrigin.naturalGas.lastMeterReadDate));
        this.ngasSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Next Scheduled Read Date', this.customerOrigin.naturalGas.nextScheduledReadDate));
        this.ngasSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Due Amount', this.customerOrigin.naturalGas.unbilledAmount));
        this.ngasSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Due Date', this.customerOrigin.naturalGas.dueDate));
        this.ngasSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Last Payment Amount', this.customerOrigin.naturalGas.lastpaymentAmount));
        this.ngasSummaryKeyValueData.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModel"]('Last Payment Date', this.customerOrigin.naturalGas.lastPaymentDate));
    };
    // ON PROPERTY SELECTION
    RinaHomeComponent.prototype.onPropertySelectHandle = function (proObject) {
        var _this = this;
        this.selectedRadioGroup = proObject;
        var resP;
        this.showLoader = true;
        this._httpClient.get(_constants_service_url_constant__WEBPACK_IMPORTED_MODULE_6__["SERVICE_URL"].CUSTOMER_SEARCH + this.customerOrigin.customerProfile.customerId + '/' + proObject.value).subscribe(function (res) {
            resP = res;
        }, function (error) {
            _this.showLoader = false;
            _this.warningMsg = 'unable to retrieve data please try after sometime.';
            _this.warningdialogue = true;
        }, function () {
            if (resP.success && resP.response) {
                _this.showLoader = false;
                if (proObject.value === 'electricity') {
                    _this.setWaverInfo(proObject);
                    _this.assignObject(resP.response.electricity);
                }
                else {
                    _this.setWaverInfo(proObject);
                    _this.assignObject(resP.response.naturalGas);
                }
                _this.getRightSellData(proObject);
            }
            else {
                _this.showLoader = false;
                _this.warningMsg = resP.errorMessage;
                _this.warningdialogue = true;
            }
        });
    };
    RinaHomeComponent.prototype.assignObject = function (obj) {
        if (obj.addOnInfo) {
            this.infoMsg = obj.addOnInfo;
            if (!this.customerOrigin.electricity.dueAmountAfterDueDate) {
                this.notificationData.push(obj.addOnInfo);
            }
        }
        else {
            this.setDefaultInfo();
            this.notificationData = [];
        }
        this.serviceMetadataStructure = obj;
    };
    RinaHomeComponent.prototype.onClickHandle = function (event) {
        this.notificationData = [];
        this.showWindow = !this.showWindow;
    };
    RinaHomeComponent.prototype.setWaverInfo = function (proObject) {
        if (proObject.value === 'electricity' && this.customerOrigin.electricity.dueAmountAfterDueDate) {
            this.serviceList[3].disabled = false;
        }
        else {
            this.serviceList[3].disabled = true;
        }
    };
    RinaHomeComponent.prototype.serviceTypeClickHandle = function (event) {
        switch (event.type) {
            case 'WI':
                this.resetAllWindow();
                this.shoWWaverWindow = true;
                break;
            case 'CEP':
                this.showLoader = true;
                this.resetAllWindow();
                this.getEnergyPlaneData();
                break;
            case 'UI':
                this.showLoader = true;
                this.resetAllWindow();
                this.getCustomerProfileForUpdate();
                break;
            case 'CA':
                this.showLoader = true;
                this.resetAllWindow();
                this.getCustomerProfileForAddress();
                break;
            default:
                break;
        }
    };
    RinaHomeComponent.prototype.getEnergyPlaneData = function () {
        var _this = this;
        var planResponse;
        this._httpClient.get(_constants_service_url_constant__WEBPACK_IMPORTED_MODULE_6__["SERVICE_URL"].CHANGE_ENERGY_PLAN + this.customerOrigin.customerProfile.customerId).subscribe(function (res) {
            planResponse = res;
        }, function (error) {
            console.log(error);
        }, function () {
            if (planResponse.success) {
                _this.energyPlanData = planResponse.response;
                _this.showLoader = false;
                _this.windowEnable = true;
                _this.showChangeEnergyPlanWindow = true;
            }
        });
    };
    RinaHomeComponent.prototype.getRightSellData = function (tabData) {
        var _this = this;
        var sellResponse;
        var searchType;
        if (this.customerOrigin.electricity !== null && this.customerOrigin.naturalGas == null) {
            searchType = '1';
        }
        else if (this.customerOrigin.electricity !== null && this.customerOrigin.naturalGas !== null) {
            searchType = '2';
        }
        this._httpClient.get(_constants_service_url_constant__WEBPACK_IMPORTED_MODULE_6__["SERVICE_URL"].RIGHT_SELL + searchType).subscribe(function (res) {
            sellResponse = res;
        }, function (error) {
            console.log(error);
            _this.getTabComponentList(tabData);
        }, function () {
            if (sellResponse.success) {
                _this.customerOrigin.rightSellData = sellResponse.response;
                _this.getTabComponentList(tabData);
                _this.addRightSellTab(tabData);
            }
            else {
                _this.warningMsg = sellResponse.errorMessage;
                _this.warningdialogue = true;
            }
        });
    };
    RinaHomeComponent.prototype.addRightSellTab = function (tabData) {
        var rightSell = this.tabRef.addDynamicTab(tabData.data[4].title, '', false, _constants_tab_map_constant__WEBPACK_IMPORTED_MODULE_4__["tab_map"].TAB_KEY_VALUE_PAIR[tabData.data[4].key]);
        rightSell.getRightSell(this.customerOrigin.rightSellData);
    };
    RinaHomeComponent.prototype.onSubmitHandle = function (event) {
        this.shoWWaverWindow = false;
        this.notificationData.push(this.serviceMetadataStructure.addOnInfo);
    };
    RinaHomeComponent.prototype.onChangeAddressSubmitHandle = function () {
        this.operationStatusNotification.push('Address Changed Successfully!');
        this.resetAllWindow();
    };
    RinaHomeComponent.prototype.getCustomerProfileForUpdate = function () {
        var _this = this;
        var custResponse;
        this._httpClient.get(_constants_service_url_constant__WEBPACK_IMPORTED_MODULE_6__["SERVICE_URL"].CUSTOMER_DETAILS + this.customerOrigin.customerProfile.customerId).subscribe(function (res) {
            custResponse = res;
        }, function (error) {
            console.log(error);
        }, function () {
            if (custResponse.success) {
                var custProfile = custResponse.response;
                _this.updateInformation = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_2__["UpdateInformation"](custProfile.mobile, custProfile.email, custProfile.addressLabel);
                _this.showLoader = false;
                _this.windowEnable = true;
                _this.showUpdateInformationWindow = true;
            }
        });
    };
    RinaHomeComponent.prototype.getCustomerProfileForAddress = function () {
        var _this = this;
        var custResponse;
        this._httpClient.get(_constants_service_url_constant__WEBPACK_IMPORTED_MODULE_6__["SERVICE_URL"].CUSTOMER_DETAILS + this.customerOrigin.customerProfile.customerId).subscribe(function (res) {
            custResponse = res;
        }, function (error) {
            console.log(error);
        }, function () {
            if (custResponse.success) {
                _this.addressModel = custResponse.response.address;
                _this.showLoader = false;
                _this.windowEnable = true;
                _this.showChangeAddressWindow = true;
            }
        });
    };
    RinaHomeComponent.prototype.onUpdateInfoSubmitHandle = function () {
        this.operationStatusNotification.push('Information Updated Successfully!');
        this.resetAllWindow();
    };
    RinaHomeComponent.prototype.resetAllWindow = function () {
        this.windowEnable = false;
        this.shoWWaverWindow = false;
        this.showChangeAddressWindow = false;
        this.showChangeEnergyPlanWindow = false;
        this.showUpdateInformationWindow = false;
    };
    RinaHomeComponent.prototype.onCancelHandle = function () {
        this.resetAllWindow();
    };
    RinaHomeComponent.prototype.getSelectedPlanData = function (selectedPlanData) {
        this.selectedPlanNotification.push(selectedPlanData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tab'),
        __metadata("design:type", Object)
    ], RinaHomeComponent.prototype, "tabRef", void 0);
    RinaHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rina-home',
            template: __webpack_require__(/*! ./rina-home.component.html */ "./src/app/rina-home/rina-home.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioGridLayoutService"]])
    ], RinaHomeComponent);
    return RinaHomeComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dattaram/metamagic/POC/gic-rina-v2.0/gic-rina/projects/rinaorigin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map