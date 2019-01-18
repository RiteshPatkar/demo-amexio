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
/*! exports provided: RinaLibModule, ServiceAvailibilityModel, ServiceAvailiblityComponent, PreferredLocationComponent, ServiceConfirmationComponent, AppoinmentConfirmationComponent, CustomerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/rina-lib.module */ "../rina-lib/src/lib/rina-lib.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RinaLibModule", function() { return _lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_0__["RinaLibModule"]; });

/* harmony import */ var _lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/model/service.availiblity.model */ "../rina-lib/src/lib/model/service.availiblity.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailibilityModel", function() { return _lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"]; });

/* harmony import */ var _rinaccm_src_app_models_customer_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rinaccm/src/app/models/customer.details.model */ "./src/app/models/customer.details.model.ts");
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

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9yaW5hY2NtL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

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
/* harmony import */ var _feature_component_vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feature-component/vehicle-details/vehicle.details.component */ "./src/app/feature-component/vehicle-details/vehicle.details.component.ts");
/* harmony import */ var _feature_component_company_logo_company_logo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feature-component/company-logo/company.logo.component */ "./src/app/feature-component/company-logo/company.logo.component.ts");
/* harmony import */ var _feature_component_searchbox_searchbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feature-component/searchbox/searchbox.component */ "./src/app/feature-component/searchbox/searchbox.component.ts");
/* harmony import */ var _feature_component_vehicle_service_history_vehicle_service_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./feature-component/vehicle-service-history/vehicle.service.history.component */ "./src/app/feature-component/vehicle-service-history/vehicle.service.history.component.ts");
/* harmony import */ var _feature_component_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feature-component/customer-details/customer.details.component */ "./src/app/feature-component/customer-details/customer.details.component.ts");
/* harmony import */ var _feature_component_service_list_service_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./feature-component/service-list/service.list.component */ "./src/app/feature-component/service-list/service.list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var COMPONENT = [
    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _rina_home_rina_home_component__WEBPACK_IMPORTED_MODULE_3__["RinaHomeComponent"], _feature_component_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_13__["CustomerDetailsComponent"],
    _feature_component_vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_9__["VehicleDetailsComponent"], _feature_component_company_logo_company_logo_component__WEBPACK_IMPORTED_MODULE_10__["CompanyLogoComponent"],
    _feature_component_searchbox_searchbox_component__WEBPACK_IMPORTED_MODULE_11__["SearchBoxComponent"], _feature_component_vehicle_service_history_vehicle_service_history_component__WEBPACK_IMPORTED_MODULE_12__["VehicleServiceHistoryComponent"],
    _feature_component_service_list_service_list_component__WEBPACK_IMPORTED_MODULE_14__["ServiceListComponent"]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: COMPONENT,
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _rina_lib_src_lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_8__["RinaLibModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioDashBoardModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/feature-component/company-logo/company.logo.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/feature-component/company-logo/company.logo.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-row>\n  <amexio-column [size]=\"3\">\n  </amexio-column>\n  <amexio-column [size]=\"6\">\n    <amexio-image\n      [width]=\"'150px'\"\n      [height]=\"'120px'\"\n      [path]=\"'assets/images/giclogo.png'\"\n      [filter]=\"'normal'\">\n    </amexio-image>\n  </amexio-column>\n  <amexio-column [size]=\"3\">\n\n  </amexio-column>\n</amexio-row>\n\n<amexio-row>\n  <amexio-column [size]=\"3\">\n    <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-volume-control-phone'\" [type]=\"'theme-color'\"></amexio-floating-button>\n  </amexio-column>\n  <amexio-column [size]=\"3\">\n    <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-phone'\" [type]=\"'green'\"></amexio-floating-button>\n\n  </amexio-column>\n\n  <amexio-column [size]=\"3\">\n    <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-pause'\" [type]=\"'yellow'\"></amexio-floating-button>\n\n  </amexio-column>\n  <amexio-column [size]=\"3\">\n    <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-phone-square'\" [type]=\"'red'\"></amexio-floating-button>\n\n  </amexio-column>\n\n</amexio-row>\n"

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

/***/ "./src/app/feature-component/customer-details/customer-details.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/feature-component/customer-details/customer-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'end'\">\n    <amexio-layout-item style=\"width: 20%\">\n      <amexio-image [path]=\"customerModel.profileImageUrl\"\n                    [filter]=\"'round'\" [height]=\"'70px'\">\n      </amexio-image>\n    </amexio-layout-item>\n    <amexio-layout-item [fit]=\"true\">\n      <table>\n        <tr>\n          <td>Customer ID </td>\n          <td style=\"word-break: break-all;\">: {{customerModel.customerId}}</td>\n        </tr>\n        <tr>\n          <td>Mobile #</td>\n          <td> : {{customerModel.mobile}}</td>\n        </tr>\n        <tr>\n          <td>Name</td>\n          <td> : {{customerModel.name}}</td>\n        </tr>\n\n        <tr>\n          <td>Company</td>\n          <td> : {{customerModel.companyName}}</td>\n        </tr>\n        <tr>\n          <td>Status </td>\n          <td>: {{customerModel.operatingStatus}}</td>\n        </tr>\n        <tr><td>Email </td>\n          <td style=\"word-break: break-all;\">: {{customerModel.email}}</td>\n        </tr>\n\n\n        <tr>\n          <td>Alt Number</td>\n          <td> : {{customerModel.altNumber}}</td>\n        </tr>\n        <tr>\n          <td>Birthday</td>\n          <td> : {{customerModel.birthday}}</td>\n        </tr>\n        <tr>\n          <td>Anniversary</td>\n          <td> : {{customerModel.anniversary}}</td>\n        </tr>\n\n\n      </table>\n    </amexio-layout-item>\n  </amexio-layout-columns>\n\n\n\n<!--<amexio-row>\n  <amexio-column [size]=\"3\">\n\n  </amexio-column>\n  <amexio-column [size]=\"9\">\n\n  </amexio-column>\n</amexio-row>-->\n\n<!--<tr>\n  <td>\n    <div><span>Email</span>\n      <span style=\"align-content: end;\">:</span></div></td>\n     <td style=\"word-break: break-all;\">abcaaaaaaaaaaaa@gmail.comaa</td>\n</tr>-->\n"

/***/ }),

/***/ "./src/app/feature-component/customer-details/customer.details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/feature-component/customer-details/customer.details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
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
 * Created by dattaram on 14/1/19.
 */


var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent() {
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
    };
    CustomerDetailsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.customerModel) {
            this.customerModel = changes.customerModel.currentValue;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('customer-model'),
        __metadata("design:type", _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__["CustomerProfile"])
    ], CustomerDetailsComponent.prototype, "customerModel", void 0);
    CustomerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/feature-component/customer-details/customer-details.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
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
    function SearchBoxComponent() {
        this.showDropdown = false;
        this.dropDownItemList = [];
        this.searchId = '';
        this.searchType = 1;
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropDownItemList = [
            {
                'key': 'Customer ID',
                'id': 1,
                selected: true
            },
            {
                'key': 'Mobile Number',
                'id': 2,
                selected: false
            }
        ];
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        this.showList(this.showDropdown);
    };
    SearchBoxComponent.prototype.focusHandle = function (event) {
        this.showList(true);
    };
    SearchBoxComponent.prototype.iconHandle = function () {
        var searchObject = {
            searchId: parseInt(this.searchId),
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
        __metadata("design:paramtypes", [])
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

module.exports = "<span class=\"servicelist\">\n    <amexio-card [header]=\"false\"\n                          [footer]=\"true\"\n                          [footer-align]=\"'center'\">\n         <amexio-body>\n           <search-box (search)=\"getSearchObject($event)\"></search-box>\n           <ng-container *ngFor=\"let service of serviceList\">\n             <amexio-button [label]=\"service.serviceName\"\n                            [type]=\"'theme-color'\"\n                            (onClick)=\"openServiceBookingWindow(service)\"\n                            [disabled]=\"service.disabled\"\n                            [tooltip]=\"'large'\"\n                            [block]=\"true\">\n             </amexio-button><br>\n           </ng-container>\n         </amexio-body>\n         <amexio-action>\n           <amexio-row>\n             <amexio-column [size]=\"4\">\n               <amexio-image style=\"color: lightskyblue\" [icon-class]=\"'fa fa-file-pdf-o fa-2x'\" ></amexio-image>\n             </amexio-column>\n             <amexio-column [size]=\"4\">\n               <amexio-image style=\"color: blue\" [icon-class]=\"'fa fa-file-word-o fa-2x'\" ></amexio-image>\n             </amexio-column>\n             <amexio-column [size]=\"4\">\n               <amexio-image style=\"color: green\" [icon-class]=\"'fa fa-file-excel-o fa-2x'\" ></amexio-image>\n             </amexio-column>\n           </amexio-row>\n         </amexio-action>\n       </amexio-card>\n</span>\n\n<amexio-window class=\"serviceconfirmation servicelist\" [top]=\"'10px'\" [(show)]=\"windowEnable\" type=\"window\" [header]=\"false\" [footer]=\"false\" [closable]=\"false\">\n  <amexio-body>\n    <br>\n    <amexio-row>\n      <amexio-column size=\"1\"></amexio-column>\n      <amexio-column size=\"10\">\n        <amexio-steps [icon]=\"true\">\n          <amexio-step-block  [label]=\"'Location'\" [active]=\"(currentstep === 2)\" [icon]=\"'fa fa-map-marker fa-2x'\">\n          </amexio-step-block>\n          <amexio-step-block [label]=\"'Confirm'\" [active]=\"(currentstep === 3)\" [icon]=\"'fa fa-check-circle fa-2x'\">\n          </amexio-step-block>\n          <amexio-step-block [label]=\"'Info'\" [active]=\"(currentstep === 4)\" [icon]=\"'fa fa-info fa-2x'\">\n          </amexio-step-block>\n        </amexio-steps>\n      </amexio-column>\n      <amexio-column size=\"1\"></amexio-column>\n    </amexio-row>\n\n    <preferred-location *ngIf=\"(currentstep === 2)\"\n                        (onNext)=\"scheduleAppointment($event)\"(onNext)=\"scheduleAppointment($event)\" (onPrevious)=\"onPrevious($event)\"\n                        (onPrevious)=\"onPrevious($event)\"\n                        [service-model]=\"serviceModel\"\n                        [Secondary-button]=\"'Cancel'\">\n    </preferred-location>\n\n    <service-confirmation *ngIf=\"(currentstep === 3)\" [service-model]=\"serviceModel\" (onPrevious)=\"onServiceConfirmPrevious($event)\" (onConfirm)=\"onAppointmentConfirm($event)\">\n    </service-confirmation>\n\n     <appointment-confirmation *ngIf=\"(currentstep === 4)\" (onConfirm)=\"onCloseClick()\"></appointment-confirmation>\n  </amexio-body>\n</amexio-window>\n\n\n<amexio-notification\n  [data]=\"errorMsgData\"\n  [vertical-position]=\"'top'\"\n  [horizontal-position]=\"'center'\"\n  [close-on-escape] =\"true\"\n  [background-color]=\"'red'\"\n  [auto-dismiss-msg]=\"true\"\n  [icon]=\"'fa fa-times-circle-o'\"\n  [auto-dismiss-msg-interval]=\"4000\">\n</amexio-notification>\n"

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
/* harmony import */ var _rina_lib_src_lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../rina-lib/src/lib/model/service.availiblity.model */ "../rina-lib/src/lib/model/service.availiblity.model.ts");
/* harmony import */ var _rina_lib_src_lib_services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../rina-lib/src/lib/services/alfahim/window.toggle.service */ "../rina-lib/src/lib/services/alfahim/window.toggle.service.ts");
/* harmony import */ var _rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../rina-lib/src/lib/services/alfahim/personal.details.service */ "../rina-lib/src/lib/services/alfahim/personal.details.service.ts");
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
    function ServiceListComponent(_windowTService, _personalDetailsService) {
        this._windowTService = _windowTService;
        this._personalDetailsService = _personalDetailsService;
        this.serviceList = [];
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errorFound = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentstep = 2;
        this.windowEnable = false;
        this.errorMsgData = [];
        this.serviceModel = new _rina_lib_src_lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"]();
    }
    ServiceListComponent.prototype.ngOnInit = function () {
    };
    ServiceListComponent.prototype.onPrevious = function (event) {
        this.onCloseClick();
    };
    ServiceListComponent.prototype.scheduleAppointment = function (serviceModel) {
        this._personalDetailsService.setPeferredLocation(serviceModel);
        this.currentstep = this._windowTService.getNextWindow(2);
    };
    ServiceListComponent.prototype.getSearchObject = function (event) {
        if (isNaN(event.searchId)) {
            this.serviceList[0].disabled = true;
            this.errorMsgData.push('Please enter number.');
            this.errorFound.emit(event);
        }
        else {
            this.search.emit(event);
        }
    };
    ServiceListComponent.prototype.openServiceBookingWindow = function (service) {
        if (service.serviceName === 'SERVICE BOOKING') {
            this.windowEnable = true;
            this.currentstep = 2;
        }
    };
    ServiceListComponent.prototype.onServiceConfirmPrevious = function (event) {
        this.currentstep = this._windowTService.getPreviousWindow(3);
    };
    ServiceListComponent.prototype.onCloseClick = function () {
        this.currentstep = -1;
        this.windowEnable = false;
    };
    ServiceListComponent.prototype.onAppointmentConfirm = function (event) {
        this.currentstep = this._windowTService.getNextWindow(3);
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
    ServiceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'service-list-component',
            template: __webpack_require__(/*! ./service-list.component.html */ "./src/app/feature-component/service-list/service-list.component.html")
        }),
        __metadata("design:paramtypes", [_rina_lib_src_lib_services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_2__["WindowToogleService"],
            _rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_3__["PersonalDetailsService"]])
    ], ServiceListComponent);
    return ServiceListComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/vehicle-details/vehicle.details.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/feature-component/vehicle-details/vehicle.details.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card *ngFor=\"let vehicleModel of vehicleDetails\"\n             [header]=\"false\"\n             [footer]=\"false\">\n    <amexio-body >\n      <div style=\"cursor: pointer\" (click)=\"onCardClick(vehicleModel)\">\n         <amexio-row >\n        <amexio-column [size]=\"6\">\n          <amexio-image [height]=\"'250px'\" [path]=\"vehicleModel.vehicleDetail.image\"></amexio-image><br>\n          <amexio-label>{{vehicleModel.vehicleDetail.modelName}}</amexio-label>\n        </amexio-column>\n        <amexio-column [size]=\"6\">\n          <table>\n            <tr>\n              <td>Engine</td>\n              <td>: {{vehicleModel.vehicleDetail.engine}}</td>\n            </tr>\n            <tr>\n              <td>Horsepower</td>\n              <td>: {{vehicleModel.vehicleDetail.horsepower}}</td>\n            </tr>\n            <tr>\n              <td>Torque rpm</td>\n              <td>: {{vehicleModel.vehicleDetail.torque}}</td>\n            </tr>\n            <tr>\n              <td>Acceleration</td>\n              <td>: {{vehicleModel.vehicleDetail.acceleration}}</td>\n            </tr>\n            <tr>\n              <td>Top Speed</td>\n              <td>: {{vehicleModel.vehicleDetail.topSpeed}}</td>\n            </tr>\n            <tr>\n              <td>Model Year</td>\n              <td>: {{vehicleModel.vehicleDetail.modelYear}}</td>\n            </tr>\n            <tr>\n              <td>Registration No</td>\n              <td>: {{vehicleModel.registrationNo}}</td>\n            </tr>\n            <tr>\n              <td>Date of Purchase</td>\n              <td>: {{vehicleModel.dateOfPurchase}}</td>\n            </tr>\n            <tr>\n              <td>Purchased from</td>\n              <td>: {{vehicleModel.bu}}</td>\n            </tr>\n          </table>\n        </amexio-column>\n      </amexio-row>\n      </div>\n    </amexio-body>\n</amexio-card>\n\n"

/***/ }),

/***/ "./src/app/feature-component/vehicle-details/vehicle.details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/feature-component/vehicle-details/vehicle.details.component.ts ***!
  \********************************************************************************/
/*! exports provided: VehicleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetailsComponent", function() { return VehicleDetailsComponent; });
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

var VehicleDetailsComponent = /** @class */ (function () {
    function VehicleDetailsComponent() {
        this.selectVehicle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    VehicleDetailsComponent.prototype.ngOnInit = function () {
    };
    VehicleDetailsComponent.prototype.onCardClick = function (vehicleDetails) {
        this.selectVehicle.emit(vehicleDetails);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('vehicle-details'),
        __metadata("design:type", Array)
    ], VehicleDetailsComponent.prototype, "vehicleDetails", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VehicleDetailsComponent.prototype, "selectVehicle", void 0);
    VehicleDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vehicle-details',
            template: __webpack_require__(/*! ./vehicle.details.component.html */ "./src/app/feature-component/vehicle-details/vehicle.details.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], VehicleDetailsComponent);
    return VehicleDetailsComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/vehicle-service-history/vehicle.service.history.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/feature-component/vehicle-service-history/vehicle.service.history.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<amexio-card [header]=\"false\"\n             [footer]=\"false\">\n  <amexio-body>\n    <table>\n      <tr>\n        <td>BU</td>\n        <td>: {{vehicleModel.bu}}</td>\n      </tr>\n      <tr>\n        <td>Vehicle</td>\n        <td>: {{vehicleModel.vehicleDetail.modelName}}</td>\n      </tr>\n      <tr>\n        <td>Date of Purchase</td>\n        <td>: {{vehicleModel.dateOfPurchase}}</td>\n      </tr>\n\n      <tr>\n        <td>Model Year</td>\n        <td>: {{vehicleModel.vehicleDetail.modelYear}}</td>\n      </tr>\n      <tr>\n        <td>Registration No</td>\n        <td>: {{vehicleModel.registrationNo}}</td>\n      </tr>\n      <tr>\n        <td>Customer Class</td>\n        <td>: {{vehicleModel.customerClass}}</td>\n      </tr>\n\n      <tr>\n        <td>Preferred Mode of Contact</td>\n        <td>: {{vehicleModel.preferredModeOfContact}}</td>\n      </tr>\n    </table>\n  </amexio-body>\n</amexio-card>\n"

/***/ }),

/***/ "./src/app/feature-component/vehicle-service-history/vehicle.service.history.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/feature-component/vehicle-service-history/vehicle.service.history.component.ts ***!
  \************************************************************************************************/
/*! exports provided: VehicleServiceHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleServiceHistoryComponent", function() { return VehicleServiceHistoryComponent; });
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
 * Created by dattaram on 16/1/19.
 */

var VehicleServiceHistoryComponent = /** @class */ (function () {
    function VehicleServiceHistoryComponent() {
    }
    VehicleServiceHistoryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('vehicle-model'),
        __metadata("design:type", Object)
    ], VehicleServiceHistoryComponent.prototype, "vehicleModel", void 0);
    VehicleServiceHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vehicle-service-history',
            template: __webpack_require__(/*! ./vehicle.service.history.component.html */ "./src/app/feature-component/vehicle-service-history/vehicle.service.history.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], VehicleServiceHistoryComponent);
    return VehicleServiceHistoryComponent;
}());



/***/ }),

/***/ "./src/app/models/customer.details.model.ts":
/*!**************************************************!*\
  !*** ./src/app/models/customer.details.model.ts ***!
  \**************************************************/
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

/***/ "./src/app/models/customer.profile.model.ts":
/*!**************************************************!*\
  !*** ./src/app/models/customer.profile.model.ts ***!
  \**************************************************/
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

/***/ "./src/app/rina-home/rina-home.component.html":
/*!****************************************************!*\
  !*** ./src/app/rina-home/rina-home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <amexio-layout-grid [layout]=\"'rinahomepage'\">\n   <amexio-grid-item [name]=\"'logoposition'\">\n     <amexio-card [header]=\"false\"\n                  [footer]=\"false\">\n       <amexio-body>\n     <company-logo></company-logo>\n       </amexio-body>\n     </amexio-card>\n   </amexio-grid-item>\n   <amexio-grid-item  [name]=\"'topslot2'\">\n\n     <span class=\"custdetail\">\n     <amexio-card [header]=\"false\"\n                  [footer]=\"false\">\n       <amexio-body>\n         <customer-details [customer-model]=\"customerModel\"></customer-details>\n       </amexio-body>\n     </amexio-card>\n     </span>\n   </amexio-grid-item>\n   <amexio-grid-item  [name]=\"'topslot3'\">\n    <vehicle-service-history [vehicle-model]=\"vehicle\"></vehicle-service-history>\n   </amexio-grid-item>\n   <amexio-grid-item  [name]=\"'topslot4'\">\n       <amexio-card [header]=\"false\"\n                        [footer]=\"false\">\n             <amexio-body>\n               <table>\n                 <tr>\n                   <td>Last Service &nbsp;</td>\n                   <td>: {{vehicle.lastService}}</td>\n                 </tr>\n                 <tr>\n                   <td>Next Service &nbsp;</td>\n                   <td>: {{vehicle.nextService}}</td>\n                 </tr>\n                 <tr>\n                   <td>Open SRs &nbsp;</td>\n                   <td>: {{vehicle.openSRs}}</td>\n                 </tr>\n               </table>\n             </amexio-body>\n           </amexio-card>\n   </amexio-grid-item>\n   <amexio-grid-item  [name]=\"'guages'\">\n     <amexio-card [header]=\"false\"\n                  [footer]=\"false\">\n       <amexio-body>\n\n         <amexio-dashboard-gauge [height]=\"'200px'\"\n                                 [data]=\"gaugeChartData\"\n                                 [red-color-from]=\"90\"\n                                 [red-color-to]=\"100\"\n                                 [yellow-color-from]=\"75\"\n                                 [yellow-color-to]=\"90\"\n                                 [scale-value]=\"5\">\n         </amexio-dashboard-gauge>\n       </amexio-body>\n     </amexio-card>\n   </amexio-grid-item>\n\n   <amexio-grid-item  [name]=\"'rinasidemenu'\">\n     <service-list-component [service-list]=\"serviceList\" (errorFound)=\"handleError()\" (search)=\"getSearchObject($event)\"></service-list-component>\n   </amexio-grid-item>\n   <amexio-grid-item  [name]=\"'rinasidecenter'\">\n     <amexio-layout-columns style=\"background-color: white\" [fit]=\"true\" [border]=\"false\" [orientation]=\"'vertical'\" [alignment]=\"'space-between'\">\n       <amexio-layout-item [padding]=\"false\" [fit]=\"true\">\n         <amexio-tab-view #tab  [divide-header-equally]=true [closable]=\"false\" [body-height]=\"51\" >\n           <amexio-tab title=\"VEHICLE DETAILS\" [active]=\"true\" [amexio-color]=\"'red'\">\n             <ng-container *ngIf=\"customerModel.vehicles\">\n               <vehicle-details (selectVehicle)=\"getSelectedVehicle($event)\" [vehicle-details]=\"customerModel.vehicles\"></vehicle-details>\n             </ng-container>\n           </amexio-tab>\n           <amexio-tab title=\"BOOKING DETAILS\" [amexio-color]=\"'green'\">\n             <amexio-datagrid  [http-method]=\"'get'\"\n                               [http-url]=\"'assets/bookingdata.json'\" [data-reader]=\"'data'\" [page-size]=\"10\">\n\n               <amexio-data-table-column [data-index]=\"'bookingId'\" [data-type]=\"'string'\" [text]=\"'Booking Id'\">\n               </amexio-data-table-column>\n               <amexio-data-table-column [sort]=\"false\" [data-index]=\"'bookingDate'\" [data-type]=\"'string'\"\n                                         [text]=\"'Booking Date'\"></amexio-data-table-column>\n               <amexio-data-table-column [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Name'\">\n\n               </amexio-data-table-column>\n             </amexio-datagrid>\n           </amexio-tab>\n           <amexio-tab title=\"SERVICE HISTORY\" [amexio-color]=\"'grey'\">\n             <amexio-datagrid  [http-method]=\"'get'\"\n                               [http-url]=\"'assets/servicedata.json'\" [data-reader]=\"'data'\" [page-size]=\"10\">\n\n               <amexio-data-table-column [data-index]=\"'serviceId'\" [data-type]=\"'string'\" [text]=\"'Service Id'\">\n               </amexio-data-table-column>\n               <amexio-data-table-column [sort]=\"false\" [data-index]=\"'serviceDate'\" [data-type]=\"'string'\"\n                                         [text]=\"'Service Date'\"></amexio-data-table-column>\n               <amexio-data-table-column [data-index]=\"'vehicle'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Vehicle'\">\n\n               </amexio-data-table-column>\n             </amexio-datagrid>\n           </amexio-tab>\n           <amexio-tab title=\"INTERACTION HISTORY\" [amexio-color]=\"'red'\">\n             <amexio-datagrid  [http-method]=\"'get'\"\n                               [http-url]=\"'assets/interaction.json'\" [data-reader]=\"'data'\" [page-size]=\"10\">\n\n               <amexio-data-table-column [data-index]=\"'interactionDate'\" [data-type]=\"'string'\" [text]=\"'Interaction Date'\">\n               </amexio-data-table-column>\n               <amexio-data-table-column [sort]=\"false\" [data-index]=\"'name'\" [data-type]=\"'string'\"\n                                         [text]=\"'Name'\"></amexio-data-table-column>\n             </amexio-datagrid>\n           </amexio-tab>\n           <amexio-tab title=\"RIGHT SELL\" [amexio-color]=\"'blue'\">\n             <amexio-datagrid  [http-method]=\"'get'\"\n                               [http-url]=\"'assets/dummygrid.json'\" [data-reader]=\"'data'\" [page-size]=\"10\">\n\n               <amexio-data-table-column [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\" [text]=\"'Awaiting Details'\">\n               </amexio-data-table-column>\n               <amexio-data-table-column [sort]=\"false\" [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\"\n                                         [text]=\"'Awaiting Details'\"></amexio-data-table-column>\n               <amexio-data-table-column [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Awaiting Details'\">\n\n               </amexio-data-table-column>\n             </amexio-datagrid>\n           </amexio-tab>\n         </amexio-tab-view>\n\n       </amexio-layout-item>\n       <amexio-layout-item style=\"background-color: #E8E8E8\" [padding]=\"false\">\n         <amexio-checkbox-group\n           [data-reader]=\"'data'\"\n           [display-field]=\"'serviceType'\"\n           [value-field]=\"'serviceType'\"\n           [horizontal]=\"true\"\n           [http-method]=\"'get'\"\n           [http-url]=\"'assets/serviceType.json'\">\n         </amexio-checkbox-group>\n\n         <amexio-layout-columns [fit]=\"true\" [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'space-between'\">\n           <amexio-layout-item [fit]=\"true\" >\n             <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'space-between'\">\n               <amexio-layout-item >\n             <amexio-text-input\n               place-holder=\"Call Remark\"\n               [allow-blank]=\"true\"\n               has-label=\"false\">\n             </amexio-text-input>\n               </amexio-layout-item>\n             </amexio-layout-columns>\n           </amexio-layout-item>\n           <amexio-layout-item  >\n             <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'end'\">\n               <amexio-layout-item >\n               <amexio-button [size]=\"'medium'\" [label]=\"'Submit'\" [type]=\"'theme-color'\"  [tooltip]=\"'submit'\">\n           </amexio-button>\n               </amexio-layout-item>\n             </amexio-layout-columns>\n           </amexio-layout-item>\n         </amexio-layout-columns>\n       </amexio-layout-item>\n     </amexio-layout-columns>\n   </amexio-grid-item>\n   <amexio-grid-item  [name]=\"'rinasidesearch'\">\n     <span class=\"servicelist\">\n    <amexio-card [header]=\"false\"\n                 [footer]=\"false\">\n      <amexio-body>\n            <amexio-dropdown\n              [place-holder]=\"'Select Script'\"\n              [display-field]=\"'scriptName'\"\n              [data-reader]=\"'data'\"\n              [value-field]=\"'scriptUrl'\"\n              [http-method]=\"'get'\"\n              [http-url]=\"'assets/script.json'\"\n              [enable-sort]=\"true\"\n              [sort]=\"'asc'\">\n         </amexio-dropdown>\n      </amexio-body>\n    </amexio-card>\n     </span>\n   </amexio-grid-item>\n </amexio-layout-grid>\n <amexio-dialogue [(show)]=\"warningdialogue\"\n                  [material-design]=\"true\"\n                  [message]=\"warningMsg\"\n                  [title]=\"'Warning'\"\n                  [message-type]=\"'warning'\"\n                  [type]=\"'alert'\">\n </amexio-dialogue>\n\n\n\n\n"

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
/* harmony import */ var _rina_lib_src_lib_services_shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../rina-lib/src/lib/services/shared/http.service */ "../rina-lib/src/lib/services/shared/http.service.ts");
/* harmony import */ var _rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../rina-lib/src/lib/services/alfahim/personal.details.service */ "../rina-lib/src/lib/services/alfahim/personal.details.service.ts");
/* harmony import */ var _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/customer.profile.model */ "./src/app/models/customer.profile.model.ts");
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





var customerDetailsUrl = 'assets/customerDetails.json';
/* http://localhost:8080/api/customerDetails/findById/ */
var msgtype = {
    1: 'customer id',
    2: 'mobile no'
};
var RinaHomeComponent = /** @class */ (function () {
    function RinaHomeComponent(_httpService, _personalDetailsService, _gridlayoutService) {
        this._httpService = _httpService;
        this._personalDetailsService = _personalDetailsService;
        this._gridlayoutService = _gridlayoutService;
        this.serviceList = [];
        this.warningdialogue = false;
        this.warningMsg = '';
        this.showLoader = false;
        this.gaugeChartData = [];
        this.gaugeChartData = [
            ['Label', 'Value'],
            ['Memory', 80],
            ['Network', 68]
        ];
        this.createLayouts();
        this._gridlayoutService.createLayout(this.rinaHomeDesktopLayout);
        this.customerModel = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_4__["CustomerProfile"]();
        this.vehicle = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_4__["Vehicles"]();
    }
    RinaHomeComponent.prototype.ngOnInit = function () {
        this.getServiceList();
        // this.getCustomerDetails();
    };
    RinaHomeComponent.prototype.getServiceList = function () {
        var _this = this;
        this._httpService.fetch('assets/serviceList.json', 'get').subscribe(function (res) {
            _this.serviceList = res.data;
        });
    };
    RinaHomeComponent.prototype.getCustomerDetails = function () {
        var _this = this;
        this._httpService.fetch('assets/test.json', 'get').subscribe(function (res) {
            _this.customerModel = res.response;
        });
    };
    RinaHomeComponent.prototype.createLayouts = function () {
        this.rinaHomeDesktopLayout = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConfig"]('rinahomepage', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConstants"].Desktop)
            .addlayout(['logoposition', 'topslot2', 'topslot3', 'topslot4', 'guages'])
            .addlayout(['rinasidemenu', 'rinasidecenter', 'rinasidecenter', 'rinasidecenter', 'rinasidesearch']);
    };
    RinaHomeComponent.prototype.getSearchObject = function (searchObject) {
        var _this = this;
        this.showLoader = true;
        this._httpService.fetch('http://192.168.2.22:8080/api/customer/search/' + searchObject.searchId + '/' + searchObject.searchType, 'get').subscribe(function (res) {
            if (res.success) {
                _this.showLoader = false;
                _this.customerModel = res.response;
                _this._personalDetailsService.setPersonalDetailsForCcm(_this.customerModel);
                _this.serviceList[0].disabled = false;
            }
            else {
                _this.serviceList[0].disabled = true;
                _this.showLoader = false;
                _this.warningMsg = 'Record not found for ' + msgtype[searchObject.searchType] + ' (' + searchObject.searchId + ')';
                _this.warningdialogue = true;
                _this.customerModel = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_4__["CustomerProfile"]();
                _this.vehicle = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_4__["Vehicles"]();
            }
        });
    };
    RinaHomeComponent.prototype.handleError = function () {
        debugger;
        this.customerModel = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_4__["CustomerProfile"]();
        this.vehicle = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_4__["Vehicles"]();
    };
    RinaHomeComponent.prototype.getSelectedVehicle = function (vehicle) {
        this.vehicle = vehicle;
    };
    RinaHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rina-home',
            template: __webpack_require__(/*! ./rina-home.component.html */ "./src/app/rina-home/rina-home.component.html")
        }),
        __metadata("design:paramtypes", [_rina_lib_src_lib_services_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_3__["PersonalDetailsService"],
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

module.exports = __webpack_require__(/*! /home/sagar/sagar/UI_Work/poc/gic-rina/projects/rinaccm/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map