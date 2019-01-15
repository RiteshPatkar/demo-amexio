(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../src/app/app-routing.module.ts":
/*!****************************************************************************!*\
  !*** /home/sagar/sagar/UI_Work/poc/gic-rina/src/app/app-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

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

module.exports = "<amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'space-between'\">\n    <amexio-layout-item>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-dropdown [(ngModel)]=\"serviceModel.location\" [place-holder]=\"'Select Location'\" name=\"location\" [field-label]=\"'Select Location'\" [data]=\"serviceLocations\" [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\" (onSingleSelect)=\"onLocationClick($event)\">\n                </amexio-dropdown>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=9>\n                <amexio-date-time-picker [field-label]=\"'Select Date'\" [min-date]=\"minDate\" [time-picker]=\"false\" [date-picker]=\"true\" name=\"appointmentDate\" [min-date]=\"todayDate\" [(ngModel)]=\"serviceModel.appointmentDate\">\n                </amexio-date-time-picker>\n            </amexio-column>\n            <amexio-column [size]=3>\n                <amexio-dropdown [(ngModel)]=\"serviceModel.appointmentTime\" (onSingleSelect)=\"setTime($event)\" [place-holder]=\"'Select Time'\" name=\"appointmentTime\" [field-label]=\"'Select time'\" [data]=\"timeSlots\" [display-field]=\"'time'\" [value-field]=\"'timeId'\">\n                </amexio-dropdown>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-dropdown [(ngModel)]=\"serviceModel.assitantPerson\" [place-holder]=\"'Select SA'\" name=\"assitantPerson\" [field-label]=\"'Service Assistant (SA)'\" [data]=\"assitantPerson\" [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\">\n                </amexio-dropdown>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-button [label]=\"'CHECK SA AVAILIBLITY'\" [type]=\"'theme-color'\" [tooltip]=\"'CHECK SA AVAILIBLITY'\" (onClick)=\"checkAvailiblity()\"></amexio-button>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-ee-appointment [height]=\"'200px'\" [date]=\"serviceModel.appointmentDate\" [start-time]=\"serviceModel.appointmentTime\" [end-time]=\"endTime\" [available-slots]=\"availableslots\" (onSelection)=\"onSelection($event)\"></amexio-ee-appointment>\n            </amexio-column>\n        </amexio-row>\n\n    </amexio-layout-item>\n    <amexio-layout-item [fit]=\"true\">\n        <amexio-google-map [initial-zoom-level]=\"5\" [height]=\"'100%'\" [initial-lat]=\"24.453884\" [initial-lng]=\"54.377342\" [data]=\"serviceStations\" (onMarkerClick)=\"onMarkerClick($event)\">\n        </amexio-google-map>\n    </amexio-layout-item>\n</amexio-layout-columns>|"

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
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](24.4563106, 54.3659147, 'Airport Road, 2nd street, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: 'bef2dc5e-ca84-4f0a-bc99-d74928d63f78' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](24.476120, 54.322230, 'Marina, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '86f34d2d-2975-4f0a-8370-3f78be7bc4879' }));
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GoogleMapOverlays"](24.402680, 55.796450, 'Deerfield Mall, Abu Dhabi-Dubai Road, UAE', true, null, { country: 'United Arab Emirates', capital: 'Abu Dhabi', locationId: '1729d46c-ca84-4f0a-bc99-d78673d46a652' }));
    };
    ServiceAvailiblityComponent.prototype.checkAvailiblity = function () {
        // generate dummy data;
        var atr = [10, 12, 16, 17, 13];
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
            this.initSA(this.serviceModel.location);
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
        return this.http.fetch(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'map/findall', 'get');
    };
    ServiceBookingService.prototype.fetchSABasedOnLocation = function (locationId) {
        return this.http.fetch(_service_constant__WEBPACK_IMPORTED_MODULE_2__["SERVICE_URL"].BASE_APP_URL + 'serviceassitant/findall/' + locationId, 'get');
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hbGZhaGltL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-floating-button [vertical-position]=\"'bottom'\" [horizontal-position]=\"'right'\" (onClick)=\"onClick()\" [label]=\"'Book Service'\" [icon]=\"'fa fa-user'\" [type]=\"'theme-color'\">\n</amexio-floating-button>\n\n\n<personal-details *ngIf=\"(currentstep === 1)\" (onNext)=\"proceedToPreferredLocation($event)\" (onClose)=\"onCloseClick($event)\"></personal-details>\n<alfahim-preferred-location *ngIf=\"(currentstep === 2)\" (onNext)=\"scheduleAppointment($event)\" (onPrevious)=\"onPrevious($event)\"></alfahim-preferred-location>\n<service-confirmation *ngIf=\"(currentstep === 3)\" (onPrevious)=\"onServiceConfirmPrevious($event)\">\n</service-confirmation>"

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
/* harmony import */ var _services_personal_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/personal.details.service */ "./src/app/services/personal.details.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/rina-lib/src/public_api */ "../rina-lib/src/public_api.ts");
/* harmony import */ var _services_window_toggle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/window.toggle.service */ "./src/app/services/window.toggle.service.ts");
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
        this.title = 'Alfahim';
        this.serviceModel = new projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ServiceAvailibilityModel"]();
    }
    AppComponent.prototype.onClick = function () {
        this.currentstep = this.windowTService.getNextWindow(0);
    };
    AppComponent.prototype.proceedToPreferredLocation = function (personalDetails) {
        debugger;
        this.currentstep = this.windowTService.getNextWindow(1);
    };
    AppComponent.prototype.scheduleAppointment = function (serviceModel) {
        debugger;
        this.personalDetailsService.setPeferredLocation(serviceModel);
        this.currentstep = this.windowTService.getNextWindow(2);
    };
    AppComponent.prototype.onPrevious = function (event) {
        this.currentstep = this.windowTService.getPreviousWindow(2);
    };
    AppComponent.prototype.onServiceConfirmPrevious = function (event) {
        this.currentstep = this.windowTService.getPreviousWindow(3);
    };
    AppComponent.prototype.onCloseClick = function (event) {
        this.currentstep = -1;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_window_toggle_service__WEBPACK_IMPORTED_MODULE_3__["WindowToogleService"], _services_personal_details_service__WEBPACK_IMPORTED_MODULE_0__["PersonalDetailsService"]])
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
/* harmony import */ var _personaldetails_personal_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personaldetails/personal.detail */ "./src/app/personaldetails/personal.detail.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/rina-lib/src/public_api */ "../rina-lib/src/public_api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app-routing.module */ "../../src/app/app-routing.module.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! amexio-ng-extensions */ "../../node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _preferred_location_preferred_location__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preferred-location/preferred.location */ "./src/app/preferred-location/preferred.location.ts");
/* harmony import */ var _confirmation_service_confirmation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./confirmation/service.confirmation */ "./src/app/confirmation/service.confirmation.ts");
/* harmony import */ var _services_window_toggle_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/window.toggle.service */ "./src/app/services/window.toggle.service.ts");
/* harmony import */ var _services_personal_details_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/personal.details.service */ "./src/app/services/personal.details.service.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _personaldetails_personal_detail__WEBPACK_IMPORTED_MODULE_0__["PersonalDetailsComponent"],
                _preferred_location_preferred_location__WEBPACK_IMPORTED_MODULE_10__["PreferredLocationComponent"],
                _confirmation_service_confirmation__WEBPACK_IMPORTED_MODULE_11__["ServiceConfirmationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_6__["RinaLibModule"],
                src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_9__["AmexioWidgetModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_9__["AmexioEnterpriseModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            providers: [_services_window_toggle_service__WEBPACK_IMPORTED_MODULE_12__["WindowToogleService"], _services_personal_details_service__WEBPACK_IMPORTED_MODULE_13__["PersonalDetailsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/confirmation/service.confirmation.html":
/*!********************************************************!*\
  !*** ./src/app/confirmation/service.confirmation.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-window class=\"serviceconfirmation\" [(show)]=\"showWindow\" type=\"window\" [header]=\"false\" [footer]=\"false\" [closable]=\"false\">\n    <amexio-body>\n        <div class=\"adjustbody\">\n            <amexio-label size=\"medium-bold\">CONFIRMATION</amexio-label>\n\n            <amexio-layout-columns *ngIf=\"!showConfirmation;else elseblock\" [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'space-between'\">\n                <amexio-layout-item>\n\n                    <amexio-row>\n                        <amexio-column [size]=12>\n                            <amexio-dropdown [(ngModel)]=\"serviceModel.location\" [disabled]=\"true\" [place-holder]=\"'Location'\" name=\"location\" [field-label]=\"'Location'\" [data]=\"serviceLocations\" [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\">\n                            </amexio-dropdown>\n                        </amexio-column>\n                    </amexio-row>\n                    <amexio-row>\n                        <amexio-column [size]=6>\n                            <amexio-date-time-picker [field-label]=\"'Date'\" [disabled]=\"true\" [time-picker]=\"false\" [date-picker]=\"true\" name=\"appointmentDate\" [(ngModel)]=\"serviceModel.appointmentDate\">\n                            </amexio-date-time-picker>\n                        </amexio-column>\n                        <amexio-column [size]=6>\n                            <amexio-dropdown [(ngModel)]=\"serviceModel.appointmentTime\" [disabled]=\"true\" (onSingleSelect)=\"setTime($event)\" [place-holder]=\"'Time'\" name=\"appointmentTime\" [field-label]=\"'Time'\" [data]=\"timeSlots\" [display-field]=\"'time'\" [value-field]=\"'timeId'\">\n                            </amexio-dropdown>\n                        </amexio-column>\n                    </amexio-row>s\n                    <amexio-row>\n                        <amexio-column [size]=9>\n                            <amexio-dropdown [(ngModel)]=\"serviceModel.assitantPerson\" [disabled]=\"true\" [place-holder]=\"'Service Assistant (SA)'\" name=\"assitantPerson\" [field-label]=\"'Service Assistant (SA)'\" [data]=\"assitantPerson\" [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\">\n                            </amexio-dropdown>\n                        </amexio-column>\n                        <amexio-column [size]=3>\n                            <amexio-label size=\"small-bold\" style=\"color:green\">Available</amexio-label>\n                        </amexio-column>\n                    </amexio-row>\n                    <amexio-row>\n                        <amexio-column [size]=12>\n                            <amexio-toolbar>\n                                <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n                                    <amexio-button [label]=\"'Back'\" (onClick)=\"onBackClick($event)\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\">\n                                    </amexio-button>\n                                </amexio-toolbar-item>\n                                <amexio-toolbar-item position-right>\n                                    <amexio-button [label]=\"'Confirm'\" [type]=\"'theme-color'\" [tooltip]=\"'Confirm'\" [size]=\"'large'\" (onClick)=\"confirmAppointment($event)\">\n                                    </amexio-button>\n                                </amexio-toolbar-item>\n                            </amexio-toolbar>\n                        </amexio-column>\n                    </amexio-row>\n                </amexio-layout-item>\n            </amexio-layout-columns>\n\n            <ng-template #elseblock>\n                <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'space-between'\">\n                    <amexio-layout-item>\n                        <amexio-label size=\"medium-bold\">Thank You!</amexio-label> <br /><br />\n                        <amexio-label>Your service has been booked on {{serviceModel.appointmentDate | date:'MMM dd, yyyy'}} at 2PM</amexio-label><br /><br />\n                        <amexio-label>Service Location:</amexio-label><br />\n                        <amexio-label>Emirates Motor Company</amexio-label><br />\n                        <amexio-label>M5, intersection, 17th Street</amexio-label><br />\n                        <amexio-label>Phone: +91.0987654321</amexio-label><br /><br />\n                        <amexio-toolbar>\n                            <amexio-toolbar-item position-right>\n                                <amexio-button [label]=\"'Close'\" [type]=\"'theme-color'\" [tooltip]=\"'Close'\" [size]=\"'large'\" (onClick)=\"close($event)\">\n                                </amexio-button>\n                            </amexio-toolbar-item>\n                        </amexio-toolbar>\n\n                    </amexio-layout-item>\n                </amexio-layout-columns>\n\n            </ng-template>\n        </div>\n    </amexio-body>\n</amexio-window>"

/***/ }),

/***/ "./src/app/confirmation/service.confirmation.ts":
/*!******************************************************!*\
  !*** ./src/app/confirmation/service.confirmation.ts ***!
  \******************************************************/
/*! exports provided: ServiceConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceConfirmationComponent", function() { return ServiceConfirmationComponent; });
/* harmony import */ var projects_alfahim_src_app_services_personal_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/alfahim/src/app/services/personal.details.service */ "./src/app/services/personal.details.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/rina-lib/src/public_api */ "../rina-lib/src/public_api.ts");
/* harmony import */ var _services_window_toggle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/window.toggle.service */ "./src/app/services/window.toggle.service.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "../../node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
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
    function ServiceConfirmationComponent(windowTService, personalDetailsService) {
        this.windowTService = windowTService;
        this.personalDetailsService = personalDetailsService;
        this.showWindow = true;
        this.showConfirmation = false;
        this.onPrevious = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serviceModel = new projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ServiceAvailibilityModel"]();
        this.serviceLocations = [];
        this.timeSlots = [];
        this.assitantPerson = [];
        debugger;
        this.serviceModel = this.personalDetailsService.getPeferredLocation();
        this.loadData();
    }
    ServiceConfirmationComponent.prototype.confirmAppointment = function (personalDetails) {
        debugger;
        this.showConfirmation = true;
        console.log(this.personalDetailsService.getPersonalDetails());
    };
    ServiceConfirmationComponent.prototype.onBackClick = function (event) {
        this.onPrevious.emit(event);
    };
    ServiceConfirmationComponent.prototype.close = function (event) {
        this.showWindow = false;
    };
    ServiceConfirmationComponent.prototype.loadData = function () {
        this.loadLocations();
        this.loadAssitants();
        this.loadWorkingSlots();
    };
    ServiceConfirmationComponent.prototype.loadWorkingSlots = function () {
        this.timeSlots = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["TimeUtil"]().workingslot1();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ServiceConfirmationComponent.prototype, "onPrevious", void 0);
    ServiceConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'service-confirmation',
            template: __webpack_require__(/*! ./service.confirmation.html */ "./src/app/confirmation/service.confirmation.html")
        }),
        __metadata("design:paramtypes", [_services_window_toggle_service__WEBPACK_IMPORTED_MODULE_3__["WindowToogleService"], projects_alfahim_src_app_services_personal_details_service__WEBPACK_IMPORTED_MODULE_0__["PersonalDetailsService"]])
    ], ServiceConfirmationComponent);
    return ServiceConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/models/personal.details.model.ts":
/*!**************************************************!*\
  !*** ./src/app/models/personal.details.model.ts ***!
  \**************************************************/
/*! exports provided: PersonalDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetails", function() { return PersonalDetails; });
/* harmony import */ var _vehicle_details_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle.details.model */ "./src/app/models/vehicle.details.model.ts");

var PersonalDetails = /** @class */ (function () {
    function PersonalDetails() {
        this.perferredContact = '1';
        this.vehicleDetails = new _vehicle_details_model__WEBPACK_IMPORTED_MODULE_0__["VehicleDetails"]();
    }
    return PersonalDetails;
}());



/***/ }),

/***/ "./src/app/models/vehicle.details.model.ts":
/*!*************************************************!*\
  !*** ./src/app/models/vehicle.details.model.ts ***!
  \*************************************************/
/*! exports provided: VehicleDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetails", function() { return VehicleDetails; });
var VehicleDetails = /** @class */ (function () {
    function VehicleDetails() {
    }
    return VehicleDetails;
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
/* harmony import */ var _services_personal_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/personal.details.service */ "./src/app/services/personal.details.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_personal_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/personal.details.model */ "./src/app/models/personal.details.model.ts");
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
    // vehicleDetailsGroup: FormGroup;
    function PersonalDetailsComponent(personalDetailsService, fb) {
        this.personalDetailsService = personalDetailsService;
        this.fb = fb;
        this.showWindow = true;
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.personalDetails = new _models_personal_details_model__WEBPACK_IMPORTED_MODULE_2__["PersonalDetails"]();
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
        // this.personDetailsGroup = this.fb.group({
        //   title: ['', [Validators.required]],
        //   firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        //   surName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        //   email: ['', [Validators.required, Validators.email]],
        //   phone: ['', [Validators.required]],
        //   contact: ['', [Validators.required]],
        //   vehicleDetailsGroup: new FormGroup({
        //     vehicleType: ['', [Validators.required]],
        //     modelYear: ['', [Validators.required]],
        //     presentKm: ['', [Validators.required]],
        //     registrationNumber: ['', [Validators.required]]
        //   })
        // });
        // this.vehicleDetailsGroup: this.fb.group({
        //     vehicleType: ['', [Validators.required]],
        //     modelYear: ['', [Validators.required]],
        //     presentKm: ['', [Validators.required]],
        //     registrationNumber: ['', [Validators.required]]
        //   })
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
            console.log(changes.showWindow.currentValue);
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
    PersonalDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'personal-details',
            template: __webpack_require__(/*! ./personal.details.html */ "./src/app/personaldetails/personal.details.html")
        }),
        __metadata("design:paramtypes", [_services_personal_details_service__WEBPACK_IMPORTED_MODULE_0__["PersonalDetailsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
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

module.exports = "<amexio-window class=\"person-details\" [(show)]=\"showWindow\" type=\"window\" [header]=\"false\" [footer]=\"false\" [closable]=\"false\">\n    <amexio-body>\n        <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'space-between'\">\n            <amexio-layout-item>\n                <div class=\"adjustbody\">\n                    <amexio-label size=\"medium-bold\">PERSONAL DETAILS</amexio-label>\n                    <amexio-row>\n                        <amexio-column [size]=2>\n                            <amexio-dropdown [(ngModel)]=\"title\" [search]=\"true\" name=\"title\" [(ngModel)]=\"personalDetails.title\" [place-holder]=\"'Select title'\" [field-label]=\"'Title'\" [data]=\"titles\" [value-field]=\"'primaryKey'\" [display-field]=\"'primaryDisplay'\">\n                            </amexio-dropdown>\n                        </amexio-column>\n                        <amexio-column [size]=5>\n                            <amexio-text-input [(ngModel)]=\"personalDetails.firstName\"  name=\"name\" field-label=\"Name\" place-holder=\"Name\">\n                            </amexio-text-input>\n                        </amexio-column>\n                        <amexio-column [size]=5>\n                            <amexio-text-input [(ngModel)]=\"personalDetails.surname\" name=\"surname\" field-label=\"Surname\" place-holder=\"Surname\">\n                            </amexio-text-input>\n                        </amexio-column>\n                    </amexio-row>\n\n                    <amexio-row>\n                        <amexio-column [size]=6>\n                            <amexio-email-input [(ngModel)]=\"personalDetails.email\"  name=\"email\" [field-label]=\"'Email'\" [place-holder]=\"'Email'\">\n                            </amexio-email-input>\n                        </amexio-column>\n                        <amexio-column [size]=6>\n                            <amexio-text-input [(ngModel)]=\"personalDetails.phone\"   name=\"phone\" field-label=\"Phone\" place-holder=\"phone\">\n                            </amexio-text-input>\n                        </amexio-column>\n                    </amexio-row>\n\n                    <amexio-row>\n                        <amexio-column [size]=12>\n                            <amexio-radio-group [field-label]=\"'Preferred mode of contact'\"  [(ngModel)]=\"personalDetails.perferredContact\" name=\"contactPreference\" [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\" [horizontal]=\"true\" [data]=\"preferredModeOfContacts\"\n                                (onSelection)=\"setSelectedGender($event)\">\n                            </amexio-radio-group>\n                        </amexio-column>\n                    </amexio-row>\n                    <br>\n                    <amexio-label size=\"medium-bold\">VEHICLE DETAILS</amexio-label>\n                    <amexio-row >\n                        <amexio-column [size]=6>\n                            <amexio-dropdown [(ngModel)]=\"personalDetails.vehicleDetails.vehicleType\" [search]=\"true\" name=\"vehicleType\" [place-holder]=\"'Vehicle Type'\" [field-label]=\"'Vehicle Type'\" [data]=\"vehicleTypes\" [value-field]=\"'primaryKey'\" [display-field]=\"'primaryDisplay'\">\n                            </amexio-dropdown>\n                        </amexio-column>\n                        <amexio-column [size]=6>\n                            <amexio-dropdown [(ngModel)]=\"personalDetails.vehicleDetails.modelYear\"  [search]=\"true\"  name=\"modelYear\"  [place-holder]=\"'Model Year'\" [field-label]=\"'Model Year'\" [data]=\"modelYears\" [value-field]=\"'primaryKey'\" [display-field]=\"'primaryDisplay'\">\n                            </amexio-dropdown>\n                        </amexio-column>\n                    </amexio-row>\n\n                    <amexio-row>\n                        <amexio-column [size]=6>\n                            <amexio-number-input [(ngModel)]=\"personalDetails.vehicleDetails.presentKm\"   name =\"presentKm\" [field-label]=\"'Present KM on your car'\" [place-holder]=\"'Enter KM on you car'\">\n                            </amexio-number-input>\n                        </amexio-column>\n                        <amexio-column [size]=6>\n                            <amexio-text-input [(ngModel)]=\"personalDetails.vehicleDetails.registrationNumber\"   name=\"registrationNumber\" field-label=\"Registration Plate (License Plate)\" [pattern]=\"'[0-9]'\" place-holder=\"Registration plate\">\n                            </amexio-text-input>\n                        </amexio-column>\n                    </amexio-row>\n                    <amexio-row>\n                        <amexio-column [size]=12>\n                            <amexio-toolbar>\n                                <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n                                    <amexio-button [label]=\"'Close'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"onCloseClick($event)\">\n                                    </amexio-button>\n                                </amexio-toolbar-item>\n                                <amexio-toolbar-item position-right>\n                                    <amexio-button [label]=\"'Next'\"  [type]=\"'theme-color'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"proceedToPreferredLocation($event)\">\n                                    </amexio-button>\n                                </amexio-toolbar-item>\n                            </amexio-toolbar>\n                        </amexio-column>\n                    </amexio-row>\n                </div>\n            </amexio-layout-item>\n        </amexio-layout-columns>\n    </amexio-body>\n</amexio-window>"

/***/ }),

/***/ "./src/app/preferred-location/preferred.location.html":
/*!************************************************************!*\
  !*** ./src/app/preferred-location/preferred.location.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-window class=\"preferredlocation\" [(show)]=\"showWindow\" type=\"window\" [header]=\"false\" [footer]=\"false\" [closable]=\"false\">\n    <amexio-body>\n\n        <amexio-label size=\"medium-bold\">PREFERRED LOCATION AND TIME</amexio-label>\n        <div class=\"adjustbody\">\n            <service-availiblity-lib [service-model]=\"serviceModel\" [start-time]=\"10\" [end-time]=\"15\"></service-availiblity-lib>\n        </div>\n        <amexio-toolbar>\n            <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n                <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Proceed to personal profile'\" [size]=\"'large'\" (onClick)=\"backClick($event)\">\n                </amexio-button>\n            </amexio-toolbar-item>\n            <amexio-toolbar-item position-right>\n                <amexio-button [label]=\"'Schedule'\" [type]=\"'theme-color'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"scheduleAppointment($event)\">\n                </amexio-button>\n            </amexio-toolbar-item>\n        </amexio-toolbar>\n\n    </amexio-body>\n</amexio-window>"

/***/ }),

/***/ "./src/app/preferred-location/preferred.location.ts":
/*!**********************************************************!*\
  !*** ./src/app/preferred-location/preferred.location.ts ***!
  \**********************************************************/
/*! exports provided: PreferredLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferredLocationComponent", function() { return PreferredLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/rina-lib/src/public_api */ "../rina-lib/src/public_api.ts");
/* harmony import */ var _services_window_toggle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/window.toggle.service */ "./src/app/services/window.toggle.service.ts");
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
    function PreferredLocationComponent(windownToggleService) {
        this.windownToggleService = windownToggleService;
        this.showWindow = true;
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPrevious = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.serviceModel = new projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"]();
    }
    PreferredLocationComponent.prototype.scheduleAppointment = function (event) {
        this.onNext.emit(this.serviceModel);
    };
    PreferredLocationComponent.prototype.backClick = function (event) {
        this.onPrevious.emit(event);
    };
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
            selector: 'alfahim-preferred-location',
            template: __webpack_require__(/*! ./preferred.location.html */ "./src/app/preferred-location/preferred.location.html")
        }),
        __metadata("design:paramtypes", [_services_window_toggle_service__WEBPACK_IMPORTED_MODULE_2__["WindowToogleService"]])
    ], PreferredLocationComponent);
    return PreferredLocationComponent;
}());



/***/ }),

/***/ "./src/app/services/personal.details.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/personal.details.service.ts ***!
  \******************************************************/
/*! exports provided: PersonalDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsService", function() { return PersonalDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
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
    }
    PersonalDetailsService.prototype.getTitles = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_APP_URL + 'title/findall');
    };
    PersonalDetailsService.prototype.getVehicles = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_APP_URL + 'vehicle/findall');
    };
    PersonalDetailsService.prototype.getVehicleModels = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_APP_URL + 'vehiclemodel/findall');
    };
    PersonalDetailsService.prototype.getLocations = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_APP_URL + 'map/findall');
    };
    PersonalDetailsService.prototype.getAssitantList = function (id) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_APP_URL + 'serviceassitant/findall/' + id);
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
    PersonalDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PersonalDetailsService);
    return PersonalDetailsService;
}());



/***/ }),

/***/ "./src/app/services/window.toggle.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/window.toggle.service.ts ***!
  \***************************************************/
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
    production: false,
    BASE_APP_URL: 'https://restapi.amexio.org:8991/alfahim/api/'
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