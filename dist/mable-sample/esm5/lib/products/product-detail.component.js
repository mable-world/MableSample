import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
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
    ProductDetailComponent = tslib_1.__decorate([
        Component({
            template: "<div class='card'\n     *ngIf='product'>\n  <div class='card-header'>\n    {{pageTitle + ': ' + product.productName}}\n  </div>\n\n  <div class='card-body'>\n    <div class='row'>\n      <div class='col-md-8'>\n        <div class='row'>\n          <div class='col-md-4'>Name:</div>\n          <div class='col-md-8'>{{product.productName}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Code:</div>\n          <div class='col-md-8'>{{product.productCode | lowercase }}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Description:</div>\n          <div class='col-md-8'>{{product.description}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Availability:</div>\n          <div class='col-md-8'>{{product.releaseDate}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Price:</div>\n          <div class='col-md-8'>{{product.price|currency:'USD':'symbol'}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>5 Star Rating:</div>\n          <div class='col-md-8'>{{'product.starRating'}}\n          </div>\n        </div>\n      </div>\n\n      <div class='col-md-4'>\n        <img class='center-block img-responsive'\n             [style.width.px]='200'\n             [style.margin.px]='2'\n             [src]='product.imageUrl'\n             [title]='product.productName'>\n      </div>\n    </div>\n  </div>\n\n  <div class='card-footer'>\n    <button class='btn btn-outline-secondary'\n            (click)='onBack()'\n            style='width:80px'>\n      <i class='fa fa-chevron-left'></i> Back\n    </button>\n  </div>\n</div>",
            styles: [""]
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            ProductService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
export { ProductDetailComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFibGUtc2FtcGxlLyIsInNvdXJjZXMiOlsibGliL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU1uRDtJQUtFLGdDQUFvQixLQUFxQixFQUMvQixNQUFjLEVBQ2QsY0FBOEI7UUFGcEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDL0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU54QyxjQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFDN0IsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFNbEIsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRCwyQ0FBVSxHQUFWLFVBQVcsRUFBVTtRQUFyQixpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDMUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsRUFDakMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCx1Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUExQlUsc0JBQXNCO1FBSmxDLFNBQVMsQ0FBQztZQUNULDRxREFBOEM7O1NBRS9DLENBQUM7aURBTTJCLGNBQWM7WUFDdkIsTUFBTTtZQUNFLGNBQWM7T0FQN0Isc0JBQXNCLENBNEJsQztJQUFELDZCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0E1Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdCc7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGFnZVRpdGxlID0gJ1Byb2R1Y3QgRGV0YWlsJztcbiAgZXJyb3JNZXNzYWdlID0gJyc7XG4gIHByb2R1Y3Q6IElQcm9kdWN0IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHBhcmFtID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICBjb25zdCBpZCA9ICtwYXJhbTtcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdChpZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJvZHVjdChpZDogbnVtYmVyKSB7XG4gICAgdGhpcy5wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KGlkKS5zdWJzY3JpYmUoXG4gICAgICBwcm9kdWN0ID0+IHRoaXMucHJvZHVjdCA9IHByb2R1Y3QsXG4gICAgICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuICB9XG5cbiAgb25CYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2R1Y3RzJ10pO1xuICB9XG5cbn0iXX0=