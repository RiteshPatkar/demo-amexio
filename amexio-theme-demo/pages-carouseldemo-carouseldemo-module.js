(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-carouseldemo-carouseldemo-module"],{

/***/ "./src/app/pages/carouseldemo/carouseldemo.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/carouseldemo/carouseldemo.component.ts ***!
  \**************************************************************/
/*! exports provided: CarouselDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselDemoComponent", function() { return CarouselDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Created by sagar on 2/8/17.
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

var CarouselDemoComponent = /** @class */ (function () {
    function CarouselDemoComponent() {
        this.dealData = [
            {
                "price": "1099",
                "img": "assets/images/carousel/deals/1.jpg",
                "desc": "Slicer and Dicer Kitchen Set (12-Piece)",
                "rating": 3,
                "active": true
            },
            {
                "price": "299",
                "img": "assets/images/carousel/deals/2.jpg",
                "desc": "Ultimate Skin Spa Facial Cleanser and Massaging Brush System"
            },
            {
                "price": "99",
                "img": "assets/images/carousel/deals/3.jpg",
                "desc": "10 Ft Apple-Certified Braided Lightning Cable (1-, 2-, or 3-Pack)"
            },
            {
                "price": "2499",
                "img": "assets/images/carousel/deals/4.jpg",
                "desc": "Stainless Steel Milanese Loop Replacement Band for 38mm or 42mm Apple Watches"
            },
            {
                "price": "2499",
                "img": "assets/images/carousel/deals/5.jpg",
                "desc": "Men's Single- or Double-Breasted Wool-Blend Coat"
            },
            {
                "price": "1999",
                "img": "assets/images/carousel/deals/6.jpg",
                "desc": "Sonic-FX Duo Electric Toothbrushes"
            },
            {
                "price": "399",
                "img": "assets/images/carousel/deals/7.jpg",
                "desc": "Sorbus Fridge and Freezer Organizer Bins Set (6-Piece)"
            },
        ];
        this.viewData =
            [
                {
                    quote: "Only I can change my life. No one can do it for me.",
                    by: "Carol Brunett"
                },
                {
                    quote: "Life is 10% what happens to you and 90% how you react to it.",
                    by: "Charles R. Swindoll"
                },
                {
                    quote: "It does not matter how slowly you go as long as you do not stop.",
                    by: "Confucius"
                },
                {
                    quote: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
                    by: "Helen Keller"
                },
                {
                    quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
                    by: "Ayn Rand"
                },
                {
                    quote: "You can't cross the sea merely by standing and staring at the water",
                    by: "Rabindranath Tagore"
                },
                {
                    quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
                    by: "Michael Jordan"
                },
                {
                    quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
                    by: "Henry Ford"
                },
                {
                    quote: "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
                    by: "Mother Teresa"
                }
            ];
    }
    CarouselDemoComponent.prototype.ngOnInit = function () { };
    ;
    ;
    CarouselDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carouseldemo',
            template: __webpack_require__(/*! ./carouseldemo.html */ "./src/app/pages/carouseldemo/carouseldemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], CarouselDemoComponent);
    return CarouselDemoComponent;
}());



/***/ }),

/***/ "./src/app/pages/carouseldemo/carouseldemo.html":
/*!******************************************************!*\
  !*** ./src/app/pages/carouseldemo/carouseldemo.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card [header]=\"true\">\n  <amexio-header>Carousel View</amexio-header>\n  <amexio-body>\n    <amexio-tab-view  [closable]=\"false\">\n      <amexio-tab [title]=\"'99-Store'\"  [active]=\"true\" [icon]=\"'fa fa-usd fa-fw '\" >\n        <amexio-carousel [data]=\"dealData\" mode=\"multiple\" [header]=\"'Black Friday Deals ...'\" shuffleinterval=\"2000\" >\n          <ng-template let-i amexioTemplate=\"item\">\n            <amexio-card>\n              <amexio-body>\n                <div style=\"height: 380px;\">\n                  <img src={{i.img}}/>\n                    <p class=\"deal-text\">{{i.desc}}  </p>\n                    <amexio-row>\n                      <amexio-column [size]=\"9\"></amexio-column>\n                    <!-- <amexio-rating-input [max]=\"10\" [(ngModel)]=\"{{i.rate}}\"></amexio-rating-input> -->\n                      <amexio-column [size]=\"3\">\n                        <a class=\"deal-price\">\n                          ₹ {{i.price}}\n                        </a>\n                      </amexio-column>\n                    </amexio-row>\n                </div>\n              </amexio-body>\n            </amexio-card>\n          </ng-template>\n        </amexio-carousel>\n\n      </amexio-tab>\n\n      <amexio-tab [title]=\"'Quotes'\"  [active]=\"false\" [icon]=\"'fa fa-thumbs-o-up '\" >\n        <amexio-carousel [data]=\"viewData\" mode=\"multiple\" [header]=\"'Penny for your thoughts..'\" shuffleinterval=\"2000\" >\n          <ng-template let-i amexioTemplate=\"item\">\n            <amexio-card>\n              <amexio-body>\n                <div style=\"height: 200px;width:300px;\">\n                  <!-- <p class=\"quotation-mark\">\"</p> -->\n                  <p class=\"quote-text\">\n                  {{i.quote}}\n\n                  <br /> <br />\n                  <!-- <div class=\"quote-right\"> -->\n                  <b>-{{i.by}}</b>\n                  <!-- <p class=\"quotation-mark-right\">\"</p> -->\n                <!-- </div> -->\n                </div>\n              </amexio-body>\n            </amexio-card>\n          </ng-template>\n        </amexio-carousel>\n\n      </amexio-tab>\n    </amexio-tab-view>\n\n\n  </amexio-body>\n</amexio-card>\n"

/***/ }),

/***/ "./src/app/pages/carouseldemo/carouseldemo.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/carouseldemo/carouseldemo.module.ts ***!
  \***********************************************************/
/*! exports provided: CarouselDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselDemoModule", function() { return CarouselDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _carouseldemo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carouseldemo.component */ "./src/app/pages/carouseldemo/carouseldemo.component.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by sagar on 2/8/17.
 */






var routes = [
    { path: '', component: _carouseldemo_component__WEBPACK_IMPORTED_MODULE_4__["CarouselDemoComponent"] }
];
var CarouselDemoModule = /** @class */ (function () {
    function CarouselDemoModule() {
    }
    CarouselDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioFormsModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioLayoutModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioPaneModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioDataModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioNavModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _carouseldemo_component__WEBPACK_IMPORTED_MODULE_4__["CarouselDemoComponent"]
            ],
            providers: []
        })
    ], CarouselDemoModule);
    return CarouselDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-carouseldemo-carouseldemo-module.js.map