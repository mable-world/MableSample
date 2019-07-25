(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/platform-browser'), require('@angular/common/http'), require('@angular/common'), require('@angular/forms'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('mable-sample', ['exports', '@angular/core', '@angular/router', '@angular/platform-browser', '@angular/common/http', '@angular/common', '@angular/forms', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global['mable-sample'] = {}, global.ng.core, global.ng.router, global.ng.platformBrowser, global.ng.common.http, global.ng.common, global.ng.forms, global.rxjs, global.rxjs.operators));
}(this, function (exports, core, router, platformBrowser, http, common, forms, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var MableSampleService = /** @class */ (function () {
        function MableSampleService() {
        }
        MableSampleService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MableSampleService_Factory() { return new MableSampleService(); }, token: MableSampleService, providedIn: "root" });
        MableSampleService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [])
        ], MableSampleService);
        return MableSampleService;
    }());

    var MableSampleComponent = /** @class */ (function () {
        function MableSampleComponent() {
            this.pageTitle = ' Neha Product Mangement';
        }
        MableSampleComponent.prototype.ngOnInit = function () {
        };
        MableSampleComponent = __decorate([
            core.Component({
                selector: 'lib-MableSample',
                template: "<!----<ng-content></ng-content>-->\r\n    <nav class='navbar navbar-expand navbar-light bg-light'>\r\n    <a class='navbar-brand'>{{pageTitle}}</a>\r\n    <ul class='nav nav-pills'>\r\n      <li><a class='nav-link' [routerLink]=\"['/welcome']\">Home</a></li>\r\n      <li><a class='nav-link' [routerLink]=\"['/products']\">Product List</a></li>\r\n    </ul>\r\n  </nav>\r\n  <div class='container'>\r\n    <router-outlet></router-outlet>\r\n  </div>"
            }),
            __metadata("design:paramtypes", [])
        ], MableSampleComponent);
        return MableSampleComponent;
    }());

    var routes = [];
    var AppRoutingModule = /** @class */ (function () {
        function AppRoutingModule() {
        }
        AppRoutingModule = __decorate([
            core.NgModule({
                imports: [router.RouterModule.forRoot(routes)],
                exports: [router.RouterModule]
            })
        ], AppRoutingModule);
        return AppRoutingModule;
    }());

    var WelcomeComponent = /** @class */ (function () {
        function WelcomeComponent() {
            this.pageTitle = 'Team';
        }
        WelcomeComponent = __decorate([
            core.Component({
                selector: 'welcome-root',
                template: "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n      {{pageTitle}}\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"text-center\">\r\n               <img src=\"./assets/images/team.jpg\"\r\n               class=\"img-responsive center-block\"\r\n               style=\"max-height:300px;padding-bottom:50px\" />\r\n        </div>\r\n  \r\n        <div class=\"text-center\">Developed by:</div>\r\n        <div class=\"text-center\">\r\n          <h3>Neha Gupta</h3>\r\n          <h3>Jayant Waldia</h3>\r\n          <h3>Astha Sharma</h3>\r\n          <h3>Sumit Lohani</h3>\r\n        </div>\r\n  \r\n        <div class=\"text-center\">http://angular.com</div>\r\n      </div>\r\n    </div>\r\n  </div>"
            })
        ], WelcomeComponent);
        return WelcomeComponent;
    }());

    var StarComponent = /** @class */ (function () {
        function StarComponent() {
            this.rating = 0;
            this.starWidth = 0;
            this.ratingClicked = new core.EventEmitter();
        }
        StarComponent.prototype.ngOnChanges = function () {
            this.starWidth = this.rating * 75 / 5;
        };
        StarComponent.prototype.onClick = function () {
            this.ratingClicked.emit("The rating " + this.rating + " was clicked!");
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], StarComponent.prototype, "rating", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], StarComponent.prototype, "ratingClicked", void 0);
        StarComponent = __decorate([
            core.Component({
                selector: 'pm-star',
                template: "\r\n<div class=\"crop\"\r\n     [style.width.px]=\"starWidth\"\r\n     [title]=\"rating\"\r\n     (click)=\"onClick()\">\r\n  <div style=\"width: 75px\">\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n  </div>\r\n</div>",
                styles: [".crop{overflow:hidden}div{cursor:pointer}"]
            })
        ], StarComponent);
        return StarComponent;
    }());

    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    StarComponent
                ],
                exports: [
                    StarComponent,
                    common.CommonModule,
                    forms.FormsModule
                ]
            })
        ], SharedModule);
        return SharedModule;
    }());

    var ProductService = /** @class */ (function () {
        function ProductService(http) {
            this.http = http;
            this.productUrl = './api/products/products.json';
        }
        ProductService.prototype.getProducts = function () {
            return this.http.get(this.productUrl).pipe(operators.tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), operators.catchError(this.handleError));
        };
        ProductService.prototype.getProduct = function (id) {
            return this.getProducts().pipe(operators.map(function (products) { return products.find(function (p) { return p.productId === id; }); }));
        };
        ProductService.prototype.handleError = function (err) {
            var errorMessage = '';
            if (err.error instanceof ErrorEvent) {
                errorMessage = "An error occurred: " + err.error.message;
            }
            else {
                errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
            }
            console.error(errorMessage);
            return rxjs.throwError(errorMessage);
        };
        ProductService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ProductService_Factory() { return new ProductService(core.ɵɵinject(http.HttpClient)); }, token: ProductService, providedIn: "root" });
        ProductService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [http.HttpClient])
        ], ProductService);
        return ProductService;
    }());

    var ProductListComponent = /** @class */ (function () {
        function ProductListComponent(productService) {
            this.productService = productService;
            this.pageTitle = 'Product List';
            this.imageWidth = 50;
            this.imageMargin = 2;
            this.showImage = false;
            this.errorMessage = '';
            this._listFilter = '';
            this.filteredProducts = [];
            this.products = [];
        }
        Object.defineProperty(ProductListComponent.prototype, "listFilter", {
            get: function () {
                return this._listFilter;
            },
            set: function (value) {
                this._listFilter = value;
                this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
            },
            enumerable: true,
            configurable: true
        });
        ProductListComponent.prototype.onRatingClicked = function (message) {
            this.pageTitle = 'Product List: ' + message;
        };
        ProductListComponent.prototype.performFilter = function (filterBy) {
            filterBy = filterBy.toLocaleLowerCase();
            return this.products.filter(function (product) {
                return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
            });
        };
        ProductListComponent.prototype.toggleImage = function () {
            this.showImage = !this.showImage;
        };
        ProductListComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.productService.getProducts().subscribe(function (products) {
                _this.products = products;
                _this.filteredProducts = _this.products;
            }, function (error) { return _this.errorMessage = error; });
        };
        ProductListComponent = __decorate([
            core.Component({
                template: "<div class='card'>\r\n    <div class='card-header'>\r\n      {{pageTitle}}\r\n    </div>\r\n    <div class='card-body'>\r\n      <div class='row'>\r\n        <div class='col-md-2'>Filter by:</div>\r\n        <div class='col-md-4'>\r\n          <input type='text'\r\n                 [(ngModel)]='listFilter' />\r\n        </div>\r\n      </div>\r\n      <div class='row'>\r\n        <div class='col-md-6'>\r\n          <h4>Filtered by: {{listFilter}}</h4>\r\n        </div>\r\n      </div>\r\n      <div class='table-responsive'>\r\n        <table class='table'\r\n               *ngIf='products && products.length'>\r\n          <thead>\r\n            <tr>\r\n              <th>\r\n                <button class='btn btn-primary'\r\n                        (click)='toggleImage()'>\r\n                  {{showImage ? 'Hide' : 'Show'}} Image\r\n                </button>\r\n              </th>\r\n              <th>Product</th>\r\n              <th>Code</th>\r\n              <th>Available</th>\r\n              <th>Price</th>\r\n              <th>5 Star Rating</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor='let product of filteredProducts'>\r\n              <td>\r\n                <img *ngIf='showImage'\r\n                     [src]='product.imageUrl'\r\n                     [title]='product.productName'\r\n                     [style.width.px]='imageWidth'\r\n                     [style.margin.px]='imageMargin'>\r\n              </td>\r\n              <td>\r\n                <a [routerLink]=\"['/products', product.productId]\">\r\n                  {{ product.productName }}\r\n                </a>\r\n              </td>\r\n              <td>{{ product.productCode | lowercase  }}</td>\r\n              <td>{{ product.releaseDate }}</td>\r\n              <td>{{ product.price | currency:'USD':'symbol':'1.2-2' }}</td>\r\n              <td>{{product.starRating}}\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n  \r\n    </div>\r\n  \r\n  </div>",
                styles: ["thead{color:#337ab7}"]
            }),
            __metadata("design:paramtypes", [ProductService])
        ], ProductListComponent);
        return ProductListComponent;
    }());

    var ProductDetailComponent = /** @class */ (function () {
        function ProductDetailComponent(route, router, productService) {
            this.route = route;
            this.router = router;
            this.productService = productService;
            this.pageTitle = 'Product Detail';
            this.errorMessage = '';
        }
        ProductDetailComponent.prototype.ngOnInit = function () {
            var param = this.route.snapshot.paramMap.get('id');
            if (param) {
                var id = +param;
                this.getProduct(id);
            }
        };
        ProductDetailComponent.prototype.getProduct = function (id) {
            var _this = this;
            this.productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
        };
        ProductDetailComponent.prototype.onBack = function () {
            this.router.navigate(['/products']);
        };
        ProductDetailComponent = __decorate([
            core.Component({
                template: "<div class='card'\n     *ngIf='product'>\n  <div class='card-header'>\n    {{pageTitle + ': ' + product.productName}}\n  </div>\n\n  <div class='card-body'>\n    <div class='row'>\n      <div class='col-md-8'>\n        <div class='row'>\n          <div class='col-md-4'>Name:</div>\n          <div class='col-md-8'>{{product.productName}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Code:</div>\n          <div class='col-md-8'>{{product.productCode | lowercase }}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Description:</div>\n          <div class='col-md-8'>{{product.description}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Availability:</div>\n          <div class='col-md-8'>{{product.releaseDate}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Price:</div>\n          <div class='col-md-8'>{{product.price|currency:'USD':'symbol'}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>5 Star Rating:</div>\n          <div class='col-md-8'>{{'product.starRating'}}\n          </div>\n        </div>\n      </div>\n\n      <div class='col-md-4'>\n        <img class='center-block img-responsive'\n             [style.width.px]='200'\n             [style.margin.px]='2'\n             [src]='product.imageUrl'\n             [title]='product.productName'>\n      </div>\n    </div>\n  </div>\n\n  <div class='card-footer'>\n    <button class='btn btn-outline-secondary'\n            (click)='onBack()'\n            style='width:80px'>\n      <i class='fa fa-chevron-left'></i> Back\n    </button>\n  </div>\n</div>",
                styles: [""]
            }),
            __metadata("design:paramtypes", [router.ActivatedRoute,
                router.Router,
                ProductService])
        ], ProductDetailComponent);
        return ProductDetailComponent;
    }());

    var ProductDetailGuard = /** @class */ (function () {
        function ProductDetailGuard(router) {
            this.router = router;
        }
        ProductDetailGuard.prototype.canActivate = function (next, state) {
            var id = +next.url[1].path;
            if (isNaN(id) || id < 1) {
                alert('Invalid product Id');
                this.router.navigate(['/products']);
                return false;
            }
            return true;
        };
        ProductDetailGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ProductDetailGuard_Factory() { return new ProductDetailGuard(core.ɵɵinject(router.Router)); }, token: ProductDetailGuard, providedIn: "root" });
        ProductDetailGuard = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [router.Router])
        ], ProductDetailGuard);
        return ProductDetailGuard;
    }());

    var ProductModule = /** @class */ (function () {
        function ProductModule() {
        }
        ProductModule = __decorate([
            core.NgModule({
                imports: [
                    SharedModule,
                    router.RouterModule.forChild([
                        { path: 'products', component: ProductListComponent },
                        {
                            path: 'products/:id',
                            canActivate: [ProductDetailGuard],
                            component: ProductDetailComponent
                        },
                    ]), forms.FormsModule
                ],
                declarations: [
                    ProductListComponent,
                    ProductDetailComponent
                ],
                exports: [ProductListComponent,
                    ProductDetailComponent, router.RouterModule, forms.FormsModule]
            })
        ], ProductModule);
        return ProductModule;
    }());

    var MableSampleModule = /** @class */ (function () {
        function MableSampleModule() {
        }
        MableSampleModule = __decorate([
            core.NgModule({
                declarations: [MableSampleComponent,
                    WelcomeComponent],
                imports: [platformBrowser.BrowserModule,
                    http.HttpClientModule,
                    router.RouterModule,
                    router.RouterModule.forRoot([
                        { path: 'welcome', component: WelcomeComponent },
                        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                        { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                    ]),
                    ProductModule,
                    AppRoutingModule
                ],
                exports: [MableSampleComponent, ProductModule, WelcomeComponent]
            })
        ], MableSampleModule);
        return MableSampleModule;
    }());

    exports.MableSampleComponent = MableSampleComponent;
    exports.MableSampleModule = MableSampleModule;
    exports.MableSampleService = MableSampleService;
    exports.ProductDetailComponent = ProductDetailComponent;
    exports.ProductDetailGuard = ProductDetailGuard;
    exports.ProductListComponent = ProductListComponent;
    exports.ProductModule = ProductModule;
    exports.ProductService = ProductService;
    exports.WelcomeComponent = WelcomeComponent;
    exports.ɵa = SharedModule;
    exports.ɵb = StarComponent;
    exports.ɵc = AppRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=mable-sample.umd.js.map
