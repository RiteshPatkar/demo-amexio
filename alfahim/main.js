(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.html":
/*!***************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card [body-height]=\"75\" [show]=\"true\" [header]=\"false\" [footer]=\"true\">\n    <amexio-body>\n        <amexio-row>\n            <amexio-column size=\"3\"></amexio-column>\n            <amexio-column size=\"6\">\n                <amexio-label size=\"medium-bold\">Thank You</amexio-label> <br /><br />\n                <amexio-label>Your service has been booked on {{serviceAvailibilityModel.appointmentDate | date:'MMM dd, yyyy'}} at {{serviceAvailibilityModel.selectedSlot}}</amexio-label><br /><br />\n                <amexio-label>Service Location:</amexio-label><br />\n                <amexio-label>Emirates Motor Company</amexio-label><br />\n                <amexio-label>M5, intersection, 17th Street</amexio-label><br />\n                <amexio-label>Phone: +91.0987654321</amexio-label><br /><br />\n            </amexio-column>\n            <amexio-column size=\"3\"></amexio-column>\n        </amexio-row>\n    </amexio-body>\n    <amexio-action>\n        <amexio-button [label]=\"'Close'\" [type]=\"'theme-color'\" [tooltip]=\"'Close'\" [size]=\"'large'\" (onClick)=\"close($event)\">\n        </amexio-button>\n    </amexio-action>\n</amexio-card>\n"

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

/***/ "../rina-lib/src/lib/components/confirmation/service.confirmation.html":
/*!*****************************************************************************!*\
  !*** ../rina-lib/src/lib/components/confirmation/service.confirmation.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card class=\"serviceconfirmation\" [body-height]=\"75\" [show]=\"true\" [header]=\"false\" [footer]=\"true\">\n    <amexio-body>\n      <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'end'\">\n        <amexio-layout-item style=\"width: 40%\">\n          <amexio-row>\n            <amexio-column size=\"12\" >\n              <amexio-row>\n                <amexio-column size=\"4\">\n                  <amexio-label size=\"medium-bold\">Name</amexio-label>\n                </amexio-column>\n                <amexio-column size=\"8\">\n                  <amexio-label size=\"medium\">{{personalDetails.firstName}} {{personalDetails.surname}}</amexio-label>\n                </amexio-column>\n\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"4\">\n                  <amexio-label size=\"medium-bold\">Booking Date</amexio-label>\n                </amexio-column>\n                <amexio-column size=\"8\">\n                  <amexio-label size=\"medium\">{{serviceModel.appointmentDate | date:'MMM dd, yyyy'}} </amexio-label>\n                </amexio-column>\n\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"4\">\n                  <amexio-label size=\"medium-bold\">Booking Time</amexio-label>\n                </amexio-column>\n                <amexio-column size=\"8\">\n                  <amexio-label size=\"medium\">{{serviceModel.selectedSlot }}</amexio-label>\n                </amexio-column>\n\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"4\">\n                  <amexio-label size=\"medium-bold\">Assitant Name</amexio-label>\n                </amexio-column>\n                <amexio-column size=\"8\">\n                  <amexio-label size=\"medium\">{{serviceModel.assitantPersonName}}</amexio-label>\n                </amexio-column>\n\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"4\">\n                  <amexio-label size=\"medium-bold\">Phone no</amexio-label>\n                </amexio-column>\n                <amexio-column size=\"8\">\n                  <amexio-label size=\"medium\">{{personalDetails.phone}}</amexio-label>\n                </amexio-column>\n\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"4\">\n                  <amexio-label size=\"medium-bold\">Email Id</amexio-label>\n                </amexio-column>\n                <amexio-column size=\"8\">\n                  <amexio-label size=\"medium\">{{personalDetails.email}}</amexio-label>\n                </amexio-column>\n\n              </amexio-row>\n            </amexio-column>\n          </amexio-row>\n        </amexio-layout-item>\n        <amexio-layout-item [fit]=\"true\" >\n          <amexio-google-map [initial-zoom-level]=\"8\"\n                             [initial-lat]=\"25.270889\" [initial-lng]=\"55.872501\"\n                             [height]=\"'100%'\" [data]=\"serviceStations\"\n                             [google-map-key]=\"'AIzaSyDKSPX97z-ndeh_Mgq3xkaML2Kp9AwHA9s'\">\n          </amexio-google-map>\n        </amexio-layout-item>\n      </amexio-layout-columns>\n\n\n    </amexio-body>\n    <amexio-action>\n        <amexio-button [label]=\"'Back'\" (onClick)=\"onBackClick()\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\">\n        </amexio-button>\n        <amexio-button [label]=\"'Confirm'\" [type]=\"'theme-color'\" [tooltip]=\"'Confirm'\" [size]=\"'large'\" (onClick)=\"confirmAppointment($event)\">\n        </amexio-button>\n    </amexio-action>\n</amexio-card>\n"

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
    function ServiceConfirmationComponent(personalDetailsService) {
        this.personalDetailsService = personalDetailsService;
        this.serviceLocations = [];
        this.timeSlots = [];
        this.assitantPerson = [];
        this.orderConfirm = true;
        this.serviceStations = [];
        this.onPrevious = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.personalDetails = new _model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_4__["PersonalDetails"]();
        if (this.personalDetailsService.getPersonalDetails()) {
            this.personalDetails = this.personalDetailsService.getPersonalDetails();
        }
    }
    ServiceConfirmationComponent.prototype.ngOnInit = function () {
        if (this.serviceModel) {
            this.loadData();
        }
        this.serviceStations = [];
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["GoogleMapOverlays"](Number(this.serviceModel.locationModel.latitude), Number(this.serviceModel.locationModel.longitude), this.serviceModel.locationName + ', UAE', true, 'https://testapi.amexio.org/api/v5.5/assets/images/googlemap/mercgooglemarker.png', { country: 'United Arab Emirates', capital: 'Abu Dhabi' }));
    };
    ServiceConfirmationComponent.prototype.confirmAppointment = function (personalDetails) {
        this.onConfirm.emit(personalDetails);
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
    ServiceConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'service-confirmation',
            template: __webpack_require__(/*! ./service.confirmation.html */ "../rina-lib/src/lib/components/confirmation/service.confirmation.html")
        }),
        __metadata("design:paramtypes", [projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__["PersonalDetailsService"]])
    ], ServiceConfirmationComponent);
    return ServiceConfirmationComponent;
}());



/***/ }),

/***/ "../rina-lib/src/lib/components/preferred-location/preferred-location.component.html":
/*!*******************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/preferred-location/preferred-location.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card class=\"preferredlocation\" [body-height]=\"75\" [show]=\"true\" [header]=\"false\" [footer]=\"true\">\n    <amexio-body>\n\n        <amexio-label size=\"medium-bold\">PREFERRED LOCATION AND TIME</amexio-label>\n        <div class=\"adjustbody\">\n            <service-availiblity-lib #formgroup [service-model]=\"serviceModel\" [start-time]=\"10\" [end-time]=\"15\"></service-availiblity-lib>\n        </div>\n\n    </amexio-body>\n    <amexio-action>\n        <amexio-toolbar>\n            <amexio-toolbar-item position-right>\n                <div class=\"amexio-checkbox-style\">\n                    <amexio-checkbox [field-label]=\"'Notify SA'\" [(ngModel)]=\"serviceModel.isNotifySA\">\n                    </amexio-checkbox>\n                </div>\n\n            </amexio-toolbar-item>\n            <amexio-toolbar-item position-right>\n                <amexio-button [label]=\"secondaryButton\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Proceed to personal profile'\" [size]=\"'large'\" (onClick)=\"backClick($event)\">\n                </amexio-button>\n            </amexio-toolbar-item>\n            <amexio-toolbar-item position-right>\n                <amexio-button [label]=\"'Schedule'\" [disabled]=\"!this.serviceModel.isValidate()\" [type]=\"'theme-color'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"scheduleAppointment()\">\n                </amexio-button>\n            </amexio-toolbar-item>\n        </amexio-toolbar>\n    </amexio-action>\n</amexio-card>"

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
        this.serviceModel = new _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"]();
    }
    PreferredLocationComponent.prototype.ngOnInit = function () { };
    PreferredLocationComponent.prototype.scheduleAppointment = function () {
        this.onNext.emit(this.serviceModel);
    };
    PreferredLocationComponent.prototype.backClick = function (event) {
        this.onPrevious.emit(event);
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

/***/ "../rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.html":
/*!*********************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'space-between'\">\n    <amexio-layout-item>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-dropdown [(ngModel)]=\"serviceModel.location\" [place-holder]=\"'Select Location'\" name=\"location\" [field-label]=\"'Select Location'\" [data]=\"serviceLocations\" [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\" (onSingleSelect)=\"onLocationClick($event)\">\n                </amexio-dropdown>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=9>\n                <amexio-date-time-picker [field-label]=\"'Select Date'\" [min-date]=\"minDate\" [time-picker]=\"false\" [date-picker]=\"true\" name=\"appointmentDate\" [min-date]=\"todayDate\" [(ngModel)]=\"serviceModel.appointmentDate\">\n                </amexio-date-time-picker>\n            </amexio-column>\n            <amexio-column [size]=3>\n                <amexio-dropdown [(ngModel)]=\"serviceModel.appointmentTime\" (onSingleSelect)=\"setTime($event)\" [place-holder]=\"'Select Time'\" name=\"appointmentTime\" [field-label]=\"'Select time'\" [data]=\"timeSlots\" [display-field]=\"'time'\" [value-field]=\"'timeId'\">\n                </amexio-dropdown>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-dropdown [(ngModel)]=\"serviceModel.assitantPersonId\" [place-holder]=\"'Select SA'\" name=\"assitantPerson\" [field-label]=\"'Service Assistant (SA)'\" [data]=\"assitantPerson\" [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\" (onSingleSelect)=\"onAssitantClick($event)\">\n                </amexio-dropdown>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-button [label]=\"'CHECK SA AVAILIBLITY'\" [type]=\"'theme-color'\" [tooltip]=\"'CHECK SA AVAILIBLITY'\" (onClick)=\"checkAvailiblity()\"></amexio-button>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-ee-appointment [height]=\"'200px'\" [date]=\"serviceModel.appointmentDate\" [start-time]=\"serviceModel.appointmentTime\" [end-time]=\"endTime\" [available-slots]=\"availableslots\" (onSingleSelect)=\"onSlotSelection($event)\"></amexio-ee-appointment>\n            </amexio-column>\n        </amexio-row>\n\n    </amexio-layout-item>\n    <amexio-layout-item [fit]=\"true\">\n        <amexio-google-map [initial-zoom-level]=\"8\" [initial-lat]=\"25.270889\" [initial-lng]=\"55.872501\" [height]=\"'100%'\" [data]=\"serviceStations\" (onMarkerClick)=\"onMarkerClick($event)\" [google-map-key]=\"'AIzaSyDKSPX97z-ndeh_Mgq3xkaML2Kp9AwHA9s'\">\n        </amexio-google-map>\n    </amexio-layout-item>\n</amexio-layout-columns>"

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
    function ServiceAvailiblityComponent(sbService, commonService, bookingAvailableService) {
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
        this.bookingAvailableService.getAllAvailabelSlots(this.dateRangeModel).subscribe(function (resp) {
            response = resp;
        }, function (error) {
        }, function () {
            if (response) {
                _this.availableslots = [];
                response.forEach(function (element) {
                    _this.availableslots.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AvailableSlotsModel"](new Date(element.datetime), element.data));
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
        this.sbService.fetchSABasedOnLocation(id).subscribe(function (resp) {
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
        if (serviceStation.primaryKey) {
            this.serviceModel.location = serviceStation.primaryKey;
            this.serviceModel.locationName = serviceStation.primaryDisplay;
            if (serviceStation) {
                this.serviceModel.locationModel.latitude = serviceStation.latitude;
                this.serviceModel.locationModel.longitude = serviceStation.longitude;
            }
            this.initSA(this.serviceModel.location);
        }
    };
    ServiceAvailiblityComponent.prototype.onLocationClick = function (data) {
        this.initSA(data.primaryKey);
        this.serviceModel.locationName = data.primaryDisplay;
        this.serviceModel.locationModel.latitude = data.latitude;
        this.serviceModel.locationModel.longitude = data.longitude;
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
        __metadata("design:paramtypes", [_services_servicebooking_service_booking_service__WEBPACK_IMPORTED_MODULE_3__["ServiceBookingService"], _services_shared_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _services_bookingavailable_service_booking_service__WEBPACK_IMPORTED_MODULE_0__["BookingAvailableService"]])
    ], ServiceAvailiblityComponent);
    return ServiceAvailiblityComponent;
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




var RINA_COMPONENTS = [
    _components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_0__["ServiceAvailiblityComponent"],
    _components_preferred_location_preferred_location_component__WEBPACK_IMPORTED_MODULE_1__["PreferredLocationComponent"],
    _components_confirmation_service_confirmation__WEBPACK_IMPORTED_MODULE_2__["ServiceConfirmationComponent"],
    _components_appointmentdetails_appointment_confirmation__WEBPACK_IMPORTED_MODULE_3__["AppoinmentConfirmationComponent"]
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
                _services_shared_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
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
        /* this.personalDetails = new PersonalDetails();
         this.serviceAvailibilityModel = new ServiceAvailibilityModel();*/
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
    };
    PersonalDetailsService.prototype.setPeferredLocation = function (serviceAvailibilityModel) {
        this.serviceAvailibilityModel = serviceAvailibilityModel;
    };
    PersonalDetailsService.prototype.getPeferredLocation = function () {
        return this.serviceAvailibilityModel;
    };
    PersonalDetailsService.prototype.setPersonalDetailsForCcm = function (personalDetails) {
        //this.convertIntoPersonalModel(personalDetails);
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
        this.widdownMap.set(1, 1);
        this.widdownMap.set(2, 2);
        this.widdownMap.set(3, 3);
        this.widdownMap.set(4, 4);
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
/* harmony import */ var _service_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service.constant */ "../rina-lib/src/lib/services/service.constant.ts");
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
        return this.http.post(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'assistant/available', 'post', dateRangeModel);
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
/* harmony import */ var _service_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service.constant */ "../rina-lib/src/lib/services/service.constant.ts");
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
        return this.http.fetch(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'map/', 'get');
    };
    ServiceBookingService.prototype.fetchSABasedOnLocation = function (locationId) {
        return this.http.fetch(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'map/' + locationId, 'get');
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
            return this.http.post(serviceUrl, { headers: headers });
        }
        else if (methodType === 'get') {
            return this.http.get(serviceUrl, { headers: headers });
        }
    };
    HttpService.prototype.post = function (serviceUrl, methodType, requestJson) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json;charset=UTF-8');
        if (methodType === 'post') {
            return this.http.post(serviceUrl, requestJson, { headers: headers });
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

/***/ "../rina-lib/src/public_api.ts":
/*!*************************************!*\
  !*** ../rina-lib/src/public_api.ts ***!
  \*************************************/
/*! exports provided: RinaLibModule, ServiceAvailibilityModel, CustomerModel, ServiceAvailiblityComponent, PreferredLocationComponent, ServiceConfirmationComponent, AppoinmentConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/rina-lib.module */ "../rina-lib/src/lib/rina-lib.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RinaLibModule", function() { return _lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_0__["RinaLibModule"]; });

/* harmony import */ var _lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/model/service.availiblity.model */ "../rina-lib/src/lib/model/service.availiblity.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailibilityModel", function() { return _lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"]; });

/* harmony import */ var _rinaccm_src_app_models_customer_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rinaccm/src/app/models/customer.details.model */ "../rinaccm/src/app/models/customer.details.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return _rinaccm_src_app_models_customer_details_model__WEBPACK_IMPORTED_MODULE_2__["CustomerModel"]; });

/* harmony import */ var _lib_components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components/service-booking/service.availiblity-lib.component */ "../rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailiblityComponent", function() { return _lib_components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_3__["ServiceAvailiblityComponent"]; });

/* harmony import */ var _lib_components_preferred_location_preferred_location_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/components/preferred-location/preferred.location.component */ "../rina-lib/src/lib/components/preferred-location/preferred.location.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreferredLocationComponent", function() { return _lib_components_preferred_location_preferred_location_component__WEBPACK_IMPORTED_MODULE_4__["PreferredLocationComponent"]; });

/* harmony import */ var _lib_components_confirmation_service_confirmation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/components/confirmation/service.confirmation */ "../rina-lib/src/lib/components/confirmation/service.confirmation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceConfirmationComponent", function() { return _lib_components_confirmation_service_confirmation__WEBPACK_IMPORTED_MODULE_5__["ServiceConfirmationComponent"]; });

/* harmony import */ var _lib_components_appointmentdetails_appointment_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/components/appointmentdetails/appointment.confirmation */ "../rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppoinmentConfirmationComponent", function() { return _lib_components_appointmentdetails_appointment_confirmation__WEBPACK_IMPORTED_MODULE_6__["AppoinmentConfirmationComponent"]; });

/*
 * Public API Surface of rina-lib
 */



/* EXPORTED COMPONENT */






/***/ }),

/***/ "../rinaccm/src/app/models/customer.details.model.ts":
/*!***********************************************************!*\
  !*** ../rinaccm/src/app/models/customer.details.model.ts ***!
  \***********************************************************/
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-floating-button [vertical-position]=\"'bottom'\" [size]=\"'large'\" [horizontal-position]=\"'right'\" (onClick)=\"onClick()\" [label]=\"'Book Service'\" [type]=\"'yellow'\" [icon]=\"'fa fa-car fa-2x'\" [type]=\"'theme-color'\">\n</amexio-floating-button>\n\n<amexio-window class=\"serviceconfirmation\" [top]=\"'10px'\" [(show)]=\"windowEnable\" type=\"window\" [header]=\"false\" [footer]=\"false\" [closable]=\"false\">\n    <amexio-body>\n        <br>\n        <amexio-row>\n            <amexio-column size=\"1\"></amexio-column>\n            <amexio-column size=\"10\">\n                <amexio-steps [icon]=\"true\">\n                    <amexio-step-block [label]=\"'User'\" [active]=\"(currentstep === 1)\" [icon]=\"'fa fa-user fa-2x'\">\n                    </amexio-step-block>\n                    <amexio-step-block [label]=\"'Location'\" [active]=\"(currentstep === 2)\" [icon]=\"'fa fa-map-marker fa-2x'\">\n                    </amexio-step-block>\n                    <amexio-step-block [label]=\"'Confirm'\" [active]=\"(currentstep === 3)\" [icon]=\"'fa fa-check-circle fa-2x'\">\n                    </amexio-step-block>\n                    <amexio-step-block [label]=\"'Info'\" [active]=\"(currentstep === 4)\" [icon]=\"'fa fa-info fa-2x'\">\n                    </amexio-step-block>\n                </amexio-steps>\n            </amexio-column>\n            <amexio-column size=\"1\"></amexio-column>\n        </amexio-row>\n        <personal-details *ngIf=\"(currentstep === 1)\" [person-detail]=\"personalDetails\" (onNext)=\"proceedToPreferredLocation($event)\" (onClose)=\"onCloseClick($event)\"></personal-details>\n\n\n        <preferred-location *ngIf=\"(currentstep === 2)\" [service-model]=\"serviceModel\" (onNext)=\"scheduleAppointment($event)\" (onPrevious)=\"onPrevious($event)\"></preferred-location>\n        <service-confirmation *ngIf=\"(currentstep === 3)\" [service-model]=\"serviceModel\" (onPrevious)=\"onServiceConfirmPrevious($event)\" (onConfirm)=\"onAppointmentConfirm($event)\">\n        </service-confirmation>\n        <appointment-confirmation *ngIf=\"(currentstep === 4)\" (onConfirm)=\"onCloseClick($event)\"></appointment-confirmation>\n    </amexio-body>\n</amexio-window>\n\n\n\n\n\n<!--\n <personal-details *ngIf=\"(currentstep === 1)\" (onNext)=\"proceedToPreferredLocation($event)\" (onClose)=\"onCloseClick($event)\"></personal-details>\n\n\n        <alfahim-preferred-location *ngIf=\"(currentstep === 2)\" (onNext)=\"scheduleAppointment($event)\" (onPrevious)=\"onPrevious($event)\"></alfahim-preferred-location>\n<service-confirmation *ngIf=\"(currentstep === 3)\" (onPrevious)=\"onServiceConfirmPrevious($event)\" (onConfirm)=\"onAppointmentConfirm($event)\">\n</service-confirmation>\n<appointment-confirmation *ngIf=\"(currentstep === 4)\" (onConfirm)=\"onCloseClick($event)\"></appointment-confirmation>\n-->\n"

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
/* harmony import */ var projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/rina-lib/src/lib/services/alfahim/personal.details.service */ "../rina-lib/src/lib/services/alfahim/personal.details.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/rina-lib/src/public_api */ "../rina-lib/src/public_api.ts");
/* harmony import */ var projects_rina_lib_src_lib_services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/rina-lib/src/lib/services/alfahim/window.toggle.service */ "../rina-lib/src/lib/services/alfahim/window.toggle.service.ts");
/* harmony import */ var projects_rina_lib_src_lib_model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/rina-lib/src/lib/model/shared/personal.details.model */ "../rina-lib/src/lib/model/shared/personal.details.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(windowTService, personalDetailsService) {
        this.windowTService = windowTService;
        this.personalDetailsService = personalDetailsService;
        this.serviceModel = new projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ServiceAvailibilityModel"]();
        this.personalDetails = new projects_rina_lib_src_lib_model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_4__["PersonalDetails"]();
    }
    AppComponent.prototype.onClick = function () {
        this.windowEnable = true;
        this.currentstep = this.windowTService.getNextWindow(0);
    };
    AppComponent.prototype.proceedToPreferredLocation = function (personalDetails) {
        this.currentstep = this.windowTService.getNextWindow(1);
    };
    AppComponent.prototype.scheduleAppointment = function (serviceModel) {
        this.personalDetailsService.setPeferredLocation(serviceModel);
        this.currentstep = this.windowTService.getNextWindow(2);
    };
    AppComponent.prototype.onPrevious = function (event) {
        this.personalDetails = this.personalDetailsService.getPersonalDetails();
        this.currentstep = this.windowTService.getPreviousWindow(2);
    };
    AppComponent.prototype.onServiceConfirmPrevious = function (event) {
        this.serviceModel = event;
        this.currentstep = this.windowTService.getPreviousWindow(3);
    };
    AppComponent.prototype.onCloseClick = function (event) {
        this.currentstep = -1;
        this.serviceModel = new projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ServiceAvailibilityModel"]();
        this.personalDetails = new projects_rina_lib_src_lib_model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_4__["PersonalDetails"]();
        this.windowEnable = false;
    };
    AppComponent.prototype.onAppointmentConfirm = function (event) {
        this.currentstep = this.windowTService.getNextWindow(3);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [projects_rina_lib_src_lib_services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_3__["WindowToogleService"], projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__["PersonalDetailsService"]])
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
/* harmony import */ var _personaldetails_personal_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personaldetails/personal.detail */ "./src/app/personaldetails/personal.detail.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/rina-lib/src/public_api */ "../rina-lib/src/public_api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! amexio-ng-extensions */ "../../node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _personaldetails_personal_detail__WEBPACK_IMPORTED_MODULE_2__["PersonalDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_5__["RinaLibModule"].forRoot(),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__["AmexioWidgetModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_7__["AmexioEnterpriseModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/personaldetails/personal.detail.ts":
/*!****************************************************!*\
  !*** ./src/app/personaldetails/personal.detail.ts ***!
  \****************************************************/
/*! exports provided: PersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsComponent", function() { return PersonalDetailsComponent; });
/* harmony import */ var projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/rina-lib/src/lib/services/alfahim/personal.details.service */ "../rina-lib/src/lib/services/alfahim/personal.details.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_rina_lib_src_lib_model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/rina-lib/src/lib/model/shared/personal.details.model */ "../rina-lib/src/lib/model/shared/personal.details.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalDetailsComponent = /** @class */ (function () {
    function PersonalDetailsComponent(personalDetailsService, fb) {
        this.personalDetailsService = personalDetailsService;
        this.fb = fb;
        this.showWindow = true;
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.personalDetails = new projects_rina_lib_src_lib_model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_2__["PersonalDetails"]();
        this.preferredModeOfContacts = [];
        this.titles = [];
        this.vehicleTypes = [];
        this.modelYears = [];
        this.preferredModeOfContacts.push({ primaryKey: '1', primaryDisplay: 'Phone' });
        this.preferredModeOfContacts.push({ primaryKey: '2', primaryDisplay: 'Email' });
    }
    PersonalDetailsComponent.prototype.ngOnInit = function () {
        this.getTitlesData();
        this.getVehiclesData();
        this.getVehiclesModelData();
        this.valiadtePersonDetailForm();
    };
    PersonalDetailsComponent.prototype.valiadtePersonDetailForm = function () {
        this.personDetailsGroup = this.fb.group({
            Title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            Phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            ContactPreference: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            VehicleType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            ModelYear: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            PresentKm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            RegistrationNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    PersonalDetailsComponent.prototype.getTitlesData = function () {
        var _this = this;
        var response;
        this.personalDetailsService.getTitles().subscribe(function (res) {
            response = res;
        }, 
        // tslint:disable-next-line:no-shadowed-variable
        function (error) {
            console.log('Invalid url');
        }, function () {
            _this.titles = response;
        });
    };
    PersonalDetailsComponent.prototype.getVehiclesData = function () {
        var _this = this;
        var response;
        this.personalDetailsService.getVehicles().subscribe(function (res) {
            response = res;
        }, 
        // tslint:disable-next-line:no-shadowed-variable
        function (error) {
            console.log('Invalid url');
        }, function () {
            _this.vehicleTypes = response;
        });
    };
    PersonalDetailsComponent.prototype.getVehiclesModelData = function () {
        var _this = this;
        var response;
        this.personalDetailsService.getVehicleModels().subscribe(function (res) {
            response = res;
        }, 
        // tslint:disable-next-line:no-shadowed-variable
        function (error) {
            console.log('Invalid url');
        }, function () {
            _this.modelYears = response;
        });
    };
    PersonalDetailsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['showWindow']) {
        }
    };
    PersonalDetailsComponent.prototype.proceedToPreferredLocation = function (event) {
        this.showWindow = false;
        this.onNext.emit(this.personalDetails);
        this.personalDetailsService.setPersonalDetails(this.personalDetails);
    };
    PersonalDetailsComponent.prototype.onCloseClick = function (event) {
        this.onClose.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PersonalDetailsComponent.prototype, "onNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PersonalDetailsComponent.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('person-detail'),
        __metadata("design:type", projects_rina_lib_src_lib_model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_2__["PersonalDetails"])
    ], PersonalDetailsComponent.prototype, "personalDetails", void 0);
    PersonalDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'personal-details',
            template: __webpack_require__(/*! ./personal.details.html */ "./src/app/personaldetails/personal.details.html")
        }),
        __metadata("design:paramtypes", [projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__["PersonalDetailsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], PersonalDetailsComponent);
    return PersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/personaldetails/personal.details.html":
/*!*******************************************************!*\
  !*** ./src/app/personaldetails/personal.details.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card class=\"person-details\" [body-height]=\"75\" [show]=\"showWindow\" [header]=\"false\" [footer]=\"true\">\n    <amexio-body>\n        <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'space-between'\">\n            <amexio-layout-item>\n                <div class=\"adjustbody\" [formGroup]=\"personDetailsGroup\">\n                    <amexio-label size=\"medium-bold\">PERSONAL DETAILS</amexio-label>\n                    <amexio-row>\n                        <amexio-column [size]=2>\n                            <amexio-dropdown [(ngModel)]=\"personalDetails.title\" formControlName=\"Title\" [search]=\"true\" name=\"title\" [(ngModel)]=\"personalDetails.title\" [place-holder]=\"'Select title'\" [field-label]=\"'Title'\" [data]=\"titles\" [value-field]=\"'primaryKey'\" [display-field]=\"'primaryDisplay'\">\n                            </amexio-dropdown>\n                        </amexio-column>\n                        <amexio-column [size]=5>\n                            <amexio-text-input [(ngModel)]=\"personalDetails.firstName\" formControlName=\"FirstName\" name=\"name\" field-label=\"Name\" place-holder=\"Name\">\n                            </amexio-text-input>\n                        </amexio-column>\n                        <amexio-column [size]=5>\n                            <amexio-text-input [(ngModel)]=\"personalDetails.surname\" formControlName=\"Surname\" name=\"surname\" field-label=\"Surname\" place-holder=\"Surname\">\n                            </amexio-text-input>\n                        </amexio-column>\n                    </amexio-row>\n\n                    <amexio-row>\n                        <amexio-column [size]=4>\n                            <amexio-email-input [(ngModel)]=\"personalDetails.email\" formControlName=\"Email\" name=\"email\" [field-label]=\"'Email'\" [place-holder]=\"'Email'\">\n                            </amexio-email-input>\n                        </amexio-column>\n                        <amexio-column [size]=4>\n                            <amexio-text-input [(ngModel)]=\"personalDetails.phone\" formControlName=\"Phone\" name=\"phone\" field-label=\"Phone\" place-holder=\"phone\">\n                            </amexio-text-input>\n                        </amexio-column>\n                      <amexio-column [size]=4>\n                        <amexio-radio-group [(ngModel)]=\"personalDetails.perferredContact\" [field-label]=\"'Preferred mode of contact'\" formControlName=\"ContactPreference\" name=\"contactPreference\" [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\" [horizontal]=\"true\"\n                                            [data]=\"preferredModeOfContacts\">\n                        </amexio-radio-group>\n                      </amexio-column>\n\n                    </amexio-row>\n                    <br>\n                    <amexio-label size=\"medium-bold\">VEHICLE DETAILS</amexio-label>\n                    <amexio-row>\n                        <amexio-column [size]=6>\n                            <amexio-dropdown [(ngModel)]=\"personalDetails.vehicleType\" formControlName=\"VehicleType\" [search]=\"true\" name=\"vehicleType\" [place-holder]=\"'Vehicle Type'\" [field-label]=\"'Vehicle Type'\" [data]=\"vehicleTypes\" [value-field]=\"'primaryKey'\" [display-field]=\"'primaryDisplay'\">\n                            </amexio-dropdown>\n                        </amexio-column>\n                        <amexio-column [size]=6>\n                            <amexio-dropdown [(ngModel)]=\"personalDetails.modelYear\" formControlName=\"ModelYear\" [search]=\"true\" name=\"modelYear\" [place-holder]=\"'Model Year'\" [field-label]=\"'Model Year'\" [data]=\"modelYears\" [value-field]=\"'primaryKey'\" [display-field]=\"'primaryDisplay'\">\n                            </amexio-dropdown>\n                        </amexio-column>\n                    </amexio-row>\n\n                    <amexio-row>\n                        <amexio-column [size]=6>\n                            <amexio-number-input [(ngModel)]=\"personalDetails.presentKm\" formControlName=\"PresentKm\" name=\"presentKm\" [field-label]=\"'Present KM on your car'\" [place-holder]=\"'Enter KM on you car'\">\n                            </amexio-number-input>\n                        </amexio-column>\n                        <amexio-column [size]=6>\n                            <amexio-text-input [(ngModel)]=\"personalDetails.registrationNumber\" formControlName=\"RegistrationNumber\" name=\"registrationNumber\" field-label=\"Registration Plate (License Plate)\" place-holder=\"Registration plate\">\n                            </amexio-text-input>\n                        </amexio-column>\n                    </amexio-row>\n\n                </div>\n            </amexio-layout-item>\n        </amexio-layout-columns>\n    </amexio-body>\n    <amexio-action>\n        <amexio-button [label]=\"'Close'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"onCloseClick($event)\">\n        </amexio-button>\n        <amexio-button [label]=\"'Next'\" [type]=\"'theme-color'\" [disabled]=\"!personDetailsGroup.valid\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"proceedToPreferredLocation($event)\">\n        </amexio-button>\n    </amexio-action>\n</amexio-card>\n"

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

module.exports = __webpack_require__(/*! /home/sagar/sagar/UI_Work/poc/gic-rina/projects/alfahim/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map