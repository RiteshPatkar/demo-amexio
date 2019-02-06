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
/* harmony import */ var _rinaccm_src_app_models_customer_profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../rinaccm/src/app/models/customer.profile.model */ "./src/app/models/customer.profile.model.ts");
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
/*! exports provided: RinaLibModule, ServiceAvailibilityModel, PropertyGridModel, ServiceAvailiblityComponent, PreferredLocationComponent, ServiceConfirmationComponent, AppoinmentConfirmationComponent, PropertyGridComponnent, BeforeConfirmComponent, ContentCardComponent, CustomerVehicleListComponent, ContentCardData, ServiceTypeComponent, CustomerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/rina-lib.module */ "../rina-lib/src/lib/rina-lib.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RinaLibModule", function() { return _lib_rina_lib_module__WEBPACK_IMPORTED_MODULE_0__["RinaLibModule"]; });

/* harmony import */ var _lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/model/service.availiblity.model */ "../rina-lib/src/lib/model/service.availiblity.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceAvailibilityModel", function() { return _lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_1__["ServiceAvailibilityModel"]; });

/* harmony import */ var _rinaccm_src_app_models_customer_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rinaccm/src/app/models/customer.details.model */ "./src/app/models/customer.details.model.ts");
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
/* harmony import */ var _feature_component_service_list_service_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./feature-component/service-list/service.list.component */ "./src/app/feature-component/service-list/service.list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var COMPONENT = [
    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _rina_home_rina_home_component__WEBPACK_IMPORTED_MODULE_3__["RinaHomeComponent"],
    _feature_component_vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_9__["VehicleDetailsComponent"], _feature_component_company_logo_company_logo_component__WEBPACK_IMPORTED_MODULE_10__["CompanyLogoComponent"],
    _feature_component_searchbox_searchbox_component__WEBPACK_IMPORTED_MODULE_11__["SearchBoxComponent"],
    _feature_component_service_list_service_list_component__WEBPACK_IMPORTED_MODULE_12__["ServiceListComponent"]
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

module.exports = "<amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" alignment=\"space-between\">\n  <amexio-layout-item [padding]=\"'0px'\">\n    <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" alignment=\"center\">\n      <amexio-layout-item [padding]=\"'0px'\">\n        <amexio-image [width]=\"'150px'\" [height]=\"'120px'\" [path]=\"'assets/images/giclogo.png'\" [filter]=\"'normal'\">\n        </amexio-image>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n  </amexio-layout-item>\n  <amexio-layout-item [padding]=\"'0px'\">\n    <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\" alignment=\"space-between\">\n      <amexio-layout-item [padding]=\"'0px'\">\n        <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-volume-control-phone fa-2x'\"  [type]=\"'green'\"></amexio-floating-button>\n      </amexio-layout-item>\n      <amexio-layout-item [padding]=\"'0px'\">\n        <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-phone  fa-2x'\" [type]=\"'theme-color'\"></amexio-floating-button>\n      </amexio-layout-item>\n      <amexio-layout-item [padding]=\"'0px'\">\n        <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-pause  fa-2x'\" [type]=\"'yellow'\"></amexio-floating-button>\n      </amexio-layout-item>\n      <amexio-layout-item [padding]=\"'0px'\">\n        <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-phone-square  fa-2x'\" [type]=\"'red'\"></amexio-floating-button>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n  </amexio-layout-item>\n</amexio-layout-columns>"

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
            },
            {
                'key': 'Emirates ID',
                'id': 3,
                selected: false
            },
            {
                'key': 'Registration No',
                'id': 4,
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
            searchId: this.searchId,
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
        if (service.serviceName === 'SERVICE BOOKING') {
            this.serviceTypeClick.emit(service);
        }
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

/***/ "./src/app/feature-component/vehicle-details/vehicle.details.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/feature-component/vehicle-details/vehicle.details.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card *ngFor=\"let vehicleModel of vehicleDetails; let i= index\"\n             [header]=\"false\"\n             [footer]=\"false\">\n    <amexio-body >\n      <div style=\"cursor: pointer\" (click)=\"onCardClick(vehicleModel)\">\n         <amexio-row >\n        <amexio-column [size]=\"6\">\n          <amexio-label>{{i+1}}/{{vehicleDetails.length}}: &nbsp;  {{vehicleModel.vehicleDetail.modelName}}</amexio-label>\n          <amexio-image [path]=\"vehicleModel.vehicleDetail.image\"></amexio-image><br>\n        </amexio-column>\n        <amexio-column [size]=\"6\">\n          <table>\n            <tr>\n              <td>Engine</td>\n              <td>: {{vehicleModel.vehicleDetail.engine}}</td>\n            </tr>\n            <tr>\n              <td>Horsepower</td>\n              <td>: {{vehicleModel.vehicleDetail.horsepower}}</td>\n            </tr>\n            <tr>\n              <td>Torque rpm</td>\n              <td>: {{vehicleModel.vehicleDetail.torque}}</td>\n            </tr>\n            <tr>\n              <td>Acceleration</td>\n              <td>: {{vehicleModel.vehicleDetail.acceleration}}</td>\n            </tr>\n            <tr>\n              <td>Top Speed</td>\n              <td>: {{vehicleModel.vehicleDetail.topSpeed}}</td>\n            </tr>\n            <tr>\n              <td>Model Year</td>\n              <td>: {{vehicleModel.vehicleDetail.modelYear}}</td>\n            </tr>\n            <tr>\n              <td>Registration No</td>\n              <td>: {{vehicleModel.registrationNo}}</td>\n            </tr>\n            <tr>\n              <td>Date of Purchase</td>\n              <td>: {{vehicleModel.dateOfPurchase}}</td>\n            </tr>\n            <tr>\n              <td>Purchased from</td>\n              <td>: {{vehicleModel.bu}}</td>\n            </tr>\n          </table>\n        </amexio-column>\n      </amexio-row>\n      </div>\n    </amexio-body>\n</amexio-card>\n\n"

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

/***/ "./src/app/rina-home/rina-home.component.html":
/*!****************************************************!*\
  !*** ./src/app/rina-home/rina-home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-spinner [show]=\"showLoader\" [type]=\"'spinnerround'\" [vertical-position]=\"'center'\" [horizontal-position]=\"'center'\"\n    [color]=\"'yellow'\">\n</amexio-spinner>\n<amexio-layout-grid [layout]=\"'rinahomepage'\">\n    <amexio-grid-item [name]=\"'logoposition'\">\n        <amexio-card [header]=\"false\" [footer]=\"false\">\n            <amexio-body>\n                <company-logo></company-logo>\n            </amexio-body>\n        </amexio-card>\n    </amexio-grid-item>\n    <amexio-grid-item [name]=\"'topslot2'\">\n        <span class=\"custdetail\">\n          <rina-property-grid [key-value-data]=\"customerKeyValuedata\" [has-image]=\"true\" [image]=\"customerModel.profileImageUrl\"></rina-property-grid>\n        </span>\n    </amexio-grid-item>\n    <amexio-grid-item [name]=\"'topslot3'\">\n      <rina-property-grid [key-value-data]=\"vehicleKeyValuedata\"></rina-property-grid>\n    </amexio-grid-item>\n    <amexio-grid-item [name]=\"'topslot4'\">\n      <rina-property-grid [key-value-data]=\"serviceKeyValuedata\"></rina-property-grid>\n    </amexio-grid-item>\n    <amexio-grid-item [name]=\"'guages'\">\n        <amexio-card [header]=\"false\" [footer]=\"false\">\n            <amexio-body>\n                <amexio-layout-columns [fit]=\"true\" [orientation]=\"'horizontal'\" [border]=\"false\">\n                    <amexio-layout-item [fit]=\"true\" *ngFor=\"let alignment of ['center']\">\n                        <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'vertical'\" [alignment]=\"alignment\">\n                            <amexio-layout-item>\n                                <amexio-dashboard-gauge [height]=\"'100%'\" [width]=\"'100%'\" [data]=\"gaugeChartData\"\n                                    [red-color-from]=\"90\" [red-color-to]=\"100\" [yellow-color-from]=\"75\"\n                                    [yellow-color-to]=\"90\" [scale-value]=\"5\">\n                                </amexio-dashboard-gauge>\n                                <amexio-row>\n                                    <amexio-column size=\"6\">\n                                        <amexio-label [size]=\"small\">\n                                            CSAT 70/100%\n                                        </amexio-label>\n                                    </amexio-column>\n                                    <amexio-column size=\"6\">\n                                        <amexio-label [size]=\"small\">\n                                            AHT SLA 200\n                                        </amexio-label>\n                                    </amexio-column>\n                                </amexio-row>\n                            </amexio-layout-item>\n                        </amexio-layout-columns>\n                    </amexio-layout-item>\n                </amexio-layout-columns>\n\n            </amexio-body>\n        </amexio-card>\n    </amexio-grid-item>\n    <amexio-grid-item [name]=\"'rinasidemenu'\">\n        <service-list-component [service-list]=\"serviceList\" (errorFound)=\"handleError()\" (search)=\"getSearchObject($event)\" (serviceTypeClick)=\"serviceTypeClickHandle($event)\"></service-list-component>\n    </amexio-grid-item>\n    <amexio-grid-item [name]=\"'rinasidecenter'\">\n        <amexio-layout-columns style=\"background-color: white\" [fit]=\"true\" [border]=\"false\" [orientation]=\"'vertical'\"\n            [alignment]=\"'space-between'\">\n            <amexio-layout-item [padding]=\"false\" [fit]=\"true\">\n                <amexio-tab-view #tab [divide-header-equally]=true [closable]=\"false\" [body-height]=\"46\">\n                    <amexio-tab title=\"VEHICLE DETAILS\" [active]=\"true\" [amexio-color]=\"'red'\">\n                        <ng-container *ngIf=\"customerModel.vehicles\">\n                            <vehicle-details (selectVehicle)=\"getSelectedVehicle($event)\" [vehicle-details]=\"customerModel.vehicles\"></vehicle-details>\n                        </ng-container>\n                    </amexio-tab>\n                    <amexio-tab title=\"BOOKING DETAILS\" [amexio-color]=\"'green'\">\n                        <amexio-datagrid [http-method]=\"'get'\" [http-url]=\"'assets/bookingdata.json'\" [data-reader]=\"'data'\"\n                            [page-size]=\"10\">\n\n                            <amexio-data-table-column [data-index]=\"'bookingId'\" [data-type]=\"'string'\" [text]=\"'Booking Id'\">\n                            </amexio-data-table-column>\n                            <amexio-data-table-column [sort]=\"false\" [data-index]=\"'bookingDate'\" [data-type]=\"'string'\"\n                                [text]=\"'Booking Date'\"></amexio-data-table-column>\n                            <amexio-data-table-column [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                [text]=\"'Name'\">\n\n                            </amexio-data-table-column>\n                        </amexio-datagrid>\n                    </amexio-tab>\n                    <amexio-tab title=\"SERVICE HISTORY\" [amexio-color]=\"'black'\">\n                        <amexio-datagrid [http-method]=\"'get'\" [http-url]=\"'assets/servicedata.json'\" [data-reader]=\"'data'\"\n                            [page-size]=\"10\">\n                            <amexio-data-table-column [width]=\"8\" [data-index]=\"'code'\" [data-type]=\"'string'\" [text]=\"'Code'\">\n                            </amexio-data-table-column>\n                            <amexio-data-table-column [sort]=\"false\" [data-index]=\"'date'\" [data-type]=\"'string'\"\n                                [text]=\"'Date'\">\n                            </amexio-data-table-column>\n                            <amexio-data-table-column [data-index]=\"'mileage'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                [text]=\"'Mileage'\">\n                            </amexio-data-table-column>\n                          <amexio-data-table-column [width]=\"18\" [data-index]=\"'details'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                                    [text]=\"'Details'\">\n                          </amexio-data-table-column>\n                          <amexio-data-table-column [data-index]=\"'wip'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                                    [text]=\"'WIP'\">\n                          </amexio-data-table-column>\n                          <amexio-data-table-column [data-index]=\"'account'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                                    [text]=\"'Account'\">\n                          </amexio-data-table-column>\n                          <amexio-data-table-column [data-index]=\"'value'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                                    [text]=\"'Value'\">\n                          </amexio-data-table-column>\n                          <amexio-data-table-column [data-index]=\"'invoice'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                                    [text]=\"'Invoice'\">\n                          </amexio-data-table-column>\n                          <amexio-data-table-column [data-index]=\"'jobNo'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                                    [text]=\"'Job No'\">\n                          </amexio-data-table-column>\n                          <amexio-data-table-column [width]=\"9\" [data-index]=\"'branch'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                                    [text]=\"'Branch'\">\n                          </amexio-data-table-column>\n                        </amexio-datagrid>\n                      <amexio-row>\n                        <amexio-column size=\"6\">\n                          <rina-property-grid [key-value-data]=\"serviceHistoryData1\"></rina-property-grid>\n\n                        </amexio-column>\n                        <amexio-column size=\"6\">\n                          <rina-property-grid [key-value-data]=\"serviceHistoryData2\"></rina-property-grid>\n                        </amexio-column>\n                      </amexio-row>\n                    </amexio-tab>\n                    <amexio-tab title=\"INTERACTION HISTORY\" [amexio-color]=\"'red'\">\n                        <amexio-datagrid [http-method]=\"'get'\" [http-url]=\"'assets/interaction.json'\" [data-reader]=\"'data'\"\n                            [page-size]=\"10\">\n\n                            <amexio-data-table-column [data-index]=\"'interactionDate'\" [data-type]=\"'string'\" [text]=\"'Interaction Date'\">\n                            </amexio-data-table-column>\n                            <amexio-data-table-column [sort]=\"false\" [data-index]=\"'name'\" [data-type]=\"'string'\"\n                                [text]=\"'Name'\"></amexio-data-table-column>\n                        </amexio-datagrid>\n                    </amexio-tab>\n                    <amexio-tab title=\"RIGHT SELL\" [amexio-color]=\"'blue'\">\n                        <amexio-datagrid [http-method]=\"'get'\" [http-url]=\"'assets/dummygrid.json'\" [data-reader]=\"'data'\"\n                            [page-size]=\"10\">\n\n                            <amexio-data-table-column [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\" [text]=\"'Awaiting Details'\">\n                            </amexio-data-table-column>\n                            <amexio-data-table-column [sort]=\"false\" [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\"\n                                [text]=\"'Awaiting Details'\"></amexio-data-table-column>\n                            <amexio-data-table-column [data-index]=\"'awaitingDetails'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                [text]=\"'Awaiting Details'\">\n\n                            </amexio-data-table-column>\n                        </amexio-datagrid>\n                    </amexio-tab>\n                </amexio-tab-view>\n\n            </amexio-layout-item>\n            <amexio-layout-item style=\"background-color: #E8E8E8\" [padding]=\"false\">\n                <amexio-layout-columns [fit]=\"true\" [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'start'\">\n                    <amexio-layout-item [fit]=\"true\">\n                      <div class=\"amexio-checkboxgroup-style\">\n                        <amexio-checkbox-group [data-reader]=\"'data'\" [display-field]=\"'serviceType'\" [value-field]=\"'serviceType'\"\n                                               [horizontal]=\"true\" [http-method]=\"'get'\" [http-url]=\"'assets/serviceType.json'\">\n                        </amexio-checkbox-group>\n                      </div>\n                    </amexio-layout-item>\n                </amexio-layout-columns>\n\n                <amexio-layout-columns [fit]=\"true\" [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'space-between'\">\n                    <amexio-layout-item [fit]=\"true\">\n                        <amexio-text-input place-holder=\"Call Remark\" [allow-blank]=\"true\" has-label=\"false\">\n                        </amexio-text-input>\n                    </amexio-layout-item>\n                    <amexio-layout-item>\n                        <amexio-button [size]=\"'medium'\" [label]=\"'Submit'\" [type]=\"'theme-color'\" [tooltip]=\"'submit'\">\n                        </amexio-button>\n                    </amexio-layout-item>\n                </amexio-layout-columns>\n            </amexio-layout-item>\n        </amexio-layout-columns>\n    </amexio-grid-item>\n    <amexio-grid-item [name]=\"'rinasidesearch'\">\n        <span class=\"servicelist\">\n            <amexio-card [header]=\"false\" [footer]=\"false\">\n                <amexio-body>\n                    <amexio-dropdown [place-holder]=\"'Select Script'\" [display-field]=\"'scriptName'\" [data-reader]=\"'data'\"\n                        [value-field]=\"'scriptUrl'\" [http-method]=\"'get'\" [http-url]=\"'assets/script.json'\"\n                        [enable-sort]=\"true\" [sort]=\"'asc'\">\n                    </amexio-dropdown>\n                </amexio-body>\n            </amexio-card>\n        </span>\n    </amexio-grid-item>\n</amexio-layout-grid>\n<amexio-dialogue [(show)]=\"warningdialogue\" [material-design]=\"true\" [message]=\"warningMsg\" [title]=\"'Error'\"\n    [message-type]=\"'error'\" [type]=\"'alert'\">\n</amexio-dialogue>\n\n\n<!-- WINDOW -->\n\n<amexio-window class=\"serviceconfirmation servicelist\" [top]=\"'10px'\" [(show)]=\"windowEnable\" type=\"window\" [header]=\"false\" [footer]=\"false\" [closable]=\"false\">\n  <amexio-body>\n    <br>\n    <amexio-row *ngIf=\"(currentstep > 2)\">\n      <amexio-column size=\"1\"></amexio-column>\n      <amexio-column size=\"10\">\n        <amexio-steps [icon]=\"true\">\n          <amexio-step-block  [label]=\"'Location'\" [active]=\"(currentstep === 4)\" [icon]=\"'fa fa-map-marker fa-2x'\">\n          </amexio-step-block>\n          <amexio-step-block [label]=\"'Service Type'\" [active]=\"(currentstep === 5)\" [icon]=\"'fa fa-cubes fa-2x'\">\n          </amexio-step-block>\n          <amexio-step-block [label]=\"'sale'\" [active]=\"(currentstep === 6)\" [icon]=\"'fa fa-superpowers fa-2x'\">\n          </amexio-step-block>\n          <amexio-step-block [label]=\"'Confirm'\" [active]=\"(currentstep === 7)\" [icon]=\"'fa fa-check-circle fa-2x'\">\n          </amexio-step-block>\n          <amexio-step-block [label]=\"'Info'\" [active]=\"(currentstep === 8)\" [icon]=\"'fa fa-info fa-2x'\">\n          </amexio-step-block>\n        </amexio-steps>\n      </amexio-column>\n      <amexio-column size=\"1\"></amexio-column>\n    </amexio-row>\n\n    <customer-vehicle-list *ngIf=\"(currentstep === 2)\"\n                           [customer-profile]=\"customerModel\"\n                           (onBack)=\"vehicleListBack($event)\"\n                           (onClose)=\"vehicleListBack($event)\"\n                           (onVehicleListNext)=\"onVehicleListHandle($event)\">\n    </customer-vehicle-list>\n\n\n    <preferred-location *ngIf=\"(currentstep === 4)\"\n                        (onNext)=\"scheduleAppointment($event)\"\n                        (onPrevious)=\"onPrevious($event)\"\n                        (onClose)=\"vehicleListBack($event)\"\n                        [service-model]=\"serviceModel\">\n    </preferred-location>\n\n    <service-job-type *ngIf=\"(currentstep === 5)\"\n                      (onNext)=\"onServiceTypeNextHandle($event)\"\n                      (onBack)=\"onServiceTypeBackHandle($event)\"\n                      (onClose)=\"onCloseClick($event)\"></service-job-type>\n\n    <before-confirm *ngIf=\"(currentstep === 6)\"\n                    (onClose)=\"vehicleListBack($event)\"\n                    (onBeforeBack)=\"onBeforeBackHandle($event)\"\n                    (onBeforeConfirmClick)=\"onBeforeConfirmClickHandle($event)\">\n    </before-confirm>\n\n    <service-confirmation *ngIf=\"(currentstep === 7)\"\n                          [service-model]=\"serviceModel\"\n                          (onClose)=\"vehicleListBack($event)\"\n                          (onPrevious)=\"onServiceConfirmPrevious($event)\"\n                          (onConfirm)=\"onAppointmentConfirm($event)\">\n    </service-confirmation>\n\n    <appointment-confirmation *ngIf=\"(currentstep === 8)\"\n                              [appointment-msg]=\"appointmentMsg\"\n                              (onConfirm)=\"onCloseClick()\">\n    </appointment-confirmation>\n  </amexio-body>\n</amexio-window>\n\n\n\n\n"

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
/* harmony import */ var _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../rina-lib/src/lib/model/shared/propertygrid.model */ "../rina-lib/src/lib/model/shared/propertygrid.model.ts");
/* harmony import */ var _rina_lib_src_lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../rina-lib/src/lib/model/service.availiblity.model */ "../rina-lib/src/lib/model/service.availiblity.model.ts");
/* harmony import */ var _rina_lib_src_lib_services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../rina-lib/src/lib/services/alfahim/window.toggle.service */ "../rina-lib/src/lib/services/alfahim/window.toggle.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
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









var msgtype = {
    1: 'customer id',
    2: 'mobile no'
};
var RinaHomeComponent = /** @class */ (function () {
    function RinaHomeComponent(_httpService, datePipe, _windowTService, _personalDetailsService, _gridlayoutService) {
        this._httpService = _httpService;
        this.datePipe = datePipe;
        this._windowTService = _windowTService;
        this._personalDetailsService = _personalDetailsService;
        this._gridlayoutService = _gridlayoutService;
        this.serviceList = [];
        this.warningdialogue = false;
        this.warningMsg = '';
        this.showLoader = false;
        this.gaugeChartData = [];
        this.currentstep = 3;
        this.windowEnable = false;
        this.appointmentMsg = '';
        this._windowTService.appType = '2';
        this.serviceModel = new _rina_lib_src_lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_6__["ServiceAvailibilityModel"]();
        this.gaugeChartData = [
            ['Label', 'Value'],
            ['CSAT', 80],
            ['AHT-SLA', 68]
        ];
        this.createLayouts();
        this._gridlayoutService.createLayout(this.rinaHomeDesktopLayout);
        this.defaultData();
    }
    RinaHomeComponent.prototype.ngOnInit = function () {
        this.getServiceList();
        this.createServiceHistoryDataStructure();
    };
    RinaHomeComponent.prototype.getServiceList = function () {
        var _this = this;
        this._httpService.fetchLocalData('assets/serviceList.json', 'get').subscribe(function (res) {
            _this.serviceList = res.data;
        });
    };
    RinaHomeComponent.prototype.createLayouts = function () {
        this.rinaHomeDesktopLayout = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConfig"]('rinahomepage', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConstants"].Desktop)
            .addlayout(['logoposition', 'topslot2', 'topslot3', 'topslot4', 'guages'])
            .addlayout(['rinasidemenu', 'rinasidecenter', 'rinasidecenter', 'rinasidecenter', 'rinasidesearch']);
    };
    RinaHomeComponent.prototype.getSearchObject = function (searchObject) {
        var _this = this;
        var response;
        this.showLoader = true;
        if (searchObject.searchType === '4') {
            searchObject.searchId.replace('/', '-');
        }
        this._httpService.fetch('customer/search/' + searchObject.searchId + '/' + searchObject.searchType, 'get').subscribe(function (res) {
            response = res;
        }, function (error) {
            _this.showLoader = false;
            _this.warningMsg = 'Something went wrong';
            _this.warningdialogue = true;
        }, function () {
            if (response.success) {
                _this.showLoader = false;
                _this.customerModel = response.response;
                _this.vehicle = _this.customerModel.vehicles[0];
                _this.createPropertyStructure();
                _this._personalDetailsService.setPersonalDetailsForCcm(_this.customerModel);
                _this.serviceList[0].disabled = false;
            }
            else {
                _this.serviceList[0].disabled = true;
                _this.showLoader = false;
                _this.warningMsg = response.errorMessage;
                // this.warningMsg = 'Record not found for ' + msgtype[searchObject.searchType] + ' (' + searchObject.searchId + ')';
                _this.warningdialogue = true;
                _this.defaultData();
            }
        });
    };
    RinaHomeComponent.prototype.createCustomerDetailsPropertyStructure = function () {
        this.customerKeyValuedata = [];
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Customer ID', this.customerModel.customerId));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Mobile #', this.customerModel.mobile));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Name', this.customerModel.name));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Company', this.customerModel.companyName));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Emirates ID', this.customerModel.uaeId));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Email', this.customerModel.email));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Alt Number', this.customerModel.altNumber));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Birthday', this.customerModel.birthday));
        this.customerKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Anniversary', this.customerModel.anniversary));
    };
    RinaHomeComponent.prototype.createVehicleDetailsPropertyStructure = function () {
        this.vehicleKeyValuedata = [];
        this.vehicleKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('BU', this.vehicle.bu));
        this.vehicleKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Vehicle', this.vehicle.vehicleDetail.modelName));
        this.vehicleKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Date of Purchase', this.vehicle.dateOfPurchase));
        this.vehicleKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Model Year', this.vehicle.vehicleDetail.modelYear));
        this.vehicleKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Registration No', this.vehicle.registrationNo));
        this.vehicleKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Customer Class', this.customerModel.customerClass));
        this.vehicleKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Preferred Mode of Contact', this.customerModel.preferredModeOfContact));
    };
    RinaHomeComponent.prototype.createServiceHistoryPropertyStructure = function () {
        this.serviceKeyValuedata = [];
        this.serviceKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Last Service', this.vehicle.lastService));
        this.serviceKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Next Service', this.vehicle.nextService));
        this.serviceKeyValuedata.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Open SRs', this.vehicle.openSRs));
    };
    RinaHomeComponent.prototype.handleError = function () {
        this.defaultData();
    };
    RinaHomeComponent.prototype.getSelectedVehicle = function (vehicle) {
        this.vehicle = vehicle;
        this.createVehicleDetailsPropertyStructure();
        this.createServiceHistoryPropertyStructure();
    };
    RinaHomeComponent.prototype.defaultData = function () {
        this.customerModel = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_4__["CustomerProfile"]();
        this.vehicle = new _models_customer_profile_model__WEBPACK_IMPORTED_MODULE_4__["Vehicles"]();
        this.createPropertyStructure();
    };
    RinaHomeComponent.prototype.createPropertyStructure = function () {
        this.createCustomerDetailsPropertyStructure();
        this.createVehicleDetailsPropertyStructure();
        this.createServiceHistoryPropertyStructure();
    };
    RinaHomeComponent.prototype.serviceTypeClickHandle = function (event) {
        this.windowEnable = true;
        this.currentstep = 2;
    };
    RinaHomeComponent.prototype.scheduleAppointment = function (serviceModel) {
        this._personalDetailsService.setPeferredLocation(serviceModel);
        this.currentstep = this._windowTService.getNextWindow(this.currentstep);
    };
    RinaHomeComponent.prototype.onServiceConfirmPrevious = function (event) {
        this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
    };
    RinaHomeComponent.prototype.onCloseClick = function () {
        this.currentstep = -1;
        this.windowEnable = false;
        this.serviceModel = new _rina_lib_src_lib_model_service_availiblity_model__WEBPACK_IMPORTED_MODULE_6__["ServiceAvailibilityModel"]();
        this._personalDetailsService.resetServiceData();
    };
    RinaHomeComponent.prototype.onAppointmentConfirm = function (event) {
        var pModel = this._personalDetailsService.getPersonalDetails();
        var fullName = pModel.firstName + pModel.surname;
        var serModel = this._personalDetailsService.getPeferredLocation();
        this.appointmentMsg = 'Service has been booked on ' + this.datePipe.transform(serModel.appointmentDate, 'MMM dd, yyyy') + ' at ' + serModel.selectedSlot + ' for ' + fullName + '.';
        this.currentstep = this._windowTService.getNextWindow(this.currentstep);
    };
    RinaHomeComponent.prototype.onPrevious = function () {
        this.currentstep = this._windowTService.getPreviousWindow(this.currentstep - 1);
    };
    RinaHomeComponent.prototype.onBeforeConfirmClickHandle = function (event) {
        this.currentstep = this._windowTService.getNextWindow(this.currentstep);
    };
    RinaHomeComponent.prototype.onBeforeBackHandle = function (event) {
        this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
    };
    RinaHomeComponent.prototype.onVehicleListHandle = function (personalDetails) {
        this._personalDetailsService.setPersonalDetails(personalDetails);
        this.currentstep = this._windowTService.getNextWindow(this.currentstep + 1);
    };
    RinaHomeComponent.prototype.vehicleListBack = function (event) {
        this.onCloseClick();
    };
    RinaHomeComponent.prototype.onServiceTypeNextHandle = function (event) {
        this._personalDetailsService.setExtraServiceData(event);
        this.currentstep = this._windowTService.getNextWindow(this.currentstep);
    };
    RinaHomeComponent.prototype.onServiceTypeBackHandle = function (event) {
        this.currentstep = this._windowTService.getPreviousWindow(this.currentstep);
    };
    RinaHomeComponent.prototype.createServiceHistoryDataStructure = function () {
        this.serviceHistoryData1 = [];
        this.serviceHistoryData2 = [];
        this.serviceHistoryData1.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Last Service', '09/30/2018 @ 90208 km'));
        this.serviceHistoryData1.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Next Service Due', '03/20/2019 @ 105282 km'));
        this.serviceHistoryData1.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Date Last work', '09/30/2018 @ 90208 km'));
        this.serviceHistoryData1.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Service Contact Number', ''));
        this.serviceHistoryData1.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Timing belt mileage', '0  or 0 months'));
        this.serviceHistoryData2.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Last MOT Date', ''));
        this.serviceHistoryData2.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('MOT Due', '12/20/2017'));
        this.serviceHistoryData2.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Return Parts', ''));
        this.serviceHistoryData2.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Return Parts', ''));
        this.serviceHistoryData2.push(new _rina_lib_src_lib_model_shared_propertygrid_model__WEBPACK_IMPORTED_MODULE_5__["PropertyGridModel"]('Emissions', '0.0'));
    };
    RinaHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rina-home',
            template: __webpack_require__(/*! ./rina-home.component.html */ "./src/app/rina-home/rina-home.component.html")
        }),
        __metadata("design:paramtypes", [_rina_lib_src_lib_services_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _rina_lib_src_lib_services_alfahim_window_toggle_service__WEBPACK_IMPORTED_MODULE_7__["WindowToogleService"],
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

module.exports = __webpack_require__(/*! /home/dattaram/metamagic/POC/gic-rina/projects/rinaccm/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map