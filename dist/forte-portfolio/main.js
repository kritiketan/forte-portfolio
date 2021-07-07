(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kittu/kemp/forte-portfolio/src/main.ts */"zUnb");


/***/ }),

/***/ "0Ghg":
/*!********************************************************************!*\
  !*** ./src/app/public/applications/firechat/firechat.component.ts ***!
  \********************************************************************/
/*! exports provided: FirechatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirechatComponent", function() { return FirechatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/localstorage/localstorage.service */ "WF9o");
/* harmony import */ var _services_firebase_firebaseactions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/firebase/firebaseactions.service */ "D8uv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function FirechatComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirechatComponent_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.signinWithGoogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Login with google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FirechatComponent_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.question);
} }
function FirechatComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirechatComponent_div_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Lets get to know you: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FirechatComponent_div_4_div_17_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.user.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user ? ctx_r1.user.displayName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user ? ctx_r1.user.email : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.questions);
} }
class FirechatComponent {
    constructor(localStorageService, firebaseActionsService) {
        this.localStorageService = localStorageService;
        this.firebaseActionsService = firebaseActionsService;
        this.isLoggedin = false;
        this.user = {};
        this.questions = [{
                question: "When you is your birthday?",
                answer: ''
            }, {
                question: "What was your bachelors major?",
                answer: ''
            }, {
                question: "What are you working on right now?",
                answer: ''
            }];
        this.firebaseActionsService.getFireUserAuthState();
    }
    ngOnInit() {
        this.user = this.localStorageService.get('fireuser');
        if (this.user != '') {
            this.isLoggedin = true;
        }
    }
    signinWithGoogle() {
        this.firebaseActionsService.googleLogin().then(() => {
            this.user = this.localStorageService.get('fireuser');
            this.isLoggedin = true;
        });
    }
    signOut() {
        this.firebaseActionsService.signOut();
        this.isLoggedin = false;
    }
}
FirechatComponent.ɵfac = function FirechatComponent_Factory(t) { return new (t || FirechatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firebase_firebaseactions_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseactionsService"])); };
FirechatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirechatComponent, selectors: [["app-firechat"]], decls: 5, vars: 2, consts: [[1, "header-band"], [1, "row-center", "highlight-text", "mt-2"], ["src", "./assets/favicon.png", "width", "38px", "height", "38px"], ["class", "container-fluid centered", "style", "padding-top: 100px", 4, "ngIf"], ["class", "container-fluid", "style", "padding-top: 50px;justify-content: center;align-items: center;", 4, "ngIf"], [1, "container-fluid", "centered", 2, "padding-top", "100px"], ["name", "loginSection", 1, "row", "row-center"], [1, "btn", "btn-primary", "border", 3, "click"], [1, "container-fluid", 2, "padding-top", "50px", "justify-content", "center", "align-items", "center"], ["id", "userProfile", 1, "row", "row-center"], [1, "mt-2"], ["alt", "user-image", 1, "logo-img", 3, "src"], [1, "highlight-text", "mt-1"], [1, "btn", "btn-primary", "border", "mt-2", 3, "click"], [1, "row", "row-center"], [1, "col-md-4"], [2, "color", "lightgoldenrodyellow"], [1, "row", "row-center", "mt-3", "highlight-text"], ["class", "row row-center mt-3", 4, "ngFor", "ngForOf"], [1, "row", "row-center", "mt-3"], [1, "sub-heading-text", "highlight-text"]], template: function FirechatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FirechatComponent_div_3_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FirechatComponent_div_4_Template, 18, 4, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJlY2hhdC5jb21wb25lbnQuY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirechatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-firechat',
                templateUrl: './firechat.component.html',
                styleUrls: ['./firechat.component.css']
            }]
    }], function () { return [{ type: _services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] }, { type: _services_firebase_firebaseactions_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseactionsService"] }]; }, null); })();


/***/ }),

/***/ "5F6o":
/*!*********************************************************!*\
  !*** ./src/app/public/headernav/headernav.component.ts ***!
  \*********************************************************/
/*! exports provided: HeadernavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadernavComponent", function() { return HeadernavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/signup"]; };
class HeadernavComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeadernavComponent.ɵfac = function HeadernavComponent_Factory(t) { return new (t || HeadernavComponent)(); };
HeadernavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadernavComponent, selectors: [["app-headernav"]], decls: 17, vars: 2, consts: [["id", "mainNav", 1, "navbar", "navbar-light", "navbar-expand-md", "py-4", "fixed-top", "scrolled"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["data-toggle", "collapse", "data-target", "#navLinks", "aria-label", "Toggle navigation", 1, "navbar-toggler", "custom-toggler"], [1, "navbar-toggler-icon"], ["id", "navLinks", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "m-2"], [1, "nav-item"], ["href", "", 1, "nav-link"], [1, "nav-link", 2, "color", "#752CEB", 3, "routerLink"]], template: function HeadernavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Forte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXJuYXYuY29tcG9uZW50LmNzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadernavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-headernav',
                templateUrl: './headernav.component.html',
                styleUrls: ['./headernav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "697Y":
/*!***************************************************************!*\
  !*** ./src/app/public/onlineportal/onlineportal.component.ts ***!
  \***************************************************************/
/*! exports provided: OnlineportalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineportalComponent", function() { return OnlineportalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user.model */ "Tj/N");
/* harmony import */ var _services_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/portfolio/portfolio.service */ "gu4S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _headernav_headernav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../headernav/headernav.component */ "5F6o");







class OnlineportalComponent {
    constructor(portfolioService, location, router) {
        this.portfolioService = portfolioService;
        this.location = location;
        this.router = router;
        this.url = '';
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    ngOnInit() {
        particlesJS('particles-js', './../../../assets/particles.json', () => {
            console.log('callback - particles.js config loaded');
        });
        if (this.router.url != "" && this.url != this.router.url && this.router.url != '/404') {
            this.url = this.router.url;
            this.getUserProfile();
        }
        else {
            this.router.navigate(['404']);
        }
    }
    getUserProfile() {
        this.portfolioService.getUserProfile(this.url).subscribe((response) => {
            if (response && response.success) {
                this.user = response.user;
            }
            else {
                this.router.navigate(['404']);
            }
        }, (err) => {
            this.router.navigate(['404']);
        });
    }
}
OnlineportalComponent.ɵfac = function OnlineportalComponent_Factory(t) { return new (t || OnlineportalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
OnlineportalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnlineportalComponent, selectors: [["app-onlineportal"]], decls: 13, vars: 0, consts: [[2, "position", "relative", "height", "10px", "width", "100%"], ["id", "particles-js"], [1, "container"], [1, "row", "align-items-center", "justify-content-center", "portal-spacing"], [1, "circle-image", "shadow"], ["src", "../../../assets/images/astro.png", "width", "90px", "height", "90px", "alt", "", "srcset", ""], [1, "row", "align-items-center", "justify-content-center", "mt-5"], [1, "highlight-text-no-u"], [1, "row", "align-items-center", "justify-content-center", "mt-3"], [1, "sub-highlight-text-no-u"], [1, "vertical-spacer"]], template: function OnlineportalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-headernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_headernav_headernav_component__WEBPACK_IMPORTED_MODULE_5__["HeadernavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmxpbmVwb3J0YWwuY29tcG9uZW50LmNzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlineportalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-onlineportal',
                templateUrl: './onlineportal.component.html',
                styleUrls: ['./onlineportal.component.css']
            }]
    }], function () { return [{ type: _services_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "6SMs":
/*!**************************************************************************!*\
  !*** ./src/app/public/applications/hungryjerry/hungryjerry.component.ts ***!
  \**************************************************************************/
/*! exports provided: HungryjerryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HungryjerryComponent", function() { return HungryjerryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HungryjerryComponent {
    constructor() { }
    ngOnInit() {
    }
}
HungryjerryComponent.ɵfac = function HungryjerryComponent_Factory(t) { return new (t || HungryjerryComponent)(); };
HungryjerryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HungryjerryComponent, selectors: [["app-hungryjerry"]], decls: 2, vars: 0, template: function HungryjerryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hungryjerry works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJodW5ncnlqZXJyeS5jb21wb25lbnQuY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HungryjerryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hungryjerry',
                templateUrl: './hungryjerry.component.html',
                styleUrls: ['./hungryjerry.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6jfn":
/*!*******************************************************!*\
  !*** ./src/app/public/notfound/notfound.component.ts ***!
  \*******************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(); };
NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-notfound"]], decls: 6, vars: 0, consts: [[1, "container-fluid"], [1, "row", "align-items-center", "justify-content-center"], ["src", "./../../../assets/images/empty.png", "width", "60%", "height", "60%", "alt", "No user found image"], [1, "big-n-bold"]], template: function NotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NOTHIN' TO SEE HERE..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rmb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notfound',
                templateUrl: './notfound.component.html',
                styleUrls: ['./notfound.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AklS":
/*!*******************************************************************!*\
  !*** ./src/app/public/half-app-style/half-app-style.component.ts ***!
  \*******************************************************************/
/*! exports provided: HalfAppStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HalfAppStyleComponent", function() { return HalfAppStyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/min"]; };
const _c1 = function () { return ["/cards"]; };
const _c2 = function () { return ["/chat"]; };
class HalfAppStyleComponent {
    constructor() { }
    ngOnInit() {
    }
}
HalfAppStyleComponent.ɵfac = function HalfAppStyleComponent_Factory(t) { return new (t || HalfAppStyleComponent)(); };
HalfAppStyleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HalfAppStyleComponent, selectors: [["app-half-app-style"]], decls: 78, vars: 6, consts: [[1, "container-fluid", 2, "padding-top", "100px"], [1, "row", "row-center"], ["name", "left", 1, "split", "left", "gradient-bg"], [1, "centered"], ["href", "./../../../assets/Kritiketan Sharma Resume.pdf", "download", "Kritiketan_Sharma_Resume.pdf", 1, "icon", "icon-space"], ["src", "./assets/favicon.png"], [1, "heading-text-white"], [1, "sub-heading-text", "highlight-text", "mt-3"], [1, "body-text", "highlight-text", "mt-3", 2, "color", "#f4f4f4"], [1, "split", "right"], [1, "container-fluid", "d-md-none"], [1, "row", "mb-1", "row-center"], ["src", "./assets/favicon.png", "width", "28px", "height", "28px"], [1, "heading-text", "text-center"], [1, "row", "mb-4", "row-center"], [1, "col-md-12"], [2, "color", "lightgoldenrodyellow"], [1, "container-fluid"], ["name", "r1"], [1, "sub-heading-text", "highlight-text"], [1, "row", "m-0", "row-center"], [1, "col-md-2", "apps-icon"], ["href", "https://www.linkedin.com/in/kritiketan-sharma-2133b5a8/", 1, "icon", 2, "color", "#2d76b0"], [1, "fab", "fa-linkedin", 2, "font-size", "40px"], [2, "font-size", "12px"], [1, "col-md-2", "apps-icon", "hide-on-mobile"], ["href", "https://kritiketan.medium.com", 1, "icon", 2, "color", "var(--black-primary)"], [1, "fab", "fa-medium", 2, "font-size", "40px"], ["href", "https://wa.link/tj8ukb", "target", "_blank", 1, "icon", 2, "color", "green"], [1, "fab", "fa-whatsapp", 2, "font-size", "40px"], ["href", "./../../../assets/Kritiketan_Resume.pdf", "download", "Kritiketan_Resume.pdf", 1, "icon"], [1, "fas", "fa-download", 2, "font-size", "40px"], ["name", "r2"], [1, "row", "mb-4", 2, "justify-content", "center", "align-items", "center", "text-align", "center"], [1, "row", "m-0", 2, "justify-content", "center", "align-items", "center", "text-align", "center"], [1, "col-md-2", "apps-icon", "highlight-text", 3, "routerLink"], ["name", "r3"], [1, "col-md-2", "apps-icon", "highlight-text"]], template: function HalfAppStyleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Kritiketan Sharma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \uD83D\uDCCD Melbourne ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Kritiketan Sharma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Socials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Whatsapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Designs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Minimal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "My story *coming soon*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\uD83D\uDD25 Chat app *coming soon*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoYWxmLWFwcC1zdHlsZS5jb21wb25lbnQuY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HalfAppStyleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-half-app-style',
                templateUrl: './half-app-style.component.html',
                styleUrls: ['./half-app-style.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    baseApiUrl: 'http://localhost:3000/',
    APIKey: 'test-key',
    firebaseConfig: {
        apiKey: "AIzaSyDkrm08aGGDSWUW2mjzo9LAohLssDFE9cE",
        authDomain: "forte-305505.firebaseapp.com",
        databaseURL: "https://forte-305505-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "forte-305505",
        storageBucket: "forte-305505.appspot.com",
        messagingSenderId: "618124719662",
        appId: "1:618124719662:web:33b0022e46283893d491bf"
    }
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

/***/ "D4oC":
/*!*********************************************************************!*\
  !*** ./src/app/public/particle-design/particle-design.component.ts ***!
  \*********************************************************************/
/*! exports provided: ParticleDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleDesignComponent", function() { return ParticleDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ParticleDesignComponent_section_49_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \uD83D\uDC49 ", point_r4, " ");
} }
function ParticleDesignComponent_section_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ParticleDesignComponent_section_49_li_11_Template, 3, 1, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exp_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp_r2.position, " @ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", exp_r2.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r2.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \uD83D\uDDD3", exp_r2.startDate, " to ", exp_r2.endDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", exp_r2.highlights);
} }
function ParticleDesignComponent_section_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const edu_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", edu_r5.studyType, " of ", edu_r5.area, " @ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", edu_r5.institutionUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", edu_r5.institution, ",", edu_r5.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", edu_r5.startDate, " to ", edu_r5.endDate, " ");
} }
class ParticleDesignComponent {
    constructor() {
        this.education = [
            {
                "institution": "Deakin University",
                "area": "Business Analytics",
                "studyType": "Master",
                "startDate": "July 2019",
                "endDate": "July 2021",
                "location": "Melbourne",
                "institutionUrl": "https://www.deakin.edu.au/",
            },
            {
                "institution": "UPES",
                "area": "Computer Science",
                "studyType": "Bachelor of Technology (B Tech.)",
                "startDate": "July 2012",
                "endDate": "July 2016",
                "location": "Dehradun",
                "institutionUrl": "https://www.upes.ac.in/"
            }
        ];
        this.work = [
            {
                "company": "Fieldd",
                "position": "Product Development Engineer",
                "website": "https://fieldd.co",
                "startDate": "September 2019",
                "endDate": "Present",
                "summary": "",
                "highlights": [
                    "Designed and developed cutting-edge features for web and mobile applications",
                    "Effectively coded critical sections of the product, including payment processing,platform billing, and server availability",
                    "Successfully set up and deployed web applications to AWS and mobile applications to respective app stores",
                    "Developed and presented findings and solutions to audiences including senior executives, board members, and stakeholders"
                ]
            },
            {
                "company": "Monocept",
                "position": "Senior Software Engineer",
                "website": "https://monocept.com/",
                "startDate": "February 2018",
                "endDate": "May 2019",
                "summary": "",
                "highlights": [
                    "Effectively conducted the digital transformation for legacy insurance processing systems to modern web applications",
                    "Implemented and updated application modules to improve the performance of the system and enhance user experience",
                    "Successfully worked at an independent level, while also serving as an effective and enthusiastic collaborator",
                    "Worked to continually meet the expectations of stakeholders and users"
                ]
            },
            {
                "company": "Infosys",
                "position": "System Engineer",
                "website": "https://www.infosys.com/",
                "startDate": "July 2016",
                "endDate": "January 2018",
                "summary": "",
                "highlights": [
                    "Effectively coded software changes and alterations based on specific design specifications",
                    "Performed automated testing tasks and developed complex features routinely",
                    "Brought forth extensive experience using and developing APIs"
                ]
            }
        ];
    }
    ngOnInit() {
        particlesJS('particles-js', './../../../assets/particles.json', () => {
            console.log('callback - particles.js config loaded');
        });
    }
}
ParticleDesignComponent.ɵfac = function ParticleDesignComponent_Factory(t) { return new (t || ParticleDesignComponent)(); };
ParticleDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParticleDesignComponent, selectors: [["app-particle-design"]], decls: 83, vars: 2, consts: [[2, "position", "relative", "height", "20px", "width", "100%"], ["id", "particles-js"], [1, "container", "portal-spacing"], [1, "row", "gen-space"], [1, "heading-text"], [1, "row", "gen-space", "mt-4"], [1, "sub-heading-text"], [1, "highlight-text"], [1, "row", "gen-space", 2, "margin-top", "0"], ["href", "mailto:kritiketan.sharma@outlook.com", "target", "_blank"], [1, "fas", "fa-paper-plane"], ["href", "https://www.linkedin.com/in/kritiketan-sharma-2133b5a8/", 1, "icon", 2, "color", "#2d76b0"], [1, "fab", "fa-linkedin"], ["href", "https://kritiketan.medium.com", 1, "icon", "icon-space", 2, "color", "var(--black-primary)"], [1, "fab", "fa-medium"], ["href", "https://wa.link/tj8ukb", "target", "_blank", 1, "icon", "icon-space", 2, "color", "green"], [1, "fab", "fa-whatsapp"], ["href", "./../../../assets/Kritiketan Sharma Resume.pdf", "download", "Kritiketan_Sharma_Resume.pdf", 1, "icon", "icon-space"], ["src", "./assets/favicon.png", "height", "26px", "width", "26px", "srcset", ""], [1, "row", "gen-space", "mt-3"], [1, "col-md-3", "body-text", "body-header-space"], ["href", "#work"], [1, "col-md-2", "body-text", "body-header-space"], ["href", "#education"], [1, "col-md-3", "body-text", "body-header-space", "hide-on-mobile"], ["href", "#tech"], ["id", "work"], [1, "sub-heading-text", "body-header-space", "highlight-text"], [4, "ngFor", "ngForOf"], ["id", "education"], ["id", "tech", 1, "hide-on-mobile"], [1, "col-md-3"], [1, "fab", "fa-js-square", "icon-big", 2, "color", "#EFD81D"], [1, "fab", "fa-angular", "icon-big", 2, "color", "#BD0E2C"], [1, "fab", "fa-node", "icon-big", 2, "color", "#313131"], [1, "fab", "fa-html5", "icon-big", 2, "color", "#E44D27"], [1, "row", "gen-space", "mt-1"], [1, "fab", "fa-aws", "icon-big", 2, "color", "#232F3E"], [1, "fab", "fa-css3-alt", "icon-big", 2, "color", "#266BDD"], [1, "fab", "fa-python", "icon-big", 2, "color", "#232F3E"], ["height", "80px", "width", "120px", "src", "../../../assets/MongoDB-Logo.png"], [1, "row", "mt-5", 2, "justify-content", "center", "background-color", "lightgoldenrodyellow"], [1, "fas", "fa-code"], [1, "highlight-text", 2, "color", "var(--text-color-primary)"], [1, "row", "gen-space", "mt-2"], [1, "body-text", "body-header-space", "highlight-text"], ["target", "_blank", 3, "href"], [1, "row", "gen-space", "body-text"], [1, "col-md-10"], [1, "body-text", "mt-1"]], template: function ParticleDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \uD83D\uDC4B\uD83C\uDFFC Hello ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " My name is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Kritiketan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ", I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " based in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Melbourne \uD83E\uDD98");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " kritiketan.sharma@outlook.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \uD83C\uDF93");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \uD83D\uDCBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBBWork Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ParticleDesignComponent_section_49_Template, 12, 6, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \uD83C\uDF93Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ParticleDesignComponent_section_54_Template, 8, 7, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \uD83D\uDCBBTechnologies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Kittu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.work);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.education);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0aWNsZS1kZXNpZ24uY29tcG9uZW50LmNzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticleDesignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-particle-design',
                templateUrl: './particle-design.component.html',
                styleUrls: ['./particle-design.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "D8uv":
/*!**************************************************************!*\
  !*** ./src/app/services/firebase/firebaseactions.service.ts ***!
  \**************************************************************/
/*! exports provided: FirebaseactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseactionsService", function() { return FirebaseactionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../localstorage/localstorage.service */ "WF9o");








//use only for provider creation const auth = firebase.auth();
class FirebaseactionsService {
    constructor(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, localStorageService) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.localStorageService = localStorageService;
    }
    getFireUserAuthState() {
        return this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.userData = user;
                this.localStorageService.set('fireuser', this.userData);
            }
            else {
                this.localStorageService.set('fireuser', '');
            }
        });
    }
    googleLogin() {
        const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider();
        return firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithPopup(provider).then((result) => {
            this.localStorageService.set('fireuser', result.user);
        });
    }
    signOut() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signOut();
    }
}
FirebaseactionsService.ɵfac = function FirebaseactionsService_Factory(t) { return new (t || FirebaseactionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"])); };
FirebaseactionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FirebaseactionsService, factory: FirebaseactionsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseactionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "EHAN":
/*!***********************************************************!*\
  !*** ./src/app/public/halfdesign/halfdesign.component.ts ***!
  \***********************************************************/
/*! exports provided: HalfdesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HalfdesignComponent", function() { return HalfdesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HalfdesignComponent_div_12_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const soc_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", soc_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \uD83D\uDD17 ", soc_r1.name, " ");
} }
function HalfdesignComponent_div_12_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const soc_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", soc_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", soc_r1.name, " ");
} }
function HalfdesignComponent_div_12_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const soc_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", soc_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \uD83D\uDD17 ", soc_r1.name, " ");
} }
function HalfdesignComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HalfdesignComponent_div_12_a_1_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HalfdesignComponent_div_12_a_2_Template, 3, 2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HalfdesignComponent_div_12_a_3_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const soc_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", soc_r1.openStyle == "newself");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", soc_r1.openStyle == "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", soc_r1.openStyle == "none");
} }
class HalfdesignComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.frameUrl = '';
        this.socials = [
            {
                "name": "Linkedin",
                "url": "https://www.linkedin.com/in/kritiketan-sharma-2133b5a8/",
                "openStyle": "newself"
            },
            {
                "name": "Medium",
                "url": "https://kritiketan.medium.com",
                "openStyle": "newself"
            },
            {
                "name": "Whatsapp",
                "url": "https://wa.link/tj8ukb",
                "openStyle": "none"
            },
            {
                "name": "Resume",
                "url": "./../../../assets/Kritiketan Sharma Resume.pdf",
                "openStyle": "download"
            }
        ];
    }
    ngOnInit() {
        this.generateLinkElements();
    }
    generateLinkElements() {
        for (let soc of this.socials) {
            let liTag = document.createElement('li');
            let aTag = document.createElement('a');
            aTag.href = soc.url;
            liTag.appendChild(aTag);
            // document.getElementById('linksList')?.appendChild(liTag);
            // linksContainers.appendChild(aTag)
        }
    }
}
HalfdesignComponent.ɵfac = function HalfdesignComponent_Factory(t) { return new (t || HalfdesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
HalfdesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HalfdesignComponent, selectors: [["app-halfdesign"]], decls: 13, vars: 1, consts: [["id", "grady", 1, "split", "left"], [1, "centered"], ["href", "./../../../assets/Kritiketan Sharma Resume.pdf", "download", "Kritiketan_Sharma_Resume.pdf", 1, "icon", "icon-space"], ["src", "./assets/favicon.png"], [1, "heading-text-white"], [1, "sub-heading-text", "highlight-text", "mt-3"], [1, "body-text", "highlight-text", "mt-3", 2, "color", "#F4F4F4"], [1, "split", "right"], ["style", "padding:25px;", 4, "ngFor", "ngForOf"], [2, "padding", "25px"], ["class", "icon", "style", "text-decoration: none;color: #190B3D;", 3, "href", 4, "ngIf"], ["download", "Kritiketan_Sharma_Resume.pdf", "class", "icon", "style", "text-decoration: none;color: #190B3D;", 3, "href", 4, "ngIf"], [1, "icon", 2, "text-decoration", "none", "color", "#190B3D", 3, "href"], ["download", "Kritiketan_Sharma_Resume.pdf", 1, "icon", 2, "text-decoration", "none", "color", "#190B3D", 3, "href"], [1, "fas", "fa-download", 2, "color", "rgb(195, 76, 211)"]], template: function HalfdesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Kritiketan Sharma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Software Engineer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \uD83D\uDCCD Melbourne ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HalfdesignComponent_div_12_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socials);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoYWxmZGVzaWduLmNvbXBvbmVudC5jc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HalfdesignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-halfdesign',
                templateUrl: './halfdesign.component.html',
                styleUrls: ['./halfdesign.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "IbZW":
/*!*****************************************************!*\
  !*** ./src/app/public/mystory/mystory.component.ts ***!
  \*****************************************************/
/*! exports provided: MystoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MystoryComponent", function() { return MystoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MystoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
MystoryComponent.ɵfac = function MystoryComponent_Factory(t) { return new (t || MystoryComponent)(); };
MystoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MystoryComponent, selectors: [["app-mystory"]], decls: 2, vars: 0, template: function MystoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mystory works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteXN0b3J5LmNvbXBvbmVudC5jc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MystoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mystory',
                templateUrl: './mystory.component.html',
                styleUrls: ['./mystory.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "M3Ej":
/*!*********************************************************************!*\
  !*** ./src/app/public/contact-section/contact-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSectionComponent", function() { return ContactSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactSectionComponent.ɵfac = function ContactSectionComponent_Factory(t) { return new (t || ContactSectionComponent)(); };
ContactSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactSectionComponent, selectors: [["app-contact-section"]], decls: 30, vars: 0, consts: [[1, "wrapper"], [1, "wrapper__links"], ["id", "github", "href", "", "target", "_blank", 1, "social-link", "social-link--github"], ["viewBox", "0 0 600 600", "xmlns", "http://www.w3.org/2000/svg", 1, "social-svg"], ["fill", "none", "fill-rule", "evenodd", 1, "social-group"], ["stroke", "#000", "stroke-width", "20", "cx", "300", "cy", "300", "r", "262.5", 1, "social-group__outline"], ["fill", "#2D76B0", "cx", "300", "cy", "300", "r", "252.5", 1, "social-group__inner-circle"], ["d", "M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM11.3912 15.234C11.6845 15.5046 11.8343 15.9019 11.7946 16.3039V30.779C11.8816 31.3011 11.7208 31.8345 11.3613 32.2158L8 36.3886V36.9389H17.5313V36.3886L14.1699 32.2158C13.8079 31.8351 13.6371 31.3053 13.7068 30.779V18.2604L22.0728 36.9389H23.0439L30.2297 18.2604V33.1481C30.2297 33.5456 30.2297 33.622 29.9757 33.8818L27.3912 36.4497V37H39.9402V36.4497L37.4454 33.943C37.2251 33.7712 37.1159 33.4888 37.1615 33.2093V14.7907C37.1159 14.5112 37.2251 14.2288 37.4454 14.057L40 11.5503V11H31.1559L24.8515 27.0952L17.6807 11H8.40336V11.5503L11.3912 15.234Z", "fill", "#000", "fill-rule", "nonzero", 1, "social-group__icon"], ["id", "linkedin", "href", "https://www.linkedin.com/in/kritiketan-sharma-2133b5a8/", "target", "_blank", 1, "social-link", "social-link--linkedin"], ["d", "M278.9308 253.1923h43.5769v20.0539h.5923c6.0923-11.5077 20.9-23.6077 43.0692-23.6077 46.0308 0 54.577 30.2923 54.577 69.723v80.2154h-45.4385v-71.1615c0-17.0077-.2539-38.8385-23.6077-38.8385-23.6923 0-27.2462 18.5308-27.2462 37.5693v72.4307h-45.4384l-.0846-146.3846zm-74.1231 0h45.523V399.577h-45.523V253.1923zm22.8461-72.7692c14.5539 0 26.4 11.8461 26.4 26.4 0 14.5538-11.8461 26.4-26.4 26.4-14.6384 0-26.4-11.8462-26.4-26.4 0-14.5539 11.7616-26.4 26.4-26.4z", "fill", "#000", "fill-rule", "nonzero", 1, "social-group__icon"], ["id", "instagram", "href", "https://www.instagram.com/kittu.io/", "target", "_blank", 1, "social-link", "social-link--instagram"], ["x1", "0%", "y1", "100%", "y2", "0%", "id", "simpleInsta"], ["stop-color", "#D72F3F", "offset", "0%"], ["stop-color", "#4221B9", "offset", "100%"], ["fill", "url(#simpleInsta)", "cx", "300", "cy", "300", "r", "252.5", 1, "social-group__inner-circle", "social-group__inner-circle--instagram"], ["d", "M436.8577 205.4154c-3.6808-9.4808-8.5885-17.5116-16.6192-25.5423-8.0308-8.0308-16.0616-12.9385-25.5423-16.6193-9.1462-3.5692-19.7424-6.023-35.0231-6.6923-15.3923-.6692-20.3-.8923-59.5616-.8923-39.2615 0-44.1692.1116-59.5615.8923-15.3923.6693-25.877 3.1231-35.023 6.6923-9.4808 3.6808-17.5116 8.5885-25.5424 16.6193-8.0308 8.0307-12.9384 16.0615-16.6192 25.5423-3.5692 9.1461-6.023 19.7423-6.6923 35.023-.6693 15.3924-.8923 20.3-.8923 59.5616 0 39.2615.1115 44.1692.8923 59.5615.6692 15.3923 3.123 25.877 6.6923 35.0231 3.6808 9.4808 8.5884 17.5116 16.6192 25.5423 8.0308 8.0308 16.0616 12.9385 25.5423 16.6193 9.1462 3.5692 19.7423 6.023 35.0231 6.6923 15.3923.6692 20.3.8923 59.5615.8923 39.2616 0 44.1693-.1116 59.5616-.8923 15.3923-.6693 25.8769-3.1231 35.023-6.6923 9.4808-3.6808 17.5116-8.5885 25.5424-16.6193 8.0307-8.0307 12.9384-16.0615 16.6192-25.5423 3.5692-9.1461 6.023-19.7423 6.6923-35.023.6692-15.3924.8923-20.3.8923-59.5616 0-39.2615-.1115-44.1692-.8923-59.5615-.6692-15.3923-3.123-25.877-6.6923-35.0231zm-19.2962 152.9192c-.6692 14.0539-3.0115 21.75-5.0192 26.7692-2.5654 6.6924-5.8 11.6-10.8192 16.6193-5.0193 5.0192-9.8154 8.1423-16.6193 10.8192-5.1307 2.0077-12.7153 4.35-26.7692 5.0192-15.2808.6693-19.7423.8923-58.3346.8923s-43.1654-.1115-58.3346-.8923c-14.0539-.6692-21.75-3.0115-26.7692-5.0192-6.6924-2.5654-11.6-5.8-16.6193-10.8192-5.0192-5.0193-8.1423-9.8154-10.8192-16.6193-2.0077-5.1307-4.35-12.7153-5.0192-26.7692-.6693-15.2808-.8923-19.8538-.8923-58.3346s.1115-43.1654.8923-58.3346c.6692-14.0539 3.0115-21.75 5.0192-26.7692 2.5654-6.6924 5.8-11.6 10.8192-16.6193 5.0193-5.0192 9.8154-8.1423 16.6193-10.8192 5.1307-2.0077 12.7153-4.35 26.7692-5.0192 15.2808-.6693 19.8538-.8923 58.3346-.8923s43.1654.1115 58.3346.8923c14.0539.6692 21.75 3.0115 26.7692 5.0192 6.6924 2.5654 11.6 5.8 16.6193 10.8192 5.0192 5.0193 8.1423 9.8154 10.8192 16.6193 2.0077 5.1307 4.35 12.7153 5.0192 26.7692.6693 15.2808.8923 19.8538.8923 58.3346s-.223 43.1654-.8923 58.3346zM300 225.827c-40.9346 0-74.173 33.2385-74.173 74.1731s33.2384 74.173 74.173 74.173 74.173-33.2384 74.173-74.173-33.2384-74.173-74.173-74.173zm0 122.3577c-26.5462 0-48.1846-21.527-48.1846-48.1846 0-26.5462 21.527-48.1846 48.1846-48.1846 26.6577 0 48.1846 21.527 48.1846 48.1846 0 26.5462-21.6384 48.1846-48.1846 48.1846zm77.073-107.9692c-9.548 0-17.2884-7.7403-17.2884-17.2885 0-9.5481 7.7403-17.2884 17.2885-17.2884 9.5481 0 17.2884 7.7403 17.2884 17.2884 0 9.5482-7.7403 17.2885-17.2884 17.2885z", "fill", "#FFF", "fill-rule", "nonzero", 1, "social-group__icon"]], template: function ContactSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Medium ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Linkedin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Instagram ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "linearGradient", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "stop", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "stop", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  z-index: 999;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  transition: all 0.4s ease-out;\n}\n.wrapper__links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 70%;\n}\n.social-link[_ngcontent-%COMP%] {\n  z-index: 9999;\n}\n.social-link--linkedin[_ngcontent-%COMP%] {\n  color: #2d76b0;\n}\n.social-link--github[_ngcontent-%COMP%] {\n  color: #000;\n}\n.social-link--instagram[_ngcontent-%COMP%] {\n  color: #9a2970;\n}\n.social-link--dribbble[_ngcontent-%COMP%] {\n  color: #b53561;\n}\n.social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%] {\n  width: 2.8rem;\n  height: 2.8rem;\n}\n.social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]   .social-group__icon[_ngcontent-%COMP%] {\n  fill: #191308;\n  transition: all 0.2s;\n}\n.social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]   .social-group__inner-circle[_ngcontent-%COMP%] {\n  fill: transparent;\n  transition: all 0.2s;\n}\n.social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]   .social-group__outline[_ngcontent-%COMP%] {\n  stroke: #191308;\n  transform-origin: 50% 50%;\n  transition: all 0.2s;\n}\n.social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:hover   .social-group__icon[_ngcontent-%COMP%], .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:active   .social-group__icon[_ngcontent-%COMP%], .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:focus   .social-group__icon[_ngcontent-%COMP%] {\n  fill: #FFFBFA;\n  transition: all 0.45s;\n}\n.social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:hover   .social-group__inner-circle[_ngcontent-%COMP%], .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:active   .social-group__inner-circle[_ngcontent-%COMP%], .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:focus   .social-group__inner-circle[_ngcontent-%COMP%] {\n  fill: currentColor;\n  transition: all 0.45s;\n}\n.social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:hover   .social-group__inner-circle--instagram[_ngcontent-%COMP%], .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:active   .social-group__inner-circle--instagram[_ngcontent-%COMP%], .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:focus   .social-group__inner-circle--instagram[_ngcontent-%COMP%] {\n  fill: url(#simpleInsta) !important;\n}\n.social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:hover   .social-group__outline[_ngcontent-%COMP%], .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:active   .social-group__outline[_ngcontent-%COMP%], .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:focus   .social-group__outline[_ngcontent-%COMP%] {\n  stroke: currentColor;\n  transform: scale(1.1);\n  transition: all 0.45s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhY3Qtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFQRjtBQVNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBUEo7QUFXQTtFQUNFLGFBQUE7QUFSRjtBQVNFO0VBQ0UsY0FBQTtBQVBKO0FBVUU7RUFDRSxXQUFBO0FBUko7QUFXRTtFQUNFLGNBQUE7QUFUSjtBQVlFO0VBQ0UsY0FBQTtBQVZKO0FBYUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQVhKO0FBZU07RUFDRSxhQTNDTTtFQTRDTixvQkFBQTtBQWJSO0FBZ0JNO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQWRSO0FBaUJNO0VBQ0UsZUFyRE07RUFzRE4seUJBQUE7RUFDQSxvQkFBQTtBQWZSO0FBd0JNO0VBQ0UsYUFuRU07RUFvRU4scUJBQUE7QUF0QlI7QUF5Qk07RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBdkJSO0FBeUJRO0VBQ0Usa0NBQUE7QUF2QlY7QUE0Qk07RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUExQlIiLCJmaWxlIjoiY29udGFjdC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLXByaW1hcnk6ICM4MWMyZGU7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2I0ZjVmZjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICM0ZjkyYWM7XG5cbiRjb2xvci13aGl0ZTogI0ZGRkJGQTtcblxuJGNvbG9yLWJsYWNrOiAjMTkxMzA4O1xuXG4ud3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1vdXQ7XG4gIFxuICAmX19saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5cbi5zb2NpYWwtbGluayB7XG4gIHotaW5kZXg6IDk5OTk7XG4gICYtLWxpbmtlZGluIHtcbiAgICBjb2xvcjogIzJkNzZiMDtcbiAgfVxuXG4gICYtLWdpdGh1YiB7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cblxuICAmLS1pbnN0YWdyYW0ge1xuICAgIGNvbG9yOiAjOWEyOTcwO1xuICB9XG5cbiAgJi0tZHJpYmJibGUge1xuICAgIGNvbG9yOiAjYjUzNTYxO1xuICB9XG5cbiAgJiAuc29jaWFsLXN2ZyB7XG4gICAgd2lkdGg6IDIuOHJlbTtcbiAgICBoZWlnaHQ6IDIuOHJlbTtcblxuICAgICYgLnNvY2lhbC1ncm91cCB7XG5cbiAgICAgICZfX2ljb24ge1xuICAgICAgICBmaWxsOiAkY29sb3ItYmxhY2s7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgICB9XG5cbiAgICAgICZfX2lubmVyLWNpcmNsZSB7XG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAgICAgfVxuXG4gICAgICAmX19vdXRsaW5lIHtcbiAgICAgICAgc3Ryb2tlOiAkY29sb3ItYmxhY2s7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgICB9XG4gIFxuICB9XG5cbiAgJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMge1xuXG4gICAgJiAuc29jaWFsLWdyb3VwIHtcblxuICAgICAgJl9faWNvbiB7XG4gICAgICAgIGZpbGw6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40NXM7XG4gICAgICB9XG5cbiAgICAgICZfX2lubmVyLWNpcmNsZSB7XG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40NXM7XG5cbiAgICAgICAgJi0taW5zdGFncmFtIHtcbiAgICAgICAgICBmaWxsOiB1cmwoI3NpbXBsZUluc3RhKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgJl9fb3V0bGluZSB7XG4gICAgICAgIHN0cm9rZTogY3VycmVudENvbG9yO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNDVzO1xuICAgICAgfVxuXG4gICAgfSBcblxuICB9XG5cbiAgfVxuXG59XG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-section',
                templateUrl: './contact-section.component.html',
                styleUrls: ['./contact-section.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'forte-portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Tj/N":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "WF9o":
/*!***************************************************************!*\
  !*** ./src/app/services/localstorage/localstorage.service.ts ***!
  \***************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocalStorageService {
    constructor() {
        this.localStorage = window.localStorage;
    }
    get(key) {
        return JSON.parse(this.localStorage.getItem(key) || '');
    }
    set(key, value) {
        this.localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    remove(key) {
        this.localStorage.removeItem(key);
        return true;
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "X0ZM":
/*!*********************************************************!*\
  !*** ./src/app/public/particles/particles.component.ts ***!
  \*********************************************************/
/*! exports provided: ParticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticlesComponent", function() { return ParticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ParticlesComponent {
    constructor() { }
    ngOnInit() {
        debugger;
        particlesJS('particles-js', './../../../assets/particles.json', () => {
            console.log('callback - particles.js config loaded');
        });
    }
}
ParticlesComponent.ɵfac = function ParticlesComponent_Factory(t) { return new (t || ParticlesComponent)(); };
ParticlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParticlesComponent, selectors: [["app-particles"]], decls: 1, vars: 0, consts: [["id", "particles-js"]], template: function ParticlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0aWNsZXMuY29tcG9uZW50LmNzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticlesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-particles',
                templateUrl: './particles.component.html',
                styleUrls: ['./particles.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _public_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./public/notfound/notfound.component */ "6jfn");
/* harmony import */ var _public_headernav_headernav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./public/headernav/headernav.component */ "5F6o");
/* harmony import */ var _public_onlineportal_onlineportal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./public/onlineportal/onlineportal.component */ "697Y");
/* harmony import */ var _public_contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./public/contact-section/contact-section.component */ "M3Ej");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _public_particles_particles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./public/particles/particles.component */ "X0ZM");
/* harmony import */ var _public_minimal_minimal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./public/minimal/minimal.component */ "ipS4");
/* harmony import */ var _public_particle_design_particle_design_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./public/particle-design/particle-design.component */ "D4oC");
/* harmony import */ var _public_cards_design_cards_design_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./public/cards-design/cards-design.component */ "pGhX");
/* harmony import */ var _public_halfdesign_halfdesign_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./public/halfdesign/halfdesign.component */ "EHAN");
/* harmony import */ var _public_half_app_style_half_app_style_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./public/half-app-style/half-app-style.component */ "AklS");
/* harmony import */ var _public_mystory_mystory_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./public/mystory/mystory.component */ "IbZW");
/* harmony import */ var _public_applications_firechat_firechat_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./public/applications/firechat/firechat.component */ "0Ghg");
/* harmony import */ var _services_firebase_firebaseactions_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/firebase/firebaseactions.service */ "D8uv");
/* harmony import */ var _public_applications_hungryjerry_hungryjerry_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./public/applications/hungryjerry/hungryjerry.component */ "6SMs");

























const firebaseConfig = {
    apiKey: "AIzaSyBZAZl3zHtiZM6TuhtSfMQkneGqrhIqb08",
    authDomain: "forte-react.firebaseapp.com",
    projectId: "forte-react",
    storageBucket: "forte-react.appspot.com",
    messagingSenderId: "270256770633",
    appId: "1:270256770633:web:d92000af929ca1ebc77998",
    measurementId: "G-3QSB5WPQVS"
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [_services_firebase_firebaseactions_service__WEBPACK_IMPORTED_MODULE_21__["FirebaseactionsService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _public_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__["NotfoundComponent"],
        _public_headernav_headernav_component__WEBPACK_IMPORTED_MODULE_9__["HeadernavComponent"],
        _public_onlineportal_onlineportal_component__WEBPACK_IMPORTED_MODULE_10__["OnlineportalComponent"],
        _public_particles_particles_component__WEBPACK_IMPORTED_MODULE_13__["ParticlesComponent"],
        _public_contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_11__["ContactSectionComponent"],
        _public_minimal_minimal_component__WEBPACK_IMPORTED_MODULE_14__["MinimalComponent"],
        _public_particle_design_particle_design_component__WEBPACK_IMPORTED_MODULE_15__["ParticleDesignComponent"],
        _public_cards_design_cards_design_component__WEBPACK_IMPORTED_MODULE_16__["CardsDesignComponent"],
        _public_halfdesign_halfdesign_component__WEBPACK_IMPORTED_MODULE_17__["HalfdesignComponent"],
        _public_half_app_style_half_app_style_component__WEBPACK_IMPORTED_MODULE_18__["HalfAppStyleComponent"],
        _public_mystory_mystory_component__WEBPACK_IMPORTED_MODULE_19__["MystoryComponent"],
        _public_applications_firechat_firechat_component__WEBPACK_IMPORTED_MODULE_20__["FirechatComponent"],
        _public_applications_hungryjerry_hungryjerry_component__WEBPACK_IMPORTED_MODULE_22__["HungryjerryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _public_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__["NotfoundComponent"],
                    _public_headernav_headernav_component__WEBPACK_IMPORTED_MODULE_9__["HeadernavComponent"],
                    _public_onlineportal_onlineportal_component__WEBPACK_IMPORTED_MODULE_10__["OnlineportalComponent"],
                    _public_particles_particles_component__WEBPACK_IMPORTED_MODULE_13__["ParticlesComponent"],
                    _public_contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_11__["ContactSectionComponent"],
                    _public_minimal_minimal_component__WEBPACK_IMPORTED_MODULE_14__["MinimalComponent"],
                    _public_particle_design_particle_design_component__WEBPACK_IMPORTED_MODULE_15__["ParticleDesignComponent"],
                    _public_cards_design_cards_design_component__WEBPACK_IMPORTED_MODULE_16__["CardsDesignComponent"],
                    _public_halfdesign_halfdesign_component__WEBPACK_IMPORTED_MODULE_17__["HalfdesignComponent"],
                    _public_half_app_style_half_app_style_component__WEBPACK_IMPORTED_MODULE_18__["HalfAppStyleComponent"],
                    _public_mystory_mystory_component__WEBPACK_IMPORTED_MODULE_19__["MystoryComponent"],
                    _public_applications_firechat_firechat_component__WEBPACK_IMPORTED_MODULE_20__["FirechatComponent"],
                    _public_applications_hungryjerry_hungryjerry_component__WEBPACK_IMPORTED_MODULE_22__["HungryjerryComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(firebaseConfig),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                ],
                providers: [_services_firebase_firebaseactions_service__WEBPACK_IMPORTED_MODULE_21__["FirebaseactionsService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gu4S":
/*!*********************************************************!*\
  !*** ./src/app/services/portfolio/portfolio.service.ts ***!
  \*********************************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../localstorage/localstorage.service */ "WF9o");







class PortfolioService {
    constructor(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
        this.getUserProfileUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApiUrl + 'portfolio';
    }
    getUserProfile(data = '') {
        this.getUserProfileUrl += data;
        return this.http.get(this.getUserProfileUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getUserFromLS() {
        return this.localStorageService.get('currentUser');
    }
    saveUserToLS(data = '') {
        return this.localStorageService.set('currentUser', data);
    }
    handleError(error) {
        let errorMessage;
        if (error.error instanceof ErrorEvent) {
            errorMessage = 'An error occuered ' + error.body.message;
        }
        else {
            //something else
        }
        console.error(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
}
PortfolioService.ɵfac = function PortfolioService_Factory(t) { return new (t || PortfolioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"])); };
PortfolioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PortfolioService, factory: PortfolioService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "ipS4":
/*!*****************************************************!*\
  !*** ./src/app/public/minimal/minimal.component.ts ***!
  \*****************************************************/
/*! exports provided: MinimalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimalComponent", function() { return MinimalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/localstorage/localstorage.service */ "WF9o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MinimalComponent_section_47_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \uD83D\uDC49 ", point_r4, " ");
} }
function MinimalComponent_section_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MinimalComponent_section_47_li_11_Template, 3, 1, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exp_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp_r2.position, " @ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", exp_r2.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r2.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \uD83D\uDDD3", exp_r2.startDate, " to ", exp_r2.endDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", exp_r2.highlights);
} }
function MinimalComponent_section_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const edu_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", edu_r5.studyType, " of ", edu_r5.area, " @ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", edu_r5.institutionUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", edu_r5.institution, ",", edu_r5.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", edu_r5.startDate, " to ", edu_r5.endDate, " ");
} }
class MinimalComponent {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
        this.education = [
            {
                "institution": "Deakin University",
                "area": "Business Analytics",
                "studyType": "Master",
                "startDate": "July 2019",
                "endDate": "July 2021",
                "location": "Melbourne",
                "institutionUrl": "https://www.deakin.edu.au/",
            },
            {
                "institution": "UPES",
                "area": "Computer Science",
                "studyType": "Bachelor of Technology (B Tech.)",
                "startDate": "July 2012",
                "endDate": "July 2016",
                "location": "Dehradun",
                "institutionUrl": "https://www.upes.ac.in/"
            }
        ];
        this.work = [
            {
                "company": "Fieldd",
                "position": "Product Development Engineer",
                "website": "https://fieldd.co",
                "startDate": "September 2019",
                "endDate": "Present",
                "summary": "",
                "highlights": [
                    "Designed and developed cutting-edge features for web and mobile applications",
                    "Effectively coded critical sections of the product, including payment processing,platform billing, and server availability",
                    "Successfully set up and deployed web applications to AWS and mobile applications to respective app stores",
                    "Developed and presented findings and solutions to audiences including senior executives, board members, and stakeholders"
                ]
            },
            {
                "company": "Monocept",
                "position": "Senior Software Engineer",
                "website": "https://monocept.com/",
                "startDate": "February 2018",
                "endDate": "May 2019",
                "summary": "",
                "highlights": [
                    "Effectively conducted the digital transformation for legacy insurance processing systems to modern web applications",
                    "Implemented and updated application modules to improve the performance of the system and enhance user experience",
                    "Successfully worked at an independent level, while also serving as an effective and enthusiastic collaborator",
                    "Worked to continually meet the expectations of stakeholders and users"
                ]
            },
            {
                "company": "Infosys",
                "position": "System Engineer",
                "website": "https://www.infosys.com/",
                "startDate": "July 2016",
                "endDate": "January 2018",
                "summary": "",
                "highlights": [
                    "Effectively coded software changes and alterations based on specific design specifications",
                    "Performed automated testing tasks and developed complex features routinely",
                    "Brought forth extensive experience using and developing APIs"
                ]
            }
        ];
    }
    ngOnInit() {
        // this.localStorageService.set('education',this.education)
        // this.localStorageService.set('work',this.work)
    }
}
MinimalComponent.ɵfac = function MinimalComponent_Factory(t) { return new (t || MinimalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"])); };
MinimalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MinimalComponent, selectors: [["app-minimal"]], decls: 81, vars: 2, consts: [[1, "container", "portal-spacing"], [1, "row", "gen-space"], [1, "heading-text"], [1, "row", "gen-space", "mt-4"], [1, "sub-heading-text"], [1, "highlight-text"], [1, "row", "gen-space", 2, "margin-top", "0"], ["href", "mailto:kritiketan.sharma@outlook.com", "target", "_blank"], [1, "fas", "fa-paper-plane"], ["href", "https://www.linkedin.com/in/kritiketan-sharma-2133b5a8/", 1, "icon", 2, "color", "#2d76b0"], [1, "fab", "fa-linkedin"], ["href", "https://kritiketan.medium.com", 1, "icon", "icon-space", 2, "color", "var(--black-primary)"], [1, "fab", "fa-medium"], ["href", "https://wa.link/tj8ukb", "target", "_blank", 1, "icon", "icon-space", 2, "color", "green"], [1, "fab", "fa-whatsapp"], ["href", "./../../../assets/Kritiketan Sharma Resume.pdf", "download", "Kritiketan_Sharma_Resume.pdf", 1, "icon", "icon-space"], ["src", "./assets/favicon.png", "height", "26px", "width", "26px", "srcset", ""], [1, "row", "gen-space", "mt-3"], [1, "col-md-3", "body-text", "body-header-space"], ["href", "#work"], [1, "col-md-2", "body-text", "body-header-space"], ["href", "#education"], [1, "col-md-3", "body-text", "body-header-space", "hide-on-mobile"], ["href", "#tech"], ["id", "work"], [1, "sub-heading-text", "body-header-space", "highlight-text"], [4, "ngFor", "ngForOf"], ["id", "education"], ["id", "tech", 1, "hide-on-mobile"], [1, "col-md-3"], [1, "fab", "fa-js-square", "icon-big", 2, "color", "#EFD81D"], [1, "fab", "fa-angular", "icon-big", 2, "color", "#BD0E2C"], [1, "fab", "fa-node", "icon-big", 2, "color", "#313131"], [1, "fab", "fa-html5", "icon-big", 2, "color", "#E44D27"], [1, "row", "gen-space", "mt-1"], [1, "fab", "fa-aws", "icon-big", 2, "color", "#232F3E"], [1, "fab", "fa-css3-alt", "icon-big", 2, "color", "#266BDD"], [1, "fab", "fa-python", "icon-big", 2, "color", "#232F3E"], ["height", "80px", "width", "120px", "src", "../../../assets/MongoDB-Logo.png"], [1, "row", "mt-5", 2, "justify-content", "center", "background-color", "lightgoldenrodyellow"], [1, "fas", "fa-code"], [1, "highlight-text", 2, "color", "var(--text-color-primary)"], [1, "row", "gen-space", "mt-2"], [1, "body-text", "body-header-space", "highlight-text"], ["target", "_blank", 3, "href"], [1, "row", "gen-space", "body-text"], [1, "col-md-10"], [1, "body-text", "mt-1"]], template: function MinimalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \uD83D\uDC4B\uD83C\uDFFC Hello ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " My name is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Kritiketan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ", I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " based in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Melbourne \uD83E\uDD98");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " kritiketan.sharma@outlook.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \uD83C\uDF93");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \uD83D\uDCBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBBWork Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MinimalComponent_section_47_Template, 12, 6, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \uD83C\uDF93Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, MinimalComponent_section_52_Template, 8, 7, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " \uD83D\uDCBBTechnologies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Kittu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.work);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.education);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaW5pbWFsLmNvbXBvbmVudC5jc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinimalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-minimal',
                templateUrl: './minimal.component.html',
                styleUrls: ['./minimal.component.css']
            }]
    }], function () { return [{ type: _services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "pGhX":
/*!***************************************************************!*\
  !*** ./src/app/public/cards-design/cards-design.component.ts ***!
  \***************************************************************/
/*! exports provided: CardsDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsDesignComponent", function() { return CardsDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/localstorage/localstorage.service */ "WF9o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CardsDesignComponent_section_43_section_4_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \uD83D\uDC49 ", point_r5, " ");
} }
function CardsDesignComponent_section_43_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CardsDesignComponent_section_43_section_4_li_11_Template, 3, 1, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exp_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp_r3.position, " @ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", exp_r3.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r3.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \uD83D\uDDD3", exp_r3.startDate, " to ", exp_r3.endDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", exp_r3.highlights);
} }
function CardsDesignComponent_section_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBBWork Experience ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardsDesignComponent_section_43_section_4_Template, 12, 6, "section", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.work);
} }
function CardsDesignComponent_section_44_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const edu_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", edu_r7.studyType, " of ", edu_r7.area, " @ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", edu_r7.institutionUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", edu_r7.institution, ",", edu_r7.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", edu_r7.startDate, " to ", edu_r7.endDate, " ");
} }
function CardsDesignComponent_section_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \uD83C\uDF93Education ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardsDesignComponent_section_44_section_4_Template, 8, 7, "section", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.education);
} }
class CardsDesignComponent {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
        this.education = [
            {
                "institution": "Deakin University",
                "area": "Business Analytics",
                "studyType": "Master",
                "startDate": "July 2019",
                "endDate": "July 2021",
                "location": "Melbourne",
                "institutionUrl": "https://www.deakin.edu.au/",
            },
            {
                "institution": "UPES",
                "area": "Computer Science",
                "studyType": "Bachelor of Technology (B Tech.)",
                "startDate": "July 2012",
                "endDate": "July 2016",
                "location": "Dehradun",
                "institutionUrl": "https://www.upes.ac.in/"
            }
        ];
        this.work = [
            {
                "company": "Fieldd",
                "position": "Product Development Engineer",
                "website": "https://fieldd.co",
                "startDate": "September 2019",
                "endDate": "Present",
                "summary": "",
                "highlights": [
                    "Designed and developed cutting-edge features for web and mobile applications",
                    "Effectively coded critical sections of the product, including payment processing,platform billing, and server availability",
                    "Successfully set up and deployed web applications to AWS and mobile applications to respective app stores",
                    "Developed and presented findings and solutions to audiences including senior executives, board members, and stakeholders"
                ]
            },
            {
                "company": "Monocept",
                "position": "Senior Software Engineer",
                "website": "https://monocept.com/",
                "startDate": "February 2018",
                "endDate": "May 2019",
                "summary": "",
                "highlights": [
                    "Effectively conducted the digital transformation for legacy insurance processing systems to modern web applications",
                    "Implemented and updated application modules to improve the performance of the system and enhance user experience",
                    "Successfully worked at an independent level, while also serving as an effective and enthusiastic collaborator",
                    "Worked to continually meet the expectations of stakeholders and users"
                ]
            },
            {
                "company": "Infosys",
                "position": "System Engineer",
                "website": "https://www.infosys.com/",
                "startDate": "July 2016",
                "endDate": "January 2018",
                "summary": "",
                "highlights": [
                    "Effectively coded software changes and alterations based on specific design specifications",
                    "Performed automated testing tasks and developed complex features routinely",
                    "Brought forth extensive experience using and developing APIs"
                ]
            }
        ];
    }
    ngOnInit() {
        // this.work = this.localStorageService.get('work')
        // this.education = this.localStorageService.get('education')
    }
}
CardsDesignComponent.ɵfac = function CardsDesignComponent_Factory(t) { return new (t || CardsDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"])); };
CardsDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsDesignComponent, selectors: [["app-cards-design"]], decls: 73, vars: 2, consts: [[1, "container", "portal-spacing"], [1, "row", "gen-space"], [1, "heading-text"], [1, "row", "gen-space", "mt-4"], [1, "sub-heading-text"], [1, "highlight-text"], [1, "row", "gen-space", 2, "margin-top", "0"], ["href", "mailto:kritiketan.sharma@outlook.com", "target", "_blank"], [1, "fas", "fa-paper-plane"], ["href", "https://www.linkedin.com/in/kritiketan-sharma-2133b5a8/", 1, "icon", 2, "color", "#2d76b0"], [1, "fab", "fa-linkedin"], ["href", "https://kritiketan.medium.com", 1, "icon", "icon-space", 2, "color", "var(--black-primary)"], [1, "fab", "fa-medium"], ["href", "https://wa.link/tj8ukb", "target", "_blank", 1, "icon", "icon-space", 2, "color", "green"], [1, "fab", "fa-whatsapp"], ["href", "./../../../assets/Kritiketan Sharma Resume.pdf", "download", "Kritiketan_Sharma_Resume.pdf", 1, "icon", "icon-space"], ["src", "./assets/favicon.png", "height", "26px", "width", "26px", "srcset", ""], [1, "row", "gen-space", "mt-3"], [1, "col-md-3", "body-text", "body-header-space"], ["href", "#work"], [1, "col-md-2", "body-text", "body-header-space"], ["href", "#education"], [1, "col-md-3", "body-text", "body-header-space", "hide-on-mobile"], ["href", "#tech"], ["id", "work", 4, "ngIf"], ["id", "education", 4, "ngIf"], ["id", "tech", 1, "hide-on-mobile"], [1, "sub-heading-text", "highlight-text"], [1, "row", "gen-space", "mt-4", "light-card"], [1, "col-md-3"], [1, "fab", "fa-js-square", "icon-big", 2, "color", "#EFD81D"], [1, "fab", "fa-angular", "icon-big", 2, "color", "#BD0E2C"], [1, "fab", "fa-node", "icon-big", 2, "color", "#313131"], [1, "fab", "fa-html5", "icon-big", 2, "color", "#E44D27"], [1, "row", "gen-space", "mt-1", "light-card"], [1, "fab", "fa-aws", "icon-big", 2, "color", "#232F3E"], [1, "fab", "fa-css3-alt", "icon-big", 2, "color", "#266BDD"], [1, "fab", "fa-python", "icon-big", 2, "color", "#232F3E"], ["height", "80px", "width", "120px", "src", "../../../assets/MongoDB-Logo.png"], [1, "row", "mt-5", 2, "justify-content", "center", "background-color", "lightgoldenrodyellow"], [1, "fas", "fa-code"], [1, "highlight-text", 2, "color", "var(--text-color-primary)"], ["id", "work"], ["class", "light-card", 4, "ngFor", "ngForOf"], [1, "light-card"], [1, "row", "gen-space", "mt-2"], [1, "body-text", "highlight-text"], ["target", "_blank", 3, "href"], [1, "row", "gen-space", "body-text"], [1, "row", "gen-space", "mt-1"], [1, "col-md-10"], [4, "ngFor", "ngForOf"], [1, "body-text", "mt-1"], ["id", "education"]], template: function CardsDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \uD83D\uDC4B\uD83C\uDFFC Hello ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " My name is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Kritiketan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ", I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " based in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Melbourne \uD83E\uDD98");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " kritiketan.sharma@outlook.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \uD83C\uDF93");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \uD83D\uDCBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CardsDesignComponent_section_43_Template, 5, 1, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CardsDesignComponent_section_44_Template, 5, 1, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \uD83D\uDCBBTechnologies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Kittu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.work);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.education);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".dark-card[_ngcontent-%COMP%]{\n    border-radius: 1.5rem;\n    box-shadow: 1px 1px 20px .05px rgba(0, 0, 255, .2);\n    background: linear-gradient(to right top, #4c2097 50%, #752CEB 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLWRlc2lnbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGtEQUFrRDtJQUNsRCxvRUFBb0U7QUFDeEUiLCJmaWxlIjoiY2FyZHMtZGVzaWduLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFyay1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDIwcHggLjA1cHggcmdiYSgwLCAwLCAyNTUsIC4yKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjNGMyMDk3IDUwJSwgIzc1MkNFQiAxMDAlKTtcbn1cblxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsDesignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cards-design',
                templateUrl: './cards-design.component.html',
                styleUrls: ['./cards-design.component.css']
            }]
    }], function () { return [{ type: _services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _public_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/notfound/notfound.component */ "6jfn");
/* harmony import */ var _public_minimal_minimal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/minimal/minimal.component */ "ipS4");
/* harmony import */ var _public_particle_design_particle_design_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public/particle-design/particle-design.component */ "D4oC");
/* harmony import */ var _public_cards_design_cards_design_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./public/cards-design/cards-design.component */ "pGhX");
/* harmony import */ var _public_halfdesign_halfdesign_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public/halfdesign/halfdesign.component */ "EHAN");
/* harmony import */ var _public_half_app_style_half_app_style_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public/half-app-style/half-app-style.component */ "AklS");
/* harmony import */ var _public_applications_firechat_firechat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./public/applications/firechat/firechat.component */ "0Ghg");
/* harmony import */ var _public_applications_hungryjerry_hungryjerry_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./public/applications/hungryjerry/hungryjerry.component */ "6SMs");












const routes = [
    { path: '', component: _public_half_app_style_half_app_style_component__WEBPACK_IMPORTED_MODULE_7__["HalfAppStyleComponent"] },
    { path: 'chat', component: _public_applications_firechat_firechat_component__WEBPACK_IMPORTED_MODULE_8__["FirechatComponent"] },
    { path: 'hungryJerry', component: _public_applications_hungryjerry_hungryjerry_component__WEBPACK_IMPORTED_MODULE_9__["HungryjerryComponent"] },
    { path: 'half', component: _public_halfdesign_halfdesign_component__WEBPACK_IMPORTED_MODULE_6__["HalfdesignComponent"] },
    { path: 'parts', component: _public_particle_design_particle_design_component__WEBPACK_IMPORTED_MODULE_4__["ParticleDesignComponent"] },
    { path: 'cards', component: _public_cards_design_cards_design_component__WEBPACK_IMPORTED_MODULE_5__["CardsDesignComponent"] },
    { path: 'min', component: _public_minimal_minimal_component__WEBPACK_IMPORTED_MODULE_3__["MinimalComponent"] },
    { path: '404', component: _public_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_2__["NotfoundComponent"] },
    { path: '', redirectTo: '', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map