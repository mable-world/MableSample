import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductService } from './product.service';
let ProductListComponent = class ProductListComponent {
    constructor(productService) {
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
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    onRatingClicked(message) {
        this.pageTitle = 'Product List: ' + message;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    toggleImage() {
        this.showImage = !this.showImage;
    }
    ngOnInit() {
        this.productService.getProducts().subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
        }, error => this.errorMessage = error);
    }
};
ProductListComponent = tslib_1.__decorate([
    Component({
        template: "<div class='card'>\r\n    <div class='card-header'>\r\n      {{pageTitle}}\r\n    </div>\r\n    <div class='card-body'>\r\n      <div class='row'>\r\n        <div class='col-md-2'>Filter by:</div>\r\n        <div class='col-md-4'>\r\n          <input type='text'\r\n                 [(ngModel)]='listFilter' />\r\n        </div>\r\n      </div>\r\n      <div class='row'>\r\n        <div class='col-md-6'>\r\n          <h4>Filtered by: {{listFilter}}</h4>\r\n        </div>\r\n      </div>\r\n      <div class='table-responsive'>\r\n        <table class='table'\r\n               *ngIf='products && products.length'>\r\n          <thead>\r\n            <tr>\r\n              <th>\r\n                <button class='btn btn-primary'\r\n                        (click)='toggleImage()'>\r\n                  {{showImage ? 'Hide' : 'Show'}} Image\r\n                </button>\r\n              </th>\r\n              <th>Product</th>\r\n              <th>Code</th>\r\n              <th>Available</th>\r\n              <th>Price</th>\r\n              <th>5 Star Rating</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor='let product of filteredProducts'>\r\n              <td>\r\n                <img *ngIf='showImage'\r\n                     [src]='product.imageUrl'\r\n                     [title]='product.productName'\r\n                     [style.width.px]='imageWidth'\r\n                     [style.margin.px]='imageMargin'>\r\n              </td>\r\n              <td>\r\n                <a [routerLink]=\"['/products', product.productId]\">\r\n                  {{ product.productName }}\r\n                </a>\r\n              </td>\r\n              <td>{{ product.productCode | lowercase  }}</td>\r\n              <td>{{ product.releaseDate }}</td>\r\n              <td>{{ product.price | currency:'USD':'symbol':'1.2-2' }}</td>\r\n              <td>{{product.starRating}}\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n  \r\n    </div>\r\n  \r\n  </div>",
        styles: ["thead{color:#337ab7}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ProductService])
], ProductListComponent);
export { ProductListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hYmxlLXNhbXBsZS8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0cy9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU1uRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQW1CL0IsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBbEJsRCxjQUFTLEdBQUcsY0FBYyxDQUFDO1FBQzNCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQVNqQixxQkFBZ0IsR0FBZSxFQUFFLENBQUM7UUFDbEMsYUFBUSxHQUFlLEVBQUUsQ0FBQztJQUkxQixDQUFDO0lBYkQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNoRyxDQUFDO0lBU0QsZUFBZSxDQUFDLE9BQWU7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7SUFDOUMsQ0FBQztJQUVELGFBQWEsQ0FBQyxRQUFnQjtRQUM1QixRQUFRLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQWlCLEVBQUUsRUFBRSxDQUNoRCxPQUFPLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUN6QyxRQUFRLENBQUMsRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hDLENBQUMsRUFDRCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxDQUN4QyxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUE5Q1ksb0JBQW9CO0lBSmhDLFNBQVMsQ0FBQztRQUNULDBoRUFBNEM7O0tBRTdDLENBQUM7NkNBb0JvQyxjQUFjO0dBbkJ2QyxvQkFBb0IsQ0E4Q2hDO1NBOUNZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdCc7XHJcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHBhZ2VUaXRsZSA9ICdQcm9kdWN0IExpc3QnO1xyXG4gIGltYWdlV2lkdGggPSA1MDtcclxuICBpbWFnZU1hcmdpbiA9IDI7XHJcbiAgc2hvd0ltYWdlID0gZmFsc2U7XHJcbiAgZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gIF9saXN0RmlsdGVyID0gJyc7XHJcbiAgZ2V0IGxpc3RGaWx0ZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9saXN0RmlsdGVyO1xyXG4gIH1cclxuICBzZXQgbGlzdEZpbHRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9saXN0RmlsdGVyID0gdmFsdWU7XHJcbiAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSB0aGlzLmxpc3RGaWx0ZXIgPyB0aGlzLnBlcmZvcm1GaWx0ZXIodGhpcy5saXN0RmlsdGVyKSA6IHRoaXMucHJvZHVjdHM7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJlZFByb2R1Y3RzOiBJUHJvZHVjdFtdID0gW107XHJcbiAgcHJvZHVjdHM6IElQcm9kdWN0W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcclxuXHJcbiAgfVxyXG5cclxuICBvblJhdGluZ0NsaWNrZWQobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhZ2VUaXRsZSA9ICdQcm9kdWN0IExpc3Q6ICcgKyBtZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgcGVyZm9ybUZpbHRlcihmaWx0ZXJCeTogc3RyaW5nKTogSVByb2R1Y3RbXSB7XHJcbiAgICBmaWx0ZXJCeSA9IGZpbHRlckJ5LnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3Q6IElQcm9kdWN0KSA9PlxyXG4gICAgICBwcm9kdWN0LnByb2R1Y3ROYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJCeSkgIT09IC0xKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUltYWdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93SW1hZ2UgPSAhdGhpcy5zaG93SW1hZ2U7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHMoKS5zdWJzY3JpYmUoXHJcbiAgICAgIHByb2R1Y3RzID0+IHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gdGhpcy5wcm9kdWN0cztcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXHJcbiAgICApO1xyXG4gIH1cclxufSJdfQ==