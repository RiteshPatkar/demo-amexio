(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../rina-lib/src/lib/components/customer-details/customer-details.component.html":
/*!***************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/customer-details/customer-details.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-row>\n  <amexio-column [size]=\"4\">\n    <amexio-image [path]=\"customerModel.profileImageUrl\"\n                  [filter]=\"'round'\">\n    </amexio-image>\n   <!-- <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-phone'\" [type]=\"'red'\"></amexio-floating-button>\n\n    <amexio-image [icon-class]=\"'fa fa-phone fa-2x'\" ></amexio-image>-->\n  </amexio-column>\n  <amexio-column [size]=\"8\">\n    <table>\n      <tr>\n        <td>Customer ID</td>\n        <td>{{customerModel.customerId}}</td>\n      </tr>\n      <tr>\n        <td>Mobile #</td>\n        <td>{{customerModel.mobile}}</td>\n      </tr>\n      <tr>\n        <td>Name</td>\n        <td>{{customerModel.name}}</td>\n      </tr>\n\n      <tr>\n        <td>Company Name</td>\n        <td>{{customerModel.companyName}}</td>\n      </tr>\n      <tr>\n        <td>Operating Status</td>\n        <td>{{customerModel.operatingStatus}}</td>\n      </tr>\n      <tr>\n        <td>Email</td>\n        <td>{{customerModel.email}}</td>\n      </tr>\n\n\n      <tr>\n        <td>Alt Number</td>\n        <td>{{customerModel.altNumber}}</td>\n      </tr>\n      <tr>\n        <td>Birthday</td>\n        <td>{{customerModel.birthday}}</td>\n      </tr>\n      <tr>\n        <td>Anniversary</td>\n        <td>{{customerModel.anniversary}}</td>\n      </tr>\n\n\n    </table>\n  </amexio-column>\n</amexio-row>\n"

/***/ }),

/***/ "../rina-lib/src/lib/components/customer-details/customer.details.component.ts":
/*!*************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/customer-details/customer.details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_customer_details_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/customer.details.model */ "../rina-lib/src/lib/model/customer.details.model.ts");
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
        __metadata("design:type", _model_customer_details_model__WEBPACK_IMPORTED_MODULE_1__["CustomerDetails"])
    ], CustomerDetailsComponent.prototype, "customerModel", void 0);
    CustomerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "../rina-lib/src/lib/components/customer-details/customer-details.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "../rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.html":
/*!*********************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'space-between'\">\n    <amexio-layout-item>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-dropdown [(ngModel)]=\"serviceModel.location\" [place-holder]=\"'Select Location'\" name=\"location\" [field-label]=\"'Select Location'\" [data]=\"serviceLocations\" [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\" (onSingleSelect)=\"onLocationClick($event)\">\n                </amexio-dropdown>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=9>\n                <amexio-date-time-picker [field-label]=\"'Select Date'\" [min-date]=\"minDate\" [time-picker]=\"false\" [date-picker]=\"true\" name=\"appointmentDate\" [min-date]=\"todayDate\" [(ngModel)]=\"serviceModel.appointmentDate\">\n                </amexio-date-time-picker>\n            </amexio-column>\n            <amexio-column [size]=3>\n                <amexio-dropdown [(ngModel)]=\"serviceModel.appointmentTime\" (onSingleSelect)=\"setTime($event)\" [place-holder]=\"'Select Time'\" name=\"appointmentTime\" [field-label]=\"'Select time'\" [data]=\"timeSlots\" [display-field]=\"'time'\" [value-field]=\"'timeId'\">\n                </amexio-dropdown>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-dropdown [(ngModel)]=\"serviceModel.assitantPerson\" [place-holder]=\"'Select SA'\" name=\"assitantPerson\" [field-label]=\"'Service Assistant (SA)'\" [data]=\"assitantPerson\" [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\">\n                </amexio-dropdown>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-button [label]=\"'CHECK SA AVAILIBLITY'\" [type]=\"'theme-color'\" [tooltip]=\"'CHECK SA AVAILIBLITY'\" (onClick)=\"checkAvailiblity()\"></amexio-button>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-ee-week-daytime-availiblity [height]=\"'200px'\" [date]=\"serviceModel.appointmentDate\" [start-time]=\"serviceModel.appointmentTime\" [end-time]=\"endTime\" [available-slots]=\"availableslots\" (onSelection)=\"onSelection($event)\"></amexio-ee-week-daytime-availiblity>\n            </amexio-column>\n        </amexio-row>\n\n    </amexio-layout-item>\n    <amexio-layout-item [fit]=\"true\">\n        <amexio-google-map [initial-zoom-level]=\"2\" [height]=\"'100%'\" [data]=\"serviceStations\" (onMarkerClick)=\"onMarkerClick($event)\">\n        </amexio-google-map>\n    </amexio-layout-item>\n</amexio-layout-columns>|"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "../../node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _services_servicebooking_service_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/servicebooking/service.booking.service */ "../rina-lib/src/lib/services/servicebooking/service.booking.service.ts");
/* harmony import */ var _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/service.availiblity.model */ "../rina-lib/src/lib/model/service.availiblity.model.ts");
/* harmony import */ var _services_shared_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared/common.service */ "../rina-lib/src/lib/services/shared/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
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
    function ServiceAvailiblityComponent(sbService, commonService) {
        this.sbService = sbService;
        this.commonService = commonService;
        this.startTime = 10;
        this.endTime = 12;
        this.serviceStations = [];
        this.assitantPerson = [];
        this.availableslots = [];
        this.serviceModel = new _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_3__["ServiceAvailibilityModel"]();
        this.dummydata();
        this.addLocationsMarkers();
        this.minDate = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(new Date(), 'dd-MMM-yyyy');
    }
    ServiceAvailiblityComponent.prototype.dummydata = function () {
        this.checkAvailiblity();
    };
    ServiceAvailiblityComponent.prototype.addLocationsMarkers = function () {
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](24.4539, 54.3773, 'Abu Dhabi, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '340eb82f-2b05-401d-b6e0-1c0a60a9a273' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.204849, 55.270782, 'Dubai, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '6ac44568-fe63-4095-8b8a-423bd247cdfd' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.346254, 55.420933, 'Sharjah, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '247d8c5e-ca84-4f0a-bc99-d74928d4272d' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.405216, 55.513641, 'Ajman, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '5fa05d7a-a613-4d67-8c61-c7e55e8005d4' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.520481, 55.713390, 'Umm Al Quwain, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '64fa7c5e-ca84-4f0a-bc99-d74928d67d45' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](24.197780, 55.662610, 'Al Ain, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '247d8c5e-ca84-4f0a-bc99-d74928d4272d' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.674133, 55.980415, 'Ras Al Khaimah, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '5fa05d7a-a613-4d67-8c61-c7e55e8005d4' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.411076, 56.248226, 'Fujairah, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '56ba1f14-80e7-4b8b-b9e0-10e8c56ee24c' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.336567, 56.343262, 'Khor Fakkan, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: 'bd1d0c7a-8447-4130-bcd8-ac91df48fd43' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](24.985716, 55.027290, 'Jebel Ali, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: 'f383900b-725a-45bf-9507-93b0f2d69480' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.280210, 55.879581, 'Dhaid, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: 'f9d11a31-1fbc-4ad8-82e3-daa3a06f9087' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](24.429171, 54.618328, 'Masdar City, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '11f8da31-1fbc-4ad8-82e3-daa3a06d5601' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.050890, 56.361460, 'Kalba, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: 'db2c3c7a-8447-4130-bcd8-ac91df46f459' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](24.817209, 56.133080, 'Hatta, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '87a45c7a-8447-4130-bcd8-ac91df476f45' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.462990, 55.556070, 'Al Hamriyah, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '94f89c5e-ba78-4f0a-bc99-d74928d6db45' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.131130, 56.337971, 'Fujairah City, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: 'ab8a8c7a-8956-4130-bcd8-ac91df497f4' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](24.486910, 54.380680, 'Madinat Zayed, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '7a54cd92-59fa-4238-bdb1-c01501399011' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.540230, 56.159309, 'Dibba Al-Fujairah, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '84f7c5e-ca84-4f0a-bdb1-d74928d76b41' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.605379, 56.267281, 'Dibba Al-Hisn, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '190c6dcf-7bdd-4304-bf79-ada14dc2de90' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](31.131070, 29.826100, 'Ghayathi, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '1c906dcf-7bdd-4304-bf79-ada14dc6de20' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](24.104900, 52.724190, 'Ruwais, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '7bdd7c5e-ca84-4f0a-bc99-d74928d68d25' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](33.140670, 35.646840, 'Habshan, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '094eaa25-1c30-4d8c-bed8-deb88f8af8e3' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](24.453860, 54.372400, 'Mussafah, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '490eaa25-ca84-4f0a-bc99-d74928ddeb88' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.634740, 56.009530, 'Khatt, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '290bc5e-ca84-4f0a-bc99-d74928deb889' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](25.270890, 55.872500, 'Adh Dhayd, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '9f7bef2d-2975-4f0a-8370-3f78be7cccf6' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](39.124860, -121.601290, 'Airport Road, 2nd street, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: 'bef2dc5e-ca84-4f0a-bc99-d74928d63f78' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](24.476120, 54.322230, 'Marina, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '86f34d2d-2975-4f0a-8370-3f78be7bc4879' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](24.402680, 55.796450, 'Deerfield Mall, Abu Dhabi-Dubai Road, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '1729d46c-ca84-4f0a-bc99-d78673d46a652' }));
    };
    ServiceAvailiblityComponent.prototype.checkAvailiblity = function () {
        // generate dummy data;
        var atr = [11, 12, 16, 17, 13];
        this.availableslots = [];
        this.availableslots.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AvailableSlotsModel"](new Date(this.serviceModel.appointmentDate.getTime()), atr));
    };
    ServiceAvailiblityComponent.prototype.ngOnInit = function () {
        this.initLocation();
        this.initTime();
    };
    ServiceAvailiblityComponent.prototype.onSelection = function (event) {
        console.log(event);
    };
    ServiceAvailiblityComponent.prototype.initLocation = function () {
        var _this = this;
        var response;
        this.sbService.fetchLocations().subscribe(function (resp) {
            response = resp;
        }, function (error) {
        }, function () {
            _this.serviceLocations = response;
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
    };
    ServiceAvailiblityComponent.prototype.setTime = function (event) {
        debugger;
    };
    ServiceAvailiblityComponent.prototype.onMarkerClick = function (serviceStation) {
        if (serviceStation.locationId) {
            this.serviceModel.location = serviceStation.locationId;
        }
    };
    ServiceAvailiblityComponent.prototype.onLocationClick = function (data) {
        this.initSA(data.primaryKey);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('start-time'),
        __metadata("design:type", Number)
    ], ServiceAvailiblityComponent.prototype, "startTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('end-time'),
        __metadata("design:type", Number)
    ], ServiceAvailiblityComponent.prototype, "endTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('service-model'),
        __metadata("design:type", _model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_3__["ServiceAvailibilityModel"])
    ], ServiceAvailiblityComponent.prototype, "serviceModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('is-edit-mode'),
        __metadata("design:type", Boolean)
    ], ServiceAvailiblityComponent.prototype, "isEditModel", void 0);
    ServiceAvailiblityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'service-availiblity-lib',
            template: __webpack_require__(/*! ./service.availiblity-lib.component.html */ "../rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.html")
        }),
        __metadata("design:paramtypes", [_services_servicebooking_service_booking_service__WEBPACK_IMPORTED_MODULE_2__["ServiceBookingService"], _services_shared_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], ServiceAvailiblityComponent);
    return ServiceAvailiblityComponent;
}());



/***/ }),

/***/ "../rina-lib/src/lib/model/customer.details.model.ts":
/*!***********************************************************!*\
  !*** ../rina-lib/src/lib/model/customer.details.model.ts ***!
  \***********************************************************/
/*! exports provided: CustomerDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetails", function() { return CustomerDetails; });
/**
 * Created by dattaram on 14/1/19.
 */
var CustomerDetails = /** @class */ (function () {
    function CustomerDetails() {
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
    }
    return CustomerDetails;
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
var ServiceAvailibilityModel = /** @class */ (function () {
    function ServiceAvailibilityModel() {
        this.appointmentDate = new Date();
        this.appointmentTime = 10;
    }
    return ServiceAvailibilityModel;
}());



/***/ }),

/***/ "../rina-lib/src/lib/model/vehicel.details.model.ts":
/*!**********************************************************!*\
  !*** ../rina-lib/src/lib/model/vehicel.details.model.ts ***!
  \**********************************************************/
/*! exports provided: VehicleDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetails", function() { return VehicleDetails; });
/**
 * Created by dattaram on 15/1/19.
 */
var VehicleDetails = /** @class */ (function () {
    function VehicleDetails() {
        this.vehicleImgUrl = '';
        this.modelName = '';
        this.engine = '';
        this.horsepower = '';
        this.torque = '';
        this.acceleration = '';
        this.topSpeed = '';
        this.modelYear = null;
        this.registrationNo = '';
        this.dateOfPurchase = '';
        this.purchasedFrom = '';
    }
    return VehicleDetails;
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
/* harmony import */ var _components_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/customer-details/customer.details.component */ "../rina-lib/src/lib/components/customer-details/customer.details.component.ts");


var RINA_COMPONENTS = [
    _components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_0__["ServiceAvailiblityComponent"],
    _components_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_1__["CustomerDetailsComponent"]
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var RinaLibModule = /** @class */ (function () {
    function RinaLibModule() {
    }
    RinaLibModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: _rina_lib_components__WEBPACK_IMPORTED_MODULE_1__["RINA_COMPONENTS"],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioEnterpriseModule"]
            ],
            providers: [_services_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_servicebooking_service_booking_service__WEBPACK_IMPORTED_MODULE_7__["ServiceBookingService"], _services_shared_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]],
            exports: _rina_lib_components__WEBPACK_IMPORTED_MODULE_1__["RINA_COMPONENTS"]
        })
    ], RinaLibModule);
    return RinaLibModule;
}());



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
        return this.http.fetch('http://localhost:8080/api/map/findall', 'get');
    };
    ServiceBookingService.prototype.fetchSABasedOnLocation = function (locationId) {
        return this.http.fetch('http://localhost:8080/api/serviceassitant/findall/' + locationId, 'get');
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
        var requestJson = {};
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json;charset=UTF-8');
        if (methodType === 'post') {
            return this.http.post(serviceUrl, requestJson, { headers: headers });
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
/*! exports provided: RinaLibModule, ServiceAvailiblityComponent, ServiceAvailibilityModel, CustomerDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/rina-lib.module */ "../rina-lib/src/lib/rina-lib.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RinaLibModule", function() { return _lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_0__["RinaLibModule"]; });

/* harmony import */ var _lib_components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/service-booking/service.availiblity-lib.component */ "../rina-lib/src/lib/components/service-booking/service.availiblity-lib.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailiblityComponent", function() { return _lib_components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailiblityComponent"]; });

/* harmony import */ var _lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/model/service.availiblity.model */ "../rina-lib/src/lib/model/service.availiblity.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailibilityModel", function() { return _lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_2__["ServiceAvailibilityModel"]; });

/* harmony import */ var _lib_model_customer_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/model/customer.details.model */ "../rina-lib/src/lib/model/customer.details.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerDetails", function() { return _lib_model_customer_details_model__WEBPACK_IMPORTED_MODULE_3__["CustomerDetails"]; });

/*
 * Public API Surface of rina-lib
 */






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
/* harmony import */ var _rina_home_Dyanmictab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rina-home/Dyanmictab.component */ "./src/app/rina-home/Dyanmictab.component.ts");
/* harmony import */ var _feature_component_vehicle_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feature-component/vehicle.details.component */ "./src/app/feature-component/vehicle.details.component.ts");
/* harmony import */ var _feature_component_company_logo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feature-component/company.logo.component */ "./src/app/feature-component/company.logo.component.ts");
/* harmony import */ var _feature_component_searchbox_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./feature-component/searchbox.component */ "./src/app/feature-component/searchbox.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _rina_home_rina_home_component__WEBPACK_IMPORTED_MODULE_3__["RinaHomeComponent"],
                _rina_home_Dyanmictab_component__WEBPACK_IMPORTED_MODULE_9__["DynamicTabComponent"], _feature_component_vehicle_details_component__WEBPACK_IMPORTED_MODULE_10__["VehicleDetailsComponent"], _feature_component_company_logo_component__WEBPACK_IMPORTED_MODULE_11__["CompanyLogoComponent"],
                _feature_component_searchbox_component__WEBPACK_IMPORTED_MODULE_12__["SearchBoxComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _rina_lib_src_lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_8__["RinaLibModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"]
            ],
            entryComponents: [_rina_home_Dyanmictab_component__WEBPACK_IMPORTED_MODULE_9__["DynamicTabComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/feature-component/company.logo.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/feature-component/company.logo.component.ts ***!
  \*************************************************************/
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
            template: "\n \n        <amexio-row>\n          <amexio-column [size]=\"3\">\n          </amexio-column>\n          <amexio-column [size]=\"6\">\n            <amexio-image\n              [width]=\"'100px'\"\n              [height]=\"'120px'\"\n              [path]=\"'assets/images/logo.jpg'\"\n              [filter]=\"'normal'\">\n            </amexio-image>\n          </amexio-column>\n          <amexio-column [size]=\"3\">\n\n          </amexio-column>\n        </amexio-row>\n\n        <amexio-row>\n          <amexio-column [size]=\"3\">\n            <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-volume-control-phone'\" [type]=\"'theme-color'\"></amexio-floating-button>\n          </amexio-column>\n          <amexio-column [size]=\"3\">\n            <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-phone'\" [type]=\"'green'\"></amexio-floating-button>\n\n          </amexio-column>\n\n          <amexio-column [size]=\"3\">\n            <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-pause'\" [type]=\"'yellow'\"></amexio-floating-button>\n\n          </amexio-column>\n          <amexio-column [size]=\"3\">\n            <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-phone-square'\" [type]=\"'red'\"></amexio-floating-button>\n\n          </amexio-column>\n\n        </amexio-row>\n    \n  "
        }),
        __metadata("design:paramtypes", [])
    ], CompanyLogoComponent);
    return CompanyLogoComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/searchbox.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/feature-component/searchbox.component.ts ***!
  \**********************************************************/
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
        this.selectedOption = '';
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropDownItemList = [
            {
                'key': 'Customer ID',
                'id': 1
            },
            {
                'key': 'Mobile Number',
                'id': 2
            },
            {
                'key': 'Advanced Search',
                'id': 3
            }
        ];
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        this.showList(this.showDropdown);
    };
    SearchBoxComponent.prototype.focusHandle = function (event) {
        this.showList(true);
    };
    SearchBoxComponent.prototype.iconHandle = function (event) {
        this.showDropdown = !this.showDropdown;
        this.showList(this.showDropdown);
    };
    SearchBoxComponent.prototype.blurHandle = function (event) {
        this.showList(false);
    };
    SearchBoxComponent.prototype.liClickHandle = function (item) {
        this.selectedOption = item.key;
        this.showList(false);
        this.onSelect.emit(item);
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
    ], SearchBoxComponent.prototype, "onSelect", void 0);
    SearchBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-box',
            template: "\n    <div class=\"inputgroup\" #rootDiv>\n      <input\n        id=\"input\"\n        role=\"combobox\"\n        name=\"searchbox\"\n        [(ngModel)]=\"selectedOption\"\n        type=\"text\" class=\"input-control\"\n        (focus)=\"focusHandle($event)\"\n        (blur)=\"blurHandle($event)\"\n        [attr.placeholder]=\"'search'\"/>\n      <span class=\"drodown-caret-down\" (click)=\"iconHandle($event)\" style=\"cursor: pointer\">\n      <i class=\"fa fa-search\"></i>\n      </span>\n      <span #dropdownitems  class=\"dropdown\"  [ngStyle]=\"dropdownstyle\">\n          <ul class=\"dropdown-list\">\n            <li (mousedown)=\"liClickHandle(item)\"  role=\"option\"  class=\"list-items\" *ngFor=\"let item of dropDownItemList\">{{item.key}}</li>\n          </ul>\n        </span>\n    </div>\n  <br>\n\n  "
        }),
        __metadata("design:paramtypes", [])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./src/app/feature-component/vehicle.details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/feature-component/vehicle.details.component.ts ***!
  \****************************************************************/
/*! exports provided: VehicleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetailsComponent", function() { return VehicleDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rina_lib_src_lib_model_vehicel_details_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../rina-lib/src/lib/model/vehicel.details.model */ "../rina-lib/src/lib/model/vehicel.details.model.ts");
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
    }
    VehicleDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('vehicle-model'),
        __metadata("design:type", _rina_lib_src_lib_model_vehicel_details_model__WEBPACK_IMPORTED_MODULE_1__["VehicleDetails"])
    ], VehicleDetailsComponent.prototype, "vehicleModel", void 0);
    VehicleDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vehicle-details',
            template: "    \n    \n    <amexio-row>\n      <amexio-column >\n        <amexio-image [height]=\"'250px'\" [path]=\"vehicleModel.vehicleImgUrl\"></amexio-image><br>\n        <amexio-label>{{vehicleModel.modelName}}</amexio-label>\n      </amexio-column>\n      <amexio-column [size]=\"6\">\n        <table>\n          <tr>\n            <td>Engine</td>\n            <td>{{vehicleModel.engine}}</td>\n          </tr>\n          <tr>\n            <td>Horsepower</td>\n            <td>{{vehicleModel.horsepower}}</td>\n          </tr>\n          <tr>\n            <td>Torque rpm</td>\n            <td>{{vehicleModel.torque}}</td>\n          </tr>\n\n          <tr>\n            <td>Acceleration</td>\n            <td>{{vehicleModel.acceleration}}</td>\n          </tr>\n          <tr>\n            <td>Top Speed</td>\n            <td>{{vehicleModel.topSpeed}}</td>\n          </tr>\n          <tr>\n            <td>Model Year</td>\n            <td>{{vehicleModel.modelYear}}</td>\n          </tr>\n\n\n          <tr>\n            <td>Registration No</td>\n            <td>{{vehicleModel.registrationNo}}</td>\n          </tr>\n          <tr>\n            <td>Date of Purchase</td>\n            <td>{{vehicleModel.dateOfPurchase}}</td>\n          </tr>\n          <tr>\n            <td>Purchased from</td>\n            <td>{{vehicleModel.purchasedFrom}}</td>\n          </tr>\n        </table>\n      </amexio-column>\n    </amexio-row>\n  \n  "
        }),
        __metadata("design:paramtypes", [])
    ], VehicleDetailsComponent);
    return VehicleDetailsComponent;
}());



/***/ }),

/***/ "./src/app/rina-home/Dyanmictab.component.ts":
/*!***************************************************!*\
  !*** ./src/app/rina-home/Dyanmictab.component.ts ***!
  \***************************************************/
/*! exports provided: DynamicTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicTabComponent", function() { return DynamicTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/rina-lib/src/public_api */ "../rina-lib/src/public_api.ts");
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


var DynamicTabComponent = /** @class */ (function () {
    function DynamicTabComponent() {
        this.serviceModel = new projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"]();
    }
    DynamicTabComponent.prototype.ngOnInit = function () {
    };
    DynamicTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dyanmic-tab-component',
            template: "\n    <amexio-card [header]=\"false\"\n                 [footer]=\"true\"\n                 [body-height]=\"34\">\n      <amexio-body>\n    <service-availiblity-lib [service-model]=\"serviceModel\" [start-time]=\"10\" [end-time]=\"15\"></service-availiblity-lib>\n      </amexio-body>\n      <amexio-action>\n          <!--  <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Proceed to personal profile'\" [size]=\"'default'\" (onClick)=\"backClick($event)\">\n            </amexio-button>-->\n            <amexio-button [label]=\"'Schedule'\" [type]=\"'theme-color'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'default'\" (onClick)=\"scheduleAppointment($event)\">\n            </amexio-button>\n      </amexio-action>\n    </amexio-card>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], DynamicTabComponent);
    return DynamicTabComponent;
}());



/***/ }),

/***/ "./src/app/rina-home/rina-home.component.html":
/*!****************************************************!*\
  !*** ./src/app/rina-home/rina-home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <amexio-layout-grid [layout]=\"'rinahomepage'\">\n   <amexio-grid-item [name]=\"'logoposition'\">\n     <company-logo></company-logo>\n   </amexio-grid-item>\n   <amexio-grid-item  [name]=\"'topslot2'\">\n     <amexio-card [header]=\"false\"\n                  [footer]=\"false\">\n       <amexio-body>\n         <customer-details [customer-model]=\"customerDetails\"></customer-details>\n       </amexio-body>\n     </amexio-card>\n   </amexio-grid-item>\n   <amexio-grid-item  [name]=\"'topslot3'\">\n       <amexio-card [header]=\"false\"\n                    [footer]=\"false\">\n         <amexio-body>\n\n             <table>\n               <tr>\n                 <td>BU</td>\n                 <td>Emirates Motor Company</td>\n               </tr>\n               <tr>\n                 <td>Vehicle</td>\n                 <td>E 450 4MATIC</td>\n               </tr>\n               <tr>\n                 <td>Date of Purchase</td>\n                 <td>February 24, 2018</td>\n               </tr>\n\n               <tr>\n                 <td>Model Year</td>\n                 <td>2018</td>\n               </tr>\n               <tr>\n                 <td>Registration No</td>\n                 <td>F 651982</td>\n               </tr>\n               <tr>\n                 <td>Customer Class</td>\n                 <td>Premium</td>\n               </tr>\n\n               <tr>\n                 <td>Preferred Mode of Contact</td>\n                 <td>Phone</td>\n               </tr>\n\n\n             </table>\n         </amexio-body>\n       </amexio-card>\n   </amexio-grid-item>\n   <amexio-grid-item  [name]=\"'topslot4'\">\n           <amexio-card [header]=\"false\"\n                        [footer]=\"false\">\n             <amexio-body>\n               <table>\n                 <tr>\n                   <td>Last Service</td>\n                   <td>Oct 12, 2018</td>\n                 </tr>\n                 <tr>\n                   <td>Next Service</td>\n                   <td>March 12, 2019</td>\n                 </tr>\n                 <tr>\n                   <td>Open SRs</td>\n                   <td></td>\n                 </tr>\n\n\n               </table>\n             </amexio-body>\n           </amexio-card>\n   </amexio-grid-item>\n   <amexio-grid-item  [name]=\"'guages'\">\n\n         <amexio-image\n           [path]=\"'assets/images/speed.png'\"\n           [filter]=\"'normal'\">\n         </amexio-image>\n   </amexio-grid-item>\n\n   <amexio-grid-item  [name]=\"'rinasidemenu'\">\n     <amexio-card [header]=\"false\"\n                  [footer]=\"true\"\n                  [footer-align]=\"'center'\">\n       <amexio-header>\n       <div>\n       <input type=\"text\" placeholder=\"Search..\" name=\"search\">\n       <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\n     </div>\n     </amexio-header>\n       <amexio-body>\n         <search-box></search-box>\n         <ng-container *ngFor=\"let service of serviceList\">\n           <amexio-button [label]=\"service.serviceName\"\n                          [type]=\"'theme-color'\"\n                          (onClick)=\"addServiceBookingTab(service)\"\n                          [tooltip]=\"'large'\"\n                          [block]=\"true\">\n           </amexio-button><br>\n         </ng-container>\n       </amexio-body>\n       <amexio-action>\n         <amexio-row>\n           <amexio-column [size]=\"4\">\n             <amexio-image style=\"color: blue\" [icon-class]=\"'fa fa-file-pdf-o fa-2x'\" ></amexio-image>\n           </amexio-column>\n           <amexio-column [size]=\"4\">\n             <amexio-image [icon-class]=\"'fa fa-file-word-o fa-2x'\" ></amexio-image>\n           </amexio-column>\n           <amexio-column [size]=\"4\">\n             <amexio-image style=\"color: green\" [icon-class]=\"'fa fa-file-excel-o fa-2x'\" ></amexio-image>\n           </amexio-column>\n         </amexio-row>\n       </amexio-action>\n     </amexio-card>\n   </amexio-grid-item>\n   <amexio-grid-item  [name]=\"'rinasidecenter'\">\n     <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'vertical'\" [alignment]=\"'space-between'\">\n       <amexio-layout-item [padding]=\"false\" [fit]=\"true\">\n         <amexio-card [header]=\"false\"\n                      [footer]=\"false\">\n           <amexio-body>\n             <amexio-tab-view #tab  [closable]=\"false\">\n               <amexio-tab title=\"VEHICLE DETAILS\" [active]=\"true\">\n                 <ng-container *ngIf=\"vehicleDetails\">\n                         <vehicle-details [vehicle-model]=\"vehicleDetails\"></vehicle-details>\n                 </ng-container>\n               </amexio-tab>\n               <amexio-tab title=\"BOOKING DETAILS\">\n                 <amexio-datagrid  [http-method]=\"'get'\"\n                                   [http-url]=\"'/assets/dummygrid.json'\" [data-reader]=\"'data'\" [page-size]=\"10\">\n\n                   <amexio-data-table-column [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\" [text]=\"'Awaiting Details'\">\n                   </amexio-data-table-column>\n                   <amexio-data-table-column [sort]=\"false\" [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\"\n                                             [text]=\"'Awaiting Details'\"></amexio-data-table-column>\n                   <amexio-data-table-column [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Awaiting Details'\">\n\n                   </amexio-data-table-column>\n                 </amexio-datagrid>\n               </amexio-tab>\n               <amexio-tab title=\"SERVICE HISTORY\">\n                 <amexio-datagrid  [http-method]=\"'get'\"\n                                   [http-url]=\"'/assets/dummygrid.json'\" [data-reader]=\"'data'\" [page-size]=\"10\">\n\n                   <amexio-data-table-column [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\" [text]=\"'Awaiting Details'\">\n                   </amexio-data-table-column>\n                   <amexio-data-table-column [sort]=\"false\" [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\"\n                                             [text]=\"'Awaiting Details'\"></amexio-data-table-column>\n                   <amexio-data-table-column [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Awaiting Details'\">\n\n                   </amexio-data-table-column>\n                 </amexio-datagrid>\n               </amexio-tab>\n               <amexio-tab title=\"INTERACTION HISTORY\">\n                 <amexio-datagrid  [http-method]=\"'get'\"\n                                   [http-url]=\"'/assets/dummygrid.json'\" [data-reader]=\"'data'\" [page-size]=\"10\">\n\n                   <amexio-data-table-column [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\" [text]=\"'Awaiting Details'\">\n                   </amexio-data-table-column>\n                   <amexio-data-table-column [sort]=\"false\" [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\"\n                                             [text]=\"'Awaiting Details'\"></amexio-data-table-column>\n                   <amexio-data-table-column [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Awaiting Details'\">\n\n                   </amexio-data-table-column>\n                 </amexio-datagrid>\n               </amexio-tab>\n               <amexio-tab title=\"RIGHT SELL\">\n                 <amexio-datagrid  [http-method]=\"'get'\"\n                                   [http-url]=\"'/assets/dummygrid.json'\" [data-reader]=\"'data'\" [page-size]=\"10\">\n\n                   <amexio-data-table-column [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\" [text]=\"'Awaiting Details'\">\n                   </amexio-data-table-column>\n                   <amexio-data-table-column [sort]=\"false\" [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\"\n                                             [text]=\"'Awaiting Details'\"></amexio-data-table-column>\n                   <amexio-data-table-column [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\" [hidden]=\"false\" [text]=\"'Awaiting Details'\">\n\n                   </amexio-data-table-column>\n                 </amexio-datagrid>\n               </amexio-tab>\n             </amexio-tab-view>\n           </amexio-body>\n         </amexio-card>\n       </amexio-layout-item>\n       <amexio-layout-item [padding]=\"false\">\n         <amexio-checkbox-group\n           [data-reader]=\"'data'\"\n           [display-field]=\"'serviceType'\"\n           [value-field]=\"'serviceType'\"\n           [horizontal]=\"true\"\n           [http-method]=\"'get'\"\n           [http-url]=\"'assets/serviceType.json'\">\n         </amexio-checkbox-group>\n\n         <amexio-layout-columns [fit]=\"true\" [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'space-between'\">\n           <amexio-layout-item [fit]=\"true\" >\n             <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'space-between'\">\n               <amexio-layout-item >\n             <amexio-text-input\n               place-holder=\"Call Remark\"\n               [allow-blank]=\"true\"\n               has-label=\"false\">\n             </amexio-text-input>\n               </amexio-layout-item>\n             </amexio-layout-columns>\n           </amexio-layout-item>\n           <amexio-layout-item  >\n             <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'end'\">\n               <amexio-layout-item >\n               <amexio-button [size]=\"'medium'\" [label]=\"'Submit'\" [type]=\"'theme-color'\"  [tooltip]=\"'submit'\">\n           </amexio-button>\n               </amexio-layout-item>\n             </amexio-layout-columns>\n           </amexio-layout-item>\n         </amexio-layout-columns>\n       </amexio-layout-item>\n     </amexio-layout-columns>\n   </amexio-grid-item>\n   <amexio-grid-item  [name]=\"'rinasidesearch'\">\n     <amexio-card [header]=\"false\"\n                  [footer]=\"false\">\n       <amexio-body>\n         <amexio-dropdown\n           [place-holder]=\"'Select Script'\"\n           [display-field]=\"'scriptName'\"\n           [data-reader]=\"'data'\"\n           [value-field]=\"'scriptUrl'\"\n           [http-method]=\"'get'\"\n           [http-url]=\"'/assets/script.json'\"\n           [enable-sort]=\"true\"\n           [sort]=\"'asc'\">\n         </amexio-dropdown>\n       </amexio-body>\n     </amexio-card>\n   </amexio-grid-item>\n </amexio-layout-grid>\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rina_lib_src_lib_model_customer_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../rina-lib/src/lib/model/customer.details.model */ "../rina-lib/src/lib/model/customer.details.model.ts");
/* harmony import */ var _Dyanmictab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dyanmictab.component */ "./src/app/rina-home/Dyanmictab.component.ts");
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





var RinaHomeComponent = /** @class */ (function () {
    function RinaHomeComponent(_httpClient, _gridlayoutService) {
        this._httpClient = _httpClient;
        this._gridlayoutService = _gridlayoutService;
        this.serviceList = [];
        this.customerDetails = new _rina_lib_src_lib_model_customer_details_model__WEBPACK_IMPORTED_MODULE_3__["CustomerDetails"]();
        this.createLayouts();
        this._gridlayoutService.createLayout(this.rinaHomeDesktopLayout);
    }
    RinaHomeComponent.prototype.ngOnInit = function () {
        this.getServiceList();
        this.getCustomerDetails();
        this.getVehicleDetails();
    };
    RinaHomeComponent.prototype.getServiceList = function () {
        var _this = this;
        this._httpClient.get('assets/serviceList.json').subscribe(function (res) {
            _this.serviceList = res.data;
        });
    };
    RinaHomeComponent.prototype.getCustomerDetails = function () {
        var _this = this;
        this._httpClient.get('assets/customerDetails.json').subscribe(function (res) {
            _this.customerDetails = res.data;
        });
    };
    RinaHomeComponent.prototype.getVehicleDetails = function () {
        var _this = this;
        this._httpClient.get('assets/vehicleDetails.json').subscribe(function (res) {
            _this.vehicleDetails = res.data;
        });
    };
    RinaHomeComponent.prototype.createLayouts = function () {
        this.rinaHomeDesktopLayout = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConfig"]('rinahomepage', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConstants"].Desktop)
            .addlayout(['logoposition', 'topslot2', 'topslot3', 'topslot4', 'guages'])
            .addlayout(['rinasidemenu', 'rinasidecenter', 'rinasidecenter', 'rinasidecenter', 'rinasidesearch']);
    };
    RinaHomeComponent.prototype.addServiceBookingTab = function (event) {
        if (!this.tabRef.setActiveTab('SERVICE BOOKING') && event.serviceName === 'SERVICE BOOKING') {
            this.tabRef.closeAllTabs();
            var cmp = this.tabRef.addDynamicTab('SERVICE BOOKING', ' ', false, _Dyanmictab_component__WEBPACK_IMPORTED_MODULE_4__["DynamicTabComponent"]);
        }
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioGridLayoutService"]])
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

module.exports = __webpack_require__(/*! /home/dattaram/metamagic/POC/gic-rina/projects/rinaccm/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map