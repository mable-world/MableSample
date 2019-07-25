import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = './api/products/products.json';
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productUrl).pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    ProductService.prototype.getProduct = function (id) {
        return this.getProducts().pipe(map(function (products) { return products.find(function (p) { return p.productId === id; }); }));
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
        return throwError(errorMessage);
    };
    ProductService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductService_Factory() { return new ProductService(i0.ɵɵinject(i1.HttpClient)); }, token: ProductService, providedIn: "root" });
    ProductService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProductService);
    return ProductService;
}());
export { ProductService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFibGUtc2FtcGxlLyIsInNvdXJjZXMiOlsibGliL3Byb2R1Y3RzL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JFLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU90RDtJQUdFLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRjVCLGVBQVUsR0FBRyw4QkFBOEIsQ0FBQztJQUVaLENBQUM7SUFFekMsb0NBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDcEQsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLEVBQ3hELFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzdCLENBQUM7SUFDSixDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLEVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUM1QixHQUFHLENBQUMsVUFBQyxRQUFvQixJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLEtBQUssRUFBRSxFQUFsQixDQUFrQixDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FDdEUsQ0FBQztJQUNKLENBQUM7SUFFTyxvQ0FBVyxHQUFuQixVQUFvQixHQUFzQjtRQUN4QyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxHQUFHLENBQUMsS0FBSyxZQUFZLFVBQVUsRUFBRTtZQUNuQyxZQUFZLEdBQUcsd0JBQXNCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBUyxDQUFDO1NBQzFEO2FBQU07WUFDTCxZQUFZLEdBQUcsMkJBQXlCLEdBQUcsQ0FBQyxNQUFNLDRCQUF1QixHQUFHLENBQUMsT0FBUyxDQUFDO1NBQ3hGO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QixPQUFPLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDOztJQTNCVSxjQUFjO1FBSDFCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7aURBSTBCLFVBQVU7T0FIekIsY0FBYyxDQTRCMUI7eUJBdENEO0NBc0NDLEFBNUJELElBNEJDO1NBNUJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcHJvZHVjdFVybCA9ICcuL2FwaS9wcm9kdWN0cy9wcm9kdWN0cy5qc29uJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0UHJvZHVjdHMoKTogT2JzZXJ2YWJsZTxJUHJvZHVjdFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJUHJvZHVjdFtdPih0aGlzLnByb2R1Y3RVcmwpLnBpcGUoXHJcbiAgICAgIHRhcChkYXRhID0+IGNvbnNvbGUubG9nKCdBbGw6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSkpLFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvZHVjdChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJUHJvZHVjdCB8IHVuZGVmaW5lZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvZHVjdHMoKS5waXBlKFxyXG4gICAgICBtYXAoKHByb2R1Y3RzOiBJUHJvZHVjdFtdKSA9PiBwcm9kdWN0cy5maW5kKHAgPT4gcC5wcm9kdWN0SWQgPT09IGlkKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycjogSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnJztcclxuICAgIGlmIChlcnIuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XHJcbiAgICAgIGVycm9yTWVzc2FnZSA9IGBBbiBlcnJvciBvY2N1cnJlZDogJHtlcnIuZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXJyb3JNZXNzYWdlID0gYFNlcnZlciByZXR1cm5lZCBjb2RlOiAke2Vyci5zdGF0dXN9LCBlcnJvciBtZXNzYWdlIGlzOiAke2Vyci5tZXNzYWdlfWA7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gIH1cclxufSJdfQ==