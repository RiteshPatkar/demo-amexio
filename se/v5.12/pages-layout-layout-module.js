(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-layout-layout-module"],{

/***/ "./src/app/pages/layout/dynamictabdemo.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/layout/dynamictabdemo.component.ts ***!
  \**********************************************************/
/*! exports provided: DyanmicTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DyanmicTabComponent", function() { return DyanmicTabComponent; });
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


var DyanmicTabComponent = /** @class */ (function () {
    function DyanmicTabComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DyanmicTabComponent.prototype, "content", void 0);
    DyanmicTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "dynamictab",
            template: "\n        Content : {{content}}\n    "
        })
    ], DyanmicTabComponent);
    return DyanmicTabComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout/layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/layout/layout.component.ts ***!
  \**************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamictabdemo.component */ "./src/app/pages/layout/dynamictabdemo.component.ts");
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


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
        this.clickMsgArray = [];
        this.rate = 7;
        this.max = 10;
        this.isReadonly = false;
        this.tabcount = 4;
        this.user = false;
        this.shop = true;
        this.payment = false;
        this.confirmation = false;
        this.flag = false;
        this.radioGroupData = {
            response: {
                data: [{
                        gender: 'Male', genderId: 'male'
                    }, {
                        gender: 'Female', genderId: 'female'
                    },]
            }
        };
        this.viewData =
            [
                {
                    "title": "view 1",
                    "img": "assets/images/carousel/set1/1.jpg",
                    "desc": "The vision must be followed by the venture. It is not enough to stare up the steps - we must step up the stairs.",
                    "active": true
                },
                {
                    "title": "view 2",
                    "img": "assets/images/carousel/set1/2.jpg",
                    "desc": "If this is coffee, please bring me some tea; but if this is tea, please bring me some coffee."
                },
                {
                    "title": "view 3",
                    "img": "assets/images/carousel/set1/3.jpg",
                    "desc": "Either you run the day or the day runs you."
                },
                {
                    "title": "view 5",
                    "img": "assets/images/carousel/set1/5.jpg",
                    "desc": "If I had asked people what they wanted, they would have said faster horses."
                },
                {
                    "title": "view 6",
                    "img": "assets/images/carousel/set1/6.jpg",
                    "desc": "Coffee is a beverage that puts one to sleep when not drank."
                },
                {
                    "title": "view 7",
                    "img": "assets/images/carousel/set1/7.jpg",
                    "desc": "Together we can face any challenges as deep as the ocean and as high as the sky."
                },
                {
                    "title": "view 8",
                    "img": "assets/images/carousel/set1/8.jpg",
                    "desc": "Momma said life is like a box of chocolates, you never know what you're gonna get."
                },
                {
                    "title": "view 9",
                    "img": "assets/images/carousel/set1/9.jpg",
                    "desc": "Alcohol may be man's worst enemy, but the bible says love your enemy."
                },
                {
                    "title": "view 10",
                    "img": "assets/images/carousel/set1/10.jpg",
                    "desc": "You only need one a day, but i will have 4 :)"
                },
                {
                    "title": "view 11",
                    "img": "assets/images/carousel/set1/11.jpg",
                    "desc": "Dogs don’t rationalize. They don’t hold anything against a person. They don’t see the outside of a human but the inside of a human"
                }
            ];
        this.bindData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name": "Ketan Gote",
                        "name_official": "Ketan Gote",
                        "profile": "ketan.jpg"
                    },
                    {
                        "name": "vrushabh kokil",
                        "name_official": "vrushabh kokil",
                        "profile": "vrushabh.jpg"
                    },
                    {
                        "name": "Dattaram Gawas",
                        "name_official": "Dattaram Gawas",
                        "profile": "dats.jpg"
                    },
                    {
                        "name": "Sagar Jadhav",
                        "name_official": "Sagar Jadhav",
                        "profile": "sagar.jpg"
                    },
                    {
                        "name": "sandip mohite",
                        "name_official": "sandip mohite",
                        "profile": "sandip.jpg"
                    },
                    {
                        "name": "vrushabh Jadhav",
                        "name_official": "vrushabh Jadhav",
                        "profile": "ahutosh.jpg"
                    }
                ]
            }
        };
        this.isVisible = false;
    }
    LayoutComponent.prototype.addtab = function (tab) {
        this.tabcount++;
        var title = 'Tab ' + this.tabcount;
        var cmp = tab.addDynamicTab(title, "red", true, _dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_1__["DyanmicTabComponent"]);
        cmp.content = "Content of " + title;
    };
    //Method to close all tabs alltogether
    LayoutComponent.prototype.closeAllTabs = function (tab) {
        tab.closeAllTabs();
    };
    //Method to set tab active on the basis of tab sequence.(2 is the tab position from left to right)
    LayoutComponent.prototype.setActiveTabNumber = function (tab) {
        tab.setActiveTab(2);
    };
    //Method to set tab active on the basis of tab title.("profile" is the tab title)
    LayoutComponent.prototype.setActiveTabTitle = function (tab) {
        tab.setActiveTab("profile");
    };
    //Method to close tabs and keep open some of the required tabs.
    LayoutComponent.prototype.closeOtherTabs = function (tab) {
        tab.closeTabs(this.tabArray);
    };
    LayoutComponent.prototype.showClickTab = function (tab) {
        tab.showTab("work");
    };
    LayoutComponent.prototype.hideClickTab = function (tab) {
        tab.hideTab(2);
    };
    LayoutComponent.prototype.disabledClickTab = function (tab) {
        tab.disableTab(["work", "education"]);
    };
    ;
    LayoutComponent.prototype.disabledClickTab2 = function (tab) {
        tab.disableTab(2);
    };
    LayoutComponent.prototype.deleteTabClick = function (tab) {
        tab.deleteTab(["work", "education"]);
    };
    LayoutComponent.prototype.deleteTabClick2 = function (tab) {
        tab.deleteTab(2);
    };
    LayoutComponent.prototype.replaceTabClick = function (tab) {
        tab.replaceTab(2, "Demo");
    };
    LayoutComponent.prototype.toggleBasicWindow = function () {
        this.showBasicWindow = true;
    };
    LayoutComponent.prototype.toggleAlertWindow = function () {
        this.showAlertWindow = true;
    };
    LayoutComponent.prototype.toggleClosable = function () {
        this.showClosable = true;
    };
    LayoutComponent.prototype.toggleDialog = function () {
        this.showDialog = true;
    };
    LayoutComponent.prototype.onRowSelect = function (event) {
        if (event.length > 0) {
            this.isVisible = true;
        }
        else {
            this.isVisible = false;
        }
    };
    LayoutComponent.prototype.onRowClick = function (event) {
    };
    LayoutComponent.prototype.toggle = function () {
        this.flag = !this.flag;
    };
    LayoutComponent.prototype.ngOnInit = function () {
        this.data = [
            {
                "text": "Inbox",
                "expanded": false,
                "checked": false,
                "selected": true,
                "icon": "fa fa-inbox"
            }, {
                "text": "Sent",
                "expanded": false,
                "checked": false,
                "icon": "fa fa-envelope-o"
            }, {
                "text": "Trash",
                "expanded": false,
                "checked": false,
                "icon": "fa fa-trash-o"
            },
            {
                "text": "Labels",
                "expanded": false,
                "checked": false,
                "icon": "fa fa-tag",
                "children": [
                    {
                        "text": "High",
                        "expanded": false,
                        "checked": false,
                        "icon": "fa fa-tag fa-lg"
                    }, {
                        "text": "Medium",
                        "expanded": false,
                        "checked": false,
                        "icon": "fa fa-tag fa-md"
                    }, {
                        "text": "Low",
                        "expanded": false,
                        "checked": false,
                        "icon": "fa fa-tag "
                    }
                ]
            }
        ];
    };
    LayoutComponent.prototype.stepBlockClick = function (event) {
        debugger;
        if (event.label == "User") {
            this.updateFlag(true, false, false, false);
            this.showMsg("Step 1 User");
        }
        else if (event.label == "Shop") {
            this.updateFlag(false, true, false, false);
            this.showMsg("Step 2 Shop");
        }
        else if (event.label == "Payment") {
            this.showMsg("Step 3 Payment");
            this.updateFlag(false, false, true, false);
        }
        else if (event.label == "Confirmation") {
            this.updateFlag(false, false, false, true);
            this.showMsg("Step 4 Confirmation");
        }
    };
    LayoutComponent.prototype.updateFlag = function (user, shop, payment, confirmation) {
        this.user = user;
        this.shop = shop;
        this.payment = payment;
        this.confirmation = confirmation;
    };
    LayoutComponent.prototype.showMsg = function (msg) {
        if (this.clickMsgArray.length >= 1) {
            this.clickMsgArray = [];
            this.clickMsgArray.push(msg);
        }
        else {
            this.clickMsgArray.push(msg);
        }
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout',
            template: __webpack_require__(/*! ./layout.html */ "./src/app/pages/layout/layout.html")
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout/layout.html":
/*!******************************************!*\
  !*** ./src/app/pages/layout/layout.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card [header]=\"true\">\n  <amexio-header>Panels</amexio-header>\n  <amexio-body>\n\n    <amexio-tab-view [closable]=\"false\">\n      <amexio-tab [title]=\"'Carousel'\" [active]=\"true\" [icon]=\"'fa fa-desktop fa-fw '\">\n        <amexio-carousel [data]=\"viewData\" mode=\"multiple\" [header]=\"'Collections'\" shuffleinterval=\"2000\">\n          <ng-template let-i amexioTemplate=\"item\">\n            <amexio-card>\n              <amexio-body>\n                <div style=\"height: 375px;\">\n                  <img src={{i.img}} />\n                  <p>\"{{i.desc}}\"</p>\n                </div>\n              </amexio-body>\n            </amexio-card>\n          </ng-template>\n        </amexio-carousel>\n      </amexio-tab>\n      <amexio-tab [title]=\"'Card'\" [icon]=\"'fa fa-laptop fa-fw'\">\n        <amexio-card [header]=\"true\" [footer]=\"true\">\n          <amexio-header>\n            Card\n          </amexio-header>\n          <amexio-body>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'FirstName'\" name=\"name\" [place-holder]=\"'Enter firstname'\"\n                  [icon-feedback]=\"true\">\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Last Name'\" name=\"name\" [place-holder]=\"'Enter lastname'\"\n                  [icon-feedback]=\"true\">\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]=\"12\">\n                <amexio-text-input [field-label]=\"'Address'\" name=\"address\" [place-holder]=\"'Enter address'\"\n                  [icon-feedback]=\"true\">\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Phone'\" name=\"phone\" [place-holder]=\"'Enter phone'\" [icon-feedback]=\"true\">\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-text-input [field-label]=\"'Email'\" name=\"email\" [place-holder]=\"'Enter Email'\" [icon-feedback]=\"true\">\n                </amexio-text-input>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n          <amexio-action>\n            <amexio-button [label]=\"'Save'\" [type]=\"'success'\" [tooltip]=\"'save'\"></amexio-button>\n          </amexio-action>\n        </amexio-card>\n      </amexio-tab>\n      <amexio-tab [title]=\"'Image'\" [icon]=\"'fa fa-picture-o fa-fw'\">\n        <amexio-row>\n          <amexio-column [size]=\"3\">\n            <amexio-card [header]=\"false\" [footer]=\"false\">\n              <amexio-header>Image</amexio-header>\n              <amexio-body>\n                <img src=\"assets/images/carousel/set2/1.jpg\" class=\"layout-fit-img\">\n                <br />\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column [size]=\"3\">\n            <amexio-card [header]=\"false\" [footer]=\"false\">\n              <amexio-header>Image</amexio-header>\n              <amexio-body>\n                <img src=\"assets/images/carousel/set2/2.jpg\" class=\"layout-fit-img\">\n                <br />\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column [size]=\"3\">\n            <amexio-card [header]=\"false\" [footer]=\"false\">\n              <amexio-header>Image</amexio-header>\n              <amexio-body>\n                <img src=\"assets/images/carousel/set2/3.jpg\" class=\"layout-fit-img\">\n                <br />\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column [size]=\"3\">\n            <amexio-card [header]=\"false\" [footer]=\"false\">\n              <amexio-header>Image</amexio-header>\n              <amexio-body>\n                <img src=\"assets/images/carousel/set2/4.jpg\" class=\"layout-fit-img\">\n                <br />\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row>\n        <amexio-row>\n          <amexio-column [size]=\"3\">\n            <amexio-card [header]=\"false\" [footer]=\"false\">\n              <amexio-header>Image</amexio-header>\n              <amexio-body>\n                <img src=\"assets/images/carousel/set2/5.jpg\" class=\"layout-fit-img\">\n                <br />\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column [size]=\"3\">\n            <amexio-card [header]=\"false\" [footer]=\"false\">\n              <amexio-header>Image</amexio-header>\n              <amexio-body>\n                <img src=\"assets/images/carousel/set2/6.jpg\" class=\"layout-fit-img\">\n                <br />\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column [size]=\"3\">\n            <amexio-card [header]=\"false\" [footer]=\"false\">\n              <amexio-header>Image</amexio-header>\n              <amexio-body>\n                <img src=\"assets/images/carousel/set2/7.jpg\" class=\"layout-fit-img\">\n                <br />\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column [size]=\"3\">\n            <amexio-card [header]=\"false\" [footer]=\"false\">\n              <amexio-header>Image</amexio-header>\n              <amexio-body>\n                <img src=\"assets/images/carousel/set2/8.jpg\" class=\"layout-fit-img\">\n                <br />\n              </amexio-body>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row>\n      </amexio-tab>\n      <amexio-tab [title]=\"'Accordion'\" [icon]=\"'fa fa-minus-square-o'\">\n\n        <amexio-accordion expand-all=\"true\">\n          <amexio-accordion-tab header=\"Section One\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n                industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n                type\n                specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n                remaining\n                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\n                Lorem\n                Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including\n                versions\n                of Lorem Ipsum.\n              </amexio-column>\n            </amexio-row>\n          </amexio-accordion-tab>\n          <amexio-accordion-tab header=\"Section Two\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet\n                aliquet risus. Aenean placerat\n                suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor\n                hendrerit\n                posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex\n                blandit\n                lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae\n                ullamcorper\n                lectus.\n              </amexio-column>\n            </amexio-row>\n          </amexio-accordion-tab>\n          <amexio-accordion-tab header=\"Section Three\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis\n                parturient montes, nascetur\n                ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec\n                sapien\n                pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus\n                quis\n                ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac,\n                fringilla\n                libero.\n              </amexio-column>\n            </amexio-row>\n          </amexio-accordion-tab>\n          <amexio-accordion-tab header=\"Section Four\">\n            Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra,\n            per inceptos\n            himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo leo magna\n            quis\n            mauris.\n          </amexio-accordion-tab>\n        </amexio-accordion>\n\n        <amexio-accordion transparent=\"true\" angle-icon=\"true\">\n          <amexio-accordion-tab header=\"Page One\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n                industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n                type\n                specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n                remaining\n                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\n                Lorem\n                Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including\n                versions\n                of Lorem Ipsum.\n              </amexio-column>\n            </amexio-row>\n          </amexio-accordion-tab>\n          <amexio-accordion-tab header=\"Page two\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet\n                aliquet risus. Aenean placerat\n                suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor\n                hendrerit\n                posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex\n                blandit\n                lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae\n                ullamcorper\n                lectus.\n              </amexio-column>\n            </amexio-row>\n          </amexio-accordion-tab>\n          <amexio-accordion-tab header=\"Page three\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis\n                parturient montes, nascetur\n                ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec\n                sapien\n                pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus\n                quis\n                ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac,\n                fringilla\n                libero.\n              </amexio-column>\n            </amexio-row>\n          </amexio-accordion-tab>\n          <amexio-accordion-tab header=\"Page four\">Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu\n            ad litora torquent per conubia nostra, per\n            inceptos himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo\n            leo\n            magna quis mauris.</amexio-accordion-tab>\n        </amexio-accordion>\n\n        <amexio-accordion>\n          <amexio-accordion-tab header=\"Page One\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n                industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n                type\n                specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n                remaining\n                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\n                Lorem\n                Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including\n                versions\n                of Lorem Ipsum.\n              </amexio-column>\n            </amexio-row>\n          </amexio-accordion-tab>\n          <amexio-accordion-tab header=\"Page two\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet\n                aliquet risus. Aenean placerat\n                suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor\n                hendrerit\n                posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex\n                blandit\n                lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae\n                ullamcorper\n                lectus.\n              </amexio-column>\n            </amexio-row>\n          </amexio-accordion-tab>\n          <amexio-accordion-tab header=\"Page three\" disabled=\"true\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis\n                parturient montes, nascetur\n                ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec\n                sapien\n                pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus\n                quis\n                ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac,\n                fringilla\n                libero.\n              </amexio-column>\n            </amexio-row>\n          </amexio-accordion-tab>\n          <amexio-accordion-tab header=\"Page four\">Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu\n            ad litora torquent per conubia nostra, per\n            inceptos himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo\n            leo\n            magna quis mauris.</amexio-accordion-tab>\n        </amexio-accordion>\n      </amexio-tab>\n\n      <amexio-tab [title]=\"'Fieldset'\" [icon]=\"'fa fa-clone fa-fw'\">\n        <amexio-fieldset [title]=\"'Fieldset1'\" [collapsible]=\"false\">\n          <div class=\"div-padding-layout\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua.\n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            Duis\n            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n            sint\n            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </div>\n        </amexio-fieldset>\n        <amexio-fieldset [title]=\"'Fieldset2'\" [collapsible]=\"true\">\n          <div class=\"div-padding-layout\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua.\n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            Duis\n            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n            sint\n            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </div>\n        </amexio-fieldset>\n      </amexio-tab>\n      <amexio-tab [title]=\"'Window'\" [icon]=\"'fa fa-windows fa-fw'\">\n        <amexio-row>\n          <amexio-column [size]=\"12\">\n            <amexio-vertical-tab-view>\n              <amexio-tab [title]=\"'Window'\" [active]=\"true\">\n                <amexio-button [label]=\"'Window Layout'\" [type]=\"'primary'\" [tooltip]=\"'Hide/UnHide'\" (click)=\"toggle()\">\n                </amexio-button>\n                <amexio-window [(show-window)]=\"flag\" [closable]=\"true\" [footer]=\"true\">\n                  <amexio-header>\n                    Employee Registration\n                  </amexio-header>\n                  <amexio-body>\n\n                    <amexio-row>\n                      <amexio-column [size]=\"6\">\n                        <amexio-date-time-picker [field-label]=\"'Date Of Birth'\" [time-picker]=\"false\" [date-picker]=\"true\">\n                        </amexio-date-time-picker>\n                      </amexio-column>\n                      <amexio-column [size]=\"6\">\n                        <amexio-text-input [field-label]=\"'Last Name'\" name=\"name\" [place-holder]=\"'Enter lastname'\"\n                          [icon-feedback]=\"true\">\n                        </amexio-text-input>\n                      </amexio-column>\n                    </amexio-row>\n                    <amexio-row>\n                      <amexio-column [size]=\"12\">\n                        <amexio-text-input [field-label]=\"'Address'\" name=\"address\" [place-holder]=\"'Enter address'\"\n                          [icon-feedback]=\"true\">\n                        </amexio-text-input>\n                      </amexio-column>\n                    </amexio-row>\n                    <amexio-row>\n                      <amexio-column [size]=\"6\">\n                        <amexio-text-input [field-label]=\"'Phone'\" name=\"phone\" [place-holder]=\"'Enter phone'\"\n                          [icon-feedback]=\"true\">\n                        </amexio-text-input>\n                      </amexio-column>\n                      <amexio-column [size]=\"6\">\n                        <amexio-text-input [field-label]=\"'Email'\" name=\"email\" [place-holder]=\"'Enter Email'\"\n                          [icon-feedback]=\"true\">\n                        </amexio-text-input>\n                      </amexio-column>\n                    </amexio-row>\n\n                  </amexio-body>\n                  <amexio-action>\n                    <amexio-button [label]=\"'Save'\" [type]=\"'success'\" [tooltip]=\"'save'\"></amexio-button>\n                  </amexio-action>\n                </amexio-window>\n              </amexio-tab>\n              <amexio-tab [title]=\"'Confirm Box'\">\n                <amexio-card [header]=\"false\" [footer]=\"false\">\n                  <amexio-body>\n                    <amexio-button type=\"primary\" (onClick)=\"toggleClosable()\" label=\"Confirm Box\"></amexio-button>\n                    <amexio-dialogue [show-dialogue]=\"showClosable\" [title]=\"'Confirm'\" [message]=\"'Please confirm Are you sure you want to continue?'\"\n                      [message-type]=\"'error'\" [type]=\"'confirm'\">\n                    </amexio-dialogue>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-tab>\n              <amexio-tab [title]=\"'Alert Box'\">\n                <amexio-card [header]=\"false\" [footer]=\"false\">\n                  <amexio-body>\n                    <amexio-button type=\"primary\" (onClick)=\"toggleAlertWindow()\" label=\"Alert Box\"></amexio-button>\n                    <amexio-dialogue [show-dialogue]=\"showAlertWindow\" [title]=\"'Alert'\" [message]=\"'Record saved successfully'\"\n                      [message-type]=\"'help'\" [type]=\"'alert'\">\n                    </amexio-dialogue>\n\n                  </amexio-body>\n                </amexio-card>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n          </amexio-column>\n        </amexio-row>\n      </amexio-tab>\n      <amexio-tab [title]=\"'Step Box'\" [icon]=\"'fa fa-step-forward fa-fw'\">\n        <amexio-steps [block]=\"true\" (onClick)=\"stepBlockClick($event)\">\n          <amexio-step-block [label]=\"'User'\" [active]=\"user\"></amexio-step-block>\n          <amexio-step-block [label]=\"'Shop'\" [active]=\"shop\"></amexio-step-block>\n          <amexio-step-block [label]=\"'Payment'\" [active]=\"payment\"></amexio-step-block>\n          <amexio-step-block [label]=\"'Confirmation'\" [active]=\"confirmation\" [icon]=\"'fa fa-cc-visa'\"></amexio-step-block>\n        </amexio-steps>\n        <br />\n        <amexio-steps [block]=\"true\" [icon]=\"true\">\n          <amexio-step-block [label]=\"'User'\" [icon]=\"'fa fa-user'\"></amexio-step-block>\n          <amexio-step-block [label]=\"'Shop'\" [icon]=\"'fa fa-shopping-cart'\"></amexio-step-block>\n          <amexio-step-block [label]=\"'Payment'\" [active]=\"true\" [icon]=\"'fa fa-credit-card'\"></amexio-step-block>\n          <amexio-step-block [label]=\"'Confirmation'\" [icon]=\"'fa fa-thumbs-o-up'\"></amexio-step-block>\n        </amexio-steps>\n        <br />\n        <!--Step-box index -->\n        <amexio-steps [index]=\"true\">\n          <amexio-step-block [label]=\"'Step-1'\" [active]=\"true\"></amexio-step-block>\n          <amexio-step-block [label]=\"'Step-2'\" [active]=\"false\"></amexio-step-block>\n          <amexio-step-block [label]=\"'Step-3'\" [active]=\"false\"></amexio-step-block>\n          <amexio-step-block [label]=\"'Step-4'\" [active]=\"false\"></amexio-step-block>\n        </amexio-steps>\n        <!--<amexio-right-vertical-tab-view>\n          <amexio-tab [title]=\"'Step box'\" [icon]=\"'fa fa-eercast'\">\n            <amexio-card [header]=\"false\" [footer]=\"false\">\n              <amexio-body>\n                <amexio-steps  [block]=\"true\" onClick=\"stepBlockClick($event)\">\n                  <amexio-step-block [label]=\"'User'\" [active]=\"true\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Shop'\" [active]=\"false\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Payment'\" [active]=\"false\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Confirmation'\" [active]=\"false\"></amexio-step-block>\n                </amexio-steps>\n                <br />\n\n                <amexio-steps  [block]=\"true\" [icon]=\"true\">\n                  <amexio-step-block [label]=\"'User'\" [icon]=\"'fa fa-eercast'\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Shop'\" [icon]=\"'fa fa-eercast'\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Payment'\" [icon]=\"'fa fa-eercast'\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Confirmation'\" [icon]=\"'fa fa-eercast'\"></amexio-step-block>\n                </amexio-steps>\n                <br />\n                &lt;!&ndash;Step-box index &ndash;&gt;\n                <amexio-steps  [block]=\"true\" [index]=\"true\" >\n                  <amexio-step-block [label]=\"'step-1'\" [active]=\"true\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'step-2'\" [active]=\"false\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'step-3'\" [active]=\"false\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'step-4'\" [active]=\"false\"></amexio-step-block>\n                </amexio-steps>\n              </amexio-body>\n            </amexio-card>\n          </amexio-tab>\n          <amexio-tab [title]=\"'Border Layout'\" [active]=\"true\" [icon]=\"'fa fa-eercast'\">\n            <amexio-card>\n              <amexio-body>\n                <amexio-borderlayout>\n                  <amexio-borderlayout-item position=\"north\">\n                    <div [class]=\"'layout-border'\"> We are in North </div>\n                  </amexio-borderlayout-item>\n                  <amexio-borderlayout-item position=\"east\">\n                    <div [class]=\"'layout-border'\"> We are in East </div>\n                  </amexio-borderlayout-item>\n                  <amexio-borderlayout-item position=\"center\">\n                    <div [class]=\"'layout-border'\"> We are in Center</div>\n                  </amexio-borderlayout-item>\n                  <amexio-borderlayout-item position=\"west\">\n                    <div [class]=\"'layout-border'\"> We are in West </div>\n                  </amexio-borderlayout-item>\n                  <amexio-borderlayout-item position=\"south\">\n                    <div [class]=\"'layout-border'\">We are in South </div>\n                  </amexio-borderlayout-item>\n                </amexio-borderlayout>\n              </amexio-body>\n            </amexio-card>\n          </amexio-tab>\n        </amexio-right-vertical-tab-view>-->\n      </amexio-tab>\n\n      <amexio-tab [title]=\"'Layouts'\" [icon]=\"'fa fa-th'\">\n        <h4>Border Layout</h4>\n        <amexio-borderlayout>\n          <amexio-borderlayout-item position=\"north\">\n            <amexio-card>\n              <amexio-body>\n                <div class=\"div-padding-layout\">\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n                  et dolore magna aliqua.\n                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                  consequat.\n                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n                  pariatur.\n                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n                  laborum.\n                </div>\n              </amexio-body>\n            </amexio-card>\n          </amexio-borderlayout-item>\n          <amexio-borderlayout-item position=\"east\">\n            <amexio-card>\n              <amexio-body>\n                <div class=\"div-padding-layout\">\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n                  et dolore magna aliqua.\n                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                  consequat.\n                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n                  pariatur.\n                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n                  laborum.\n                </div>\n              </amexio-body>\n            </amexio-card>\n          </amexio-borderlayout-item>\n          <amexio-borderlayout-item position=\"center\">\n            <amexio-card>\n              <amexio-body>\n                <div class=\"div-padding-layout\">\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n                  et dolore magna aliqua.\n                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                  consequat.\n                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n                  pariatur.\n                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n                  laborum.\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n                  et\n                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n                  aliquip\n                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\n                  eu\n                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                  deserunt\n                  mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                  tempor\n                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                  ullamco\n                  laboris nisi ut aliquip\n                </div>\n              </amexio-body>\n            </amexio-card>\n          </amexio-borderlayout-item>\n          <amexio-borderlayout-item position=\"west\">\n            <amexio-card>\n              <amexio-body>\n                <div class=\"div-padding-layout\">\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n                  et dolore magna aliqua.\n                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                  consequat.\n                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n                  pariatur.\n                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n                  laborum.\n                </div>\n              </amexio-body>\n            </amexio-card>\n          </amexio-borderlayout-item>\n          <amexio-borderlayout-item position=\"south\">\n            <amexio-card>\n              <amexio-body>\n                <div class=\"div-padding-layout\">\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n                  et dolore magna aliqua.\n                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                  consequat.\n                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n                  pariatur.\n                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n                  laborum.\n                </div>\n              </amexio-body>\n            </amexio-card>\n          </amexio-borderlayout-item>\n        </amexio-borderlayout>\n        <h4>Row Column Layout</h4>\n        <amexio-row>\n          <amexio-column size=\"4\">\n            <amexio-card>\n              <amexio-body>COL Size 4</amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column size=\"3\">\n            <amexio-card>\n              <amexio-body>COL Size 3</amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column size=\"2\">\n            <amexio-card>\n              <amexio-body>COL Size 2</amexio-body>\n            </amexio-card>\n          </amexio-column>\n          <amexio-column size=\"3\">\n            <amexio-card>\n              <amexio-body>COL Size 3</amexio-body>\n            </amexio-card>\n          </amexio-column>\n        </amexio-row>\n      </amexio-tab>\n      <amexio-tab [title]=\"'Panel'\" [icon]=\"'fa fa-columns'\">\n        <amexio-row>\n          <amexio-column [size]=\"12\">\n            <amexio-panel [header]=\"true\" title=\"Panel\" [expanded]=\"false\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n              industry's standard dummy\n              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n              specimen\n              book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n              essentially\n              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum\n              passages,\n              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem\n              Ipsum.\n            </amexio-panel>\n          </amexio-column>\n        </amexio-row>\n      </amexio-tab>\n\n      <amexio-tab [title]=\"'Enhanced Tab'\" [icon]=\"'fa fa-table'\">\n\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n          <amexio-header>\n            Tab layout with header and tabs right aligned\n          </amexio-header>\n          <amexio-body>\n            <amexio-tab-view header=\"Work Profile\" [tab-position]=\"'top'\" [header-align]=\"'right'\"\n              [divide-header-equally]=false>\n              <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\">\n                Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                has\n                been the industry's standard\n                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                to\n                make a\n                type specimen book.\n              </amexio-tab>\n              <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\">\n                Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n            </amexio-tab-view>\n          </amexio-body>\n        </amexio-card>\n\n        <br>\n\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n          <amexio-header>\n            Tab layout with action component(Radio Group) and tabs left aligned\n          </amexio-header>\n          <amexio-body>\n            <amexio-tab-view [action]=\"true\" [closable]=\"false\" [tab-position]=\"'top'\" [header-align]=\"'left'\"\n              [divide-header-equally]=false>\n              <amexio-tab-action>\n                <amexio-radio-group name=\"gender\" [data-reader]=\"'response.data'\" [display-field]=\"'gender'\"\n                  [value-field]=\"'genderId'\" [horizontal]=\"true\" [data]=\"radioGroupData\" [default-value]=\"'male'\">\n                </amexio-radio-group>\n              </amexio-tab-action>\n\n              <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\">\n                Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                has\n                been the industry's standard\n                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                to\n                make a\n                type specimen book.\n              </amexio-tab>\n              <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\">\n                Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"Profile\" [amexio-color]=\"'green'\">\n                Profile Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                has\n                been the industry's standard\n                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                to\n                make a\n                type specimen book.\n              </amexio-tab>\n              <amexio-tab title=\"Education\" [amexio-color]=\"'red'\">\n                Education Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n                Ipsum\n                has been the industry's standard\n                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                to\n                make a\n                type specimen book.\n              </amexio-tab>\n            </amexio-tab-view>\n          </amexio-body>\n        </amexio-card>\n\n        <br>\n\n        <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'left'\">\n          <amexio-header>\n            Tab layout with action component(button) and tabs left aligned\n          </amexio-header>\n          <amexio-body>\n\n            <amexio-tab-view #tab1 [closable]=\"false\" [action]=\"true\" [tab-position]=\"'top'\" [header-align]=\"'left'\">\n              <amexio-tab-action>\n                <amexio-button [label]=\"'Add Tab'\" [type]=\"'theme-color'\" (onClick)=\"addtab(tab1)\" [tooltip]=\"'Add Tab'\">\n                </amexio-button>\n              </amexio-tab-action>\n              <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\" [closable]=\"true\">\n                Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                has\n                been the industry's standard\n                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                to\n                make a\n                type specimen book.\n              </amexio-tab>\n              <amexio-tab title=\"Work\" [amexio-color]=\"'red'\">\n                Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"Profile\" [amexio-color]=\"'red'\">\n                Profile Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n                Nunc\n                sit amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"Education\" [amexio-color]=\"'red'\" [closable]=\"true\">\n                Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n                Nunc\n                sit amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n            </amexio-tab-view>\n          </amexio-body>\n          <amexio-action>\n            <amexio-button [label]=\"'Close Tab'\" [type]=\"'theme-color'\" (onClick)=\"closeAllTabs(tab1)\" [tooltip]=\"'Add Tab'\">\n            </amexio-button>\n            &nbsp;\n            <amexio-button [label]=\"'Active Number Tab'\" [type]=\"'theme-color'\" (onClick)=\"setActiveTabNumber(tab1)\"\n              [tooltip]=\"'Activate Tab'\">\n            </amexio-button>\n            &nbsp;\n            <amexio-button [label]=\"'Active Title Tab'\" [type]=\"'theme-color'\" (onClick)=\"setActiveTabTitle(tab1)\"\n              [tooltip]=\"'Activate Tab'\">\n            </amexio-button>\n            &nbsp;\n            <amexio-button [label]=\"'Close Other Tabs'\" [type]=\"'theme-color'\" (onClick)=\"closeOtherTabs(tab1)\"\n              [tooltip]=\"'Close Tab'\">\n            </amexio-button>\n            <amexio-button [label]=\"'Hide Tabs'\" [type]=\"'theme-color'\" (onClick)=\"showClickTab(tab1)\" [tooltip]=\"'Show Tab'\">\n            </amexio-button>\n            <amexio-button [label]=\"'Show Tabs'\" [type]=\"'theme-color'\" (onClick)=\"hideClickTab(tab1)\" [tooltip]=\"'Hide Tab'\">\n            </amexio-button>\n            <br>\n          </amexio-action>\n        </amexio-card>\n        <br>\n        <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'left'\">\n          <amexio-header>\n            Tab layout with action component(button) and tabs left aligned\n          </amexio-header>\n          <amexio-body>\n\n            <amexio-tab-view #tab2 [closable]=\"false\" [action]=\"true\" [tab-position]=\"'top'\" [header-align]=\"'left'\">\n              <amexio-tab-action>\n                <amexio-button [label]=\"'Add Tab'\" [type]=\"'theme-color'\" (onClick)=\"addtab(tab2)\" [tooltip]=\"'Add Tab'\">\n                </amexio-button>\n              </amexio-tab-action>\n              <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\" [closable]=\"true\">\n                Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                has\n                been the industry's standard\n                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                to\n                make a\n                type specimen book.\n              </amexio-tab>\n              <amexio-tab title=\"Work\" [amexio-color]=\"'red'\">\n                Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"Profile\" [amexio-color]=\"'red'\">\n                Profile Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n                Nunc\n                sit amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"Education\" [amexio-color]=\"'red'\" [closable]=\"true\">\n                Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n                Nunc\n                sit amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n            </amexio-tab-view>\n          </amexio-body>\n          <amexio-action>\n            <amexio-button [label]=\"'Disable Tabs(String)'\" [type]=\"'theme-color'\" (onClick)=\"disabledClickTab(tab2)\"\n              [tooltip]=\"'Disabled Tab'\">\n            </amexio-button>\n            <amexio-button [label]=\"'Disable Tabs(Number)'\" [type]=\"'theme-color'\" (onClick)=\"disabledClickTab2(tab2)\"\n              [tooltip]=\"'Disabled Tab'\">\n            </amexio-button>\n            <amexio-button [label]=\"'Delete Tabs(String)'\" [type]=\"'theme-color'\" (onClick)=\"deleteTabClick(tab2)\"\n              [tooltip]=\"'Delete Tab'\">\n            </amexio-button>\n            <amexio-button [label]=\"'Delete Tabs(Number)'\" [type]=\"'theme-color'\" (onClick)=\"deleteTabClick2(tab2)\"\n              [tooltip]=\"'Delete Tab'\">\n            </amexio-button>\n            <amexio-button [label]=\"'Replace Tab Name'\" [type]=\"'theme-color'\" (onClick)=\"replaceTabClick(tab2)\"\n              [tooltip]=\"'Replace Tab'\">\n            </amexio-button>\n          </amexio-action>\n\n        </amexio-card>\n        <br>\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n          <amexio-header>\n            Tab layout with action component(Rating) and tabs right aligned\n          </amexio-header>\n          <amexio-body>\n            <amexio-tab-view [closable]=\"false\" [action]=\"true\" [tab-position]=\"'top'\" [header-align]=\"'right'\"\n              [divide-header-equally]=false>\n              <amexio-tab-action>\n                <amexio-rating-input [(ngModel)]=\"rate\" [max]=\"max\" name=\"rate\" [read-only]=\"isReadonly\">\n                </amexio-rating-input>\n              </amexio-tab-action>\n              <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\">\n                Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                has\n                been the industry's standard\n                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                to\n                make a\n                type specimen book.\n              </amexio-tab>\n              <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\">\n                Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"Profile\" [amexio-color]=\"'green'\">\n                Profile Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n                Nunc\n                sit amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"Education\" [amexio-color]=\"'red'\">\n                Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n                Nunc\n                sit amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n            </amexio-tab-view>\n          </amexio-body>\n\n        </amexio-card>\n\n        <br>\n\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n          <amexio-header>\n            Tabs equally divided\n          </amexio-header>\n          <amexio-body>\n            <amexio-tab-view [closable]=\"false\" [tab-position]=\"'top'\" [header-align]=\"'right'\" [divide-header-equally]=true>\n\n              <amexio-tab title=\"Person\" [active]=\"true\" [amexio-color]=\"'red'\">\n                Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                has\n                been the industry's standard\n                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                to\n                make a\n                type specimen book.\n              </amexio-tab>\n              <amexio-tab title=\"Work\" [amexio-color]=\"'blue'\">\n                Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                to\n                make a\n                type specimen book.\n              </amexio-tab>\n              <amexio-tab title=\"Address\" [amexio-color]=\"'green'\">\n                Address Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n                Nunc\n                sit amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"Profile\" [amexio-color]=\"'red'\">\n                Profile Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi.\n                Nunc\n                sit amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n            </amexio-tab-view>\n          </amexio-body>\n\n        </amexio-card>\n\n        <br>\n\n        <amexio-card [header]=\"true\" [footer]=\"false\" [footer-align]=\"'right'\">\n          <amexio-header>\n            Tab Layout with header and scrollable tabs\n          </amexio-header>\n          <amexio-body>\n            <amexio-tab-view [closable]=\"false\" header=\"Work Profile\" [tab-position]=\"'top'\" [header-align]=\"'right'\"\n              [divide-header-equally]=false>\n\n              <amexio-tab title=\"tab1\" [active]=\"true\" [amexio-color]=\"'red'\">\n                Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n                has\n                been the industry's standard\n                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                to\n                make a\n                type specimen book.\n              </amexio-tab>\n              <amexio-tab title=\"tab2\" [amexio-color]=\"'blue'\">\n                Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"tab3\" [amexio-color]=\"'green'\">\n                Tab3 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"tab4\" [amexio-color]=\"'pink'\">\n                Tab4 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"tab5\" [amexio-color]=\"'brown'\">\n                Tab5 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"tab6\" [amexio-color]=\"'green'\">\n                Tab6 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"tab7\" [amexio-color]=\"'red'\">\n                Tab7 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"tab8\" [amexio-color]=\"'blue'\">\n                Tab8 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"tab9\" [amexio-color]=\"'orange'\">\n                Tab9 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"tab10\" [amexio-color]=\"'blue'\">\n                Tab10 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"tab11\" [amexio-color]=\"'green'\">\n                Tab11 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"tab12\" [amexio-color]=\"'red'\">\n                Tab12 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"tab13\" [amexio-color]=\"'pink'\">\n                Tab13 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"tab14\" [amexio-color]=\"'blue'\">\n                Tab14 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"tab15\" [amexio-color]=\"'red'\">\n                Tab15 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n              <amexio-tab title=\"tab16\" [amexio-color]=\"'green'\">\n                Tab16 Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc\n                sit\n                amet aliquet risus. Aenean\n                placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi.\n                Phasellus\n                tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum.\n              </amexio-tab>\n            </amexio-tab-view>\n          </amexio-body>\n        </amexio-card>\n\n      </amexio-tab>\n    </amexio-tab-view>\n\n  </amexio-body>\n</amexio-card>"

/***/ }),

/***/ "./src/app/pages/layout/layout.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/layout/layout.module.ts ***!
  \***********************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "./src/app/pages/layout/layout.component.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamictabdemo.component */ "./src/app/pages/layout/dynamictabdemo.component.ts");
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
    { path: '', component: _layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"] }
];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
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
            entryComponents: [_dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_6__["DyanmicTabComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                _dynamictabdemo_component__WEBPACK_IMPORTED_MODULE_6__["DyanmicTabComponent"]
            ],
            providers: []
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-layout-layout-module.js.map