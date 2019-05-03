(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
 * Created by sagar on 3/8/17.
 */

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.max = 10;
        this.iconArray = [];
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
                        "name": "Ketan Gote",
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
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! ./profile.html */ "./src/app/pages/profile/profile.html")
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.html":
/*!********************************************!*\
  !*** ./src/app/pages/profile/profile.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-row>\n  <amexio-column [size]=\"5\">\n    <amexio-card  [header] = \"true\" [footer]=\"false\">\n      <amexio-header>\n        Araf Karsh\n      </amexio-header>\n\n      <amexio-body>\n        <amexio-row>\n          <amexio-column [size]=\"12\">\n            <h4>Co-Founder / Chief Technology Officer</h4>\n          </amexio-column>\n        </amexio-row>\n        <amexio-row>\n          <amexio-column [size]=\"12\">\n            <amexio-image [path]=\"'assets/images/profile/karsh.jpg'\"></amexio-image>\n          </amexio-column>\n        </amexio-row>\n\n        <amexio-row>\n          <amexio-column [size]=\"12\">\n            <a href=\"\">xyz@metamagic.in</a><br>\n            Working since 13 months <br>\n            <a href=\"https://metamagicglobal.com/\">www.metamagicglobal.com</a><br>\n          </amexio-column>\n        </amexio-row>\n\n        <amexio-row>\n          <amexio-column [size]=\"12\">\n            &nbsp;&nbsp;\n          </amexio-column>\n        </amexio-row>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n  <amexio-column [size]=\"7\">\n         <amexio-listbox [height]=\"620\" [data]=\"bindData\" [filter]=\"true\" [header] = \"'Contacts'\"\n                        [enable-checkbox] = \"false\" [data-reader]=\"'response.data'\"\n                        [display-field]=\"'name'\">\n          <ng-template #amexioBodyTmpl let-row=\"row\">\n            <amexio-row>\n             <amexio-column [size]=\"2\">\n                <div class=profile-image-round>\n                  <img src=\"assets/images/profile/{{row.profile}}\"/></div>\n              </amexio-column>\n              <amexio-column [size]=\"10\">\n                <div  class=\"title\">\n                  {{row.name}} <br><a href=\"#\">xyz@metamagicglobal.com</a>\n                </div>\n            </amexio-column>\n            </amexio-row>\n          </ng-template>\n        </amexio-listbox>\n\n  </amexio-column>\n<amexio-row>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/pages/profile/profile.component.ts");
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






//import{AmexioMediaModule} from "amexio-ng-extensions"
var routes = [
    { path: '', component: _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] }
];
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
            ],
            providers: []
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map