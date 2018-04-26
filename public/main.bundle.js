webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_nauth_guard__ = __webpack_require__("./src/app/guards/nauth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_routing__ = __webpack_require__("./src/app/main/main-routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_nauth_guard__["a" /* NAuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_nauth_guard__["a" /* NAuthGuard */]] },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */], children: __WEBPACK_IMPORTED_MODULE_7__main_main_routing__["a" /* mainRoutes */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress #progressBar></ng-progress>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_progressbar_core__ = __webpack_require__("./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_main_module__ = __webpack_require__("./src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_nauth_guard__ = __webpack_require__("./src/app/guards/nauth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var config = {
    color: '#1abc9c',
    spinner: false
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__not_found_not_found_component__["a" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_progressbar_core__["b" /* NgProgressModule */].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__main_main_module__["a" /* MainModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_17__guards_nauth_guard__["a" /* NAuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/click-outside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(elementRef) {
        this.elementRef = elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        var clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            console.log(this.elementRef.nativeElement);
            this.clickOutside.emit(null);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('clickOutside'),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appClickOutside]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/nauth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NAuthGuard = /** @class */ (function () {
    function NAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NAuthGuard.prototype.canActivate = function (next, state) {
        var token = localStorage.getItem('token');
        if (token) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    NAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NAuthGuard);
    return NAuthGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"container\">\n    <h3 class=\"title\">Login to Infy</h3>\n    <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\" [class.has-danger]=\"username.invalid && (username.dirty || username.touched)\">\n        <input type=\"text\" [(ngModel)]=\"model.username\" name=\"username\" class=\"form-control\" required placeholder=\"Username\" #username=\"ngModel\" [disabled]=\"freeze\" />\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': password.invalid && (password.dirty || password.touched),\n        'has-success': password.valid && (password.dirty || password.touched)\n      }\">\n        <input type=\"password\" [(ngModel)]=\"model.password\" name=\"password\" class=\"form-control\" required placeholder=\"Password\" #password=\"ngModel\" [disabled]=\"freeze\" />\n      </div>\n      <button type=\"submit\" class=\"form-submit\" [disabled]=\"username.invalid || password.invalid || freeze\">Login</button>\n    </form>\n    <a routerLink=\".\" class=\"forgot-link\">Forgot your password?</a>\n    <div class=\"register\">\n      <span>Do you have an account?</span>\n      <button [routerLink]=\"['/register']\" class=\"sign-up\" [disabled]=\"freeze\">Sign Up</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: #f7f6f2;\n  overflow-x: hidden;\n  position: relative;\n  height: 100%;\n  width: 100%; }\n  .wrapper .container {\n    margin: 120px auto;\n    text-align: center;\n    overflow: hidden;\n    color: #bbb7ae;\n    width: 340px; }\n  .wrapper .container .title {\n      font-weight: normal;\n      margin-bottom: 10px;\n      text-align: center;\n      margin-top: 10px;\n      font-size: 36px;\n      padding: 5px 20px; }\n  .wrapper .container form {\n      text-align: center;\n      padding: 20px; }\n  .wrapper .container form .form-group {\n        margin: 15px 0; }\n  .wrapper .container form .form-group:first-child {\n          margin-top: 0; }\n  .wrapper .container form .form-group.has-danger input {\n          border: 1px solid #e74c3c; }\n  .wrapper .container form .form-group.has-danger input::-webkit-input-placeholder {\n            color: #e74c3c; }\n  .wrapper .container form .form-group.has-danger input::-moz-placeholder {\n            color: #e74c3c; }\n  .wrapper .container form .form-group.has-danger input:-ms-input-placeholder {\n            color: #e74c3c; }\n  .wrapper .container form .form-group.has-danger input:-moz-placeholder {\n            color: #e74c3c; }\n  .wrapper .container form .form-group input {\n          background-color: rgba(0, 0, 0, 0.1);\n          border: 1px solid rgba(0, 0, 0, 0.1);\n          border-radius: 3px;\n          font-size: 16px;\n          color: #bbb7ae;\n          display: block;\n          outline: none;\n          padding: 13px;\n          width: 100%; }\n  .wrapper .container form .form-group input::-webkit-input-placeholder {\n            color: #bbb7ae; }\n  .wrapper .container form .form-group input::-moz-placeholder {\n            color: #bbb7ae; }\n  .wrapper .container form .form-group input:-ms-input-placeholder {\n            color: #bbb7ae; }\n  .wrapper .container form .form-group input:-moz-placeholder {\n            color: #bbb7ae; }\n  .wrapper .container form .form-group input:disabled {\n            cursor: not-allowed;\n            opacity: 0.6; }\n  .wrapper .container form .form-submit {\n        -webkit-transition: 0.5s all;\n        transition: 0.5s all;\n        background-color: #1abc9c;\n        border-radius: 3px;\n        text-align: center;\n        padding: 12px 20px;\n        font-size: 18px;\n        cursor: pointer;\n        border: none;\n        color: white;\n        width: 100%; }\n  .wrapper .container form .form-submit:disabled {\n          cursor: not-allowed;\n          opacity: 0.8; }\n  .wrapper .container form .form-submit:hover:not(:disabled) {\n          background-color: #16a085; }\n  .wrapper .container .forgot-link {\n      -webkit-transition: 0.3s all;\n      transition: 0.3s all;\n      font-size: 12px;\n      color: #bbb7ae; }\n  .wrapper .container .forgot-link:hover {\n        color: #3d3d3d; }\n  .wrapper .container .register {\n      margin: 20px 0; }\n  .wrapper .container .register span {\n        font-weight: bold;\n        font-size: 14px;\n        margin-right: 10px; }\n  .wrapper .container .register .sign-up {\n        background-color: transparent;\n        border: 1px solid #1abc9c;\n        border-radius: 3px;\n        font-weight: bold;\n        padding: 5px 15px;\n        cursor: pointer;\n        font-size: 14px;\n        color: #1abc9c;\n        -webkit-transition: 0.3s all;\n        transition: 0.3s all; }\n  .wrapper .container .register .sign-up:hover {\n          background-color: #1abc9c;\n          color: white; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_progressbar_core__ = __webpack_require__("./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, progress, toastr) {
        this.authService = authService;
        this.router = router;
        this.progress = progress;
        this.toastr = toastr;
        this.model = {
            username: '',
            password: ''
        };
        this.freeze = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.freeze = false;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.progress.start();
        this.freeze = true;
        this.authService.login(this.model).subscribe(function (response) {
            localStorage.setItem('token', response.data);
            _this.freeze = false;
        }, function (err) {
            _this.toastr.error(err.error.message);
            _this.freeze = false;
            _this.progress.complete();
        }, function () {
            _this.freeze = false;
            _this.router.navigate(['/']);
            _this.progress.complete();
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__ngx_progressbar_core__["a" /* NgProgress */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-wrapper\">\n  <post *ngFor=\"let post of posts\" [post]=\"post\"></post>\n</div>"

/***/ }),

/***/ "./src/app/main/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".post-wrapper {\n  overflow: hidden; }\n  .post-wrapper .post-item {\n    position: relative;\n    margin-right: 5%;\n    margin-top: 5%;\n    float: left;\n    width: 30%; }\n  .post-wrapper .post-item:nth-child(3n) {\n      margin-right: 0; }\n  .post-wrapper .post-item:nth-child(odd) .post-image-link {\n      height: 440px; }\n  .post-wrapper .post-item:nth-child(even) .post-image-link {\n      height: 240px; }\n  .post-wrapper .post-item .post-image-link {\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover;\n      position: relative;\n      cursor: pointer;\n      display: block;\n      width: 100%; }\n  .post-wrapper .post-item .post-image-link .image-wrapper {\n        background-color: rgba(0, 0, 0, 0.7);\n        -webkit-transition: 0.4s all;\n        transition: 0.4s all;\n        position: absolute;\n        padding: 10px;\n        color: white;\n        height: 100%;\n        width: 100%;\n        opacity: 0;\n        left: 0;\n        top: 0; }\n  .post-wrapper .post-item .post-image-link .image-wrapper .post-brief-description {\n          padding: 5px 10px;\n          font-size: 16px;\n          margin: 0; }\n  .post-wrapper .post-item .post-image-link .image-wrapper .meta {\n          position: absolute;\n          font-size: 14px;\n          bottom: 10px;\n          left: 20px; }\n  .post-wrapper .post-item .post-image-link .image-wrapper .meta .meta-item {\n            display: inline-block;\n            margin-right: 10px; }\n  .post-wrapper .post-item .post-image-link .image-wrapper .meta .meta-item:last-child {\n              margin: 0; }\n  .post-wrapper .post-item .post-image-link .image-wrapper .more {\n          text-align: center;\n          position: absolute;\n          margin-left: -20px;\n          margin-top: -34px;\n          font-size: 50px;\n          height: 68px;\n          width: 40px;\n          left: 50%;\n          top: 50%; }\n  .post-wrapper .post-item .post-image-link:hover .image-wrapper {\n        opacity: 1; }\n  .post-wrapper .post-item .post-meta {\n      padding: 10px;\n      width: 100%; }\n  .post-wrapper .post-item .post-meta .category {\n        font-size: 13px;\n        color: #7e7e7e;\n        margin: 5px 0; }\n  .post-wrapper .post-item .post-meta .category a {\n          -webkit-transition: 0.2s all;\n          transition: 0.2s all;\n          text-transform: uppercase;\n          cursor: pointer;\n          color: black; }\n  .post-wrapper .post-item .post-meta .category a:hover {\n            color: #7e7e7e; }\n  .post-wrapper .post-item .post-meta .post-title {\n        font-weight: bold;\n        font-size: 18px;\n        cursor: pointer;\n        display: block;\n        margin: 10px 0; }\n  .post-wrapper .post-item .post-meta .post-author {\n        padding-left: 48px;\n        position: relative;\n        display: block; }\n  .post-wrapper .post-item .post-meta .post-author img {\n          border-radius: 50%;\n          position: absolute;\n          cursor: pointer;\n          height: 40px;\n          width: 40px;\n          left: 3px;\n          top: 4px; }\n  .post-wrapper .post-item .post-meta .post-author .info {\n          line-height: 1.4;\n          padding: 5px 0; }\n  .post-wrapper .post-item .post-meta .post-author .info .author-name {\n            font-size: 12px;\n            display: block;\n            width: 100%; }\n  .post-wrapper .post-item .post-meta .post-author .info .post-date {\n            font-size: 12px;\n            color: #515151; }\n"

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(//private authService: AuthService, 
        dataService) {
        this.dataService = dataService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dataService.getHomePost().subscribe(function (response) {
            _this.posts = response['data'];
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home',
            template: __webpack_require__("./src/app/main/home/home.component.html"),
            styles: [__webpack_require__("./src/app/main/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/main-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mainRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_component__ = __webpack_require__("./src/app/main/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_post_details_post_details_component__ = __webpack_require__("./src/app/main/post/post-details/post-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_create_post_create_post_component__ = __webpack_require__("./src/app/main/user/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");





var mainRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'new-post', component: __WEBPACK_IMPORTED_MODULE_3__user_create_post_create_post_component__["a" /* CreatePostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: ':username', component: __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* UserComponent */] },
    { path: ':username/:post_id', component: __WEBPACK_IMPORTED_MODULE_2__post_post_details_post_details_component__["a" /* PostDetailsComponent */] }
];


/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"header\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col col-4\"></div>\n        <div class=\"col col-4\">\n          <div class=\"logo\">\n            <h2>Infy</h2>\n          </div>\n        </div>\n        <div class=\"col col-4\">\n          <div class=\"auth-menu\" *ngIf=\"(isAuthenticated | async) == false;else userMenuTemplate\">\n            <button class=\"header-btn login\" [routerLink]=\"['/login']\">Login</button>\n            <button class=\"header-btn sign-up\" [routerLink]=\"['/register']\">Sign Up</button>\n          </div>\n          <ng-template #userMenuTemplate>\n            <div *ngIf=\"user\" class=\"user-menu\">\n              <div class=\"user-info\" (click)=\"userMenu = !userMenu\">\n                <img [src]=\"user.profile_picture\" alt=\"\">\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n      <!-- <div class=\"row\">\n        <div class=\"col col-12\">\n          <div class=\"categories\">\n            <a routerLink=\".\" class=\"category-item active\">All</a>\n            <a routerLink=\".\" class=\"category-item\">Publication</a>\n            <a routerLink=\".\" class=\"category-item\">Theory</a>\n            <a routerLink=\".\" class=\"category-item\">Science</a>\n          </div>\n        </div>\n      </div> -->\n      <div *ngIf=\"user && userMenu\" class=\"user-menu-dropdown\">\n        <a [routerLink]=\"['/new-post']\" (click)=\"userMenu = !userMenu\" class=\"dropdown-item\">New Post</a>\n        <a [routerLink]=\"['/@' + user.username]\" (click)=\"userMenu = !userMenu\" class=\"dropdown-item\">Profile</a>\n        <!-- <a [routerLink]=\"['/following']\" (click)=\"userMenu = !userMenu\" class=\"dropdown-item\">Following Users</a> -->\n        <a (click)=\"authService.logout(); userMenu = !userMenu\" class=\"dropdown-item\">Logout</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"main\">\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  overflow-y: scroll;\n  position: absolute;\n  padding-top: 95px;\n  z-index: 5;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  top: 0; }\n  .wrapper .header {\n    -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);\n    background-color: white;\n    position: fixed;\n    width: 100%;\n    z-index: 9;\n    top: 0; }\n  .wrapper .header .logo {\n      text-align: center;\n      overflow: hidden; }\n  .wrapper .header .logo h2 {\n        font-weight: normal;\n        font-size: 36px;\n        margin: 0; }\n  .wrapper .header .auth-menu {\n      padding: 10px 30px;\n      text-align: right;\n      line-height: 34px;\n      height: 54px;\n      width: 100%; }\n  .wrapper .header .auth-menu .header-btn {\n        background-color: white;\n        border: 1px solid white;\n        display: inline-block;\n        border-radius: 3px;\n        padding: 5px 10px;\n        cursor: pointer;\n        outline: none; }\n  .wrapper .header .auth-menu .header-btn.login {\n          color: black; }\n  .wrapper .header .auth-menu .header-btn.sign-up {\n          border-color: black;\n          color: black; }\n  .wrapper .header .user-menu {\n      position: relative;\n      padding: 10px 30px;\n      text-align: right;\n      line-height: 34px;\n      height: 54px;\n      width: 100%; }\n  .wrapper .header .user-menu .user-info {\n        position: absolute;\n        border-radius: 50%;\n        overflow: hidden;\n        cursor: pointer;\n        height: 34px;\n        width: 34px;\n        right: 30px;\n        top: 10px; }\n  .wrapper .header .user-menu .user-info img {\n          height: 100%;\n          width: 100%; }\n  .wrapper .header .user-menu-dropdown {\n      background-color: white;\n      border: 1px solid #eee;\n      border-radius: 5px;\n      position: absolute;\n      max-heigth: 500px;\n      width: 200px;\n      right: -55px;\n      top: 50px; }\n  .wrapper .header .user-menu-dropdown .dropdown-item {\n        text-align: center;\n        cursor: pointer;\n        font-size: 13px;\n        display: block;\n        padding: 10px;\n        color: #333; }\n  .wrapper .header .categories {\n      overflow-y: hidden;\n      overflow-x: auto;\n      display: block;\n      height: 40px;\n      width: 100%; }\n  .wrapper .header .categories .category-item {\n        -webkit-transition: 0.2s all;\n        transition: 0.2s all;\n        text-transform: uppercase;\n        display: inline-block;\n        line-height: 40px;\n        font-size: 14px;\n        padding: 0 20px;\n        cursor: pointer;\n        height: 40px; }\n  .wrapper .header .categories .category-item:hover {\n          color: #7e7e7e; }\n  .wrapper .main {\n    overflow: hidden;\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(authService, dataService) {
        this.authService = authService;
        this.dataService = dataService;
        this.userMenu = false;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAuthenticated = this.authService.checkAuth();
        if (localStorage.getItem('token')) {
            this.subscription = this.dataService.getUser().subscribe(function (response) {
                _this.user = response['data'];
                sessionStorage.setItem('user', JSON.stringify(_this.user));
            });
        }
    };
    MainComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_froala_wysiwyg__ = __webpack_require__("./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_progressbar_core__ = __webpack_require__("./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_pipes__ = __webpack_require__("./node_modules/angular-pipes/esm5/angular-pipes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__post_post_post_component__ = __webpack_require__("./src/app/main/post/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__post_post_details_post_details_component__ = __webpack_require__("./src/app/main/post/post-details/post-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_component__ = __webpack_require__("./src/app/main/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_profile_profile_component__ = __webpack_require__("./src/app/main/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_click_outside_directive__ = __webpack_require__("./src/app/directives/click-outside.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_create_post_create_post_component__ = __webpack_require__("./src/app/main/user/create-post/create-post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var config = {
    color: '#1abc9c',
    spinner: false
};
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__post_post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_11__post_post_details_post_details_component__["a" /* PostDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__directives_click_outside_directive__["a" /* ClickOutsideDirective */],
                __WEBPACK_IMPORTED_MODULE_15__user_create_post_create_post_component__["a" /* CreatePostComponent */],
                __WEBPACK_IMPORTED_MODULE_7_angular_pipes__["a" /* SlugifyPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_progressbar_core__["b" /* NgProgressModule */].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__main_component__["a" /* MainComponent */]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/post/post-details/post-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\" class=\"wrapper\">\n  <div class=\"section-insetColumn\">\n    <div class=\"post-author\">\n      <div class=\"post-author-image\">\n        <img [src]=\"post.author.profile_picture\" alt=\"{{ post.author.firstname + ' ' + post.author.lastname }}\">\n      </div>\n      <div class=\"post-author-info\">\n        <div class=\"post-author-info-name\">\n          <a [routerLink]=\"['/@' + post.author.username]\" class=\"author-name\">{{ post.author.firstname + ' ' + post.author.lastname }}</a>\n        </div>\n        <div class=\"post-author-info-date\">\n          <span class=\"post-date\">{{ post.created_date | date }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section-insetColumn\">\n    <h2>{{ post.title }}</h2>\n  </div>\n  <div class=\"section-outsetColumn\">\n    <div class=\"section-outsetColumn-image\">\n      <img [src]=\"post.image\" alt=\"{{ post.title }}\">\n    </div>\n  </div>\n  <div class=\"section-insetColumn\">\n    <div [innerHTML]=\"post.body\"></div>\n  </div>\n  <div class=\"section-insetColumn\">\n    <div class=\"post-footer\">\n      <div class=\"post-footer-button-left\">\n    <!-- <a href=\"#\"><i class=\"ion-happy\"></i></a><span>{{post.upVotes.length}}</span>\n        <a href=\"#\"><i class=\"ion-sad\"></i></a><span>{{post.downVotes.length}}</span> -->\n        <a href=\"#\"><i class=\"ion-arrow-up-c\"></i></a><span>{{post.upVotes.length}}</span>\n        <a href=\"#\"><i class=\"ion-arrow-down-c\"></i></a><span>{{post.upVotes.length}}</span>\n\n      </div>\n      <div class=\"post-footer-button-right\">\n        <a href=\"#\"> <i class=\"ion-chatbubble-working\"></i> </a><span>{{post.comments.length}}</span>\n        <a href=\"#\"> <i class=\"ion-social-facebook\"> </i></a>\n        <a href=\"#\"> <i class=\"ion-social-twitter\"> </i></a>\n      </div>\n    </div>\n  </div>\n  <div  class=\"section-insetColumn-comment\">\n    <div *ngFor=\"let comment of post.comments\" class=\"post-comment\">\n      <div class=\"post-comment-header\">\n        <div class=\"post-comment-author-image\">\n          <img [src]=\"comment.author.profile_picture\" alt=\"{{ comment.author.firstname + ' ' + post.author.lastname }}\">\n        </div>\n        <div class=\"post-comment-author-info\">\n          <div class=\"post-comment-author-info-name\">\n            <a [routerLink]=\"['/@' + post.author.username]\" class=\"author-name\">{{ comment.author.firstname + ' ' + comment.author.lastname }}</a>\n          </div>\n          <div class=\"post-comment-author-info-date\">\n            <span class=\"post-date\">{{ comment.created_date | date }}</span>\n          </div>\n        </div>\n        <div *ngIf=\"(isAuthenticated | async) == true && sessionUser._id == comment.author._id \" class=\"post-comment-actions\">\n          <div class=\"post-comment-action-delete\">\n            <a (click)=\"deleteComment(comment._id,this.post._id);\" ><i class=\"ion-ios-close\"></i></a>\n          </div>\n          <!-- <div class=\"post-comment-action-update\">\n            <a (click)=\"commentMode='update';\"><i class=\"ion-edit\"></i></a>\n          </div> -->\n        </div>\n      </div>\n      <div *ngIf=\"commentMode=='view';else updateCommentTemplate\" class=\"post-comment-body\">\n        <p>{{comment.text}}</p>\n      </div>\n      <ng-template #updateCommentTemplate>\n      <div class=\"post-comment-body\">\n        <textarea rows=\"4\" name=\"comment\" [(ngModel)]=\"updateComment\" >{{comment.text}} </textarea>\n        <button class=\"publish-button\" (click)=\"updateComment(comment._id,this.post._id,updateComment);\">Publish</button>\n      </div>\n    </ng-template>\n    </div>\n    <div *ngIf=\"(isAuthenticated | async) == true;else commentDisableTemplate\" class=\"post-comment\">\n      <div class=\"post-comment-header\">\n        <div class=\"post-comment-author-image\">\n          <img [src]=\"post.author.profile_picture\" alt=\"{{ post.author.firstname + ' ' + post.author.lastname }}\">\n        </div>\n        <div class=\"post-comment-author-info\">\n          <div class=\"post-comment-author-info-name\">\n            <a [routerLink]=\"['/@' + post.author.username]\" class=\"author-name\">{{ post.author.firstname + ' ' + post.author.lastname }}</a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"post-comment-new-body\">\n        <textarea rows=\"4\" name=\"comment\" [(ngModel)]=\"newComment\" placeholder=\"Write a response here...\" ></textarea>\n        <button class=\"publish-button\" (click)=\"createComment(this.post._id,newComment)\">Publish</button>\n      </div>\n\n    </div>\n    <ng-template #commentDisableTemplate>\n      <div class=\"post-comment-disable\">\n        <a href=\"/login\">Write a response</a>\n      </div>\n    </ng-template>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/post/post-details/post-details.component.scss":
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  font-family: medium-content-sans-serif-font,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  border-box-sizing: border-box;\n  background-color: #f7f6f2;\n  overflow-x: hidden;\n  position: relative;\n  height: 100%;\n  width: 100%; }\n  .wrapper .section-insetColumn {\n    margin-left: 100px;\n    margin-right: 100px;\n    text-align: left;\n    overflow: hidden;\n    height: auto;\n    max-width: 800px;\n    width: 100%; }\n  .wrapper .section-insetColumn .post-footer {\n      width: 100%;\n      padding-top: 20px;\n      padding-bottom: 40px;\n      margin-bottom: 15px;\n      border-bottom: 1px solid #dadada; }\n  .wrapper .section-insetColumn .post-footer .post-footer-button-left {\n        float: left; }\n  .wrapper .section-insetColumn .post-footer .post-footer-button-left a {\n          margin-left: 10px;\n          font-size: 20px;\n          color: #1abc9c;\n          padding: 0;\n          border-width: 0;\n          background-color: Transparent; }\n  .wrapper .section-insetColumn .post-footer .post-footer-button-left span {\n          margin-left: 3px;\n          text-align: center;\n          font-size: 18px;\n          color: #1abc9c; }\n  .wrapper .section-insetColumn .post-footer .post-footer-button-right {\n        float: right; }\n  .wrapper .section-insetColumn .post-footer .post-footer-button-right a {\n          margin-left: 10px;\n          font-size: 20px;\n          color: #7b7b7b;\n          padding: 0;\n          border-width: 0;\n          background-color: Transparent; }\n  .wrapper .section-insetColumn .post-footer .post-footer-button-right span {\n          margin-left: 3px;\n          text-align: center;\n          font-size: 18px;\n          color: #1abc9c; }\n  .wrapper .section-insetColumn .post-author {\n      width: 100%;\n      padding-top: 40px;\n      padding-bottom: 10px; }\n  .wrapper .section-insetColumn .post-author .post-author-image {\n        float: left;\n        background-image: url(\"/assets/profile-placeholder.jpg\");\n        background-size: 100%;\n        border-radius: 50%;\n        position: relative;\n        margin: 10px auto;\n        overflow: hidden;\n        height: 60px;\n        width: 60px;\n        z-index: 1; }\n  .wrapper .section-insetColumn .post-author .post-author-image img {\n          background-color: white;\n          position: absolute;\n          height: 100%;\n          width: 100%;\n          z-index: 3;\n          left: 0;\n          top: 0; }\n  .wrapper .section-insetColumn .post-author .post-author-info {\n        float: left;\n        margin: 20px auto; }\n  .wrapper .section-insetColumn .post-author .post-author-info .post-author-info-name {\n          margin: 0 10px; }\n  .wrapper .section-insetColumn .post-author .post-author-info .post-author-info-date {\n          margin: 0 10px; }\n  .wrapper .section-insetColumn p {\n      text-align: justify; }\n  .wrapper .section-outsetColumn {\n    margin: 20px auto;\n    text-align: center;\n    overflow: hidden;\n    color: #bbb7ae;\n    width: 100%;\n    heigth: auto; }\n  .wrapper .section-outsetColumn .section-outsetColumn-image {\n      margin: 20px 20px;\n      overflow: hidden;\n      width: 100%;\n      height: 400px; }\n  .wrapper .section-insetColumn-comment {\n    margin-left: 120px;\n    margin-right: 120px;\n    margin-bottom: 80px;\n    text-align: left;\n    overflow: hidden;\n    height: auto;\n    max-width: 740px;\n    width: 100%; }\n  .wrapper .section-insetColumn-comment .post-comment-disable {\n      text-align: center; }\n  .wrapper .section-insetColumn-comment .post-comment-disable a:hover {\n        color: #1abc9c; }\n  .wrapper .section-insetColumn-comment .post-comment {\n      margin: 10px 30px;\n      border: 1px solid rgba(0, 0, 0, 0.09);\n      /*width:100%;*/\n      height: auto;\n      font-weight: 400;\n      background-color: #f5f5f5;\n      border-radius: 3px; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-header {\n        display: block; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-header .post-comment-author-image {\n          float: left;\n          background-image: url(\"/assets/profile-placeholder.jpg\");\n          background-size: 100%;\n          border-radius: 50%;\n          position: relative;\n          margin: 15px 5px 10px 15px;\n          overflow: hidden;\n          height: 40px;\n          width: 40px;\n          z-index: 1; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-header .post-comment-author-image img {\n            background-color: white;\n            position: absolute;\n            height: 100%;\n            width: 100%;\n            z-index: 3;\n            left: 0;\n            top: 0; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-header .post-comment-author-info {\n          float: left;\n          margin: 10px auto; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-header .post-comment-author-info .post-comment-author-info-name {\n            color: #1abc9c;\n            margin: 0 10px; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-header .post-comment-author-info .post-comment-author-info-date {\n            margin: 0 10px; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-body {\n        clear: both;\n        margin: 20px; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-actions {\n        float: right;\n        margin: 15px; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-actions .post-comment-action-update {\n          float: right; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-actions .post-comment-action-update a {\n            margin-left: 10px;\n            font-size: 20px;\n            color: #1abc9c;\n            padding: 0;\n            border-width: 0;\n            background-color: Transparent; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-actions .post-comment-action-delete {\n          float: right; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-actions .post-comment-action-delete a {\n            margin-left: 10px;\n            font-size: 20px;\n            color: #1abc9c;\n            padding: 0;\n            border-width: 0;\n            background-color: Transparent; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-new-body {\n        clear: both;\n        margin: 20px; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-new-body textarea {\n          font-size: 1rem;\n          width: 100%;\n          height: 100%;\n          resize: none;\n          overflow: auto;\n          background-color: transparent;\n          border-color: Transparent;\n          border: none;\n          outline: none; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-new-body .publish-button {\n          background-color: transparent;\n          border: 1px solid #1abc9c;\n          border-radius: 3px;\n          font-weight: bold;\n          padding: 5px 15px;\n          cursor: pointer;\n          font-size: 14px;\n          color: #1abc9c;\n          -webkit-transition: 0.3s all;\n          transition: 0.3s all; }\n  .wrapper .section-insetColumn-comment .post-comment .post-comment-new-body .publish-button:hover {\n            background-color: #1abc9c;\n            color: white; }\n"

/***/ }),

/***/ "./src/app/main/post/post-details/post-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_progressbar_core__ = __webpack_require__("./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostDetailsComponent = /** @class */ (function () {
    function PostDetailsComponent(authService, dataService, progress, toastr, router, route) {
        this.authService = authService;
        this.dataService = dataService;
        this.progress = progress;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.commentMode = 'view';
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAuthenticated = this.authService.checkAuth();
        this.sessionUser = JSON.parse(sessionStorage.getItem('user'));
        this.paramSubscription = this.route.params.subscribe(function (params) {
            var idParameter = params['post_id'].split('-');
            var postId = idParameter[idParameter.length - 1];
            _this.postSubscription = _this.dataService.getPostDetail(postId).subscribe(function (response) {
                _this.post = response['data'];
            });
        });
    };
    PostDetailsComponent.prototype.createComment = function (post_id, newComment) {
        var _this = this;
        var sendNewComment = {
            text: newComment
        };
        this.commentSubscription = this.dataService.createComment(post_id, sendNewComment).subscribe(function (response) {
            _this.toastr.success(response['message']);
            _this.post.comments.push(response['data']);
        }, function (err) {
            _this.toastr.error(err.error.message);
            _this.progress.complete();
        }, function () {
            _this.newComment = '';
            _this.progress.complete();
        });
    };
    PostDetailsComponent.prototype.deleteComment = function (comment_id, post_id) {
        var _this = this;
        this.commentSubscription = this.dataService.deleteComment(comment_id, post_id).subscribe(function (response) {
            _this.toastr.success(response['message']);
            _this.post.comments = _this.post.comments.filter(function (comment) { return comment._id != comment_id; });
        }, function (err) {
            _this.toastr.error(err.error.message);
            _this.progress.complete();
        }, function () {
            _this.progress.complete();
        });
    };
    PostDetailsComponent.prototype.editComment = function (comment_id, post_id, updatedComment) {
        var _this = this;
        var sendNewComment = {
            "text": updatedComment
        };
        this.commentSubscription = this.dataService.updateComment(comment_id, post_id, updatedComment).subscribe(function (response) {
            _this.toastr.success(response['message']);
            _this.post.comments.forEach(function (comment) {
                if (comment._id == comment_id)
                    comment.text = updatedComment;
            });
        }, function (err) {
            _this.toastr.error(err.error.message);
            _this.progress.complete();
        }, function () {
            _this.progress.complete();
        });
    };
    PostDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post-details',
            template: __webpack_require__("./src/app/main/post/post-details/post-details.component.html"),
            styles: [__webpack_require__("./src/app/main/post/post-details/post-details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__ngx_progressbar_core__["a" /* NgProgress */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], PostDetailsComponent);
    return PostDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/post/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/@' + post.author.username +'/'+ (post.title + '-' + post._id | slugify)]\" class=\"post-image-link\" [style.backgroundImage]=\"'url(' +  '/assets/postimg1.jpg'+ ')'\">\n  <div class=\"image-wrapper\">\n    <p class=\"post-brief-description\" [innerHTML]=\"post.body\"></p>\n    <div class=\"meta\">\n      <div class=\"meta-item\">\n        <i class=\"icon ion-android-favorite\"></i> {{ post.upVotes.length - post.downVotes.length }}\n      </div>\n      <div class=\"meta-item\">\n        <i class=\"icon ion-chatbubbles\"></i> {{ post.comments.length }}\n      </div>\n    </div>\n  </div>\n</a>\n<div class=\"post-meta\">\n  <a [routerLink]=\"['/@' + post.author.username +'/'+ (post.title + '-' + post._id | slugify)]\" class=\"post-title\">{{ post.title }}</a>\n  <!-- <div class=\"category\">\n    Posted in:\n    <a routerLink=\".\">Theory</a>\n  </div> -->\n  <div class=\"post-author\">\n    <img [src]=\"post.author.profile_picture\" alt=\"{{ post.author.firstname + ' ' + post.author.lastname }}\">\n    <div class=\"info\">\n      <a [routerLink]=\"['/@' + post.author.username]\" class=\"author-name\">{{ post.author.firstname + ' ' + post.author.lastname }}</a>\n      <span class=\"post-date\">{{ post.created_date | date: 'mediumDate' }}</span>\n    </div>\n  </div>\n</div>\n<!-- <div class=\"post-item\">\n  <a routerLink=\".\" class=\"post-image-link\" [style.backgroundImage]=\"'url(http://www.typetoken.net/wp-content/uploads/2018/01/2nike_poster1-252x392.jpg)'\">\n    <div class=\"image-wrapper\">\n      <p class=\"post-brief-description\">The Glorious Book of Curious Cocktails is a disgustingly distinguished recipe book, using slugs...</p>\n      <div class=\"meta\">\n        <div class=\"meta-item\">\n          <i class=\"icon ion-android-favorite\"></i> 5\n        </div>\n        <div class=\"meta-item\">\n          <i class=\"icon ion-chatbubbles\"></i> 12\n        </div>\n      </div>\n    </div>\n  </a>\n  <div class=\"post-meta\">\n    <a routerLink=\".\" class=\"post-title\">Queens of Industry</a>\n    <div class=\"category\">\n      Posted in:\n      <a routerLink=\".\">Theory</a>\n    </div>\n    <div class=\"post-author\">\n      <img src=\"https://storage.googleapis.com/online-publication/rozig.png\" alt=\"Ganzorig Erdenebat\">\n      <div class=\"info\">\n        <a routerLink=\".\" class=\"author-name\">Ganzorig Erdenebat</a>\n        <span class=\"post-date\">Apr 22, 2018</span>\n      </div>\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/main/post/post/post.component.scss":
/***/ (function(module, exports) {

module.exports = ":host(.post-item) {\n  position: relative;\n  margin-right: 5%;\n  margin-top: 5%;\n  float: left;\n  width: 30%; }\n  :host(.post-item):nth-child(3n) {\n    margin-right: 0; }\n  :host(.post-item):nth-child(odd) .post-image-link {\n    height: 440px; }\n  :host(.post-item):nth-child(even) .post-image-link {\n    height: 240px; }\n  :host(.post-item) .post-image-link {\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    position: relative;\n    cursor: pointer;\n    display: block;\n    width: 100%; }\n  :host(.post-item) .post-image-link .image-wrapper {\n      background-color: rgba(0, 0, 0, 0.7);\n      -webkit-transition: 0.4s all;\n      transition: 0.4s all;\n      position: absolute;\n      padding: 10px;\n      color: white;\n      height: 100%;\n      width: 100%;\n      opacity: 0;\n      left: 0;\n      top: 0; }\n  :host(.post-item) .post-image-link .image-wrapper .post-brief-description {\n        padding: 5px 10px;\n        font-size: 16px;\n        margin: 0; }\n  :host(.post-item) .post-image-link .image-wrapper .meta {\n        position: absolute;\n        font-size: 14px;\n        bottom: 10px;\n        left: 20px; }\n  :host(.post-item) .post-image-link .image-wrapper .meta .meta-item {\n          display: inline-block;\n          margin-right: 10px; }\n  :host(.post-item) .post-image-link .image-wrapper .meta .meta-item:last-child {\n            margin: 0; }\n  :host(.post-item) .post-image-link .image-wrapper .more {\n        text-align: center;\n        position: absolute;\n        margin-left: -20px;\n        margin-top: -34px;\n        font-size: 50px;\n        height: 68px;\n        width: 40px;\n        left: 50%;\n        top: 50%; }\n  :host(.post-item) .post-image-link:hover .image-wrapper {\n      opacity: 1; }\n  :host(.post-item) .post-meta {\n    padding: 10px;\n    width: 100%; }\n  :host(.post-item) .post-meta .category {\n      font-size: 13px;\n      color: #7e7e7e;\n      margin: 5px 0; }\n  :host(.post-item) .post-meta .category a {\n        -webkit-transition: 0.2s all;\n        transition: 0.2s all;\n        text-transform: uppercase;\n        cursor: pointer;\n        color: black; }\n  :host(.post-item) .post-meta .category a:hover {\n          color: #7e7e7e; }\n  :host(.post-item) .post-meta .post-title {\n      font-weight: bold;\n      font-size: 18px;\n      cursor: pointer;\n      display: block;\n      margin: 10px 0; }\n  :host(.post-item) .post-meta .post-author {\n      padding-left: 48px;\n      position: relative;\n      display: block; }\n  :host(.post-item) .post-meta .post-author img {\n        border-radius: 50%;\n        position: absolute;\n        cursor: pointer;\n        height: 40px;\n        width: 40px;\n        left: 3px;\n        top: 4px; }\n  :host(.post-item) .post-meta .post-author .info {\n        line-height: 1.4;\n        padding: 5px 0; }\n  :host(.post-item) .post-meta .post-author .info .author-name {\n          font-size: 12px;\n          display: block;\n          width: 100%; }\n  :host(.post-item) .post-meta .post-author .info .post-date {\n          font-size: 12px;\n          color: #515151; }\n"

/***/ }),

/***/ "./src/app/main/post/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'post',
            template: __webpack_require__("./src/app/main/post/post/post.component.html"),
            styles: [__webpack_require__("./src/app/main/post/post/post.component.scss")],
            host: { '[class.post-item]': 'true' }
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/main/user/create-post/create-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-wrapper\">\n  <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" novalidate>\n    <div class=\"top-nav\">\n      <button class=\"btn btn-cancel\" [routerLink]=\"['/']\">Cancel</button>\n      <button class=\"btn btn-publish\" type=\"submit\" [disabled]=\"f.invalid || freeze\">Publish</button>\n    </div>\n    <div class=\"post-image\">\n      <img class=\"tmp-image\" *ngIf=\"model.image\" [src]=\"tmpImage\">\n      <label for=\"image\" [class.hide]=\"model.image\">\n        <input type=\"file\" id=\"image\" name=\"post-image\" (change)=\"updatePostImage($event)\" />\n        <i class=\"icon ion-camera\"></i>\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" [(ngModel)]=\"model.title\" name=\"title\" class=\"form-control title\" required placeholder=\"Title\" #title=\"ngModel\" [disabled]=\"freeze\" />\n    </div>\n    <div class=\"form-group\">\n      <textarea [froalaEditor]=\"{placeholderText: 'Post content'}\" [(froalaModel)]=\"model.body\" required></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"draft\">\n        <input id=\"draft\" type=\"checkbox\" [(ngModel)]=\"model.draft\" name=\"draft\" class=\"form-control\" #draft=\"ngModel\" [disabled]=\"freeze\">Draft?</label>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/main/user/create-post/create-post.component.scss":
/***/ (function(module, exports) {

module.exports = ".editor-wrapper {\n  padding: 0 90px; }\n  .editor-wrapper .top-nav {\n    text-align: right;\n    width: 100%; }\n  .editor-wrapper .top-nav .btn {\n      background-color: white;\n      border: 1px solid #000;\n      padding: 10px 20px;\n      font-weight: bold;\n      cursor: pointer;\n      color: black; }\n  .editor-wrapper .top-nav .btn.btn-publish {\n        background-color: #000;\n        color: white; }\n  .editor-wrapper .top-nav .btn.btn-publish:disabled {\n          cursor: not-allowed;\n          opacity: 0.6; }\n  .editor-wrapper .post-image {\n    background-color: white;\n    position: relative;\n    margin-top: 30px;\n    overflow: hidden;\n    height: 300px;\n    width: 100%;\n    z-index: 1;\n    right: 0;\n    top: 0; }\n  .editor-wrapper .post-image .tmp-image {\n      background-color: white;\n      position: relative;\n      overflow: hidden;\n      display: block;\n      margin: auto;\n      height: 100%;\n      z-index: 2;\n      left: 0;\n      top: 0; }\n  .editor-wrapper .post-image label {\n      -webkit-transition: 0.3s all;\n      transition: 0.3s all;\n      background-color: rgba(0, 0, 0, 0.6);\n      text-align: center;\n      position: absolute;\n      cursor: pointer;\n      display: block;\n      height: 100%;\n      width: 100%;\n      opacity: 1;\n      z-index: 4;\n      left: 0;\n      top: 0; }\n  .editor-wrapper .post-image label input {\n        display: none; }\n  .editor-wrapper .post-image label .icon {\n        color: rgba(255, 255, 255, 0.8);\n        text-align: center;\n        line-height: 300px;\n        font-size: 48px; }\n  .editor-wrapper .post-image label.hide {\n        opacity: 0; }\n  .editor-wrapper .post-image label:hover {\n        opacity: 1; }\n  .editor-wrapper .form-group {\n    margin: 30px 0;\n    width: 100%; }\n  .editor-wrapper .form-group .title {\n      background-color: white;\n      border-radius: 3px;\n      padding: 10px 15px;\n      font-weight: bold;\n      font-size: 24px;\n      outline: none;\n      border: none;\n      width: 100%;\n      border-top: 5px solid black; }\n"

/***/ }),

/***/ "./src/app/main/user/create-post/create-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_progressbar_core__ = __webpack_require__("./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aws_sdk_global__ = __webpack_require__("./node_modules/aws-sdk/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aws_sdk_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aws_sdk_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aws_sdk_clients_s3__ = __webpack_require__("./node_modules/aws-sdk/clients/s3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aws_sdk_clients_s3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_aws_sdk_clients_s3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent(dataService, progress, toastr, router) {
        this.dataService = dataService;
        this.progress = progress;
        this.toastr = toastr;
        this.router = router;
        this.model = {
            title: '',
            body: '',
            image: '',
            draft: false
        };
        this.freeze = false;
    }
    CreatePostComponent.prototype.ngOnInit = function () {
    };
    CreatePostComponent.prototype.updatePostImage = function (evt) {
        var _this = this;
        if (evt.target.files && evt.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (evt) {
                _this.tmpImage = evt.target.result;
            };
            this.currentImage = evt.target.files[0];
            this.model['image'] = this.currentImage;
            reader.readAsDataURL(evt.target.files[0]);
        }
    };
    CreatePostComponent.prototype.onSubmit = function () {
        var _this = this;
        this.progress.start();
        this.freeze = true;
        var AWSService = __WEBPACK_IMPORTED_MODULE_4_aws_sdk_global__;
        var region = 'us-east-1';
        var bucketName = 'online-publication';
        var accessKeyId = 'AKIAIX5R6JCUZ2FSGL3A';
        var secretAccessKey = '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';
        var folderName = 'post-images/';
        var bucket = new __WEBPACK_IMPORTED_MODULE_5_aws_sdk_clients_s3__({
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            region: region
        });
        var params = {
            Bucket: bucketName,
            Key: folderName + this.currentImage.name,
            Body: this.currentImage,
            ACL: 'public-read',
            ContentType: this.currentImage.type
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                _this.toastr.error(err.error.message);
                _this.freeze = false;
                _this.progress.complete();
            }
            _this.model['image'] = data.Location;
            _this.dataService.createPost(_this.model).subscribe(function (data) {
                _this.toastr.success('Post successfully created!');
            }, function (err) {
                _this.toastr.error(err.error.message);
                _this.freeze = false;
                _this.progress.complete();
            }, function () {
                _this.freeze = false;
                _this.router.navigate(['/']);
                _this.progress.complete();
            });
        });
    };
    CreatePostComponent.prototype.uploadToS3 = function (type, file) {
        var AWSService = __WEBPACK_IMPORTED_MODULE_4_aws_sdk_global__;
        var region = 'us-east-1';
        var bucketName = 'online-publication';
        var accessKeyId = 'AKIAIX5R6JCUZ2FSGL3A';
        var secretAccessKey = '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';
        var folderName = '';
        if (type == 'post') {
            folderName = 'post-images/';
        }
        else if (type == 'user') {
            folderName = 'profile-images/';
        }
        var bucket = new __WEBPACK_IMPORTED_MODULE_5_aws_sdk_clients_s3__({
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            region: region
        });
        var params = {
            Bucket: bucketName,
            Key: folderName + file.name,
            Body: file,
            ACL: 'public-read',
            ContentType: file.type
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            return data;
        });
    };
    CreatePostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'create-post',
            template: __webpack_require__("./src/app/main/user/create-post/create-post.component.html"),
            styles: [__webpack_require__("./src/app/main/user/create-post/create-post.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__ngx_progressbar_core__["a" /* NgProgress */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], CreatePostComponent);
    return CreatePostComponent;
}());



/***/ }),

/***/ "./src/app/main/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/user/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/main/user/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/main/user/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-wrapper\">\n  <div *ngIf=\"user\" class=\"info\">\n    <div class=\"name\">\n      <input type=\"text\" name=\"fullname\" [(ngModel)]=\"fullname\" [placeholder]=\"mode == 'edit' ? 'Fullname seperated by space' : ''\" [disabled]=\"mode != 'edit'\" />\n    </div>\n    <div class=\"bio\">\n      <textarea name=\"bio\" [(ngModel)]=\"user.bio\" [placeholder]=\"mode == 'edit' ? 'Enter your bio here' : ''\" [disabled]=\"mode != 'edit'\"></textarea>\n    </div>\n    <div class=\"follower-info\">\n      <span>\n        <strong>{{ user.following.length }}</strong> Following\n      </span>\n      <span>\n        <strong>{{ user.followers.length }}</strong> Followers\n      </span>\n    </div>\n    <div class=\"profile-picture\" [style.backgroundImage]=\"'url(' + user.profile_picture + ')'\">\n      <img *ngIf=\"tmpProfile && myself\" [src]=\"tmpProfile\" alt=\"New profile image\">\n      <label for=\"picture\" *ngIf=\"myself\">\n        <input type=\"file\" id=\"picture\" [(ngModel)]=\"profilePicture\" name=\"profile-picture\" (change)=\"updateProfilePicture($event)\" />\n        <i class=\"icon ion-camera\"></i>\n      </label>\n    </div>\n  </div>\n  <div class=\"actions\">\n    <button *ngIf=\"mode == 'view' && myself\" class=\"btn btn-edit\" (click)=\"mode = 'edit'\">Edit</button>\n    <button *ngIf=\"false\" class=\"btn btn-follow\">Follow</button>\n    <button *ngIf=\"mode == 'edit' && myself\" class=\"btn btn-cancel\" (click)=\"mode = 'view'\">Cancel</button>\n    <button *ngIf=\"mode == 'edit' && myself\" class=\"btn btn-update\" (click)=\"updateProfile();mode = 'view'\">Update</button>\n    <button *ngIf=\"!myself\" class=\"btn btn-{{ following ? 'un' : '' }}follow\" (click)=\"follow(user._id)\">Follow{{ following ? 'ing' : '' }}</button>\n  </div>\n  <div class=\"user-data\">\n    <div class=\"tabs\">\n      <div class=\"tab\" [class.active]=\"tab == 'posts'\" (click)=\"tab = 'posts'\">Posts</div>\n      <div class=\"tab\" [class.active]=\"tab == 'comments'\" (click)=\"tab = 'comments'\">Comments</div>\n    </div>\n    <div class=\"content-container\">\n      <div *ngIf=\"tab == 'posts'\" id=\"posts\">\n        <div class=\"posts\" *ngIf=\"posts && user\">\n          <div *ngFor=\"let post of posts\" class=\"post\">\n            <a class=\"post-title\" [routerLink]=\"['/@' + user.username + '/' + (post.title + '-' + post._id | slugify)]\">{{ post.title }}</a>\n            <div class=\"post-image\" [style.backgroundImage]=\"'url(' + post.image + ')'\"></div>\n            <div class=\"post-meta\">\n              <div class=\"votes\">\n                <i class=\"icon ion-android-favorite\"></i> {{ post.upVotes.length - post.downVotes.length }}\n              </div>\n              <div class=\"comments\">\n                <i class=\"icon ion-chatbubbles\"></i> {{ post.comments.length }}\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"retrieve-more\">Load more</div>\n      </div>\n      <div *ngIf=\"tab == 'comments'\" id=\"comments\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/user/user.component.scss":
/***/ (function(module, exports) {

module.exports = ".profile-wrapper {\n  margin: auto;\n  width: 600px; }\n  .profile-wrapper .info {\n    padding-bottom: 21px;\n    padding-right: 180px;\n    margin-bottom: 10px;\n    position: relative;\n    min-height: 156px; }\n  .profile-wrapper .info .profile-picture {\n      background-image: url(\"/assets/profile-placeholder.jpg\");\n      background-color: white;\n      background-size: 100%;\n      border-radius: 50%;\n      position: absolute;\n      overflow: hidden;\n      height: 156px;\n      width: 156px;\n      z-index: 1;\n      right: 0;\n      top: 0; }\n  .profile-wrapper .info .profile-picture img {\n        background-color: white;\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        z-index: 3;\n        left: 0;\n        top: 0; }\n  .profile-wrapper .info .profile-picture label {\n        -webkit-transition: 0.3s all;\n        transition: 0.3s all;\n        background-color: rgba(0, 0, 0, 0.6);\n        text-align: center;\n        position: relative;\n        cursor: pointer;\n        display: block;\n        height: 100%;\n        width: 100%;\n        opacity: 0;\n        z-index: 4; }\n  .profile-wrapper .info .profile-picture label input {\n          display: none; }\n  .profile-wrapper .info .profile-picture label .icon {\n          color: rgba(255, 255, 255, 0.8);\n          text-align: center;\n          line-height: 156px;\n          font-size: 48px; }\n  .profile-wrapper .info .profile-picture:hover label {\n        opacity: 1; }\n  .profile-wrapper .info .name input {\n      background-color: rgba(0, 0, 0, 0.1);\n      color: rgba(0, 0, 0, 0.84);\n      font-weight: bold;\n      font-size: 31px;\n      padding: 0 10px;\n      display: block;\n      outline: none;\n      border: none;\n      width: 100%; }\n  .profile-wrapper .info .name input:disabled {\n        background-color: transparent; }\n  .profile-wrapper .info .bio {\n      margin: 10px 0; }\n  .profile-wrapper .info .bio textarea {\n        background-color: rgba(0, 0, 0, 0.1);\n        color: rgba(0, 0, 0, 0.76);\n        font-size: 19px;\n        display: block;\n        padding: 10px;\n        outline: none;\n        height: 100px;\n        resize: none;\n        border: none;\n        width: 100%; }\n  .profile-wrapper .info .bio textarea:disabled {\n          background-color: transparent; }\n  .profile-wrapper .info .follower-info {\n      color: rgba(0, 0, 0, 0.68);\n      position: absolute;\n      font-size: 14px;\n      bottom: 0;\n      left: 0; }\n  .profile-wrapper .info .follower-info span {\n        margin: 0 5px; }\n  .profile-wrapper .actions .btn {\n    border: 1px solid rgba(0, 0, 0, 0.15);\n    background-color: transparent;\n    color: rgba(0, 0, 0, 0.68);\n    border-radius: 3px;\n    padding: 7px 20px;\n    font-size: 15px;\n    cursor: pointer;\n    outline: none;\n    -webkit-transition: .3s all;\n    transition: .3s all; }\n  .profile-wrapper .actions .btn.btn-update, .profile-wrapper .actions .btn.btn-follow {\n      border-color: rgba(26, 188, 156, 0.3);\n      color: #1abc9c; }\n  .profile-wrapper .actions .btn.btn-update:hover, .profile-wrapper .actions .btn.btn-follow:hover {\n        border-color: #1abc9c;\n        color: #1abc9c; }\n  .profile-wrapper .actions .btn.btn-unfollow {\n      background-color: rgba(26, 188, 156, 0.8);\n      border-color: rgba(26, 188, 156, 0.8);\n      color: white; }\n  .profile-wrapper .actions .btn.btn-unfollow:hover {\n        background-color: #1abc9c;\n        border-color: #1abc9c;\n        color: white; }\n  .profile-wrapper .actions .btn:hover {\n      border-color: rgba(0, 0, 0, 0.54); }\n  .profile-wrapper .user-data {\n    margin-top: 30px;\n    width: 100%; }\n  .profile-wrapper .user-data .tabs {\n      overflow: hidden; }\n  .profile-wrapper .user-data .tabs .tab {\n        color: rgba(0, 0, 0, 0.54);\n        padding: 10px 5px;\n        cursor: pointer;\n        font-size: 14px;\n        margin: 0 5px;\n        float: left;\n        -webkit-transition: .3s all;\n        transition: .3s all; }\n  .profile-wrapper .user-data .tabs .tab.active {\n          border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n  .profile-wrapper .user-data .tabs .tab:hover {\n          color: rgba(0, 0, 0, 0.78); }\n  .profile-wrapper .user-data .content-container {\n      padding: 20px 0; }\n  .profile-wrapper .user-data .content-container .posts {\n        border: 1px solid rgba(0, 0, 0, 0.15);\n        background-color: white;\n        border-radius: 3px; }\n  .profile-wrapper .user-data .content-container .posts .post {\n          border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n          position: relative;\n          padding: 15px;\n          height: 95px;\n          padding-right: 95px; }\n  .profile-wrapper .user-data .content-container .posts .post:last-child {\n            border: none; }\n  .profile-wrapper .user-data .content-container .posts .post .post-title {\n            color: rgba(0, 0, 0, 0.78);\n            margin-bottom: 10px;\n            font-weight: bold;\n            font-size: 19px;\n            cursor: pointer;\n            display: block;\n            -webkit-transition: .3s all;\n            transition: .3s all; }\n  .profile-wrapper .user-data .content-container .posts .post .post-title:hover {\n              color: #1abc9c; }\n  .profile-wrapper .user-data .content-container .posts .post .post-meta {\n            color: rgba(0, 0, 0, 0.54);\n            overflow: hidden;\n            font-size: 14px; }\n  .profile-wrapper .user-data .content-container .posts .post .post-meta div {\n              margin-right: 10px;\n              float: left; }\n  .profile-wrapper .user-data .content-container .posts .post .post-meta div:last-child {\n                margin: 0; }\n  .profile-wrapper .user-data .content-container .posts .post .post-image {\n            background-position: center;\n            background-size: auto;\n            position: absolute;\n            height: 65px;\n            width: 65px;\n            right: 15px;\n            top: 15px; }\n  .profile-wrapper .user-data .content-container .retrieve-more {\n        border: 1px solid rgba(0, 0, 0, 0.15);\n        background-color: white;\n        border-radius: 3px;\n        text-align: center;\n        font-size: 13px;\n        cursor: pointer;\n        color: #1abc9c;\n        padding: 10px;\n        margin: auto;\n        width: 140px;\n        margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/main/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_progressbar_core__ = __webpack_require__("./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(dataService, progress, toastr, router, route) {
        this.dataService = dataService;
        this.progress = progress;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.tab = 'posts';
        this.mode = 'view';
        this.myself = false;
        this.following = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.progress.start();
        this.paramSubscription = this.route.params.subscribe(function (params) {
            var username = params['username'].split("@")[1];
            _this.userSubscription = _this.dataService.getUserByUsername(username).subscribe(function (response) {
                _this.user = response['data'];
                _this.fullname = _this.user.firstname + " " + _this.user.lastname;
                _this.bio = _this.user.bio;
                var sessionUser = JSON.parse(sessionStorage.getItem('user'));
                if (sessionUser._id === _this.user._id) {
                    _this.myself = true;
                }
                else {
                    if (_this.user.followers.indexOf(sessionUser._id) > -1) {
                        _this.following = true;
                    }
                }
            }, function (err) {
                _this.toastr.error(err.error.message);
                _this.progress.complete();
            }, function () {
                _this.progress.complete();
            });
            _this.postsSubscription = _this.dataService.getPostsByUser(username).subscribe(function (response) {
                _this.posts = response['data'];
            }, function (err) {
                _this.toastr.error(err.error.message);
                _this.progress.complete();
            }, function () {
                _this.progress.complete();
            });
        });
    };
    UserComponent.prototype.updateProfilePicture = function (evt) {
        var _this = this;
        if (evt.target.files && evt.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (evt) {
                _this.tmpProfile = evt.target.result;
            };
            reader.readAsDataURL(evt.target.files[0]);
        }
    };
    UserComponent.prototype.follow = function (userId) {
        var _this = this;
        this.followSubscription = this.dataService.followUser({ following_user_id: userId }).subscribe(function (response) {
            var sessionUser = JSON.parse(sessionStorage.getItem('user'));
            if (response['data'] === 'follow') {
                sessionUser.following.push(userId);
                _this.user.followers.push(userId);
                _this.following = true;
            }
            else {
                sessionUser.following = sessionUser.following.filter(function (id) { return id != userId; });
                _this.user.followers = _this.user.followers.filter(function (id) { return id != userId; });
                _this.following = false;
            }
            sessionStorage.setItem('user', JSON.stringify(sessionUser));
            _this.toastr.success(response.message);
        }, function (err) {
            _this.toastr.error(err.error.message);
            _this.progress.complete();
        }, function () {
            _this.progress.complete();
        });
    };
    UserComponent.prototype.updateProfile = function () {
        var _this = this;
        this.progress.start();
        var firstname = this.fullname.split(" ")[0];
        var lastname = this.fullname.split(" ")[1];
        this.updateProfileSubscription = this.dataService.updateProfile({ firstname: firstname, lastname: lastname, bio: this.user.bio }).subscribe(function (response) {
            _this.bio = _this.user.bio;
            var sessionUser = JSON.parse(sessionStorage.getItem('user'));
            sessionUser.bio = _this.bio;
            sessionUser.firstname = firstname;
            sessionUser.lastname = lastname;
            sessionStorage.setItem('user', JSON.stringify(sessionUser));
            _this.toastr.success(response.message);
        }, function (err) {
            _this.toastr.error(err.error.message);
            _this.progress.complete();
        }, function () {
            _this.progress.complete();
        });
    };
    UserComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubscription) {
            this.paramSubscription.unsubscribe();
        }
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
        if (this.postsSubscription) {
            this.postsSubscription.unsubscribe();
        }
        if (this.followSubscription) {
            this.followSubscription.unsubscribe();
        }
        if (this.updateProfileSubscription) {
            this.updateProfileSubscription.unsubscribe();
        }
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user',
            template: __webpack_require__("./src/app/main/user/user.component.html"),
            styles: [__webpack_require__("./src/app/main/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__ngx_progressbar_core__["a" /* NgProgress */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"container\">\n    <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" novalidate>\n      <div class=\"profile-image\">\n        <img *ngIf=\"model.profilePicture\" [src]=\"tmpProfile\" alt=\"Profile image\">\n        <label for=\"profile-picture\">\n          <input type=\"file\" id=\"profile-picture\" [(ngModel)]=\"model.profilePicture\" name=\"profile-picture\" class=\"form-control\" #profilePicture=\"ngModel\" (change)=\"updateImage($event)\" [disabled]=\"freeze\" />\n          <i class=\"icon ion-camera\"></i>\n        </label>\n      </div>\n      <div class=\"form-group\" [class.has-danger]=\"firstname.invalid && (firstname.dirty || firstname.touched)\">\n        <input type=\"text\" [(ngModel)]=\"model.firstname\" name=\"firstname\" class=\"form-control\" required placeholder=\"Firstname\" #firstname=\"ngModel\" [disabled]=\"freeze\" />\n      </div>\n      <div class=\"form-group\" [class.has-danger]=\"lastname.invalid && (lastname.dirty || lastname.touched)\">\n        <input type=\"text\" [(ngModel)]=\"model.lastname\" name=\"lastname\" class=\"form-control\" required placeholder=\"Fastname\" #lastname=\"ngModel\" [disabled]=\"freeze\" />\n      </div>\n      <div class=\"form-group\" [class.has-danger]=\"username.invalid && (username.dirty || username.touched)\">\n        <input type=\"text\" [(ngModel)]=\"model.username\" name=\"username\" class=\"form-control\" required placeholder=\"Username\" #username=\"ngModel\" [disabled]=\"freeze\" />\n      </div>\n      <div class=\"form-group\" [class.has-danger]=\"email.invalid && (email.dirty || email.touched)\">\n        <input type=\"email\" [(ngModel)]=\"model.email\" name=\"email\" class=\"form-control\" required placeholder=\"Email address\" #email=\"ngModel\" [disabled]=\"freeze\" />\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': password.invalid && (password.dirty || password.touched),\n        'has-success': password.valid && (password.dirty || password.touched)\n      }\">\n        <input type=\"password\" [(ngModel)]=\"model.password\" name=\"password\" class=\"form-control\" required placeholder=\"Password\" #password=\"ngModel\" [disabled]=\"freeze\" (input)=\"checkPassword()\" />\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': passwordRepeat.invalid && (passwordRepeat.dirty || passwordRepeat.touched),\n        'has-success': passwordRepeat.valid && (passwordRepeat.dirty || passwordRepeat.touched)\n      }\">\n        <input type=\"password\" [(ngModel)]=\"password_repeat\" name=\"password-repeat\" class=\"form-control\" required placeholder=\"Repeat your password\" #passwordRepeat=\"ngModel\" [disabled]=\"freeze\" (input)=\"checkPassword()\" />\n        <p *ngIf=\"passwordError\">Passwords doesn't match</p>\n      </div>\n      <button type=\"submit\" class=\"form-submit\" [disabled]=\"f.invalid || freeze\">Register</button>\n    </form>\n    <div class=\"register\">\n      <span>Already have an account?</span>\n      <button [routerLink]=\"['/login']\" class=\"sign-up\" [disabled]=\"freeze\">Sign In</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: #f7f6f2;\n  overflow-x: hidden;\n  position: relative;\n  height: 100%;\n  width: 100%; }\n  .wrapper .container {\n    margin: 40px auto;\n    text-align: center;\n    overflow: hidden;\n    color: #bbb7ae;\n    width: 340px; }\n  .wrapper .container form {\n      text-align: center;\n      padding: 20px; }\n  .wrapper .container form .profile-image {\n        background-image: url(\"/assets/profile-placeholder.jpg\");\n        background-size: 100%;\n        border-radius: 50%;\n        position: relative;\n        margin: 10px auto;\n        overflow: hidden;\n        height: 100px;\n        width: 100px;\n        z-index: 1; }\n  .wrapper .container form .profile-image img {\n          background-color: white;\n          position: absolute;\n          height: 100%;\n          width: 100%;\n          z-index: 3;\n          left: 0;\n          top: 0; }\n  .wrapper .container form .profile-image label {\n          -webkit-transition: 0.3s all;\n          transition: 0.3s all;\n          background-color: rgba(0, 0, 0, 0.6);\n          position: relative;\n          cursor: pointer;\n          display: block;\n          height: 100%;\n          width: 100%;\n          opacity: 0;\n          z-index: 4; }\n  .wrapper .container form .profile-image label input {\n            display: none; }\n  .wrapper .container form .profile-image label .icon {\n            color: rgba(255, 255, 255, 0.8);\n            text-align: center;\n            line-height: 100px;\n            font-size: 48px; }\n  .wrapper .container form .profile-image:hover label {\n          opacity: 1; }\n  .wrapper .container form .form-group {\n        margin: 15px 0; }\n  .wrapper .container form .form-group:first-child {\n          margin-top: 0; }\n  .wrapper .container form .form-group.has-danger input {\n          border: 1px solid #e74c3c; }\n  .wrapper .container form .form-group.has-danger input::-webkit-input-placeholder {\n            color: #e74c3c; }\n  .wrapper .container form .form-group.has-danger input::-moz-placeholder {\n            color: #e74c3c; }\n  .wrapper .container form .form-group.has-danger input:-ms-input-placeholder {\n            color: #e74c3c; }\n  .wrapper .container form .form-group.has-danger input:-moz-placeholder {\n            color: #e74c3c; }\n  .wrapper .container form .form-group input {\n          background-color: rgba(0, 0, 0, 0.1);\n          border: 1px solid rgba(0, 0, 0, 0.1);\n          border-radius: 3px;\n          font-size: 16px;\n          color: #bbb7ae;\n          display: block;\n          outline: none;\n          padding: 13px;\n          width: 100%; }\n  .wrapper .container form .form-group input::-webkit-input-placeholder {\n            color: #bbb7ae; }\n  .wrapper .container form .form-group input::-moz-placeholder {\n            color: #bbb7ae; }\n  .wrapper .container form .form-group input:-ms-input-placeholder {\n            color: #bbb7ae; }\n  .wrapper .container form .form-group input:-moz-placeholder {\n            color: #bbb7ae; }\n  .wrapper .container form .form-group input:disabled {\n            cursor: not-allowed;\n            opacity: 0.6; }\n  .wrapper .container form .form-submit {\n        -webkit-transition: 0.5s all;\n        transition: 0.5s all;\n        background-color: #1abc9c;\n        border-radius: 3px;\n        text-align: center;\n        padding: 12px 20px;\n        font-size: 18px;\n        cursor: pointer;\n        border: none;\n        color: white;\n        width: 100%; }\n  .wrapper .container form .form-submit:disabled {\n          cursor: not-allowed;\n          opacity: 0.8; }\n  .wrapper .container form .form-submit:hover:not(:disabled) {\n          background-color: #16a085; }\n  .wrapper .container .register {\n      margin: 10px 0; }\n  .wrapper .container .register span {\n        font-weight: bold;\n        font-size: 14px;\n        margin-right: 10px; }\n  .wrapper .container .register .sign-up {\n        background-color: transparent;\n        border: 1px solid #1abc9c;\n        border-radius: 3px;\n        font-weight: bold;\n        padding: 5px 15px;\n        cursor: pointer;\n        font-size: 14px;\n        color: #1abc9c;\n        -webkit-transition: 0.3s all;\n        transition: 0.3s all; }\n  .wrapper .container .register .sign-up:hover {\n          background-color: #1abc9c;\n          color: white; }\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_progressbar_core__ = __webpack_require__("./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, progress, toastr) {
        this.authService = authService;
        this.router = router;
        this.progress = progress;
        this.toastr = toastr;
        this.model = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        };
        this.passwordError = false;
        this.freeze = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.freeze = false;
    };
    RegisterComponent.prototype.updateImage = function (evt) {
        var _this = this;
        if (evt.target.files && evt.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (evt) {
                _this.tmpProfile = evt.target.result;
            };
            reader.readAsDataURL(evt.target.files[0]);
        }
    };
    RegisterComponent.prototype.checkPassword = function () {
        if (this.model.password !== this.password_repeat) {
            this.passwordError = true;
        }
        else {
            this.passwordError = false;
        }
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.progress.start();
        this.freeze = true;
        if (this.model.password !== this.password_repeat) {
            this.toastr.error('Password doesn\'t match');
            this.progress.complete();
            return false;
        }
        this.authService.register(this.model).subscribe(function (response) {
            localStorage.setItem('token', response.data);
            _this.freeze = false;
        }, function (err) {
            _this.toastr.error(err.error.message);
            _this.freeze = false;
            _this.progress.complete();
        }, function () {
            _this.freeze = false;
            _this.router.navigate(['/']);
            _this.progress.complete();
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__ngx_progressbar_core__["a" /* NgProgress */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
    }
    AuthService.prototype.login = function (payload) {
        return this.http.post(this.BASE_URL + "/auth/login", payload, { headers: this.headers });
    };
    AuthService.prototype.register = function (payload) {
        return this.http.post(this.BASE_URL + "/auth/register", payload, { headers: this.headers });
    };
    AuthService.prototype.checkAuth = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.headers = this.headers.set('x-token', token);
            return this.http.get(this.BASE_URL + "/auth/check-auth", { headers: this.headers });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(false);
        }
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        location.reload();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
    }
    DataService.prototype.getUser = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.headers = this.headers.set('x-token', localStorage.getItem('token'));
        }
        return this.http.get(this.BASE_URL + "/user", { headers: this.headers });
    };
    DataService.prototype.createPost = function (payload) {
        var token = localStorage.getItem('token');
        if (token) {
            this.headers = this.headers.set('x-token', localStorage.getItem('token'));
        }
        return this.http.post(this.BASE_URL + "/posts", payload, { headers: this.headers });
    };
    DataService.prototype.getHomePost = function () {
        return this.http.get(this.BASE_URL + "/posts", { headers: this.headers });
    };
    DataService.prototype.getPostDetail = function (post_id) {
        return this.http.get(this.BASE_URL + "/posts/" + post_id, { headers: this.headers });
    };
    DataService.prototype.deleteComment = function (comment_id, post_id) {
        var token = localStorage.getItem('token');
        if (token) {
            this.headers = this.headers.set('x-token', localStorage.getItem('token'));
        }
        console.log(this.BASE_URL + "/comments/" + comment_id + "/post/" + post_id);
        return this.http.delete(this.BASE_URL + "/comments/" + comment_id + "/post/" + post_id, { headers: this.headers });
    };
    DataService.prototype.updateComment = function (comment_id, post_id, updatedComment) {
        var token = localStorage.getItem('token');
        if (token) {
            this.headers = this.headers.set('x-token', localStorage.getItem('token'));
        }
        console.log(this.BASE_URL + "/comments/" + comment_id + "/post/" + post_id);
        return this.http.put(this.BASE_URL + "/comments/" + comment_id + "/post/" + post_id, updatedComment, { headers: this.headers });
    };
    DataService.prototype.createComment = function (post_id, newComment) {
        var token = localStorage.getItem('token');
        if (token) {
            this.headers = this.headers.set('x-token', localStorage.getItem('token'));
        }
        return this.http.post(this.BASE_URL + "/comments/post/" + post_id, newComment, { headers: this.headers });
    };
    DataService.prototype.getPostsByUser = function (username) {
        return this.http.get(this.BASE_URL + "/posts/by-user/" + username, { headers: this.headers });
    };
    DataService.prototype.getUserByUsername = function (username) {
        return this.http.get(this.BASE_URL + "/user/" + username, { headers: this.headers });
    };
    DataService.prototype.followUser = function (payload) {
        var token = localStorage.getItem('token');
        if (token) {
            this.headers = this.headers.set('x-token', localStorage.getItem('token'));
        }
        return this.http.post(this.BASE_URL + "/user/follow", payload, { headers: this.headers });
    };
    DataService.prototype.updateProfile = function (payload) {
        var token = localStorage.getItem('token');
        if (token) {
            this.headers = this.headers.set('x-token', localStorage.getItem('token'));
        }
        return this.http.put(this.BASE_URL + "/user", payload, { headers: this.headers });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map