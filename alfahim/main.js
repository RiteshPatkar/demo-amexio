(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.html":
/*!***************************************************************************************!*\
  !*** ../rina-lib/src/lib/components/appointmentdetails/appointment.confirmation.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card [body-height]=\"75\" [show]=\"true\" [header]=\"false\" [footer]=\"true\">\n    <amexio-body>\n        <amexio-row>\n            <amexio-column size=\"3\"></amexio-column>\n            <amexio-column size=\"6\">\n                <amexio-label size=\"medium-bold\">Thank You</amexio-label> <br /><br />\n                <amexio-label>{{appointmentMsg}}</amexio-label><br /><br />\n                <amexio-label>Service Location:</amexio-label><br />\n                <amexio-label>Emirates Motor Company</amexio-label><br />\n                <amexio-label>M5, intersection, 17th Street</amexio-label><br />\n                <amexio-label>Phone: +91.0987654321</amexio-label><br /><br />\n            </amexio-column>\n            <amexio-column size=\"3\"></amexio-column>\n        </amexio-row>\n    </amexio-body>\n    <amexio-action>\n        <amexio-button [label]=\"'Close'\" [type]=\"'theme-color'\" [tooltip]=\"'Close'\" [size]=\"'large'\" (onClick)=\"close($event)\">\n        </amexio-button>\n    </amexio-action>\n</amexio-card>\n\n\n<!--<amexio-label>Your service has been booked on {{serviceAvailibilityModel.appointmentDate | date:'MMM dd, yyyy'}} at {{serviceAvailibilityModel.selectedSlot}}</amexio-label>-->\n"

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

module.exports = "<amexio-card [body-height]=\"75\" [header]=\"false\" [footer]=\"true\">\n  <amexio-body>\n      <amexio-label [size]=\"'medium-bold'\"> BEFORE YOU CONFIRM</amexio-label> <br />\n      <amexio-label [size]=\"'small-bold'\"> We've got some iconic Lifestyle Accessories just for you: </amexio-label>\n\n    <amexio-layout-columns [fit]=\"false\" [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'start'\">\n      <amexio-layout-item *ngFor=\"let accessiories of accessioriesData\" style=\"min-width:24%;\">\n        <content-card [image-url]=\"accessiories.imageUrl\" [description]=\"accessiories.description\">\n          <amexio-button [label]=\"'SHOW ME'\" [type]=\"'green'\" [tooltip]=\"'show me'\">\n          </amexio-button>\n        </content-card>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n\n\n  </amexio-body>\n  <amexio-action>\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\"\n                       [tooltip]=\"'cancel'\" [size]=\"'large'\"  (onClick)=\"onCancel($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 15px;\">\n    <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\"\n                   [tooltip]=\"'Back'\" [size]=\"'large'\" (onClick)=\"onBackHandle($event)\" >\n    </amexio-button>\n    <amexio-button [label]=\"'SKIP'\" [type]=\"'theme-color'\" [tooltip]=\"'skip'\" [size]=\"'large'\"\n                   (onClick)=\"onClickHandle($event)\">\n    </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action>\n</amexio-card>\n"

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

module.exports = "\n\n<amexio-spinner [show]=\"showLoader\" [type]=\"'spinnerround'\" [vertical-position]=\"'center'\" [horizontal-position]=\"'center'\"\n                [color]=\"'yellow'\">\n</amexio-spinner>\n\n<amexio-card class=\"serviceconfirmation\" [body-height]=\"75\" [show]=\"true\" [header]=\"false\" [footer]=\"true\">\n    <amexio-body>\n      <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'end'\">\n        <amexio-layout-item style=\"width: 40%\">\n          <amexio-row>\n            <amexio-column size=\"12\" >\n              <amexio-row>\n                <amexio-column size=\"4\">\n                  <amexio-label size=\"medium-bold\">Name</amexio-label>\n                </amexio-column>\n                <amexio-column size=\"8\">\n                  <amexio-label size=\"medium\">{{personalDetails.firstName}} {{personalDetails.surname}}</amexio-label>\n                </amexio-column>\n\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"4\">\n                  <amexio-label size=\"medium-bold\">Booking Date</amexio-label>\n                </amexio-column>\n                <amexio-column size=\"8\">\n                  <amexio-label size=\"medium\">{{serviceModel.selectedSlotDate | date:'MMM dd, yyyy'}} <ng-container *ngIf=\"serviceModel.serviceTimeLeft > 0\"><amexio-label size=\"small-bold\" font-color=\"green\">( {{serviceModel.serviceTimeLeft}} Days left )</amexio-label></ng-container></amexio-label>\n                </amexio-column>\n\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"4\">\n                  <amexio-label size=\"medium-bold\">Booking Time</amexio-label>\n                </amexio-column>\n                <amexio-column size=\"8\">\n                  <amexio-label size=\"medium\">{{serviceModel.selectedSlot }}</amexio-label>\n                </amexio-column>\n\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"4\">\n                  <amexio-label size=\"medium-bold\">Assitant Name</amexio-label>\n                </amexio-column>\n                <amexio-column size=\"8\">\n                  <amexio-label size=\"medium\">{{serviceModel.assitantPersonName}}</amexio-label>\n                </amexio-column>\n\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"4\">\n                  <amexio-label size=\"medium-bold\">Phone no</amexio-label>\n                </amexio-column>\n                <amexio-column size=\"8\">\n                  <amexio-label size=\"medium\">{{personalDetails.phone}}</amexio-label>\n                </amexio-column>\n\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"4\">\n                  <amexio-label size=\"medium-bold\">Email Id</amexio-label>\n                </amexio-column>\n                <amexio-column size=\"8\">\n                  <amexio-label size=\"medium\">{{personalDetails.email}}</amexio-label>\n                </amexio-column>\n\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"4\">\n                  <amexio-label size=\"medium-bold\">Service Type</amexio-label>\n                </amexio-column>\n                <amexio-column size=\"8\">\n                  <ng-container *ngIf=\"extraServiceData && extraServiceData.selectedJobType\">\n                    <ng-container *ngFor=\"let type of extraServiceData.selectedJobType; let index=index\">\n                      <amexio-label size=\"medium\" >{{index+1}}. {{type.typeName}}</amexio-label><br>\n                    </ng-container>\n                  </ng-container>\n                </amexio-column>\n\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"4\">\n                  <amexio-label size=\"medium-bold\">Remarks</amexio-label>\n                </amexio-column>\n                <amexio-column size=\"8\">\n                  <amexio-label size=\"medium\" *ngIf=\"extraServiceData\">{{extraServiceData.remarks}}</amexio-label>\n                </amexio-column>\n\n              </amexio-row>\n            </amexio-column>\n          </amexio-row>\n        </amexio-layout-item>\n        <amexio-layout-item [fit]=\"true\" >\n          <amexio-google-map [initial-zoom-level]=\"8\"\n                             [initial-lat]=\"25.270889\" [initial-lng]=\"55.872501\"\n                             [height]=\"'100%'\" [data]=\"serviceStations\"\n                             [google-map-key]=\"'AIzaSyDKSPX97z-ndeh_Mgq3xkaML2Kp9AwHA9s'\">\n          </amexio-google-map>\n        </amexio-layout-item>\n      </amexio-layout-columns>\n\n\n    </amexio-body>\n    <amexio-action>\n      <amexio-toolbar>\n        <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n          <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\"\n                         [tooltip]=\"'cancel'\" [size]=\"'large'\"  (onClick)=\"onCancel($event)\">\n          </amexio-button>\n        </amexio-toolbar-item>\n        <amexio-toolbar-item position-right style=\"padding-left: 15px;\">\n        <amexio-button [label]=\"'Back'\" (onClick)=\"onBackClick()\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\">\n        </amexio-button>\n        <amexio-button [label]=\"'Confirm'\" [type]=\"'theme-color'\" [tooltip]=\"'Confirm'\" [size]=\"'large'\" (onClick)=\"confirmAppointment($event)\">\n        </amexio-button>\n        </amexio-toolbar-item>\n      </amexio-toolbar>\n    </amexio-action>\n</amexio-card>\n"

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
    function ServiceConfirmationComponent(personalDetailsService, _httpService) {
        this.personalDetailsService = personalDetailsService;
        this._httpService = _httpService;
        this.serviceLocations = [];
        this.timeSlots = [];
        this.assitantPerson = [];
        this.orderConfirm = true;
        this.serviceStations = [];
        this.extraServiceData = null;
        this.showLoader = false;
        this.onPrevious = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.personalDetails = new _model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_4__["PersonalDetails"]();
        if (this.personalDetailsService.getPersonalDetails()) {
            this.personalDetails = this.personalDetailsService.getPersonalDetails();
        }
        this.extraServiceData = this.personalDetailsService.getExtraServiceData();
    }
    ServiceConfirmationComponent.prototype.ngOnInit = function () {
        if (this.serviceModel) {
            this.loadData();
        }
        this.serviceStations = [];
        this.serviceStations.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_3__["GoogleMapOverlays"](Number(this.serviceModel.locationModel.latitude), Number(this.serviceModel.locationModel.longitude), this.serviceModel.locationName + ', UAE', true, 'https://testapi.amexio.org/api/v5.5/assets/images/googlemap/mercgooglemarker.png', { country: 'United Arab Emirates', capital: 'Abu Dhabi' }));
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

module.exports = "<amexio-card class=\"vehicle-card\" [header]=\"false\" [footer]=\"true\">\n  <amexio-body>\n    <amexio-layout-columns [border]=\"false\" [orientation]=\"'vertical'\" [alignment]=\"'space-between'\">\n      <amexio-layout-item >\n          <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n              <amexio-layout-item [ngClass]=\"{'content-card': description}\">\n                  <amexio-image [path]=\"imageUrl\">\n                    </amexio-image>\n                    <br/>\n                    <amexio-label [size]=\"'medium-bold'\" *ngIf=\"title\">{{title}}</amexio-label>\n              </amexio-layout-item>\n          </amexio-layout-columns>\n      </amexio-layout-item>\n\n      <amexio-layout-item style=\"max-height: 200px; overflow: auto;\">\n        <rina-property-grid *ngIf=\"propertyData.length > 0\" [key-value-data]=\"propertyData\" [has-border]=\"false\"></rina-property-grid>\n        <p *ngIf=\"description\">{{description}}</p>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n  </amexio-body>\n  <amexio-action>\n    <ng-content></ng-content>\n  </amexio-action>\n</amexio-card>\n"

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

module.exports = "<amexio-card class=\"rina-card\" [body-height]=\"85\" [header]=\"false\" [footer]=\"true\">\n    <amexio-body>\n        <amexio-label [size]=\"'medium-bold'\"> QUICK BOOKING</amexio-label> <br /><br />\n\n        <amexio-label [size]=\"'small-bold'\"> Please select vehicle you would like to get serviced: </amexio-label> <br /> <br />\n\n\n        <amexio-row>\n            <amexio-column [fit]=\"true\" [size]=\"4\" *ngFor=\"let vehicle of contentCardData\">\n                <content-card [title]=\"vehicle.title\" [image-url]=\"vehicle.imageUrl\" [property-data]=\"vehicle.propertyData\">\n                <div *ngIf=\"vehicle.vehicleMetadata.bu === 'CME'\">\n                  <amexio-label [font-color]=\"'red'\">Sorry, we are not accepting Service Bookings for CME Business Unit.</amexio-label>\n                </div>\n                    <div *ngIf=\"vehicle.vehicleMetadata.bu != 'CME'\" class=\"inputgroup from-group\">\n                        <label for=\"{{vehicle.vehicleId}}\" [attr.aria-checked]=\"vehicle.selected\" [attr.aria-disabled]=\"(vehicle.vehicleMetadata.bu === 'CME')\" class=\"input-box-container\" style=\"padding-bottom:0px !important; margin: 5px !important\" (click)=\"selectVehicle(vehicle)\">\n                          Select Vehicle\n                          <input  style=\"top:0; left:0\" id=\"{{vehicle.vehicleId}}\" type=\"radio\"\n                                  name=\"selectvehicle\" [value]=\"vehicle.selected\"\n                                  [checked]=\"vehicle.selected\">\n\n                          <span class=\"input-box-radiobox-label\"></span>\n                        </label>\n                    </div>\n                </content-card>\n            </amexio-column>\n        </amexio-row>\n\n    </amexio-body>\n    <amexio-action>\n        <amexio-toolbar>\n            <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n                <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel($event)\">\n                </amexio-button>\n            </amexio-toolbar-item>\n            <amexio-toolbar-item position-right style=\"padding-left: 15px;\">\n                <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Back'\" [size]=\"'large'\" (onClick)=\"onBackHandle($event)\">\n                </amexio-button>\n                <amexio-button [label]=\"'Next'\" [disabled]=\"selectedVehicle === null ? true : false\" [type]=\"'theme-color'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"onClickHandle()\">\n                </amexio-button>\n            </amexio-toolbar-item>\n        </amexio-toolbar>\n    </amexio-action>\n</amexio-card>\n"

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
/* harmony import */ var _rinaccm_src_app_models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../rinaccm/src/app/models/customer.profile.model */ "../rinaccm/src/app/models/customer.profile.model.ts");
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
        __metadata("design:type", _rinaccm_src_app_models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__["CustomerProfile"])
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

module.exports = "<amexio-card class=\"preferredlocation\" [body-height]=\"75\" [show]=\"true\" [header]=\"false\" [footer]=\"true\">\n    <amexio-body>\n\n       \n        <div class=\"adjustbody\">\n            <service-availiblity-lib #formgroup [service-model]=\"serviceModel\" [start-time]=\"10\" [end-time]=\"15\"></service-availiblity-lib>\n        </div>\n\n    </amexio-body>\n    <amexio-action>\n        <amexio-toolbar>\n            <amexio-toolbar-item position-right>\n                <div class=\"amexio-checkbox-style\">\n                    <amexio-checkbox [field-label]=\"'Notify SA'\" [(ngModel)]=\"serviceModel.isNotifySA\">\n                    </amexio-checkbox>\n                </div>\n\n            </amexio-toolbar-item>\n          <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n            <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\"\n                           [tooltip]=\"'cancel'\" [size]=\"'large'\"  (onClick)=\"onCancel($event)\">\n            </amexio-button>\n          </amexio-toolbar-item>\n            <amexio-toolbar-item position-right style=\"padding-left: 15px;\">\n                <amexio-button [label]=\"secondaryButton\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Proceed to personal profile'\" [size]=\"'large'\" (onClick)=\"backClick($event)\">\n                </amexio-button>\n            </amexio-toolbar-item>\n            <amexio-toolbar-item position-right>\n                <amexio-button [label]=\"'Schedule'\" [disabled]=\"!this.serviceModel.isValidate()\" [type]=\"'theme-color'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"scheduleAppointment()\">\n                </amexio-button>\n            </amexio-toolbar-item>\n        </amexio-toolbar>\n    </amexio-action>\n</amexio-card>\n"

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

module.exports = "<amexio-card [class.remove-border]=\"!hasBorder\" [header]=\"false\" [footer]=\"false\">\n    <amexio-body>\n        <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'end'\">\n            <amexio-layout-item style=\"width: 20%\" *ngIf=\"hasImage\">\n              <amexio-image [path]=\"image\" [filter]=\"'round'\">\n              </amexio-image>\n            </amexio-layout-item>\n            <amexio-layout-item [fit]=\"true\">\n              <table style=\"padding: 2px;\">\n                <tr *ngFor=\"let item of data\">\n                  <td>{{item.fieldName}}:</td>\n                  <td style=\"word-break: break-all;\">{{item.fieldValue}}</td>\n                </tr>\n              </table>\n            </amexio-layout-item>\n          </amexio-layout-columns>\n    </amexio-body>\n</amexio-card>\n\n\n"

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
        this.hasBorder = true;
    }
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('has-border'),
        __metadata("design:type", Object)
    ], PropertyGridComponnent.prototype, "hasBorder", void 0);
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

module.exports = "<amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'space-between'\">\n    <amexio-layout-item>\n        <amexio-row>\n            <amexio-column [size]=12>\n\n                <amexio-label size=\"medium-bold\">PREFERRED LOCATION AND TIME</amexio-label>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-dropdown [(ngModel)]=\"serviceModel.location\" [enable-sort]=\"true\" [sort]=\"'asc'\" [search]=\"true\" [place-holder]=\"'Select Location'\" name=\"location\" [field-label]=\"'Select Location'\" [data]=\"serviceLocations\" [display-field]=\"'primaryDisplay'\"\n                    [value-field]=\"'primaryKey'\" (onSingleSelect)=\"onLocationClick($event)\">\n                </amexio-dropdown>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=9>\n                <amexio-date-time-picker [field-label]=\"'Select Date'\" [min-date]=\"minDate\" [time-picker]=\"false\" [date-picker]=\"true\" name=\"appointmentDate\" [min-date]=\"todayDate\" [(ngModel)]=\"serviceModel.appointmentDate\">\n                </amexio-date-time-picker>\n            </amexio-column>\n            <amexio-column [size]=3>\n                <amexio-dropdown [(ngModel)]=\"serviceModel.appointmentTime\" [enable-sort]=\"true\" [sort]=\"'asc'\" [search]=\"true\" (onSingleSelect)=\"setTime($event)\" [place-holder]=\"'Select Time'\" name=\"appointmentTime\" [field-label]=\"'Select time'\" [data]=\"timeSlots\" [display-field]=\"'time'\"\n                    [value-field]=\"'timeId'\">\n                </amexio-dropdown>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-dropdown [(ngModel)]=\"serviceModel.assitantPersonId\" [enable-sort]=\"true\" [sort]=\"'asc'\" [search]=\"true\" [place-holder]=\"'Select SA'\" name=\"assitantPerson\" [field-label]=\"'Service Advisor (SA)'\" [data]=\"assitantPerson\" [display-field]=\"'primaryDisplay'\"\n                    [value-field]=\"'primaryKey'\" (onSingleSelect)=\"onAssitantClick($event)\">\n                </amexio-dropdown>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-button [label]=\"'CHECK SA AVAILIBLITY'\" [type]=\"'theme-color'\" [tooltip]=\"'CHECK SA AVAILIBLITY'\" (onClick)=\"checkAvailiblity()\"></amexio-button>\n            </amexio-column>\n        </amexio-row>\n        <amexio-row>\n            <amexio-column [size]=12>\n                <amexio-ee-appointment [height]=\"'200px'\"\n                [available-slots-color]=\"'white'\"\n                [available-slots-bg-color]=\"'#4CAF50'\"\n                [selected-slot-bg-color]=\"'yellow'\"\n                [selected-slot-color]=\"'green'\"\n                [date]=\"serviceModel.appointmentDate\" [start-time]=\"serviceModel.appointmentTime\"\n                    [end-time]=\"endTime\" [available-slots]=\"availableslots\" (onSingleSelect)=\"onSlotSelection($event)\"></amexio-ee-appointment>\n            </amexio-column>\n        </amexio-row>\n\n    </amexio-layout-item>\n    <amexio-layout-item [fit]=\"true\" style=\"min-height:200px;\">\n        <amexio-google-map [initial-zoom-level]=\"8\" [initial-lat]=\"25.270889\" [initial-lng]=\"55.872501\" [height]=\"'100%'\" [data]=\"serviceStations\" (onMarkerClick)=\"onMarkerClick($event)\" [google-map-key]=\"'AIzaSyDKSPX97z-ndeh_Mgq3xkaML2Kp9AwHA9s'\">\n        </amexio-google-map>\n    </amexio-layout-item>\n</amexio-layout-columns>\n"

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

module.exports = "<amexio-card [body-height]=\"75\" [header]=\"false\" [footer]=\"true\">\n  <amexio-body>\n    <amexio-label [size]=\"'medium-bold'\">SELECT SERVICE TYPE</amexio-label> <br /><br />\n    <amexio-row>\n      <amexio-column [size]=\"6\">\n        <amexio-listbox [enable-checkbox]=\"true\"\n                        [height]=\"300\"\n                        [header]=\"'Service Type'\"\n                        [data]=\"serviceTypeData\"\n                        [display-field]=\"'typeName'\"\n                        (selectedRows)=\"getSelectedType($event)\">\n        </amexio-listbox>\n        <amexio-text-input field-label=\"Remark\"\n                           [(ngModel)]=\"remarks\"\n                           name=\"remarks\"\n                           place-holder=\"Enter remark\">\n        </amexio-text-input>\n      </amexio-column>\n    </amexio-row>\n  </amexio-body>\n  <amexio-action>\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\"\n                       [tooltip]=\"'cancel'\" [size]=\"'large'\"  (onClick)=\"onCancel($event)\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 15px;\">\n        <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\"\n                       [tooltip]=\"'Back'\" [size]=\"'large'\" (onClick)=\"onBackHandle($event)\" >\n        </amexio-button>\n        <amexio-button [label]=\"'Next'\" [type]=\"'theme-color'\" [tooltip]=\"'skip'\" [size]=\"'large'\"\n                       (onClick)=\"onNextHandle()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action>\n</amexio-card>\n"

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









var RINA_COMPONENTS = [
    _components_service_booking_service_availiblity_lib_component__WEBPACK_IMPORTED_MODULE_0__["ServiceAvailiblityComponent"],
    _components_preferred_location_preferred_location_component__WEBPACK_IMPORTED_MODULE_1__["PreferredLocationComponent"],
    _components_confirmation_service_confirmation__WEBPACK_IMPORTED_MODULE_2__["ServiceConfirmationComponent"],
    _components_appointmentdetails_appointment_confirmation__WEBPACK_IMPORTED_MODULE_3__["AppoinmentConfirmationComponent"],
    _components_property_grid_propertygrid_component__WEBPACK_IMPORTED_MODULE_4__["PropertyGridComponnent"],
    _components_before_confirm_before_confirm_component__WEBPACK_IMPORTED_MODULE_5__["BeforeConfirmComponent"],
    _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_6__["ContentCardComponent"],
    _components_customer_vehicle_list_customer_vehiclelist_component__WEBPACK_IMPORTED_MODULE_7__["CustomerVehicleListComponent"],
    _components_service_job_type_jobtype_component__WEBPACK_IMPORTED_MODULE_8__["ServiceTypeComponent"]
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
    BASE_APP_URL: 'https://restapi.amexio.org:8891/alfahim/api/'
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
/*! exports provided: RinaLibModule, ServiceAvailibilityModel, CustomerModel, PropertyGridModel, ServiceAvailiblityComponent, PreferredLocationComponent, ServiceConfirmationComponent, AppoinmentConfirmationComponent, PropertyGridComponnent, BeforeConfirmComponent, ContentCardComponent, CustomerVehicleListComponent, ContentCardData, ServiceTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/rina-lib.module */ "../rina-lib/src/lib/rina-lib.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RinaLibModule", function() { return _lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_0__["RinaLibModule"]; });

/* harmony import */ var _lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/model/service.availiblity.model */ "../rina-lib/src/lib/model/service.availiblity.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailibilityModel", function() { return _lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"]; });

/* harmony import */ var _rinaccm_src_app_models_customer_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rinaccm/src/app/models/customer.details.model */ "../rinaccm/src/app/models/customer.details.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return _rinaccm_src_app_models_customer_details_model__WEBPACK_IMPORTED_MODULE_2__["CustomerModel"]; });

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

/***/ "../rinaccm/src/app/models/customer.profile.model.ts":
/*!***********************************************************!*\
  !*** ../rinaccm/src/app/models/customer.profile.model.ts ***!
  \***********************************************************/
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-floating-button [vertical-position]=\"'bottom'\" [size]=\"'large'\" [horizontal-position]=\"'right'\" (onClick)=\"onClick()\"\n    [label]=\"'Book Service'\" [type]=\"'yellow'\" [icon]=\"'fa fa-car fa-2x'\" [type]=\"'theme-color'\">\n</amexio-floating-button>\n\n<div *ngIf=\"windowEnable\" class=\"alfahim-root-window\">\n    <div class=\"alfahim-root-window-content\">\n        <amexio-layout-columns class=\"amexio-layout-columns-height \"  *ngIf=\"(currentstep > 2 && currentstep != 11)\" [orientation]=\"'horizontal'\" [border]=\"false\">\n            <amexio-layout-item [fit]=\"true\">\n                <amexio-steps [icon]=\"true\">\n                    <amexio-step-block [label]=\"'User'\" [active]=\"(currentstep === 3)\" [icon]=\"'fa fa-user fa-2x'\">\n                    </amexio-step-block>\n                    <amexio-step-block [label]=\"'Location'\" [active]=\"(currentstep === 4)\" [icon]=\"'fa fa-map-marker fa-2x'\">\n                    </amexio-step-block>\n                  <amexio-step-block [label]=\"'Service Type'\" [active]=\"(currentstep === 5)\" [icon]=\"'fa fa-cubes fa-2x'\">\n                  </amexio-step-block>\n                  <amexio-step-block [label]=\"'Sale'\" [active]=\"(currentstep === 6)\" [icon]=\"'fa fa-superpowers fa-2x'\">\n                    </amexio-step-block>\n                    <amexio-step-block [label]=\"'Confirm'\" [active]=\"(currentstep === 7)\" [icon]=\"'fa fa-check-circle fa-2x'\">\n                    </amexio-step-block>\n                    <amexio-step-block [label]=\"'Info'\" [active]=\"(currentstep === 8)\" [icon]=\"'fa fa-info fa-2x'\">\n                    </amexio-step-block>\n                </amexio-steps>\n            </amexio-layout-item>\n        </amexio-layout-columns>\n        <booking-flow *ngIf=\"(currentstep === 0)\" (bookingFlow)=\"bookingFlowHandle($event)\"></booking-flow>\n        <quick-booking *ngIf=\"(currentstep === 1)\" (onNext)=\"quickBookingHandle($event)\" (onBack)=\"quickBookingBack($event)\"\n            (onClose)=\"onCloseClick($event)\"></quick-booking>\n        <customer-vehicle-list *ngIf=\"(currentstep === 2)\" [customer-profile]=\"customerProfile\" (onClose)=\"onCloseClick($event)\"\n            (onBack)=\"vehicleListBack($event)\" (onVehicleListNext)=\"onVehicleListHandle($event)\"></customer-vehicle-list>\n        <personal-details *ngIf=\"(currentstep === 3)\" [person-detail]=\"personalDetails\" (onBack)=\"bookingFlow($event)\"\n            (onNext)=\"proceedToPreferredLocation($event)\" (onClose)=\"onCloseClick($event)\"></personal-details>\n        <preferred-location *ngIf=\"(currentstep === 4)\" [service-model]=\"serviceModel\" (onClose)=\"onCloseClick($event)\"\n            (onNext)=\"scheduleAppointment($event)\" (onPrevious)=\"onPrevious($event)\"></preferred-location>\n        <service-job-type *ngIf=\"(currentstep === 5)\" (onNext)=\"onServiceTypeNextHandle($event)\" (onBack)=\"onServiceTypeBackHandle($event)\" (onClose)=\"onCloseClick($event)\"></service-job-type>\n        <before-confirm *ngIf=\"(currentstep === 6)\" (onBeforeBack)=\"onBeforeBackHandle($event)\" (onClose)=\"onCloseClick($event)\"\n            (onBeforeConfirmClick)=\"onBeforeConfirmClickHandle($event)\"></before-confirm>\n        <service-confirmation *ngIf=\"(currentstep === 7)\" [service-model]=\"serviceModel\" (onClose)=\"onCloseClick($event)\"\n            (onPrevious)=\"onServiceConfirmPrevious($event)\" (onConfirm)=\"onAppointmentConfirm($event)\">\n        </service-confirmation>\n        <appointment-confirmation *ngIf=\"(currentstep === 8)\" (onConfirm)=\"onCloseClick($event)\" [appointment-msg]=\"appointmentMsg\"></appointment-confirmation>\n        <otp-component [next-window]=\"otpWindowRefNumber\" *ngIf=\"(currentstep === 11)\"\n                       [otp-type]=\"otpType\"\n                       [otp-ref]=\"otpRef\"\n                       [email]=\"emailId\"\n                       (onNext)=\"onOtpNextHandle($event)\"\n                        (onBack)=\"onOtpBackHandle($event)\"\n                        (onClose)=\"onCloseClick($event)\"></otp-component>\n    </div>\n</div>\n\n\n<amexio-spinner [show]=\"NaLService.showLoader\" [type]=\"'spinnerround'\" [vertical-position]=\"'center'\" [horizontal-position]=\"'center'\"\n                [color]=\"'yellow'\">\n</amexio-spinner>\n"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rina_lib_src_lib_services_shared_notification_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../rina-lib/src/lib/services/shared/notification-loader.service */ "../rina-lib/src/lib/services/shared/notification-loader.service.ts");
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
    function AppComponent(_windowTService, datePipe, NaLService, _personalDetailsService) {
        this._windowTService = _windowTService;
        this.datePipe = datePipe;
        this.NaLService = NaLService;
        this._personalDetailsService = _personalDetailsService;
        this.otpType = 1;
        this.serviceModel = new projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ServiceAvailibilityModel"]();
        this.personalDetails = new projects_rina_lib_src_lib_model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_4__["PersonalDetails"]();
        this._windowTService.appType = '1';
    }
    AppComponent.prototype.onClick = function () {
        this.windowEnable = true;
        this.currentstep = this._windowTService.getNextWindow(-1);
    };
    AppComponent.prototype.proceedToPreferredLocation = function (personalDetails) {
        this.otpType = 2;
        this.otpRef = this._personalDetailsService.getPersonalDetails().email;
        this.emailId = this._personalDetailsService.getPersonalDetails().email;
        this.otpWindowRefNumber = this.currentstep;
        this.currentstep = this._windowTService.getNextWindow(10);
    };
    AppComponent.prototype.scheduleAppointment = function (serviceModel) {
        this._personalDetailsService.setPeferredLocation(serviceModel);
        this.currentstep = this._windowTService.getNextWindow(this.currentstep);
    };
    AppComponent.prototype.onPrevious = function (event) {
        this.personalDetails = this._personalDetailsService.getPersonalDetails();
        if (this._windowTService.isNewUserFlow) {
            this.currentstep = this._windowTService.getPreviousWindow(4);
        }
        else {
            this.currentstep = this._windowTService.getPreviousWindow(3);
        }
    };
    AppComponent.prototype.onServiceConfirmPrevious = function (event) {
        this.serviceModel = event;
        this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
    };
    AppComponent.prototype.onCloseClick = function (event) {
        this.currentstep = this._windowTService.getNextWindow(-2);
        this.windowEnable = false;
        this.serviceModel = new projects_rina_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ServiceAvailibilityModel"]();
        this.personalDetails = new projects_rina_lib_src_lib_model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_4__["PersonalDetails"]();
        this._personalDetailsService.resetServiceData();
    };
    AppComponent.prototype.onAppointmentConfirm = function (event) {
        var serModel = this._personalDetailsService.getPeferredLocation();
        if (serModel) {
            this.appointmentMsg = 'Your service has been booked on ' + this.datePipe.transform(serModel.appointmentDate, 'MMM dd, yyyy') + ' at ' + serModel.selectedSlot + '.';
        }
        this.currentstep = this._windowTService.getNextWindow(this.currentstep);
    };
    AppComponent.prototype.bookingFlowHandle = function (event) {
        this._personalDetailsService.resetServiceData();
        if (event.clickType === 1) {
            this._windowTService.isNewUserFlow = false;
            this.currentstep = this._windowTService.getNextWindow(0);
        }
        else {
            this._windowTService.isNewUserFlow = true;
            this.currentstep = this._windowTService.getNextWindow(2);
        }
    };
    AppComponent.prototype.quickBookingHandle = function (event) {
        this.otpType = 1;
        this.customerProfile = event;
        this.otpRef = this.customerProfile.customerId;
        this.emailId = this.customerProfile.email;
        this.otpWindowRefNumber = this.currentstep;
        this.currentstep = 11;
    };
    AppComponent.prototype.onVehicleListHandle = function (personalDetails) {
        this._personalDetailsService.setPersonalDetails(personalDetails);
        this.currentstep = this._windowTService.getNextWindow(this.currentstep + 1);
    };
    AppComponent.prototype.vehicleListBack = function (event) {
        this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
    };
    AppComponent.prototype.onBeforeConfirmClickHandle = function (event) {
        this.currentstep = this._windowTService.getNextWindow(this.currentstep);
    };
    AppComponent.prototype.quickBookingBack = function (event) {
        this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
    };
    AppComponent.prototype.onBeforeBackHandle = function (event) {
        this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
    };
    AppComponent.prototype.bookingFlow = function (event) {
        this.currentstep = this._windowTService.getNextWindow(-1);
    };
    AppComponent.prototype.onOtpNextHandle = function (event) {
        this.currentstep = this._windowTService.getNextWindow(event);
    };
    AppComponent.prototype.onOtpBackHandle = function (event) {
        this.currentstep = this._windowTService.getPreviousWindow(event);
    };
    AppComponent.prototype.onServiceTypeNextHandle = function (event) {
        this._personalDetailsService.setExtraServiceData(event);
        this.currentstep = this._windowTService.getNextWindow(this.currentstep);
    };
    AppComponent.prototype.onServiceTypeBackHandle = function (event) {
        this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [projects_rina_lib_src_lib_services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_3__["WindowToogleService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _rina_lib_src_lib_services_shared_notification_loader_service__WEBPACK_IMPORTED_MODULE_6__["NotificationAndLoaderService"],
            projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__["PersonalDetailsService"]])
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
/* harmony import */ var _booking_flow_bookingflow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./booking-flow/bookingflow.component */ "./src/app/booking-flow/bookingflow.component.ts");
/* harmony import */ var _quick_booking_quick_booking_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quick-booking/quick.booking.component */ "./src/app/quick-booking/quick.booking.component.ts");
/* harmony import */ var _otp_component_otp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./otp-component/otp.component */ "./src/app/otp-component/otp.component.ts");
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
                _personaldetails_personal_detail__WEBPACK_IMPORTED_MODULE_2__["PersonalDetailsComponent"],
                _booking_flow_bookingflow_component__WEBPACK_IMPORTED_MODULE_9__["BookingFlowComponent"],
                _quick_booking_quick_booking_component__WEBPACK_IMPORTED_MODULE_10__["QuickBookingComponent"],
                _otp_component_otp_component__WEBPACK_IMPORTED_MODULE_11__["OTPComponent"]
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

/***/ "./src/app/booking-flow/bookingflow.component.html":
/*!*********************************************************!*\
  !*** ./src/app/booking-flow/bookingflow.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card class=\"person-details\" [body-height]=\"85\" [header]=\"false\" [footer]=\"false\">\n  <amexio-body>\n    <amexio-layout-columns [border]=\"false\" [orientation]=\"'vertical'\" [alignment]=\"'center'\">\n      <amexio-layout-item>\n        <amexio-row>\n          <amexio-column [size]=6>\n\n          </amexio-column>\n          <amexio-column [size]=6>\n\n          </amexio-column>\n\n        </amexio-row>\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n          <amexio-layout-item [fit]=\"true\">\n              <amexio-row>\n                  <amexio-column [size]=1></amexio-column>\n                  <amexio-column [size]=4>\n                      <amexio-button [size]=\"'large'\" [block]=\"true\" [label]=\"'EXISTING CUSTOMER'\" [type]=\"'theme-color'\" [tooltip]=\"'EXISTING CUSTOMER'\"\n                      (onClick)=\"existingCustomerHandle()\">\n                    </amexio-button>\n                  </amexio-column>\n                  <amexio-column [size]=2></amexio-column>\n                  <amexio-column [size]=4>\n                      <amexio-button [size]=\"'large'\"  [block]=\"true\" [label]=\"'NEW CUSTOMER'\" [type]=\"'theme-color'\" [tooltip]=\"'NEW CUSTOMER'\"\n                      (onClick)=\"newCustomerHandle()\">\n                    </amexio-button>\n                  </amexio-column>\n                  <amexio-column [size]=1></amexio-column>        \n                </amexio-row>\n        \n          </amexio-layout-item>\n       \n        </amexio-layout-columns>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n  </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/booking-flow/bookingflow.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/booking-flow/bookingflow.component.ts ***!
  \*******************************************************/
/*! exports provided: BookingFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingFlowComponent", function() { return BookingFlowComponent; });
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
 * Created by dattaram on 23/1/19.
 */

var BookingFlowComponent = /** @class */ (function () {
    function BookingFlowComponent() {
        this.bookingFlow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BookingFlowComponent.prototype.ngOnInit = function () {
    };
    BookingFlowComponent.prototype.existingCustomerHandle = function () {
        this.bookingFlow.emit({ 'clickType': 1 });
    };
    BookingFlowComponent.prototype.newCustomerHandle = function () {
        this.bookingFlow.emit({ 'clickType': 2 });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BookingFlowComponent.prototype, "bookingFlow", void 0);
    BookingFlowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'booking-flow',
            template: __webpack_require__(/*! ./bookingflow.component.html */ "./src/app/booking-flow/bookingflow.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BookingFlowComponent);
    return BookingFlowComponent;
}());



/***/ }),

/***/ "./src/app/otp-component/otp.component.html":
/*!**************************************************!*\
  !*** ./src/app/otp-component/otp.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-spinner [show]=\"showLoader\" [type]=\"'spinnerround'\" [vertical-position]=\"'center'\" [horizontal-position]=\"'center'\"\n                [color]=\"'yellow'\">\n</amexio-spinner>\n<amexio-card class=\"rina-card\" [body-height]=\"85\" [header]=\"false\" [footer]=\"true\">\n  <amexio-body>\n\n    <amexio-layout-columns [border]=\"false\" [orientation]=\"'vertical'\" [alignment]=\"'center'\">\n      <amexio-layout-item>\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n          <amexio-layout-item >\n            <amexio-label [size]=\"'medium-bold'\">OTP has been send to your register email <span style=\"color: red\">{{maskedid}}</span></amexio-label> <br /><br />\n            <div [formGroup]=\"otpFormsGroup\" style=\"display: flex;justify-content: center\">\n                  <amexio-text-input  name=\"otp\" formControlName=\"otpValue\"\n                                     [(ngModel)]=\"otp\"\n                                     field-label=\"OTP\"\n                                     place-holder=\"enter otp\"\n                                     has-label=\"true\">\n                  </amexio-text-input>\n            </div> <br /><br />\n            <amexio-label style=\"display: flex; justify-content: center\" [size]=\"'medium-bold'\" [font-color]=\"'red'\">{{errorMsg}}</amexio-label>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n  </amexio-body>\n  <amexio-action>\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 15px;\">\n        <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Back'\" [size]=\"'large'\" (onClick)=\"onBackHandle()\">\n        </amexio-button>\n        <amexio-button [label]=\"'Verify'\" [disabled]=\"!otpFormsGroup.valid\"  [type]=\"'theme-color'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"onNextHandle()\">\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action>\n</amexio-card>\n"

/***/ }),

/***/ "./src/app/otp-component/otp.component.ts":
/*!************************************************!*\
  !*** ./src/app/otp-component/otp.component.ts ***!
  \************************************************/
/*! exports provided: OTPComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTPComponent", function() { return OTPComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rina_lib_src_lib_services_shared_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../rina-lib/src/lib/services/shared/http.service */ "../rina-lib/src/lib/services/shared/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
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
 * Created by dattaram on 5/2/19.
 */



var OTPComponent = /** @class */ (function () {
    function OTPComponent(_httpService, fb) {
        this._httpService = _httpService;
        this.fb = fb;
        this.otpType = 1;
        this.onBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showLoader = false;
        this.otpFormsGroup = this.fb.group({
            otpValue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]],
        });
    }
    OTPComponent.prototype.ngOnInit = function () {
        this.emailMasking();
    };
    OTPComponent.prototype.emailMasking = function () {
        var index = this.email.lastIndexOf('@');
        var prefix = this.email.substring(0, index);
        var postfix = this.email.substring(index);
        var mask = prefix.split('').map(function (o, i) {
            if (i == 0 || i == (index - 1)) {
                return o;
            }
            else {
                return '*';
            }
        }).join('');
        this.maskedid = mask + postfix;
    };
    OTPComponent.prototype.onNextHandle = function () {
        var _this = this;
        this.showLoader = true;
        var response;
        if (this.otpType === 1) {
            var requestJson = {
                'customerId': this.otpRef,
                'otp': this.otp
            };
            this._httpService.post('customerverification/verifycustomer/', 'post', requestJson).subscribe(function (res) {
                response = res;
            }, function (err) {
                _this.showLoader = false;
                _this.errorMsg = 'something went wrong';
            }, function () {
                if (response.success && response.response.isOtpValid) {
                    _this.showLoader = false;
                    _this.onNext.emit(_this.nextWindow);
                }
                else {
                    _this.showLoader = false;
                    _this.errorMsg = response.response.message;
                }
            });
        }
        else {
            var requestJson = {
                'emailId': this.otpRef,
                'otp': this.otp
            };
            this._httpService.post('customerverification/verifycustomerregistration/', 'post', requestJson).subscribe(function (res) {
                response = res;
            }, function (err) {
                _this.showLoader = false;
                _this.errorMsg = 'something went wrong';
            }, function () {
                if (response.response.isOtpValid) {
                    _this.showLoader = false;
                    _this.onNext.emit(_this.nextWindow);
                }
                else {
                    _this.showLoader = false;
                    _this.errorMsg = response.response.message;
                }
            });
        }
    };
    OTPComponent.prototype.onBackHandle = function () {
        this.onBack.emit(this.nextWindow);
    };
    OTPComponent.prototype.onCancel = function () {
        this.onClose.emit(this.nextWindow);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('next-window'),
        __metadata("design:type", Number)
    ], OTPComponent.prototype, "nextWindow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('otp-type'),
        __metadata("design:type", Object)
    ], OTPComponent.prototype, "otpType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('email'),
        __metadata("design:type", String)
    ], OTPComponent.prototype, "email", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OTPComponent.prototype, "onBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OTPComponent.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OTPComponent.prototype, "onNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('otp-ref'),
        __metadata("design:type", Object)
    ], OTPComponent.prototype, "otpRef", void 0);
    OTPComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'otp-component',
            template: __webpack_require__(/*! ./otp.component.html */ "./src/app/otp-component/otp.component.html")
        }),
        __metadata("design:paramtypes", [_rina_lib_src_lib_services_shared_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], OTPComponent);
    return OTPComponent;
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
/* harmony import */ var _rina_lib_src_lib_services_shared_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../rina-lib/src/lib/services/shared/http.service */ "../rina-lib/src/lib/services/shared/http.service.ts");
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
    function PersonalDetailsComponent(personalDetailsService, _httpService, fb) {
        this.personalDetailsService = personalDetailsService;
        this._httpService = _httpService;
        this.fb = fb;
        this.errorDialogue = false;
        this.showLoader = false;
        this.successMsg = [];
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
            Phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]],
            ContactPreference: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            VehicleType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            ModelYear: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            PresentKm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]],
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
    PersonalDetailsComponent.prototype.proceedToPreferredLocation = function (event) {
        var _this = this;
        this.showLoader = true;
        var response;
        this._httpService.fetch('customerverification/generateotp/' + this.personalDetails.email, 'get').subscribe(function (res) {
            response = res;
        }, function (err) {
            _this.showLoader = false;
            _this.errorMsg = 'something went wrong';
            _this.errorDialogue = true;
        }, function () {
            if (response.success) {
                _this.showLoader = false;
                _this.personalDetailsService.setPersonalDetails(_this.personalDetails);
                _this.successMsg.push(response.successMessage + ' ' + _this.personalDetails.email);
                _this.onNext.emit(_this.personalDetails);
            }
            else {
                _this.showLoader = false;
                _this.errorMsg = response.errorMessage;
                _this.errorDialogue = true;
            }
        });
    };
    PersonalDetailsComponent.prototype.onCloseClick = function (event) {
        this.onClose.emit(event);
    };
    PersonalDetailsComponent.prototype.onPreviousClick = function (event) {
        this.onBack.emit(event);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PersonalDetailsComponent.prototype, "onBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('person-detail'),
        __metadata("design:type", projects_rina_lib_src_lib_model_shared_personal_details_model__WEBPACK_IMPORTED_MODULE_2__["PersonalDetails"])
    ], PersonalDetailsComponent.prototype, "personalDetails", void 0);
    PersonalDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'personal-details',
            template: __webpack_require__(/*! ./personal.details.html */ "./src/app/personaldetails/personal.details.html")
        }),
        __metadata("design:paramtypes", [projects_rina_lib_src_lib_services_alfahim_personal_details_service__WEBPACK_IMPORTED_MODULE_0__["PersonalDetailsService"],
            _rina_lib_src_lib_services_shared_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
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

module.exports = "<amexio-spinner [show]=\"showLoader\" [type]=\"'spinnerround'\" [vertical-position]=\"'center'\" [horizontal-position]=\"'center'\"\n                [color]=\"'yellow'\">\n</amexio-spinner>\n\n<amexio-card class=\"person-details\" [body-height]=\"75\"  [header]=\"false\" [footer]=\"true\">\n    <amexio-body>\n        <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'space-between'\">\n            <amexio-layout-item>\n                <div class=\"adjustbody\" [formGroup]=\"personDetailsGroup\">\n                    <amexio-label size=\"medium-bold\">PERSONAL DETAILS</amexio-label>\n                    <amexio-row>\n                        <amexio-column [size]=2>\n                            <amexio-dropdown [(ngModel)]=\"personalDetails.title\" formControlName=\"Title\" [enable-sort]=\"true\" [sort]=\"'asc'\" [search]=\"true\" name=\"title\" [place-holder]=\"'Select title'\" [field-label]=\"'Title'\" [data]=\"titles\" [value-field]=\"'primaryKey'\" [display-field]=\"'primaryDisplay'\">\n                            </amexio-dropdown>\n                        </amexio-column>\n                        <amexio-column [size]=5>\n                            <amexio-text-input [(ngModel)]=\"personalDetails.firstName\" formControlName=\"FirstName\" name=\"name\" field-label=\"Name\" place-holder=\"Name\">\n                            </amexio-text-input>\n                        </amexio-column>\n                        <amexio-column [size]=5>\n                            <amexio-text-input [(ngModel)]=\"personalDetails.surname\" formControlName=\"Surname\" name=\"surname\" field-label=\"Surname\" place-holder=\"Surname\">\n                            </amexio-text-input>\n                        </amexio-column>\n                    </amexio-row>\n\n                    <amexio-row>\n                        <amexio-column [size]=4>\n                            <amexio-email-input [(ngModel)]=\"personalDetails.email\" formControlName=\"Email\" name=\"email\" [field-label]=\"'Email'\" [place-holder]=\"'Email'\">\n                            </amexio-email-input>\n                        </amexio-column>\n                        <amexio-column [size]=4>\n                            <amexio-text-input [(ngModel)]=\"personalDetails.phone\"\n                                               formControlName=\"Phone\" name=\"phone\"\n                                               [min-length]=\"10\"\n                                               field-label=\"Phone\" place-holder=\"phone\">\n                            </amexio-text-input>\n                        </amexio-column>\n                        <amexio-column [size]=4>\n                            <amexio-radio-group [(ngModel)]=\"personalDetails.perferredContact\" [field-label]=\"'Preferred mode of contact'\" formControlName=\"ContactPreference\" name=\"contactPreference\" [display-field]=\"'primaryDisplay'\" [value-field]=\"'primaryKey'\" [horizontal]=\"true\"\n                                [data]=\"preferredModeOfContacts\">\n                            </amexio-radio-group>\n                        </amexio-column>\n\n                    </amexio-row>\n                    <br>\n                    <amexio-label size=\"medium-bold\">VEHICLE DETAILS</amexio-label>\n                    <amexio-row>\n                        <amexio-column [size]=6>\n                            <amexio-dropdown [(ngModel)]=\"personalDetails.vehicleType\" formControlName=\"VehicleType\" [enable-sort]=\"true\" [sort]=\"'asc'\" [search]=\"true\" name=\"vehicleType\" [place-holder]=\"'Vehicle Type'\" [field-label]=\"'Vehicle Type'\" [data]=\"vehicleTypes\" [value-field]=\"'primaryDisplay'\"\n                                [display-field]=\"'primaryDisplay'\">\n                            </amexio-dropdown>\n                        </amexio-column>\n                        <amexio-column [size]=6>\n                            <amexio-dropdown [(ngModel)]=\"personalDetails.modelYear\" formControlName=\"ModelYear\" [enable-sort]=\"true\" [sort]=\"'asc'\" [search]=\"true\" name=\"modelYear\" [place-holder]=\"'Model Year'\" [field-label]=\"'Model Year'\" [data]=\"modelYears\" [value-field]=\"'primaryKey'\"\n                                [display-field]=\"'primaryDisplay'\">\n                            </amexio-dropdown>\n                        </amexio-column>\n                    </amexio-row>\n\n                    <amexio-row>\n                        <amexio-column [size]=6>\n                            <amexio-number-input [(ngModel)]=\"personalDetails.presentKm\" formControlName=\"PresentKm\" name=\"presentKm\" [min-value]=\"1\" [field-label]=\"'Present KM on your car'\" [place-holder]=\"'Enter KM on you car'\">\n                            </amexio-number-input>\n                        </amexio-column>\n                        <amexio-column [size]=6>\n                            <amexio-text-input [(ngModel)]=\"personalDetails.registrationNumber\" formControlName=\"RegistrationNumber\" name=\"registrationNumber\" field-label=\"Registration Plate (License Plate)\" place-holder=\"Registration plate\">\n                            </amexio-text-input>\n                        </amexio-column>\n                    </amexio-row>\n\n                </div>\n            </amexio-layout-item>\n        </amexio-layout-columns>\n    </amexio-body>\n    <amexio-action>\n      <amexio-toolbar>\n        <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n          <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\"\n                         [tooltip]=\"'cancel'\" [size]=\"'large'\"  (onClick)=\"onCloseClick($event)\">\n          </amexio-button>\n        </amexio-toolbar-item>\n        <amexio-toolbar-item position-right style=\"padding-left: 15px;\">\n        <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"onPreviousClick($event)\">\n        </amexio-button>\n        <amexio-button [label]=\"'Next'\" [type]=\"'theme-color'\"  [disabled]=\"!personDetailsGroup.valid\" [tooltip]=\"'Proceed to preferred location'\" [size]=\"'large'\" (onClick)=\"proceedToPreferredLocation($event)\">\n        </amexio-button>\n        </amexio-toolbar-item>\n      </amexio-toolbar>\n    </amexio-action>\n</amexio-card>\n\n<amexio-dialogue [(show)]=\"errorDialogue\" [material-design]=\"true\" [message]=\"errorMsg\" [title]=\"'Error'\"\n                 [message-type]=\"'error'\" [type]=\"'alert'\">\n</amexio-dialogue>\n\n<amexio-notification\n  [data]=\"successMsg\"\n  [vertical-position]=\"'top'\"\n  [horizontal-position]=\"'right'\"\n  [close-on-escape] =\"true\"\n  [background-color]=\"'green'\"\n  [auto-dismiss-msg]=\"false\"\n  [icon]=\"'fa fa-check-square-o fa-fw'\"\n  [auto-dismiss-msg-interval]=\"4000\">\n</amexio-notification>\n"

/***/ }),

/***/ "./src/app/quick-booking/quick.booking.component.html":
/*!************************************************************!*\
  !*** ./src/app/quick-booking/quick.booking.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card class=\"rina-card\" [body-height]=\"85\"  [header]=\"false\" [footer]=\"true\">\n  <amexio-body>\n    <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'space-between'\">\n      <amexio-layout-item>\n        <div class=\"adjustbody\">\n          <amexio-label size=\"medium-bold\">QUICK BOOKING</amexio-label>\n          <amexio-row>\n            <amexio-column [size]=\"6\"><br>\n              <amexio-text-input\n                                 name=\"eid\"\n                                 [(ngModel)]=\"emiratesId\"\n                                 place-holder=\"Emirates ID\"\n                                 [allow-blank]=\"true\"\n                                 [disabled]=\"emiratesIdDisabled\"\n                                 (change)=\"changeHandle('eid')\"\n                                 has-label=\"false\">\n              </amexio-text-input><br>\n              <amexio-label [size]=\"'small'\">or</amexio-label>\n              <amexio-text-input name=\"rmn\"\n                                 [(ngModel)]=\"regMobNumber\"\n                                 place-holder=\"Registered Mobile Number\"\n                                 [allow-blank]=\"true\"\n                                 [disabled]=\"regMobNumberDisabled\"\n                                 (change)=\"changeHandle('rmn')\"\n                                 has-label=\"false\">\n              </amexio-text-input><br>\n              <amexio-label [size]=\"'small'\">or</amexio-label>\n              <amexio-text-input name=\"rn\"\n                                 [(ngModel)]=\"regNumber\"\n                                 [disabled]=\"regNumberDisabled\"\n                                 place-holder=\"Registration Number ( License Plate ) \"\n                                 [allow-blank]=\"true\"\n                                 (change)=\"changeHandle('rn')\"\n                                 has-label=\"false\">\n              </amexio-text-input>\n            </amexio-column>\n          </amexio-row>\n        </div>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n  </amexio-body>\n  <amexio-action>\n\n    <amexio-toolbar>\n      <amexio-toolbar-item position-right [seperator-position]=\"'right'\">\n        <amexio-button [label]=\"'Cancel'\" [type]=\"'theme-backgroundcolor'\"\n                       [tooltip]=\"'cancel'\" [size]=\"'large'\" (onClick)=\"onCancel($event)\" >\n        </amexio-button>\n      </amexio-toolbar-item>\n      <amexio-toolbar-item position-right style=\"padding-left: 15px;\">\n        <amexio-button [label]=\"'Back'\" [type]=\"'theme-backgroundcolor'\"\n                       [tooltip]=\"'Back'\" [size]=\"'large'\" (onClick)=\"onBackHandle($event)\" >\n        </amexio-button>\n        <amexio-button [label]=\"'Next'\" [type]=\"'theme-color'\" [disabled]=\"validUi()\"\n                       [tooltip]=\"'next'\" [size]=\"'large'\" (onClick)=\"onClickHandle($event)\" >\n        </amexio-button>\n      </amexio-toolbar-item>\n    </amexio-toolbar>\n  </amexio-action>\n</amexio-card>\n\n\n<amexio-dialogue [(show)]=\"warningdialogue\" [material-design]=\"true\" [message]=\"warningMsg\" [title]=\"'Error'\"\n                 [message-type]=\"'error'\" [type]=\"'alert'\">\n</amexio-dialogue>\n"

/***/ }),

/***/ "./src/app/quick-booking/quick.booking.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quick-booking/quick.booking.component.ts ***!
  \**********************************************************/
/*! exports provided: QuickBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickBookingComponent", function() { return QuickBookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rina_lib_src_lib_services_shared_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../rina-lib/src/lib/services/shared/http.service */ "../rina-lib/src/lib/services/shared/http.service.ts");
/* harmony import */ var _rina_lib_src_lib_services_shared_notification_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../rina-lib/src/lib/services/shared/notification-loader.service */ "../rina-lib/src/lib/services/shared/notification-loader.service.ts");
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



var QuickBookingComponent = /** @class */ (function () {
    function QuickBookingComponent(_httpService, NaLService) {
        this._httpService = _httpService;
        this.NaLService = NaLService;
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emiratesId = '';
        this.regMobNumber = '';
        this.regNumber = '';
        this.warningdialogue = false;
        this.warningMsg = '';
    }
    QuickBookingComponent.prototype.ngOnInit = function () {
        this.setDisabledFlag(false, false, false);
    };
    QuickBookingComponent.prototype.onClickHandle = function (event) {
        var _this = this;
        var response;
        this.NaLService.showLoader = true;
        var regNumber = this.regNumber.replace('/', '-');
        var createUrl = 'customer/search/' + this.checkvalue(this.emiratesId) + '/' + this.checkvalue(this.regMobNumber) + '/' + this.checkvalue(regNumber);
        this._httpService.fetch(createUrl, 'get').subscribe(function (res) {
            response = res;
        }, function (err) {
            _this.NaLService.showLoader = false;
            _this.warningMsg = 'Something went wrong';
            _this.warningdialogue = true;
        }, function () {
            if (response.success) {
                _this.NaLService.showLoader = false;
                _this.onNext.emit(response.response);
            }
            else {
                _this.NaLService.showLoader = false;
                _this.warningMsg = response.errorMessage;
                _this.warningdialogue = true;
            }
        });
    };
    QuickBookingComponent.prototype.changeHandle = function (key) {
        this.enableTextInput(key);
    };
    QuickBookingComponent.prototype.enableTextInput = function (key) {
        if (this.emiratesId.length > 0 && key === 'eid') {
            this.setDisabledFlag(false, true, true);
        }
        else if (this.regMobNumber.length > 0 && key === 'rmn') {
            this.setDisabledFlag(true, false, true);
        }
        else if (this.regNumber.length > 0 && key === 'rn') {
            this.setDisabledFlag(true, true, false);
        }
        else {
            this.setDisabledFlag(false, false, false);
        }
    };
    QuickBookingComponent.prototype.setDisabledFlag = function (eidFlag, rmnFlag, rnFlag) {
        this.emiratesIdDisabled = eidFlag;
        this.regMobNumberDisabled = rmnFlag;
        this.regNumberDisabled = rnFlag;
    };
    QuickBookingComponent.prototype.checkvalue = function (data) {
        var updatedValue;
        if (data.length === 0) {
            updatedValue = -1;
        }
        else {
            updatedValue = data;
        }
        return updatedValue;
    };
    QuickBookingComponent.prototype.validUi = function () {
        if (this.emiratesId !== '' || this.regMobNumber !== '' || this.regNumber !== '') {
            return false;
        }
        else {
            return true;
        }
    };
    QuickBookingComponent.prototype.onBackHandle = function (event) {
        this.onBack.emit(event);
    };
    QuickBookingComponent.prototype.onCancel = function (event) {
        this.onClose.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QuickBookingComponent.prototype, "onNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QuickBookingComponent.prototype, "onBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QuickBookingComponent.prototype, "onClose", void 0);
    QuickBookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'quick-booking',
            template: __webpack_require__(/*! ./quick.booking.component.html */ "./src/app/quick-booking/quick.booking.component.html")
        }),
        __metadata("design:paramtypes", [_rina_lib_src_lib_services_shared_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _rina_lib_src_lib_services_shared_notification_loader_service__WEBPACK_IMPORTED_MODULE_2__["NotificationAndLoaderService"]])
    ], QuickBookingComponent);
    return QuickBookingComponent;
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

module.exports = __webpack_require__(/*! /home/dattaram/metamagic/POC/gic-rina/projects/alfahim/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map