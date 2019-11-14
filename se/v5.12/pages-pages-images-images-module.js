(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-images-images-module"],{

/***/ "./src/app/pages/pages/images/images.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/pages/images/images.component.ts ***!
  \********************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
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

var ImagesComponent = /** @class */ (function () {
    function ImagesComponent() {
    }
    ImagesComponent.prototype.ngOnInit = function () { };
    ImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'images',
            template: __webpack_require__(/*! ./images.html */ "./src/app/pages/pages/images/images.html"),
            styles: ["\n    \n    "]
        }),
        __metadata("design:paramtypes", [])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages/images/images.html":
/*!************************************************!*\
  !*** ./src/app/pages/pages/images/images.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-row>\n    <amexio-column [size]=\"3\">\n      <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n      [image-title]=\"'Normal'\" \n      [title-position]=\"'top-left'\">\n      </amexio-image>\n    </amexio-column> \n    <amexio-column [size]=\"3\">    \n        <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n        [filter]=\"'grayscale'\" \n        [image-title]=\"'grayscale'\" \n        [title-position]=\"'centered'\">\n        </amexio-image>  \n      </amexio-column>  \n        <amexio-column [size]=\"3\">\n          <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n            [filter]=\"'invert'\" \n            [image-title]=\"'invert'\" \n            [title-position]=\"'bottom-right'\">\n          </amexio-image>\n        </amexio-column>\n        <amexio-column [size]=\"3\">\n          <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n          [filter]=\"'sepia'\"\n          [image-title]=\"'sepia'\" \n          [title-position]=\"'bottom-left'\"></amexio-image>\n      </amexio-column> \n  </amexio-row>\n  <amexio-row>\n    <amexio-column [size]=\"3\">\n      <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n            [filter]=\"'small'\" \n            [image-title]=\"'small'\" \n            [title-position]=\"'top-right'\">\n      </amexio-image>\n      </amexio-column>  \n        <amexio-column [size]=\"3\">\n            <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n            [filter]=\"'saturate'\"\n            [image-title]=\"'saturate'\" \n        [title-position]=\"'top-right'\"></amexio-image>\n        </amexio-column>\n        <amexio-column [size]=\"3\">\n          <amexio-image \n          [path]=\"'assets/images/carousel/set1/3.jpg'\"\n          [filter]=\"'brightness'\"\n          [image-title]=\"'brightness'\" \n        [title-position]=\"'top-right'\"></amexio-image>\n      </amexio-column> \n            <amexio-column [size]=\"3\">\n          <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n          [filter]=\"'blur'\"\n          [image-title]=\"'blur'\" \n        [title-position]=\"'top-right'\"></amexio-image>\n      </amexio-column> \n  </amexio-row>\n  <amexio-row>\n    <amexio-column [size]=\"3\">    \n      <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n            [filter]=\"'hue'\"\n            [image-title]=\"'hue'\" \n        [title-position]=\"'top-right'\">\n      </amexio-image>\n    </amexio-column>  \n    <amexio-column [size]=\"3\">\n      <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n          [filter]=\"'opacity'\"\n          [image-title]=\"'opacity'\" \n        [title-position]=\"'top-right'\"></amexio-image>\n    </amexio-column> \n    <amexio-column [size]=\"3\">\n        <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n        [filter]=\"'round'\"\n        [image-title]=\"'round'\" \n        [title-position]=\"'top-right'\"></amexio-image>\n    </amexio-column>\n    <amexio-column [size]=\"3\">\n          <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n          [filter]=\"'shadow'\"\n          [image-title]=\"'shadow'\" \n        [title-position]=\"'top-right'\"></amexio-image>\n    </amexio-column> \n  </amexio-row>\n  \n  <amexio-row>\n      <amexio-column [size]=\"3\">\n          <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n                [overlay-effect]=\"'fade'\">\n          </amexio-image>\n        </amexio-column> \n    <amexio-column [size]=\"3\">\n        <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n        [overlay-effect]=\"'box'\"\n        [overlay-text]=\"'Overlay Fade Box!'\"></amexio-image>\n    </amexio-column>\n\n    <amexio-column [size]=\"3\">\n        <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n        [overlay-effect]=\"'title'\"\n        [overlay-text]=\"'Overlay Fade Title!'\"></amexio-image>\n    </amexio-column>\n    <amexio-column [size]=\"3\">\n      <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n        [overlay-effect]=\"'fade'\" \n        [overlay-text]=\"'Overlay Fade!'\">\n        </amexio-image>\n    </amexio-column> \n  </amexio-row> \n  <amexio-row>\n      <amexio-column [size]=\"3\">\n          <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n          [overlay-effect]=\"'slide-right'\"\n          [overlay-text]=\"'Overlay Fade Right!'\"></amexio-image>\n      </amexio-column>\n      <amexio-column [size]=\"3\">\n          <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n          [overlay-effect]=\"'slide-left'\"\n          [overlay-text]=\"'Overlay Fade Left!'\"></amexio-image>\n      </amexio-column>\n        <amexio-column [size]=\"3\">\n          <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n          [overlay-effect]=\"'slide-top'\"\n          [overlay-text]=\"'Overlay Fade top!'\"></amexio-image>\n      </amexio-column>\n    \n      <amexio-column [size]=\"3\">\n        <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n          [overlay-effect]=\"'slide-bottom'\" \n          [overlay-text]=\"'Overlay Fade Bottom!'\">\n        </amexio-image>\n      </amexio-column> \n    </amexio-row>\n  <amexio-row>\n    <amexio-column [size]=\"3\">\n        <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n        [overlay-effect]=\"'slide-right'\"\n        [overlay-text]=\"'Overlay Fade Right!'\" \n        [para]=\"'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'\">\n    </amexio-image>\n    </amexio-column>\n    <amexio-column [size]=\"3\">\n        <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n        [overlay-effect]=\"'slide-left'\"\n        [overlay-text]=\"'Overlay Fade Left!'\"\n        [para]=\"'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'\">\n    </amexio-image>\n    </amexio-column>\n      <amexio-column [size]=\"3\">\n        <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n        [overlay-effect]=\"'slide-top'\"\n        [overlay-text]=\"'Overlay Fade top!'\"\n        [para]=\"'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'\">\n    </amexio-image>\n    </amexio-column>\n  \n    <amexio-column [size]=\"3\">\n      <amexio-image [path]=\"'assets/images/carousel/set1/3.jpg'\"\n        [overlay-effect]=\"'slide-bottom'\" \n        [overlay-text]=\"'Overlay Fade Bottom!'\"\n        [para]=\"'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'\">\n      </amexio-image>\n    </amexio-column> \n  </amexio-row>\n\n\n"

/***/ }),

/***/ "./src/app/pages/pages/images/images.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/pages/images/images.module.ts ***!
  \*****************************************************/
/*! exports provided: ImagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesModule", function() { return ImagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _images_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images.component */ "./src/app/pages/pages/images/images.component.ts");
/**
 * Created by payalk07 on 7/4/18.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _images_component__WEBPACK_IMPORTED_MODULE_5__["ImagesComponent"] }
];
var ImagesModule = /** @class */ (function () {
    function ImagesModule() {
    }
    ImagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioFormsModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _images_component__WEBPACK_IMPORTED_MODULE_5__["ImagesComponent"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: []
        })
    ], ImagesModule);
    return ImagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-images-images-module.js.map